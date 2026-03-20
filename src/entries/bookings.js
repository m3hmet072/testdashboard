import "../styles/base.css";
import "../styles/theme.css";
import "../styles/request-board.css";
import "../styles/bookings.css";
import { mountBookingsPage } from "../pages/bookingsPage.js";
import { initializeTheme } from "../utils/theme.js";

const root = document.querySelector("#app");
initializeTheme();
mountBookingsPage(root);
