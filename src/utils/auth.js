import {
  getSession,
  isSupabaseConfigured,
  signOut,
} from "../services/supabaseClient.js";
import {
  resolveGarageContextForUser,
} from "../services/garageService.js";
import { pageUrl } from "./paths.js";

const AUTH_CONTEXT_CACHE_KEY = "garage-dashboard.auth-context";
const AUTH_CONTEXT_CACHE_TTL_MS = 5 * 60 * 1000;

function readCachedAuthContext() {
  try {
    const raw = window.sessionStorage.getItem(AUTH_CONTEXT_CACHE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    const expiresAt = Number(parsed.expiresAt ?? 0);
    if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function writeCachedAuthContext(user, garageContext) {
  try {
    const payload = {
      userId: user.id,
      email: String(user.email ?? ""),
      isAdmin: garageContext.isAdmin,
      garages: garageContext.garages ?? [],
      activeGarage: garageContext.activeGarage ?? null,
      expiresAt: Date.now() + AUTH_CONTEXT_CACHE_TTL_MS,
    };
    window.sessionStorage.setItem(AUTH_CONTEXT_CACHE_KEY, JSON.stringify(payload));
  } catch {
    // Ignore cache write issues (private mode / quota) and continue normally.
  }
}

function clearCachedAuthContext() {
  try {
    window.sessionStorage.removeItem(AUTH_CONTEXT_CACHE_KEY);
  } catch {
    // Ignore cache clear issues.
  }
}

export async function ensureAuthenticated() {
  if (!isSupabaseConfigured()) {
    window.location.href = pageUrl("index.html");
    return null;
  }

  const session = await getSession();
  if (!session) {
    window.location.href = pageUrl("index.html");
    return null;
  }

  const cached = readCachedAuthContext();
  if (cached && cached.userId === session.user.id && String(session.user.email ?? "") === cached.email) {
    return {
      user: session.user,
      garages: Array.isArray(cached.garages) ? cached.garages : [],
      activeGarage: cached.activeGarage ?? null,
      isAdmin: Boolean(cached.isAdmin),
      isDemo: false,
    };
  }

  const garageContext = await resolveGarageContextForUser(session.user);
  writeCachedAuthContext(session.user, garageContext);

  return {
    user: session.user,
    ...garageContext,
    isDemo: false,
  };
}

export async function logoutAndRedirect() {
  try {
    await signOut();
  } finally {
    clearCachedAuthContext();
    window.location.href = pageUrl("index.html");
  }
}
