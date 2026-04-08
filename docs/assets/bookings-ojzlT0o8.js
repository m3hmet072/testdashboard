import{p as be,d as se,c as we}from"./theme-C7qkBi-i.js";/* empty css                      */import{c as qe,M as Le}from"./quickAddModal-CqMxY2EZ.js";import{h as Ae,n as N,r as Te,a as ke,f as ye,b as Ee,s as xe,c as ie}from"./requestCard-Ckf8MfSD.js";import{e as Me,a as $e,c as Ce,l as Ne,p as re,i as Be,k as Ie,n as Pe,m as Ue,o as De,b as He,d as Fe,s as Oe,t as oe,g as Z,q as Ve,f as Q}from"./branding-CAr728QY.js";import{n as J,f as je}from"./rdwService-CFrMDQAa.js";import{s as ce}from"./confirmDialog-DSEC2-zx.js";function Ke(e=""){return{title:J(e)||"Unknown vehicle",buildYear:""}}const ze=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function f(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function de(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function G(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function Re(e){const t=G(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function _e(e){const t=G(e);if(!t)return"";const a=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}-${i}-${n}`}function ue(e){const t=G(e);if(!t)return"09:00";const a=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return`${a}:${i}`}function We(e,t){const a=String(e??"").trim(),i=String(t??"").trim();if(!a||!i)return"";const n=`${a}T${i}:00`;return G(n)?n:""}function Ge(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function Ye(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function Qe(e){return Ye(e.status)==="done"||e.inAppointments===!1}function Xe(e,t){var n;const a=String(e??""),i=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((n=a.match(i))==null?void 0:n[1])??"").trim()}const Ze="Manual appointment created in dashboard.";function pe(e){const a=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((a==null?void 0:a[1])??"").trim()}function Je(e){const a=String(e??"").match(/\bend\s*:\s*([^\n]+)/i);return N(((a==null?void 0:a[1])??"").trim(),"")}function et(e){const a=String(e??"").match(/\ball[\s_-]?day\s*:\s*([^\n]+)/i);if(!(a!=null&&a[1]))return!1;const i=String(a[1]).trim().toLowerCase();return i==="true"||i==="1"||i==="yes"||i==="ja"}function me(e){const t=N(e),[a,i]=t.split(":"),n=Number(a),c=Number(i);if(!Number.isFinite(n)||!Number.isFinite(c))return"01:00";const r=new Date(2e3,0,1,n,c,0,0);return r.setHours(r.getHours()+1),`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`}function tt(e,t){const a=N(t);return`${String(e??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${a}`.trim()}function W(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const a=Xe(e.message,"name");if(a)return a;const i=String((e==null?void 0:e.licensePlate)??"").trim();return i?de(i):"UNKNOWN"}function he(e){const t=String((e==null?void 0:e.message)??"").replace(Ze,"").trim(),a=t.match(/\bmessage\s*:\s*([\s\S]*)/i),i=c=>String(c??"").split(/\r?\n/g).filter(r=>{const v=String(r??"").trim();return!(!v||/^\s*(until|end|tot)\s*:?\s*\d{1,2}:\d{2}\s*$/i.test(v)||/^\s*all[\s_-]?day\s*:\s*(true|false|1|0|yes|no|ja|nee)\s*$/i.test(v))}).join(`
`).trim();if(a)return i(a[1])||"No customer message.";const n=t.split(/\r?\n/g).filter(c=>{const r=c.trim();return r&&!/^\s*(name|title|end|allday|all[\s_-]?day|message)\s*:/i.test(r)});return i(n.join(`
`))||"No customer message."}function le(e){const t=Re((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),a=N(ue((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt))),i=Je(e==null?void 0:e.message)||pe(e==null?void 0:e.message)||me(a);return et(e==null?void 0:e.message)?"All day":`${t} - ${i}`}function ge(e){const t=String(e??"").trim();if(!t)return["other"];const a=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(i=>i.trim()).filter(Boolean);return a.length?a:[t]}function fe(e){return ze.get(String(e??"").trim().toLowerCase())??"other"}function nt(e){const t=String(e??"").trim(),a=Z();if(!t)return{key:"other",label:Q("other",a)};const i=t.toLowerCase(),n=fe(t);if(n==="other"){if(["other","overig","overige"].includes(i))return{key:n,label:Q("other",a)};const c=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:n,label:c||t}}return{key:n,label:Q(n,a)}}function at(e){return ge(e).map(t=>{const{key:a,label:i}=nt(t);return`<span class="service-chip service-chip-${a}">${f(i)}</span>`}).join("")}function st(e,t,a,i){return e.length?e.map((n,c)=>{const r=String(n.id??""),v=t===r,w=a===r,q=n.appointmentAt??n.createdAt,y=String(n.licensePlate??"").toUpperCase()==="UNKNOWN",d=f(n.color??"#2563EB"),h=f(n.licensePlate&&n.licensePlate!=="UNKNOWN"?de(n.licensePlate):"UNKNOWN");f(W(n));const o=n.licensePlate?J(n.licensePlate):"",u=i.get(o)||Ke(n.licensePlate),U=u.buildYear&&u.buildYear!=="—"?`${u.title} (${u.buildYear})`:u.title;f(le(n));const x=ke(_e(q)),M=f(x),V=f(ye(x)),B=N(ue(q)),D=f(B),j=N(pe(n.message)||me(B)),K=f(j),$=String(n.phone??"").trim(),H=f(!$||$==="0000000000"?"Not filled in":$),z=f(he(n)),R=y?`<span class="fast-appt-dot" style="background: ${d}" aria-hidden="true"></span>`:`<span class="plate-chip">${h}</span>`,Y=Ee({leadMarkup:R,name:W(n),vehicle:y?"":U,servicesMarkup:at(n.service),timeLabel:le(n),isExpanded:v,toggleDataAttribute:"data-request-toggle",toggleId:r,expandAriaLabel:"Expand appointment details",collapseAriaLabel:"Collapse appointment details"});return`
        <article class="request-card ${v?"is-expanded":""}" data-booking-card-id="${f(r)}">
          ${Y}

          ${v?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${se("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${H}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${se("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${z}</span>
                </div>
              </div>

              <div class="request-actions">
                ${w?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${M}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${V}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${xe(x)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${oe("fastFrom",Z())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${D}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${D}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${ie(B)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${oe("fastTo",Z())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${K}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${K}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${ie(j)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-request-action="save-schedule" data-booking-id="${f(r)}">Save</button>
                    <button class="button subtle" type="button" data-request-action="cancel-edit" data-booking-id="${f(r)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-request-action="edit" data-booking-id="${f(r)}" aria-label="Edit booking">✎</button>
                ${w?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${f(r)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Markeer als voltooid</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${f(r)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3.66797L12.5869 10.3514C12.4813 12.0589 12.4285 12.9127 12.0005 13.5266C11.7889 13.83 11.5165 14.0862 11.2005 14.2786C10.5614 14.668 9.706 14.668 7.99513 14.668C6.28208 14.668 5.42553 14.668 4.78603 14.2779C4.46987 14.0851 4.19733 13.8285 3.98579 13.5245C3.55792 12.9097 3.5063 12.0547 3.40307 10.3448L3 3.66797" stroke="white" stroke-linecap="round"/>
<path d="M2 3.66536H14M10.7038 3.66536L10.2487 2.72652C9.9464 2.10287 9.7952 1.79104 9.53447 1.59657C9.47667 1.55343 9.4154 1.51506 9.35133 1.48183C9.0626 1.33203 8.71607 1.33203 8.023 1.33203C7.31253 1.33203 6.95733 1.33203 6.66379 1.48811C6.59873 1.5227 6.53665 1.56263 6.47819 1.60748C6.21443 1.80983 6.06709 2.13306 5.77241 2.77954L5.36861 3.66536" stroke="white" stroke-linecap="round"/>
<path d="M6.3335 11V7" stroke="white" stroke-linecap="round"/>
<path d="M9.6665 11V7" stroke="white" stroke-linecap="round"/>
</svg>
Verwijderen</button>`}
              </div>
            </div>
          `:""}
        </article>
      `}).join(""):Te("No appointments found for this filter.")}function X(e){return[...e].sort((t,a)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime())}function it(e){const t=new Map;return e.forEach((a,i)=>{const n=W(a);t.set(n,n)}),[...t.values()]}function rt(e){const t=[],a=()=>{t.forEach(n=>{n.wrap.classList.remove("is-open"),n.trigger.setAttribute("aria-expanded","false")})},i=()=>`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6C4 6 6.94593 9.99999 8 10C9.05413 10 12 6 12 6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;return e.querySelectorAll(".request-select-wrap").forEach(n=>{const c=n.querySelector(".request-select");if(!(c instanceof HTMLSelectElement))return;const r=document.createElement("button");r.type="button",r.className="request-select-trigger",r.setAttribute("aria-haspopup","listbox"),r.setAttribute("aria-expanded","false");const v=document.createElement("span");v.className="request-select-trigger-label";const w=document.createElement("span");w.className="request-select-trigger-icon",w.innerHTML=i(),r.append(v,w);const q=document.createElement("div");q.className="request-select-menu",q.setAttribute("role","listbox"),n.append(r,q);const y=()=>{const h=c.options[c.selectedIndex];v.textContent=(h==null?void 0:h.textContent)??""},d=()=>{q.innerHTML="",[...c.options].forEach(h=>{const o=document.createElement("button");o.type="button",o.className="request-select-option",o.dataset.requestSelectValue=h.value,o.textContent=h.textContent??"",o.classList.toggle("is-selected",h.value===c.value),q.append(o)})};r.addEventListener("click",h=>{h.stopPropagation();const o=n.classList.contains("is-open");a(),o||(n.classList.add("is-open"),r.setAttribute("aria-expanded","true"))}),q.addEventListener("click",h=>{const o=h.target instanceof Element?h.target:null;if(!o)return;const u=o.closest("[data-request-select-value]");if(!(u instanceof HTMLElement))return;const U=String(u.dataset.requestSelectValue??"");c.value=U,c.dispatchEvent(new Event("change",{bubbles:!0})),y(),d(),a()}),c.addEventListener("change",()=>{y(),d()}),t.push({wrap:n,trigger:r,nativeSelect:c,refresh(){y(),d()}}),y(),d()}),document.addEventListener("click",n=>{const c=n.target instanceof Element?n.target:null;(!c||!c.closest(".request-select-wrap"))&&a()}),e.addEventListener("keydown",n=>{n.key==="Escape"&&a()}),{refresh(){t.forEach(n=>n.refresh())}}}async function ot(e){var ee;if(!e)return;const t=await Me();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}$e(t.activeGarage);const a=t.isAdmin?null:[(ee=t.activeGarage)==null?void 0:ee.id].filter(Boolean),{shell:i,contentArea:n,setUnreadEmailCount:c}=Ce({activePage:"bookings",title:"Appointment",headerNote:"Manage active appointments",userEmail:t.user.email,onLogout:Ne,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(i),n.innerHTML=`
    <div class="request-toolbar">
        <label class="request-search-wrap" aria-label="Search appointments">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <circle cx="9" cy="9" r="5.7" fill="none" stroke="currentColor" stroke-width="1.6"></circle>
            <path d="M13.4 13.4l3.1 3.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
          <input id="requestSearch" class="request-search" type="search" placeholder="Search..." />
        </label>

        <label class="request-select-wrap">
          <select id="requestServiceFilter" class="request-select" data-i18n-select="allServices">
            <option value="all" data-i18n="allServices"></option>
            <option value="apk" data-i18n="apk"></option>
            <option value="banden" data-i18n="tires"></option>
            <option value="onderhoud" data-i18n="maintenance"></option>
            <option value="airco" data-i18n="airco"></option>
            <option value="occasions" data-i18n="usedVehicles"></option>
            <option value="brakes" data-i18n="brakes"></option>
            <option value="other" data-i18n="other"></option>
          </select>
        </label>

        <label class="request-select-wrap">
          <select id="requestTechnicianFilter" class="request-select">
            <option value="all" data-i18n="allTechnicians"></option>
          </select>
        </label>
    </div>

    <section class="panel request-board">
      <div id="requestList" class="request-list"></div>
    </section>
  `;const r=n.querySelector("#requestSearch"),v=n.querySelector("#requestServiceFilter"),w=n.querySelector("#requestTechnicianFilter"),q=n.querySelector("#requestList"),y=rt(n);let d=[],h=[],o="",u="";const U=qe({onSubmit:async({mode:b,editingBookingId:p,name:L,phone:g,note:C,date:m,time:S,endTime:k,isAllDay:s,color:l,service:I,licensePlate:P,isSimpleAppointment:F})=>{if(b!=="edit"||!p)throw new Error("Aanmaken van afspraken is beschikbaar via de kalender.");const E=d.find(O=>String(O.id)===p);if(!E)throw new Error("Afspraak niet gevonden.");const _=`${m}T${S}`,A=g||String(E.phone??"").trim()||"0000000000",Se=C||Le,te=F?I||"Simple appointment":I,ne=F?"UNKNOWN":P||"UNKNOWN",ae=[`Name: ${L}`,`AllDay: ${s?"true":"false"}`,`End: ${k}`,`Message: ${Se}`].join(`
`);await re(E,_),await Be(E,{name:L,phone:A,message:ae,color:l,service:te,licensePlate:ne}),d=X(d.map(O=>String(O.id)===p?{...O,appointmentAt:_,name:L,color:l,message:ae,service:te,licensePlate:ne}:O)),T()}}),x=new Map,M=Ie("bookings",{}),V=String(M.searchTerm??"").trim(),B=String(M.serviceFilter??"all").trim()||"all",D=String(M.technicianFilter??"all").trim()||"all",j=String(M.expandedBookingId??"").trim(),K=String(M.editingBookingId??"").trim(),$=new URLSearchParams(window.location.search),H=String($.get("bookingId")??"").trim(),z=String($.get("customer")??"").trim(),R=String($.get("plate")??"").trim(),Y=()=>{Ve("bookings",{searchTerm:String(r.value??"").trim(),serviceFilter:String(v.value??"all").trim()||"all",technicianFilter:String(w.value??"all").trim()||"all",expandedBookingId:o,editingBookingId:u})},T=()=>{const b=String(r.value??"").trim().toLowerCase(),p=String(v.value??"all"),L=String(w.value??"all");h=d.filter((g,C)=>{const m=ge(g.service).map(P=>fe(P)),S=W(g),k=[g.licensePlate,g.phone,g.service,S,he(g)].join(" ").toLowerCase(),s=!b||k.includes(b),l=p==="all"||m.includes(p);return s&&l&&(L==="all"||S===L)}),o&&!h.some(g=>String(g.id)===o)&&(o="",u=""),u&&!h.some(g=>String(g.id)===u)&&(u=""),q.innerHTML=st(h,o,u,x),Y()},ve=b=>{if(!b)return;const p=q.querySelector(`[data-booking-card-id="${CSS.escape(b)}"]`);p instanceof HTMLElement&&(p.classList.remove("search-target-highlight"),p.offsetWidth,p.classList.add("search-target-highlight"),p.scrollIntoView({block:"center",behavior:"smooth"}))};n.addEventListener("click",async b=>{const p=b.target instanceof Element?b.target:null;if(!p||Ae(n,p))return;const L=p.closest("[data-request-toggle]");if(L instanceof HTMLElement){const m=String(L.dataset.requestToggle??"");o=o===m?"":m,o!==m&&(u=""),T();return}const g=p.closest("[data-request-action]");if(g instanceof HTMLElement){const m=String(g.dataset.requestAction??""),S=String(g.dataset.bookingId??"");if(!S)return;if(m==="edit"){const s=d.find(l=>String(l.id)===S);s&&U.openForEdit(s);return}if(m==="cancel-edit"){u="",T();return}if(m==="save-schedule"){const s=g.closest("[data-booking-card-id]");if(!(s instanceof HTMLElement))return;const l=d.find(A=>String(A.id)===S);if(!l)return;const I=s.querySelector("[data-schedule-edit-date]"),P=s.querySelector("[data-schedule-edit-start-time]"),F=s.querySelector("[data-schedule-edit-end-time]");if(!(I instanceof HTMLInputElement)||!(P instanceof HTMLInputElement)||!(F instanceof HTMLInputElement))return;const E=We(I.value,P.value),_=N(F.value);if(!E)return;try{await re(l,E)}catch(A){window.alert(A instanceof Error?A.message:"Unable to save the appointment schedule.");return}d=X(d.map(A=>String(A.id)===S?{...A,appointmentAt:E,message:tt(A.message,_)}:A)),o=S,u="",T();return}const k=d.find(s=>String(s.id)===S);if(!k)return;if(m==="complete"){if(!await ce("Are you sure you want to mark this appointment as completed?","Mark as Completed"))return;Pe(S,"done");try{await Ue(k,{convertedFromEmail:k.source!=="manual"})}catch(l){window.alert(l instanceof Error?l.message:"Unable to mark appointment as completed.");return}window.location.href=be("completed.html");return}if(m==="delete"){if(!await ce("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{await De(k)}catch(l){window.alert(l instanceof Error?l.message:"Unable to delete the appointment.");return}d=d.filter(l=>String(l.id)!==S),o===S&&(o=""),u="",T()}return}const C=p.closest("[data-booking-card-id]");if(C instanceof HTMLElement&&!Ge(p)){const m=String(C.dataset.bookingCardId??"");if(!m)return;o=o===m?"":m,o!==m&&(u=""),T()}}),r.addEventListener("input",T),v.addEventListener("change",T),w.addEventListener("change",T);try{const[b,p]=await Promise.all([He({garageIds:a}),Fe({garageIds:a})]),L=new Set(p.map(s=>String(s.bookingId??s.id??"").trim()).filter(Boolean)),g=Oe(b);c(g.unread),d=X(b.filter(s=>{const l=String(s.id??"").trim();return s.inAppointments===!0&&!Qe(s)&&!L.has(l)}));const C=new Set(d.map(s=>s.licensePlate).filter(s=>s&&s!=="UNKNOWN").map(s=>J(s)));for(const s of C)if(s&&!x.has(s))try{const l=await je(s);l&&x.set(s,l)}catch(l){console.error(`Failed to fetch vehicle for ${s}:`,l)}const m=it(d);w.innerHTML=`
      <option value="all">All Technicians</option>
      ${m.map(s=>`<option value="${f(s)}">${f(s)}</option>`).join("")}
    `;const S=Array.from(v.options).some(s=>s.value===B);v.value=S?B:"all";const k=Array.from(w.options).some(s=>s.value===D);w.value=k?D:"all",z?r.value=z:R?r.value=R:V&&(r.value=V),o=H||j||(d[0]?String(d[0].id):""),u=K,y.refresh(),T(),H&&ve(H)}catch(b){q.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',c(0),console.error(b)}}const ct=document.querySelector("#app");we();ot(ct);
