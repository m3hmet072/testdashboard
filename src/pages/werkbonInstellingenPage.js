import { createWerkbonInstellingenSection } from "./werkbon/WerkbonInstellingenSection.js";
import { renderArtikelenToolbar } from "./werkbon/artikelenToolbar.js";
import { mountWerkbonSubPage } from "./werkbonSubPageFactory.js";

const root = document.querySelector("#app");

mountWerkbonSubPage(root, {
  title: "Werkbon - Instellingen",
  note: "Werkbon instellingen",
  showTitleRow: false,
  headerToolbarHtml: renderArtikelenToolbar(),
  createSection: createWerkbonInstellingenSection,
});
