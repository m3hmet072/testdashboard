import { createAppShell } from "../components/appShell.js";
import { deleteBooking, setWerkbonCreatedForCompletedAppointment, getBookings } from "../services/bookingService.js";
import { fetchCompletedAppointmentsByGarageIds } from "../services/supabaseClient.js";
import { summarizeEmailInbox } from "../services/emailService.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";
import { showConfirmDialog } from "../utils/confirmDialog.js";

const STATUS_META = {
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

const SERVICE_CLASS_BY_LABEL = new Map([
  ["apk", "apk"],
  ["banden", "banden"],
  ["onderhoud", "onderhoud"],
  ["airco", "airco"],
  ["brakes", "brakes"],
]);

const MOCK_INVOICE_BLUEPRINTS = [
  {
    id: "wb-1001",
    licensePlate: "KJ923L",
    customerName: "Sophie de Vries",
    carModel: "Volkswagen Golf 1.4 TSI",
    serviceTypes: ["APK", "Onderhoud"],
    completedAt: "2026-03-21T14:30:00",
    status: "draft",
    parts: [
      { name: "Oil filter", quantity: 1, price: 18 },
      { name: "Engine oil 5W30", quantity: 4, price: 11.5 },
    ],
    labour: { hours: 1.5, rate: 54 },
  },
  {
    id: "wb-1002",
    licensePlate: "XR184P",
    customerName: "Thomas Mulder",
    carModel: "BMW 3 Series Touring",
    serviceTypes: ["Banden"],
    completedAt: "2026-03-24T10:15:00",
    status: "sent",
    parts: [
      { name: "All-season tyre", quantity: 2, price: 79.5 },
      { name: "Valve set", quantity: 1, price: 12 },
    ],
    labour: { hours: 1, rate: 58 },
  },
  {
    id: "wb-1003",
    licensePlate: "NB557K",
    customerName: "Mehmet Kaya",
    carModel: "Mercedes-Benz A-Class",
    serviceTypes: ["Airco", "APK"],
    completedAt: "2026-03-20T16:05:00",
    status: "paid",
    parts: [
      { name: "A/C refrigerant refill", quantity: 1, price: 62 },
      { name: "Cabin filter", quantity: 1, price: 28 },
    ],
    labour: { hours: 1.2, rate: 60 },
  },
  {
    id: "wb-1004",
    licensePlate: "TG440N",
    customerName: "Rupert Clark",
    carModel: "Ford Focus Wagon",
    serviceTypes: ["Brakes"],
    completedAt: "2026-03-18T09:40:00",
    status: "draft",
    parts: [
      { name: "Front brake pads", quantity: 1, price: 68 },
      { name: "Brake cleaner", quantity: 1, price: 9.5 },
    ],
    labour: { hours: 2.3, rate: 57 },
  },
  {
    id: "wb-1005",
    licensePlate: "LP221D",
    customerName: "Jack Thomesen",
    carModel: "Audi A4 Avant",
    serviceTypes: ["Onderhoud", "Banden"],
    completedAt: "2026-03-26T11:20:00",
    status: "sent",
    parts: [
      { name: "Wheel alignment", quantity: 1, price: 49 },
      { name: "Air filter", quantity: 1, price: 19 },
      { name: "Spark plug set", quantity: 1, price: 36 },
    ],
    labour: { hours: 2.1, rate: 59 },
  },
  {
    id: "wb-1006",
    licensePlate: "SN802V",
    customerName: "Mila Verbeek",
    carModel: "Peugeot 208",
    serviceTypes: ["APK"],
    completedAt: "2026-03-27T08:50:00",
    status: "draft",
    parts: [
      { name: "Bulb replacement", quantity: 2, price: 8.5 },
    ],
    labour: { hours: 0.9, rate: 52 },
  },
];

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
    carModel: String(notes.car_model ?? notes.carModel ?? "Voertuig"),
    serviceTypes: serviceTypes.length ? serviceTypes : ["Service"],
    completedAt: String(row.completed_at ?? row.created_at ?? new Date().toISOString()),
    status: String(notes.status ?? "draft"),
    werkbonCreated: notes.werkbon_created === true,
    parts,
    labour: {
      hours: Number(labour.hours ?? 0),
      rate: Number(labour.rate ?? 0),
    },
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

function createMockInvoices() {
  return MOCK_INVOICE_BLUEPRINTS.map(buildInvoiceRecord);
}

function prefetchWerkbonDetailDocument() {
  const href = "/werkbon-detail.html";
  if (document.head.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "document";
  link.href = href;
  document.head.append(link);
}

function statusBadgeMarkup(status) {
  const meta = STATUS_META[normalizeStatus(status)] ?? STATUS_META.draft;
  return `<span class="status-chip ${meta.className}">${meta.label}</span>`;
}

function serviceTagsMarkup(serviceTypes) {
  return serviceTypes
    .map((serviceType) => {
      const className = SERVICE_CLASS_BY_LABEL.get(String(serviceType).trim().toLowerCase()) ?? "other";
      return `<span class="service-chip service-chip-${className}">${escapeHtml(serviceType)}</span>`;
    })
    .join("");
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
  return `
    <div class="request-divider"></div>
    <div class="request-expanded werkbon-expanded">
      <div class="request-actions werkbon-bottom-actions">
        <button class="button subtle" type="button" data-werkbon-action="view" data-werkbon-id="${escapeHtml(invoice.id)}">View Werkbon</button>
        <button class="button subtle" type="button" data-werkbon-action="edit" data-werkbon-id="${escapeHtml(invoice.id)}">Edit</button>
        <button class="button subtle werkbon-send-button" type="button" data-werkbon-action="send-customer" data-werkbon-id="${escapeHtml(invoice.id)}">Send to Customer</button>
        <button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${escapeHtml(invoice.id)}">Mark as Paid</button>
        <button class="button danger" type="button" data-werkbon-action="delete" data-werkbon-id="${escapeHtml(invoice.id)}">Delete</button>
      </div>
    </div>
  `;
}

function werkbonModalMarkup(invoice, isEditing) {
  if (!invoice) {
    return "";
  }

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
              ${statusBadgeMarkup(invoice.status)}
            </div>
          </section>

          ${
            isEditing
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
          ${
            isEditing
              ? `
                <button class="button subtle" type="button" data-werkbon-action="cancel-edit" data-werkbon-id="${escapeHtml(invoice.id)}">Cancel</button>
                <button class="button" type="button" data-werkbon-action="save-edit" data-werkbon-id="${escapeHtml(invoice.id)}">Save Changes</button>
              `
              : `
                <button class="button subtle" type="button" data-werkbon-action="download-pdf" data-werkbon-id="${escapeHtml(invoice.id)}">Download PDF</button>
                <button class="button subtle" type="button" data-werkbon-action="send-sms" data-werkbon-id="${escapeHtml(invoice.id)}">Send via SMS</button>
                <button class="button subtle" type="button" data-werkbon-action="send-whatsapp" data-werkbon-id="${escapeHtml(invoice.id)}">Send via WhatsApp</button>
                <button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${escapeHtml(invoice.id)}">Mark as Paid</button>
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
            <div class="request-services">${serviceTagsMarkup(invoice.serviceTypes)}</div>
            <p class="werkbon-inline-meta">Completed ${escapeHtml(formatDate(invoice.completedAt))}</p>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${escapeHtml(formatCurrency(invoice.summary.total))}</strong>
          ${statusBadgeMarkup(invoice.status)}
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

  rootElement.replaceChildren(shell);
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
            <option value="draft">Draft</option>
            <option value="sent">Sent</option>
            <option value="paid">Paid</option>
          </select>
        </label>
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
  const statusFilter = contentArea.querySelector("#werkbonStatusFilter");
  const searchInput = contentArea.querySelector("#werkbonSearch");

  let invoices = [];
  let expandedInvoiceId = invoices[0]?.id ?? "";
  let selectedInvoiceId = "";
  let modalOpen = false;
  let editingInvoiceId = "";
  let noticeTimer = 0;

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

  const updateInvoice = (invoiceId, updater) => {
    invoices = invoices.map((invoice) => (invoice.id === invoiceId ? buildInvoiceRecord(updater(invoice)) : invoice));
  };

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

  const markInvoicePaid = (invoiceId) => {
    const invoice = invoices.find((item) => item.id === invoiceId);
    if (!invoice) {
      return;
    }

    if (invoice.status === "paid") {
      setNotice(`Invoice for ${formatLicensePlate(invoice.licensePlate)} is already marked as paid.`);
      openWerkbonModal(invoiceId, false);
      return;
    }

    updateInvoice(invoiceId, (currentInvoice) => ({
      ...currentInvoice,
      status: "paid",
    }));
    setNotice(`Payment completed for ${formatLicensePlate(invoice.licensePlate)}.`);
    openWerkbonModal(invoiceId, false);
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

  const deleteInvoice = async (invoiceId) => {
    const invoice = invoices.find((item) => item.id === invoiceId);
    if (!invoice) {
      return;
    }

    const confirmed = await showConfirmDialog(
      "Are you sure you want to delete this werkbon? This action cannot be undone.",
      "Delete Werkbon",
    );
    if (!confirmed) {
      return;
    }

    try {
      if (invoice.completedAppointmentId) {
        const updatedId = await setWerkbonCreatedForCompletedAppointment({
          completedAppointmentId: invoice.completedAppointmentId,
          garageId: invoice.garageId,
        }, { created: false });
        if (!updatedId) {
          throw new Error("Unable to remove this werkbon from the werkbon list.");
        }
      } else if (invoice.bookingId) {
        await deleteBooking({
          id: invoice.bookingId,
          garageId: invoice.garageId,
        });
      }
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Unable to delete this werkbon.");
      return;
    }

    invoices = invoices.filter((item) => item.id !== invoiceId);
    if (expandedInvoiceId === invoiceId) {
      expandedInvoiceId = "";
    }
    if (selectedInvoiceId === invoiceId) {
      selectedInvoiceId = "";
      modalOpen = false;
      editingInvoiceId = "";
    }
    setNotice("Werkbon deleted.");
    render();
  };

  const render = () => {
    if (!(summaryElement instanceof HTMLElement) || !(listElement instanceof HTMLElement) || !(drawerElement instanceof HTMLElement)) {
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
  };

  contentArea.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) {
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

      if (action === "view") {
        window.location.href = `/werkbon-detail.html?id=${encodeURIComponent(invoiceId)}`;
        return;
      }

      if (action === "edit") {
        openWerkbonModal(invoiceId, true);
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
        applySendStatus(invoiceId, "SMS / WhatsApp");
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
        markInvoicePaid(invoiceId);
        return;
      }

      if (action === "download-pdf") {
        const invoice = invoices.find((item) => item.id === invoiceId);
        if (!invoice) {
          return;
        }

        const popupOpened = openPrintWindow(invoice);
        setNotice(popupOpened ? "Print dialog opened for PDF export." : "Allow pop-ups to export this werkbon as PDF.");
      }

      if (action === "delete") {
        void deleteInvoice(invoiceId);
      }
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

  contentArea.addEventListener("keydown", (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    if (!target) {
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

  searchInput?.addEventListener("input", render);
  statusFilter?.addEventListener("change", render);

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
}