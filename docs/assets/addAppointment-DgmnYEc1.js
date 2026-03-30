import{c as ee}from"./theme-Cm8RCokO.js";/* empty css                      */import{e as te,a as ae,c as ne,l as ie,j as se,g as oe}from"./branding-ObYa84jE.js";import{s as re}from"./emailService-BZ0Xqht5.js";import{n as J,f as le}from"./rdwService-D13NyQC7.js";import{h as ce,n as de,f as ue,s as pe,a as me,b as ve}from"./scheduleTimePicker-zgpyiEd6.js";const ge=["APK","Banden","Onderhoud","Airco","Overige","Occasions","Brakes"],he={apk:"apk",banden:"banden",onderhoud:"onderhoud",airco:"airco",overige:"other",occasions:"occasions",brakes:"brakes"};function U(i){return i.toISOString().slice(0,10)}function W(){const i=new Date,y=i.getMinutes()<30?30:60;return i.setMinutes(y,0,0),y===60&&i.setHours(i.getHours()+1,0,0,0),i}function b(i=""){const n=J(i);return{title:n?`${n}`:"Voertuig gegevens",buildYear:"",apkExpiryDate:"",color:"",fuel:""}}async function fe(i){var Y,z,O,G;if(!i)return;const n=await te();if(!n)return;if(!n.isAdmin&&!n.activeGarage){i.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}ae(n.activeGarage);const y=n.isAdmin?null:[(Y=n.activeGarage)==null?void 0:Y.id].filter(Boolean),L=((z=n.activeGarage)==null?void 0:z.id)??((G=(O=n.garages)==null?void 0:O[0])==null?void 0:G.id)??"",{shell:H,contentArea:s,setUnreadEmailCount:x}=ne({activePage:"addappointment",title:"Add Appointment",headerNote:"Create a booking manually",userEmail:n.user.email,onLogout:ie,garage:n.activeGarage,isAdmin:n.isAdmin});i.replaceChildren(H);const l=document.createElement("div");l.className="appointment-toast-region",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),H.append(l);const E=W();s.innerHTML=`
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
            ${ge.map((e,t)=>{const a=t===0?"checked":"";return`
                <label class="service-option service-option-${he[String(e).toLowerCase()]??"other"}">
                  <input type="checkbox" name="services" value="${e}" ${a} />
                  <span class="service-option-ui">
                    <span class="service-option-check" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8.2L6.7 11.2L12.5 5.2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                    <span class="service-option-text">${e}</span>
                  </span>
                </label>
              `}).join("")}
          </div>
        </div>

        <div class="manual-appointment-actions">
          <button type="submit" class="button">Save Appointment</button>
          <p id="manualAppointmentStatus" class="status-text" role="status" aria-live="polite"></p>
        </div>
      </form>
    </section>
  `;const d=s.querySelector("#manualAppointmentForm"),M=s.querySelector("#manualAppointmentStatus"),f=d==null?void 0:d.querySelector("button[type='submit']"),w=s.querySelector("#manualLicensePlate"),B=s.querySelector("#vehiclePreviewTitle"),A=s.querySelector("#vehiclePreviewBuildYear"),C=s.querySelector("#vehiclePreviewApk"),I=s.querySelector("#vehiclePreviewColor"),$=s.querySelector("#vehiclePreviewFuel"),u=s.querySelector("[data-schedule-date-picker]"),p=s.querySelector("[data-schedule-time-picker]"),D=e=>{if(!(u instanceof HTMLElement))return;const t=de(e),a=u.querySelector("[data-schedule-edit-date]"),r=u.querySelector("[data-schedule-date-label]"),c=u.querySelector("[data-schedule-date-options]");a instanceof HTMLInputElement&&(a.value=t),r instanceof HTMLElement&&(r.textContent=ue(t)),c instanceof HTMLElement&&(c.innerHTML=pe(t))},N=e=>{if(!(p instanceof HTMLElement))return;const t=me(e),a=p.querySelector("[data-schedule-edit-time]"),r=p.querySelector("[data-schedule-time-label]"),c=p.querySelector("[data-schedule-time-options]");a instanceof HTMLInputElement&&(a.value=t),r instanceof HTMLElement&&(r.textContent=t),c instanceof HTMLElement&&(c.innerHTML=ve(t))},Q=U(E),X=`${String(E.getHours()).padStart(2,"0")}:${String(E.getMinutes()).padStart(2,"0")}`;D(Q),N(X),s.addEventListener("click",e=>{ce(s,e.target)});const v=(e,t="")=>{M&&(M.textContent=String(e??""),M.classList.remove("error","warning"),(t==="error"||t==="warning")&&M.classList.add(t))};let k=0,g=0;const P=()=>{k&&(window.clearTimeout(k),k=0),g&&(window.clearTimeout(g),g=0)},V=()=>{const e=l.querySelector(".appointment-toast");if(!e){l.innerHTML="",P();return}e.classList.remove("is-visible"),g&&window.clearTimeout(g),g=window.setTimeout(()=>{l.innerHTML="",g=0},220)},S=(e,t="success")=>{if(!(l instanceof HTMLElement))return;P();const a=t==="error"||t==="warning"?t:"success",r=a==="success"?'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.2 8.3L6.6 11.4L12.8 4.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>':a==="error"?'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 5L11 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><path d="M11 5L5 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg>':'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><circle cx="8" cy="12" r="1" fill="currentColor"></circle></svg>',c=a==="success"?"Saved Successfully":a==="error"?"Error Occurred":"Action Required";l.innerHTML=`
      <div class="appointment-toast appointment-toast-${a} is-visible" role="status">
        <span class="appointment-toast-icon">${r}</span>
        <div class="appointment-toast-copy">
          <p class="appointment-toast-title">${c}</p>
          <p class="appointment-toast-message">${String(e??"")}</p>
        </div>
        <button class="appointment-toast-close" type="button" aria-label="Dismiss notification">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4.5 4.5L11.5 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
            <path d="M11.5 4.5L4.5 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
        </button>
      </div>
    `,k=window.setTimeout(()=>{V(),k=0},311e3)};l.addEventListener("click",e=>{(e.target instanceof Element?e.target.closest(".appointment-toast-close"):null)&&(P(),V())});const j=async()=>{try{const e=await oe({garageIds:y}),t=re(e);x(t.unread)}catch{x(0)}},Z=B instanceof HTMLElement&&A instanceof HTMLElement&&C instanceof HTMLElement&&I instanceof HTMLElement&&$ instanceof HTMLElement,h=e=>{Z&&(B.textContent=e.buildYear&&e.buildYear!==""?`${e.title} (${e.buildYear})`:e.title,A.textContent=e.buildYear,C.textContent=e.apkExpiryDate,I.textContent=e.color,$.textContent=e.fuel)};h(b());let T=0,q=0,o=null;w instanceof HTMLInputElement&&w.addEventListener("input",()=>{T&&window.clearTimeout(T);const e=J(w.value);if(e.length<6){o==null||o.abort(),h(b(e));return}T=window.setTimeout(async()=>{q+=1;const t=q;o==null||o.abort(),o=new AbortController,h({...b(e),title:`${e} • RDW lookup`});try{const a=await le(e,{signal:o.signal});if(t!==q)return;if(!a){h({...b(e),title:`${e} • Niet gevonden`});return}h(a)}catch(a){if(a&&typeof a=="object"&&"name"in a&&a.name==="AbortError")return;h({...b(e),title:`${e} • RDW tijdelijk niet bereikbaar`})}},320)}),L||(f instanceof HTMLButtonElement&&(f.disabled=!0),v("No garage available for manual appointment creation.","warning")),d==null||d.addEventListener("submit",async e=>{if(e.preventDefault(),!L){v("No garage available for manual appointment creation.","warning"),S("No garage available for manual appointment creation.","warning");return}const t=new FormData(d),a=t.getAll("services").map(m=>String(m).trim()).filter(Boolean);if(!a.length){v("Select at least one service.","warning"),S("Select at least one service.","warning");return}const r=String(t.get("customerName")??"").trim(),c=String(t.get("licensePlate")??"").trim(),R=String(t.get("phone")??"").trim(),K=(u==null?void 0:u.querySelector("[data-schedule-edit-date]"))instanceof HTMLInputElement?u.querySelector("[data-schedule-edit-date]").value.trim():String(t.get("date")??"").trim(),_=(p==null?void 0:p.querySelector("[data-schedule-edit-time]"))instanceof HTMLInputElement?p.querySelector("[data-schedule-edit-time]").value.trim():String(t.get("time")??"").trim();if(!r||!c||!R||!K||!_){v("Please fill all required fields.","warning"),S("Please fill all required fields.","warning");return}f instanceof HTMLButtonElement&&(f.disabled=!0),v("Adding appointment...");try{await se({garageId:L,licensePlate:c,phone:R,service:a.join(", "),message:`Name: ${r}
Message: Manual appointment created in dashboard.`,appointmentAt:`${K}T${_}`}),d.reset();const m=W();D(U(m)),N(`${String(m.getHours()).padStart(2,"0")}:${String(m.getMinutes()).padStart(2,"0")}`),w instanceof HTMLInputElement&&(w.value=""),T&&window.clearTimeout(T),o==null||o.abort(),h(b()),v(""),S("Appointment added successfully.","success"),await j()}catch(m){const F=m instanceof Error?m.message:"Unable to add appointment.";v(F,"error"),S(F,"error")}finally{f instanceof HTMLButtonElement&&L&&(f.disabled=!1)}}),await j()}const be=document.querySelector("#app");ee();fe(be);
