import { mountWerkbonSubPage } from "./werkbonSubPageFactory.js";
import { renderArtikelenToolbar } from "./werkbon/artikelenToolbar.js";

const ACTION_CONFIG = {
  menu: {
    title: "Werkbon - Artikelen - Menu",
    note: "Actiepagina voor Menu",
    description: "Je hebt de Menu-actie geopend.",
  },
  nieuw: {
    title: "Werkbon - Artikelen - Nieuw",
    note: "Actiepagina voor Nieuw",
    description: "Je hebt de Nieuw-actie geopend.",
  },
  zoek: {
    title: "Werkbon - Artikelen - Zoek",
    note: "Actiepagina voor Zoek",
    description: "Je hebt de Zoek-actie geopend.",
  },
  vind: {
    title: "Werkbon - Artikelen - Vind",
    note: "Actiepagina voor Vind",
    description: "Je hebt de Vind-actie geopend.",
  },
  "vind-alles": {
    title: "Werkbon - Artikelen - Vind alles",
    note: "Actiepagina voor Vind alles",
    description: "Je hebt de Vind alles-actie geopend.",
  },
  lijst: {
    title: "Werkbon - Artikelen - Lijst",
    note: "Overzicht van artikelen",
    description: "Hier staat het artikelenoverzicht in tabelvorm.",
  },
  print: {
    title: "Werkbon - Artikelen - Print",
    note: "Actiepagina voor Print",
    description: "Je hebt de Print-actie geopend.",
  },
  import: {
    title: "Werkbon - Artikelen - Import",
    note: "Actiepagina voor Import",
    description: "Je hebt de Import-actie geopend.",
  },
  inboeken: {
    title: "Werkbon - Artikelen - Inboeken",
    note: "Actiepagina voor Inboeken",
    description: "Je hebt de Inboeken-actie geopend.",
  },
  waarde: {
    title: "Werkbon - Artikelen - Waarde",
    note: "Actiepagina voor Waarde",
    description: "Je hebt de Waarde-actie geopend.",
  },
  verwijder: {
    title: "Werkbon - Artikelen - Verwijder",
    note: "Actiepagina voor Verwijder",
    description: "Je hebt de Verwijder-actie geopend.",
  },
  eerste: {
    title: "Werkbon - Artikelen - Eerste",
    note: "Actiepagina voor Eerste",
    description: "Je hebt de Eerste-actie geopend.",
  },
  vorige: {
    title: "Werkbon - Artikelen - Vorige",
    note: "Actiepagina voor Vorige",
    description: "Je hebt de Vorige-actie geopend.",
  },
  volgende: {
    title: "Werkbon - Artikelen - Volgende",
    note: "Actiepagina voor Volgende",
    description: "Je hebt de Volgende-actie geopend.",
  },
  laatste: {
    title: "Werkbon - Artikelen - Laatste",
    note: "Actiepagina voor Laatste",
    description: "Je hebt de Laatste-actie geopend.",
  },
};

function getActionKeyFromPath() {
  const filename = window.location.pathname.split("/").pop() || "";
  const match = filename.match(/^werkbon-artikelen-(.+)\.html$/);
  return match?.[1] || "menu";
}

function formatCurrency(value) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(Number(value) || 0);
}

function createActionSection(actionKey) {
  return ({ store }) => {
    const section = document.createElement("section");
    section.className = "werkbon-section panel page-animate";

    const config = ACTION_CONFIG[actionKey] || ACTION_CONFIG.menu;

    if (actionKey === "lijst") {
      const state = store?.getState?.();
      const artikelen = state?.artikelen ?? [];
      const totalStock = artikelen.reduce((sum, artikel) => sum + (Number(artikel.eindBalans) || 0), 0);

      section.classList.add("werkbon-lijst-section");

      section.innerHTML = `
        <header class="werkbon-section-header">
          <h2>Artikelen lijst</h2>
          <p class="muted">Klik op een cel om te bewerken.</p>
        </header>

        <div class="werkbon-lijst-summary">
          <span><strong>${artikelen.length}</strong> artikelen</span>
          <span>Totale eindbalans: <strong>${totalStock}</strong></span>
        </div>

        <div class="werkbon-table-wrap" data-role="lijst-table">
          <table class="werkbon-table werkbon-lijst-table" data-editable="true">
            <colgroup>
              <col class="col-zoeknaam" />
              <col class="col-artikelnummer" />
              <col class="col-omschrijving" />
              <col class="col-leverancier" />
              <col class="col-locatie" />
              <col class="col-prijs" />
              <col class="col-prijs" />
              <col class="col-balans" />
            </colgroup>
            <thead>
              <tr>
                <th>Zoeknaam</th>
                <th>Artikelnummer</th>
                <th>Omschrijving</th>
                <th>Leverancier</th>
                <th>Locatie</th>
                <th>Inkoopprijs</th>
                <th>Verkoopprijs</th>
                <th>Eindbalans</th>
              </tr>
            </thead>
            <tbody>
              ${artikelen.length ? artikelen.map((artikel, idx) => `
                <tr data-artikel-index="${idx}">
                  <td data-field="naam" data-editable="true">${artikel.naam || "-"}</td>
                  <td data-field="artikelnummer" data-editable="true">${artikel.artikelnummer || "-"}</td>
                  <td data-field="omschrijving" data-editable="true">${artikel.omschrijving || "-"}</td>
                  <td data-field="leverancier" data-editable="true">${artikel.leverancier || "-"}</td>
                  <td data-field="locatie" data-editable="true">${artikel.locatie || "-"}</td>
                  <td data-field="inkoopprijs" data-editable="true" data-type="currency">${formatCurrency(artikel.inkoopprijs)}</td>
                  <td data-field="verkoopprijs" data-editable="true" data-type="currency">${formatCurrency(artikel.verkoopprijs)}</td>
                  <td data-field="eindBalans" data-editable="true" data-type="number">${artikel.eindBalans ?? 0}</td>
                </tr>
              `).join("") : '<tr><td colspan="8" class="muted">Geen artikelen gevonden.</td></tr>'}
            </tbody>
          </table>
        </div>
      `;

      // Add inline editing functionality
      setTimeout(() => {
        const table = section.querySelector('table[data-editable="true"]');
        if (!table) return;

        table.addEventListener('click', (e) => {
          const cell = e.target.closest('td[data-editable="true"]');
          if (!cell || cell.querySelector('input')) return;

          const fieldName = cell.dataset.field;
          const dataType = cell.dataset.type;
          const row = cell.closest('tr');
          const artikelIdx = parseInt(row.dataset.artikelIndex);
          
          if (isNaN(artikelIdx)) return;

          const artikel = artikelen[artikelIdx];
          const originalValue = artikel[fieldName];

          // Create input field
          const input = document.createElement('input');
          input.type = dataType === 'currency' && fieldName.includes('prijs') ? 'number' : 'text';
          input.step = '0.01';
          
          if (dataType === 'currency') {
            const numValue = Number(originalValue) || 0;
            input.value = numValue;
          } else if (dataType === 'number') {
            input.value = originalValue || 0;
          } else {
            input.value = originalValue || '';
          }

          input.style.width = '100%';
          input.style.padding = '0.4rem';
          input.style.border = 'none';
          input.style.borderBottom = '2px solid #0066cc';
          input.style.fontSize = 'inherit';
          input.style.fontFamily = 'inherit';

          cell.textContent = '';
          cell.appendChild(input);
          input.focus();
          input.select();

          const saveEdit = () => {
            let value = input.value.trim();
            
            // Validate and convert based on type
            if (dataType === 'number' || dataType === 'currency') {
              value = parseFloat(value) || 0;
            }

            // Update store
            artikel[fieldName] = value;
            store?.setState?.({ artikelen });

            // Update display
            if (dataType === 'currency') {
              cell.textContent = formatCurrency(value);
            } else {
              cell.textContent = value || '-';
            }
          };

          const cancelEdit = () => {
            if (dataType === 'currency') {
              cell.textContent = formatCurrency(originalValue);
            } else {
              cell.textContent = originalValue || '-';
            }
          };

          input.addEventListener('blur', saveEdit);
          input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
              saveEdit();
            } else if (e.key === 'Escape') {
              cancelEdit();
            }
          });
        });
      }, 0);

      return section;
    }

    section.innerHTML = `
      <header class="werkbon-section-header">
        <h2>${config.title}</h2>
        <p class="muted">${config.description}</p>
      </header>
      <article class="werkbon-form-card">
        <p class="muted">Deze pagina is aangemaakt als aparte route voor de knop <strong>${actionKey}</strong>.</p>
        <div class="werkbon-form-actions">
          <a class="button subtle" href="./werkbon-artikelen.html">Terug naar Artikelen</a>
          <a class="button subtle" href="./werkbon.html">Terug naar Werkbon menu</a>
        </div>
      </article>
    `;

    if (actionKey === "print") {
      window.requestAnimationFrame(() => window.print());
    }

    return section;
  };
}

const actionKey = getActionKeyFromPath();
const config = ACTION_CONFIG[actionKey] || ACTION_CONFIG.menu;

const root = document.querySelector("#app");
mountWerkbonSubPage(root, {
  title: config.title,
  note: config.note,
  showTitleRow: false,
  headerToolbarHtml: renderArtikelenToolbar(),
  createSection: createActionSection(actionKey),
});
