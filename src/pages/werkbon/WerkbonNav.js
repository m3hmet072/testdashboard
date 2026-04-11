const NAV_ITEMS = [
  { key: "artikelen", label: "Artikelen" },
  { key: "facturen", label: "Facturen" },
  { key: "omzet", label: "Omzet- en BTW overzicht" },
  { key: "instellingen", label: "Instellingen" },
];

export function createWerkbonNav(activeTab, onTabChange) {
  const nav = document.createElement("nav");
  nav.className = "werkbon-internal-nav";
  nav.setAttribute("aria-label", "Werkbon sub navigation");

  nav.innerHTML = NAV_ITEMS.map((item) => {
    const activeClass = item.key === activeTab ? "is-active" : "";
    const ariaSelected = item.key === activeTab ? "true" : "false";

    return `
      <button
        type="button"
        class="werkbon-nav-tab ${activeClass}"
        data-tab-key="${item.key}"
        role="tab"
        aria-selected="${ariaSelected}"
      >
        ${item.label}
      </button>
    `;
  }).join("");

  nav.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const tabButton = target.closest("[data-tab-key]");
    if (!(tabButton instanceof HTMLButtonElement)) {
      return;
    }

    const nextTab = String(tabButton.dataset.tabKey ?? "").trim();
    if (!nextTab || typeof onTabChange !== "function") {
      return;
    }

    onTabChange(nextTab);
  });

  return nav;
}
