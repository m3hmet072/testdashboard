import{n as F,r as G}from"./theme-DNexrY8-.js";/* empty css                      */import{n as Y,r as R,t as Z,b as z,K as V,G as X,d as W,U as J,e as Q,a as _,f as ee,N as C,x as E,W as P}from"./branding-DRG9Zl5n.js";import{G as te,H as y,x as ae,K as ne,W as ie,Z as se,z as K,U as re}from"./requestCard-CqIap2Dn.js";import{h as I,p as oe}from"./rdwService-B_7TgNhE.js";import{m as le}from"./confirmDialog-DOdHvhLG.js";const ce=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function de(){const e=new Date,t=e.getMinutes()<30?30:60;return e.setMinutes(t,0,0),t===60&&e.setHours(e.getHours()+1,0,0,0),e}function u(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ue(e=""){return{title:I(e)||"Unknown vehicle",buildYear:""}}function B(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function T(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function pe(e){const t=T(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function me(e){const t=T(e);if(!t)return"";const a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0");return`${a}-${o}-${l}`}function ge(e){const t=T(e);if(!t)return"09:00";const a=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0");return`${a}:${o}`}function he(e,t){const a=String(e??"").trim(),o=String(t??"").trim();if(!a||!o)return"";const l=`${a}T${o}:00`;return T(l)?l:""}function fe(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function be(e){const t=String((e==null?void 0:e.appointmentAt)??"").trim(),a=String((e==null?void 0:e.receivedAt)??"").trim();return t&&a&&t!==a?t:de().toISOString()}const O="Manual appointment created in dashboard.";function ve(e){const t=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((t==null?void 0:t[1])??"").trim()}function Se(e){const t=y(e),[a,o]=t.split(":"),l=Number(a),n=Number(o);if(!Number.isFinite(l)||!Number.isFinite(n))return"01:00";const $=new Date(2e3,0,1,l,n,0,0);return $.setHours($.getHours()+1),`${String($.getHours()).padStart(2,"0")}:${String($.getMinutes()).padStart(2,"0")}`}function $e(e,t){const a=y(t);return`${String(e??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${a}`.trim()}function Le(e){const t=String(e??"").trim();return t.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()||(t.toLowerCase().includes(O.toLowerCase())?O:"No message content.")}function j(e){return pe((e==null?void 0:e.receivedAt)??(e==null?void 0:e.appointmentAt))}function ke(e){const t=String(e??"").trim();if(!t)return["other"];const a=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(o=>o.trim()).filter(Boolean);return a.length?a:[t]}function we(e){return ce.get(String(e??"").trim().toLowerCase())??"other"}function qe(e){const t=String(e??"").trim(),a=E();if(!t)return{key:"other",label:P("other",a)};const o=t.toLowerCase(),l=we(t);if(l==="other"){if(["other","overig","overige"].includes(o))return{key:l,label:P("other",a)};const n=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:l,label:n||t}}return{key:l,label:P(l,a)}}function xe(e){return ke(e).map(t=>{const{key:a,label:o}=qe(t);return`<span class="service-chip service-chip-${a}">${u(o)}</span>`}).join("")}function ye(e,t,a,o,l){return e.length?e.map((n,$)=>{const b=String(n.id??""),r=t===b,s=a===b,p=be(n),w=String(n.licensePlate??"").toUpperCase()==="UNKNOWN",H=u(n.color??"#2563EB"),q=u(n.licensePlate&&n.licensePlate!=="UNKNOWN"?B(n.licensePlate):"UNKNOWN"),v=n.licensePlate?B(n.licensePlate):"UNKNOWN";u(String(n.senderName??v));const c=n.licensePlate?I(n.licensePlate):"",m=o.get(c)||ue(n.licensePlate),k=m.buildYear?`${m.title} (${m.buildYear})`:m.title;u(j(n));const i=ae(me(p)),f=u(i),g=u(ne(i)),d=y(ge(p)),S=u(d),h=y(ve(n.message)||Se(d)),x=u(h),M=u(String(n.phone??"No phone number")),N=u(Le(n.message)),A=w?`<span class="fast-appt-dot" style="background: ${H}" aria-hidden="true"></span>`:`<span class="plate-chip">${q}</span>`,U=ie({leadMarkup:A,name:String(n.senderName??v),vehicle:w?"":k,servicesMarkup:`<span class="service-chip service-chip-new">New</span>${xe(n.service)}`,timeLabel:j(n),timePrefix:"Received at, ",isExpanded:r,toggleDataAttribute:"data-email-toggle",toggleId:b,expandAriaLabel:"Expand email details",collapseAriaLabel:"Collapse email details"});return`
        <article class="request-card ${r?"is-expanded":""}" data-email-card-id="${u(b)}">
          ${U}

          ${r?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${G("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${M}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${G("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${N}</span>
                </div>
              </div>

              <div class="request-actions">
                ${s?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${f}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${g}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${se(i)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${C("fastFrom",E())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${S}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${S}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${K(d,l)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${C("fastTo",E())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${x}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${x}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${K(h,l)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-email-action="save-schedule" data-email-id="${u(b)}">Save & Schedule</button>
                    <button class="button subtle" type="button" data-email-action="cancel-edit" data-email-id="${u(b)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-email-action="edit" data-email-id="${u(b)}" aria-label="Edit email schedule" style="gap: 8px;">✎ <span>Schedule</span></button>
                ${s?"":`<button class="button danger" type="button" data-email-action="delete" data-email-id="${u(b)}">Delete</button>`}
              </div>
            </div>
          `:""}
        </article>
      `}).join(""):re(C("noEmailsInInbox",E()))}async function Me(e){var t;if(!e)return;const a=await Y();if(!a)return;if(!a.isAdmin&&!a.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}R(a.activeGarage);const o=a.isAdmin?null:[(t=a.activeGarage)==null?void 0:t.id].filter(Boolean),{shell:l,contentArea:n,setUnreadEmailCount:$}=Z({activePage:"emails",title:"E-mails",headerNote:"Incoming contact form requests",userEmail:a.user.email,onLogout:z,garage:a.activeGarage,isAdmin:a.isAdmin});e.replaceChildren(l),n.innerHTML=`
    <section class="panel request-board">
      <div id="emailList" class="request-list"></div>
    </section>
  `;const b=n.querySelector("#emailList");let r=[],s="",p="";const w=new Map,H=new URLSearchParams(window.location.search),q=String(H.get("emailId")??"").trim(),v=()=>{if(p&&!r.some(c=>String(c.id)===p)&&(p=""),s&&!r.some(c=>String(c.id)===s)&&(s=""),b.innerHTML=ye(r,s,p,w,a.activeGarage),$(r.length),s){const c=b.querySelector(`[data-email-card-id="${CSS.escape(s)}"]`);c instanceof HTMLElement&&(c.classList.remove("search-target-highlight"),c.offsetWidth,c.classList.add("search-target-highlight"))}};n.addEventListener("click",async c=>{const m=c.target instanceof Element?c.target:null;if(!m||te(n,m))return;const k=m.closest("[data-email-card-id]"),i=m.closest("[data-email-action]"),f=m.closest("[data-email-toggle]");if(m.closest("#emailList")instanceof HTMLElement&&!(k instanceof HTMLElement)&&!(i instanceof HTMLElement)&&!(f instanceof HTMLElement)){s="",p="",v();return}if(f instanceof HTMLElement){const g=String(f.dataset.emailToggle??"");s=s===g?"":g,s!==g&&(p=""),v();return}if(i instanceof HTMLElement){const g=String(i.dataset.emailAction??""),d=String(i.dataset.emailId??"");if(!r.some(S=>String(S.id)===d))return;if(g==="edit"){s=d,p=p===d?"":d,v();return}if(g==="cancel-edit"){p="",v();return}if(g==="save-schedule"){const S=r.find(L=>String(L.id)===d);if(!S)return;const h=i.closest("[data-email-card-id]");if(!(h instanceof HTMLElement))return;const x=h.querySelector("[data-schedule-edit-date]"),M=h.querySelector("[data-schedule-edit-start-time]"),N=h.querySelector("[data-schedule-edit-end-time]");if(!(x instanceof HTMLInputElement)||!(M instanceof HTMLInputElement)||!(N instanceof HTMLInputElement))return;const A=he(x.value,M.value),U=y(N.value);if(!A){window.alert("Choose both a date and time before saving.");return}const D={...S,message:$e(S.message,U)};try{await V(D,A)}catch(L){window.alert(L instanceof Error?L.message:"Unable to save the appointment schedule.");return}r=r.map(L=>String(L.id)===d?D:L),X(d),W(d),r=r.filter(L=>String(L.id)!==d),p="",s="",v();return}if(g==="delete"){const S=r.find(h=>String(h.id)===d);if(!S||!await le("Are you sure you want to delete this email? This action cannot be undone.","Delete Email"))return;try{await J(S)}catch(h){window.alert(h instanceof Error?h.message:"Unable to delete the email.");return}W(d),r=r.filter(h=>String(h.id)!==d),p="",s=s===d?"":s,v()}return}if(k instanceof HTMLElement&&!fe(m)){const g=String(k.dataset.emailCardId??"");s=s===g?"":g,s!==g&&(p=""),v()}});try{const c=await Q({garageIds:o}),m=_(c);$(m.unread),r=ee(c).map(i=>({...i,read:!1})).sort((i,f)=>new Date(f.receivedAt??f.appointmentAt).getTime()-new Date(i.receivedAt??i.appointmentAt).getTime());const k=new Set(r.map(i=>i.licensePlate).filter(i=>i&&i!=="UNKNOWN").map(i=>I(i)));for(const i of k)if(i&&!w.has(i))try{const f=await oe(i);f&&w.set(i,f)}catch(f){console.error(`Failed to fetch vehicle for ${i}:`,f)}s=q&&r.some(i=>String(i.id)===q)?q:"",v()}catch(c){b.innerHTML='<article class="request-card"><p class="muted">Unable to load e-mails.</p></article>',$(0),console.error(c)}}const Ne=document.querySelector("#app");F();Me(Ne);
