// @ts-nocheck
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-api-version",
  "Access-Control-Max-Age": "86400",
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

async function parsePaymentId(req: Request) {
  const contentType = String(req.headers.get("content-type") ?? "").toLowerCase();

  // Mollie webhook commonly sends: application/x-www-form-urlencoded with body "id=tr_xxx"
  if (contentType.includes("application/x-www-form-urlencoded")) {
    const raw = await req.text();
    const params = new URLSearchParams(raw);
    return String(params.get("id") ?? "").trim();
  }

  if (contentType.includes("application/json")) {
    try {
      const body = await req.json();
      return String(body?.id ?? "").trim();
    } catch {
      return "";
    }
  }

  const fallbackRaw = await req.text();
  const fallbackParams = new URLSearchParams(fallbackRaw);
  return String(fallbackParams.get("id") ?? "").trim();
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const url = new URL(req.url);
  const garageId = String(url.searchParams.get("garageId") ?? "").trim();
  if (!garageId) {
    return jsonResponse({ error: "Missing garageId query parameter" }, 400);
  }

  const paymentId = await parsePaymentId(req);
  if (!paymentId) {
    return jsonResponse({ error: "Missing Mollie payment id in webhook payload" }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return jsonResponse({ error: "Supabase server env vars missing" }, 500);
  }

  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: garageRow, error: garageError } = await supabaseAdmin
    .from("garages")
    .select("id, mollie_api_key")
    .eq("id", garageId)
    .maybeSingle();

  if (garageError || !garageRow) {
    return jsonResponse({ error: "Garage not found" }, 404);
  }

  const mollieApiKey = String(garageRow.mollie_api_key ?? "").trim();
  if (!mollieApiKey) {
    return jsonResponse({ error: "Mollie API key not configured for this garage" }, 400);
  }

  const mollieResponse = await fetch(`https://api.mollie.com/v2/payments/${encodeURIComponent(paymentId)}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${mollieApiKey}`,
      "Content-Type": "application/json",
    },
  });

  const mollieText = await mollieResponse.text();
  let molliePayment: Record<string, unknown> = {};
  try {
    molliePayment = JSON.parse(mollieText);
  } catch {
    molliePayment = {};
  }

  if (!mollieResponse.ok) {
    return jsonResponse({
      error: "Failed to fetch Mollie payment",
      status: mollieResponse.status,
      details: molliePayment,
    }, 502);
  }

  const status = String(molliePayment?.status ?? "").toLowerCase();
  if (status !== "paid") {
    // Webhook may arrive for open/pending states; acknowledge to avoid retries.
    return jsonResponse({ ok: true, ignored: true, status });
  }

  const metadata = (molliePayment?.metadata ?? {}) as Record<string, unknown>;
  const completedAppointmentId = String(metadata?.completedAppointmentId ?? "").trim();
  if (!completedAppointmentId) {
    return jsonResponse({ ok: true, ignored: true, reason: "missing completedAppointmentId metadata" });
  }

  const { data: row, error: rowError } = await supabaseAdmin
    .from("completed_appointments")
    .select("id, garage_id, completion_notes")
    .eq("id", completedAppointmentId)
    .eq("garage_id", garageId)
    .maybeSingle();

  if (rowError || !row) {
    return jsonResponse({ ok: true, ignored: true, reason: "completed appointment not found" });
  }

  let notes: Record<string, unknown> = {};
  try {
    notes = row.completion_notes ? JSON.parse(String(row.completion_notes)) : {};
  } catch {
    notes = {};
  }

  const nextNotes = {
    ...notes,
    status: "paid",
    paid_at: String(molliePayment?.paidAt ?? new Date().toISOString()),
    payment_method: "mollie",
    payment_status: "paid",
    mollie_payment_id: String(molliePayment?.id ?? paymentId),
    payment_link: String((molliePayment?._links as Record<string, unknown>)?.checkout?.href ?? notes?.payment_link ?? "") || null,
    payment_link_sent_at: notes?.payment_link_sent_at ?? null,
    updated_at: new Date().toISOString(),
  };

  const { error: updateError } = await supabaseAdmin
    .from("completed_appointments")
    .update({ completion_notes: JSON.stringify(nextNotes) })
    .eq("id", completedAppointmentId)
    .eq("garage_id", garageId);

  if (updateError) {
    return jsonResponse({ error: "Failed to update completed appointment", details: updateError.message }, 500);
  }

  return jsonResponse({ ok: true, updated: true, completedAppointmentId, status: "paid" });
});
