export function createWerkbonInstellingenSection({ store } = {}) {
  const section = document.createElement("section");
  section.className = "werkbon-section panel page-animate";

  if (!store) {
    section.innerHTML = '<p class="muted">Instellingen kunnen niet geladen worden.</p>';
    return section;
  }

  let savedMessage = "";

  const render = () => {
    const { settings } = store.getState();

    section.innerHTML = `
      <header class="werkbon-section-header">
        <h2>Instellingen</h2>
        <p class="muted">Deze instellingen gelden globaal voor werkbonnen, facturen en omzet.</p>
      </header>

      <form class="werkbon-form-card" data-form="settings">
        <div class="werkbon-form-grid">
          <label>
            Factuurprefix
            <input type="text" name="invoicePrefix" value="${settings.invoicePrefix}" />
          </label>
          <label>
            Factuurnummer start
            <input type="number" name="invoiceStartNumber" min="1" value="${settings.invoiceStartNumber}" />
          </label>
          <label>
            Default BTW
            <select name="defaultBTW">
              <option value="21" ${String(settings.defaultBTW) === "21" ? "selected" : ""}>21%</option>
              <option value="9" ${String(settings.defaultBTW) === "9" ? "selected" : ""}>9%</option>
              <option value="0" ${String(settings.defaultBTW) === "0" ? "selected" : ""}>0%</option>
            </select>
          </label>
          <label>
            Taal
            <select name="language">
              <option value="NL" ${settings.language === "NL" ? "selected" : ""}>NL</option>
              <option value="EN" ${settings.language === "EN" ? "selected" : ""}>EN</option>
              <option value="TR" ${settings.language === "TR" ? "selected" : ""}>TR</option>
            </select>
          </label>
          <label>
            Bedrijfsnaam
            <input type="text" name="companyName" value="${settings.companyName}" />
          </label>
          <label>
            Adres
            <input type="text" name="address" value="${settings.address}" />
          </label>
          <label>
            KvK nummer
            <input type="text" name="kvkNumber" value="${settings.kvkNumber}" />
          </label>
          <label>
            BTW nummer
            <input type="text" name="btwNumber" value="${settings.btwNumber}" />
          </label>
          <label>
            Arbeidsprijs per uur (optioneel)
            <input type="number" name="hourlyRate" min="0" step="0.01" value="${settings.hourlyRate}" />
          </label>
          <label>
            Betaaltermijn (dagen)
            <input type="number" name="paymentTermDays" min="1" step="1" value="${settings.paymentTermDays}" />
          </label>
        </div>

        <div class="werkbon-inline-actions">
          <label class="button subtle werkbon-file-picker">
            Logo upload
            <input type="file" data-action="logo" accept="image/*" hidden />
          </label>
          <button class="button" type="submit">Instellingen opslaan</button>
        </div>

        ${settings.logoDataUrl ? `<img class="werkbon-logo-preview" src="${settings.logoDataUrl}" alt="Bedrijfslogo preview" />` : ""}
        ${savedMessage ? `<p class="status-text">${savedMessage}</p>` : ""}
      </form>
    `;
  };

  render();

  section.addEventListener("submit", (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || form.dataset.form !== "settings") {
      return;
    }

    event.preventDefault();
    const formData = new FormData(form);
    store.saveSettings({
      invoicePrefix: String(formData.get("invoicePrefix") || "F-").trim(),
      invoiceStartNumber: Number(formData.get("invoiceStartNumber") || 1001),
      defaultBTW: Number(formData.get("defaultBTW") || 21),
      companyName: String(formData.get("companyName") || "").trim(),
      address: String(formData.get("address") || "").trim(),
      kvkNumber: String(formData.get("kvkNumber") || "").trim(),
      btwNumber: String(formData.get("btwNumber") || "").trim(),
      language: String(formData.get("language") || "NL").trim(),
      hourlyRate: Number(formData.get("hourlyRate") || 0),
      paymentTermDays: Number(formData.get("paymentTermDays") || 14),
    });
    savedMessage = "Instellingen opgeslagen";
    render();
  });

  section.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || target.dataset.action !== "logo") {
      return;
    }

    const file = target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      store.saveSettings({ logoDataUrl: String(reader.result || "") });
      savedMessage = "Logo opgeslagen";
      render();
    };
    reader.readAsDataURL(file);
  });

  return section;
}
