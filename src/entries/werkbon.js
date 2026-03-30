import "../styles/base.css";
import "../styles/theme.css";
import "../styles/request-board.css";
import "../styles/werkbon.css";
import { mountWerkbonPage } from "../pages/werkbonPage.js";
import { initializeTheme } from "../utils/theme.js";

const root = document.querySelector("#app");
initializeTheme();
mountWerkbonPage(root);