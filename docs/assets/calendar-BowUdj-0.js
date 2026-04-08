import{p as cn,d as Ft,c as rn}from"./theme-DFmgD8P9.js";/* empty css                      */import{e as un,a as pn,c as mn,l as fn,p as Qt,i as Pt,m as hn,s as jt,j as Vt,b as Kt}from"./branding-B2eQ7lFX.js";import{n as _e,f as vn}from"./rdwService-CFrMDQAa.js";import{s as Ot}from"./confirmDialog-DSEC2-zx.js";import{h as Ut,n as K,a as dt,f as ct,s as rt,b as gt}from"./scheduleTimePicker-Cz5F-D9k.js";const Te="Manual appointment created in dashboard.",gn=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Rt=["Thomas Mulder","Sophie Koning","Rupert Clark","Jack Thomesen","Alex Vermeer"],vt={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},kn=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function k(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function yn(t=""){return{title:_e(t)||"Unknown vehicle",buildYear:""}}function kt(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function fe(t){const i=new Date(t);return Number.isNaN(i.getTime())?null:i}function X(t){const i=t instanceof Date?t:fe(t);if(!i)return"";const s=i.getFullYear(),c=String(i.getMonth()+1).padStart(2,"0"),d=String(i.getDate()).padStart(2,"0");return`${s}-${c}-${d}`}function Wt(t){const i=fe(t);return i?i.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function _t(t){const s=String(t??"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!s)return null;const c=Number.parseInt(s[1],10),d=Number.parseInt(s[2],10);if(!Number.isFinite(c)||!Number.isFinite(d))return null;const p=Math.min(23,Math.max(0,c)),v=Math.min(59,Math.max(0,d));return p*60+v}function bn(t){const i={startMinutes:0,endMinutes:1380},s=(t==null?void 0:t.workingHoursStart)??(t==null?void 0:t.working_hours_start)??"00:00",c=(t==null?void 0:t.workingHoursEnd)??(t==null?void 0:t.working_hours_end)??"23:00",d=_t(s),p=_t(c);return d===null||p===null?i:d>p?{startMinutes:d,endMinutes:d}:{startMinutes:d,endMinutes:p}}function Sn(t){const i=Number.isFinite(t==null?void 0:t.startMinutes)?t.startMinutes:0,s=Number.isFinite(t==null?void 0:t.endMinutes)?t.endMinutes:23*60,c=[];for(let d=i;d<=s;d+=30){const p=String(Math.floor(d/60)).padStart(2,"0"),v=String(d%60).padStart(2,"0");c.push(`${p}:${v}`)}return c.length||c.push("00:00"),c}function zt(t){const i=fe(t);if(!i)return"";const s=i.getFullYear(),c=String(i.getMonth()+1).padStart(2,"0"),d=String(i.getDate()).padStart(2,"0");return`${s}-${c}-${d}`}function Gt(t){const i=fe(t);if(!i)return"09:00";const s=String(i.getHours()).padStart(2,"0"),c=String(i.getMinutes()).padStart(2,"0");return`${s}:${c}`}function yt(t,i=60){const[s,c]=K(t).split(":"),d=Number(s),p=Number(c),v=(d*60+p+i)%(24*60),o=String(Math.floor(v/60)).padStart(2,"0"),m=String(v%60).padStart(2,"0");return`${o}:${m}`}function Mn(t,i){const s=String(t??"").trim(),c=String(i??"").trim();if(!s||!c)return"";const d=`${s}T${c}:00`;return fe(d)?d:""}function qn(t){return t instanceof Element&&!!t.closest("button, input, select, textarea, a, label")}function wn(t){return t.toLocaleDateString(void 0,{month:"long",year:"numeric"})}function An(t){return t.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function Ln(t){return t.toLocaleDateString(void 0,{weekday:"short",day:"2-digit",month:"short"})}function Tn(t){const i=t.toLocaleDateString(void 0,{day:"2-digit",month:"short"});return X(t)===X(new Date)?`Today, ${i}`:Ln(t)}function En(t){const i=String(t??"").trim().toLowerCase();return i==="done"||i==="completed"||i==="complete"||i==="closed"?"done":i==="confirmed"||i==="confirm"?"confirmed":"new"}function Yt(t){return En(t.status)==="done"||t.inAppointments===!1}function Zt(t){const i=String(t??"").trim();if(!i)return["other"];const s=i.split(i.includes(",")?/,/g:/\+|\/|&| and /gi).map(c=>c.trim()).filter(Boolean);return s.length?s:[i]}function Re(t){return kn.get(String(t??"").trim().toLowerCase())??"other"}function bt(t){return Zt(t).map(i=>{const s=Re(i),c=s==="other"?String(i??"").trim()||vt.other:vt[s]??vt.other;return`<span class="service-chip service-chip-${s}">${k(c)}</span>`}).join("")}function xn(t){const s=String(t??"").match(/\bname\s*:\s*([^\n]+)/i);return((s==null?void 0:s[1])??"").trim()}function ut(t){const i=String(t??"").replace(Te,"").trim(),s=i.match(/\bmessage\s*:\s*([\s\S]*)/i),c=p=>String(p??"").split(/\r?\n/g).filter(v=>{const o=String(v??"").trim();return!(!o||/^\s*(until|end|tot)\s*:?\s*\d{1,2}:\d{2}\s*$/i.test(o)||/^\s*all[\s_-]?day\s*:\s*(true|false|1|0|yes|no|ja|nee)\s*$/i.test(o))}).join(`
`).trim();if(s)return c(s[1]);const d=i.split(/\r?\n/g).filter(p=>{const v=p.trim();return v&&!/^\s*(name|title|end|allday|all[\s_-]?day|message)\s*:/i.test(v)});return c(d.join(`
`))}function St(t){const s=String(t??"").match(/\btitle\s*:\s*([^\n]+)/i);return((s==null?void 0:s[1])??"").trim()}function Jt(t){const s=String(t??"").match(/\bend\s*:\s*([^\n]+)/i);return K(((s==null?void 0:s[1])??"").trim(),"")}function Ee(t){const s=String(t??"").match(/\ball[\s_-]?day\s*:\s*([^\n]+)/i);if(!(s!=null&&s[1]))return!1;const c=String(s[1]).trim().toLowerCase();return c==="true"||c==="1"||c==="yes"||c==="ja"}function xe(t,i){const s=xn(t.message);return s||Rt[i%Rt.length]}function Xt(t){return X(t.appointmentAt??t.createdAt)}function Hn(t,i,s){const c=new Date(t.getFullYear(),t.getMonth(),1),d=new Date(t.getFullYear(),t.getMonth()+1,0),p=d.getDate(),v=(c.getDay()+6)%7,o=i.reduce((g,M)=>{const f=Xt(M);return f&&g.set(f,(g.get(f)??0)+1),g},new Map),m=[];for(let g=v;g>0;g-=1){const M=new Date(c);M.setDate(1-g);const f=X(M);m.push({key:f,date:M,day:M.getDate(),isCurrentMonth:!1,isSelected:f===s,count:o.get(f)??0})}for(let g=1;g<=p;g+=1){const M=new Date(c.getFullYear(),c.getMonth(),g),f=X(M);m.push({key:f,date:M,day:g,isCurrentMonth:!0,isSelected:f===s,count:o.get(f)??0})}for(;m.length%7!==0;){const g=new Date(d),M=m.length-(v+p)+1;g.setDate(d.getDate()+M);const f=X(g);m.push({key:f,date:g,day:g.getDate(),isCurrentMonth:!1,isSelected:f===s,count:o.get(f)??0})}return m}function Cn(t,i,s){const c=Hn(t,i,s),d=X(new Date),p=gn.map(o=>`<span class="month-weekday">${o}</span>`).join(""),v=c.map(o=>{const m=["month-cell"];return o.isCurrentMonth||m.push("is-outside"),o.isSelected&&m.push("is-selected"),o.isCurrentMonth&&o.key===d&&m.push("is-today"),o.count>0&&m.push("has-bookings"),`
        <button class="${m.join(" ")}" type="button" data-calendar-cell="${o.key}">
          <span class="month-cell-day">${o.day}</span>
          ${o.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    <div class="month-grid-board">
      <div class="month-week-row">${p}</div>
      <div class="month-grid-cells">${v}</div>
    </div>
  `}function $n(t,i){const s=Sn(i),c=t.filter(o=>Ee(o.message)),p=t.filter(o=>!Ee(o.message)).reduce((o,m,g)=>{const M=Wt(m.appointmentAt??m.createdAt),f=o.get(M)??[];return f.push({booking:m,index:g}),o.set(M,f),o},new Map);return`
    <div class="day-board-list">
      ${c.length?`
      <div class="day-all-day-row day-slot-row has-booking">
        <span class="day-slot-time is-all-day">All day</span>
        <div class="day-slot-line"></div>
        <div class="day-slot-booking">
          <span class="day-slot-count">${c.length} appointment${c.length===1?"":"s"}</span>
          <div class="day-slot-bookings">
            ${c.map((o,m)=>{const g=k(String(o.id??"")),M=String(o.licensePlate??"").toUpperCase()==="UNKNOWN",f=k(o.color??"#2563EB"),he=k(o.licensePlate&&o.licensePlate!=="UNKNOWN"?kt(o.licensePlate):"UNKNOWN"),te=k(xe(o,m));return`
                <div class="day-slot-booking-item" data-day-slot-booking-id="${g}">
                  <div class="day-slot-plate-wrapper">
                    ${M?`<span class="fast-appt-dot" style="background: ${f}" aria-hidden="true"></span>`:`<span class="plate-chip">${he}</span>`}
                  </div>
                  <div class="day-slot-booking-info">
                    <div class="day-slot-booking-row">
                      <span class="day-slot-name">${te}</span>
                    </div>
                    <div class="day-slot-status-services">
                      <span class="status-chip status-chip-progress">All day</span>
                      ${bt(o.service)}
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    `:""}
      ${s.map(o=>{const m=p.get(o)??[];if(!m.length)return`
              <div class="day-slot-row">
                <span class="day-slot-time">${o}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">Available</span>
              </div>
            `;const g=m.map(({booking:f,index:he},te)=>{const ve=k(String(f.id??"")),He=String(f.licensePlate??"").toUpperCase()==="UNKNOWN",C=k(f.color??"#2563EB"),A=k(f.licensePlate&&f.licensePlate!=="UNKNOWN"?kt(f.licensePlate):"UNKNOWN"),q=k(xe(f,he)),Q=m.length>1&&te<m.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${ve}">
                <div class="day-slot-plate-wrapper">
                  ${He?`<span class="fast-appt-dot" style="background: ${C}" aria-hidden="true"></span>`:`<span class="plate-chip">${A}</span>`}
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${q}</span>
                  </div>
                  <div class="day-slot-status-services">
                    <span class="status-chip status-chip-progress">In Progress</span>
                    ${bt(f.service)}
                  </div>
                </div>
              </div>
              ${Q?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),M=m.length>1?`<span class="day-slot-count">${m.length} appointments</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${o}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${M}
                <div class="day-slot-bookings">
                  ${g}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function Dn(t,i,s,c){return t.length?t.map((d,p)=>{const v=String(d.id??""),o=i===v,m=s===v,g=d.appointmentAt??d.createdAt,M=String(d.licensePlate??"").toUpperCase()==="UNKNOWN",f=k(d.color??"#2563EB"),he=k(d.licensePlate&&d.licensePlate!=="UNKNOWN"?kt(d.licensePlate):"UNKNOWN"),te=Wt(g),ve=dt(zt(g)),He=k(ve),C=k(ct(ve)),A=K(Gt(g)),q=k(A),Q=Ee(d.message),R=K(Jt(d.message)||yt(A)),B=k(R),P=k(Q?"All day":`${te} - ${R}`),Ye=k(xe(d,p)),We=d.licensePlate?_e(d.licensePlate):"",we=c.get(We)||yn(d.licensePlate),Ce=we.buildYear?`${we.title} (${we.buildYear})`:we.title,ge=String(d.phone??"").trim(),$e=k(!ge||ge==="0000000000"?"Not filled in":ge),ze=k(ge==="0000000000"?"":ge),De=k(ut(d.message)||"No customer message."),Ge=k(St(d.message)||xe(d,p));return`
        <article class="request-card ${o?"is-expanded":""}" data-calendar-booking-id="${k(v)}">
          <div class="request-card-head">
            <div class="request-main">
              ${M?`<span class="fast-appt-dot" style="background: ${f}" aria-hidden="true"></span>`:`<span class="plate-chip">${he}</span>`}
              <div class="request-info">
                <p class="request-name"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1668 7.08463C14.1668 4.78345 12.3013 2.91797 10.0002 2.91797C7.69898 2.91797 5.8335 4.78345 5.8335 7.08463C5.8335 9.3858 7.69898 11.2513 10.0002 11.2513C12.3013 11.2513 14.1668 9.3858 14.1668 7.08463Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8332 17.0833C15.8332 13.8617 13.2215 11.25 9.99984 11.25C6.77818 11.25 4.1665 13.8617 4.1665 17.0833" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${Ye}</p>
                ${M?"":`<p class="request-vehicle"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50667 14.1667C7.50667 15.0872 6.76048 15.8333 5.84001 15.8333C4.91953 15.8333 4.17334 15.0872 4.17334 14.1667C4.17334 13.2462 4.91953 12.5 5.84001 12.5C6.76048 12.5 7.50667 13.2462 7.50667 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M15.8397 14.1667C15.8397 15.0872 15.0935 15.8333 14.173 15.8333C13.2525 15.8333 12.5063 15.0872 12.5063 14.1667C12.5063 13.2462 13.2525 12.5 14.173 12.5C15.0935 12.5 15.8397 13.2462 15.8397 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M1.67301 8.33464H15.0063M1.67301 8.33464C1.67301 8.98464 1.65635 10.868 1.67634 12.718C1.70632 13.318 1.80624 13.818 4.17444 14.168M1.67301 8.33464C1.85288 6.88464 2.63561 5.16797 3.0353 4.51797M7.50634 8.33464V4.16797M12.4981 14.168H7.5019M1.68634 4.16797H10.1998C10.1998 4.16797 10.6495 4.16797 11.0492 4.20797C11.7987 4.27797 12.4282 4.61797 13.0577 5.46797C13.7242 6.36797 14.2367 7.50797 14.9162 8.11797C16.0454 9.13164 18.1937 8.81797 18.3137 10.968C18.3437 12.068 18.3437 13.268 18.2937 13.468C18.2134 14.0569 17.7593 14.1531 17.1945 14.168C16.7043 14.181 16.1134 14.1447 15.8256 14.168" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
${Ce}</p>`}
                <div class="request-services">${bt(d.service)}</div>
              </div>
            </div>
            <div class="request-meta">
              <span class="request-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${P}</span>
              <button
                class="request-toggle ${o?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${k(v)}"
                aria-expanded="${o?"true":"false"}"
                aria-label="${o?"Collapse appointment details":"Expand appointment details"}"
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
                    <img src="${Ft("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${$e}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${Ft("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${De}</span>
                </div>
              </div>

              <div class="request-actions">
                ${m?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Title</span>
                      <input type="text" data-schedule-edit-title value="${Ge}" placeholder="Title" />
                    </label>
                    <label class="request-edit-field">
                      <span>Phone</span>
                      <input type="tel" data-schedule-edit-phone value="${ze}" placeholder="Phone" />
                    </label>
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${He}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${C}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${rt(ve)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Vanaf</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${q}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${q}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${gt(A)}
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
                          ${gt(R)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${k(v)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${k(v)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${k(v)}" aria-label="Edit booking">✎</button>
                ${m?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${k(v)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${k(v)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments for this date.</p></article>'}function qe(t){return[...t].sort((i,s)=>new Date(i.appointmentAt??i.createdAt).getTime()-new Date(s.appointmentAt??s.createdAt).getTime())}async function In(t){var Dt,It,Bt,Nt;if(!t)return;const i=await un();if(!i)return;if(!i.isAdmin&&!i.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}pn(i.activeGarage);const s=i.isAdmin?null:[(Dt=i.activeGarage)==null?void 0:Dt.id].filter(Boolean),c=((It=i.activeGarage)==null?void 0:It.id)??((Nt=(Bt=i.garages)==null?void 0:Bt[0])==null?void 0:Nt.id)??"",{shell:d,contentArea:p,setUnreadEmailCount:v}=mn({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:i.user.email,onLogout:fn,garage:i.activeGarage,isAdmin:i.isAdmin});t.replaceChildren(d),p.innerHTML=`
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
  `;const o=p.querySelector("#calendarBoardBody"),m=p.querySelector("#calendarPeriodLabel"),g=p.querySelector("#calendarModeMonth"),M=p.querySelector("#calendarModeDay"),f=p.querySelector("#calendarDayTitle"),he=p.querySelector("#calendarDayCount"),te=p.querySelector("#calendarDayList"),ve=new URLSearchParams(window.location.search),He=["1","true","yes"].includes(String(ve.get("quickadd")??"").trim().toLowerCase());let C=[],A=[],q=new Date,Q=new Date(q.getFullYear(),q.getMonth(),1),R="month",B="",P="",Ye="",We="";const we=bn(i.activeGarage),Ce=new Map,ge=()=>{const e=X(q);return A.filter(n=>Xt(n)===e).sort((n,a)=>new Date(n.appointmentAt??n.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime())},j=()=>{const e=X(q),n=ge(),a=R==="day"&&(Ye!=="day"||We!==e);g.classList.toggle("is-active",R==="month"),M.classList.toggle("is-active",R==="day"),B&&!n.some(l=>String(l.id)===B)&&(B="",P=""),P&&!n.some(l=>String(l.id)===P)&&(P=""),R==="month"?(m.textContent=wn(Q),o.innerHTML=Cn(Q,A,e)):(m.textContent=An(q),o.innerHTML=$n(n,we),a&&window.requestAnimationFrame(()=>{const l=o.querySelector(".day-board-list");if(!(l instanceof HTMLElement))return;const y=l.querySelector(".day-slot-row.has-booking");if(y instanceof HTMLElement){const S=o.getBoundingClientRect(),E=y.getBoundingClientRect(),x=o.scrollTop+(E.top-S.top)-8;o.scrollTo({top:Math.max(0,x),behavior:"auto"})}else o.scrollTo({top:0,behavior:"auto"})})),f.textContent=Tn(q),he.textContent=`${n.length} appointment${n.length===1?"":"s"}`,te.innerHTML=Dn(n,B,P,Ce),Ye=R,We=e};let $e=0,ze="",De=0,Ge="";p.addEventListener("click",async e=>{const n=e.target instanceof Element?e.target:null;if(!n||Ut(p,n))return;const a=n.closest("[data-calendar-nav]");if(a instanceof HTMLElement){const r=a.dataset.calendarNav;if(R==="month"){const h=new Date(Q);h.setMonth(Q.getMonth()+(r==="next"?1:-1)),Q=new Date(h.getFullYear(),h.getMonth(),1)}else{const h=new Date(q);h.setDate(q.getDate()+(r==="next"?1:-1)),q=h,Q=new Date(q.getFullYear(),q.getMonth(),1)}j();return}const l=n.closest("[data-calendar-mode]");if(l instanceof HTMLElement){R=l.dataset.calendarMode==="day"?"day":"month",j();return}const y=n.closest("[data-calendar-cell]");if(y instanceof HTMLElement){const r=y.dataset.calendarCell;if(r){const h=Date.now(),N=e.detail>=2||h-$e<550&&ze===r;if($e=h,ze=r,N){$e=0,ft(r,"");return}const w=fe(`${r}T12:00:00`);w&&(q=w,Q=new Date(q.getFullYear(),q.getMonth(),1),j())}return}const S=n.closest("[data-day-slot-booking-id]");if(S instanceof HTMLElement){const r=String(S.dataset.daySlotBookingId??"");r&&(B=r,P="",j(),window.requestAnimationFrame(()=>{const h=[...te.querySelectorAll("[data-calendar-booking-id]")].find(N=>N instanceof HTMLElement&&String(N.dataset.calendarBookingId??"")===r);h instanceof HTMLElement&&h.scrollIntoView({behavior:"smooth",block:"start"})}));return}const E=n.closest("[data-calendar-toggle]");if(E instanceof HTMLElement){const r=String(E.dataset.calendarToggle??"");B=B===r?"":r,B!==r&&(P=""),j();return}const x=n.closest("[data-calendar-action]");if(x instanceof HTMLElement){const r=String(x.dataset.calendarAction??""),h=String(x.dataset.bookingId??"");if(!h)return;if(r==="edit"){const w=A.find(T=>String(T.id)===h)??C.find(T=>String(T.id)===h);w&&$t(w);return}if(r==="cancel-edit"){P="",j();return}if(r==="save-schedule"){const w=x.closest("[data-calendar-booking-id]");if(!(w instanceof HTMLElement))return;const T=A.find(I=>String(I.id)===h);if(!T)return;const H=w.querySelector("[data-schedule-edit-date]"),V=w.querySelector("[data-schedule-edit-time]"),z=w.querySelector("[data-schedule-edit-end-time]"),re=w.querySelector("[data-schedule-edit-title]"),Ae=w.querySelector("[data-schedule-edit-phone]");if(!(H instanceof HTMLInputElement)||!(V instanceof HTMLInputElement))return;const G=Mn(H.value,V.value);if(!G)return;const ue=(re instanceof HTMLInputElement?re.value.trim():St(T.message))||xe(T,0),Z=z instanceof HTMLInputElement?K(z.value.trim(),yt(V.value)):yt(V.value),D=Ae instanceof HTMLInputElement?Ae.value.trim():String(T.phone??"").trim(),pe=Ee(T.message),Le=ut(T.message)||"",Ue=[`Name: ${ue}`,`AllDay: ${pe?"true":"false"}`,`End: ${Z}`,`Message: ${Le||Te}`].filter(Boolean).join(`
`);try{await Qt(T,G),await Pt(T,{name:ue,phone:D,message:Ue})}catch(I){window.alert(I instanceof Error?I.message:"Unable to save the appointment schedule.");return}C=qe(C.map(I=>String(I.id)===h?{...I,appointmentAt:G,name:ue,phone:D,message:Ue}:I)),A=qe(A.map(I=>String(I.id)===h?{...I,appointmentAt:G,name:ue,phone:D,message:Ue}:I));const me=fe(G);me&&(q=me,Q=new Date(me.getFullYear(),me.getMonth(),1)),P="",B=h,j();return}if(!A.find(w=>String(w.id)===h))return;j();return}const $=n.closest("[data-request-action]");if($ instanceof HTMLElement){const r=String($.dataset.requestAction??""),h=String($.dataset.bookingId??"");if(!h)return;const N=A.find(w=>String(w.id)===h);if(!N)return;if(r==="complete"){(async()=>{if(await Ot("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await hn(N,{convertedFromEmail:N.source!=="manual"})}catch(T){window.alert(T instanceof Error?T.message:"Unable to mark appointment as completed.");return}window.location.href=cn("completed.html")}})();return}if(r==="delete"){(async()=>{if(!await Ot("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;C=C.filter(H=>String(H.id)!==h),A=A.filter(H=>String(H.id)!==h),P="";const T=jt(C);v(T.unread),j()})();return}}const L=n.closest("[data-calendar-booking-id]");if(L instanceof HTMLElement&&!qn(n)){const r=String(L.dataset.calendarBookingId??"");if(!r)return;B=B===r?"":r,B!==r&&(P=""),j()}});const Ie=["#2563EB","#EAB308","#F97316","#EF4444","#22C55E","#8B5CF6","#EC4899"],F=["APK","Banden","Onderhoud","Airco","Occasions","Remmen"],O=document.createElement("div");O.className="calendar-quickadd-backdrop",O.setAttribute("data-calendar-quickadd-root","true"),O.hidden=!0,O.innerHTML=`
    <section class="calendar-quickadd-modal" role="dialog" aria-modal="true" aria-labelledby="calendarQuickAddTitle">
    <div class="calendar-quickadd-head">
      <div class="calendar-quickadd-titles" role="tablist" aria-label="Afspraak type">
        <h3
          id="calendarQuickAddTitle"
          class="calendar-quickadd-title-tab is-active"
          role="tab"
          aria-selected="true"
          tabindex="0"
          data-calendar-quickadd-view="quick"
        >Snel</h3>
        <button
          type="button"
          class="calendar-quickadd-title-tab"
          role="tab"
          aria-selected="false"
          data-calendar-quickadd-view="full"
        >Volledig</button>
      </div>
      <button type="button" class="icon-button" data-calendar-quickadd-close aria-label="Close quick add">✕</button>
    </div>
    <form id="calendarQuickAddForm" class="calendar-quickadd-form" novalidate>
      <div class="calendar-quickadd-panel" data-calendar-quickadd-panel="quick">
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
          ${Ie.map((e,n)=>`
            <label class="calendar-color-option">
              <input type="radio" name="color" value="${e}" ${n===0?"checked":""} />
              <span class="calendar-color-dot" style="background:${e};--dot-color:${e}" aria-hidden="true"></span>
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
      </div>

      <div class="calendar-quickadd-panel" data-calendar-quickadd-panel="full" hidden>
        <div class="calendar-quickadd-row">
          <label>
            Titel / naam
            <input id="calendarQuickAddFullName" name="fullTitle" type="text" placeholder="Naam of beschrijving" autocomplete="off" />
          </label>

          <label>
            Telefoonnummer
            <input id="calendarQuickAddFullPhone" name="fullPhone" type="tel" placeholder="Optioneel" autocomplete="off" />
          </label>
        </div>

        <div class="calendar-quickadd-row">
          <label>
            Kenteken
            <input id="calendarQuickAddFullLicensePlate" name="fullLicensePlate" type="text" placeholder="Bijv. 12-ABC-3" autocomplete="off" />
          </label>

          <label>
            Service
            <div id="calendarQuickAddFullServiceUi" class="calendar-quickadd-service-select">
              <select id="calendarQuickAddFullServiceSelect" name="fullService" class="calendar-quickadd-service-native" tabindex="-1" aria-hidden="true">
                ${F.map((e,n)=>`<option value="${e}" ${n===0?"selected":""}>${e}</option>`).join("")}
              </select>
              <button
                type="button"
                id="calendarQuickAddFullServiceTrigger"
                class="calendar-quickadd-service-trigger service-option-${Re(F[0])}"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <span class="calendar-quickadd-service-dot" aria-hidden="true"></span>
                <span id="calendarQuickAddFullServiceLabel">${F[0]}</span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div id="calendarQuickAddFullServiceMenu" class="calendar-quickadd-service-menu" role="listbox" hidden>
                ${F.map(e=>`
                  <button
                    type="button"
                    class="calendar-quickadd-service-item service-option-${Re(e)}"
                    data-quickadd-service-value="${e}"
                  >
                    <span class="calendar-quickadd-service-dot" aria-hidden="true"></span>
                    <span>${e}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </label>
        </div>

        <label>
          Voeg eigen service toe
          <div class="calendar-quickadd-service-input-row">
            <input id="calendarQuickAddFullServiceInput" type="text" placeholder="Bijv. Wintercheck" autocomplete="off" />
            <button id="calendarQuickAddFullAddServiceBtn" type="button" class="button subtle" style="display:none;">Toevoegen</button>
          </div>
          <div id="calendarQuickAddFullSelectedServices" class="calendar-quickadd-service-chips"></div>
        </label>

        <div class="calendar-quickadd-row">
          <label>
            Datum
            <div id="calendarQuickAddFullDatePicker" class="request-date-picker" data-schedule-date-picker>
              <input type="hidden" name="fullDate" data-schedule-edit-date value="" />
              <button class="request-date-trigger" type="button" data-schedule-date-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-date-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div class="request-date-options" role="listbox" data-schedule-date-options></div>
            </div>
          </label>
          <label for="calendarQuickAddFullAllDay">
            Hele dag
            <span class="calendar-quickadd-toggle">
              <input id="calendarQuickAddFullAllDay" name="fullAllDay" type="checkbox" />
              <span>Hele dag</span>
            </span>
          </label>
        </div>

        <div id="calendarQuickAddFullTimeRow" class="calendar-quickadd-time-row">
          <label>
            Vanaf
            <div id="calendarQuickAddFullStartPicker" class="request-time-picker" data-schedule-time-picker>
              <input type="hidden" name="fullStart" data-schedule-edit-time value="" />
              <button class="request-time-trigger" type="button" data-schedule-time-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-time-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div class="request-time-options" role="listbox" data-schedule-time-options></div>
            </div>
          </label>
          <label>
            Tot
            <div id="calendarQuickAddFullEndPicker" class="request-time-picker" data-schedule-time-picker>
              <input type="hidden" name="fullEnd" data-schedule-edit-time value="" />
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
          <textarea id="calendarQuickAddFullNote" name="fullNote" rows="2" placeholder="Optioneel"></textarea>
        </label>
      </div>

      <div class="manual-appointment-actions">
        <button type="button" class="button subtle" data-calendar-quickadd-close>Annuleren</button>
        <button type="submit" class="button">Snel opslaan</button>
      </div>
      <p id="calendarQuickAddStatus" class="status-text" role="status" aria-live="polite"></p>
    </form>
    </section>
  `,document.querySelectorAll(".calendar-quickadd-backdrop[data-calendar-quickadd-root='true']").forEach(e=>{e!==O&&e.remove()}),document.body.append(O);const u=O.querySelector(".calendar-quickadd-modal"),le=u.querySelector("#calendarQuickAddForm"),ne=u.querySelector("#calendarQuickAddName"),Be=u.querySelector("#calendarQuickAddDatePicker"),Ze=u.querySelector("#calendarQuickAddStartPicker"),Je=u.querySelector("#calendarQuickAddEndPicker"),ae=u.querySelector("#calendarQuickAddAllDay"),en=u.querySelector("#calendarQuickAddTimeRow"),Ne=u.querySelector("#calendarQuickAddPhone"),Fe=u.querySelector("#calendarQuickAddNote"),b=u.querySelector("#calendarQuickAddStatus"),ke=u.querySelector("button[type='submit']"),ee=u.querySelector("#calendarQuickAddTitle"),ye=u.querySelector("[data-calendar-quickadd-view='full']"),Mt=u.querySelector("[data-calendar-quickadd-panel='quick']"),qt=u.querySelector("[data-calendar-quickadd-panel='full']"),Qe=u.querySelector("#calendarQuickAddFullName"),Pe=u.querySelector("#calendarQuickAddFullPhone"),oe=u.querySelector("#calendarQuickAddFullLicensePlate"),be=u.querySelector("#calendarQuickAddFullServiceSelect"),tn=u.querySelector("#calendarQuickAddFullServiceUi"),de=u.querySelector("#calendarQuickAddFullServiceTrigger"),Xe=u.querySelector("#calendarQuickAddFullServiceLabel"),_=u.querySelector("#calendarQuickAddFullServiceMenu"),Y=u.querySelector("#calendarQuickAddFullServiceInput"),et=u.querySelector("#calendarQuickAddFullAddServiceBtn"),wt=u.querySelector("#calendarQuickAddFullSelectedServices"),ie=u.querySelector("#calendarQuickAddFullDatePicker"),tt=u.querySelector("#calendarQuickAddFullStartPicker"),nt=u.querySelector("#calendarQuickAddFullEndPicker"),se=u.querySelector("#calendarQuickAddFullAllDay"),nn=u.querySelector("#calendarQuickAddFullTimeRow"),je=u.querySelector("#calendarQuickAddFullNote");let Ve="create",Se="",W="quick",Me=[],U=[F[0]];const an=new Set(F.map(e=>Re(e))),sn=(e,n)=>{if(e instanceof HTMLElement){for(const a of an)e.classList.remove(`service-option-${a}`);e.classList.add(`service-option-${Re(n)}`)}},pt=()=>{_ instanceof HTMLElement&&(_.hidden=!0),de instanceof HTMLButtonElement&&de.setAttribute("aria-expanded","false")},ln=()=>{be instanceof HTMLSelectElement&&(be.value=U[0]??"")},At=()=>{const e=U[0]??"";Xe instanceof HTMLElement&&(e?U.length>1?Xe.textContent=`${e} (+${U.length-1})`:Xe.textContent=e:Xe.textContent="Kies service"),sn(de,e||F[0]),_ instanceof HTMLElement&&_.querySelectorAll("[data-quickadd-service-value]").forEach(n=>{if(!(n instanceof HTMLElement))return;const a=String(n.dataset.quickaddServiceValue??""),l=U.includes(a);n.setAttribute("aria-selected",l?"true":"false"),n.classList.toggle("is-selected",l)}),ln()},mt=e=>{U=Array.from(new Set((Array.isArray(e)?e:[]).map(a=>String(a??"").trim()).filter(a=>F.includes(a)))),At()},on=e=>{const n=String(e??"").trim();F.includes(n)&&(U.includes(n)?U=U.filter(a=>a!==n):U=[...U,n],At())},Lt=()=>{if(ke instanceof HTMLButtonElement){if(Ve==="edit"){ke.textContent="Wijzigingen opslaan";return}ke.textContent=W==="full"?"Volledig opslaan":"Snel opslaan"}},Ke=e=>{const n=e==="full"?"full":"quick";Ve==="edit"&&n==="full"||(W=n,Mt instanceof HTMLElement&&(Mt.hidden=W!=="quick"),qt instanceof HTMLElement&&(qt.hidden=W!=="full"),ee instanceof HTMLElement&&(ee.classList.toggle("is-active",W==="quick"),ee.setAttribute("aria-selected",W==="quick"?"true":"false"),ee.tabIndex=W==="quick"?0:-1),ye instanceof HTMLElement&&(ye.classList.toggle("is-active",W==="full"),ye.setAttribute("aria-selected",W==="full"?"true":"false"),ye.tabIndex=W==="full"?0:-1),Lt())},Tt=e=>{Ve=e==="edit"?"edit":"create",Lt()},at=()=>{wt instanceof HTMLElement&&(wt.innerHTML=Me.map((e,n)=>`
        <span class="service-chip service-chip-other" data-quickadd-custom-index="${n}">
          ${k(e)}
          <button type="button" class="service-chip-remove" data-quickadd-remove-custom-index="${n}" aria-label="Service verwijderen">×</button>
        </span>
      `).join(""))},it=()=>{!(Y instanceof HTMLInputElement)||!(et instanceof HTMLButtonElement)||(et.style.display=Y.value.trim().length>0?"block":"none")},Et=()=>{if(!(Y instanceof HTMLInputElement))return;const e=Y.value.trim();if(!e||Me.includes(e)){it();return}Me.push(e),Y.value="",at(),it(),Y.focus()};Y instanceof HTMLInputElement&&(Y.addEventListener("input",it),Y.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),Et())})),et instanceof HTMLButtonElement&&et.addEventListener("click",e=>{e.preventDefault(),Et()}),de==null||de.addEventListener("click",()=>{if(!(_ instanceof HTMLElement)||!(de instanceof HTMLButtonElement))return;const e=_.hidden;_.hidden=!e,de.setAttribute("aria-expanded",e?"true":"false")}),_ instanceof HTMLElement&&_.addEventListener("click",e=>{const n=e.target instanceof Element?e.target:null,a=n==null?void 0:n.closest("[data-quickadd-service-value]");a instanceof HTMLElement&&(e.preventDefault(),on(a.dataset.quickaddServiceValue??""))}),be instanceof HTMLSelectElement&&mt([be.value||F[0]]),ee==null||ee.addEventListener("click",()=>Ke("quick")),ee==null||ee.addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Ke("quick"))}),ye==null||ye.addEventListener("click",()=>Ke("full"));const xt=e=>{if(!(le instanceof HTMLFormElement))return;const n=le.querySelectorAll("input[name='color']");for(const l of n)if(l instanceof HTMLInputElement&&l.value===String(e??"")){l.checked=!0;return}const a=le.querySelector("input[name='color']");if(a instanceof HTMLInputElement){a.checked=!0;return}},Ht=e=>{if(!(Be instanceof HTMLElement))return;const n=dt(e),a=Be.querySelector("[data-schedule-edit-date]"),l=Be.querySelector("[data-schedule-date-label]"),y=Be.querySelector("[data-schedule-date-options]");a instanceof HTMLInputElement&&(a.value=n),l instanceof HTMLElement&&(l.textContent=ct(n)),y instanceof HTMLElement&&(y.innerHTML=rt(n))},ce=(e,n)=>{if(!(e instanceof HTMLElement))return;const a=K(n),l=e.querySelector("[data-schedule-edit-time]"),y=e.querySelector("[data-schedule-time-label]"),S=e.querySelector("[data-schedule-time-options]");l instanceof HTMLInputElement&&(l.value=a),y instanceof HTMLElement&&(y.textContent=a),S instanceof HTMLElement&&(S.innerHTML=gt(a))},Oe=e=>{const[n,a]=K(e).split(":").map(Number),l=(n*60+a+60)%(24*60);return`${String(Math.floor(l/60)).padStart(2,"0")}:${String(l%60).padStart(2,"0")}`},Ct=(e,n,a,l)=>{if(!(e instanceof HTMLElement))return;const y=n instanceof HTMLInputElement&&n.checked;if(e.classList.toggle("is-hidden",y),y){const L=a==null?void 0:a.querySelector("[data-schedule-time-label]"),r=l==null?void 0:l.querySelector("[data-schedule-time-label]");L instanceof HTMLElement&&(L.textContent="All day"),r instanceof HTMLElement&&(r.textContent="All day");return}const S=a==null?void 0:a.querySelector("[data-schedule-edit-time]"),E=l==null?void 0:l.querySelector("[data-schedule-edit-time]"),x=a==null?void 0:a.querySelector("[data-schedule-time-label]"),$=l==null?void 0:l.querySelector("[data-schedule-time-label]");x instanceof HTMLElement&&S instanceof HTMLInputElement&&(x.textContent=K(S.value)),$ instanceof HTMLElement&&E instanceof HTMLInputElement&&($.textContent=K(E.value))},st=()=>{Ct(en,ae,Ze,Je),Ct(nn,se,tt,nt)};ae==null||ae.addEventListener("change",st),se==null||se.addEventListener("change",st);const ft=(e,n)=>{if(Tt("create"),Ke("quick"),Se="",Me=[],ne instanceof HTMLInputElement&&(ne.value=""),Ne instanceof HTMLInputElement&&(Ne.value=""),Fe instanceof HTMLTextAreaElement&&(Fe.value=""),Qe instanceof HTMLInputElement&&(Qe.value=""),Pe instanceof HTMLInputElement&&(Pe.value=""),oe instanceof HTMLInputElement&&(oe.value=""),be instanceof HTMLSelectElement&&mt([F[0]]),Y instanceof HTMLInputElement&&(Y.value=""),je instanceof HTMLTextAreaElement&&(je.value=""),at(),it(),pt(),b instanceof HTMLElement&&(b.textContent="",b.className="status-text"),xt(Ie[0]),Ht(e),ie instanceof HTMLElement){const l=dt(e),y=ie.querySelector("[data-schedule-edit-date]"),S=ie.querySelector("[data-schedule-date-label]"),E=ie.querySelector("[data-schedule-date-options]");y instanceof HTMLInputElement&&(y.value=l),S instanceof HTMLElement&&(S.textContent=ct(l)),E instanceof HTMLElement&&(E.innerHTML=rt(l))}const a=K(n||"09:00");ce(Ze,a),ce(Je,Oe(a)),ce(tt,a),ce(nt,Oe(a)),ae instanceof HTMLInputElement&&(ae.checked=!n),se instanceof HTMLInputElement&&(se.checked=!n),st(),O.hidden=!1,setTimeout(()=>{ne instanceof HTMLInputElement&&ne.focus()},60)},dn=()=>{if(!He)return;ft(X(q),"09:00");const e=new URLSearchParams(window.location.search);e.delete("quickadd");const n=e.toString(),a=window.location.hash||"",l=`${window.location.pathname}${n?`?${n}`:""}${a}`;window.history.replaceState(null,"",l)},$t=e=>{if(!e)return;Tt("edit"),Se=String(e.id??"");const n=e.appointmentAt??e.createdAt,a=dt(zt(n)),l=K(Gt(n)),y=K(Jt(e.message)||Oe(l)),S=St(e.message)||xe(e,0),E=ut(e.message),x=String(e.phone??"").trim();ne instanceof HTMLInputElement&&(ne.value=S),Ne instanceof HTMLInputElement&&(Ne.value=x==="0000000000"?"":x),Fe instanceof HTMLTextAreaElement&&(Fe.value=E===Te?"":E),b instanceof HTMLElement&&(b.textContent="",b.className="status-text");const $=_e(e.licensePlate),L=Zt(e.service).map(H=>String(H??"").trim()).filter(Boolean),r=L.filter(H=>F.includes(H)),h=L.filter(H=>!F.includes(H)),N=!!$&&$!=="UNKNOWN",w=L.length===0||L.every(H=>/simple appointment/i.test(H)),T=N||!w?"full":"quick";if(Qe instanceof HTMLInputElement&&(Qe.value=S),Pe instanceof HTMLInputElement&&(Pe.value=x==="0000000000"?"":x),oe instanceof HTMLInputElement&&(oe.value=N?$:""),je instanceof HTMLTextAreaElement&&(je.value=E===Te?"":E),Me=h,at(),mt(r.length?r:[F[0]]),xt(String(e.color??"")||Ie[0]),Ht(a),ce(Ze,l),ce(Je,y),ie instanceof HTMLElement){const H=ie.querySelector("[data-schedule-edit-date]"),V=ie.querySelector("[data-schedule-date-label]"),z=ie.querySelector("[data-schedule-date-options]");H instanceof HTMLInputElement&&(H.value=a),V instanceof HTMLElement&&(V.textContent=ct(a)),z instanceof HTMLElement&&(z.innerHTML=rt(a))}ce(tt,l),ce(nt,y),ae instanceof HTMLInputElement&&(ae.checked=Ee(e.message)),se instanceof HTMLInputElement&&(se.checked=Ee(e.message)),Ke(T),st(),O.hidden=!1,setTimeout(()=>{ne instanceof HTMLInputElement&&ne.focus()},60)},lt=()=>{O.hidden=!0};u.addEventListener("click",e=>{const n=e.target instanceof Element?e.target:null;if(!n||Ut(u,n)||n.closest("[data-quickadd-service-value]"))return;tn instanceof HTMLElement&&!n.closest("#calendarQuickAddFullServiceUi")&&pt();const l=n.closest("[data-quickadd-remove-custom-index]");if(l instanceof HTMLElement){const S=Number(l.dataset.quickaddRemoveCustomIndex??-1);S>=0&&(Me.splice(S,1),at());return}n.closest("[data-calendar-quickadd-close]")&&lt()}),O.addEventListener("click",e=>{e.target===O&&lt()}),u.addEventListener("keydown",e=>{if(e.key==="Escape"){if(_ instanceof HTMLElement&&!_.hidden){pt();return}lt()}}),le==null||le.addEventListener("submit",async e=>{if(e.preventDefault(),!c){b instanceof HTMLElement&&(b.textContent="Geen garage beschikbaar.",b.className="status-text warning");return}const n=W==="full",a=n?Qe:ne,l=n?Pe:Ne,y=n?je:Fe,S=n?ie:Be,E=n?tt:Ze,x=n?nt:Je,$=n?se:ae,L=a instanceof HTMLInputElement?a.value.trim():"",r=l instanceof HTMLInputElement?l.value.trim():"",h=y instanceof HTMLTextAreaElement?y.value.trim():"",N=S==null?void 0:S.querySelector("[data-schedule-edit-date]"),w=E==null?void 0:E.querySelector("[data-schedule-edit-time]"),T=x==null?void 0:x.querySelector("[data-schedule-edit-time]"),H=le instanceof HTMLFormElement?le.querySelector("input[name='color']:checked"):null,V=$ instanceof HTMLInputElement&&$.checked,z=N instanceof HTMLInputElement?N.value.trim():"",re=!V&&w instanceof HTMLInputElement?w.value.trim():"09:00",Ae=!V&&T instanceof HTMLInputElement?K(T.value.trim(),Oe(re)):Oe(re),G=n?Ie[0]:H instanceof HTMLInputElement?H.value:Ie[0],ot=oe instanceof HTMLInputElement?_e(oe.value):"",ue=[...U,...Me].map(Z=>Z.trim()).filter(Boolean);if(!L){b instanceof HTMLElement&&(b.textContent="Vul een naam in.",b.className="status-text warning"),a instanceof HTMLInputElement&&a.focus();return}if(!z){b instanceof HTMLElement&&(b.textContent="Geen datum geselecteerd.",b.className="status-text warning");return}if(n&&!ot){b instanceof HTMLElement&&(b.textContent="Vul een kenteken in.",b.className="status-text warning"),oe instanceof HTMLInputElement&&oe.focus();return}if(n&&!ue.length){b instanceof HTMLElement&&(b.textContent="Selecteer minimaal 1 service.",b.className="status-text warning"),be instanceof HTMLSelectElement&&be.focus();return}ke instanceof HTMLButtonElement&&(ke.disabled=!0),b instanceof HTMLElement&&(b.textContent=Ve==="edit"?"Opslaan...":"Toevoegen...",b.className="status-text");try{if(Ve==="edit"&&Se){const D=A.find(J=>String(J.id)===Se)??C.find(J=>String(J.id)===Se);if(!D)throw new Error("Appointment not found for editing.");const pe=`${z}T${re}`,Le=r||String(D.phone??"").trim()||"0000000000",Ue=h||ut(D.message)||Te,me=n?ue.join(", "):String(D.service??""),I=n?ot||"UNKNOWN":String(D.licensePlate??"UNKNOWN"),ht=[`Name: ${L}`,`AllDay: ${V?"true":"false"}`,`End: ${Ae}`,`Message: ${Ue}`].join(`
`);await Qt(D,pe),await Pt(D,{name:L,phone:Le,message:ht,color:G,service:me,licensePlate:I}),C=qe(C.map(J=>String(J.id)===Se?{...J,appointmentAt:pe,name:L,color:G,message:ht,service:me,licensePlate:I}:J)),A=qe(A.map(J=>String(J.id)===Se?{...J,appointmentAt:pe,name:L,color:G,message:ht,service:me,licensePlate:I}:J))}else{const D=h||Te,pe=r||"0000000000";n?await Vt({garageId:c,name:L,licensePlate:ot,phone:pe,service:ue.join(", "),message:`Name: ${L}
AllDay: ${V?"true":"false"}
End: ${Ae}
Message: ${D}`,color:G,appointmentAt:`${z}T${re}`}):await Vt({garageId:c,name:L,licensePlate:"UNKNOWN",phone:pe,service:"Simple appointment",message:`Name: ${L}
AllDay: ${V?"true":"false"}
End: ${Ae}
Message: ${D}`,color:G,appointmentAt:`${z}T${re}`}),C=qe(await Kt({garageIds:s})),A=qe(C.filter(Le=>Le.inAppointments===!0&&!Yt(Le)))}lt();const Z=fe(`${z}T12:00:00`);Z&&(q=Z,Q=new Date(Z.getFullYear(),Z.getMonth(),1)),j()}catch(Z){const D=Z instanceof Error?Z.message:"Kan afspraak niet toevoegen.";b instanceof HTMLElement&&(b.textContent=D,b.className="status-text error")}finally{ke instanceof HTMLButtonElement&&(ke.disabled=!1)}}),o.addEventListener("click",e=>{const n=e.target instanceof Element?e.target:null;if(!n)return;const a=n.closest(".day-slot-row");if(a instanceof HTMLElement){const l=a.querySelector(".day-slot-time"),y=l instanceof HTMLElement?(l.textContent??"").trim():"",S=Date.now(),E=e.detail>=2||S-De<550&&Ge===y;if(De=S,Ge=y,E){if(De=0,a.classList.contains("has-booking")){const x=n.closest("[data-day-slot-booking-id]"),$=a.querySelector("[data-day-slot-booking-id]"),L=String((x instanceof HTMLElement?x.dataset.daySlotBookingId:$ instanceof HTMLElement?$.dataset.daySlotBookingId:"")??""),r=A.find(h=>String(h.id)===L);if(r){$t(r);return}}ft(X(q),y||"09:00")}}}),dn();try{C=await Kt({garageIds:s});const e=new Set(C.map(a=>a.licensePlate).filter(a=>a&&a!=="UNKNOWN").map(a=>_e(a)));for(const a of e)if(a&&!Ce.has(a))try{const l=await vn(a);l&&Ce.set(a,l)}catch(l){console.error(`Failed to fetch vehicle for ${a}:`,l)}A=qe(C.filter(a=>a.inAppointments===!0&&!Yt(a)));const n=jt(C);v(n.unread),j()}catch(e){o.innerHTML='<p class="muted">Unable to load calendar right now.</p>',te.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',v(0),console.error(e)}}const Bn=document.querySelector("#app");rn();In(Bn);
