import { ensureAuthenticated } from "../utils/auth.js";

const WERKBON_PAGES = [
  {
    key: "artikelen",
    label: "Artikelen",
    description: "Beheer artikelcodes, prijzen en BTW-waarden.",
    href: "./werkbon-artikelen.html",
    icon: "boxes",
  },
  {
    key: "facturen",
    label: "Facturen",
    description: "Open, converteer en werk facturen bij.",
    href: "./werkbon-facturen.html",
    icon: "invoice",
  },
  {
    key: "omzet",
    label: "Omzet- en BTW overzicht",
    description: "Bekijk omzet, BTW en periode-overzichten.",
    href: "./werkbon-omzet-btw.html",
    icon: "chart",
  },
  {
    key: "instellingen",
    label: "Instellingen",
    description: "Configureer factuur- en bedrijfsinstellingen.",
    href: "./werkbon-instellingen.html",
    icon: "settings",
  },
];

function iconMarkup(icon) {
  if (icon === "invoice") {
    return `
      <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path d="M6 2.5H11L14.5 6V16.5L12.8 15.5L11 16.5L9.2 15.5L7.4 16.5L6 15.5V2.5Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
        <path d="M11 2.5V6H14.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
        <path d="M7.6 8.6H12.7M7.6 10.8H12.7M7.6 13H11.1" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      </svg>
    `;
  }

  if (icon === "chart") {
    return `
      <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path d="M3 16.5H17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <rect x="4.2" y="10.4" width="2.5" height="5.6" rx="0.8" />
        <rect x="8.7" y="7.5" width="2.5" height="8.5" rx="0.8" />
        <rect x="13.2" y="5.8" width="2.5" height="10.2" rx="0.8" />
      </svg>
    `;
  }

  if (icon === "settings") {
    return `
      <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <circle cx="10" cy="10" r="2.3" fill="none" stroke="currentColor" stroke-width="1.5" />
        <path d="M16.2 10.9V9.1L14.9 8.8C14.8 8.4 14.7 8.1 14.5 7.8L15.3 6.7L14 5.4L12.9 6.2C12.6 6 12.3 5.9 11.9 5.8L11.6 4.5H9.8L9.5 5.8C9.1 5.9 8.8 6 8.5 6.2L7.4 5.4L6.1 6.7L6.9 7.8C6.7 8.1 6.6 8.4 6.5 8.8L5.2 9.1V10.9L6.5 11.2C6.6 11.6 6.7 11.9 6.9 12.2L6.1 13.3L7.4 14.6L8.5 13.8C8.8 14 9.1 14.1 9.5 14.2L9.8 15.5H11.6L11.9 14.2C12.3 14.1 12.6 14 12.9 13.8L14 14.6L15.3 13.3L14.5 12.2C14.7 11.9 14.8 11.6 14.9 11.2L16.2 10.9Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" />
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <rect x="3" y="4" width="6" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1.4" />
      <rect x="11" y="4" width="6" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1.4" />
      <rect x="3" y="11" width="6" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1.4" />
      <rect x="11" y="11" width="6" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1.4" />
    </svg>
  `;
}

export async function mountWerkbonPage(rootElement) {
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

  rootElement.innerHTML = `
    <main class="werkbon-standalone page-animate" role="main">
      <section class="werkbon-page-shell werkbon-choice-shell werkbon-standalone-shell">
        <div class="werkbon-back-row">
          <a class="button subtle" href="./dashboard.html">← Terug naar Dashboard</a>
        </div>

        <header class="werkbon-section-header panel werkbon-choice-hero">
          <h1 class="werkbon-title">Kies een onderdeel</h1>
          <p class="muted">Open direct de module die je nodig hebt.</p>
        </header>

        <section class="panel werkbon-menu-list werkbon-choice-list">
          ${WERKBON_PAGES.map((item) => `
            <a class="werkbon-menu-item" href="${item.href}">
              <span class="werkbon-menu-item-icon">${iconMarkup(item.icon)}</span>
              <span class="werkbon-menu-item-copy">
                <strong>${item.label}</strong>
              </span>
              <span class="werkbon-menu-item-arrow" aria-hidden="true">→</span>
            </a>
          `).join("")}
        </section>
      </section>
    </main>
  `;
}

const app = document.querySelector("#app");
mountWerkbonPage(app);
