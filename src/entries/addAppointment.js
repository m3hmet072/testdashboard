import "../utils/errorHandler.js";
import "../styles/theme.css";
import "../styles/request-board.css";
import "../styles/addAppointment.css";
import { mountAddAppointmentPage } from "../pages/addAppointmentPage.js";
import { initializeTheme } from "../utils/theme.js";

const root = document.querySelector("#app");
initializeTheme();
mountAddAppointmentPage(root);
