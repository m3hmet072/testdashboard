import{p as ie,d as Q,c as re}from"./theme-Bb-bjqwO.js";/* empty css                      */import{e as le,a as de,c as ce,l as ue,p as pe,m as me,s as X,g as he}from"./branding-BytcG8ls.js";import{n as W,f as ge}from"./rdwService-CFrMDQAa.js";import{s as ee}from"./confirmDialog-DSEC2-zx.js";import{h as fe,n as ve,f as ye,a as be,s as we,b as ke}from"./scheduleTimePicker-zgpyiEd6.js";const Se=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],z={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},Me=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function f(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Ce(e=""){return{title:W(e)||"Unknown vehicle",buildYear:""}}function G(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function E(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function A(e){const t=e instanceof Date?e:E(e);if(!t)return"";const a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}-${o}-${n}`}function te(e){const t=E(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function De(e){const t=E(e);if(!t)return"";const a=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}-${o}-${n}`}function $e(e){const t=E(e);if(!t)return"09:00";const a=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0");return`${a}:${o}`}function Le(e,t){const a=String(e??"").trim(),o=String(t??"").trim();if(!a||!o)return"";const n=`${a}T${o}:00`;return E(n)?n:""}function xe(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function Te(e){return e.toLocaleDateString(void 0,{month:"long",year:"numeric"})}function Ae(e){return e.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function qe(e){return e.toLocaleDateString(void 0,{weekday:"short",day:"2-digit",month:"short"})}function Be(e){const t=e.toLocaleDateString(void 0,{day:"2-digit",month:"short"});return A(e)===A(new Date)?`Today, ${t}`:qe(e)}function Ee(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function Ie(e){return Ee(e.status)==="done"||e.inAppointments===!1}function Ne(e){const t=String(e??"").trim();if(!t)return["other"];const a=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(o=>o.trim()).filter(Boolean);return a.length?a:[t]}function He(e){return Me.get(String(e??"").trim().toLowerCase())??"other"}function Pe(e){const t=String(e??"").trim();if(!t)return{key:"other",label:z.other};const a=t.toLowerCase(),o=He(t);if(o==="other"){if(["other","overig","overige"].includes(a))return{key:o,label:z.other};const n=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:o,label:n||t}}return{key:o,label:z[o]??t}}function ne(e){return Ne(e).map(t=>{const{key:a,label:o}=Pe(t);return`<span class="service-chip service-chip-${a}">${f(o)}</span>`}).join("")}function Ye(e){const a=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((a==null?void 0:a[1])??"").trim()}function Ke(e){const t=String(e??""),a=t.match(/\bmessage\s*:\s*([\s\S]+)/i);return a!=null&&a[1]?a[1].trim():t.trim()}function ae(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const a=Ye(e.message);if(a)return a;const o=String((e==null?void 0:e.licensePlate)??"").trim();return o?G(o):"UNKNOWN"}function oe(e){return A(e.appointmentAt??e.createdAt)}function je(e,t,a){const o=new Date(e.getFullYear(),e.getMonth(),1),n=new Date(e.getFullYear(),e.getMonth()+1,0),h=n.getDate(),i=(o.getDay()+6)%7,s=t.reduce((d,y)=>{const m=oe(y);return m&&d.set(m,(d.get(m)??0)+1),d},new Map),r=[];for(let d=i;d>0;d-=1){const y=new Date(o);y.setDate(1-d);const m=A(y);r.push({key:m,date:y,day:y.getDate(),isCurrentMonth:!1,isSelected:m===a,count:s.get(m)??0})}for(let d=1;d<=h;d+=1){const y=new Date(o.getFullYear(),o.getMonth(),d),m=A(y);r.push({key:m,date:y,day:d,isCurrentMonth:!0,isSelected:m===a,count:s.get(m)??0})}for(;r.length%7!==0;){const d=new Date(n),y=r.length-(i+h)+1;d.setDate(n.getDate()+y);const m=A(d);r.push({key:m,date:d,day:d.getDate(),isCurrentMonth:!1,isSelected:m===a,count:s.get(m)??0})}return r}function Fe(e,t,a){const o=je(e,t,a),n=A(new Date),h=Se.map(s=>`<span class="month-weekday">${s}</span>`).join(""),i=o.map(s=>{const r=["month-cell"];return s.isCurrentMonth||r.push("is-outside"),s.isSelected&&r.push("is-selected"),s.isCurrentMonth&&s.key===n&&r.push("is-today"),s.count>0&&r.push("has-bookings"),`
        <button class="${r.join(" ")}" type="button" data-calendar-cell="${s.key}">
          <span class="month-cell-day">${s.day}</span>
          ${s.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    <div class="month-grid-board">
      <div class="month-week-row">${h}</div>
      <div class="month-grid-cells">${i}</div>
    </div>
  `}function Ue(e,t){const a=[];for(let n=0;n<=23;n+=1)a.push(`${String(n).padStart(2,"0")}:00`),a.push(`${String(n).padStart(2,"0")}:30`);const o=t.reduce((n,h,i)=>{const s=te(h.appointmentAt??h.createdAt),r=n.get(s)??[];return r.push({booking:h,index:i}),n.set(s,r),n},new Map);return`
    <div class="day-board-list">
      ${a.map(n=>{const h=o.get(n)??[];if(!h.length)return`
              <div class="day-slot-row">
                <span class="day-slot-time">${n}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">Available</span>
              </div>
            `;const i=h.map(({booking:r,index:d},y)=>{const m=f(String(r.id??"")),L=f(r.licensePlate&&r.licensePlate!=="UNKNOWN"?G(r.licensePlate):"UNKNOWN"),S=f(ae(r)),w=h.length>1&&y<h.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${m}">
                <div class="day-slot-plate-wrapper">
                  <span class="plate-chip">${L}</span>
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${S}</span>
                  </div>
                  <div class="day-slot-status-services">
                    <span class="status-chip status-chip-progress">In Progress</span>
                    ${ne(r.service)}
                  </div>
                </div>
              </div>
              ${w?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),s=h.length>1?`<span class="day-slot-count">${h.length} appointments</span>`:"";return`
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
  `}function Ve(e,t,a,o){return e.length?e.map((n,h)=>{const i=String(n.id??""),s=t===i,r=a===i,d=n.appointmentAt??n.createdAt,y=f(n.licensePlate&&n.licensePlate!=="UNKNOWN"?G(n.licensePlate):"UNKNOWN"),m=f(te(d)),L=ve(De(d)),S=f(L),w=f(ye(L)),g=be($e(d)),$=f(g),x=f(ae(n)),b=n.licensePlate?W(n.licensePlate):"",v=o.get(b)||Ce(n.licensePlate),K=v.buildYear?`${v.title} (${v.buildYear})`:v.title,j=f(String(n.phone??"No phone number")),H=f(Ke(n.message)||"No customer message.");return`
        <article class="request-card ${s?"is-expanded":""}" data-calendar-booking-id="${f(i)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${y}</span>
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
${K}</p>
                <div class="request-services">${ne(n.service)}</div>
              </div>
            </div>
            <div class="request-meta">
              <span class="request-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${m}</span>
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
                    <img src="${Q("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${j}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${Q("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${H}</span>
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
                          ${we(L)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Time</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${$}" />
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
                          ${ke(g)}
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments for this date.</p></article>'}function R(e){return[...e].sort((t,a)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime())}async function Oe(e){var _;if(!e)return;const t=await le();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}de(t.activeGarage);const a=t.isAdmin?null:[(_=t.activeGarage)==null?void 0:_.id].filter(Boolean),{shell:o,contentArea:n,setUnreadEmailCount:h}=ce({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:t.user.email,onLogout:ue,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(o),n.innerHTML=`
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
  `;const i=n.querySelector("#calendarBoardBody"),s=n.querySelector("#calendarPeriodLabel"),r=n.querySelector("#calendarModeMonth"),d=n.querySelector("#calendarModeDay"),y=n.querySelector("#calendarDayTitle"),m=n.querySelector("#calendarDayCount"),L=n.querySelector("#calendarDayList");let S=[],w=[],g=new Date,$=new Date(g.getFullYear(),g.getMonth(),1),x="month",b="",v="",K="",j="";const H=new Map,se=()=>{const C=A(g);return w.filter(c=>oe(c)===C).sort((c,p)=>new Date(c.appointmentAt??c.createdAt).getTime()-new Date(p.appointmentAt??p.createdAt).getTime())},M=()=>{const C=A(g),c=se(),p=x==="day"&&(K!=="day"||j!==C);r.classList.toggle("is-active",x==="month"),d.classList.toggle("is-active",x==="day"),b&&!c.some(k=>String(k.id)===b)&&(b="",v=""),v&&!c.some(k=>String(k.id)===v)&&(v=""),x==="month"?(s.textContent=Te($),i.innerHTML=Fe($,w,C)):(s.textContent=Ae(g),i.innerHTML=Ue(g,c),p&&window.requestAnimationFrame(()=>{const k=i.querySelector(".day-board-list");if(!(k instanceof HTMLElement))return;const P=k.querySelector(".day-slot-row.has-booking");if(P instanceof HTMLElement){const F=i.getBoundingClientRect(),U=P.getBoundingClientRect(),I=i.scrollTop+(U.top-F.top)-8;i.scrollTo({top:Math.max(0,I),behavior:"auto"})}else i.scrollTo({top:0,behavior:"auto"})})),y.textContent=Be(g),m.textContent=`${c.length} appointment${c.length===1?"":"s"}`,L.innerHTML=Ve(c,b,v,H),K=x,j=C};n.addEventListener("click",async C=>{const c=C.target instanceof Element?C.target:null;if(!c||fe(n,c))return;const p=c.closest("[data-calendar-nav]");if(p instanceof HTMLElement){const u=p.dataset.calendarNav;if(x==="month"){const l=new Date($);l.setMonth($.getMonth()+(u==="next"?1:-1)),$=new Date(l.getFullYear(),l.getMonth(),1)}else{const l=new Date(g);l.setDate(g.getDate()+(u==="next"?1:-1)),g=l,$=new Date(g.getFullYear(),g.getMonth(),1)}M();return}const k=c.closest("[data-calendar-mode]");if(k instanceof HTMLElement){x=k.dataset.calendarMode==="day"?"day":"month",M();return}const P=c.closest("[data-calendar-cell]");if(P instanceof HTMLElement){const u=P.dataset.calendarCell;if(u){const l=E(`${u}T12:00:00`);l&&(g=l,$=new Date(g.getFullYear(),g.getMonth(),1),M())}return}const F=c.closest("[data-day-slot-booking-id]");if(F instanceof HTMLElement){const u=String(F.dataset.daySlotBookingId??"");u&&(b=u,v="",M(),window.requestAnimationFrame(()=>{const l=[...L.querySelectorAll("[data-calendar-booking-id]")].find(q=>q instanceof HTMLElement&&String(q.dataset.calendarBookingId??"")===u);l instanceof HTMLElement&&l.scrollIntoView({behavior:"smooth",block:"start"})}));return}const U=c.closest("[data-calendar-toggle]");if(U instanceof HTMLElement){const u=String(U.dataset.calendarToggle??"");b=b===u?"":u,b!==u&&(v=""),M();return}const I=c.closest("[data-calendar-action]");if(I instanceof HTMLElement){const u=String(I.dataset.calendarAction??""),l=String(I.dataset.bookingId??"");if(!l)return;if(u==="edit"){b=l,v=v===l?"":l,M();return}if(u==="cancel-edit"){v="",M();return}if(u==="save-schedule"){const T=I.closest("[data-calendar-booking-id]");if(!(T instanceof HTMLElement))return;const B=w.find(D=>String(D.id)===l);if(!B)return;const N=T.querySelector("[data-schedule-edit-date]"),J=T.querySelector("[data-schedule-edit-time]");if(!(N instanceof HTMLInputElement)||!(J instanceof HTMLInputElement))return;const Y=Le(N.value,J.value);if(!Y)return;try{await pe(B,Y)}catch(D){window.alert(D instanceof Error?D.message:"Unable to save the appointment schedule.");return}S=R(S.map(D=>String(D.id)===l?{...D,appointmentAt:Y}:D)),w=R(w.map(D=>String(D.id)===l?{...D,appointmentAt:Y}:D));const V=E(Y);V&&(g=V,$=new Date(V.getFullYear(),V.getMonth(),1)),v="",b=l,M();return}if(!w.find(T=>String(T.id)===l))return;M();return}const O=c.closest("[data-request-action]");if(O instanceof HTMLElement){const u=String(O.dataset.requestAction??""),l=String(O.dataset.bookingId??"");if(!l)return;const q=w.find(T=>String(T.id)===l);if(!q)return;if(u==="complete"){(async()=>{if(await ee("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await me(q,{convertedFromEmail:q.source!=="manual"})}catch(B){window.alert(B instanceof Error?B.message:"Unable to mark appointment as completed.");return}window.location.href=ie("completed.html")}})();return}if(u==="delete"){(async()=>{if(!await ee("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;S=S.filter(N=>String(N.id)!==l),w=w.filter(N=>String(N.id)!==l),v="";const B=X(S);h(B.unread),M()})();return}}const Z=c.closest("[data-calendar-booking-id]");if(Z instanceof HTMLElement&&!xe(c)){const u=String(Z.dataset.calendarBookingId??"");if(!u)return;b=b===u?"":u,b!==u&&(v=""),M()}});try{S=await he({garageIds:a});const C=new Set(S.map(p=>p.licensePlate).filter(p=>p&&p!=="UNKNOWN").map(p=>W(p)));for(const p of C)if(p&&!H.has(p))try{const k=await ge(p);k&&H.set(p,k)}catch(k){console.error(`Failed to fetch vehicle for ${p}:`,k)}w=R(S.filter(p=>p.inAppointments===!0&&!Ie(p)));const c=X(S);h(c.unread),M()}catch(C){i.innerHTML='<p class="muted">Unable to load calendar right now.</p>',L.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',h(0),console.error(C)}}const ze=document.querySelector("#app");re();Oe(ze);
