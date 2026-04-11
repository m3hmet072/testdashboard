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
                Artikelnummer
                <input type="text" name="artikelnummer" value="${editingArtikel?.artikelnummer ?? ""}" required />
              </label>
              <label>
                Zoeknaam
                <input type="text" name="naam" value="${editingArtikel?.naam ?? ""}" required />
              </label>
            </div>

            <label>
              Omschrijving
              <textarea name="omschrijving" rows="3">${editingArtikel?.omschrijving ?? ""}</textarea>
            </label>

            <div class="werkbon-artikel-row two">
              <label>
                Leverancier
                <input type="text" name="leverancier" value="${editingArtikel?.leverancier ?? ""}" />
              </label>
              <label>
                Locatie
                <input type="text" name="locatie" value="${editingArtikel?.locatie ?? ""}" />
              </label>
            </div>

            <div class="werkbon-artikel-row three">
              <label>
                Eenheid
                <input type="text" name="eenheid" value="${editingArtikel?.eenheid ?? ""}" />
              </label>
              <label>
                Verpakkingseenheid
                <input type="text" name="verpakkingseenheid" value="${editingArtikel?.verpakkingseenheid ?? ""}" />
              </label>
              <label>
                Minimale voorraad
                <input type="number" min="0" step="1" name="minimaleVoorraad" value="${editingArtikel?.minimaleVoorraad ?? "0"}" />
              </label>
            </div>

            <div class="werkbon-artikel-row four">
              <label>
                Inkoopprijs
                <input type="number" min="0" step="0.01" name="inkoopprijs" value="${editingArtikel?.inkoopprijs ?? ""}" />
              </label>
              <label>
                Verkoopprijs
                <input type="number" min="0" step="0.01" name="verkoopprijs" value="${editingArtikel?.verkoopprijs ?? ""}" required />
              </label>
              <label>
                Marge (%)
                <input type="number" min="0" step="0.01" name="marge" value="${editingArtikel?.marge ?? "0"}" />
              </label>
              <label>
                BTW
                <select name="btwPercentage">
                  <option value="21" ${(editingId ? String(editingArtikel?.btwPercentage) : String(nextState.settings.defaultBTW)) === "21" ? "selected" : ""}>21%</option>
                  <option value="9" ${(editingId ? String(editingArtikel?.btwPercentage) : String(nextState.settings.defaultBTW)) === "9" ? "selected" : ""}>9%</option>
                  <option value="0" ${(editingId ? String(editingArtikel?.btwPercentage) : String(nextState.settings.defaultBTW)) === "0" ? "selected" : ""}>0%</option>
                </select>
              </label>
            </div>

            <div class="werkbon-artikel-row four">
              <label>
                Beginbalans
                <input type="number" min="0" step="1" name="beginBalans" value="${editingArtikel?.beginBalans ?? "0"}" />
              </label>
              <label>
                Aantal uitgegaan
                <input type="number" min="0" step="1" name="aantalUitgegaan" value="${editingArtikel?.aantalUitgegaan ?? "0"}" />
              </label>
              <label>
                Aantal ingekomen
                <input type="number" min="0" step="1" name="aantalIngekomen" value="${editingArtikel?.aantalIngekomen ?? "0"}" />
              </label>
              <label>
                Eindbalans
                <input type="number" name="eindBalans" value="${editingArtikel?.eindBalans ?? "0"}" readonly />
              </label>
            </div>

            <label>
              Opmerking
              <textarea name="opmerking" rows="2">${editingArtikel?.opmerking ?? ""}</textarea>
            </label>

            <input type="hidden" name="prijsInclBTW" value="${editingArtikel?.prijsInclBTW ?? ""}" />
          </div>

          <aside class="werkbon-artikel-right">
            <p class="werkbon-artikel-right-title">Plaatje</p>
            <div class="werkbon-artikel-image-placeholder">Klik hier voor afbeelding</div>
            <label>
              Aanmaakdatum
              <input type="text" value="${editingArtikel?.updatedAt ? new Date(editingArtikel.updatedAt).toLocaleDateString("nl-NL") : new Date().toLocaleDateString("nl-NL")}" readonly />
            </label>
          </aside>
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
