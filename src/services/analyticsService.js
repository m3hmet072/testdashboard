function toNumber(value) {
  const numeric = Number(value ?? 0);
  return Number.isFinite(numeric) ? numeric : 0;
}

function buildSummary(visitors) {
  const todayKey = new Date().toISOString().slice(0, 10);
  const monthPrefix = todayKey.slice(0, 7);

  let totalVisitors = 0;
  let visitorsToday = 0;
  let visitorsThisMonth = 0;
  let pageviews = 0;
  let conversions = 0;
  let peakVisitors = 0;

  for (const item of visitors) {
    const activeUsers = toNumber(item.activeUsers);
    const rowPageviews = toNumber(item.pageviews);
    const rowConversions = toNumber(item.conversions);

    totalVisitors += activeUsers;
    pageviews += rowPageviews;
    conversions += rowConversions;
    peakVisitors = Math.max(peakVisitors, activeUsers);

    if (item.date === todayKey) {
      visitorsToday += activeUsers;
    }

    if (String(item.date ?? "").startsWith(monthPrefix)) {
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

function summarizeVisitors(visitors) {
  return buildSummary(visitors);
}

function normalizeVisitors(visitors) {
  return visitors.map((item) => ({
    date: String(item.date ?? ""),
    activeUsers: toNumber(item.activeUsers),
    pageviews: toNumber(item.pageviews),
    conversions: toNumber(item.conversions),
  }));
}

async function fetchAnalyticsForProperty({ propertyId, startDate, endDate }) {
  const params = new URLSearchParams({
    startDate,
    endDate,
    propertyId,
  });

  const response = await fetch(`/api/googleAnalytics?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Analytics request failed (${response.status})`);
  }

  const payload = await response.json();
  const visitors = normalizeVisitors(
    Array.isArray(payload.visitors) ? payload.visitors : [],
  );

  return {
    source: payload.source ?? "ga",
    propertyId,
    visitors,
    summary: payload.summary ?? summarizeVisitors(visitors),
    warning: payload.warning ?? null,
  };
}

function mergeSeriesByDate(analyticsEntries) {
  const dateMap = new Map();

  for (const entry of analyticsEntries) {
    for (const row of entry.visitors) {
      const current = dateMap.get(row.date) ?? {
        date: row.date,
        activeUsers: 0,
        pageviews: 0,
        conversions: 0,
      };

      current.activeUsers += toNumber(row.activeUsers);
      current.pageviews += toNumber(row.pageviews);
      current.conversions += toNumber(row.conversions);

      dateMap.set(row.date, current);
    }
  }

  return Array.from(dateMap.values()).sort((left, right) =>
    left.date.localeCompare(right.date),
  );
}

function mergeSummary(visitors) {
  return summarizeVisitors(visitors);
}

export async function fetchVisitorAnalytics({
  garage = null,
  garages = [],
  isAdmin = false,
  startDate = "30daysAgo",
  endDate = "today",
} = {}) {
  const targetGarages = isAdmin
    ? garages.filter((item) => item?.analyticsPropertyId)
    : [garage].filter((item) => item?.analyticsPropertyId);

  if (!targetGarages.length) {
    const visitors = [];
    return {
      source: "ga",
      visitors,
      summary: summarizeVisitors(visitors),
      warning:
        "No analytics_property_id set for this garage. Configure it in the garages table.",
    };
  }

  const settledResults = await Promise.allSettled(
    targetGarages.map((item) =>
      fetchAnalyticsForProperty({
        propertyId: item.analyticsPropertyId,
        startDate,
        endDate,
      }),
    ),
  );

  const successful = settledResults
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  const failed = settledResults.filter((result) => result.status === "rejected");

  if (!successful.length) {
    const visitors = [];
    return {
      source: "ga",
      visitors,
      summary: summarizeVisitors(visitors),
      warning:
        failed[0]?.reason instanceof Error
          ? failed[0].reason.message
          : "Unable to load Google Analytics data.",
    };
  }

  const visitors = mergeSeriesByDate(successful);
  const summary = mergeSummary(visitors);

  const warning = failed.length
    ? `Some properties failed to load (${failed.length}/${targetGarages.length}).`
    : successful.find((entry) => entry.warning)?.warning ?? null;

  return {
    source: successful.length > 1 ? "ga-multi" : successful[0].source,
    visitors,
    summary,
    warning,
  };
}
