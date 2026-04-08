import{e as Ke,c as Fe}from"./theme-C7qkBi-i.js";/* empty css                      */import{e as Ve,a as We,c as Re,l as ze,z as $e}from"./branding-CAr728QY.js";const Ue="https://mkgfckxiusdcnqhethdy.supabase.co",Je="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",M=Ke(Ue,Je);function Ie(A){return String(A).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function he(A,n="00:00"){const e=String(A??"").trim().match(/^(\d{1,2})(?::(\d{2}))?$/);if(!e)return n;const O=Number.parseInt(e[1],10);if(!Number.isFinite(O))return n;const i=Math.min(23,Math.max(0,O));return`${String(i).padStart(2,"0")}:00`}function Ze(A){const n=he(A==null?void 0:A.working_hours_start,"00:00"),V=he(A==null?void 0:A.working_hours_end,"23:00");return n>V?{from:n,to:n}:{from:n,to:V}}function Be(){const A=[];for(let n=0;n<=23;n+=1){const V=`${String(n).padStart(2,"0")}:00`;A.push(`<option value="${V}">${V}</option>`)}return A.join("")}function ve(A,n){return`
    <div class="folder-card" data-folder="${A.toLowerCase()}">
      <img class="folder-image" src="./folder.png" alt="Folder" loading="lazy" decoding="async">
      <h3 class="folder-name">${Ie(A)}</h3>
      <p class="folder-description">${Ie(n)}</p>
     
    </div>
  `}function Ye(){return`
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
  `}function Xe(){return`
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
  `}function Qe(){return`
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
  `}function et(){return`
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
  `}function tt(){return`
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
                  <select id="dashboardDayFrom">${Be()}</select>
                </label>
                <label class="dashboard-time-range-item" for="dashboardDayTo">
                  <span>Tot</span>
                  <select id="dashboardDayTo">${Be()}</select>
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
  `}function at(){return`
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
  `}function nt(){return`
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
  `}async function ot(A){var Pe,Le,Ee;if(!A)return;const n=await Ve();if(!n)return;if(!n.isAdmin&&!n.activeGarage){A.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is not mapped to a garage.</p>
      </section>
    `;return}We(n.activeGarage);const{shell:V,contentArea:e}=Re({activePage:"settings",title:"Instellingen",headerNote:"",userEmail:n.user.email,onLogout:ze,garage:n.activeGarage,isAdmin:n.isAdmin});A.replaceChildren(V);let O="overview",i={},X={},w={};const ce={dashboard:!1,website:!1,garage:!1,factuur:!1,offerte:!1,betalingen:!1},me=(t,r)=>{ce[t]=!!r},ge=()=>Object.values(ce).some(Boolean),_e=()=>new Promise(t=>{const r=document.querySelector(".confirm-dialog-overlay");r&&r.remove();const p=document.createElement("div");p.innerHTML=`
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
    `;const u=p.firstElementChild;if(!u){t(!1);return}const a=c=>{u.remove(),t(c)};u.addEventListener("click",c=>{const q=c.target;if(!(q instanceof Element))return;if(q===u){a(!1);return}const d=q.closest("[data-confirm-action]");d&&a(d.getAttribute("data-confirm-action")==="continue")}),document.body.append(u)}),Se=t=>String(t??"").trim(),ye=t=>{const r=Se(t);return r?/^https?:\/\//i.test(r)?r:`https://${r}`:"https://voorbeeld.nl"},we=()=>{const t=V.querySelector(".brand-text");t&&(t.textContent=i.name||"Garage");const r=V.querySelector(".topbar-domain-inner-left-side a");r&&(r.textContent=ye(i.domain),r.href=ye(i.domain))};if(M&&((Pe=n.activeGarage)!=null&&Pe.id))try{const{data:t}=await M.from("garages").select("*").eq("id",n.activeGarage.id).maybeSingle();t&&(i=t,i.language&&$e(String(i.language)))}catch(t){console.error("Failed to load garage data:",t)}if(M&&((Le=n.activeGarage)!=null&&Le.id))try{const{data:t}=await M.from("garage_settings").select("*").eq("garage_id",n.activeGarage.id).maybeSingle();t&&(X=t)}catch(t){console.error("Failed to load website settings:",t)}if(M&&((Ee=n.activeGarage)!=null&&Ee.id))try{const{data:t}=await M.from("garage_pdf_settings").select("*").eq("garage_id",n.activeGarage.id).maybeSingle();t&&(w=t)}catch(t){console.error("Failed to load pdf settings:",t)}const de=()=>{const t=e.querySelector("#autoSaveIndicator");t&&(t.classList.add("visible"),setTimeout(()=>{t.classList.remove("visible")},2e3))},ke=()=>{O==="overview"?e.innerHTML=Ye():O==="dashboard"?(e.innerHTML=tt(),Ne()):O==="website"?(e.innerHTML=at(),He()):O==="garage"?e.innerHTML=Xe():O==="factuur"?(e.innerHTML=Qe(),je()):O==="offerte"?(e.innerHTML=et(),Ge()):O==="betalingen"&&(e.innerHTML=nt(),De()),Ae()},Q=async t=>{if(!ge()){O=t,ke();return}await _e()&&(Object.keys(ce).forEach(p=>{ce[p]=!1}),O=t,ke())},Ae=()=>{const t=e.querySelector(".back-button");t&&t.addEventListener("click",async()=>{await Q("overview")}),e.querySelectorAll(".folder-card").forEach(u=>{u.addEventListener("click",async()=>{const a=u.dataset.folder;a==="dashboard"?await Q("dashboard"):a==="website"?await Q("website"):a==="garage"?await Q("garage"):a==="factuur"?await Q("factuur"):a==="offerte"?await Q("offerte"):a==="betalingen"&&await Q("betalingen")})}),e.querySelectorAll("[data-target-folder]").forEach(u=>{u.addEventListener("click",async()=>{const a=u.getAttribute("data-target-folder")||"overview";await Q(a)})})},Me=t=>{ge()&&(t.preventDefault(),t.returnValue="")};window.addEventListener("beforeunload",Me),V.addEventListener("click",async t=>{const r=t.target;if(!(r instanceof Element))return;const p=r.closest("a[href]");if(!(p instanceof HTMLAnchorElement))return;const u=p.getAttribute("href")||"";!u||u.startsWith("#")||p.target==="_blank"||!ge()||(t.preventDefault(),!await _e())||(Object.keys(ce).forEach(c=>{ce[c]=!1}),window.location.assign(p.href))});const Ne=()=>{const t=e.querySelector("#dashboardName"),r=e.querySelector("#dashboardDomain"),p=e.querySelector("#dashboardDayFrom"),u=e.querySelector("#dashboardDayTo"),a=e.querySelector("#dashboardSaveButton"),c=e.querySelector("#dashboardPreviewName"),q=e.querySelector("#dashboardPreviewDomain"),d=e.querySelector("#dashboardPreviewMark");if(!(t instanceof HTMLInputElement)||!(r instanceof HTMLInputElement)||!(p instanceof HTMLSelectElement)||!(u instanceof HTMLSelectElement))return;let v=!1;const _=()=>{const P=t.value.trim()||"SAS Website",o=ye(r.value);c&&(c.textContent=P),q&&(q.textContent=o),d&&(d.textContent=(P[0]||"S").toUpperCase())},x=P=>{v=P,me("dashboard",P),a instanceof HTMLButtonElement&&(a.hidden=!v,a.disabled=!1,a.textContent="Opslaan")};t.value=i.name||"",r.value=i.domain||"";const j=Ze(i);p.value=j.from,u.value=j.to,_(),t.addEventListener("input",()=>{_(),x(!0)}),r.addEventListener("input",()=>{_(),x(!0)}),p.addEventListener("change",()=>{p.value>u.value&&(u.value=p.value),x(!0)}),u.addEventListener("change",()=>{u.value<p.value&&(p.value=u.value),x(!0)}),a==null||a.addEventListener("click",async()=>{var D;const P=he(p.value,"00:00"),o=he(u.value,"23:00"),I=o<P?P:o;if(!M||!((D=n.activeGarage)!=null&&D.id))return;const l={name:t.value.trim()||"Garage",domain:Se(r.value),working_hours_start:P,working_hours_end:I};a.disabled=!0,a.textContent="Opslaan...";try{const{error:S}=await M.from("garages").update(l).eq("id",n.activeGarage.id);if(S)throw S;i={...i,...l},n.activeGarage&&(n.activeGarage.name=l.name,n.activeGarage.domain=l.domain,n.activeGarage.working_hours_start=l.working_hours_start,n.activeGarage.working_hours_end=l.working_hours_end,n.activeGarage.workingHoursStart=l.working_hours_start,n.activeGarage.workingHoursEnd=l.working_hours_end);try{window.sessionStorage.removeItem("garage-dashboard.auth-context")}catch{}we(),de(),x(!1)}catch(S){console.error("Dashboard save failed:",S),a.disabled=!1,a.textContent="Opslaan"}})},He=()=>{const t=e.querySelector("#primaryColor"),r=e.querySelector("#colorSwatch"),p=e.querySelector("#heroTitle"),u=e.querySelector("#heroSubtitle"),a=e.querySelector("#aboutText"),c=e.querySelectorAll(".font-card"),q=e.querySelectorAll(".preset-pill"),d=e.querySelector("#websiteSaveButton"),v={primary_color:X.primary_color||"#2563EB",font:X.font||"Inter",hero_title:X.hero_title||"",hero_subtitle:X.hero_subtitle||"",about_text:X.about_text||""};let _=!1;const x=o=>{_=o,me("website",o),d instanceof HTMLButtonElement&&(d.hidden=!o,d.disabled=!1,d.textContent="Opslaan")};t.value=v.primary_color,r.style.backgroundColor=v.primary_color,p.value=v.hero_title,u.value=v.hero_subtitle,a.value=v.about_text,c.forEach(o=>{o.classList.toggle("selected",o.dataset.font===v.font)});const j=o=>{t.value=o,r.style.backgroundColor=o;const I=e.querySelector("#previewHeroTitle");I&&(I.style.color=o),v.primary_color=o,x(!0)};t.addEventListener("input",o=>j(o.target.value)),q.forEach(o=>{o.addEventListener("click",()=>{j(o.dataset.color)})}),c.forEach(o=>{o.addEventListener("click",()=>{c.forEach(I=>I.classList.remove("selected")),o.classList.add("selected"),v.font=o.dataset.font||"Inter",x(!0)})});const P=(o,I)=>{const l=o.parentElement.querySelector(".char-counter .current"),D=()=>{l&&(l.textContent=o.value.length)};o.addEventListener("input",()=>{if(D(),o.id==="heroTitle"){const S=e.querySelector("#previewHeroTitle");S&&(S.textContent=o.value||"Uw garage titel")}else if(o.id==="heroSubtitle"){const S=e.querySelector("#previewHeroSubtitle");S&&(S.textContent=o.value||"Korte beschrijving")}v[I]=o.value,x(!0)}),D()};P(p,"hero_title"),P(u,"hero_subtitle"),P(a,"about_text"),d==null||d.addEventListener("click",async()=>{var o;if(!(!M||!((o=n.activeGarage)!=null&&o.id)||!_)){d.disabled=!0,d.textContent="Opslaan...";try{const{error:I}=await M.from("garage_settings").upsert({...v,garage_id:n.activeGarage.id},{onConflict:"garage_id"});if(I)throw I;X={...X,...v},de(),x(!1)}catch(I){console.error("Website save failed:",I),d.disabled=!1,d.textContent="Opslaan"}}}),x(!1)},xe=async t=>{const r={...t},p=Object.keys(r).length+1;for(let u=0;u<p;u+=1){const{error:a}=await M.from("garages").update(r).eq("id",n.activeGarage.id);if(!a)return r;if(!(String((a==null?void 0:a.code)??"")==="42703"))throw a;const q=String((a==null?void 0:a.message)??""),d=q.match(/column\s+"?([a-zA-Z0-9_]+)"?\s+of\s+relation\s+"garages"/i)||q.match(/garages\.([a-zA-Z0-9_]+)/i),v=String((d==null?void 0:d[1])??"").trim();if(!v||!(v in r))throw a;delete r[v]}return r},qe=async t=>{var u;if(!M||!((u=n.activeGarage)!=null&&u.id))return t;const r={garage_id:n.activeGarage.id,...t},p=Object.keys(r).length+1;for(let a=0;a<p;a+=1){const{error:c}=await M.from("garage_pdf_settings").upsert(r,{onConflict:"garage_id"});if(!c)return r;if(!(String((c==null?void 0:c.code)??"")==="42703"))throw c;const d=String((c==null?void 0:c.message)??""),v=d.match(/column\s+"?([a-zA-Z0-9_]+)"?\s+of\s+relation\s+"garage_pdf_settings"/i)||d.match(/garage_pdf_settings\.([a-zA-Z0-9_]+)/i),_=String((v==null?void 0:v[1])??"").trim();if(!_||!(_ in r))throw c;delete r[_]}return r},je=()=>{const t=e.querySelector("#invoicePrefixInput"),r=e.querySelector("#invoiceCounterInput"),p=e.querySelector("#invoiceSeriesPreview"),u=e.querySelector("#invoiceSeriesPreviewText"),a=e.querySelector("#invoiceNumberWarning"),c=e.querySelector("#factuurSaveButton"),q=e.querySelector("#factuurCompanyName"),d=e.querySelector("#factuurCompanyAddress"),v=e.querySelector("#factuurCompanyNumber"),_=e.querySelector("#factuurCompanyPostcode"),x=e.querySelector("#factuurHasBTW"),j=e.querySelector("#factuurBtwNumber"),P=e.querySelector("#factuurKvkNumber"),o=e.querySelector("#factuurIbanNumber"),I=e.querySelector("#factuurPdfBusinessName"),l=e.querySelector("#factuurPdfGarageAddr"),D=e.querySelector("#factuurPdfBTW"),S=e.querySelector("#factuurPdfKVK"),se=e.querySelector("#factuurPdfIBAN"),K=e.querySelector("#factuurPdfInvoiceNum"),W=e.querySelector("#factuurPdfPreviewHeader"),ee=e.querySelector(".pdf-preview"),R=e.querySelector("#factuurPdfMetaSection"),f=e.querySelector("#factuurPdfMetaGrid"),L=e.querySelector("#factuurPdfCustomerBlock"),N=e.querySelector("#factuurPdfVehicleBlock"),H=e.querySelector("#factuurPdfBtwRow"),te=e.querySelector("#factuurPdfKvkRow"),ae=e.querySelector("#factuurPdfIbanRow"),F=e.querySelector("#factuurPdfFooterPreview"),ie=e.querySelector("#factuurPdfPaymentInstructionPreview"),ne=e.querySelector("#factuurPdfPrimaryColor"),ue=e.querySelector("#factuurPdfColorSwatch"),be=e.querySelectorAll("[data-factuur-style]"),le=e.querySelectorAll("[data-factuur-font]"),z=e.querySelector("#factuurPdfShowBtw"),$=e.querySelector("#factuurPdfShowIban"),U=e.querySelector("#factuurPdfShowKvk"),J=e.querySelector("#factuurPdfShowCustomer"),Z=e.querySelector("#factuurPdfShowVehicle"),h=e.querySelector("#factuurPdfPaymentInstruction"),m=e.querySelector("#factuurPdfFooterText");if(!(t instanceof HTMLInputElement)||!(r instanceof HTMLInputElement)||!(q instanceof HTMLInputElement)||!(d instanceof HTMLInputElement)||!(j instanceof HTMLInputElement)||!(P instanceof HTMLInputElement)||!(o instanceof HTMLInputElement)||!(x instanceof HTMLInputElement))return;const y={invoice_prefix:String(i.invoice_prefix??""),invoice_counter:Number.isFinite(Number(i.invoice_counter))?Number(i.invoice_counter):Math.max(1,Number(i.invoice_sequence??1)||1),name:i.name||"",address:i.address||"",has_btw:i.has_btw??!0,btw_nummer:i.btw_nummer||"",kvk_nummer:i.kvk_nummer||i.kvk_number||"",iban:i.iban||""},g={primary_color:w.primary_color||"#2563EB",font:w.font||"helvetica",header_style:w.header_style||"professional",show_btw:w.show_btw==null?!0:!!w.show_btw,show_iban:w.show_iban==null?!0:!!w.show_iban,show_kvk:w.show_kvk==null?!0:!!w.show_kvk,show_customer:w.show_customer==null?!0:!!w.show_customer,show_vehicle:w.show_vehicle==null?!0:!!w.show_vehicle,payment_instruction_text:w.payment_instruction_text||"Betaalinstructie: Gelieve binnen 14 dagen over te maken onder vermelding van het factuurnummer.",footer_text:w.footer_text||""};let oe=0,E=!1;const C=k=>{const B=String(k||"").trim(),[T="",re=""]=B.split(","),fe=T.trim(),pe=fe.match(/^(.*?)(?:\s+(\d+[A-Za-z0-9\-\/]*)?)$/);return{street:pe?pe[1].trim():fe,number:pe&&pe[2]?pe[2].trim():"",postcode:re.trim()}},Y=()=>{const k=String(d.value||"").trim(),B=String(v instanceof HTMLInputElement?v.value:"").trim(),T=String(_ instanceof HTMLInputElement?_.value:"").trim();return[[k,B].filter(Boolean).join(" "),T].filter(Boolean).join(", ")},s=k=>{E=k,me("factuur",k),c instanceof HTMLButtonElement&&(c.hidden=!k,c.disabled=!1,c.textContent="Opslaan")},b=()=>{const k=Math.max(1,Number(y.invoice_counter||1)),B=`${String(y.invoice_prefix||"")}${String(k).padStart(3,"0")}`;if(p&&(p.textContent=B),u&&(u.textContent=`Volgende factuur wordt: ${B}`),K&&(K.textContent=B),a&&(a.style.display=k<oe?"block":"none"),y.address=Y(),I&&(I.textContent=y.name||"Garage De Vries"),l&&(l.textContent=y.address||"Adres"),D&&(D.textContent=y.btw_nummer||"NL123456789"),S&&(S.textContent=y.kvk_nummer||"12345678"),se&&(se.textContent=y.iban||"NL91 ABNA 0417 1643 00"),W&&(W.dataset.style=g.header_style),ee){ee.style.setProperty("--pdf-accent",g.primary_color);const T={times:"'Times New Roman', serif",georgia:"Georgia, 'Times New Roman', serif",courier:"'Courier New', monospace",arial:"Arial, Helvetica, sans-serif"};ee.style.fontFamily=T[g.font]||"Helvetica, Arial, sans-serif"}if(H&&(H.style.display=g.show_btw?"block":"none"),te&&(te.style.display=g.show_kvk?"block":"none"),ae&&(ae.style.display=g.show_iban?"block":"none"),L&&(L.style.display=g.show_customer?"block":"none"),N&&(N.style.display=g.show_vehicle?"block":"none"),f){const T=Number(g.show_customer)+Number(g.show_vehicle);f.style.gridTemplateColumns=T<=1?"1fr":"1fr 1fr"}if(R&&(R.style.display=g.show_customer||g.show_vehicle?"block":"none"),F){const T=String(g.footer_text||"").trim();F.textContent=T,F.style.display=T?"block":"none"}if(ie){const T=String(g.payment_instruction_text||"").trim();ie.textContent=T,ie.style.display=T?"block":"none"}};t.value=y.invoice_prefix,r.value=String(y.invoice_counter),q.value=y.name;const G=C(y.address);d.value=G.street,v instanceof HTMLInputElement&&(v.value=G.number),_ instanceof HTMLInputElement&&(_.value=G.postcode),x.checked=!!y.has_btw,j.value=y.btw_nummer,P.value=y.kvk_nummer,o.value=y.iban,ne instanceof HTMLInputElement&&ue instanceof HTMLElement&&(ne.value=g.primary_color,ue.style.backgroundColor=g.primary_color,ne.addEventListener("input",()=>{g.primary_color=ne.value,ue.style.backgroundColor=ne.value,b(),s(!0)})),be.forEach(k=>{k.classList.toggle("selected",k.getAttribute("data-factuur-style")===g.header_style),k.addEventListener("click",()=>{be.forEach(B=>B.classList.remove("selected")),k.classList.add("selected"),g.header_style=String(k.getAttribute("data-factuur-style")||"professional"),b(),s(!0)})}),le.forEach(k=>{k.classList.toggle("selected",k.getAttribute("data-factuur-font")===g.font),k.addEventListener("click",()=>{le.forEach(B=>B.classList.remove("selected")),k.classList.add("selected"),g.font=String(k.getAttribute("data-factuur-font")||"helvetica"),b(),s(!0)})}),z instanceof HTMLInputElement&&(z.checked=g.show_btw,z.addEventListener("change",()=>{g.show_btw=z.checked,b(),s(!0)})),$ instanceof HTMLInputElement&&($.checked=g.show_iban,$.addEventListener("change",()=>{g.show_iban=$.checked,b(),s(!0)})),U instanceof HTMLInputElement&&(U.checked=g.show_kvk,U.addEventListener("change",()=>{g.show_kvk=U.checked,b(),s(!0)})),J instanceof HTMLInputElement&&(J.checked=g.show_customer,J.addEventListener("change",()=>{g.show_customer=J.checked,b(),s(!0)})),Z instanceof HTMLInputElement&&(Z.checked=g.show_vehicle,Z.addEventListener("change",()=>{g.show_vehicle=Z.checked,b(),s(!0)})),h instanceof HTMLTextAreaElement&&(h.value=g.payment_instruction_text,h.addEventListener("input",()=>{g.payment_instruction_text=h.value,b(),s(!0)})),m instanceof HTMLInputElement&&(m.value=g.footer_text,m.addEventListener("input",()=>{g.footer_text=m.value,b(),s(!0)})),b(),t.addEventListener("input",()=>{y.invoice_prefix=t.value,b(),s(!0)}),r.addEventListener("input",()=>{y.invoice_counter=Math.max(1,parseInt(String(r.value||"1"),10)||1),b(),s(!0)}),q.addEventListener("input",()=>{y.name=q.value,b(),s(!0)}),d.addEventListener("input",()=>{y.address=Y(),b(),s(!0)}),v==null||v.addEventListener("input",()=>{y.address=Y(),b(),s(!0)}),_==null||_.addEventListener("input",()=>{y.address=Y(),b(),s(!0)}),x.addEventListener("change",()=>{y.has_btw=x.checked,s(!0)}),j.addEventListener("input",()=>{y.btw_nummer=j.value,b(),s(!0)}),P.addEventListener("input",()=>{y.kvk_nummer=P.value,b(),s(!0)}),o.addEventListener("input",()=>{y.iban=o.value,b(),s(!0)}),c==null||c.addEventListener("click",async()=>{var k;if(!(!M||!((k=n.activeGarage)!=null&&k.id)||!E)){c.disabled=!0,c.textContent="Opslaan...";try{const B={invoice_prefix:y.invoice_prefix,invoice_counter:Math.max(1,parseInt(String(y.invoice_counter||1),10)||1),invoice_sequence:Math.max(1,parseInt(String(y.invoice_counter||1),10)||1),name:y.name,address:Y(),has_btw:y.has_btw,btw_nummer:y.btw_nummer,kvk_nummer:y.kvk_nummer,iban:y.iban},T=await xe(B),re=await qe(g);i={...i,...T},w={...w,...re},n.activeGarage&&(n.activeGarage.invoicePrefix=B.invoice_prefix),we(),de(),s(!1)}catch(B){console.error(B),c.disabled=!1,c.textContent="Opslaan"}}}),(async()=>{var k;if(!(!M||!((k=n.activeGarage)!=null&&k.id)))try{const{data:B}=await M.from("completed_appointments").select("completion_notes").eq("garage_id",n.activeGarage.id).limit(500);oe=(B??[]).reduce((T,re)=>{var Ce;let fe={};try{fe=JSON.parse(String((re==null?void 0:re.completion_notes)??"{}"))}catch{fe={}}const Oe=((Ce=String(fe.invoice_number??"").trim().match(/(\d+)(?!.*\d)/))==null?void 0:Ce[1])??"",Te=parseInt(Oe,10);return Number.isFinite(Te)?Math.max(T,Te):T},0),b()}catch{}})(),s(!1)},Ge=()=>{const t=e.querySelector("#quotePrefixInput"),r=e.querySelector("#quoteCounterInput"),p=e.querySelector("#quoteSeriesPreview"),u=e.querySelector("#quoteSeriesPreviewText"),a=e.querySelector("#offerteSaveButton"),c=e.querySelector("#offerteCompanyName"),q=e.querySelector("#offerteCompanyAddress"),d=e.querySelector("#offerteCompanyNumber"),v=e.querySelector("#offerteCompanyPostcode"),_=e.querySelector("#offerteHasBTW"),x=e.querySelector("#offerteBtwNumber"),j=e.querySelector("#offerteKvkNumber"),P=e.querySelector("#offerteIbanNumber"),o=e.querySelector("#offertePdfBusinessName"),I=e.querySelector("#offertePdfGarageAddr"),l=e.querySelector("#offertePdfBTW"),D=e.querySelector("#offertePdfKVK"),S=e.querySelector("#offertePdfIBAN"),se=e.querySelector("#offertePdfInvoiceNum"),K=e.querySelector("#offertePdfPreviewHeader"),W=e.querySelector("#offertePdfPreviewCard"),ee=e.querySelector("#offertePdfMetaSection"),R=e.querySelector("#offertePdfMetaGrid"),f=e.querySelector("#offertePdfCustomerBlock"),L=e.querySelector("#offertePdfVehicleBlock"),N=e.querySelector("#offertePdfBtwRow"),H=e.querySelector("#offertePdfKvkRow"),te=e.querySelector("#offertePdfIbanRow"),ae=e.querySelector("#offertePdfFooterPreview"),F=e.querySelector("#offertePdfPrimaryColor"),ie=e.querySelector("#offertePdfColorSwatch"),ne=e.querySelectorAll("[data-offerte-layout]"),ue=e.querySelectorAll("[data-offerte-style]"),be=e.querySelectorAll("[data-offerte-font]"),le=e.querySelector("#offertePdfShowBtw"),z=e.querySelector("#offertePdfShowIban"),$=e.querySelector("#offertePdfShowKvk"),U=e.querySelector("#offertePdfShowCustomer"),J=e.querySelector("#offertePdfShowVehicle"),Z=e.querySelector("#offertePdfFooterText");if(!(t instanceof HTMLInputElement)||!(r instanceof HTMLInputElement)||!(c instanceof HTMLInputElement)||!(q instanceof HTMLInputElement)||!(x instanceof HTMLInputElement)||!(j instanceof HTMLInputElement)||!(P instanceof HTMLInputElement)||!(_ instanceof HTMLInputElement))return;const h={quote_prefix:String(i.quote_prefix??"OFF-"),quote_counter:Number.isFinite(Number(i.quote_counter))?Number(i.quote_counter):1,name:i.name||"",address:i.address||"",has_btw:i.has_btw??!0,btw_nummer:i.btw_nummer||"",kvk_nummer:i.kvk_nummer||i.kvk_number||"",iban:i.iban||""},m={quote_primary_color:w.quote_primary_color||"#16A34A",quote_font:w.quote_font||"helvetica",quote_header_style:w.quote_header_style||"professional",quote_show_btw:w.quote_show_btw==null?!0:!!w.quote_show_btw,quote_show_iban:w.quote_show_iban==null?!1:!!w.quote_show_iban,quote_show_kvk:w.quote_show_kvk==null?!0:!!w.quote_show_kvk,quote_show_customer:w.quote_show_customer==null?!0:!!w.quote_show_customer,quote_show_vehicle:w.quote_show_vehicle==null?!0:!!w.quote_show_vehicle,quote_footer_text:w.quote_footer_text||"",quote_layout:w.quote_layout||"proposal"};let y=!1;const g=s=>{const b=String(s||"").trim(),[G="",k=""]=b.split(","),B=G.trim(),T=B.match(/^(.*?)(?:\s+(\d+[A-Za-z0-9\-\/]*)?)$/);return{street:T?T[1].trim():B,number:T&&T[2]?T[2].trim():"",postcode:k.trim()}},oe=()=>{const s=String(q.value||"").trim(),b=String(d instanceof HTMLInputElement?d.value:"").trim(),G=String(v instanceof HTMLInputElement?v.value:"").trim();return[[s,b].filter(Boolean).join(" "),G].filter(Boolean).join(", ")},E=s=>{y=s,me("offerte",s),a instanceof HTMLButtonElement&&(a.hidden=!s,a.disabled=!1,a.textContent="Opslaan")},C=()=>{const s=Math.max(1,Number(h.quote_counter||1)),b=`${String(h.quote_prefix||"OFF-")}${String(s).padStart(3,"0")}`;if(p&&(p.textContent=b),u&&(u.textContent=`Volgende offerte wordt: ${b}`),se&&(se.textContent=b),h.address=oe(),o&&(o.textContent=h.name||"Garage De Vries"),I&&(I.textContent=h.address||"Adres"),l&&(l.textContent=h.btw_nummer||"NL123456789"),D&&(D.textContent=h.kvk_nummer||"12345678"),S&&(S.textContent=h.iban||"NL91 ABNA 0417 1643 00"),K&&(K.dataset.style=m.quote_header_style),W instanceof HTMLElement){W.style.setProperty("--pdf-accent",m.quote_primary_color),W.dataset.quoteLayout=String(m.quote_layout||"proposal");const G={times:"'Times New Roman', serif",georgia:"Georgia, 'Times New Roman', serif",courier:"'Courier New', monospace",arial:"Arial, Helvetica, sans-serif"};W.style.fontFamily=G[m.quote_font]||"Helvetica, Arial, sans-serif"}if(N&&(N.style.display=m.quote_show_btw?"block":"none"),H&&(H.style.display=m.quote_show_kvk?"block":"none"),te&&(te.style.display=m.quote_show_iban?"block":"none"),f&&(f.style.display=m.quote_show_customer?"block":"none"),L&&(L.style.display=m.quote_show_vehicle?"block":"none"),R){const G=Number(m.quote_show_customer)+Number(m.quote_show_vehicle);R.style.gridTemplateColumns=G<=1?"1fr":"1fr 1fr"}if(ee&&(ee.style.display=m.quote_show_customer||m.quote_show_vehicle?"block":"none"),ae){const G=String(m.quote_footer_text||"").trim();ae.textContent=G,ae.style.display=G?"block":"none"}};t.value=h.quote_prefix,r.value=String(h.quote_counter),c.value=h.name;const Y=g(h.address);q.value=Y.street,d instanceof HTMLInputElement&&(d.value=Y.number),v instanceof HTMLInputElement&&(v.value=Y.postcode),_.checked=!!h.has_btw,x.value=h.btw_nummer,j.value=h.kvk_nummer,P.value=h.iban,F instanceof HTMLInputElement&&ie instanceof HTMLElement&&(F.value=m.quote_primary_color,ie.style.backgroundColor=m.quote_primary_color,F.addEventListener("input",()=>{m.quote_primary_color=F.value,ie.style.backgroundColor=F.value,C(),E(!0)})),ne.forEach(s=>{s.classList.toggle("selected",s.getAttribute("data-offerte-layout")===m.quote_layout),s.addEventListener("click",()=>{ne.forEach(b=>b.classList.remove("selected")),s.classList.add("selected"),m.quote_layout=String(s.getAttribute("data-offerte-layout")||"proposal"),C(),E(!0)})}),ue.forEach(s=>{s.classList.toggle("selected",s.getAttribute("data-offerte-style")===m.quote_header_style),s.addEventListener("click",()=>{ue.forEach(b=>b.classList.remove("selected")),s.classList.add("selected"),m.quote_header_style=String(s.getAttribute("data-offerte-style")||"professional"),C(),E(!0)})}),be.forEach(s=>{s.classList.toggle("selected",s.getAttribute("data-offerte-font")===m.quote_font),s.addEventListener("click",()=>{be.forEach(b=>b.classList.remove("selected")),s.classList.add("selected"),m.quote_font=String(s.getAttribute("data-offerte-font")||"helvetica"),C(),E(!0)})}),le instanceof HTMLInputElement&&(le.checked=m.quote_show_btw,le.addEventListener("change",()=>{m.quote_show_btw=le.checked,C(),E(!0)})),z instanceof HTMLInputElement&&(z.checked=m.quote_show_iban,z.addEventListener("change",()=>{m.quote_show_iban=z.checked,C(),E(!0)})),$ instanceof HTMLInputElement&&($.checked=m.quote_show_kvk,$.addEventListener("change",()=>{m.quote_show_kvk=$.checked,C(),E(!0)})),U instanceof HTMLInputElement&&(U.checked=m.quote_show_customer,U.addEventListener("change",()=>{m.quote_show_customer=U.checked,C(),E(!0)})),J instanceof HTMLInputElement&&(J.checked=m.quote_show_vehicle,J.addEventListener("change",()=>{m.quote_show_vehicle=J.checked,C(),E(!0)})),Z instanceof HTMLInputElement&&(Z.value=m.quote_footer_text,Z.addEventListener("input",()=>{m.quote_footer_text=Z.value,C(),E(!0)})),C(),t.addEventListener("input",()=>{h.quote_prefix=t.value,C(),E(!0)}),r.addEventListener("input",()=>{h.quote_counter=Math.max(1,parseInt(String(r.value||"1"),10)||1),C(),E(!0)}),c.addEventListener("input",()=>{h.name=c.value,C(),E(!0)}),q.addEventListener("input",()=>{h.address=oe(),C(),E(!0)}),d==null||d.addEventListener("input",()=>{h.address=oe(),C(),E(!0)}),v==null||v.addEventListener("input",()=>{h.address=oe(),C(),E(!0)}),_.addEventListener("change",()=>{h.has_btw=_.checked,E(!0)}),x.addEventListener("input",()=>{h.btw_nummer=x.value,C(),E(!0)}),j.addEventListener("input",()=>{h.kvk_nummer=j.value,C(),E(!0)}),P.addEventListener("input",()=>{h.iban=P.value,C(),E(!0)}),a==null||a.addEventListener("click",async()=>{var s;if(!(!M||!((s=n.activeGarage)!=null&&s.id)||!y)){a.disabled=!0,a.textContent="Opslaan...";try{const b={quote_prefix:h.quote_prefix,quote_counter:Math.max(1,parseInt(String(h.quote_counter||1),10)||1),name:h.name,address:oe(),has_btw:h.has_btw,btw_nummer:h.btw_nummer,kvk_nummer:h.kvk_nummer,iban:h.iban},G=await xe(b),k=await qe(m);i={...i,...G},w={...w,...k},n.activeGarage&&(n.activeGarage.quotePrefix=b.quote_prefix,n.activeGarage.quoteCounter=b.quote_counter),we(),de(),E(!1)}catch(b){console.error(b),a.disabled=!1,a.textContent="Opslaan"}}}),E(!1)},De=()=>{const t=e.querySelectorAll(".payment-card"),r=e.querySelectorAll(".payment-settings"),p=e.querySelector("#mollieApiKey"),u=e.querySelector("#tikkieApiKey"),a=e.querySelector("#testMode"),c=e.querySelector(".test-mode-banner"),q=e.querySelector("#autoGenerate"),d=e.querySelector("#whatsappTemplate"),v=e.querySelector("#messagePreview"),_=e.querySelector("#connectMollie"),x=e.querySelector("#mollieConnectionStatus"),j=e.querySelectorAll(".var-chip"),P=e.querySelector("#resetTemplate"),o=e.querySelector("#paymentsSaveButton"),I=e.querySelectorAll(".show-password-btn"),l={payment_method:i.payment_method||"mollie",mollie_api_key:i.mollie_api_key||"",tikkie_api_key:i.tikkie_api_key||"",test_mode:!!i.test_mode,mollie_auto_generate:i.mollie_auto_generate!==void 0?i.mollie_auto_generate:!0,whatsapp_template:i.whatsapp_template||d.value};let D=!1;const S=f=>{D=f,me("betalingen",f),o instanceof HTMLButtonElement&&(o.hidden=!f,o.disabled=!1,o.textContent="Opslaan")},se=f=>f==="tikkie"?"Tikkie":"Mollie iDEAL",K=f=>{x instanceof HTMLElement&&(f?(x.textContent=l.test_mode?"Gekoppeld met Mollie (testmodus).":"Gekoppeld met Mollie (live modus).",x.style.color="#0f766e"):(x.textContent="Nog niet gekoppeld. Klik op 'Verbind Mollie' om te bevestigen.",x.style.color="#6b7280"))},W=async()=>{var L;if(!M||!((L=n.activeGarage)!=null&&L.id))return{ok:!1,error:new Error("Geen actieve garage of Supabase connectie")};const{error:f}=await M.from("garages").update(l).eq("id",n.activeGarage.id);return f?{ok:!1,error:f}:(i={...i,...l},n.activeGarage&&(n.activeGarage.paymentMethod=l.payment_method,n.activeGarage.whatsapp_template=l.whatsapp_template,n.activeGarage.test_mode=l.test_mode),{ok:!0})},ee=l.payment_method;t.forEach(f=>{f.dataset.method===ee?f.classList.add("selected"):f.classList.remove("selected")}),p.value=l.mollie_api_key,u.value=l.tikkie_api_key,a.checked=l.test_mode,q.checked=l.mollie_auto_generate,d.value=l.whatsapp_template,c&&(c.hidden=!l.test_mode),K(!!String(l.mollie_api_key||"").trim()),t.forEach(f=>{f.addEventListener("click",()=>{const L=f.dataset.method;t.forEach(N=>N.classList.remove("selected")),f.classList.add("selected"),r.forEach(N=>{N.dataset.method===L?N.hidden=!1:N.hidden=!0}),l.payment_method=L,S(!0)})}),p==null||p.addEventListener("input",()=>{l.mollie_api_key=p.value,K(!1),S(!0)}),u==null||u.addEventListener("input",()=>{l.tikkie_api_key=u.value,S(!0)}),I.forEach(f=>{f.addEventListener("click",L=>{L.preventDefault();const N=f.parentElement.querySelector("input"),H=N.type;N.type=H==="password"?"text":"password",f.textContent=H==="password"?"🙈":"👁️"})}),a.addEventListener("change",()=>{c&&(c.hidden=!a.checked),l.test_mode=a.checked,K(!!String(l.mollie_api_key||"").trim()),S(!0)}),_==null||_.addEventListener("click",async()=>{const f=String((p==null?void 0:p.value)||"").trim();if(!f){window.alert("Vul eerst je Mollie API key in.");return}_.disabled=!0,_.textContent="Verbinden...",l.mollie_api_key=f,l.test_mode=!!(a!=null&&a.checked);try{const L=await W();if(!L.ok)throw L.error;de(),S(!1),K(!0);const N=l.test_mode?"testmodus":"live modus",H=se(l.payment_method);window.alert(`${H} gekoppeld in ${N}.`)}catch(L){console.error("Mollie connect failed:",L),K(!1),window.alert("Mollie koppelen mislukt. Controleer je API key en probeer opnieuw.")}finally{_.disabled=!1,_.textContent="Verbind Mollie"}}),q.addEventListener("change",()=>{l.mollie_auto_generate=q.checked,S(!0)});const R=()=>{let f=d.value.replace(/{{klant_naam}}/g,"Jan Pietersen").replace(/{{garage_naam}}/g,"Garage De Vries").replace(/{{factuur_nummer}}/g,"2026-007").replace(/{{totaal_bedrag}}/g,"€204,58").replace(/{{betaaltermijn}}/g,"14").replace(/{{betaal_link}}/g,"https://pay.mollie.com/...").replace(/{{betaal_methode}}/g,"Mollie iDEAL").replace(/{{datum}}/g,new Date().toLocaleDateString("nl-NL")).replace(/{{kenteken}}/g,"SN-80-2V").replace(/{{auto_merk}}/g,"Peugeot 208");v&&(v.textContent=f)};d.addEventListener("input",()=>{R(),l.whatsapp_template=d.value,S(!0)}),j.forEach(f=>{f.addEventListener("click",L=>{L.preventDefault();const N=f.dataset.var,H=d,te=H.selectionStart,ae=H.selectionEnd,F=H.value;H.value=F.substring(0,te)+N+F.substring(ae),H.selectionStart=H.selectionEnd=te+N.length,H.focus(),R(),l.whatsapp_template=H.value,S(!0)})}),P.addEventListener("click",()=>{const f=`Beste {{klant_naam}},

Hierbij uw factuur van {{garage_naam}}.

Factuurnummer: {{factuur_nummer}}
Totaalbedrag: {{totaal_bedrag}}
Betaaltermijn: {{betaaltermijn}} dagen

Betaal eenvoudig via {{betaal_methode}}:
{{betaal_link}}

Met vriendelijke groet,
{{garage_naam}}`;d.value=f,R(),l.whatsapp_template=f,S(!0)}),o==null||o.addEventListener("click",async()=>{var f;if(!(!M||!((f=n.activeGarage)!=null&&f.id)||!D)){o.disabled=!0,o.textContent="Opslaan...";try{const L=await W();if(!L.ok)throw L.error;de(),K(!!String(l.mollie_api_key||"").trim()),S(!1)}catch(L){console.error("Payments save failed:",L),o.disabled=!1,o.textContent="Opslaan"}}}),R(),S(!1)};ke()}const rt=document.querySelector("#app");Fe();ot(rt);
