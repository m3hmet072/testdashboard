import { fetchCompletedAppointmentsByGarageIds, isSupabaseConfigured } from "../services/supabaseClient.js";
import { getBookings, getCompletedAppointments } from "../services/bookingService.js";
import { getInboxEmails } from "../services/emailService.js";
import { pageUrl } from "../utils/paths.js";

const MIN_QUERY_LENGTH = 2;
const DEBOUNCE_MS = 300;
const CACHE_TTL_MS = 30_000;
const DATASET_TTL_MS = 60_000;
const MAX_QUERY_LENGTH = 80;
const RECENT_KEY = "garage-dashboard.recent-searches";
const RECENT_LIMIT = 5;

const searchCache = new Map();
const searchDatasetCache = new Map();

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(value, query) {
  const safeValue = escapeHtml(value ?? "");
  const safeQuery = String(query ?? "").trim().slice(0, MAX_QUERY_LENGTH);
  if (!safeQuery) {
    return safeValue;
  }

  const regex = new RegExp(`(${escapeRegExp(safeQuery)})`, "ig");
  return safeValue.replace(regex, "<mark>$1</mark>");
}

function formatPlate(value) {
  const cleaned = String(value ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  return cleaned ? cleaned.replace(/(.{2})(?=.)/g, "$1-") : "";
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return date.toLocaleDateString("nl-NL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatCurrency(value) {
  const amount = Number(value ?? 0);
  if (!Number.isFinite(amount)) {
    return "EUR 0,00";
  }

  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function normalizeStatus(value) {
  const status = String(value ?? "").trim().toLowerCase();
  if (["done", "completed", "complete", "closed"].includes(status)) {
    return "completed";
  }
  if (["confirmed", "confirm"].includes(status)) {
    return "confirmed";
  }
  return status || "new";
}

function statusLabel(status) {
  const normalized = normalizeStatus(status);
  if (normalized === "completed") {
    return "Voltooid";
  }
  if (normalized === "confirmed") {
    return "Bevestigd";
  }
  if (normalized === "new") {
    return "Nieuw";
  }
  return normalized;
}

function looksLikePlate(query) {
  const normalized = String(query ?? "").replace(/[^a-z0-9]/gi, "");
  return normalized.length >= 4 && /[a-z]/i.test(normalized) && /\d/.test(normalized);
}

function looksLikeInvoice(query) {
  return /\d/.test(String(query ?? ""));
}

function sanitizeIlikeToken(value) {
  return String(value ?? "").replaceAll(",", " ").trim();
}

function buildLoosePlatePatterns(query) {
  const raw = sanitizeIlikeToken(query);
  const compact = raw.replace(/[^a-z0-9]/gi, "");
  const patterns = new Set();

  if (raw) {
    patterns.add(`%${raw}%`);
  }

  if (compact) {
    patterns.add(`%${compact}%`);
    patterns.add(`%${compact.split("").join("%")}%`);
  }

  return [...patterns];
}

function iconSvg(name) {
  const icons = {
    calendar: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 2.75V5M14 2.75V5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="3" y="4.5" width="14" height="12.5" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M3 8.5H17" stroke="currentColor" stroke-width="1.6"/></svg>',
    fileText: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6.5 2.5H11.5L15.5 6.5V15.5C15.5 16.33 14.83 17 14 17H6C5.17 17 4.5 16.33 4.5 15.5V4C4.5 3.17 5.17 2.5 6 2.5H6.5Z" stroke="currentColor" stroke-width="1.6"/><path d="M11.5 2.5V6.5H15.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 10H13M7 13H11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.8 10.2L8.9 12.3L13.3 7.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    user: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="6.5" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M4 16.2C4.8 13.9 6.8 12.8 10 12.8C13.2 12.8 15.2 13.9 16 16.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    mail: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="4.5" width="14" height="11" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M4.5 6L10 10L15.5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    car: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 11.5L5.5 7.5C5.8 6.8 6.4 6.4 7.2 6.4H12.8C13.6 6.4 14.2 6.8 14.5 7.5L16 11.5" stroke="currentColor" stroke-width="1.6"/><rect x="3.2" y="10" width="13.6" height="5.5" rx="1.8" stroke="currentColor" stroke-width="1.6"/><circle cx="6.5" cy="14" r="1.1" fill="currentColor"/><circle cx="13.5" cy="14" r="1.1" fill="currentColor"/></svg>',
    receipt: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 2.8H14V16.8L12 15.5L10 16.8L8 15.5L6 16.8V2.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 6.8H12M8 9.8H12M8 12.8H11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    plus: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.5V13.5M6.5 10H13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    settings: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 6.9A3.1 3.1 0 1 1 10 13.1A3.1 3.1 0 0 1 10 6.9Z" stroke="currentColor" stroke-width="1.6"/><path d="M16.1 10.9L15 11.4C14.9 11.8 14.7 12.2 14.5 12.5L14.9 13.7L13.7 14.9L12.5 14.5C12.2 14.7 11.8 14.9 11.4 15L10.9 16.1H9.1L8.6 15C8.2 14.9 7.8 14.7 7.5 14.5L6.3 14.9L5.1 13.7L5.5 12.5C5.3 12.2 5.1 11.8 5 11.4L3.9 10.9V9.1L5 8.6C5.1 8.2 5.3 7.8 5.5 7.5L5.1 6.3L6.3 5.1L7.5 5.5C7.8 5.3 8.2 5.1 8.6 5L9.1 3.9H10.9L11.4 5C11.8 5.1 12.2 5.3 12.5 5.5L13.7 5.1L14.9 6.3L14.5 7.5C14.7 7.8 14.9 8.2 15 8.6L16.1 9.1V10.9Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',
    clock: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.4V10L12.5 11.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    searchX: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.8" stroke="currentColor" stroke-width="1.6"/><path d="M12.7 12.7L17 17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M6.8 6.8L10.2 10.2M10.2 6.8L6.8 10.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    arrowLeft: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M11.8 4.8L6.6 10L11.8 15.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  return icons[name] ?? "";
}

function getRecentSearches() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(RECENT_KEY) || "[]");
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.map((entry) => String(entry ?? "").trim()).filter(Boolean).slice(0, RECENT_LIMIT);
  } catch {
    return [];
  }
}

function setRecentSearches(items) {
  try {
    window.localStorage.setItem(RECENT_KEY, JSON.stringify(items.slice(0, RECENT_LIMIT)));
  } catch {
    // Ignore localStorage failures in restricted browsing modes.
  }
}

function pushRecentSearch(query) {
  const safeQuery = String(query ?? "").trim();
  if (!safeQuery) {
    return;
  }
  const recent = getRecentSearches().filter((item) => item.toLowerCase() !== safeQuery.toLowerCase());
  recent.unshift(safeQuery);
  setRecentSearches(recent);
}

function buildStatusBadge(status) {
  const normalized = normalizeStatus(status);
  if (normalized === "completed") {
    return '<span class="global-search-badge global-search-badge-success">Voltooid</span>';
  }
  if (normalized === "confirmed") {
    return '<span class="global-search-badge global-search-badge-info">Bevestigd</span>';
  }
  if (normalized === "new") {
    return '<span class="global-search-badge global-search-badge-muted">Nieuw</span>';
  }
  return `<span class="global-search-badge global-search-badge-muted">${escapeHtml(statusLabel(normalized))}</span>`;
}

function getShortcutLabel() {
  return /Mac|iPhone|iPad|iPod/i.test(window.navigator.platform) ? "⌘K" : "Ctrl+K";
}

function extractContactField(rawMessage, field) {
  const raw = String(rawMessage ?? "");
  const pattern = new RegExp(`\\b${field}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`, "i");
  return (raw.match(pattern)?.[1] ?? "").trim();
}

function normalizeToken(value) {
  return String(value ?? "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function clampQuery(value) {
  return String(value ?? "").trim().slice(0, MAX_QUERY_LENGTH);
}

function includesToken(haystack, token) {
  const normalizedHaystack = normalizeToken(haystack);
  return normalizedHaystack.includes(token);
}

function bookingCustomerName(booking) {
  const fromMessage = extractContactField(booking?.message, "name");
  return fromMessage || "Onbekende klant";
}

function bookingCustomerEmail(booking) {
  return extractContactField(booking?.message, "email");
}

function matchesQuery(queryToken, ...values) {
  return values.some((value) => includesToken(value, queryToken));
}

function buildSearchSources(bookings, completedAppointments, completedRows, inboxEmails) {
  const appointmentsSource = bookings
    .filter((booking) => normalizeStatus(booking?.status) !== "completed" && booking?.inAppointments !== false)
    .map((booking) => ({
      id: booking.id,
      customer_name: bookingCustomerName(booking),
      customer_email: bookingCustomerEmail(booking),
      customer_phone: String(booking.phone ?? ""),
      license_plate: String(booking.licensePlate ?? ""),
      car_brand: String(booking.service ?? "Service"),
      status: booking.status,
      appointment_date: booking.appointmentAt || booking.createdAt,
      services: booking.service,
    }));

  const completedSource = completedAppointments
    .map((item) => ({
      id: item.id,
      customer_name: item.customerName || "Onbekende klant",
      license_plate: item.licensePlate,
      car_brand: item.service || "Service",
      appointment_date: item.appointmentAt || item.completedAt || item.createdAt,
      status: "completed",
    }));

  const plateSource = [...appointmentsSource, ...completedSource];

  const customerMap = new Map();
  appointmentsSource.forEach((item) => {
    const key = `${item.customer_name}|${item.customer_email}|${item.license_plate}`.toLowerCase();
    if (!customerMap.has(key)) {
      customerMap.set(key, {
        customer_name: item.customer_name,
        customer_email: item.customer_email,
        customer_phone: item.customer_phone,
        license_plate: item.license_plate,
        car_brand: item.car_brand,
      });
    }
  });

  const notesByCompletedId = new Map();
  completedRows.forEach((row) => {
    let notes = {};
    try {
      notes = JSON.parse(String(row.completion_notes ?? "{}"));
    } catch {
      notes = {};
    }
    notesByCompletedId.set(String(row.id ?? ""), notes);
  });

  const werkbonSource = completedAppointments
    .map((item) => {
      const notes = notesByCompletedId.get(String(item.completedAppointmentId ?? "")) ?? {};
      const total = Number(notes?.totals?.total ?? 0);
      return {
        id: item.completedAppointmentId,
        customer_name: item.customerName || String(notes.customer_name ?? "Onbekende klant"),
        license_plate: item.licensePlate,
        car_brand: String(notes.car_model ?? item.service ?? "Service"),
        total,
        status: String(notes.status ?? "draft"),
        factuurnummer: String(notes.invoice_number ?? "").trim(),
        created_at: item.createdAt,
      };
    });

  const invoiceSource = werkbonSource.filter((item) => item.factuurnummer);

  const emailsSource = inboxEmails
    .map((mail) => ({
      id: mail.id,
      from_name: mail.senderName,
      from_email: mail.senderEmail,
      subject: mail.subject,
      created_at: mail.receivedAt,
      read: mail.read,
    }));

  return {
    appointmentsSource,
    completedSource,
    plateSource,
    customerSource: Array.from(customerMap.values()),
    werkbonSource,
    invoiceSource,
    emailsSource,
  };
}

function attachSearchIndex(sources) {
  const withIndex = (items, fields) => items.map((item) => ({
    ...item,
    _searchToken: normalizeToken(fields.map((field) => String(item[field] ?? "")).join(" ")),
  }));

  const appointments = withIndex(sources.appointmentsSource, [
    "customer_name",
    "customer_email",
    "customer_phone",
    "license_plate",
    "car_brand",
  ]);

  const completed = withIndex(sources.completedSource, [
    "customer_name",
    "license_plate",
    "car_brand",
  ]);

  const customers = withIndex(sources.customerSource, [
    "customer_name",
    "customer_email",
    "customer_phone",
    "license_plate",
    "car_brand",
  ]);

  const werkbonnen = withIndex(sources.werkbonSource, [
    "customer_name",
    "license_plate",
    "car_brand",
    "factuurnummer",
  ]);

  const emails = withIndex(sources.emailsSource, [
    "from_name",
    "from_email",
    "subject",
  ]);

  const plates = [...appointments, ...completed].map((item) => ({
    ...item,
    _plateToken: normalizeToken(item.license_plate),
  }));

  const invoices = sources.invoiceSource.map((item) => ({
    ...item,
    _invoiceToken: normalizeToken(item.factuurnummer),
  }));

  return {
    appointments,
    completed,
    customers,
    werkbonnen,
    emails,
    plates,
    invoices,
  };
}

function filterLimited(items, token, limit, matcher) {
  const result = [];
  for (const item of items) {
    if (matcher(item, token)) {
      result.push(item);
      if (result.length >= limit) {
        break;
      }
    }
  }
  return result;
}

async function getSearchDataset(garageId) {
  const key = String(garageId ?? "").trim();
  const now = Date.now();
  const cached = searchDatasetCache.get(key);

  if (cached?.data && now - cached.timestamp < DATASET_TTL_MS) {
    return cached.data;
  }

  if (cached?.inFlight) {
    return cached.inFlight;
  }

  const inFlight = Promise.all([
    getBookings({ garageIds: [key] }),
    getCompletedAppointments({ garageIds: [key] }),
    fetchCompletedAppointmentsByGarageIds({ garageIds: [key] }),
  ]).then(([bookings, completedAppointments, completedRows]) => {
    const inboxEmails = getInboxEmails(bookings);
    const sources = buildSearchSources(bookings, completedAppointments, completedRows, inboxEmails);
    const indexed = attachSearchIndex(sources);
    return { indexed };
  });

  searchDatasetCache.set(key, {
    timestamp: now,
    data: cached?.data ?? null,
    inFlight,
  });

  try {
    const data = await inFlight;
    searchDatasetCache.set(key, {
      timestamp: Date.now(),
      data,
      inFlight: null,
    });
    return data;
  } catch (error) {
    if (cached?.data) {
      return cached.data;
    }
    searchDatasetCache.delete(key);
    throw error;
  }
}

function getQuickActions(query) {
  const keyword = String(query ?? "").trim().toLowerCase();

  const actions = [
    {
      key: "new-appointment",
      icon: "plus",
      title: "Nieuwe afspraak toevoegen",
      match: ["nieuwe afspraak", "afspraak"],
      navigate: () => {
        window.location.href = pageUrl("add-appointment.html");
      },
    },
    {
      key: "new-werkbon",
      icon: "fileText",
      title: "Nieuwe werkbon maken",
      match: ["werkbon", "factuur"],
      navigate: () => {
        window.location.href = pageUrl("werkbon.html?action=create");
      },
    },
    {
      key: "calendar",
      icon: "calendar",
      title: "Kalender bekijken",
      match: ["kalender", "agenda"],
      navigate: () => {
        window.location.href = pageUrl("calendar.html");
      },
    },
    {
      key: "settings",
      icon: "settings",
      title: "Instellingen openen",
      match: ["instellingen", "settings"],
      navigate: () => {
        window.location.href = pageUrl("settings.html");
      },
    },
  ];

  if (!keyword) {
    return [];
  }

  return actions.filter((action) => action.match.some((entry) => keyword.includes(entry)));
}

async function fetchAllResults(query, garageId) {
  const normalizedQuery = clampQuery(query);
  const cacheKey = `${garageId}:${normalizedQuery.toLowerCase()}`;
  if (searchCache.has(cacheKey)) {
    return searchCache.get(cacheKey);
  }

  if (!isSupabaseConfigured()) {
    return {
      appointments: [],
      werkbonnen: [],
      completed: [],
      customers: [],
      emails: [],
      plates: [],
      invoices: [],
      includePlateSection: looksLikePlate(normalizedQuery),
      includeInvoiceSection: looksLikeInvoice(normalizedQuery),
      quickActions: getQuickActions(normalizedQuery),
    };
  }

  const includePlateSection = looksLikePlate(normalizedQuery);
  const includeInvoiceSection = looksLikeInvoice(normalizedQuery);
  const queryToken = normalizeToken(normalizedQuery);

  const { indexed } = await getSearchDataset(garageId);

  const diagnostics = [];
  const safeSearch = async (label, searchTask) => {
    try {
      const data = await searchTask();
      diagnostics.push({ label, count: Array.isArray(data) ? data.length : 0, ok: true });
      return Array.isArray(data) ? data : [];
    } catch (error) {
      diagnostics.push({
        label,
        count: 0,
        ok: false,
        error: error instanceof Error ? error.message : String(error ?? "Unknown error"),
      });
      return [];
    }
  };

  const [appointments, werkbonnen, completed, customers, emails, plates, invoices] = await Promise.all([
    safeSearch("appointments", () => Promise.resolve(filterLimited(indexed.appointments, queryToken, 4, (item, token) => item._searchToken.includes(token)))),
    safeSearch("werkbonnen", () => Promise.resolve(filterLimited(indexed.werkbonnen, queryToken, 4, (item, token) => item._searchToken.includes(token)))),
    safeSearch("completed", () => Promise.resolve(filterLimited(indexed.completed, queryToken, 3, (item, token) => item._searchToken.includes(token)))),
    safeSearch("customers", () => Promise.resolve(filterLimited(indexed.customers, queryToken, 3, (item, token) => item._searchToken.includes(token)))),
    safeSearch("emails", () => Promise.resolve(filterLimited(indexed.emails, queryToken, 3, (item, token) => item._searchToken.includes(token)))),
    includePlateSection
      ? safeSearch("plates", () => Promise.resolve(filterLimited(indexed.plates, queryToken, 4, (item, token) => item._plateToken.includes(token))))
      : Promise.resolve([]),
    includeInvoiceSection
      ? safeSearch("invoices", () => Promise.resolve(filterLimited(indexed.invoices, queryToken, 3, (item, token) => item._invoiceToken.includes(token))))
      : Promise.resolve([]),
  ]);

  if (import.meta.env.DEV) {
    const summary = diagnostics
      .map((entry) => `${entry.label}:${entry.count}${entry.ok ? "" : "(error)"}`)
      .join(" | ");

    // Helps diagnose why a plate/customer doesn't show up without affecting production UX.
    console.debug(`[global-search] q="${normalizedQuery}" garage=${garageId} -> ${summary}`);

    const failures = diagnostics.filter((entry) => !entry.ok);
    if (failures.length) {
      console.warn("[global-search] query failures", failures);
    }
  }

  const result = {
    appointments,
    werkbonnen,
    completed,
    customers,
    emails,
    plates,
    invoices,
    includePlateSection,
    includeInvoiceSection,
    quickActions: getQuickActions(normalizedQuery),
  };

  searchCache.set(cacheKey, result);
  window.setTimeout(() => {
    searchCache.delete(cacheKey);
  }, CACHE_TTL_MS);

  return result;
}

function resultItemMarkup(item, query, index) {
  const dataset = `data-search-item-index="${index}"`;

  if (item.type === "appointment") {
    return `
      <button class="search-result-item" type="button" ${dataset}>
        <span class="search-result-icon search-result-icon-appointments">${iconSvg("calendar")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${highlightText(item.customerName, query)}</span>
          <span class="search-result-secondary">${escapeHtml(item.carBrand || "-")} <span class="plate-chip plate-chip-small">${escapeHtml(formatPlate(item.plate) || "UNKNOWN")}</span></span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${escapeHtml(item.date)}</span>
          ${buildStatusBadge(item.status)}
        </span>
      </button>
    `;
  }

  if (item.type === "werkbon") {
    return `
      <button class="search-result-item" type="button" ${dataset}>
        <span class="search-result-icon search-result-icon-werkbonnen">${iconSvg("fileText")}</span>
        <span class="search-result-main">
          <span class="search-result-primary"><small class="search-result-muted">${highlightText(item.factuur, query)}</small> ${highlightText(item.customerName, query)}</span>
          <span class="search-result-secondary"><span class="plate-chip plate-chip-small">${escapeHtml(formatPlate(item.plate) || "UNKNOWN")}</span> ${escapeHtml(item.carBrand || "-")}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${escapeHtml(item.total)}</span>
          ${buildStatusBadge(item.status)}
        </span>
      </button>
    `;
  }

  if (item.type === "completed") {
    return `
      <button class="search-result-item" type="button" ${dataset}>
        <span class="search-result-icon search-result-icon-completed">${iconSvg("check")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${highlightText(item.customerName, query)}</span>
          <span class="search-result-secondary">${escapeHtml(item.carBrand || "-")} <span class="plate-chip plate-chip-small">${escapeHtml(formatPlate(item.plate) || "UNKNOWN")}</span></span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${escapeHtml(item.date)}</span>
          <span class="global-search-badge global-search-badge-success">Voltooid</span>
        </span>
      </button>
    `;
  }

  if (item.type === "customer") {
    return `
      <button class="search-result-item" type="button" ${dataset}>
        <span class="search-result-icon search-result-icon-customers">${iconSvg("user")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${highlightText(item.customerName, query)}</span>
          <span class="search-result-secondary">${highlightText(item.email, query)}</span>
        </span>
        <span class="search-result-side">
          <span class="plate-chip plate-chip-small">${escapeHtml(formatPlate(item.plate) || "UNKNOWN")}</span>
          <span class="search-result-muted">${escapeHtml(item.carBrand || "-")}</span>
        </span>
      </button>
    `;
  }

  if (item.type === "email") {
    return `
      <button class="search-result-item" type="button" ${dataset}>
        <span class="search-result-icon search-result-icon-emails">${iconSvg("mail")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${item.unread ? '<span class="search-unread-dot"></span>' : ""}${highlightText(item.sender, query)}</span>
          <span class="search-result-secondary">${highlightText(item.subject, query)}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${escapeHtml(item.date)}</span>
          ${item.unread ? '<span class="global-search-badge global-search-badge-info">Ongelezen</span>' : ""}
        </span>
      </button>
    `;
  }

  if (item.type === "plate") {
    return `
      <button class="search-result-item" type="button" ${dataset}>
        <span class="search-result-icon search-result-icon-plates">${iconSvg("car")}</span>
        <span class="search-result-main">
          <span class="search-result-primary"><span class="plate-chip">${highlightText(formatPlate(item.plate), query)}</span></span>
          <span class="search-result-secondary">${escapeHtml(item.carBrand || "-")} - ${escapeHtml(item.customerName || "-")}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${escapeHtml(item.date)}</span>
          ${buildStatusBadge(item.status)}
        </span>
      </button>
    `;
  }

  if (item.type === "invoice") {
    return `
      <button class="search-result-item" type="button" ${dataset}>
        <span class="search-result-icon search-result-icon-invoices">${iconSvg("receipt")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${highlightText(item.factuur, query)}</span>
          <span class="search-result-secondary">${highlightText(item.customerName, query)}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${escapeHtml(item.total)}</span>
          ${buildStatusBadge(item.status)}
        </span>
      </button>
    `;
  }

  return `
    <button class="search-result-item" type="button" ${dataset}>
      <span class="search-result-icon search-result-icon-actions">${iconSvg(item.icon)}</span>
      <span class="search-result-main">
        <span class="search-result-primary">${highlightText(item.title, query)}</span>
      </span>
    </button>
  `;
}

function sectionMarkup(label, items, query, startIndex) {
  if (!items.length) {
    return "";
  }

  const rows = items
    .map((item, offset) => resultItemMarkup(item, query, startIndex + offset))
    .join("");

  return `
    <section class="search-section" data-search-section>
      <header class="search-section-header">
        <span>${escapeHtml(label)}</span>
        <span>${items.length}</span>
      </header>
      <div class="search-section-items">
        ${rows}
      </div>
    </section>
  `;
}

function emptyMarkup(query) {
  return `
    <div class="search-empty-state">
      <span class="search-empty-icon">${iconSvg("searchX")}</span>
      <strong>Geen resultaten voor '${escapeHtml(query)}'</strong>
      <p>Probeer een andere zoekterm</p>
    </div>
  `;
}

function loadingMarkup() {
  return `
    <div class="search-loading-stack">
      ${Array.from({ length: 4 }).map(() => `
        <div class="search-loading-section">
          <div class="skeleton search-loading-head"></div>
          <div class="skeleton search-loading-row"></div>
          <div class="skeleton search-loading-row"></div>
          <div class="skeleton search-loading-row"></div>
        </div>
      `).join("")}
    </div>
  `;
}

function recentMarkup() {
  const recent = getRecentSearches();
  if (!recent.length) {
    return `
      <section class="search-section">
        <header class="search-section-header"><span>Recente zoekopdrachten</span><span>0</span></header>
        <div class="search-empty-small">Nog geen recente zoekopdrachten.</div>
      </section>
    `;
  }

  return `
    <section class="search-section">
      <header class="search-section-header"><span>Recente zoekopdrachten</span><span>${recent.length}</span></header>
      <div class="search-recents">
        ${recent.map((term, index) => `
          <button class="search-recent-item" type="button" data-recent-index="${index}" data-recent-term="${escapeHtml(term)}">
            <span class="search-recent-left">${iconSvg("clock")} ${escapeHtml(term)}</span>
            <span class="search-recent-remove" role="button" tabindex="0" data-recent-remove="${index}">×</span>
          </button>
        `).join("")}
      </div>
      <button class="search-clear-history" type="button" data-recent-clear="true">Wis geschiedenis</button>
    </section>
  `;
}

function toSearchModel(data) {
  return {
    plates: data.plates.map((item) => ({
      type: "plate",
      plate: item.license_plate,
      carBrand: item.car_brand,
      customerName: item.customer_name,
      date: formatDate(item.appointment_date),
      status: item.status,
      open: () => {
        const url = new URL(pageUrl("bookings.html"), window.location.origin);
        url.searchParams.set("plate", String(item.license_plate ?? ""));
        window.location.href = `${url.pathname}${url.search}`;
      },
    })),
    appointments: data.appointments.map((item) => ({
      type: "appointment",
      customerName: item.customer_name,
      carBrand: item.car_brand,
      plate: item.license_plate,
      date: formatDate(item.appointment_date),
      status: item.status,
      open: () => {
        const url = new URL(pageUrl("bookings.html"), window.location.origin);
        url.searchParams.set("bookingId", String(item.id));
        window.location.href = `${url.pathname}${url.search}`;
      },
    })),
    werkbonnen: data.werkbonnen.map((item) => ({
      type: "werkbon",
      factuur: item.factuurnummer || "Factuur",
      customerName: item.customer_name,
      plate: item.license_plate,
      carBrand: item.car_brand,
      total: formatCurrency(item.total),
      status: item.status,
      open: () => {
        window.location.href = pageUrl(`werkbon-detail.html?id=${encodeURIComponent(String(item.id))}`);
      },
    })),
    completed: data.completed.map((item) => ({
      type: "completed",
      customerName: item.customer_name,
      plate: item.license_plate,
      carBrand: item.car_brand,
      date: formatDate(item.appointment_date),
      open: () => {
        const url = new URL(pageUrl("completed.html"), window.location.origin);
        url.searchParams.set("customer", String(item.customer_name ?? ""));
        window.location.href = `${url.pathname}${url.search}`;
      },
    })),
    customers: data.customers.map((item) => ({
      type: "customer",
      customerName: item.customer_name,
      email: item.customer_email || item.customer_phone || "-",
      plate: item.license_plate,
      carBrand: item.car_brand,
      open: () => {
        const url = new URL(pageUrl("bookings.html"), window.location.origin);
        url.searchParams.set("customer", String(item.customer_name ?? ""));
        window.location.href = `${url.pathname}${url.search}`;
      },
    })),
    emails: data.emails.map((item) => ({
      type: "email",
      sender: item.from_name || item.from_email || "Onbekend",
      subject: item.subject || "(geen onderwerp)",
      unread: item.read === false,
      date: formatDate(item.created_at),
      open: () => {
        const url = new URL(pageUrl("emails.html"), window.location.origin);
        url.searchParams.set("emailId", String(item.id));
        window.location.href = `${url.pathname}${url.search}`;
      },
    })),
    invoices: data.invoices.map((item) => ({
      type: "invoice",
      factuur: item.factuurnummer || "Factuur",
      customerName: item.customer_name,
      total: formatCurrency(item.total),
      status: item.status,
      open: () => {
        window.location.href = pageUrl(`werkbon-detail.html?id=${encodeURIComponent(String(item.id))}`);
      },
    })),
    quickActions: data.quickActions.map((item) => ({
      type: "action",
      icon: item.icon,
      title: item.title,
      open: item.navigate,
    })),
  };
}

export function initializeGlobalSearch({ header, garageId }) {
  if (!(header instanceof HTMLElement) || !garageId) {
    return;
  }

  const root = header.querySelector("[data-global-search-root]");
  if (!(root instanceof HTMLElement) || root.dataset.searchInitialized === "true") {
    return;
  }
  root.dataset.searchInitialized = "true";

  const shell = root.querySelector(".topbar-search-shell");
  const desktopInput = root.querySelector(".topbar-search-input");
  const dropdown = root.querySelector("[data-global-search-dropdown]");
  const mobileTrigger = root.querySelector(".topbar-mobile-search-trigger");
  const shortcutHint = root.querySelector("[data-search-shortcut-hint]");

  if (!(shell instanceof HTMLElement)
    || !(desktopInput instanceof HTMLInputElement)
    || !(dropdown instanceof HTMLElement)
    || !(mobileTrigger instanceof HTMLButtonElement)) {
    return;
  }

  if (shortcutHint instanceof HTMLElement) {
    shortcutHint.textContent = getShortcutLabel();
  }

  const mobileOverlay = document.createElement("div");
  mobileOverlay.className = "mobile-search-overlay";
  mobileOverlay.innerHTML = `
    <div class="mobile-search-header">
      <button class="mobile-search-back" type="button" aria-label="Back">${iconSvg("arrowLeft")}</button>
      <label class="mobile-search-input-wrap" aria-label="Global search">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
          <path d="M11.3333 11.332L13.9999 13.9987" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input class="mobile-search-input" type="search" placeholder="Zoek afspraken, werkbonnen, klanten..." autocomplete="off" />
      </label>
    </div>
    <div class="mobile-search-results"></div>
  `;
  document.body.append(mobileOverlay);

  const mobileInput = mobileOverlay.querySelector(".mobile-search-input");
  const mobileResults = mobileOverlay.querySelector(".mobile-search-results");
  const mobileBackButton = mobileOverlay.querySelector(".mobile-search-back");

  if (!(mobileInput instanceof HTMLInputElement)
    || !(mobileResults instanceof HTMLElement)
    || !(mobileBackButton instanceof HTMLButtonElement)) {
    return;
  }

  let currentQuery = "";
  let open = false;
  let mobileOpen = false;
  let loading = false;
  let selectedIndex = -1;
  let flatItems = [];
  let debounceTimer = 0;

  const setOpen = (isOpen) => {
    open = isOpen;
    if (!open) {
      dropdown.hidden = true;
      dropdown.innerHTML = "";
      selectedIndex = -1;
      flatItems = [];
      return;
    }

    if (!mobileOpen) {
      dropdown.hidden = false;
    }
  };

  const setMobileOpen = (isOpen) => {
    mobileOpen = isOpen;
    mobileOverlay.classList.toggle("open", mobileOpen);
    if (!mobileOpen) {
      document.body.style.overflow = "";
      setOpen(false);
      return;
    }

    document.body.style.overflow = "hidden";
    mobileInput.value = desktopInput.value;
    currentQuery = mobileInput.value.trim();
    setOpen(true);
    mobileInput.focus();
    mobileInput.select();
    renderCurrent();
  };

  const getActiveInput = () => (mobileOpen ? mobileInput : desktopInput);

  const getRenderTarget = () => (mobileOpen ? mobileResults : dropdown);

  const syncInputs = (value) => {
    const safeValue = String(value ?? "").slice(0, MAX_QUERY_LENGTH);
    desktopInput.value = safeValue;
    mobileInput.value = safeValue;
    currentQuery = safeValue.trim();
  };

  const updateSelectedRows = (container) => {
    container.querySelectorAll(".search-result-item").forEach((row) => {
      const index = Number(row.getAttribute("data-search-item-index") ?? -1);
      row.classList.toggle("is-selected", index === selectedIndex);
    });
  };

  const activateItemAtIndex = (index) => {
    const selected = flatItems[index];
    if (!selected) {
      return;
    }

    if (currentQuery.length >= MIN_QUERY_LENGTH) {
      pushRecentSearch(currentQuery);
    }

    setOpen(false);
    setMobileOpen(false);
    selected.open();
  };

  const renderError = () => {
    const target = getRenderTarget();
    target.innerHTML = '<div class="search-empty-small">Zoeken tijdelijk niet beschikbaar</div>';
    setOpen(true);
  };

  const renderCurrent = async () => {
    const query = currentQuery;
    const target = getRenderTarget();

    if (!query) {
      target.innerHTML = recentMarkup();
      setOpen(true);
      selectedIndex = -1;
      flatItems = [];
      bindRecentActions();
      return;
    }

    if (query.length < MIN_QUERY_LENGTH) {
      target.innerHTML = '<div class="search-empty-small">Typ minimaal 2 tekens om te zoeken</div>';
      setOpen(true);
      selectedIndex = -1;
      flatItems = [];
      return;
    }

    loading = true;
    target.innerHTML = loadingMarkup();
    setOpen(true);

    try {
      const rawData = await fetchAllResults(query, garageId);
      if (query !== currentQuery) {
        return;
      }

      const data = toSearchModel(rawData);
      flatItems = [
        ...data.plates,
        ...data.appointments,
        ...data.werkbonnen,
        ...data.completed,
        ...data.customers,
        ...data.emails,
        ...data.invoices,
        ...data.quickActions,
      ];

      let cursor = 0;
      const sections = [
        ["Kentekens", data.plates],
        ["Afspraken", data.appointments],
        ["Werkbonnen", data.werkbonnen],
        ["Voltooide afspraken", data.completed],
        ["Klanten", data.customers],
        ["E-mails", data.emails],
        ["Factuurnummers", data.invoices],
        ["Snelle acties", data.quickActions],
      ];

      const markup = sections
        .map(([label, items]) => {
          const html = sectionMarkup(label, items, query, cursor);
          cursor += items.length;
          return html;
        })
        .join("");

      target.innerHTML = markup || emptyMarkup(query);

      if (!flatItems.length) {
        selectedIndex = -1;
      } else if (selectedIndex < 0 || selectedIndex >= flatItems.length) {
        selectedIndex = 0;
      }

      updateSelectedRows(target);
    } catch {
      renderError();
    } finally {
      loading = false;
    }
  };

  const bindRecentActions = () => {
    const target = getRenderTarget();

    target.querySelectorAll("[data-recent-term]").forEach((node) => {
      node.addEventListener("click", (event) => {
        const removeButton = event.target instanceof Element ? event.target.closest("[data-recent-remove]") : null;
        if (removeButton) {
          return;
        }

        const term = String(node.getAttribute("data-recent-term") ?? "");
        syncInputs(term);
        renderCurrent();
      });
    });

    target.querySelectorAll("[data-recent-remove]").forEach((node) => {
      node.addEventListener("click", (event) => {
        event.stopPropagation();
        const index = Number(node.getAttribute("data-recent-remove") ?? -1);
        const recent = getRecentSearches();
        if (index < 0 || index >= recent.length) {
          return;
        }
        recent.splice(index, 1);
        setRecentSearches(recent);
        renderCurrent();
      });
    });

    target.querySelector("[data-recent-clear]")?.addEventListener("click", () => {
      setRecentSearches([]);
      renderCurrent();
    });
  };

  const scheduleSearch = (value) => {
    syncInputs(value);
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(() => {
      renderCurrent();
    }, DEBOUNCE_MS);
  };

  const navigateSelection = (direction) => {
    if (!open || !flatItems.length) {
      return;
    }

    const maxIndex = flatItems.length - 1;
    if (selectedIndex < 0) {
      selectedIndex = direction > 0 ? 0 : maxIndex;
    } else {
      selectedIndex += direction;
      if (selectedIndex > maxIndex) {
        selectedIndex = 0;
      }
      if (selectedIndex < 0) {
        selectedIndex = maxIndex;
      }
    }

    updateSelectedRows(getRenderTarget());

    const selectedRow = getRenderTarget().querySelector(`[data-search-item-index="${selectedIndex}"]`);
    if (selectedRow instanceof HTMLElement) {
      selectedRow.scrollIntoView({ block: "nearest" });
    }
  };

  const openSelection = () => {
    if (selectedIndex < 0 || selectedIndex >= flatItems.length) {
      return;
    }

    activateItemAtIndex(selectedIndex);
  };

  const onInputKeydown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      navigateSelection(1);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      navigateSelection(-1);
      return;
    }

    if (event.key === "Enter") {
      if (open && selectedIndex >= 0) {
        event.preventDefault();
        openSelection();
      }
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      if (open) {
        setOpen(false);
        return;
      }

      const activeInput = getActiveInput();
      if (activeInput.value) {
        scheduleSearch("");
      } else if (mobileOpen) {
        setMobileOpen(false);
      }
      return;
    }

    if (event.key === "Tab") {
      setOpen(false);
    }
  };

  const openFromAnywhere = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setMobileOpen(true);
      return;
    }

    setOpen(true);
    desktopInput.focus();
    desktopInput.select();
    renderCurrent();
  };

  desktopInput.addEventListener("focus", () => {
    renderCurrent();
  });
  desktopInput.addEventListener("input", () => scheduleSearch(desktopInput.value));
  desktopInput.addEventListener("keydown", onInputKeydown);

  mobileInput.addEventListener("input", () => scheduleSearch(mobileInput.value));
  mobileInput.addEventListener("keydown", onInputKeydown);

  mobileTrigger.addEventListener("click", () => {
    setMobileOpen(true);
  });

  mobileBackButton.addEventListener("click", () => {
    setMobileOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    const key = String(event.key ?? "").toLowerCase();
    if ((event.ctrlKey || event.metaKey) && key === "k") {
      event.preventDefault();
      openFromAnywhere();
      return;
    }

    if (key === "escape") {
      if (mobileOpen) {
        setMobileOpen(false);
        return;
      }

      if (open && document.activeElement !== desktopInput && document.activeElement !== mobileInput) {
        setOpen(false);
      }
    }
  });

  document.addEventListener("mousedown", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    if (mobileOpen && mobileOverlay.contains(target)) {
      return;
    }

    if (root.contains(target)) {
      return;
    }

    setOpen(false);
  });

  shell.addEventListener("click", () => {
    if (!open) {
      renderCurrent();
    }
  });

  root.addEventListener("mouseover", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const row = target.closest(".search-result-item");
    if (!(row instanceof HTMLElement)) {
      return;
    }

    const index = Number(row.getAttribute("data-search-item-index") ?? -1);
    if (index < 0 || index === selectedIndex) {
      return;
    }

    selectedIndex = index;
    updateSelectedRows(getRenderTarget());
  });

  root.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const row = target.closest(".search-result-item");
    if (!(row instanceof HTMLElement)) {
      return;
    }

    const index = Number(row.getAttribute("data-search-item-index") ?? -1);
    if (index < 0) {
      return;
    }

    activateItemAtIndex(index);
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    desktopInput.setAttribute("tabindex", "-1");
  }
}
