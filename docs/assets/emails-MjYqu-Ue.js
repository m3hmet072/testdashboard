import{d as z,c as Y}from"./theme-C7qkBi-i.js";/* empty css                      */import{e as j,a as F,c as _,l as Z,p as J,w as Q,x as R,o as X,b as ee,s as te,y as ae,t as C,g as y,f as H}from"./branding-CAr728QY.js";import{h as ne,n as E,r as ie,a as se,f as re,b as oe,s as ce,c as K}from"./requestCard-Ckf8MfSD.js";import{n as P,f as le}from"./rdwService-CFrMDQAa.js";import{s as de}from"./confirmDialog-DSEC2-zx.js";const ue=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function pe(){const e=new Date,n=e.getMinutes()<30?30:60;return e.setMinutes(n,0,0),n===60&&e.setHours(e.getHours()+1,0,0,0),e}function u(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function me(e=""){return{title:P(e)||"Unknown vehicle",buildYear:""}}function O(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function q(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function ge(e){const t=q(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function he(e){const t=q(e);if(!t)return"";const n=t.getFullYear(),c=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${n}-${c}-${a}`}function fe(e){const t=q(e);if(!t)return"09:00";const n=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0");return`${n}:${c}`}function be(e,t){const n=String(e??"").trim(),c=String(t??"").trim();if(!n||!c)return"";const a=`${n}T${c}:00`;return q(a)?a:""}function ve(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function Se(e){const t=String((e==null?void 0:e.appointmentAt)??"").trim(),n=String((e==null?void 0:e.receivedAt)??"").trim();return t&&n&&t!==n?t:pe().toISOString()}const V="Manual appointment created in dashboard.";function ke(e){const n=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((n==null?void 0:n[1])??"").trim()}function we(e){const t=E(e),[n,c]=t.split(":"),a=Number(n),S=Number(c);if(!Number.isFinite(a)||!Number.isFinite(S))return"01:00";const l=new Date(2e3,0,1,a,S,0,0);return l.setHours(l.getHours()+1),`${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`}function Le(e,t){const n=E(t);return`${String(e??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${n}`.trim()}function Te(e){const t=String(e??"").trim(),n=t.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim();return n||(t.toLowerCase().includes(V.toLowerCase())?V:"No message content.")}function G(e){return ge((e==null?void 0:e.receivedAt)??(e==null?void 0:e.appointmentAt))}function $e(e){const t=String(e??"").trim();if(!t)return["other"];const n=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(c=>c.trim()).filter(Boolean);return n.length?n:[t]}function Ee(e){return ue.get(String(e??"").trim().toLowerCase())??"other"}function Ae(e){const t=String(e??"").trim(),n=y();if(!t)return{key:"other",label:H("other",n)};const c=t.toLowerCase(),a=Ee(t);if(a==="other"){if(["other","overig","overige"].includes(c))return{key:a,label:H("other",n)};const S=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:a,label:S||t}}return{key:a,label:H(a,n)}}function Me(e){return $e(e).map(t=>{const{key:n,label:c}=Ae(t);return`<span class="service-chip service-chip-${n}">${u(c)}</span>`}).join("")}function xe(e,t,n,c){return e.length?e.map((a,S)=>{const l=String(a.id??""),o=t===l,s=n===l,p=Se(a),T=String(a.licensePlate??"").toUpperCase()==="UNKNOWN",N=u(a.color??"#2563EB"),$=u(a.licensePlate&&a.licensePlate!=="UNKNOWN"?O(a.licensePlate):"UNKNOWN"),h=a.licensePlate?O(a.licensePlate):"UNKNOWN";u(String(a.senderName??h));const A=a.licensePlate?P(a.licensePlate):"",r=c.get(A)||me(a.licensePlate),f=r.buildYear?`${r.title} (${r.buildYear})`:r.title;u(G(a));const k=se(he(p)),i=u(k),g=u(re(k)),M=E(fe(p)),m=u(M),d=E(ke(a.message)||we(M)),I=u(d),v=u(String(a.phone??"No phone number")),L=u(Te(a.message)),b=T?`<span class="fast-appt-dot" style="background: ${N}" aria-hidden="true"></span>`:`<span class="plate-chip">${$}</span>`,x=oe({leadMarkup:b,name:String(a.senderName??h),vehicle:T?"":f,servicesMarkup:`<span class="service-chip service-chip-new">New</span>${Me(a.service)}`,timeLabel:G(a),timePrefix:"Received at, ",isExpanded:o,toggleDataAttribute:"data-email-toggle",toggleId:l,expandAriaLabel:"Expand email details",collapseAriaLabel:"Collapse email details"});return`
        <article class="request-card ${o?"is-expanded":""}" data-email-card-id="${u(l)}">
          ${x}

          ${o?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${z("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${v}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${z("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${L}</span>
                </div>
              </div>

              <div class="request-actions">
                ${s?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${i}" />
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
                          ${ce(k)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${C("fastFrom",y())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${m}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${m}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${K(M)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${C("fastTo",y())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${I}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${I}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${K(d)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-email-action="save-schedule" data-email-id="${u(l)}">Save & Schedule</button>
                    <button class="button subtle" type="button" data-email-action="cancel-edit" data-email-id="${u(l)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-email-action="edit" data-email-id="${u(l)}" aria-label="Edit email schedule" style="gap: 8px;">✎ <span>Schedule</span></button>
                ${s?"":`<button class="button danger" type="button" data-email-action="delete" data-email-id="${u(l)}">Delete</button>`}
              </div>
            </div>
          `:""}
        </article>
      `}).join(""):ie(C("noEmailsInInbox",y()))}async function ye(e){var A;if(!e)return;const t=await j();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}F(t.activeGarage);const n=t.isAdmin?null:[(A=t.activeGarage)==null?void 0:A.id].filter(Boolean),{shell:c,contentArea:a,setUnreadEmailCount:S}=_({activePage:"emails",title:"E-mails",headerNote:"Incoming contact form requests",userEmail:t.user.email,onLogout:Z,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(c),a.innerHTML=`
    <section class="panel request-board">
      <div id="emailList" class="request-list"></div>
    </section>
  `;const l=a.querySelector("#emailList");let o=[],s="",p="";const T=new Map,N=new URLSearchParams(window.location.search),$=String(N.get("emailId")??"").trim(),h=()=>{if(p&&!o.some(r=>String(r.id)===p)&&(p=""),s&&!o.some(r=>String(r.id)===s)&&(s=""),l.innerHTML=xe(o,s,p,T),S(o.length),s){const r=l.querySelector(`[data-email-card-id="${CSS.escape(s)}"]`);r instanceof HTMLElement&&(r.classList.remove("search-target-highlight"),r.offsetWidth,r.classList.add("search-target-highlight"))}};a.addEventListener("click",async r=>{const f=r.target instanceof Element?r.target:null;if(!f||ne(a,f))return;const k=f.closest("[data-email-card-id]"),i=f.closest("[data-email-action]"),g=f.closest("[data-email-toggle]");if(f.closest("#emailList")instanceof HTMLElement&&!(k instanceof HTMLElement)&&!(i instanceof HTMLElement)&&!(g instanceof HTMLElement)){s="",p="",h();return}if(g instanceof HTMLElement){const m=String(g.dataset.emailToggle??"");s=s===m?"":m,s!==m&&(p=""),h();return}if(i instanceof HTMLElement){const m=String(i.dataset.emailAction??""),d=String(i.dataset.emailId??"");if(!o.some(v=>String(v.id)===d))return;if(m==="edit"){s=d,p=p===d?"":d,h();return}if(m==="cancel-edit"){p="",h();return}if(m==="save-schedule"){const v=o.find(w=>String(w.id)===d);if(!v)return;const L=i.closest("[data-email-card-id]");if(!(L instanceof HTMLElement))return;const b=L.querySelector("[data-schedule-edit-date]"),x=L.querySelector("[data-schedule-edit-start-time]"),U=L.querySelector("[data-schedule-edit-end-time]");if(!(b instanceof HTMLInputElement)||!(x instanceof HTMLInputElement)||!(U instanceof HTMLInputElement))return;const D=be(b.value,x.value),W=E(U.value);if(!D){window.alert("Choose both a date and time before saving.");return}const B={...v,message:Le(v.message,W)};try{await J(B,D)}catch(w){window.alert(w instanceof Error?w.message:"Unable to save the appointment schedule.");return}o=o.map(w=>String(w.id)===d?B:w),Q(d),R(d),o=o.filter(w=>String(w.id)!==d),p="",s="",h();return}if(m==="delete"){const v=o.find(b=>String(b.id)===d);if(!v||!await de("Are you sure you want to delete this email? This action cannot be undone.","Delete Email"))return;try{await X(v)}catch(b){window.alert(b instanceof Error?b.message:"Unable to delete the email.");return}R(d),o=o.filter(b=>String(b.id)!==d),p="",s=s===d?"":s,h()}return}if(k instanceof HTMLElement&&!ve(f)){const m=String(k.dataset.emailCardId??"");s=s===m?"":m,s!==m&&(p=""),h()}});try{const r=await ee({garageIds:n}),f=te(r);S(f.unread),o=ae(r).map(i=>({...i,read:!1})).sort((i,g)=>new Date(g.receivedAt??g.appointmentAt).getTime()-new Date(i.receivedAt??i.appointmentAt).getTime());const k=new Set(o.map(i=>i.licensePlate).filter(i=>i&&i!=="UNKNOWN").map(i=>P(i)));for(const i of k)if(i&&!T.has(i))try{const g=await le(i);g&&T.set(i,g)}catch(g){console.error(`Failed to fetch vehicle for ${i}:`,g)}s=$&&o.some(i=>String(i.id)===$)?$:"",h()}catch(r){l.innerHTML='<article class="request-card"><p class="muted">Unable to load e-mails.</p></article>',S(0),console.error(r)}}const qe=document.querySelector("#app");Y();ye(qe);
