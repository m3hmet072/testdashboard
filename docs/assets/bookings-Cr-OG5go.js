import{n as Se,t as ke,r as ie}from"./theme-DS55tFGy.js";/* empty css                      */import{r as we,f as qe}from"./quickAddModal-hDe3hTpe.js";import{G as $e,H as U,x as ye,K as Le,W as Ee,Z as xe,z as re,U as Ae}from"./requestCard-CqIap2Dn.js";import{n as Me,r as Ne,t as Ce,b as Te,K as se,H as He,P as Ue,j as Pe,Y as je,U as Be,e as Ie,X as Fe,a as We,N as oe,x as Q,c as Ke,W as Z}from"./branding-DFlHPucr.js";import{h as ee,p as De}from"./rdwService-B_7TgNhE.js";import{m as le}from"./confirmDialog-DOdHvhLG.js";function Ye(e=""){return{title:ee(e)||"Unknown vehicle",buildYear:""}}const Ge=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function h(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function de(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function R(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function Ve(e){const t=R(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function _e(e){const t=R(e);if(!t)return"";const n=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${n}-${s}-${r}`}function ue(e){const t=R(e);if(!t)return"09:00";const n=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0");return`${n}:${s}`}function Oe(e,t){const n=String(e??"").trim(),s=String(t??"").trim();if(!n||!s)return"";const r=`${n}T${s}:00`;return R(r)?r:""}function Re(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function ze(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function Xe(e){return ze(e.status)==="done"||e.inAppointments===!1}function Ze(e,t){var n;const s=String(e??""),r=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((n=s.match(r))==null?void 0:n[1])??"").trim()}const Je="Manual appointment created in dashboard.";function pe(e){const t=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((t==null?void 0:t[1])??"").trim()}function Qe(e){const t=String(e??"").match(/\bend\s*:\s*([^\n]+)/i);return U(((t==null?void 0:t[1])??"").trim(),"")}function et(e){const t=String(e??"").match(/\ball[\s_-]?day\s*:\s*([^\n]+)/i);if(!(t!=null&&t[1]))return!1;const n=String(t[1]).trim().toLowerCase();return n==="true"||n==="1"||n==="yes"||n==="ja"}function me(e){const t=U(e),[n,s]=t.split(":"),r=Number(n),a=Number(s);if(!Number.isFinite(r)||!Number.isFinite(a))return"01:00";const c=new Date(2e3,0,1,r,a,0,0);return c.setHours(c.getHours()+1),`${String(c.getHours()).padStart(2,"0")}:${String(c.getMinutes()).padStart(2,"0")}`}function tt(e,t){const n=U(t);return`${String(e??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${n}`.trim()}function O(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const n=Ze(e.message,"name");if(n)return n;const s=String((e==null?void 0:e.licensePlate)??"").trim();return s?de(s):"UNKNOWN"}function ge(e){const t=String((e==null?void 0:e.message)??"").replace(Je,"").trim(),n=t.match(/\bmessage\s*:\s*([\s\S]*)/i),s=a=>String(a??"").split(/\r?\n/g).filter(c=>{const l=String(c??"").trim();return!(!l||/^\s*(until|end|tot)\s*:?\s*\d{1,2}:\d{2}\s*$/i.test(l)||/^\s*all[\s_-]?day\s*:\s*(true|false|1|0|yes|no|ja|nee)\s*$/i.test(l))}).join(`
`).trim();if(n)return s(n[1])||"No customer message.";const r=t.split(/\r?\n/g).filter(a=>{const c=a.trim();return c&&!/^\s*(name|title|end|allday|all[\s_-]?day|message)\s*:/i.test(c)});return s(r.join(`
`))||"No customer message."}function ce(e){const t=Ve((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),n=U(ue((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt))),s=Qe(e==null?void 0:e.message)||pe(e==null?void 0:e.message)||me(n);return et(e==null?void 0:e.message)?"All day":`${t} - ${s}`}function he(e){const t=String(e??"").trim();if(!t)return["other"];const n=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(s=>s.trim()).filter(Boolean);return n.length?n:[t]}function ve(e){return Ge.get(String(e??"").trim().toLowerCase())??"other"}function nt(e){const t=String(e??"").trim(),n=Q();if(!t)return{key:"other",label:Z("other",n)};const s=t.toLowerCase(),r=ve(t);if(r==="other"){if(["other","overig","overige"].includes(s))return{key:r,label:Z("other",n)};const a=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:r,label:a||t}}return{key:r,label:Z(r,n)}}function at(e){return he(e).map(t=>{const{key:n,label:s}=nt(t);return`<span class="service-chip service-chip-${n}">${h(s)}</span>`}).join("")}function it(e,t,n,s,r){return e.length?e.map((a,c)=>{const l=String(a.id??""),w=t===l,f=n===l,q=a.appointmentAt??a.createdAt,x=String(a.licensePlate??"").toUpperCase()==="UNKNOWN",o=h(a.color??"#2563EB"),v=h(a.licensePlate&&a.licensePlate!=="UNKNOWN"?de(a.licensePlate):"UNKNOWN");h(O(a));const u=a.licensePlate?ee(a.licensePlate):"",p=s.get(u)||Ye(a.licensePlate),z=p.buildYear&&p.buildYear!=="—"?`${p.title} (${p.buildYear})`:p.title;h(ce(a));const M=ye(_e(q)),N=h(M),W=h(Le(M)),P=U(ue(q)),j=h(P),K=U(pe(a.message)||me(P)),D=h(K),C=String(a.phone??"").trim(),B=h(!C||C==="0000000000"?"Not filled in":C),Y=h(ge(a)),G=x?`<span class="fast-appt-dot" style="background: ${o}" aria-hidden="true"></span>`:`<span class="plate-chip">${v}</span>`,X=Ee({leadMarkup:G,name:O(a),vehicle:x?"":z,servicesMarkup:at(a.service),timeLabel:ce(a),isExpanded:w,toggleDataAttribute:"data-request-toggle",toggleId:l,expandAriaLabel:"Expand appointment details",collapseAriaLabel:"Collapse appointment details"});return`
        <article class="request-card ${w?"is-expanded":""}" data-booking-card-id="${h(l)}">
          ${X}

          ${w?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${ie("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${B}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${ie("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${Y}</span>
                </div>
              </div>

              <div class="request-actions">
                ${f?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${N}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${W}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${xe(M)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${oe("fastFrom",Q())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${j}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${j}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${re(P,r)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${oe("fastTo",Q())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${D}" />
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
                          ${re(K,r)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-request-action="save-schedule" data-booking-id="${h(l)}">Save</button>
                    <button class="button subtle" type="button" data-request-action="cancel-edit" data-booking-id="${h(l)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-request-action="edit" data-booking-id="${h(l)}" aria-label="Edit booking">✎</button>
                ${f?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${h(l)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Markeer als voltooid</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${h(l)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):Ae("No appointments found for this filter.")}function J(e){return[...e].sort((t,n)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(n.appointmentAt??n.createdAt).getTime())}function rt(e){const t=new Map;return e.forEach((n,s)=>{const r=O(n);t.set(r,r)}),[...t.values()]}function st(e){const t=[],n=()=>{t.forEach(r=>{r.wrap.classList.remove("is-open"),r.trigger.setAttribute("aria-expanded","false")})},s=()=>`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6C4 6 6.94593 9.99999 8 10C9.05413 10 12 6 12 6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;return e.querySelectorAll(".request-select-wrap").forEach(r=>{const a=r.querySelector(".request-select");if(!(a instanceof HTMLSelectElement))return;const c=document.createElement("button");c.type="button",c.className="request-select-trigger",c.setAttribute("aria-haspopup","listbox"),c.setAttribute("aria-expanded","false");const l=document.createElement("span");l.className="request-select-trigger-label";const w=document.createElement("span");w.className="request-select-trigger-icon",w.innerHTML=s(),c.append(l,w);const f=document.createElement("div");f.className="request-select-menu",f.setAttribute("role","listbox"),r.append(c,f);const q=()=>{const o=a.options[a.selectedIndex];l.textContent=(o==null?void 0:o.textContent)??""},x=()=>{f.innerHTML="",[...a.options].forEach(o=>{const v=document.createElement("button");v.type="button",v.className="request-select-option",v.dataset.requestSelectValue=o.value,v.textContent=o.textContent??"",v.classList.toggle("is-selected",o.value===a.value),f.append(v)})};c.addEventListener("click",o=>{o.stopPropagation();const v=r.classList.contains("is-open");n(),v||(r.classList.add("is-open"),c.setAttribute("aria-expanded","true"))}),f.addEventListener("click",o=>{const v=o.target instanceof Element?o.target:null;if(!v)return;const u=v.closest("[data-request-select-value]");if(!(u instanceof HTMLElement))return;const p=String(u.dataset.requestSelectValue??"");a.value=p,a.dispatchEvent(new Event("change",{bubbles:!0})),q(),x(),n()}),a.addEventListener("change",()=>{q(),x()}),t.push({wrap:r,trigger:c,nativeSelect:a,refresh(){q(),x()}}),q(),x()}),document.addEventListener("click",r=>{const a=r.target instanceof Element?r.target:null;(!a||!a.closest(".request-select-wrap"))&&n()}),e.addEventListener("keydown",r=>{r.key==="Escape"&&n()}),{refresh(){t.forEach(r=>r.refresh())}}}async function ot(e){var t;if(!e)return;const n=await Me();if(!n)return;if(!n.isAdmin&&!n.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Ne(n.activeGarage);const s=n.isAdmin?null:[(t=n.activeGarage)==null?void 0:t.id].filter(Boolean),{shell:r,contentArea:a,setUnreadEmailCount:c}=Ce({activePage:"bookings",title:"Appointment",headerNote:"Manage active appointments",userEmail:n.user.email,onLogout:Te,garage:n.activeGarage,isAdmin:n.isAdmin});e.replaceChildren(r),a.innerHTML=`
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
  `;const l=a.querySelector("#requestSearch"),w=a.querySelector("#requestServiceFilter"),f=a.querySelector("#requestTechnicianFilter"),q=a.querySelector("#requestList"),x=st(a);let o=[],v=[],u="",p="";const z=we({onSubmit:async({mode:k,editingBookingId:d,name:$,phone:g,note:T,date:m,time:b,endTime:E,isAllDay:i,color:S,service:H,licensePlate:V,isSimpleAppointment:I})=>{if(k!=="edit"||!d)throw new Error("Aanmaken van afspraken is beschikbaar via de kalender.");const A=o.find(F=>String(F.id)===d);if(!A)throw new Error("Afspraak niet gevonden.");const _=`${m}T${b}`,y=g||String(A.phone??"").trim()||"0000000000",be=T||qe,te=I?H||"Simple appointment":H,ne=I?"UNKNOWN":V||"UNKNOWN",ae=[`Name: ${$}`,`AllDay: ${i?"true":"false"}`,`End: ${E}`,`Message: ${be}`].join(`
`);await se(A,_),await He(A,{name:$,phone:y,message:ae,color:S,service:te,licensePlate:ne}),o=J(o.map(F=>String(F.id)===d?{...F,appointmentAt:_,name:$,color:S,message:ae,service:te,licensePlate:ne}:F)),L()}}),M=new Map,N=Ue("bookings",{}),W=String(N.searchTerm??"").trim(),P=String(N.serviceFilter??"all").trim()||"all",j=String(N.technicianFilter??"all").trim()||"all",K=String(N.expandedBookingId??"").trim(),D=String(N.editingBookingId??"").trim(),C=new URLSearchParams(window.location.search),B=String(C.get("bookingId")??"").trim(),Y=String(C.get("customer")??"").trim(),G=String(C.get("plate")??"").trim(),X=()=>{Ke("bookings",{searchTerm:String(l.value??"").trim(),serviceFilter:String(w.value??"all").trim()||"all",technicianFilter:String(f.value??"all").trim()||"all",expandedBookingId:u,editingBookingId:p})},L=()=>{const k=String(l.value??"").trim().toLowerCase(),d=String(w.value??"all"),$=String(f.value??"all");v=o.filter((g,T)=>{const m=he(g.service).map(H=>ve(H)),b=O(g),E=[g.licensePlate,g.phone,g.service,b,ge(g)].join(" ").toLowerCase(),i=!k||E.includes(k),S=d==="all"||m.includes(d);return i&&S&&($==="all"||b===$)}),u&&!v.some(g=>String(g.id)===u)&&(u="",p=""),p&&!v.some(g=>String(g.id)===p)&&(p=""),q.innerHTML=it(v,u,p,M,n.activeGarage),X()},fe=k=>{if(!k)return;const d=q.querySelector(`[data-booking-card-id="${CSS.escape(k)}"]`);d instanceof HTMLElement&&(d.classList.remove("search-target-highlight"),d.offsetWidth,d.classList.add("search-target-highlight"),d.scrollIntoView({block:"center",behavior:"smooth"}))};a.addEventListener("click",async k=>{const d=k.target instanceof Element?k.target:null;if(!d||$e(a,d))return;const $=d.closest("[data-request-toggle]");if($ instanceof HTMLElement){const m=String($.dataset.requestToggle??"");u=u===m?"":m,u!==m&&(p=""),L();return}const g=d.closest("[data-request-action]");if(g instanceof HTMLElement){const m=String(g.dataset.requestAction??""),b=String(g.dataset.bookingId??"");if(!b)return;if(m==="edit"){const i=o.find(S=>String(S.id)===b);i&&z.openForEdit(i);return}if(m==="cancel-edit"){p="",L();return}if(m==="save-schedule"){const i=g.closest("[data-booking-card-id]");if(!(i instanceof HTMLElement))return;const S=o.find(y=>String(y.id)===b);if(!S)return;const H=i.querySelector("[data-schedule-edit-date]"),V=i.querySelector("[data-schedule-edit-start-time]"),I=i.querySelector("[data-schedule-edit-end-time]");if(!(H instanceof HTMLInputElement)||!(V instanceof HTMLInputElement)||!(I instanceof HTMLInputElement))return;const A=Oe(H.value,V.value),_=U(I.value);if(!A)return;try{await se(S,A)}catch(y){window.alert(y instanceof Error?y.message:"Unable to save the appointment schedule.");return}o=J(o.map(y=>String(y.id)===b?{...y,appointmentAt:A,message:tt(y.message,_)}:y)),u=b,p="",L();return}const E=o.find(i=>String(i.id)===b);if(!E)return;if(m==="complete"){if(!await le("Are you sure you want to mark this appointment as completed?","Mark as Completed"))return;Pe(b,"done");try{await je(E,{convertedFromEmail:E.source!=="manual"})}catch(i){window.alert(i instanceof Error?i.message:"Unable to mark appointment as completed.");return}window.location.href=ke("completed.html");return}if(m==="delete"){if(!await le("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{await Be(E)}catch(i){window.alert(i instanceof Error?i.message:"Unable to delete the appointment.");return}o=o.filter(i=>String(i.id)!==b),u===b&&(u=""),p="",L()}return}const T=d.closest("[data-booking-card-id]");if(T instanceof HTMLElement&&!Re(d)){const m=String(T.dataset.bookingCardId??"");if(!m)return;u=u===m?"":m,u!==m&&(p=""),L()}}),l.addEventListener("input",L),w.addEventListener("change",L),f.addEventListener("change",L);try{const[k,d]=await Promise.all([Ie({garageIds:s}),Fe({garageIds:s})]),$=new Set(d.map(i=>String(i.bookingId??i.id??"").trim()).filter(Boolean)),g=We(k);c(g.unread),o=J(k.filter(i=>{const S=String(i.id??"").trim();return i.inAppointments===!0&&!Xe(i)&&!$.has(S)}));const T=new Set(o.map(i=>i.licensePlate).filter(i=>i&&i!=="UNKNOWN").map(i=>ee(i)));for(const i of T)if(i&&!M.has(i))try{const S=await De(i);S&&M.set(i,S)}catch(S){console.error(`Failed to fetch vehicle for ${i}:`,S)}const m=rt(o);f.innerHTML=`
      <option value="all">All Technicians</option>
      ${m.map(i=>`<option value="${h(i)}">${h(i)}</option>`).join("")}
    `;const b=Array.from(w.options).some(i=>i.value===P);w.value=b?P:"all";const E=Array.from(f.options).some(i=>i.value===j);f.value=E?j:"all",Y?l.value=Y:G?l.value=G:W&&(l.value=W),u=B||K||(o[0]?String(o[0].id):""),p=D,x.refresh(),L(),B&&fe(B)}catch(k){q.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',c(0),console.error(k)}}const lt=document.querySelector("#app");Se();ot(lt);
