import{c as re}from"./theme-B0f129yT.js";/* empty css                      */import{e as oe,a as le,c as ce,l as de,k as ue,g as pe,s as me}from"./branding-D4zs9BDF.js";import{n as ae,f as ve}from"./rdwService-CFrMDQAa.js";import{h as he,n as ge,f as fe,s as be,a as ke,b as we}from"./scheduleTimePicker-zgpyiEd6.js";const Se=["APK","Banden","Onderhoud","Airco","Occasions","Brakes"],ye={apk:"apk",banden:"banden",onderhoud:"onderhoud",airco:"airco",occasions:"occasions",brakes:"brakes"};function Te(i){return String(i).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ee(i){return i.toISOString().slice(0,10)}function te(){const i=new Date,M=i.getMinutes()<30?30:60;return i.setMinutes(M,0,0),M===60&&i.setHours(i.getHours()+1,0,0,0),i}function w(i=""){const s=ae(i);return{title:s?`${s}`:"Voertuig gegevens",buildYear:"",apkExpiryDate:"",color:"",fuel:""}}async function Le(i){var G,K,_,F;if(!i)return;const s=await oe();if(!s)return;if(!s.isAdmin&&!s.activeGarage){i.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}le(s.activeGarage);const M=s.isAdmin?null:[(G=s.activeGarage)==null?void 0:G.id].filter(Boolean),E=((K=s.activeGarage)==null?void 0:K.id)??((F=(_=s.garages)==null?void 0:_[0])==null?void 0:F.id)??"",{shell:B,contentArea:n,setUnreadEmailCount:C}=ce({activePage:"addappointment",title:"Add Appointment",headerNote:"Create a booking manually",userEmail:s.user.email,onLogout:de,garage:s.activeGarage,isAdmin:s.isAdmin});i.replaceChildren(B);const l=document.createElement("div");l.className="appointment-toast-region",l.setAttribute("aria-live","polite"),l.setAttribute("aria-atomic","true"),B.append(l);const q=te();n.innerHTML=`
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
            ${Se.map((e,t)=>`
                <label class="service-option service-option-${ye[String(e).toLowerCase()]??"other"}">
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
            <input 
              type="text" 
              id="serviceInput" 
              class="service-input" 
              placeholder="e.g., Remblokken, Wielen balanceren"
              aria-label="Custom service input"
            />
            <div id="selectedServices" class="service-chips-display"></div>
          </div>
        </div>

        <div class="manual-appointment-actions">
          <button type="submit" class="button">Save Appointment</button>
          <p id="manualAppointmentStatus" class="status-text" role="status" aria-live="polite"></p>
        </div>
      </form>
    </section>
  `;const u=n.querySelector("#manualAppointmentForm"),H=n.querySelector("#manualAppointmentStatus"),f=u==null?void 0:u.querySelector("button[type='submit']"),S=n.querySelector("#manualLicensePlate"),I=n.querySelector("#vehiclePreviewTitle"),$=n.querySelector("#vehiclePreviewBuildYear"),D=n.querySelector("#vehiclePreviewApk"),N=n.querySelector("#vehiclePreviewColor"),V=n.querySelector("#vehiclePreviewFuel"),p=n.querySelector("[data-schedule-date-picker]"),m=n.querySelector("[data-schedule-time-picker]"),j=e=>{if(!(p instanceof HTMLElement))return;const t=ge(e),a=p.querySelector("[data-schedule-edit-date]"),c=p.querySelector("[data-schedule-date-label]"),r=p.querySelector("[data-schedule-date-options]");a instanceof HTMLInputElement&&(a.value=t),c instanceof HTMLElement&&(c.textContent=fe(t)),r instanceof HTMLElement&&(r.innerHTML=be(t))},Y=e=>{if(!(m instanceof HTMLElement))return;const t=ke(e),a=m.querySelector("[data-schedule-edit-time]"),c=m.querySelector("[data-schedule-time-label]"),r=m.querySelector("[data-schedule-time-options]");a instanceof HTMLInputElement&&(a.value=t),c instanceof HTMLElement&&(c.textContent=t),r instanceof HTMLElement&&(r.innerHTML=we(t))},ne=ee(q),ie=`${String(q.getHours()).padStart(2,"0")}:${String(q.getMinutes()).padStart(2,"0")}`;j(ne),Y(ie);const b=n.querySelector("#serviceInput"),R=n.querySelector("#selectedServices");let k=[];const P=()=>{R&&(R.innerHTML=k.map((e,t)=>`
      <span class="service-chip service-chip-other" data-custom-idx="${t}">
        ${Te(e)}
        <button class="service-chip-remove" type="button" data-remove-idx="${t}" aria-label="Remove service">×</button>
      </span>
    `).join(""))};b instanceof HTMLInputElement&&b.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();const t=b.value.trim();t&&!k.includes(t)&&(k.push(t),b.value="",P())}}),n.addEventListener("click",e=>{he(n,e.target);const t=e.target instanceof HTMLElement?e.target.closest(".service-chip-remove"):null;if(t instanceof HTMLElement){const a=Number(t.dataset.removeIdx??-1);a>=0&&(k.splice(a,1),P())}});const v=(e,t="")=>{H&&(H.textContent=String(e??""),H.classList.remove("error","warning"),(t==="error"||t==="warning")&&H.classList.add(t))};let y=0,h=0;const x=()=>{y&&(window.clearTimeout(y),y=0),h&&(window.clearTimeout(h),h=0)},z=()=>{const e=l.querySelector(".appointment-toast");if(!e){l.innerHTML="",x();return}e.classList.remove("is-visible"),h&&window.clearTimeout(h),h=window.setTimeout(()=>{l.innerHTML="",h=0},220)},T=(e,t="success")=>{if(!(l instanceof HTMLElement))return;x();const a=t==="error"||t==="warning"?t:"success",c=a==="success"?'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.2 8.3L6.6 11.4L12.8 4.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>':a==="error"?'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 5L11 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><path d="M11 5L5 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg>':'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><circle cx="8" cy="12" r="1" fill="currentColor"></circle></svg>',r=a==="success"?"Saved Successfully":a==="error"?"Error Occurred":"Action Required";l.innerHTML=`
      <div class="appointment-toast appointment-toast-${a} is-visible" role="status">
        <span class="appointment-toast-icon">${c}</span>
        <div class="appointment-toast-copy">
          <p class="appointment-toast-title">${r}</p>
          <p class="appointment-toast-message">${String(e??"")}</p>
        </div>
        <button class="appointment-toast-close" type="button" aria-label="Dismiss notification">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4.5 4.5L11.5 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
            <path d="M11.5 4.5L4.5 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
        </button>
      </div>
    `,y=window.setTimeout(()=>{z(),y=0},311e3)};l.addEventListener("click",e=>{(e.target instanceof Element?e.target.closest(".appointment-toast-close"):null)&&(x(),z())});const O=async()=>{try{const e=await pe({garageIds:M}),t=me(e);C(t.unread)}catch{C(0)}},se=I instanceof HTMLElement&&$ instanceof HTMLElement&&D instanceof HTMLElement&&N instanceof HTMLElement&&V instanceof HTMLElement,g=e=>{se&&(I.textContent=e.buildYear&&e.buildYear!==""?`${e.title} (${e.buildYear})`:e.title,$.textContent=e.buildYear,D.textContent=e.apkExpiryDate,N.textContent=e.color,V.textContent=e.fuel)};g(w());let L=0,A=0,o=null;S instanceof HTMLInputElement&&S.addEventListener("input",()=>{L&&window.clearTimeout(L);const e=ae(S.value);if(e.length<6){o==null||o.abort(),g(w(e));return}L=window.setTimeout(async()=>{A+=1;const t=A;o==null||o.abort(),o=new AbortController,g({...w(e),title:`${e} • RDW lookup`});try{const a=await ve(e,{signal:o.signal});if(t!==A)return;if(!a){g({...w(e),title:`${e} • Niet gevonden`});return}g(a)}catch(a){if(a&&typeof a=="object"&&"name"in a&&a.name==="AbortError")return;g({...w(e),title:`${e} • RDW tijdelijk niet bereikbaar`})}},320)}),E||(f instanceof HTMLButtonElement&&(f.disabled=!0),v("No garage available for manual appointment creation.","warning")),u==null||u.addEventListener("submit",async e=>{if(e.preventDefault(),!E){v("No garage available for manual appointment creation.","warning"),T("No garage available for manual appointment creation.","warning");return}const c=Array.from(n.querySelectorAll("input[name='service']:checked")).map(d=>d instanceof HTMLInputElement?d.value:"").filter(Boolean).concat(k).filter(Boolean);if(!c.length){v("Enter at least one service.","warning"),T("Enter at least one service.","warning");return}const r=new FormData(u),W=String(r.get("customerName")??"").trim(),U=String(r.get("licensePlate")??"").trim(),J=String(r.get("phone")??"").trim(),Q=(p==null?void 0:p.querySelector("[data-schedule-edit-date]"))instanceof HTMLInputElement?p.querySelector("[data-schedule-edit-date]").value.trim():String(r.get("date")??"").trim(),X=(m==null?void 0:m.querySelector("[data-schedule-edit-time]"))instanceof HTMLInputElement?m.querySelector("[data-schedule-edit-time]").value.trim():String(r.get("time")??"").trim();if(!W||!U||!J||!Q||!X){v("Please fill all required fields.","warning"),T("Please fill all required fields.","warning");return}f instanceof HTMLButtonElement&&(f.disabled=!0),v("Adding appointment...");try{await ue({garageId:E,licensePlate:U,phone:J,service:c.join(", "),message:`Name: ${W}
Message: Manual appointment created in dashboard.`,appointmentAt:`${Q}T${X}`}),u.reset(),k=[],b instanceof HTMLInputElement&&(b.value=""),P();const d=te();j(ee(d)),Y(`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`),S instanceof HTMLInputElement&&(S.value=""),L&&window.clearTimeout(L),o==null||o.abort(),g(w()),v(""),T("Appointment added successfully.","success"),await O()}catch(d){const Z=d instanceof Error?d.message:"Unable to add appointment.";v(Z,"error"),T(Z,"error")}finally{f instanceof HTMLButtonElement&&E&&(f.disabled=!1)}}),await O()}const Me=document.querySelector("#app");re();Le(Me);
