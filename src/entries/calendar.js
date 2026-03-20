import "../styles/base.css";
import "../styles/theme.css";
import "../styles/request-board.css";
import "../styles/calendar.css";
import { mountCalendarPage } from "../pages/calendarPage.js";
import { initializeTheme } from "../utils/theme.js";

const root = document.querySelector("#app");
initializeTheme();
mountCalendarPage(root);
