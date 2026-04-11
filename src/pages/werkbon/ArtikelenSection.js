function formatCurrency(value) {
    return new Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(Number(value) || 0);
}

function normalize(value) {
    return String(value ?? "").trim().toLowerCase();
}

function formatNumberField(value) {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : 0;
}

export function createArtikelenSection({ store } = {}) {
    const section = document.createElement("section");
    section.className = "werkbon-section panel page-animate";

    if (!store) {
        section.innerHTML = '<p class="muted">Artikelen kunnen niet geladen worden.</p>';
        return section;
    }

    let editingId = "";
    let query = "";
    let btwFilter = "all";
    let selectedArtikelId = "";
    let showList = false;

    const getFiltered = (state) =>
        state.artikelen.filter((artikel) => {
            const matchesQuery =
                !query ||
                normalize(artikel.naam).includes(query) ||
                normalize(artikel.artikelnummer).includes(query) ||
                normalize(artikel.omschrijving).includes(query) ||
                normalize(artikel.leverancier).includes(query);
            const matchesBTW = btwFilter === "all" || String(artikel.btwPercentage) === btwFilter;
            return matchesQuery && matchesBTW;
        });

    const render = () => {
        const nextState = store.getState();
        const filtered = getFiltered(nextState);
        const editingArtikel = nextState.artikelen.find((item) => item.id === editingId) ?? null;

        section.innerHTML = `
      <form class="werkbon-form-card" data-form="artikel">
        <h3>${editingId ? "Artikel bewerken" : "Nieuw artikel"}</h3>
        <div class="werkbon-artikel-layout">
          <div class="werkbon-artikel-left">
            <div class="werkbon-artikel-row two">
              <label>
                <span class="werkbon-field-label">Zoeknaam</span>
                <input type="text" name="naam" value="${editingArtikel?.naam ?? ""}" required />
              </label>
              <label>
                <span class="werkbon-field-label">Artikelnummer</span>
                <input type="text" name="artikelnummer" value="${editingArtikel?.artikelnummer ?? ""}" required />
              </label>
            
            </div>

            <label>
              <span class="werkbon-field-label">Omschrijving</span>
              <textarea name="omschrijving" rows="3">${editingArtikel?.omschrijving ?? ""}</textarea>
            </label>

            <div class="werkbon-artikel-row two">
              <label>
                <span class="werkbon-field-label">Leverancier</span>
                <input type="text" name="leverancier" value="${editingArtikel?.leverancier ?? ""}" />
              </label>
              <label>
                <span class="werkbon-field-label">Locatie</span>
                <input type="text" name="locatie" value="${editingArtikel?.locatie ?? ""}" />
              </label>
            </div>

            <div class="werkbon-artikel-row werkbon-artikel-row-inline-two">
              <label>
                <span class="werkbon-field-label">Eenheid</span>
                <input type="text" name="eenheid" value="${editingArtikel?.eenheid ?? ""}" />
              </label>
              <label>
                <span class="werkbon-field-label">Verpakkingseenheid</span>
                <input type="text" name="verpakkingseenheid" value="${editingArtikel?.verpakkingseenheid ?? ""}" />
              </label>
            </div>

            <div class="werkbon-artikel-row werkbon-artikel-row-inline-two">
              <label>
                <span class="werkbon-field-label">Inkoopprijs</span>
                <input type="number" min="0" step="0.01" name="inkoopprijs" value="${editingArtikel?.inkoopprijs ?? ""}" />
              </label>
              <label>
                <span class="werkbon-field-label">Marge (%)</span>
                <input type="number" min="0" step="0.01" name="marge" value="${editingArtikel?.marge ?? "0"}" />
              </label>
            </div>

            <div class="werkbon-artikel-row werkbon-artikel-row-inline-two">
              <label>
                <span class="werkbon-field-label">Verkoopprijs</span>
                <input type="number" min="0" step="0.01" name="verkoopprijs" value="${editingArtikel?.verkoopprijs ?? ""}" required />
              </label>
              <label>
                <span class="werkbon-field-label">BTW</span>
                <select name="btwPercentage">
                  <option value="21" ${(editingId ? String(editingArtikel?.btwPercentage) : String(nextState.settings.defaultBTW)) === "21" ? "selected" : ""}>21%</option>
                  <option value="9" ${(editingId ? String(editingArtikel?.btwPercentage) : String(nextState.settings.defaultBTW)) === "9" ? "selected" : ""}>9%</option>
                  <option value="0" ${(editingId ? String(editingArtikel?.btwPercentage) : String(nextState.settings.defaultBTW)) === "0" ? "selected" : ""}>0%</option>
                </select>
              </label>
            </div>

            <div class="werkbon-artikel-row werkbon-artikel-row-inline-two">
              <label>
                <span class="werkbon-field-label">Beginbalans</span>
                <input type="number" min="0" step="1" name="beginBalans" value="${editingArtikel?.beginBalans ?? "0"}" />
              </label>
              <label>
                <span class="werkbon-field-label">Balansdatum</span>
                <input type="number" min="0" step="1" name="balansdatum" value="${editingArtikel?.balansdatum ?? "0"}" />
              </label>
            </div>

            <div class="werkbon-artikel-row">
              <label>
                <span class="werkbon-field-label">Aantal uitgegaan</span>
                <input type="number" min="0" step="1" name="aantalUitgegaan" value="${editingArtikel?.aantalUitgegaan ?? "0"}" />
              </label>
              <label>
                <span class="werkbon-field-label">Aantal ingekomen</span>
                <input type="number" min="0" step="1" name="aantalIngekomen" value="${editingArtikel?.aantalIngekomen ?? "0"}" />
              </label>
            </div>

            <div class="werkbon-artikel-row werkbon-artikel-row-inline-two">
              <label>
                <span class="werkbon-field-label">Eindbalans</span>
                <input type="number" name="eindBalans" value="${editingArtikel?.eindBalans ?? "0"}" readonly />
              </label>
              <label>
                <span class="werkbon-field-label">Minimale voorraad</span>
                <input type="number" min="0" step="1" name="minimaleVoorraad" value="${editingArtikel?.minimaleVoorraad ?? "0"}" />
              </label>
            </div>

            <label>
              <span class="werkbon-field-label">Opmerking</span>
              <textarea name="opmerking" rows="2">${editingArtikel?.opmerking ?? ""}</textarea>
            </label>

            <input type="hidden" name="prijsInclBTW" value="${editingArtikel?.prijsInclBTW ?? ""}" />
          </div>
        </div>
        <div class="werkbon-form-actions">
          <button class="button" type="submit">${editingId ? "Opslaan" : "Artikel toevoegen"}</button>
          ${editingId ? '<button class="button subtle" type="button" data-action="cancel-edit">Annuleren</button>' : ""}
        </div>
      </form>

      ${showList ? `
        <div class="werkbon-table-wrap" data-role="lijst-table">
          <table class="werkbon-table">
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
              ${filtered.length ? filtered.map((artikel) => `
                <tr class="${selectedArtikelId === artikel.id ? "is-selected-row" : ""}" data-action="pick-row" data-id="${artikel.id}">
                  <td>${artikel.naam || "-"}</td>
                  <td>${artikel.artikelnummer || "-"}</td>
                  <td>${artikel.omschrijving || "-"}</td>
                  <td>${artikel.leverancier || "-"}</td>
                  <td>${artikel.locatie || "-"}</td>
                  <td>${formatCurrency(artikel.inkoopprijs)}</td>
                  <td>${formatCurrency(artikel.verkoopprijs)}</td>
                  <td>${artikel.eindBalans}</td>
                </tr>
              `).join("") : '<tr><td colspan="8" class="muted">Geen artikelen gevonden.</td></tr>'}
            </tbody>
          </table>
        </div>
      ` : ""}
    `;
    };

    render();

    section.addEventListener("input", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }

        if (target.matches("[data-action='search']")) {
            query = normalize(target.value);
            render();
        }
    });

    section.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }

        const actionable = target.closest("button[data-action], tr[data-action='pick-row']");
        if (!(actionable instanceof HTMLElement)) {
            return;
        }

        const action = String(actionable.dataset.action ?? "");
        const artikelId = String(actionable.dataset.id ?? "");

        if (action === "cancel-edit") {
            editingId = "";
            render();
            return;
        }

        if (action === "pick-row" && artikelId) {
            selectedArtikelId = artikelId;
            editingId = artikelId;
            render();
            return;
        }

    });

    section.addEventListener("submit", (event) => {
        const form = event.target;
        if (!(form instanceof HTMLFormElement) || form.dataset.form !== "artikel") {
            return;
        }

        event.preventDefault();

        const formData = new FormData(form);
        const beginBalans = formatNumberField(formData.get("beginBalans"));
        const balansdatum = formatNumberField(formData.get("balansdatum"));
        const aantalUitgegaan = formatNumberField(formData.get("aantalUitgegaan"));
        const aantalIngekomen = formatNumberField(formData.get("aantalIngekomen"));
        const inkoopprijs = formatNumberField(formData.get("inkoopprijs"));
        const verkoopprijs = formatNumberField(formData.get("verkoopprijs"));
        const computedEindBalans = beginBalans + aantalIngekomen - aantalUitgegaan;
        const computedMarge = inkoopprijs > 0 ? ((verkoopprijs - inkoopprijs) / inkoopprijs) * 100 : 0;

        const payload = {
            id: editingId || undefined,
            artikelnummer: formData.get("artikelnummer"),
            naam: formData.get("naam"),
            omschrijving: formData.get("omschrijving"),
            leverancier: formData.get("leverancier"),
            locatie: formData.get("locatie"),
            eenheid: formData.get("eenheid"),
            inkoopprijs,
            verkoopprijs,
            beginBalans,
            balansdatum,
            aantalUitgegaan,
            aantalIngekomen,
            eindBalans: computedEindBalans,
            verpakkingseenheid: formData.get("verpakkingseenheid"),
            marge: formatNumberField(formData.get("marge")) || computedMarge,
            btwPercentage: Number(formData.get("btwPercentage") || 21),
            minimaleVoorraad: formatNumberField(formData.get("minimaleVoorraad")),
            opmerking: formData.get("opmerking"),
            prijsInclBTW: verkoopprijs,
        };

        store.upsertArtikel(payload);
        editingId = "";
        render();
    });

    return section;
}
