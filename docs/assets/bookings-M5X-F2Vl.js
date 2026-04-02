import{p as Z,d as F,c as J}from"./theme-Bb-bjqwO.js";/* empty css                      */import{e as Q,a as X,c as ee,l as te,p as ne,b as ae,m as se,d as ie,g as re,s as oe}from"./branding-CDwx9-lU.js";import{n as U,f as ce}from"./rdwService-CFrMDQAa.js";import{s as j}from"./confirmDialog-DSEC2-zx.js";import{h as le,n as de,f as ue,a as pe,s as me,b as he}from"./scheduleTimePicker-zgpyiEd6.js";function ge(t=""){return{title:U(t)||"Unknown vehicle",buildYear:""}}const O={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},fe=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function u(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Y(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function I(t){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function ve(t){const e=I(t);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function be(t){const e=I(t);if(!e)return"";const s=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${s}-${i}-${n}`}function Se(t){const e=I(t);if(!e)return"09:00";const s=String(e.getHours()).padStart(2,"0"),i=String(e.getMinutes()).padStart(2,"0");return`${s}:${i}`}function ke(t,e){const s=String(t??"").trim(),i=String(e??"").trim();if(!s||!i)return"";const n=`${s}T${i}:00`;return I(n)?n:""}function qe(t){return t instanceof Element&&!!t.closest("button, input, select, textarea, a, label")}function G(t,e){var n;const s=String(t??""),i=new RegExp(`\\b${e}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((n=s.match(i))==null?void 0:n[1])??"").trim()}function K(t){const e=String((t==null?void 0:t.name)??"").trim();if(e)return e;const s=G(t.message,"name");if(s)return s;const i=String((t==null?void 0:t.licensePlate)??"").trim();return i?Y(i):"UNKNOWN"}function R(t){return G(t.message,"message")||String(t.message??"").trim()||"No customer message."}function W(t){const e=String(t??"").trim();if(!e)return["other"];const s=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(i=>i.trim()).filter(Boolean);return s.length?s:[e]}function _(t){return fe.get(String(t??"").trim().toLowerCase())??"other"}function we(t){const e=String(t??"").trim();if(!e)return{key:"other",label:O.other};const s=e.toLowerCase(),i=_(e);if(i==="other"){if(["other","overig","overige"].includes(s))return{key:i,label:O.other};const n=e.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:i,label:n||e}}return{key:i,label:O[i]??e}}function Le(t){return W(t).map(e=>{const{key:s,label:i}=we(e);return`<span class="service-chip service-chip-${s}">${u(i)}</span>`}).join("")}function Ee(t,e,s,i){return t.length?t.map((n,g)=>{const r=String(n.id??""),k=e===r,w=s===r,f=n.appointmentAt??n.createdAt,E=u(n.licensePlate&&n.licensePlate!=="UNKNOWN"?Y(n.licensePlate):"UNKNOWN"),l=u(K(n)),d=n.licensePlate?U(n.licensePlate):"",a=i.get(d)||ge(n.licensePlate),p=a.buildYear&&a.buildYear!=="—"?`${a.title} (${a.buildYear})`:a.title,A=u(ve(f)),y=de(be(f)),T=u(y),B=u(ue(y)),M=pe(Se(f)),b=u(M),D=u(String(n.phone??"No phone number")),N=u(R(n));return`
        <article class="request-card ${k?"is-expanded":""}" data-booking-card-id="${u(r)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${E}</span>
              <div class="request-info">
                <p class="request-name">${l}</p>
                <p class="request-vehicle">${p}</p>
                <div class="request-services">${Le(n.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${A}</span>
       <button
                class="request-toggle ${k?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${u(r)}"
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
                    <img src="${F("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone Number</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${D}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${F("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message from client</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${N}</span>
                </div>
              </div>

              <div class="request-actions">
                ${w?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${T}" />
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
                          ${me(y)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Time</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${b}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${b}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${he(M)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-request-action="save-schedule" data-booking-id="${u(r)}">Save</button>
                    <button class="button subtle" type="button" data-request-action="cancel-edit" data-booking-id="${u(r)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-request-action="edit" data-booking-id="${u(r)}" aria-label="Edit booking">✎</button>
                ${w?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${u(r)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${u(r)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments found for this filter.</p></article>'}function z(t){return[...t].sort((e,s)=>new Date(e.appointmentAt??e.createdAt).getTime()-new Date(s.appointmentAt??s.createdAt).getTime())}function xe(t){const e=new Map;return t.forEach((s,i)=>{const n=K(s);e.set(n,n)}),[...e.values()]}function Ae(t){const e=[],s=()=>{e.forEach(n=>{n.wrap.classList.remove("is-open"),n.trigger.setAttribute("aria-expanded","false")})},i=()=>`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6C4 6 6.94593 9.99999 8 10C9.05413 10 12 6 12 6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;return t.querySelectorAll(".request-select-wrap").forEach(n=>{const g=n.querySelector(".request-select");if(!(g instanceof HTMLSelectElement))return;const r=document.createElement("button");r.type="button",r.className="request-select-trigger",r.setAttribute("aria-haspopup","listbox"),r.setAttribute("aria-expanded","false");const k=document.createElement("span");k.className="request-select-trigger-label";const w=document.createElement("span");w.className="request-select-trigger-icon",w.innerHTML=i(),r.append(k,w);const f=document.createElement("div");f.className="request-select-menu",f.setAttribute("role","listbox"),n.append(r,f);const E=()=>{const d=g.options[g.selectedIndex];k.textContent=(d==null?void 0:d.textContent)??""},l=()=>{f.innerHTML="",[...g.options].forEach(d=>{const a=document.createElement("button");a.type="button",a.className="request-select-option",a.dataset.requestSelectValue=d.value,a.textContent=d.textContent??"",a.classList.toggle("is-selected",d.value===g.value),f.append(a)})};r.addEventListener("click",d=>{d.stopPropagation();const a=n.classList.contains("is-open");s(),a||(n.classList.add("is-open"),r.setAttribute("aria-expanded","true"))}),f.addEventListener("click",d=>{const a=d.target instanceof Element?d.target:null;if(!a)return;const p=a.closest("[data-request-select-value]");if(!(p instanceof HTMLElement))return;const A=String(p.dataset.requestSelectValue??"");g.value=A,g.dispatchEvent(new Event("change",{bubbles:!0})),E(),l(),s()}),g.addEventListener("change",()=>{E(),l()}),e.push({wrap:n,trigger:r,nativeSelect:g,refresh(){E(),l()}}),E(),l()}),document.addEventListener("click",n=>{const g=n.target instanceof Element?n.target:null;(!g||!g.closest(".request-select-wrap"))&&s()}),t.addEventListener("keydown",n=>{n.key==="Escape"&&s()}),{refresh(){e.forEach(n=>n.refresh())}}}async function ye(t){var N;if(!t)return;const e=await Q();if(!e)return;if(!e.isAdmin&&!e.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}X(e.activeGarage);const s=e.isAdmin?null:[(N=e.activeGarage)==null?void 0:N.id].filter(Boolean),{shell:i,contentArea:n,setUnreadEmailCount:g}=ee({activePage:"bookings",title:"Appointment",headerNote:"Manage active appointments",userEmail:e.user.email,onLogout:te,garage:e.activeGarage,isAdmin:e.isAdmin});t.replaceChildren(i),n.innerHTML=`
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
  `;const r=n.querySelector("#requestSearch"),k=n.querySelector("#requestServiceFilter"),w=n.querySelector("#requestTechnicianFilter"),f=n.querySelector("#requestList"),E=Ae(n);let l=[],d=[],a="",p="";const A=new Map,y=new URLSearchParams(window.location.search),T=String(y.get("bookingId")??"").trim(),B=String(y.get("customer")??"").trim(),M=String(y.get("plate")??"").trim(),b=()=>{const S=String(r.value??"").trim().toLowerCase(),m=String(k.value??"all"),C=String(w.value??"all");d=l.filter((h,o)=>{const c=W(h.service).map(P=>_(P)),v=K(h),$=[h.licensePlate,h.phone,h.service,v,R(h)].join(" ").toLowerCase(),L=!S||$.includes(S),q=m==="all"||c.includes(m);return L&&q&&(C==="all"||v===C)}),a&&!d.some(h=>String(h.id)===a)&&(a="",p=""),p&&!d.some(h=>String(h.id)===p)&&(p=""),f.innerHTML=Ee(d,a,p,A)},D=S=>{if(!S)return;const m=f.querySelector(`[data-booking-card-id="${CSS.escape(S)}"]`);m instanceof HTMLElement&&(m.classList.remove("search-target-highlight"),m.offsetWidth,m.classList.add("search-target-highlight"),m.scrollIntoView({block:"center",behavior:"smooth"}))};n.addEventListener("click",async S=>{const m=S.target instanceof Element?S.target:null;if(!m||le(n,m))return;const C=m.closest("[data-request-toggle]");if(C instanceof HTMLElement){const c=String(C.dataset.requestToggle??"");a=a===c?"":c,a!==c&&(p=""),b();return}const h=m.closest("[data-request-action]");if(h instanceof HTMLElement){const c=String(h.dataset.requestAction??""),v=String(h.dataset.bookingId??"");if(!v)return;if(c==="edit"){a=v,p=p===v?"":v,b();return}if(c==="cancel-edit"){p="",b();return}if(c==="save-schedule"){const L=h.closest("[data-booking-card-id]");if(!(L instanceof HTMLElement))return;const q=l.find(x=>String(x.id)===v);if(!q)return;const H=L.querySelector("[data-schedule-edit-date]"),P=L.querySelector("[data-schedule-edit-time]");if(!(H instanceof HTMLInputElement)||!(P instanceof HTMLInputElement))return;const V=ke(H.value,P.value);if(!V)return;try{await ne(q,V)}catch(x){window.alert(x instanceof Error?x.message:"Unable to save the appointment schedule.");return}l=z(l.map(x=>String(x.id)===v?{...x,appointmentAt:V}:x)),a=v,p="",b();return}const $=l.find(L=>String(L.id)===v);if(!$)return;if(c==="complete"){if(!await j("Are you sure you want to mark this appointment as completed?","Mark as Completed"))return;ae(v,"done");try{await se($,{convertedFromEmail:$.source!=="manual"})}catch(q){window.alert(q instanceof Error?q.message:"Unable to mark appointment as completed.");return}window.location.href=Z("completed.html");return}if(c==="delete"){if(!await j("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{await ie($)}catch(q){window.alert(q instanceof Error?q.message:"Unable to delete the appointment.");return}l=l.filter(q=>String(q.id)!==v),a===v&&(a=""),p="",b()}return}const o=m.closest("[data-booking-card-id]");if(o instanceof HTMLElement&&!qe(m)){const c=String(o.dataset.bookingCardId??"");if(!c)return;a=a===c?"":c,a!==c&&(p=""),b()}}),r.addEventListener("input",b),k.addEventListener("change",b),w.addEventListener("change",b);try{const S=await re({garageIds:s}),m=oe(S);g(m.unread),l=z(S.filter(o=>o.inAppointments===!0));const C=new Set(l.map(o=>o.licensePlate).filter(o=>o&&o!=="UNKNOWN").map(o=>U(o)));for(const o of C)if(o&&!A.has(o))try{const c=await ce(o);c&&A.set(o,c)}catch(c){console.error(`Failed to fetch vehicle for ${o}:`,c)}const h=xe(l);w.innerHTML=`
      <option value="all">All Technicians</option>
      ${h.map(o=>`<option value="${u(o)}">${u(o)}</option>`).join("")}
    `,E.refresh(),B?r.value=B:M&&(r.value=M),a=T||(l[0]?String(l[0].id):""),b(),T&&D(T)}catch(S){f.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',g(0),console.error(S)}}const Ce=document.querySelector("#app");J();ye(Ce);
