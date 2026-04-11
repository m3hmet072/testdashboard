const TOOLBAR_ITEMS = [
  { label: "Menu", href: "./werkbon.html", icon: "🏠" },
  { label: "Nieuw", href: "./werkbon-artikelen-nieuw.html", icon: "📁" },
  { label: "Zoek", href: "./werkbon-artikelen-zoek.html", icon: "🔎" },
  { label: "Vind", href: "./werkbon-artikelen-vind.html", icon: "🧭" },
  { label: "Vind alles", href: "./werkbon-artikelen-vind-alles.html", icon: "🌐" },
  { label: "Lijst", href: "./werkbon-artikelen-lijst.html", icon: "📋" },
  { label: "Print", href: "./werkbon-artikelen-print.html", icon: "🖨️" },
  { label: "Import", href: "./werkbon-artikelen-import.html", icon: "📥" },
  { label: "Inboeken", href: "./werkbon-artikelen-inboeken.html", icon: "📘" },
  { label: "Waarde", href: "./werkbon-artikelen-waarde.html", icon: "💶" },
  { label: "Verwijder", href: "./werkbon-artikelen-verwijder.html", icon: "🗑️" },
  { label: "Eerste", href: "./werkbon-artikelen-eerste.html", icon: "⏮️" },
  { label: "Vorige", href: "./werkbon-artikelen-vorige.html", icon: "◀️" },
  { label: "Volgende", href: "./werkbon-artikelen-volgende.html", icon: "▶️" },
  { label: "Laatste", href: "./werkbon-artikelen-laatste.html", icon: "⏭️" },
];

export function renderArtikelenToolbar() {
  return `
    <div class="werkbon-legacy-toolbar" role="toolbar" aria-label="Artikelen acties">
      ${TOOLBAR_ITEMS.map((item) => `
        <a class="werkbon-legacy-toolbtn" href="${item.href}">
          <span class="werkbon-legacy-toolbtn-icon" aria-hidden="true">${item.icon}</span>
          <span class="werkbon-legacy-toolbtn-label">${item.label}</span>
        </a>
      `).join("")}
    </div>
  `;
}
