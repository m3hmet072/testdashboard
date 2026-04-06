import{p as ot,d as je,c as it}from"./theme-DhME38Lo.js";/* empty css                      */import{e as rt,a as lt,c as dt,l as ct,t as k,g as h,i as ut,p as pt,m as mt,s as Ve,j as gt,b as ht,d as ft,k as vt,n as W,f as ve}from"./branding-BojcsMHH.js";import{n as ke,f as bt}from"./rdwService-CFrMDQAa.js";import{s as Ke}from"./confirmDialog-DSEC2-zx.js";import{h as yt,n as _,a as Ge,f as ze,s as We,b as me}from"./scheduleTimePicker-q1IARKz3.js";function kt(){const e=h();return[W(0,e),W(1,e),W(2,e),W(3,e),W(4,e),W(5,e),W(6,e)]}const wt=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function y(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function St(e=""){return{title:ke(e)||"Unknown vehicle",buildYear:""}}function we(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function P(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function x(e){const t=e instanceof Date?e:P(e);if(!t)return"";const a=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${a}-${i}-${s}`}function _e(e){const t=P(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function Mt(e){const t=P(e);if(!t)return"";const a=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${a}-${i}-${s}`}function Ct(e){const t=P(e);if(!t)return"09:00";const a=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return`${a}:${i}`}function Re(e,t){const a=String(e??"").trim(),i=String(t??"").trim();if(!a||!i)return"";const s=`${a}T${i}:00`;return P(s)?s:""}function Lt(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function ge(e){return e==="tr"?"tr-TR":e==="en"?"en-GB":"nl-NL"}function qt(e){return e.toLocaleDateString(ge(h()),{month:"long",year:"numeric"})}function Tt(e){return e.toLocaleDateString(ge(h()),{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function $t(e){return e.toLocaleDateString(ge(h()),{weekday:"short",day:"2-digit",month:"short"})}function At(e){const t=h(),a=e.toLocaleDateString(ge(t),{day:"2-digit",month:"short"});return x(e)===x(new Date)?`${k("today",t)}, ${a}`:$t(e)}function Dt(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function Et(e){return Dt(e.status)==="done"||e.inAppointments===!1}function xt(e){const t=String(e??"").trim();if(!t)return["other"];const a=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(i=>i.trim()).filter(Boolean);return a.length?a:[t]}function Bt(e){return wt.get(String(e??"").trim().toLowerCase())??"other"}function Nt(e){const t=String(e??"").trim(),a=h();if(!t)return{key:"other",label:ve("other",a)};const i=t.toLowerCase(),s=Bt(t);if(s==="other"){if(["other","overig","overige"].includes(i))return{key:s,label:ve("other",a)};const c=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:s,label:c||t}}return{key:s,label:ve(s,a)}}function Ze(e){return xt(e).map(t=>{const{key:a,label:i}=Nt(t);return`<span class="service-chip service-chip-${a}">${y(i)}</span>`}).join("")}function Ht(e){const a=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((a==null?void 0:a[1])??"").trim()}const ye="Manual appointment created in dashboard.";function Je(e){const a=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((a==null?void 0:a[1])??"").trim()}function It(e){const t=_(e),[a,i]=t.split(":"),s=Number(a),c=Number(i);if(!Number.isFinite(s)||!Number.isFinite(c))return"01:00";const r=new Date(2e3,0,1,s,c,0,0);return r.setHours(r.getHours()+1),`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}`}function Ye(e,t){const a=_(t);return`${String(e??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${a}`.trim()}function Pt(e){const t=String(e??""),a=t.match(/\bmessage\s*:\s*([\s\S]+)/i),i=a!=null&&a[1]?a[1].trim():t.trim(),s=i.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim();return s||(i.toLowerCase().includes(ye.toLowerCase())?ye:"")}function Ft(e){const t=_e((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),a=Je(e==null?void 0:e.message);return a?`${t} - ${a}`:t}function Xe(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const a=Ht(e.message);if(a)return a;const i=String((e==null?void 0:e.licensePlate)??"").trim();return i?we(i):"UNKNOWN"}function et(e){return x(e.appointmentAt??e.createdAt)}function Qt(e,t,a){const i=new Date(e.getFullYear(),e.getMonth(),1),s=new Date(e.getFullYear(),e.getMonth()+1,0),c=s.getDate(),r=(i.getDay()+6)%7,n=t.reduce((l,C)=>{const w=et(C);return w&&l.set(w,(l.get(w)??0)+1),l},new Map),m=[];for(let l=r;l>0;l-=1){const C=new Date(i);C.setDate(1-l);const w=x(C);m.push({key:w,date:C,day:C.getDate(),isCurrentMonth:!1,isSelected:w===a,count:n.get(w)??0})}for(let l=1;l<=c;l+=1){const C=new Date(i.getFullYear(),i.getMonth(),l),w=x(C);m.push({key:w,date:C,day:l,isCurrentMonth:!0,isSelected:w===a,count:n.get(w)??0})}for(;m.length%7!==0;){const l=new Date(s),C=m.length-(r+c)+1;l.setDate(s.getDate()+C);const w=x(l);m.push({key:w,date:l,day:l.getDate(),isCurrentMonth:!1,isSelected:w===a,count:n.get(w)??0})}return m}function Ut(e,t,a){const i=Qt(e,t,a),s=x(new Date),c=kt().map(n=>`<span class="month-weekday">${n}</span>`).join(""),r=i.map(n=>{const m=["month-cell"];return n.isCurrentMonth||m.push("is-outside"),n.isSelected&&m.push("is-selected"),n.isCurrentMonth&&n.key===s&&m.push("is-today"),n.count>0&&m.push("has-bookings"),`
        <button class="${m.join(" ")}" type="button" data-calendar-cell="${n.key}">
          <span class="month-cell-day">${n.day}</span>
          ${n.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    <div class="month-grid-board">
      <div class="month-week-row">${c}</div>
      <div class="month-grid-cells">${r}</div>
    </div>
  `}function Ot(e,t){const a=t.reduce((c,r,n)=>{const m=_e(r.appointmentAt??r.createdAt),l=c.get(m)??[];return l.push({booking:r,index:n}),c.set(m,l),c},new Map),i=[];for(let c=0;c<=23;c+=1)i.push(`${String(c).padStart(2,"0")}:00`),i.push(`${String(c).padStart(2,"0")}:30`);a.forEach((c,r)=>{i.includes(r)||i.push(r)});const s=c=>{const r=String(c).match(/^(\d{2}):(\d{2})$/);if(!r)return Number.POSITIVE_INFINITY;const n=Number(r[1]),m=Number(r[2]);return!Number.isFinite(n)||!Number.isFinite(m)?Number.POSITIVE_INFINITY:n*60+m};return i.sort((c,r)=>s(c)-s(r)),`
    <div class="day-board-list">
      ${i.map(c=>{const r=a.get(c)??[];if(!r.length)return`
              <div class="day-slot-row" data-calendar-slot-time="${y(c)}">
                <span class="day-slot-time">${c}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">${k("available",h())}</span>
              </div>
            `;const n=r.map(({booking:l,index:C},w)=>{const se=y(String(l.id??"")),Z=String(l.licensePlate??"").toUpperCase()==="UNKNOWN",V=y(l.color??"#2563EB"),K=y(l.licensePlate&&l.licensePlate!=="UNKNOWN"?we(l.licensePlate):"UNKNOWN"),O=y(Xe(l)),E=r.length>1&&w<r.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${se}">
                <div class="day-slot-plate-wrapper">
                  ${Z?`<span class="fast-appt-dot" style="background: ${V}" aria-hidden="true"></span>`:`<span class="plate-chip">${K}</span>`}
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${O}</span>
                  </div>
                  <div class="day-slot-status-services">
                    ${Z?'<span class="service-chip service-chip-other">Simple appointment</span>':`${Ze(l.service)}`}
                  </div>
                </div>
              </div>
              ${E?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),m=r.length>1?`<span class="day-slot-count">${r.length} ${k("appointments",h()).toLowerCase()}</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${c}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${m}
                <div class="day-slot-bookings">
                  ${n}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function jt(e,t,a,i){return e.length?e.map((s,c)=>{const r=String(s.id??""),n=t===r,m=a===r,l=s.appointmentAt??s.createdAt,C=String(s.licensePlate??"").toUpperCase()==="UNKNOWN",w=y(s.color??"#2563EB"),se=y(s.licensePlate&&s.licensePlate!=="UNKNOWN"?we(s.licensePlate):"UNKNOWN"),Z=y(Ft(s)),V=Ge(Mt(l)),K=y(V),O=y(ze(V)),E=_(Ct(l)),oe=y(E),J=_(Je(s.message)||It(E)),X=y(J),ie=y(Xe(s)),ee=s.licensePlate?ke(s.licensePlate):"",F=i.get(ee)||St(s.licensePlate),te=F.buildYear?`${F.title} (${F.buildYear})`:F.title,B=y(String(s.phone??"No phone number")),ae=y(Pt(s.message)||"No customer message.");return`
        <article class="request-card ${n?"is-expanded":""}" data-calendar-booking-id="${y(r)}">
          <div class="request-card-head">
            <div class="request-main">
              ${C?`<span class="fast-appt-dot" style="background: ${w}" aria-hidden="true"></span>`:`<span class="plate-chip">${se}</span>`}
              <div class="request-info">
                <p class="request-name"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1668 7.08463C14.1668 4.78345 12.3013 2.91797 10.0002 2.91797C7.69898 2.91797 5.8335 4.78345 5.8335 7.08463C5.8335 9.3858 7.69898 11.2513 10.0002 11.2513C12.3013 11.2513 14.1668 9.3858 14.1668 7.08463Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8332 17.0833C15.8332 13.8617 13.2215 11.25 9.99984 11.25C6.77818 11.25 4.1665 13.8617 4.1665 17.0833" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${ie}</p>
                ${C?"":`<p class="request-vehicle"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50667 14.1667C7.50667 15.0872 6.76048 15.8333 5.84001 15.8333C4.91953 15.8333 4.17334 15.0872 4.17334 14.1667C4.17334 13.2462 4.91953 12.5 5.84001 12.5C6.76048 12.5 7.50667 13.2462 7.50667 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M15.8397 14.1667C15.8397 15.0872 15.0935 15.8333 14.173 15.8333C13.2525 15.8333 12.5063 15.0872 12.5063 14.1667C12.5063 13.2462 13.2525 12.5 14.173 12.5C15.0935 12.5 15.8397 13.2462 15.8397 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M1.67301 8.33464H15.0063M1.67301 8.33464C1.67301 8.98464 1.65635 10.868 1.67634 12.718C1.70632 13.318 1.80624 13.818 4.17444 14.168M1.67301 8.33464C1.85288 6.88464 2.63561 5.16797 3.0353 4.51797M7.50634 8.33464V4.16797M12.4981 14.168H7.5019M1.68634 4.16797H10.1998C10.1998 4.16797 10.6495 4.16797 11.0492 4.20797C11.7987 4.27797 12.4282 4.61797 13.0577 5.46797C13.7242 6.36797 14.2367 7.50797 14.9162 8.11797C16.0454 9.13164 18.1937 8.81797 18.3137 10.968C18.3437 12.068 18.3437 13.268 18.2937 13.468C18.2134 14.0569 17.7593 14.1531 17.1945 14.168C16.7043 14.181 16.1134 14.1447 15.8256 14.168" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
${te}</p>`}
                <div class="request-services">${Ze(s.service)}</div>
              </div>
            </div>
            <div class="request-meta">
              <span class="request-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${Z}</span>
              <button
                class="request-toggle ${n?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${y(r)}"
                aria-expanded="${n?"true":"false"}"
                aria-label="${n?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          ${n?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${je("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${B}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${je("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${ae}</span>
                </div>
              </div>

              <div class="request-actions">
                ${m?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${K}" />
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
                          ${We(V)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${k("fastFrom",h())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${oe}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${oe}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${me(E)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${k("fastTo",h())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${X}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${X}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${me(J)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${y(r)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${y(r)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${y(r)}" aria-label="Edit booking">✎</button>
                ${m?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${y(r)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${y(r)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments for this date.</p></article>'}function be(e){return[...e].sort((t,a)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime())}async function Vt(e){var Ee,xe,Be,Ne,He,Ie,Pe,Fe;if(!e)return;const t=await rt();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}lt(t.activeGarage);const a=t.isAdmin?null:[(Ee=t.activeGarage)==null?void 0:Ee.id].filter(Boolean),i=((xe=t.activeGarage)==null?void 0:xe.id)??((Ne=(Be=t.garages)==null?void 0:Be[0])==null?void 0:Ne.id)??"",s=String(((He=t.activeGarage)==null?void 0:He.calendarStyle)??((Ie=t.activeGarage)==null?void 0:Ie.calendar_style)??"1"),c=String(((Pe=t.activeGarage)==null?void 0:Pe.calendarDefaultView)??((Fe=t.activeGarage)==null?void 0:Fe.calendar_default_view)??"month").toLowerCase(),{shell:r,contentArea:n,setUnreadEmailCount:m}=dt({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:t.user.email,onLogout:ct,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(r),r.classList.toggle("calendar-style-agenda",s==="2"),n.innerHTML=`
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
              <button id="calendarModeMonth" class="calendar-mode-tab" type="button" data-calendar-mode="month">${k("month",h())}</button>
              <button id="calendarModeDay" class="calendar-mode-tab" type="button" data-calendar-mode="day">${k("day",h())}</button>
            </div>
          </div>

          <div id="calendarBoardBody" class="calendar-board-body"></div>
        </section>
      </div>

      <section class="panel calendar-day-panel">
        <div class="calendar-day-panel-head">
          <p id="calendarDayTitle" class="calendar-day-title"></p>
          <span id="calendarDayCount" class="calendar-day-count">0 ${k("appointments",h()).toLowerCase()}</span>
        </div>

        <div id="calendarDayList" class="request-list"></div>
      </section>
    </section>

    <div id="calendarQuickAddOverlay" class="calendar-quickadd-overlay" hidden>
      <div class="calendar-quickadd-backdrop" data-calendar-quickadd-close></div>
      <section class="calendar-quickadd-modal" role="dialog" aria-modal="true" aria-labelledby="calendarQuickAddTitle">
        <div class="calendar-quickadd-head">
          <h3 id="calendarQuickAddTitle">${k("appointmentTypeFast",h())}</h3>
          <button type="button" class="icon-button" data-calendar-quickadd-close aria-label="Close quick add">✕</button>
        </div>

        <form id="calendarQuickAddForm" class="calendar-quickadd-form" novalidate>
          <label>
            ${k("fastTitle",h())}
            <input id="calendarQuickAddName" name="title" type="text" placeholder="${k("fastTitlePlaceholder",h())}" required />
          </label>

          <div class="calendar-quickadd-row">
            <label>
              ${k("fastDate",h())}
              <div id="calendarQuickAddDatePicker" class="request-date-picker" data-schedule-date-picker>
                <input type="hidden" id="calendarQuickAddDate" name="date" data-schedule-edit-date value="" />
                <button class="request-date-trigger" type="button" data-schedule-date-toggle aria-haspopup="listbox" aria-expanded="false">
                  <span data-schedule-date-label></span>
                  <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <div class="request-date-options" role="listbox" data-schedule-date-options></div>
              </div>
            </label>
          </div>

          <fieldset class="calendar-quickadd-colors" aria-label="${k("fastColor",h())}">
            <legend>${k("fastColor",h())}</legend>
            <label class="calendar-color-option">
              <input type="radio" name="color" value="#2563EB" checked />
              <span class="calendar-color-dot" style="background:#2563EB" aria-hidden="true"></span>
            </label>
            <label class="calendar-color-option">
              <input type="radio" name="color" value="#EAB308" />
              <span class="calendar-color-dot" style="background:#EAB308" aria-hidden="true"></span>
            </label>
            <label class="calendar-color-option">
              <input type="radio" name="color" value="#F97316" />
              <span class="calendar-color-dot" style="background:#F97316" aria-hidden="true"></span>
            </label>
            <label class="calendar-color-option">
              <input type="radio" name="color" value="#EF4444" />
              <span class="calendar-color-dot" style="background:#EF4444" aria-hidden="true"></span>
            </label>
            <label class="calendar-color-option">
              <input type="radio" name="color" value="#22C55E" />
              <span class="calendar-color-dot" style="background:#22C55E" aria-hidden="true"></span>
            </label>
            <label class="calendar-color-option">
              <input type="radio" name="color" value="#8B5CF6" />
              <span class="calendar-color-dot" style="background:#8B5CF6" aria-hidden="true"></span>
            </label>
            <label class="calendar-color-option">
              <input type="radio" name="color" value="#EC4899" />
              <span class="calendar-color-dot" style="background:#EC4899" aria-hidden="true"></span>
            </label>
          </fieldset>

          <label class="calendar-quickadd-toggle" for="calendarQuickAddAllDay">
            <input id="calendarQuickAddAllDay" name="allDay" type="checkbox" />
            <span>${k("allDay",h())}</span>
          </label>

          <div id="calendarQuickAddTimeRow" class="calendar-quickadd-time-row">
            <label>
              ${k("fastFrom",h())}
              <div id="calendarQuickAddStartPicker" class="request-time-picker" data-schedule-time-picker>
                <input type="hidden" id="calendarQuickAddStart" name="start" data-schedule-edit-time value="" />
                <button class="request-time-trigger" type="button" data-schedule-time-toggle aria-haspopup="listbox" aria-expanded="false">
                  <span data-schedule-time-label></span>
                  <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <div class="request-time-options" role="listbox" data-schedule-time-options></div>
              </div>
            </label>
            <label>
              ${k("fastTo",h())}
              <div id="calendarQuickAddEndPicker" class="request-time-picker" data-schedule-time-picker>
                <input type="hidden" id="calendarQuickAddEnd" name="end" data-schedule-edit-time value="" />
                <button class="request-time-trigger" type="button" data-schedule-time-toggle aria-haspopup="listbox" aria-expanded="false">
                  <span data-schedule-time-label></span>
                  <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <div class="request-time-options" role="listbox" data-schedule-time-options></div>
              </div>
            </label>
          </div>

          <label>
            ${k("fastNote",h())}
            <textarea id="calendarQuickAddNote" name="note" rows="2" placeholder="${k("fastNotePlaceholder",h())}"></textarea>
          </label>

          <div class="manual-appointment-actions">
            <button type="button" class="button subtle" data-calendar-quickadd-close>${k("cancel",h())}</button>
            <button type="submit" class="button">${k("fastSave",h())}</button>
          </div>
          <p id="calendarQuickAddStatus" class="status-text" role="status" aria-live="polite"></p>
        </form>
      </section>
    </div>
  `;const l=n.querySelector("#calendarBoardBody"),C=n.querySelector("#calendarPeriodLabel"),w=n.querySelector("#calendarModeMonth"),se=n.querySelector("#calendarModeDay"),Z=n.querySelector("#calendarDayTitle"),V=n.querySelector("#calendarDayCount"),K=n.querySelector("#calendarDayList"),O=n.querySelector("#calendarQuickAddOverlay"),E=n.querySelector("#calendarQuickAddForm"),oe=n.querySelector("#calendarQuickAddName"),J=n.querySelector("#calendarQuickAddDatePicker"),X=n.querySelector("#calendarQuickAddStartPicker"),ie=n.querySelector("#calendarQuickAddEndPicker"),ee=n.querySelector("#calendarQuickAddDate"),F=n.querySelector("#calendarQuickAddStart"),te=n.querySelector("#calendarQuickAddEnd"),B=n.querySelector("#calendarQuickAddAllDay"),ae=n.querySelector("#calendarQuickAddTimeRow"),de=n.querySelector("#calendarQuickAddStatus");let Q=[],N=[];const R=ut("calendar",{}),tt=P(R.selectedDate??""),he=P(R.currentMonth??"");let v=tt??new Date,H=he?new Date(he.getFullYear(),he.getMonth(),1):new Date(v.getFullYear(),v.getMonth(),1);const at=c==="day"||c==="week"||c==="agenda"?"day":"month";let I=R.activeMode==="day"||R.activeMode==="month"?R.activeMode:at,L=String(R.expandedBookingId??"").trim(),q=String(R.editingBookingId??"").trim(),Se="",Me="",Ce=0,Le="",ce=x(v);const fe=new Map,qe=p=>{const o=String(p.getHours()).padStart(2,"0"),M=String(p.getMinutes()).padStart(2,"0");return`${o}:${M}`},Te=(p,o,M)=>{const b=Ge(p),S=_(o),d=_(M);if(ee instanceof HTMLInputElement&&(ee.value=b),J instanceof HTMLElement){const f=J.querySelector("[data-schedule-date-label]"),T=J.querySelector("[data-schedule-date-options]");f instanceof HTMLElement&&(f.textContent=ze(b)),T instanceof HTMLElement&&(T.innerHTML=We(b))}if(F instanceof HTMLInputElement&&(F.value=S),X instanceof HTMLElement){const f=X.querySelector("[data-schedule-time-label]"),T=X.querySelector("[data-schedule-time-options]");f instanceof HTMLElement&&(f.textContent=S),T instanceof HTMLElement&&(T.innerHTML=me(S))}if(te instanceof HTMLInputElement&&(te.value=d),ie instanceof HTMLElement){const f=ie.querySelector("[data-schedule-time-label]"),T=ie.querySelector("[data-schedule-time-options]");f instanceof HTMLElement&&(f.textContent=d),T instanceof HTMLElement&&(T.innerHTML=me(d))}},Y=(p,o="")=>{de instanceof HTMLElement&&(de.textContent=String(p??""),de.classList.remove("error","warning"),(o==="error"||o==="warning")&&de.classList.add(o))},$e=()=>{O instanceof HTMLElement&&(O.hidden=!0,Y(""))},Ae=(p,o)=>{if(!(O instanceof HTMLElement))return;ce=String(p??x(v));let M,b;if(o){const[S,d]=o.split(":").map(Number),f=S*60+d+60;M=o,b=`${String(Math.floor(f/60)%24).padStart(2,"0")}:${String(f%60).padStart(2,"0")}`}else{const S=new Date,d=new Date(S.getTime()+60*60*1e3);M=qe(S),b=qe(d)}Te(ce,M,b),B instanceof HTMLInputElement&&(B.checked=!1),ae instanceof HTMLElement&&ae.classList.remove("is-hidden"),O.hidden=!1,Y(""),window.requestAnimationFrame(()=>{oe instanceof HTMLInputElement&&oe.focus()})};B==null||B.addEventListener("change",()=>{const p=B.checked;if(F instanceof HTMLInputElement&&(F.disabled=p),te instanceof HTMLInputElement&&(te.disabled=p),p){const o=ee instanceof HTMLInputElement?ee.value:ce;Te(o,"00:00","23:59")}ae instanceof HTMLElement&&ae.classList.toggle("is-hidden",p)});const De=async()=>{const[p,o]=await Promise.all([ht({garageIds:a}),ft({garageIds:a})]),M=new Set(o.map(d=>String(d.bookingId??d.id??"").trim()).filter(Boolean));Q=p;const b=new Set(Q.map(d=>d.licensePlate).filter(d=>d&&d!=="UNKNOWN").map(d=>ke(d)));for(const d of b)if(d&&!fe.has(d))try{const f=await bt(d);f&&fe.set(d,f)}catch(f){console.error(`Failed to fetch vehicle for ${d}:`,f)}N=be(Q.filter(d=>{const f=String(d.id??"").trim();return d.inAppointments===!0&&!Et(d)&&!M.has(f)}));const S=Ve(Q);m(S.unread)},nt=()=>{vt("calendar",{selectedDate:v.toISOString(),currentMonth:H.toISOString(),activeMode:I,expandedBookingId:L,editingBookingId:q})},st=()=>{const p=x(v);return N.filter(o=>et(o)===p).sort((o,M)=>new Date(o.appointmentAt??o.createdAt).getTime()-new Date(M.appointmentAt??M.createdAt).getTime())},A=()=>{const p=x(v),o=st(),M=I==="day"&&(Se!=="day"||Me!==p);w.classList.toggle("is-active",I==="month"),se.classList.toggle("is-active",I==="day"),L&&!o.some(b=>String(b.id)===L)&&(L="",q=""),q&&!o.some(b=>String(b.id)===q)&&(q=""),I==="month"?(C.textContent=qt(H),l.innerHTML=Ut(H,N,p)):(C.textContent=Tt(v),l.innerHTML=Ot(v,o),M&&window.requestAnimationFrame(()=>{const b=l.querySelector(".day-board-list");if(!(b instanceof HTMLElement))return;const S=b.querySelector(".day-slot-row.has-booking");if(S instanceof HTMLElement){const d=l.getBoundingClientRect(),f=S.getBoundingClientRect(),T=l.scrollTop+(f.top-d.top)-8;l.scrollTo({top:Math.max(0,T),behavior:"auto"})}else l.scrollTo({top:0,behavior:"auto"})})),Z.textContent=At(v),V.textContent=`${o.length} ${k("appointments",h()).toLowerCase()}`,K.innerHTML=jt(o,L,q,fe),Se=I,Me=p,nt()};n.addEventListener("click",async p=>{const o=p.target instanceof Element?p.target:null;if(!o)return;if(o.closest("[data-calendar-quickadd-close]")instanceof HTMLElement){$e();return}if(yt(n,o))return;const b=o.closest("[data-calendar-nav]");if(b instanceof HTMLElement){const u=b.dataset.calendarNav;if(I==="month"){const g=new Date(H);g.setMonth(H.getMonth()+(u==="next"?1:-1)),H=new Date(g.getFullYear(),g.getMonth(),1)}else{const g=new Date(v);g.setDate(v.getDate()+(u==="next"?1:-1)),v=g,H=new Date(v.getFullYear(),v.getMonth(),1)}A();return}const S=o.closest("[data-calendar-mode]");if(S instanceof HTMLElement){I=S.dataset.calendarMode==="day"?"day":"month",A();return}const d=o.closest("[data-calendar-cell]");if(d instanceof HTMLElement){const u=d.dataset.calendarCell;if(u){const g=Date.now(),U=u===Le&&g-Ce<=450;Le=u,Ce=g;const D=P(`${u}T12:00:00`);D&&(v=D,H=new Date(v.getFullYear(),v.getMonth(),1),A(),U&&I==="month"&&Ae(u))}return}const f=o.closest("[data-calendar-slot-time]");if(f instanceof HTMLElement&&I==="day"){const u=String(f.dataset.calendarSlotTime??"");u&&Ae(x(v),u);return}const T=o.closest("[data-day-slot-booking-id]");if(T instanceof HTMLElement){const u=String(T.dataset.daySlotBookingId??"");u&&(L=u,q="",A(),window.requestAnimationFrame(()=>{const g=[...K.querySelectorAll("[data-calendar-booking-id]")].find(U=>U instanceof HTMLElement&&String(U.dataset.calendarBookingId??"")===u);g instanceof HTMLElement&&g.scrollIntoView({behavior:"smooth",block:"start"})}));return}const ue=o.closest("[data-calendar-toggle]");if(ue instanceof HTMLElement){const u=String(ue.dataset.calendarToggle??"");L=L===u?"":u,L!==u&&(q=""),A();return}const G=o.closest("[data-calendar-action]");if(G instanceof HTMLElement){const u=String(G.dataset.calendarAction??""),g=String(G.dataset.bookingId??"");if(!g)return;if(u==="edit"){L=g,q=q===g?"":g,A();return}if(u==="cancel-edit"){q="",A();return}if(u==="save-schedule"){const D=G.closest("[data-calendar-booking-id]");if(!(D instanceof HTMLElement))return;const z=N.find($=>String($.id)===g);if(!z)return;const ne=D.querySelector("[data-schedule-edit-date]"),Qe=D.querySelector("[data-schedule-edit-start-time]"),Ue=D.querySelector("[data-schedule-edit-end-time]");if(!(ne instanceof HTMLInputElement)||!(Qe instanceof HTMLInputElement)||!(Ue instanceof HTMLInputElement))return;const le=Re(ne.value,Qe.value),Oe=_(Ue.value);if(!le)return;try{await pt(z,le)}catch($){window.alert($ instanceof Error?$.message:"Unable to save the appointment schedule.");return}Q=be(Q.map($=>String($.id)===g?{...$,appointmentAt:le,message:Ye($.message,Oe)}:$)),N=be(N.map($=>String($.id)===g?{...$,appointmentAt:le,message:Ye($.message,Oe)}:$));const pe=P(le);pe&&(v=pe,H=new Date(pe.getFullYear(),pe.getMonth(),1)),q="",L=g,A();return}if(!N.find(D=>String(D.id)===g))return;A();return}const j=o.closest("[data-request-action]");if(j instanceof HTMLElement){const u=String(j.dataset.requestAction??""),g=String(j.dataset.bookingId??"");if(!g)return;const U=N.find(D=>String(D.id)===g);if(!U)return;if(u==="complete"){(async()=>{if(await Ke("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await mt(U,{convertedFromEmail:U.source!=="manual"})}catch(z){window.alert(z instanceof Error?z.message:"Unable to mark appointment as completed.");return}window.location.href=ot("completed.html")}})();return}if(u==="delete"){(async()=>{if(!await Ke("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;Q=Q.filter(ne=>String(ne.id)!==g),N=N.filter(ne=>String(ne.id)!==g),q="";const z=Ve(Q);m(z.unread),A()})();return}}const re=o.closest("[data-calendar-booking-id]");if(re instanceof HTMLElement&&!Lt(o)){const u=String(re.dataset.calendarBookingId??"");if(!u)return;L=L===u?"":u,L!==u&&(q=""),A()}}),E==null||E.addEventListener("submit",async p=>{if(p.preventDefault(),!i){Y("No garage available for quick appointment creation.","warning");return}const o=new FormData(E),M=String(o.get("title")??"").trim(),b=String(o.get("date")??ce).trim(),S=B instanceof HTMLInputElement?B.checked:!1,d=S?"00:00":String(o.get("start")??"").trim(),f=S?"23:59":String(o.get("end")??"").trim(),T=String(o.get("color")??"#2563EB").trim(),ue=String(o.get("note")??"").trim();if(!M||!b||!d||!f){Y("Please fill all required fields.","warning");return}const G=Re(b,d);if(!G){Y("Invalid date/time.","warning");return}const j=E.querySelector("button[type='submit']");j instanceof HTMLButtonElement&&(j.disabled=!0),Y("Adding appointment...");try{await gt({garageId:i,name:M,licensePlate:"UNKNOWN",phone:"0000000000",service:"Simple appointment",message:`Name: ${M}
Message: ${ue||ye}${S?`
All day: yes`:""}
Until: ${f}`,color:T,appointmentAt:G}),v=P(`${b}T12:00:00`)??v,H=new Date(v.getFullYear(),v.getMonth(),1),L="",q="",await De(),A(),E.reset(),$e()}catch(re){const u=re instanceof Error?re.message:"Unable to add appointment.";Y(u,"error")}finally{j instanceof HTMLButtonElement&&(j.disabled=!1)}});try{await De(),A()}catch(p){l.innerHTML='<p class="muted">Unable to load calendar right now.</p>',K.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',m(0),console.error(p)}}const Kt=document.querySelector("#app");it();Vt(Kt);
