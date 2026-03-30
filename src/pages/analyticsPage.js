import { createAppShell } from "../components/appShell.js";
import { createDoughnutChart } from "../components/chart.js";
import { fetchVisitorAnalytics } from "../services/analyticsService.js";
import { getBookings } from "../services/bookingService.js";
import { summarizeEmailInbox } from "../services/emailService.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";
import { assetUrl } from "../utils/paths.js";

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

const SERVICE_DISTRIBUTION_ORDER = ["apk", "banden", "onderhoud", "airco", "occasions", "brakes", "other"];

function normalizeStatus(value) {
  const normalized = String(value ?? "").trim().toLowerCase();

  if (
    normalized === "done" ||
    normalized === "completed" ||
    normalized === "complete" ||
    normalized === "closed"
  ) {
    return "done";
  }

  if (normalized === "confirmed" || normalized === "confirm") {
    return "confirmed";
  }

  return "new";
}

function isCompletedBooking(booking) {
  return normalizeStatus(booking.status) === "done" || booking.inAppointments === false;
}

function splitServiceValues(service) {
  const raw = String(service ?? "").trim();
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
  return SERVICE_KEY_ALIASES.get(String(token ?? "").trim().toLowerCase()) ?? "other";
}

function buildServiceDistribution(bookings) {
  const counts = new Map(SERVICE_DISTRIBUTION_ORDER.map((key) => [key, 0]));

  for (const booking of bookings) {
    const serviceKeys = new Set(splitServiceValues(booking.service).map((token) => normalizeServiceKey(token)));

    if (!serviceKeys.size) {
      serviceKeys.add("other");
    }

    for (const key of serviceKeys) {
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }

  const entries = SERVICE_DISTRIBUTION_ORDER
    .map((key, index) => ({ key, count: counts.get(key) ?? 0, index }))
    .filter((entry) => entry.count > 0)
    .sort((left, right) => {
      if (right.count !== left.count) {
        return right.count - left.count;
      }

      return left.index - right.index;
    });

  if (!entries.length) {
    return {
      labels: ["No data"],
      values: [1],
      legend: [{ key: "other", label: "No data", percentage: 0 }],
    };
  }

  const total = entries.reduce((sum, entry) => sum + entry.count, 0);

  return {
    labels: entries.map(({ key }) => SERVICE_LABEL_BY_KEY[key] ?? SERVICE_LABEL_BY_KEY.other),
    values: entries.map(({ count }) => count),
    legend: entries.map(({ key, count }) => ({
      key,
      label: SERVICE_LABEL_BY_KEY[key] ?? SERVICE_LABEL_BY_KEY.other,
      percentage: Math.round((count / total) * 100),
    })),
  };
}

function legendMarkup(distribution) {
  return distribution.legend
    .map(
      (item) => `
      <li>
        <span class="legend-dot legend-dot-${item.key}"></span>
        <span>${item.label}</span>
        <span class="legend-value">${item.percentage}%</span>
      </li>
    `,
    )
    .join("");
}

export async function mountAnalyticsPage(rootElement) {
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
    activePage: "analytics",
    title: "Analytics",
    headerNote: "Visitor and booking insights",
    userEmail: authState.user.email,
    onLogout: logoutAndRedirect,
    garage: authState.activeGarage,
    isAdmin: authState.isAdmin,
  });

  rootElement.replaceChildren(shell);

  contentArea.innerHTML = `
    <section class="metrics-grid">
      <article class="metric-card">
        <div class="live-visitors-title">
          <p>Live visitors</p>
          <span class="live-visitors-dot" aria-hidden="true"></span>
        </div>
        <h2 id="metricLiveVisitors">0</h2>
        <span class="metric-note">Currently on website</span>
      </article>
      <article class="metric-card">
       <div>
          <p>Today's visitors</p>
          <img src="${assetUrl("sidebar-icons/userpurple.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricTodayVisitors">0</h2>
        <span class="metric-note">Unique visitors today</span>
      </article>
      <article class="metric-card">
         <div>
          <p>Total visitors</p>
          <img src="${assetUrl("sidebar-icons/user.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricTotalVisitors">0</h2>
        <span class="metric-note">All time visitors</span>
      </article>
      <article class="metric-card">
         <div>
          <p>Completed Appointments</p>
          <img src="${assetUrl("sidebar-icons/succes.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricCompletedAppointments">0</h2>
        <span class="metric-note">All completed jobs</span>
      </article>
    </section>

    <section class="panel dashboard-overview-panel analytics-overview-panel">
      <div class="panel-heading spread">
        <h3>Completed Overview</h3>
      </div>

      <div class="dashboard-overview-body">
        <ul id="analyticsOverviewLegend" class="overview-legend"></ul>
        <div class="overview-chart-wrap">
          <canvas id="analyticsOverviewChart" aria-label="Appointment distribution chart"></canvas>
        </div>
      </div>
    </section>
  `;

  const liveVisitorsElement = contentArea.querySelector("#metricLiveVisitors");
  const todayVisitorsElement = contentArea.querySelector("#metricTodayVisitors");
  const totalVisitorsElement = contentArea.querySelector("#metricTotalVisitors");
  const completedAppointmentsElement = contentArea.querySelector("#metricCompletedAppointments");
  const overviewLegendElement = contentArea.querySelector("#analyticsOverviewLegend");
  const overviewChartCanvas = contentArea.querySelector("#analyticsOverviewChart");

  try {
    const [bookings, analytics] = await Promise.all([
      getBookings({ garageIds }),
      fetchVisitorAnalytics({
        garage: authState.activeGarage,
        garages: authState.garages,
        isAdmin: authState.isAdmin,
      }),
    ]);

    const emailSummary = summarizeEmailInbox(bookings);
    setUnreadEmailCount(emailSummary.unread);

    const activeUsersSeries = analytics.visitors.map((item) => Number(item.activeUsers ?? 0));
    const visitorsToday = Number(analytics.summary.visitorsToday ?? 0);
    const totalVisitors = Number(
      analytics.summary.totalVisitors ?? activeUsersSeries.reduce((sum, value) => sum + value, 0),
    );
    const liveVisitors = Number(activeUsersSeries.at(-1) ?? visitorsToday ?? 0);

    const completedBookings = bookings.filter(isCompletedBooking);
    const completedAppointments = completedBookings.length;

    liveVisitorsElement.textContent = String(liveVisitors);
    todayVisitorsElement.textContent = String(visitorsToday);
    totalVisitorsElement.textContent = String(totalVisitors);
    completedAppointmentsElement.textContent = String(completedAppointments);

    const distribution = buildServiceDistribution(completedBookings);
    overviewLegendElement.innerHTML = legendMarkup(distribution);
    createDoughnutChart(overviewChartCanvas, distribution.labels, distribution.values);
  } catch (error) {
    overviewLegendElement.innerHTML = '<li><span class="muted">Unable to load analytics data.</span></li>';
    setUnreadEmailCount(0);
    console.error(error);
  }
}
