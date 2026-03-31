import{d as I,c as D}from"./theme-D1OhZick.js";/* empty css                      */import{e as N,a as P,c as B,l as U,p as V,k as O,d as z,g as K}from"./branding-rmtIPR3U.js";import{m as H,s as Y,g as G}from"./emailService-BZ0Xqht5.js";import{n as w,f as j}from"./rdwService-CFrMDQAa.js";import{s as _}from"./confirmDialog-DSEC2-zx.js";import{h as R,n as W,f as F,a as Z,s as J,b as Q}from"./scheduleTimePicker-zgpyiEd6.js";const C={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},X=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function ee(){const e=new Date,s=e.getMinutes()<30?30:60;return e.setMinutes(s,0,0),s===60&&e.setHours(e.getHours()+1,0,0,0),e}function u(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function te(e=""){return{title:w(e)||"Unknown vehicle",buildYear:""}}function ae(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function A(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function ne(e){const t=A(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function ie(e){const t=A(e);if(!t)return"";const s=t.getFullYear(),p=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${s}-${p}-${n}`}function se(e){const t=A(e);if(!t)return"09:00";const s=String(t.getHours()).padStart(2,"0"),p=String(t.getMinutes()).padStart(2,"0");return`${s}:${p}`}function re(e,t){const s=String(e??"").trim(),p=String(t??"").trim();if(!s||!p)return"";const n=`${s}T${p}:00`;return A(n)?n:""}function oe(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function ce(e){const t=String((e==null?void 0:e.appointmentAt)??"").trim(),s=String((e==null?void 0:e.receivedAt)??"").trim();return t&&s&&t!==s?t:ee().toISOString()}function le(e){const t=String(e??"").trim();if(!t)return["other"];const s=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(p=>p.trim()).filter(Boolean);return s.length?s:[t]}function de(e){return X.get(String(e??"").trim().toLowerCase())??"other"}function ue(e){return le(e).map(t=>{const s=de(t),p=C[s]??C.other;return`<span class="service-chip service-chip-${s}">${u(p)}</span>`}).join("")}function pe(e,t,s,p){return e.length?e.map((n,q)=>{const g=String(n.id??""),i=t===g,r=s===g,o=ce(n),$=u(n.licensePlate&&n.licensePlate!=="UNKNOWN"?ae(n.licensePlate):"UNKNOWN"),h=u(String(n.senderName??"Website visitor")),L=n.licensePlate?w(n.licensePlate):"",c=p.get(L)||te(n.licensePlate),f=c.buildYear?`${c.title} (${c.buildYear})`:c.title,S=u(ne(n.appointmentAt??n.receivedAt)),a=W(ie(o)),m=u(a),x=u(F(a)),l=Z(se(o)),d=u(l),T=u(String(n.phone??"No phone number")),v=u(String(n.message??"No message content."));return`
        <article class="request-card ${i?"is-expanded":""}" data-email-card-id="${u(g)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${$}</span>
              <div class="request-info">
                <p class="request-name">${h}</p>
                <p class="request-vehicle">${f}</p>
                <div class="request-services">
                  <span class="service-chip service-chip-new">New</span>
                  ${ue(n.service)}
                </div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${S}</span>
              <button
                class="request-toggle ${i?"is-expanded":""}"
                type="button"
                data-email-toggle="${u(g)}"
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
                    <img src="${I("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${T}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${I("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${v}</span>
                </div>
              </div>

              <div class="request-actions">
                ${r?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${m}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${x}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${J(a)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Time</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${d}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${d}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${Q(l)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-email-action="save-schedule" data-email-id="${u(g)}">Save & Schedule</button>
                    <button class="button subtle" type="button" data-email-action="cancel-edit" data-email-id="${u(g)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-email-action="edit" data-email-id="${u(g)}" aria-label="Edit email schedule">✎</button>
                ${r?"":`<button class="button danger" type="button" data-email-action="delete" data-email-id="${u(g)}">Delete</button>`}
              </div>
            </div>
          `:""}
        </article>
      `}).join(""):'<article class="request-card"><p class="muted">No e-mails in inbox.</p></article>'}async function me(e){var L;if(!e)return;const t=await N();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}P(t.activeGarage);const s=t.isAdmin?null:[(L=t.activeGarage)==null?void 0:L.id].filter(Boolean),{shell:p,contentArea:n,setUnreadEmailCount:q}=B({activePage:"emails",title:"E-mails",headerNote:"Incoming contact form requests",userEmail:t.user.email,onLogout:U,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(p),n.innerHTML=`
    <section class="panel request-board">
      <div id="emailList" class="request-list"></div>
    </section>
  `;const g=n.querySelector("#emailList");let i=[],r="",o="";const $=new Map,h=()=>{i.some(c=>String(c.id)===r)||(r=i[0]?String(i[0].id):"",o=""),o&&!i.some(c=>String(c.id)===o)&&(o=""),g.innerHTML=pe(i,r,o,$),q(i.length)};n.addEventListener("click",async c=>{const f=c.target instanceof Element?c.target:null;if(!f||R(n,f))return;const S=f.closest("[data-email-card-id]"),a=f.closest("[data-email-action]"),m=f.closest("[data-email-toggle]");if(f.closest("#emailList")instanceof HTMLElement&&!(S instanceof HTMLElement)&&!(a instanceof HTMLElement)&&!(m instanceof HTMLElement)){r="",o="",h();return}if(m instanceof HTMLElement){const l=String(m.dataset.emailToggle??"");r=r===l?"":l,r!==l&&(o=""),h();return}if(a instanceof HTMLElement){const l=String(a.dataset.emailAction??""),d=String(a.dataset.emailId??"");if(!i.some(v=>String(v.id)===d))return;if(l==="edit"){r=d,o=o===d?"":d,h();return}if(l==="cancel-edit"){o="",h();return}if(l==="save-schedule"){const v=i.find(k=>String(k.id)===d);if(!v)return;const E=a.closest("[data-email-card-id]");if(!(E instanceof HTMLElement))return;const b=E.querySelector("[data-schedule-edit-date]"),y=E.querySelector("[data-schedule-edit-time]");if(!(b instanceof HTMLInputElement)||!(y instanceof HTMLInputElement))return;const M=re(b.value,y.value);if(!M){window.alert("Choose both a date and time before saving.");return}try{await V(v,M)}catch(k){window.alert(k instanceof Error?k.message:"Unable to save the appointment schedule.");return}O(d),H(d),i=i.filter(k=>String(k.id)!==d),o="",r="",h();return}if(l==="delete"){const v=i.find(b=>String(b.id)===d);if(!v||!await _("Are you sure you want to delete this email? This action cannot be undone.","Delete Email"))return;try{await z(v)}catch(b){window.alert(b instanceof Error?b.message:"Unable to delete the email.");return}H(d),i=i.filter(b=>String(b.id)!==d),o="",r=r===d?"":r,h()}return}if(S instanceof HTMLElement&&!oe(f)){const l=String(S.dataset.emailCardId??"");r=r===l?"":l,r!==l&&(o=""),h()}});try{const c=await K({garageIds:s}),f=Y(c);q(f.unread),i=G(c).map(a=>({...a,read:!1})).sort((a,m)=>new Date(m.receivedAt??m.appointmentAt).getTime()-new Date(a.receivedAt??a.appointmentAt).getTime());const S=new Set(i.map(a=>a.licensePlate).filter(a=>a&&a!=="UNKNOWN").map(a=>w(a)));for(const a of S)if(a&&!$.has(a))try{const m=await j(a);m&&$.set(a,m)}catch(m){console.error(`Failed to fetch vehicle for ${a}:`,m)}r=i[0]?String(i[0].id):"",h()}catch(c){g.innerHTML='<article class="request-card"><p class="muted">Unable to load e-mails.</p></article>',q(0),console.error(c)}}const ge=document.querySelector("#app");D();me(ge);
