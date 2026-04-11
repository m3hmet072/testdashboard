import"./theme-8bHWXU28.js";/* empty css                         */import{r as h}from"./artikelenToolbar-8ObUAEkp.js";import{m as y}from"./werkbonSubPageFactory-o_0SnB8B.js";import"./auth-BjeLGIG2.js";import"./paths-D6ujGOT0.js";function u(l){return String(l??"").trim().toLowerCase()}function o(l){const t=Number(l);return Number.isFinite(t)?t:0}function $({store:l}={}){const t=document.createElement("section");if(t.className="werkbon-section panel page-animate",!l)return t.innerHTML='<p class="muted">Artikelen kunnen niet geladen worden.</p>',t;let r="",s="",d="all";const g=n=>n.artikelen.filter(e=>(!s||u(e.naam).includes(s)||u(e.artikelnummer).includes(s)||u(e.omschrijving).includes(s)||u(e.leverancier).includes(s))&&d==="all"),m=()=>{const n=l.getState();g(n);const e=n.artikelen.find(a=>a.id===r)??null;t.innerHTML=`
      <form class="werkbon-form-card" data-form="artikel">
        <h3>${r?"Artikel bewerken":"Nieuw artikel"}</h3>
        <div class="werkbon-artikel-layout">
          <div class="werkbon-artikel-left">
            <div class="werkbon-artikel-row two">
              <label>
                Artikelnummer
                <input type="text" name="artikelnummer" value="${(e==null?void 0:e.artikelnummer)??""}" required />
              </label>
              <label>
                Zoeknaam
                <input type="text" name="naam" value="${(e==null?void 0:e.naam)??""}" required />
              </label>
            </div>

            <label>
              Omschrijving
              <textarea name="omschrijving" rows="3">${(e==null?void 0:e.omschrijving)??""}</textarea>
            </label>

            <div class="werkbon-artikel-row two">
              <label>
                Leverancier
                <input type="text" name="leverancier" value="${(e==null?void 0:e.leverancier)??""}" />
              </label>
              <label>
                Locatie
                <input type="text" name="locatie" value="${(e==null?void 0:e.locatie)??""}" />
              </label>
            </div>

            <div class="werkbon-artikel-row three">
              <label>
                Eenheid
                <input type="text" name="eenheid" value="${(e==null?void 0:e.eenheid)??""}" />
              </label>
              <label>
                Verpakkingseenheid
                <input type="text" name="verpakkingseenheid" value="${(e==null?void 0:e.verpakkingseenheid)??""}" />
              </label>
              <label>
                Minimale voorraad
                <input type="number" min="0" step="1" name="minimaleVoorraad" value="${(e==null?void 0:e.minimaleVoorraad)??"0"}" />
              </label>
            </div>

            <div class="werkbon-artikel-row four">
              <label>
                Inkoopprijs
                <input type="number" min="0" step="0.01" name="inkoopprijs" value="${(e==null?void 0:e.inkoopprijs)??""}" />
              </label>
              <label>
                Verkoopprijs
                <input type="number" min="0" step="0.01" name="verkoopprijs" value="${(e==null?void 0:e.verkoopprijs)??""}" required />
              </label>
              <label>
                Marge (%)
                <input type="number" min="0" step="0.01" name="marge" value="${(e==null?void 0:e.marge)??"0"}" />
              </label>
              <label>
                BTW
                <select name="btwPercentage">
                  <option value="21" ${String(r?e==null?void 0:e.btwPercentage:n.settings.defaultBTW)==="21"?"selected":""}>21%</option>
                  <option value="9" ${String(r?e==null?void 0:e.btwPercentage:n.settings.defaultBTW)==="9"?"selected":""}>9%</option>
                  <option value="0" ${String(r?e==null?void 0:e.btwPercentage:n.settings.defaultBTW)==="0"?"selected":""}>0%</option>
                </select>
              </label>
            </div>

            <div class="werkbon-artikel-row four">
              <label>
                Beginbalans
                <input type="number" min="0" step="1" name="beginBalans" value="${(e==null?void 0:e.beginBalans)??"0"}" />
              </label>
              <label>
                Aantal uitgegaan
                <input type="number" min="0" step="1" name="aantalUitgegaan" value="${(e==null?void 0:e.aantalUitgegaan)??"0"}" />
              </label>
              <label>
                Aantal ingekomen
                <input type="number" min="0" step="1" name="aantalIngekomen" value="${(e==null?void 0:e.aantalIngekomen)??"0"}" />
              </label>
              <label>
                Eindbalans
                <input type="number" name="eindBalans" value="${(e==null?void 0:e.eindBalans)??"0"}" readonly />
              </label>
            </div>

            <label>
              Opmerking
              <textarea name="opmerking" rows="2">${(e==null?void 0:e.opmerking)??""}</textarea>
            </label>

            <input type="hidden" name="prijsInclBTW" value="${(e==null?void 0:e.prijsInclBTW)??""}" />
          </div>

          <aside class="werkbon-artikel-right">
            <p class="werkbon-artikel-right-title">Plaatje</p>
            <div class="werkbon-artikel-image-placeholder">Klik hier voor afbeelding</div>
            <label>
              Aanmaakdatum
              <input type="text" value="${e!=null&&e.updatedAt?new Date(e.updatedAt).toLocaleDateString("nl-NL"):new Date().toLocaleDateString("nl-NL")}" readonly />
            </label>
          </aside>
        </div>
        <div class="werkbon-form-actions">
          <button class="button" type="submit">${r?"Opslaan":"Artikel toevoegen"}</button>
          ${r?'<button class="button subtle" type="button" data-action="cancel-edit">Annuleren</button>':""}
        </div>
      </form>

      
    `};return m(),t.addEventListener("input",n=>{const e=n.target;e instanceof HTMLElement&&e.matches("[data-action='search']")&&(s=u(e.value),m())}),t.addEventListener("click",n=>{const e=n.target;if(!(e instanceof HTMLElement))return;const a=e.closest("button[data-action], tr[data-action='pick-row']");if(!(a instanceof HTMLElement))return;const i=String(a.dataset.action??""),c=String(a.dataset.id??"");if(i==="cancel-edit"){r="",m();return}if(i==="pick-row"&&c){r=c,m();return}}),t.addEventListener("submit",n=>{const e=n.target;if(!(e instanceof HTMLFormElement)||e.dataset.form!=="artikel")return;n.preventDefault();const a=new FormData(e),i=o(a.get("beginBalans")),c=o(a.get("aantalUitgegaan")),v=o(a.get("aantalIngekomen")),p=o(a.get("inkoopprijs")),b=o(a.get("verkoopprijs")),w=i+v-c,k=p>0?(b-p)/p*100:0,f={id:r||void 0,artikelnummer:a.get("artikelnummer"),naam:a.get("naam"),omschrijving:a.get("omschrijving"),leverancier:a.get("leverancier"),locatie:a.get("locatie"),eenheid:a.get("eenheid"),inkoopprijs:p,verkoopprijs:b,beginBalans:i,aantalUitgegaan:c,aantalIngekomen:v,eindBalans:w,verpakkingseenheid:a.get("verpakkingseenheid"),marge:o(a.get("marge"))||k,btwPercentage:Number(a.get("btwPercentage")||21),minimaleVoorraad:o(a.get("minimaleVoorraad")),opmerking:a.get("opmerking"),prijsInclBTW:b};l.upsertArtikel(f),r="",m()}),t}const j=document.querySelector("#app");y(j,{title:"Werkbon - Artikelen",note:"Beheer je artikelen",showTitleRow:!1,headerToolbarHtml:h(),createSection:$});
