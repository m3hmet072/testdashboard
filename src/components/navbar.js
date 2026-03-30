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

  if (activePage === "addappointment") {
    return `<img class="topbar-page-icon topbar-page-icon-addappointment" src="/sidebar-icons/addappointment.png" alt="Add Appointment icon">`;
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

function getPageIconImage(activePage) {
  const ICON_BY_PAGE = {
    dashboard: "dashboard",
    calendar: "calender",
    analytics: "analytics",
    bookings: "appointment",
    addappointment: "addappointment",
    emails: "email",
    completed: "succes",
    werkbon: "werkbon",
  };

  const iconName = ICON_BY_PAGE[activePage];
  if (!iconName) {
    return null;
  }

  return `/sidebar-icons/${iconName}.png`;
}

export function createNavbar({ title, headerNote = "", garage, activePage = "dashboard" }) {
  const navbar = document.createElement("div");
  navbar.className = "topbar-stack";

  const domain = resolveDomain(garage);
  const safeTitle = escapeHtml(title);
  const safeHeaderNote = escapeHtml(headerNote);
  const safeDomainLabel = escapeHtml(domain.label);
  const safeDomainHref = escapeHtml(domain.href);

  const pageIconSrc = getPageIconImage(activePage);
  const pageIconElement = pageIconSrc
    ? `<img class="topbar-page-icon topbar-page-icon-${escapeHtml(activePage)}" src="${pageIconSrc}" alt="${safeTitle} icon" />`
    : `<span class="topbar-page-icon topbar-page-icon-${escapeHtml(activePage)}">${pageIconMarkup(activePage)}</span>`;

  navbar.innerHTML = `
    <header class="topbar">
      <div class="topbar-main-row">
        <label class="topbar-search" aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 11.332L13.9999 13.9987" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <input type="search" placeholder="Search..." />
        </label>

        <div class="topbar-domain">
          <div class="topbar-domain-inner-left-side">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.6665 8.0013C1.6665 5.01574 1.6665 3.52296 2.594 2.59546C3.5215 1.66797 5.01428 1.66797 7.99984 1.66797C10.9854 1.66797 12.4782 1.66797 13.4057 2.59546C14.3332 3.52296 14.3332 5.01574 14.3332 8.0013C14.3332 10.9868 14.3332 12.4796 13.4057 13.4072C12.4782 14.3346 10.9854 14.3346 7.99984 14.3346C5.01428 14.3346 3.5215 14.3346 2.594 13.4072C1.6665 12.4796 1.6665 10.9868 1.6665 8.0013Z" stroke="#666666"/>
              <path d="M1.6665 6H14.3332" stroke="#666666" stroke-linejoin="round"/>
              <path d="M4.6665 4H4.67249" stroke="#666666" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.3335 4H7.3395" stroke="#666666" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <a href="https://autoservicehoute.nl">https://${safeDomainLabel}</a>
          </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.39917 2C4.96653 2.00438 3.69265 2.06411 2.87855 2.87835C2 3.75704 2 5.17128 2 7.99972C2 10.8282 2 12.2425 2.87855 13.1211C3.7571 13.9999 5.17111 13.9999 7.99917 13.9999C10.8271 13.9999 12.2412 13.9999 13.1197 13.1211C13.9338 12.3069 13.9935 11.0328 13.9979 8.59979" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.7039 2.33132L7.36572 8.7063M13.7039 2.33132C13.3746 2.00158 11.1561 2.03231 10.6871 2.03898M13.7039 2.33132C14.0333 2.66106 14.0025 4.88239 13.9959 5.352" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>

        <a class="topbar-add-link ${activePage === "add-appointment" ? "is-current" : ""}" href="/add-appointment.html">
          <img class="navbar-icon-add-appointment" src="/sidebar-icons/addappointment.png" alt="Email icon">
          <span>Add Appointment</span>
        </a>
      </div>
    </header>

    <div class="topbar-title-row">
      <div class="topbar-title-wrap">
        ${pageIconElement}
        <h1 class="topbar-title">${safeTitle}</h1>
      </div>
    </div>
  `;

  const header = navbar.querySelector('.topbar');
  const titleRow = navbar.querySelector('.topbar-title-row');

  return { header, titleRow };
}
