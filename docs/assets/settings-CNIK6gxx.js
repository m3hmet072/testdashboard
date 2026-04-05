import{e as ke,c as we}from"./theme-CzeyRWKH.js";/* empty css                      */import{e as Se,a as _e,c as xe,l as Ee}from"./branding-BCgtwUdv.js";const Le="https://mkgfckxiusdcnqhethdy.supabase.co",Te="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",L=ke(Le,Te);function pe(N){return String(N).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Q(N,i){return`
    <div class="folder-card" data-folder="${N.toLowerCase()}">
      <img class="folder-image" src="./folder.png" alt="Folder" loading="lazy" decoding="async">
      <h3 class="folder-name">${pe(N)}</h3>
      <p class="folder-description">${pe(i)}</p>
     
    </div>
  `}function Ae(){return`
    <div class="settings-folders-wrapper">
      <div class="folder-cards-grid">
        ${Q("Dashboard","Naam en domein van je dashboard")}
        ${Q("Website","Kleuren, fonts, tekst en live preview")}
        ${Q("Garage","BTW, KVK, werkbon PDF stijl")}
        ${Q("Betalingen","Mollie, Tikkie, WhatsApp tekst")}
      </div>
    </div>
  `}function Ce(){return`
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
  `}function Be(){return`
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
  `}function qe(){return`
    <div class="settings-folder-page">
      <div class="settings-folder-header">
        <button class="back-button" data-action="back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 12.0039H19" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9999 18.0001C10.9999 18.0001 5.00001 13.581 5 11.9999C4.99999 10.4188 11 6 11 6" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Instellingen</button>
        <div class="settings-header-actions">
          <button class="button settings-header-save" id="garageSaveButton" type="button" hidden>Opslaan</button>
        </div>
      </div>

      <div class="settings-folder-content">
        <div class="settings-form-column">
          <!-- BEDRIJFS- EN JURIDISCHE GEGEVENS -->
          <section class="settings-section">
            <h2>Bedrijfs- en Juridische Gegevens</h2>
            <p class="section-description">Alles in 1 box: bedrijfsnaam, adres en juridische velden voor je factuur.</p>
            
            <div class="form-field">
              <label for="garageName">Naam van bedrijf</label>
              <input type="text" id="garageName" placeholder="Bijv. Garage De Vries">
            </div>
            
            <div class="form-field">
              <label for="garageAddress">Adres van bedrijf</label>
              <input type="text" id="garageAddress" placeholder="Straatnaam">
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-field">
                <label for="garageNumber">Nummer</label>
                <input type="text" id="garageNumber" placeholder="Bijv. 12A">
              </div>
              <div class="form-field">
                <label for="garagePostcode">Postcode</label>
                <input type="text" id="garagePostcode" placeholder="Bijv. 1234 AB">
              </div>
            </div>

            <div class="invoice-preview">
              Factuurnummer is automatisch: <strong id="invoicePreview">factuur-0001</strong>
            </div>
            
            <div class="form-field">
              <label for="btwNumber">BTW nummer</label>
              <input type="text" id="btwNumber" placeholder="NL123456789">
            </div>
            
            <div class="form-field">
              <label for="kvkNumber">KVK nummer</label>
              <input type="text" id="kvkNumber" placeholder="12345678">
            </div>
            
            <div class="form-field">
              <label for="ibanNumber">IBAN</label>
              <input type="text" id="ibanNumber" placeholder="NL91 ABNA 0417 1643 00">
            </div>

            <label class="toggle-label">
              <input type="checkbox" id="hasBTW" checked>
              <span>BTW berekenen (21%)</span>
            </label>
          </section>

          <!-- PDF STIJL -->
          <section class="settings-section">
            <h2>PDF Stijl</h2>
            <p class="section-description">Pas het uiterlijk van je factuur PDF aan</p>

            <div class="form-field">
              <label>Header kleur</label>
              <div class="color-picker-group">
                <div class="color-swatch" id="pdfColorSwatch"></div>
                <input type="color" id="pdfPrimaryColor" value="#2563EB" class="color-input">
              </div>
            </div>

            <div class="form-field">
              <label>Header stijl</label>
              <div class="font-cards">
                <button class="font-card" type="button" data-style="professional"><span>Professioneel</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-style="modern"><span>Modern</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-style="minimal"><span>Minimaal</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-style="boxed"><span>Boxed</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-style="split"><span>Split</span><span class="checkmark">✓</span></button>
              </div>
            </div>

            <div class="form-field">
              <label>Lettertype</label>
              <div class="font-cards">
                <button class="font-card" type="button" data-pdf-font="helvetica"><span>Helvetica</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-pdf-font="arial"><span>Arial</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-pdf-font="times"><span>Times</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-pdf-font="georgia"><span>Georgia</span><span class="checkmark">✓</span></button>
                <button class="font-card" type="button" data-pdf-font="courier"><span>Courier</span><span class="checkmark">✓</span></button>
              </div>
            </div>

            <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
              <label class="toggle-label"><input type="checkbox" id="pdfShowBtw" checked><span>BTW tonen</span></label>
              <label class="toggle-label"><input type="checkbox" id="pdfShowIban" checked><span>IBAN tonen</span></label>
              <label class="toggle-label"><input type="checkbox" id="pdfShowKvk" checked><span>KVK tonen</span></label>
            </div>

            <div class="form-field" style="margin-top: 1rem;">
              <label for="pdfFooterText">Voettekst</label>
              <input type="text" id="pdfFooterText" placeholder="Bijv. Bedankt voor uw vertrouwen!">
            </div>
          </section>
        </div>

        <div class="settings-preview-column">
          <div class="preview-sticky">
            <h3>PDF Preview</h3>
            <div class="pdf-preview">
              <div class="pdf-header" id="pdfPreviewHeader">
                <div class="pdf-header-left">
                  <strong id="pdfPreviewTitle">FACTUUR</strong>
                  <div id="pdfBusinessName">Garage De Vries</div>
                  <div id="pdfGarageAddr">Adres</div>
                  <div id="pdfBtwRow">BTW: <span id="pdfBTW">NL123456789</span></div>
                  <div id="pdfKvkRow">KVK: <span id="pdfKVK">12345678</span></div>
                </div>
                <div class="pdf-header-right">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div>Factuurnummer: <span id="pdfInvoiceNum">2026-001</span></div>
                  <div>Factuurdatum: <span id="pdfDate">2 apr 2026</span></div>
                </div>
              </div>
              
              <div class="pdf-section">
                <div class="pdf-meta-grid">
                  <div>
                    <strong>Klant</strong>
                    <div id="pdfCustomerName">John Doe</div>
                    <div id="pdfCustomerEmail">E-mail: klant@email.nl</div>
                    <div id="pdfCustomerPhone">Telefoon: +31 6 1234 5678</div>
                  </div>
                  <div>
                    <strong>Voertuig</strong>
                    <div id="pdfVehicleName">Peugeot 208</div>
                    <div id="pdfVehiclePlate">Kenteken: SN-80-2V</div>
                    <div id="pdfVehicleKm">Kilometerstand: 182340</div>
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

              <div id="pdfFooterPreview" style="margin-top: 0.6rem; color: #666; text-align: left; display: none;"></div>

              <div id="pdfIbanRow" style="margin-top: 0.6rem;">IBAN: <span id="pdfIBAN">NL91 ABNA 0417 1643 00</span></div>
            </div>

            <button class="button" style="width: 100%; margin-top: 1rem;">PDF download</button>
          </div>
        </div>
      </div>

      <div class="auto-save-indicator" id="autoSaveIndicator">✓ Opgeslagen</div>
    </div>
  `}function Pe(){return`
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
  `}async function Ne(N){var re,le,de;if(!N)return;const i=await Se();if(!i)return;if(!i.isAdmin&&!i.activeGarage){N.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is not mapped to a garage.</p>
      </section>
    `;return}_e(i.activeGarage);const{shell:$,contentArea:e}=xe({activePage:"settings",title:"Instellingen",headerNote:"",userEmail:i.user.email,onLogout:Ee,garage:i.activeGarage,isAdmin:i.isAdmin});N.replaceChildren($);let H="overview",p={},D={},B={};const F={dashboard:!1,website:!1,garage:!1,betalingen:!1},Z=(t,o)=>{F[t]=!!o},ee=()=>Object.values(F).some(Boolean),ne=()=>new Promise(t=>{const o=document.querySelector(".confirm-dialog-overlay");o&&o.remove();const s=document.createElement("div");s.innerHTML=`
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
    `;const l=s.firstElementChild;if(!l){t(!1);return}const g=m=>{l.remove(),t(m)};l.addEventListener("click",m=>{const x=m.target;if(!(x instanceof Element))return;if(x===l){g(!1);return}const d=x.closest("[data-confirm-action]");d&&g(d.getAttribute("data-confirm-action")==="continue")}),document.body.append(l)}),ie=t=>String(t??"").trim(),te=t=>{const o=ie(t);return o?/^https?:\/\//i.test(o)?o:`https://${o}`:"https://voorbeeld.nl"},oe=()=>{const t=$.querySelector(".brand-text");t&&(t.textContent=p.name||"Garage");const o=$.querySelector(".topbar-domain-inner-left-side a");o&&(o.textContent=te(p.domain),o.href=te(p.domain))};if(L&&((re=i.activeGarage)!=null&&re.id))try{const{data:t}=await L.from("garages").select("*").eq("id",i.activeGarage.id).maybeSingle();t&&(p=t)}catch(t){console.error("Failed to load garage data:",t)}if(L&&((le=i.activeGarage)!=null&&le.id))try{const{data:t}=await L.from("garage_settings").select("*").eq("garage_id",i.activeGarage.id).maybeSingle();t&&(D=t)}catch(t){console.error("Failed to load website settings:",t)}if(L&&((de=i.activeGarage)!=null&&de.id))try{const{data:t}=await L.from("garage_pdf_settings").select("*").eq("garage_id",i.activeGarage.id).maybeSingle();t&&(B=t)}catch(t){console.error("Failed to load pdf settings:",t)}const W=()=>{const t=e.querySelector("#autoSaveIndicator");t&&(t.classList.add("visible"),setTimeout(()=>{t.classList.remove("visible")},2e3))},ae=()=>{H==="overview"?e.innerHTML=Ae():H==="dashboard"?(e.innerHTML=Ce(),be()):H==="website"?(e.innerHTML=Be(),fe()):H==="garage"?(e.innerHTML=qe(),me()):H==="betalingen"&&(e.innerHTML=Pe(),ge()),ue()},R=async t=>{if(!ee()){H=t,ae();return}await ne()&&(Object.keys(F).forEach(s=>{F[s]=!1}),H=t,ae())},ue=()=>{const t=e.querySelector(".back-button");t&&t.addEventListener("click",async()=>{await R("overview")}),e.querySelectorAll(".folder-card").forEach(s=>{s.addEventListener("click",async()=>{const l=s.dataset.folder;l==="dashboard"?await R("dashboard"):l==="website"?await R("website"):l==="garage"?await R("garage"):l==="betalingen"&&await R("betalingen")})})},ve=t=>{ee()&&(t.preventDefault(),t.returnValue="")};window.addEventListener("beforeunload",ve),$.addEventListener("click",async t=>{const o=t.target;if(!(o instanceof Element))return;const s=o.closest("a[href]");if(!(s instanceof HTMLAnchorElement))return;const l=s.getAttribute("href")||"";!l||l.startsWith("#")||s.target==="_blank"||!ee()||(t.preventDefault(),!await ne())||(Object.keys(F).forEach(m=>{F[m]=!1}),window.location.assign(s.href))});const be=()=>{const t=e.querySelector("#dashboardName"),o=e.querySelector("#dashboardDomain"),s=e.querySelector("#dashboardSaveButton"),l=e.querySelector("#dashboardPreviewName"),g=e.querySelector("#dashboardPreviewDomain"),m=e.querySelector("#dashboardPreviewMark");if(!(t instanceof HTMLInputElement)||!(o instanceof HTMLInputElement))return;let x=!1;const d=()=>{const b=t.value.trim()||"SAS Website",k=te(o.value);l&&(l.textContent=b),g&&(g.textContent=k),m&&(m.textContent=(b[0]||"S").toUpperCase())},h=b=>{x=b,Z("dashboard",b),s instanceof HTMLButtonElement&&(s.hidden=!x,s.disabled=!1,s.textContent="Opslaan")};t.value=p.name||"",o.value=p.domain||"",d(),t.addEventListener("input",()=>{d(),h(!0)}),o.addEventListener("input",()=>{d(),h(!0)}),s==null||s.addEventListener("click",async()=>{var k;if(!L||!((k=i.activeGarage)!=null&&k.id))return;const b={name:t.value.trim()||"Garage",domain:ie(o.value)};s.disabled=!0,s.textContent="Opslaan...";try{const{error:q}=await L.from("garages").update(b).eq("id",i.activeGarage.id);if(q)throw q;p={...p,...b},i.activeGarage&&(i.activeGarage.name=b.name,i.activeGarage.domain=b.domain),oe(),W(),h(!1)}catch(q){console.error("Dashboard save failed:",q),s.disabled=!1,s.textContent="Opslaan"}})},fe=()=>{const t=e.querySelector("#primaryColor"),o=e.querySelector("#colorSwatch"),s=e.querySelector("#heroTitle"),l=e.querySelector("#heroSubtitle"),g=e.querySelector("#aboutText"),m=e.querySelectorAll(".font-card"),x=e.querySelectorAll(".preset-pill"),d=e.querySelector("#websiteSaveButton"),h={primary_color:D.primary_color||"#2563EB",font:D.font||"Inter",hero_title:D.hero_title||"",hero_subtitle:D.hero_subtitle||"",about_text:D.about_text||""};let b=!1;const k=a=>{b=a,Z("website",a),d instanceof HTMLButtonElement&&(d.hidden=!a,d.disabled=!1,d.textContent="Opslaan")};t.value=h.primary_color,o.style.backgroundColor=h.primary_color,s.value=h.hero_title,l.value=h.hero_subtitle,g.value=h.about_text,m.forEach(a=>{a.classList.toggle("selected",a.dataset.font===h.font)});const q=a=>{t.value=a,o.style.backgroundColor=a;const T=e.querySelector("#previewHeroTitle");T&&(T.style.color=a),h.primary_color=a,k(!0)};t.addEventListener("input",a=>q(a.target.value)),x.forEach(a=>{a.addEventListener("click",()=>{q(a.dataset.color)})}),m.forEach(a=>{a.addEventListener("click",()=>{m.forEach(T=>T.classList.remove("selected")),a.classList.add("selected"),h.font=a.dataset.font||"Inter",k(!0)})});const I=(a,T)=>{const r=a.parentElement.querySelector(".char-counter .current"),j=()=>{r&&(r.textContent=a.value.length)};a.addEventListener("input",()=>{if(j(),a.id==="heroTitle"){const y=e.querySelector("#previewHeroTitle");y&&(y.textContent=a.value||"Uw garage titel")}else if(a.id==="heroSubtitle"){const y=e.querySelector("#previewHeroSubtitle");y&&(y.textContent=a.value||"Korte beschrijving")}h[T]=a.value,k(!0)}),j()};I(s,"hero_title"),I(l,"hero_subtitle"),I(g,"about_text"),d==null||d.addEventListener("click",async()=>{var a;if(!(!L||!((a=i.activeGarage)!=null&&a.id)||!b)){d.disabled=!0,d.textContent="Opslaan...";try{const{error:T}=await L.from("garage_settings").upsert({...h,garage_id:i.activeGarage.id},{onConflict:"garage_id"});if(T)throw T;D={...D,...h},W(),k(!1)}catch(T){console.error("Website save failed:",T),d.disabled=!1,d.textContent="Opslaan"}}}),k(!1)},me=()=>{const t=e.querySelector("#garageName"),o=e.querySelector("#garageAddress"),s=e.querySelector("#garageNumber"),l=e.querySelector("#garagePostcode"),g=e.querySelector("#hasBTW"),m=e.querySelector("#btwNumber"),x=e.querySelector("#kvkNumber"),d=e.querySelector("#ibanNumber"),h=e.querySelector("#invoicePreview"),b=e.querySelector("#pdfInvoiceNum"),k=e.querySelector("#pdfBusinessName"),q=e.querySelector("#pdfGarageAddr"),I=e.querySelector("#pdfBTW"),a=e.querySelector("#pdfKVK"),T=e.querySelector("#pdfIBAN"),r=e.querySelector("#pdfFooterPreview"),j=e.querySelector("#pdfBtwRow"),y=e.querySelector("#pdfKvkRow"),Y=e.querySelector("#pdfIbanRow"),w=e.querySelector("#garageSaveButton"),M=e.querySelector("#pdfPrimaryColor"),z=e.querySelector("#pdfColorSwatch"),K=e.querySelectorAll("[data-style]"),n=e.querySelectorAll("[data-pdf-font]"),f=e.querySelector("#pdfShowBtw"),S=e.querySelector("#pdfShowIban"),_=e.querySelector("#pdfShowKvk"),O=e.querySelector("#pdfFooterText"),c={primary_color:B.primary_color||"#2563EB",font:B.font||"helvetica",header_style:B.header_style||"professional",show_btw:B.show_btw==null?!0:!!B.show_btw,show_iban:B.show_iban==null?!0:!!B.show_iban,show_kvk:B.show_kvk==null?!0:!!B.show_kvk,footer_text:B.footer_text||""},v={name:p.name||"",address:p.address||"",has_btw:p.has_btw??!0,btw_nummer:p.btw_nummer||"",kvk_nummer:p.kvk_nummer||p.kvk_number||"",iban:p.iban||""},he=u=>{const A=String(u||"").trim(),[C="",P=""]=A.split(","),U=C.trim(),J=U.match(/^(.*?)(?:\s+(\d+[A-Za-z0-9\-\/]*)?)$/);return{street:J?J[1].trim():U,number:J&&J[2]?J[2].trim():"",postcode:P.trim()}},X=()=>{const u=String((o==null?void 0:o.value)||"").trim(),A=String((s==null?void 0:s.value)||"").trim(),C=String((l==null?void 0:l.value)||"").trim();return[[u,A].filter(Boolean).join(" "),C].filter(Boolean).join(", ")};let ce=!1;const E=u=>{ce=u,Z("garage",u),w instanceof HTMLButtonElement&&(w.hidden=!u,w.disabled=!1,w.textContent="Opslaan")};t.value=v.name;const se=he(v.address);o.value=se.street,s&&(s.value=se.number),l&&(l.value=se.postcode),g.checked=!!v.has_btw,m.value=v.btw_nummer,x.value=v.kvk_nummer,d.value=v.iban;const ye=()=>{const u=Number(p.invoice_sequence??1),A=`factuur-${String(Math.max(1,u)).padStart(4,"0")}`;h&&(h.textContent=A),b&&(b.textContent=A)},V=()=>{v.address=X(),k&&(k.textContent=t.value||"Garage De Vries"),q&&(q.textContent=v.address||"Adres"),I&&(I.textContent=m.value||"NL123456789"),a&&(a.textContent=x.value||"12345678"),T&&(T.textContent=d.value||"NL91 ABNA 0417 1643 00")};t.addEventListener("input",()=>{V(),v.name=t.value,E(!0)}),o.addEventListener("input",()=>{V(),v.address=X(),E(!0)}),s==null||s.addEventListener("input",()=>{V(),v.address=X(),E(!0)}),l==null||l.addEventListener("input",()=>{V(),v.address=X(),E(!0)}),g.addEventListener("change",()=>{v.has_btw=g.checked,E(!0)}),m.addEventListener("input",()=>{V(),v.btw_nummer=m.value,E(!0)}),x.addEventListener("input",()=>{V(),v.kvk_nummer=x.value,E(!0)}),d.addEventListener("input",()=>{v.iban=d.value,E(!0)}),ye(),V(),w==null||w.addEventListener("click",async()=>{var u,A;if(!(!L||!((u=i.activeGarage)!=null&&u.id)||!ce)){w.disabled=!0,w.textContent="Opslaan...";try{const C={name:v.name,address:v.address,has_btw:v.has_btw,btw_nummer:v.btw_nummer,kvk_nummer:v.kvk_nummer,iban:v.iban},{error:P}=await L.from("garages").update(C).eq("id",i.activeGarage.id);if(P)throw P;if(p={...p,...C},i.activeGarage&&(i.activeGarage.name=C.name),oe(),L&&((A=i.activeGarage)!=null&&A.id)){const{error:U}=await L.from("garage_pdf_settings").upsert({...c,garage_id:i.activeGarage.id},{onConflict:"garage_id"});if(U)throw U;B={...B,...c}}W(),E(!1)}catch(C){console.error("Garage save failed:",C),w.disabled=!1,w.textContent="Opslaan"}}});const G=()=>{const u=e.querySelector("#pdfPreviewHeader"),A=e.querySelector("#pdfPreviewTitle"),C=e.querySelector(".pdf-preview");if(u){if(u.dataset.style=c.header_style,C==null||C.style.setProperty("--pdf-accent",c.primary_color),A&&(A.style.color=c.header_style==="modern"?"#ffffff":c.primary_color),j&&(j.style.display=c.show_btw?"block":"none"),y&&(y.style.display=c.show_kvk?"block":"none"),Y&&(Y.style.display=c.show_iban?"block":"none"),r){const P=String(c.footer_text||"").trim();r.textContent=P,r.style.display=P?"block":"none"}if(C){const P={times:"'Times New Roman', serif",georgia:"Georgia, 'Times New Roman', serif",courier:"'Courier New', monospace",arial:"Arial, Helvetica, sans-serif"};C.style.fontFamily=P[c.font]||"Helvetica, Arial, sans-serif"}}};M&&z&&(M.value=c.primary_color,z.style.backgroundColor=c.primary_color,M.addEventListener("input",()=>{c.primary_color=M.value,z.style.backgroundColor=M.value,G(),E(!0)})),K.forEach(u=>{u.classList.toggle("selected",u.dataset.style===c.header_style),u.addEventListener("click",()=>{K.forEach(A=>A.classList.remove("selected")),u.classList.add("selected"),c.header_style=u.dataset.style,G(),E(!0)})}),n.forEach(u=>{u.classList.toggle("selected",u.dataset.pdfFont===c.font),u.addEventListener("click",()=>{n.forEach(A=>A.classList.remove("selected")),u.classList.add("selected"),c.font=u.dataset.pdfFont,G(),E(!0)})}),f&&(f.checked=c.show_btw,f.addEventListener("change",()=>{c.show_btw=f.checked,G(),E(!0)})),S&&(S.checked=c.show_iban,S.addEventListener("change",()=>{c.show_iban=S.checked,G(),E(!0)})),_&&(_.checked=c.show_kvk,_.addEventListener("change",()=>{c.show_kvk=_.checked,G(),E(!0)})),O&&(O.value=c.footer_text,O.addEventListener("input",()=>{c.footer_text=O.value,G(),E(!0)})),G(),E(!1)},ge=()=>{const t=e.querySelectorAll(".payment-card"),o=e.querySelectorAll(".payment-settings"),s=e.querySelector("#mollieApiKey"),l=e.querySelector("#tikkieApiKey"),g=e.querySelector("#testMode"),m=e.querySelector(".test-mode-banner"),x=e.querySelector("#autoGenerate"),d=e.querySelector("#whatsappTemplate"),h=e.querySelector("#messagePreview"),b=e.querySelector("#connectMollie"),k=e.querySelector("#mollieConnectionStatus"),q=e.querySelectorAll(".var-chip"),I=e.querySelector("#resetTemplate"),a=e.querySelector("#paymentsSaveButton"),T=e.querySelectorAll(".show-password-btn"),r={payment_method:p.payment_method||"mollie",mollie_api_key:p.mollie_api_key||"",tikkie_api_key:p.tikkie_api_key||"",test_mode:!!p.test_mode,mollie_auto_generate:p.mollie_auto_generate!==void 0?p.mollie_auto_generate:!0,whatsapp_template:p.whatsapp_template||d.value};let j=!1;const y=n=>{j=n,Z("betalingen",n),a instanceof HTMLButtonElement&&(a.hidden=!n,a.disabled=!1,a.textContent="Opslaan")},Y=n=>n==="tikkie"?"Tikkie":"Mollie iDEAL",w=n=>{k instanceof HTMLElement&&(n?(k.textContent=r.test_mode?"Gekoppeld met Mollie (testmodus).":"Gekoppeld met Mollie (live modus).",k.style.color="#0f766e"):(k.textContent="Nog niet gekoppeld. Klik op 'Verbind Mollie' om te bevestigen.",k.style.color="#6b7280"))},M=async()=>{var f;if(!L||!((f=i.activeGarage)!=null&&f.id))return{ok:!1,error:new Error("Geen actieve garage of Supabase connectie")};const{error:n}=await L.from("garages").update(r).eq("id",i.activeGarage.id);return n?{ok:!1,error:n}:(p={...p,...r},i.activeGarage&&(i.activeGarage.paymentMethod=r.payment_method,i.activeGarage.whatsapp_template=r.whatsapp_template,i.activeGarage.test_mode=r.test_mode),{ok:!0})},z=r.payment_method;t.forEach(n=>{n.dataset.method===z?n.classList.add("selected"):n.classList.remove("selected")}),s.value=r.mollie_api_key,l.value=r.tikkie_api_key,g.checked=r.test_mode,x.checked=r.mollie_auto_generate,d.value=r.whatsapp_template,m&&(m.hidden=!r.test_mode),w(!!String(r.mollie_api_key||"").trim()),t.forEach(n=>{n.addEventListener("click",()=>{const f=n.dataset.method;t.forEach(S=>S.classList.remove("selected")),n.classList.add("selected"),o.forEach(S=>{S.dataset.method===f?S.hidden=!1:S.hidden=!0}),r.payment_method=f,y(!0)})}),s==null||s.addEventListener("input",()=>{r.mollie_api_key=s.value,w(!1),y(!0)}),l==null||l.addEventListener("input",()=>{r.tikkie_api_key=l.value,y(!0)}),T.forEach(n=>{n.addEventListener("click",f=>{f.preventDefault();const S=n.parentElement.querySelector("input"),_=S.type;S.type=_==="password"?"text":"password",n.textContent=_==="password"?"🙈":"👁️"})}),g.addEventListener("change",()=>{m&&(m.hidden=!g.checked),r.test_mode=g.checked,w(!!String(r.mollie_api_key||"").trim()),y(!0)}),b==null||b.addEventListener("click",async()=>{const n=String((s==null?void 0:s.value)||"").trim();if(!n){window.alert("Vul eerst je Mollie API key in.");return}b.disabled=!0,b.textContent="Verbinden...",r.mollie_api_key=n,r.test_mode=!!(g!=null&&g.checked);try{const f=await M();if(!f.ok)throw f.error;W(),y(!1),w(!0);const S=r.test_mode?"testmodus":"live modus",_=Y(r.payment_method);window.alert(`${_} gekoppeld in ${S}.`)}catch(f){console.error("Mollie connect failed:",f),w(!1),window.alert("Mollie koppelen mislukt. Controleer je API key en probeer opnieuw.")}finally{b.disabled=!1,b.textContent="Verbind Mollie"}}),x.addEventListener("change",()=>{r.mollie_auto_generate=x.checked,y(!0)});const K=()=>{let n=d.value.replace(/{{klant_naam}}/g,"Jan Pietersen").replace(/{{garage_naam}}/g,"Garage De Vries").replace(/{{factuur_nummer}}/g,"2026-007").replace(/{{totaal_bedrag}}/g,"€204,58").replace(/{{betaaltermijn}}/g,"14").replace(/{{betaal_link}}/g,"https://pay.mollie.com/...").replace(/{{betaal_methode}}/g,"Mollie iDEAL").replace(/{{datum}}/g,new Date().toLocaleDateString("nl-NL")).replace(/{{kenteken}}/g,"SN-80-2V").replace(/{{auto_merk}}/g,"Peugeot 208");h&&(h.textContent=n)};d.addEventListener("input",()=>{K(),r.whatsapp_template=d.value,y(!0)}),q.forEach(n=>{n.addEventListener("click",f=>{f.preventDefault();const S=n.dataset.var,_=d,O=_.selectionStart,c=_.selectionEnd,v=_.value;_.value=v.substring(0,O)+S+v.substring(c),_.selectionStart=_.selectionEnd=O+S.length,_.focus(),K(),r.whatsapp_template=_.value,y(!0)})}),I.addEventListener("click",()=>{const n=`Beste {{klant_naam}},

Hierbij uw factuur van {{garage_naam}}.

Factuurnummer: {{factuur_nummer}}
Totaalbedrag: {{totaal_bedrag}}
Betaaltermijn: {{betaaltermijn}} dagen

Betaal eenvoudig via {{betaal_methode}}:
{{betaal_link}}

Met vriendelijke groet,
{{garage_naam}}`;d.value=n,K(),r.whatsapp_template=n,y(!0)}),a==null||a.addEventListener("click",async()=>{var n;if(!(!L||!((n=i.activeGarage)!=null&&n.id)||!j)){a.disabled=!0,a.textContent="Opslaan...";try{const f=await M();if(!f.ok)throw f.error;W(),w(!!String(r.mollie_api_key||"").trim()),y(!1)}catch(f){console.error("Payments save failed:",f),a.disabled=!1,a.textContent="Opslaan"}}}),K(),y(!1)};ae()}const De=document.querySelector("#app");we();Ne(De);
