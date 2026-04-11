import"./theme-8bHWXU28.js";/* empty css                         */import{m as p,r as w}from"./werkbonSubPageFactory-CdQJN28U.js";import"./auth-BjeLGIG2.js";import"./paths-D6ujGOT0.js";function n(o){return new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR",minimumFractionDigits:2}).format(Number(o)||0)}function b({store:o}={}){const r=document.createElement("section");if(r.className="werkbon-section panel page-animate",!o)return r.innerHTML='<p class="muted">Omzetoverzicht kan niet geladen worden.</p>',r;let a="this-month",s="",c="";const i=()=>{const e=o.getOmzetBTWOverview({range:a,startDate:s,endDate:c}),t=Object.entries(e.monthly),m=Object.entries(e.weekly);r.innerHTML=`
      <header class="werkbon-section-header">
        <h2>Omzet- en BTW overzicht</h2>
        <p class="muted">Financieel inzicht op basis van betaalde facturen.</p>
      </header>

      <div class="werkbon-toolbar-grid">
        <label>
          Periode
          <select data-action="range">
            <option value="this-month" ${a==="this-month"?"selected":""}>Deze maand</option>
            <option value="last-month" ${a==="last-month"?"selected":""}>Vorige maand</option>
            <option value="custom" ${a==="custom"?"selected":""}>Custom</option>
          </select>
        </label>
        <label>
          Van
          <input type="date" data-action="start" value="${s}" ${a==="custom"?"":"disabled"} />
        </label>
        <label>
          Tot
          <input type="date" data-action="end" value="${c}" ${a==="custom"?"":"disabled"} />
        </label>
      </div>

      <div class="werkbon-kpi-grid">
        <article class="werkbon-kpi-card">
          <p>Omzet</p>
          <h3>${n(e.omzet)}</h3>
        </article>
        <article class="werkbon-kpi-card">
          <p>BTW</p>
          <h3>${n(e.btw)}</h3>
        </article>
        <article class="werkbon-kpi-card">
          <p>Aantal facturen</p>
          <h3>${e.aantalFacturen}</h3>
        </article>
      </div>

      <div class="werkbon-card-grid">
        <article class="werkbon-form-card">
          <h3>BTW breakdown</h3>
          <div class="werkbon-preview-row"><span>21%</span><strong>${n(e.btwBreakdown[21])}</strong></div>
          <div class="werkbon-preview-row"><span>9%</span><strong>${n(e.btwBreakdown[9])}</strong></div>
          <div class="werkbon-preview-row"><span>0%</span><strong>${n(e.btwBreakdown[0])}</strong></div>
        </article>

        <article class="werkbon-form-card">
          <h3>Maandelijks overzicht</h3>
          ${t.length?t.map(([l,d])=>`
            <div class="werkbon-preview-row"><span>${l}</span><strong>${n(d)}</strong></div>
          `).join(""):'<p class="muted">Geen data in gekozen periode.</p>'}
        </article>

        <article class="werkbon-form-card">
          <h3>Wekelijks overzicht</h3>
          ${m.length?m.map(([l,d])=>`
            <div class="werkbon-preview-row"><span>${l}</span><strong>${n(d)}</strong></div>
          `).join(""):'<p class="muted">Geen data in gekozen periode.</p>'}
        </article>
      </div>
    `};return i(),r.addEventListener("input",e=>{const t=e.target;if(t instanceof HTMLElement){if(t.matches("[data-action='range']")){a=String(t.value||"this-month"),i();return}if(t.matches("[data-action='start']")){s=String(t.value||""),i();return}t.matches("[data-action='end']")&&(c=String(t.value||""),i())}}),r}const h=document.querySelector("#app");p(h,{title:"Werkbon - Omzet en BTW",note:"Inzicht in omzet en btw",showTitleRow:!1,headerToolbarHtml:w(),createSection:b});
