function formatCurrency(value) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(Number(value) || 0);
}

export function createOmzetBTWSection({ store } = {}) {
  const section = document.createElement("section");
  section.className = "werkbon-section panel page-animate";

  if (!store) {
    section.innerHTML = '<p class="muted">Omzetoverzicht kan niet geladen worden.</p>';
    return section;
  }

  let range = "this-month";
  let startDate = "";
  let endDate = "";

  const render = () => {
    const overview = store.getOmzetBTWOverview({ range, startDate, endDate });
    const monthlyRows = Object.entries(overview.monthly);
    const weeklyRows = Object.entries(overview.weekly);

    section.innerHTML = `
      <header class="werkbon-section-header">
        <h2>Omzet- en BTW overzicht</h2>
        <p class="muted">Financieel inzicht op basis van betaalde facturen.</p>
      </header>

      <div class="werkbon-toolbar-grid">
        <label>
          Periode
          <select data-action="range">
            <option value="this-month" ${range === "this-month" ? "selected" : ""}>Deze maand</option>
            <option value="last-month" ${range === "last-month" ? "selected" : ""}>Vorige maand</option>
            <option value="custom" ${range === "custom" ? "selected" : ""}>Custom</option>
          </select>
        </label>
        <label>
          Van
          <input type="date" data-action="start" value="${startDate}" ${range === "custom" ? "" : "disabled"} />
        </label>
        <label>
          Tot
          <input type="date" data-action="end" value="${endDate}" ${range === "custom" ? "" : "disabled"} />
        </label>
      </div>

      <div class="werkbon-kpi-grid">
        <article class="werkbon-kpi-card">
          <p>Omzet</p>
          <h3>${formatCurrency(overview.omzet)}</h3>
        </article>
        <article class="werkbon-kpi-card">
          <p>BTW</p>
          <h3>${formatCurrency(overview.btw)}</h3>
        </article>
        <article class="werkbon-kpi-card">
          <p>Aantal facturen</p>
          <h3>${overview.aantalFacturen}</h3>
        </article>
      </div>

      <div class="werkbon-card-grid">
        <article class="werkbon-form-card">
          <h3>BTW breakdown</h3>
          <div class="werkbon-preview-row"><span>21%</span><strong>${formatCurrency(overview.btwBreakdown[21])}</strong></div>
          <div class="werkbon-preview-row"><span>9%</span><strong>${formatCurrency(overview.btwBreakdown[9])}</strong></div>
          <div class="werkbon-preview-row"><span>0%</span><strong>${formatCurrency(overview.btwBreakdown[0])}</strong></div>
        </article>

        <article class="werkbon-form-card">
          <h3>Maandelijks overzicht</h3>
          ${monthlyRows.length ? monthlyRows.map(([key, value]) => `
            <div class="werkbon-preview-row"><span>${key}</span><strong>${formatCurrency(value)}</strong></div>
          `).join("") : '<p class="muted">Geen data in gekozen periode.</p>'}
        </article>

        <article class="werkbon-form-card">
          <h3>Wekelijks overzicht</h3>
          ${weeklyRows.length ? weeklyRows.map(([key, value]) => `
            <div class="werkbon-preview-row"><span>${key}</span><strong>${formatCurrency(value)}</strong></div>
          `).join("") : '<p class="muted">Geen data in gekozen periode.</p>'}
        </article>
      </div>
    `;
  };

  render();

  section.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.matches("[data-action='range']")) {
      range = String(target.value || "this-month");
      render();
      return;
    }

    if (target.matches("[data-action='start']")) {
      startDate = String(target.value || "");
      render();
      return;
    }

    if (target.matches("[data-action='end']")) {
      endDate = String(target.value || "");
      render();
    }
  });

  return section;
}
