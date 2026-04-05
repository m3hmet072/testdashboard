import{p as ae,d as R,c as se}from"./theme-CzeyRWKH.js";/* empty css                      */import{e as ie,a as re,c as oe,l as ce,d as le,p as de,h as ue,m as pe,i as me,g as he,b as ge,s as fe,f as ve}from"./branding-BCgtwUdv.js";import{n as z,f as be}from"./rdwService-CFrMDQAa.js";import{s as W}from"./confirmDialog-DSEC2-zx.js";import{h as Se,n as ke,f as we,a as qe,s as Le,b as Ee}from"./scheduleTimePicker-zgpyiEd6.js";function Ae(t=""){return{title:z(t)||"Unknown vehicle",buildYear:""}}const U={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},xe=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function m(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Z(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function D(t){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function Ce(t){const e=D(t);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function ye(t){const e=D(t);if(!e)return"";const i=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${i}-${r}-${n}`}function Te(t){const e=D(t);if(!e)return"09:00";const i=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return`${i}:${r}`}function $e(t,e){const i=String(t??"").trim(),r=String(e??"").trim();if(!i||!r)return"";const n=`${i}T${r}:00`;return D(n)?n:""}function Me(t){return t instanceof Element&&!!t.closest("button, input, select, textarea, a, label")}function Be(t){const e=String(t??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function Ie(t){return Be(t.status)==="done"||t.inAppointments===!1}function J(t,e){var n;const i=String(t??""),r=new RegExp(`\\b${e}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((n=i.match(r))==null?void 0:n[1])??"").trim()}function K(t){const e=String((t==null?void 0:t.name)??"").trim();if(e)return e;const i=J(t.message,"name");if(i)return i;const r=String((t==null?void 0:t.licensePlate)??"").trim();return r?Z(r):"UNKNOWN"}function Q(t){return J(t.message,"message")||String(t.message??"").trim()||"No customer message."}function X(t){const e=String(t??"").trim();if(!e)return["other"];const i=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(r=>r.trim()).filter(Boolean);return i.length?i:[e]}function ee(t){return xe.get(String(t??"").trim().toLowerCase())??"other"}function Pe(t){const e=String(t??"").trim();if(!e)return{key:"other",label:U.other};const i=e.toLowerCase(),r=ee(e);if(r==="other"){if(["other","overig","overige"].includes(i))return{key:r,label:U.other};const n=e.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:r,label:n||e}}return{key:r,label:U[r]??e}}function Ne(t){return X(t).map(e=>{const{key:i,label:r}=Pe(e);return`<span class="service-chip service-chip-${i}">${m(r)}</span>`}).join("")}function De(t,e,i,r){return t.length?t.map((n,f)=>{const o=String(n.id??""),b=e===o,k=i===o,S=n.appointmentAt??n.createdAt,E=m(n.licensePlate&&n.licensePlate!=="UNKNOWN"?Z(n.licensePlate):"UNKNOWN"),c=m(K(n)),l=n.licensePlate?z(n.licensePlate):"",s=r.get(l)||Ae(n.licensePlate),d=s.buildYear&&s.buildYear!=="—"?`${s.title} (${s.buildYear})`:s.title,C=m(Ce(S)),L=ke(ye(S)),B=m(L),I=m(we(L)),T=qe(Te(S)),P=m(T),H=m(String(n.phone??"No phone number")),$=m(Q(n));return`
        <article class="request-card ${b?"is-expanded":""}" data-booking-card-id="${m(o)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${E}</span>
              <div class="request-info">
                <p class="request-name">${c}</p>
                <p class="request-vehicle">${d}</p>
                <div class="request-services">${Ne(n.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${C}</span>
       <button
                class="request-toggle ${b?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${m(o)}"
                aria-expanded="${b?"true":"false"}"
                aria-label="${b?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
            </div>
          </div>

          ${b?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${R("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone Number</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${H}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${R("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message from client</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${$}</span>
                </div>
              </div>

              <div class="request-actions">
                ${k?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${B}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${I}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${Le(L)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Time</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${P}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${P}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${Ee(T)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-request-action="save-schedule" data-booking-id="${m(o)}">Save</button>
                    <button class="button subtle" type="button" data-request-action="cancel-edit" data-booking-id="${m(o)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-request-action="edit" data-booking-id="${m(o)}" aria-label="Edit booking">✎</button>
                ${k?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${m(o)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${m(o)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments found for this filter.</p></article>'}function _(t){return[...t].sort((e,i)=>new Date(e.appointmentAt??e.createdAt).getTime()-new Date(i.appointmentAt??i.createdAt).getTime())}function He(t){const e=new Map;return t.forEach((i,r)=>{const n=K(i);e.set(n,n)}),[...e.values()]}function Oe(t){const e=[],i=()=>{e.forEach(n=>{n.wrap.classList.remove("is-open"),n.trigger.setAttribute("aria-expanded","false")})},r=()=>`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6C4 6 6.94593 9.99999 8 10C9.05413 10 12 6 12 6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;return t.querySelectorAll(".request-select-wrap").forEach(n=>{const f=n.querySelector(".request-select");if(!(f instanceof HTMLSelectElement))return;const o=document.createElement("button");o.type="button",o.className="request-select-trigger",o.setAttribute("aria-haspopup","listbox"),o.setAttribute("aria-expanded","false");const b=document.createElement("span");b.className="request-select-trigger-label";const k=document.createElement("span");k.className="request-select-trigger-icon",k.innerHTML=r(),o.append(b,k);const S=document.createElement("div");S.className="request-select-menu",S.setAttribute("role","listbox"),n.append(o,S);const E=()=>{const l=f.options[f.selectedIndex];b.textContent=(l==null?void 0:l.textContent)??""},c=()=>{S.innerHTML="",[...f.options].forEach(l=>{const s=document.createElement("button");s.type="button",s.className="request-select-option",s.dataset.requestSelectValue=l.value,s.textContent=l.textContent??"",s.classList.toggle("is-selected",l.value===f.value),S.append(s)})};o.addEventListener("click",l=>{l.stopPropagation();const s=n.classList.contains("is-open");i(),s||(n.classList.add("is-open"),o.setAttribute("aria-expanded","true"))}),S.addEventListener("click",l=>{const s=l.target instanceof Element?l.target:null;if(!s)return;const d=s.closest("[data-request-select-value]");if(!(d instanceof HTMLElement))return;const C=String(d.dataset.requestSelectValue??"");f.value=C,f.dispatchEvent(new Event("change",{bubbles:!0})),E(),c(),i()}),f.addEventListener("change",()=>{E(),c()}),e.push({wrap:n,trigger:o,nativeSelect:f,refresh(){E(),c()}}),E(),c()}),document.addEventListener("click",n=>{const f=n.target instanceof Element?n.target:null;(!f||!f.closest(".request-select-wrap"))&&i()}),t.addEventListener("keydown",n=>{n.key==="Escape"&&i()}),{refresh(){e.forEach(n=>n.refresh())}}}async function Ve(t){var G;if(!t)return;const e=await ie();if(!e)return;if(!e.isAdmin&&!e.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}re(e.activeGarage);const i=e.isAdmin?null:[(G=e.activeGarage)==null?void 0:G.id].filter(Boolean),{shell:r,contentArea:n,setUnreadEmailCount:f}=oe({activePage:"bookings",title:"Appointment",headerNote:"Manage active appointments",userEmail:e.user.email,onLogout:ce,garage:e.activeGarage,isAdmin:e.isAdmin});t.replaceChildren(r),n.innerHTML=`
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
  `;const o=n.querySelector("#requestSearch"),b=n.querySelector("#requestServiceFilter"),k=n.querySelector("#requestTechnicianFilter"),S=n.querySelector("#requestList"),E=Oe(n);let c=[],l=[],s="",d="";const C=new Map,L=le("bookings",{}),B=String(L.searchTerm??"").trim(),I=String(L.serviceFilter??"all").trim()||"all",T=String(L.technicianFilter??"all").trim()||"all",P=String(L.expandedBookingId??"").trim(),H=String(L.editingBookingId??"").trim(),$=new URLSearchParams(window.location.search),O=String($.get("bookingId")??"").trim(),j=String($.get("customer")??"").trim(),Y=String($.get("plate")??"").trim(),te=()=>{ve("bookings",{searchTerm:String(o.value??"").trim(),serviceFilter:String(b.value??"all").trim()||"all",technicianFilter:String(k.value??"all").trim()||"all",expandedBookingId:s,editingBookingId:d})},q=()=>{const w=String(o.value??"").trim().toLowerCase(),h=String(b.value??"all"),y=String(k.value??"all");l=c.filter((g,M)=>{const p=X(g.service).map(N=>ee(N)),v=K(g),A=[g.licensePlate,g.phone,g.service,v,Q(g)].join(" ").toLowerCase(),a=!w||A.includes(w),u=h==="all"||p.includes(h);return a&&u&&(y==="all"||v===y)}),s&&!l.some(g=>String(g.id)===s)&&(s="",d=""),d&&!l.some(g=>String(g.id)===d)&&(d=""),S.innerHTML=De(l,s,d,C),te()},ne=w=>{if(!w)return;const h=S.querySelector(`[data-booking-card-id="${CSS.escape(w)}"]`);h instanceof HTMLElement&&(h.classList.remove("search-target-highlight"),h.offsetWidth,h.classList.add("search-target-highlight"),h.scrollIntoView({block:"center",behavior:"smooth"}))};n.addEventListener("click",async w=>{const h=w.target instanceof Element?w.target:null;if(!h||Se(n,h))return;const y=h.closest("[data-request-toggle]");if(y instanceof HTMLElement){const p=String(y.dataset.requestToggle??"");s=s===p?"":p,s!==p&&(d=""),q();return}const g=h.closest("[data-request-action]");if(g instanceof HTMLElement){const p=String(g.dataset.requestAction??""),v=String(g.dataset.bookingId??"");if(!v)return;if(p==="edit"){s=v,d=d===v?"":v,q();return}if(p==="cancel-edit"){d="",q();return}if(p==="save-schedule"){const a=g.closest("[data-booking-card-id]");if(!(a instanceof HTMLElement))return;const u=c.find(x=>String(x.id)===v);if(!u)return;const V=a.querySelector("[data-schedule-edit-date]"),N=a.querySelector("[data-schedule-edit-time]");if(!(V instanceof HTMLInputElement)||!(N instanceof HTMLInputElement))return;const F=$e(V.value,N.value);if(!F)return;try{await de(u,F)}catch(x){window.alert(x instanceof Error?x.message:"Unable to save the appointment schedule.");return}c=_(c.map(x=>String(x.id)===v?{...x,appointmentAt:F}:x)),s=v,d="",q();return}const A=c.find(a=>String(a.id)===v);if(!A)return;if(p==="complete"){if(!await W("Are you sure you want to mark this appointment as completed?","Mark as Completed"))return;ue(v,"done");try{await pe(A,{convertedFromEmail:A.source!=="manual"})}catch(u){window.alert(u instanceof Error?u.message:"Unable to mark appointment as completed.");return}window.location.href=ae("completed.html");return}if(p==="delete"){if(!await W("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{await me(A)}catch(u){window.alert(u instanceof Error?u.message:"Unable to delete the appointment.");return}c=c.filter(u=>String(u.id)!==v),s===v&&(s=""),d="",q()}return}const M=h.closest("[data-booking-card-id]");if(M instanceof HTMLElement&&!Me(h)){const p=String(M.dataset.bookingCardId??"");if(!p)return;s=s===p?"":p,s!==p&&(d=""),q()}}),o.addEventListener("input",q),b.addEventListener("change",q),k.addEventListener("change",q);try{const[w,h]=await Promise.all([he({garageIds:i}),ge({garageIds:i})]),y=new Set(h.map(a=>String(a.bookingId??a.id??"").trim()).filter(Boolean)),g=fe(w);f(g.unread),c=_(w.filter(a=>{const u=String(a.id??"").trim();return a.inAppointments===!0&&!Ie(a)&&!y.has(u)}));const M=new Set(c.map(a=>a.licensePlate).filter(a=>a&&a!=="UNKNOWN").map(a=>z(a)));for(const a of M)if(a&&!C.has(a))try{const u=await be(a);u&&C.set(a,u)}catch(u){console.error(`Failed to fetch vehicle for ${a}:`,u)}const p=He(c);k.innerHTML=`
      <option value="all">All Technicians</option>
      ${p.map(a=>`<option value="${m(a)}">${m(a)}</option>`).join("")}
    `;const v=Array.from(b.options).some(a=>a.value===I);b.value=v?I:"all";const A=Array.from(k.options).some(a=>a.value===T);k.value=A?T:"all",j?o.value=j:Y?o.value=Y:B&&(o.value=B),s=O||P||(c[0]?String(c[0].id):""),d=H,E.refresh(),q(),O&&ne(O)}catch(w){S.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',f(0),console.error(w)}}const Fe=document.querySelector("#app");se();Ve(Fe);
