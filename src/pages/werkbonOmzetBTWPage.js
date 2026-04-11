import { createOmzetBTWSection } from "./werkbon/OmzetBTWSection.js";
import { renderArtikelenToolbar } from "./werkbon/artikelenToolbar.js";
import { mountWerkbonSubPage } from "./werkbonSubPageFactory.js";

const root = document.querySelector("#app");

mountWerkbonSubPage(root, {
  title: "Werkbon - Omzet en BTW",
  note: "Inzicht in omzet en btw",
  showTitleRow: false,
  headerToolbarHtml: renderArtikelenToolbar(),
  createSection: createOmzetBTWSection,
});
