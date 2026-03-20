import { createAppShell } from "../components/appShell.js";
import { createDoughnutChart } from "../components/chart.js";
import { getBookings } from "../services/bookingService.js";
import { summarizeEmailInbox } from "../services/emailService.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";

const SERVICE_LABEL_BY_KEY = {
  apk: "APK",
  banden: "Banden",
  onderhoud: "Onderhoud",
  airco: "Airco",
  occasions: "Occasions",
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
]);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parseDate(value) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatTime(value) {
  const date = parseDate(value);
  if (!date) {
    return "--:--";
  }

  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

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

function toDateKey(value) {
  const date = value instanceof Date ? value : parseDate(value);
  if (!date) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function splitServiceValues(service) {
  const raw = String(service ?? "").trim();
  if (!raw) {
    return ["other"];
  }

  const parts = raw
    .split(raw.includes(",") ? /,/g : /\+|\/|&| and /gi)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);

  return parts.length ? parts : [raw];
}

function normalizeServiceKey(token) {
  return SERVICE_KEY_ALIASES.get(String(token ?? "").trim().toLowerCase()) ?? "other";
}

function serviceChipsMarkup(service) {
  return splitServiceValues(service)
    .map((item) => {
      const key = normalizeServiceKey(item);
      const label = SERVICE_LABEL_BY_KEY[key] ?? SERVICE_LABEL_BY_KEY.other;
      return `<span class="service-chip service-chip-${key}">${escapeHtml(label)}</span>`;
    })
    .join("");
}

function getStatusMeta(statusValue) {
  const status = normalizeStatus(statusValue);

  if (status === "done") {
    return {
      label: "Completed",
      className: "status-chip-completed",
    };
  }

  if (status === "confirmed") {
    return {
      label: "Confirmed",
      className: "status-chip-confirmed",
    };
  }

  return {
    label: "In Progress",
    className: "status-chip-progress",
  };
}

function scheduleRowsMarkup(bookings) {
  if (!bookings.length) {
    return '<article class="schedule-row"><p class="muted">No appointments scheduled for today.</p></article>';
  }

  return bookings
    .slice(0, 4)
    .map((booking) => {
      const plate = escapeHtml(String(booking.licensePlate ?? "UNKNOWN").toUpperCase());
      const time = escapeHtml(formatTime(booking.appointmentAt ?? booking.createdAt));
      const statusMeta = getStatusMeta(booking.status);

      return `
        <article class="schedule-row">
          <div class="schedule-row-main">
            <span class="schedule-time">${time}</span>
            <span class="plate-chip">${plate}</span>
            <div class="request-services">${serviceChipsMarkup(booking.service)}</div>
          </div>
          <span class="status-chip ${statusMeta.className}">${statusMeta.label}</span>
        </article>
      `;
    })
    .join("");
}

function buildServiceDistribution(bookings) {
  const counts = new Map();

  for (const booking of bookings) {
    const firstToken = splitServiceValues(booking.service)[0] ?? "other";
    const key = normalizeServiceKey(firstToken);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  const entries = [...counts.entries()]
    .sort((left, right) => right[1] - left[1])
    .slice(0, 6);

  if (!entries.length) {
    return {
      labels: ["No data"],
      values: [1],
      legend: [{ key: "other", label: "No data", percentage: 0 }],
    };
  }

  const total = entries.reduce((sum, [, count]) => sum + count, 0);

  return {
    labels: entries.map(([key]) => SERVICE_LABEL_BY_KEY[key] ?? SERVICE_LABEL_BY_KEY.other),
    values: entries.map(([, count]) => count),
    legend: entries.map(([key, count]) => ({
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
        <span>${escapeHtml(item.label)}</span>
        <span class="legend-value">${item.percentage}%</span>
      </li>
    `,
    )
    .join("");
}

export async function mountDashboardPage(rootElement) {
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
    activePage: "dashboard",
    title: "Dashboard",
    headerNote: "Monitor garage operations at a glance",
    userEmail: authState.user.email,
    onLogout: logoutAndRedirect,
    garage: authState.activeGarage,
    isAdmin: authState.isAdmin,
  });

  rootElement.replaceChildren(shell);

  contentArea.innerHTML = `
    <section class="metrics-grid">
      <article class="metric-card"><p>Total Appointments</p><h2 id="metricTotal">0</h2></article>
      <article class="metric-card"><p>Today’s Schedule</p><h2 id="metricToday">0</h2></article>
      <article class="metric-card"><p>Completed</p><h2 id="metricCompleted">0</h2></article>
      <article class="metric-card"><p>Pending Emails</p><h2 id="metricEmails">0</h2></article>
    </section>

    <section class="dashboard-main-grid">
      <section class="panel dashboard-schedule-panel">
        <div class="panel-heading spread">
          <h3>Today’s Schedule</h3>
          <a class="panel-link" href="/bookings.html">View All →</a>
        </div>
        <div id="dashboardScheduleList" class="dashboard-schedule-list"></div>
      </section>

      <section class="panel dashboard-overview-panel">
        <div class="panel-heading spread">
          <h3>Appointment Overview</h3>
          <a class="panel-link" href="/analytics.html">View All →</a>
        </div>

        <div class="dashboard-overview-body">
          <ul id="dashboardOverviewLegend" class="overview-legend"></ul>
          <div class="overview-chart-wrap">
            <canvas id="dashboardOverviewChart" aria-label="Appointment overview chart"></canvas>
          </div>
        </div>
      </section>
    </section>
  `;

  const totalElement = contentArea.querySelector("#metricTotal");
  const todayElement = contentArea.querySelector("#metricToday");
  const completedElement = contentArea.querySelector("#metricCompleted");
  const pendingEmailsElement = contentArea.querySelector("#metricEmails");
  const scheduleListElement = contentArea.querySelector("#dashboardScheduleList");
  const legendElement = contentArea.querySelector("#dashboardOverviewLegend");
  const chartCanvas = contentArea.querySelector("#dashboardOverviewChart");

  try {
    const bookings = await getBookings({ garageIds });
    const emailSummary = summarizeEmailInbox(bookings);

    const activeBookings = bookings.filter((booking) => booking.inAppointments === true);
    const completedBookings = bookings.filter((booking) => normalizeStatus(booking.status) === "done");

    const todayKey = toDateKey(new Date());
    const todayBookings = activeBookings
      .filter((booking) => toDateKey(booking.appointmentAt ?? booking.createdAt) === todayKey)
      .sort(
        (left, right) =>
          new Date(left.appointmentAt ?? left.createdAt).getTime() -
          new Date(right.appointmentAt ?? right.createdAt).getTime(),
      );

    totalElement.textContent = String(activeBookings.length);
    todayElement.textContent = String(todayBookings.length);
    completedElement.textContent = String(completedBookings.length);
    pendingEmailsElement.textContent = String(emailSummary.unread);
    scheduleListElement.innerHTML = scheduleRowsMarkup(todayBookings);

    const distribution = buildServiceDistribution(activeBookings);
    legendElement.innerHTML = legendMarkup(distribution);
    createDoughnutChart(chartCanvas, distribution.labels, distribution.values);

    setUnreadEmailCount(emailSummary.unread);
  } catch (error) {
    scheduleListElement.innerHTML = '<article class="schedule-row"><p class="muted">Unable to load dashboard data.</p></article>';
    legendElement.innerHTML = '<li><span class="muted">Unable to load overview.</span></li>';
    setUnreadEmailCount(0);
    console.error(error);
  }
}
