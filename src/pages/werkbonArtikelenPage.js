import { createArtikelenSection } from "./werkbon/ArtikelenSection.js";
import { renderArtikelenToolbar } from "./werkbon/artikelenToolbar.js";
import { mountWerkbonSubPage } from "./werkbonSubPageFactory.js";

const root = document.querySelector("#app");

mountWerkbonSubPage(root, {
  title: "Werkbon - Artikelen",
  note: "Beheer je artikelen",
  showTitleRow: false,
  headerToolbarHtml: renderArtikelenToolbar(),
  createSection: createArtikelenSection,
});
