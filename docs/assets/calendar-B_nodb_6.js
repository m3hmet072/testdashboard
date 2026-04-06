import{p as ve,d as de,c as ye}from"./theme-shgkqnbR.js";/* empty css                      */import{e as be,a as we,c as ke,l as Se,d as Me,p as Ce,m as De,s as le,g as Le,b as $e,f as xe}from"./branding-BLWMl1Cd.js";import{n as J,f as Be}from"./rdwService-CFrMDQAa.js";import{s as ce}from"./confirmDialog-DSEC2-zx.js";import{h as Ae,n as Te,f as qe,a as Ee,s as Ie,b as Pe}from"./scheduleTimePicker-zgpyiEd6.js";const Ne=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],W={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},He=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function f(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Ye(t=""){return{title:J(t)||"Unknown vehicle",buildYear:""}}function Q(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function T(t){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function q(t){const e=t instanceof Date?t:T(t);if(!e)return"";const n=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${n}-${o}-${a}`}function ue(t){const e=T(t);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function Fe(t){const e=T(t);if(!e)return"";const n=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${n}-${o}-${a}`}function Ke(t){const e=T(t);if(!e)return"09:00";const n=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return`${n}:${o}`}function Ve(t,e){const n=String(t??"").trim(),o=String(e??"").trim();if(!n||!o)return"";const a=`${n}T${o}:00`;return T(a)?a:""}function je(t){return t instanceof Element&&!!t.closest("button, input, select, textarea, a, label")}function Ue(t){return t.toLocaleDateString(void 0,{month:"long",year:"numeric"})}function Oe(t){return t.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function ze(t){return t.toLocaleDateString(void 0,{weekday:"short",day:"2-digit",month:"short"})}function Ge(t){const e=t.toLocaleDateString(void 0,{day:"2-digit",month:"short"});return q(t)===q(new Date)?`Today, ${e}`:ze(t)}function Re(t){const e=String(t??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function _e(t){return Re(t.status)==="done"||t.inAppointments===!1}function We(t){const e=String(t??"").trim();if(!e)return["other"];const n=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(o=>o.trim()).filter(Boolean);return n.length?n:[e]}function Ze(t){return He.get(String(t??"").trim().toLowerCase())??"other"}function Je(t){const e=String(t??"").trim();if(!e)return{key:"other",label:W.other};const n=e.toLowerCase(),o=Ze(e);if(o==="other"){if(["other","overig","overige"].includes(n))return{key:o,label:W.other};const a=e.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:o,label:a||e}}return{key:o,label:W[o]??e}}function pe(t){return We(t).map(e=>{const{key:n,label:o}=Je(e);return`<span class="service-chip service-chip-${n}">${f(o)}</span>`}).join("")}function Qe(t){const n=String(t??"").match(/\bname\s*:\s*([^\n]+)/i);return((n==null?void 0:n[1])??"").trim()}function Xe(t){const e=String(t??""),n=e.match(/\bmessage\s*:\s*([\s\S]+)/i);return n!=null&&n[1]?n[1].trim():e.trim()}function ge(t){const e=String((t==null?void 0:t.name)??"").trim();if(e)return e;const n=Qe(t.message);if(n)return n;const o=String((t==null?void 0:t.licensePlate)??"").trim();return o?Q(o):"UNKNOWN"}function me(t){return q(t.appointmentAt??t.createdAt)}function et(t,e,n){const o=new Date(t.getFullYear(),t.getMonth(),1),a=new Date(t.getFullYear(),t.getMonth()+1,0),m=a.getDate(),i=(o.getDay()+6)%7,r=e.reduce((l,v)=>{const g=me(v);return g&&l.set(g,(l.get(g)??0)+1),l},new Map),s=[];for(let l=i;l>0;l-=1){const v=new Date(o);v.setDate(1-l);const g=q(v);s.push({key:g,date:v,day:v.getDate(),isCurrentMonth:!1,isSelected:g===n,count:r.get(g)??0})}for(let l=1;l<=m;l+=1){const v=new Date(o.getFullYear(),o.getMonth(),l),g=q(v);s.push({key:g,date:v,day:l,isCurrentMonth:!0,isSelected:g===n,count:r.get(g)??0})}for(;s.length%7!==0;){const l=new Date(a),v=s.length-(i+m)+1;l.setDate(a.getDate()+v);const g=q(l);s.push({key:g,date:l,day:l.getDate(),isCurrentMonth:!1,isSelected:g===n,count:r.get(g)??0})}return s}function tt(t,e,n){const o=et(t,e,n),a=q(new Date),m=Ne.map(r=>`<span class="month-weekday">${r}</span>`).join(""),i=o.map(r=>{const s=["month-cell"];return r.isCurrentMonth||s.push("is-outside"),r.isSelected&&s.push("is-selected"),r.isCurrentMonth&&r.key===a&&s.push("is-today"),r.count>0&&s.push("has-bookings"),`
        <button class="${s.join(" ")}" type="button" data-calendar-cell="${r.key}">
          <span class="month-cell-day">${r.day}</span>
          ${r.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    <div class="month-grid-board">
      <div class="month-week-row">${m}</div>
      <div class="month-grid-cells">${i}</div>
    </div>
  `}function nt(t,e){const n=[];for(let a=0;a<=23;a+=1)n.push(`${String(a).padStart(2,"0")}:00`),n.push(`${String(a).padStart(2,"0")}:30`);const o=e.reduce((a,m,i)=>{const r=ue(m.appointmentAt??m.createdAt),s=a.get(r)??[];return s.push({booking:m,index:i}),a.set(r,s),a},new Map);return`
    <div class="day-board-list">
      ${n.map(a=>{const m=o.get(a)??[];if(!m.length)return`
              <div class="day-slot-row">
                <span class="day-slot-time">${a}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">Available</span>
              </div>
            `;const i=m.map(({booking:s,index:l},v)=>{const g=f(String(s.id??"")),P=f(s.licensePlate&&s.licensePlate!=="UNKNOWN"?Q(s.licensePlate):"UNKNOWN"),j=f(ge(s)),N=m.length>1&&v<m.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${g}">
                <div class="day-slot-plate-wrapper">
                  <span class="plate-chip">${P}</span>
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${j}</span>
                  </div>
                  <div class="day-slot-status-services">
                    <span class="status-chip status-chip-progress">In Progress</span>
                    ${pe(s.service)}
                  </div>
                </div>
              </div>
              ${N?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),r=m.length>1?`<span class="day-slot-count">${m.length} appointments</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${a}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${r}
                <div class="day-slot-bookings">
                  ${i}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function at(t,e,n,o){return t.length?t.map((a,m)=>{const i=String(a.id??""),r=e===i,s=n===i,l=a.appointmentAt??a.createdAt,v=f(a.licensePlate&&a.licensePlate!=="UNKNOWN"?Q(a.licensePlate):"UNKNOWN"),g=f(ue(l)),P=Te(Fe(l)),j=f(P),N=f(qe(P)),k=Ee(Ke(l)),w=f(k),x=f(ge(a)),z=a.licensePlate?J(a.licensePlate):"",E=o.get(z)||Ye(a.licensePlate),h=E.buildYear?`${E.title} (${E.buildYear})`:E.title,D=f(String(a.phone??"No phone number")),G=f(Xe(a.message)||"No customer message.");return`
        <article class="request-card ${r?"is-expanded":""}" data-calendar-booking-id="${f(i)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${v}</span>
              <div class="request-info">
                <p class="request-name"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1668 7.08463C14.1668 4.78345 12.3013 2.91797 10.0002 2.91797C7.69898 2.91797 5.8335 4.78345 5.8335 7.08463C5.8335 9.3858 7.69898 11.2513 10.0002 11.2513C12.3013 11.2513 14.1668 9.3858 14.1668 7.08463Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8332 17.0833C15.8332 13.8617 13.2215 11.25 9.99984 11.25C6.77818 11.25 4.1665 13.8617 4.1665 17.0833" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${x}</p>
                <p class="request-vehicle"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50667 14.1667C7.50667 15.0872 6.76048 15.8333 5.84001 15.8333C4.91953 15.8333 4.17334 15.0872 4.17334 14.1667C4.17334 13.2462 4.91953 12.5 5.84001 12.5C6.76048 12.5 7.50667 13.2462 7.50667 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M15.8397 14.1667C15.8397 15.0872 15.0935 15.8333 14.173 15.8333C13.2525 15.8333 12.5063 15.0872 12.5063 14.1667C12.5063 13.2462 13.2525 12.5 14.173 12.5C15.0935 12.5 15.8397 13.2462 15.8397 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M1.67301 8.33464H15.0063M1.67301 8.33464C1.67301 8.98464 1.65635 10.868 1.67634 12.718C1.70632 13.318 1.80624 13.818 4.17444 14.168M1.67301 8.33464C1.85288 6.88464 2.63561 5.16797 3.0353 4.51797M7.50634 8.33464V4.16797M12.4981 14.168H7.5019M1.68634 4.16797H10.1998C10.1998 4.16797 10.6495 4.16797 11.0492 4.20797C11.7987 4.27797 12.4282 4.61797 13.0577 5.46797C13.7242 6.36797 14.2367 7.50797 14.9162 8.11797C16.0454 9.13164 18.1937 8.81797 18.3137 10.968C18.3437 12.068 18.3437 13.268 18.2937 13.468C18.2134 14.0569 17.7593 14.1531 17.1945 14.168C16.7043 14.181 16.1134 14.1447 15.8256 14.168" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
${h}</p>
                <div class="request-services">${pe(a.service)}</div>
              </div>
            </div>
            <div class="request-meta">
              <span class="request-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${g}</span>
              <button
                class="request-toggle ${r?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${f(i)}"
                aria-expanded="${r?"true":"false"}"
                aria-label="${r?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          ${r?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${de("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${D}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${de("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${G}</span>
                </div>
              </div>

              <div class="request-actions">
                ${s?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${j}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${N}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${Ie(P)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Time</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${w}" />
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
                          ${Pe(k)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${f(i)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${f(i)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${f(i)}" aria-label="Edit booking">✎</button>
                ${s?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${f(i)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${f(i)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments for this date.</p></article>'}function Z(t){return[...t].sort((e,n)=>new Date(e.appointmentAt??e.createdAt).getTime()-new Date(n.appointmentAt??n.createdAt).getTime())}async function ot(t){var te,ne,ae,oe,se;if(!t)return;const e=await be();if(!e)return;if(!e.isAdmin&&!e.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}we(e.activeGarage);const n=e.isAdmin?null:[(te=e.activeGarage)==null?void 0:te.id].filter(Boolean),o=String(((ne=e.activeGarage)==null?void 0:ne.calendarStyle)??((ae=e.activeGarage)==null?void 0:ae.calendar_style)??"1"),a=String(((oe=e.activeGarage)==null?void 0:oe.calendarDefaultView)??((se=e.activeGarage)==null?void 0:se.calendar_default_view)??"month").toLowerCase(),{shell:m,contentArea:i,setUnreadEmailCount:r}=ke({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:e.user.email,onLogout:Se,garage:e.activeGarage,isAdmin:e.isAdmin});t.replaceChildren(m),m.classList.toggle("calendar-style-agenda",o==="2"),i.innerHTML=`
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
  `;const s=i.querySelector("#calendarBoardBody"),l=i.querySelector("#calendarPeriodLabel"),v=i.querySelector("#calendarModeMonth"),g=i.querySelector("#calendarModeDay"),P=i.querySelector("#calendarDayTitle"),j=i.querySelector("#calendarDayCount"),N=i.querySelector("#calendarDayList");let k=[],w=[];const x=Me("calendar",{}),z=T(x.selectedDate??""),E=T(x.currentMonth??"");let h=z??new Date,D=E?new Date(E.getFullYear(),E.getMonth(),1):new Date(h.getFullYear(),h.getMonth(),1);const G=a==="day"||a==="week"||a==="agenda"?"day":"month";let I=x.activeMode==="day"||x.activeMode==="month"?x.activeMode:G,y=String(x.expandedBookingId??"").trim(),b=String(x.editingBookingId??"").trim(),X="",ee="";const R=new Map,he=()=>{xe("calendar",{selectedDate:h.toISOString(),currentMonth:D.toISOString(),activeMode:I,expandedBookingId:y,editingBookingId:b})},fe=()=>{const M=q(h);return w.filter(c=>me(c)===M).sort((c,B)=>new Date(c.appointmentAt??c.createdAt).getTime()-new Date(B.appointmentAt??B.createdAt).getTime())},S=()=>{const M=q(h),c=fe(),B=I==="day"&&(X!=="day"||ee!==M);v.classList.toggle("is-active",I==="month"),g.classList.toggle("is-active",I==="day"),y&&!c.some(L=>String(L.id)===y)&&(y="",b=""),b&&!c.some(L=>String(L.id)===b)&&(b=""),I==="month"?(l.textContent=Ue(D),s.innerHTML=tt(D,w,M)):(l.textContent=Oe(h),s.innerHTML=nt(h,c),B&&window.requestAnimationFrame(()=>{const L=s.querySelector(".day-board-list");if(!(L instanceof HTMLElement))return;const H=L.querySelector(".day-slot-row.has-booking");if(H instanceof HTMLElement){const p=s.getBoundingClientRect(),$=H.getBoundingClientRect(),K=s.scrollTop+($.top-p.top)-8;s.scrollTo({top:Math.max(0,K),behavior:"auto"})}else s.scrollTo({top:0,behavior:"auto"})})),P.textContent=Ge(h),j.textContent=`${c.length} appointment${c.length===1?"":"s"}`,N.innerHTML=at(c,y,b,R),X=I,ee=M,he()};i.addEventListener("click",async M=>{const c=M.target instanceof Element?M.target:null;if(!c||Ae(i,c))return;const B=c.closest("[data-calendar-nav]");if(B instanceof HTMLElement){const u=B.dataset.calendarNav;if(I==="month"){const d=new Date(D);d.setMonth(D.getMonth()+(u==="next"?1:-1)),D=new Date(d.getFullYear(),d.getMonth(),1)}else{const d=new Date(h);d.setDate(h.getDate()+(u==="next"?1:-1)),h=d,D=new Date(h.getFullYear(),h.getMonth(),1)}S();return}const L=c.closest("[data-calendar-mode]");if(L instanceof HTMLElement){I=L.dataset.calendarMode==="day"?"day":"month",S();return}const H=c.closest("[data-calendar-cell]");if(H instanceof HTMLElement){const u=H.dataset.calendarCell;if(u){const d=T(`${u}T12:00:00`);d&&(h=d,D=new Date(h.getFullYear(),h.getMonth(),1),S())}return}const p=c.closest("[data-day-slot-booking-id]");if(p instanceof HTMLElement){const u=String(p.dataset.daySlotBookingId??"");u&&(y=u,b="",S(),window.requestAnimationFrame(()=>{const d=[...N.querySelectorAll("[data-calendar-booking-id]")].find(Y=>Y instanceof HTMLElement&&String(Y.dataset.calendarBookingId??"")===u);d instanceof HTMLElement&&d.scrollIntoView({behavior:"smooth",block:"start"})}));return}const $=c.closest("[data-calendar-toggle]");if($ instanceof HTMLElement){const u=String($.dataset.calendarToggle??"");y=y===u?"":u,y!==u&&(b=""),S();return}const K=c.closest("[data-calendar-action]");if(K instanceof HTMLElement){const u=String(K.dataset.calendarAction??""),d=String(K.dataset.bookingId??"");if(!d)return;if(u==="edit"){y=d,b=b===d?"":d,S();return}if(u==="cancel-edit"){b="",S();return}if(u==="save-schedule"){const A=K.closest("[data-calendar-booking-id]");if(!(A instanceof HTMLElement))return;const F=w.find(C=>String(C.id)===d);if(!F)return;const V=A.querySelector("[data-schedule-edit-date]"),re=A.querySelector("[data-schedule-edit-time]");if(!(V instanceof HTMLInputElement)||!(re instanceof HTMLInputElement))return;const U=Ve(V.value,re.value);if(!U)return;try{await Ce(F,U)}catch(C){window.alert(C instanceof Error?C.message:"Unable to save the appointment schedule.");return}k=Z(k.map(C=>String(C.id)===d?{...C,appointmentAt:U}:C)),w=Z(w.map(C=>String(C.id)===d?{...C,appointmentAt:U}:C));const O=T(U);O&&(h=O,D=new Date(O.getFullYear(),O.getMonth(),1)),b="",y=d,S();return}if(!w.find(A=>String(A.id)===d))return;S();return}const _=c.closest("[data-request-action]");if(_ instanceof HTMLElement){const u=String(_.dataset.requestAction??""),d=String(_.dataset.bookingId??"");if(!d)return;const Y=w.find(A=>String(A.id)===d);if(!Y)return;if(u==="complete"){(async()=>{if(await ce("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await De(Y,{convertedFromEmail:Y.source!=="manual"})}catch(F){window.alert(F instanceof Error?F.message:"Unable to mark appointment as completed.");return}window.location.href=ve("completed.html")}})();return}if(u==="delete"){(async()=>{if(!await ce("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;k=k.filter(V=>String(V.id)!==d),w=w.filter(V=>String(V.id)!==d),b="";const F=le(k);r(F.unread),S()})();return}}const ie=c.closest("[data-calendar-booking-id]");if(ie instanceof HTMLElement&&!je(c)){const u=String(ie.dataset.calendarBookingId??"");if(!u)return;y=y===u?"":u,y!==u&&(b=""),S()}});try{const[M,c]=await Promise.all([Le({garageIds:n}),$e({garageIds:n})]),B=new Set(c.map(p=>String(p.bookingId??p.id??"").trim()).filter(Boolean));k=M;const L=new Set(k.map(p=>p.licensePlate).filter(p=>p&&p!=="UNKNOWN").map(p=>J(p)));for(const p of L)if(p&&!R.has(p))try{const $=await Be(p);$&&R.set(p,$)}catch($){console.error(`Failed to fetch vehicle for ${p}:`,$)}w=Z(k.filter(p=>{const $=String(p.id??"").trim();return p.inAppointments===!0&&!_e(p)&&!B.has($)}));const H=le(k);r(H.unread),S()}catch(M){s.innerHTML='<p class="muted">Unable to load calendar right now.</p>',N.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',r(0),console.error(M)}}const st=document.querySelector("#app");ye();ot(st);
