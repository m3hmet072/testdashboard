import{d as H,c as D}from"./theme-Bb-bjqwO.js";/* empty css                      */import{e as N,a as B,c as U,l as V,p as z,n as O,o as P,d as K,g as Y,s as G,q as j}from"./branding-BytcG8ls.js";import{n as M,f as R}from"./rdwService-CFrMDQAa.js";import{s as W}from"./confirmDialog-DSEC2-zx.js";import{h as _,n as F,f as Z,a as J,s as Q,b as X}from"./scheduleTimePicker-zgpyiEd6.js";const y={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},ee=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function te(){const t=new Date,i=t.getMinutes()<30?30:60;return t.setMinutes(i,0,0),i===60&&t.setHours(t.getHours()+1,0,0,0),t}function d(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ae(t=""){return{title:M(t)||"Unknown vehicle",buildYear:""}}function ne(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function A(t){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function ie(t){const e=A(t);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function se(t){const e=A(t);if(!e)return"";const i=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${i}-${r}-${n}`}function re(t){const e=A(t);if(!e)return"09:00";const i=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return`${i}:${r}`}function oe(t,e){const i=String(t??"").trim(),r=String(e??"").trim();if(!i||!r)return"";const n=`${i}T${r}:00`;return A(n)?n:""}function ce(t){return t instanceof Element&&!!t.closest("button, input, select, textarea, a, label")}function le(t){const e=String((t==null?void 0:t.appointmentAt)??"").trim(),i=String((t==null?void 0:t.receivedAt)??"").trim();return e&&i&&e!==i?e:te().toISOString()}function de(t){const e=String(t??"").trim();if(!e)return["other"];const i=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(r=>r.trim()).filter(Boolean);return i.length?i:[e]}function ue(t){return ee.get(String(t??"").trim().toLowerCase())??"other"}function pe(t){const e=String(t??"").trim();if(!e)return{key:"other",label:y.other};const i=e.toLowerCase(),r=ue(e);if(r==="other"){if(["other","overig","overige"].includes(i))return{key:r,label:y.other};const n=e.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:r,label:n||e}}return{key:r,label:y[r]??e}}function me(t){return de(t).map(e=>{const{key:i,label:r}=pe(e);return`<span class="service-chip service-chip-${i}">${d(r)}</span>`}).join("")}function ge(t,e,i,r){return t.length?t.map((n,$)=>{const f=String(n.id??""),o=e===f,s=i===f,l=le(n),L=d(n.licensePlate&&n.licensePlate!=="UNKNOWN"?ne(n.licensePlate):"UNKNOWN"),T=d(String(n.senderName??"Website visitor")),q=n.licensePlate?M(n.licensePlate):"",g=r.get(q)||ae(n.licensePlate),w=g.buildYear?`${g.title} (${g.buildYear})`:g.title,c=d(ie(n.appointmentAt??n.receivedAt)),h=F(se(l)),b=d(h),a=d(Z(h)),u=J(re(l)),x=d(u),p=d(String(n.phone??"No phone number")),m=d(String(n.message??"No message content."));return`
        <article class="request-card ${o?"is-expanded":""}" data-email-card-id="${d(f)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${L}</span>
              <div class="request-info">
                <p class="request-name">${T}</p>
                <p class="request-vehicle">${w}</p>
                <div class="request-services">
                  <span class="service-chip service-chip-new" style="color:white;">New</span>
                  ${me(n.service)}
                </div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${c}</span>
              <button
                class="request-toggle ${o?"is-expanded":""}"
                type="button"
                data-email-toggle="${d(f)}"
                aria-expanded="${o?"true":"false"}"
                aria-label="${o?"Collapse email details":"Expand email details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          ${o?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${H("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${p}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${H("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${m}</span>
                </div>
              </div>

              <div class="request-actions">
                ${s?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${b}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${a}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${Q(h)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Time</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${x}" />
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
                          ${X(u)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-email-action="save-schedule" data-email-id="${d(f)}">Save & Schedule</button>
                    <button class="button subtle" type="button" data-email-action="cancel-edit" data-email-id="${d(f)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-email-action="edit" data-email-id="${d(f)}" aria-label="Edit email schedule" style="gap: 8px;">✎ <span>Schedule</span></button>
                ${s?"":`<button class="button danger" type="button" data-email-action="delete" data-email-id="${d(f)}">Delete</button>`}
              </div>
            </div>
          `:""}
        </article>
      `}).join(""):'<article class="request-card"><p class="muted">No e-mails in inbox.</p></article>'}async function he(t){var w;if(!t)return;const e=await N();if(!e)return;if(!e.isAdmin&&!e.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}B(e.activeGarage);const i=e.isAdmin?null:[(w=e.activeGarage)==null?void 0:w.id].filter(Boolean),{shell:r,contentArea:n,setUnreadEmailCount:$}=U({activePage:"emails",title:"E-mails",headerNote:"Incoming contact form requests",userEmail:e.user.email,onLogout:V,garage:e.activeGarage,isAdmin:e.isAdmin});t.replaceChildren(r),n.innerHTML=`
    <section class="panel request-board">
      <div id="emailList" class="request-list"></div>
    </section>
  `;const f=n.querySelector("#emailList");let o=[],s="",l="";const L=new Map,T=new URLSearchParams(window.location.search),q=String(T.get("emailId")??"").trim(),g=()=>{if(l&&!o.some(c=>String(c.id)===l)&&(l=""),s&&!o.some(c=>String(c.id)===s)&&(s=""),f.innerHTML=ge(o,s,l,L),$(o.length),s){const c=f.querySelector(`[data-email-card-id="${CSS.escape(s)}"]`);c instanceof HTMLElement&&(c.classList.remove("search-target-highlight"),c.offsetWidth,c.classList.add("search-target-highlight"))}};n.addEventListener("click",async c=>{const h=c.target instanceof Element?c.target:null;if(!h||_(n,h))return;const b=h.closest("[data-email-card-id]"),a=h.closest("[data-email-action]"),u=h.closest("[data-email-toggle]");if(h.closest("#emailList")instanceof HTMLElement&&!(b instanceof HTMLElement)&&!(a instanceof HTMLElement)&&!(u instanceof HTMLElement)){s="",l="",g();return}if(u instanceof HTMLElement){const p=String(u.dataset.emailToggle??"");s=s===p?"":p,s!==p&&(l=""),g();return}if(a instanceof HTMLElement){const p=String(a.dataset.emailAction??""),m=String(a.dataset.emailId??"");if(!o.some(S=>String(S.id)===m))return;if(p==="edit"){s=m,l=l===m?"":m,g();return}if(p==="cancel-edit"){l="",g();return}if(p==="save-schedule"){const S=o.find(k=>String(k.id)===m);if(!S)return;const E=a.closest("[data-email-card-id]");if(!(E instanceof HTMLElement))return;const v=E.querySelector("[data-schedule-edit-date]"),I=E.querySelector("[data-schedule-edit-time]");if(!(v instanceof HTMLInputElement)||!(I instanceof HTMLInputElement))return;const C=oe(v.value,I.value);if(!C){window.alert("Choose both a date and time before saving.");return}try{await z(S,C)}catch(k){window.alert(k instanceof Error?k.message:"Unable to save the appointment schedule.");return}O(m),P(m),o=o.filter(k=>String(k.id)!==m),l="",s="",g();return}if(p==="delete"){const S=o.find(v=>String(v.id)===m);if(!S||!await W("Are you sure you want to delete this email? This action cannot be undone.","Delete Email"))return;try{await K(S)}catch(v){window.alert(v instanceof Error?v.message:"Unable to delete the email.");return}P(m),o=o.filter(v=>String(v.id)!==m),l="",s=s===m?"":s,g()}return}if(b instanceof HTMLElement&&!ce(h)){const p=String(b.dataset.emailCardId??"");s=s===p?"":p,s!==p&&(l=""),g()}});try{const c=await Y({garageIds:i}),h=G(c);$(h.unread),o=j(c).map(a=>({...a,read:!1})).sort((a,u)=>new Date(u.receivedAt??u.appointmentAt).getTime()-new Date(a.receivedAt??a.appointmentAt).getTime());const b=new Set(o.map(a=>a.licensePlate).filter(a=>a&&a!=="UNKNOWN").map(a=>M(a)));for(const a of b)if(a&&!L.has(a))try{const u=await R(a);u&&L.set(a,u)}catch(u){console.error(`Failed to fetch vehicle for ${a}:`,u)}s=q&&o.some(a=>String(a.id)===q)?q:"",g()}catch(c){f.innerHTML='<article class="request-card"><p class="muted">Unable to load e-mails.</p></article>',$(0),console.error(c)}}const fe=document.querySelector("#app");D();he(fe);
