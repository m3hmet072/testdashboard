function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function pageIconMarkup(activePage) {
  if (activePage === "bookings") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M7 3v3M17 3v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <rect x="4" y="5.5" width="16" height="14.5" rx="4" stroke="currentColor" stroke-width="1.6"/>
        <path d="M4 10h16" stroke="currentColor" stroke-width="1.6"/>
      </svg>
    `;
  }

  if (activePage === "calendar") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M16 3v3M8 3v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
        <rect x="4" y="5.5" width="16" height="14.5" rx="4" stroke="currentColor" stroke-width="1.7"/>
        <path d="M4 10h16" stroke="currentColor" stroke-width="1.7"/>
      </svg>
    `;
  }

  if (activePage === "add-appointment") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M12 6v12M6 12h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/>
      </svg>
    `;
  }

  if (activePage === "emails") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.6"/>
        <path d="M4.5 7.5l7.5 5.5 7.5-5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }

  if (activePage === "analytics") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M4 18h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <rect x="5" y="11" width="3.4" height="5.8" rx="1" fill="currentColor"/>
        <rect x="10.3" y="7.8" width="3.4" height="9" rx="1" fill="currentColor"/>
        <rect x="15.6" y="9.6" width="3.4" height="7.2" rx="1" fill="currentColor"/>
      </svg>
    `;
  }

  if (activePage === "completed") {
    return `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/>
        <path d="M8.5 12.2l2.2 2.2 4.8-4.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 12c0-4.3 3.7-8 8-8h8v8c0 4.3-3.7 8-8 8H4z" stroke="currentColor" stroke-width="1.6"/>
      <path d="M8 8h3M8 12h6M8 16h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>
  `;
}

function resolveDomain(garage) {
  const rawDomain = String(garage?.domain ?? "").trim();
  if (!rawDomain) {
    return {
      href: "https://autoservicehouse.nl",
      label: "autoservicehouse.nl",
    };
  }

  const href = /^https?:\/\//i.test(rawDomain) ? rawDomain : `https://${rawDomain}`;
  const label = rawDomain.replace(/^https?:\/\//i, "");

  return {
    href,
    label,
  };
}

export function createNavbar({ title, headerNote = "", garage, activePage = "dashboard" }) {
  const navbar = document.createElement("div");
  navbar.className = "topbar-stack";

  const domain = resolveDomain(garage);
  const safeTitle = escapeHtml(title);
  const safeHeaderNote = escapeHtml(headerNote);
  const safeDomainLabel = escapeHtml(domain.label);
  const safeDomainHref = escapeHtml(domain.href);

  navbar.innerHTML = `
    <header class="topbar">
      <div class="topbar-main-row">
        <label class="topbar-search" aria-label="Search">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <circle cx="9" cy="9" r="5.5" fill="none" stroke="currentColor" stroke-width="1.5"></circle>
            <path d="M13.2 13.2l3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
          <input type="search" placeholder="Search..." />
        </label>

        <a class="topbar-domain" href="${safeDomainHref}" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <rect x="2.8" y="4" width="14.4" height="12" rx="3" stroke="currentColor" stroke-width="1.4"></rect>
            <path d="M6.4 8.5h7.2M6.4 11.5h5.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path>
          </svg>
          <span>${safeDomainLabel}</span>
        </a>

        <a class="topbar-add-link ${activePage === "add-appointment" ? "is-current" : ""}" href="/add-appointment.html">
          <span class="topbar-add-link-icon" aria-hidden="true">+</span>
          <span>Add Appointment</span>
        </a>
      </div>
    </header>

    <div class="topbar-title-row">
      <div class="topbar-title-wrap">
        <span class="topbar-page-icon topbar-page-icon-${escapeHtml(activePage)}">
          ${pageIconMarkup(activePage)}
        </span>
        <h1 class="topbar-title">${safeTitle}</h1>
      </div>
      ${safeHeaderNote ? `<p class="topbar-note">${safeHeaderNote}</p>` : ""}
    </div>
  `;

  return navbar;
}
