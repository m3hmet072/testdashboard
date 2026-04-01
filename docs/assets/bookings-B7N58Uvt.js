import{p as J,d as K,c as Z}from"./theme-B0f129yT.js";/* empty css                      */import{e as Q,a as X,c as ee,l as te,p as ne,b as ae,m as se,d as ie,g as re,s as oe}from"./branding-D4zs9BDF.js";import{n as O,f as ce}from"./rdwService-CFrMDQAa.js";import{s as F}from"./confirmDialog-DSEC2-zx.js";import{h as le,n as de,f as ue,a as pe,s as me,b as he}from"./scheduleTimePicker-zgpyiEd6.js";const j=["Thomas Mulder","Sophie Koning","Rupert Clark","Jack Thomesen","Mila Verbeek"];function ge(n=""){return{title:O(n)||"Unknown vehicle",buildYear:""}}const Y={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},fe=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function u(n){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ve(n){return String(n??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function P(n){const e=new Date(n);return Number.isNaN(e.getTime())?null:e}function be(n){const e=P(n);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function ke(n){const e=P(n);if(!e)return"";const s=e.getFullYear(),c=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");return`${s}-${c}-${t}`}function Se(n){const e=P(n);if(!e)return"09:00";const s=String(e.getHours()).padStart(2,"0"),c=String(e.getMinutes()).padStart(2,"0");return`${s}:${c}`}function qe(n,e){const s=String(n??"").trim(),c=String(e??"").trim();if(!s||!c)return"";const t=`${s}T${c}:00`;return P(t)?t:""}function we(n){return n instanceof Element&&!!n.closest("button, input, select, textarea, a, label")}function R(n,e){var t;const s=String(n??""),c=new RegExp(`\\b${e}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((t=s.match(c))==null?void 0:t[1])??"").trim()}function U(n,e){const s=R(n.message,"name");return s||j[e%j.length]}function G(n){return R(n.message,"message")||String(n.message??"").trim()||"No customer message."}function _(n){const e=String(n??"").trim();if(!e)return["other"];const s=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(c=>c.trim()).filter(Boolean);return s.length?s:[e]}function W(n){return fe.get(String(n??"").trim().toLowerCase())??"other"}function Le(n){return _(n).map(e=>{const s=W(e),c=Y[s]??Y.other;return`<span class="service-chip service-chip-${s}">${u(c)}</span>`}).join("")}function Ee(n,e,s,c){return n.length?n.map((t,p)=>{const i=String(t.id??""),S=e===i,w=s===i,f=t.appointmentAt??t.createdAt,E=u(t.licensePlate&&t.licensePlate!=="UNKNOWN"?ve(t.licensePlate):"UNKNOWN"),l=u(U(t,p)),d=t.licensePlate?O(t.licensePlate):"",a=c.get(d)||ge(t.licensePlate),m=a.buildYear&&a.buildYear!=="—"?`${a.title} (${a.buildYear})`:a.title,x=u(be(f)),C=de(ke(f)),M=u(C),B=u(ue(C)),T=pe(Se(f)),b=u(T),D=u(String(t.phone??"No phone number")),I=u(G(t));return`
        <article class="request-card ${S?"is-expanded":""}" data-booking-card-id="${u(i)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${E}</span>
              <div class="request-info">
                <p class="request-name">${l}</p>
                <p class="request-vehicle">${m}</p>
                <div class="request-services">${Le(t.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${x}</span>
       <button
                class="request-toggle ${S?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${u(i)}"
                aria-expanded="${S?"true":"false"}"
                aria-label="${S?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
            </div>
          </div>

          ${S?`
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
                          <span data-schedule-date-label>${B}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${me(C)}
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
                          ${he(T)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-request-action="save-schedule" data-booking-id="${u(i)}">Save</button>
                    <button class="button subtle" type="button" data-request-action="cancel-edit" data-booking-id="${u(i)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-request-action="edit" data-booking-id="${u(i)}" aria-label="Edit booking">✎</button>
                ${w?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${u(i)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${u(i)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments found for this filter.</p></article>'}function z(n){return[...n].sort((e,s)=>new Date(e.appointmentAt??e.createdAt).getTime()-new Date(s.appointmentAt??s.createdAt).getTime())}function Ae(n){const e=new Map;return n.forEach((s,c)=>{const t=U(s,c);e.set(t,t)}),[...e.values()]}function xe(n){const e=[],s=()=>{e.forEach(t=>{t.wrap.classList.remove("is-open"),t.trigger.setAttribute("aria-expanded","false")})},c=()=>`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6C4 6 6.94593 9.99999 8 10C9.05413 10 12 6 12 6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;return n.querySelectorAll(".request-select-wrap").forEach(t=>{const p=t.querySelector(".request-select");if(!(p instanceof HTMLSelectElement))return;const i=document.createElement("button");i.type="button",i.className="request-select-trigger",i.setAttribute("aria-haspopup","listbox"),i.setAttribute("aria-expanded","false");const S=document.createElement("span");S.className="request-select-trigger-label";const w=document.createElement("span");w.className="request-select-trigger-icon",w.innerHTML=c(),i.append(S,w);const f=document.createElement("div");f.className="request-select-menu",f.setAttribute("role","listbox"),t.append(i,f);const E=()=>{const d=p.options[p.selectedIndex];S.textContent=(d==null?void 0:d.textContent)??""},l=()=>{f.innerHTML="",[...p.options].forEach(d=>{const a=document.createElement("button");a.type="button",a.className="request-select-option",a.dataset.requestSelectValue=d.value,a.textContent=d.textContent??"",a.classList.toggle("is-selected",d.value===p.value),f.append(a)})};i.addEventListener("click",d=>{d.stopPropagation();const a=t.classList.contains("is-open");s(),a||(t.classList.add("is-open"),i.setAttribute("aria-expanded","true"))}),f.addEventListener("click",d=>{const a=d.target instanceof Element?d.target:null;if(!a)return;const m=a.closest("[data-request-select-value]");if(!(m instanceof HTMLElement))return;const x=String(m.dataset.requestSelectValue??"");p.value=x,p.dispatchEvent(new Event("change",{bubbles:!0})),E(),l(),s()}),p.addEventListener("change",()=>{E(),l()}),e.push({wrap:t,trigger:i,nativeSelect:p,refresh(){E(),l()}}),E(),l()}),document.addEventListener("click",t=>{const p=t.target instanceof Element?t.target:null;(!p||!p.closest(".request-select-wrap"))&&s()}),n.addEventListener("keydown",t=>{t.key==="Escape"&&s()}),{refresh(){e.forEach(t=>t.refresh())}}}async function Ce(n){var I;if(!n)return;const e=await Q();if(!e)return;if(!e.isAdmin&&!e.activeGarage){n.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}X(e.activeGarage);const s=e.isAdmin?null:[(I=e.activeGarage)==null?void 0:I.id].filter(Boolean),{shell:c,contentArea:t,setUnreadEmailCount:p}=ee({activePage:"bookings",title:"Appointment",headerNote:"Manage active appointments",userEmail:e.user.email,onLogout:te,garage:e.activeGarage,isAdmin:e.isAdmin});n.replaceChildren(c),t.innerHTML=`
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
  `;const i=t.querySelector("#requestSearch"),S=t.querySelector("#requestServiceFilter"),w=t.querySelector("#requestTechnicianFilter"),f=t.querySelector("#requestList"),E=xe(t);let l=[],d=[],a="",m="";const x=new Map,C=new URLSearchParams(window.location.search),M=String(C.get("bookingId")??"").trim(),B=String(C.get("customer")??"").trim(),T=String(C.get("plate")??"").trim(),b=()=>{const k=String(i.value??"").trim().toLowerCase(),h=String(S.value??"all"),$=String(w.value??"all");d=l.filter((g,r)=>{const o=_(g.service).map(N=>W(N)),v=U(g,r),y=[g.licensePlate,g.phone,g.service,v,G(g)].join(" ").toLowerCase(),L=!k||y.includes(k),q=h==="all"||o.includes(h);return L&&q&&($==="all"||v===$)}),a&&!d.some(g=>String(g.id)===a)&&(a="",m=""),m&&!d.some(g=>String(g.id)===m)&&(m=""),f.innerHTML=Ee(d,a,m,x)},D=k=>{if(!k)return;const h=f.querySelector(`[data-booking-card-id="${CSS.escape(k)}"]`);h instanceof HTMLElement&&(h.classList.remove("search-target-highlight"),h.offsetWidth,h.classList.add("search-target-highlight"),h.scrollIntoView({block:"center",behavior:"smooth"}))};t.addEventListener("click",async k=>{const h=k.target instanceof Element?k.target:null;if(!h||le(t,h))return;const $=h.closest("[data-request-toggle]");if($ instanceof HTMLElement){const o=String($.dataset.requestToggle??"");a=a===o?"":o,a!==o&&(m=""),b();return}const g=h.closest("[data-request-action]");if(g instanceof HTMLElement){const o=String(g.dataset.requestAction??""),v=String(g.dataset.bookingId??"");if(!v)return;if(o==="edit"){a=v,m=m===v?"":v,b();return}if(o==="cancel-edit"){m="",b();return}if(o==="save-schedule"){const L=g.closest("[data-booking-card-id]");if(!(L instanceof HTMLElement))return;const q=l.find(A=>String(A.id)===v);if(!q)return;const H=L.querySelector("[data-schedule-edit-date]"),N=L.querySelector("[data-schedule-edit-time]");if(!(H instanceof HTMLInputElement)||!(N instanceof HTMLInputElement))return;const V=qe(H.value,N.value);if(!V)return;try{await ne(q,V)}catch(A){window.alert(A instanceof Error?A.message:"Unable to save the appointment schedule.");return}l=z(l.map(A=>String(A.id)===v?{...A,appointmentAt:V}:A)),a=v,m="",b();return}const y=l.find(L=>String(L.id)===v);if(!y)return;if(o==="complete"){if(!await F("Are you sure you want to mark this appointment as completed?","Mark as Completed"))return;ae(v,"done");try{await se(y,{convertedFromEmail:y.source!=="manual"})}catch(q){window.alert(q instanceof Error?q.message:"Unable to mark appointment as completed.");return}window.location.href=J("completed.html");return}if(o==="delete"){if(!await F("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{await ie(y)}catch(q){window.alert(q instanceof Error?q.message:"Unable to delete the appointment.");return}l=l.filter(q=>String(q.id)!==v),a===v&&(a=""),m="",b()}return}const r=h.closest("[data-booking-card-id]");if(r instanceof HTMLElement&&!we(h)){const o=String(r.dataset.bookingCardId??"");if(!o)return;a=a===o?"":o,a!==o&&(m=""),b()}}),i.addEventListener("input",b),S.addEventListener("change",b),w.addEventListener("change",b);try{const k=await re({garageIds:s}),h=oe(k);p(h.unread),l=z(k.filter(r=>r.inAppointments===!0));const $=new Set(l.map(r=>r.licensePlate).filter(r=>r&&r!=="UNKNOWN").map(r=>O(r)));for(const r of $)if(r&&!x.has(r))try{const o=await ce(r);o&&x.set(r,o)}catch(o){console.error(`Failed to fetch vehicle for ${r}:`,o)}const g=Ae(l);w.innerHTML=`
      <option value="all">All Technicians</option>
      ${g.map(r=>`<option value="${u(r)}">${u(r)}</option>`).join("")}
    `,E.refresh(),B?i.value=B:T&&(i.value=T),a=M||(l[0]?String(l[0].id):""),b(),M&&D(M)}catch(k){f.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',p(0),console.error(k)}}const $e=document.querySelector("#app");Z();Ce($e);
