import{p as Vt,d as At,c as _t}from"../utils/theme.js";/* empty css                      */import{c as Wt,M as ct}from"../components/calendar-quickadd-modal.js";import{h as Gt,n as at,r as zt,a as Qt,f as Jt,b as Xt,s as Zt,c as Lt}from"../components/requestCard.js";import{e as te,a as ee,c as ne,l as ae,p as Tt,i as Ct,m as se,s as xt,b as Et,j as oe}from"../utils/branding.js";import{n as bt,f as ie}from"../services/rdwService.js";import{s as Nt}from"../utils/confirmDialog.js";const re=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Bt=["Thomas Mulder","Sophie Koning","Rupert Clark","Jack Thomesen","Alex Vermeer"],ht={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},le=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function f(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ce(t=""){return{title:bt(t)||"Unknown vehicle",buildYear:""}}function gt(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function Y(t){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function I(t){const e=t instanceof Date?t:Y(t);if(!e)return"";const n=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${n}-${o}-${s}`}function It(t){const e=Y(t);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function qt(t){const n=String(t??"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!n)return null;const o=Number.parseInt(n[1],10),s=Number.parseInt(n[2],10);if(!Number.isFinite(o)||!Number.isFinite(s))return null;const c=Math.min(23,Math.max(0,o)),p=Math.min(59,Math.max(0,s));return c*60+p}function de(t){const e={startMinutes:0,endMinutes:1380},n=(t==null?void 0:t.workingHoursStart)??(t==null?void 0:t.working_hours_start)??"00:00",o=(t==null?void 0:t.workingHoursEnd)??(t==null?void 0:t.working_hours_end)??"23:00",s=qt(n),c=qt(o);return s===null||c===null?e:s>c?{startMinutes:s,endMinutes:s}:{startMinutes:s,endMinutes:c}}function ue(t){const e=Number.isFinite(t==null?void 0:t.startMinutes)?t.startMinutes:0,n=Number.isFinite(t==null?void 0:t.endMinutes)?t.endMinutes:23*60,o=[];for(let s=e;s<=n;s+=30){const c=String(Math.floor(s/60)).padStart(2,"0"),p=String(s%60).padStart(2,"0");o.push(`${c}:${p}`)}return o.length||o.push("00:00"),o}function pe(t){const e=Y(t);if(!e)return"";const n=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${n}-${o}-${s}`}function me(t){const e=Y(t);if(!e)return"09:00";const n=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return`${n}:${o}`}function ft(t,e=60){const[n,o]=at(t).split(":"),s=Number(n),c=Number(o),p=(s*60+c+e)%(24*60),a=String(Math.floor(p/60)).padStart(2,"0"),d=String(p%60).padStart(2,"0");return`${a}:${d}`}function he(t,e){const n=String(t??"").trim(),o=String(e??"").trim();if(!n||!o)return"";const s=`${n}T${o}:00`;return Y(s)?s:""}function ge(t){return t instanceof Element&&!!t.closest("button, input, select, textarea, a, label")}function fe(t){return t.toLocaleDateString(void 0,{month:"long",year:"numeric"})}function ye(t){return t.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function be(t){return t.toLocaleDateString(void 0,{weekday:"short",day:"2-digit",month:"short"})}function ve(t){const e=t.toLocaleDateString(void 0,{day:"2-digit",month:"short"});return I(t)===I(new Date)?`Today, ${e}`:be(t)}function we(t){const e=String(t??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function Pt(t){return we(t.status)==="done"||t.inAppointments===!1}function ke(t){const e=String(t??"").trim();if(!e)return["other"];const n=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(o=>o.trim()).filter(Boolean);return n.length?n:[e]}function Se(t){return le.get(String(t??"").trim().toLowerCase())??"other"}function yt(t){return ke(t).map(e=>{const n=Se(e),o=n==="other"?String(e??"").trim()||ht.other:ht[n]??ht.other;return`<span class="service-chip service-chip-${n}">${f(o)}</span>`}).join("")}function Me(t){const n=String(t??"").match(/\bname\s*:\s*([^\n]+)/i);return((n==null?void 0:n[1])??"").trim()}function Ht(t){const e=String(t??"").replace(ct,"").trim(),n=e.match(/\bmessage\s*:\s*([\s\S]*)/i),o=c=>String(c??"").split(/\r?\n/g).filter(p=>{const a=String(p??"").trim();return!(!a||/^\s*(until|end|tot)\s*:?\s*\d{1,2}:\d{2}\s*$/i.test(a)||/^\s*all[\s_-]?day\s*:\s*(true|false|1|0|yes|no|ja|nee)\s*$/i.test(a))}).join(`
`).trim();if(n)return o(n[1]);const s=e.split(/\r?\n/g).filter(c=>{const p=c.trim();return p&&!/^\s*(name|title|end|allday|all[\s_-]?day|message)\s*:/i.test(p)});return o(s.join(`
`))}function Ut(t){const n=String(t??"").match(/\btitle\s*:\s*([^\n]+)/i);return((n==null?void 0:n[1])??"").trim()}function $e(t){const n=String(t??"").match(/\bend\s*:\s*([^\n]+)/i);return at(((n==null?void 0:n[1])??"").trim(),"")}function dt(t){const n=String(t??"").match(/\ball[\s_-]?day\s*:\s*([^\n]+)/i);if(!(n!=null&&n[1]))return!1;const o=String(n[1]).trim().toLowerCase();return o==="true"||o==="1"||o==="yes"||o==="ja"}function X(t,e){const n=String((t==null?void 0:t.name)??"").trim(),o=String((t==null?void 0:t.title)??"").trim(),s=Me(t.message),c=Ut(t.message);return n||o||s||c||Bt[e%Bt.length]}function Ft(t){return I(t.appointmentAt??t.createdAt)}function De(t,e,n){const o=new Date(t.getFullYear(),t.getMonth(),1),s=new Date(t.getFullYear(),t.getMonth()+1,0),c=s.getDate(),p=(o.getDay()+6)%7,a=e.reduce((g,b)=>{const u=Ft(b);return u&&g.set(u,(g.get(u)??0)+1),g},new Map),d=[];for(let g=p;g>0;g-=1){const b=new Date(o);b.setDate(1-g);const u=I(b);d.push({key:u,date:b,day:b.getDate(),isCurrentMonth:!1,isSelected:u===n,count:a.get(u)??0})}for(let g=1;g<=c;g+=1){const b=new Date(o.getFullYear(),o.getMonth(),g),u=I(b);d.push({key:u,date:b,day:g,isCurrentMonth:!0,isSelected:u===n,count:a.get(u)??0})}for(;d.length%7!==0;){const g=new Date(s),b=d.length-(p+c)+1;g.setDate(s.getDate()+b);const u=I(g);d.push({key:u,date:g,day:g.getDate(),isCurrentMonth:!1,isSelected:u===n,count:a.get(u)??0})}return d}function Ae(t,e,n){const o=De(t,e,n),s=I(new Date),c=re.map(a=>`<span class="month-weekday">${a}</span>`).join(""),p=o.map(a=>{const d=["month-cell"];return a.isCurrentMonth||d.push("is-outside"),a.isSelected&&d.push("is-selected"),a.isCurrentMonth&&a.key===s&&d.push("is-today"),a.count>0&&d.push("has-bookings"),`
        <button class="${d.join(" ")}" type="button" data-calendar-cell="${a.key}">
          <span class="month-cell-day">${a.day}</span>
          ${a.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    <div class="month-grid-board">
      <div class="month-week-row">${c}</div>
      <div class="month-grid-cells">${p}</div>
    </div>
  `}function Le(t,e){const n=ue(e),o=t.filter(a=>dt(a.message)),c=t.filter(a=>!dt(a.message)).reduce((a,d,g)=>{const b=It(d.appointmentAt??d.createdAt),u=a.get(b)??[];return u.push({booking:d,index:g}),a.set(b,u),a},new Map);return`
    <div class="day-board-list">
      ${o.length?`
      <div class="day-all-day-row day-slot-row has-booking">
        <span class="day-slot-time is-all-day">All day</span>
        <div class="day-slot-line"></div>
        <div class="day-slot-booking">
          <span class="day-slot-count">${o.length} appointment${o.length===1?"":"s"}</span>
          <div class="day-slot-bookings">
            ${o.map((a,d)=>{const g=f(String(a.id??"")),b=String(a.licensePlate??"").toUpperCase()==="UNKNOWN",u=f(a.color??"#2563EB"),W=f(a.licensePlate&&a.licensePlate!=="UNKNOWN"?gt(a.licensePlate):"UNKNOWN"),H=f(X(a,d));return`
                <div class="day-slot-booking-item" data-day-slot-booking-id="${g}">
                  <div class="day-slot-plate-wrapper">
                    ${b?`<span class="fast-appt-dot" style="background: ${u}" aria-hidden="true"></span>`:`<span class="plate-chip">${W}</span>`}
                  </div>
                  <div class="day-slot-booking-info">
                    <div class="day-slot-booking-row">
                      <span class="day-slot-name">${H}</span>
                    </div>
                    <div class="day-slot-status-services">
                      <span class="status-chip status-chip-progress">All day</span>
                      ${yt(a.service)}
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    `:""}
      ${n.map(a=>{const d=c.get(a)??[];if(!d.length)return`
              <div class="day-slot-row">
                <span class="day-slot-time">${a}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">Available</span>
              </div>
            `;const g=d.map(({booking:u,index:W},H)=>{const U=f(String(u.id??"")),Z=String(u.licensePlate??"").toUpperCase()==="UNKNOWN",V=f(u.color??"#2563EB"),k=f(u.licensePlate&&u.licensePlate!=="UNKNOWN"?gt(u.licensePlate):"UNKNOWN"),S=f(X(u,W)),y=d.length>1&&H<d.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${U}">
                <div class="day-slot-plate-wrapper">
                  ${Z?`<span class="fast-appt-dot" style="background: ${V}" aria-hidden="true"></span>`:`<span class="plate-chip">${k}</span>`}
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${S}</span>
                  </div>
                  <div class="day-slot-status-services">
                    <span class="status-chip status-chip-progress">In Progress</span>
                    ${yt(u.service)}
                  </div>
                </div>
              </div>
              ${y?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),b=d.length>1?`<span class="day-slot-count">${d.length} appointments</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${a}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${b}
                <div class="day-slot-bookings">
                  ${g}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function Te(t,e,n,o,garage){return t.length?t.map((s,c)=>{const p=String(s.id??""),a=e===p,d=n===p,g=s.appointmentAt??s.createdAt,b=String(s.licensePlate??"").toUpperCase()==="UNKNOWN",u=f(s.color??"#2563EB"),W=f(s.licensePlate&&s.licensePlate!=="UNKNOWN"?gt(s.licensePlate):"UNKNOWN"),H=It(g),U=Qt(pe(g)),Z=f(U),V=f(Jt(U)),k=at(me(g)),S=f(k),y=dt(s.message),D=at($e(s.message)||ft(k)),B=f(D);f(y?"All day":`${H} - ${D}`),f(X(s,c));const A=s.licensePlate?bt(s.licensePlate):"",$=o.get(A)||ce(s.licensePlate),st=$.buildYear?`${$.title} (${$.buildYear})`:$.title,_=String(s.phone??"").trim(),tt=f(!_||_==="0000000000"?"Not filled in":_),ut=f(_==="0000000000"?"":_),L=f(Ht(s.message)||"No customer message."),et=f(Ut(s.message)||X(s,c)),ot=b?`<span class="fast-appt-dot" style="background: ${u}" aria-hidden="true"></span>`:`<span class="plate-chip">${W}</span>`,nt=Xt({leadMarkup:ot,name:X(s,c),vehicle:b?"":st,servicesMarkup:yt(s.service),timeLabel:y?"All day":`${H} - ${D}`,isExpanded:a,toggleDataAttribute:"data-calendar-toggle",toggleId:p,expandAriaLabel:"Expand appointment details",collapseAriaLabel:"Collapse appointment details"});return`
        <article class="request-card ${a?"is-expanded":""}" data-calendar-booking-id="${f(p)}">
          ${nt}

          ${a?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${At("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${tt}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${At("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${L}</span>
                </div>
              </div>

              <div class="request-actions">
                ${d?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Title</span>
                      <input type="text" data-schedule-edit-title value="${et}" placeholder="Title" />
                    </label>
                    <label class="request-edit-field">
                      <span>Phone</span>
                      <input type="tel" data-schedule-edit-phone value="${ut}" placeholder="Phone" />
                    </label>
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${Z}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${V}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${Zt(U)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Vanaf</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${S}" />
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
                          ${Lt(k,garage)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Tot</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${B}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${B}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${Lt(D,garage)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${f(p)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${f(p)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${f(p)}" aria-label="Edit booking">✎</button>
                ${d?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${f(p)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${f(p)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):zt("No appointments for this date.")}function G(t){return[...t].sort((e,n)=>new Date(e.appointmentAt??e.createdAt).getTime()-new Date(n.appointmentAt??n.createdAt).getTime())}async function Ce(t){var St,Mt,$t,Dt;if(!t)return;const e=await te();if(!e)return;if(!e.isAdmin&&!e.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}ee(e.activeGarage);const n=e.isAdmin?null:[(St=e.activeGarage)==null?void 0:St.id].filter(Boolean),o=((Mt=e.activeGarage)==null?void 0:Mt.id)??((Dt=($t=e.garages)==null?void 0:$t[0])==null?void 0:Dt.id)??"",{shell:s,contentArea:c,setUnreadEmailCount:p}=ne({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:e.user.email,onLogout:ae,garage:e.activeGarage,isAdmin:e.isAdmin});t.replaceChildren(s),c.innerHTML=`
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
  `;const a=c.querySelector("#calendarBoardBody"),d=c.querySelector("#calendarPeriodLabel"),g=c.querySelector("#calendarModeMonth"),b=c.querySelector("#calendarModeDay"),u=c.querySelector("#calendarDayTitle"),W=c.querySelector("#calendarDayCount"),H=c.querySelector("#calendarDayList"),U=new URLSearchParams(window.location.search),Z=["1","true","yes"].includes(String(U.get("quickadd")??"").trim().toLowerCase()),V=String(U.get("quickaddEdit")??U.get("editBookingId")??"").trim();let k=[],S=[],y=new Date,D=new Date(y.getFullYear(),y.getMonth(),1),B="month",A="",$="",st="",_="";const vt=de(e.activeGarage),tt=new Map,ut=()=>{const m=I(y);return S.filter(i=>Ft(i)===m).sort((i,r)=>new Date(i.appointmentAt??i.createdAt).getTime()-new Date(r.appointmentAt??r.createdAt).getTime())},L=()=>{const m=I(y),i=ut(),r=B==="day"&&(st!=="day"||_!==m);g.classList.toggle("is-active",B==="month"),b.classList.toggle("is-active",B==="day"),A&&!i.some(M=>String(M.id)===A)&&(A="",$=""),$&&!i.some(M=>String(M.id)===$)&&($=""),B==="month"?(d.textContent=fe(D),a.innerHTML=Ae(D,S,m)):(d.textContent=ye(y),a.innerHTML=Le(i,vt),r&&window.requestAnimationFrame(()=>{const M=a.querySelector(".day-board-list");if(!(M instanceof HTMLElement))return;const C=M.querySelector(".day-slot-row.has-booking");if(C instanceof HTMLElement){const q=a.getBoundingClientRect(),F=C.getBoundingClientRect(),x=a.scrollTop+(F.top-q.top)-8;a.scrollTo({top:Math.max(0,x),behavior:"auto"})}else a.scrollTo({top:0,behavior:"auto"})})),u.textContent=ve(y),W.textContent=`${i.length} appointment${i.length===1?"":"s"}`,H.innerHTML=Te(i,A,$,tt,e.activeGarage),st=B,_=m};let et=0,ot="",nt=0,wt="";c.addEventListener("click",async m=>{const i=m.target instanceof Element?m.target:null;if(!i||Gt(c,i))return;const r=i.closest("[data-calendar-nav]");if(r instanceof HTMLElement){const l=r.dataset.calendarNav;if(B==="month"){const h=new Date(D);h.setMonth(D.getMonth()+(l==="next"?1:-1)),D=new Date(h.getFullYear(),h.getMonth(),1)}else{const h=new Date(y);h.setDate(y.getDate()+(l==="next"?1:-1)),y=h,D=new Date(y.getFullYear(),y.getMonth(),1)}L();return}const M=i.closest("[data-calendar-mode]");if(M instanceof HTMLElement){B=M.dataset.calendarMode==="day"?"day":"month",L();return}const C=i.closest("[data-calendar-cell]");if(C instanceof HTMLElement){const l=C.dataset.calendarCell;if(l){const h=Date.now(),T=m.detail>=2||h-et<550&&ot===l;if(et=h,ot=l,T){et=0,z.openForCreate(l,"");return}const v=Y(`${l}T12:00:00`);v&&(y=v,D=new Date(y.getFullYear(),y.getMonth(),1),L())}return}const q=i.closest("[data-day-slot-booking-id]");if(q instanceof HTMLElement){const l=String(q.dataset.daySlotBookingId??"");l&&(A=l,$="",L(),window.requestAnimationFrame(()=>{const h=[...H.querySelectorAll("[data-calendar-booking-id]")].find(T=>T instanceof HTMLElement&&String(T.dataset.calendarBookingId??"")===l);h instanceof HTMLElement&&h.scrollIntoView({behavior:"smooth",block:"start"})}));return}const F=i.closest("[data-calendar-toggle]");if(F instanceof HTMLElement){const l=String(F.dataset.calendarToggle??"");A=A===l?"":l,A!==l&&($=""),L();return}const x=i.closest("[data-calendar-action]");if(x instanceof HTMLElement){const l=String(x.dataset.calendarAction??""),h=String(x.dataset.bookingId??"");if(!h)return;if(l==="edit"){const v=S.find(w=>String(w.id)===h)??k.find(w=>String(w.id)===h);v&&z.openForEdit(v);return}if(l==="cancel-edit"){$="",L();return}if(l==="save-schedule"){const v=x.closest("[data-calendar-booking-id]");if(!(v instanceof HTMLElement))return;const w=S.find(N=>String(N.id)===h);if(!w)return;const P=v.querySelector("[data-schedule-edit-date]"),R=v.querySelector("[data-schedule-edit-time]"),it=v.querySelector("[data-schedule-edit-end-time]"),Q=v.querySelector("[data-schedule-edit-title]"),J=v.querySelector("[data-schedule-edit-phone]");if(!(P instanceof HTMLInputElement)||!(R instanceof HTMLInputElement))return;const j=he(P.value,R.value);if(!j)return;const rt=(Q instanceof HTMLInputElement?Q.value.trim():Ut(w.message))||X(w,0),Rt=it instanceof HTMLInputElement?at(it.value.trim(),ft(R.value)):ft(R.value),pt=J instanceof HTMLInputElement?J.value.trim():String(w.phone??"").trim(),jt=dt(w.message),Yt=Ht(w.message)||"",mt=[`Name: ${rt}`,`AllDay: ${jt?"true":"false"}`,`End: ${Rt}`,`Message: ${Yt||ct}`].filter(Boolean).join(`
`);try{await Tt(w,j),await Ct(w,{name:rt,phone:pt,message:mt})}catch(N){window.alert(N instanceof Error?N.message:"Unable to save the appointment schedule.");return}k=G(k.map(N=>String(N.id)===h?{...N,appointmentAt:j,name:rt,phone:pt,message:mt}:N)),S=G(S.map(N=>String(N.id)===h?{...N,appointmentAt:j,name:rt,phone:pt,message:mt}:N));const lt=Y(j);lt&&(y=lt,D=new Date(lt.getFullYear(),lt.getMonth(),1)),$="",A=h,L();return}if(!S.find(v=>String(v.id)===h))return;L();return}const K=i.closest("[data-request-action]");if(K instanceof HTMLElement){const l=String(K.dataset.requestAction??""),h=String(K.dataset.bookingId??"");if(!h)return;const T=S.find(v=>String(v.id)===h);if(!T)return;if(l==="complete"){(async()=>{if(await Nt("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await se(T,{convertedFromEmail:T.source!=="manual"})}catch(w){window.alert(w instanceof Error?w.message:"Unable to mark appointment as completed.");return}window.location.href=Vt("completed.html")}})();return}if(l==="delete"){(async()=>{if(!await Nt("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;k=k.filter(P=>String(P.id)!==h),S=S.filter(P=>String(P.id)!==h),$="";const w=xt(k);p(w.unread),L()})();return}}const O=i.closest("[data-calendar-booking-id]");if(O instanceof HTMLElement&&!ge(i)){const l=String(O.dataset.calendarBookingId??"");if(!l)return;A=A===l?"":l,A!==l&&($=""),L()}});const z=Wt({onSubmit:async({mode:m,editingBookingId:i,name:r,phone:M,note:C,date:q,time:F,endTime:x,isAllDay:K,color:O,service:l,licensePlate:h,isSimpleAppointment:T})=>{if(!o)throw new Error("Geen garage beschikbaar.");if(m==="edit"&&i){const w=S.find(E=>String(E.id)===i)??k.find(E=>String(E.id)===i);if(!w)throw new Error("Appointment not found for editing.");const P=`${q}T${F}`,R=M||String(w.phone??"").trim()||"0000000000",it=C||ct,Q=T?l||"Simple appointment":l,J=T?"UNKNOWN":h||"UNKNOWN",j=[`Name: ${r}`,`AllDay: ${K?"true":"false"}`,`End: ${x}`,`Message: ${it}`].join(`
`);await Tt(w,P),await Ct(w,{name:r,phone:R,message:j,color:O,service:Q,licensePlate:J}),k=G(k.map(E=>String(E.id)===i?{...E,appointmentAt:P,name:r,color:O,message:j,service:Q,licensePlate:J}:E)),S=G(S.map(E=>String(E.id)===i?{...E,appointmentAt:P,name:r,color:O,message:j,service:Q,licensePlate:J}:E))}else await oe({garageId:o,name:r,licensePlate:T?"UNKNOWN":h||"UNKNOWN",phone:M||"0000000000",service:T?l||"Simple appointment":l||"Service",message:`Name: ${r}
AllDay: ${K?"true":"false"}
End: ${x}
Message: ${C||ct}`,color:O,appointmentAt:`${q}T${F}`}),k=G(await Et({garageIds:n})),S=G(k.filter(R=>R.inAppointments===!0&&!Pt(R)));const v=Y(`${q}T12:00:00`);v&&(y=v,D=new Date(v.getFullYear(),v.getMonth(),1)),L()}}),kt=()=>{const m=new URLSearchParams(window.location.search);m.delete("quickadd"),m.delete("quickaddEdit"),m.delete("editBookingId");const i=m.toString(),r=window.location.hash||"",M=`${window.location.pathname}${i?`?${i}`:""}${r}`;window.history.replaceState(null,"",M)},Kt=()=>{!Z||V||(z.openForCreate(I(y),"09:00"),kt())},Ot=()=>{if(!V)return;const m=S.find(i=>String(i.id)===V)??k.find(i=>String(i.id)===V);if(m){const i=Y(m.appointmentAt??m.createdAt);i&&(y=i,D=new Date(i.getFullYear(),i.getMonth(),1),B="day",A=String(m.id??""),$=String(m.id??""),L()),z.openForEdit(m)}kt()};a.addEventListener("click",m=>{const i=m.target instanceof Element?m.target:null;if(!i)return;const r=i.closest(".day-slot-row");if(r instanceof HTMLElement){const M=r.querySelector(".day-slot-time"),C=M instanceof HTMLElement?(M.textContent??"").trim():"",q=Date.now(),F=m.detail>=2||q-nt<550&&wt===C;if(nt=q,wt=C,F){if(nt=0,r.classList.contains("has-booking")){const x=i.closest("[data-day-slot-booking-id]"),K=r.querySelector("[data-day-slot-booking-id]"),O=String((x instanceof HTMLElement?x.dataset.daySlotBookingId:K instanceof HTMLElement?K.dataset.daySlotBookingId:"")??""),l=S.find(h=>String(h.id)===O);if(l){z.openForEdit(l);return}}z.openForCreate(I(y),C||"09:00")}}}),Kt();try{k=await Et({garageIds:n});const m=new Set(k.map(r=>r.licensePlate).filter(r=>r&&r!=="UNKNOWN").map(r=>bt(r)));for(const r of m)if(r&&!tt.has(r))try{const M=await ie(r);M&&tt.set(r,M)}catch(M){console.error(`Failed to fetch vehicle for ${r}:`,M)}S=G(k.filter(r=>r.inAppointments===!0&&!Pt(r)));const i=xt(k);p(i.unread),L(),Ot()}catch(m){a.innerHTML='<p class="muted">Unable to load calendar right now.</p>',H.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',p(0),console.error(m)}}const xe=document.querySelector("#app");_t();Ce(xe);

