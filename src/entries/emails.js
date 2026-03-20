import "../styles/base.css";
import "../styles/theme.css";
import "../styles/request-board.css";
import "../styles/emails.css";
import { mountEmailsPage } from "../pages/emailsPage.js";
import { initializeTheme } from "../utils/theme.js";

const root = document.querySelector("#app");
initializeTheme();
mountEmailsPage(root);
