import"./theme-8bHWXU28.js";/* empty css                         */import{m as p,r as f}from"./werkbonSubPageFactory-CdQJN28U.js";import"./auth-BjeLGIG2.js";import"./paths-D6ujGOT0.js";function i(t){return new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR",minimumFractionDigits:2}).format(Number(t)||0)}function c(t){const n=new Date(t);return Number.isNaN(n.getTime())?"-":n.toLocaleDateString("nl-NL")}function g(t){return t==="betaald"?"status-chip-completed":t==="verzonden"?"status-chip-confirmed":t==="te laat"?"status-chip-late":"status-chip-progress"}function h(t){const n=window.open("","_blank","noopener,noreferrer");n&&(n.document.write(`
    <!doctype html>
    <html>
      <head>
        <title>Factuur ${t.factuurnummer}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; }
          h1 { margin: 0 0 8px 0; }
          p { margin: 4px 0; }
        </style>
      </head>
      <body>
        <h1>Factuur ${t.factuurnummer}</h1>
        <p><strong>Klant:</strong> ${t.klantnaam}</p>
        <p><strong>Datum:</strong> ${c(t.datum)}</p>
        <p><strong>Status:</strong> ${t.status}</p>
        <p><strong>Totaal:</strong> ${i(t.totaalInclBTW)}</p>
      </body>
    </html>
  `),n.document.close(),n.focus(),n.print())}function k({store:t}={}){var b;const n=document.createElement("section");if(n.className="werkbon-section panel page-animate",!t)return n.innerHTML='<p class="muted">Facturen kunnen niet geladen worden.</p>',n;let u=((b=t.getState().facturen[0])==null?void 0:b.id)??"";const d=()=>{const s=t.getState(),a=s.facturen.find(e=>e.id===u)??null,r=t.getOpenWerkbonnen();n.innerHTML=`
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
              <input type="date" name="datum" value="${new Date().toISOString().slice(0,10)}" required />
            </label>
            <label>
              Bedrag (incl. BTW)
              <input type="number" name="totaal" min="0" step="0.01" required />
            </label>
            <label>
              BTW
              <select name="btw">
                <option value="21" ${String(s.settings.defaultBTW)==="21"?"selected":""}>21%</option>
                <option value="9" ${String(s.settings.defaultBTW)==="9"?"selected":""}>9%</option>
                <option value="0" ${String(s.settings.defaultBTW)==="0"?"selected":""}>0%</option>
              </select>
            </label>
          </div>
          <button class="button" type="submit">Factuur maken</button>
        </form>

        <div class="werkbon-form-card">
          <h3>Werkbon omzetten naar factuur</h3>
          <p class="muted">1 klik conversie van werkbon naar factuur.</p>
          ${r.length?`
            <div class="werkbon-inline-list">
              ${r.map(e=>`
                <div class="werkbon-inline-list-row">
                  <span>${e.werkbonNummer} - ${e.klantnaam}</span>
                  <button class="button subtle" type="button" data-action="convert" data-id="${e.id}">Converteer</button>
                </div>
              `).join("")}
            </div>
          `:'<p class="muted">Geen open werkbonnen beschikbaar.</p>'}
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
            ${s.facturen.length?s.facturen.map(e=>`
              <tr class="${u===e.id?"is-selected-row":""}">
                <td><button class="werkbon-link-button" type="button" data-action="select" data-id="${e.id}">${e.factuurnummer}</button></td>
                <td>${e.klantnaam}</td>
                <td>${c(e.datum)}</td>
                <td><span class="status-chip ${g(e.status)}">${e.status}</span></td>
                <td>${i(e.totaalInclBTW)}</td>
                <td class="werkbon-inline-actions">
                  <button class="button subtle" type="button" data-action="set-status" data-id="${e.id}" data-status="betaald">Markeer betaald</button>
                  <button class="button subtle" type="button" data-action="export" data-id="${e.id}">Export PDF</button>
                </td>
              </tr>
            `).join(""):'<tr><td colspan="6" class="muted">Nog geen facturen aanwezig.</td></tr>'}
          </tbody>
        </table>
      </div>

      <article class="werkbon-form-card">
        <h3>Factuur detail</h3>
        ${a?`
          <div class="werkbon-detail-grid">
            <p><strong>Factuurnummer:</strong> ${a.factuurnummer}</p>
            <p><strong>Klant:</strong> ${a.klantnaam}</p>
            <p><strong>Datum:</strong> ${c(a.datum)}</p>
            <p><strong>Status:</strong> ${a.status}</p>
            <p><strong>Totaal:</strong> ${i(a.totaalInclBTW)}</p>
            <p><strong>Bron:</strong> ${a.bronWerkbonId?"Werkbon":"Handmatig"}</p>
          </div>
          <div class="werkbon-inline-actions">
            <button class="button subtle" type="button" data-action="set-status" data-id="${a.id}" data-status="concept">Concept</button>
            <button class="button subtle" type="button" data-action="set-status" data-id="${a.id}" data-status="verzonden">Verzonden</button>
            <button class="button subtle" type="button" data-action="set-status" data-id="${a.id}" data-status="te laat">Te laat</button>
            <button class="button" type="button" data-action="set-status" data-id="${a.id}" data-status="betaald">Betaald</button>
          </div>
        `:'<p class="muted">Selecteer een factuur uit de lijst.</p>'}
      </article>
    `};return d(),n.addEventListener("submit",s=>{const a=s.target;if(!(a instanceof HTMLFormElement)||a.dataset.form!=="manual-invoice")return;s.preventDefault();const r=new FormData(a);u=t.createManualFactuur({klantnaam:r.get("klantnaam"),datum:r.get("datum"),totaalInclBTW:Number(r.get("totaal")||0),btwPercentage:Number(r.get("btw")||21)}).id,d()}),n.addEventListener("click",s=>{const a=s.target;if(!(a instanceof HTMLElement))return;const r=a.closest("button[data-action]");if(!(r instanceof HTMLButtonElement))return;const e=String(r.dataset.action??""),o=String(r.dataset.id??"");if(e==="convert"&&o){const l=t.convertWerkbonToFactuur(o);l&&(u=l.id),d();return}if(e==="select"&&o){u=o,d();return}if(e==="set-status"&&o){t.updateFactuurStatus(o,r.dataset.status),u=o,d();return}if(e==="export"&&o){const l=t.getState().facturen.find(m=>m.id===o);l&&h(l)}}),n}const $=document.querySelector("#app");p($,{title:"Werkbon - Facturen",note:"Bekijk en beheer facturen",showTitleRow:!1,headerToolbarHtml:f(),createSection:k});
