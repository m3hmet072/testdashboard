import"./theme-8bHWXU28.js";/* empty css                         */import{m as $,r as E}from"./werkbonSubPageFactory-CdQJN28U.js";const u={menu:{title:"Werkbon - Artikelen - Menu",note:"Actiepagina voor Menu",description:"Je hebt de Menu-actie geopend."},nieuw:{title:"Werkbon - Artikelen - Nieuw",note:"Actiepagina voor Nieuw",description:"Je hebt de Nieuw-actie geopend."},zoek:{title:"Werkbon - Artikelen - Zoek",note:"Actiepagina voor Zoek",description:"Je hebt de Zoek-actie geopend."},vind:{title:"Werkbon - Artikelen - Vind",note:"Actiepagina voor Vind",description:"Je hebt de Vind-actie geopend."},"vind-alles":{title:"Werkbon - Artikelen - Vind alles",note:"Actiepagina voor Vind alles",description:"Je hebt de Vind alles-actie geopend."},lijst:{title:"Werkbon - Artikelen - Lijst",note:"Overzicht van artikelen",description:"Hier staat het artikelenoverzicht in tabelvorm."},print:{title:"Werkbon - Artikelen - Print",note:"Actiepagina voor Print",description:"Je hebt de Print-actie geopend."},import:{title:"Werkbon - Artikelen - Import",note:"Actiepagina voor Import",description:"Je hebt de Import-actie geopend."},inboeken:{title:"Werkbon - Artikelen - Inboeken",note:"Actiepagina voor Inboeken",description:"Je hebt de Inboeken-actie geopend."},waarde:{title:"Werkbon - Artikelen - Waarde",note:"Actiepagina voor Waarde",description:"Je hebt de Waarde-actie geopend."},verwijder:{title:"Werkbon - Artikelen - Verwijder",note:"Actiepagina voor Verwijder",description:"Je hebt de Verwijder-actie geopend."},eerste:{title:"Werkbon - Artikelen - Eerste",note:"Actiepagina voor Eerste",description:"Je hebt de Eerste-actie geopend."},vorige:{title:"Werkbon - Artikelen - Vorige",note:"Actiepagina voor Vorige",description:"Je hebt de Vorige-actie geopend."},volgende:{title:"Werkbon - Artikelen - Volgende",note:"Actiepagina voor Volgende",description:"Je hebt de Volgende-actie geopend."},laatste:{title:"Werkbon - Artikelen - Laatste",note:"Actiepagina voor Laatste",description:"Je hebt de Laatste-actie geopend."}};function J(){const t=(window.location.pathname.split("/").pop()||"").match(/^werkbon-artikelen-(.+)\.html$/);return(t==null?void 0:t[1])||"menu"}function p(r){return new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR",minimumFractionDigits:2}).format(Number(r)||0)}function N(r){return({store:t})=>{var g;const o=document.createElement("section");o.className="werkbon-section panel page-animate";const m=u[r]||u.menu;if(r==="lijst"){const b=(g=t==null?void 0:t.getState)==null?void 0:g.call(t),d=(b==null?void 0:b.artikelen)??[],j=d.reduce((n,c)=>n+(Number(c.eindBalans)||0),0);return o.classList.add("werkbon-lijst-section"),o.innerHTML=`
        <header class="werkbon-section-header">
          <h2>Artikelen lijst</h2>
          <p class="muted">Klik op een cel om te bewerken.</p>
        </header>

        <div class="werkbon-lijst-summary">
          <span><strong>${d.length}</strong> artikelen</span>
          <span>Totale eindbalans: <strong>${j}</strong></span>
        </div>

        <div class="werkbon-table-wrap" data-role="lijst-table">
          <table class="werkbon-table werkbon-lijst-table" data-editable="true">
            <colgroup>
              <col class="col-zoeknaam" />
              <col class="col-artikelnummer" />
              <col class="col-omschrijving" />
              <col class="col-leverancier" />
              <col class="col-locatie" />
              <col class="col-prijs" />
              <col class="col-prijs" />
              <col class="col-balans" />
            </colgroup>
            <thead>
              <tr>
                <th>Zoeknaam</th>
                <th>Artikelnummer</th>
                <th>Omschrijving</th>
                <th>Leverancier</th>
                <th>Locatie</th>
                <th>Inkoopprijs</th>
                <th>Verkoopprijs</th>
                <th>Eindbalans</th>
              </tr>
            </thead>
            <tbody>
              ${d.length?d.map((n,c)=>`
                <tr data-artikel-index="${c}">
                  <td data-field="naam" data-editable="true">${n.naam||"-"}</td>
                  <td data-field="artikelnummer" data-editable="true">${n.artikelnummer||"-"}</td>
                  <td data-field="omschrijving" data-editable="true">${n.omschrijving||"-"}</td>
                  <td data-field="leverancier" data-editable="true">${n.leverancier||"-"}</td>
                  <td data-field="locatie" data-editable="true">${n.locatie||"-"}</td>
                  <td data-field="inkoopprijs" data-editable="true" data-type="currency">${p(n.inkoopprijs)}</td>
                  <td data-field="verkoopprijs" data-editable="true" data-type="currency">${p(n.verkoopprijs)}</td>
                  <td data-field="eindBalans" data-editable="true" data-type="number">${n.eindBalans??0}</td>
                </tr>
              `).join(""):'<tr><td colspan="8" class="muted">Geen artikelen gevonden.</td></tr>'}
            </tbody>
          </table>
        </div>
      `,setTimeout(()=>{const n=o.querySelector('table[data-editable="true"]');n&&n.addEventListener("click",c=>{const i=c.target.closest('td[data-editable="true"]');if(!i||i.querySelector("input"))return;const k=i.dataset.field,l=i.dataset.type,W=i.closest("tr"),h=parseInt(W.dataset.artikelIndex);if(isNaN(h))return;const v=d[h],s=v[k],e=document.createElement("input");if(e.type=l==="currency"&&k.includes("prijs")?"number":"text",e.step="0.01",l==="currency"){const a=Number(s)||0;e.value=a}else l==="number"?e.value=s||0:e.value=s||"";e.style.width="100%",e.style.padding="0.4rem",e.style.border="none",e.style.borderBottom="2px solid #0066cc",e.style.fontSize="inherit",e.style.fontFamily="inherit",i.textContent="",i.appendChild(e),e.focus(),e.select();const f=()=>{var A;let a=e.value.trim();(l==="number"||l==="currency")&&(a=parseFloat(a)||0),v[k]=a,(A=t==null?void 0:t.setState)==null||A.call(t,{artikelen:d}),l==="currency"?i.textContent=p(a):i.textContent=a||"-"},V=()=>{l==="currency"?i.textContent=p(s):i.textContent=s||"-"};e.addEventListener("blur",f),e.addEventListener("keydown",a=>{a.key==="Enter"?f():a.key==="Escape"&&V()})})},0),o}return o.innerHTML=`
      <header class="werkbon-section-header">
        <h2>${m.title}</h2>
        <p class="muted">${m.description}</p>
      </header>
      <article class="werkbon-form-card">
        <p class="muted">Deze pagina is aangemaakt als aparte route voor de knop <strong>${r}</strong>.</p>
        <div class="werkbon-form-actions">
          <a class="button subtle" href="./werkbon-artikelen.html">Terug naar Artikelen</a>
          <a class="button subtle" href="./werkbon.html">Terug naar Werkbon menu</a>
        </div>
      </article>
    `,r==="print"&&window.requestAnimationFrame(()=>window.print()),o}}const y=J(),w=u[y]||u.menu,I=document.querySelector("#app");$(I,{title:w.title,note:w.note,showTitleRow:!1,headerToolbarHtml:E(),createSection:N(y)});
