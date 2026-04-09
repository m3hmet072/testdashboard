import{n as We,t as Oe,r as Ae}from"./theme-DNexrY8-.js";/* empty css                      */import{r as Ge,f as de}from"./quickAddModal-DYwE-WBd.js";import{G as _e,H as ne,x as Ve,K as Re,W as Ze,Z as Qe,z as De,U as Je}from"./requestCard-CqIap2Dn.js";import{n as ze,r as Xe,t as et,b as tt,K as qe,H as Ne,Y as nt,a as Ce,e as Te,Q as at}from"./branding-DRG9Zl5n.js";import{h as Se,p as it}from"./rdwService-B_7TgNhE.js";import{m as xe}from"./confirmDialog-DOdHvhLG.js";const st=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ee=["Thomas Mulder","Sophie Koning","Rupert Clark","Jack Thomesen","Alex Vermeer"],fe={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},ot=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function f(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function rt(e=""){return{title:Se(e)||"Unknown vehicle",buildYear:""}}function be(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function j(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function H(e){const t=e instanceof Date?e:j(e);if(!t)return"";const a=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${a}-${s}-${r}`}function Be(e){const t=j(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function He(e){const t=String(e??"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!t)return null;const a=Number.parseInt(t[1],10),s=Number.parseInt(t[2],10);if(!Number.isFinite(a)||!Number.isFinite(s))return null;const r=Math.min(23,Math.max(0,a)),n=Math.min(59,Math.max(0,s));return r*60+n}function lt(e){const t={startMinutes:0,endMinutes:1380},a=(e==null?void 0:e.workingHoursStart)??(e==null?void 0:e.working_hours_start)??"00:00",s=(e==null?void 0:e.workingHoursEnd)??(e==null?void 0:e.working_hours_end)??"23:00",r=He(a),n=He(s);return r===null||n===null?t:r>n?{startMinutes:r,endMinutes:r}:{startMinutes:r,endMinutes:n}}function dt(e){const t=Number.isFinite(e==null?void 0:e.startMinutes)?e.startMinutes:0,a=Number.isFinite(e==null?void 0:e.endMinutes)?e.endMinutes:23*60,s=[];for(let r=t;r<=a;r+=30){const n=String(Math.floor(r/60)).padStart(2,"0"),u=String(r%60).padStart(2,"0");s.push(`${n}:${u}`)}return s.length||s.push("00:00"),s}function ct(e){const t=j(e);if(!t)return"";const a=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${a}-${s}-${r}`}function ut(e){const t=j(e);if(!t)return"09:00";const a=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0");return`${a}:${s}`}function ye(e,t=60){const[a,s]=ne(e).split(":"),r=Number(a),n=Number(s),u=(r*60+n+t)%(24*60),l=String(Math.floor(u/60)).padStart(2,"0"),h=String(u%60).padStart(2,"0");return`${l}:${h}`}function pt(e,t){const a=String(e??"").trim(),s=String(t??"").trim();if(!a||!s)return"";const r=`${a}T${s}:00`;return j(r)?r:""}function gt(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function mt(e){return e.toLocaleDateString(void 0,{month:"long",year:"numeric"})}function ht(e){return e.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function vt(e){return e.toLocaleDateString(void 0,{weekday:"short",day:"2-digit",month:"short"})}function ft(e){const t=e.toLocaleDateString(void 0,{day:"2-digit",month:"short"});return H(e)===H(new Date)?`Today, ${t}`:vt(e)}function bt(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function Pe(e){return bt(e.status)==="done"||e.inAppointments===!1}function yt(e){const t=String(e??"").trim();if(!t)return["other"];const a=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(s=>s.trim()).filter(Boolean);return a.length?a:[t]}function wt(e){return ot.get(String(e??"").trim().toLowerCase())??"other"}function we(e){return yt(e).map(t=>{const a=wt(t),s=a==="other"?String(t??"").trim()||fe.other:fe[a]??fe.other;return`<span class="service-chip service-chip-${a}">${f(s)}</span>`}).join("")}function St(e){const t=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((t==null?void 0:t[1])??"").trim()}function Ue(e){const t=String(e??"").replace(de,"").trim(),a=t.match(/\bmessage\s*:\s*([\s\S]*)/i),s=n=>String(n??"").split(/\r?\n/g).filter(u=>{const l=String(u??"").trim();return!(!l||/^\s*(until|end|tot)\s*:?\s*\d{1,2}:\d{2}\s*$/i.test(l)||/^\s*all[\s_-]?day\s*:\s*(true|false|1|0|yes|no|ja|nee)\s*$/i.test(l))}).join(`
`).trim();if(a)return s(a[1]);const r=t.split(/\r?\n/g).filter(n=>{const u=n.trim();return u&&!/^\s*(name|title|end|allday|all[\s_-]?day|message)\s*:/i.test(u)});return s(r.join(`
`))}function ke(e){const t=String(e??"").match(/\btitle\s*:\s*([^\n]+)/i);return((t==null?void 0:t[1])??"").trim()}function kt(e){const t=String(e??"").match(/\bend\s*:\s*([^\n]+)/i);return ne(((t==null?void 0:t[1])??"").trim(),"")}function ce(e){const t=String(e??"").match(/\ball[\s_-]?day\s*:\s*([^\n]+)/i);if(!(t!=null&&t[1]))return!1;const a=String(t[1]).trim().toLowerCase();return a==="true"||a==="1"||a==="yes"||a==="ja"}function z(e,t){const a=String((e==null?void 0:e.name)??"").trim(),s=String((e==null?void 0:e.title)??"").trim(),r=St(e.message),n=ke(e.message);return a||s||r||n||Ee[t%Ee.length]}function Fe(e){return H(e.appointmentAt??e.createdAt)}function $t(e,t,a){const s=new Date(e.getFullYear(),e.getMonth(),1),r=new Date(e.getFullYear(),e.getMonth()+1,0),n=r.getDate(),u=(s.getDay()+6)%7,l=t.reduce((o,y)=>{const p=Fe(y);return p&&o.set(p,(o.get(p)??0)+1),o},new Map),h=[];for(let o=u;o>0;o-=1){const y=new Date(s);y.setDate(1-o);const p=H(y);h.push({key:p,date:y,day:y.getDate(),isCurrentMonth:!1,isSelected:p===a,count:l.get(p)??0})}for(let o=1;o<=n;o+=1){const y=new Date(s.getFullYear(),s.getMonth(),o),p=H(y);h.push({key:p,date:y,day:o,isCurrentMonth:!0,isSelected:p===a,count:l.get(p)??0})}for(;h.length%7!==0;){const o=new Date(r),y=h.length-(u+n)+1;o.setDate(r.getDate()+y);const p=H(o);h.push({key:p,date:o,day:o.getDate(),isCurrentMonth:!1,isSelected:p===a,count:l.get(p)??0})}return h}function Mt(e,t,a){const s=$t(e,t,a),r=H(new Date),n=st.map(l=>`<span class="month-weekday">${l}</span>`).join(""),u=s.map(l=>{const h=["month-cell"];return l.isCurrentMonth||h.push("is-outside"),l.isSelected&&h.push("is-selected"),l.isCurrentMonth&&l.key===r&&h.push("is-today"),l.count>0&&h.push("has-bookings"),`
        <button class="${h.join(" ")}" type="button" data-calendar-cell="${l.key}">
          <span class="month-cell-day">${l.day}</span>
          ${l.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    <div class="month-grid-board">
      <div class="month-week-row">${n}</div>
      <div class="month-grid-cells">${u}</div>
    </div>
  `}function Lt(e,t){const a=dt(t),s=e.filter(n=>ce(n.message)),r=e.filter(n=>!ce(n.message)).reduce((n,u,l)=>{const h=Be(u.appointmentAt??u.createdAt),o=n.get(h)??[];return o.push({booking:u,index:l}),n.set(h,o),n},new Map);return`
    <div class="day-board-list">
      ${s.length?`
      <div class="day-all-day-row day-slot-row has-booking">
        <span class="day-slot-time is-all-day">All day</span>
        <div class="day-slot-line"></div>
        <div class="day-slot-booking">
          <span class="day-slot-count">${s.length} appointment${s.length===1?"":"s"}</span>
          <div class="day-slot-bookings">
            ${s.map((n,u)=>{const l=f(String(n.id??"")),h=String(n.licensePlate??"").toUpperCase()==="UNKNOWN",o=f(n.color??"#2563EB"),y=f(n.licensePlate&&n.licensePlate!=="UNKNOWN"?be(n.licensePlate):"UNKNOWN"),p=f(z(n,u));return`
                <div class="day-slot-booking-item" data-day-slot-booking-id="${l}">
                  <div class="day-slot-plate-wrapper">
                    ${h?`<span class="fast-appt-dot" style="background: ${o}" aria-hidden="true"></span>`:`<span class="plate-chip">${y}</span>`}
                  </div>
                  <div class="day-slot-booking-info">
                    <div class="day-slot-booking-row">
                      <span class="day-slot-name">${p}</span>
                    </div>
                    <div class="day-slot-status-services">
                      <span class="status-chip status-chip-progress">All day</span>
                      ${we(n.service)}
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    `:""}
      ${a.map(n=>{const u=r.get(n)??[];if(!u.length)return`
              <div class="day-slot-row">
                <span class="day-slot-time">${n}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">Available</span>
              </div>
            `;const l=u.map(({booking:o,index:y},p)=>{const R=f(String(o.id??"")),X=String(o.licensePlate??"").toUpperCase()==="UNKNOWN",Z=f(o.color??"#2563EB"),W=f(o.licensePlate&&o.licensePlate!=="UNKNOWN"?be(o.licensePlate):"UNKNOWN"),ee=f(z(o,y)),O=u.length>1&&p<u.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${R}">
                <div class="day-slot-plate-wrapper">
                  ${X?`<span class="fast-appt-dot" style="background: ${Z}" aria-hidden="true"></span>`:`<span class="plate-chip">${W}</span>`}
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${ee}</span>
                  </div>
                  <div class="day-slot-status-services">
                    <span class="status-chip status-chip-progress">In Progress</span>
                    ${we(o.service)}
                  </div>
                </div>
              </div>
              ${O?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),h=u.length>1?`<span class="day-slot-count">${u.length} appointments</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${n}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${h}
                <div class="day-slot-bookings">
                  ${l}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function At(e,t,a,s,r){return e.length?e.map((n,u)=>{const l=String(n.id??""),h=t===l,o=a===l,y=n.appointmentAt??n.createdAt,p=String(n.licensePlate??"").toUpperCase()==="UNKNOWN",R=f(n.color??"#2563EB"),X=f(n.licensePlate&&n.licensePlate!=="UNKNOWN"?be(n.licensePlate):"UNKNOWN"),Z=Be(y),W=Ve(ct(y)),ee=f(W),O=f(Re(W)),G=ne(ut(y)),ae=f(G),_=ce(n.message),S=ne(kt(n.message)||ye(G)),$=f(S);f(_?"All day":`${Z} - ${S}`),f(z(n,u));const k=n.licensePlate?Se(n.licensePlate):"",L=s.get(k)||rt(n.licensePlate),P=L.buildYear?`${L.title} (${L.buildYear})`:L.title,M=String(n.phone??"").trim(),A=f(!M||M==="0000000000"?"Not filled in":M),ie=f(M==="0000000000"?"":M),se=f(Ue(n.message)||"No customer message."),ue=f(ke(n.message)||z(n,u)),te=p?`<span class="fast-appt-dot" style="background: ${R}" aria-hidden="true"></span>`:`<span class="plate-chip">${X}</span>`,pe=Ze({leadMarkup:te,name:z(n,u),vehicle:p?"":P,servicesMarkup:we(n.service),timeLabel:_?"All day":`${Z} - ${S}`,isExpanded:h,toggleDataAttribute:"data-calendar-toggle",toggleId:l,expandAriaLabel:"Expand appointment details",collapseAriaLabel:"Collapse appointment details"});return`
        <article class="request-card ${h?"is-expanded":""}" data-calendar-booking-id="${f(l)}">
          ${pe}

          ${h?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${Ae("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${A}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${Ae("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${se}</span>
                </div>
              </div>

              <div class="request-actions">
                ${o?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Title</span>
                      <input type="text" data-schedule-edit-title value="${ue}" placeholder="Title" />
                    </label>
                    <label class="request-edit-field">
                      <span>Phone</span>
                      <input type="tel" data-schedule-edit-phone value="${ie}" placeholder="Phone" />
                    </label>
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${ee}" />
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
                          ${Qe(W)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Vanaf</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${ae}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${ae}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${De(G,r)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Tot</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${$}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${$}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${De(S,r)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${f(l)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${f(l)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${f(l)}" aria-label="Edit booking">✎</button>
                ${o?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${f(l)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${f(l)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):Je("No appointments for this date.")}function V(e){return[...e].sort((t,a)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime())}async function Dt(e){var t,a,s,r;if(!e)return;const n=await ze();if(!n)return;if(!n.isAdmin&&!n.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Xe(n.activeGarage);const u=n.isAdmin?null:[(t=n.activeGarage)==null?void 0:t.id].filter(Boolean),l=((a=n.activeGarage)==null?void 0:a.id)??((r=(s=n.garages)==null?void 0:s[0])==null?void 0:r.id)??"",{shell:h,contentArea:o,setUnreadEmailCount:y}=et({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:n.user.email,onLogout:tt,garage:n.activeGarage,isAdmin:n.isAdmin});e.replaceChildren(h),o.innerHTML=`
    <section class="calendar-page-grid">
      <div class="calendar-primary-col">
        <section class="panel calendar-board-panel">
          <div class="calendar-board-head">
            <div class="calendar-board-nav">
              <button class="calendar-nav-button" type="button" data-calendar-nav="prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 4C10 4 6.00001 6.94593 6 8C5.99999 9.05413 10 12 10 12" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
              <p id="calendarPeriodLabel" class="calendar-period-label"></p>
              <button class="calendar-nav-button" type="button" data-calendar-nav="next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            </div>

            <div class="calendar-mode-tabs" role="tablist" aria-label="Calendar mode">
              <button id="calendarModeMonth" class="calendar-mode-tab" type="button" data-calendar-mode="month">Month</button>
              <button id="calendarModeDay" class="calendar-mode-tab" type="button" data-calendar-mode="day">Day</button>
            </div>
          </div>

          <div id="calendarBoardBody" class="calendar-board-body"></div>
        </section>
      </div>

      <section class="panel calendar-day-panel">
        <div class="calendar-day-panel-head">
          <p id="calendarDayTitle" class="calendar-day-title"></p>
          <span id="calendarDayCount" class="calendar-day-count">0 appointment</span>
        </div>

        <div id="calendarDayList" class="request-list"></div>
      </section>
    </section>
  `;const p=o.querySelector("#calendarBoardBody"),R=o.querySelector("#calendarPeriodLabel"),X=o.querySelector("#calendarModeMonth"),Z=o.querySelector("#calendarModeDay"),W=o.querySelector("#calendarDayTitle"),ee=o.querySelector("#calendarDayCount"),O=o.querySelector("#calendarDayList"),G=new URLSearchParams(window.location.search),ae=["1","true","yes"].includes(String(G.get("quickadd")??"").trim().toLowerCase()),_=String(G.get("quickaddEdit")??G.get("editBookingId")??"").trim();let S=[],$=[],k=new Date,L=new Date(k.getFullYear(),k.getMonth(),1),P="month",M="",A="",ie="",se="";const ue=lt(n.activeGarage),te=new Map,pe=()=>{const g=H(k);return $.filter(i=>Fe(i)===g).sort((i,d)=>new Date(i.appointmentAt??i.createdAt).getTime()-new Date(d.appointmentAt??d.createdAt).getTime())},q=()=>{const g=H(k),i=pe(),d=P==="day"&&(ie!=="day"||se!==g);X.classList.toggle("is-active",P==="month"),Z.classList.toggle("is-active",P==="day"),M&&!i.some(w=>String(w.id)===M)&&(M="",A=""),A&&!i.some(w=>String(w.id)===A)&&(A=""),P==="month"?(R.textContent=mt(L),p.innerHTML=Mt(L,$,g)):(R.textContent=ht(k),p.innerHTML=Lt(i,ue),d&&window.requestAnimationFrame(()=>{const w=p.querySelector(".day-board-list");if(!(w instanceof HTMLElement))return;const C=w.querySelector(".day-slot-row.has-booking");if(C instanceof HTMLElement){const E=p.getBoundingClientRect(),B=C.getBoundingClientRect(),T=p.scrollTop+(B.top-E.top)-8;p.scrollTo({top:Math.max(0,T),behavior:"auto"})}else p.scrollTo({top:0,behavior:"auto"})})),W.textContent=ft(k),ee.textContent=`${i.length} appointment${i.length===1?"":"s"}`,O.innerHTML=At(i,M,A,te,n.activeGarage),ie=P,se=g};let ge=0,$e="",me=0,Me="";o.addEventListener("click",async g=>{const i=g.target instanceof Element?g.target:null;if(!i||_e(o,i))return;const d=i.closest("[data-calendar-nav]");if(d instanceof HTMLElement){const c=d.dataset.calendarNav;if(P==="month"){const m=new Date(L);m.setMonth(L.getMonth()+(c==="next"?1:-1)),L=new Date(m.getFullYear(),m.getMonth(),1)}else{const m=new Date(k);m.setDate(k.getDate()+(c==="next"?1:-1)),k=m,L=new Date(k.getFullYear(),k.getMonth(),1)}q();return}const w=i.closest("[data-calendar-mode]");if(w instanceof HTMLElement){P=w.dataset.calendarMode==="day"?"day":"month",q();return}const C=i.closest("[data-calendar-cell]");if(C instanceof HTMLElement){const c=C.dataset.calendarCell;if(c){const m=Date.now(),b=g.detail>=2||m-ge<550&&$e===c;if(ge=m,$e=c,b){ge=0,Q.openForCreate(c,"");return}const v=j(`${c}T12:00:00`);v&&(k=v,L=new Date(k.getFullYear(),k.getMonth(),1),q())}return}const E=i.closest("[data-day-slot-booking-id]");if(E instanceof HTMLElement){const c=String(E.dataset.daySlotBookingId??"");c&&(M=c,A="",q(),window.requestAnimationFrame(()=>{const m=[...O.querySelectorAll("[data-calendar-booking-id]")].find(b=>b instanceof HTMLElement&&String(b.dataset.calendarBookingId??"")===c);m instanceof HTMLElement&&m.scrollIntoView({behavior:"smooth",block:"start"})}));return}const B=i.closest("[data-calendar-toggle]");if(B instanceof HTMLElement){const c=String(B.dataset.calendarToggle??"");M=M===c?"":c,M!==c&&(A=""),q();return}const T=i.closest("[data-calendar-action]");if(T instanceof HTMLElement){const c=String(T.dataset.calendarAction??""),m=String(T.dataset.bookingId??"");if(!m)return;if(c==="edit"){const b=$.find(v=>String(v.id)===m)??S.find(v=>String(v.id)===m);b&&Q.openForEdit(b);return}if(c==="cancel-edit"){A="",q();return}if(c==="save-schedule"){const b=T.closest("[data-calendar-booking-id]");if(!(b instanceof HTMLElement))return;const v=$.find(x=>String(x.id)===m);if(!v)return;const D=b.querySelector("[data-schedule-edit-date]"),K=b.querySelector("[data-schedule-edit-time]"),oe=b.querySelector("[data-schedule-edit-end-time]"),re=b.querySelector("[data-schedule-edit-title]"),J=b.querySelector("[data-schedule-edit-phone]");if(!(D instanceof HTMLInputElement)||!(K instanceof HTMLInputElement))return;const I=pt(D.value,K.value);if(!I)return;const Y=(re instanceof HTMLInputElement?re.value.trim():ke(v.message))||z(v,0),N=oe instanceof HTMLInputElement?ne(oe.value.trim(),ye(K.value)):ye(K.value),he=J instanceof HTMLInputElement?J.value.trim():String(v.phone??"").trim(),Ke=ce(v.message),Ye=Ue(v.message)||"",ve=[`Name: ${Y}`,`AllDay: ${Ke?"true":"false"}`,`End: ${N}`,`Message: ${Ye||de}`].filter(Boolean).join(`
`);try{await qe(v,I),await Ne(v,{name:Y,phone:he,message:ve})}catch(x){window.alert(x instanceof Error?x.message:"Unable to save the appointment schedule.");return}S=V(S.map(x=>String(x.id)===m?{...x,appointmentAt:I,name:Y,phone:he,message:ve}:x)),$=V($.map(x=>String(x.id)===m?{...x,appointmentAt:I,name:Y,phone:he,message:ve}:x));const le=j(I);le&&(k=le,L=new Date(le.getFullYear(),le.getMonth(),1)),A="",M=m,q();return}if(!$.find(b=>String(b.id)===m))return;q();return}const U=i.closest("[data-request-action]");if(U instanceof HTMLElement){const c=String(U.dataset.requestAction??""),m=String(U.dataset.bookingId??"");if(!m)return;const b=$.find(v=>String(v.id)===m);if(!b)return;if(c==="complete"){(async()=>{if(await xe("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await nt(b,{convertedFromEmail:b.source!=="manual"})}catch(v){window.alert(v instanceof Error?v.message:"Unable to mark appointment as completed.");return}window.location.href=Oe("completed.html")}})();return}if(c==="delete"){(async()=>{if(!await xe("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;S=S.filter(D=>String(D.id)!==m),$=$.filter(D=>String(D.id)!==m),A="";const v=Ce(S);y(v.unread),q()})();return}}const F=i.closest("[data-calendar-booking-id]");if(F instanceof HTMLElement&&!gt(i)){const c=String(F.dataset.calendarBookingId??"");if(!c)return;M=M===c?"":c,M!==c&&(A=""),q()}});const Q=Ge({onSubmit:async({mode:g,editingBookingId:i,name:d,phone:w,note:C,date:E,time:B,endTime:T,isAllDay:U,color:F,service:c,licensePlate:m,isSimpleAppointment:b})=>{if(!l)throw new Error("Geen garage beschikbaar.");if(g==="edit"&&i){const D=$.find(N=>String(N.id)===i)??S.find(N=>String(N.id)===i);if(!D)throw new Error("Appointment not found for editing.");const K=`${E}T${B}`,oe=w||String(D.phone??"").trim()||"0000000000",re=C||de,J=b?c||"Simple appointment":c,I=b?"UNKNOWN":m||"UNKNOWN",Y=[`Name: ${d}`,`AllDay: ${U?"true":"false"}`,`End: ${T}`,`Message: ${re}`].join(`
`);await qe(D,K),await Ne(D,{name:d,phone:oe,message:Y,color:F,service:J,licensePlate:I}),S=V(S.map(N=>String(N.id)===i?{...N,appointmentAt:K,name:d,color:F,message:Y,service:J,licensePlate:I}:N)),$=V($.map(N=>String(N.id)===i?{...N,appointmentAt:K,name:d,color:F,message:Y,service:J,licensePlate:I}:N))}else await at({garageId:l,name:d,licensePlate:b?"UNKNOWN":m||"UNKNOWN",phone:w||"0000000000",service:b?c||"Simple appointment":c||"Service",message:`Name: ${d}
AllDay: ${U?"true":"false"}
End: ${T}
Message: ${C||de}`,color:F,appointmentAt:`${E}T${B}`}),S=V(await Te({garageIds:u})),$=V(S.filter(D=>D.inAppointments===!0&&!Pe(D)));const v=j(`${E}T12:00:00`);v&&(k=v,L=new Date(v.getFullYear(),v.getMonth(),1)),q()}}),Le=()=>{const g=new URLSearchParams(window.location.search);g.delete("quickadd"),g.delete("quickaddEdit"),g.delete("editBookingId");const i=g.toString(),d=window.location.hash||"",w=`${window.location.pathname}${i?`?${i}`:""}${d}`;window.history.replaceState(null,"",w)},Ie=()=>{!ae||_||(Q.openForCreate(H(k),"09:00"),Le())},je=()=>{if(!_)return;const g=$.find(i=>String(i.id)===_)??S.find(i=>String(i.id)===_);if(g){const i=j(g.appointmentAt??g.createdAt);i&&(k=i,L=new Date(i.getFullYear(),i.getMonth(),1),P="day",M=String(g.id??""),A=String(g.id??""),q()),Q.openForEdit(g)}Le()};p.addEventListener("click",g=>{const i=g.target instanceof Element?g.target:null;if(!i)return;const d=i.closest(".day-slot-row");if(d instanceof HTMLElement){const w=d.querySelector(".day-slot-time"),C=w instanceof HTMLElement?(w.textContent??"").trim():"",E=Date.now(),B=g.detail>=2||E-me<550&&Me===C;if(me=E,Me=C,B){if(me=0,d.classList.contains("has-booking")){const T=i.closest("[data-day-slot-booking-id]"),U=d.querySelector("[data-day-slot-booking-id]"),F=String((T instanceof HTMLElement?T.dataset.daySlotBookingId:U instanceof HTMLElement?U.dataset.daySlotBookingId:"")??""),c=$.find(m=>String(m.id)===F);if(c){Q.openForEdit(c);return}}Q.openForCreate(H(k),C||"09:00")}}}),Ie();try{S=await Te({garageIds:u});const g=new Set(S.map(d=>d.licensePlate).filter(d=>d&&d!=="UNKNOWN").map(d=>Se(d)));for(const d of g)if(d&&!te.has(d))try{const w=await it(d);w&&te.set(d,w)}catch(w){console.error(`Failed to fetch vehicle for ${d}:`,w)}$=V(S.filter(d=>d.inAppointments===!0&&!Pe(d)));const i=Ce(S);y(i.unread),q(),je()}catch(g){p.innerHTML='<p class="muted">Unable to load calendar right now.</p>',O.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',y(0),console.error(g)}}const qt=document.querySelector("#app");We();Dt(qt);
