import{c as Le}from"./theme-8dp4I_yZ.js";/* empty css                      */import{e as ke,a as Me,c as $e,l as Ee,g as He,t as n,j as ye,b as Ae,s as Pe}from"./branding-CmZO3Xcw.js";import{n as Te,f as qe}from"./rdwService-CFrMDQAa.js";import{h as xe,a as Ie,f as Be,s as Ce,n as De,b as Ne}from"./scheduleTimePicker-Cz5F-D9k.js";const Se="Manual appointment created in dashboard.",Ve={apk:"apk",banden:"banden",onderhoud:"onderhoud",airco:"airco",occasions:"occasions",brakes:"brakes"},Re=["APK","Banden","Onderhoud","Airco","Occasions","Remmen"];function Ye(r){return String(r).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function _(r){return r.toISOString().slice(0,10)}function U(){const r=new Date,C=r.getMinutes()<30?30:60;return r.setMinutes(C,0,0),C===60&&r.setHours(r.getHours()+1,0,0,0),r}function A(r=""){const l=Te(r);return{title:l?`${l}`:"Voertuig gegevens",buildYear:"",apkExpiryDate:"",color:"",fuel:""}}async function je(r){var me,ve,fe,ge;if(!r)return;const l=await ke();if(!l)return;if(!l.isAdmin&&!l.activeGarage){r.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Me(l.activeGarage);const C=l.isAdmin?null:[(me=l.activeGarage)==null?void 0:me.id].filter(Boolean),k=((ve=l.activeGarage)==null?void 0:ve.id)??((ge=(fe=l.garages)==null?void 0:fe[0])==null?void 0:ge.id)??"",{shell:W,contentArea:o,setUnreadEmailCount:J}=$e({activePage:"addappointment",title:"Add Appointment",headerNote:"Create a booking manually",userEmail:l.user.email,onLogout:Ee,garage:l.activeGarage,isAdmin:l.isAdmin});r.replaceChildren(W);const m=document.createElement("div");m.className="appointment-toast-region",m.setAttribute("aria-live","polite"),m.setAttribute("aria-atomic","true"),W.append(m);const F=U(),t=He();o.innerHTML=`
    <section class="panel appointment-form-panel" id="appointmentModeChooser">
      <div class="settings-section" style="padding:1rem 1.25rem;">
        <h2 style="margin-bottom:0.3rem;">${n("appointmentTypeTitle",t)}</h2>
        <p class="section-description" style="margin-bottom:0.8rem;">${n("appointmentTypeDesc",t)}</p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
          <button class="button" type="button" data-appointment-mode="full">📋 ${n("appointmentTypeFull",t)}</button>
          <button class="button subtle" type="button" data-appointment-mode="simple">⚡ ${n("appointmentTypeFast",t)}</button>
        </div>
      </div>
    </section>

    <section class="panel appointment-form-panel" id="fullAppointmentPanel">
      <form id="manualAppointmentForm" class="appointment-create-form" novalidate>
        <div class="appointment-grid-two">
          <label>
            ${n("customerName",t)}
            <input id="manualCustomerName" name="customerName" type="text" autocomplete="name" placeholder="${n("customerNamePlaceholder",t)}" required />
          </label>

          <label>
            ${n("phoneNumber",t)}
            <input id="manualPhone" name="phone" type="tel" autocomplete="tel" placeholder="${n("phoneNumberPlaceholder",t)}" required />
          </label>
        </div>

        <label>
          ${n("licensePlate",t)}
          <input id="manualLicensePlate" name="licensePlate" type="text" placeholder="${n("licensePlatePlaceholder",t)}" required />
        </label>

        <div class="vehicle-preview-card" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${n("vehiclePreview",t)}</p>
          <div class="vehicle-preview-meta">
            <span>${n("buildYear",t)}: <strong id="vehiclePreviewBuildYear"></strong></span>
            <span>${n("apkExpiry",t)}: <strong id="vehiclePreviewApk"></strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>${n("color",t)}: <strong id="vehiclePreviewColor"></strong></span>
            <span>${n("fuel",t)}: <strong id="vehiclePreviewFuel"></strong></span>
          </div>
        </div>

        <div class="appointment-grid-two">
          <div class="appt-picker-field">
            <span class="appt-picker-label">${n("date",t)}</span>
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
            <span class="appt-picker-label">${n("time",t)}</span>
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
          <span class="service-selector-label">${n("serviceLabel",t)}</span>
          <div class="service-selector-options">
            ${Re.map((e,a)=>`
                <label class="service-option service-option-${Ve[String(e).toLowerCase()]??"other"}">
                  <input type="checkbox" name="services" value="${e}" ${a===0?"checked":""} />
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
            <label class="manual-service-label">${n("orAddCustomService",t)}</label>
            <div class="service-input-with-button">
              <input
                type="text"
                id="serviceInput"
                class="service-input"
                placeholder="${n("customServicePlaceholder",t)}"
                aria-label="${n("orAddCustomService",t)}"
              />
              <button type="button" id="addServiceBtn" class="add-service-btn" style="display: none;" aria-label="${n("addService",t)}">${n("addService",t)}</button>
            </div>
            <div id="selectedServices" class="service-chips-display"></div>
          </div>
        </div>

        <label>
          ${n("fastNote",t)}
          <textarea id="manualNote" name="note" rows="2" placeholder="${n("fastNotePlaceholder",t)}"></textarea>
        </label>

        <div class="manual-appointment-actions">
          <button type="submit" class="button">${n("saveAppointment",t)}</button>
          <p id="manualAppointmentStatus" class="status-text" role="status" aria-live="polite"></p>
        </div>
      </form>
    </section>

    <section class="panel appointment-form-panel" id="simpleAppointmentPanel" hidden>
      <form id="simpleAppointmentForm" class="appointment-create-form" novalidate>
        <label>
          ${n("fastTitle",t)}
          <input id="simpleTitle" name="title" type="text" placeholder="${n("fastTitlePlaceholder",t)}" required />
        </label>
        <div class="appointment-grid-two">
          <label>
            ${n("fastDate",t)}
            <input id="simpleDate" name="date" type="date" required />
          </label>
          <label>
            ${n("fastFrom",t)}
            <input id="simpleTime" name="time" type="time" required />
          </label>
        </div>
        <div class="appointment-grid-two">
          <label>
            ${n("fastDuration",t)}
            <select id="simpleDuration" name="duration">
              <option value="30">30 min</option>
              <option value="60" selected>1 ${n("hour",t)}</option>
              <option value="90">1.5 ${n("hour",t)}</option>
              <option value="120">2 ${n("hour",t)}</option>
              <option value="150">2.5 ${n("hour",t)}</option>
              <option value="180">3 ${n("hour",t)}</option>
            </select>
          </label>
          <label>
            ${n("fastColor",t)}
            <input id="simpleColor" name="color" type="color" value="#2563EB" />
          </label>
        </div>
        <label>
          ${n("fastNote",t)}
          <textarea id="simpleNote" name="note" rows="2" placeholder="${n("fastNotePlaceholder",t)}"></textarea>
        </label>
        <div class="manual-appointment-actions">
          <button type="submit" class="button">${n("fastSave",t)}</button>
          <p id="simpleAppointmentStatus" class="status-text" role="status" aria-live="polite"></p>
        </div>
      </form>
    </section>
  `;const M=o.querySelector("#appointmentModeChooser"),Q=o.querySelector("#fullAppointmentPanel"),X=o.querySelector("#simpleAppointmentPanel"),$=o.querySelector("#simpleAppointmentForm"),c=o.querySelector("#simpleAppointmentStatus"),D=o.querySelector("#simpleDate"),N=o.querySelector("#simpleTime");let V="full";const Z=()=>{Q instanceof HTMLElement&&(Q.hidden=V!=="full"),X instanceof HTMLElement&&(X.hidden=V!=="simple"),M==null||M.querySelectorAll("[data-appointment-mode]").forEach(e=>{const a=e.getAttribute("data-appointment-mode");e.classList.toggle("subtle",a!==V)})};M==null||M.querySelectorAll("[data-appointment-mode]").forEach(e=>{e.addEventListener("click",()=>{V=String(e.getAttribute("data-appointment-mode")||"full"),Z()})}),Z();const b=o.querySelector("#manualAppointmentForm"),R=o.querySelector("#manualAppointmentStatus"),E=b instanceof HTMLFormElement?b.querySelector("button[type='submit']"):null,f=o.querySelector("[data-schedule-date-picker]"),g=o.querySelector("[data-schedule-time-picker]"),P=o.querySelector("#manualLicensePlate"),ee=o.querySelector("#vehiclePreviewTitle"),te=o.querySelector("#vehiclePreviewBuildYear"),ne=o.querySelector("#vehiclePreviewApk"),ae=o.querySelector("#vehiclePreviewColor"),ie=o.querySelector("#vehiclePreviewFuel"),oe=_(F),se=`${String(F.getHours()).padStart(2,"0")}:${String(F.getMinutes()).padStart(2,"0")}`;D instanceof HTMLInputElement&&(D.value=oe),N instanceof HTMLInputElement&&(N.value=se);const re=e=>{if(!(f instanceof HTMLElement))return;const a=Ie(e),i=f.querySelector("[data-schedule-edit-date]"),d=f.querySelector("[data-schedule-date-label]"),s=f.querySelector("[data-schedule-date-options]");i instanceof HTMLInputElement&&(i.value=a),d instanceof HTMLElement&&(d.textContent=Be(a)),s instanceof HTMLElement&&(s.innerHTML=Ce(a))},le=e=>{if(!(g instanceof HTMLElement))return;const a=De(e),i=g.querySelector("[data-schedule-edit-time]"),d=g.querySelector("[data-schedule-time-label]"),s=g.querySelector("[data-schedule-time-options]");i instanceof HTMLInputElement&&(i.value=a),d instanceof HTMLElement&&(d.textContent=a),s instanceof HTMLElement&&(s.innerHTML=Ne(a))};re(oe),le(se);const u=o.querySelector("#serviceInput"),Y=o.querySelector("#addServiceBtn"),ce=o.querySelector("#selectedServices");let H=[];const O=()=>{ce&&(ce.innerHTML=H.map((e,a)=>`
      <span class="service-chip service-chip-other" data-custom-idx="${a}">
        ${Ye(e)}
        <button class="service-chip-remove" type="button" data-remove-idx="${a}" aria-label="Remove service">×</button>
      </span>
    `).join(""))},de=()=>{if(!(u instanceof HTMLInputElement))return;const e=u.value.trim();e&&!H.includes(e)&&(H.push(e),u.value="",O(),ue(),u.focus())},ue=()=>{!(u instanceof HTMLInputElement)||!(Y instanceof HTMLButtonElement)||(Y.style.display=u.value.trim().length>0?"block":"none")};u instanceof HTMLInputElement&&(u.addEventListener("input",ue),u.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),de())})),Y instanceof HTMLButtonElement&&Y.addEventListener("click",e=>{e.preventDefault(),de()}),o.addEventListener("click",e=>{xe(o,e.target);const a=e.target instanceof HTMLElement?e.target.closest(".service-chip-remove"):null;if(a instanceof HTMLElement){const i=Number(a.dataset.removeIdx??-1);i>=0&&(H.splice(i,1),O())}});const y=(e,a="")=>{R&&(R.textContent=String(e??""),R.classList.remove("error","warning"),(a==="error"||a==="warning")&&R.classList.add(a))};let q=0,S=0;const z=()=>{q&&(window.clearTimeout(q),q=0),S&&(window.clearTimeout(S),S=0)},pe=()=>{const e=m.querySelector(".appointment-toast");if(!e){m.innerHTML="",z();return}e.classList.remove("is-visible"),S&&window.clearTimeout(S),S=window.setTimeout(()=>{m.innerHTML="",S=0},220)},T=(e,a="success")=>{if(!(m instanceof HTMLElement))return;z();const i=a==="error"||a==="warning"?a:"success",d=i==="success"?'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.2 8.3L6.6 11.4L12.8 4.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>':i==="error"?'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 5L11 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><path d="M11 5L5 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg>':'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><circle cx="8" cy="12" r="1" fill="currentColor"></circle></svg>',s=i==="success"?"Saved Successfully":i==="error"?"Error Occurred":"Action Required";m.innerHTML=`
      <div class="appointment-toast appointment-toast-${i} is-visible" role="status">
        <span class="appointment-toast-icon">${d}</span>
        <div class="appointment-toast-copy">
          <p class="appointment-toast-title">${s}</p>
          <p class="appointment-toast-message">${String(e??"")}</p>
        </div>
        <button class="appointment-toast-close" type="button" aria-label="Dismiss notification">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4.5 4.5L11.5 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
            <path d="M11.5 4.5L4.5 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
        </button>
      </div>
    `,q=window.setTimeout(()=>{pe(),q=0},311e3)};m.addEventListener("click",e=>{(e.target instanceof Element?e.target.closest(".appointment-toast-close"):null)&&(z(),pe())});const G=async()=>{try{const e=await Ae({garageIds:C}),a=Pe(e);J(a.unread)}catch{J(0)}},we=ee instanceof HTMLElement&&te instanceof HTMLElement&&ne instanceof HTMLElement&&ae instanceof HTMLElement&&ie instanceof HTMLElement,w=e=>{we&&(ee.textContent=e.buildYear&&e.buildYear!==""?`${e.title} (${e.buildYear})`:e.title,te.textContent=e.buildYear,ne.textContent=e.apkExpiryDate,ae.textContent=e.color,ie.textContent=e.fuel)};w(A());let x=0,K=0,p=null;P instanceof HTMLInputElement&&P.addEventListener("input",()=>{x&&window.clearTimeout(x);const e=Te(P.value);if(e.length<6){p==null||p.abort(),w(A(e));return}x=window.setTimeout(async()=>{K+=1;const a=K;p==null||p.abort(),p=new AbortController,w({...A(e),title:`${e} • RDW lookup`});try{const i=await qe(e,{signal:p.signal});if(a!==K)return;if(!i){w({...A(e),title:`${e} • Niet gevonden`});return}w(i)}catch(i){if(i&&typeof i=="object"&&"name"in i&&i.name==="AbortError")return;w({...A(e),title:`${e} • RDW tijdelijk niet bereikbaar`})}},320)}),k||(E instanceof HTMLButtonElement&&(E.disabled=!0),y("No garage available for manual appointment creation.","warning")),b==null||b.addEventListener("submit",async e=>{if(e.preventDefault(),!k){y("No garage available for manual appointment creation.","warning"),T("No garage available for manual appointment creation.","warning");return}const d=Array.from(o.querySelectorAll("input[name='services']:checked")).map(v=>v instanceof HTMLInputElement?v.value:"").filter(Boolean).concat(H).filter(Boolean);if(!d.length){y("Enter at least one service.","warning"),T("Enter at least one service.","warning");return}const s=new FormData(b),I=String(s.get("customerName")??"").trim(),j=String(s.get("licensePlate")??"").trim(),L=String(s.get("phone")??"").trim(),h=String(s.get("note")??"").trim(),B=(f==null?void 0:f.querySelector("[data-schedule-edit-date]"))instanceof HTMLInputElement?f.querySelector("[data-schedule-edit-date]").value.trim():String(s.get("date")??"").trim(),he=(g==null?void 0:g.querySelector("[data-schedule-edit-time]"))instanceof HTMLInputElement?g.querySelector("[data-schedule-edit-time]").value.trim():String(s.get("time")??"").trim();if(!I||!j||!L||!B||!he){y("Please fill all required fields.","warning"),T("Please fill all required fields.","warning");return}E instanceof HTMLButtonElement&&(E.disabled=!0),y("Adding appointment...");try{await ye({garageId:k,name:I,licensePlate:j,phone:L,service:d.join(", "),message:`Name: ${I}
Message: ${h||Se}`,appointmentAt:`${B}T${he}`}),b.reset(),H=[],u instanceof HTMLInputElement&&(u.value=""),O();const v=U();re(_(v)),le(`${String(v.getHours()).padStart(2,"0")}:${String(v.getMinutes()).padStart(2,"0")}`),P instanceof HTMLInputElement&&(P.value=""),x&&window.clearTimeout(x),p==null||p.abort(),w(A()),y(""),T("Appointment added successfully.","success"),await G()}catch(v){const be=v instanceof Error?v.message:"Unable to add appointment.";y(be,"error"),T(be,"error")}finally{E instanceof HTMLButtonElement&&k&&(E.disabled=!1)}}),$==null||$.addEventListener("submit",async e=>{if(e.preventDefault(),!k){c&&(c.textContent="No garage available.");return}const a=new FormData($),i=String(a.get("title")??"").trim(),d=String(a.get("date")??"").trim(),s=String(a.get("time")??"").trim(),I=String(a.get("color")??"#2563EB").trim(),j=String(a.get("note")??"").trim();if(!i||!d||!s){c&&(c.textContent="Please fill all required fields.",c.classList.add("warning"));return}const L=$.querySelector("button[type='submit']");L instanceof HTMLButtonElement&&(L.disabled=!0),c&&(c.textContent="Adding appointment...",c.classList.remove("error","warning"));try{await ye({garageId:k,name:i,licensePlate:"UNKNOWN",phone:"0000000000",service:"Simple appointment",message:`Name: ${i}
Message: ${j||Se}`,color:I,appointmentAt:`${d}T${s}`}),$.reset();const h=U();D instanceof HTMLInputElement&&(D.value=_(h)),N instanceof HTMLInputElement&&(N.value=`${String(h.getHours()).padStart(2,"0")}:${String(h.getMinutes()).padStart(2,"0")}`),c&&(c.textContent="",c.classList.remove("error","warning")),T("Appointment added successfully.","success"),await G()}catch(h){const B=h instanceof Error?h.message:"Unable to add appointment.";c&&(c.textContent=B,c.classList.add("error")),T(B,"error")}finally{L instanceof HTMLButtonElement&&(L.disabled=!1)}}),await G()}const Fe=document.querySelector("#app");Le();je(Fe);
