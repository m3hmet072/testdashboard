import { createAppShell } from "../components/appShell.js";
import { createClient } from "@supabase/supabase-js";
import { getBookings } from "../services/bookingService.js";
import { fetchCompletedAppointmentsByGarageIds } from "../services/supabaseClient.js";
import { summarizeEmailInbox } from "../services/emailService.js";
import { fetchVehicleByLicensePlate, normalizeLicensePlate } from "../services/rdwService.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";
import { showConfirmDialog } from "../utils/confirmDialog.js";
import { pageUrl } from "../utils/paths.js";
import { generatePaymentLink } from "../services/mollieService.js";


const STATUS_META = {
  pending: {
    label: "Openstaand",
    className: "werkbon-status-openstaand",
  },
  draft: {
    label: "Draft",
    className: "werkbon-status-draft",
  },
  sent: {
    label: "Sent",
    className: "werkbon-status-sent",
  },
  paid: {
    label: "Paid",
    className: "werkbon-status-paid",
  },
};


const SERVICE_LABEL_BY_KEY = {
  apk: "APK",
  banden: "Banden",
  onderhoud: "Onderhoud",
  airco: "Airco",
  occasions: "Occasions",
  brakes: "Brakes",
  other: "Overige",
};

const SERVICE_KEY_ALIASES = new Map([
  ["apk", "apk"],
  ["apk keuring", "apk"],
  ["keuring", "apk"],
  ["banden", "banden"],
  ["band", "banden"],
  ["tire", "banden"],
  ["tires", "banden"],
  ["airco", "airco"],
  ["ac", "airco"],
  ["occasion", "occasions"],
  ["occasions", "occasions"],
  ["onderhoud", "onderhoud"],
  ["maintenance", "onderhoud"],
  ["service", "onderhoud"],
  ["brakes", "brakes"],
  ["brake", "brakes"],
  ["remmen", "brakes"],
  ["overig", "other"],
  ["overige", "other"],
  ["other", "other"],
]);

const WERKBON_CREATE_STEPS = ["Voertuig", "Klant", "Onderdelen", "Arbeid", "Overzicht"];
const WERKBON_PAYMENT_METHODS = ["contant", "iDEAL", "Mollie"];
const WERKBON_QUICK_PARTS = [
  { label: "APK keuring", name: "APK keuring", price: 45 },
  { label: "Banden", name: "Banden", price: 120 },
  { label: "Remblokken voor", name: "Remblokken voor", price: 85 },
  { label: "Remblokken achter", name: "Remblokken achter", price: 75 },
  { label: "Olie", name: "Olie", price: 35 },
  { label: "Filters", name: "Filters", price: 28 },
  { label: "Accu", name: "Accu", price: 95 },
  { label: "Overige", name: "Overige", price: 0 },
];

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

function createEmptyWerkbonState() {
  return {
    voertuig: {},
    klant: {},
    onderdelen: [],
    arbeid: { enabled: false, uren: 0, minuten: 0, tarief: 65 },
    btw: 21,
  };
}

function toPositiveNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function formatKentekenInput(value) {
  const normalized = normalizeLicensePlate(value).slice(0, 6);
  if (!normalized) {
    return "";
  }
  return normalized.replace(/(.{2})(?=.)/g, "$1-");
}

function hasWerkbonDraftData(state) {
  const kenteken = String(state?.voertuig?.kenteken ?? "").trim();
  const customerFields = [
    state?.klant?.naam,
    state?.klant?.telefoon,
    state?.klant?.email,
    state?.klant?.omschrijving,
  ].some((value) => String(value ?? "").trim());
  const hasOnderdelen = Array.isArray(state?.onderdelen) && state.onderdelen.some((row) => String(row?.naam ?? "").trim() || toPositiveNumber(row?.aantal) > 0 || toPositiveNumber(row?.prijs) > 0);
  const arbeidMinutes = toPositiveNumber(state?.arbeid?.uren) * 60 + toPositiveNumber(state?.arbeid?.minuten);
  return Boolean(kenteken || customerFields || hasOnderdelen || arbeidMinutes > 0);
}

function computeWerkbonTotals(state) {
  const onderdelenRows = (Array.isArray(state.onderdelen) ? state.onderdelen : []).map((row) => {
    const aantal = toPositiveNumber(row?.aantal);
    const prijs = toPositiveNumber(row?.prijs);
    const naam = String(row?.naam ?? "").trim() || "Onderdeel";
    return {
      naam,
      aantal,
      prijs,
      totaal: roundCurrency(aantal * prijs),
    };
  });

  const onderdelenSubtotaal = roundCurrency(onderdelenRows.reduce((sum, row) => sum + row.totaal, 0));
  const labourHours = toPositiveNumber(state.arbeid?.uren) + toPositiveNumber(state.arbeid?.minuten) / 60;
  const labourRate = toPositiveNumber(state.arbeid?.tarief, 65);
  const arbeidTotaal = state.arbeid?.enabled ? roundCurrency(labourHours * labourRate) : 0;
  const subtotaal = roundCurrency(onderdelenSubtotaal + arbeidTotaal);
  const vatRate = toPositiveNumber(state.btw) > 0 ? 0.21 : 0;
  const btwBedrag = roundCurrency(subtotaal * vatRate);
  const totaal = roundCurrency(subtotaal + btwBedrag);

  return {
    onderdelenRows,
    onderdelenSubtotaal,
    labourHours,
    labourRate,
    arbeidTotaal,
    subtotaal,
    btwBedrag,
    totaal,
  };
}

function overviewRow(label, value) {
  return `<div class="werkbon-create-overview-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function calculationRowMarkup(key, label, value) {
  return `<div class="werkbon-create-overview-row"><span>${escapeHtml(label)}</span><strong data-create-total="${escapeHtml(key)}">${escapeHtml(value)}</strong></div>`;
}

function werkbonCreateStepNavigationMarkup(step) {
  return WERKBON_CREATE_STEPS.map((label, index) => {
    const stepNumber = index + 1;
    const className = stepNumber === step ? "is-active" : stepNumber < step ? "is-done" : "";
    const separatorClass = stepNumber < step ? "is-done" : "";
    const separator = index < WERKBON_CREATE_STEPS.length - 1
      ? `<span class="werkbon-create-step-separator ${separatorClass}" aria-hidden="true"></span>`
      : "";
    return `<button class="werkbon-create-step ${className}" type="button" data-create-action="jump-step" data-step="${stepNumber}"><span>${stepNumber}.</span>${escapeHtml(label)}</button>${separator}`;
  }).join("");
}

function werkbonCreateStepContentMarkup({
  step,
  state,
  rdwStatus,
}) {
  const totals = computeWerkbonTotals(state);
  const voertuigTitle = String(state.voertuig?.title ?? "").trim();
  const voertuigBouwjaar = String(state.voertuig?.buildYear ?? "").trim();
  const voertuigApk = String(state.voertuig?.apkExpiryDate ?? "").trim();
  const voertuigPreviewTitle = voertuigBouwjaar
    ? `${voertuigTitle || "Voertuig gegevens"} (${voertuigBouwjaar})`
    : voertuigTitle || "Voertuig gegevens";

  const rdwStateMarkup = rdwStatus === "loading"
    ? `<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Kenteken controleren...</p>`
    : rdwStatus === "success"
      ? `<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-success">Kenteken gevonden</p>`
      : rdwStatus === "error"
        ? `<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-error">Kenteken niet gevonden</p>`
        : `<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Typ kenteken om te zoeken</p>`;

  if (step === 1) {
    return `
      <div class="werkbon-create-body-step">
        <label class="werkbon-create-appointment-field">
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text" inputmode="text" maxlength="8" data-create-field="kenteken" value="${escapeHtml(String(state.voertuig?.kenteken ?? ""))}" placeholder="eg. 12-ABC-D1" required />
          ${rdwStateMarkup}
        </label>
        <div class="vehicle-preview-card werkbon-create-vehicle-preview" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${escapeHtml(voertuigPreviewTitle)}</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">${escapeHtml(voertuigBouwjaar)}</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">${escapeHtml(voertuigApk)}</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">${escapeHtml(String(state.voertuig?.color ?? ""))}</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">${escapeHtml(String(state.voertuig?.fuel ?? ""))}</strong></span>
          </div>
        </div>
      </div>
    `;
  }

  if (step === 2) {
    return `
      <div class="werkbon-create-body-step">
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input type="text" data-klant-field="naam" value="${escapeHtml(String(state.klant?.naam ?? ""))}" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" />
          </label>
          <label>
            Phone number
            <input type="tel" data-klant-field="telefoon" value="${escapeHtml(String(state.klant?.telefoon ?? ""))}" autocomplete="tel" placeholder="eg. 0624987172" />
          </label>
        </div>
        <label class="werkbon-create-appointment-field">
          Email
          <input type="email" data-klant-field="email" value="${escapeHtml(String(state.klant?.email ?? ""))}" autocomplete="email" placeholder="eg. klant@email.com" />
        </label>
        <label class="werkbon-create-appointment-field">
          Omschrijving
          <textarea rows="4" data-klant-field="omschrijving" placeholder="Optioneel">${escapeHtml(String(state.klant?.omschrijving ?? ""))}</textarea>
        </label>
      </div>
    `;
  }

  if (step === 3) {
    return `
      <div class="werkbon-create-body-step werkbon-create-parts-step">
        <div class="werkbon-create-section-copy">
          <label class="werkbon-create-section-title">Onderdelen</label>
          <p class="werkbon-create-section-subtitle">Voeg onderdelen en materialen toe aan de werkbon</p>
        </div>
        <div class="werkbon-create-quick-parts">
          ${WERKBON_QUICK_PARTS.map((item) => `<button class="werkbon-chip-button" type="button" data-create-action="quick-part" data-part-name="${escapeHtml(item.name)}" data-part-price="${escapeHtml(String(item.price))}">+ ${escapeHtml(item.label)}</button>`).join("")}
        </div>
        ${state.onderdelen.length
          ? `
            <div class="werkbon-create-parts-panel">
              <div class="werkbon-create-parts-header" role="presentation">
                <div>Omschrijving</div>
                <div>Prijs</div>
                <div>Aantal</div>
                <div>Totaal</div>
                <div></div>
              </div>
              <div class="werkbon-create-parts-list">
                ${state.onderdelen.map((item, index) => `
                  <div class="werkbon-create-part-card">
                    <div class="werkbon-part-cell werkbon-part-cell-name">
                      <input type="text" class="werkbon-part-input" data-part-field="naam" data-part-index="${index}" value="${escapeHtml(String(item.naam ?? ""))}" placeholder="Onderdeel naam" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-price">
                      <div class="werkbon-currency-input">
                        <span class="werkbon-currency-symbol">€</span>
                        <input type="number" class="werkbon-part-input werkbon-part-input-price" min="0" step="0.01" data-part-field="prijs" data-part-index="${index}" value="${escapeHtml(String(item.prijs ?? 0))}" />
                      </div>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-quantity">
                      <input type="number" class="werkbon-part-input" min="1" step="1" data-part-field="aantal" data-part-index="${index}" value="${escapeHtml(String(item.aantal ?? 1))}" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-total">
                      <strong data-part-total-index="${index}">${escapeHtml(formatCurrency(roundCurrency(toPositiveNumber(item.aantal, 1) * toPositiveNumber(item.prijs))))}</strong>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-remove">
                      <button class="werkbon-remove-button" type="button" data-create-action="remove-part" data-part-index="${index}" aria-label="Verwijder onderdeel" title="Verwijder">
                        <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                          <path d="M5 5l10 10M15 5L5 15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `
          : ``
        }
        <button class="werkbon-add-part-button" type="button" data-create-action="add-manual-part">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M10 4v12M4 10h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
          </svg>
          <span>Onderdeel toevoegen</span>
        </button>
        <div class="werkbon-create-parts-subtotal">
          <span>Subtotaal onderdelen</span>
          <strong data-parts-subtotal-value="true">${escapeHtml(formatCurrency(totals.onderdelenSubtotaal))}</strong>
        </div>
      </div>
    `;
  }

  if (step === 4) {
    return `
      <div class="werkbon-create-body-step werkbon-create-grid-two">
        <label class="werkbon-create-toggle">
          <input type="checkbox" data-arbeid-field="enabled" ${state.arbeid.enabled ? "checked" : ""} />
          <span>Arbeid inschakelen</span>
        </label>
        <label class="werkbon-create-field"><span>Uren</span><input type="number" min="0" step="1" data-arbeid-field="uren" value="${escapeHtml(String(state.arbeid.uren))}" ${state.arbeid.enabled ? "" : "disabled"} /></label>
        <label class="werkbon-create-field"><span>Minuten</span><input type="number" min="0" max="59" step="1" data-arbeid-field="minuten" value="${escapeHtml(String(state.arbeid.minuten))}" ${state.arbeid.enabled ? "" : "disabled"} /></label>
        <label class="werkbon-create-field"><span>Tarief p/u</span><input type="number" min="0" step="0.01" data-arbeid-field="tarief" value="${escapeHtml(String(state.arbeid.tarief))}" ${state.arbeid.enabled ? "" : "disabled"} /></label>
        <label class="werkbon-create-field"><span>BTW</span>
          <select data-create-field="btw">
            <option value="21" ${toPositiveNumber(state.btw) > 0 ? "selected" : ""}>21%</option>
            <option value="0" ${toPositiveNumber(state.btw) === 0 ? "selected" : ""}>Geen BTW</option>
          </select>
        </label>
        <div class="werkbon-create-calculation-card">
          ${calculationRowMarkup("arbeid", "Arbeid", formatCurrency(totals.arbeidTotaal))}
          ${calculationRowMarkup("subtotaal", "Subtotaal", formatCurrency(totals.subtotaal))}
          ${calculationRowMarkup("btw", "BTW", formatCurrency(totals.btwBedrag))}
          ${calculationRowMarkup("totaal", "Totaal", formatCurrency(totals.totaal))}
        </div>
      </div>
    `;
  }

  return `
    <div class="werkbon-create-body-step werkbon-create-overview">
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Voertuig</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="1">Bewerken</button></div>
        ${overviewRow("Kenteken", String(state.voertuig?.kenteken ?? "-"))}
        ${overviewRow("Voertuig", voertuigTitle || "-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Klant</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="2">Bewerken</button></div>
        ${overviewRow("Naam", String(state.klant?.naam ?? "-") || "-")}
        ${overviewRow("Email", String(state.klant?.email ?? "-") || "-")}
        ${overviewRow("Telefoon", String(state.klant?.telefoon ?? "-") || "-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Onderdelen / Arbeid</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="3">Bewerken</button></div>
        ${overviewRow("Onderdelen", formatCurrency(totals.onderdelenSubtotaal))}
        ${overviewRow("Arbeid", formatCurrency(totals.arbeidTotaal))}
        ${overviewRow("BTW", formatCurrency(totals.btwBedrag))}
        ${overviewRow("Totaal", formatCurrency(totals.totaal))}
      </div>
    </div>
  `;
}

async function ensureJsPdfFromCdn() {
  if (window.jspdf?.jsPDF) {
    return window.jspdf.jsPDF;
  }

  await new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-js-pdf-cdn="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Kon jsPDF niet laden.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js";
    script.async = true;
    script.dataset.jsPdfCdn = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Kon jsPDF niet laden."));
    document.head.append(script);
  });

  if (!window.jspdf?.jsPDF) {
    throw new Error("jsPDF is niet beschikbaar.");
  }

  return window.jspdf.jsPDF;
}

function fallbackVehiclePreview(licensePlate = "") {
  const normalized = normalizeLicensePlate(licensePlate);
  return {
    title: normalized || "Voertuig",
    buildYear: "",
  };
}

function splitServiceValues(service) {
  const raw = String(service || "").trim();
  if (!raw) {
    return ["other"];
  }
  const parts = raw
    .split(raw.includes(",") ? /,/g : /\+|\/|&| and /gi)
    .map((item) => item.trim())
    .filter(Boolean);
  return parts.length ? parts : [raw];
}

function normalizeServiceKey(token) {
  return SERVICE_KEY_ALIASES.get(String(token || "").trim().toLowerCase()) || "other";
}

function resolveServiceChip(rawToken) {
  const token = String(rawToken ?? "").trim();
  if (!token) {
    return { key: "other", label: SERVICE_LABEL_BY_KEY.other };
  }

  const normalizedToken = token.toLowerCase();
  const containsMap = [
    { probe: "apk", key: "apk" },
    { probe: "band", key: "banden" },
    { probe: "airco", key: "airco" },
    { probe: "occasion", key: "occasions" },
    { probe: "brake", key: "brakes" },
    { probe: "onderhoud", key: "onderhoud" },
    { probe: "service", key: "onderhoud" },
    { probe: "overig", key: "other" },
  ];

  const directKey = normalizeServiceKey(token);
  let key = directKey;
  if (directKey === "other") {
    const containsMatch = containsMap.find((entry) => normalizedToken.includes(entry.probe));
    if (containsMatch) {
      key = containsMatch.key;
    }
  }

  // Keep user-entered custom text, but style it as "other".
  if (key === "other" && !["other", "overig", "overige"].includes(normalizedToken)) {
    return { key, label: token };
  }

  return { key, label: SERVICE_LABEL_BY_KEY[key] ?? SERVICE_LABEL_BY_KEY.other };
}

function deriveServiceTypesFromWerkbonState(state) {
  const rows = Array.isArray(state?.onderdelen) ? state.onderdelen : [];
  const seen = new Set();
  const values = [];

  for (const row of rows) {
    const rawName = String(row?.naam ?? "").trim();
    if (!rawName) {
      continue;
    }
    const chip = resolveServiceChip(rawName);
    const dedupeKey = `${chip.key}:${chip.label.toLowerCase()}`;
    if (seen.has(dedupeKey)) {
      continue;
    }
    seen.add(dedupeKey);
    values.push(chip.label);
  }

  return values.length ? values : ["Onderhoud"];
}

function serviceChipsMarkup(service) {
  return splitServiceValues(service)
    .map((item) => {
      const { key, label } = resolveServiceChip(item);
      return `<span class="service-chip service-chip-${key}">${escapeHtml(label)}</span>`;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function roundCurrency(value) {
  return Math.round(Number(value) * 100) / 100;
}

function formatCurrency(value) {
  return `€${roundCurrency(value).toFixed(2)}`;
}

function formatWhatsappPhone(rawPhone) {
  const digits = String(rawPhone ?? "").replace(/\D+/g, "");
  if (!digits) {
    return "";
  }

  if (digits.startsWith("00")) {
    return digits.slice(2);
  }

  if (digits.startsWith("0")) {
    return `31${digits.slice(1)}`;
  }

  return digits;
}

function formatWhatsappInvoiceTotal(value) {
  const parsed = Number(value);
  const safeNumber = Number.isFinite(parsed) ? parsed : 0;
  return safeNumber.toFixed(2).replace(".", ",");
}

function parseDate(value) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDate(value) {
  const date = parseDate(value);
  if (!date) {
    return "Unknown date";
  }

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatLicensePlate(value) {
  const cleaned = String(value ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  return cleaned.replace(/(.{2})(?=.)/g, "$1-");
}

function normalizeStatus(value) {
  const normalized = String(value ?? "draft").trim().toLowerCase();
  return STATUS_META[normalized] ? normalized : "draft";
}

function parseCompletionNotes(value) {
  if (!value) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  try {
    return JSON.parse(String(value));
  } catch {
    return {};
  }
}

function splitServices(rawValue) {
  return String(rawValue ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildInvoiceRecord(blueprint) {
  const parts = (blueprint.parts ?? []).map((part) => {
    const quantity = Number(part.quantity ?? 0);
    const price = Number(part.price ?? 0);
    return {
      name: String(part.name ?? "Item"),
      quantity,
      price,
      total: roundCurrency(quantity * price),
    };
  });

  const labourHours = Number(blueprint.labour?.hours ?? 0);
  const labourRate = Number(blueprint.labour?.rate ?? 0);
  const labourTotal = roundCurrency(labourHours * labourRate);
  const subtotal = roundCurrency(parts.reduce((sum, part) => sum + part.total, 0) + labourTotal);
  const vat = roundCurrency(subtotal * 0.21);
  const total = roundCurrency(subtotal + vat);

  return {
    id: String(blueprint.id ?? ""),
    completedAppointmentId: String(blueprint.completedAppointmentId ?? ""),
    bookingId: String(blueprint.bookingId ?? ""),
    garageId: String(blueprint.garageId ?? ""),
    licensePlate: String(blueprint.licensePlate ?? "UNKNOWN"),
    customerName: String(blueprint.customerName ?? "Unknown customer"),
    carModel: String(blueprint.carModel ?? "Unknown vehicle"),
    serviceTypes: Array.isArray(blueprint.serviceTypes) ? blueprint.serviceTypes.map(String) : ["Other"],
    completedAt: blueprint.completedAt,
    status: normalizeStatus(blueprint.status),
    parts,
    labour: {
      hours: labourHours,
      rate: labourRate,
      total: labourTotal,
    },
    summary: {
      subtotal,
      vat,
      total,
    },
    paymentLink: String(blueprint.paymentLink ?? ""),
    paymentLinkSentAt: String(blueprint.paymentLinkSentAt ?? ""),
    paymentMethod: String(blueprint.paymentMethod ?? ""),
  };
}

function invoiceFromCompletedRow(row) {
  const notes = parseCompletionNotes(row.completion_notes);
  const serviceTypes = Array.isArray(notes.service_types)
    ? notes.service_types.map(String)
    : splitServices(row.service);
  const labour = notes.labour && typeof notes.labour === "object" ? notes.labour : {};
  const parts = Array.isArray(notes.parts) ? notes.parts : [{ name: "Service", quantity: 1, price: 0 }];

  return buildInvoiceRecord({
    id: String(row.id ?? ""),
    completedAppointmentId: String(row.id ?? ""),
    bookingId: String(row.booking_id ?? ""),
    garageId: String(row.garage_id ?? ""),
    licensePlate: String(row.license_plate ?? ""),
    customerName: String(notes.customer_name ?? notes.customerName ?? "Onbekende klant"),
    carModel: String(notes.car_model || notes.carModel || "Voertuig"),
    serviceTypes: serviceTypes.length ? serviceTypes : ["Service"],
    completedAt: String(row.completed_at ?? row.created_at ?? new Date().toISOString()),
    status: String(notes.status ?? "draft"),
    werkbonCreated: notes.werkbon_created === true,
    parts,
    labour: {
      hours: Number(labour.hours ?? 0),
      rate: Number(labour.rate ?? 0),
    },
    paymentLink: String(notes.payment_link ?? ""),
    paymentLinkSentAt: String(notes.payment_link_sent_at ?? ""),
    paymentMethod: String(notes.payment_method ?? ""),
  });
}

function invoiceFromBooking(booking) {
  const rawMessage = String(booking.message ?? "");
  const nameMatch = rawMessage.match(/\bname\s*:\s*([^\n]+)/i);
  const customerName = (nameMatch?.[1] ?? "").trim() || "Onbekende klant";
  const serviceList = splitServices(String(booking.service ?? "Service"));

  return buildInvoiceRecord({
    id: String(booking.id ?? ""),
    completedAppointmentId: "",
    bookingId: String(booking.id ?? ""),
    garageId: String(booking.garageId ?? booking.garage_id ?? ""),
    licensePlate: String(booking.licensePlate ?? ""),
    customerName,
    carModel: "Voertuig",
    serviceTypes: serviceList.length ? serviceList : ["Service"],
    completedAt: booking.completedAt || booking.appointmentAt || booking.createdAt || new Date().toISOString(),
    status: "draft",
    parts: [{ name: "Service", quantity: 1, price: 0 }],
    labour: { hours: 0, rate: 0 },
  });
}

function prefetchWerkbonDetailDocument() {
  const href = pageUrl("werkbon-detail.html");
  if (document.head.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "document";
  link.href = href;
  document.head.append(link);
}

function statusBadgeMarkup(status, paymentLink = "") {
  const normalized = normalizeStatus(status);
  if (normalized !== "paid" && paymentLink) {
    return `<span class="status-chip werkbon-status-link-sent">Link verstuurd</span>`;
  }
  if (normalized === "draft" && !paymentLink) {
    return `<span class="status-chip werkbon-status-openstaand">Openstaand</span>`;
  }
  const meta = STATUS_META[normalized] ?? STATUS_META.draft;
  return `<span class="status-chip ${meta.className}">${meta.label}</span>`;
}



function summaryCardsMarkup(invoices) {
  const outstandingTotal = invoices
    .filter((invoice) => invoice.status !== "paid")
    .reduce((sum, invoice) => sum + invoice.summary.total, 0);
  const sentCount = invoices.filter((invoice) => invoice.status === "sent").length;
  const draftCount = invoices.filter((invoice) => invoice.status === "draft").length;
  const paidTotal = invoices
    .filter((invoice) => invoice.status === "paid")
    .reduce((sum, invoice) => sum + invoice.summary.total, 0);

  const summaryItems = [
    {
      label: "Outstanding revenue",
      value: formatCurrency(outstandingTotal),
      note: `${invoices.filter((invoice) => invoice.status !== "paid").length} open werkbon`,
    },
    {
      label: "Ready to send",
      value: String(draftCount),
      note: "Draft invoices waiting for customer delivery",
    },
    {
      label: "In payment flow",
      value: String(sentCount),
      note: "Sent via SMS or WhatsApp",
    },
    {
      label: "Paid total",
      value: formatCurrency(paidTotal),
      note: "Completed payments",
    },
  ];

  return summaryItems
    .map(
      (item) => `
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${escapeHtml(item.label)}</p>
          <strong class="werkbon-summary-value">${escapeHtml(item.value)}</strong>
          <span class="metric-note">${escapeHtml(item.note)}</span>
        </article>
      `,
    )
    .join("");
}

function invoiceExpandedActionsMarkup(invoice) {
  const markPaidButton = invoice.status === "paid"
    ? ""
    : `<button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${escapeHtml(invoice.id)}">Mark as Paid</button>`;

  return `
    <div class="request-divider"></div>
    <div class="request-expanded werkbon-expanded">
      <div class="request-actions werkbon-bottom-actions">
        <button class="button subtle" type="button" data-werkbon-action="view" data-werkbon-id="${escapeHtml(invoice.id)}">View Werkbon</button>
        <button class="button subtle" type="button" data-werkbon-action="edit" data-werkbon-id="${escapeHtml(invoice.id)}">Edit</button>
        <button class="button subtle werkbon-send-button" type="button" data-werkbon-action="send-customer" data-werkbon-id="${escapeHtml(invoice.id)}">Send to Customer</button>
        ${markPaidButton}
        <button class="button danger" type="button" data-werkbon-action="delete" data-werkbon-id="${escapeHtml(invoice.id)}">Delete</button>
      </div>
    </div>
  `;
}

function werkbonModalMarkup(invoice, isEditing) {
  if (!invoice) {
    return "";
  }

  const markPaidButton = invoice.status === "paid"
    ? ""
    : `<button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${escapeHtml(invoice.id)}">Mark as Paid</button>`;

  return `
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${escapeHtml(formatLicensePlate(invoice.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${escapeHtml(invoice.customerName)} · ${escapeHtml(formatDate(invoice.completedAt))}</p>
          </div>
          <button class="icon-button" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details">
            <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M5 5l10 10M15 5L5 15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
            </svg>
          </button>
        </div>

        <div class="werkbon-drawer-scroll">
          <section class="werkbon-section request-contact-box werkbon-modal-meta">
            <div>
              <span class="werkbon-detail-label">Customer</span>
              <strong>${escapeHtml(invoice.customerName)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Vehicle</span>
              <strong>${escapeHtml(invoice.carModel)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Status</span>
              ${statusBadgeMarkup(invoice.status, invoice.paymentLink)}
            </div>
          </section>

          ${isEditing
      ? `
                <section class="werkbon-section request-contact-box werkbon-edit-card">
                  <div class="werkbon-section-heading">
                    <span class="kicker">Edit Werkbon</span>
                    <p class="muted">Adjust status and labour totals.</p>
                  </div>
                  <div class="werkbon-edit-grid">
                    <label>
                      <span>Status</span>
                      <select data-werkbon-edit-status>
                        <option value="draft" ${invoice.status === "draft" ? "selected" : ""}>Draft</option>
                        <option value="sent" ${invoice.status === "sent" ? "selected" : ""}>Sent</option>
                        <option value="paid" ${invoice.status === "paid" ? "selected" : ""}>Paid</option>
                      </select>
                    </label>
                    <label>
                      <span>Labour hours</span>
                      <input data-werkbon-edit-hours type="number" min="0" step="0.1" value="${escapeHtml(String(invoice.labour.hours))}" />
                    </label>
                    <label>
                      <span>Price per hour</span>
                      <input data-werkbon-edit-rate type="number" min="0" step="0.01" value="${escapeHtml(String(invoice.labour.rate))}" />
                    </label>
                  </div>
                </section>
              `
      : ""
    }

          <div class="request-expanded-grid werkbon-detail-grid">
            <section class="request-contact-box werkbon-section">
              <div class="request-box-label">
                <span>Parts</span>
              </div>
              <div class="request-box-divider"></div>
              <div class="werkbon-line-items werkbon-line-items-head">
                <span>Product</span>
                <span>Qty</span>
                <span>Price</span>
                <span>Total</span>
              </div>
              <div class="werkbon-line-items">
                ${partsTableMarkup(invoice)}
              </div>
            </section>

            <section class="request-contact-box werkbon-section">
              <div class="request-box-label">
                <span>Labour</span>
              </div>
              <div class="request-box-divider"></div>
              <div class="werkbon-labour-grid">
                <div>
                  <span class="werkbon-detail-label">Hours</span>
                  <strong>${escapeHtml(String(invoice.labour.hours))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Price per hour</span>
                  <strong>${escapeHtml(formatCurrency(invoice.labour.rate))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Total</span>
                  <strong>${escapeHtml(formatCurrency(invoice.labour.total))}</strong>
                </div>
              </div>
            </section>
          </div>

          <section class="request-contact-box werkbon-section werkbon-summary-section">
            <div class="request-box-label">
              <span>Summary</span>
            </div>
            <div class="request-box-divider"></div>
            <div class="werkbon-summary-breakdown">
              <div><span>Subtotal</span><strong>${escapeHtml(formatCurrency(invoice.summary.subtotal))}</strong></div>
              <div><span>VAT (21%)</span><strong>${escapeHtml(formatCurrency(invoice.summary.vat))}</strong></div>
              <div class="werkbon-summary-total"><span>Total price</span><strong>${escapeHtml(formatCurrency(invoice.summary.total))}</strong></div>
            </div>
          </section>
        </div>

        <div class="request-actions werkbon-bottom-actions werkbon-modal-actions">
          ${isEditing
      ? `
                <button class="button subtle" type="button" data-werkbon-action="cancel-edit" data-werkbon-id="${escapeHtml(invoice.id)}">Cancel</button>
                <button class="button" type="button" data-werkbon-action="save-edit" data-werkbon-id="${escapeHtml(invoice.id)}">Save Changes</button>
              `
      : `
                <button class="button subtle" type="button" data-werkbon-action="download-pdf" data-werkbon-id="${escapeHtml(invoice.id)}">Download PDF</button>
                <button class="button subtle" type="button" data-werkbon-action="send-sms" data-werkbon-id="${escapeHtml(invoice.id)}">Send via SMS</button>
                <button class="button subtle" type="button" data-werkbon-action="send-whatsapp" data-werkbon-id="${escapeHtml(invoice.id)}">Send via WhatsApp</button>
                ${markPaidButton}
              `
    }
        </div>
      </aside>
    </div>
  `;
}

function invoiceRowMarkup(invoice, isExpanded) {
  return `
    <article class="request-card werkbon-card ${isExpanded ? "is-expanded" : ""}" data-werkbon-row-id="${escapeHtml(invoice.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          <span class="plate-chip">${escapeHtml(formatLicensePlate(invoice.licensePlate))}</span>
          <div class="request-info">
            <p class="request-name">${escapeHtml(invoice.customerName)}</p>
            <p class="request-vehicle">${escapeHtml(invoice.carModel)}</p>
            <div class="request-services">${serviceChipsMarkup(Array.isArray(invoice.serviceTypes) ? invoice.serviceTypes.join(", ") : invoice.serviceTypes)}</div>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${escapeHtml(formatCurrency(invoice.summary.total))}</strong>
          ${statusBadgeMarkup(invoice.status, invoice.paymentLink)}
          </div>
          <button
            class="request-toggle ${isExpanded ? "is-expanded" : ""}"
            type="button"
            data-werkbon-action="toggle"
            data-werkbon-id="${escapeHtml(invoice.id)}"
            aria-expanded="${isExpanded ? "true" : "false"}"
            aria-label="${isExpanded ? "Collapse werkbon actions" : "Expand werkbon actions"}"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>

      ${isExpanded ? invoiceExpandedActionsMarkup(invoice) : ""}
    </article>
  `;
}

function werkbonPaymentModalMarkup(selectedPaymentMethod) {
  return `
    <div class="werkbon-payment-overlay" role="presentation">
      <div class="werkbon-payment-dialog" role="dialog" aria-modal="true" aria-labelledby="werkbonPaymentTitle">
        <h3 id="werkbonPaymentTitle">Kies betaalmethode</h3>
        <div class="werkbon-payment-grid">
          ${WERKBON_PAYMENT_METHODS.map((method) => `
            <button
              class="button subtle werkbon-payment-method ${selectedPaymentMethod === method ? "is-active" : ""}"
              type="button"
              data-create-action="select-payment"
              data-payment-method="${escapeHtml(method)}"
            >${escapeHtml(method)}</button>
          `).join("")}
        </div>
        <div class="werkbon-payment-actions">
          <button class="button subtle" type="button" data-create-action="close-payment">Sluiten</button>
        </div>
      </div>
    </div>
  `;
}

function werkbonCreateModalMarkup({
  isOpen,
  step,
  state,
  rdwStatus,
  rdwError,
  selectedPaymentMethod,
  isSaving,
  paymentModalOpen,
}) {
  if (!isOpen) {
    return "";
  }

  const canGoNextFromStep1 = rdwStatus === "success";
  const nextDisabled = step === 1 && !canGoNextFromStep1;

  return `
    <div class="werkbon-create-modal ${isOpen ? "is-open" : ""}" role="presentation">
      <div class="werkbon-create-shadow" data-create-action="attempt-close" aria-hidden="true">
        <section class="werkbon-create-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonCreateTitle">
          <header class="werkbon-create-header">
            <div>
              
              <h2 id="werkbonCreateTitle">Werkbon Maken</h2>
            </div>
            <button class="icon-button" type="button" data-create-action="attempt-close" aria-label="Sluiten">&times;</button>
          </header>

          <nav class="werkbon-create-stepper" aria-label="Werkbon stappen">${werkbonCreateStepNavigationMarkup(step)}</nav>

          <div class="werkbon-create-content">${werkbonCreateStepContentMarkup({ step, state, rdwStatus })}</div>

          <footer class="werkbon-create-actions">
            <div class="werkbon-create-actions-left">
              <button class="button subtle" type="button" data-create-action="prev-step" ${step === 1 ? "disabled" : ""}>Vorige</button>
            </div>
            <div class="werkbon-create-actions-right">
              ${step < 5
      ? `<button class="button subtle" type="button" data-create-action="next-step" ${nextDisabled ? "disabled" : ""}>Volgende</button>`
      : `<button class="button" type="button" data-create-action="save-werkbon" ${isSaving ? "disabled" : ""}>${isSaving ? "Opslaan..." : "Opslaan"}</button>`}
            </div>
          </footer>

          <div data-create-saving-host="true">${isSaving ? '<div class="werkbon-create-saving">Opslaan naar Supabase...</div>' : ""}</div>
        </section>

        <div data-create-payment-host="true">${paymentModalOpen ? werkbonPaymentModalMarkup(selectedPaymentMethod) : ""}</div>
      </div>
    </div>
  `;
}

function werkbonCreateFooterActionsMarkup({
  step,
  rdwStatus,
  isSaving,
}) {
  const nextDisabled = step === 1 && rdwStatus !== "success";
  return {
    left: `<button class="button subtle" type="button" data-create-action="prev-step" ${step === 1 ? "disabled" : ""}>Vorige</button>`,
    right: step < 5
      ? `<button class="button subtle" type="button" data-create-action="next-step" ${nextDisabled ? "disabled" : ""}>Volgende</button>`
      : `<button class="button" type="button" data-create-action="save-werkbon" ${isSaving ? "disabled" : ""}>${isSaving ? "Opslaan..." : "Opslaan"}</button>`,
  };
}

function emptyStateMarkup(message) {
  return `
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${escapeHtml(message)}</p>
      </div>
    </div>
  `;
}

function invoiceListMarkup(invoices, isFiltered) {
  if (!invoices.length) {
    return emptyStateMarkup(isFiltered ? "No invoices match the current filters." : "Completed appointments will appear here once a werkbon is created.");
  }

  return invoices.map(invoiceRowMarkup).join("");
}

function partsTableMarkup(invoice) {
  return invoice.parts
    .map(
      (part) => `
        <div class="werkbon-line-item">
          <span>${escapeHtml(part.name)}</span>
          <span>${escapeHtml(String(part.quantity))}</span>
          <span>${escapeHtml(formatCurrency(part.price))}</span>
          <strong>${escapeHtml(formatCurrency(part.total))}</strong>
        </div>
      `,
    )
    .join("");
}

function buildPrintMarkup(invoice) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Werkbon ${escapeHtml(formatLicensePlate(invoice.licensePlate))}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 32px; color: #111827; }
          h1, h2, p { margin: 0; }
          .meta { margin-top: 12px; display: grid; gap: 6px; }
          .section { margin-top: 28px; }
          .row { display: grid; grid-template-columns: 2fr .6fr .8fr .8fr; gap: 12px; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
          .summary { margin-top: 20px; max-width: 280px; margin-left: auto; display: grid; gap: 10px; }
          .summary div { display: flex; justify-content: space-between; }
          .summary strong { font-size: 20px; }
        </style>
      </head>
      <body>
        <h1>Werkbon & Payments</h1>
        <div class="meta">
          <p><strong>License plate:</strong> ${escapeHtml(formatLicensePlate(invoice.licensePlate))}</p>
          <p><strong>Customer:</strong> ${escapeHtml(invoice.customerName)}</p>
          <p><strong>Date:</strong> ${escapeHtml(formatDate(invoice.completedAt))}</p>
          <p><strong>Status:</strong> ${escapeHtml(STATUS_META[invoice.status].label)}</p>
        </div>
        <div class="section">
          <h2>Parts</h2>
          <div class="row"><strong>Product</strong><strong>Qty</strong><strong>Price</strong><strong>Total</strong></div>
          ${invoice.parts
      .map(
        (part) => `<div class="row"><span>${escapeHtml(part.name)}</span><span>${escapeHtml(String(part.quantity))}</span><span>${escapeHtml(formatCurrency(part.price))}</span><span>${escapeHtml(formatCurrency(part.total))}</span></div>`,
      )
      .join("")}
        </div>
        <div class="section">
          <h2>Labour</h2>
          <p>${escapeHtml(String(invoice.labour.hours))}h × ${escapeHtml(formatCurrency(invoice.labour.rate))} = ${escapeHtml(formatCurrency(invoice.labour.total))}</p>
        </div>
        <div class="summary">
          <div><span>Subtotal</span><span>${escapeHtml(formatCurrency(invoice.summary.subtotal))}</span></div>
          <div><span>VAT (21%)</span><span>${escapeHtml(formatCurrency(invoice.summary.vat))}</span></div>
          <div><span>Total</span><strong>${escapeHtml(formatCurrency(invoice.summary.total))}</strong></div>
        </div>
      </body>
    </html>
  `;
}

function openPrintWindow(invoice) {
  const printWindow = window.open("", "_blank", "width=960,height=720,noopener,noreferrer");
  if (!printWindow) {
    return false;
  }

  printWindow.document.open();
  printWindow.document.write(buildPrintMarkup(invoice));
  printWindow.document.close();
  printWindow.focus();
  window.setTimeout(() => {
    printWindow.print();
  }, 180);
  return true;
}

function createNewInvoice(seed) {
  return buildInvoiceRecord({
    id: `wb-new-${seed}`,
    licensePlate: `MB${String(seed).padStart(3, "0")}K`,
    customerName: "New Customer",
    carModel: "Opel Corsa",
    serviceTypes: ["APK"],
    completedAt: new Date().toISOString(),
    status: "draft",
    parts: [{ name: "Inspection checklist", quantity: 1, price: 32 }],
    labour: { hours: 1, rate: 55 },
  });
}

export async function mountWerkbonPage(rootElement) {
  if (!rootElement) {
    return;
  }

  document.body.style.overflow = "";

  const authState = await ensureAuthenticated();
  if (!authState) {
    return;
  }

  if (!authState.isAdmin && !authState.activeGarage) {
    rootElement.innerHTML = `
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;
    return;
  }

  applyGarageBranding(authState.activeGarage);

  const garageIds = authState.isAdmin ? null : [authState.activeGarage?.id].filter(Boolean);
  const { shell, contentArea, setUnreadEmailCount } = createAppShell({
    activePage: "werkbon",
    title: "Werkbon & Payments",
    headerNote: "Manage invoices and payment status",
    userEmail: authState.user.email,
    onLogout: logoutAndRedirect,
    garage: authState.activeGarage,
    isAdmin: authState.isAdmin,
  });

  const createModalHost = document.createElement("div");
  createModalHost.id = "werkbonCreateModalHost";

  rootElement.replaceChildren(shell, createModalHost);
  prefetchWerkbonDetailDocument();

  contentArea.innerHTML = `
    <section class="werkbon-page">
      <div id="werkbonNotice" class="werkbon-notice" hidden aria-live="polite"></div>

      <div class="werkbon-topbar">
        <label class="werkbon-filter-field werkbon-search-field">
          <input id="werkbonSearch" type="search" placeholder="Search license plate or customer" />
        </label>

        <label class="werkbon-filter-field werkbon-status-field">
          <select id="werkbonStatusFilter" aria-label="Filter werkbon by status">
            <option value="all">All statuses</option>
            <option value="pending">Openstaand</option>
            <option value="draft">Draft</option>
            <option value="sent">Sent</option>
            <option value="paid">Paid</option>
          </select>
        </label>

        <div class="werkbon-create-trigger-wrap">
          <button id="werkbonCreateTrigger" class="button" type="button">＋ Werkbon Maken</button>
        </div>
      </div>

      <div id="werkbonSummary" class="werkbon-summary-grid"></div>

      <section class="panel werkbon-panel">
        <div id="werkbonList" class="werkbon-list"></div>
      </section>

      <div id="werkbonDrawer" class="werkbon-drawer"></div>
    </section>
  `;

  const noticeElement = contentArea.querySelector("#werkbonNotice");
  const summaryElement = contentArea.querySelector("#werkbonSummary");
  const listElement = contentArea.querySelector("#werkbonList");
  const drawerElement = contentArea.querySelector("#werkbonDrawer");
  const createTrigger = contentArea.querySelector("#werkbonCreateTrigger");
  const statusFilter = contentArea.querySelector("#werkbonStatusFilter");
  const searchInput = contentArea.querySelector("#werkbonSearch");
  const initialSearchParams = new URLSearchParams(window.location.search);
  const openCreateFromSearch = String(initialSearchParams.get("action") ?? "").toLowerCase() === "create";

  let invoices = [];
  let expandedInvoiceId = invoices[0]?.id ?? "";
  let selectedInvoiceId = "";
  let modalOpen = false;
  let editingInvoiceId = "";
  let createModalOpen = false;
  let createModalStep = 1;
  let createPaymentModalOpen = false;
  let createSelectedPaymentMethod = "";
  let createSaving = false;
  let createRdwStatus = "idle";
  let createRdwError = "";
  let createRdwAutoFetchTimer = 0;
  let createRdwRequestToken = 0;
  let werkbonState = createEmptyWerkbonState();
  let noticeTimer = 0;
  let activeSendDropdown = null;
  let activeSendPayload = null;
  let garageSettings = {
    ...authState.activeGarage,
    mollieMethod: String(authState.activeGarage?.mollieMethod ?? "none"),
    mollieApiKey: authState.activeGarage?.mollieApiKey ?? null,
    paymentDays: parseInt(String(authState.activeGarage?.paymentDays ?? "14"), 10) || 14,
    garageName: String(authState.activeGarage?.garageName || authState.activeGarage?.name || "Garage"),
  };
  const vehicleCache = new Map();

  const setNotice = (message) => {
    if (!(noticeElement instanceof HTMLElement)) {
      return;
    }

    noticeElement.textContent = message;
    noticeElement.hidden = !message;
    window.clearTimeout(noticeTimer);
    if (message) {
      noticeTimer = window.setTimeout(() => {
        noticeElement.hidden = true;
        noticeElement.textContent = "";
      }, 2600);
    }
  };

  const showToast = (message, tone = "success") => {
    if (tone === "error") {
      setNotice(String(message || "Er ging iets mis"));
      return;
    }
    setNotice(String(message || "Actie uitgevoerd."));
  };

  const loadGarageSettings = async () => {
    const garageId = authState.activeGarage?.id;
    if (!supabase || !garageId) {
      return;
    }

    try {
      const { data, error } = await supabase
        .from("garages")
        .select("*")
        .eq("id", garageId)
        .maybeSingle();

      if (error || !data) {
        return;
      }

      garageSettings = {
        ...garageSettings,
        paymentLink: data.payment_link ?? garageSettings.paymentLink ?? null,
        mollieMethod: String(data.mollie_method ?? garageSettings.mollieMethod ?? "none"),
        mollieApiKey: data.mollie_api_key ?? garageSettings.mollieApiKey ?? null,
        paymentDays: parseInt(String(data.payment_days ?? garageSettings.paymentDays ?? 14), 10) || 14,
        garageName: String(data.garage_name || data.name || garageSettings.garageName || "Garage"),
      };
    } catch {
      // Keep fallback garage settings from auth context.
    }
  };

  const closeSendDropdown = () => {
    if (activeSendDropdown instanceof HTMLElement) {
      activeSendDropdown.remove();
    }
    activeSendDropdown = null;
    activeSendPayload = null;
  };

  const showWerkbonConfirmDialog = ({
    title,
    body,
    confirmLabel,
    cancelLabel,
    confirmClassName = "",
  }) => new Promise((resolve) => {
    const container = document.createElement("div");
    container.innerHTML = `
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title" id="confirm-title">${escapeHtml(title)}</h2>
            <p id="confirm-desc">${escapeHtml(body)}</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button subtle" type="button" data-confirm-action="cancel">${escapeHtml(cancelLabel)}</button>
            <button class="button ${escapeHtml(confirmClassName)}" type="button" data-confirm-action="continue">${escapeHtml(confirmLabel)}</button>
          </div>
        </div>
      </div>
    `;

    document.body.append(container);
    const overlay = container.querySelector(".confirm-dialog-overlay");
    const continueButton = container.querySelector('[data-confirm-action="continue"]');
    if (continueButton instanceof HTMLButtonElement) {
      window.setTimeout(() => continueButton.focus(), 50);
    }

    const finish = (confirmed) => {
      container.remove();
      resolve(confirmed);
    };

    if (overlay instanceof HTMLElement) {
      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
          finish(false);
        }
      });
    }

    container.addEventListener("click", (event) => {
      const target = event.target instanceof HTMLElement ? event.target : null;
      const actionButton = target?.closest("[data-confirm-action]");
      if (!(actionButton instanceof HTMLElement)) {
        return;
      }
      finish(actionButton.dataset.confirmAction === "continue");
    });

    container.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        finish(false);
      }
    });
  });

  const resetCreateState = () => {
    if (createRdwAutoFetchTimer) {
      window.clearTimeout(createRdwAutoFetchTimer);
      createRdwAutoFetchTimer = 0;
    }
    createRdwRequestToken += 1;
    createModalStep = 1;
    createPaymentModalOpen = false;
    createSelectedPaymentMethod = "";
    createSaving = false;
    createRdwStatus = "idle";
    createRdwError = "";
    werkbonState = createEmptyWerkbonState();
  };

  const renderCreateModalDom = ({ forceMount = false, refreshContent = false } = {}) => {
    if (!(createModalHost instanceof HTMLElement)) {
      return;
    }

    if (!createModalOpen) {
      if (createModalHost.innerHTML) {
        createModalHost.innerHTML = "";
      }
      document.body.style.overflow = "";
      return;
    }

    const existingModal = forceMount ? null : createModalHost.querySelector(".werkbon-create-modal");
    if (!(existingModal instanceof HTMLElement)) {
      createModalHost.innerHTML = werkbonCreateModalMarkup({
        isOpen: createModalOpen,
        step: createModalStep,
        state: werkbonState,
        rdwStatus: createRdwStatus,
        rdwError: createRdwError,
        selectedPaymentMethod: createSelectedPaymentMethod,
        isSaving: createSaving,
        paymentModalOpen: createPaymentModalOpen,
      });
      document.body.style.overflow = "hidden";
      return;
    }

    const stepperElement = createModalHost.querySelector(".werkbon-create-stepper");
    if (stepperElement instanceof HTMLElement) {
      stepperElement.innerHTML = werkbonCreateStepNavigationMarkup(createModalStep);
    }

    if (refreshContent) {
      const contentElement = createModalHost.querySelector(".werkbon-create-content");
      if (contentElement instanceof HTMLElement) {
        contentElement.innerHTML = werkbonCreateStepContentMarkup({
          step: createModalStep,
          state: werkbonState,
          rdwStatus: createRdwStatus,
        });
      }
    }

    const prevButton = createModalHost.querySelector('[data-create-action="prev-step"]');
    if (prevButton instanceof HTMLButtonElement) {
      prevButton.disabled = createModalStep === 1;
    }

    const actionsLeft = createModalHost.querySelector(".werkbon-create-actions-left");
    const actionsRight = createModalHost.querySelector(".werkbon-create-actions-right");
    if (actionsLeft instanceof HTMLElement && actionsRight instanceof HTMLElement) {
      const footerActions = werkbonCreateFooterActionsMarkup({
        step: createModalStep,
        rdwStatus: createRdwStatus,
        isSaving: createSaving,
      });
      actionsLeft.innerHTML = footerActions.left;
      actionsRight.innerHTML = footerActions.right;
    }

    const savingHost = createModalHost.querySelector('[data-create-saving-host="true"]');
    if (savingHost instanceof HTMLElement) {
      savingHost.innerHTML = createSaving ? '<div class="werkbon-create-saving">Opslaan naar Supabase...</div>' : "";
    }

    const paymentHost = createModalHost.querySelector('[data-create-payment-host="true"]');
    if (paymentHost instanceof HTMLElement) {
      paymentHost.innerHTML = createPaymentModalOpen ? werkbonPaymentModalMarkup(createSelectedPaymentMethod) : "";
    }

    document.body.style.overflow = "hidden";
  };

  const closeCreateModal = ({ rerenderPage = false } = {}) => {
    createModalOpen = false;
    closeSendDropdown();
    resetCreateState();
    if (rerenderPage) {
      render();
      return;
    }
    renderCreateModalDom();
  };

  const attemptCloseCreateModal = async () => {
    if (!hasWerkbonDraftData(werkbonState)) {
      closeCreateModal();
      return;
    }

    const confirmed = await showConfirmDialog(
      "Er staan niet-opgeslagen gegevens in deze werkbon. Weet je zeker dat je wilt sluiten?",
      "Werkbon sluiten",
    );

    if (confirmed) {
      closeCreateModal();
    }
  };

  const reserveInvoiceSequence = async (garageId) => {
    if (!supabase || !garageId) {
      return Date.now() % 100000;
    }

    const { data: garage, error: readError } = await supabase
      .from("garages")
      .select("invoice_sequence")
      .eq("id", garageId)
      .maybeSingle();

    if (readError) {
      throw readError;
    }

    const current = Math.max(1000, Number(garage?.invoice_sequence ?? 1000));
    const next = current + 1;

    const { error: updateError } = await supabase
      .from("garages")
      .update({ invoice_sequence: next })
      .eq("id", garageId);

    if (updateError) {
      throw updateError;
    }

    return next;
  };

  const buildCreatePayload = async () => {
    const garageId = authState.activeGarage?.id;
    if (!garageId) {
      throw new Error("Geen garage gevonden voor deze gebruiker.");
    }

    const kenteken = normalizeLicensePlate(werkbonState.voertuig?.kenteken ?? "");
    if (kenteken.length < 6) {
      throw new Error("Voer eerst een geldig kenteken in.");
    }

    if (createRdwStatus !== "success") {
      throw new Error("Haal eerst RDW voertuiggegevens op.");
    }

    const totals = computeWerkbonTotals(werkbonState);
    const invoiceSequence = await reserveInvoiceSequence(garageId);
    const werkbonNumeric = String(Date.now()).slice(-4);
    const werkbonId = `wb-${werkbonNumeric}`;
    const invoiceNumber = `F-${String(invoiceSequence).padStart(6, "0")}`;
    const completedAt = new Date().toISOString();
    const customerName = String(werkbonState.klant?.naam ?? "").trim() || "Onbekende klant";
    const carModel = String(werkbonState.voertuig?.title ?? "").trim() || "Voertuig";

    const serviceTypes = deriveServiceTypesFromWerkbonState(werkbonState);

    const completionNotes = {
      werkbon_id: werkbonId,
      status: "draft",
      werkbon_created: true,
      customer_name: customerName,
      customer_email: String(werkbonState.klant?.email ?? "").trim(),
      customer_phone: String(werkbonState.klant?.telefoon ?? "").trim(),
      car_model: carModel,
      service_types: serviceTypes,
      km_stand: 0,
      vat_enabled: toPositiveNumber(werkbonState.btw) > 0,
      description: String(werkbonState.klant?.omschrijving ?? "").trim(),
      internal_note: "",
      invoice_number: invoiceNumber,
      paid_at: createSelectedPaymentMethod ? new Date().toISOString().slice(0, 10) : null,
      completed_at: completedAt,
      parts: totals.onderdelenRows.map((row) => ({ name: row.naam, quantity: row.aantal, price: row.prijs })),
      labour: { hours: totals.labourHours, rate: totals.labourRate },
      totals: { subtotal: totals.subtotaal, vat: totals.btwBedrag, total: totals.totaal },
      payment_method: createSelectedPaymentMethod,
    };

    return {
      garageId,
      kenteken,
      completedAt,
      completionNotes,
      serviceSummary: serviceTypes.join(", "),
      werkbonId,
      invoiceNumber,
    };
  };

  const saveNewWerkbonToSupabase = async () => {
    if (!supabase) {
      throw new Error("Supabase is niet geconfigureerd.");
    }

    createSaving = true;
    renderCreateModalDom();

    try {
      const payload = await buildCreatePayload();
      const { data: inserted, error } = await supabase
        .from("completed_appointments")
        .insert({
          garage_id: payload.garageId,
          booking_id: null,
          completed_at: payload.completedAt,
          appointment_date: payload.completedAt.slice(0, 10),
          appointment_time: payload.completedAt.slice(11, 19),
          license_plate: payload.kenteken,
          service: payload.serviceSummary || "Onderhoud",
          completion_notes: JSON.stringify(payload.completionNotes),
        })
        .select("id, booking_id, garage_id, completed_at, created_at, license_plate, service, completion_notes")
        .single();

      if (error) {
        throw error;
      }

      const nextInvoice = invoiceFromCompletedRow(inserted);
      invoices = [nextInvoice, ...invoices];
      expandedInvoiceId = nextInvoice.id;
      setNotice(`Werkbon ${payload.werkbonId} opgeslagen als ${payload.invoiceNumber}.`);
      closeCreateModal();
    } finally {
      createSaving = false;
      render();
    }
  };

  const createPdfFromDraft = async () => {
    const jsPDFCtor = await ensureJsPdfFromCdn();
    const totals = computeWerkbonTotals(werkbonState);
    const doc = new jsPDFCtor({ unit: "pt", format: "a4" });
    const kenteken = String(werkbonState.voertuig?.kenteken ?? "-");
    const customer = String(werkbonState.klant?.naam ?? "Onbekende klant");
    const description = String(werkbonState.klant?.omschrijving ?? "").trim();

    let y = 56;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Werkbon / Factuur", 42, y);
    y += 26;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(`Datum: ${new Date().toLocaleDateString("nl-NL")}`, 42, y);
    y += 16;
    doc.text(`Kenteken: ${kenteken}`, 42, y);
    y += 16;
    doc.text(`Klant: ${customer}`, 42, y);
    y += 16;
    if (description) {
      doc.text(`Omschrijving: ${description}`, 42, y, { maxWidth: 520 });
      y += 22;
    }

    doc.setFont("helvetica", "bold");
    doc.text("Onderdelen", 42, y);
    y += 16;
    doc.setFont("helvetica", "normal");
    totals.onderdelenRows.forEach((row) => {
      doc.text(`${row.naam}  x${row.aantal}  ${formatCurrency(row.prijs)}  ${formatCurrency(row.totaal)}`, 42, y);
      y += 14;
    });
    y += 12;
    doc.text(`Arbeid: ${formatCurrency(totals.arbeidTotaal)}`, 42, y);
    y += 14;
    doc.text(`Subtotaal: ${formatCurrency(totals.subtotaal)}`, 42, y);
    y += 14;
    doc.text(`BTW: ${formatCurrency(totals.btwBedrag)}`, 42, y);
    y += 14;
    doc.setFont("helvetica", "bold");
    doc.text(`Totaal: ${formatCurrency(totals.totaal)}`, 42, y);

    doc.save(`werkbon-${normalizeLicensePlate(kenteken) || "nieuw"}.pdf`);
  };

  const sendDraftByEmail = async () => {
    if (!supabase) {
      throw new Error("Supabase is niet geconfigureerd.");
    }

    const email = String(werkbonState.klant?.email ?? "").trim();
    if (!email) {
      throw new Error("Geen e-mailadres beschikbaar.");
    }

    const totals = computeWerkbonTotals(werkbonState);
    const { error } = await supabase.functions.invoke("send-werkbon-email", {
      body: {
        to: email,
        template: "werkbon_factuur_nl",
        subject: `Werkbon ${formatKentekenInput(werkbonState.voertuig?.kenteken ?? "")}`,
        customerName: String(werkbonState.klant?.naam ?? "Klant"),
        total: totals.totaal,
      },
    });

    if (error) {
      throw error;
    }
  };

  const openDraftWhatsapp = () => {
    const rawPhone = String(werkbonState.klant?.telefoon ?? "").replace(/[^0-9]/g, "");
    const totals = computeWerkbonTotals(werkbonState);
    const message = `Hallo ${String(werkbonState.klant?.naam ?? "")}, uw werkbon (${formatKentekenInput(werkbonState.voertuig?.kenteken ?? "")}) staat klaar. Totaal: ${formatCurrency(totals.totaal)}.`;
    window.open(`https://wa.me/${encodeURIComponent(rawPhone)}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const syncCreateLookupStatusDom = () => {
    const statusElement = createModalHost.querySelector("#vehicleLookupStatus");
    if (!(statusElement instanceof HTMLElement)) {
      return;
    }

    statusElement.classList.remove("is-success", "is-error");

    if (createRdwStatus === "loading") {
      statusElement.textContent = "Kenteken controleren...";
      return;
    }

    if (createRdwStatus === "success") {
      statusElement.textContent = "Kenteken gevonden";
      statusElement.classList.add("is-success");
      return;
    }

    if (createRdwStatus === "error") {
      statusElement.textContent = "Kenteken niet gevonden";
      statusElement.classList.add("is-error");
      return;
    }

    statusElement.textContent = "Typ kenteken om te zoeken";
  };

  const syncCreateNextButtonStateDom = () => {
    const nextButton = createModalHost.querySelector('[data-create-action="next-step"]');
    if (!(nextButton instanceof HTMLButtonElement)) {
      return;
    }

    if (createModalStep === 1) {
      nextButton.disabled = createRdwStatus !== "success";
      return;
    }

    nextButton.disabled = createModalStep === 5;
  };

  const syncCreateVehiclePreviewDom = () => {
    const titleElement = createModalHost.querySelector("#vehiclePreviewTitle");
    const buildYearElement = createModalHost.querySelector("#vehiclePreviewBuildYear");
    const apkElement = createModalHost.querySelector("#vehiclePreviewApk");
    const colorElement = createModalHost.querySelector("#vehiclePreviewColor");
    const fuelElement = createModalHost.querySelector("#vehiclePreviewFuel");

    if (!(titleElement instanceof HTMLElement) || !(buildYearElement instanceof HTMLElement) || !(apkElement instanceof HTMLElement) || !(colorElement instanceof HTMLElement) || !(fuelElement instanceof HTMLElement)) {
      return;
    }

    const voertuigTitle = String(werkbonState.voertuig?.title ?? "").trim();
    const voertuigBouwjaar = String(werkbonState.voertuig?.buildYear ?? "").trim();
    const previewTitle = voertuigBouwjaar
      ? `${voertuigTitle || "Voertuig gegevens"} (${voertuigBouwjaar})`
      : voertuigTitle || "Voertuig gegevens";

    titleElement.textContent = previewTitle;
    buildYearElement.textContent = voertuigBouwjaar;
    apkElement.textContent = String(werkbonState.voertuig?.apkExpiryDate ?? "").trim();
    colorElement.textContent = String(werkbonState.voertuig?.color ?? "").trim();
    fuelElement.textContent = String(werkbonState.voertuig?.fuel ?? "").trim();
  };

  const syncCreatePartTotalsDom = () => {
    const totals = computeWerkbonTotals(werkbonState);
    const subtotalElement = createModalHost.querySelector("[data-parts-subtotal-value]");
    if (subtotalElement instanceof HTMLElement) {
      subtotalElement.textContent = formatCurrency(totals.onderdelenSubtotaal);
    }

    const totalElements = createModalHost.querySelectorAll("[data-part-total-index]");
    totalElements.forEach((element) => {
      if (!(element instanceof HTMLElement)) {
        return;
      }
      const index = Number(element.getAttribute("data-part-total-index") ?? -1);
      const row = totals.onderdelenRows[index];
      if (!row) {
        return;
      }
      element.textContent = formatCurrency(row.totaal);
    });
  };

  const syncCreateCalculationCardDom = () => {
    const totals = computeWerkbonTotals(werkbonState);
    const valueByKey = {
      arbeid: formatCurrency(totals.arbeidTotaal),
      subtotaal: formatCurrency(totals.subtotaal),
      btw: formatCurrency(totals.btwBedrag),
      totaal: formatCurrency(totals.totaal),
    };

    const totalElements = createModalHost.querySelectorAll("[data-create-total]");
    totalElements.forEach((element) => {
      if (!(element instanceof HTMLElement)) {
        return;
      }
      const key = String(element.getAttribute("data-create-total") ?? "");
      if (key in valueByKey) {
        element.textContent = valueByKey[key];
      }
    });
  };

  const syncCreateLabourFieldsDom = () => {
    const enabled = Boolean(werkbonState.arbeid?.enabled);
    const labourInputs = createModalHost.querySelectorAll("[data-arbeid-field]");
    labourInputs.forEach((element) => {
      if (!(element instanceof HTMLInputElement)) {
        return;
      }
      if (element.getAttribute("data-arbeid-field") === "enabled") {
        element.checked = enabled;
        return;
      }
      element.disabled = !enabled;
    });
    syncCreateCalculationCardDom();
  };

  const fetchRdwForCreateState = async ({ showShortInputError = false } = {}) => {
    const kenteken = normalizeLicensePlate(werkbonState.voertuig?.kenteken ?? "");
    if (kenteken.length < 6) {
      createRdwStatus = "idle";
      createRdwError = showShortInputError ? "Voer minimaal 6 tekens in voor het kenteken." : "";
      syncCreateLookupStatusDom();
      syncCreateNextButtonStateDom();
      return;
    }

    const requestToken = ++createRdwRequestToken;
    createRdwStatus = "loading";
    createRdwError = "";
    syncCreateLookupStatusDom();
    syncCreateNextButtonStateDom();

    try {
      const vehicle = await fetchVehicleByLicensePlate(kenteken);
      if (requestToken !== createRdwRequestToken) {
        return;
      }
      if (!vehicle) {
        createRdwStatus = "error";
        createRdwError = "Geen RDW voertuig gevonden voor dit kenteken.";
        werkbonState.voertuig = {
          ...werkbonState.voertuig,
          title: "",
          buildYear: "",
          apkExpiryDate: "",
          color: "",
          fuel: "",
        };
        syncCreateLookupStatusDom();
        syncCreateVehiclePreviewDom();
        syncCreateNextButtonStateDom();
        return;
      }

      werkbonState.voertuig = {
        ...werkbonState.voertuig,
        kenteken: formatKentekenInput(kenteken),
        ...vehicle,
      };
      createRdwStatus = "success";
      createRdwError = "";
      syncCreateLookupStatusDom();
      syncCreateVehiclePreviewDom();
      syncCreateNextButtonStateDom();
    } catch {
      if (requestToken !== createRdwRequestToken) {
        return;
      }
      createRdwStatus = "error";
      createRdwError = "RDW service is momenteel niet beschikbaar.";
      syncCreateLookupStatusDom();
      syncCreateNextButtonStateDom();
    }
  };

  const updateInvoice = (invoiceId, updater) => {
    invoices = invoices.map((invoice) => (invoice.id === invoiceId ? buildInvoiceRecord(updater(invoice)) : invoice));
  };

  const findInvoiceById = (invoiceId) => invoices.find((item) => item.id === invoiceId) ?? null;

  const resolveGarageScopeId = (invoice) => String(invoice?.garageId || authState.activeGarage?.id || "");

  const getRowByInvoiceId = (invoiceId) => {
    if (!(listElement instanceof HTMLElement)) {
      return null;
    }
    const rows = listElement.querySelectorAll("[data-werkbon-row-id]");
    for (const row of rows) {
      if (row instanceof HTMLElement && String(row.dataset.werkbonRowId ?? "") === String(invoiceId)) {
        return row;
      }
    }
    return null;
  };

  const patchCompletedAppointmentNotes = async (invoice, notesPatch) => {
    if (!supabase) {
      throw new Error("Supabase is niet geconfigureerd.");
    }

    const rowId = String(invoice.completedAppointmentId || invoice.id || "");
    if (!rowId) {
      throw new Error("Werkbon ID ontbreekt.");
    }

    const garageScopeId = resolveGarageScopeId(invoice);
    let selectQuery = supabase
      .from("completed_appointments")
      .select("id, garage_id, completion_notes")
      .eq("id", rowId);

    if (garageScopeId) {
      selectQuery = selectQuery.eq("garage_id", garageScopeId);
    }

    const { data: row, error: selectError } = await selectQuery.maybeSingle();
    if (selectError) {
      throw selectError;
    }
    if (!row) {
      throw new Error("Werkbon niet gevonden.");
    }

    const currentNotes = parseCompletionNotes(row.completion_notes);
    const nextNotes = {
      ...currentNotes,
      ...notesPatch,
    };

    let updateQuery = supabase
      .from("completed_appointments")
      .update({ completion_notes: JSON.stringify(nextNotes) })
      .eq("id", rowId);

    if (garageScopeId) {
      updateQuery = updateQuery.eq("garage_id", garageScopeId);
    }

    const { error: updateError } = await updateQuery;
    if (updateError) {
      throw updateError;
    }

    return nextNotes;
  };

  const fetchSendPayload = async (invoiceId) => {
    const invoice = findInvoiceById(invoiceId);
    if (!invoice) {
      throw new Error("Werkbon niet gevonden.");
    }

    const rowId = String(invoice.completedAppointmentId || invoice.id || "");
    if (!rowId || !supabase) {
      const fallbackFactuurnummer = "";
      return {
        invoice,
        customer_name: invoice.customerName,
        customer_email: "",
        customer_phone: "",
        factuurnummer: fallbackFactuurnummer,
        total: invoice.summary.total,
        status: invoice.status,
      };
    }

    const garageScopeId = resolveGarageScopeId(invoice);
    let query = supabase
      .from("werkbonnen")
      .select("werkbon_id, garage_id, customer_name, customer_email, customer_phone, invoice_number, total_amount, invoice_status, payment_link, payment_link_sent_at, payment_method")
      .eq("werkbon_id", rowId);

    if (garageScopeId) {
      query = query.eq("garage_id", garageScopeId);
    }

    const { data: row, error } = await query.maybeSingle();
    if (error) {
      throw error;
    }

    const totalAmount = Number(row?.total_amount ?? 0);
    return {
      invoice,
      customer_name: String(row?.customer_name ?? invoice.customerName ?? "Klant"),
      customer_email: String(row?.customer_email ?? "").trim(),
      customer_phone: String(row?.customer_phone ?? "").trim(),
      factuurnummer: String(row?.invoice_number ?? "").trim(),
      total: Number.isFinite(totalAmount) && totalAmount > 0 ? totalAmount : invoice.summary.total,
      status: String(row?.invoice_status ?? invoice.status ?? "draft"),
      payment_link: String(row?.payment_link ?? "").trim(),
      payment_link_sent_at: String(row?.payment_link_sent_at ?? "").trim(),
      payment_method: String(row?.payment_method ?? "").trim(),
    };
  };

  const applyInvoiceStatusLocally = (invoiceId, nextStatus) => {
    updateInvoice(invoiceId, (currentInvoice) => ({
      ...currentInvoice,
      status: normalizeStatus(nextStatus),
    }));
  };

  const sendViaEmail = async (payload) => {
    if (!payload.customer_email) {
      showToast("Geen e-mailadres bekend voor deze klant", "error");
      return false;
    }

    await patchCompletedAppointmentNotes(payload.invoice, {
      status: "sent",
    });
    applyInvoiceStatusLocally(payload.invoice.id, "sent");
    showToast("Factuur verstuurd per e-mail ✓", "success");
    return true;
  };

  const sendViaWhatsapp = async (payload) => {
    if (!payload.customer_phone) {
      showToast("Geen telefoonnummer bekend voor deze klant", "error");
      return false;
    }

    const whatsappPhone = formatWhatsappPhone(payload.customer_phone);
    if (!whatsappPhone) {
      showToast("Geen telefoonnummer bekend voor deze klant", "error");
      return false;
    }

    const garage = garageSettings || authState.activeGarage;
    const paymentMode = String(garage?.mollieMethod || "none");
    const paymentDays = Math.max(1, parseInt(String(garage?.paymentDays ?? 14), 10) || 14);
    const garageName = String(garage?.garageName || garage?.name || "Uw garage");

    let paymentLink = null;
    try {
      paymentLink = await generatePaymentLink(
        garage,
        {
          totalAmount: payload.total,
          factuurnummer: payload.factuurnummer || "",
          customerName: payload.customer_name || "Klant",
          paymentDays,
        },
        (warning) => showToast(warning, "error"),
        supabase,
      );
    } catch {
      // Non-critical — proceed without payment link
    }

    if (paymentMode !== "none" && !paymentLink) {
      showToast("Geen betaallink gemaakt. Controleer Mollie API-sleutel/instellingen en probeer opnieuw.", "error");
      return false;
    }

    const messageParts = [
      `Beste ${payload.customer_name || "klant"},`,
      "",
      `Hierbij uw factuur van ${garageName}.`,
      "",
      `Factuurnummer: ${payload.factuurnummer || "-"}`,
      `Totaalbedrag: €${formatWhatsappInvoiceTotal(payload.total)}`,
      `Betaaltermijn: ${paymentDays} dagen`,
    ];

    if (paymentLink) {
      messageParts.push("", "Betaal eenvoudig via Mollie:", paymentLink);
    }

    messageParts.push("", "Met vriendelijke groet,", garageName);

    const message = messageParts.join("\n");

    const targetUrl = `https://wa.me/${encodeURIComponent(whatsappPhone)}?text=${encodeURIComponent(message)}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");

    if (paymentLink) {
      try {
        await patchCompletedAppointmentNotes(payload.invoice, {
          status: payload.invoice.status !== "paid" ? "sent" : payload.invoice.status,
          payment_link: paymentLink,
          payment_link_sent_at: new Date().toISOString(),
          payment_method: "mollie",
        });
        const now = new Date().toISOString();
        const idx = invoices.findIndex((item) => item.id === payload.invoice.id);
        if (idx !== -1) {
          invoices[idx] = {
            ...invoices[idx],
            status: invoices[idx].status !== "paid" ? "sent" : invoices[idx].status,
            paymentLink,
            paymentLinkSentAt: now,
            paymentMethod: "mollie",
          };
        }
      } catch {
        // Non-critical — payment link was still sent via WhatsApp
      }
    } else {
      applyInvoiceStatusLocally(payload.invoice.id, "sent");
    }

    showToast("WhatsApp bericht geopend ✓", "success");
    return true;
  };

  const openSendDropdown = (button, payload) => {
    closeSendDropdown();

    const rect = button.getBoundingClientRect();
    const dropdown = document.createElement("div");
    dropdown.className = "send-dropdown";
    dropdown.setAttribute("data-send-dropdown", "true");

    dropdown.innerHTML = `
      <button type="button" data-send-option="email" data-werkbon-id="${escapeHtml(payload.invoice.id)}">
        📧 Per e-mail ${payload.customer_email ? "" : '<span class="send-dropdown-muted">(geen e-mail)</span>'}
      </button>
      <button type="button" data-send-option="whatsapp" data-werkbon-id="${escapeHtml(payload.invoice.id)}">
        💬 Via WhatsApp ${payload.customer_phone ? "" : '<span class="send-dropdown-muted">(geen telefoon)</span>'}
      </button>
      <button type="button" data-send-option="both" data-werkbon-id="${escapeHtml(payload.invoice.id)}">
        📤 Beide versturen
      </button>
    `;

    document.body.append(dropdown);
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const menuRect = dropdown.getBoundingClientRect();
    const left = Math.max(8, Math.min(rect.left, viewportWidth - menuRect.width - 8));
    const top = rect.bottom + menuRect.height + 8 > viewportHeight
      ? Math.max(8, rect.top - menuRect.height - 8)
      : rect.bottom + 6;

    dropdown.style.left = `${Math.round(left)}px`;
    dropdown.style.top = `${Math.round(top)}px`;

    activeSendDropdown = dropdown;
    activeSendPayload = payload;
  };

  const setButtonLoading = (button, loadingText) => {
    if (!(button instanceof HTMLButtonElement)) {
      return () => {};
    }
    const originalLabel = button.textContent || "";
    button.disabled = true;
    button.textContent = loadingText;
    return () => {
      button.disabled = false;
      button.textContent = originalLabel;
    };
  };

  const fadeOutInvoiceRow = (invoiceId) => new Promise((resolve) => {
    const row = getRowByInvoiceId(invoiceId);
    if (!(row instanceof HTMLElement)) {
      resolve();
      return;
    }

    row.classList.add("werkbon-row-removing");
    window.setTimeout(resolve, 220);
  });

  const expandInvoice = (invoiceId) => {
    expandedInvoiceId = invoiceId;
    render();
  };

  const openWerkbonModal = (invoiceId, isEditing = false) => {
    selectedInvoiceId = invoiceId;
    modalOpen = true;
    editingInvoiceId = isEditing ? invoiceId : "";
    render();
  };

  const applySendStatus = (invoiceId, channelLabel) => {
    const invoice = invoices.find((item) => item.id === invoiceId);
    if (!invoice) {
      return;
    }

    if (invoice.status === "paid") {
      setNotice(`Invoice for ${formatLicensePlate(invoice.licensePlate)} is already paid.`);
      openWerkbonModal(invoiceId, false);
      return;
    }

    updateInvoice(invoiceId, (currentInvoice) => ({
      ...currentInvoice,
      status: "sent",
    }));
    setNotice(`Werkbon sent to customer via ${channelLabel}.`);
    openWerkbonModal(invoiceId, false);
  };

  const markInvoicePaid = async (invoiceId, button) => {
    const invoice = invoices.find((item) => item.id === invoiceId);
    if (!invoice) {
      return;
    }

    if (invoice.status === "paid") {
      setNotice(`Invoice for ${formatLicensePlate(invoice.licensePlate)} is already marked as paid.`);
      openWerkbonModal(invoiceId, false);
      return;
    }

    const confirmed = await showWerkbonConfirmDialog({
      title: "Werkbon markeren als betaald?",
      body: "Dit registreert de betaling als vandaag ontvangen.",
      confirmLabel: "Markeer als betaald",
      cancelLabel: "Annuleren",
    });

    if (!confirmed) {
      return;
    }

    const stopLoading = setButtonLoading(button, "Opslaan...");
    try {
      await patchCompletedAppointmentNotes(invoice, {
        status: "paid",
        payment_method: "manual",
        payment_date: new Date().toISOString(),
      });

      updateInvoice(invoiceId, (currentInvoice) => ({
        ...currentInvoice,
        status: "paid",
      }));

      showToast("Werkbon gemarkeerd als betaald ✓", "success");
      render();
    } catch {
      showToast("Er ging iets mis", "error");
      stopLoading();
      return;
    }

    stopLoading();
  };

  const handleSaveEdit = (invoiceId) => {
    const invoice = invoices.find((item) => item.id === invoiceId);
    if (!invoice || !(drawerElement instanceof HTMLElement)) {
      return;
    }

    const statusInput = drawerElement.querySelector("[data-werkbon-edit-status]");
    const hoursInput = drawerElement.querySelector("[data-werkbon-edit-hours]");
    const rateInput = drawerElement.querySelector("[data-werkbon-edit-rate]");

    if (!(statusInput instanceof HTMLSelectElement) || !(hoursInput instanceof HTMLInputElement) || !(rateInput instanceof HTMLInputElement)) {
      return;
    }

    const nextStatus = normalizeStatus(statusInput.value);
    const nextHours = Math.max(0, Number(hoursInput.value || invoice.labour.hours));
    const nextRate = Math.max(0, Number(rateInput.value || invoice.labour.rate));

    updateInvoice(invoiceId, (currentInvoice) => ({
      ...currentInvoice,
      status: nextStatus,
      labour: {
        ...currentInvoice.labour,
        hours: nextHours,
        rate: nextRate,
      },
    }));

    editingInvoiceId = "";
    selectedInvoiceId = invoiceId;
    modalOpen = true;
    setNotice("Werkbon updated.");
    render();
  };

  const deleteInvoice = async (invoiceId, button) => {
    const invoice = invoices.find((item) => item.id === invoiceId);
    if (!invoice) {
      return;
    }

    const confirmed = await showWerkbonConfirmDialog({
      title: "Werkbon verwijderen?",
      body: "Deze actie kan niet ongedaan worden gemaakt. De werkbon wordt permanent verwijderd.",
      confirmLabel: "Verwijderen",
      cancelLabel: "Annuleren",
      confirmClassName: "danger",
    });

    if (!confirmed) {
      return;
    }

    const stopLoading = setButtonLoading(button, "Opslaan...");

    try {
      if (!supabase) {
        throw new Error("Supabase is niet geconfigureerd.");
      }

      const rowId = String(invoice.completedAppointmentId || invoice.id || "");
      if (!rowId) {
        throw new Error("Werkbon ID ontbreekt.");
      }

      let deleteQuery = supabase
        .from("completed_appointments")
        .delete()
        .eq("id", rowId);

      const garageScopeId = resolveGarageScopeId(invoice);
      if (garageScopeId) {
        deleteQuery = deleteQuery.eq("garage_id", garageScopeId);
      }

      const { error } = await deleteQuery;
      if (error) {
        throw error;
      }
    } catch (error) {
      showToast("Verwijderen mislukt", "error");
      stopLoading();
      return;
    }

    await fadeOutInvoiceRow(invoiceId);

    invoices = invoices.filter((item) => item.id !== invoiceId);
    if (expandedInvoiceId === invoiceId) {
      expandedInvoiceId = "";
    }
    if (selectedInvoiceId === invoiceId) {
      selectedInvoiceId = "";
      modalOpen = false;
      editingInvoiceId = "";
    }
    showToast("Werkbon verwijderd", "success");
    closeSendDropdown();
    render();
    stopLoading();
  };

  const handleWerkbonAction = async (action, invoiceId, actionButton) => {
    if (action === "view") {
      window.location.href = pageUrl(`werkbon-detail.html?id=${encodeURIComponent(invoiceId)}`);
      return;
    }

    if (action === "edit") {
      window.location.href = pageUrl(`werkbon-detail.html?id=${encodeURIComponent(invoiceId)}&edit=true`);
      return;
    }

    if (action === "cancel-edit") {
      editingInvoiceId = "";
      modalOpen = false;
      render();
      return;
    }

    if (action === "save-edit") {
      handleSaveEdit(invoiceId);
      return;
    }

    if (action === "send-customer") {
      if (!(actionButton instanceof HTMLButtonElement)) {
        return;
      }

      if (activeSendPayload?.invoice?.id === invoiceId && activeSendDropdown instanceof HTMLElement) {
        closeSendDropdown();
        return;
      }

      const stopLoading = setButtonLoading(actionButton, "Laden...");
      try {
        const payload = await fetchSendPayload(invoiceId);
        openSendDropdown(actionButton, payload);
      } catch {
        showToast("Er ging iets mis", "error");
      }
      stopLoading();
      return;
    }

    if (action === "send-sms") {
      applySendStatus(invoiceId, "SMS");
      return;
    }

    if (action === "send-whatsapp") {
      applySendStatus(invoiceId, "WhatsApp");
      return;
    }

    if (action === "mark-paid") {
      await markInvoicePaid(invoiceId, actionButton);
      return;
    }

    if (action === "download-pdf") {
      const invoice = invoices.find((item) => item.id === invoiceId);
      if (!invoice) {
        return;
      }

      const popupOpened = openPrintWindow(invoice);
      setNotice(popupOpened ? "Print dialog opened for PDF export." : "Allow pop-ups to export this werkbon as PDF.");
      return;
    }

    if (action === "delete") {
      await deleteInvoice(invoiceId, actionButton);
    }
  };

  const render = () => {
    if (!(summaryElement instanceof HTMLElement) || !(listElement instanceof HTMLElement) || !(drawerElement instanceof HTMLElement) || !(createModalHost instanceof HTMLElement)) {
      return;
    }

    const selectedStatus = statusFilter instanceof HTMLSelectElement ? statusFilter.value : "all";
    const searchTerm = searchInput instanceof HTMLInputElement ? searchInput.value.trim().toLowerCase() : "";

    const visibleInvoices = [...invoices]
      .sort((left, right) => parseDate(right.completedAt)?.getTime() - parseDate(left.completedAt)?.getTime())
      .filter((invoice) => {
        const haystack = [invoice.licensePlate, invoice.customerName, invoice.carModel].join(" ").toLowerCase();
        const matchesSearch = !searchTerm || haystack.includes(searchTerm);
        const matchesStatus = selectedStatus === "all" || invoice.status === selectedStatus;
        return matchesSearch && matchesStatus;
      });

    summaryElement.innerHTML = summaryCardsMarkup(invoices);
    listElement.innerHTML = visibleInvoices.length
      ? visibleInvoices.map((invoice) => invoiceRowMarkup(invoice, expandedInvoiceId === invoice.id)).join("")
      : invoiceListMarkup(visibleInvoices, Boolean(searchTerm || selectedStatus !== "all"));

    const selectedInvoice = invoices.find((invoice) => invoice.id === selectedInvoiceId) ?? null;
    drawerElement.classList.toggle("is-open", modalOpen && Boolean(selectedInvoice));
    drawerElement.innerHTML = modalOpen && selectedInvoice
      ? werkbonModalMarkup(selectedInvoice, editingInvoiceId === selectedInvoice.id)
      : "";

    renderCreateModalDom();
  };

  createTrigger?.addEventListener("click", () => {
    createModalOpen = true;
    createModalStep = 1;
    renderCreateModalDom({ forceMount: true, refreshContent: true });
  });

  const handleCreateActionClick = async (target) => {
    const createActionElement = target.closest("[data-create-action]");
    if (!(createActionElement instanceof HTMLElement)) {
      return false;
    }

    const createAction = String(createActionElement.dataset.createAction ?? "");

    if (createAction === "attempt-close") {
      if (createActionElement.classList.contains("werkbon-create-shadow") && target.closest(".werkbon-create-panel")) {
        return true;
      }
      await attemptCloseCreateModal();
      return true;
    }

    if (createAction === "jump-step") {
      const nextStep = Number(createActionElement.dataset.step ?? createModalStep);
      createModalStep = Math.min(5, Math.max(1, nextStep));
      createPaymentModalOpen = false;
      renderCreateModalDom({ refreshContent: true });
      return true;
    }

    if (createAction === "prev-step") {
      createModalStep = Math.max(1, createModalStep - 1);
      renderCreateModalDom({ refreshContent: true });
      return true;
    }

    if (createAction === "next-step") {
      if (createModalStep === 1 && createRdwStatus !== "success") {
        if (createRdwAutoFetchTimer) {
          window.clearTimeout(createRdwAutoFetchTimer);
          createRdwAutoFetchTimer = 0;
        }
        await fetchRdwForCreateState({ showShortInputError: true });
      }

      if (createModalStep === 1 && createRdwStatus !== "success") {
        setNotice("Rond eerst de RDW validatie af.");
        return true;
      }
      createModalStep = Math.min(5, createModalStep + 1);
      renderCreateModalDom({ refreshContent: true });
      return true;
    }

    if (createAction === "remove-part") {
      const partIndex = Number(createActionElement.dataset.partIndex ?? -1);
      if (Number.isFinite(partIndex) && partIndex >= 0) {
        werkbonState.onderdelen.splice(partIndex, 1);
        renderCreateModalDom({ refreshContent: true });
      }
      return true;
    }

    if (createAction === "quick-part") {
      werkbonState.onderdelen.push({
        naam: String(createActionElement.dataset.partName ?? "Onderdeel"),
        aantal: 1,
        prijs: toPositiveNumber(createActionElement.dataset.partPrice, 0),
      });
      renderCreateModalDom({ refreshContent: true });
      return true;
    }

    if (createAction === "add-manual-part") {
      werkbonState.onderdelen.push({
        naam: "",
        aantal: 1,
        prijs: 0,
      });
      renderCreateModalDom({ refreshContent: true });
      return true;
    }

    if (createAction === "open-payment") {
      createPaymentModalOpen = true;
      renderCreateModalDom();
      return true;
    }

    if (createAction === "close-payment") {
      createPaymentModalOpen = false;
      renderCreateModalDom();
      return true;
    }

    if (createAction === "select-payment") {
      createSelectedPaymentMethod = String(createActionElement.dataset.paymentMethod ?? "");
      createPaymentModalOpen = false;
      setNotice(`Betaalmethode gekozen: ${createSelectedPaymentMethod}.`);
      renderCreateModalDom();
      return true;
    }

    if (createAction === "save-werkbon") {
      try {
        await saveNewWerkbonToSupabase();
      } catch (error) {
        setNotice(error instanceof Error ? error.message : "Opslaan mislukt.");
      }
      return true;
    }

    if (createAction === "create-pdf") {
      try {
        await createPdfFromDraft();
        setNotice("PDF gegenereerd.");
      } catch (error) {
        setNotice(error instanceof Error ? error.message : "PDF genereren mislukt.");
      }
      return true;
    }

    if (createAction === "email-werkbon") {
      try {
        await sendDraftByEmail();
        setNotice("Werkbon e-mail verstuurd.");
      } catch (error) {
        setNotice(error instanceof Error ? error.message : "E-mail verzenden mislukt.");
      }
      return true;
    }

    if (createAction === "whatsapp-werkbon") {
      openDraftWhatsapp();
      setNotice("WhatsApp bericht geopend.");
      return true;
    }

    return false;
  };

  const handleCreateInputEvent = (target) => {
    if (!(target instanceof HTMLElement) || !createModalOpen) {
      return false;
    }

    if (target.matches("[data-create-field='kenteken']")) {
      if (target instanceof HTMLInputElement) {
        const formattedKenteken = formatKentekenInput(target.value);
        target.value = formattedKenteken;
        werkbonState.voertuig = {
          ...werkbonState.voertuig,
          kenteken: formattedKenteken,
        };
        createRdwStatus = "idle";
        createRdwError = "";

        if (createRdwAutoFetchTimer) {
          window.clearTimeout(createRdwAutoFetchTimer);
          createRdwAutoFetchTimer = 0;
        }

        const normalizedKenteken = normalizeLicensePlate(formattedKenteken);
        const liveStatusElement = createModalHost.querySelector("#vehicleLookupStatus");
        if (liveStatusElement instanceof HTMLElement) {
          liveStatusElement.classList.remove("is-success", "is-error");
          liveStatusElement.textContent = normalizedKenteken.length >= 6
            ? "Kenteken controleren..."
            : "Typ kenteken om te zoeken";
        }

        syncCreateNextButtonStateDom();

        if (normalizedKenteken.length >= 6) {
          createRdwAutoFetchTimer = window.setTimeout(() => {
            createRdwAutoFetchTimer = 0;
            void fetchRdwForCreateState();
          }, 420);
        }
      }
      return true;
    }

    if (target.matches("[data-create-field='btw']")) {
      if (target instanceof HTMLSelectElement) {
        werkbonState.btw = toPositiveNumber(target.value, 21);
        syncCreateCalculationCardDom();
      }
      return true;
    }

    if (target.matches("[data-klant-field]")) {
      const fieldName = String(target.getAttribute("data-klant-field") ?? "");
      if (!fieldName) {
        return true;
      }
      const value = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement ? target.value : "";
      werkbonState.klant = {
        ...werkbonState.klant,
        [fieldName]: value,
      };
      return true;
    }

    if (target.matches("[data-arbeid-field]")) {
      const fieldName = String(target.getAttribute("data-arbeid-field") ?? "");
      if (!fieldName) {
        return true;
      }

      const nextArbeid = {
        ...werkbonState.arbeid,
      };

      if (fieldName === "enabled" && target instanceof HTMLInputElement) {
        nextArbeid.enabled = target.checked;
        werkbonState.arbeid = nextArbeid;
        syncCreateLabourFieldsDom();
        return true;
      } else if (target instanceof HTMLInputElement) {
        nextArbeid[fieldName] = toPositiveNumber(target.value, fieldName === "tarief" ? 65 : 0);
      }

      werkbonState.arbeid = nextArbeid;
      syncCreateCalculationCardDom();
      return true;
    }

    if (target.matches("[data-part-field]")) {
      const partIndex = Number(target.getAttribute("data-part-index") ?? -1);
      const partField = String(target.getAttribute("data-part-field") ?? "");
      if (!Number.isFinite(partIndex) || partIndex < 0 || !partField) {
        return true;
      }
      const row = werkbonState.onderdelen[partIndex] ?? { naam: "", aantal: 1, prijs: 0 };
      const nextRow = { ...row };
      if (partField === "naam") {
        nextRow.naam = target instanceof HTMLInputElement ? target.value : "";
      }
      if (partField === "aantal") {
        nextRow.aantal = target instanceof HTMLInputElement ? toPositiveNumber(target.value, 1) : 1;
      }
      if (partField === "prijs") {
        nextRow.prijs = target instanceof HTMLInputElement ? toPositiveNumber(target.value, 0) : 0;
      }
      werkbonState.onderdelen[partIndex] = nextRow;
      syncCreatePartTotalsDom();
      return true;
    }

    return false;
  };

  createModalHost.addEventListener("click", async (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) {
      return;
    }
    await handleCreateActionClick(target);
  });

  createModalHost.addEventListener("input", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement) {
      handleCreateInputEvent(target);
    }
  });

  createModalHost.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && createModalOpen) {
      event.preventDefault();
      void attemptCloseCreateModal();
    }
  });

  contentArea.addEventListener("click", async (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) {
      return;
    }

    if (await handleCreateActionClick(target)) {
      return;
    }

    const actionButton = target.closest("[data-werkbon-action]");
    if (actionButton instanceof HTMLElement) {
      const action = String(actionButton.dataset.werkbonAction ?? "");
      const invoiceId = String(actionButton.dataset.werkbonId ?? "");

      if (action === "close-modal") {
        modalOpen = false;
        editingInvoiceId = "";
        render();
        return;
      }

      if (action === "toggle") {
        expandedInvoiceId = expandedInvoiceId === invoiceId ? "" : invoiceId;
        render();
        return;
      }

      if (action === "close-drawer") {
        expandedInvoiceId = "";
        editingInvoiceId = "";
        render();
        return;
      }

      if (!invoiceId) {
        return;
      }

      await handleWerkbonAction(action, invoiceId, actionButton);
      return;
    }

    const row = target.closest("[data-werkbon-row-id]");
    if (row instanceof HTMLElement && !target.closest("button, input, select, textarea, a")) {
      const invoiceId = String(row.dataset.werkbonRowId ?? "");
      if (invoiceId) {
        expandedInvoiceId = expandedInvoiceId === invoiceId ? "" : invoiceId;
        render();
      }
    }
  });

  const previousWerkbonDocumentClickHandler = window.__werkbonDocumentClickHandler;
  if (typeof previousWerkbonDocumentClickHandler === "function") {
    document.removeEventListener("click", previousWerkbonDocumentClickHandler);
  }

  const handleWerkbonDocumentClick = async (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) {
      return;
    }

    const sendOptionButton = target.closest("[data-send-option]");
    if (sendOptionButton instanceof HTMLButtonElement && activeSendPayload) {
      event.preventDefault();
      const option = String(sendOptionButton.dataset.sendOption ?? "");
      const payload = activeSendPayload;
      closeSendDropdown();

      try {
        if (option === "email") {
          await sendViaEmail(payload);
        } else if (option === "whatsapp") {
          await sendViaWhatsapp(payload);
        } else if (option === "both") {
          await sendViaEmail(payload);
          await sendViaWhatsapp(payload);
        }
        render();
      } catch {
        showToast("Er ging iets mis", "error");
      }

      return;
    }

    if (!(target.closest("[data-send-dropdown]") || target.closest('[data-werkbon-action="send-customer"]'))) {
      closeSendDropdown();
    }
  };

  window.__werkbonDocumentClickHandler = handleWerkbonDocumentClick;
  document.addEventListener("click", handleWerkbonDocumentClick);

  contentArea.addEventListener("keydown", (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target) {
      return;
    }

    if (event.key === "Escape" && createModalOpen) {
      event.preventDefault();
      void attemptCloseCreateModal();
      return;
    }

    if ((event.key === "Enter" || event.key === " ") && target.matches("[data-werkbon-row-id]")) {
      event.preventDefault();
      const invoiceId = String(target.dataset.werkbonRowId ?? "");
      if (invoiceId) {
        expandedInvoiceId = expandedInvoiceId === invoiceId ? "" : invoiceId;
        render();
      }
    }

    if (event.key === "Escape" && modalOpen) {
      modalOpen = false;
      editingInvoiceId = "";
      render();
      return;
    }

    if (event.key === "Escape" && expandedInvoiceId) {
      expandedInvoiceId = "";
      render();
    }
  });

  contentArea.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (handleCreateInputEvent(target)) {
      return;
    }
  });

  searchInput?.addEventListener("input", render);
  statusFilter?.addEventListener("change", render);

  await loadGarageSettings();

  try {
    let completedRows = [];
    try {
      completedRows = await fetchCompletedAppointmentsByGarageIds({ garageIds });
    } catch {
      // Supabase unavailable or SELECT blocked by RLS
    }
    invoices = completedRows
      .filter((row) => parseCompletionNotes(row.completion_notes).werkbon_created === true)
      .map(invoiceFromCompletedRow)
      .sort((a, b) => new Date(b.completedAt ?? 0).getTime() - new Date(a.completedAt ?? 0).getTime());

    // Fetch vehicle data for all unique license plates
    const uniqueLicensePlates = new Set(
      invoices
        .map((inv) => inv.licensePlate)
        .filter((plate) => plate && plate !== "UNKNOWN")
        .map((plate) => normalizeLicensePlate(plate))
    );

    for (const licensePlate of uniqueLicensePlates) {
      if (licensePlate && !vehicleCache.has(licensePlate)) {
        try {
          const vehicle = await fetchVehicleByLicensePlate(licensePlate);
          if (vehicle) {
            vehicleCache.set(licensePlate, vehicle);
          }
        } catch (error) {
          console.error(`Failed to fetch vehicle for ${licensePlate}:`, error);
        }
      }
    }

    // Update invoices with vehicle data
    invoices = invoices.map((invoice) => {
      const normalizedPlate = normalizeLicensePlate(invoice.licensePlate);
      const vehicle = vehicleCache.get(normalizedPlate) || fallbackVehiclePreview(normalizedPlate);
      return {
        ...invoice,
        carModel: vehicle.title + (vehicle.buildYear ? ` (${vehicle.buildYear})` : '') || invoice.carModel,
      };
    });

    const bookings = await getBookings({ garageIds });
    const emailSummary = summarizeEmailInbox(bookings);
    setUnreadEmailCount(emailSummary.unread);

    expandedInvoiceId = invoices[0]?.id ?? "";
  } catch (error) {
    invoices = [];
    setUnreadEmailCount(0);
    console.error(error);
  }

  render();

  if (openCreateFromSearch) {
    createModalOpen = true;
    createModalStep = 1;
    renderCreateModalDom({ forceMount: true, refreshContent: true });
  }
}