import "../styles/base.css";
import "../styles/theme.css";
import { mountLoginPage } from "../pages/loginPage.js";
import { initializeTheme } from "../utils/theme.js";

const root = document.querySelector("#app");
initializeTheme();
mountLoginPage(root);
