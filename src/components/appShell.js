import { createNavbar } from "./navbar.js";
import { createSidebar, setSidebarEmailUnreadCount } from "./sidebar.js";

const PREFETCHED_DOCUMENTS_KEY = "garage-dashboard.prefetched-documents";
const PREFETCH_DOCUMENTS = [
  "/dashboard.html",
  "/calendar.html",
  "/bookings.html",
  "/completed.html",
  "/werkbon.html",
  "/werkbon-detail.html",
  "/add-appointment.html",
  "/emails.html",
  "/analytics.html",
];

function warmNavigationDocuments() {
  try {
    if (window.sessionStorage.getItem(PREFETCHED_DOCUMENTS_KEY) === "true") {
      return;
    }

    PREFETCH_DOCUMENTS.forEach((href) => {
      if (document.head.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
        return;
      }

      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "document";
      link.href = href;
      document.head.append(link);
    });

    window.sessionStorage.setItem(PREFETCHED_DOCUMENTS_KEY, "true");
  } catch {
    // Prefetching is a progressive enhancement and may fail in restricted modes.
  }
}

export function createAppShell({
  activePage,
  title,
  headerNote = "",
  userEmail,
  unreadEmailCount = 0,
  onLogout,
  garage,
  isAdmin = false,
}) {
  warmNavigationDocuments();

  const shell = document.createElement("div");
  shell.className = "app-shell page-animate";

  const { header, titleRow } = createNavbar({ title, headerNote, garage, isAdmin, activePage });

  const sidebar = createSidebar(activePage, {
    garage,
    isAdmin,
    userEmail,
    unreadEmailCount,
    onLogout,
  });

  const workspace = document.createElement("div");
  workspace.className = "app-workspace";

  const contentArea = document.createElement("main");
  contentArea.className = "content";

  const mainContent = document.createElement("div");
  mainContent.className = "main-content";
  mainContent.append(header, workspace);

  workspace.append(titleRow, contentArea);
  shell.append(sidebar, mainContent);

  if (sidebar.dataset.collapsed === "true") {
    shell.classList.add("is-sidebar-collapsed");
  }

  const setUnreadEmailCount = (count) => {
    setSidebarEmailUnreadCount(sidebar, count);
  };

  return { shell, contentArea, setUnreadEmailCount };
}
