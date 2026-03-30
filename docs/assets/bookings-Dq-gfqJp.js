import{c as Y}from"./theme-DgkmrLao.js";/* empty css                      */import{e as z,a as G,c as R,l as _,p as W,b as J,m as Z,d as Q,g as X}from"./branding-BAUB0jw_.js";import{s as ee}from"./emailService-BZ0Xqht5.js";import{n as I,f as te}from"./rdwService-D13NyQC7.js";import{s as D}from"./confirmDialog-DSEC2-zx.js";import{h as ne,n as ae,f as se,a as ie,s as re,b as oe}from"./scheduleTimePicker-zgpyiEd6.js";const H=["Thomas Mulder","Sophie Koning","Rupert Clark","Jack Thomesen","Mila Verbeek"];function ce(n=""){return{title:I(n)||"Unknown vehicle",buildYear:""}}const V={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},le=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function p(n){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function de(n){return String(n??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function T(n){const e=new Date(n);return Number.isNaN(e.getTime())?null:e}function ue(n){const e=T(n);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function pe(n){const e=T(n);if(!e)return"";const s=e.getFullYear(),c=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");return`${s}-${c}-${t}`}function me(n){const e=T(n);if(!e)return"09:00";const s=String(e.getHours()).padStart(2,"0"),c=String(e.getMinutes()).padStart(2,"0");return`${s}:${c}`}function he(n,e){const s=String(n??"").trim(),c=String(e??"").trim();if(!s||!c)return"";const t=`${s}T${c}:00`;return T(t)?t:""}function ge(n){return n instanceof Element&&!!n.closest("button, input, select, textarea, a, label")}function K(n,e){var t;const s=String(n??""),c=new RegExp(`\\b${e}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((t=s.match(c))==null?void 0:t[1])??"").trim()}function P(n,e){const s=K(n.message,"name");return s||H[e%H.length]}function F(n){return K(n.message,"message")||String(n.message??"").trim()||"No customer message."}function U(n){const e=String(n??"").trim();if(!e)return["other"];const s=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(c=>c.trim()).filter(Boolean);return s.length?s:[e]}function j(n){return le.get(String(n??"").trim().toLowerCase())??"other"}function fe(n){return U(n).map(e=>{const s=j(e),c=V[s]??V.other;return`<span class="service-chip service-chip-${s}">${p(c)}</span>`}).join("")}function ve(n,e,s,c){return n.length?n.map((t,m)=>{const r=String(t.id??""),k=e===r,w=s===r,b=t.appointmentAt??t.createdAt,A=p(t.licensePlate&&t.licensePlate!=="UNKNOWN"?de(t.licensePlate):"UNKNOWN"),l=p(P(t,m)),d=t.licensePlate?I(t.licensePlate):"",a=c.get(d)||ce(t.licensePlate),h=a.buildYear&&a.buildYear!=="—"?`${a.title} (${a.buildYear})`:a.title,y=p(ue(b)),g=ae(pe(b)),C=p(g),q=p(se(g)),f=ie(me(b)),L=p(f),u=p(String(t.phone??"No phone number")),i=p(F(t));return`
        <article class="request-card ${k?"is-expanded":""}" data-booking-card-id="${p(r)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${A}</span>
              <div class="request-info">
                <p class="request-name">${l}</p>
                <p class="request-vehicle">${h}</p>
                <div class="request-services">${fe(t.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${y}</span>
       <button
                class="request-toggle ${k?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${p(r)}"
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
                    <img src="/sidebar-icons/user.png" alt="" aria-hidden="true" />
                    <span>Phone Number</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${u}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="/sidebar-icons/text.png" alt="" aria-hidden="true" />
                    <span>Message from client</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${i}</span>
                </div>
              </div>

              <div class="request-actions">
                ${w?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${C}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${q}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${re(g)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Time</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${L}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${L}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${oe(f)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-request-action="save-schedule" data-booking-id="${p(r)}">Save</button>
                    <button class="button subtle" type="button" data-request-action="cancel-edit" data-booking-id="${p(r)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-request-action="edit" data-booking-id="${p(r)}" aria-label="Edit booking">✎</button>
                ${w?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${p(r)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${p(r)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments found for this filter.</p></article>'}function O(n){return[...n].sort((e,s)=>new Date(e.appointmentAt??e.createdAt).getTime()-new Date(s.appointmentAt??s.createdAt).getTime())}function be(n){const e=new Map;return n.forEach((s,c)=>{const t=P(s,c);e.set(t,t)}),[...e.values()]}function ke(n){const e=[],s=()=>{e.forEach(t=>{t.wrap.classList.remove("is-open"),t.trigger.setAttribute("aria-expanded","false")})},c=()=>`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6C4 6 6.94593 9.99999 8 10C9.05413 10 12 6 12 6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;return n.querySelectorAll(".request-select-wrap").forEach(t=>{const m=t.querySelector(".request-select");if(!(m instanceof HTMLSelectElement))return;const r=document.createElement("button");r.type="button",r.className="request-select-trigger",r.setAttribute("aria-haspopup","listbox"),r.setAttribute("aria-expanded","false");const k=document.createElement("span");k.className="request-select-trigger-label";const w=document.createElement("span");w.className="request-select-trigger-icon",w.innerHTML=c(),r.append(k,w);const b=document.createElement("div");b.className="request-select-menu",b.setAttribute("role","listbox"),t.append(r,b);const A=()=>{const d=m.options[m.selectedIndex];k.textContent=(d==null?void 0:d.textContent)??""},l=()=>{b.innerHTML="",[...m.options].forEach(d=>{const a=document.createElement("button");a.type="button",a.className="request-select-option",a.dataset.requestSelectValue=d.value,a.textContent=d.textContent??"",a.classList.toggle("is-selected",d.value===m.value),b.append(a)})};r.addEventListener("click",d=>{d.stopPropagation();const a=t.classList.contains("is-open");s(),a||(t.classList.add("is-open"),r.setAttribute("aria-expanded","true"))}),b.addEventListener("click",d=>{const a=d.target instanceof Element?d.target:null;if(!a)return;const h=a.closest("[data-request-select-value]");if(!(h instanceof HTMLElement))return;const y=String(h.dataset.requestSelectValue??"");m.value=y,m.dispatchEvent(new Event("change",{bubbles:!0})),A(),l(),s()}),m.addEventListener("change",()=>{A(),l()}),e.push({wrap:t,trigger:r,nativeSelect:m,refresh(){A(),l()}}),A(),l()}),document.addEventListener("click",t=>{const m=t.target instanceof Element?t.target:null;(!m||!m.closest(".request-select-wrap"))&&s()}),n.addEventListener("keydown",t=>{t.key==="Escape"&&s()}),{refresh(){e.forEach(t=>t.refresh())}}}async function qe(n){var C;if(!n)return;const e=await z();if(!e)return;if(!e.isAdmin&&!e.activeGarage){n.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}G(e.activeGarage);const s=e.isAdmin?null:[(C=e.activeGarage)==null?void 0:C.id].filter(Boolean),{shell:c,contentArea:t,setUnreadEmailCount:m}=R({activePage:"bookings",title:"Appointment",headerNote:"Manage active appointments",userEmail:e.user.email,onLogout:_,garage:e.activeGarage,isAdmin:e.isAdmin});n.replaceChildren(c),t.innerHTML=`
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
  `;const r=t.querySelector("#requestSearch"),k=t.querySelector("#requestServiceFilter"),w=t.querySelector("#requestTechnicianFilter"),b=t.querySelector("#requestList"),A=ke(t);let l=[],d=[],a="",h="";const y=new Map,g=()=>{const q=String(r.value??"").trim().toLowerCase(),f=String(k.value??"all"),L=String(w.value??"all");d=l.filter((u,i)=>{const o=U(u.service).map($=>j($)),v=P(u,i),M=[u.licensePlate,u.phone,u.service,v,F(u)].join(" ").toLowerCase(),E=!q||M.includes(q),S=f==="all"||o.includes(f);return E&&S&&(L==="all"||v===L)}),a&&!d.some(u=>String(u.id)===a)&&(a="",h=""),h&&!d.some(u=>String(u.id)===h)&&(h=""),b.innerHTML=ve(d,a,h,y)};t.addEventListener("click",async q=>{const f=q.target instanceof Element?q.target:null;if(!f||ne(t,f))return;const L=f.closest("[data-request-toggle]");if(L instanceof HTMLElement){const o=String(L.dataset.requestToggle??"");a=a===o?"":o,a!==o&&(h=""),g();return}const u=f.closest("[data-request-action]");if(u instanceof HTMLElement){const o=String(u.dataset.requestAction??""),v=String(u.dataset.bookingId??"");if(!v)return;if(o==="edit"){a=v,h=h===v?"":v,g();return}if(o==="cancel-edit"){h="",g();return}if(o==="save-schedule"){const E=u.closest("[data-booking-card-id]");if(!(E instanceof HTMLElement))return;const S=l.find(x=>String(x.id)===v);if(!S)return;const B=E.querySelector("[data-schedule-edit-date]"),$=E.querySelector("[data-schedule-edit-time]");if(!(B instanceof HTMLInputElement)||!($ instanceof HTMLInputElement))return;const N=he(B.value,$.value);if(!N)return;try{await W(S,N)}catch(x){window.alert(x instanceof Error?x.message:"Unable to save the appointment schedule.");return}l=O(l.map(x=>String(x.id)===v?{...x,appointmentAt:N}:x)),a=v,h="",g();return}const M=l.find(E=>String(E.id)===v);if(!M)return;if(o==="complete"){if(!await D("Are you sure you want to mark this appointment as completed?","Mark as Completed"))return;J(v,"done");try{await Z(M,{convertedFromEmail:M.source!=="manual"})}catch(S){window.alert(S instanceof Error?S.message:"Unable to mark appointment as completed.");return}window.location.href="/completed.html";return}if(o==="delete"){if(!await D("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{await Q(M)}catch(S){window.alert(S instanceof Error?S.message:"Unable to delete the appointment.");return}l=l.filter(S=>String(S.id)!==v),a===v&&(a=""),h="",g()}return}const i=f.closest("[data-booking-card-id]");if(i instanceof HTMLElement&&!ge(f)){const o=String(i.dataset.bookingCardId??"");if(!o)return;a=a===o?"":o,a!==o&&(h=""),g()}}),r.addEventListener("input",g),k.addEventListener("change",g),w.addEventListener("change",g);try{const q=await X({garageIds:s}),f=ee(q);m(f.unread),l=O(q.filter(i=>i.inAppointments===!0));const L=new Set(l.map(i=>i.licensePlate).filter(i=>i&&i!=="UNKNOWN").map(i=>I(i)));for(const i of L)if(i&&!y.has(i))try{const o=await te(i);o&&y.set(i,o)}catch(o){console.error(`Failed to fetch vehicle for ${i}:`,o)}const u=be(l);w.innerHTML=`
      <option value="all">All Technicians</option>
      ${u.map(i=>`<option value="${p(i)}">${p(i)}</option>`).join("")}
    `,A.refresh(),a=l[0]?String(l[0].id):"",g()}catch(q){b.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',m(0),console.error(q)}}const Se=document.querySelector("#app");Y();qe(Se);
