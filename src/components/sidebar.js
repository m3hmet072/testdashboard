import { getActiveTheme, setTheme } from "../utils/theme.js";

const NAV_LINKS = [
  { key: "dashboard", href: "/dashboard.html", label: "Dashboard", icon: "dashboard" },
  { key: "calendar", href: "/calendar.html", label: "Calendar", icon: "calendar" },
  { key: "bookings", href: "/bookings.html", label: "Appointment", icon: "appointments" },
  {
    key: "completed",
    href: "/completed.html",
    label: "Completed Appointments",
    icon: "completed",
  },
  {
    key: "addappointment",
    href: "/add-appointment.html",
    label: "Add Appointment",
    icon: "addappointment",
  },
  { key: "emails", href: "/emails.html", label: "E-mails", icon: "emails", showUnreadBadge: true },
  { key: "analytics", href: "/analytics.html", label: "Analytics", icon: "analytics" },
];

const SIDEBAR_ICON_SRC = {
  dashboard: "/sidebar-icons/dashboard.png",
  appointments: "/sidebar-icons/appointment.png",
  calendar: "/sidebar-icons/calender.png",
  completed: "/sidebar-icons/succes.png",
  addappointment: "/sidebar-icons/addappointment.png",
  emails: "/sidebar-icons/email.png",
  analytics: "/sidebar-icons/analytics.png",
  default: "/sidebar-icons/default.png",
};

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

  sidebar.innerHTML = `
    <div class="sidebar-main">
      <a href="/dashboard.html" class="brand">
        ${garageLogoMarkup(garage)}
        <span class="brand-text-wrap">
          <span class="brand-text">${garage?.name}</span>
        </span>
      </a>

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
  if (typeof onLogout === "function") {
    logoutButton?.addEventListener("click", onLogout);
  } else {
    logoutButton?.remove();
  }

  setSidebarEmailUnreadCount(sidebar, unreadEmailCount);

  return sidebar;
}
