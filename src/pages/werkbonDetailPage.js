import { jsPDF } from "jspdf";
import { createClient } from "@supabase/supabase-js";
import { createAppShell } from "../components/appShell.js";
import { getBookings } from "../services/bookingService.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";
import { pageUrl } from "../utils/paths.js";
import { generatePaymentLink } from "../services/mollieService.js";

const STATUS_META = {
  draft: { label: "Draft", className: "werkbon-status-draft" },
  sent: { label: "Sent", className: "werkbon-status-sent" },
  paid: { label: "Paid", className: "werkbon-status-paid" },
};

const VAT_RATE = 0.21;
const LOCAL_OVERRIDE_KEY = "garage_dashboard_werkbon_detail_overrides_v2";
const LOCAL_INVOICE_SEQ_KEY = "garage_dashboard_invoice_sequence_v1";

const MOCK_INVOICE_BLUEPRINTS = [
  {
    id: "wb-1001",
    bookingId: null,
    licensePlate: "KJ923L",
    customerName: "Sophie de Vries",
    customerEmail: "sophie.devries@example.nl",
    customerPhone: "+31 6 1234 5678",
    carModel: "Volkswagen Golf 1.4 TSI",
    serviceTypes: ["APK", "Onderhoud"],
    completedAt: "2026-03-21T14:30:00",
    appointmentDate: "2026-03-21",
    kmStand: 128540,
    status: "draft",
    vatEnabled: true,
    description: "APK keuring en grote onderhoudsbeurt uitgevoerd.",
    internalNote: "Klant wil volgende keer wintercheck combineren.",
    parts: [
      { name: "Oil filter", quantity: 1, price: 18 },
      { name: "Engine oil 5W30", quantity: 4, price: 11.5 },
    ],
    labour: { hours: 1.5, rate: 54 },
  },
  {
    id: "wb-1002",
    bookingId: null,
    licensePlate: "XR184P",
    customerName: "Thomas Mulder",
    customerEmail: "thomas.mulder@example.nl",
    customerPhone: "+31 6 9988 7766",
    carModel: "BMW 3 Series Touring",
    serviceTypes: ["Banden"],
    completedAt: "2026-03-24T10:15:00",
    appointmentDate: "2026-03-24",
    kmStand: 201450,
    status: "sent",
    vatEnabled: true,
    description: "Bandenwissel en uitlijning.",
    internalNote: "Achterbanden slijten ongelijk, over 5k km terug laten komen.",
    parts: [
      { name: "All-season tyre", quantity: 2, price: 79.5 },
      { name: "Valve set", quantity: 1, price: 12 },
    ],
    labour: { hours: 1, rate: 58 },
  },
  {
    id: "wb-1003",
    bookingId: null,
    licensePlate: "NB557K",
    customerName: "Mehmet Kaya",
    customerEmail: "mehmet.kaya@example.nl",
    customerPhone: "+31 6 2233 4455",
    carModel: "Mercedes-Benz A-Class",
    serviceTypes: ["Airco", "APK"],
    completedAt: "2026-03-20T16:05:00",
    appointmentDate: "2026-03-20",
    kmStand: 88420,
    status: "paid",
    vatEnabled: false,
    description: "Airco onderhoud en APK afmelding.",
    internalNote: "Zakelijke klant, BTW verlegd.",
    parts: [
      { name: "A/C refrigerant refill", quantity: 1, price: 62 },
      { name: "Cabin filter", quantity: 1, price: 28 },
    ],
    labour: { hours: 1.2, rate: 60 },
    paidAt: "2026-03-21",
  },
];

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

function formatWhatsappPhone(rawPhone) {
  const digits = String(rawPhone ?? "").replace(/\D+/g, "");
  if (!digits) return "";
  if (digits.startsWith("00")) return digits.slice(2);
  if (digits.startsWith("0")) return `31${digits.slice(1)}`;
  return digits;
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
  return Math.round(Number(value || 0) * 100) / 100;
}

function formatCurrency(value) {
  return `EUR ${roundCurrency(value).toFixed(2)}`;
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

  return date.toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatPaidAt(value) {
  if (!value) return "";
  const date = parseDate(value);
  if (!date) return "";
  const d = date.toLocaleDateString("nl-NL", { day: "numeric", month: "short" });
  const t = date.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit", hour12: false });
  return `${d} · ${t}`;
}

function toDateInputValue(value) {
  const date = parseDate(value);
  if (!date) {
    return "";
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatLicensePlate(value) {
  const cleaned = String(value ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  return cleaned.replace(/(.{2})(?=.)/g, "$1-");
}

function normalizeStatus(value) {
  const normalized = String(value ?? "draft").trim().toLowerCase();
  return STATUS_META[normalized] ? normalized : "draft";
}

function normalizeNonNegativeNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function splitDecimalHours(decimalHours) {
  const totalMinutes = Math.max(0, Math.round(normalizeNonNegativeNumber(decimalHours) * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes };
}

function formatHoursForDisplay(decimalHours) {
  const totalMinutes = Math.max(0, Math.round(normalizeNonNegativeNumber(decimalHours) * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${String(minutes).padStart(2, "0")}m`;
}

function computeInvoiceTotals(parts, labour, vatEnabled) {
  const normalizedParts = (Array.isArray(parts) ? parts : []).map((part) => {
    const quantity = normalizeNonNegativeNumber(part.quantity);
    const price = normalizeNonNegativeNumber(part.price);
    return {
      name: String(part.name ?? "").trim(),
      quantity,
      price,
      total: roundCurrency(quantity * price),
    };
  });

  const labourHours = normalizeNonNegativeNumber(labour?.hours);
  const labourRate = normalizeNonNegativeNumber(labour?.rate);
  const labourTotal = roundCurrency(labourHours * labourRate);
  const subtotal = roundCurrency(normalizedParts.reduce((sum, part) => sum + part.total, 0) + labourTotal);
  const vat = roundCurrency(vatEnabled ? subtotal * VAT_RATE : 0);
  const total = roundCurrency(subtotal + vat);

  return {
    parts: normalizedParts,
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
  };
}

function buildInvoiceRecord(blueprint) {
  const vatEnabled = blueprint.vatEnabled !== false;
  const computed = computeInvoiceTotals(blueprint.parts, blueprint.labour, vatEnabled);

  return {
    id: String(blueprint.id ?? ""),
    bookingId: blueprint.bookingId ? String(blueprint.bookingId) : null,
    completedAppointmentId: blueprint.completedAppointmentId ? String(blueprint.completedAppointmentId) : null,
    invoiceNumber: blueprint.invoiceNumber ? String(blueprint.invoiceNumber) : "",
    licensePlate: String(blueprint.licensePlate ?? "UNKNOWN"),
    customerName: String(blueprint.customerName ?? "Unknown customer"),
    customerEmail: String(blueprint.customerEmail ?? ""),
    customerPhone: String(blueprint.customerPhone ?? ""),
    carModel: String(blueprint.carModel ?? "Unknown vehicle"),
    serviceTypes: Array.isArray(blueprint.serviceTypes) ? blueprint.serviceTypes.map(String) : ["Other"],
    completedAt: String(blueprint.completedAt ?? new Date().toISOString()),
    appointmentDate: String(blueprint.appointmentDate ?? toDateInputValue(blueprint.completedAt) ?? ""),
    kmStand: normalizeNonNegativeNumber(blueprint.kmStand),
    status: normalizeStatus(blueprint.status),
    vatEnabled,
    description: String(blueprint.description ?? "").trim(),
    internalNote: String(blueprint.internalNote ?? "").trim(),
    paidAt: blueprint.paidAt ? String(blueprint.paidAt) : "",
    parts: computed.parts,
    labour: computed.labour,
    summary: computed.summary,
    paymentLink: String(blueprint.paymentLink ?? ""),
    paymentLinkSentAt: String(blueprint.paymentLinkSentAt ?? ""),
    paymentMethod: String(blueprint.paymentMethod ?? ""),
  };
}

function createMockInvoices() {
  return MOCK_INVOICE_BLUEPRINTS.map(buildInvoiceRecord);
}

function normalizePlateForLookup(plate) {
  return String(plate ?? "").replace(/[^A-Za-z0-9]/g, "").toUpperCase();
}

function parseContactField(rawMessage, key) {
  const message = String(rawMessage ?? "");
  const pattern = new RegExp(`\\b${key}\\s*:\\s*([^\\n]+)`, "i");
  return (message.match(pattern)?.[1] ?? "").trim();
}

function invoiceFromBooking(booking) {
  const name = parseContactField(booking.message, "name") || "Onbekende klant";
  const email = parseContactField(booking.message, "email");
  const phone = String(booking.phone ?? "").trim();
  const appointmentDate = toDateInputValue(booking.appointmentAt ?? booking.createdAt);

  return buildInvoiceRecord({
    id: String(booking.id),
    bookingId: String(booking.id),
    licensePlate: String(booking.licensePlate ?? ""),
    customerName: name,
    customerEmail: email,
    customerPhone: phone,
    carModel: "Voertuig",
    serviceTypes: [String(booking.service ?? "Service")],
    completedAt: booking.completedAt ?? booking.appointmentAt ?? booking.createdAt,
    appointmentDate,
    kmStand: 0,
    status: "draft",
    vatEnabled: true,
    description: parseContactField(booking.message, "message"),
    internalNote: "",
    parts: [{ name: "Service", quantity: 1, price: 0 }],
    labour: { hours: 0, rate: 0 },
  });
}

function tryParseJson(value) {
  if (value == null) {
    return null;
  }

  if (typeof value === "object") {
    return value;
  }

  try {
    return JSON.parse(String(value));
  } catch {
    return null;
  }
}

function splitServiceTypes(rawValue) {
  return String(rawValue ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function isUuidLike(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value ?? "").trim());
}

function invoiceFromCompletedAppointment(row) {
  const details = tryParseJson(row.completion_notes) ?? {};
  const serviceTypes = Array.isArray(details.service_types)
    ? details.service_types.map(String)
    : splitServiceTypes(row.service);
  const labour = details.labour && typeof details.labour === "object" ? details.labour : {};
  const parts = Array.isArray(details.parts) ? details.parts : [{ name: "Service", quantity: 1, price: 0 }];

  const derivedStatus = (() => {
    const explicit = String(details.status ?? "").trim().toLowerCase();
    if (explicit) {
      return explicit;
    }

    const paymentStatus = String(details.payment_status ?? "").trim().toLowerCase();
    const hasPaidAt = Boolean(String(details.paid_at ?? details.paidAt ?? "").trim());
    if (paymentStatus === "paid" || hasPaidAt) {
      return "paid";
    }

    return "draft";
  })();

  return buildInvoiceRecord({
    id: String(row.id ?? ""),
    completedAppointmentId: row.id ? String(row.id) : null,
    bookingId: row.booking_id ? String(row.booking_id) : null,
    invoiceNumber: String(details.invoice_number ?? details.invoiceNumber ?? ""),
    licensePlate: String(row.license_plate ?? ""),
    customerName: String(details.customer_name ?? details.customerName ?? "Onbekende klant"),
    customerEmail: String(details.customer_email ?? details.customerEmail ?? ""),
    customerPhone: String(details.customer_phone ?? details.customerPhone ?? ""),
    carModel: String(details.car_model ?? details.carModel ?? "Voertuig"),
    serviceTypes: serviceTypes.length ? serviceTypes : ["Service"],
    completedAt: String(row.completed_at ?? details.completed_at ?? details.completedAt ?? new Date().toISOString()),
    appointmentDate: String(row.appointment_date ?? details.appointment_date ?? details.appointmentDate ?? ""),
    kmStand: normalizeNonNegativeNumber(details.km_stand ?? details.kmStand),
    status: normalizeStatus(derivedStatus),
    vatEnabled: details.vat_enabled !== false && details.vatEnabled !== false,
    description: String(details.description ?? "").trim(),
    internalNote: String(details.internal_note ?? details.internalNote ?? "").trim(),
    paidAt: String(details.paid_at ?? details.paidAt ?? "").trim(),
    parts,
    labour: {
      hours: normalizeNonNegativeNumber(labour.hours),
      rate: normalizeNonNegativeNumber(labour.rate),
    },
    paymentLink: String(details.payment_link ?? ""),
    paymentLinkSentAt: String(details.payment_link_sent_at ?? ""),
    paymentMethod: String(details.payment_method ?? ""),
  });
}

async function getCompletedAppointmentInvoice(invoiceId, authState) {
  if (!supabase || !invoiceId || !authState?.activeGarage?.id) {
    return null;
  }

  if (!isUuidLike(invoiceId)) {
    return null;
  }

  const { data, error } = await supabase
    .from("completed_appointments")
    .select("id, booking_id, completed_at, appointment_date, appointment_time, license_plate, service, completion_notes")
    .eq("id", invoiceId)
    .eq("garage_id", authState.activeGarage.id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  return invoiceFromCompletedAppointment(data);
}

function isSupabaseRlsError(error) {
  return String(error?.code ?? "") === "42501" || Number(error?.status ?? 0) === 403;
}

function statusBadgeMarkup(status) {
  const meta = STATUS_META[normalizeStatus(status)] ?? STATUS_META.draft;
  return `<span class="status-chip ${escapeHtml(meta.className)}">${escapeHtml(meta.label)}</span>`;
}

function paymentLinkStatusMarkup(invoice) {
  if (invoice.status === "paid") {
    const paidAtStr = invoice.paidAt ? formatPaidAt(invoice.paidAt) : "";
    return `<div class="werkbon-payment-status-paid"><span class="status-chip werkbon-status-paid">Betaald</span>${paidAtStr ? `<span class="werkbon-paid-at">${escapeHtml(paidAtStr)}</span>` : ""}</div>`;
  }

  if (!invoice.paymentLink) {
    return "";
  }

  const sentLabel = invoice.paymentLinkSentAt ? formatDate(invoice.paymentLinkSentAt) : "onbekend";
  const viaLabel = "Via Mollie";
  return `
    <div class="werkbon-payment-status-card">
      <p class="werkbon-payment-status-title">Betaallink verstuurd</p>
      <p class="werkbon-payment-status-subtitle">${escapeHtml(viaLabel)} · ${escapeHtml(sentLabel)}</p>
      <div class="werkbon-payment-status-actions">
        <button class="button subtle" type="button" data-detail-action="copy-payment-link">Kopieer link</button>
        <button class="button subtle" type="button" data-detail-action="resend-payment-link">Opnieuw sturen</button>
      </div>
    </div>
  `;
}

function createEditDraft(invoice) {
  const labourSplit = splitDecimalHours(invoice.labour.hours);
  return {
    status: invoice.status,
    kmStand: String(invoice.kmStand || 0),
    appointmentDate: invoice.appointmentDate || "",
    customerEmail: invoice.customerEmail,
    customerPhone: invoice.customerPhone,
    vatEnabled: invoice.vatEnabled,
    description: invoice.description,
    internalNote: invoice.internalNote,
    labourHoursWhole: String(labourSplit.hours),
    labourMinutes: String(labourSplit.minutes),
    labourRate: String(invoice.labour.rate),
    parts: invoice.parts.map((part) => ({
      name: part.name,
      quantity: part.quantity,
      price: part.price,
    })),
  };
}

function draftToInvoicePatch(invoice, draft) {
  const safeStatus = normalizeStatus(draft.status || invoice.status);
  const hoursWhole = Math.min(300, Math.max(0, Number.parseInt(draft.labourHoursWhole || "0", 10) || 0));
  const minutes = Math.min(59, Math.max(0, Number.parseInt(draft.labourMinutes || "0", 10) || 0));
  const labourHours = hoursWhole + minutes / 60;
  const labourRate = normalizeNonNegativeNumber(draft.labourRate);

  const nextParts = (Array.isArray(draft.parts) ? draft.parts : [])
    .map((part) => ({
      name: String(part.name ?? "").trim(),
      quantity: normalizeNonNegativeNumber(part.quantity),
      price: normalizeNonNegativeNumber(part.price),
    }))
    .filter((part) => part.name || part.quantity || part.price);

  const finalParts = nextParts.length ? nextParts : [{ name: "Service", quantity: 1, price: 0 }];

  return {
    ...invoice,
    status: safeStatus,
    customerEmail: String(draft.customerEmail ?? invoice.customerEmail).trim(),
    customerPhone: String(draft.customerPhone ?? invoice.customerPhone).trim(),
    kmStand: normalizeNonNegativeNumber(draft.kmStand),
    appointmentDate: String(draft.appointmentDate ?? "").trim(),
    vatEnabled: draft.vatEnabled !== false,
    description: String(draft.description ?? "").trim(),
    internalNote: String(draft.internalNote ?? "").trim(),
    parts: finalParts,
    labour: {
      hours: labourHours,
      rate: labourRate,
    },
  };
}

function normalizeComparableInvoice(invoice) {
  return {
    status: normalizeStatus(invoice.status),
    customerEmail: String(invoice.customerEmail ?? "").trim(),
    customerPhone: String(invoice.customerPhone ?? "").trim(),
    kmStand: normalizeNonNegativeNumber(invoice.kmStand),
    appointmentDate: String(invoice.appointmentDate ?? ""),
    vatEnabled: invoice.vatEnabled !== false,
    description: String(invoice.description ?? "").trim(),
    internalNote: String(invoice.internalNote ?? "").trim(),
    labourHours: roundCurrency(normalizeNonNegativeNumber(invoice.labour?.hours)),
    labourRate: roundCurrency(normalizeNonNegativeNumber(invoice.labour?.rate)),
    parts: (invoice.parts ?? []).map((part) => ({
      name: String(part.name ?? "").trim(),
      quantity: roundCurrency(normalizeNonNegativeNumber(part.quantity)),
      price: roundCurrency(normalizeNonNegativeNumber(part.price)),
    })),
  };
}

function hasDraftChanges(invoice, draft) {
  const patched = buildInvoiceRecord(draftToInvoicePatch(invoice, draft));
  return JSON.stringify(normalizeComparableInvoice(invoice)) !== JSON.stringify(normalizeComparableInvoice(patched));
}

function partsRowsMarkup(parts, isEditing) {
  return (Array.isArray(parts) ? parts : [])
    .map((part, index) => {
      const quantity = normalizeNonNegativeNumber(part.quantity);
      const price = normalizeNonNegativeNumber(part.price);
      const total = roundCurrency(quantity * price);

      if (isEditing) {
        return `
          <div class="werkbon-part-row werkbon-parts-grid--edit" data-edit-part-row="${index}">
            <input class="werkbon-field-editable" type="text" data-detail-part-name value="${escapeHtml(part.name)}" placeholder="Product naam" />
            <div class="werkbon-input-affix">
              <span aria-hidden="true">EUR</span>
              <input type="number" data-detail-part-price value="${escapeHtml(String(price))}" min="0" step="0.01" />
            </div>
            <input class="werkbon-part-qty-input werkbon-field-editable" type="number" data-detail-part-qty value="${escapeHtml(String(quantity))}" min="0" step="1" />
            <strong class="werkbon-part-total-edit" data-detail-part-total="${index}">${escapeHtml(formatCurrency(total))}</strong>
            <button class="icon-button werkbon-delete-button" type="button" data-detail-action="remove-part" data-detail-part-index="${index}" aria-label="Verwijder product">&times;</button>
          </div>
        `;
      }

      return `
        <div class="werkbon-part-row werkbon-parts-grid">
          <span class="werkbon-part-name">${escapeHtml(part.name)}</span>
          <span>${escapeHtml(formatCurrency(price))}</span>
          <span>${escapeHtml(String(quantity))}</span>
          <strong>${escapeHtml(formatCurrency(total))}</strong>
        </div>
      `;
    })
    .join("");
}

function detailPageMarkup({ invoice, isEditing, draft, hasChanges }) {
  const viewModel = isEditing ? buildInvoiceRecord(draftToInvoicePatch(invoice, draft)) : invoice;

  const kmField = isEditing
    ? `<input class="werkbon-field-editable" type="number" min="0" step="1" data-detail-edit-km value="${escapeHtml(String(draft.kmStand))}" />`
    : `<span class="werkbon-field-locked">${escapeHtml(String(viewModel.kmStand || 0))} km</span>`;

  const dateField = isEditing
    ? `<input class="werkbon-field-editable" type="date" data-detail-edit-appointment-date value="${escapeHtml(draft.appointmentDate || "")}" />`
    : `<span class="werkbon-field-locked">${escapeHtml(viewModel.appointmentDate ? formatDate(viewModel.appointmentDate) : "Geen datum")}</span>`;

  const statusField = isEditing
    ? `<div class="werkbon-select-wrap">
        <select class="werkbon-field-editable werkbon-status-select" data-detail-edit-status>
          <option value="draft" ${viewModel.status === "draft" ? "selected" : ""}>Draft</option>
          <option value="sent"  ${viewModel.status === "sent"  ? "selected" : ""}>Verzonden</option>
          <option value="paid"  ${viewModel.status === "paid"  ? "selected" : ""}>Betaald</option>
        </select>
      </div>`
    : statusBadgeMarkup(viewModel.status);

  const labourSection = isEditing
    ? `<div class="werkbon-labour-edit-grid">
        <label class="werkbon-labour-edit-field">
          <span class="werkbon-meta-label">Uren</span>
          <div class="werkbon-hour-minute-grid">
            <div class="werkbon-input-affix">
              <input data-detail-edit-hours-whole type="number" min="0" max="300" step="1" value="${escapeHtml(String(draft.labourHoursWhole))}" />
              <span aria-hidden="true">h</span>
            </div>
            <div class="werkbon-input-affix">
              <input data-detail-edit-minutes type="number" min="0" max="59" step="1" value="${escapeHtml(String(draft.labourMinutes))}" />
              <span aria-hidden="true">m</span>
            </div>
          </div>
        </label>
        <label class="werkbon-labour-edit-field">
          <span class="werkbon-meta-label">Tarief per uur</span>
          <div class="werkbon-input-affix">
            <span aria-hidden="true">EUR</span>
            <input data-detail-edit-rate type="number" min="0" step="0.01" value="${escapeHtml(String(draft.labourRate))}" />
            <span aria-hidden="true">/h</span>
          </div>
        </label>
        <div class="werkbon-labour-edit-field">
          <span class="werkbon-meta-label">Arbeid totaal</span>
          <p class="werkbon-labour-total-preview"><strong data-detail-labour-total>${escapeHtml(formatCurrency(viewModel.labour.total))}</strong></p>
        </div>
      </div>`
    : `<div class="werkbon-labour-stats">
        <div class="werkbon-labour-stat">
          <span class="werkbon-meta-label">Uren</span>
          <strong>${escapeHtml(formatHoursForDisplay(viewModel.labour.hours))}</strong>
        </div>
        <div class="werkbon-labour-stat">
          <span class="werkbon-meta-label">Tarief</span>
          <strong>${escapeHtml(formatCurrency(viewModel.labour.rate))}/h</strong>
        </div>
        <div class="werkbon-labour-stat werkbon-labour-stat--total">
          <span class="werkbon-meta-label">Totaal arbeid</span>
          <strong data-detail-labour-total>${escapeHtml(formatCurrency(viewModel.labour.total))}</strong>
        </div>
      </div>`;

  const descriptionSection = isEditing
    ? `<div class="werkbon-description-fields">
        <label class="werkbon-description-field">
          <span class="werkbon-meta-label">Werkzaamheden</span>
          <textarea class="werkbon-field-editable" rows="3" data-detail-edit-description placeholder="Omschrijving van de werkzaamheden">${escapeHtml(draft.description || "")}</textarea>
        </label>
        <label class="werkbon-description-field">
          <span class="werkbon-meta-label">Interne notitie <em class="werkbon-aside-note">(niet op factuur)</em></span>
          <textarea class="werkbon-field-editable" rows="2" data-detail-edit-internal-note placeholder="Interne notitie">${escapeHtml(draft.internalNote || "")}</textarea>
        </label>
      </div>`
    : `<p class="werkbon-description-text">${escapeHtml(viewModel.description || "Geen omschrijving.")}</p>
       ${viewModel.internalNote ? `<div class="werkbon-internal-note-block"><span class="werkbon-meta-label">Intern</span><p>${escapeHtml(viewModel.internalNote)}</p></div>` : ""}`;

  const btwToggle = isEditing
    ? `<div class="werkbon-btw-row">
        <span class="werkbon-meta-label">BTW</span>
        <label class="werkbon-toggle-label">
          <input class="werkbon-toggle-checkbox" type="checkbox" data-detail-edit-vat ${draft.vatEnabled ? "checked" : ""} />
          <span class="werkbon-toggle-track"><span class="werkbon-toggle-thumb"></span></span>
          <span class="werkbon-toggle-text">${draft.vatEnabled ? "21% BTW" : "Geen BTW"}</span>
        </label>
      </div>`
    : "";

  return `
    <div class="werkbon-detail-page">

      <div class="werkbon-detail-topbar${isEditing ? " is-editing" : ""}">
        <a href="${pageUrl("werkbon.html")}" class="button subtle werkbon-detail-back-btn">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Terug naar werkbonnen
        </a>
        <button class="button werkbon-edit-toggle${isEditing ? " werkbon-edit-toggle--active" : " subtle"}" type="button" data-detail-action="toggle-edit">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M13.586 3.586a2 2 0 1 1 2.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" fill="currentColor"/>
          </svg>
          ${isEditing ? "Bewerken actief" : "Bewerken"}
        </button>
      </div>

      <section class="werkbon-detail-shell${isEditing ? " is-editing" : ""}">
      <header class="werkbon-hdr-card">
        <div class="werkbon-hdr-primary">
          <div class="werkbon-hdr-meta-row">
            ${statusBadgeMarkup(viewModel.status)}
            <span class="werkbon-invoice-chip">${escapeHtml(viewModel.invoiceNumber || viewModel.id)}</span>
            ${viewModel.serviceTypes.map((s) => `<span class="werkbon-svc-tag">${escapeHtml(s)}</span>`).join("")}
          </div>
          <div class="werkbon-hdr-identity">
            <span class="plate-chip werkbon-detail-plate">${escapeHtml(formatLicensePlate(viewModel.licensePlate))}</span>
            <h1 class="werkbon-hdr-customer">${escapeHtml(viewModel.customerName)}</h1>
          </div>
          <p class="werkbon-hdr-car-line">${escapeHtml(viewModel.carModel)}&nbsp;&middot;&nbsp;${escapeHtml(formatDate(viewModel.completedAt))}</p>
        </div>
        <div class="werkbon-detail-fields-grid">
          <div class="werkbon-meta-field">
            <span class="werkbon-meta-label">E-mail</span>
            <span class="werkbon-field-locked">${escapeHtml(viewModel.customerEmail || "Geen e-mail")}</span>
          </div>
          <div class="werkbon-meta-field">
            <span class="werkbon-meta-label">Telefoon</span>
            <span class="werkbon-field-locked">${escapeHtml(viewModel.customerPhone || "Geen telefoon")}</span>
          </div>
          <div class="werkbon-meta-field">
            <span class="werkbon-meta-label">Km stand</span>
            ${kmField}
          </div>
          <div class="werkbon-meta-field">
            <span class="werkbon-meta-label">Afspraakdatum</span>
            ${dateField}
          </div>
          <div class="werkbon-meta-field werkbon-meta-field-status">
            <span class="werkbon-meta-label">Status</span>
            ${statusField}
          </div>
        </div>
      </header>

      <div class="werkbon-detail-body-grid">
        <div class="werkbon-detail-main-col">

          <section class="werkbon-detail-section">
            <div class="werkbon-section-hd">
              <p class="kicker">Producten</p>
              ${isEditing ? `<button class="button subtle werkbon-add-part-btn" type="button" data-detail-action="add-part">+ Toevoegen</button>` : ""}
            </div>
            <div class="werkbon-parts-hd werkbon-parts-grid${isEditing ? "--edit" : ""}">
              <span>Product</span><span>Stukprijs</span><span>Qty</span><span>Totaal</span>${isEditing ? "<span></span>" : ""}
            </div>
            <div class="werkbon-parts-body">
              ${partsRowsMarkup(isEditing ? draft.parts : viewModel.parts, isEditing)}
            </div>
          </section>

          <section class="werkbon-detail-section">
            <p class="kicker werkbon-section-kicker">Arbeid</p>
            ${labourSection}
          </section>

          <section class="werkbon-detail-section">
            <p class="kicker werkbon-section-kicker">Omschrijving</p>
            ${descriptionSection}
          </section>

        </div>

        <aside class="werkbon-detail-sidebar">

          <div class="werkbon-summary-sidebar-card">
            <p class="kicker werkbon-section-kicker">Factuur totaal</p>
            ${btwToggle}
            <div class="werkbon-summary-lines">
              <div class="werkbon-summary-line">
                <span>Subtotaal</span>
                <strong data-detail-summary-subtotal>${escapeHtml(formatCurrency(viewModel.summary.subtotal))}</strong>
              </div>
              <div class="werkbon-summary-line">
                <span data-detail-vat-label>${draft.vatEnabled ? "BTW (21%)" : "BTW (0%)"}</span>
                <strong data-detail-summary-vat>${escapeHtml(formatCurrency(viewModel.summary.vat))}</strong>
              </div>
            </div>
            <div class="werkbon-summary-grand-total">
              <span>Totaal</span>
              <strong data-detail-summary-total>${escapeHtml(formatCurrency(viewModel.summary.total))}</strong>
            </div>
          </div>

          <div class="werkbon-actions-sidebar-card">
            <p class="kicker werkbon-section-kicker">Acties</p>
            ${paymentLinkStatusMarkup(viewModel)}
            <div class="werkbon-sidebar-actions">
              <button class="button werkbon-action-primary" type="button" data-detail-action="download-pdf">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 9l4 4 4-4M10 3v10M4 16h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Factuur PDF
              </button>
              <button class="button subtle" type="button" data-detail-action="send-email">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2" y="4" width="16" height="13" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M2 7l8 5 8-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
                E-mail versturen
              </button>
              <button class="button subtle werkbon-whatsapp-button" type="button" data-detail-action="send-whatsapp">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M13.5 10.8c-.3 1.3-1.4 2.2-2.7 2.2-.9 0-1.7-.4-2.2-.9l-2.1.5.5-2.1C6.4 10 6 9.2 6 8.3 6 6.9 7.3 5.8 9 5.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
                WhatsApp
              </button>
              <button class="button werkbon-paid-button" type="button" data-detail-action="mark-paid">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10l5 5 7-8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Betaald markeren
              </button>
            </div>
          </div>

        </aside>
      </div>
      </section>

      ${isEditing
        ? `<div class="werkbon-save-bar ${hasChanges ? "is-visible" : ""}" data-detail-save-bar>
            <p>Niet-opgeslagen wijzigingen</p>
            <div>
              <button class="button subtle" type="button" data-detail-action="cancel-edit">Annuleren</button>
              <button class="button" type="button" data-detail-action="save-edit" ${hasChanges ? "" : "disabled"}>Opslaan</button>
            </div>
          </div>`
        : ""}

      <div class="werkbon-toast-stack" data-detail-toast-stack></div>
    </div>
  `;
}

function readLocalOverrides() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(LOCAL_OVERRIDE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeLocalOverrides(nextValue) {
  window.localStorage.setItem(LOCAL_OVERRIDE_KEY, JSON.stringify(nextValue));
}

function saveInvoiceToLocalOverrides(invoice) {
  const store = readLocalOverrides();
  store[invoice.id] = {
    status: invoice.status,
    customerEmail: invoice.customerEmail,
    customerPhone: invoice.customerPhone,
    kmStand: invoice.kmStand,
    appointmentDate: invoice.appointmentDate,
    vatEnabled: invoice.vatEnabled,
    description: invoice.description,
    internalNote: invoice.internalNote,
    paidAt: invoice.paidAt,
    invoiceNumber: invoice.invoiceNumber,
    paymentLink: invoice.paymentLink,
    paymentLinkSentAt: invoice.paymentLinkSentAt,
    paymentMethod: invoice.paymentMethod,
    parts: invoice.parts.map((part) => ({ name: part.name, quantity: part.quantity, price: part.price })),
    labour: { hours: invoice.labour.hours, rate: invoice.labour.rate },
  };
  writeLocalOverrides(store);
}

function hydrateInvoiceWithLocalOverrides(invoice) {
  const store = readLocalOverrides();
  const override = store[invoice.id];
  if (!override || typeof override !== "object") {
    return invoice;
  }

  return buildInvoiceRecord({
    ...invoice,
    ...override,
    parts: Array.isArray(override.parts) ? override.parts : invoice.parts,
    labour: override.labour && typeof override.labour === "object" ? override.labour : invoice.labour,
  });
}

function readLocalInvoiceSequence(garageId) {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(LOCAL_INVOICE_SEQ_KEY) || "{}");
    if (!parsed || typeof parsed !== "object") {
      return 1000;
    }
    return Number(parsed[garageId] ?? 1000);
  } catch {
    return 1000;
  }
}

function writeLocalInvoiceSequence(garageId, nextValue) {
  let parsed = {};
  try {
    const raw = JSON.parse(window.localStorage.getItem(LOCAL_INVOICE_SEQ_KEY) || "{}");
    parsed = raw && typeof raw === "object" ? raw : {};
  } catch {
    parsed = {};
  }
  parsed[garageId] = nextValue;
  window.localStorage.setItem(LOCAL_INVOICE_SEQ_KEY, JSON.stringify(parsed));
}

async function getGarageProfile(garageId) {
  if (!supabase || !garageId) {
    return null;
  }

  const { data, error } = await supabase
    .from("garages")
    .select("*")
    .eq("id", garageId)
    .maybeSingle();

  if (error) {
    return null;
  }

  return data;
}

function inferGarageValue(profile, keys, fallback = "") {
  if (!profile || typeof profile !== "object") {
    return fallback;
  }
  for (const key of keys) {
    const value = profile[key];
    if (value !== null && value !== undefined && String(value).trim()) {
      return String(value).trim();
    }
  }
  return fallback;
}

async function reserveInvoiceNumber(garageId, profile) {
  const currentFromProfile = Number(
    inferGarageValue(profile, ["invoice_sequence", "factuur_nummer", "invoice_number_counter"], "1000"),
  );
  const current = Number.isFinite(currentFromProfile) && currentFromProfile > 0
    ? currentFromProfile
    : readLocalInvoiceSequence(garageId);
  const next = Math.max(1000, current + 1);

  if (supabase && garageId) {
    const { error } = await supabase
      .from("garages")
      .update({ invoice_sequence: next })
      .eq("id", garageId);

    if (error) {
      writeLocalInvoiceSequence(garageId, next);
      return next;
    }
  } else {
    writeLocalInvoiceSequence(garageId, next);
  }

  return next;
}

function toInvoiceNumber(value) {
  return `F-${String(value).padStart(6, "0")}`;
}

function toPaymentDueDate(dateString) {
  const baseDate = parseDate(dateString) ?? new Date();
  const dueDate = new Date(baseDate.getTime());
  dueDate.setDate(dueDate.getDate() + 14);
  return dueDate;
}

function formatDateNl(date) {
  return date.toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

async function generateInvoicePdfBlob(invoice, garageProfile) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;

  const garageName = inferGarageValue(garageProfile, ["name"], "Garage");
  const garageAddress = inferGarageValue(garageProfile, ["address", "adres"], "Adres onbekend");
  const garageBtw = inferGarageValue(garageProfile, ["btw_nummer", "btw", "vat_number"], "Onbekend");
  const garageKvk = inferGarageValue(garageProfile, ["kvk_nummer", "kvk", "chamber_of_commerce"], "Onbekend");
  const garageIban = inferGarageValue(garageProfile, ["iban"], "Onbekend");

  let y = 50;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(garageName, margin, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  y += 16;
  doc.text(garageAddress, margin, y);
  y += 14;
  doc.text(`BTW nummer: ${garageBtw}`, margin, y);
  y += 14;
  doc.text(`KVK nummer: ${garageKvk}`, margin, y);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("FACTUUR", pageWidth - margin - 80, 50);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Factuurnummer: ${invoice.invoiceNumber || "-"}`, pageWidth - margin - 180, 72);
  doc.text(`Factuurdatum: ${formatDateNl(new Date())}`, pageWidth - margin - 180, 86);
  doc.text(`Betaaltermijn: 14 dagen`, pageWidth - margin - 180, 100);

  y += 24;
  doc.setDrawColor(224, 228, 236);
  doc.line(margin, y, pageWidth - margin, y);

  y += 18;
  doc.setFont("helvetica", "bold");
  doc.text("Klant", margin, y);
  doc.setFont("helvetica", "normal");
  y += 14;
  doc.text(invoice.customerName, margin, y);
  y += 14;
  doc.text(`E-mail: ${invoice.customerEmail || "-"}`, margin, y);
  y += 14;
  doc.text(`Telefoon: ${invoice.customerPhone || "-"}`, margin, y);

  const rightColX = pageWidth / 2 + 20;
  let rightY = y - 28;
  doc.setFont("helvetica", "bold");
  doc.text("Voertuig", rightColX, rightY);
  doc.setFont("helvetica", "normal");
  rightY += 14;
  doc.text(invoice.carModel, rightColX, rightY);
  rightY += 14;
  doc.text(`Kenteken: ${formatLicensePlate(invoice.licensePlate)}`, rightColX, rightY);
  rightY += 14;
  doc.text(`Km stand: ${invoice.kmStand || 0}`, rightColX, rightY);

  y += 24;
  doc.setDrawColor(224, 228, 236);
  doc.line(margin, y, pageWidth - margin, y);

  y += 20;
  doc.setFont("helvetica", "bold");
  doc.text("Onderdelen", margin, y);
  y += 16;

  const colProduct = margin;
  const colQty = margin + 280;
  const colPrice = margin + 350;
  const colTotal = margin + 440;

  doc.setFontSize(9);
  doc.text("Product", colProduct, y);
  doc.text("Aantal", colQty, y);
  doc.text("Prijs", colPrice, y);
  doc.text("Totaal", colTotal, y);

  y += 10;
  doc.line(margin, y, pageWidth - margin, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  for (const part of invoice.parts) {
    y += 16;
    if (y > 700) {
      doc.addPage();
      y = 60;
    }
    doc.text(part.name || "-", colProduct, y);
    doc.text(String(part.quantity), colQty, y);
    doc.text(formatCurrency(part.price), colPrice, y);
    doc.text(formatCurrency(part.total), colTotal, y);
  }

  y += 22;
  doc.setFont("helvetica", "bold");
  doc.text("Arbeid", margin, y);
  doc.setFont("helvetica", "normal");
  y += 16;
  doc.text(`${formatHoursForDisplay(invoice.labour.hours)} x ${formatCurrency(invoice.labour.rate)}/h`, margin, y);
  doc.text(formatCurrency(invoice.labour.total), colTotal, y);

  y += 26;
  const sumX = pageWidth - margin - 200;
  doc.text("Subtotaal ex BTW", sumX, y);
  doc.text(formatCurrency(invoice.summary.subtotal), colTotal, y);
  y += 16;
  doc.text(`BTW ${invoice.vatEnabled ? "21%" : "0%"}`, sumX, y);
  doc.text(formatCurrency(invoice.summary.vat), colTotal, y);
  y += 18;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Totaal incl BTW", sumX, y);
  doc.text(formatCurrency(invoice.summary.total), colTotal, y);

  y += 36;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`IBAN: ${garageIban}`, margin, y);
  y += 14;
  doc.text("Betaalinstructie: Gelieve binnen 14 dagen over te maken onder vermelding van het factuurnummer.", margin, y, {
    maxWidth: pageWidth - margin * 2,
  });

  return doc.output("blob");
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      const base64 = result.includes(",") ? result.split(",")[1] : result;
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function upsertCompletedAppointment(invoice, authState) {
  if (!supabase || !authState?.activeGarage?.id) {
    return null;
  }

  const garageId = authState.activeGarage.id;
  const appointmentDate = invoice.appointmentDate || null;
  const appointmentTime = "00:00:00";

  const detailsPayload = {
    status: invoice.status,
    customer_name: invoice.customerName,
    customer_email: invoice.customerEmail,
    customer_phone: invoice.customerPhone,
    car_model: invoice.carModel,
    service_types: invoice.serviceTypes,
    km_stand: invoice.kmStand,
    vat_enabled: invoice.vatEnabled,
    description: invoice.description,
    internal_note: invoice.internalNote,
    invoice_number: invoice.invoiceNumber,
    paid_at: invoice.paidAt || null,
    completed_at: invoice.completedAt,
    parts: invoice.parts,
    labour: {
      hours: invoice.labour.hours,
      rate: invoice.labour.rate,
    },
    totals: invoice.summary,
    updated_at: new Date().toISOString(),
    payment_link: invoice.paymentLink || null,
    payment_link_sent_at: invoice.paymentLinkSentAt || null,
    payment_method: invoice.paymentMethod || null,
  };

  if (invoice.completedAppointmentId) {
    // Fetch existing record to preserve werkbon_created flag
    const { data: existingData, error: fetchError } = await supabase
      .from("completed_appointments")
      .select("completion_notes")
      .eq("id", invoice.completedAppointmentId)
      .eq("garage_id", garageId)
      .maybeSingle();

    if (fetchError) {
      throw fetchError;
    }

    // Preserve werkbon_created flag if it exists
    let existingNotes = {};
    if (existingData?.completion_notes) {
      try {
        existingNotes = typeof existingData.completion_notes === "string" 
          ? JSON.parse(existingData.completion_notes) 
          : existingData.completion_notes;
      } catch (e) {
        // If parsing fails, start fresh
      }
    }

    const mergedNotes = {
      ...detailsPayload,
      werkbon_created: existingNotes.werkbon_created ?? false,
      payment_link: detailsPayload.payment_link || existingNotes.payment_link || null,
      payment_link_sent_at: detailsPayload.payment_link_sent_at || existingNotes.payment_link_sent_at || null,
      payment_method: detailsPayload.payment_method || existingNotes.payment_method || null,
    };

    const { data, error } = await supabase
      .from("completed_appointments")
      .update({
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
        license_plate: invoice.licensePlate,
        service: invoice.serviceTypes.join(", "),
        completion_notes: JSON.stringify(mergedNotes),
      })
      .eq("id", invoice.completedAppointmentId)
      .eq("garage_id", garageId)
      .select("id")
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data?.id || invoice.completedAppointmentId;
  }

  if (invoice.bookingId) {
    const { data: existingRow, error: existingError } = await supabase
      .from("completed_appointments")
      .select("id")
      .eq("garage_id", garageId)
      .eq("booking_id", invoice.bookingId)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existingError) {
      throw existingError;
    }

    if (existingRow?.id) {
      // Fetch existing record to preserve werkbon_created flag
      const { data: existingData, error: fetchError } = await supabase
        .from("completed_appointments")
        .select("completion_notes")
        .eq("id", existingRow.id)
        .eq("garage_id", garageId)
        .maybeSingle();

      if (fetchError) {
        throw fetchError;
      }

      // Preserve werkbon_created flag if it exists
      let existingNotes = {};
      if (existingData?.completion_notes) {
        try {
          existingNotes = typeof existingData.completion_notes === "string" 
            ? JSON.parse(existingData.completion_notes) 
            : existingData.completion_notes;
        } catch (e) {
          // If parsing fails, start fresh
        }
      }

      const mergedNotes = {
        ...detailsPayload,
        werkbon_created: existingNotes.werkbon_created ?? false,
        payment_link: detailsPayload.payment_link || existingNotes.payment_link || null,
        payment_link_sent_at: detailsPayload.payment_link_sent_at || existingNotes.payment_link_sent_at || null,
        payment_method: detailsPayload.payment_method || existingNotes.payment_method || null,
      };

      const { error: updateError } = await supabase
        .from("completed_appointments")
        .update({
          appointment_date: appointmentDate,
          appointment_time: appointmentTime,
          license_plate: invoice.licensePlate,
          service: invoice.serviceTypes.join(", "),
          completion_notes: JSON.stringify(mergedNotes),
        })
        .eq("id", existingRow.id)
        .eq("garage_id", garageId);

      if (updateError) {
        throw updateError;
      }

      return existingRow.id;
    }
  }

  const { data: inserted, error: insertError } = await supabase
    .from("completed_appointments")
    .insert({
      garage_id: garageId,
      booking_id: invoice.bookingId,
      appointment_date: appointmentDate,
      appointment_time: appointmentTime,
      license_plate: invoice.licensePlate,
      service: invoice.serviceTypes.join(", "),
      completion_notes: JSON.stringify(detailsPayload),
    })
    .select("id")
    .single();

  if (insertError) {
    throw insertError;
  }

  return inserted?.id || null;
}

async function persistInvoice(invoice, authState) {
  const saved = buildInvoiceRecord(invoice);
  saveInvoiceToLocalOverrides(saved);

  if (!supabase) {
    return { ...saved, persistedToSupabase: false };
  }

  try {
    const completedAppointmentId = await upsertCompletedAppointment(saved, authState);
    return {
      ...saved,
      completedAppointmentId: completedAppointmentId || saved.completedAppointmentId,
      persistedToSupabase: true,
      persistenceWarning: "",
    };
  } catch (error) {
    if (isSupabaseRlsError(error)) {
      return {
        ...saved,
        persistedToSupabase: false,
        persistenceWarning: "RLS_BLOCKED",
      };
    }
    throw error;
  }
}

async function sendInvoiceEmail({ invoice, authState, pdfBlob }) {
  if (!invoice.customerEmail) {
    throw new Error("Geen klant e-mail beschikbaar voor verzending.");
  }

  if (!supabase) {
    throw new Error("Supabase is niet geconfigureerd. E-mail kan niet worden verzonden.");
  }

  const base64Pdf = await blobToBase64(pdfBlob);

  const { error } = await supabase.functions.invoke("send-werkbon-email", {
    body: {
      to: invoice.customerEmail,
      template: "werkbon_factuur_nl",
      subject: `Factuur ${invoice.invoiceNumber || invoice.id}`,
      customerName: invoice.customerName,
      total: invoice.summary.total,
      attachment: {
        filename: `${invoice.invoiceNumber || invoice.id}.pdf`,
        contentBase64: base64Pdf,
        mimeType: "application/pdf",
      },
    },
  });

  if (error) {
    throw error;
  }
}

function applyInvoicePatch(invoice, patch) {
  return buildInvoiceRecord({
    ...invoice,
    ...patch,
  });
}

export async function mountWerkbonDetailPage(rootElement) {
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

  const invoiceId = new URLSearchParams(window.location.search).get("id") ?? "";
  const garageIds = authState.isAdmin ? null : [authState.activeGarage?.id].filter(Boolean);

  let invoice = null;

  if (invoiceId) {
    try {
      invoice = await getCompletedAppointmentInvoice(invoiceId, authState);
    } catch {
      // Ignore Supabase read errors and continue with other lookup fallbacks.
    }
  }

  if (!invoice && invoiceId) {
    try {
      const bookings = await getBookings({ garageIds });
      const booking = bookings.find((item) => String(item.id) === invoiceId) ?? null;
      if (booking) {
        invoice = invoiceFromBooking(booking);
      }
    } catch {
      // Ignore booking fetch errors and keep the existing fallback behavior.
    }
  }

  const { shell, contentArea } = createAppShell({
    activePage: "werkbon",
    title: invoice ? `Werkbon ${formatLicensePlate(invoice.licensePlate)}` : "Werkbon detail",
    headerNote: invoice ? `${invoice.customerName} - ${formatDate(invoice.completedAt)}` : "",
    userEmail: authState.user.email,
    onLogout: logoutAndRedirect,
    garage: authState.activeGarage,
    isAdmin: authState.isAdmin,
  });

  rootElement.replaceChildren(shell);

  if (!invoice) {
    contentArea.innerHTML = `
      <div class="werkbon-detail-page">
        <div class="werkbon-detail-back">
          <a href="${pageUrl("werkbon.html")}" class="button subtle werkbon-detail-back-btn">Terug naar werkbonnen</a>
        </div>
        <div class="werkbon-empty-state">
          <div>
            <h3>Werkbon not found</h3>
            <p class="muted">The werkbon with ID <strong>${escapeHtml(invoiceId || "(none)")}</strong> could not be found.</p>
          </div>
          <a href="${pageUrl("werkbon.html")}" class="button">Go back to overview</a>
        </div>
      </div>
    `;
    return;
  }

  invoice = hydrateInvoiceWithLocalOverrides(invoice);

  let isEditing = false;
  let editDraft = createEditDraft(invoice);
  let hasChanges = false;
  let toastTimer = 0;

  const showToast = (message, type = "success") => {
    window.clearTimeout(toastTimer);
    const stack = contentArea.querySelector("[data-detail-toast-stack]");
    if (!(stack instanceof HTMLElement)) {
      return;
    }

    stack.innerHTML = `<div class="werkbon-toast werkbon-toast-${type}">${escapeHtml(message)}</div>`;
    toastTimer = window.setTimeout(() => {
      stack.innerHTML = "";
    }, 2800);
  };

  const render = () => {
    if (!isEditing) {
      editDraft = createEditDraft(invoice);
      hasChanges = false;
    }

    contentArea.innerHTML = detailPageMarkup({
      invoice,
      isEditing,
      draft: editDraft,
      hasChanges,
    });
  };

  const syncDraftFromInputs = () => {
    if (!isEditing) {
      return;
    }

    const nextDraft = { ...editDraft, parts: [...editDraft.parts] };

    const statusInput = contentArea.querySelector("[data-detail-edit-status]");
    const kmInput = contentArea.querySelector("[data-detail-edit-km]");
    const appointmentDateInput = contentArea.querySelector("[data-detail-edit-appointment-date]");
    const hoursInput = contentArea.querySelector("[data-detail-edit-hours-whole]");
    const minutesInput = contentArea.querySelector("[data-detail-edit-minutes]");
    const rateInput = contentArea.querySelector("[data-detail-edit-rate]");
    const descriptionInput = contentArea.querySelector("[data-detail-edit-description]");
    const internalNoteInput = contentArea.querySelector("[data-detail-edit-internal-note]");
    const vatInput = contentArea.querySelector("[data-detail-edit-vat]");

    if (statusInput instanceof HTMLSelectElement) {
      nextDraft.status = statusInput.value;
    }
    if (kmInput instanceof HTMLInputElement) {
      nextDraft.kmStand = kmInput.value;
    }
    if (appointmentDateInput instanceof HTMLInputElement) {
      nextDraft.appointmentDate = appointmentDateInput.value;
    }
    if (hoursInput instanceof HTMLInputElement) {
      nextDraft.labourHoursWhole = hoursInput.value;
    }
    if (minutesInput instanceof HTMLInputElement) {
      nextDraft.labourMinutes = minutesInput.value;
    }
    if (rateInput instanceof HTMLInputElement) {
      nextDraft.labourRate = rateInput.value;
    }
    if (descriptionInput instanceof HTMLTextAreaElement) {
      nextDraft.description = descriptionInput.value;
    }
    if (internalNoteInput instanceof HTMLTextAreaElement) {
      nextDraft.internalNote = internalNoteInput.value;
    }
    if (vatInput instanceof HTMLInputElement) {
      nextDraft.vatEnabled = vatInput.checked;
    }

    const rows = [...contentArea.querySelectorAll("[data-edit-part-row]")];
    nextDraft.parts = rows.map((row) => {
      const nameInput = row.querySelector("[data-detail-part-name]");
      const priceInput = row.querySelector("[data-detail-part-price]");
      const qtyInput = row.querySelector("[data-detail-part-qty]");

      return {
        name: nameInput instanceof HTMLInputElement ? nameInput.value : "",
        price: priceInput instanceof HTMLInputElement ? normalizeNonNegativeNumber(priceInput.value) : 0,
        quantity: qtyInput instanceof HTMLInputElement ? normalizeNonNegativeNumber(qtyInput.value) : 0,
      };
    });

    editDraft = nextDraft;
    hasChanges = hasDraftChanges(invoice, editDraft);
  };

  const refreshPreviewFields = () => {
    if (!isEditing) {
      return;
    }

    const previewInvoice = buildInvoiceRecord(draftToInvoicePatch(invoice, editDraft));

    previewInvoice.parts.forEach((part, index) => {
      const totalEl = contentArea.querySelector(`[data-detail-part-total="${index}"]`);
      if (totalEl instanceof HTMLElement) {
        totalEl.textContent = formatCurrency(part.total);
      }
    });

    const labourTotalElement = contentArea.querySelector("[data-detail-labour-total]");
    const subtotalElement = contentArea.querySelector("[data-detail-summary-subtotal]");
    const vatElement = contentArea.querySelector("[data-detail-summary-vat]");
    const totalElement = contentArea.querySelector("[data-detail-summary-total]");
    const vatLabelElement = contentArea.querySelector("[data-detail-vat-label]");

    if (labourTotalElement instanceof HTMLElement) {
      labourTotalElement.textContent = formatCurrency(previewInvoice.labour.total);
    }
    if (subtotalElement instanceof HTMLElement) {
      subtotalElement.textContent = formatCurrency(previewInvoice.summary.subtotal);
    }
    if (vatElement instanceof HTMLElement) {
      vatElement.textContent = formatCurrency(previewInvoice.summary.vat);
    }
    if (totalElement instanceof HTMLElement) {
      totalElement.textContent = formatCurrency(previewInvoice.summary.total);
    }
    if (vatLabelElement instanceof HTMLElement) {
      vatLabelElement.textContent = editDraft.vatEnabled ? "BTW (21%)" : "BTW (0%)";
    }

    const saveBar = contentArea.querySelector("[data-detail-save-bar]");
    const saveButton = contentArea.querySelector('[data-detail-action="save-edit"]');
    if (saveBar instanceof HTMLElement) {
      saveBar.classList.toggle("is-visible", hasChanges);
    }
    if (saveButton instanceof HTMLButtonElement) {
      saveButton.disabled = !hasChanges;
    }
  };

  const saveCurrentDraft = async () => {
    syncDraftFromInputs();

    if (!hasChanges) {
      showToast("Geen wijzigingen om op te slaan.", "neutral");
      return;
    }

    const nextInvoice = buildInvoiceRecord(draftToInvoicePatch(invoice, editDraft));

    try {
      const persisted = await persistInvoice(nextInvoice, authState);
      invoice = buildInvoiceRecord(persisted);
      isEditing = false;
      hasChanges = false;
      render();
      showToast(
        persisted.persistedToSupabase
          ? "Opgeslagen \u2713"
          : "Lokaal opgeslagen. Supabase sync geblokkeerd (RLS).",
        persisted.persistedToSupabase ? "success" : "neutral",
      );
    } catch (error) {
      showToast("Opslaan mislukt", "error");
      console.error(error);
    }
  };

  const ensureInvoiceNumber = async () => {
    if (invoice.invoiceNumber) {
      return invoice;
    }

    const garageId = authState.activeGarage?.id || "local";
    const garageProfile = await getGarageProfile(authState.activeGarage?.id);
    const nextNumber = await reserveInvoiceNumber(garageId, garageProfile);
    invoice = applyInvoicePatch(invoice, {
      invoiceNumber: toInvoiceNumber(nextNumber),
    });
    saveInvoiceToLocalOverrides(invoice);
    return invoice;
  };

  const getInvoiceWhatsappPayload = async (invoiceRef) => {
    const garage = authState.activeGarage;
    const paymentDays = Math.max(1, parseInt(String(garage?.paymentDays ?? 14), 10) || 14);
    const garageName = String(garage?.garageName || garage?.name || "Uw garage");

    let paymentLink = invoiceRef.paymentLink || "";
    if (!paymentLink) {
      paymentLink = await generatePaymentLink(
        garage,
        {
          totalAmount: invoiceRef.summary.total,
          factuurnummer: invoiceRef.invoiceNumber || invoiceRef.id,
          customerName: invoiceRef.customerName,
          paymentDays,
          completedAppointmentId: invoiceRef.completedAppointmentId || invoiceRef.id || "",
        },
        (warning) => showToast(warning, "neutral"),
        supabase,
      ) || "";
    }

    const lines = [
      `Beste ${invoiceRef.customerName || "klant"},`,
      "",
      `Hierbij uw factuur van ${garageName}.`,
      "",
      `Factuurnummer: ${invoiceRef.invoiceNumber || invoiceRef.id || "-"}`,
      `Totaalbedrag: €${normalizeNonNegativeNumber(invoiceRef.summary.total).toFixed(2).replace(".", ",")}`,
      `Betaaltermijn: ${paymentDays} dagen`,
    ];

    if (paymentLink) {
      lines.push("", "Betaal eenvoudig via Mollie:", paymentLink);
    }

    lines.push("", "Met vriendelijke groet,", garageName);

    return {
      message: lines.join("\n"),
      paymentLink,
      paymentDays,
    };
  };

  const generatePdfAndDownload = async () => {
    const invoiceWithNumber = await ensureInvoiceNumber();
    const garageProfile = await getGarageProfile(authState.activeGarage?.id);
    const pdfBlob = await generateInvoicePdfBlob(invoiceWithNumber, garageProfile);

    const fileName = `${invoiceWithNumber.invoiceNumber || invoiceWithNumber.id}.pdf`;
    const blobUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(blobUrl);

    return pdfBlob;
  };

  render();

  contentArea.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !isEditing) {
      return;
    }

    if (
      target.matches(
        "[data-detail-part-name], [data-detail-part-price], [data-detail-part-qty], [data-detail-edit-km], [data-detail-edit-hours-whole], [data-detail-edit-minutes], [data-detail-edit-rate], [data-detail-edit-description], [data-detail-edit-internal-note], [data-detail-edit-appointment-date]",
      )
    ) {
      syncDraftFromInputs();
      refreshPreviewFields();
    }
  });

  contentArea.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement) || !isEditing) {
      return;
    }

    if (target.matches("[data-detail-edit-vat], [data-detail-edit-status]")) {
      syncDraftFromInputs();
      refreshPreviewFields();
    }
  });

  contentArea.addEventListener("click", async (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) {
      return;
    }

    const actionElement = target.closest("[data-detail-action]");
    if (!(actionElement instanceof HTMLElement)) {
      return;
    }

    const action = String(actionElement.dataset.detailAction || "");

    if (action === "toggle-edit") {
      isEditing = !isEditing;
      editDraft = createEditDraft(invoice);
      hasChanges = false;
      render();
      return;
    }

    if (action === "cancel-edit") {
      isEditing = false;
      editDraft = createEditDraft(invoice);
      hasChanges = false;
      render();
      return;
    }

    if (action === "add-part") {
      syncDraftFromInputs();
      editDraft.parts.push({ name: "", quantity: 1, price: 0 });
      hasChanges = hasDraftChanges(invoice, editDraft);
      render();
      return;
    }

    if (action === "remove-part") {
      syncDraftFromInputs();
      const partIndex = Number(actionElement.dataset.detailPartIndex);
      if (Number.isFinite(partIndex) && editDraft.parts.length > 1) {
        editDraft.parts.splice(partIndex, 1);
        hasChanges = hasDraftChanges(invoice, editDraft);
        render();
      }
      return;
    }

    if (action === "save-edit") {
      await saveCurrentDraft();
      return;
    }

    if (action === "download-pdf") {
      try {
        await generatePdfAndDownload();
        showToast("PDF gegenereerd", "success");
      } catch (error) {
        showToast("PDF genereren mislukt", "error");
        console.error(error);
      }
      return;
    }

    if (action === "send-email") {
      try {
        const pdfBlob = await generatePdfAndDownload();
        await sendInvoiceEmail({ invoice, authState, pdfBlob });
        if (invoice.status !== "paid") {
          invoice = applyInvoicePatch(invoice, { status: "sent" });
          await persistInvoice(invoice, authState);
        }
        render();
        showToast("E-mail verzonden", "success");
      } catch (error) {
        showToast("E-mail verzenden mislukt", "error");
        console.error(error);
      }
      return;
    }

    if (action === "send-whatsapp") {
      const phone = formatWhatsappPhone(invoice.customerPhone || "");
      if (!phone) {
        showToast("Geen telefoonnummer bekend voor deze klant", "error");
        return;
      }

      try {
        const invoiceWithNumber = await ensureInvoiceNumber();
        const payload = await getInvoiceWhatsappPayload(invoiceWithNumber);
        const paymentMode = String(authState.activeGarage?.mollieMethod || "none");
        if (paymentMode !== "none" && !payload.paymentLink) {
          showToast("Geen betaallink gemaakt. Controleer Mollie API-sleutel/instellingen en probeer opnieuw.", "error");
          return;
        }
        const whatsappUrl = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(payload.message)}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");

        if (invoice.status !== "paid") {
          invoice = applyInvoicePatch(invoice, {
            status: "sent",
            paymentLink: payload.paymentLink || invoice.paymentLink,
            paymentLinkSentAt: payload.paymentLink ? new Date().toISOString() : invoice.paymentLinkSentAt,
            paymentMethod: payload.paymentLink ? "mollie" : invoice.paymentMethod,
          });
          invoice = buildInvoiceRecord(await persistInvoice(invoice, authState));
          render();
        }

        showToast("WhatsApp bericht geopend", "success");
      } catch (error) {
        showToast("WhatsApp verzenden mislukt", "error");
        console.error(error);
      }
      return;
    }

    if (action === "copy-payment-link") {
      if (!invoice.paymentLink) {
        showToast("Geen betaallink beschikbaar", "neutral");
        return;
      }
      try {
        await navigator.clipboard.writeText(invoice.paymentLink);
        showToast("Betaallink gekopieerd", "success");
      } catch {
        showToast("Kopieren mislukt", "error");
      }
      return;
    }

    if (action === "resend-payment-link") {
      const phone = formatWhatsappPhone(invoice.customerPhone || "");
      if (!phone || !invoice.paymentLink) {
        showToast("Geen betaallink of telefoonnummer beschikbaar", "error");
        return;
      }

      const garageName = String(authState.activeGarage?.garageName || authState.activeGarage?.name || "Uw garage");
      const paymentDays = Math.max(1, parseInt(String(authState.activeGarage?.paymentDays ?? 14), 10) || 14);
      const message = [
        `Beste ${invoice.customerName || "klant"},`,
        "",
        `Hierbij uw factuur van ${garageName}.`,
        "",
        `Factuurnummer: ${invoice.invoiceNumber || invoice.id || "-"}`,
        `Totaalbedrag: €${normalizeNonNegativeNumber(invoice.summary.total).toFixed(2).replace(".", ",")}`,
        `Betaaltermijn: ${paymentDays} dagen`,
        "",
        "Betaal eenvoudig via Mollie:",
        invoice.paymentLink,
        "",
        "Met vriendelijke groet,",
        garageName,
      ].join("\n");

      const whatsappUrl = `https://wa.me/${encodeURIComponent(phone)}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      showToast("Betaallink opnieuw verstuurd", "success");
      return;
    }

    if (action === "mark-paid") {
      try {
        invoice = applyInvoicePatch(invoice, {
          status: "paid",
          paidAt: toDateInputValue(new Date()),
        });
        invoice = buildInvoiceRecord(await persistInvoice(invoice, authState));
        render();
        showToast("Werkbon als betaald gemarkeerd", "success");
      } catch (error) {
        showToast("Betaalstatus opslaan mislukt", "error");
        console.error(error);
      }
    }
  });
}
