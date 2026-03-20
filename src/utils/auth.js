import {
  getSession,
  isSupabaseConfigured,
  signOut,
} from "../services/supabaseClient.js";
import {
  resolveGarageContextForUser,
} from "../services/garageService.js";

export async function ensureAuthenticated() {
  if (!isSupabaseConfigured()) {
    window.location.href = "/index.html";
    return null;
  }

  const session = await getSession();
  if (!session) {
    window.location.href = "/index.html";
    return null;
  }

  const garageContext = await resolveGarageContextForUser(session.user);

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
    window.location.href = "/index.html";
  }
}
