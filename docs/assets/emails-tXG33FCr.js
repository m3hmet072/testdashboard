import{d as z,c as W}from"./theme-DhME38Lo.js";/* empty css                      */import{e as Y,a as F,c as _,l as Z,p as J,w as Q,x as K,q as X,b as ee,s as te,y as ae,t as I,g as y,f as C}from"./branding-BojcsMHH.js";import{n as H,f as ne}from"./rdwService-CFrMDQAa.js";import{s as se}from"./confirmDialog-DSEC2-zx.js";import{h as ie,n as T,a as re,f as oe,s as ce,b as O}from"./scheduleTimePicker-q1IARKz3.js";const le=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function de(){const e=new Date,a=e.getMinutes()<30?30:60;return e.setMinutes(a,0,0),a===60&&e.setHours(e.getHours()+1,0,0,0),e}function u(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ue(e=""){return{title:H(e)||"Unknown vehicle",buildYear:""}}function R(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function A(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function pe(e){const t=A(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function me(e){const t=A(e);if(!t)return"";const a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}-${o}-${n}`}function ge(e){const t=A(e);if(!t)return"09:00";const a=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0");return`${a}:${o}`}function he(e,t){const a=String(e??"").trim(),o=String(t??"").trim();if(!a||!o)return"";const n=`${a}T${o}:00`;return A(n)?n:""}function fe(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function be(e){const t=String((e==null?void 0:e.appointmentAt)??"").trim(),a=String((e==null?void 0:e.receivedAt)??"").trim();return t&&a&&t!==a?t:de().toISOString()}const V="Manual appointment created in dashboard.";function j(e){const a=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((a==null?void 0:a[1])??"").trim()}function ve(e){const t=T(e),[a,o]=t.split(":"),n=Number(a),S=Number(o);if(!Number.isFinite(n)||!Number.isFinite(S))return"01:00";const l=new Date(2e3,0,1,n,S,0,0);return l.setHours(l.getHours()+1),`${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`}function Se(e,t){const a=T(t);return`${String(e??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${a}`.trim()}function $e(e){const t=String(e??"").trim(),a=t.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim();return a||(t.toLowerCase().includes(V.toLowerCase())?V:"No message content.")}function we(e){const t=pe((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.receivedAt)),a=j(e==null?void 0:e.message);return a?`${t} - ${a}`:t}function ke(e){const t=String(e??"").trim();if(!t)return["other"];const a=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(o=>o.trim()).filter(Boolean);return a.length?a:[t]}function Le(e){return le.get(String(e??"").trim().toLowerCase())??"other"}function qe(e){const t=String(e??"").trim(),a=y();if(!t)return{key:"other",label:C("other",a)};const o=t.toLowerCase(),n=Le(t);if(n==="other"){if(["other","overig","overige"].includes(o))return{key:n,label:C("other",a)};const S=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:n,label:S||t}}return{key:n,label:C(n,a)}}function Te(e){return ke(e).map(t=>{const{key:a,label:o}=qe(t);return`<span class="service-chip service-chip-${a}">${u(o)}</span>`}).join("")}function Ee(e,t,a,o){return e.length?e.map((n,S)=>{const l=String(n.id??""),i=t===l,r=a===l,p=be(n),L=String(n.licensePlate??"").toUpperCase()==="UNKNOWN",M=u(n.color??"#2563EB"),q=u(n.licensePlate&&n.licensePlate!=="UNKNOWN"?R(n.licensePlate):"UNKNOWN"),v=n.licensePlate?R(n.licensePlate):"UNKNOWN",E=u(String(n.senderName??v)),c=n.licensePlate?H(n.licensePlate):"",g=o.get(c)||ue(n.licensePlate),k=g.buildYear?`${g.title} (${g.buildYear})`:g.title,s=u(we(n)),m=re(me(p)),P=u(m),h=u(oe(m)),d=T(ge(p)),N=u(d),f=T(j(n.message)||ve(d)),w=u(f),b=u(String(n.phone??"No phone number")),x=u($e(n.message));return`
        <article class="request-card ${i?"is-expanded":""}" data-email-card-id="${u(l)}">
          <div class="request-card-head">
            <div class="request-main">
              ${L?`<span class="fast-appt-dot" style="background: ${M}" aria-hidden="true"></span>`:`<span class="plate-chip">${q}</span>`}
              <div class="request-info">
                <p class="request-name">${E}</p>
                ${L?"":`<p class="request-vehicle">${k}</p>`}
                <div class="request-services">
                  <span class="service-chip service-chip-new" style="color:white;">New</span>
                  ${Te(n.service)}
                </div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${s}</span>
              <button
                class="request-toggle ${i?"is-expanded":""}"
                type="button"
                data-email-toggle="${u(l)}"
                aria-expanded="${i?"true":"false"}"
                aria-label="${i?"Collapse email details":"Expand email details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          ${i?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${z("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${b}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${z("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${x}</span>
                </div>
              </div>

              <div class="request-actions">
                ${r?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${P}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${h}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${ce(m)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${I("fastFrom",y())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${N}" />
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
                          ${O(d)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${I("fastTo",y())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${w}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${w}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${O(f)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-email-action="save-schedule" data-email-id="${u(l)}">Save & Schedule</button>
                    <button class="button subtle" type="button" data-email-action="cancel-edit" data-email-id="${u(l)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-email-action="edit" data-email-id="${u(l)}" aria-label="Edit email schedule" style="gap: 8px;">✎ <span>Schedule</span></button>
                ${r?"":`<button class="button danger" type="button" data-email-action="delete" data-email-id="${u(l)}">Delete</button>`}
              </div>
            </div>
          `:""}
        </article>
      `}).join(""):`<article class="request-card"><p class="muted">${I("noEmailsInInbox",y())}</p></article>`}async function xe(e){var E;if(!e)return;const t=await Y();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}F(t.activeGarage);const a=t.isAdmin?null:[(E=t.activeGarage)==null?void 0:E.id].filter(Boolean),{shell:o,contentArea:n,setUnreadEmailCount:S}=_({activePage:"emails",title:"E-mails",headerNote:"Incoming contact form requests",userEmail:t.user.email,onLogout:Z,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(o),n.innerHTML=`
    <section class="panel request-board">
      <div id="emailList" class="request-list"></div>
    </section>
  `;const l=n.querySelector("#emailList");let i=[],r="",p="";const L=new Map,M=new URLSearchParams(window.location.search),q=String(M.get("emailId")??"").trim(),v=()=>{if(p&&!i.some(c=>String(c.id)===p)&&(p=""),r&&!i.some(c=>String(c.id)===r)&&(r=""),l.innerHTML=Ee(i,r,p,L),S(i.length),r){const c=l.querySelector(`[data-email-card-id="${CSS.escape(r)}"]`);c instanceof HTMLElement&&(c.classList.remove("search-target-highlight"),c.offsetWidth,c.classList.add("search-target-highlight"))}};n.addEventListener("click",async c=>{const g=c.target instanceof Element?c.target:null;if(!g||ie(n,g))return;const k=g.closest("[data-email-card-id]"),s=g.closest("[data-email-action]"),m=g.closest("[data-email-toggle]");if(g.closest("#emailList")instanceof HTMLElement&&!(k instanceof HTMLElement)&&!(s instanceof HTMLElement)&&!(m instanceof HTMLElement)){r="",p="",v();return}if(m instanceof HTMLElement){const h=String(m.dataset.emailToggle??"");r=r===h?"":h,r!==h&&(p=""),v();return}if(s instanceof HTMLElement){const h=String(s.dataset.emailAction??""),d=String(s.dataset.emailId??"");if(!i.some(f=>String(f.id)===d))return;if(h==="edit"){r=d,p=p===d?"":d,v();return}if(h==="cancel-edit"){p="",v();return}if(h==="save-schedule"){const f=i.find($=>String($.id)===d);if(!f)return;const w=s.closest("[data-email-card-id]");if(!(w instanceof HTMLElement))return;const b=w.querySelector("[data-schedule-edit-date]"),x=w.querySelector("[data-schedule-edit-start-time]"),U=w.querySelector("[data-schedule-edit-end-time]");if(!(b instanceof HTMLInputElement)||!(x instanceof HTMLInputElement)||!(U instanceof HTMLInputElement))return;const D=he(b.value,x.value),G=T(U.value);if(!D){window.alert("Choose both a date and time before saving.");return}const B={...f,message:Se(f.message,G)};try{await J(B,D)}catch($){window.alert($ instanceof Error?$.message:"Unable to save the appointment schedule.");return}i=i.map($=>String($.id)===d?B:$),Q(d),K(d),i=i.filter($=>String($.id)!==d),p="",r="",v();return}if(h==="delete"){const f=i.find(b=>String(b.id)===d);if(!f||!await se("Are you sure you want to delete this email? This action cannot be undone.","Delete Email"))return;try{await X(f)}catch(b){window.alert(b instanceof Error?b.message:"Unable to delete the email.");return}K(d),i=i.filter(b=>String(b.id)!==d),p="",r=r===d?"":r,v()}return}if(k instanceof HTMLElement&&!fe(g)){const h=String(k.dataset.emailCardId??"");r=r===h?"":h,r!==h&&(p=""),v()}});try{const c=await ee({garageIds:a}),g=te(c);S(g.unread),i=ae(c).map(s=>({...s,read:!1})).sort((s,m)=>new Date(m.receivedAt??m.appointmentAt).getTime()-new Date(s.receivedAt??s.appointmentAt).getTime());const k=new Set(i.map(s=>s.licensePlate).filter(s=>s&&s!=="UNKNOWN").map(s=>H(s)));for(const s of k)if(s&&!L.has(s))try{const m=await ne(s);m&&L.set(s,m)}catch(m){console.error(`Failed to fetch vehicle for ${s}:`,m)}r=q&&i.some(s=>String(s.id)===q)?q:"",v()}catch(c){l.innerHTML='<article class="request-card"><p class="muted">Unable to load e-mails.</p></article>',S(0),console.error(c)}}const ye=document.querySelector("#app");W();xe(ye);
