import{p as Z,d as K,c as J}from"./theme-CzeyRWKH.js";/* empty css                      */import{e as Q,a as X,c as ee,l as te,p as ne,d as ae,m as se,f as ie,g as re,b as oe,s as ce}from"./branding-D-S-35Vh.js";import{n as U,f as le}from"./rdwService-CFrMDQAa.js";import{s as F}from"./confirmDialog-DSEC2-zx.js";import{h as de,n as ue,f as pe,a as me,s as he,b as ge}from"./scheduleTimePicker-zgpyiEd6.js";function fe(t=""){return{title:U(t)||"Unknown vehicle",buildYear:""}}const O={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},ve=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function u(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Y(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function P(t){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function be(t){const e=P(t);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function Se(t){const e=P(t);if(!e)return"";const s=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${s}-${r}-${n}`}function ke(t){const e=P(t);if(!e)return"09:00";const s=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return`${s}:${r}`}function we(t,e){const s=String(t??"").trim(),r=String(e??"").trim();if(!s||!r)return"";const n=`${s}T${r}:00`;return P(n)?n:""}function qe(t){return t instanceof Element&&!!t.closest("button, input, select, textarea, a, label")}function Le(t){const e=String(t??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function Ee(t){return Le(t.status)==="done"||t.inAppointments===!1}function G(t,e){var n;const s=String(t??""),r=new RegExp(`\\b${e}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((n=s.match(r))==null?void 0:n[1])??"").trim()}function z(t){const e=String((t==null?void 0:t.name)??"").trim();if(e)return e;const s=G(t.message,"name");if(s)return s;const r=String((t==null?void 0:t.licensePlate)??"").trim();return r?Y(r):"UNKNOWN"}function R(t){return G(t.message,"message")||String(t.message??"").trim()||"No customer message."}function W(t){const e=String(t??"").trim();if(!e)return["other"];const s=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(r=>r.trim()).filter(Boolean);return s.length?s:[e]}function _(t){return ve.get(String(t??"").trim().toLowerCase())??"other"}function Ae(t){const e=String(t??"").trim();if(!e)return{key:"other",label:O.other};const s=e.toLowerCase(),r=_(e);if(r==="other"){if(["other","overig","overige"].includes(s))return{key:r,label:O.other};const n=e.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:r,label:n||e}}return{key:r,label:O[r]??e}}function Ce(t){return W(t).map(e=>{const{key:s,label:r}=Ae(e);return`<span class="service-chip service-chip-${s}">${u(r)}</span>`}).join("")}function xe(t,e,s,r){return t.length?t.map((n,g)=>{const o=String(n.id??""),k=e===o,q=s===o,f=n.appointmentAt??n.createdAt,E=u(n.licensePlate&&n.licensePlate!=="UNKNOWN"?Y(n.licensePlate):"UNKNOWN"),c=u(z(n)),l=n.licensePlate?U(n.licensePlate):"",i=r.get(l)||fe(n.licensePlate),p=i.buildYear&&i.buildYear!=="—"?`${i.title} (${i.buildYear})`:i.title,C=u(be(f)),x=ue(Se(f)),$=u(x),B=u(pe(x)),T=me(ke(f)),v=u(T),D=u(String(n.phone??"No phone number")),I=u(R(n));return`
        <article class="request-card ${k?"is-expanded":""}" data-booking-card-id="${u(o)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${E}</span>
              <div class="request-info">
                <p class="request-name">${c}</p>
                <p class="request-vehicle">${p}</p>
                <div class="request-services">${Ce(n.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${C}</span>
       <button
                class="request-toggle ${k?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${u(o)}"
                aria-expanded="${k?"true":"false"}"
                aria-label="${k?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
            </div>
          </div>

          ${k?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${K("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone Number</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${D}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${K("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message from client</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${I}</span>
                </div>
              </div>

              <div class="request-actions">
                ${q?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${$}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${B}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${he(x)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Time</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${v}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${v}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${ge(T)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-request-action="save-schedule" data-booking-id="${u(o)}">Save</button>
                    <button class="button subtle" type="button" data-request-action="cancel-edit" data-booking-id="${u(o)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-request-action="edit" data-booking-id="${u(o)}" aria-label="Edit booking">✎</button>
                ${q?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${u(o)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${u(o)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3.66797L12.5869 10.3514C12.4813 12.0589 12.4285 12.9127 12.0005 13.5266C11.7889 13.83 11.5165 14.0862 11.2005 14.2786C10.5614 14.668 9.706 14.668 7.99513 14.668C6.28208 14.668 5.42553 14.668 4.78603 14.2779C4.46987 14.0851 4.19733 13.8285 3.98579 13.5245C3.55792 12.9097 3.5063 12.0547 3.40307 10.3448L3 3.66797" stroke="white" stroke-linecap="round"/>
<path d="M2 3.66536H14M10.7038 3.66536L10.2487 2.72652C9.9464 2.10287 9.7952 1.79104 9.53447 1.59657C9.47667 1.55343 9.4154 1.51506 9.35133 1.48183C9.0626 1.33203 8.71607 1.33203 8.023 1.33203C7.31253 1.33203 6.95733 1.33203 6.66379 1.48811C6.59873 1.5227 6.53665 1.56263 6.47819 1.60748C6.21443 1.80983 6.06709 2.13306 5.77241 2.77954L5.36861 3.66536" stroke="white" stroke-linecap="round"/>
<path d="M6.3335 11V7" stroke="white" stroke-linecap="round"/>
<path d="M9.6665 11V7" stroke="white" stroke-linecap="round"/>
</svg>
Delete</button>`}
              </div>
            </div>
          `:""}
        </article>
      `}).join(""):'<article class="request-card"><p class="muted">No appointments found for this filter.</p></article>'}function j(t){return[...t].sort((e,s)=>new Date(e.appointmentAt??e.createdAt).getTime()-new Date(s.appointmentAt??s.createdAt).getTime())}function ye(t){const e=new Map;return t.forEach((s,r)=>{const n=z(s);e.set(n,n)}),[...e.values()]}function $e(t){const e=[],s=()=>{e.forEach(n=>{n.wrap.classList.remove("is-open"),n.trigger.setAttribute("aria-expanded","false")})},r=()=>`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6C4 6 6.94593 9.99999 8 10C9.05413 10 12 6 12 6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;return t.querySelectorAll(".request-select-wrap").forEach(n=>{const g=n.querySelector(".request-select");if(!(g instanceof HTMLSelectElement))return;const o=document.createElement("button");o.type="button",o.className="request-select-trigger",o.setAttribute("aria-haspopup","listbox"),o.setAttribute("aria-expanded","false");const k=document.createElement("span");k.className="request-select-trigger-label";const q=document.createElement("span");q.className="request-select-trigger-icon",q.innerHTML=r(),o.append(k,q);const f=document.createElement("div");f.className="request-select-menu",f.setAttribute("role","listbox"),n.append(o,f);const E=()=>{const l=g.options[g.selectedIndex];k.textContent=(l==null?void 0:l.textContent)??""},c=()=>{f.innerHTML="",[...g.options].forEach(l=>{const i=document.createElement("button");i.type="button",i.className="request-select-option",i.dataset.requestSelectValue=l.value,i.textContent=l.textContent??"",i.classList.toggle("is-selected",l.value===g.value),f.append(i)})};o.addEventListener("click",l=>{l.stopPropagation();const i=n.classList.contains("is-open");s(),i||(n.classList.add("is-open"),o.setAttribute("aria-expanded","true"))}),f.addEventListener("click",l=>{const i=l.target instanceof Element?l.target:null;if(!i)return;const p=i.closest("[data-request-select-value]");if(!(p instanceof HTMLElement))return;const C=String(p.dataset.requestSelectValue??"");g.value=C,g.dispatchEvent(new Event("change",{bubbles:!0})),E(),c(),s()}),g.addEventListener("change",()=>{E(),c()}),e.push({wrap:n,trigger:o,nativeSelect:g,refresh(){E(),c()}}),E(),c()}),document.addEventListener("click",n=>{const g=n.target instanceof Element?n.target:null;(!g||!g.closest(".request-select-wrap"))&&s()}),t.addEventListener("keydown",n=>{n.key==="Escape"&&s()}),{refresh(){e.forEach(n=>n.refresh())}}}async function Te(t){var I;if(!t)return;const e=await Q();if(!e)return;if(!e.isAdmin&&!e.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}X(e.activeGarage);const s=e.isAdmin?null:[(I=e.activeGarage)==null?void 0:I.id].filter(Boolean),{shell:r,contentArea:n,setUnreadEmailCount:g}=ee({activePage:"bookings",title:"Appointment",headerNote:"Manage active appointments",userEmail:e.user.email,onLogout:te,garage:e.activeGarage,isAdmin:e.isAdmin});t.replaceChildren(r),n.innerHTML=`
    <div class="request-toolbar">
        <label class="request-search-wrap" aria-label="Search appointments">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <circle cx="9" cy="9" r="5.7" fill="none" stroke="currentColor" stroke-width="1.6"></circle>
            <path d="M13.4 13.4l3.1 3.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
          <input id="requestSearch" class="request-search" type="search" placeholder="Search..." />
        </label>

        <label class="request-select-wrap">
          <select id="requestServiceFilter" class="request-select">
            <option value="all">All Services</option>
            <option value="apk">APK</option>
            <option value="banden">Banden</option>
            <option value="onderhoud">Onderhoud</option>
            <option value="airco">Airco</option>
            <option value="occasions">Occasions</option>
            <option value="brakes">Brakes</option>
            <option value="other">Overige</option>
          </select>
        </label>

        <label class="request-select-wrap">
          <select id="requestTechnicianFilter" class="request-select">
            <option value="all">All Technicians</option>
          </select>
        </label>
    </div>

    <section class="panel request-board">
      <div id="requestList" class="request-list"></div>
    </section>
  `;const o=n.querySelector("#requestSearch"),k=n.querySelector("#requestServiceFilter"),q=n.querySelector("#requestTechnicianFilter"),f=n.querySelector("#requestList"),E=$e(n);let c=[],l=[],i="",p="";const C=new Map,x=new URLSearchParams(window.location.search),$=String(x.get("bookingId")??"").trim(),B=String(x.get("customer")??"").trim(),T=String(x.get("plate")??"").trim(),v=()=>{const b=String(o.value??"").trim().toLowerCase(),m=String(k.value??"all"),y=String(q.value??"all");l=c.filter((h,M)=>{const d=W(h.service).map(N=>_(N)),a=z(h),S=[h.licensePlate,h.phone,h.service,a,R(h)].join(" ").toLowerCase(),L=!b||S.includes(b),w=m==="all"||d.includes(m);return L&&w&&(y==="all"||a===y)}),i&&!l.some(h=>String(h.id)===i)&&(i="",p=""),p&&!l.some(h=>String(h.id)===p)&&(p=""),f.innerHTML=xe(l,i,p,C)},D=b=>{if(!b)return;const m=f.querySelector(`[data-booking-card-id="${CSS.escape(b)}"]`);m instanceof HTMLElement&&(m.classList.remove("search-target-highlight"),m.offsetWidth,m.classList.add("search-target-highlight"),m.scrollIntoView({block:"center",behavior:"smooth"}))};n.addEventListener("click",async b=>{const m=b.target instanceof Element?b.target:null;if(!m||de(n,m))return;const y=m.closest("[data-request-toggle]");if(y instanceof HTMLElement){const d=String(y.dataset.requestToggle??"");i=i===d?"":d,i!==d&&(p=""),v();return}const h=m.closest("[data-request-action]");if(h instanceof HTMLElement){const d=String(h.dataset.requestAction??""),a=String(h.dataset.bookingId??"");if(!a)return;if(d==="edit"){i=a,p=p===a?"":a,v();return}if(d==="cancel-edit"){p="",v();return}if(d==="save-schedule"){const L=h.closest("[data-booking-card-id]");if(!(L instanceof HTMLElement))return;const w=c.find(A=>String(A.id)===a);if(!w)return;const H=L.querySelector("[data-schedule-edit-date]"),N=L.querySelector("[data-schedule-edit-time]");if(!(H instanceof HTMLInputElement)||!(N instanceof HTMLInputElement))return;const V=we(H.value,N.value);if(!V)return;try{await ne(w,V)}catch(A){window.alert(A instanceof Error?A.message:"Unable to save the appointment schedule.");return}c=j(c.map(A=>String(A.id)===a?{...A,appointmentAt:V}:A)),i=a,p="",v();return}const S=c.find(L=>String(L.id)===a);if(!S)return;if(d==="complete"){if(!await F("Are you sure you want to mark this appointment as completed?","Mark as Completed"))return;ae(a,"done");try{await se(S,{convertedFromEmail:S.source!=="manual"})}catch(w){window.alert(w instanceof Error?w.message:"Unable to mark appointment as completed.");return}window.location.href=Z("completed.html");return}if(d==="delete"){if(!await F("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{await ie(S)}catch(w){window.alert(w instanceof Error?w.message:"Unable to delete the appointment.");return}c=c.filter(w=>String(w.id)!==a),i===a&&(i=""),p="",v()}return}const M=m.closest("[data-booking-card-id]");if(M instanceof HTMLElement&&!qe(m)){const d=String(M.dataset.bookingCardId??"");if(!d)return;i=i===d?"":d,i!==d&&(p=""),v()}}),o.addEventListener("input",v),k.addEventListener("change",v),q.addEventListener("change",v);try{const[b,m]=await Promise.all([re({garageIds:s}),oe({garageIds:s})]),y=new Set(m.map(a=>String(a.bookingId??a.id??"").trim()).filter(Boolean)),h=ce(b);g(h.unread),c=j(b.filter(a=>{const S=String(a.id??"").trim();return a.inAppointments===!0&&!Ee(a)&&!y.has(S)}));const M=new Set(c.map(a=>a.licensePlate).filter(a=>a&&a!=="UNKNOWN").map(a=>U(a)));for(const a of M)if(a&&!C.has(a))try{const S=await le(a);S&&C.set(a,S)}catch(S){console.error(`Failed to fetch vehicle for ${a}:`,S)}const d=ye(c);q.innerHTML=`
      <option value="all">All Technicians</option>
      ${d.map(a=>`<option value="${u(a)}">${u(a)}</option>`).join("")}
    `,E.refresh(),B?o.value=B:T&&(o.value=T),i=$||(c[0]?String(c[0].id):""),v(),$&&D($)}catch(b){f.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',g(0),console.error(b)}}const Me=document.querySelector("#app");J();Te(Me);
