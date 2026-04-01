import { createClient } from "@supabase/supabase-js";
import { createAppShell } from "../components/appShell.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function maskMollieApiKey(value) {
  const raw = String(value ?? "").trim();
  if (!raw) {
    return "";
  }

  const prefix = raw.startsWith("test_") ? "test_" : raw.startsWith("live_") ? "live_" : "";
  const tail = raw.slice(-4);
  return `${prefix}****${tail}`;
}

function isValidHttpUrl(value) {
  const raw = String(value ?? "").trim();
  if (!raw) {
    return false;
  }

  try {
    const parsed = new URL(raw);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function normalizeGarageSettings(row) {
  return {
    mollieMethod: String(row?.mollie_method ?? "none"),
    paymentDays: Math.max(1, parseInt(String(row?.payment_days ?? 14), 10) || 14),
    paymentLink: String(row?.payment_link ?? ""),
    pendingApiToken: "",
    savedApiKeyMasked: maskMollieApiKey(row?.mollie_api_key ?? ""),
  };
}

function settingsMarkup(settings) {
  const showManualLink = settings.mollieMethod === "manual";
  const showApiKeyField = settings.mollieMethod === "api";
  const methodHelpText =
    settings.mollieMethod === "api"
      ? "Automatisch per werkbon een unieke Mollie-betaallink maken (aanbevolen)."
      : settings.mollieMethod === "manual"
        ? "Gebruik 1 vaste betaallink voor alle facturen."
        : "Er wordt geen betaallink toegevoegd in WhatsApp-berichten.";
  return `
    <section class="settings-page">
      <div id="settingsNotice" class="werkbon-notice" hidden aria-live="polite"></div>

      <article class="settings-panel">
        <h2>Betalingslink instellingen</h2>
        <p>Kies hoe klanten betalen vanuit WhatsApp. Voor automatisch bedrag per werkbon: kies <strong>Mollie API</strong>.</p>

        <form id="settingsForm" novalidate>
          <div class="settings-grid">
            <div class="settings-field">
              <label for="mollieMethod">Betaalmethode</label>
              <select id="mollieMethod" name="mollieMethod">
                <option value="api" ${settings.mollieMethod === "api" ? "selected" : ""}>Mollie API (automatisch per werkbon)</option>
                <option value="manual" ${settings.mollieMethod === "manual" ? "selected" : ""}>Mollie betaallink (vast, handmatig)</option>
                <option value="none" ${settings.mollieMethod === "none" ? "selected" : ""}>Geen betaallink</option>
              </select>
              <p class="settings-help">${methodHelpText}</p>
            </div>

            <div class="settings-field" id="manualPaymentLinkField" ${showManualLink ? "" : "hidden"}>
              <label for="paymentLink">Vaste Mollie betaallink</label>
              <input
                id="paymentLink"
                name="paymentLink"
                type="url"
                autocomplete="off"
                placeholder="https://www.mollie.com/payscreen/..."
                value="${showManualLink ? escapeHtml(settings.paymentLink) : ""}"
              />
              <p class="settings-help">Alle klanten krijgen dezelfde link. Gebruik API-modus voor automatische bedragen.</p>
            </div>

            <div class="settings-field" ${showApiKeyField ? "" : "hidden"}>
              <label for="mollieApiKey">Mollie API sleutel (privé)</label>
              <input
                id="mollieApiKey"
                name="mollieApiKeyNew"
                type="password"
                autocomplete="new-password"
                autocapitalize="off"
                spellcheck="false"
                placeholder="test_xxx... of live_xxx..."
                value=""
              />
              ${settings.savedApiKeyMasked ? `<p class="settings-help">Huidige sleutel: <strong>${escapeHtml(settings.savedApiKeyMasked)}</strong></p>` : ""}
              <p class="settings-help">Leeg laten = huidige sleutel behouden. Gebruik <strong>test_</strong> voor testen.</p>
            </div>

            <div class="settings-field">
              <label for="paymentDays">Standaard betaaltermijn</label>
              <div class="settings-days-wrap">
                <input id="paymentDays" name="paymentDays" type="number" min="1" step="1" value="${escapeHtml(String(settings.paymentDays))}" />
                <span>dagen</span>
              </div>
              <p class="settings-help">Deze termijn wordt standaard in het WhatsApp-bericht gezet.</p>
            </div>
          </div>

          <div class="settings-actions">
            <button class="button" id="saveSettingsButton" type="submit">Instellingen opslaan</button>
          </div>
        </form>
      </article>
    </section>
  `;
}

export async function mountSettingsPage(rootElement) {
  if (!rootElement) {
    return;
  }

  const authState = await ensureAuthenticated();
  if (!authState) {
    return;
  }

  if (!authState.isAdmin && !authState.activeGarage) {
    rootElement.innerHTML = `
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is not mapped to a garage.</p>
      </section>
    `;
    return;
  }

  applyGarageBranding(authState.activeGarage);

  const { shell, contentArea } = createAppShell({
    activePage: "settings",
    title: "Instellingen",
    headerNote: "Beheer je betalingslink instellingen",
    userEmail: authState.user.email,
    onLogout: logoutAndRedirect,
    garage: authState.activeGarage,
    isAdmin: authState.isAdmin,
  });

  rootElement.replaceChildren(shell);

  let garageSettings = normalizeGarageSettings(authState.activeGarage);

  if (supabase && authState.activeGarage?.id) {
    try {
      const { data } = await supabase
        .from("garages")
        .select("*")
        .eq("id", authState.activeGarage.id)
        .maybeSingle();
      if (data) {
        garageSettings = normalizeGarageSettings(data);
      }
    } catch {
      // Keep local fallback settings
    }
  }

  const render = () => {
    contentArea.innerHTML = settingsMarkup(garageSettings);
  };

  const setNotice = (message, isError = false) => {
    const notice = contentArea.querySelector("#settingsNotice");
    if (!(notice instanceof HTMLElement)) {
      return;
    }
    notice.textContent = message;
    notice.hidden = !message;
    notice.classList.toggle("is-error", Boolean(isError));
    if (message) {
      window.setTimeout(() => {
        notice.hidden = true;
        notice.textContent = "";
      }, 2800);
    }
  };

  render();

  contentArea.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.id === "mollieMethod" && target instanceof HTMLSelectElement) {
      garageSettings.mollieMethod = target.value;
      if (garageSettings.mollieMethod !== "manual") {
        garageSettings.paymentLink = "";
      }
      render();
      return;
    }

    if (target.id === "paymentDays" && target instanceof HTMLInputElement) {
      garageSettings.paymentDays = Math.max(1, parseInt(String(target.value || "14"), 10) || 14);
      return;
    }

    if (target.id === "paymentLink" && target instanceof HTMLInputElement) {
      garageSettings.paymentLink = target.value.trim();
      return;
    }

    if (target.id === "mollieApiKey" && target instanceof HTMLInputElement) {
      garageSettings.pendingApiToken = target.value.trim();
    }
  });

  contentArea.addEventListener("submit", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLFormElement) || target.id !== "settingsForm") {
      return;
    }
    event.preventDefault();

    if (!supabase || !authState.activeGarage?.id) {
      setNotice("Supabase is niet beschikbaar", true);
      return;
    }

    const methodInput = contentArea.querySelector("#mollieMethod");
    const daysInput = contentArea.querySelector("#paymentDays");
    const paymentLinkInput = contentArea.querySelector("#paymentLink");
    const mollieApiKeyInput = contentArea.querySelector("#mollieApiKey");

    if (methodInput instanceof HTMLSelectElement) {
      garageSettings.mollieMethod = methodInput.value;
    }
    if (daysInput instanceof HTMLInputElement) {
      garageSettings.paymentDays = Math.max(1, parseInt(String(daysInput.value || "14"), 10) || 14);
    }
    if (paymentLinkInput instanceof HTMLInputElement) {
      garageSettings.paymentLink = paymentLinkInput.value.trim();
    }
    if (mollieApiKeyInput instanceof HTMLInputElement) {
      garageSettings.pendingApiToken = mollieApiKeyInput.value.trim();
    }

    if (garageSettings.mollieMethod === "manual" && !isValidHttpUrl(garageSettings.paymentLink)) {
      setNotice("Vul een geldige Mollie betaallink in (https://...)", true);
      return;
    }

    const payload = {
      mollie_method: garageSettings.mollieMethod,
      payment_days: Math.max(1, parseInt(String(garageSettings.paymentDays || 14), 10) || 14),
      payment_link: garageSettings.mollieMethod === "manual" ? (garageSettings.paymentLink || null) : null,
    };

    if (garageSettings.mollieMethod === "api" && garageSettings.pendingApiToken) {
      payload.mollie_api_key = garageSettings.pendingApiToken;
    }

    try {
      const { error } = await supabase
        .from("garages")
        .update(payload)
        .eq("id", authState.activeGarage.id);

      if (error) {
        throw error;
      }

      if (garageSettings.pendingApiToken) {
        garageSettings.savedApiKeyMasked = maskMollieApiKey(garageSettings.pendingApiToken);
      }
      garageSettings.pendingApiToken = "";
      if (mollieApiKeyInput instanceof HTMLInputElement) {
        mollieApiKeyInput.value = "";
      }
      setNotice("Instellingen opgeslagen ✓", false);
    } catch (error) {
      const errorMessage = String(error?.message || error?.details || "Onbekende fout");
      console.error("Settings save failed:", error);
      setNotice(`Opslaan mislukt: ${errorMessage}`, true);
    }
  });
}
