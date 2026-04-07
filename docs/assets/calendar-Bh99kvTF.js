import{p as ft,d as _e,c as ht}from"./theme-8dp4I_yZ.js";/* empty css                      */import{e as gt,a as vt,c as yt,l as bt,p as ze,i as Ge,m as kt,s as Ze,j as wt,b as Je}from"./branding-CmZO3Xcw.js";import{n as Ne,f as Mt}from"./rdwService-CFrMDQAa.js";import{s as Xe}from"./confirmDialog-DSEC2-zx.js";import{h as et,n as j,a as $e,f as st,s as ot,b as qe}from"./scheduleTimePicker-Cz5F-D9k.js";const fe="Manual appointment created in dashboard.",St=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tt=["Thomas Mulder","Sophie Koning","Rupert Clark","Jack Thomesen","Alex Vermeer"],nt={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},Tt=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function g(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Lt(e=""){return{title:Ne(e)||"Unknown vehicle",buildYear:""}}function De(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function J(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function Y(e){const t=e instanceof Date?e:J(e);if(!t)return"";const o=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${o}-${l}-${r}`}function it(e){const t=J(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function lt(e){const t=J(e);if(!t)return"";const o=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${o}-${l}-${r}`}function rt(e){const t=J(e);if(!t)return"09:00";const o=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0");return`${o}:${l}`}function He(e,t=60){const[o,l]=j(e).split(":"),r=Number(o),y=Number(l),v=(r*60+y+t)%(24*60),s=String(Math.floor(v/60)).padStart(2,"0"),u=String(v%60).padStart(2,"0");return`${s}:${u}`}function Ct(e,t){const o=String(e??"").trim(),l=String(t??"").trim();if(!o||!l)return"";const r=`${o}T${l}:00`;return J(r)?r:""}function Et(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function xt(e){return e.toLocaleDateString(void 0,{month:"long",year:"numeric"})}function At(e){return e.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function $t(e){return e.toLocaleDateString(void 0,{weekday:"short",day:"2-digit",month:"short"})}function qt(e){const t=e.toLocaleDateString(void 0,{day:"2-digit",month:"short"});return Y(e)===Y(new Date)?`Today, ${t}`:$t(e)}function Dt(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function at(e){return Dt(e.status)==="done"||e.inAppointments===!1}function Ht(e){const t=String(e??"").trim();if(!t)return["other"];const o=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(l=>l.trim()).filter(Boolean);return o.length?o:[t]}function Bt(e){return Tt.get(String(e??"").trim().toLowerCase())??"other"}function Be(e){return Ht(e).map(t=>{const o=Bt(t),l=nt[o]??nt.other;return`<span class="service-chip service-chip-${o}">${g(l)}</span>`}).join("")}function It(e){const o=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((o==null?void 0:o[1])??"").trim()}function Le(e){const t=String(e??"").replace(fe,"").trim(),o=t.match(/\bmessage\s*:\s*([\s\S]*)/i),l=y=>String(y??"").split(/\r?\n/g).filter(v=>{const s=String(v??"").trim();return!(!s||/^\s*(until|end|tot)\s*:?\s*\d{1,2}:\d{2}\s*$/i.test(s)||/^\s*all[\s_-]?day\s*:\s*(true|false|1|0|yes|no|ja|nee)\s*$/i.test(s))}).join(`
`).trim();if(o)return l(o[1]);const r=t.split(/\r?\n/g).filter(y=>{const v=y.trim();return v&&!/^\s*(name|title|end|allday|all[\s_-]?day|message)\s*:/i.test(v)});return l(r.join(`
`))}function Ie(e){const o=String(e??"").match(/\btitle\s*:\s*([^\n]+)/i);return((o==null?void 0:o[1])??"").trim()}function dt(e){const o=String(e??"").match(/\bend\s*:\s*([^\n]+)/i);return j(((o==null?void 0:o[1])??"").trim(),"")}function he(e){const o=String(e??"").match(/\ball[\s_-]?day\s*:\s*([^\n]+)/i);if(!(o!=null&&o[1]))return!1;const l=String(o[1]).trim().toLowerCase();return l==="true"||l==="1"||l==="yes"||l==="ja"}function re(e,t){const o=It(e.message);return o||tt[t%tt.length]}function ct(e){return Y(e.appointmentAt??e.createdAt)}function Nt(e,t,o){const l=new Date(e.getFullYear(),e.getMonth(),1),r=new Date(e.getFullYear(),e.getMonth()+1,0),y=r.getDate(),v=(l.getDay()+6)%7,s=t.reduce((f,b)=>{const p=ct(b);return p&&f.set(p,(f.get(p)??0)+1),f},new Map),u=[];for(let f=v;f>0;f-=1){const b=new Date(l);b.setDate(1-f);const p=Y(b);u.push({key:p,date:b,day:b.getDate(),isCurrentMonth:!1,isSelected:p===o,count:s.get(p)??0})}for(let f=1;f<=y;f+=1){const b=new Date(l.getFullYear(),l.getMonth(),f),p=Y(b);u.push({key:p,date:b,day:f,isCurrentMonth:!0,isSelected:p===o,count:s.get(p)??0})}for(;u.length%7!==0;){const f=new Date(r),b=u.length-(v+y)+1;f.setDate(r.getDate()+b);const p=Y(f);u.push({key:p,date:f,day:f.getDate(),isCurrentMonth:!1,isSelected:p===o,count:s.get(p)??0})}return u}function Pt(e,t,o){const l=Nt(e,t,o),r=Y(new Date),y=St.map(s=>`<span class="month-weekday">${s}</span>`).join(""),v=l.map(s=>{const u=["month-cell"];return s.isCurrentMonth||u.push("is-outside"),s.isSelected&&u.push("is-selected"),s.isCurrentMonth&&s.key===r&&u.push("is-today"),s.count>0&&u.push("has-bookings"),`
        <button class="${u.join(" ")}" type="button" data-calendar-cell="${s.key}">
          <span class="month-cell-day">${s.day}</span>
          ${s.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    <div class="month-grid-board">
      <div class="month-week-row">${y}</div>
      <div class="month-grid-cells">${v}</div>
    </div>
  `}function jt(e,t){const o=[];for(let s=0;s<=23;s+=1)o.push(`${String(s).padStart(2,"0")}:00`),o.push(`${String(s).padStart(2,"0")}:30`);const l=t.filter(s=>he(s.message)),y=t.filter(s=>!he(s.message)).reduce((s,u,f)=>{const b=it(u.appointmentAt??u.createdAt),p=s.get(b)??[];return p.push({booking:u,index:f}),s.set(b,p),s},new Map);return`
    <div class="day-board-list">
      ${l.length?`
      <div class="day-all-day-row day-slot-row has-booking">
        <span class="day-slot-time is-all-day">All day</span>
        <div class="day-slot-line"></div>
        <div class="day-slot-booking">
          <span class="day-slot-count">${l.length} appointment${l.length===1?"":"s"}</span>
          <div class="day-slot-bookings">
            ${l.map((s,u)=>{const f=g(String(s.id??"")),b=String(s.licensePlate??"").toUpperCase()==="UNKNOWN",p=g(s.color??"#2563EB"),X=g(s.licensePlate&&s.licensePlate!=="UNKNOWN"?De(s.licensePlate):"UNKNOWN"),W=g(re(s,u));return`
                <div class="day-slot-booking-item" data-day-slot-booking-id="${f}">
                  <div class="day-slot-plate-wrapper">
                    ${b?`<span class="fast-appt-dot" style="background: ${p}" aria-hidden="true"></span>`:`<span class="plate-chip">${X}</span>`}
                  </div>
                  <div class="day-slot-booking-info">
                    <div class="day-slot-booking-row">
                      <span class="day-slot-name">${W}</span>
                    </div>
                    <div class="day-slot-status-services">
                      <span class="status-chip status-chip-progress">All day</span>
                      ${Be(s.service)}
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    `:""}
      ${o.map(s=>{const u=y.get(s)??[];if(!u.length)return`
              <div class="day-slot-row">
                <span class="day-slot-time">${s}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">Available</span>
              </div>
            `;const f=u.map(({booking:p,index:X},W)=>{const S=g(String(p.id??"")),L=String(p.licensePlate??"").toUpperCase()==="UNKNOWN",M=g(p.color??"#2563EB"),q=g(p.licensePlate&&p.licensePlate!=="UNKNOWN"?De(p.licensePlate):"UNKNOWN"),K=g(re(p,X)),$=u.length>1&&W<u.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${S}">
                <div class="day-slot-plate-wrapper">
                  ${L?`<span class="fast-appt-dot" style="background: ${M}" aria-hidden="true"></span>`:`<span class="plate-chip">${q}</span>`}
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${K}</span>
                  </div>
                  <div class="day-slot-status-services">
                    <span class="status-chip status-chip-progress">In Progress</span>
                    ${Be(p.service)}
                  </div>
                </div>
              </div>
              ${$?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),b=u.length>1?`<span class="day-slot-count">${u.length} appointments</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${s}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${b}
                <div class="day-slot-bookings">
                  ${f}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function Kt(e,t,o,l){return e.length?e.map((r,y)=>{const v=String(r.id??""),s=t===v,u=o===v,f=r.appointmentAt??r.createdAt,b=String(r.licensePlate??"").toUpperCase()==="UNKNOWN",p=g(r.color??"#2563EB"),X=g(r.licensePlate&&r.licensePlate!=="UNKNOWN"?De(r.licensePlate):"UNKNOWN"),W=it(f),S=$e(lt(f)),L=g(S),M=g(st(S)),q=j(rt(f)),K=g(q),$=he(r.message),D=j(dt(r.message)||He(q)),de=g(D),ge=g($?"All day":`${W} - ${D}`),ce=g(re(r,y)),Ce=r.licensePlate?Ne(r.licensePlate):"",C=l.get(Ce)||Lt(r.licensePlate),ue=C.buildYear?`${C.title} (${C.buildYear})`:C.title,G=String(r.phone??"").trim(),ye=g(!G||G==="0000000000"?"Not filled in":G),ae=g(G==="0000000000"?"":G),B=g(Le(r.message)||"No customer message."),E=g(Ie(r.message)||re(r,y));return`
        <article class="request-card ${s?"is-expanded":""}" data-calendar-booking-id="${g(v)}">
          <div class="request-card-head">
            <div class="request-main">
              ${b?`<span class="fast-appt-dot" style="background: ${p}" aria-hidden="true"></span>`:`<span class="plate-chip">${X}</span>`}
              <div class="request-info">
                <p class="request-name"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1668 7.08463C14.1668 4.78345 12.3013 2.91797 10.0002 2.91797C7.69898 2.91797 5.8335 4.78345 5.8335 7.08463C5.8335 9.3858 7.69898 11.2513 10.0002 11.2513C12.3013 11.2513 14.1668 9.3858 14.1668 7.08463Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8332 17.0833C15.8332 13.8617 13.2215 11.25 9.99984 11.25C6.77818 11.25 4.1665 13.8617 4.1665 17.0833" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${ce}</p>
                ${b?"":`<p class="request-vehicle"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50667 14.1667C7.50667 15.0872 6.76048 15.8333 5.84001 15.8333C4.91953 15.8333 4.17334 15.0872 4.17334 14.1667C4.17334 13.2462 4.91953 12.5 5.84001 12.5C6.76048 12.5 7.50667 13.2462 7.50667 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M15.8397 14.1667C15.8397 15.0872 15.0935 15.8333 14.173 15.8333C13.2525 15.8333 12.5063 15.0872 12.5063 14.1667C12.5063 13.2462 13.2525 12.5 14.173 12.5C15.0935 12.5 15.8397 13.2462 15.8397 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M1.67301 8.33464H15.0063M1.67301 8.33464C1.67301 8.98464 1.65635 10.868 1.67634 12.718C1.70632 13.318 1.80624 13.818 4.17444 14.168M1.67301 8.33464C1.85288 6.88464 2.63561 5.16797 3.0353 4.51797M7.50634 8.33464V4.16797M12.4981 14.168H7.5019M1.68634 4.16797H10.1998C10.1998 4.16797 10.6495 4.16797 11.0492 4.20797C11.7987 4.27797 12.4282 4.61797 13.0577 5.46797C13.7242 6.36797 14.2367 7.50797 14.9162 8.11797C16.0454 9.13164 18.1937 8.81797 18.3137 10.968C18.3437 12.068 18.3437 13.268 18.2937 13.468C18.2134 14.0569 17.7593 14.1531 17.1945 14.168C16.7043 14.181 16.1134 14.1447 15.8256 14.168" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
${ue}</p>`}
                <div class="request-services">${Be(r.service)}</div>
              </div>
            </div>
            <div class="request-meta">
              <span class="request-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${ge}</span>
              <button
                class="request-toggle ${s?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${g(v)}"
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
                    <img src="${_e("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${ye}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${_e("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${B}</span>
                </div>
              </div>

              <div class="request-actions">
                ${u?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Title</span>
                      <input type="text" data-schedule-edit-title value="${E}" placeholder="Title" />
                    </label>
                    <label class="request-edit-field">
                      <span>Phone</span>
                      <input type="tel" data-schedule-edit-phone value="${ae}" placeholder="Phone" />
                    </label>
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${L}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${M}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${ot(S)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Vanaf</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${K}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${K}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${qe(q)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Tot</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${de}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${de}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${qe(D)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${g(v)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${g(v)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${g(v)}" aria-label="Edit booking">✎</button>
                ${u?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${g(v)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${g(v)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments for this date.</p></article>'}function ne(e){return[...e].sort((t,o)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(o.appointmentAt??o.createdAt).getTime())}async function Qt(e){var Ue,Re,Ye,We;if(!e)return;const t=await gt();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}vt(t.activeGarage);const o=t.isAdmin?null:[(Ue=t.activeGarage)==null?void 0:Ue.id].filter(Boolean),l=((Re=t.activeGarage)==null?void 0:Re.id)??((We=(Ye=t.garages)==null?void 0:Ye[0])==null?void 0:We.id)??"",{shell:r,contentArea:y,setUnreadEmailCount:v}=yt({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:t.user.email,onLogout:bt,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(r),y.innerHTML=`
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
  `;const s=y.querySelector("#calendarBoardBody"),u=y.querySelector("#calendarPeriodLabel"),f=y.querySelector("#calendarModeMonth"),b=y.querySelector("#calendarModeDay"),p=y.querySelector("#calendarDayTitle"),X=y.querySelector("#calendarDayCount"),W=y.querySelector("#calendarDayList");let S=[],L=[],M=new Date,q=new Date(M.getFullYear(),M.getMonth(),1),K="month",$="",D="",de="",ge="";const ce=new Map,Ce=()=>{const a=Y(M);return L.filter(n=>ct(n)===a).sort((n,i)=>new Date(n.appointmentAt??n.createdAt).getTime()-new Date(i.appointmentAt??i.createdAt).getTime())},C=()=>{const a=Y(M),n=Ce(),i=K==="day"&&(de!=="day"||ge!==a);f.classList.toggle("is-active",K==="month"),b.classList.toggle("is-active",K==="day"),$&&!n.some(d=>String(d.id)===$)&&($="",D=""),D&&!n.some(d=>String(d.id)===D)&&(D=""),K==="month"?(u.textContent=xt(q),s.innerHTML=Pt(q,L,a)):(u.textContent=At(M),s.innerHTML=jt(M,n),i&&window.requestAnimationFrame(()=>{const d=s.querySelector(".day-board-list");if(!(d instanceof HTMLElement))return;const k=d.querySelector(".day-slot-row.has-booking");if(k instanceof HTMLElement){const H=s.getBoundingClientRect(),F=k.getBoundingClientRect(),x=s.scrollTop+(F.top-H.top)-8;s.scrollTo({top:Math.max(0,x),behavior:"auto"})}else s.scrollTo({top:0,behavior:"auto"})})),p.textContent=qt(M),X.textContent=`${n.length} appointment${n.length===1?"":"s"}`,W.innerHTML=Kt(n,$,D,ce),de=K,ge=a};let ue=0,G="",ve=0,ye="";y.addEventListener("click",async a=>{const n=a.target instanceof Element?a.target:null;if(!n||et(y,n))return;const i=n.closest("[data-calendar-nav]");if(i instanceof HTMLElement){const c=i.dataset.calendarNav;if(K==="month"){const m=new Date(q);m.setMonth(q.getMonth()+(c==="next"?1:-1)),q=new Date(m.getFullYear(),m.getMonth(),1)}else{const m=new Date(M);m.setDate(M.getDate()+(c==="next"?1:-1)),M=m,q=new Date(M.getFullYear(),M.getMonth(),1)}C();return}const d=n.closest("[data-calendar-mode]");if(d instanceof HTMLElement){K=d.dataset.calendarMode==="day"?"day":"month",C();return}const k=n.closest("[data-calendar-cell]");if(k instanceof HTMLElement){const c=k.dataset.calendarCell;if(c){const m=Date.now(),A=a.detail>=2||m-ue<550&&G===c;if(ue=m,G=c,A){ue=0,Ve(c,"");return}const h=J(`${c}T12:00:00`);h&&(M=h,q=new Date(M.getFullYear(),M.getMonth(),1),C())}return}const H=n.closest("[data-day-slot-booking-id]");if(H instanceof HTMLElement){const c=String(H.dataset.daySlotBookingId??"");c&&($=c,D="",C(),window.requestAnimationFrame(()=>{const m=[...W.querySelectorAll("[data-calendar-booking-id]")].find(A=>A instanceof HTMLElement&&String(A.dataset.calendarBookingId??"")===c);m instanceof HTMLElement&&m.scrollIntoView({behavior:"smooth",block:"start"})}));return}const F=n.closest("[data-calendar-toggle]");if(F instanceof HTMLElement){const c=String(F.dataset.calendarToggle??"");$=$===c?"":c,$!==c&&(D=""),C();return}const x=n.closest("[data-calendar-action]");if(x instanceof HTMLElement){const c=String(x.dataset.calendarAction??""),m=String(x.dataset.bookingId??"");if(!m)return;if(c==="edit"){const h=L.find(w=>String(w.id)===m)??S.find(w=>String(w.id)===m);h&&Oe(h);return}if(c==="cancel-edit"){D="",C();return}if(c==="save-schedule"){const h=x.closest("[data-calendar-booking-id]");if(!(h instanceof HTMLElement))return;const w=L.find(V=>String(V.id)===m);if(!w)return;const R=h.querySelector("[data-schedule-edit-date]"),ie=h.querySelector("[data-schedule-edit-time]"),Me=h.querySelector("[data-schedule-edit-end-time]"),le=h.querySelector("[data-schedule-edit-title]"),P=h.querySelector("[data-schedule-edit-phone]");if(!(R instanceof HTMLInputElement)||!(ie instanceof HTMLInputElement))return;const me=Ct(R.value,ie.value);if(!me)return;const Se=(le instanceof HTMLInputElement?le.value.trim():Ie(w.message))||re(w,0),ut=Me instanceof HTMLInputElement?j(Me.value.trim(),He(ie.value)):He(ie.value),xe=P instanceof HTMLInputElement?P.value.trim():String(w.phone??"").trim(),pt=he(w.message),mt=Le(w.message)||"",Ae=[`Name: ${Se}`,`AllDay: ${pt?"true":"false"}`,`End: ${ut}`,`Message: ${mt||fe}`].filter(Boolean).join(`
`);try{await ze(w,me),await Ge(w,{name:Se,phone:xe,message:Ae})}catch(V){window.alert(V instanceof Error?V.message:"Unable to save the appointment schedule.");return}S=ne(S.map(V=>String(V.id)===m?{...V,appointmentAt:me,name:Se,phone:xe,message:Ae}:V)),L=ne(L.map(V=>String(V.id)===m?{...V,appointmentAt:me,name:Se,phone:xe,message:Ae}:V));const Te=J(me);Te&&(M=Te,q=new Date(Te.getFullYear(),Te.getMonth(),1)),D="",$=m,C();return}if(!L.find(h=>String(h.id)===m))return;C();return}const U=n.closest("[data-request-action]");if(U instanceof HTMLElement){const c=String(U.dataset.requestAction??""),m=String(U.dataset.bookingId??"");if(!m)return;const A=L.find(h=>String(h.id)===m);if(!A)return;if(c==="complete"){(async()=>{if(await Xe("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await kt(A,{convertedFromEmail:A.source!=="manual"})}catch(w){window.alert(w instanceof Error?w.message:"Unable to mark appointment as completed.");return}window.location.href=ft("completed.html")}})();return}if(c==="delete"){(async()=>{if(!await Xe("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;S=S.filter(R=>String(R.id)!==m),L=L.filter(R=>String(R.id)!==m),D="";const w=Ze(S);v(w.unread),C()})();return}}const z=n.closest("[data-calendar-booking-id]");if(z instanceof HTMLElement&&!Et(n)){const c=String(z.dataset.calendarBookingId??"");if(!c)return;$=$===c?"":c,$!==c&&(D=""),C()}});const ae=["#2563EB","#EAB308","#F97316","#EF4444","#22C55E","#8B5CF6","#EC4899"],B=document.createElement("div");B.className="calendar-quickadd-backdrop",B.setAttribute("data-calendar-quickadd-root","true"),B.hidden=!0,B.innerHTML=`
    <section class="calendar-quickadd-modal" role="dialog" aria-modal="true" aria-labelledby="calendarQuickAddTitle">
    <div class="calendar-quickadd-head">
      <h3 id="calendarQuickAddTitle">Snel</h3>
      <button type="button" class="icon-button" data-calendar-quickadd-close aria-label="Close quick add">✕</button>
    </div>
    <form id="calendarQuickAddForm" class="calendar-quickadd-form" novalidate>
      <div class="calendar-quickadd-row">
        <label>
          Titel / naam
          <input id="calendarQuickAddName" name="title" type="text" placeholder="Naam of beschrijving" required autocomplete="off" />
        </label>

        <label>
          Telefoonnummer
          <input id="calendarQuickAddPhone" name="phone" type="tel" placeholder="Optioneel" autocomplete="off" />
        </label>
      </div>

      <div class="calendar-quickadd-row">
        <label>
          Datum
          <div id="calendarQuickAddDatePicker" class="request-date-picker" data-schedule-date-picker>
            <input type="hidden" name="date" data-schedule-edit-date value="" />
            <button class="request-date-trigger" type="button" data-schedule-date-toggle aria-haspopup="listbox" aria-expanded="false">
              <span data-schedule-date-label></span>
              <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
            <div class="request-date-options" role="listbox" data-schedule-date-options></div>
          </div>
        </label>
        <label for="calendarQuickAddAllDay">
          Hele dag
          <span class="calendar-quickadd-toggle">
            <input id="calendarQuickAddAllDay" name="allDay" type="checkbox" />
            <span>Hele dag</span>
          </span>
        </label>
      </div>

      <fieldset class="calendar-quickadd-colors" aria-label="Kleur">
        <legend>Kleur</legend>
        ${ae.map((a,n)=>`
          <label class="calendar-color-option">
            <input type="radio" name="color" value="${a}" ${n===0?"checked":""} />
            <span class="calendar-color-dot" style="background:${a};--dot-color:${a}" aria-hidden="true"></span>
          </label>
        `).join("")}
      </fieldset>

      <div id="calendarQuickAddTimeRow" class="calendar-quickadd-time-row">
        <label>
          Vanaf
          <div id="calendarQuickAddStartPicker" class="request-time-picker" data-schedule-time-picker>
            <input type="hidden" name="start" data-schedule-edit-time value="" />
            <button class="request-time-trigger" type="button" data-schedule-time-toggle aria-haspopup="listbox" aria-expanded="false">
              <span data-schedule-time-label></span>
              <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
            <div class="request-time-options" role="listbox" data-schedule-time-options></div>
          </div>
        </label>
        <label>
          Tot
          <div id="calendarQuickAddEndPicker" class="request-time-picker" data-schedule-time-picker>
            <input type="hidden" name="end" data-schedule-edit-time value="" />
            <button class="request-time-trigger" type="button" data-schedule-time-toggle aria-haspopup="listbox" aria-expanded="false">
              <span data-schedule-time-label></span>
              <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
            <div class="request-time-options" role="listbox" data-schedule-time-options></div>
          </div>
        </label>
      </div>

      <label>
        Notitie
        <textarea id="calendarQuickAddNote" name="note" rows="2" placeholder="Optioneel"></textarea>
      </label>

      <div class="manual-appointment-actions">
        <button type="button" class="button subtle" data-calendar-quickadd-close>Annuleren</button>
        <button type="submit" class="button">Snel opslaan</button>
      </div>
      <p id="calendarQuickAddStatus" class="status-text" role="status" aria-live="polite"></p>
    </form>
    </section>
  `,document.querySelectorAll(".calendar-quickadd-backdrop[data-calendar-quickadd-root='true']").forEach(a=>{a!==B&&a.remove()}),document.body.append(B);const E=B.querySelector(".calendar-quickadd-modal"),Z=E.querySelector("#calendarQuickAddForm"),Q=E.querySelector("#calendarQuickAddName"),ee=E.querySelector("#calendarQuickAddDatePicker"),I=E.querySelector("#calendarQuickAddStartPicker"),N=E.querySelector("#calendarQuickAddEndPicker"),O=E.querySelector("#calendarQuickAddAllDay"),Pe=E.querySelector("#calendarQuickAddTimeRow"),_=E.querySelector("#calendarQuickAddPhone"),se=E.querySelector("#calendarQuickAddNote"),T=E.querySelector("#calendarQuickAddStatus"),oe=E.querySelector("button[type='submit']"),je=E.querySelector("#calendarQuickAddTitle");let pe="create",te="";const Ke=a=>{pe=a==="edit"?"edit":"create",je instanceof HTMLElement&&(je.textContent=pe==="edit"?"Bewerken":"Snel"),oe instanceof HTMLButtonElement&&(oe.textContent=pe==="edit"?"Wijzigingen opslaan":"Snel opslaan")},Qe=a=>{if(!(Z instanceof HTMLFormElement))return;const n=Z.querySelectorAll("input[name='color']");for(const d of n)if(d instanceof HTMLInputElement&&d.value===String(a??"")){d.checked=!0;return}const i=Z.querySelector("input[name='color']");if(i instanceof HTMLInputElement){i.checked=!0;return}},Fe=a=>{if(!(ee instanceof HTMLElement))return;const n=$e(a),i=ee.querySelector("[data-schedule-edit-date]"),d=ee.querySelector("[data-schedule-date-label]"),k=ee.querySelector("[data-schedule-date-options]");i instanceof HTMLInputElement&&(i.value=n),d instanceof HTMLElement&&(d.textContent=st(n)),k instanceof HTMLElement&&(k.innerHTML=ot(n))},be=(a,n)=>{if(!(a instanceof HTMLElement))return;const i=j(n),d=a.querySelector("[data-schedule-edit-time]"),k=a.querySelector("[data-schedule-time-label]"),H=a.querySelector("[data-schedule-time-options]");d instanceof HTMLInputElement&&(d.value=i),k instanceof HTMLElement&&(k.textContent=i),H instanceof HTMLElement&&(H.innerHTML=qe(i))},ke=a=>{const[n,i]=j(a).split(":").map(Number),d=(n*60+i+60)%(24*60);return`${String(Math.floor(d/60)).padStart(2,"0")}:${String(d%60).padStart(2,"0")}`},Ee=()=>{if(!(Pe instanceof HTMLElement))return;const a=O instanceof HTMLInputElement&&O.checked;if(Pe.classList.toggle("is-hidden",a),a){const n=I==null?void 0:I.querySelector("[data-schedule-time-label]"),i=N==null?void 0:N.querySelector("[data-schedule-time-label]");n instanceof HTMLElement&&(n.textContent="All day"),i instanceof HTMLElement&&(i.textContent="All day")}else{const n=I==null?void 0:I.querySelector("[data-schedule-edit-time]"),i=N==null?void 0:N.querySelector("[data-schedule-edit-time]"),d=I==null?void 0:I.querySelector("[data-schedule-time-label]"),k=N==null?void 0:N.querySelector("[data-schedule-time-label]");d instanceof HTMLElement&&n instanceof HTMLInputElement&&(d.textContent=j(n.value)),k instanceof HTMLElement&&i instanceof HTMLInputElement&&(k.textContent=j(i.value))}};O==null||O.addEventListener("change",Ee);const Ve=(a,n)=>{Ke("create"),te="",Q instanceof HTMLInputElement&&(Q.value=""),_ instanceof HTMLInputElement&&(_.value=""),se instanceof HTMLTextAreaElement&&(se.value=""),T instanceof HTMLElement&&(T.textContent="",T.className="status-text"),Qe(ae[0]),Fe(a);const i=j(n||"09:00");be(I,i),be(N,ke(i)),O instanceof HTMLInputElement&&(O.checked=!n),Ee(),B.hidden=!1,setTimeout(()=>{Q instanceof HTMLInputElement&&Q.focus()},60)},Oe=a=>{if(!a)return;Ke("edit"),te=String(a.id??"");const n=a.appointmentAt??a.createdAt,i=$e(lt(n)),d=j(rt(n)),k=j(dt(a.message)||ke(d)),H=Ie(a.message)||re(a,0),F=Le(a.message),x=String(a.phone??"").trim();Q instanceof HTMLInputElement&&(Q.value=H),_ instanceof HTMLInputElement&&(_.value=x==="0000000000"?"":x),se instanceof HTMLTextAreaElement&&(se.value=F===fe?"":F),T instanceof HTMLElement&&(T.textContent="",T.className="status-text"),Qe(String(a.color??"")||ae[0]),Fe(i),be(I,d),be(N,k),O instanceof HTMLInputElement&&(O.checked=he(a.message)),Ee(),B.hidden=!1,setTimeout(()=>{Q instanceof HTMLInputElement&&Q.focus()},60)},we=()=>{B.hidden=!0};E.addEventListener("click",a=>{const n=a.target instanceof Element?a.target:null;if(!n||et(E,n))return;n.closest("[data-calendar-quickadd-close]")&&we()}),B.addEventListener("click",a=>{a.target===B&&we()}),E.addEventListener("keydown",a=>{a.key==="Escape"&&we()}),Z==null||Z.addEventListener("submit",async a=>{if(a.preventDefault(),!l){T instanceof HTMLElement&&(T.textContent="Geen garage beschikbaar.",T.className="status-text warning");return}const n=Q instanceof HTMLInputElement?Q.value.trim():"",i=ee==null?void 0:ee.querySelector("[data-schedule-edit-date]"),d=I==null?void 0:I.querySelector("[data-schedule-edit-time]"),k=N==null?void 0:N.querySelector("[data-schedule-edit-time]"),H=Z instanceof HTMLFormElement?Z.querySelector("input[name='color']:checked"):null,F=se instanceof HTMLTextAreaElement?se.value.trim():"",x=O instanceof HTMLInputElement&&O.checked,U=i instanceof HTMLInputElement?i.value.trim():"",z=!x&&d instanceof HTMLInputElement?d.value.trim():"09:00",c=!x&&k instanceof HTMLInputElement?j(k.value.trim(),ke(z)):ke(z),m=H instanceof HTMLInputElement?H.value:ae[0];if(!n){T instanceof HTMLElement&&(T.textContent="Vul een naam in.",T.className="status-text warning"),Q instanceof HTMLInputElement&&Q.focus();return}if(!U){T instanceof HTMLElement&&(T.textContent="Geen datum geselecteerd.",T.className="status-text warning");return}oe instanceof HTMLButtonElement&&(oe.disabled=!0),T instanceof HTMLElement&&(T.textContent=pe==="edit"?"Opslaan...":"Toevoegen...",T.className="status-text");try{if(pe==="edit"&&te){const h=L.find(P=>String(P.id)===te)??S.find(P=>String(P.id)===te);if(!h)throw new Error("Appointment not found for editing.");const w=`${U}T${z}`,ie=(_ instanceof HTMLInputElement?_.value.trim():"")||String(h.phone??"").trim()||"0000000000",Me=F||Le(h.message)||fe,le=[`Name: ${n}`,`AllDay: ${x?"true":"false"}`,`End: ${c}`,`Message: ${Me}`].join(`
`);await ze(h,w),await Ge(h,{name:n,phone:ie,message:le,color:m}),S=ne(S.map(P=>String(P.id)===te?{...P,appointmentAt:w,name:n,color:m,message:le}:P)),L=ne(L.map(P=>String(P.id)===te?{...P,appointmentAt:w,name:n,color:m,message:le}:P))}else{const h=F||fe,w=_ instanceof HTMLInputElement&&_.value.trim()?_.value.trim():"0000000000";await wt({garageId:l,name:n,licensePlate:"UNKNOWN",phone:w,service:"Simple appointment",message:`Name: ${n}
AllDay: ${x?"true":"false"}
End: ${c}
Message: ${h}`,color:m,appointmentAt:`${U}T${z}`}),S=ne(await Je({garageIds:o})),L=ne(S.filter(R=>R.inAppointments===!0&&!at(R)))}we();const A=J(`${U}T12:00:00`);A&&(M=A,q=new Date(A.getFullYear(),A.getMonth(),1)),C()}catch(A){const h=A instanceof Error?A.message:"Kan afspraak niet toevoegen.";T instanceof HTMLElement&&(T.textContent=h,T.className="status-text error")}finally{oe instanceof HTMLButtonElement&&(oe.disabled=!1)}}),s.addEventListener("click",a=>{const n=a.target instanceof Element?a.target:null;if(!n)return;const i=n.closest(".day-slot-row");if(i instanceof HTMLElement){const d=i.querySelector(".day-slot-time"),k=d instanceof HTMLElement?(d.textContent??"").trim():"",H=Date.now(),F=a.detail>=2||H-ve<550&&ye===k;if(ve=H,ye=k,F){if(ve=0,i.classList.contains("has-booking")){const x=n.closest("[data-day-slot-booking-id]"),U=i.querySelector("[data-day-slot-booking-id]"),z=String((x instanceof HTMLElement?x.dataset.daySlotBookingId:U instanceof HTMLElement?U.dataset.daySlotBookingId:"")??""),c=L.find(m=>String(m.id)===z);if(c){Oe(c);return}}Ve(Y(M),k||"09:00")}}});try{S=await Je({garageIds:o});const a=new Set(S.map(i=>i.licensePlate).filter(i=>i&&i!=="UNKNOWN").map(i=>Ne(i)));for(const i of a)if(i&&!ce.has(i))try{const d=await Mt(i);d&&ce.set(i,d)}catch(d){console.error(`Failed to fetch vehicle for ${i}:`,d)}L=ne(S.filter(i=>i.inAppointments===!0&&!at(i)));const n=Ze(S);v(n.unread),C()}catch(a){s.innerHTML='<p class="muted">Unable to load calendar right now.</p>',W.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',v(0),console.error(a)}}const Ft=document.querySelector("#app");ht();Qt(Ft);
