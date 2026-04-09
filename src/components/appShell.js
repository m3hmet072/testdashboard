import { createNavbar } from "./navbar.js";
import { createSidebar, setSidebarEmailUnreadCount } from "./sidebar.js";
import { initializeGlobalSearch } from "./search.js";
import { summarizeEmailInbox } from "../services/emailService.js";

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
  "/settings.html",
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

  // Mobile sidebar overlay
  const overlay = document.createElement("div");
  overlay.className = "sidebar-overlay";
  shell.append(overlay);

  const openSidebar = () => {
    sidebar.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const closeSidebar = () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  const hamburger = header.querySelector(".topbar-hamburger");
  hamburger?.addEventListener("click", openSidebar);
  overlay.addEventListener("click", closeSidebar);

  initializeGlobalSearch({
    header,
    garageId: garage?.id ?? "",
  });

  if (sidebar.dataset.collapsed === "true") {
    shell.classList.add("is-sidebar-collapsed");
  }

  const setUnreadEmailCount = (count) => {
    setSidebarEmailUnreadCount(sidebar, count);
  };

  // Auto-fetch and update email count on all pages if unreadEmailCount was not explicitly set
  if (unreadEmailCount === 0 && garage?.id) {
    (async () => {
      try {
        const summary = await summarizeEmailInbox({
          garageIds: isAdmin ? null : [garage.id],
        });
        if (summary && typeof summary.unread === "number") {
          setUnreadEmailCount(summary.unread);
        }
      } catch (error) {
        // Silently fail - email badge update is not critical
        console.debug("Failed to update email badge:", error);
      }
    })();
  } else if (unreadEmailCount > 0) {
    setUnreadEmailCount(unreadEmailCount);
  }

  return { shell, contentArea, setUnreadEmailCount };
}
