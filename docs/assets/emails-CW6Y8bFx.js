import{d as P,c as B}from"./theme-Bb-bjqwO.js";/* empty css                      */import{e as U,a as O,c as V,l as z,p as K,n as Y,o as H,d as G,g as j,s as R,q as W}from"./branding-CDwx9-lU.js";import{n as M,f as _}from"./rdwService-CFrMDQAa.js";import{s as F}from"./confirmDialog-DSEC2-zx.js";import{h as Z,n as J,f as Q,a as X,s as ee,b as te}from"./scheduleTimePicker-zgpyiEd6.js";const y={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},ae=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function ne(){const t=new Date,i=t.getMinutes()<30?30:60;return t.setMinutes(i,0,0),i===60&&t.setHours(t.getHours()+1,0,0,0),t}function u(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ie(t=""){return{title:M(t)||"Unknown vehicle",buildYear:""}}function D(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function A(t){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function se(t){const e=A(t);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function re(t){const e=A(t);if(!e)return"";const i=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${i}-${r}-${a}`}function oe(t){const e=A(t);if(!e)return"09:00";const i=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return`${i}:${r}`}function ce(t,e){const i=String(t??"").trim(),r=String(e??"").trim();if(!i||!r)return"";const a=`${i}T${r}:00`;return A(a)?a:""}function le(t){return t instanceof Element&&!!t.closest("button, input, select, textarea, a, label")}function de(t){const e=String((t==null?void 0:t.appointmentAt)??"").trim(),i=String((t==null?void 0:t.receivedAt)??"").trim();return e&&i&&e!==i?e:ne().toISOString()}function ue(t){const e=String(t??"").trim();if(!e)return["other"];const i=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(r=>r.trim()).filter(Boolean);return i.length?i:[e]}function pe(t){return ae.get(String(t??"").trim().toLowerCase())??"other"}function me(t){const e=String(t??"").trim();if(!e)return{key:"other",label:y.other};const i=e.toLowerCase(),r=pe(e);if(r==="other"){if(["other","overig","overige"].includes(i))return{key:r,label:y.other};const a=e.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:r,label:a||e}}return{key:r,label:y[r]??e}}function ge(t){return ue(t).map(e=>{const{key:i,label:r}=me(e);return`<span class="service-chip service-chip-${i}">${u(r)}</span>`}).join("")}function he(t,e,i,r){return t.length?t.map((a,w)=>{const g=String(a.id??""),o=e===g,s=i===g,l=de(a),q=u(a.licensePlate&&a.licensePlate!=="UNKNOWN"?D(a.licensePlate):"UNKNOWN"),T=a.licensePlate?D(a.licensePlate):"UNKNOWN",$=u(String(a.senderName??T)),f=a.licensePlate?M(a.licensePlate):"",S=r.get(f)||ie(a.licensePlate),c=S.buildYear?`${S.title} (${S.buildYear})`:S.title,h=u(se(a.appointmentAt??a.receivedAt)),v=J(re(l)),n=u(v),m=u(Q(v)),x=X(oe(l)),d=u(x),p=u(String(a.phone??"No phone number")),I=u(String(a.message??"No message content."));return`
        <article class="request-card ${o?"is-expanded":""}" data-email-card-id="${u(g)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${q}</span>
              <div class="request-info">
                <p class="request-name">${$}</p>
                <p class="request-vehicle">${c}</p>
                <div class="request-services">
                  <span class="service-chip service-chip-new" style="color:white;">New</span>
                  ${ge(a.service)}
                </div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${h}</span>
              <button
                class="request-toggle ${o?"is-expanded":""}"
                type="button"
                data-email-toggle="${u(g)}"
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
                    <img src="${P("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${p}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${P("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${I}</span>
                </div>
              </div>

              <div class="request-actions">
                ${s?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${n}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${m}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${ee(v)}
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
                          ${te(x)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-email-action="save-schedule" data-email-id="${u(g)}">Save & Schedule</button>
                    <button class="button subtle" type="button" data-email-action="cancel-edit" data-email-id="${u(g)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-email-action="edit" data-email-id="${u(g)}" aria-label="Edit email schedule" style="gap: 8px;">✎ <span>Schedule</span></button>
                ${s?"":`<button class="button danger" type="button" data-email-action="delete" data-email-id="${u(g)}">Delete</button>`}
              </div>
            </div>
          `:""}
        </article>
      `}).join(""):'<article class="request-card"><p class="muted">No e-mails in inbox.</p></article>'}async function fe(t){var S;if(!t)return;const e=await U();if(!e)return;if(!e.isAdmin&&!e.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}O(e.activeGarage);const i=e.isAdmin?null:[(S=e.activeGarage)==null?void 0:S.id].filter(Boolean),{shell:r,contentArea:a,setUnreadEmailCount:w}=V({activePage:"emails",title:"E-mails",headerNote:"Incoming contact form requests",userEmail:e.user.email,onLogout:z,garage:e.activeGarage,isAdmin:e.isAdmin});t.replaceChildren(r),a.innerHTML=`
    <section class="panel request-board">
      <div id="emailList" class="request-list"></div>
    </section>
  `;const g=a.querySelector("#emailList");let o=[],s="",l="";const q=new Map,T=new URLSearchParams(window.location.search),$=String(T.get("emailId")??"").trim(),f=()=>{if(l&&!o.some(c=>String(c.id)===l)&&(l=""),s&&!o.some(c=>String(c.id)===s)&&(s=""),g.innerHTML=he(o,s,l,q),w(o.length),s){const c=g.querySelector(`[data-email-card-id="${CSS.escape(s)}"]`);c instanceof HTMLElement&&(c.classList.remove("search-target-highlight"),c.offsetWidth,c.classList.add("search-target-highlight"))}};a.addEventListener("click",async c=>{const h=c.target instanceof Element?c.target:null;if(!h||Z(a,h))return;const v=h.closest("[data-email-card-id]"),n=h.closest("[data-email-action]"),m=h.closest("[data-email-toggle]");if(h.closest("#emailList")instanceof HTMLElement&&!(v instanceof HTMLElement)&&!(n instanceof HTMLElement)&&!(m instanceof HTMLElement)){s="",l="",f();return}if(m instanceof HTMLElement){const d=String(m.dataset.emailToggle??"");s=s===d?"":d,s!==d&&(l=""),f();return}if(n instanceof HTMLElement){const d=String(n.dataset.emailAction??""),p=String(n.dataset.emailId??"");if(!o.some(k=>String(k.id)===p))return;if(d==="edit"){s=p,l=l===p?"":p,f();return}if(d==="cancel-edit"){l="",f();return}if(d==="save-schedule"){const k=o.find(L=>String(L.id)===p);if(!k)return;const E=n.closest("[data-email-card-id]");if(!(E instanceof HTMLElement))return;const b=E.querySelector("[data-schedule-edit-date]"),C=E.querySelector("[data-schedule-edit-time]");if(!(b instanceof HTMLInputElement)||!(C instanceof HTMLInputElement))return;const N=ce(b.value,C.value);if(!N){window.alert("Choose both a date and time before saving.");return}try{await K(k,N)}catch(L){window.alert(L instanceof Error?L.message:"Unable to save the appointment schedule.");return}Y(p),H(p),o=o.filter(L=>String(L.id)!==p),l="",s="",f();return}if(d==="delete"){const k=o.find(b=>String(b.id)===p);if(!k||!await F("Are you sure you want to delete this email? This action cannot be undone.","Delete Email"))return;try{await G(k)}catch(b){window.alert(b instanceof Error?b.message:"Unable to delete the email.");return}H(p),o=o.filter(b=>String(b.id)!==p),l="",s=s===p?"":s,f()}return}if(v instanceof HTMLElement&&!le(h)){const d=String(v.dataset.emailCardId??"");s=s===d?"":d,s!==d&&(l=""),f()}});try{const c=await j({garageIds:i}),h=R(c);w(h.unread),o=W(c).map(n=>({...n,read:!1})).sort((n,m)=>new Date(m.receivedAt??m.appointmentAt).getTime()-new Date(n.receivedAt??n.appointmentAt).getTime());const v=new Set(o.map(n=>n.licensePlate).filter(n=>n&&n!=="UNKNOWN").map(n=>M(n)));for(const n of v)if(n&&!q.has(n))try{const m=await _(n);m&&q.set(n,m)}catch(m){console.error(`Failed to fetch vehicle for ${n}:`,m)}s=$&&o.some(n=>String(n.id)===$)?$:"",f()}catch(c){g.innerHTML='<article class="request-card"><p class="muted">Unable to load e-mails.</p></article>',w(0),console.error(c)}}const ve=document.querySelector("#app");B();fe(ve);
