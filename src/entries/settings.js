import "../styles/base.css";
import "../styles/theme.css";
import "../styles/request-board.css";
import "../styles/settings.css";
import { mountSettingsPage } from "../pages/settingsPage.js";
import { initializeTheme } from "../utils/theme.js";

const root = document.querySelector("#app");
initializeTheme();
mountSettingsPage(root);
