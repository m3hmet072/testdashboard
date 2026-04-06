import{p as ue,d as J,c as pe}from"./theme-DhME38Lo.js";/* empty css                      */import{e as me,a as he,c as ge,l as fe,i as ve,p as be,o as Se,m as we,q as qe,b as ke,d as Le,s as Te,t as Q,g as Y,k as $e,f as R}from"./branding-BojcsMHH.js";import{n as G,f as xe}from"./rdwService-CFrMDQAa.js";import{s as X}from"./confirmDialog-DSEC2-zx.js";import{h as Ee,n as P,a as ye,f as Ce,s as Ae,b as ee}from"./scheduleTimePicker-q1IARKz3.js";function Me(t=""){return{title:G(t)||"Unknown vehicle",buildYear:""}}const Be=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function l(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ae(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function V(t){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function Ne(t){const e=V(t);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function Ie(t){const e=V(t);if(!e)return"";const a=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${a}-${o}-${n}`}function Pe(t){const e=V(t);if(!e)return"09:00";const a=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return`${a}:${o}`}function He(t,e){const a=String(t??"").trim(),o=String(e??"").trim();if(!a||!o)return"";const n=`${a}T${o}:00`;return V(n)?n:""}function Ue(t){return t instanceof Element&&!!t.closest("button, input, select, textarea, a, label")}function De(t){const e=String(t??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function Fe(t){return De(t.status)==="done"||t.inAppointments===!1}function se(t,e){var n;const a=String(t??""),o=new RegExp(`\\b${e}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((n=a.match(o))==null?void 0:n[1])??"").trim()}const te="Manual appointment created in dashboard.";function ie(t){const a=String(t??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((a==null?void 0:a[1])??"").trim()}function Ve(t){const e=P(t),[a,o]=e.split(":"),n=Number(a),c=Number(o);if(!Number.isFinite(n)||!Number.isFinite(c))return"01:00";const i=new Date(2e3,0,1,n,c,0,0);return i.setHours(i.getHours()+1),`${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`}function Oe(t,e){const a=P(e);return`${String(t??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${a}`.trim()}function W(t){const e=String((t==null?void 0:t.name)??"").trim();if(e)return e;const a=se(t.message,"name");if(a)return a;const o=String((t==null?void 0:t.licensePlate)??"").trim();return o?ae(o):"UNKNOWN"}function re(t){const e=se(t.message,"message")||String(t.message??"").trim(),a=e.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim();return a||(e.toLowerCase().includes(te.toLowerCase())?te:"No customer message.")}function ze(t){const e=Ne((t==null?void 0:t.appointmentAt)??(t==null?void 0:t.createdAt)),a=ie(t==null?void 0:t.message);return a?`${e} - ${a}`:e}function oe(t){const e=String(t??"").trim();if(!e)return["other"];const a=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(o=>o.trim()).filter(Boolean);return a.length?a:[e]}function ce(t){return Be.get(String(t??"").trim().toLowerCase())??"other"}function je(t){const e=String(t??"").trim(),a=Y();if(!e)return{key:"other",label:R("other",a)};const o=e.toLowerCase(),n=ce(e);if(n==="other"){if(["other","overig","overige"].includes(o))return{key:n,label:R("other",a)};const c=e.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:n,label:c||e}}return{key:n,label:R(n,a)}}function Ke(t){return oe(t).map(e=>{const{key:a,label:o}=je(e);return`<span class="service-chip service-chip-${a}">${l(o)}</span>`}).join("")}function Re(t,e,a,o){return t.length?t.map((n,c)=>{const i=String(n.id??""),b=e===i,S=a===i,w=n.appointmentAt??n.createdAt,T=String(n.licensePlate??"").toUpperCase()==="UNKNOWN",d=l(n.color??"#2563EB"),u=l(n.licensePlate&&n.licensePlate!=="UNKNOWN"?ae(n.licensePlate):"UNKNOWN"),r=l(W(n)),p=n.licensePlate?G(n.licensePlate):"",k=o.get(p)||Me(n.licensePlate),E=k.buildYear&&k.buildYear!=="—"?`${k.title} (${k.buildYear})`:k.title,H=l(ze(n)),C=ye(Ie(w)),U=l(C),O=l(Ce(C)),B=P(Pe(w)),A=l(B),M=P(ie(n.message)||Ve(B)),N=l(M),D=l(String(n.phone??"No phone number")),z=l(re(n));return`
        <article class="request-card ${b?"is-expanded":""}" data-booking-card-id="${l(i)}">
          <div class="request-card-head">
            <div class="request-main">
              ${T?`<span class="fast-appt-dot" style="background: ${d}" aria-hidden="true"></span>`:`<span class="plate-chip">${u}</span>`}
              <div class="request-info">
                <p class="request-name">${r}</p>
                ${T?"":`<p class="request-vehicle">${E}</p>`}
                <div class="request-services">${Ke(n.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${H}</span>
       <button
                class="request-toggle ${b?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${l(i)}"
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
                    <img src="${J("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone Number</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${D}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${J("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message from client</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${z}</span>
                </div>
              </div>

              <div class="request-actions">
                ${S?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${U}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${O}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${Ae(C)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${Q("fastFrom",Y())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${A}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${A}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${ee(B)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${Q("fastTo",Y())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${N}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${N}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${ee(M)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-request-action="save-schedule" data-booking-id="${l(i)}">Save</button>
                    <button class="button subtle" type="button" data-request-action="cancel-edit" data-booking-id="${l(i)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-request-action="edit" data-booking-id="${l(i)}" aria-label="Edit booking">✎</button>
                ${S?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${l(i)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${l(i)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments found for this filter.</p></article>'}function ne(t){return[...t].sort((e,a)=>new Date(e.appointmentAt??e.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime())}function Ye(t){const e=new Map;return t.forEach((a,o)=>{const n=W(a);e.set(n,n)}),[...e.values()]}function Ge(t){const e=[],a=()=>{e.forEach(n=>{n.wrap.classList.remove("is-open"),n.trigger.setAttribute("aria-expanded","false")})},o=()=>`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6C4 6 6.94593 9.99999 8 10C9.05413 10 12 6 12 6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;return t.querySelectorAll(".request-select-wrap").forEach(n=>{const c=n.querySelector(".request-select");if(!(c instanceof HTMLSelectElement))return;const i=document.createElement("button");i.type="button",i.className="request-select-trigger",i.setAttribute("aria-haspopup","listbox"),i.setAttribute("aria-expanded","false");const b=document.createElement("span");b.className="request-select-trigger-label";const S=document.createElement("span");S.className="request-select-trigger-icon",S.innerHTML=o(),i.append(b,S);const w=document.createElement("div");w.className="request-select-menu",w.setAttribute("role","listbox"),n.append(i,w);const T=()=>{const u=c.options[c.selectedIndex];b.textContent=(u==null?void 0:u.textContent)??""},d=()=>{w.innerHTML="",[...c.options].forEach(u=>{const r=document.createElement("button");r.type="button",r.className="request-select-option",r.dataset.requestSelectValue=u.value,r.textContent=u.textContent??"",r.classList.toggle("is-selected",u.value===c.value),w.append(r)})};i.addEventListener("click",u=>{u.stopPropagation();const r=n.classList.contains("is-open");a(),r||(n.classList.add("is-open"),i.setAttribute("aria-expanded","true"))}),w.addEventListener("click",u=>{const r=u.target instanceof Element?u.target:null;if(!r)return;const p=r.closest("[data-request-select-value]");if(!(p instanceof HTMLElement))return;const k=String(p.dataset.requestSelectValue??"");c.value=k,c.dispatchEvent(new Event("change",{bubbles:!0})),T(),d(),a()}),c.addEventListener("change",()=>{T(),d()}),e.push({wrap:n,trigger:i,nativeSelect:c,refresh(){T(),d()}}),T(),d()}),document.addEventListener("click",n=>{const c=n.target instanceof Element?n.target:null;(!c||!c.closest(".request-select-wrap"))&&a()}),t.addEventListener("keydown",n=>{n.key==="Escape"&&a()}),{refresh(){e.forEach(n=>n.refresh())}}}async function We(t){var _;if(!t)return;const e=await me();if(!e)return;if(!e.isAdmin&&!e.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}he(e.activeGarage);const a=e.isAdmin?null:[(_=e.activeGarage)==null?void 0:_.id].filter(Boolean),{shell:o,contentArea:n,setUnreadEmailCount:c}=ge({activePage:"bookings",title:"Appointment",headerNote:"Manage active appointments",userEmail:e.user.email,onLogout:fe,garage:e.activeGarage,isAdmin:e.isAdmin});t.replaceChildren(o),n.innerHTML=`
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
  `;const i=n.querySelector("#requestSearch"),b=n.querySelector("#requestServiceFilter"),S=n.querySelector("#requestTechnicianFilter"),w=n.querySelector("#requestList"),T=Ge(n);let d=[],u=[],r="",p="";const k=new Map,E=ve("bookings",{}),H=String(E.searchTerm??"").trim(),C=String(E.serviceFilter??"all").trim()||"all",U=String(E.technicianFilter??"all").trim()||"all",O=String(E.expandedBookingId??"").trim(),B=String(E.editingBookingId??"").trim(),A=new URLSearchParams(window.location.search),M=String(A.get("bookingId")??"").trim(),N=String(A.get("customer")??"").trim(),D=String(A.get("plate")??"").trim(),z=()=>{$e("bookings",{searchTerm:String(i.value??"").trim(),serviceFilter:String(b.value??"all").trim()||"all",technicianFilter:String(S.value??"all").trim()||"all",expandedBookingId:r,editingBookingId:p})},L=()=>{const q=String(i.value??"").trim().toLowerCase(),g=String(b.value??"all"),y=String(S.value??"all");u=d.filter((f,I)=>{const h=oe(f.service).map(F=>ce(F)),v=W(f),x=[f.licensePlate,f.phone,f.service,v,re(f)].join(" ").toLowerCase(),s=!q||x.includes(q),m=g==="all"||h.includes(g);return s&&m&&(y==="all"||v===y)}),r&&!u.some(f=>String(f.id)===r)&&(r="",p=""),p&&!u.some(f=>String(f.id)===p)&&(p=""),w.innerHTML=Re(u,r,p,k),z()},le=q=>{if(!q)return;const g=w.querySelector(`[data-booking-card-id="${CSS.escape(q)}"]`);g instanceof HTMLElement&&(g.classList.remove("search-target-highlight"),g.offsetWidth,g.classList.add("search-target-highlight"),g.scrollIntoView({block:"center",behavior:"smooth"}))};n.addEventListener("click",async q=>{const g=q.target instanceof Element?q.target:null;if(!g||Ee(n,g))return;const y=g.closest("[data-request-toggle]");if(y instanceof HTMLElement){const h=String(y.dataset.requestToggle??"");r=r===h?"":h,r!==h&&(p=""),L();return}const f=g.closest("[data-request-action]");if(f instanceof HTMLElement){const h=String(f.dataset.requestAction??""),v=String(f.dataset.bookingId??"");if(!v)return;if(h==="edit"){r=v,p=p===v?"":v,L();return}if(h==="cancel-edit"){p="",L();return}if(h==="save-schedule"){const s=f.closest("[data-booking-card-id]");if(!(s instanceof HTMLElement))return;const m=d.find($=>String($.id)===v);if(!m)return;const j=s.querySelector("[data-schedule-edit-date]"),F=s.querySelector("[data-schedule-edit-start-time]"),Z=s.querySelector("[data-schedule-edit-end-time]");if(!(j instanceof HTMLInputElement)||!(F instanceof HTMLInputElement)||!(Z instanceof HTMLInputElement))return;const K=He(j.value,F.value),de=P(Z.value);if(!K)return;try{await be(m,K)}catch($){window.alert($ instanceof Error?$.message:"Unable to save the appointment schedule.");return}d=ne(d.map($=>String($.id)===v?{...$,appointmentAt:K,message:Oe($.message,de)}:$)),r=v,p="",L();return}const x=d.find(s=>String(s.id)===v);if(!x)return;if(h==="complete"){if(!await X("Are you sure you want to mark this appointment as completed?","Mark as Completed"))return;Se(v,"done");try{await we(x,{convertedFromEmail:x.source!=="manual"})}catch(m){window.alert(m instanceof Error?m.message:"Unable to mark appointment as completed.");return}window.location.href=ue("completed.html");return}if(h==="delete"){if(!await X("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{await qe(x)}catch(m){window.alert(m instanceof Error?m.message:"Unable to delete the appointment.");return}d=d.filter(m=>String(m.id)!==v),r===v&&(r=""),p="",L()}return}const I=g.closest("[data-booking-card-id]");if(I instanceof HTMLElement&&!Ue(g)){const h=String(I.dataset.bookingCardId??"");if(!h)return;r=r===h?"":h,r!==h&&(p=""),L()}}),i.addEventListener("input",L),b.addEventListener("change",L),S.addEventListener("change",L);try{const[q,g]=await Promise.all([ke({garageIds:a}),Le({garageIds:a})]),y=new Set(g.map(s=>String(s.bookingId??s.id??"").trim()).filter(Boolean)),f=Te(q);c(f.unread),d=ne(q.filter(s=>{const m=String(s.id??"").trim();return s.inAppointments===!0&&!Fe(s)&&!y.has(m)}));const I=new Set(d.map(s=>s.licensePlate).filter(s=>s&&s!=="UNKNOWN").map(s=>G(s)));for(const s of I)if(s&&!k.has(s))try{const m=await xe(s);m&&k.set(s,m)}catch(m){console.error(`Failed to fetch vehicle for ${s}:`,m)}const h=Ye(d);S.innerHTML=`
      <option value="all">All Technicians</option>
      ${h.map(s=>`<option value="${l(s)}">${l(s)}</option>`).join("")}
    `;const v=Array.from(b.options).some(s=>s.value===C);b.value=v?C:"all";const x=Array.from(S.options).some(s=>s.value===U);S.value=x?U:"all",N?i.value=N:D?i.value=D:H&&(i.value=H),r=M||O||(d[0]?String(d[0].id):""),p=B,T.refresh(),L(),M&&le(M)}catch(q){w.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',c(0),console.error(q)}}const _e=document.querySelector("#app");pe();We(_e);
