import{d as H,c as D}from"./theme-C3aD1XeO.js";/* empty css                      */import{e as N,a as B,c as U,l as V,p as O,n as z,o as P,d as K,g as Y,s as G,q as j}from"./branding-CB7Fbo0p.js";import{n as y,f as R}from"./rdwService-CFrMDQAa.js";import{s as W}from"./confirmDialog-DSEC2-zx.js";import{h as _,n as F,f as Z,a as J,s as Q,b as X}from"./scheduleTimePicker-zgpyiEd6.js";const C={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},ee=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function te(){const e=new Date,r=e.getMinutes()<30?30:60;return e.setMinutes(r,0,0),r===60&&e.setHours(e.getHours()+1,0,0,0),e}function l(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ae(e=""){return{title:y(e)||"Unknown vehicle",buildYear:""}}function ne(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function A(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function ie(e){const t=A(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function se(e){const t=A(e);if(!t)return"";const r=t.getFullYear(),d=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${r}-${d}-${n}`}function re(e){const t=A(e);if(!t)return"09:00";const r=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0");return`${r}:${d}`}function oe(e,t){const r=String(e??"").trim(),d=String(t??"").trim();if(!r||!d)return"";const n=`${r}T${d}:00`;return A(n)?n:""}function ce(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function le(e){const t=String((e==null?void 0:e.appointmentAt)??"").trim(),r=String((e==null?void 0:e.receivedAt)??"").trim();return t&&r&&t!==r?t:te().toISOString()}function de(e){const t=String(e??"").trim();if(!t)return["other"];const r=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(d=>d.trim()).filter(Boolean);return r.length?r:[t]}function ue(e){return ee.get(String(e??"").trim().toLowerCase())??"other"}function pe(e){return de(e).map(t=>{const r=ue(t),d=C[r]??C.other;return`<span class="service-chip service-chip-${r}">${l(d)}</span>`}).join("")}function me(e,t,r,d){return e.length?e.map((n,$)=>{const f=String(n.id??""),i=t===f,s=r===f,c=le(n),L=l(n.licensePlate&&n.licensePlate!=="UNKNOWN"?ne(n.licensePlate):"UNKNOWN"),x=l(String(n.senderName??"Website visitor")),q=n.licensePlate?y(n.licensePlate):"",g=d.get(q)||ae(n.licensePlate),E=g.buildYear?`${g.title} (${g.buildYear})`:g.title,o=l(ie(n.appointmentAt??n.receivedAt)),h=F(se(c)),b=l(h),a=l(Z(h)),u=J(re(c)),T=l(u),p=l(String(n.phone??"No phone number")),m=l(String(n.message??"No message content."));return`
        <article class="request-card ${i?"is-expanded":""}" data-email-card-id="${l(f)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${L}</span>
              <div class="request-info">
                <p class="request-name">${x}</p>
                <p class="request-vehicle">${E}</p>
                <div class="request-services">
                  <span class="service-chip service-chip-new">New</span>
                  ${pe(n.service)}
                </div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${o}</span>
              <button
                class="request-toggle ${i?"is-expanded":""}"
                type="button"
                data-email-toggle="${l(f)}"
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
                        <input type="hidden" data-schedule-edit-time value="${T}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${T}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${X(u)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-email-action="save-schedule" data-email-id="${l(f)}">Save & Schedule</button>
                    <button class="button subtle" type="button" data-email-action="cancel-edit" data-email-id="${l(f)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-email-action="edit" data-email-id="${l(f)}" aria-label="Edit email schedule">✎</button>
                ${s?"":`<button class="button danger" type="button" data-email-action="delete" data-email-id="${l(f)}">Delete</button>`}
              </div>
            </div>
          `:""}
        </article>
      `}).join(""):'<article class="request-card"><p class="muted">No e-mails in inbox.</p></article>'}async function ge(e){var E;if(!e)return;const t=await N();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}B(t.activeGarage);const r=t.isAdmin?null:[(E=t.activeGarage)==null?void 0:E.id].filter(Boolean),{shell:d,contentArea:n,setUnreadEmailCount:$}=U({activePage:"emails",title:"E-mails",headerNote:"Incoming contact form requests",userEmail:t.user.email,onLogout:V,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(d),n.innerHTML=`
    <section class="panel request-board">
      <div id="emailList" class="request-list"></div>
    </section>
  `;const f=n.querySelector("#emailList");let i=[],s="",c="";const L=new Map,x=new URLSearchParams(window.location.search),q=String(x.get("emailId")??"").trim(),g=()=>{if(i.some(o=>String(o.id)===s)||(s=i[0]?String(i[0].id):"",c=""),c&&!i.some(o=>String(o.id)===c)&&(c=""),f.innerHTML=me(i,s,c,L),$(i.length),s){const o=f.querySelector(`[data-email-card-id="${CSS.escape(s)}"]`);o instanceof HTMLElement&&(o.classList.remove("search-target-highlight"),o.offsetWidth,o.classList.add("search-target-highlight"))}};n.addEventListener("click",async o=>{const h=o.target instanceof Element?o.target:null;if(!h||_(n,h))return;const b=h.closest("[data-email-card-id]"),a=h.closest("[data-email-action]"),u=h.closest("[data-email-toggle]");if(h.closest("#emailList")instanceof HTMLElement&&!(b instanceof HTMLElement)&&!(a instanceof HTMLElement)&&!(u instanceof HTMLElement)){s="",c="",g();return}if(u instanceof HTMLElement){const p=String(u.dataset.emailToggle??"");s=s===p?"":p,s!==p&&(c=""),g();return}if(a instanceof HTMLElement){const p=String(a.dataset.emailAction??""),m=String(a.dataset.emailId??"");if(!i.some(S=>String(S.id)===m))return;if(p==="edit"){s=m,c=c===m?"":m,g();return}if(p==="cancel-edit"){c="",g();return}if(p==="save-schedule"){const S=i.find(k=>String(k.id)===m);if(!S)return;const w=a.closest("[data-email-card-id]");if(!(w instanceof HTMLElement))return;const v=w.querySelector("[data-schedule-edit-date]"),M=w.querySelector("[data-schedule-edit-time]");if(!(v instanceof HTMLInputElement)||!(M instanceof HTMLInputElement))return;const I=oe(v.value,M.value);if(!I){window.alert("Choose both a date and time before saving.");return}try{await O(S,I)}catch(k){window.alert(k instanceof Error?k.message:"Unable to save the appointment schedule.");return}z(m),P(m),i=i.filter(k=>String(k.id)!==m),c="",s="",g();return}if(p==="delete"){const S=i.find(v=>String(v.id)===m);if(!S||!await W("Are you sure you want to delete this email? This action cannot be undone.","Delete Email"))return;try{await K(S)}catch(v){window.alert(v instanceof Error?v.message:"Unable to delete the email.");return}P(m),i=i.filter(v=>String(v.id)!==m),c="",s=s===m?"":s,g()}return}if(b instanceof HTMLElement&&!ce(h)){const p=String(b.dataset.emailCardId??"");s=s===p?"":p,s!==p&&(c=""),g()}});try{const o=await Y({garageIds:r}),h=G(o);$(h.unread),i=j(o).map(a=>({...a,read:!1})).sort((a,u)=>new Date(u.receivedAt??u.appointmentAt).getTime()-new Date(a.receivedAt??a.appointmentAt).getTime());const b=new Set(i.map(a=>a.licensePlate).filter(a=>a&&a!=="UNKNOWN").map(a=>y(a)));for(const a of b)if(a&&!L.has(a))try{const u=await R(a);u&&L.set(a,u)}catch(u){console.error(`Failed to fetch vehicle for ${a}:`,u)}s=i[0]?String(i[0].id):"",s=q&&i.some(a=>String(a.id)===q)?q:s,g()}catch(o){f.innerHTML='<article class="request-card"><p class="muted">Unable to load e-mails.</p></article>',$(0),console.error(o)}}const he=document.querySelector("#app");D();ge(he);
