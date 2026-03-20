import "../styles/base.css";
import "../styles/theme.css";
import "../styles/request-board.css";
import "../styles/completed.css";
import { mountCompletedPage } from "../pages/completedPage.js";
import { initializeTheme } from "../utils/theme.js";

const root = document.querySelector("#app");
initializeTheme();
mountCompletedPage(root);
