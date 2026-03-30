import { getActiveTheme, setTheme } from "../utils/theme.js";
import { assetUrl, pageUrl } from "../utils/paths.js";

const NAV_LINKS = [
  { key: "dashboard", href: pageUrl("dashboard.html"), label: "Dashboard", icon: "dashboard" },
  { key: "calendar", href: pageUrl("calendar.html"), label: "Calendar", icon: "calendar" },
  { key: "bookings", href: pageUrl("bookings.html"), label: "Appointment", icon: "appointments" },
  {
    key: "completed",
    href: pageUrl("completed.html"),
    label: "Completed",
    icon: "completed",
  },
  {
    key: "werkbon",
    href: pageUrl("werkbon.html"),
    label: "Werkbon",
    icon: "werkbon",
  },
  {
    key: "addappointment",
    href: pageUrl("add-appointment.html"),
    label: "Add Appointment",
    icon: "addappointment",
  },
  { key: "emails", href: pageUrl("emails.html"), label: "E-mails", icon: "emails", showUnreadBadge: true },
  { key: "analytics", href: pageUrl("analytics.html"), label: "Analytics", icon: "analytics" },
];

const SIDEBAR_ICON_SRC = {
  dashboard: assetUrl("sidebar-icons/dashboard.png"),
  appointments: assetUrl("sidebar-icons/appointment.png"),
  calendar: assetUrl("sidebar-icons/calender.png"),
  completed: assetUrl("sidebar-icons/succes.png"),
  werkbon: assetUrl("sidebar-icons/werkbon.png"),
  addappointment: assetUrl("sidebar-icons/addappointment.png"),
  emails: assetUrl("sidebar-icons/email.png"),
  analytics: assetUrl("sidebar-icons/analytics.png"),
  default: assetUrl("sidebar-icons/default.png"),
};

const SIDEBAR_COLLAPSED_STORAGE_KEY = "garage-dashboard.sidebar-collapsed";

function iconMarkup(icon) {
  const src = SIDEBAR_ICON_SRC[icon] ?? SIDEBAR_ICON_SRC.default;
  return `<img class="sidebar-link-icon-image" src="${src}" alt="" width="32" height="33" aria-hidden="true" />`;
}

function initialsFromEmail(userEmail) {
  if (!userEmail) {
    return "A";
  }

  const localPart = String(userEmail).split("@")[0] ?? "A";
  return (localPart[0] ?? "A").toUpperCase();
}

function displayNameFromEmail(userEmail, fallbackName) {
  if (fallbackName) {
    return fallbackName;
  }

  const localPart = String(userEmail ?? "").trim().split("@")[0];
  if (!localPart) {
    return "Garage User";
  }

  return localPart
    .split(/[._-]+/g)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .slice(0, 2)
    .join(" ");
}

function garageLogoMarkup(garage) {
  if (!garage?.logoUrl) {
    const letter = String(garage?.name?.[0] ?? "A").toUpperCase();
    return `<span class="brand-mark">${letter}</span>`;
  }

  return `<img class="brand-logo" src="${garage.logoUrl}" alt="${garage.name} logo" />`;
}

export function setSidebarEmailUnreadCount(sidebar, unreadCount) {
  const count = Number(unreadCount);
  const safeCount = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;
  const badges = sidebar.querySelectorAll("[data-email-unread-count]");

  badges.forEach((badge) => {
    badge.textContent = safeCount > 99 ? "99+" : String(safeCount);
    badge.hidden = safeCount === 0;
  });
}

export function createSidebar(
  activePage,
  { garage, isAdmin = false, userEmail = "", onLogout, unreadEmailCount = 0 } = {},
) {
  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";
  const isCollapsed = window.localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY) === "true";

  if (isCollapsed) {
    sidebar.classList.add("is-collapsed");
    sidebar.dataset.collapsed = "true";
  }

  const linksMarkup = NAV_LINKS.map((item) => {
    const activeClass = item.key === activePage ? "is-active" : "";

    return `
      <a class="sidebar-link sidebar-link-${item.key} ${activeClass}" href="${item.href}">
        <span class="sidebar-link-icon">${iconMarkup(item.icon)}</span>
        <span class="sidebar-link-label">${item.label}</span>
        ${item.showUnreadBadge ? '<span class="sidebar-link-count" data-email-unread-count hidden>0</span>' : ""}
      </a>
    `;
  }).join("");

  const userName = displayNameFromEmail(userEmail, isAdmin ? "Admin" : "");
  const userRole = isAdmin ? "Owner" : garage?.name ?? "Garage Staff";
  const isDarkTheme = getActiveTheme() === "dark";
  const collapseLabel = isCollapsed ? "Expand sidebar" : "Collapse sidebar";

  sidebar.innerHTML = `
    <div class="sidebar-main">
      <div class="sidebar-brand-row">
        <a href="${pageUrl("dashboard.html")}" class="brand">
          ${garageLogoMarkup(garage)}
          <span class="brand-text-wrap">
            <span class="brand-text">${garage?.name}</span>
          </span>
        </a>
        <button class="sidebar-collapse-toggle" type="button" aria-label="${collapseLabel}" title="${collapseLabel}">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M20.25 7c0-.69-.56-1.25-1.25-1.25H9.75v12.5H19c.69 0 1.25-.56 1.25-1.25zM3.75 17c0 .69.56 1.25 1.25 1.25h3.25V5.75H5c-.69 0-1.25.56-1.25 1.25zm18 0A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17V7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7z"></path>
          </svg>
        </button>
      </div>

      <p class="sidebar-section-label">Navigate</p>

      <nav class="sidebar-nav">
        ${linksMarkup}
      </nav>
    </div>

    <div class="sidebar-footer">
      <button class="sidebar-footer-action" type="button" aria-label="Settings">
        <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <circle cx="10" cy="10" r="2.2" fill="none" stroke="currentColor" stroke-width="1.5"></circle>
          <path d="M10 2.8v1.8M10 15.4v1.8M17.2 10h-1.8M4.6 10H2.8M15.2 4.8l-1.3 1.3M6.1 13.9l-1.3 1.3M15.2 15.2l-1.3-1.3M6.1 6.1L4.8 4.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
        <span>Settings</span>
      </button>

      <button class="language-switcher" type="button" aria-label="Current language">
        <span class="language-flag" aria-hidden="true">🇬🇧</span>
        <span class="language-code">GB</span>
        <span class="language-name">English</span>
        <span class="language-chevron" aria-hidden="true">▾</span>
      </button>

      <label class="theme-switcher" aria-label="Night mode">
        <span class="theme-switch-label">Night Mode</span>
        <span class="theme-switch-control">
          <input class="theme-switch-input" type="checkbox" data-theme-toggle role="switch" ${isDarkTheme ? "checked" : ""} />
          <span class="theme-switch-track" aria-hidden="true"></span>
        </span>
      </label>

      <div class="sidebar-user-card">
        <span class="sidebar-avatar">${initialsFromEmail(userEmail)}</span>
        <span class="sidebar-user-meta">
          <strong>${userName}</strong>
          <small>${userEmail || userRole}</small>
        </span>
        <button class="sidebar-logout" type="button" aria-label="Log out">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M7 5.5h-2a2 2 0 00-2 2v5a2 2 0 002 2h2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M10 6.2l3.8 3.8-3.8 3.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M13.5 10H8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
        </button>
      </div>
    </div>
  `;

  const themeSwitch = sidebar.querySelector("[data-theme-toggle]");
  if (themeSwitch instanceof HTMLInputElement) {
    themeSwitch.addEventListener("change", () => {
      setTheme(themeSwitch.checked ? "dark" : "light");
    });
  }

  const logoutButton = sidebar.querySelector(".sidebar-logout");
  const collapseButton = sidebar.querySelector(".sidebar-collapse-toggle");

  const applyCollapsedState = (collapsed) => {
    sidebar.classList.toggle("is-collapsed", collapsed);
    sidebar.dataset.collapsed = collapsed ? "true" : "false";
    collapseButton?.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Collapse sidebar");
    collapseButton?.setAttribute("title", collapsed ? "Expand sidebar" : "Collapse sidebar");
    window.localStorage.setItem(SIDEBAR_COLLAPSED_STORAGE_KEY, collapsed ? "true" : "false");

    const shell = sidebar.closest(".app-shell");
    shell?.classList.toggle("is-sidebar-collapsed", collapsed);
  };

  collapseButton?.addEventListener("click", () => {
    applyCollapsedState(!sidebar.classList.contains("is-collapsed"));
  });

  if (typeof onLogout === "function") {
    logoutButton?.addEventListener("click", onLogout);
  } else {
    logoutButton?.remove();
  }

  setSidebarEmailUnreadCount(sidebar, unreadEmailCount);

  return sidebar;
}
