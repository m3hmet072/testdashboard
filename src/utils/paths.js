const BASE_URL = import.meta.env.BASE_URL || "/";

function normalizeBaseUrl() {
  return BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`;
}

export function baseAwareUrl(path = "") {
  const normalizedBase = normalizeBaseUrl();
  const normalizedPath = String(path ?? "").replace(/^\/+/, "");
  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}

export function pageUrl(path) {
  return baseAwareUrl(path);
}

export function assetUrl(path) {
  return baseAwareUrl(path);
}
