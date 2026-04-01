/**
 * Mollie payment link utilities.
 * Used to generate per-werkbon payment links for WhatsApp messages.
 */

function resolveMollieRedirectUrl() {
  const fromEnv = String(import.meta.env.VITE_MOLLIE_REDIRECT_URL ?? "").trim();
  if (fromEnv) {
    return fromEnv;
  }

  if (typeof window !== "undefined") {
    const origin = String(window.location.origin || "").trim();
    const isLocalhost = /localhost|127\.0\.0\.1/i.test(origin);
    if (origin && !isLocalhost) {
      return origin;
    }
  }

  return "https://mollie.com";
}

/**
 * Calls the Supabase Edge Function that creates a Mollie payment.
 * The Mollie API key lives server-side (function secret), not in frontend code.
 */
export async function createMollieApiLink(
  supabaseClient,
  { totalAmount, factuurnummer, customerName, paymentDays, garageId, completedAppointmentId = "" },
) {
  if (!supabaseClient) {
    throw new Error("Supabase client ontbreekt voor Mollie API call");
  }

  const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
  if (sessionError) {
    throw sessionError;
  }

  const accessToken = String(sessionData?.session?.access_token ?? "").trim();
  if (!accessToken) {
    throw new Error("Je sessie is verlopen. Log opnieuw in en probeer opnieuw.");
  }

  const amountValue = Number(totalAmount || 0).toFixed(2);

  const { data, error } = await supabaseClient.functions.invoke("create-mollie-payment-link", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: {
      amount: amountValue,
      currency: "EUR",
      description: `Factuur ${factuurnummer || "-"} - ${customerName || "Klant"}`,
      paymentDays: Math.max(1, Number(paymentDays) || 14),
      redirectUrl: resolveMollieRedirectUrl(),
      garageId: String(garageId ?? ""),
      accessToken,
      metadata: {
        invoiceNumber: factuurnummer || "",
        customerName: customerName || "",
        garageId: String(garageId ?? ""),
        completedAppointmentId: String(completedAppointmentId ?? ""),
      },
    },
  });

  if (error) {
    const response = error.context;
    if (response && typeof response.json === "function") {
      try {
        const payload = await response.json();
        const details = String(
          payload?.details?.detail ||
          payload?.details?.title ||
          payload?.details?.message ||
          payload?.details ||
          payload?.error ||
          "",
        ).trim();
        if (details) {
          throw new Error(details);
        }
      } catch (parseError) {
        if (parseError instanceof Error && parseError.message) {
          throw parseError;
        }
        // Ignore parse failure and fall through to original error
      }
    }
    throw error;
  }

  const link = String(data?.url ?? "").trim();
  if (!link) {
    throw new Error("Mollie API gaf geen betaal-URL terug");
  }

  return link;
}

/**
 * Generates a payment link based on the garage's method setting.
 *
 * - 'none'   → returns null (no payment link)
 * - 'manual' → uses the garage's own payment_link setting (no API needed)
 * - 'api'    → calls Mollie API through Supabase Edge Function; falls back to manual link on error
 *
 * @param {object|null} garageSettings - Normalized garage object (from garageService)
 * @param {{ totalAmount: number, factuurnummer: string, customerName: string, paymentDays?: number }} params
 * @param {((msg: string) => void)|null} onWarning - Callback for non-fatal warnings shown to the user
 * @param {object|null} supabaseClient - initialized Supabase JS client
 * @returns {Promise<string|null>}
 */
export async function generatePaymentLink(garageSettings, params, onWarning, supabaseClient = null) {
  const method = String(garageSettings?.mollieMethod || "none");
  const days = Math.max(1, parseInt(String(garageSettings?.paymentDays ?? params?.paymentDays ?? 14), 10) || 14);
  const manualLink = String(garageSettings?.paymentLink ?? "").trim();

  if (method === "none") {
    if (onWarning) {
      onWarning("Betaallink staat uit in Instellingen (kies handmatig of API)");
    }
    return null;
  }

  if (method === "manual") {
    if (!manualLink && onWarning) {
      onWarning("Geen handmatige betaallink ingesteld");
    }
    return manualLink;
  }

  if (method === "api") {
    try {
      return await createMollieApiLink(
        supabaseClient,
        {
          totalAmount: params.totalAmount,
          factuurnummer: params.factuurnummer,
          customerName: params.customerName,
          paymentDays: days,
          garageId: String(garageSettings?.id ?? ""),
          completedAppointmentId: String(params?.completedAppointmentId ?? params?.invoiceId ?? ""),
        },
      );
    } catch (error) {
      if (manualLink) {
        if (onWarning) {
          onWarning("Mollie API niet bereikbaar, handmatige link gebruikt");
        }
        return manualLink;
      }

      if (onWarning) {
        const details = String(error?.message || error?.details || "onbekende fout");
        onWarning(`Mollie API mislukt en geen handmatige betaallink ingesteld (${details})`);
      }
      return null;
    }
  }

  return null;
}
