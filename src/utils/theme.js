const THEME_STORAGE_KEY = "garage-dashboard-theme";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";

function normalizeTheme(value) {
  if (value === DARK_THEME) {
    return DARK_THEME;
  }

  return LIGHT_THEME;
}

function readStoredTheme() {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStoredTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage failures (private mode / blocked storage).
  }
}

function getFallbackTheme() {
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return DARK_THEME;
  }

  return LIGHT_THEME;
}

function syncThemeToggles(theme) {
  const toggles = document.querySelectorAll("[data-theme-toggle]");
  const isDark = theme === DARK_THEME;

  toggles.forEach((toggle) => {
    if (toggle instanceof HTMLInputElement && toggle.type === "checkbox") {
      toggle.checked = isDark;
      toggle.setAttribute("aria-checked", isDark ? "true" : "false");
    }
  });
}

export function getActiveTheme() {
  const current = document.documentElement.dataset.theme;
  return normalizeTheme(current || LIGHT_THEME);
}

export function applyTheme(theme) {
  const normalized = normalizeTheme(theme);
  document.documentElement.dataset.theme = normalized;
  document.body?.setAttribute("data-theme", normalized);
  syncThemeToggles(normalized);
  return normalized;
}

export function initializeTheme() {
  const storedTheme = readStoredTheme();
  const initialTheme = storedTheme ? normalizeTheme(storedTheme) : getFallbackTheme();
  return applyTheme(initialTheme);
}

export function setTheme(theme) {
  const normalized = applyTheme(theme);
  writeStoredTheme(normalized);
  return normalized;
}

export function toggleTheme() {
  const nextTheme = getActiveTheme() === DARK_THEME ? LIGHT_THEME : DARK_THEME;
  return setTheme(nextTheme);
}
