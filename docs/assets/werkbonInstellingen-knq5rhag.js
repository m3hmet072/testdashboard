import"./theme-8bHWXU28.js";/* empty css                         */import{m as u}from"./werkbonSubPageFactory-o_0SnB8B.js";import"./auth-BjeLGIG2.js";import"./paths-D6ujGOT0.js";function m({store:l}={}){const n=document.createElement("section");if(n.className="werkbon-section panel page-animate",!l)return n.innerHTML='<p class="muted">Instellingen kunnen niet geladen worden.</p>',n;let r="";const i=()=>{const{settings:e}=l.getState();n.innerHTML=`
      <header class="werkbon-section-header">
        <h2>Instellingen</h2>
        <p class="muted">Deze instellingen gelden globaal voor werkbonnen, facturen en omzet.</p>
      </header>

      <form class="werkbon-form-card" data-form="settings">
        <div class="werkbon-form-grid">
          <label>
            Factuurprefix
            <input type="text" name="invoicePrefix" value="${e.invoicePrefix}" />
          </label>
          <label>
            Factuurnummer start
            <input type="number" name="invoiceStartNumber" min="1" value="${e.invoiceStartNumber}" />
          </label>
          <label>
            Default BTW
            <select name="defaultBTW">
              <option value="21" ${String(e.defaultBTW)==="21"?"selected":""}>21%</option>
              <option value="9" ${String(e.defaultBTW)==="9"?"selected":""}>9%</option>
              <option value="0" ${String(e.defaultBTW)==="0"?"selected":""}>0%</option>
            </select>
          </label>
          <label>
            Taal
            <select name="language">
              <option value="NL" ${e.language==="NL"?"selected":""}>NL</option>
              <option value="EN" ${e.language==="EN"?"selected":""}>EN</option>
              <option value="TR" ${e.language==="TR"?"selected":""}>TR</option>
            </select>
          </label>
          <label>
            Bedrijfsnaam
            <input type="text" name="companyName" value="${e.companyName}" />
          </label>
          <label>
            Adres
            <input type="text" name="address" value="${e.address}" />
          </label>
          <label>
            KvK nummer
            <input type="text" name="kvkNumber" value="${e.kvkNumber}" />
          </label>
          <label>
            BTW nummer
            <input type="text" name="btwNumber" value="${e.btwNumber}" />
          </label>
          <label>
            Arbeidsprijs per uur (optioneel)
            <input type="number" name="hourlyRate" min="0" step="0.01" value="${e.hourlyRate}" />
          </label>
          <label>
            Betaaltermijn (dagen)
            <input type="number" name="paymentTermDays" min="1" step="1" value="${e.paymentTermDays}" />
          </label>
        </div>

        <div class="werkbon-inline-actions">
          <label class="button subtle werkbon-file-picker">
            Logo upload
            <input type="file" data-action="logo" accept="image/*" hidden />
          </label>
          <button class="button" type="submit">Instellingen opslaan</button>
        </div>

        ${e.logoDataUrl?`<img class="werkbon-logo-preview" src="${e.logoDataUrl}" alt="Bedrijfslogo preview" />`:""}
        ${r?`<p class="status-text">${r}</p>`:""}
      </form>
    `};return i(),n.addEventListener("submit",e=>{const a=e.target;if(!(a instanceof HTMLFormElement)||a.dataset.form!=="settings")return;e.preventDefault();const t=new FormData(a);l.saveSettings({invoicePrefix:String(t.get("invoicePrefix")||"F-").trim(),invoiceStartNumber:Number(t.get("invoiceStartNumber")||1001),defaultBTW:Number(t.get("defaultBTW")||21),companyName:String(t.get("companyName")||"").trim(),address:String(t.get("address")||"").trim(),kvkNumber:String(t.get("kvkNumber")||"").trim(),btwNumber:String(t.get("btwNumber")||"").trim(),language:String(t.get("language")||"NL").trim(),hourlyRate:Number(t.get("hourlyRate")||0),paymentTermDays:Number(t.get("paymentTermDays")||14)}),r="Instellingen opgeslagen",i()}),n.addEventListener("change",e=>{var s;const a=e.target;if(!(a instanceof HTMLInputElement)||a.dataset.action!=="logo")return;const t=(s=a.files)==null?void 0:s[0];if(!t)return;const o=new FileReader;o.onload=()=>{l.saveSettings({logoDataUrl:String(o.result||"")}),r="Logo opgeslagen",i()},o.readAsDataURL(t)}),n}const g=document.querySelector("#app");u(g,{title:"Werkbon - Instellingen",note:"Werkbon instellingen",createSection:m});
