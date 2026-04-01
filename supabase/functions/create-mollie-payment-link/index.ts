// @ts-nocheck
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-api-version",
  "Access-Control-Max-Age": "86400",
};

type CreatePaymentBody = {
  amount?: string;
  currency?: string;
  description?: string;
  paymentDays?: number;
  garageId?: string;
  redirectUrl?: string;
  accessToken?: string;
  metadata?: Record<string, unknown>;
};

function jsonResponse(payload: unknown, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  let body: CreatePaymentBody;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return jsonResponse({ error: "Supabase server env vars missing" }, 500);
  }

  const authHeader = req.headers.get("Authorization") ?? "";
  const headerJwt = authHeader.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length).trim()
    : "";
  const bodyJwt = String(body.accessToken ?? "").trim();

  const tokenCandidates = [bodyJwt, headerJwt].filter(Boolean);
  if (tokenCandidates.length === 0) {
    console.error("[create-mollie-payment-link] Missing JWT in request", {
      hasAuthHeader: Boolean(authHeader),
      hasBodyToken: Boolean(bodyJwt),
    });
    return jsonResponse({
      error: "Missing user token",
      details: "No usable JWT found in Authorization header or body.accessToken",
    }, 401);
  }

  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  let user = null;
  let lastUserError: unknown = null;

  for (const token of tokenCandidates) {
    const {
      data: { user: candidateUser },
      error: candidateError,
    } = await supabaseAdmin.auth.getUser(token);

    if (!candidateError && candidateUser?.id) {
      user = candidateUser;
      break;
    }

    lastUserError = candidateError;
  }

  if (!user?.id) {
    console.error("[create-mollie-payment-link] JWT validation failed", {
      details: (lastUserError as { message?: string } | null)?.message ?? "unknown",
      hasAuthHeaderToken: Boolean(headerJwt),
      hasBodyToken: Boolean(bodyJwt),
    });
    return jsonResponse({
      error: "Unauthorized",
      details: (lastUserError as { message?: string } | null)?.message ?? "JWT could not be validated",
    }, 401);
  }

  const amountValue = String(body.amount ?? "0").trim();
  const amountNumeric = Number(amountValue);
  if (!Number.isFinite(amountNumeric) || amountNumeric <= 0) {
    return jsonResponse({ error: "Invalid amount" }, 400);
  }

  const currency = String(body.currency ?? "EUR").trim() || "EUR";
  const description = String(body.description ?? "Werkbon betaling").slice(0, 255);
  const paymentDays = Math.max(1, Math.floor(Number(body.paymentDays ?? 14) || 14));
  const redirectUrl = String(body.redirectUrl ?? "https://example.com").trim() || "https://example.com";
  const garageId = String(body.garageId ?? "").trim();
  if (!garageId) {
    return jsonResponse({ error: "garageId is required" }, 400);
  }

  const { data: garageRow, error: garageError } = await supabaseAdmin
    .from("garages")
    .select("id, user_id, mollie_api_key")
    .eq("id", garageId)
    .maybeSingle();

  if (garageError || !garageRow) {
    console.error("[create-mollie-payment-link] Garage lookup failed", {
      garageId,
      garageError: garageError?.message ?? null,
      found: Boolean(garageRow),
    });
    return jsonResponse({ error: "Garage not found" }, 404);
  }

  if (String(garageRow.user_id ?? "") !== String(user.id)) {
    console.error("[create-mollie-payment-link] Garage ownership mismatch", {
      garageId,
      garageOwner: String(garageRow.user_id ?? ""),
      requester: String(user.id ?? ""),
    });
    return jsonResponse({ error: "Forbidden for this garage" }, 403);
  }

  const mollieApiKey = String(garageRow.mollie_api_key ?? "").trim();
  if (!mollieApiKey) {
    console.error("[create-mollie-payment-link] Missing Mollie API key", { garageId });
    return jsonResponse({ error: "Mollie API key not configured for this garage" }, 400);
  }

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + paymentDays);
  const expiresAtIso = expiresAt.toISOString();

  const molliePayload = {
    amount: {
      currency,
      value: amountNumeric.toFixed(2),
    },
    description,
    redirectUrl,
    metadata: body.metadata ?? {},
  };

  const response = await fetch("https://api.mollie.com/v2/payments", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${mollieApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(molliePayload),
  });

  const text = await response.text();
  let data: Record<string, unknown> = {};
  try {
    data = JSON.parse(text);
  } catch {
    data = {};
  }

  if (!response.ok) {
    console.error("[create-mollie-payment-link] Mollie API request failed", {
      mollieStatus: response.status,
      mollieResponse: data,
      garageId,
    });
    return jsonResponse(
      {
        error: "Mollie API request failed",
        status: response.status,
        details: data,
      },
      502,
    );
  }

  const links = (data._links ?? {}) as Record<string, unknown>;
  const checkout = (links.checkout ?? {}) as Record<string, unknown>;
  const url = String(checkout.href ?? "").trim();

  if (!url) {
    return jsonResponse({ error: "Mollie returned no checkout URL", details: data }, 502);
  }

  return jsonResponse({
    url,
    id: data.id ?? null,
    expiresAt: data.expiresAt ?? expiresAtIso,
  });
});
