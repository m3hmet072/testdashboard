import"./theme-8bHWXU28.js";/* empty css                      */import{C as De,n as Ve}from"./theme-DMvK0XTA.js";import{n as Fe,r as We,t as Re,b as $e,$ as ze}from"./branding-D-58_Ovy.js";import{m as Ue}from"./confirmDialog-DOdHvhLG.js";const Je="https://mkgfckxiusdcnqhethdy.supabase.co",Ze="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",M=De(Je,Ze);function ke(j){return String(j).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function we(j,O="00:00"){const F=String(j??"").trim().match(/^(\d{1,2})(?::(\d{2}))?$/);if(!F)return O;const me=Number.parseInt(F[1],10);if(!Number.isFinite(me))return O;const l=Math.min(23,Math.max(0,me));return`${String(l).padStart(2,"0")}:00`}function Ye(j){const O=we(j==null?void 0:j.working_hours_start,"00:00"),F=we(j==null?void 0:j.working_hours_end,"23:00");return O>F?{from:O,to:O}:{from:O,to:F}}function Ae(){const j=[];for(let O=0;O<=23;O+=1){const F=`${String(O).padStart(2,"0")}:00`;j.push(`<option value="${F}">${F}</option>`)}return j.join("")}function ve(j,O){return`
    <div class="folder-card" data-folder="${j.toLowerCase()}">
      <img class="folder-image" src="./sidebar-icons/folder.png" alt="Folder" loading="lazy" decoding="async">
      <h3 class="folder-name">${ke(j)}</h3>
      <p class="folder-description">${ke(O)}</p>
     
    </div>
  `}function Xe(){return`
    <div class="settings-folders-wrapper">
   
      <div class="folder-cards-grid">
        ${ve("Dashboard","Naam en domein van je dashboard")}
        ${ve("Website","Kleuren, fonts, tekst en live preview")}
        ${ve("Garage","Factuur structuur en PDF preview")}
        ${ve("Factuur","Factuurnummering en preview")}
        ${ve("Offerte","Offertenummering en preview")}
        ${ve("Betalingen","Mollie, Tikkie, WhatsApp tekst")}
      </div>
    </div>
  `}function Qe(){return`
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
  `}function et(){return`
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
  `}function tt(){return`
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
  `}function at(){return`
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

            <div class="form-field">
              <label for="dashboardDayFrom">Dagweergave tijdsbereik (Calendar)</label>
              <div class="dashboard-time-range-grid">
                <label class="dashboard-time-range-item" for="dashboardDayFrom">
                  <span>Van</span>
                  <select id="dashboardDayFrom">${Ae()}</select>
                </label>
                <label class="dashboard-time-range-item" for="dashboardDayTo">
                  <span>Tot</span>
                  <select id="dashboardDayTo">${Ae()}</select>
                </label>
              </div>
              <p class="field-help">Bepaalt welke day-slot-rows zichtbaar zijn in Calendar dagweergave.</p>
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
  `}function nt(){return`
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
                <span>Poppins</span>
                <span class="checkmark">✓</span>
              </button>
            </div>
          </section>

          <!-- TEKST SECTION -->
          <section class="settings-section">
            <h2>Website tekst</h2>
            <p class="section-description">Tekst die zichtbaar is op je website</p>

            <div class="form-field">
              <label for="heroTitle">Hero titel</label>
              <div class="input-with-counter">
                <input type="text" id="heroTitle" placeholder="Uw garage titel" maxlength="60">
                <span class="char-counter"><span class="current">0</span>/60</span>
              </div>
            </div>

            <div class="form-field">
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
  `}function rt(){return`
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
  `}async function ot(j){var O,F,me;if(!j)return;const l=await Fe();if(!l)return;if(!l.isAdmin&&!l.activeGarage){j.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is not mapped to a garage.</p>
      </section>
    `;return}We(l.activeGarage);const{shell:ye,contentArea:e}=Re({activePage:"settings",title:"Instellingen",headerNote:"",userEmail:l.user.email,onLogout:$e,garage:l.activeGarage,isAdmin:l.isAdmin});j.replaceChildren(ye);let W=(()=>{try{return localStorage.getItem("settings-active-folder")||"overview"}catch{return"overview"}})(),d={},ee={},y={};const ce={dashboard:!1,website:!1,garage:!1,factuur:!1,offerte:!1,betalingen:!1},be=(t,n)=>{ce[t]=!!n},_e=()=>Object.values(ce).some(Boolean),Pe=()=>Ue("Je hebt wijzigingen gemaakt zonder op Opslaan te klikken. Weet je zeker dat je deze pagina wilt verlaten?","Niet-opgeslagen wijzigingen"),Se=(t,n="Melding")=>new Promise(o=>{const k=document.querySelector(".confirm-dialog-overlay");k&&k.remove();const i=document.createElement("div");i.innerHTML=`
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title">${ke(n)}</h2>
            <p>${ke(t)}</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button danger" type="button" data-dismiss>OK</button>
          </div>
        </div>
      </div>
    `;const s=i.firstElementChild;if(!s){o();return}const _=()=>{s.remove(),o()};s.addEventListener("click",p=>{if(p.target instanceof Element){if(p.target===s){_();return}p.target.closest("[data-dismiss]")&&_()}}),s.addEventListener("keydown",p=>{p.key==="Escape"&&_()});const c=s.querySelector("[data-dismiss]");c instanceof HTMLButtonElement&&setTimeout(()=>c.focus(),50),document.body.append(s)}),Ee=t=>String(t??"").trim(),xe=t=>{const n=Ee(t);return n?/^https?:\/\//i.test(n)?n:`https://${n}`:"https://voorbeeld.nl"},qe=()=>{const t=ye.querySelector(".brand-text");t&&(t.textContent=d.name||"Garage");const n=ye.querySelector(".topbar-domain-inner-left-side a");n&&(n.textContent=xe(d.domain),n.href=xe(d.domain))};if(M&&(O=l.activeGarage)!=null&&O.id)try{const{data:t}=await M.from("garages").select("*").eq("id",l.activeGarage.id).maybeSingle();t&&(d=t,d.language&&ze(String(d.language)))}catch(t){console.error("Failed to load garage data:",t)}if(M&&(F=l.activeGarage)!=null&&F.id)try{const{data:t}=await M.from("garage_settings").select("*").eq("garage_id",l.activeGarage.id).maybeSingle();t&&(ee=t)}catch(t){console.error("Failed to load website settings:",t)}if(M&&(me=l.activeGarage)!=null&&me.id)try{const{data:t}=await M.from("garage_pdf_settings").select("*").eq("garage_id",l.activeGarage.id).maybeSingle();t&&(y=t)}catch(t){console.error("Failed to load pdf settings:",t)}const ue=()=>{const t=e.querySelector("#autoSaveIndicator");t&&(t.classList.add("visible"),setTimeout(()=>{t.classList.remove("visible")},2e3))},Le=()=>{try{localStorage.setItem("settings-active-folder",W)}catch{}W==="overview"?e.innerHTML=Xe():W==="dashboard"?(e.innerHTML=at(),Ne()):W==="website"?(e.innerHTML=nt(),He()):W==="garage"?e.innerHTML=Qe():W==="factuur"?(e.innerHTML=et(),je()):W==="offerte"?(e.innerHTML=tt(),Ge()):W==="betalingen"&&(e.innerHTML=rt(),Oe()),Be()},te=async t=>{if(!_e()){W=t,Le();return}await Pe()&&(Object.keys(ce).forEach(n=>{ce[n]=!1}),W=t,Le())},Be=()=>{const t=e.querySelector(".back-button");t&&t.addEventListener("click",async()=>{await te("overview")}),e.querySelectorAll(".folder-card").forEach(n=>{n.addEventListener("click",async()=>{const o=n.dataset.folder;o==="dashboard"?await te("dashboard"):o==="website"?await te("website"):o==="garage"?await te("garage"):o==="factuur"?await te("factuur"):o==="offerte"?await te("offerte"):o==="betalingen"&&await te("betalingen")})}),e.querySelectorAll("[data-target-folder]").forEach(n=>{n.addEventListener("click",async()=>{const o=n.getAttribute("data-target-folder")||"overview";await te(o)})})},Me=t=>{_e()&&(t.preventDefault(),t.returnValue="")};window.addEventListener("beforeunload",Me),ye.addEventListener("click",async t=>{const n=t.target;if(!(n instanceof Element))return;const o=n.closest("a[href]");if(!(o instanceof HTMLAnchorElement))return;const k=o.getAttribute("href")||"";!k||k.startsWith("#")||o.target==="_blank"||!_e()||(t.preventDefault(),!await Pe())||(Object.keys(ce).forEach(i=>{ce[i]=!1}),window.location.assign(o.href))});const Ne=()=>{const t=e.querySelector("#dashboardName"),n=e.querySelector("#dashboardDomain"),o=e.querySelector("#dashboardDayFrom"),k=e.querySelector("#dashboardDayTo"),i=e.querySelector("#dashboardSaveButton"),s=e.querySelector("#dashboardPreviewName"),_=e.querySelector("#dashboardPreviewDomain"),c=e.querySelector("#dashboardPreviewMark");if(!(t instanceof HTMLInputElement)||!(n instanceof HTMLInputElement)||!(o instanceof HTMLSelectElement)||!(k instanceof HTMLSelectElement))return;let p=!1;const q=()=>{const E=t.value.trim()||"SAS Website",a=xe(n.value);s&&(s.textContent=E),_&&(_.textContent=a),c&&(c.textContent=(E[0]||"S").toUpperCase())},x=E=>{p=E,be("dashboard",E),i instanceof HTMLButtonElement&&(i.hidden=!p,i.disabled=!1,i.textContent="Opslaan")};t.value=d.name||"",n.value=d.domain||"";const G=Ye(d);o.value=G.from,k.value=G.to,q(),t.addEventListener("input",()=>{q(),x(!0)}),n.addEventListener("input",()=>{q(),x(!0)}),o.addEventListener("change",()=>{o.value>k.value&&(k.value=o.value),x(!0)}),k.addEventListener("change",()=>{k.value<o.value&&(o.value=k.value),x(!0)}),i==null||i.addEventListener("click",async()=>{var E;const a=we(o.value,"00:00"),C=we(k.value,"23:00"),m=C<a?a:C;if(!M||!((E=l.activeGarage)!=null&&E.id))return;const B={name:t.value.trim()||"Garage",domain:Ee(n.value),working_hours_start:a,working_hours_end:m};i.disabled=!0,i.textContent="Opslaan...";try{const{error:S}=await M.from("garages").update(B).eq("id",l.activeGarage.id);if(S)throw S;d={...d,...B},l.activeGarage&&(l.activeGarage.name=B.name,l.activeGarage.domain=B.domain,l.activeGarage.working_hours_start=B.working_hours_start,l.activeGarage.working_hours_end=B.working_hours_end,l.activeGarage.workingHoursStart=B.working_hours_start,l.activeGarage.workingHoursEnd=B.working_hours_end);try{window.sessionStorage.removeItem("garage-dashboard.auth-context")}catch{}qe(),ue(),x(!1)}catch(S){console.error("Dashboard save failed:",S),i.disabled=!1,i.textContent="Opslaan"}})},He=()=>{const t=e.querySelector("#primaryColor"),n=e.querySelector("#colorSwatch"),o=e.querySelector("#heroTitle"),k=e.querySelector("#heroSubtitle"),i=e.querySelector("#aboutText"),s=e.querySelectorAll(".font-card"),_=e.querySelectorAll(".preset-pill"),c=e.querySelector("#websiteSaveButton"),p={primary_color:ee.primary_color||"#2563EB",font:ee.font||"Inter",hero_title:ee.hero_title||"",hero_subtitle:ee.hero_subtitle||"",about_text:ee.about_text||""};let q=!1;const x=a=>{q=a,be("website",a),c instanceof HTMLButtonElement&&(c.hidden=!a,c.disabled=!1,c.textContent="Opslaan")};t.value=p.primary_color,n.style.backgroundColor=p.primary_color,o.value=p.hero_title,k.value=p.hero_subtitle,i.value=p.about_text,s.forEach(a=>{a.classList.toggle("selected",a.dataset.font===p.font)});const G=a=>{t.value=a,n.style.backgroundColor=a;const C=e.querySelector("#previewHeroTitle");C&&(C.style.color=a),p.primary_color=a,x(!0)};t.addEventListener("input",a=>G(a.target.value)),_.forEach(a=>{a.addEventListener("click",()=>{G(a.dataset.color)})}),s.forEach(a=>{a.addEventListener("click",()=>{s.forEach(C=>C.classList.remove("selected")),a.classList.add("selected"),p.font=a.dataset.font||"Inter",x(!0)})});const E=(a,C)=>{const m=a.parentElement.querySelector(".char-counter .current"),B=()=>{m&&(m.textContent=a.value.length)};a.addEventListener("input",()=>{if(B(),a.id==="heroTitle"){const S=e.querySelector("#previewHeroTitle");S&&(S.textContent=a.value||"Uw garage titel")}else if(a.id==="heroSubtitle"){const S=e.querySelector("#previewHeroSubtitle");S&&(S.textContent=a.value||"Korte beschrijving")}p[C]=a.value,x(!0)}),B()};E(o,"hero_title"),E(k,"hero_subtitle"),E(i,"about_text"),c==null||c.addEventListener("click",async()=>{var a;if(!(!M||!((a=l.activeGarage)!=null&&a.id)||!q)){c.disabled=!0,c.textContent="Opslaan...";try{const{error:C}=await M.from("garage_settings").upsert({...p,garage_id:l.activeGarage.id},{onConflict:"garage_id"});if(C)throw C;ee={...ee,...p},ue(),x(!1)}catch(C){console.error("Website save failed:",C),c.disabled=!1,c.textContent="Opslaan"}}}),x(!1)},Te=async t=>{const n={...t},o=Object.keys(n).length+1;for(let k=0;k<o;k+=1){const{error:i}=await M.from("garages").update(n).eq("id",l.activeGarage.id);if(!i)return n;if(String((i==null?void 0:i.code)??"")!=="42703")throw i;const s=String((i==null?void 0:i.message)??""),_=s.match(/column\s+"?([a-zA-Z0-9_]+)"?\s+of\s+relation\s+"garages"/i)||s.match(/garages\.([a-zA-Z0-9_]+)/i),c=String((_==null?void 0:_[1])??"").trim();if(!c||!(c in n))throw i;delete n[c]}return n},Ce=async t=>{var n;if(!M||!((n=l.activeGarage)!=null&&n.id))return t;const o={garage_id:l.activeGarage.id,...t},k=Object.keys(o).length+1;for(let i=0;i<k;i+=1){const{error:s}=await M.from("garage_pdf_settings").upsert(o,{onConflict:"garage_id"});if(!s)return o;if(String((s==null?void 0:s.code)??"")!=="42703")throw s;const _=String((s==null?void 0:s.message)??""),c=_.match(/column\s+"?([a-zA-Z0-9_]+)"?\s+of\s+relation\s+"garage_pdf_settings"/i)||_.match(/garage_pdf_settings\.([a-zA-Z0-9_]+)/i),p=String((c==null?void 0:c[1])??"").trim();if(!p||!(p in o))throw s;delete o[p]}return o},je=()=>{const t=e.querySelector("#invoicePrefixInput"),n=e.querySelector("#invoiceCounterInput"),o=e.querySelector("#invoiceSeriesPreview"),k=e.querySelector("#invoiceSeriesPreviewText"),i=e.querySelector("#invoiceNumberWarning"),s=e.querySelector("#factuurSaveButton"),_=e.querySelector("#factuurCompanyName"),c=e.querySelector("#factuurCompanyAddress"),p=e.querySelector("#factuurCompanyNumber"),q=e.querySelector("#factuurCompanyPostcode"),x=e.querySelector("#factuurHasBTW"),G=e.querySelector("#factuurBtwNumber"),E=e.querySelector("#factuurKvkNumber"),a=e.querySelector("#factuurIbanNumber"),C=e.querySelector("#factuurPdfBusinessName"),m=e.querySelector("#factuurPdfGarageAddr"),B=e.querySelector("#factuurPdfBTW"),S=e.querySelector("#factuurPdfKVK"),se=e.querySelector("#factuurPdfIBAN"),D=e.querySelector("#factuurPdfInvoiceNum"),R=e.querySelector("#factuurPdfPreviewHeader"),ae=e.querySelector(".pdf-preview"),$=e.querySelector("#factuurPdfMetaSection"),u=e.querySelector("#factuurPdfMetaGrid"),L=e.querySelector("#factuurPdfCustomerBlock"),N=e.querySelector("#factuurPdfVehicleBlock"),H=e.querySelector("#factuurPdfBtwRow"),ne=e.querySelector("#factuurPdfKvkRow"),re=e.querySelector("#factuurPdfIbanRow"),V=e.querySelector("#factuurPdfFooterPreview"),le=e.querySelector("#factuurPdfPaymentInstructionPreview"),oe=e.querySelector("#factuurPdfPrimaryColor"),pe=e.querySelector("#factuurPdfColorSwatch"),he=e.querySelectorAll("[data-factuur-style]"),de=e.querySelectorAll("[data-factuur-font]"),z=e.querySelector("#factuurPdfShowBtw"),U=e.querySelector("#factuurPdfShowIban"),J=e.querySelector("#factuurPdfShowKvk"),Z=e.querySelector("#factuurPdfShowCustomer"),Y=e.querySelector("#factuurPdfShowVehicle"),b=e.querySelector("#factuurPdfPaymentInstruction"),f=e.querySelector("#factuurPdfFooterText");if(!(t instanceof HTMLInputElement)||!(n instanceof HTMLInputElement)||!(_ instanceof HTMLInputElement)||!(c instanceof HTMLInputElement)||!(G instanceof HTMLInputElement)||!(E instanceof HTMLInputElement)||!(a instanceof HTMLInputElement)||!(x instanceof HTMLInputElement))return;const g={invoice_prefix:String(d.invoice_prefix??""),invoice_counter:Number.isFinite(Number(d.invoice_counter))?Number(d.invoice_counter):Math.max(1,Number(d.invoice_sequence??1)||1),name:d.name||"",address:d.address||"",has_btw:d.has_btw??!0,btw_nummer:d.btw_nummer||"",kvk_nummer:d.kvk_nummer||d.kvk_number||"",iban:d.iban||""},h={primary_color:y.primary_color||"#2563EB",font:y.font||"helvetica",header_style:y.header_style||"professional",show_btw:y.show_btw==null?!0:!!y.show_btw,show_iban:y.show_iban==null?!0:!!y.show_iban,show_kvk:y.show_kvk==null?!0:!!y.show_kvk,show_customer:y.show_customer==null?!0:!!y.show_customer,show_vehicle:y.show_vehicle==null?!0:!!y.show_vehicle,payment_instruction_text:y.payment_instruction_text||"Betaalinstructie: Gelieve binnen 14 dagen over te maken onder vermelding van het factuurnummer.",footer_text:y.footer_text||""};let ie=0,P=!1;const I=w=>{const A=String(w||"").trim(),[T="",fe=""]=A.split(","),ge=T.trim(),Q=ge.match(/^(.*?)(?:\s+(\d+[A-Za-z0-9\-\/]*)?)$/);return{street:Q?Q[1].trim():ge,number:Q&&Q[2]?Q[2].trim():"",postcode:fe.trim()}},X=()=>{const w=String(c.value||"").trim(),A=String(p instanceof HTMLInputElement?p.value:"").trim(),T=String(q instanceof HTMLInputElement?q.value:"").trim();return[[w,A].filter(Boolean).join(" "),T].filter(Boolean).join(", ")},r=w=>{P=w,be("factuur",w),s instanceof HTMLButtonElement&&(s.hidden=!w,s.disabled=!1,s.textContent="Opslaan")},v=()=>{const w=Math.max(1,Number(g.invoice_counter||1)),A=`${String(g.invoice_prefix||"")}${String(w).padStart(3,"0")}`;if(o&&(o.textContent=A),k&&(k.textContent=`Volgende factuur wordt: ${A}`),D&&(D.textContent=A),i&&(i.style.display=w<ie?"block":"none"),g.address=X(),C&&(C.textContent=g.name||"Garage De Vries"),m&&(m.textContent=g.address||"Adres"),B&&(B.textContent=g.btw_nummer||"NL123456789"),S&&(S.textContent=g.kvk_nummer||"12345678"),se&&(se.textContent=g.iban||"NL91 ABNA 0417 1643 00"),R&&(R.dataset.style=h.header_style),ae){ae.style.setProperty("--pdf-accent",h.primary_color);const T={times:"'Times New Roman', serif",georgia:"Georgia, 'Times New Roman', serif",courier:"'Courier New', monospace",arial:"Arial, Helvetica, sans-serif"};ae.style.fontFamily=T[h.font]||"Helvetica, Arial, sans-serif"}if(H&&(H.style.display=h.show_btw?"block":"none"),ne&&(ne.style.display=h.show_kvk?"block":"none"),re&&(re.style.display=h.show_iban?"block":"none"),L&&(L.style.display=h.show_customer?"block":"none"),N&&(N.style.display=h.show_vehicle?"block":"none"),u){const T=Number(h.show_customer)+Number(h.show_vehicle);u.style.gridTemplateColumns=T<=1?"1fr":"1fr 1fr"}if($&&($.style.display=h.show_customer||h.show_vehicle?"block":"none"),V){const T=String(h.footer_text||"").trim();V.textContent=T,V.style.display=T?"block":"none"}if(le){const T=String(h.payment_instruction_text||"").trim();le.textContent=T,le.style.display=T?"block":"none"}};t.value=g.invoice_prefix,n.value=String(g.invoice_counter),_.value=g.name;const K=I(g.address);c.value=K.street,p instanceof HTMLInputElement&&(p.value=K.number),q instanceof HTMLInputElement&&(q.value=K.postcode),x.checked=!!g.has_btw,G.value=g.btw_nummer,E.value=g.kvk_nummer,a.value=g.iban,oe instanceof HTMLInputElement&&pe instanceof HTMLElement&&(oe.value=h.primary_color,pe.style.backgroundColor=h.primary_color,oe.addEventListener("input",()=>{h.primary_color=oe.value,pe.style.backgroundColor=oe.value,v(),r(!0)})),he.forEach(w=>{w.classList.toggle("selected",w.getAttribute("data-factuur-style")===h.header_style),w.addEventListener("click",()=>{he.forEach(A=>A.classList.remove("selected")),w.classList.add("selected"),h.header_style=String(w.getAttribute("data-factuur-style")||"professional"),v(),r(!0)})}),de.forEach(w=>{w.classList.toggle("selected",w.getAttribute("data-factuur-font")===h.font),w.addEventListener("click",()=>{de.forEach(A=>A.classList.remove("selected")),w.classList.add("selected"),h.font=String(w.getAttribute("data-factuur-font")||"helvetica"),v(),r(!0)})}),z instanceof HTMLInputElement&&(z.checked=h.show_btw,z.addEventListener("change",()=>{h.show_btw=z.checked,v(),r(!0)})),U instanceof HTMLInputElement&&(U.checked=h.show_iban,U.addEventListener("change",()=>{h.show_iban=U.checked,v(),r(!0)})),J instanceof HTMLInputElement&&(J.checked=h.show_kvk,J.addEventListener("change",()=>{h.show_kvk=J.checked,v(),r(!0)})),Z instanceof HTMLInputElement&&(Z.checked=h.show_customer,Z.addEventListener("change",()=>{h.show_customer=Z.checked,v(),r(!0)})),Y instanceof HTMLInputElement&&(Y.checked=h.show_vehicle,Y.addEventListener("change",()=>{h.show_vehicle=Y.checked,v(),r(!0)})),b instanceof HTMLTextAreaElement&&(b.value=h.payment_instruction_text,b.addEventListener("input",()=>{h.payment_instruction_text=b.value,v(),r(!0)})),f instanceof HTMLInputElement&&(f.value=h.footer_text,f.addEventListener("input",()=>{h.footer_text=f.value,v(),r(!0)})),v(),t.addEventListener("input",()=>{g.invoice_prefix=t.value,v(),r(!0)}),n.addEventListener("input",()=>{g.invoice_counter=Math.max(1,parseInt(String(n.value||"1"),10)||1),v(),r(!0)}),_.addEventListener("input",()=>{g.name=_.value,v(),r(!0)}),c.addEventListener("input",()=>{g.address=X(),v(),r(!0)}),p==null||p.addEventListener("input",()=>{g.address=X(),v(),r(!0)}),q==null||q.addEventListener("input",()=>{g.address=X(),v(),r(!0)}),x.addEventListener("change",()=>{g.has_btw=x.checked,r(!0)}),G.addEventListener("input",()=>{g.btw_nummer=G.value,v(),r(!0)}),E.addEventListener("input",()=>{g.kvk_nummer=E.value,v(),r(!0)}),a.addEventListener("input",()=>{g.iban=a.value,v(),r(!0)}),s==null||s.addEventListener("click",async()=>{var w;if(!(!M||!((w=l.activeGarage)!=null&&w.id)||!P)){s.disabled=!0,s.textContent="Opslaan...";try{const A={invoice_prefix:g.invoice_prefix,invoice_counter:Math.max(1,parseInt(String(g.invoice_counter||1),10)||1),invoice_sequence:Math.max(1,parseInt(String(g.invoice_counter||1),10)||1),name:g.name,address:X(),has_btw:g.has_btw,btw_nummer:g.btw_nummer,kvk_nummer:g.kvk_nummer,iban:g.iban},T=await Te(A),fe=await Ce(h);d={...d,...T},y={...y,...fe},l.activeGarage&&(l.activeGarage.invoicePrefix=A.invoice_prefix),qe(),ue(),r(!1)}catch(A){console.error(A),s.disabled=!1,s.textContent="Opslaan"}}}),(async()=>{var w;if(!(!M||!((w=l.activeGarage)!=null&&w.id)))try{const{data:A}=await M.from("completed_appointments").select("completion_notes").eq("garage_id",l.activeGarage.id).limit(500);ie=(A??[]).reduce((T,fe)=>{var ge;let Q={};try{Q=JSON.parse(String((fe==null?void 0:fe.completion_notes)??"{}"))}catch{Q={}}const Ke=((ge=String(Q.invoice_number??"").trim().match(/(\d+)(?!.*\d)/))==null?void 0:ge[1])??"",Ie=parseInt(Ke,10);return Number.isFinite(Ie)?Math.max(T,Ie):T},0),v()}catch{}})(),r(!1)},Ge=()=>{const t=e.querySelector("#quotePrefixInput"),n=e.querySelector("#quoteCounterInput"),o=e.querySelector("#quoteSeriesPreview"),k=e.querySelector("#quoteSeriesPreviewText"),i=e.querySelector("#offerteSaveButton"),s=e.querySelector("#offerteCompanyName"),_=e.querySelector("#offerteCompanyAddress"),c=e.querySelector("#offerteCompanyNumber"),p=e.querySelector("#offerteCompanyPostcode"),q=e.querySelector("#offerteHasBTW"),x=e.querySelector("#offerteBtwNumber"),G=e.querySelector("#offerteKvkNumber"),E=e.querySelector("#offerteIbanNumber"),a=e.querySelector("#offertePdfBusinessName"),C=e.querySelector("#offertePdfGarageAddr"),m=e.querySelector("#offertePdfBTW"),B=e.querySelector("#offertePdfKVK"),S=e.querySelector("#offertePdfIBAN"),se=e.querySelector("#offertePdfInvoiceNum"),D=e.querySelector("#offertePdfPreviewHeader"),R=e.querySelector("#offertePdfPreviewCard"),ae=e.querySelector("#offertePdfMetaSection"),$=e.querySelector("#offertePdfMetaGrid"),u=e.querySelector("#offertePdfCustomerBlock"),L=e.querySelector("#offertePdfVehicleBlock"),N=e.querySelector("#offertePdfBtwRow"),H=e.querySelector("#offertePdfKvkRow"),ne=e.querySelector("#offertePdfIbanRow"),re=e.querySelector("#offertePdfFooterPreview"),V=e.querySelector("#offertePdfPrimaryColor"),le=e.querySelector("#offertePdfColorSwatch"),oe=e.querySelectorAll("[data-offerte-layout]"),pe=e.querySelectorAll("[data-offerte-style]"),he=e.querySelectorAll("[data-offerte-font]"),de=e.querySelector("#offertePdfShowBtw"),z=e.querySelector("#offertePdfShowIban"),U=e.querySelector("#offertePdfShowKvk"),J=e.querySelector("#offertePdfShowCustomer"),Z=e.querySelector("#offertePdfShowVehicle"),Y=e.querySelector("#offertePdfFooterText");if(!(t instanceof HTMLInputElement)||!(n instanceof HTMLInputElement)||!(s instanceof HTMLInputElement)||!(_ instanceof HTMLInputElement)||!(x instanceof HTMLInputElement)||!(G instanceof HTMLInputElement)||!(E instanceof HTMLInputElement)||!(q instanceof HTMLInputElement))return;const b={quote_prefix:String(d.quote_prefix??"OFF-"),quote_counter:Number.isFinite(Number(d.quote_counter))?Number(d.quote_counter):1,name:d.name||"",address:d.address||"",has_btw:d.has_btw??!0,btw_nummer:d.btw_nummer||"",kvk_nummer:d.kvk_nummer||d.kvk_number||"",iban:d.iban||""},f={quote_primary_color:y.quote_primary_color||"#16A34A",quote_font:y.quote_font||"helvetica",quote_header_style:y.quote_header_style||"professional",quote_show_btw:y.quote_show_btw==null?!0:!!y.quote_show_btw,quote_show_iban:y.quote_show_iban==null?!1:!!y.quote_show_iban,quote_show_kvk:y.quote_show_kvk==null?!0:!!y.quote_show_kvk,quote_show_customer:y.quote_show_customer==null?!0:!!y.quote_show_customer,quote_show_vehicle:y.quote_show_vehicle==null?!0:!!y.quote_show_vehicle,quote_footer_text:y.quote_footer_text||"",quote_layout:y.quote_layout||"proposal"};let g=!1;const h=r=>{const v=String(r||"").trim(),[K="",w=""]=v.split(","),A=K.trim(),T=A.match(/^(.*?)(?:\s+(\d+[A-Za-z0-9\-\/]*)?)$/);return{street:T?T[1].trim():A,number:T&&T[2]?T[2].trim():"",postcode:w.trim()}},ie=()=>{const r=String(_.value||"").trim(),v=String(c instanceof HTMLInputElement?c.value:"").trim(),K=String(p instanceof HTMLInputElement?p.value:"").trim();return[[r,v].filter(Boolean).join(" "),K].filter(Boolean).join(", ")},P=r=>{g=r,be("offerte",r),i instanceof HTMLButtonElement&&(i.hidden=!r,i.disabled=!1,i.textContent="Opslaan")},I=()=>{const r=Math.max(1,Number(b.quote_counter||1)),v=`${String(b.quote_prefix||"OFF-")}${String(r).padStart(3,"0")}`;if(o&&(o.textContent=v),k&&(k.textContent=`Volgende offerte wordt: ${v}`),se&&(se.textContent=v),b.address=ie(),a&&(a.textContent=b.name||"Garage De Vries"),C&&(C.textContent=b.address||"Adres"),m&&(m.textContent=b.btw_nummer||"NL123456789"),B&&(B.textContent=b.kvk_nummer||"12345678"),S&&(S.textContent=b.iban||"NL91 ABNA 0417 1643 00"),D&&(D.dataset.style=f.quote_header_style),R instanceof HTMLElement){R.style.setProperty("--pdf-accent",f.quote_primary_color),R.dataset.quoteLayout=String(f.quote_layout||"proposal");const K={times:"'Times New Roman', serif",georgia:"Georgia, 'Times New Roman', serif",courier:"'Courier New', monospace",arial:"Arial, Helvetica, sans-serif"};R.style.fontFamily=K[f.quote_font]||"Helvetica, Arial, sans-serif"}if(N&&(N.style.display=f.quote_show_btw?"block":"none"),H&&(H.style.display=f.quote_show_kvk?"block":"none"),ne&&(ne.style.display=f.quote_show_iban?"block":"none"),u&&(u.style.display=f.quote_show_customer?"block":"none"),L&&(L.style.display=f.quote_show_vehicle?"block":"none"),$){const K=Number(f.quote_show_customer)+Number(f.quote_show_vehicle);$.style.gridTemplateColumns=K<=1?"1fr":"1fr 1fr"}if(ae&&(ae.style.display=f.quote_show_customer||f.quote_show_vehicle?"block":"none"),re){const K=String(f.quote_footer_text||"").trim();re.textContent=K,re.style.display=K?"block":"none"}};t.value=b.quote_prefix,n.value=String(b.quote_counter),s.value=b.name;const X=h(b.address);_.value=X.street,c instanceof HTMLInputElement&&(c.value=X.number),p instanceof HTMLInputElement&&(p.value=X.postcode),q.checked=!!b.has_btw,x.value=b.btw_nummer,G.value=b.kvk_nummer,E.value=b.iban,V instanceof HTMLInputElement&&le instanceof HTMLElement&&(V.value=f.quote_primary_color,le.style.backgroundColor=f.quote_primary_color,V.addEventListener("input",()=>{f.quote_primary_color=V.value,le.style.backgroundColor=V.value,I(),P(!0)})),oe.forEach(r=>{r.classList.toggle("selected",r.getAttribute("data-offerte-layout")===f.quote_layout),r.addEventListener("click",()=>{oe.forEach(v=>v.classList.remove("selected")),r.classList.add("selected"),f.quote_layout=String(r.getAttribute("data-offerte-layout")||"proposal"),I(),P(!0)})}),pe.forEach(r=>{r.classList.toggle("selected",r.getAttribute("data-offerte-style")===f.quote_header_style),r.addEventListener("click",()=>{pe.forEach(v=>v.classList.remove("selected")),r.classList.add("selected"),f.quote_header_style=String(r.getAttribute("data-offerte-style")||"professional"),I(),P(!0)})}),he.forEach(r=>{r.classList.toggle("selected",r.getAttribute("data-offerte-font")===f.quote_font),r.addEventListener("click",()=>{he.forEach(v=>v.classList.remove("selected")),r.classList.add("selected"),f.quote_font=String(r.getAttribute("data-offerte-font")||"helvetica"),I(),P(!0)})}),de instanceof HTMLInputElement&&(de.checked=f.quote_show_btw,de.addEventListener("change",()=>{f.quote_show_btw=de.checked,I(),P(!0)})),z instanceof HTMLInputElement&&(z.checked=f.quote_show_iban,z.addEventListener("change",()=>{f.quote_show_iban=z.checked,I(),P(!0)})),U instanceof HTMLInputElement&&(U.checked=f.quote_show_kvk,U.addEventListener("change",()=>{f.quote_show_kvk=U.checked,I(),P(!0)})),J instanceof HTMLInputElement&&(J.checked=f.quote_show_customer,J.addEventListener("change",()=>{f.quote_show_customer=J.checked,I(),P(!0)})),Z instanceof HTMLInputElement&&(Z.checked=f.quote_show_vehicle,Z.addEventListener("change",()=>{f.quote_show_vehicle=Z.checked,I(),P(!0)})),Y instanceof HTMLInputElement&&(Y.value=f.quote_footer_text,Y.addEventListener("input",()=>{f.quote_footer_text=Y.value,I(),P(!0)})),I(),t.addEventListener("input",()=>{b.quote_prefix=t.value,I(),P(!0)}),n.addEventListener("input",()=>{b.quote_counter=Math.max(1,parseInt(String(n.value||"1"),10)||1),I(),P(!0)}),s.addEventListener("input",()=>{b.name=s.value,I(),P(!0)}),_.addEventListener("input",()=>{b.address=ie(),I(),P(!0)}),c==null||c.addEventListener("input",()=>{b.address=ie(),I(),P(!0)}),p==null||p.addEventListener("input",()=>{b.address=ie(),I(),P(!0)}),q.addEventListener("change",()=>{b.has_btw=q.checked,P(!0)}),x.addEventListener("input",()=>{b.btw_nummer=x.value,I(),P(!0)}),G.addEventListener("input",()=>{b.kvk_nummer=G.value,I(),P(!0)}),E.addEventListener("input",()=>{b.iban=E.value,I(),P(!0)}),i==null||i.addEventListener("click",async()=>{var r;if(!(!M||!((r=l.activeGarage)!=null&&r.id)||!g)){i.disabled=!0,i.textContent="Opslaan...";try{const v={quote_prefix:b.quote_prefix,quote_counter:Math.max(1,parseInt(String(b.quote_counter||1),10)||1),name:b.name,address:ie(),has_btw:b.has_btw,btw_nummer:b.btw_nummer,kvk_nummer:b.kvk_nummer,iban:b.iban},K=await Te(v),w=await Ce(f);d={...d,...K},y={...y,...w},l.activeGarage&&(l.activeGarage.quotePrefix=v.quote_prefix,l.activeGarage.quoteCounter=v.quote_counter),qe(),ue(),P(!1)}catch(v){console.error(v),i.disabled=!1,i.textContent="Opslaan"}}}),P(!1)},Oe=()=>{const t=e.querySelectorAll(".payment-card"),n=e.querySelectorAll(".payment-settings"),o=e.querySelector("#mollieApiKey"),k=e.querySelector("#tikkieApiKey"),i=e.querySelector("#testMode"),s=e.querySelector(".test-mode-banner"),_=e.querySelector("#autoGenerate"),c=e.querySelector("#whatsappTemplate"),p=e.querySelector("#messagePreview"),q=e.querySelector("#connectMollie"),x=e.querySelector("#mollieConnectionStatus"),G=e.querySelectorAll(".var-chip"),E=e.querySelector("#resetTemplate"),a=e.querySelector("#paymentsSaveButton"),C=e.querySelectorAll(".show-password-btn"),m={payment_method:d.payment_method||"mollie",mollie_api_key:d.mollie_api_key||"",tikkie_api_key:d.tikkie_api_key||"",test_mode:!!d.test_mode,mollie_auto_generate:d.mollie_auto_generate!==void 0?d.mollie_auto_generate:!0,whatsapp_template:d.whatsapp_template||c.value};let B=!1;const S=u=>{B=u,be("betalingen",u),a instanceof HTMLButtonElement&&(a.hidden=!u,a.disabled=!1,a.textContent="Opslaan")},se=u=>u==="tikkie"?"Tikkie":"Mollie iDEAL",D=u=>{x instanceof HTMLElement&&(u?(x.textContent=m.test_mode?"Gekoppeld met Mollie (testmodus).":"Gekoppeld met Mollie (live modus).",x.style.color="#0f766e"):(x.textContent="Nog niet gekoppeld. Klik op 'Verbind Mollie' om te bevestigen.",x.style.color="#6b7280"))},R=async()=>{var u;if(!M||!((u=l.activeGarage)!=null&&u.id))return{ok:!1,error:new Error("Geen actieve garage of Supabase connectie")};const{error:L}=await M.from("garages").update(m).eq("id",l.activeGarage.id);return L?{ok:!1,error:L}:(d={...d,...m},l.activeGarage&&(l.activeGarage.paymentMethod=m.payment_method,l.activeGarage.whatsapp_template=m.whatsapp_template,l.activeGarage.test_mode=m.test_mode),{ok:!0})},ae=m.payment_method;t.forEach(u=>{u.dataset.method===ae?u.classList.add("selected"):u.classList.remove("selected")}),o.value=m.mollie_api_key,k.value=m.tikkie_api_key,i.checked=m.test_mode,_.checked=m.mollie_auto_generate,c.value=m.whatsapp_template,s&&(s.hidden=!m.test_mode),D(!!String(m.mollie_api_key||"").trim()),t.forEach(u=>{u.addEventListener("click",()=>{const L=u.dataset.method;t.forEach(N=>N.classList.remove("selected")),u.classList.add("selected"),n.forEach(N=>{N.dataset.method===L?N.hidden=!1:N.hidden=!0}),m.payment_method=L,S(!0)})}),o==null||o.addEventListener("input",()=>{m.mollie_api_key=o.value,D(!1),S(!0)}),k==null||k.addEventListener("input",()=>{m.tikkie_api_key=k.value,S(!0)}),C.forEach(u=>{u.addEventListener("click",L=>{L.preventDefault();const N=u.parentElement.querySelector("input"),H=N.type;N.type=H==="password"?"text":"password",u.textContent=H==="password"?"🙈":"👁️"})}),i.addEventListener("change",()=>{s&&(s.hidden=!i.checked),m.test_mode=i.checked,D(!!String(m.mollie_api_key||"").trim()),S(!0)}),q==null||q.addEventListener("click",async()=>{const u=String((o==null?void 0:o.value)||"").trim();if(!u){await Se("Vul eerst je Mollie API key in.","Let op");return}q.disabled=!0,q.textContent="Verbinden...",m.mollie_api_key=u,m.test_mode=!!(i!=null&&i.checked);try{const L=await R();if(!L.ok)throw L.error;ue(),S(!1),D(!0);const N=m.test_mode?"testmodus":"live modus",H=se(m.payment_method);await Se(`${H} gekoppeld in ${N}.`,"Gekoppeld")}catch(L){console.error("Mollie connect failed:",L),D(!1),await Se("Mollie koppelen mislukt. Controleer je API key en probeer opnieuw.","Fout")}finally{q.disabled=!1,q.textContent="Verbind Mollie"}}),_.addEventListener("change",()=>{m.mollie_auto_generate=_.checked,S(!0)});const $=()=>{let u=c.value.replace(/{{klant_naam}}/g,"Jan Pietersen").replace(/{{garage_naam}}/g,"Garage De Vries").replace(/{{factuur_nummer}}/g,"2026-007").replace(/{{totaal_bedrag}}/g,"€204,58").replace(/{{betaaltermijn}}/g,"14").replace(/{{betaal_link}}/g,"https://pay.mollie.com/...").replace(/{{betaal_methode}}/g,"Mollie iDEAL").replace(/{{datum}}/g,new Date().toLocaleDateString("nl-NL")).replace(/{{kenteken}}/g,"SN-80-2V").replace(/{{auto_merk}}/g,"Peugeot 208");p&&(p.textContent=u)};c.addEventListener("input",()=>{$(),m.whatsapp_template=c.value,S(!0)}),G.forEach(u=>{u.addEventListener("click",L=>{L.preventDefault();const N=u.dataset.var,H=c,ne=H.selectionStart,re=H.selectionEnd,V=H.value;H.value=V.substring(0,ne)+N+V.substring(re),H.selectionStart=H.selectionEnd=ne+N.length,H.focus(),$(),m.whatsapp_template=H.value,S(!0)})}),E.addEventListener("click",()=>{const u=`Beste {{klant_naam}},

Hierbij uw factuur van {{garage_naam}}.

Factuurnummer: {{factuur_nummer}}
Totaalbedrag: {{totaal_bedrag}}
Betaaltermijn: {{betaaltermijn}} dagen

Betaal eenvoudig via {{betaal_methode}}:
{{betaal_link}}

Met vriendelijke groet,
{{garage_naam}}`;c.value=u,$(),m.whatsapp_template=u,S(!0)}),a==null||a.addEventListener("click",async()=>{var u;if(!(!M||!((u=l.activeGarage)!=null&&u.id)||!B)){a.disabled=!0,a.textContent="Opslaan...";try{const L=await R();if(!L.ok)throw L.error;ue(),D(!!String(m.mollie_api_key||"").trim()),S(!1)}catch(L){console.error("Payments save failed:",L),a.disabled=!1,a.textContent="Opslaan"}}}),$(),S(!1)};Le()}const it=document.querySelector("#app");Ve();ot(it);
