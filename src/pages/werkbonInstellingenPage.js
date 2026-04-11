import { createWerkbonInstellingenSection } from "./werkbon/WerkbonInstellingenSection.js";
import { mountWerkbonSubPage } from "./werkbonSubPageFactory.js";

const root = document.querySelector("#app");

mountWerkbonSubPage(root, {
  title: "Werkbon - Instellingen",
  note: "Werkbon instellingen",
  createSection: createWerkbonInstellingenSection,
});
