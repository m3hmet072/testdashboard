// ============================================================================
// Analytics Page Module
// ============================================================================
// Displays analytics metrics, visitor insights, and service distribution charts

import { assetUrl } from "../utils/paths.js";
import { initializeTheme } from "../utils/theme.js";
import { c as renderChart } from "../components/charts.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { getBookings } from "../services/bookingService.js";
import { summarizeEmailInbox } from "../services/emailService.js";
import { c as createAppShell } from "../utils/branding.js";


// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Safely convert value to finite number, default to 0
 */
function toNumber(value) {
  const num = Number(value ?? 0);
  return Number.isFinite(num) ? num : 0;
}

/**
 * Calculate analytics summary from visitor data
 */
function calculateSummary(visitors) {
  const today = new Date().toISOString().slice(0, 10);
  const thisMonth = today.slice(0, 7);

  let totalVisitors = 0;
  let visitorsToday = 0;
  let visitorsThisMonth = 0;
  let pageviews = 0;
  let conversions = 0;
  let peakVisitors = 0;

  for (const record of visitors) {
    const active = toNumber(record.activeUsers);
    const views = toNumber(record.pageviews);
    const convs = toNumber(record.conversions);

    totalVisitors += active;
    pageviews += views;
    conversions += convs;
    peakVisitors = Math.max(peakVisitors, active);

    if (record.date === today) visitorsToday += active;
    if (String(record.date ?? "").startsWith(thisMonth)) visitorsThisMonth += active;
  }

  return {
    totalVisitors,
    peakVisitors,
    averageVisitors: visitors.length ? Math.round(totalVisitors / visitors.length) : 0,
    visitorsToday,
    visitorsThisMonth,
    pageviews,
    conversions,
    conversionRate: pageviews ? Number((conversions / pageviews * 100).toFixed(2)) : 0,
  };
}

/**
 * Normalize visitor data to consistent format
 */
function normalizeVisitors(data) {
  return data.map((record) => ({
    date: String(record.date ?? ""),
    activeUsers: toNumber(record.activeUsers),
    pageviews: toNumber(record.pageviews),
    conversions: toNumber(record.conversions),
  }));
}

/**
 * Fetch analytics from Google Analytics API
 */
async function fetchAnalyticsProperty({ propertyId, startDate, endDate }) {
  const query = new URLSearchParams({ startDate, endDate, propertyId });
  const response = await fetch(`/api/googleAnalytics?${query.toString()}`);

  if (!response.ok) {
    throw new Error(`Analytics request failed (${response.status})`);
  }

  const data = await response.json();
  const visitors = normalizeVisitors(Array.isArray(data.visitors) ? data.visitors : []);

  return {
    source: data.source ?? "ga",
    propertyId,
    visitors,
    summary: data.summary ?? calculateSummary(visitors),
    warning: data.warning ?? null,
  };
}

/**
 * Merge multiple property analytics into single dataset
 */
function mergeAnalytics(properties) {
  const dateMap = new Map();

  for (const property of properties) {
    for (const visitor of property.visitors) {
      const existing = dateMap.get(visitor.date) ?? {
        date: visitor.date,
        activeUsers: 0,
        pageviews: 0,
        conversions: 0,
      };

      existing.activeUsers += toNumber(visitor.activeUsers);
      existing.pageviews += toNumber(visitor.pageviews);
      existing.conversions += toNumber(visitor.conversions);
      dateMap.set(visitor.date, existing);
    }
  }

  return Array.from(dateMap.values()).sort((a, b) =>
    a.date.localeCompare(b.date)
  );
}

/**
 * Fetch analytics for single or multiple garages
 */
async function fetchGarageAnalytics({
  garage = null,
  garages = [],
  isAdmin = false,
  startDate = "30daysAgo",
  endDate = "today",
} = {}) {
  const properties = isAdmin
    ? garages.filter((g) => g?.analyticsPropertyId)
    : [garage].filter((g) => g?.analyticsPropertyId);

  if (!properties.length) {
    return {
      source: "ga",
      visitors: [],
      summary: calculateSummary([]),
      warning: "No analytics_property_id set for this garage. Configure it in the garages table.",
    };
  }

  const results = await Promise.allSettled(
    properties.map((prop) =>
      fetchAnalyticsProperty({
        propertyId: prop.analyticsPropertyId,
        startDate,
        endDate,
      })
    )
  );

  const successful = results
    .filter((r) => r.status === "fulfilled")
    .map((r) => r.value);

  const failed = results.filter((r) => r.status === "rejected");

  if (!successful.length) {
    return {
      source: "ga",
      visitors: [],
      summary: calculateSummary([]),
      warning:
        failed[0]?.reason instanceof Error
          ? failed[0].reason.message
          : "Unable to load Google Analytics data.",
    };
  }

  const merged = mergeAnalytics(successful);
  const summary = calculateSummary(merged);
  const warning = failed.length
    ? `Some properties failed to load (${failed.length}/${properties.length}).`
    : successful.find((p) => p.warning)?.warning ?? null;

  return {
    source: successful.length > 1 ? "ga-multi" : successful[0].source,
    visitors: merged,
    summary,
    warning,
  };
}

// ============================================================================
// Service Distribution Analysis
// ============================================================================

const SERVICE_CATEGORY_MAP = new Map([
  ["apk", "apk"],
  ["banden", "banden"],
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
]);

const SERVICE_CATEGORIES = ["apk", "banden", "onderhoud", "airco", "occasions", "brakes", "other"];

const SERVICE_LABELS = {
  apk: "APK",
  banden: "Banden",
  onderhoud: "Onderhoud",
  airco: "Airco",
  occasions: "Occasions",
  brakes: "Brakes",
  other: "Overige",
};

/**
 * Normalize appointment status
 */
function normalizeStatus(status) {
  const normalized = String(status ?? "").trim().toLowerCase();
  if (normalized === "done" || normalized === "completed" || normalized === "complete" || normalized === "closed") {
    return "done";
  }
  if (normalized === "confirmed" || normalized === "confirm") {
    return "confirmed";
  }
  return "new";
}

/**
 * Check if appointment is completed
 */
function isCompleted(appointment) {
  return normalizeStatus(appointment.status) === "done" || appointment.inAppointments === false;
}

/**
 * Parse service string into array of services
 */
function parseServices(serviceString) {
  const text = String(serviceString ?? "").trim();
  if (!text) return ["other"];

  const delimiter = text.includes(",") ? /,/g : /\+|\/|&| and /gi;
  const services = text
    .split(delimiter)
    .map((s) => s.trim())
    .filter(Boolean);

  return services.length ? services : [text];
}

/**
 * Normalize service to category
 */
function normalizeServiceCategory(service) {
  return SERVICE_CATEGORY_MAP.get(String(service ?? "").trim().toLowerCase()) ?? "other";
}

/**
 * Analyze service distribution from appointments
 */
function analyzeServiceDistribution(appointments) {
  const counts = new Map(SERVICE_CATEGORIES.map((cat) => [cat, 0]));

  for (const appointment of appointments) {
    const services = parseServices(appointment.service);
    const categories = new Set(services.map((s) => normalizeServiceCategory(s)));

    if (categories.size === 0) categories.add("other");

    for (const category of categories) {
      counts.set(category, (counts.get(category) ?? 0) + 1);
    }
  }

  const sorted = SERVICE_CATEGORIES
    .map((cat, idx) => ({
      key: cat,
      count: counts.get(cat) ?? 0,
      index: idx,
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => (a.count !== b.count ? b.count - a.count : a.index - b.index));

  if (!sorted.length) {
    return {
      labels: ["No data"],
      values: [1],
      legend: [{ key: "other", label: SERVICE_LABELS.other, percentage: 0 }],
    };
  }

  const total = sorted.reduce((sum, item) => sum + item.count, 0);

  return {
    labels: sorted.map(({ key }) => SERVICE_LABELS[key] ?? key),
    values: sorted.map(({ count }) => count),
    legend: sorted.map(({ key, count }) => ({
      key,
      label: SERVICE_LABELS[key] ?? key,
      percentage: Math.round((count / total) * 100),
    })),
  };
}

/**
 * Render legend HTML for service chart
 */
function renderLegendHTML(analysis) {
  return analysis.legend
    .map(
      (item) => `
      <li>
        <span class="legend-dot legend-dot-${item.key}"></span>
        <span>${item.label}</span>
        <span class="legend-value">${item.percentage}%</span>
      </li>
    `
    )
    .join("");
}

// ============================================================================
// Page Initialization
// ============================================================================

/**
 * Initialize and render analytics page
 */
async function initializeAnalyticsPage(containerElement) {
  if (!containerElement) return;

  // Get current user and validate access
  const user = await ensureAuthenticated();
  if (!user) return;

  if (!user.isAdmin && !user.activeGarage) {
    containerElement.innerHTML = `
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;
    return;
  }

  // Prepare garage filtering context
  const garageIds = user.isAdmin ? null : [user.activeGarage?.id].filter(Boolean);

  // Create page shell
  const { shell, contentArea, setUnreadEmailCount } = createAppShell({
    activePage: "analytics",
    title: "Analytics",
    headerNote: "Visitor and booking insights",
    userEmail: user.user.email,
    onLogout: logoutAndRedirect,
    garage: user.activeGarage,
    isAdmin: user.isAdmin,
  });

  containerElement.replaceChildren(shell);

  // Get current language for translations
  // Render initial HTML
  contentArea.innerHTML = `
    <section class="metrics-grid">
      <article class="metric-card">
        <div class="live-visitors-title">
           <p>Live bezoekers</p>
          <span class="live-visitors-dot" aria-hidden="true"></span>
        </div>
        <h2 id="metricLiveVisitors">0</h2>
        <span class="metric-note">Nu online</span>
      </article>
      <article class="metric-card">
       <div>
           <p>Unieke bezoekers</p>
          <img src="${assetUrl("sidebar-icons/userpurple.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricTodayVisitors">0</h2>
        <span class="metric-note">Vandaag</span>
      </article>
      <article class="metric-card">
         <div>
           <p>Totaal bezoekers</p>
          <img src="${assetUrl("sidebar-icons/user.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricTotalVisitors">0</h2>
        <span class="metric-note">Alle tijd</span>
      </article>
      <article class="metric-card">
         <div>
           <p>Voltooide afspraken</p>
          <img src="${assetUrl("sidebar-icons/succes.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricCompletedAppointments">0</h2>
        <span class="metric-note">Totaal afgerond</span>
      </article>
    </section>

    <section class="panel dashboard-overview-panel analytics-overview-panel">
      <div class="panel-heading spread">
        <h3>Service Verdeling</h3>
      </div>

      <div class="dashboard-overview-body">
        <ul id="analyticsOverviewLegend" class="overview-legend"></ul>
        <div class="overview-chart-wrap">
          <canvas id="analyticsOverviewChart" aria-label="Appointment distribution chart"></canvas>
        </div>
      </div>
    </section>
  `;

  // Get DOM elements
  const liveVisitorsEl = contentArea.querySelector("#metricLiveVisitors");
  const todayVisitorsEl = contentArea.querySelector("#metricTodayVisitors");
  const totalVisitorsEl = contentArea.querySelector("#metricTotalVisitors");
  const completedAppointmentsEl = contentArea.querySelector("#metricCompletedAppointments");
  const legendEl = contentArea.querySelector("#analyticsOverviewLegend");
  const chartEl = contentArea.querySelector("#analyticsOverviewChart");

  // Load data and populate page
  try {
    // Fetch all required data in parallel
    const results = await Promise.all([
      getBookings({ garageIds }),
      fetchGarageAnalytics({
        garage: user.activeGarage,
        garages: user.garages,
        isAdmin: user.isAdmin,
      }),
    ]);

    // Extract data from response objects
    const bookings = (results[0]?.data ?? []) || [];
    const analytics = results[1] ?? {};

    // Update email badge
    const emailSummary = await summarizeEmailInbox(bookings);
    setUnreadEmailCount(emailSummary?.unread ?? 0);

    // Process analytics data
    const visitorCounts = (analytics.visitors ?? []).map((v) => Number(v.activeUsers ?? 0));
    const visitorsToday = Number(analytics.summary?.visitorsToday ?? 0);
    const totalVisitors = Number(
      analytics.summary?.totalVisitors ?? visitorCounts.reduce((sum, v) => sum + v, 0)
    );
    const liveVisitors = Number(visitorCounts.at(-1) ?? visitorsToday ?? 0);

    // Process appointments
    const completedBookings = (Array.isArray(bookings) ? bookings : []).filter(isCompleted);
     const totalAppointments = completedBookings.length;

     // Use completed bookings for chart analysis
     const allAppointments = completedBookings;

    // Update metric displays
    liveVisitorsEl.textContent = String(liveVisitors);
    todayVisitorsEl.textContent = String(visitorsToday);
    totalVisitorsEl.textContent = String(totalVisitors);
    completedAppointmentsEl.textContent = String(totalAppointments);

    // Render service distribution chart
    const analysis = analyzeServiceDistribution(allAppointments);
    legendEl.innerHTML = renderLegendHTML(analysis);
    renderChart(chartEl, analysis.labels, analysis.values);
  } catch (error) {
    legendEl.innerHTML = '<li><span class="muted">Unable to load analytics data.</span></li>';
    setUnreadEmailCount(0);
    console.error(error);
  }
}

// ============================================================================
// Page Entry Point
// ============================================================================

const appContainer = document.querySelector("#app");
initializeTheme();
initializeAnalyticsPage(appContainer);

