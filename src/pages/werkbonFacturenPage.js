import { createFacturenSection } from "./werkbon/FacturenSection.js";
import { renderArtikelenToolbar } from "./werkbon/artikelenToolbar.js";
import { mountWerkbonSubPage } from "./werkbonSubPageFactory.js";

const root = document.querySelector("#app");

mountWerkbonSubPage(root, {
  title: "Werkbon - Facturen",
  note: "Bekijk en beheer facturen",
  showTitleRow: false,
  headerToolbarHtml: renderArtikelenToolbar(),
  createSection: createFacturenSection,
});
