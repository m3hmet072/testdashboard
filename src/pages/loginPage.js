import {
  getSession,
  isSupabaseConfigured,
  signInWithPassword,
} from "../services/supabaseClient.js";
import { getActiveTheme, setTheme } from "../utils/theme.js";

function loginTemplate() {
  const isDark = getActiveTheme() === "dark";

  return `
    <section class="auth-card page-animate">
      <div class="auth-theme-row">
        <label class="theme-switcher" aria-label="Night mode">
          <span class="theme-switch-label">Night Mode</span>
          <span class="theme-switch-control">
            <input class="theme-switch-input" type="checkbox" data-theme-toggle role="switch" ${isDark ? "checked" : ""} />
            <span class="theme-switch-track" aria-hidden="true"></span>
          </span>
        </label>
      </div>

      <p class="kicker">Garage Dashboard</p>
      <h1>Welcome back</h1>
      <p class="muted">Sign in with your garage account to load only your own bookings and analytics.</p>

      <form id="loginForm" class="stacked-form">
        <label>
          Email
          <input type="email" name="email" placeholder="owner@garage.com" required />
        </label>

        <label>
          Password
          <input type="password" name="password" placeholder="Your password" required />
        </label>

        <button id="loginButton" class="button" type="submit">Sign in with Supabase</button>
      </form>

      <p id="authMessage" class="status-text" role="status" aria-live="polite"></p>

      <p id="configHint" class="config-hint hidden">
        Supabase credentials are missing. Add values in <code>.env</code> using <code>.env.example</code>.
      </p>
    </section>
  `;
}

export async function mountLoginPage(rootElement) {
  if (!rootElement) {
    return;
  }

  rootElement.innerHTML = loginTemplate();

  const form = rootElement.querySelector("#loginForm");
  const button = rootElement.querySelector("#loginButton");
  const authMessage = rootElement.querySelector("#authMessage");
  const configHint = rootElement.querySelector("#configHint");
  const themeToggle = rootElement.querySelector("[data-theme-toggle]");

  if (themeToggle instanceof HTMLInputElement) {
    themeToggle.checked = getActiveTheme() === "dark";
    themeToggle.addEventListener("change", () => {
      setTheme(themeToggle.checked ? "dark" : "light");
    });
  }

  const supabaseReady = isSupabaseConfigured();

  if (supabaseReady) {
    try {
      const session = await getSession();
      if (session) {
        window.location.href = "/dashboard.html";
        return;
      }
    } catch (error) {
      authMessage.textContent = "Could not check your current session.";
      authMessage.classList.add("error");
    }
  } else {
    button.disabled = true;
    configHint.classList.remove("hidden");
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!supabaseReady) {
      return;
    }

    authMessage.classList.remove("error");
    authMessage.textContent = "Signing in...";
    button.disabled = true;

    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    try {
      await signInWithPassword(email, password);
      window.location.href = "/dashboard.html";
    } catch (error) {
      authMessage.classList.add("error");
      authMessage.textContent =
        error instanceof Error ? error.message : "Unable to sign in.";
      button.disabled = false;
    }
  });
}
