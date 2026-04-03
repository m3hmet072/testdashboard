import{p as ce,d as te,c as ue}from"./theme-CzeyRWKH.js";/* empty css                      */import{e as pe,a as ge,c as me,l as he,b as fe,p as ve,m as ye,s as ne,g as be,d as we,f as ke}from"./branding-CLVp0Xjl.js";import{n as G,f as Se}from"./rdwService-CFrMDQAa.js";import{s as ae}from"./confirmDialog-DSEC2-zx.js";import{h as Me,n as Ce,f as De,a as $e,s as Le,b as xe}from"./scheduleTimePicker-zgpyiEd6.js";const Be=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],R={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},Ae=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function f(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Te(e=""){return{title:G(e)||"Unknown vehicle",buildYear:""}}function _(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function q(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function E(e){const t=e instanceof Date?e:q(e);if(!t)return"";const a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}-${o}-${n}`}function oe(e){const t=q(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function qe(e){const t=q(e);if(!t)return"";const a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}-${o}-${n}`}function Ee(e){const t=q(e);if(!t)return"09:00";const a=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0");return`${a}:${o}`}function Ie(e,t){const a=String(e??"").trim(),o=String(t??"").trim();if(!a||!o)return"";const n=`${a}T${o}:00`;return q(n)?n:""}function Pe(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function Ne(e){return e.toLocaleDateString(void 0,{month:"long",year:"numeric"})}function He(e){return e.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function Ye(e){return e.toLocaleDateString(void 0,{weekday:"short",day:"2-digit",month:"short"})}function Ke(e){const t=e.toLocaleDateString(void 0,{day:"2-digit",month:"short"});return E(e)===E(new Date)?`Today, ${t}`:Ye(e)}function je(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function Fe(e){return je(e.status)==="done"||e.inAppointments===!1}function Ue(e){const t=String(e??"").trim();if(!t)return["other"];const a=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(o=>o.trim()).filter(Boolean);return a.length?a:[t]}function Ve(e){return Ae.get(String(e??"").trim().toLowerCase())??"other"}function Oe(e){const t=String(e??"").trim();if(!t)return{key:"other",label:R.other};const a=t.toLowerCase(),o=Ve(t);if(o==="other"){if(["other","overig","overige"].includes(a))return{key:o,label:R.other};const n=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:o,label:n||t}}return{key:o,label:R[o]??t}}function se(e){return Ue(e).map(t=>{const{key:a,label:o}=Oe(t);return`<span class="service-chip service-chip-${a}">${f(o)}</span>`}).join("")}function ze(e){const a=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((a==null?void 0:a[1])??"").trim()}function Re(e){const t=String(e??""),a=t.match(/\bmessage\s*:\s*([\s\S]+)/i);return a!=null&&a[1]?a[1].trim():t.trim()}function ie(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const a=ze(e.message);if(a)return a;const o=String((e==null?void 0:e.licensePlate)??"").trim();return o?_(o):"UNKNOWN"}function re(e){return E(e.appointmentAt??e.createdAt)}function We(e,t,a){const o=new Date(e.getFullYear(),e.getMonth(),1),n=new Date(e.getFullYear(),e.getMonth()+1,0),m=n.getDate(),i=(o.getDay()+6)%7,s=t.reduce((l,v)=>{const g=re(v);return g&&l.set(g,(l.get(g)??0)+1),l},new Map),r=[];for(let l=i;l>0;l-=1){const v=new Date(o);v.setDate(1-l);const g=E(v);r.push({key:g,date:v,day:v.getDate(),isCurrentMonth:!1,isSelected:g===a,count:s.get(g)??0})}for(let l=1;l<=m;l+=1){const v=new Date(o.getFullYear(),o.getMonth(),l),g=E(v);r.push({key:g,date:v,day:l,isCurrentMonth:!0,isSelected:g===a,count:s.get(g)??0})}for(;r.length%7!==0;){const l=new Date(n),v=r.length-(i+m)+1;l.setDate(n.getDate()+v);const g=E(l);r.push({key:g,date:l,day:l.getDate(),isCurrentMonth:!1,isSelected:g===a,count:s.get(g)??0})}return r}function Ge(e,t,a){const o=We(e,t,a),n=E(new Date),m=Be.map(s=>`<span class="month-weekday">${s}</span>`).join(""),i=o.map(s=>{const r=["month-cell"];return s.isCurrentMonth||r.push("is-outside"),s.isSelected&&r.push("is-selected"),s.isCurrentMonth&&s.key===n&&r.push("is-today"),s.count>0&&r.push("has-bookings"),`
        <button class="${r.join(" ")}" type="button" data-calendar-cell="${s.key}">
          <span class="month-cell-day">${s.day}</span>
          ${s.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    <div class="month-grid-board">
      <div class="month-week-row">${m}</div>
      <div class="month-grid-cells">${i}</div>
    </div>
  `}function _e(e,t){const a=[];for(let n=0;n<=23;n+=1)a.push(`${String(n).padStart(2,"0")}:00`),a.push(`${String(n).padStart(2,"0")}:30`);const o=t.reduce((n,m,i)=>{const s=oe(m.appointmentAt??m.createdAt),r=n.get(s)??[];return r.push({booking:m,index:i}),n.set(s,r),n},new Map);return`
    <div class="day-board-list">
      ${a.map(n=>{const m=o.get(n)??[];if(!m.length)return`
              <div class="day-slot-row">
                <span class="day-slot-time">${n}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">Available</span>
              </div>
            `;const i=m.map(({booking:r,index:l},v)=>{const g=f(String(r.id??"")),B=f(r.licensePlate&&r.licensePlate!=="UNKNOWN"?_(r.licensePlate):"UNKNOWN"),S=f(ie(r)),w=m.length>1&&v<m.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${g}">
                <div class="day-slot-plate-wrapper">
                  <span class="plate-chip">${B}</span>
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${S}</span>
                  </div>
                  <div class="day-slot-status-services">
                    <span class="status-chip status-chip-progress">In Progress</span>
                    ${se(r.service)}
                  </div>
                </div>
              </div>
              ${w?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),s=m.length>1?`<span class="day-slot-count">${m.length} appointments</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${n}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${s}
                <div class="day-slot-bookings">
                  ${i}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function Ze(e,t,a,o){return e.length?e.map((n,m)=>{const i=String(n.id??""),s=t===i,r=a===i,l=n.appointmentAt??n.createdAt,v=f(n.licensePlate&&n.licensePlate!=="UNKNOWN"?_(n.licensePlate):"UNKNOWN"),g=f(oe(l)),B=Ce(qe(l)),S=f(B),w=f(De(B)),I=$e(Ee(l)),U=f(I),j=f(ie(n)),h=n.licensePlate?G(n.licensePlate):"",k=o.get(h)||Te(n.licensePlate),x=k.buildYear?`${k.title} (${k.buildYear})`:k.title,y=f(String(n.phone??"No phone number")),b=f(Re(n.message)||"No customer message.");return`
        <article class="request-card ${s?"is-expanded":""}" data-calendar-booking-id="${f(i)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${v}</span>
              <div class="request-info">
                <p class="request-name"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1668 7.08463C14.1668 4.78345 12.3013 2.91797 10.0002 2.91797C7.69898 2.91797 5.8335 4.78345 5.8335 7.08463C5.8335 9.3858 7.69898 11.2513 10.0002 11.2513C12.3013 11.2513 14.1668 9.3858 14.1668 7.08463Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8332 17.0833C15.8332 13.8617 13.2215 11.25 9.99984 11.25C6.77818 11.25 4.1665 13.8617 4.1665 17.0833" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${j}</p>
                <p class="request-vehicle"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50667 14.1667C7.50667 15.0872 6.76048 15.8333 5.84001 15.8333C4.91953 15.8333 4.17334 15.0872 4.17334 14.1667C4.17334 13.2462 4.91953 12.5 5.84001 12.5C6.76048 12.5 7.50667 13.2462 7.50667 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M15.8397 14.1667C15.8397 15.0872 15.0935 15.8333 14.173 15.8333C13.2525 15.8333 12.5063 15.0872 12.5063 14.1667C12.5063 13.2462 13.2525 12.5 14.173 12.5C15.0935 12.5 15.8397 13.2462 15.8397 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M1.67301 8.33464H15.0063M1.67301 8.33464C1.67301 8.98464 1.65635 10.868 1.67634 12.718C1.70632 13.318 1.80624 13.818 4.17444 14.168M1.67301 8.33464C1.85288 6.88464 2.63561 5.16797 3.0353 4.51797M7.50634 8.33464V4.16797M12.4981 14.168H7.5019M1.68634 4.16797H10.1998C10.1998 4.16797 10.6495 4.16797 11.0492 4.20797C11.7987 4.27797 12.4282 4.61797 13.0577 5.46797C13.7242 6.36797 14.2367 7.50797 14.9162 8.11797C16.0454 9.13164 18.1937 8.81797 18.3137 10.968C18.3437 12.068 18.3437 13.268 18.2937 13.468C18.2134 14.0569 17.7593 14.1531 17.1945 14.168C16.7043 14.181 16.1134 14.1447 15.8256 14.168" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
${x}</p>
                <div class="request-services">${se(n.service)}</div>
              </div>
            </div>
            <div class="request-meta">
              <span class="request-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${g}</span>
              <button
                class="request-toggle ${s?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${f(i)}"
                aria-expanded="${s?"true":"false"}"
                aria-label="${s?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          ${s?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${te("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${y}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${te("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${b}</span>
                </div>
              </div>

              <div class="request-actions">
                ${r?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${S}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${w}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${Le(B)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Time</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${U}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${U}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${xe(I)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${f(i)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${f(i)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${f(i)}" aria-label="Edit booking">✎</button>
                ${r?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${f(i)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments for this date.</p></article>'}function W(e){return[...e].sort((t,a)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime())}async function Je(e){var Q;if(!e)return;const t=await pe();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}ge(t.activeGarage);const a=t.isAdmin?null:[(Q=t.activeGarage)==null?void 0:Q.id].filter(Boolean),{shell:o,contentArea:n,setUnreadEmailCount:m}=me({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:t.user.email,onLogout:he,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(o),n.innerHTML=`
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
  `;const i=n.querySelector("#calendarBoardBody"),s=n.querySelector("#calendarPeriodLabel"),r=n.querySelector("#calendarModeMonth"),l=n.querySelector("#calendarModeDay"),v=n.querySelector("#calendarDayTitle"),g=n.querySelector("#calendarDayCount"),B=n.querySelector("#calendarDayList");let S=[],w=[];const I=fe("calendar",{}),U=q(I.selectedDate??""),j=q(I.currentMonth??"");let h=U??new Date,k=j?new Date(j.getFullYear(),j.getMonth(),1):new Date(h.getFullYear(),h.getMonth(),1),x=I.activeMode==="day"?"day":"month",y=String(I.expandedBookingId??"").trim(),b=String(I.editingBookingId??"").trim(),Z="",J="";const O=new Map,de=()=>{ke("calendar",{selectedDate:h.toISOString(),currentMonth:k.toISOString(),activeMode:x,expandedBookingId:y,editingBookingId:b})},le=()=>{const C=E(h);return w.filter(c=>re(c)===C).sort((c,A)=>new Date(c.appointmentAt??c.createdAt).getTime()-new Date(A.appointmentAt??A.createdAt).getTime())},M=()=>{const C=E(h),c=le(),A=x==="day"&&(Z!=="day"||J!==C);r.classList.toggle("is-active",x==="month"),l.classList.toggle("is-active",x==="day"),y&&!c.some($=>String($.id)===y)&&(y="",b=""),b&&!c.some($=>String($.id)===b)&&(b=""),x==="month"?(s.textContent=Ne(k),i.innerHTML=Ge(k,w,C)):(s.textContent=He(h),i.innerHTML=_e(h,c),A&&window.requestAnimationFrame(()=>{const $=i.querySelector(".day-board-list");if(!($ instanceof HTMLElement))return;const P=$.querySelector(".day-slot-row.has-booking");if(P instanceof HTMLElement){const p=i.getBoundingClientRect(),L=P.getBoundingClientRect(),Y=i.scrollTop+(L.top-p.top)-8;i.scrollTo({top:Math.max(0,Y),behavior:"auto"})}else i.scrollTo({top:0,behavior:"auto"})})),v.textContent=Ke(h),g.textContent=`${c.length} appointment${c.length===1?"":"s"}`,B.innerHTML=Ze(c,y,b,O),Z=x,J=C,de()};n.addEventListener("click",async C=>{const c=C.target instanceof Element?C.target:null;if(!c||Me(n,c))return;const A=c.closest("[data-calendar-nav]");if(A instanceof HTMLElement){const u=A.dataset.calendarNav;if(x==="month"){const d=new Date(k);d.setMonth(k.getMonth()+(u==="next"?1:-1)),k=new Date(d.getFullYear(),d.getMonth(),1)}else{const d=new Date(h);d.setDate(h.getDate()+(u==="next"?1:-1)),h=d,k=new Date(h.getFullYear(),h.getMonth(),1)}M();return}const $=c.closest("[data-calendar-mode]");if($ instanceof HTMLElement){x=$.dataset.calendarMode==="day"?"day":"month",M();return}const P=c.closest("[data-calendar-cell]");if(P instanceof HTMLElement){const u=P.dataset.calendarCell;if(u){const d=q(`${u}T12:00:00`);d&&(h=d,k=new Date(h.getFullYear(),h.getMonth(),1),M())}return}const p=c.closest("[data-day-slot-booking-id]");if(p instanceof HTMLElement){const u=String(p.dataset.daySlotBookingId??"");u&&(y=u,b="",M(),window.requestAnimationFrame(()=>{const d=[...B.querySelectorAll("[data-calendar-booking-id]")].find(N=>N instanceof HTMLElement&&String(N.dataset.calendarBookingId??"")===u);d instanceof HTMLElement&&d.scrollIntoView({behavior:"smooth",block:"start"})}));return}const L=c.closest("[data-calendar-toggle]");if(L instanceof HTMLElement){const u=String(L.dataset.calendarToggle??"");y=y===u?"":u,y!==u&&(b=""),M();return}const Y=c.closest("[data-calendar-action]");if(Y instanceof HTMLElement){const u=String(Y.dataset.calendarAction??""),d=String(Y.dataset.bookingId??"");if(!d)return;if(u==="edit"){y=d,b=b===d?"":d,M();return}if(u==="cancel-edit"){b="",M();return}if(u==="save-schedule"){const T=Y.closest("[data-calendar-booking-id]");if(!(T instanceof HTMLElement))return;const H=w.find(D=>String(D.id)===d);if(!H)return;const K=T.querySelector("[data-schedule-edit-date]"),ee=T.querySelector("[data-schedule-edit-time]");if(!(K instanceof HTMLInputElement)||!(ee instanceof HTMLInputElement))return;const F=Ie(K.value,ee.value);if(!F)return;try{await ve(H,F)}catch(D){window.alert(D instanceof Error?D.message:"Unable to save the appointment schedule.");return}S=W(S.map(D=>String(D.id)===d?{...D,appointmentAt:F}:D)),w=W(w.map(D=>String(D.id)===d?{...D,appointmentAt:F}:D));const V=q(F);V&&(h=V,k=new Date(V.getFullYear(),V.getMonth(),1)),b="",y=d,M();return}if(!w.find(T=>String(T.id)===d))return;M();return}const z=c.closest("[data-request-action]");if(z instanceof HTMLElement){const u=String(z.dataset.requestAction??""),d=String(z.dataset.bookingId??"");if(!d)return;const N=w.find(T=>String(T.id)===d);if(!N)return;if(u==="complete"){(async()=>{if(await ae("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await ye(N,{convertedFromEmail:N.source!=="manual"})}catch(H){window.alert(H instanceof Error?H.message:"Unable to mark appointment as completed.");return}window.location.href=ce("completed.html")}})();return}if(u==="delete"){(async()=>{if(!await ae("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;S=S.filter(K=>String(K.id)!==d),w=w.filter(K=>String(K.id)!==d),b="";const H=ne(S);m(H.unread),M()})();return}}const X=c.closest("[data-calendar-booking-id]");if(X instanceof HTMLElement&&!Pe(c)){const u=String(X.dataset.calendarBookingId??"");if(!u)return;y=y===u?"":u,y!==u&&(b=""),M()}});try{const[C,c]=await Promise.all([be({garageIds:a}),we({garageIds:a})]),A=new Set(c.map(p=>String(p.bookingId??p.id??"").trim()).filter(Boolean));S=C;const $=new Set(S.map(p=>p.licensePlate).filter(p=>p&&p!=="UNKNOWN").map(p=>G(p)));for(const p of $)if(p&&!O.has(p))try{const L=await Se(p);L&&O.set(p,L)}catch(L){console.error(`Failed to fetch vehicle for ${p}:`,L)}w=W(S.filter(p=>{const L=String(p.id??"").trim();return p.inAppointments===!0&&!Fe(p)&&!A.has(L)}));const P=ne(S);m(P.unread),M()}catch(C){i.innerHTML='<p class="muted">Unable to load calendar right now.</p>',B.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',m(0),console.error(C)}}const Qe=document.querySelector("#app");ue();Je(Qe);
