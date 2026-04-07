import{e as De,c as Oe}from"./theme-8dp4I_yZ.js";/* empty css                      */import{e as Ke,a as Ve,c as Fe,l as We,z as Re}from"./branding-CmZO3Xcw.js";const ze="https://mkgfckxiusdcnqhethdy.supabase.co",$e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",T=De(ze,$e);function Ie(Z){return String(Z).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function pe(Z,f){return`
    <div class="folder-card" data-folder="${Z.toLowerCase()}">
      <img class="folder-image" src="./folder.png" alt="Folder" loading="lazy" decoding="async">
      <h3 class="folder-name">${Ie(Z)}</h3>
      <p class="folder-description">${Ie(f)}</p>
     
    </div>
  `}function Ue(){return`
    <div class="settings-folders-wrapper">
      <div class="folder-cards-grid">
        ${pe("Dashboard","Naam en domein van je dashboard")}
        ${pe("Website","Kleuren, fonts, tekst en live preview")}
        ${pe("Garage","Factuur structuur en PDF preview")}
        ${pe("Factuur","Factuurnummering en preview")}
        ${pe("Offerte","Offertenummering en preview")}
        ${pe("Betalingen","Mollie, Tikkie, WhatsApp tekst")}
      </div>
    </div>
  `}function Je(){return`
    <div class="settings-folder-page">
      <div class="settings-folder-header">
        <button class="back-button" data-action="back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 12.0039H19" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9999 18.0001C10.9999 18.0001 5.00001 13.581 5 11.9999C4.99999 10.4188 11 6 11 6" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Instellingen</button>
      </div>

      <div class="settings-folder-content single-column">
        <div class="settings-form-column">
          
        </div>
      </div>
    </div>
  `}function Ze(){return`
    <div class="settings-folder-page">
      <div class="settings-folder-header">
        <button class="back-button" data-action="back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 12.0039H19" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9999 18.0001C10.9999 18.0001 5.00001 13.581 5 11.9999C4.99999 10.4188 11 6 11 6" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Instellingen</button>
        <div class="settings-header-actions">
          <button class="button settings-header-save" id="factuurSaveButton" type="button" hidden>Opslaan</button>
        </div>
      </div>

      <div class="settings-folder-content">
        <div class="settings-form-column">
          <section class="settings-section">
            <h2>Factuur</h2>
            <p class="section-description">Kies vanaf welk nummer je wilt verdergaan met factureren.</p>

            <div class="form-field">
              <label for="invoicePrefixInput">Prefix</label>
              <input type="text" id="invoicePrefixInput" placeholder="2026-" />
              <p class="field-help">Bijv. 2026-, F-, INV-</p>
            </div>

            <div class="form-field">
              <label for="invoiceCounterInput">Volgend nummer</label>
              <input type="number" id="invoiceCounterInput" min="1" placeholder="001" />
              <p class="field-help">Het eerstvolgende factuurnummer dat wordt gebruikt</p>
            </div>
          </section>

          <section class="settings-section">
            <h2>Bedrijfs- en Juridische Gegevens</h2>
            <p class="section-description">Alles in 1 box: bedrijfsnaam, adres en juridische velden voor je factuur.</p>

            <div class="form-field">
              <label for="factuurCompanyName">Naam van bedrijf</label>
              <input type="text" id="factuurCompanyName" placeholder="Bijv. Garage De Vries">
            </div>

            <div class="form-field">
              <label for="factuurCompanyAddress">Adres van bedrijf</label>
              <input type="text" id="factuurCompanyAddress" placeholder="Straatnaam">
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-field">
                <label for="factuurCompanyNumber">Nummer</label>
                <input type="text" id="factuurCompanyNumber" placeholder="Bijv. 12A">
              </div>
              <div class="form-field">
                <label for="factuurCompanyPostcode">Postcode</label>
                <input type="text" id="factuurCompanyPostcode" placeholder="Bijv. 1234 AB">
              </div>
            </div>

            <div class="form-field">
              <label for="factuurBtwNumber">BTW nummer</label>
              <input type="text" id="factuurBtwNumber" placeholder="NL123456789">
            </div>

            <div class="form-field">
              <label for="factuurKvkNumber">KVK nummer</label>
              <input type="text" id="factuurKvkNumber" placeholder="12345678">
            </div>

            <div class="form-field">
              <label for="factuurIbanNumber">IBAN</label>
              <input type="text" id="factuurIbanNumber" placeholder="NL91 ABNA 0417 1643 00">
            </div>

            <label class="toggle-label">
              <input type="checkbox" id="factuurHasBTW" checked>
              <span>BTW berekenen (21%)</span>
            </label>
          </section>

          <section class="settings-section">
            <h2>PDF Stijl</h2>
            <p class="section-description">Pas het uiterlijk van je factuur PDF aan</p>

            <div class="form-field">
              <label>Header kleur</label>
              <div class="color-picker-group">
                <div class="color-swatch" id="factuurPdfColorSwatch"></div>
                <input type="color" id="factuurPdfPrimaryColor" value="#2563EB" class="color-input">
              </div>
            </div>

            <div class="form-field">
              <label>Header stijl</label>
              <div class="font-cards">
                <button class="font-card" type="button" data-factuur-style="professional"><span>Professioneel</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-factuur-style="modern"><span>Modern</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-factuur-style="minimal"><span>Minimaal</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-factuur-style="boxed"><span>Boxed</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-factuur-style="split"><span>Split</span><span class="checkmark">✓</span></button>
              </div>
            </div>

            <div class="form-field">
              <label>Lettertype</label>
              <div class="font-cards">
                <button class="font-card" type="button" data-factuur-font="helvetica"><span>Helvetica</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-factuur-font="arial"><span>Arial</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-factuur-font="times"><span>Times</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-factuur-font="georgia"><span>Georgia</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-factuur-font="courier"><span>Courier</span><span class="checkmark">✓</span></button>
              </div>
            </div>

            <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
              <label class="toggle-label"><input type="checkbox" id="factuurPdfShowBtw" checked><span>BTW tonen</span></label>
              <label class="toggle-label"><input type="checkbox" id="factuurPdfShowIban" checked><span>IBAN tonen</span></label>
              <label class="toggle-label"><input type="checkbox" id="factuurPdfShowKvk" checked><span>KVK tonen</span></label>
              <label class="toggle-label"><input type="checkbox" id="factuurPdfShowCustomer" checked><span>Klant tonen</span></label>
              <label class="toggle-label"><input type="checkbox" id="factuurPdfShowVehicle" checked><span>Voertuig tonen</span></label>
            </div>

            <div class="form-field" style="margin-top: 1rem;">
              <label for="factuurPdfPaymentInstruction">Betaalinstructie</label>
              <textarea id="factuurPdfPaymentInstruction" rows="2" placeholder="Bijv. Gelieve binnen 14 dagen over te maken onder vermelding van het factuurnummer."></textarea>
            </div>

            <div class="form-field" style="margin-top: 1rem;">
              <label for="factuurPdfFooterText">Voettekst</label>
              <input type="text" id="factuurPdfFooterText" placeholder="Bijv. Bedankt voor uw vertrouwen!">
            </div>
          </section>
        </div>

        <div class="settings-preview-column">
          <div class="preview-sticky">
            <h3>Factuur Preview</h3>
            <div class="document-folder-preview">
              <span class="document-folder-preview-label">Volgend nummer</span>
              <strong id="invoiceSeriesPreview">2026-001</strong>
              <p id="invoiceSeriesPreviewText">Volgende factuur wordt: 2026-001</p>
              <div id="invoiceNumberWarning" class="invoice-preview" style="display:none; border-color:#f59e0b; color:#92400e; background:#fffbeb;">⚠️ Let op: er bestaan al facturen met een hoger nummer. Dit kan leiden tot dubbele factuurnummers.</div>
            </div>

            <div class="pdf-preview">
              <div class="pdf-header" id="factuurPdfPreviewHeader">
                <div class="pdf-header-left">
                  <strong id="factuurPdfPreviewTitle">FACTUUR</strong>
                  <div id="factuurPdfBusinessName">Garage De Vries</div>
                  <div id="factuurPdfGarageAddr">Adres</div>
                  <div id="factuurPdfBtwRow">BTW: <span id="factuurPdfBTW">NL123456789</span></div>
                  <div id="factuurPdfKvkRow">KVK: <span id="factuurPdfKVK">12345678</span></div>
                </div>
                <div class="pdf-header-right">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div>Factuurnummer: <span id="factuurPdfInvoiceNum">2026-001</span></div>
                  <div>Factuurdatum: <span id="factuurPdfDate">2 apr 2026</span></div>
                </div>
              </div>

              <div class="pdf-section" id="factuurPdfMetaSection">
                <div class="pdf-meta-grid" id="factuurPdfMetaGrid">
                  <div id="factuurPdfCustomerBlock">
                    <strong>Klant</strong>
                    <div>John Doe</div>
                    <div>E-mail: klant@email.nl</div>
                    <div>Telefoon: +31 6 1234 5678</div>
                  </div>
                  <div id="factuurPdfVehicleBlock">
                    <strong>Voertuig</strong>
                    <div>Peugeot 208</div>
                    <div>Kenteken: SN-80-2V</div>
                    <div>Kilometerstand: 182340</div>
                  </div>
                </div>
              </div>

              <table class="pdf-table">
                <tr>
                  <th>Omschrijving</th>
                  <th>Aantal</th>
                  <th>Prijs</th>
                  <th>Totaal</th>
                </tr>
                <tr>
                  <td>Bulb replacement</td>
                  <td>2</td>
                  <td>€8,50</td>
                  <td>€17,00</td>
                </tr>
              </table>

              <div class="pdf-totals">
                <div>Subtotaal: <strong>€63,80</strong></div>
                <div>BTW 21%: <strong>€13,40</strong></div>
                <div style="font-weight: bold; font-size: 1.1em;">TOTAAL: <strong>€77,20</strong></div>
              </div>

              <div id="factuurPdfIbanRow" style="margin-top: 0.6rem;">IBAN: <span id="factuurPdfIBAN">NL91 ABNA 0417 1643 00</span></div>
              <div id="factuurPdfPaymentInstructionPreview" style="margin-top: 0.6rem; color: #374151; text-align: left;">Betaalinstructie: Gelieve binnen 14 dagen over te maken onder vermelding van het factuurnummer.</div>
              <div id="factuurPdfFooterPreview" style="color: #666; text-align: left; display: none;"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="auto-save-indicator" id="autoSaveIndicator">✓ Opgeslagen</div>
    </div>
  `}function Ye(){return`
    <div class="settings-folder-page">
      <div class="settings-folder-header">
        <button class="back-button" data-action="back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 12.0039H19" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9999 18.0001C10.9999 18.0001 5.00001 13.581 5 11.9999C4.99999 10.4188 11 6 11 6" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Instellingen</button>
        <div class="settings-header-actions">
          <button class="button settings-header-save" id="offerteSaveButton" type="button" hidden>Opslaan</button>
        </div>
      </div>

      <div class="settings-folder-content">
        <div class="settings-form-column">
          <section class="settings-section">
            <h2>Offerte</h2>
            <p class="section-description">Gebruik een aparte reeks voor offertes.</p>

            <div class="form-field">
              <label for="quotePrefixInput">Offerteprefix</label>
              <input type="text" id="quotePrefixInput" placeholder="OFF-" />
            </div>

            <div class="form-field">
              <label for="quoteCounterInput">Volgend offertenummer</label>
              <input type="number" id="quoteCounterInput" min="1" placeholder="001" />
            </div>
          </section>

          <section class="settings-section">
            <h2>Bedrijfs- en Juridische Gegevens</h2>
            <p class="section-description">Gegevens die op je offerte komen te staan.</p>

            <div class="form-field">
              <label for="offerteCompanyName">Naam van bedrijf</label>
              <input type="text" id="offerteCompanyName" placeholder="Bijv. Garage De Vries">
            </div>

            <div class="form-field">
              <label for="offerteCompanyAddress">Adres van bedrijf</label>
              <input type="text" id="offerteCompanyAddress" placeholder="Straatnaam">
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-field">
                <label for="offerteCompanyNumber">Nummer</label>
                <input type="text" id="offerteCompanyNumber" placeholder="Bijv. 12A">
              </div>
              <div class="form-field">
                <label for="offerteCompanyPostcode">Postcode</label>
                <input type="text" id="offerteCompanyPostcode" placeholder="Bijv. 1234 AB">
              </div>
            </div>

            <div class="form-field">
              <label for="offerteBtwNumber">BTW nummer</label>
              <input type="text" id="offerteBtwNumber" placeholder="NL123456789">
            </div>

            <div class="form-field">
              <label for="offerteKvkNumber">KVK nummer</label>
              <input type="text" id="offerteKvkNumber" placeholder="12345678">
            </div>

            <div class="form-field">
              <label for="offerteIbanNumber">IBAN</label>
              <input type="text" id="offerteIbanNumber" placeholder="NL91 ABNA 0417 1643 00">
            </div>

            <label class="toggle-label">
              <input type="checkbox" id="offerteHasBTW" checked>
              <span>BTW berekenen (21%)</span>
            </label>
          </section>

          <section class="settings-section">
            <h2>PDF Stijl</h2>
            <p class="section-description">Offerte heeft een eigen layout en eigen stijlkeuzes.</p>

            <div class="offerte-modern-panel">
              <div class="form-field">
                <label>Offerte layout</label>
                <div class="modern-choice-grid modern-choice-grid--triple">
                  <button class="font-card modern-choice" type="button" data-offerte-layout="proposal"><span>Voorstel</span><span class="checkmark">✓</span></button>
                  <button class="font-card modern-choice" type="button" data-offerte-layout="compact"><span>Compact</span><span class="checkmark">✓</span></button>
                  <button class="font-card modern-choice" type="button" data-offerte-layout="classic"><span>Klassiek</span><span class="checkmark">✓</span></button>
                </div>
              </div>

              <div class="form-field">
                <label>Header kleur</label>
                <div class="color-picker-group">
                  <div class="color-swatch" id="offertePdfColorSwatch"></div>
                  <input type="color" id="offertePdfPrimaryColor" value="#16A34A" class="color-input">
                </div>
              </div>

              <div class="form-field">
                <label>Header stijl</label>
                <div class="modern-choice-grid">
                  <button class="font-card modern-choice" type="button" data-offerte-style="professional"><span>Professioneel</span><span class="checkmark">✓</span></button>
                  <button class="font-card modern-choice" type="button" data-offerte-style="modern"><span>Modern</span><span class="checkmark">✓</span></button>
                  <button class="font-card modern-choice" type="button" data-offerte-style="minimal"><span>Minimaal</span><span class="checkmark">✓</span></button>
                  <button class="font-card modern-choice" type="button" data-offerte-style="boxed"><span>Boxed</span><span class="checkmark">✓</span></button>
                  <button class="font-card modern-choice" type="button" data-offerte-style="split"><span>Split</span><span class="checkmark">✓</span></button>
                </div>
              </div>

              <div class="form-field">
                <label>Lettertype</label>
                <div class="modern-choice-grid">
                  <button class="font-card modern-choice" type="button" data-offerte-font="helvetica"><span>Helvetica</span><span class="checkmark">✓</span></button>
                  <button class="font-card modern-choice" type="button" data-offerte-font="arial"><span>Arial</span><span class="checkmark">✓</span></button>
                  <button class="font-card modern-choice" type="button" data-offerte-font="times"><span>Times</span><span class="checkmark">✓</span></button>
                  <button class="font-card modern-choice" type="button" data-offerte-font="georgia"><span>Georgia</span><span class="checkmark">✓</span></button>
                  <button class="font-card modern-choice" type="button" data-offerte-font="courier"><span>Courier</span><span class="checkmark">✓</span></button>
                </div>
              </div>

              <div class="offerte-toggle-grid">
                <label class="toggle-label"><input type="checkbox" id="offertePdfShowBtw" checked><span>BTW tonen</span></label>
                <label class="toggle-label"><input type="checkbox" id="offertePdfShowIban"><span>IBAN tonen</span></label>
                <label class="toggle-label"><input type="checkbox" id="offertePdfShowKvk" checked><span>KVK tonen</span></label>
                <label class="toggle-label"><input type="checkbox" id="offertePdfShowCustomer" checked><span>Klant tonen</span></label>
                <label class="toggle-label"><input type="checkbox" id="offertePdfShowVehicle" checked><span>Voertuig tonen</span></label>
              </div>

              <div class="form-field" style="margin-top: 1rem;">
                <label for="offertePdfFooterText">Voettekst</label>
                <input type="text" id="offertePdfFooterText" placeholder="Bijv. Offerte is 14 dagen geldig.">
              </div>
            </div>
          </section>
        </div>

        <div class="settings-preview-column">
          <div class="preview-sticky">
            <h3>Offerte Preview</h3>
            <div class="document-folder-preview">
              <span class="document-folder-preview-label">Volgend nummer</span>
              <strong id="quoteSeriesPreview">OFF-001</strong>
              <p id="quoteSeriesPreviewText">Volgende offerte wordt: OFF-001</p>
            </div>

            <div class="pdf-preview offerte-preview" id="offertePdfPreviewCard">
              <div class="pdf-header" id="offertePdfPreviewHeader">
                <div class="pdf-header-left">
                  <strong id="offertePdfPreviewTitle">OFFERTE</strong>
                  <div id="offertePdfBusinessName">Garage De Vries</div>
                  <div id="offertePdfGarageAddr">Adres</div>
                  <div id="offertePdfBtwRow">BTW: <span id="offertePdfBTW">NL123456789</span></div>
                  <div id="offertePdfKvkRow">KVK: <span id="offertePdfKVK">12345678</span></div>
                </div>
                <div class="pdf-header-right">
                  <div></div>
                  <div></div>
                  <div>Geldig t/m: 16 apr 2026</div>
                  <div>Offertenummer: <span id="offertePdfInvoiceNum">OFF-001</span></div>
                  <div>Offertedatum: <span id="offertePdfDate">2 apr 2026</span></div>
                </div>
              </div>

              <div class="pdf-section" id="offertePdfMetaSection">
                <div class="pdf-meta-grid" id="offertePdfMetaGrid">
                  <div id="offertePdfCustomerBlock">
                    <strong>Klant</strong>
                    <div>John Doe</div>
                    <div>E-mail: klant@email.nl</div>
                    <div>Telefoon: +31 6 1234 5678</div>
                  </div>
                  <div id="offertePdfVehicleBlock">
                    <strong>Voertuig</strong>
                    <div>Peugeot 208</div>
                    <div>Kenteken: SN-80-2V</div>
                    <div>Kilometerstand: 182340</div>
                  </div>
                </div>
              </div>

              <table class="pdf-table">
                <tr>
                  <th>Omschrijving</th>
                  <th>Aantal</th>
                  <th>Prijs</th>
                  <th>Totaal</th>
                </tr>
                <tr>
                  <td>Bulb replacement</td>
                  <td>2</td>
                  <td>€8,50</td>
                  <td>€17,00</td>
                </tr>
              </table>

              <div class="pdf-totals">
                <div>Subtotaal: <strong>€63,80</strong></div>
                <div>BTW 21%: <strong>€13,40</strong></div>
                <div style="font-weight: bold; font-size: 1.1em;">TOTAAL: <strong>€77,20</strong></div>
              </div>

              <div id="offertePdfIbanRow" style="margin-top: 0.6rem; display: none;">IBAN: <span id="offertePdfIBAN">NL91 ABNA 0417 1643 00</span></div>
              <div id="offertePdfFooterPreview" style="color: #666; text-align: left; display: none;"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="auto-save-indicator" id="autoSaveIndicator">✓ Opgeslagen</div>
    </div>
  `}function Xe(){return`
    <div class="settings-folder-page">
      <div class="settings-folder-header">
        <button class="back-button" data-action="back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 12.0039H19" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9999 18.0001C10.9999 18.0001 5.00001 13.581 5 11.9999C4.99999 10.4188 11 6 11 6" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Instellingen</button>
        
        <div class="settings-header-actions">
          <button class="button settings-header-save" id="dashboardSaveButton" type="button" hidden>Opslaan</button>
        </div>
      </div>

      <div class="settings-folder-content">
        <div class="settings-form-column">
          <section class="settings-section">
            <h2>Dashboard instellingen</h2>
            <p class="section-description">Pas de naam en URL aan die worden gebruikt in je dashboard en sidebar.</p>

            <div class="form-field">
              <label for="dashboardName">Naam</label>
              <input type="text" id="dashboardName" placeholder="Bijvoorbeeld: SAS Website">
              <p class="field-help">Wordt opgeslagen in de kolom <strong>name</strong> van public.garages en getoond als sidebar titel.</p>
            </div>

            <div class="form-field">
              <label for="dashboardDomain">URL / domein</label>
              <input type="text" id="dashboardDomain" placeholder="voorbeeld.nl of https://voorbeeld.nl">
              <p class="field-help">Wordt opgeslagen in de kolom <strong>domain</strong> van public.garages.</p>
            </div>
          </section>
        </div>

        <div class="settings-preview-column">
          <div class="preview-sticky">
            <h3>Live Preview</h3>
            <div class="dashboard-preview-card">
              <div class="dashboard-preview-brand">
                <div class="dashboard-preview-mark" id="dashboardPreviewMark">S</div>
                <div class="dashboard-preview-brand-copy">
                  <strong id="dashboardPreviewName">SAS Website</strong>
                  <span id="dashboardPreviewDomain">https://voorbeeld.nl</span>
                </div>
              </div>
              <div class="dashboard-preview-note">
                Dit is hoe de naam en URL in het dashboard worden gebruikt.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="auto-save-indicator" id="autoSaveIndicator">✓ Opgeslagen</div>
    </div>
  `}function Qe(){return`
    <div class="settings-folder-page">
      <div class="settings-folder-header">
        <button class="back-button" data-action="back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 12.0039H19" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9999 18.0001C10.9999 18.0001 5.00001 13.581 5 11.9999C4.99999 10.4188 11 6 11 6" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Instellingen</button>
        <div class="settings-header-actions">
          <button class="button settings-header-save" id="websiteSaveButton" type="button" hidden>Opslaan</button>
        </div>
      </div>

      <div class="settings-folder-content">
        <div class="settings-form-column">
          <!-- KLEUREN SECTION -->
          <section class="settings-section">
            <h2>Kleuren</h2>
            <p class="section-description">Primaire kleur voor je website</p>
            
            <div class="color-picker-group">
              <div class="color-swatch" id="colorSwatch"></div>
              <input type="color" id="primaryColor" value="#2563EB" class="color-input">
            </div>

            <div class="color-presets">
              <label>Snelle selectie:</label>
              <div class="preset-pills">
                <button class="preset-pill" data-color="#2563EB" style="background: #2563EB;"></button>
                <button class="preset-pill" data-color="#16A34A" style="background: #16A34A;"></button>
                <button class="preset-pill" data-color="#DC2626" style="background: #DC2626;"></button>
                <button class="preset-pill" data-color="#D97706" style="background: #D97706;"></button>
                <button class="preset-pill" data-color="#7C3AED" style="background: #7C3AED;"></button>
                <button class="preset-pill" data-color="#0891B2" style="background: #0891B2;"></button>
                <button class="preset-pill" data-color="#DB2777" style="background: #DB2777;"></button>
                <button class="preset-pill" data-color="#0F172A" style="background: #0F172A;"></button>
              </div>
            </div>
          </section>

          <!-- LETTERTYPE SECTION -->
          <section class="settings-section">
            <h2>Lettertype</h2>
            <p class="section-description">Kies je favoriete font</p>
            
            <div class="font-cards">
              <button class="font-card selected" data-font="Inter" style="font-family: Inter;">
                <span>Inter</span>
                <span class="checkmark">✓</span>
              </button>
              <button class="font-card" data-font="Roboto" style="font-family: Roboto;">
                <span>Roboto</span>
                <span class="checkmark">✓</span>
              </button>
              <button class="font-card" data-font="Poppins" style="font-family: Poppins;">
                  <div class="pdf-section">
                    <strong>Klant</strong>
                    <div>John Doe</div>
                    <div>Kenteken: SN-80-2V</div>
                  </div>
                  <table class="pdf-table">
                    <tr>
                      <th>Omschrijving</th>
                      <th>Aantal</th>
                      <th>Prijs</th>
                      <th>Totaal</th>
                    </tr>
                    <tr>
                      <td>Bulb replacement</td>
                      <td>2</td>
                      <td>€8,50</td>
                      <td>€17,00</td>
                    </tr>
                  </table>
                  <div class="pdf-totals">
                    <div>Subtotaal: <strong>€63,80</strong></div>
                    <div>BTW 21%: <strong>€13,40</strong></div>
                    <div style="font-weight: bold; font-size: 1.1em;">TOTAAL: <strong>€77,20</strong></div>
                  </div>
              <label for="heroSubtitle">Hero subtitel</label>
              <div class="input-with-counter">
                <input type="text" id="heroSubtitle" placeholder="Korte beschrijving" maxlength="100">
                <span class="char-counter"><span class="current">0</span>/100</span>
              </div>
            </div>

            <div class="form-field">
              <label for="aboutText">Over ons</label>
              <div class="input-with-counter">
                <textarea id="aboutText" placeholder="Vertel iets over je garage" maxlength="500" rows="4"></textarea>
                <span class="char-counter"><span class="current">0</span>/500</span>
              </div>
            </div>
          </section>
        </div>

        <div class="settings-preview-column">
          <div class="preview-sticky">
            <h3>Live Preview</h3>
            <div class="website-preview">
              <div class="preview-navbar">
                <div class="preview-logo">Logo</div>
                <div class="preview-nav-links">
                  <a href="#">Home</a>
                  <a href="#">Diensten</a>
                  <a href="#">Contact</a>
                </div>
                <button class="preview-cta">Afspraak maken</button>
              </div>
              <div class="preview-hero">
                <h1 id="previewHeroTitle">Uw garage titel</h1>
                <p id="previewHeroSubtitle">Korte beschrijving</p>
                <button class="preview-cta-btn">Afspraak maken</button>
              </div>
              <div class="preview-footer">
                <p>© Uw garage</p>
              </div>
            </div>
            
            <div class="preview-toggles">
              <button class="toggle-btn active" data-view="desktop">🖥️ Desktop</button>
              <button class="toggle-btn" data-view="mobile">📱 Mobiel</button>
            </div>
            
            <button class="button" style="width: 100%; margin-top: 1rem;">Preview openen ↗</button>
          </div>
        </div>
      </div>

      <div class="auto-save-indicator" id="autoSaveIndicator">✓ Opgeslagen</div>
    </div>
  `}function et(){return`
    <div class="settings-folder-page">
      <div class="settings-folder-header">
        <button class="back-button" data-action="back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 12.0039H19" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9999 18.0001C10.9999 18.0001 5.00001 13.581 5 11.9999C4.99999 10.4188 11 6 11 6" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Instellingen</button>
        <div class="settings-header-actions">
          <button class="button settings-header-save" id="paymentsSaveButton" type="button" hidden>Opslaan</button>
        </div>
      </div>

      <div class="settings-folder-content single-column">
        <div class="settings-form-column">
          <!-- BETAALMETHODE SELECTIE -->
          <section class="settings-section">
            <h2>Betaalmethode kiezen</h2>
            <p class="section-description">Welke methode gebruik je voor betaallinks?</p>
            
            <div class="payment-method-cards">
              <button class="payment-card selected" data-method="mollie">
                <div class="payment-card-header">
                  <span class="payment-icon">🏦</span>
                  <strong>Mollie iDEAL</strong>
                </div>
                <p>De meest gebruikte betaalmethode in Nederland. €0,29 per transactie.</p>
              </button>
              
              <button class="payment-card" data-method="tikkie">
                <div class="payment-card-header">
                  <span class="payment-icon">📱</span>
                  <strong>Tikkie</strong>
                </div>
                <p>Gratis betaalverzoeken via ABN AMRO app. Populair bij ZZP'ers.</p>
              </button>
            </div>
          </section>

          <!-- MOLLIE SETTINGS (initially visible) -->
          <section class="settings-section payment-settings" data-method="mollie">
            <h2>Mollie API Instellingen</h2>
            
            <div class="form-field">
              <label for="mollieApiKey">Mollie API Key</label>
              <p class="field-help">Vind je key op mollie.com/dashboard/developers/api-keys</p>
              <div class="password-input-group">
                <input type="password" id="mollieApiKey" placeholder="live_xxxxxxxxxxxxxxxxxxxxxx" data-type="text">
                <button class="show-password-btn" type="button">👁️</button>
              </div>
            </div>

            <label class="toggle-label">
              <input type="checkbox" id="testMode">
              <span>Testmodus</span>
            </label>
            <div class="test-mode-banner" hidden>
              ⚠️ Testmodus actief. Betalingen worden niet echt verwerkt.
            </div>

            <button class="button" type="button" id="connectMollie">Verbind Mollie</button>
            <p class="field-help" id="mollieConnectionStatus"></p>
          </section>

          <!-- TIKKIE SETTINGS (hidden by default) -->
          <section class="settings-section payment-settings" data-method="tikkie" hidden>
            <h2>Tikkie API Instellingen</h2>
            
            <div class="form-field">
              <label for="tikkieApiKey">Tikkie API Key</label>
              <p class="field-help">Vind je key in de Tikkie Business portal</p>
              <div class="password-input-group">
                <input type="password" id="tikkieApiKey" placeholder="tikkie_xxxxxxxxxxxxxxxxxx" data-type="text">
                <button class="show-password-btn" type="button">👁️</button>
              </div>
            </div>

            <button class="button" type="button">Verbind Tikkie</button>
          </section>

          <!-- AUTO-GENERATE TOGGLE -->
          <section class="settings-section">
            <label class="toggle-card">
              <input type="checkbox" id="autoGenerate" checked>
              <div class="toggle-card-content">
                <strong>Automatisch betaallink genereren</strong>
                <p>Wanneer je op 'Stuur via WhatsApp' klikt wordt automatisch een betaallink aangemaakt. Zet uit om handmatig te doen.</p>
              </div>
            </label>
          </section>

          <!-- WHATSAPP TEMPLATE -->
          <section class="settings-section">
            <h2>WhatsApp Berichttemplate</h2>
            <p class="section-description">Dit bericht wordt gestuurd wanneer je op 'Stuur via WhatsApp' klikt</p>
            
            <div class="form-field">
              <label for="whatsappTemplate">Template</label>
              <textarea id="whatsappTemplate" rows="8" placeholder="Bericht template">Beste {{klant_naam}},

Hierbij uw factuur van {{garage_naam}}.

Factuurnummer: {{factuur_nummer}}
Totaalbedrag: {{totaal_bedrag}}

Betaal eenvoudig via {{betaal_methode}}:
{{betaal_link}}

Met vriendelijke groet,
{{garage_naam}}</textarea>
            </div>

            <div class="variables-helper">
              <label>Beschikbare variabelen — klik om in te voegen:</label>
              <div class="variable-chips">
                <button type="button" class="var-chip" data-var="{{klant_naam}}">{{klant_naam}}</button>
                <button type="button" class="var-chip" data-var="{{garage_naam}}">{{garage_naam}}</button>
                <button type="button" class="var-chip" data-var="{{factuur_nummer}}">{{factuur_nummer}}</button>
                <button type="button" class="var-chip" data-var="{{totaal_bedrag}}">{{totaal_bedrag}}</button>
                <button type="button" class="var-chip" data-var="{{betaaltermijn}}">{{betaaltermijn}}</button>
                <button type="button" class="var-chip" data-var="{{betaal_link}}">{{betaal_link}}</button>
                <button type="button" class="var-chip" data-var="{{betaal_methode}}">{{betaal_methode}}</button>
                <button type="button" class="var-chip" data-var="{{datum}}">{{datum}}</button>
              </div>
            </div>

            <div class="message-preview">
              <label>Voorbeeld bericht:</label>
              <div class="preview-box" id="messagePreview"></div>
            </div>

            <div style="display: flex; gap: 0.75rem;">
              <button class="button secondary" type="button" id="resetTemplate">Herstel standaard tekst</button>
            </div>
          </section>

          <!-- PAYMENT HISTORY -->
          <section class="settings-section">
            <h2>Recente betalingen</h2>
            
            <table class="payments-table">
              <tr>
                <th>Datum</th>
                <th>Klant</th>
                <th>Bedrag</th>
                <th>Methode</th>
              </tr>
              <tr>
                <td>21 mrt 2026</td>
                <td>Sarah Bakker</td>
                <td>€546,43</td>
                <td><span class="payment-status">✓ iDEAL</span></td>
              </tr>
              <tr>
                <td>23 mrt 2026</td>
                <td>Mehmet Kaya</td>
                <td>€204,58</td>
                <td><span class="payment-status">✓ Contant</span></td>
              </tr>
            </table>
            
            <a href="#" class="panel-link">Alle betalingen bekijken →</a>
          </section>
        </div>
      </div>

      <div class="auto-save-indicator" id="autoSaveIndicator">✓ Opgeslagen</div>
    </div>
  `}async function tt(Z){var qe,Pe,Le;if(!Z)return;const f=await Ke();if(!f)return;if(!f.isAdmin&&!f.activeGarage){Z.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is not mapped to a garage.</p>
      </section>
    `;return}Ve(f.activeGarage);const{shell:be,contentArea:e}=Fe({activePage:"settings",title:"Instellingen",headerNote:"",userEmail:f.user.email,onLogout:We,garage:f.activeGarage,isAdmin:f.isAdmin});Z.replaceChildren(be);let F="overview",l={},Y={},k={};const le={dashboard:!1,website:!1,garage:!1,factuur:!1,offerte:!1,betalingen:!1},ve=(t,n)=>{le[t]=!!n},he=()=>Object.values(le).some(Boolean),ke=()=>new Promise(t=>{const n=document.querySelector(".confirm-dialog-overlay");n&&n.remove();const c=document.createElement("div");c.innerHTML=`
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title" id="confirm-title">Niet-opgeslagen wijzigingen</h2>
            <p id="confirm-desc">Je hebt wijzigingen gemaakt zonder op Opslaan te klikken. Weet je zeker dat je deze pagina wilt verlaten?</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button" type="button" data-confirm-action="cancel">Blijven</button>
            <button class="button danger" type="button" data-confirm-action="continue">Verlaten</button>
          </div>
        </div>
      </div>
    `;const m=c.firstElementChild;if(!m){t(!1);return}const a=i=>{m.remove(),t(i)};m.addEventListener("click",i=>{const S=i.target;if(!(S instanceof Element))return;if(S===m){a(!1);return}const s=S.closest("[data-confirm-action]");s&&a(s.getAttribute("data-confirm-action")==="continue")}),document.body.append(m)}),_e=t=>String(t??"").trim(),ge=t=>{const n=_e(t);return n?/^https?:\/\//i.test(n)?n:`https://${n}`:"https://voorbeeld.nl"},ye=()=>{const t=be.querySelector(".brand-text");t&&(t.textContent=l.name||"Garage");const n=be.querySelector(".topbar-domain-inner-left-side a");n&&(n.textContent=ge(l.domain),n.href=ge(l.domain))};if(T&&((qe=f.activeGarage)!=null&&qe.id))try{const{data:t}=await T.from("garages").select("*").eq("id",f.activeGarage.id).maybeSingle();t&&(l=t,l.language&&Re(String(l.language)))}catch(t){console.error("Failed to load garage data:",t)}if(T&&((Pe=f.activeGarage)!=null&&Pe.id))try{const{data:t}=await T.from("garage_settings").select("*").eq("garage_id",f.activeGarage.id).maybeSingle();t&&(Y=t)}catch(t){console.error("Failed to load website settings:",t)}if(T&&((Le=f.activeGarage)!=null&&Le.id))try{const{data:t}=await T.from("garage_pdf_settings").select("*").eq("garage_id",f.activeGarage.id).maybeSingle();t&&(k=t)}catch(t){console.error("Failed to load pdf settings:",t)}const ce=()=>{const t=e.querySelector("#autoSaveIndicator");t&&(t.classList.add("visible"),setTimeout(()=>{t.classList.remove("visible")},2e3))},we=()=>{F==="overview"?e.innerHTML=Ue():F==="dashboard"?(e.innerHTML=Xe(),Ae()):F==="website"?(e.innerHTML=Qe(),Me()):F==="garage"?e.innerHTML=Je():F==="factuur"?(e.innerHTML=Ze(),Ne()):F==="offerte"?(e.innerHTML=Ye(),He()):F==="betalingen"&&(e.innerHTML=et(),je()),Te()},X=async t=>{if(!he()){F=t,we();return}await ke()&&(Object.keys(le).forEach(c=>{le[c]=!1}),F=t,we())},Te=()=>{const t=e.querySelector(".back-button");t&&t.addEventListener("click",async()=>{await X("overview")}),e.querySelectorAll(".folder-card").forEach(m=>{m.addEventListener("click",async()=>{const a=m.dataset.folder;a==="dashboard"?await X("dashboard"):a==="website"?await X("website"):a==="garage"?await X("garage"):a==="factuur"?await X("factuur"):a==="offerte"?await X("offerte"):a==="betalingen"&&await X("betalingen")})}),e.querySelectorAll("[data-target-folder]").forEach(m=>{m.addEventListener("click",async()=>{const a=m.getAttribute("data-target-folder")||"overview";await X(a)})})},Be=t=>{he()&&(t.preventDefault(),t.returnValue="")};window.addEventListener("beforeunload",Be),be.addEventListener("click",async t=>{const n=t.target;if(!(n instanceof Element))return;const c=n.closest("a[href]");if(!(c instanceof HTMLAnchorElement))return;const m=c.getAttribute("href")||"";!m||m.startsWith("#")||c.target==="_blank"||!he()||(t.preventDefault(),!await ke())||(Object.keys(le).forEach(i=>{le[i]=!1}),window.location.assign(c.href))});const Ae=()=>{const t=e.querySelector("#dashboardName"),n=e.querySelector("#dashboardDomain"),c=e.querySelector("#dashboardSaveButton"),m=e.querySelector("#dashboardPreviewName"),a=e.querySelector("#dashboardPreviewDomain"),i=e.querySelector("#dashboardPreviewMark");if(!(t instanceof HTMLInputElement)||!(n instanceof HTMLInputElement))return;let S=!1;const s=()=>{const b=t.value.trim()||"SAS Website",x=ge(n.value);m&&(m.textContent=b),a&&(a.textContent=x),i&&(i.textContent=(b[0]||"S").toUpperCase())},d=b=>{S=b,ve("dashboard",b),c instanceof HTMLButtonElement&&(c.hidden=!S,c.disabled=!1,c.textContent="Opslaan")};t.value=l.name||"",n.value=l.domain||"",s(),t.addEventListener("input",()=>{s(),d(!0)}),n.addEventListener("input",()=>{s(),d(!0)}),c==null||c.addEventListener("click",async()=>{var x;if(!T||!((x=f.activeGarage)!=null&&x.id))return;const b={name:t.value.trim()||"Garage",domain:_e(n.value)};c.disabled=!0,c.textContent="Opslaan...";try{const{error:B}=await T.from("garages").update(b).eq("id",f.activeGarage.id);if(B)throw B;l={...l,...b},f.activeGarage&&(f.activeGarage.name=b.name,f.activeGarage.domain=b.domain),ye(),ce(),d(!1)}catch(B){console.error("Dashboard save failed:",B),c.disabled=!1,c.textContent="Opslaan"}})},Me=()=>{const t=e.querySelector("#primaryColor"),n=e.querySelector("#colorSwatch"),c=e.querySelector("#heroTitle"),m=e.querySelector("#heroSubtitle"),a=e.querySelector("#aboutText"),i=e.querySelectorAll(".font-card"),S=e.querySelectorAll(".preset-pill"),s=e.querySelector("#websiteSaveButton"),d={primary_color:Y.primary_color||"#2563EB",font:Y.font||"Inter",hero_title:Y.hero_title||"",hero_subtitle:Y.hero_subtitle||"",about_text:Y.about_text||""};let b=!1;const x=r=>{b=r,ve("website",r),s instanceof HTMLButtonElement&&(s.hidden=!r,s.disabled=!1,s.textContent="Opslaan")};t.value=d.primary_color,n.style.backgroundColor=d.primary_color,c.value=d.hero_title,m.value=d.hero_subtitle,a.value=d.about_text,i.forEach(r=>{r.classList.toggle("selected",r.dataset.font===d.font)});const B=r=>{t.value=r,n.style.backgroundColor=r;const A=e.querySelector("#previewHeroTitle");A&&(A.style.color=r),d.primary_color=r,x(!0)};t.addEventListener("input",r=>B(r.target.value)),S.forEach(r=>{r.addEventListener("click",()=>{B(r.dataset.color)})}),i.forEach(r=>{r.addEventListener("click",()=>{i.forEach(A=>A.classList.remove("selected")),r.classList.add("selected"),d.font=r.dataset.font||"Inter",x(!0)})});const j=(r,A)=>{const y=r.parentElement.querySelector(".char-counter .current"),O=()=>{y&&(y.textContent=r.value.length)};r.addEventListener("input",()=>{if(O(),r.id==="heroTitle"){const E=e.querySelector("#previewHeroTitle");E&&(E.textContent=r.value||"Uw garage titel")}else if(r.id==="heroSubtitle"){const E=e.querySelector("#previewHeroSubtitle");E&&(E.textContent=r.value||"Korte beschrijving")}d[A]=r.value,x(!0)}),O()};j(c,"hero_title"),j(m,"hero_subtitle"),j(a,"about_text"),s==null||s.addEventListener("click",async()=>{var r;if(!(!T||!((r=f.activeGarage)!=null&&r.id)||!b)){s.disabled=!0,s.textContent="Opslaan...";try{const{error:A}=await T.from("garage_settings").upsert({...d,garage_id:f.activeGarage.id},{onConflict:"garage_id"});if(A)throw A;Y={...Y,...d},ce(),x(!1)}catch(A){console.error("Website save failed:",A),s.disabled=!1,s.textContent="Opslaan"}}}),x(!1)},Se=async t=>{const n={...t},c=Object.keys(n).length+1;for(let m=0;m<c;m+=1){const{error:a}=await T.from("garages").update(n).eq("id",f.activeGarage.id);if(!a)return n;if(!(String((a==null?void 0:a.code)??"")==="42703"))throw a;const S=String((a==null?void 0:a.message)??""),s=S.match(/column\s+"?([a-zA-Z0-9_]+)"?\s+of\s+relation\s+"garages"/i)||S.match(/garages\.([a-zA-Z0-9_]+)/i),d=String((s==null?void 0:s[1])??"").trim();if(!d||!(d in n))throw a;delete n[d]}return n},xe=async t=>{var m;if(!T||!((m=f.activeGarage)!=null&&m.id))return t;const n={garage_id:f.activeGarage.id,...t},c=Object.keys(n).length+1;for(let a=0;a<c;a+=1){const{error:i}=await T.from("garage_pdf_settings").upsert(n,{onConflict:"garage_id"});if(!i)return n;if(!(String((i==null?void 0:i.code)??"")==="42703"))throw i;const s=String((i==null?void 0:i.message)??""),d=s.match(/column\s+"?([a-zA-Z0-9_]+)"?\s+of\s+relation\s+"garage_pdf_settings"/i)||s.match(/garage_pdf_settings\.([a-zA-Z0-9_]+)/i),b=String((d==null?void 0:d[1])??"").trim();if(!b||!(b in n))throw i;delete n[b]}return n},Ne=()=>{const t=e.querySelector("#invoicePrefixInput"),n=e.querySelector("#invoiceCounterInput"),c=e.querySelector("#invoiceSeriesPreview"),m=e.querySelector("#invoiceSeriesPreviewText"),a=e.querySelector("#invoiceNumberWarning"),i=e.querySelector("#factuurSaveButton"),S=e.querySelector("#factuurCompanyName"),s=e.querySelector("#factuurCompanyAddress"),d=e.querySelector("#factuurCompanyNumber"),b=e.querySelector("#factuurCompanyPostcode"),x=e.querySelector("#factuurHasBTW"),B=e.querySelector("#factuurBtwNumber"),j=e.querySelector("#factuurKvkNumber"),r=e.querySelector("#factuurIbanNumber"),A=e.querySelector("#factuurPdfBusinessName"),y=e.querySelector("#factuurPdfGarageAddr"),O=e.querySelector("#factuurPdfBTW"),E=e.querySelector("#factuurPdfKVK"),re=e.querySelector("#factuurPdfIBAN"),G=e.querySelector("#factuurPdfInvoiceNum"),K=e.querySelector("#factuurPdfPreviewHeader"),Q=e.querySelector(".pdf-preview"),V=e.querySelector("#factuurPdfMetaSection"),u=e.querySelector("#factuurPdfMetaGrid"),q=e.querySelector("#factuurPdfCustomerBlock"),M=e.querySelector("#factuurPdfVehicleBlock"),N=e.querySelector("#factuurPdfBtwRow"),ee=e.querySelector("#factuurPdfKvkRow"),te=e.querySelector("#factuurPdfIbanRow"),D=e.querySelector("#factuurPdfFooterPreview"),se=e.querySelector("#factuurPdfPaymentInstructionPreview"),ae=e.querySelector("#factuurPdfPrimaryColor"),de=e.querySelector("#factuurPdfColorSwatch"),me=e.querySelectorAll("[data-factuur-style]"),ie=e.querySelectorAll("[data-factuur-font]"),W=e.querySelector("#factuurPdfShowBtw"),R=e.querySelector("#factuurPdfShowIban"),z=e.querySelector("#factuurPdfShowKvk"),$=e.querySelector("#factuurPdfShowCustomer"),U=e.querySelector("#factuurPdfShowVehicle"),h=e.querySelector("#factuurPdfPaymentInstruction"),p=e.querySelector("#factuurPdfFooterText");if(!(t instanceof HTMLInputElement)||!(n instanceof HTMLInputElement)||!(S instanceof HTMLInputElement)||!(s instanceof HTMLInputElement)||!(B instanceof HTMLInputElement)||!(j instanceof HTMLInputElement)||!(r instanceof HTMLInputElement)||!(x instanceof HTMLInputElement))return;const w={invoice_prefix:String(l.invoice_prefix??""),invoice_counter:Number.isFinite(Number(l.invoice_counter))?Number(l.invoice_counter):Math.max(1,Number(l.invoice_sequence??1)||1),name:l.name||"",address:l.address||"",has_btw:l.has_btw??!0,btw_nummer:l.btw_nummer||"",kvk_nummer:l.kvk_nummer||l.kvk_number||"",iban:l.iban||""},g={primary_color:k.primary_color||"#2563EB",font:k.font||"helvetica",header_style:k.header_style||"professional",show_btw:k.show_btw==null?!0:!!k.show_btw,show_iban:k.show_iban==null?!0:!!k.show_iban,show_kvk:k.show_kvk==null?!0:!!k.show_kvk,show_customer:k.show_customer==null?!0:!!k.show_customer,show_vehicle:k.show_vehicle==null?!0:!!k.show_vehicle,payment_instruction_text:k.payment_instruction_text||"Betaalinstructie: Gelieve binnen 14 dagen over te maken onder vermelding van het factuurnummer.",footer_text:k.footer_text||""};let ne=0,P=!1;const C=_=>{const I=String(_||"").trim(),[L="",oe=""]=I.split(","),ue=L.trim(),fe=ue.match(/^(.*?)(?:\s+(\d+[A-Za-z0-9\-\/]*)?)$/);return{street:fe?fe[1].trim():ue,number:fe&&fe[2]?fe[2].trim():"",postcode:oe.trim()}},J=()=>{const _=String(s.value||"").trim(),I=String(d instanceof HTMLInputElement?d.value:"").trim(),L=String(b instanceof HTMLInputElement?b.value:"").trim();return[[_,I].filter(Boolean).join(" "),L].filter(Boolean).join(", ")},o=_=>{P=_,ve("factuur",_),i instanceof HTMLButtonElement&&(i.hidden=!_,i.disabled=!1,i.textContent="Opslaan")},v=()=>{const _=Math.max(1,Number(w.invoice_counter||1)),I=`${String(w.invoice_prefix||"")}${String(_).padStart(3,"0")}`;if(c&&(c.textContent=I),m&&(m.textContent=`Volgende factuur wordt: ${I}`),G&&(G.textContent=I),a&&(a.style.display=_<ne?"block":"none"),w.address=J(),A&&(A.textContent=w.name||"Garage De Vries"),y&&(y.textContent=w.address||"Adres"),O&&(O.textContent=w.btw_nummer||"NL123456789"),E&&(E.textContent=w.kvk_nummer||"12345678"),re&&(re.textContent=w.iban||"NL91 ABNA 0417 1643 00"),K&&(K.dataset.style=g.header_style),Q){Q.style.setProperty("--pdf-accent",g.primary_color);const L={times:"'Times New Roman', serif",georgia:"Georgia, 'Times New Roman', serif",courier:"'Courier New', monospace",arial:"Arial, Helvetica, sans-serif"};Q.style.fontFamily=L[g.font]||"Helvetica, Arial, sans-serif"}if(N&&(N.style.display=g.show_btw?"block":"none"),ee&&(ee.style.display=g.show_kvk?"block":"none"),te&&(te.style.display=g.show_iban?"block":"none"),q&&(q.style.display=g.show_customer?"block":"none"),M&&(M.style.display=g.show_vehicle?"block":"none"),u){const L=Number(g.show_customer)+Number(g.show_vehicle);u.style.gridTemplateColumns=L<=1?"1fr":"1fr 1fr"}if(V&&(V.style.display=g.show_customer||g.show_vehicle?"block":"none"),D){const L=String(g.footer_text||"").trim();D.textContent=L,D.style.display=L?"block":"none"}if(se){const L=String(g.payment_instruction_text||"").trim();se.textContent=L,se.style.display=L?"block":"none"}};t.value=w.invoice_prefix,n.value=String(w.invoice_counter),S.value=w.name;const H=C(w.address);s.value=H.street,d instanceof HTMLInputElement&&(d.value=H.number),b instanceof HTMLInputElement&&(b.value=H.postcode),x.checked=!!w.has_btw,B.value=w.btw_nummer,j.value=w.kvk_nummer,r.value=w.iban,ae instanceof HTMLInputElement&&de instanceof HTMLElement&&(ae.value=g.primary_color,de.style.backgroundColor=g.primary_color,ae.addEventListener("input",()=>{g.primary_color=ae.value,de.style.backgroundColor=ae.value,v(),o(!0)})),me.forEach(_=>{_.classList.toggle("selected",_.getAttribute("data-factuur-style")===g.header_style),_.addEventListener("click",()=>{me.forEach(I=>I.classList.remove("selected")),_.classList.add("selected"),g.header_style=String(_.getAttribute("data-factuur-style")||"professional"),v(),o(!0)})}),ie.forEach(_=>{_.classList.toggle("selected",_.getAttribute("data-factuur-font")===g.font),_.addEventListener("click",()=>{ie.forEach(I=>I.classList.remove("selected")),_.classList.add("selected"),g.font=String(_.getAttribute("data-factuur-font")||"helvetica"),v(),o(!0)})}),W instanceof HTMLInputElement&&(W.checked=g.show_btw,W.addEventListener("change",()=>{g.show_btw=W.checked,v(),o(!0)})),R instanceof HTMLInputElement&&(R.checked=g.show_iban,R.addEventListener("change",()=>{g.show_iban=R.checked,v(),o(!0)})),z instanceof HTMLInputElement&&(z.checked=g.show_kvk,z.addEventListener("change",()=>{g.show_kvk=z.checked,v(),o(!0)})),$ instanceof HTMLInputElement&&($.checked=g.show_customer,$.addEventListener("change",()=>{g.show_customer=$.checked,v(),o(!0)})),U instanceof HTMLInputElement&&(U.checked=g.show_vehicle,U.addEventListener("change",()=>{g.show_vehicle=U.checked,v(),o(!0)})),h instanceof HTMLTextAreaElement&&(h.value=g.payment_instruction_text,h.addEventListener("input",()=>{g.payment_instruction_text=h.value,v(),o(!0)})),p instanceof HTMLInputElement&&(p.value=g.footer_text,p.addEventListener("input",()=>{g.footer_text=p.value,v(),o(!0)})),v(),t.addEventListener("input",()=>{w.invoice_prefix=t.value,v(),o(!0)}),n.addEventListener("input",()=>{w.invoice_counter=Math.max(1,parseInt(String(n.value||"1"),10)||1),v(),o(!0)}),S.addEventListener("input",()=>{w.name=S.value,v(),o(!0)}),s.addEventListener("input",()=>{w.address=J(),v(),o(!0)}),d==null||d.addEventListener("input",()=>{w.address=J(),v(),o(!0)}),b==null||b.addEventListener("input",()=>{w.address=J(),v(),o(!0)}),x.addEventListener("change",()=>{w.has_btw=x.checked,o(!0)}),B.addEventListener("input",()=>{w.btw_nummer=B.value,v(),o(!0)}),j.addEventListener("input",()=>{w.kvk_nummer=j.value,v(),o(!0)}),r.addEventListener("input",()=>{w.iban=r.value,v(),o(!0)}),i==null||i.addEventListener("click",async()=>{var _;if(!(!T||!((_=f.activeGarage)!=null&&_.id)||!P)){i.disabled=!0,i.textContent="Opslaan...";try{const I={invoice_prefix:w.invoice_prefix,invoice_counter:Math.max(1,parseInt(String(w.invoice_counter||1),10)||1),invoice_sequence:Math.max(1,parseInt(String(w.invoice_counter||1),10)||1),name:w.name,address:J(),has_btw:w.has_btw,btw_nummer:w.btw_nummer,kvk_nummer:w.kvk_nummer,iban:w.iban},L=await Se(I),oe=await xe(g);l={...l,...L},k={...k,...oe},f.activeGarage&&(f.activeGarage.invoicePrefix=I.invoice_prefix),ye(),ce(),o(!1)}catch(I){console.error(I),i.disabled=!1,i.textContent="Opslaan"}}}),(async()=>{var _;if(!(!T||!((_=f.activeGarage)!=null&&_.id)))try{const{data:I}=await T.from("completed_appointments").select("completion_notes").eq("garage_id",f.activeGarage.id).limit(500);ne=(I??[]).reduce((L,oe)=>{var Ce;let ue={};try{ue=JSON.parse(String((oe==null?void 0:oe.completion_notes)??"{}"))}catch{ue={}}const Ge=((Ce=String(ue.invoice_number??"").trim().match(/(\d+)(?!.*\d)/))==null?void 0:Ce[1])??"",Ee=parseInt(Ge,10);return Number.isFinite(Ee)?Math.max(L,Ee):L},0),v()}catch{}})(),o(!1)},He=()=>{const t=e.querySelector("#quotePrefixInput"),n=e.querySelector("#quoteCounterInput"),c=e.querySelector("#quoteSeriesPreview"),m=e.querySelector("#quoteSeriesPreviewText"),a=e.querySelector("#offerteSaveButton"),i=e.querySelector("#offerteCompanyName"),S=e.querySelector("#offerteCompanyAddress"),s=e.querySelector("#offerteCompanyNumber"),d=e.querySelector("#offerteCompanyPostcode"),b=e.querySelector("#offerteHasBTW"),x=e.querySelector("#offerteBtwNumber"),B=e.querySelector("#offerteKvkNumber"),j=e.querySelector("#offerteIbanNumber"),r=e.querySelector("#offertePdfBusinessName"),A=e.querySelector("#offertePdfGarageAddr"),y=e.querySelector("#offertePdfBTW"),O=e.querySelector("#offertePdfKVK"),E=e.querySelector("#offertePdfIBAN"),re=e.querySelector("#offertePdfInvoiceNum"),G=e.querySelector("#offertePdfPreviewHeader"),K=e.querySelector("#offertePdfPreviewCard"),Q=e.querySelector("#offertePdfMetaSection"),V=e.querySelector("#offertePdfMetaGrid"),u=e.querySelector("#offertePdfCustomerBlock"),q=e.querySelector("#offertePdfVehicleBlock"),M=e.querySelector("#offertePdfBtwRow"),N=e.querySelector("#offertePdfKvkRow"),ee=e.querySelector("#offertePdfIbanRow"),te=e.querySelector("#offertePdfFooterPreview"),D=e.querySelector("#offertePdfPrimaryColor"),se=e.querySelector("#offertePdfColorSwatch"),ae=e.querySelectorAll("[data-offerte-layout]"),de=e.querySelectorAll("[data-offerte-style]"),me=e.querySelectorAll("[data-offerte-font]"),ie=e.querySelector("#offertePdfShowBtw"),W=e.querySelector("#offertePdfShowIban"),R=e.querySelector("#offertePdfShowKvk"),z=e.querySelector("#offertePdfShowCustomer"),$=e.querySelector("#offertePdfShowVehicle"),U=e.querySelector("#offertePdfFooterText");if(!(t instanceof HTMLInputElement)||!(n instanceof HTMLInputElement)||!(i instanceof HTMLInputElement)||!(S instanceof HTMLInputElement)||!(x instanceof HTMLInputElement)||!(B instanceof HTMLInputElement)||!(j instanceof HTMLInputElement)||!(b instanceof HTMLInputElement))return;const h={quote_prefix:String(l.quote_prefix??"OFF-"),quote_counter:Number.isFinite(Number(l.quote_counter))?Number(l.quote_counter):1,name:l.name||"",address:l.address||"",has_btw:l.has_btw??!0,btw_nummer:l.btw_nummer||"",kvk_nummer:l.kvk_nummer||l.kvk_number||"",iban:l.iban||""},p={quote_primary_color:k.quote_primary_color||"#16A34A",quote_font:k.quote_font||"helvetica",quote_header_style:k.quote_header_style||"professional",quote_show_btw:k.quote_show_btw==null?!0:!!k.quote_show_btw,quote_show_iban:k.quote_show_iban==null?!1:!!k.quote_show_iban,quote_show_kvk:k.quote_show_kvk==null?!0:!!k.quote_show_kvk,quote_show_customer:k.quote_show_customer==null?!0:!!k.quote_show_customer,quote_show_vehicle:k.quote_show_vehicle==null?!0:!!k.quote_show_vehicle,quote_footer_text:k.quote_footer_text||"",quote_layout:k.quote_layout||"proposal"};let w=!1;const g=o=>{const v=String(o||"").trim(),[H="",_=""]=v.split(","),I=H.trim(),L=I.match(/^(.*?)(?:\s+(\d+[A-Za-z0-9\-\/]*)?)$/);return{street:L?L[1].trim():I,number:L&&L[2]?L[2].trim():"",postcode:_.trim()}},ne=()=>{const o=String(S.value||"").trim(),v=String(s instanceof HTMLInputElement?s.value:"").trim(),H=String(d instanceof HTMLInputElement?d.value:"").trim();return[[o,v].filter(Boolean).join(" "),H].filter(Boolean).join(", ")},P=o=>{w=o,ve("offerte",o),a instanceof HTMLButtonElement&&(a.hidden=!o,a.disabled=!1,a.textContent="Opslaan")},C=()=>{const o=Math.max(1,Number(h.quote_counter||1)),v=`${String(h.quote_prefix||"OFF-")}${String(o).padStart(3,"0")}`;if(c&&(c.textContent=v),m&&(m.textContent=`Volgende offerte wordt: ${v}`),re&&(re.textContent=v),h.address=ne(),r&&(r.textContent=h.name||"Garage De Vries"),A&&(A.textContent=h.address||"Adres"),y&&(y.textContent=h.btw_nummer||"NL123456789"),O&&(O.textContent=h.kvk_nummer||"12345678"),E&&(E.textContent=h.iban||"NL91 ABNA 0417 1643 00"),G&&(G.dataset.style=p.quote_header_style),K instanceof HTMLElement){K.style.setProperty("--pdf-accent",p.quote_primary_color),K.dataset.quoteLayout=String(p.quote_layout||"proposal");const H={times:"'Times New Roman', serif",georgia:"Georgia, 'Times New Roman', serif",courier:"'Courier New', monospace",arial:"Arial, Helvetica, sans-serif"};K.style.fontFamily=H[p.quote_font]||"Helvetica, Arial, sans-serif"}if(M&&(M.style.display=p.quote_show_btw?"block":"none"),N&&(N.style.display=p.quote_show_kvk?"block":"none"),ee&&(ee.style.display=p.quote_show_iban?"block":"none"),u&&(u.style.display=p.quote_show_customer?"block":"none"),q&&(q.style.display=p.quote_show_vehicle?"block":"none"),V){const H=Number(p.quote_show_customer)+Number(p.quote_show_vehicle);V.style.gridTemplateColumns=H<=1?"1fr":"1fr 1fr"}if(Q&&(Q.style.display=p.quote_show_customer||p.quote_show_vehicle?"block":"none"),te){const H=String(p.quote_footer_text||"").trim();te.textContent=H,te.style.display=H?"block":"none"}};t.value=h.quote_prefix,n.value=String(h.quote_counter),i.value=h.name;const J=g(h.address);S.value=J.street,s instanceof HTMLInputElement&&(s.value=J.number),d instanceof HTMLInputElement&&(d.value=J.postcode),b.checked=!!h.has_btw,x.value=h.btw_nummer,B.value=h.kvk_nummer,j.value=h.iban,D instanceof HTMLInputElement&&se instanceof HTMLElement&&(D.value=p.quote_primary_color,se.style.backgroundColor=p.quote_primary_color,D.addEventListener("input",()=>{p.quote_primary_color=D.value,se.style.backgroundColor=D.value,C(),P(!0)})),ae.forEach(o=>{o.classList.toggle("selected",o.getAttribute("data-offerte-layout")===p.quote_layout),o.addEventListener("click",()=>{ae.forEach(v=>v.classList.remove("selected")),o.classList.add("selected"),p.quote_layout=String(o.getAttribute("data-offerte-layout")||"proposal"),C(),P(!0)})}),de.forEach(o=>{o.classList.toggle("selected",o.getAttribute("data-offerte-style")===p.quote_header_style),o.addEventListener("click",()=>{de.forEach(v=>v.classList.remove("selected")),o.classList.add("selected"),p.quote_header_style=String(o.getAttribute("data-offerte-style")||"professional"),C(),P(!0)})}),me.forEach(o=>{o.classList.toggle("selected",o.getAttribute("data-offerte-font")===p.quote_font),o.addEventListener("click",()=>{me.forEach(v=>v.classList.remove("selected")),o.classList.add("selected"),p.quote_font=String(o.getAttribute("data-offerte-font")||"helvetica"),C(),P(!0)})}),ie instanceof HTMLInputElement&&(ie.checked=p.quote_show_btw,ie.addEventListener("change",()=>{p.quote_show_btw=ie.checked,C(),P(!0)})),W instanceof HTMLInputElement&&(W.checked=p.quote_show_iban,W.addEventListener("change",()=>{p.quote_show_iban=W.checked,C(),P(!0)})),R instanceof HTMLInputElement&&(R.checked=p.quote_show_kvk,R.addEventListener("change",()=>{p.quote_show_kvk=R.checked,C(),P(!0)})),z instanceof HTMLInputElement&&(z.checked=p.quote_show_customer,z.addEventListener("change",()=>{p.quote_show_customer=z.checked,C(),P(!0)})),$ instanceof HTMLInputElement&&($.checked=p.quote_show_vehicle,$.addEventListener("change",()=>{p.quote_show_vehicle=$.checked,C(),P(!0)})),U instanceof HTMLInputElement&&(U.value=p.quote_footer_text,U.addEventListener("input",()=>{p.quote_footer_text=U.value,C(),P(!0)})),C(),t.addEventListener("input",()=>{h.quote_prefix=t.value,C(),P(!0)}),n.addEventListener("input",()=>{h.quote_counter=Math.max(1,parseInt(String(n.value||"1"),10)||1),C(),P(!0)}),i.addEventListener("input",()=>{h.name=i.value,C(),P(!0)}),S.addEventListener("input",()=>{h.address=ne(),C(),P(!0)}),s==null||s.addEventListener("input",()=>{h.address=ne(),C(),P(!0)}),d==null||d.addEventListener("input",()=>{h.address=ne(),C(),P(!0)}),b.addEventListener("change",()=>{h.has_btw=b.checked,P(!0)}),x.addEventListener("input",()=>{h.btw_nummer=x.value,C(),P(!0)}),B.addEventListener("input",()=>{h.kvk_nummer=B.value,C(),P(!0)}),j.addEventListener("input",()=>{h.iban=j.value,C(),P(!0)}),a==null||a.addEventListener("click",async()=>{var o;if(!(!T||!((o=f.activeGarage)!=null&&o.id)||!w)){a.disabled=!0,a.textContent="Opslaan...";try{const v={quote_prefix:h.quote_prefix,quote_counter:Math.max(1,parseInt(String(h.quote_counter||1),10)||1),name:h.name,address:ne(),has_btw:h.has_btw,btw_nummer:h.btw_nummer,kvk_nummer:h.kvk_nummer,iban:h.iban},H=await Se(v),_=await xe(p);l={...l,...H},k={...k,..._},f.activeGarage&&(f.activeGarage.quotePrefix=v.quote_prefix,f.activeGarage.quoteCounter=v.quote_counter),ye(),ce(),P(!1)}catch(v){console.error(v),a.disabled=!1,a.textContent="Opslaan"}}}),P(!1)},je=()=>{const t=e.querySelectorAll(".payment-card"),n=e.querySelectorAll(".payment-settings"),c=e.querySelector("#mollieApiKey"),m=e.querySelector("#tikkieApiKey"),a=e.querySelector("#testMode"),i=e.querySelector(".test-mode-banner"),S=e.querySelector("#autoGenerate"),s=e.querySelector("#whatsappTemplate"),d=e.querySelector("#messagePreview"),b=e.querySelector("#connectMollie"),x=e.querySelector("#mollieConnectionStatus"),B=e.querySelectorAll(".var-chip"),j=e.querySelector("#resetTemplate"),r=e.querySelector("#paymentsSaveButton"),A=e.querySelectorAll(".show-password-btn"),y={payment_method:l.payment_method||"mollie",mollie_api_key:l.mollie_api_key||"",tikkie_api_key:l.tikkie_api_key||"",test_mode:!!l.test_mode,mollie_auto_generate:l.mollie_auto_generate!==void 0?l.mollie_auto_generate:!0,whatsapp_template:l.whatsapp_template||s.value};let O=!1;const E=u=>{O=u,ve("betalingen",u),r instanceof HTMLButtonElement&&(r.hidden=!u,r.disabled=!1,r.textContent="Opslaan")},re=u=>u==="tikkie"?"Tikkie":"Mollie iDEAL",G=u=>{x instanceof HTMLElement&&(u?(x.textContent=y.test_mode?"Gekoppeld met Mollie (testmodus).":"Gekoppeld met Mollie (live modus).",x.style.color="#0f766e"):(x.textContent="Nog niet gekoppeld. Klik op 'Verbind Mollie' om te bevestigen.",x.style.color="#6b7280"))},K=async()=>{var q;if(!T||!((q=f.activeGarage)!=null&&q.id))return{ok:!1,error:new Error("Geen actieve garage of Supabase connectie")};const{error:u}=await T.from("garages").update(y).eq("id",f.activeGarage.id);return u?{ok:!1,error:u}:(l={...l,...y},f.activeGarage&&(f.activeGarage.paymentMethod=y.payment_method,f.activeGarage.whatsapp_template=y.whatsapp_template,f.activeGarage.test_mode=y.test_mode),{ok:!0})},Q=y.payment_method;t.forEach(u=>{u.dataset.method===Q?u.classList.add("selected"):u.classList.remove("selected")}),c.value=y.mollie_api_key,m.value=y.tikkie_api_key,a.checked=y.test_mode,S.checked=y.mollie_auto_generate,s.value=y.whatsapp_template,i&&(i.hidden=!y.test_mode),G(!!String(y.mollie_api_key||"").trim()),t.forEach(u=>{u.addEventListener("click",()=>{const q=u.dataset.method;t.forEach(M=>M.classList.remove("selected")),u.classList.add("selected"),n.forEach(M=>{M.dataset.method===q?M.hidden=!1:M.hidden=!0}),y.payment_method=q,E(!0)})}),c==null||c.addEventListener("input",()=>{y.mollie_api_key=c.value,G(!1),E(!0)}),m==null||m.addEventListener("input",()=>{y.tikkie_api_key=m.value,E(!0)}),A.forEach(u=>{u.addEventListener("click",q=>{q.preventDefault();const M=u.parentElement.querySelector("input"),N=M.type;M.type=N==="password"?"text":"password",u.textContent=N==="password"?"🙈":"👁️"})}),a.addEventListener("change",()=>{i&&(i.hidden=!a.checked),y.test_mode=a.checked,G(!!String(y.mollie_api_key||"").trim()),E(!0)}),b==null||b.addEventListener("click",async()=>{const u=String((c==null?void 0:c.value)||"").trim();if(!u){window.alert("Vul eerst je Mollie API key in.");return}b.disabled=!0,b.textContent="Verbinden...",y.mollie_api_key=u,y.test_mode=!!(a!=null&&a.checked);try{const q=await K();if(!q.ok)throw q.error;ce(),E(!1),G(!0);const M=y.test_mode?"testmodus":"live modus",N=re(y.payment_method);window.alert(`${N} gekoppeld in ${M}.`)}catch(q){console.error("Mollie connect failed:",q),G(!1),window.alert("Mollie koppelen mislukt. Controleer je API key en probeer opnieuw.")}finally{b.disabled=!1,b.textContent="Verbind Mollie"}}),S.addEventListener("change",()=>{y.mollie_auto_generate=S.checked,E(!0)});const V=()=>{let u=s.value.replace(/{{klant_naam}}/g,"Jan Pietersen").replace(/{{garage_naam}}/g,"Garage De Vries").replace(/{{factuur_nummer}}/g,"2026-007").replace(/{{totaal_bedrag}}/g,"€204,58").replace(/{{betaaltermijn}}/g,"14").replace(/{{betaal_link}}/g,"https://pay.mollie.com/...").replace(/{{betaal_methode}}/g,"Mollie iDEAL").replace(/{{datum}}/g,new Date().toLocaleDateString("nl-NL")).replace(/{{kenteken}}/g,"SN-80-2V").replace(/{{auto_merk}}/g,"Peugeot 208");d&&(d.textContent=u)};s.addEventListener("input",()=>{V(),y.whatsapp_template=s.value,E(!0)}),B.forEach(u=>{u.addEventListener("click",q=>{q.preventDefault();const M=u.dataset.var,N=s,ee=N.selectionStart,te=N.selectionEnd,D=N.value;N.value=D.substring(0,ee)+M+D.substring(te),N.selectionStart=N.selectionEnd=ee+M.length,N.focus(),V(),y.whatsapp_template=N.value,E(!0)})}),j.addEventListener("click",()=>{const u=`Beste {{klant_naam}},

Hierbij uw factuur van {{garage_naam}}.

Factuurnummer: {{factuur_nummer}}
Totaalbedrag: {{totaal_bedrag}}
Betaaltermijn: {{betaaltermijn}} dagen

Betaal eenvoudig via {{betaal_methode}}:
{{betaal_link}}

Met vriendelijke groet,
{{garage_naam}}`;s.value=u,V(),y.whatsapp_template=u,E(!0)}),r==null||r.addEventListener("click",async()=>{var u;if(!(!T||!((u=f.activeGarage)!=null&&u.id)||!O)){r.disabled=!0,r.textContent="Opslaan...";try{const q=await K();if(!q.ok)throw q.error;ce(),G(!!String(y.mollie_api_key||"").trim()),E(!1)}catch(q){console.error("Payments save failed:",q),r.disabled=!1,r.textContent="Opslaan"}}}),V(),E(!1)};we()}const at=document.querySelector("#app");Oe();tt(at);
