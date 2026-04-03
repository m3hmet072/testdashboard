import{e as A,c as L}from"./theme-CzeyRWKH.js";/* empty css                      */import{e as I,a as S,c as T,l as G}from"./branding-CLVp0Xjl.js";const H="https://mkgfckxiusdcnqhethdy.supabase.co",_="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",d=A(H,_);function m(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function M(e){const n=String(e??"").trim();if(!n)return"";const r=n.startsWith("test_")?"test_":n.startsWith("live_")?"live_":"",i=n.slice(-4);return`${r}****${i}`}function x(e){const n=String(e??"").trim();if(!n)return!1;try{const r=new URL(n);return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}}function v(e){return{mollieMethod:String((e==null?void 0:e.mollie_method)??"none"),paymentDays:Math.max(1,parseInt(String((e==null?void 0:e.payment_days)??14),10)||14),paymentLink:String((e==null?void 0:e.payment_link)??""),pendingApiToken:"",savedApiKeyMasked:M((e==null?void 0:e.mollie_api_key)??"")}}function D(e){const n=e.mollieMethod==="manual",r=e.mollieMethod==="api",i=e.mollieMethod==="api"?"Automatisch per werkbon een unieke Mollie-betaallink maken (aanbevolen).":e.mollieMethod==="manual"?"Gebruik 1 vaste betaallink voor alle facturen.":"Er wordt geen betaallink toegevoegd in WhatsApp-berichten.";return`
    <section class="settings-page">
      <div id="settingsNotice" class="werkbon-notice" hidden aria-live="polite"></div>

      <article class="settings-panel">
        <h2>Betalingslink instellingen</h2>
        <p>Kies hoe klanten betalen vanuit WhatsApp. Voor automatisch bedrag per werkbon: kies <strong>Mollie API</strong>.</p>

        <form id="settingsForm" novalidate>
          <div class="settings-grid">
            <div class="settings-field">
              <label for="mollieMethod">Betaalmethode</label>
              <select id="mollieMethod" name="mollieMethod">
                <option value="api" ${e.mollieMethod==="api"?"selected":""}>Mollie API (automatisch per werkbon)</option>
                <option value="manual" ${e.mollieMethod==="manual"?"selected":""}>Mollie betaallink (vast, handmatig)</option>
                <option value="none" ${e.mollieMethod==="none"?"selected":""}>Geen betaallink</option>
              </select>
              <p class="settings-help">${i}</p>
            </div>

            <div class="settings-field" id="manualPaymentLinkField" ${n?"":"hidden"}>
              <label for="paymentLink">Vaste Mollie betaallink</label>
              <input
                id="paymentLink"
                name="paymentLink"
                type="url"
                autocomplete="off"
                placeholder="https://www.mollie.com/payscreen/..."
                value="${n?m(e.paymentLink):""}"
              />
              <p class="settings-help">Alle klanten krijgen dezelfde link. Gebruik API-modus voor automatische bedragen.</p>
            </div>

            <div class="settings-field" ${r?"":"hidden"}>
              <label for="mollieApiKey">Mollie API sleutel (privé)</label>
              <input
                id="mollieApiKey"
                name="mollieApiKeyNew"
                type="password"
                autocomplete="new-password"
                autocapitalize="off"
                spellcheck="false"
                placeholder="test_xxx... of live_xxx..."
                value=""
              />
              ${e.savedApiKeyMasked?`<p class="settings-help">Huidige sleutel: <strong>${m(e.savedApiKeyMasked)}</strong></p>`:""}
              <p class="settings-help">Leeg laten = huidige sleutel behouden. Gebruik <strong>test_</strong> voor testen.</p>
            </div>

            <div class="settings-field">
              <label for="paymentDays">Standaard betaaltermijn</label>
              <div class="settings-days-wrap">
                <input id="paymentDays" name="paymentDays" type="number" min="1" step="1" value="${m(String(e.paymentDays))}" />
                <span>dagen</span>
              </div>
              <p class="settings-help">Deze termijn wordt standaard in het WhatsApp-bericht gezet.</p>
            </div>
          </div>

          <div class="settings-actions">
            <button class="button" id="saveSettingsButton" type="submit">Instellingen opslaan</button>
          </div>
        </form>
      </article>
    </section>
  `}async function E(e){var g;if(!e)return;const n=await I();if(!n)return;if(!n.isAdmin&&!n.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is not mapped to a garage.</p>
      </section>
    `;return}S(n.activeGarage);const{shell:r,contentArea:i}=T({activePage:"settings",title:"Instellingen",headerNote:"Beheer je betalingslink instellingen",userEmail:n.user.email,onLogout:G,garage:n.activeGarage,isAdmin:n.isAdmin});e.replaceChildren(r);let t=v(n.activeGarage);if(d&&((g=n.activeGarage)!=null&&g.id))try{const{data:l}=await d.from("garages").select("*").eq("id",n.activeGarage.id).maybeSingle();l&&(t=v(l))}catch{}const u=()=>{i.innerHTML=D(t)},p=(l,a=!1)=>{const o=i.querySelector("#settingsNotice");o instanceof HTMLElement&&(o.textContent=l,o.hidden=!l,o.classList.toggle("is-error",!!a),l&&window.setTimeout(()=>{o.hidden=!0,o.textContent=""},2800))};u(),i.addEventListener("change",l=>{const a=l.target;if(a instanceof HTMLElement){if(a.id==="mollieMethod"&&a instanceof HTMLSelectElement){t.mollieMethod=a.value,t.mollieMethod!=="manual"&&(t.paymentLink=""),u();return}if(a.id==="paymentDays"&&a instanceof HTMLInputElement){t.paymentDays=Math.max(1,parseInt(String(a.value||"14"),10)||14);return}if(a.id==="paymentLink"&&a instanceof HTMLInputElement){t.paymentLink=a.value.trim();return}a.id==="mollieApiKey"&&a instanceof HTMLInputElement&&(t.pendingApiToken=a.value.trim())}}),i.addEventListener("submit",async l=>{var k;const a=l.target;if(!(a instanceof HTMLFormElement)||a.id!=="settingsForm")return;if(l.preventDefault(),!d||!((k=n.activeGarage)!=null&&k.id)){p("Supabase is niet beschikbaar",!0);return}const o=i.querySelector("#mollieMethod"),h=i.querySelector("#paymentDays"),y=i.querySelector("#paymentLink"),c=i.querySelector("#mollieApiKey");if(o instanceof HTMLSelectElement&&(t.mollieMethod=o.value),h instanceof HTMLInputElement&&(t.paymentDays=Math.max(1,parseInt(String(h.value||"14"),10)||14)),y instanceof HTMLInputElement&&(t.paymentLink=y.value.trim()),c instanceof HTMLInputElement&&(t.pendingApiToken=c.value.trim()),t.mollieMethod==="manual"&&!x(t.paymentLink)){p("Vul een geldige Mollie betaallink in (https://...)",!0);return}const f={mollie_method:t.mollieMethod,payment_days:Math.max(1,parseInt(String(t.paymentDays||14),10)||14),payment_link:t.mollieMethod==="manual"&&t.paymentLink||null};t.mollieMethod==="api"&&t.pendingApiToken&&(f.mollie_api_key=t.pendingApiToken);try{const{error:s}=await d.from("garages").update(f).eq("id",n.activeGarage.id);if(s)throw s;t.pendingApiToken&&(t.savedApiKeyMasked=M(t.pendingApiToken)),t.pendingApiToken="",c instanceof HTMLInputElement&&(c.value=""),p("Instellingen opgeslagen ✓",!1)}catch(s){const b=String((s==null?void 0:s.message)||(s==null?void 0:s.details)||"Onbekende fout");console.error("Settings save failed:",s),p(`Opslaan mislukt: ${b}`,!0)}})}const K=document.querySelector("#app");L();E(K);
