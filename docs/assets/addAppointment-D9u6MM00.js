import{c as Le}from"./theme-shgkqnbR.js";/* empty css                      */import{e as Ee,a as Me,c as we,l as He,o as ge,g as qe,s as Ae}from"./branding-BLWMl1Cd.js";import{n as ye,f as Ie}from"./rdwService-CFrMDQAa.js";import{h as xe,n as Ce,f as Pe,s as Be,a as De,b as $e}from"./scheduleTimePicker-zgpyiEd6.js";const Ne=["APK","Banden","Onderhoud","Airco","Occasions","Brakes"],Ve={apk:"apk",banden:"banden",onderhoud:"onderhoud",airco:"airco",occasions:"occasions",brakes:"brakes"};function je(o){return String(o).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function he(o){return o.toISOString().slice(0,10)}function be(){const o=new Date,$=o.getMinutes()<30?30:60;return o.setMinutes($,0,0),$===60&&o.setHours(o.getHours()+1,0,0,0),o}function M(o=""){const s=ye(o);return{title:s?`${s}`:"Voertuig gegevens",buildYear:"",apkExpiryDate:"",color:"",fuel:""}}async function Oe(o){var pe,de,me,ve;if(!o)return;const s=await Ee();if(!s)return;if(!s.isAdmin&&!s.activeGarage){o.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Me(s.activeGarage);const $=s.isAdmin?null:[(pe=s.activeGarage)==null?void 0:pe.id].filter(Boolean),S=((de=s.activeGarage)==null?void 0:de.id)??((ve=(me=s.garages)==null?void 0:me[0])==null?void 0:ve.id)??"",{shell:J,contentArea:a,setUnreadEmailCount:Q}=we({activePage:"addappointment",title:"Add Appointment",headerNote:"Create a booking manually",userEmail:s.user.email,onLogout:He,garage:s.activeGarage,isAdmin:s.isAdmin});o.replaceChildren(J);const d=document.createElement("div");d.className="appointment-toast-region",d.setAttribute("aria-live","polite"),d.setAttribute("aria-atomic","true"),J.append(d);const z=be();a.innerHTML=`
    <section class="panel appointment-form-panel">
      <form id="manualAppointmentForm" class="appointment-create-form" novalidate>
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input id="manualCustomerName" name="customerName" type="text" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" required />
          </label>

          <label>
            Phone number
            <input id="manualPhone" name="phone" type="tel" autocomplete="tel" placeholder="eg. 0624987172" required />
          </label>
        </div>

        <label>
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text"  placeholder="eg. 12-ABC-D1" required />
        </label>

        <div class="vehicle-preview-card" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">Vehicle preview</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear"></strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk"></strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor"></strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel"></strong></span>
          </div>
        </div>

        <div class="appointment-grid-two">
          <div class="appt-picker-field">
            <span class="appt-picker-label">Date</span>
            <div class="request-date-picker" data-schedule-date-picker>
              <input type="hidden" name="date" data-schedule-edit-date value="" />
              <button class="request-date-trigger" type="button" data-schedule-date-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-date-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <div class="request-date-options" role="listbox" data-schedule-date-options></div>
            </div>
          </div>

          <div class="appt-picker-field">
            <span class="appt-picker-label">Time</span>
            <div class="request-time-picker" data-schedule-time-picker>
              <input type="hidden" name="time" data-schedule-edit-time value="" />
              <button class="request-time-trigger" type="button" data-schedule-time-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-time-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <div class="request-time-options" role="listbox" data-schedule-time-options></div>
            </div>
          </div>
        </div>

        <div class="service-selector-group" role="group" aria-label="Service">
          <span class="service-selector-label">Service</span>
          <div class="service-selector-options">
            ${Ne.map((e,t)=>`
                <label class="service-option service-option-${Ve[String(e).toLowerCase()]??"other"}">
                  <input type="checkbox" name="services" value="${e}" ${t===0?"checked":""} />
                  <span class="service-option-ui">
                    <span class="service-option-check" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8.2L6.7 11.2L12.5 5.2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                    <span class="service-option-text">${e}</span>
                  </span>
                </label>
              `).join("")}
          </div>
          <div class="manual-service-input-group">
            <label class="manual-service-label">Or add custom service:</label>
            <div class="service-input-with-button">
              <input 
                type="text" 
                id="serviceInput" 
                class="service-input" 
                placeholder="e.g., Remblokken, Wielen balanceren"
                aria-label="Custom service input"
              />
              <button type="button" id="addServiceBtn" class="add-service-btn" style="display: none;" aria-label="Add service">Add</button>
            </div>
            <div id="selectedServices" class="service-chips-display"></div>
          </div>
        </div>

        <div class="manual-appointment-actions">
          <button type="submit" class="button">Save Appointment</button>
          <p id="manualAppointmentStatus" class="status-text" role="status" aria-live="polite"></p>
        </div>
      </form>
    </section>
  `;const v=a.querySelector("#manualAppointmentForm"),N=a.querySelector("#manualAppointmentStatus"),k=v==null?void 0:v.querySelector("button[type='submit']"),w=a.querySelector(".appointment-form-panel"),H=a.querySelector("#manualLicensePlate"),X=a.querySelector("#vehiclePreviewTitle"),Z=a.querySelector("#vehiclePreviewBuildYear"),ee=a.querySelector("#vehiclePreviewApk"),te=a.querySelector("#vehiclePreviewColor"),ne=a.querySelector("#vehiclePreviewFuel"),f=a.querySelector("[data-schedule-date-picker]"),g=a.querySelector("[data-schedule-time-picker]"),ae=e=>{if(!(f instanceof HTMLElement))return;const t=Ce(e),n=f.querySelector("[data-schedule-edit-date]"),r=f.querySelector("[data-schedule-date-label]"),i=f.querySelector("[data-schedule-date-options]");n instanceof HTMLInputElement&&(n.value=t),r instanceof HTMLElement&&(r.textContent=Pe(t)),i instanceof HTMLElement&&(i.innerHTML=Be(t))},ie=e=>{if(!(g instanceof HTMLElement))return;const t=De(e),n=g.querySelector("[data-schedule-edit-time]"),r=g.querySelector("[data-schedule-time-label]"),i=g.querySelector("[data-schedule-time-options]");n instanceof HTMLInputElement&&(n.value=t),r instanceof HTMLElement&&(r.textContent=t),i instanceof HTMLElement&&(i.innerHTML=$e(t))},G=he(z),K=`${String(z.getHours()).padStart(2,"0")}:${String(z.getMinutes()).padStart(2,"0")}`;ae(G),ie(K);let V="full";const Te=`
    <section class="panel appointment-form-panel" id="simpleAppointmentPanel" hidden>
      <form id="simpleAppointmentForm" class="appointment-create-form" novalidate>
        <label>
          Titel / naam
          <input id="simpleTitle" name="title" type="text" placeholder="Naam of beschrijving" required />
        </label>
        <div class="appointment-grid-two">
          <label>
            Datum
            <input id="simpleDate" name="date" type="date" required />
          </label>
          <label>
            Vanaf
            <input id="simpleTime" name="time" type="time" required />
          </label>
        </div>
        <div class="appointment-grid-two">
          <label>
            Duur
            <select id="simpleDuration" name="duration">
              <option value="30">30 min</option>
              <option value="60" selected>1 uur</option>
              <option value="90">1.5 uur</option>
              <option value="120">2 uur</option>
              <option value="150">2.5 uur</option>
              <option value="180">3 uur</option>
            </select>
          </label>
          <label>
            Kleur
            <input id="simpleColor" name="color" type="color" value="#2563EB" />
          </label>
        </div>
        <label>
          Notitie
          <textarea id="simpleNote" name="note" rows="2" placeholder="Optioneel"></textarea>
        </label>
        <div class="manual-appointment-actions">
          <button type="submit" class="button">Snel opslaan</button>
          <p id="simpleAppointmentStatus" class="status-text" role="status" aria-live="polite"></p>
        </div>
      </form>
    </section>
  `,q=document.createElement("section");q.className="panel appointment-form-panel",q.innerHTML=`
    <div class="settings-section" style="padding:1rem;">
      <h2 style="margin-bottom:0.4rem;">Type afspraak</h2>
      <p class="section-description">Kies of je snel wilt plannen of een volledige afspraak wilt aanmaken.</p>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
        <button class="button" type="button" data-appointment-mode="simple">⚡ Snel</button>
        <button class="button subtle" type="button" data-appointment-mode="full">📋 Volledig</button>
      </div>
    </div>
  `,w instanceof HTMLElement&&(w.insertAdjacentHTML("beforebegin",Te),w.insertAdjacentElement("beforebegin",q));const oe=a.querySelector("#simpleAppointmentPanel"),l=a.querySelector("#simpleAppointmentForm"),m=a.querySelector("#simpleAppointmentStatus"),j=a.querySelector("#simpleDate"),O=a.querySelector("#simpleTime");j instanceof HTMLInputElement&&(j.value=G),O instanceof HTMLInputElement&&(O.value=K);const se=()=>{w instanceof HTMLElement&&(w.hidden=V!=="full"),oe instanceof HTMLElement&&(oe.hidden=V!=="simple"),q.querySelectorAll("[data-appointment-mode]").forEach(e=>{const n=e.getAttribute("data-appointment-mode")===V;e.classList.toggle("subtle",!n)})};q.querySelectorAll("[data-appointment-mode]").forEach(e=>{e.addEventListener("click",()=>{V=String(e.getAttribute("data-appointment-mode")||"full"),se()})}),se(),l==null||l.addEventListener("submit",async e=>{if(e.preventDefault(),!S){m instanceof HTMLElement&&(m.textContent="Geen garage beschikbaar.");return}const t=l.querySelector("#simpleTitle"),n=l.querySelector("#simpleDate"),r=l.querySelector("#simpleTime"),i=l.querySelector("#simpleDuration"),E=l.querySelector("#simpleColor"),x=l.querySelector("#simpleNote"),C=t instanceof HTMLInputElement?t.value.trim():"",P=n instanceof HTMLInputElement?n.value.trim():"",B=r instanceof HTMLInputElement?r.value.trim():"",p=i instanceof HTMLSelectElement&&parseInt(i.value,10)||60,R=E instanceof HTMLInputElement?E.value:"#2563EB",ke=x instanceof HTMLTextAreaElement?x.value.trim():"";if(!C||!P||!B){m instanceof HTMLElement&&(m.textContent="Vul titel, datum en tijd in.");return}m instanceof HTMLElement&&(m.textContent="Afspraak toevoegen...");try{await ge({garageId:S,name:C,licensePlate:"UNKNOWN",phone:"0000000000",service:"Simple appointment",message:`Type: simple
Color: ${R}
Duration: ${p}
Note: ${ke}`,appointmentAt:`${P}T${B}`}),l.reset(),j instanceof HTMLInputElement&&(j.value=G),O instanceof HTMLInputElement&&(O.value=K);const D=l.querySelector("#simpleColor");D instanceof HTMLInputElement&&(D.value="#2563EB"),m instanceof HTMLElement&&(m.textContent="Afspraak aangemaakt ✓"),y("Afspraak aangemaakt ✓","success"),await _()}catch(D){const fe=D instanceof Error?D.message:"Aanmaken mislukt.";m instanceof HTMLElement&&(m.textContent=fe),y(fe,"error")}});const c=a.querySelector("#serviceInput"),Y=a.querySelector("#addServiceBtn"),re=a.querySelector("#selectedServices");let L=[];const F=()=>{re&&(re.innerHTML=L.map((e,t)=>`
      <span class="service-chip service-chip-other" data-custom-idx="${t}">
        ${je(e)}
        <button class="service-chip-remove" type="button" data-remove-idx="${t}" aria-label="Remove service">×</button>
      </span>
    `).join(""))},le=()=>{if(!(c instanceof HTMLInputElement))return;const e=c.value.trim();e&&!L.includes(e)&&(L.push(e),c.value="",F(),ce(),c.focus())},ce=()=>{!(c instanceof HTMLInputElement)||!(Y instanceof HTMLButtonElement)||(Y.style.display=c.value.trim().length>0?"block":"none")};c instanceof HTMLInputElement&&(c.addEventListener("input",ce),c.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),le())})),Y instanceof HTMLButtonElement&&Y.addEventListener("click",e=>{e.preventDefault(),le()}),a.addEventListener("click",e=>{xe(a,e.target);const t=e.target instanceof HTMLElement?e.target.closest(".service-chip-remove"):null;if(t instanceof HTMLElement){const n=Number(t.dataset.removeIdx??-1);n>=0&&(L.splice(n,1),F())}});const h=(e,t="")=>{N&&(N.textContent=String(e??""),N.classList.remove("error","warning"),(t==="error"||t==="warning")&&N.classList.add(t))};let A=0,b=0;const W=()=>{A&&(window.clearTimeout(A),A=0),b&&(window.clearTimeout(b),b=0)},ue=()=>{const e=d.querySelector(".appointment-toast");if(!e){d.innerHTML="",W();return}e.classList.remove("is-visible"),b&&window.clearTimeout(b),b=window.setTimeout(()=>{d.innerHTML="",b=0},220)},y=(e,t="success")=>{if(!(d instanceof HTMLElement))return;W();const n=t==="error"||t==="warning"?t:"success",r=n==="success"?'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.2 8.3L6.6 11.4L12.8 4.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>':n==="error"?'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 5L11 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><path d="M11 5L5 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg>':'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><circle cx="8" cy="12" r="1" fill="currentColor"></circle></svg>',i=n==="success"?"Saved Successfully":n==="error"?"Error Occurred":"Action Required";d.innerHTML=`
      <div class="appointment-toast appointment-toast-${n} is-visible" role="status">
        <span class="appointment-toast-icon">${r}</span>
        <div class="appointment-toast-copy">
          <p class="appointment-toast-title">${i}</p>
          <p class="appointment-toast-message">${String(e??"")}</p>
        </div>
        <button class="appointment-toast-close" type="button" aria-label="Dismiss notification">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4.5 4.5L11.5 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
            <path d="M11.5 4.5L4.5 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
        </button>
      </div>
    `,A=window.setTimeout(()=>{ue(),A=0},311e3)};d.addEventListener("click",e=>{(e.target instanceof Element?e.target.closest(".appointment-toast-close"):null)&&(W(),ue())});const _=async()=>{try{const e=await qe({garageIds:$}),t=Ae(e);Q(t.unread)}catch{Q(0)}},Se=X instanceof HTMLElement&&Z instanceof HTMLElement&&ee instanceof HTMLElement&&te instanceof HTMLElement&&ne instanceof HTMLElement,T=e=>{Se&&(X.textContent=e.buildYear&&e.buildYear!==""?`${e.title} (${e.buildYear})`:e.title,Z.textContent=e.buildYear,ee.textContent=e.apkExpiryDate,te.textContent=e.color,ne.textContent=e.fuel)};T(M());let I=0,U=0,u=null;H instanceof HTMLInputElement&&H.addEventListener("input",()=>{I&&window.clearTimeout(I);const e=ye(H.value);if(e.length<6){u==null||u.abort(),T(M(e));return}I=window.setTimeout(async()=>{U+=1;const t=U;u==null||u.abort(),u=new AbortController,T({...M(e),title:`${e} • RDW lookup`});try{const n=await Ie(e,{signal:u.signal});if(t!==U)return;if(!n){T({...M(e),title:`${e} • Niet gevonden`});return}T(n)}catch(n){if(n&&typeof n=="object"&&"name"in n&&n.name==="AbortError")return;T({...M(e),title:`${e} • RDW tijdelijk niet bereikbaar`})}},320)}),S||(k instanceof HTMLButtonElement&&(k.disabled=!0),h("No garage available for manual appointment creation.","warning")),v==null||v.addEventListener("submit",async e=>{if(e.preventDefault(),!S){h("No garage available for manual appointment creation.","warning"),y("No garage available for manual appointment creation.","warning");return}const r=Array.from(a.querySelectorAll("input[name='services']:checked")).map(p=>p instanceof HTMLInputElement?p.value:"").filter(Boolean).concat(L).filter(Boolean);if(!r.length){h("Enter at least one service.","warning"),y("Enter at least one service.","warning");return}const i=new FormData(v),E=String(i.get("customerName")??"").trim(),x=String(i.get("licensePlate")??"").trim(),C=String(i.get("phone")??"").trim(),P=(f==null?void 0:f.querySelector("[data-schedule-edit-date]"))instanceof HTMLInputElement?f.querySelector("[data-schedule-edit-date]").value.trim():String(i.get("date")??"").trim(),B=(g==null?void 0:g.querySelector("[data-schedule-edit-time]"))instanceof HTMLInputElement?g.querySelector("[data-schedule-edit-time]").value.trim():String(i.get("time")??"").trim();if(!E||!x||!C||!P||!B){h("Please fill all required fields.","warning"),y("Please fill all required fields.","warning");return}k instanceof HTMLButtonElement&&(k.disabled=!0),h("Adding appointment...");try{await ge({garageId:S,name:E,licensePlate:x,phone:C,service:r.join(", "),message:`Name: ${E}
Message: Manual appointment created in dashboard.`,appointmentAt:`${P}T${B}`}),v.reset(),L=[],c instanceof HTMLInputElement&&(c.value=""),F();const p=be();ae(he(p)),ie(`${String(p.getHours()).padStart(2,"0")}:${String(p.getMinutes()).padStart(2,"0")}`),H instanceof HTMLInputElement&&(H.value=""),I&&window.clearTimeout(I),u==null||u.abort(),T(M()),h(""),y("Appointment added successfully.","success"),await _()}catch(p){const R=p instanceof Error?p.message:"Unable to add appointment.";h(R,"error"),y(R,"error")}finally{k instanceof HTMLButtonElement&&S&&(k.disabled=!1)}}),await _()}const Ye=document.querySelector("#app");Le();Oe(Ye);
