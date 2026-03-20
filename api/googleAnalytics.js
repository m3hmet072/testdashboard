import { google } from "googleapis";

const ANALYTICS_SCOPE = "https://www.googleapis.com/auth/analytics.readonly";
const GA_METRICS = ["activeUsers", "screenPageViews", "conversions"];

function sendJson(response, status, payload) {
  if (typeof response.status === "function") {
    response.status(status).json(payload);
    return;
  }

  response.statusCode = status;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(payload));
}

function parseServiceAccount() {
  const raw = process.env.GA_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function parseDateRange(request) {
  const url = new URL(request.url ?? "/", "http://localhost");

  return {
    startDate: request.query?.startDate ?? url.searchParams.get("startDate") ?? "30daysAgo",
    endDate: request.query?.endDate ?? url.searchParams.get("endDate") ?? "today",
    // Frontend sends garages.analytics_property_id per logged-in tenant.
    propertyId:
      request.query?.propertyId ??
      url.searchParams.get("propertyId") ??
      process.env.GA_PROPERTY_ID ??
      "",
  };
}

function summarizeVisitors(visitors) {
  const todayKey = new Date().toISOString().slice(0, 10);
  const monthPrefix = todayKey.slice(0, 7);

  let totalVisitors = 0;
  let peakVisitors = 0;
  let visitorsToday = 0;
  let visitorsThisMonth = 0;
  let pageviews = 0;
  let conversions = 0;

  for (const visitor of visitors) {
    const activeUsers = Number(visitor.activeUsers ?? 0);
    const rowPageviews = Number(visitor.pageviews ?? 0);
    const rowConversions = Number(visitor.conversions ?? 0);

    totalVisitors += activeUsers;
    pageviews += rowPageviews;
    conversions += rowConversions;
    peakVisitors = Math.max(peakVisitors, activeUsers);

    if (visitor.date === todayKey) {
      visitorsToday += activeUsers;
    }

    if (String(visitor.date ?? "").startsWith(monthPrefix)) {
      visitorsThisMonth += activeUsers;
    }
  }

  return {
    totalVisitors,
    peakVisitors,
    averageVisitors: visitors.length ? Math.round(totalVisitors / visitors.length) : 0,
    visitorsToday,
    visitorsThisMonth,
    pageviews,
    conversions,
    conversionRate: pageviews ? Number(((conversions / pageviews) * 100).toFixed(2)) : 0,
  };
}

function buildMockVisitors(dayCount = 30) {
  const visitors = [];
  const now = new Date();

  for (let index = dayCount - 1; index >= 0; index -= 1) {
    const date = new Date(now);
    date.setDate(now.getDate() - index);

    const baseline = 95;
    const wave = Math.round(Math.sin(index / 3) * 22);
    const drift = (index * 11) % 19;

    visitors.push({
      date: date.toISOString().slice(0, 10),
      activeUsers: baseline + wave + drift,
      pageviews: baseline * 2 + wave + drift,
      conversions: Math.max(Math.round((baseline + wave) * 0.08), 0),
    });
  }

  return visitors;
}

function normalizeDateDimension(value) {
  if (value.length === 8) {
    return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
  }

  return value;
}

function firstDayOfMonthUtc() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}-01`;
}

function parseMetricRow(row) {
  return {
    activeUsers: Number(row?.metricValues?.[0]?.value ?? 0),
    pageviews: Number(row?.metricValues?.[1]?.value ?? 0),
    conversions: Number(row?.metricValues?.[2]?.value ?? 0),
  };
}

export default async function handler(request, response) {
  if (request.method && request.method !== "GET") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  const { startDate, endDate, propertyId } = parseDateRange(request);
  const serviceAccount = parseServiceAccount();

  if (!propertyId || !serviceAccount) {
    const visitors = buildMockVisitors();
    sendJson(response, 200, {
      source: "mock",
      visitors,
      summary: summarizeVisitors(visitors),
      warning: "Missing GA credentials. Returning mock analytics data.",
    });
    return;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: [ANALYTICS_SCOPE],
    });

    const analyticsData = google.analyticsdata({
      version: "v1beta",
      auth,
    });

    const [seriesReport, todayReport, monthReport] = await Promise.all([
      analyticsData.properties.runReport({
        property: `properties/${propertyId}`,
        requestBody: {
          dateRanges: [{ startDate, endDate }],
          dimensions: [{ name: "date" }],
          metrics: GA_METRICS.map((name) => ({ name })),
          orderBys: [{ dimension: { dimensionName: "date" } }],
        },
      }),
      analyticsData.properties.runReport({
        property: `properties/${propertyId}`,
        requestBody: {
          dateRanges: [{ startDate: "today", endDate: "today" }],
          metrics: GA_METRICS.map((name) => ({ name })),
        },
      }),
      analyticsData.properties.runReport({
        property: `properties/${propertyId}`,
        requestBody: {
          dateRanges: [{ startDate: firstDayOfMonthUtc(), endDate: "today" }],
          metrics: GA_METRICS.map((name) => ({ name })),
        },
      }),
    ]);

    const visitors = (seriesReport.data.rows ?? []).map((row) => {
      const metrics = parseMetricRow(row);

      return {
        date: normalizeDateDimension(row.dimensionValues?.[0]?.value ?? ""),
        activeUsers: metrics.activeUsers,
        pageviews: metrics.pageviews,
        conversions: metrics.conversions,
      };
    });

    const todayTotals = parseMetricRow(todayReport.data.rows?.[0]);
    const monthTotals = parseMetricRow(monthReport.data.rows?.[0]);
    const summary = summarizeVisitors(visitors);

    summary.visitorsToday = todayTotals.activeUsers;
    summary.visitorsThisMonth = monthTotals.activeUsers;
    summary.pageviews = monthTotals.pageviews;
    summary.conversions = monthTotals.conversions;
    summary.conversionRate = monthTotals.pageviews
      ? Number(((monthTotals.conversions / monthTotals.pageviews) * 100).toFixed(2))
      : 0;

    sendJson(response, 200, {
      source: "ga",
      propertyId,
      visitors,
      summary,
    });
  } catch (error) {
    const visitors = buildMockVisitors();

    sendJson(response, 200, {
      source: "mock",
      visitors,
      summary: summarizeVisitors(visitors),
      warning: "Google Analytics request failed. Returning mock analytics data.",
      error: error instanceof Error ? error.message : "Unknown GA error",
    });
  }
}
