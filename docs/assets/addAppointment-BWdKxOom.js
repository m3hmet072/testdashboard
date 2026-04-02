import{c as ce}from"./theme-Bb-bjqwO.js";/* empty css                      */import{e as de,a as ue,c as pe,l as me,k as ve,g as he,s as fe}from"./branding-BytcG8ls.js";import{n as se,f as ge}from"./rdwService-CFrMDQAa.js";import{h as be,n as ke,f as we,s as Se,a as ye,b as Te}from"./scheduleTimePicker-zgpyiEd6.js";const Le=["APK","Banden","Onderhoud","Airco","Occasions","Brakes"],Me={apk:"apk",banden:"banden",onderhoud:"onderhoud",airco:"airco",occasions:"occasions",brakes:"brakes"};function Ee(i){return String(i).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ae(i){return i.toISOString().slice(0,10)}function ie(){const i=new Date,M=i.getMinutes()<30?30:60;return i.setMinutes(M,0,0),M===60&&i.setHours(i.getHours()+1,0,0,0),i}function w(i=""){const s=se(i);return{title:s?`${s}`:"Voertuig gegevens",buildYear:"",apkExpiryDate:"",color:"",fuel:""}}async function He(i){var W,U,J,Q;if(!i)return;const s=await de();if(!s)return;if(!s.isAdmin&&!s.activeGarage){i.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}ue(s.activeGarage);const M=s.isAdmin?null:[(W=s.activeGarage)==null?void 0:W.id].filter(Boolean),E=((U=s.activeGarage)==null?void 0:U.id)??((Q=(J=s.garages)==null?void 0:J[0])==null?void 0:Q.id)??"",{shell:I,contentArea:a,setUnreadEmailCount:$}=pe({activePage:"addappointment",title:"Add Appointment",headerNote:"Create a booking manually",userEmail:s.user.email,onLogout:me,garage:s.activeGarage,isAdmin:s.isAdmin});i.replaceChildren(I);const c=document.createElement("div");c.className="appointment-toast-region",c.setAttribute("aria-live","polite"),c.setAttribute("aria-atomic","true"),I.append(c);const P=ie();a.innerHTML=`
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
            ${Le.map((e,t)=>`
                <label class="service-option service-option-${Me[String(e).toLowerCase()]??"other"}">
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
  `;const p=a.querySelector("#manualAppointmentForm"),H=a.querySelector("#manualAppointmentStatus"),b=p==null?void 0:p.querySelector("button[type='submit']"),S=a.querySelector("#manualLicensePlate"),D=a.querySelector("#vehiclePreviewTitle"),N=a.querySelector("#vehiclePreviewBuildYear"),V=a.querySelector("#vehiclePreviewApk"),j=a.querySelector("#vehiclePreviewColor"),Y=a.querySelector("#vehiclePreviewFuel"),m=a.querySelector("[data-schedule-date-picker]"),v=a.querySelector("[data-schedule-time-picker]"),R=e=>{if(!(m instanceof HTMLElement))return;const t=ke(e),n=m.querySelector("[data-schedule-edit-date]"),d=m.querySelector("[data-schedule-date-label]"),r=m.querySelector("[data-schedule-date-options]");n instanceof HTMLInputElement&&(n.value=t),d instanceof HTMLElement&&(d.textContent=we(t)),r instanceof HTMLElement&&(r.innerHTML=Se(t))},z=e=>{if(!(v instanceof HTMLElement))return;const t=ye(e),n=v.querySelector("[data-schedule-edit-time]"),d=v.querySelector("[data-schedule-time-label]"),r=v.querySelector("[data-schedule-time-options]");n instanceof HTMLInputElement&&(n.value=t),d instanceof HTMLElement&&(d.textContent=t),r instanceof HTMLElement&&(r.innerHTML=Te(t))},re=ae(P),oe=`${String(P.getHours()).padStart(2,"0")}:${String(P.getMinutes()).padStart(2,"0")}`;R(re),z(oe);const o=a.querySelector("#serviceInput"),q=a.querySelector("#addServiceBtn"),O=a.querySelector("#selectedServices");let k=[];const x=()=>{O&&(O.innerHTML=k.map((e,t)=>`
      <span class="service-chip service-chip-other" data-custom-idx="${t}">
        ${Ee(e)}
        <button class="service-chip-remove" type="button" data-remove-idx="${t}" aria-label="Remove service">×</button>
      </span>
    `).join(""))},G=()=>{if(!(o instanceof HTMLInputElement))return;const e=o.value.trim();e&&!k.includes(e)&&(k.push(e),o.value="",x(),K(),o.focus())},K=()=>{!(o instanceof HTMLInputElement)||!(q instanceof HTMLButtonElement)||(q.style.display=o.value.trim().length>0?"block":"none")};o instanceof HTMLInputElement&&(o.addEventListener("input",K),o.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),G())})),q instanceof HTMLButtonElement&&q.addEventListener("click",e=>{e.preventDefault(),G()}),a.addEventListener("click",e=>{be(a,e.target);const t=e.target instanceof HTMLElement?e.target.closest(".service-chip-remove"):null;if(t instanceof HTMLElement){const n=Number(t.dataset.removeIdx??-1);n>=0&&(k.splice(n,1),x())}});const h=(e,t="")=>{H&&(H.textContent=String(e??""),H.classList.remove("error","warning"),(t==="error"||t==="warning")&&H.classList.add(t))};let y=0,f=0;const A=()=>{y&&(window.clearTimeout(y),y=0),f&&(window.clearTimeout(f),f=0)},_=()=>{const e=c.querySelector(".appointment-toast");if(!e){c.innerHTML="",A();return}e.classList.remove("is-visible"),f&&window.clearTimeout(f),f=window.setTimeout(()=>{c.innerHTML="",f=0},220)},T=(e,t="success")=>{if(!(c instanceof HTMLElement))return;A();const n=t==="error"||t==="warning"?t:"success",d=n==="success"?'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.2 8.3L6.6 11.4L12.8 4.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>':n==="error"?'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 5L11 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><path d="M11 5L5 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg>':'<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><circle cx="8" cy="12" r="1" fill="currentColor"></circle></svg>',r=n==="success"?"Saved Successfully":n==="error"?"Error Occurred":"Action Required";c.innerHTML=`
      <div class="appointment-toast appointment-toast-${n} is-visible" role="status">
        <span class="appointment-toast-icon">${d}</span>
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
    `,y=window.setTimeout(()=>{_(),y=0},311e3)};c.addEventListener("click",e=>{(e.target instanceof Element?e.target.closest(".appointment-toast-close"):null)&&(A(),_())});const F=async()=>{try{const e=await he({garageIds:M}),t=fe(e);$(t.unread)}catch{$(0)}},le=D instanceof HTMLElement&&N instanceof HTMLElement&&V instanceof HTMLElement&&j instanceof HTMLElement&&Y instanceof HTMLElement,g=e=>{le&&(D.textContent=e.buildYear&&e.buildYear!==""?`${e.title} (${e.buildYear})`:e.title,N.textContent=e.buildYear,V.textContent=e.apkExpiryDate,j.textContent=e.color,Y.textContent=e.fuel)};g(w());let L=0,B=0,l=null;S instanceof HTMLInputElement&&S.addEventListener("input",()=>{L&&window.clearTimeout(L);const e=se(S.value);if(e.length<6){l==null||l.abort(),g(w(e));return}L=window.setTimeout(async()=>{B+=1;const t=B;l==null||l.abort(),l=new AbortController,g({...w(e),title:`${e} • RDW lookup`});try{const n=await ge(e,{signal:l.signal});if(t!==B)return;if(!n){g({...w(e),title:`${e} • Niet gevonden`});return}g(n)}catch(n){if(n&&typeof n=="object"&&"name"in n&&n.name==="AbortError")return;g({...w(e),title:`${e} • RDW tijdelijk niet bereikbaar`})}},320)}),E||(b instanceof HTMLButtonElement&&(b.disabled=!0),h("No garage available for manual appointment creation.","warning")),p==null||p.addEventListener("submit",async e=>{if(e.preventDefault(),!E){h("No garage available for manual appointment creation.","warning"),T("No garage available for manual appointment creation.","warning");return}const d=Array.from(a.querySelectorAll("input[name='services']:checked")).map(u=>u instanceof HTMLInputElement?u.value:"").filter(Boolean).concat(k).filter(Boolean);if(!d.length){h("Enter at least one service.","warning"),T("Enter at least one service.","warning");return}const r=new FormData(p),C=String(r.get("customerName")??"").trim(),X=String(r.get("licensePlate")??"").trim(),Z=String(r.get("phone")??"").trim(),ee=(m==null?void 0:m.querySelector("[data-schedule-edit-date]"))instanceof HTMLInputElement?m.querySelector("[data-schedule-edit-date]").value.trim():String(r.get("date")??"").trim(),te=(v==null?void 0:v.querySelector("[data-schedule-edit-time]"))instanceof HTMLInputElement?v.querySelector("[data-schedule-edit-time]").value.trim():String(r.get("time")??"").trim();if(!C||!X||!Z||!ee||!te){h("Please fill all required fields.","warning"),T("Please fill all required fields.","warning");return}b instanceof HTMLButtonElement&&(b.disabled=!0),h("Adding appointment...");try{await ve({garageId:E,name:C,licensePlate:X,phone:Z,service:d.join(", "),message:`Name: ${C}
Message: Manual appointment created in dashboard.`,appointmentAt:`${ee}T${te}`}),p.reset(),k=[],o instanceof HTMLInputElement&&(o.value=""),x();const u=ie();R(ae(u)),z(`${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}`),S instanceof HTMLInputElement&&(S.value=""),L&&window.clearTimeout(L),l==null||l.abort(),g(w()),h(""),T("Appointment added successfully.","success"),await F()}catch(u){const ne=u instanceof Error?u.message:"Unable to add appointment.";h(ne,"error"),T(ne,"error")}finally{b instanceof HTMLButtonElement&&E&&(b.disabled=!1)}}),await F()}const qe=document.querySelector("#app");ce();He(qe);
