import "../styles/base.css";
import "../styles/theme.css";
import "../styles/dashboard.css";
import { mountDashboardPage } from "../pages/dashboardPage.js";
import { initializeTheme } from "../utils/theme.js";

const root = document.querySelector("#app");
initializeTheme();
mountDashboardPage(root);
