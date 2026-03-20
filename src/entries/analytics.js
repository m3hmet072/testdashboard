import "../styles/base.css";
import "../styles/theme.css";
import "../styles/dashboard.css";
import "../styles/analytics.css";
import { mountAnalyticsPage } from "../pages/analyticsPage.js";
import { initializeTheme } from "../utils/theme.js";

const root = document.querySelector("#app");
initializeTheme();
mountAnalyticsPage(root);
