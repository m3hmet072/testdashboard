function formatCurrency(value) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(Number(value) || 0);
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  return date.toLocaleDateString("nl-NL");
}

function statusClass(status) {
  if (status === "betaald") {
    return "status-chip-completed";
  }

  if (status === "verzonden") {
    return "status-chip-confirmed";
  }

  if (status === "te laat") {
    return "status-chip-late";
  }

  return "status-chip-progress";
}

function openInvoicePrintView(invoice) {
  const printable = window.open("", "_blank", "noopener,noreferrer");
  if (!printable) {
    return;
  }

  printable.document.write(`
    <!doctype html>
    <html>
      <head>
        <title>Factuur ${invoice.factuurnummer}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; }
          h1 { margin: 0 0 8px 0; }
          p { margin: 4px 0; }
        </style>
      </head>
      <body>
        <h1>Factuur ${invoice.factuurnummer}</h1>
        <p><strong>Klant:</strong> ${invoice.klantnaam}</p>
        <p><strong>Datum:</strong> ${formatDate(invoice.datum)}</p>
        <p><strong>Status:</strong> ${invoice.status}</p>
        <p><strong>Totaal:</strong> ${formatCurrency(invoice.totaalInclBTW)}</p>
      </body>
    </html>
  `);

  printable.document.close();
  printable.focus();
  printable.print();
}

export function createFacturenSection({ store } = {}) {
  const section = document.createElement("section");
  section.className = "werkbon-section panel page-animate";

  if (!store) {
    section.innerHTML = '<p class="muted">Facturen kunnen niet geladen worden.</p>';
    return section;
  }

  let selectedInvoiceId = store.getState().facturen[0]?.id ?? "";

  const render = () => {
    const state = store.getState();
    const selected = state.facturen.find((item) => item.id === selectedInvoiceId) ?? null;
    const openWerkbonnen = store.getOpenWerkbonnen();

    section.innerHTML = `
      <header class="werkbon-section-header">
        <h2>Facturen</h2>
        <p class="muted">Beheer facturen, converteer werkbonnen en werk statussen bij.</p>
      </header>

      <div class="werkbon-card-grid">
        <form class="werkbon-form-card" data-form="manual-invoice">
          <h3>Factuur handmatig aanmaken</h3>
          <div class="werkbon-form-grid">
            <label>
              Klantnaam
              <input type="text" name="klantnaam" required />
            </label>
            <label>
              Datum
              <input type="date" name="datum" value="${new Date().toISOString().slice(0, 10)}" required />
            </label>
            <label>
              Bedrag (incl. BTW)
              <input type="number" name="totaal" min="0" step="0.01" required />
            </label>
            <label>
              BTW
              <select name="btw">
                <option value="21" ${String(state.settings.defaultBTW) === "21" ? "selected" : ""}>21%</option>
                <option value="9" ${String(state.settings.defaultBTW) === "9" ? "selected" : ""}>9%</option>
                <option value="0" ${String(state.settings.defaultBTW) === "0" ? "selected" : ""}>0%</option>
              </select>
            </label>
          </div>
          <button class="button" type="submit">Factuur maken</button>
        </form>

        <div class="werkbon-form-card">
          <h3>Werkbon omzetten naar factuur</h3>
          <p class="muted">1 klik conversie van werkbon naar factuur.</p>
          ${openWerkbonnen.length ? `
            <div class="werkbon-inline-list">
              ${openWerkbonnen.map((werkbon) => `
                <div class="werkbon-inline-list-row">
                  <span>${werkbon.werkbonNummer} - ${werkbon.klantnaam}</span>
                  <button class="button subtle" type="button" data-action="convert" data-id="${werkbon.id}">Converteer</button>
                </div>
              `).join("")}
            </div>
          ` : '<p class="muted">Geen open werkbonnen beschikbaar.</p>'}
        </div>
      </div>

      <div class="werkbon-table-wrap">
        <table class="werkbon-table">
          <thead>
            <tr>
              <th>Factuurnummer</th>
              <th>Klantnaam</th>
              <th>Datum</th>
              <th>Status</th>
              <th>Bedrag</th>
              <th>Acties</th>
            </tr>
          </thead>
          <tbody>
            ${state.facturen.length ? state.facturen.map((invoice) => `
              <tr class="${selectedInvoiceId === invoice.id ? "is-selected-row" : ""}">
                <td><button class="werkbon-link-button" type="button" data-action="select" data-id="${invoice.id}">${invoice.factuurnummer}</button></td>
                <td>${invoice.klantnaam}</td>
                <td>${formatDate(invoice.datum)}</td>
                <td><span class="status-chip ${statusClass(invoice.status)}">${invoice.status}</span></td>
                <td>${formatCurrency(invoice.totaalInclBTW)}</td>
                <td class="werkbon-inline-actions">
                  <button class="button subtle" type="button" data-action="set-status" data-id="${invoice.id}" data-status="betaald">Markeer betaald</button>
                  <button class="button subtle" type="button" data-action="export" data-id="${invoice.id}">Export PDF</button>
                </td>
              </tr>
            `).join("") : '<tr><td colspan="6" class="muted">Nog geen facturen aanwezig.</td></tr>'}
          </tbody>
        </table>
      </div>

      <article class="werkbon-form-card">
        <h3>Factuur detail</h3>
        ${selected ? `
          <div class="werkbon-detail-grid">
            <p><strong>Factuurnummer:</strong> ${selected.factuurnummer}</p>
            <p><strong>Klant:</strong> ${selected.klantnaam}</p>
            <p><strong>Datum:</strong> ${formatDate(selected.datum)}</p>
            <p><strong>Status:</strong> ${selected.status}</p>
            <p><strong>Totaal:</strong> ${formatCurrency(selected.totaalInclBTW)}</p>
            <p><strong>Bron:</strong> ${selected.bronWerkbonId ? "Werkbon" : "Handmatig"}</p>
          </div>
          <div class="werkbon-inline-actions">
            <button class="button subtle" type="button" data-action="set-status" data-id="${selected.id}" data-status="concept">Concept</button>
            <button class="button subtle" type="button" data-action="set-status" data-id="${selected.id}" data-status="verzonden">Verzonden</button>
            <button class="button subtle" type="button" data-action="set-status" data-id="${selected.id}" data-status="te laat">Te laat</button>
            <button class="button" type="button" data-action="set-status" data-id="${selected.id}" data-status="betaald">Betaald</button>
          </div>
        ` : '<p class="muted">Selecteer een factuur uit de lijst.</p>'}
      </article>
    `;
  };

  render();

  section.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || form.dataset.form !== "manual-invoice") {
      return;
    }

    event.preventDefault();
    const formData = new FormData(form);
    const created = store.createManualFactuur({
      klantnaam: formData.get("klantnaam"),
      datum: formData.get("datum"),
      totaalInclBTW: Number(formData.get("totaal") || 0),
      btwPercentage: Number(formData.get("btw") || 21),
    });
    selectedInvoiceId = created.id;
    render();
  });

  section.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest("button[data-action]");
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    const action = String(button.dataset.action ?? "");
    const id = String(button.dataset.id ?? "");

    if (action === "convert" && id) {
      const created = store.convertWerkbonToFactuur(id);
      if (created) {
        selectedInvoiceId = created.id;
      }
      render();
      return;
    }

    if (action === "select" && id) {
      selectedInvoiceId = id;
      render();
      return;
    }

    if (action === "set-status" && id) {
      store.updateFactuurStatus(id, button.dataset.status);
      selectedInvoiceId = id;
      render();
      return;
    }

    if (action === "export" && id) {
      const invoice = store.getState().facturen.find((item) => item.id === id);
      if (invoice) {
        openInvoicePrintView(invoice);
      }
    }
  });

  return section;
}
