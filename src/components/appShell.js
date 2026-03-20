import { createNavbar } from "./navbar.js";
import { createSidebar, setSidebarEmailUnreadCount } from "./sidebar.js";

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
  const shell = document.createElement("div");
  shell.className = "app-shell page-animate";

  const sidebar = createSidebar(activePage, {
    garage,
    isAdmin,
    userEmail,
    unreadEmailCount,
    onLogout,
  });

  const workspace = document.createElement("div");
  workspace.className = "app-workspace";

  const navbar = createNavbar({ title, headerNote, garage, isAdmin, activePage });
  const contentArea = document.createElement("main");
  contentArea.className = "content";

  workspace.append(navbar, contentArea);
  shell.append(sidebar, workspace);

  const setUnreadEmailCount = (count) => {
    setSidebarEmailUnreadCount(sidebar, count);
  };

  return { shell, contentArea, setUnreadEmailCount };
}
