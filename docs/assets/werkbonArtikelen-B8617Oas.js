import"./theme-8bHWXU28.js";/* empty css                         */import{m as y,r as $}from"./werkbonSubPageFactory-CdQJN28U.js";import"./auth-BjeLGIG2.js";import"./paths-D6ujGOT0.js";function b(s){return String(s??"").trim().toLowerCase()}function r(s){const l=Number(s);return Number.isFinite(l)?l:0}function j({store:s}={}){const l=document.createElement("section");if(l.className="werkbon-section panel page-animate",!s)return l.innerHTML='<p class="muted">Artikelen kunnen niet geladen worden.</p>',l;let t="",o="",v="all";const k=n=>n.artikelen.filter(e=>(!o||b(e.naam).includes(o)||b(e.artikelnummer).includes(o)||b(e.omschrijving).includes(o)||b(e.leverancier).includes(o))&&v==="all"),c=()=>{const n=s.getState();k(n);const e=n.artikelen.find(a=>a.id===t)??null;l.innerHTML=`
      <form class="werkbon-form-card" data-form="artikel">
        <h3>${t?"Artikel bewerken":"Nieuw artikel"}</h3>
        <div class="werkbon-artikel-layout">
          <div class="werkbon-artikel-left">
            <div class="werkbon-artikel-row two">
              <label>
                <span class="werkbon-field-label">Zoeknaam</span>
                <input type="text" name="naam" value="${(e==null?void 0:e.naam)??""}" required />
              </label>
              <label>
                <span class="werkbon-field-label">Artikelnummer</span>
                <input type="text" name="artikelnummer" value="${(e==null?void 0:e.artikelnummer)??""}" required />
              </label>
            
            </div>

            <label>
              <span class="werkbon-field-label">Omschrijving</span>
              <textarea name="omschrijving" rows="3">${(e==null?void 0:e.omschrijving)??""}</textarea>
            </label>

            <div class="werkbon-artikel-row two">
              <label>
                <span class="werkbon-field-label">Leverancier</span>
                <input type="text" name="leverancier" value="${(e==null?void 0:e.leverancier)??""}" />
              </label>
              <label>
                <span class="werkbon-field-label">Locatie</span>
                <input type="text" name="locatie" value="${(e==null?void 0:e.locatie)??""}" />
              </label>
            </div>

            <div class="werkbon-artikel-row werkbon-artikel-row-inline-two">
              <label>
                <span class="werkbon-field-label">Eenheid</span>
                <input type="text" name="eenheid" value="${(e==null?void 0:e.eenheid)??""}" />
              </label>
              <label>
                <span class="werkbon-field-label">Verpakkingseenheid</span>
                <input type="text" name="verpakkingseenheid" value="${(e==null?void 0:e.verpakkingseenheid)??""}" />
              </label>
            </div>

            <div class="werkbon-artikel-row werkbon-artikel-row-inline-two">
              <label>
                <span class="werkbon-field-label">Inkoopprijs</span>
                <input type="number" min="0" step="0.01" name="inkoopprijs" value="${(e==null?void 0:e.inkoopprijs)??""}" />
              </label>
              <label>
                <span class="werkbon-field-label">Marge (%)</span>
                <input type="number" min="0" step="0.01" name="marge" value="${(e==null?void 0:e.marge)??"0"}" />
              </label>
            </div>

            <div class="werkbon-artikel-row werkbon-artikel-row-inline-two">
              <label>
                <span class="werkbon-field-label">Verkoopprijs</span>
                <input type="number" min="0" step="0.01" name="verkoopprijs" value="${(e==null?void 0:e.verkoopprijs)??""}" required />
              </label>
              <label>
                <span class="werkbon-field-label">BTW</span>
                <select name="btwPercentage">
                  <option value="21" ${String(t?e==null?void 0:e.btwPercentage:n.settings.defaultBTW)==="21"?"selected":""}>21%</option>
                  <option value="9" ${String(t?e==null?void 0:e.btwPercentage:n.settings.defaultBTW)==="9"?"selected":""}>9%</option>
                  <option value="0" ${String(t?e==null?void 0:e.btwPercentage:n.settings.defaultBTW)==="0"?"selected":""}>0%</option>
                </select>
              </label>
            </div>

            <div class="werkbon-artikel-row werkbon-artikel-row-inline-two">
              <label>
                <span class="werkbon-field-label">Beginbalans</span>
                <input type="number" min="0" step="1" name="beginBalans" value="${(e==null?void 0:e.beginBalans)??"0"}" />
              </label>
              <label>
                <span class="werkbon-field-label">Balansdatum</span>
                <input type="number" min="0" step="1" name="balansdatum" value="${(e==null?void 0:e.balansdatum)??"0"}" />
              </label>
            </div>

            <div class="werkbon-artikel-row">
              <label>
                <span class="werkbon-field-label">Aantal uitgegaan</span>
                <input type="number" min="0" step="1" name="aantalUitgegaan" value="${(e==null?void 0:e.aantalUitgegaan)??"0"}" />
              </label>
              <label>
                <span class="werkbon-field-label">Aantal ingekomen</span>
                <input type="number" min="0" step="1" name="aantalIngekomen" value="${(e==null?void 0:e.aantalIngekomen)??"0"}" />
              </label>
            </div>

            <div class="werkbon-artikel-row werkbon-artikel-row-inline-two">
              <label>
                <span class="werkbon-field-label">Eindbalans</span>
                <input type="number" name="eindBalans" value="${(e==null?void 0:e.eindBalans)??"0"}" readonly />
              </label>
              <label>
                <span class="werkbon-field-label">Minimale voorraad</span>
                <input type="number" min="0" step="1" name="minimaleVoorraad" value="${(e==null?void 0:e.minimaleVoorraad)??"0"}" />
              </label>
            </div>

            <label>
              <span class="werkbon-field-label">Opmerking</span>
              <textarea name="opmerking" rows="2">${(e==null?void 0:e.opmerking)??""}</textarea>
            </label>

            <input type="hidden" name="prijsInclBTW" value="${(e==null?void 0:e.prijsInclBTW)??""}" />
          </div>
        </div>
        <div class="werkbon-form-actions">
          <button class="button" type="submit">${t?"Opslaan":"Artikel toevoegen"}</button>
          ${t?'<button class="button subtle" type="button" data-action="cancel-edit">Annuleren</button>':""}
        </div>
      </form>

      
    `};return c(),l.addEventListener("input",n=>{const e=n.target;e instanceof HTMLElement&&e.matches("[data-action='search']")&&(o=b(e.value),c())}),l.addEventListener("click",n=>{const e=n.target;if(!(e instanceof HTMLElement))return;const a=e.closest("button[data-action], tr[data-action='pick-row']");if(!(a instanceof HTMLElement))return;const i=String(a.dataset.action??""),p=String(a.dataset.id??"");if(i==="cancel-edit"){t="",c();return}if(i==="pick-row"&&p){t=p,c();return}}),l.addEventListener("submit",n=>{const e=n.target;if(!(e instanceof HTMLFormElement)||e.dataset.form!=="artikel")return;n.preventDefault();const a=new FormData(e),i=r(a.get("beginBalans")),p=r(a.get("balansdatum")),d=r(a.get("aantalUitgegaan")),w=r(a.get("aantalIngekomen")),m=r(a.get("inkoopprijs")),u=r(a.get("verkoopprijs")),f=i+w-d,g=m>0?(u-m)/m*100:0,h={id:t||void 0,artikelnummer:a.get("artikelnummer"),naam:a.get("naam"),omschrijving:a.get("omschrijving"),leverancier:a.get("leverancier"),locatie:a.get("locatie"),eenheid:a.get("eenheid"),inkoopprijs:m,verkoopprijs:u,beginBalans:i,balansdatum:p,aantalUitgegaan:d,aantalIngekomen:w,eindBalans:f,verpakkingseenheid:a.get("verpakkingseenheid"),marge:r(a.get("marge"))||g,btwPercentage:Number(a.get("btwPercentage")||21),minimaleVoorraad:r(a.get("minimaleVoorraad")),opmerking:a.get("opmerking"),prijsInclBTW:u};s.upsertArtikel(h),t="",c()}),l}const B=document.querySelector("#app");y(B,{title:"Werkbon - Artikelen",note:"Beheer je artikelen",showTitleRow:!1,headerToolbarHtml:$(),createSection:j});
