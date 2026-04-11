import"./theme-8bHWXU28.js";/* empty css                         */import{m}from"./werkbonSubPageFactory-o_0SnB8B.js";import"./auth-BjeLGIG2.js";import"./paths-D6ujGOT0.js";function a(o){return new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR",minimumFractionDigits:2}).format(Number(o)||0)}function w({store:o}={}){const r=document.createElement("section");if(r.className="werkbon-section panel page-animate",!o)return r.innerHTML='<p class="muted">Omzetoverzicht kan niet geladen worden.</p>',r;let n="this-month",s="",c="";const i=()=>{const e=o.getOmzetBTWOverview({range:n,startDate:s,endDate:c}),t=Object.entries(e.monthly),p=Object.entries(e.weekly);r.innerHTML=`
      <header class="werkbon-section-header">
        <h2>Omzet- en BTW overzicht</h2>
        <p class="muted">Financieel inzicht op basis van betaalde facturen.</p>
      </header>

      <div class="werkbon-toolbar-grid">
        <label>
          Periode
          <select data-action="range">
            <option value="this-month" ${n==="this-month"?"selected":""}>Deze maand</option>
            <option value="last-month" ${n==="last-month"?"selected":""}>Vorige maand</option>
            <option value="custom" ${n==="custom"?"selected":""}>Custom</option>
          </select>
        </label>
        <label>
          Van
          <input type="date" data-action="start" value="${s}" ${n==="custom"?"":"disabled"} />
        </label>
        <label>
          Tot
          <input type="date" data-action="end" value="${c}" ${n==="custom"?"":"disabled"} />
        </label>
      </div>

      <div class="werkbon-kpi-grid">
        <article class="werkbon-kpi-card">
          <p>Omzet</p>
          <h3>${a(e.omzet)}</h3>
        </article>
        <article class="werkbon-kpi-card">
          <p>BTW</p>
          <h3>${a(e.btw)}</h3>
        </article>
        <article class="werkbon-kpi-card">
          <p>Aantal facturen</p>
          <h3>${e.aantalFacturen}</h3>
        </article>
      </div>

      <div class="werkbon-card-grid">
        <article class="werkbon-form-card">
          <h3>BTW breakdown</h3>
          <div class="werkbon-preview-row"><span>21%</span><strong>${a(e.btwBreakdown[21])}</strong></div>
          <div class="werkbon-preview-row"><span>9%</span><strong>${a(e.btwBreakdown[9])}</strong></div>
          <div class="werkbon-preview-row"><span>0%</span><strong>${a(e.btwBreakdown[0])}</strong></div>
        </article>

        <article class="werkbon-form-card">
          <h3>Maandelijks overzicht</h3>
          ${t.length?t.map(([l,d])=>`
            <div class="werkbon-preview-row"><span>${l}</span><strong>${a(d)}</strong></div>
          `).join(""):'<p class="muted">Geen data in gekozen periode.</p>'}
        </article>

        <article class="werkbon-form-card">
          <h3>Wekelijks overzicht</h3>
          ${p.length?p.map(([l,d])=>`
            <div class="werkbon-preview-row"><span>${l}</span><strong>${a(d)}</strong></div>
          `).join(""):'<p class="muted">Geen data in gekozen periode.</p>'}
        </article>
      </div>
    `};return i(),r.addEventListener("input",e=>{const t=e.target;if(t instanceof HTMLElement){if(t.matches("[data-action='range']")){n=String(t.value||"this-month"),i();return}if(t.matches("[data-action='start']")){s=String(t.value||""),i();return}t.matches("[data-action='end']")&&(c=String(t.value||""),i())}}),r}const u=document.querySelector("#app");m(u,{title:"Werkbon - Omzet en BTW",note:"Inzicht in omzet en btw",createSection:w});
