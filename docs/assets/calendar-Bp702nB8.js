import{p as st,d as Ue,c as ot}from"./theme-DhME38Lo.js";/* empty css                      */import{e as it,a as rt,c as lt,l as dt,t as y,g as m,i as ct,p as ut,m as pt,s as Oe,j as mt,b as gt,d as ht,k as ft,n as z,f as fe}from"./branding-BojcsMHH.js";import{n as be,f as vt}from"./rdwService-CFrMDQAa.js";import{s as je}from"./confirmDialog-DSEC2-zx.js";import{h as yt,n as W,a as Ve,f as Ye,s as Ge,b as pe}from"./scheduleTimePicker-q1IARKz3.js";function bt(){const e=m();return[z(0,e),z(1,e),z(2,e),z(3,e),z(4,e),z(5,e),z(6,e)]}const kt=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function b(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function wt(e=""){return{title:be(e)||"Unknown vehicle",buildYear:""}}function ke(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function I(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function E(e){const t=e instanceof Date?e:I(e);if(!t)return"";const a=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}-${i}-${n}`}function ze(e){const t=I(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function St(e){const t=I(e);if(!t)return"";const a=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${a}-${i}-${n}`}function Mt(e){const t=I(e);if(!t)return"09:00";const a=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return`${a}:${i}`}function Ke(e,t){const a=String(e??"").trim(),i=String(t??"").trim();if(!a||!i)return"";const n=`${a}T${i}:00`;return I(n)?n:""}function Ct(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function me(e){return e==="tr"?"tr-TR":e==="en"?"en-GB":"nl-NL"}function Lt(e){return e.toLocaleDateString(me(m()),{month:"long",year:"numeric"})}function qt(e){return e.toLocaleDateString(me(m()),{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function At(e){return e.toLocaleDateString(me(m()),{weekday:"short",day:"2-digit",month:"short"})}function Dt(e){const t=m(),a=e.toLocaleDateString(me(t),{day:"2-digit",month:"short"});return E(e)===E(new Date)?`${y("today",t)}, ${a}`:At(e)}function $t(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function Tt(e){return $t(e.status)==="done"||e.inAppointments===!1}function Et(e){const t=String(e??"").trim();if(!t)return["other"];const a=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(i=>i.trim()).filter(Boolean);return a.length?a:[t]}function xt(e){return kt.get(String(e??"").trim().toLowerCase())??"other"}function Bt(e){const t=String(e??"").trim(),a=m();if(!t)return{key:"other",label:fe("other",a)};const i=t.toLowerCase(),n=xt(t);if(n==="other"){if(["other","overig","overige"].includes(i))return{key:n,label:fe("other",a)};const h=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:n,label:h||t}}return{key:n,label:fe(n,a)}}function We(e){return Et(e).map(t=>{const{key:a,label:i}=Bt(t);return`<span class="service-chip service-chip-${a}">${b(i)}</span>`}).join("")}function Ht(e){const a=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((a==null?void 0:a[1])??"").trim()}const ye="Manual appointment created in dashboard.";function _e(e){const a=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((a==null?void 0:a[1])??"").trim()}function Nt(e){const t=W(e),[a,i]=t.split(":"),n=Number(a),h=Number(i);if(!Number.isFinite(n)||!Number.isFinite(h))return"01:00";const g=new Date(2e3,0,1,n,h,0,0);return g.setHours(g.getHours()+1),`${String(g.getHours()).padStart(2,"0")}:${String(g.getMinutes()).padStart(2,"0")}`}function Re(e,t){const a=W(t);return`${String(e??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${a}`.trim()}function It(e){const t=String(e??""),a=t.match(/\bmessage\s*:\s*([\s\S]+)/i),i=a!=null&&a[1]?a[1].trim():t.trim(),n=i.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim();return n||(i.toLowerCase().includes(ye.toLowerCase())?ye:"")}function Pt(e){const t=ze((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),a=_e(e==null?void 0:e.message);return a?`${t} - ${a}`:t}function Ze(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const a=Ht(e.message);if(a)return a;const i=String((e==null?void 0:e.licensePlate)??"").trim();return i?ke(i):"UNKNOWN"}function Je(e){return E(e.appointmentAt??e.createdAt)}function Ft(e,t,a){const i=new Date(e.getFullYear(),e.getMonth(),1),n=new Date(e.getFullYear(),e.getMonth()+1,0),h=n.getDate(),g=(i.getDay()+6)%7,s=t.reduce((l,w)=>{const k=Je(w);return k&&l.set(k,(l.get(k)??0)+1),l},new Map),r=[];for(let l=g;l>0;l-=1){const w=new Date(i);w.setDate(1-l);const k=E(w);r.push({key:k,date:w,day:w.getDate(),isCurrentMonth:!1,isSelected:k===a,count:s.get(k)??0})}for(let l=1;l<=h;l+=1){const w=new Date(i.getFullYear(),i.getMonth(),l),k=E(w);r.push({key:k,date:w,day:l,isCurrentMonth:!0,isSelected:k===a,count:s.get(k)??0})}for(;r.length%7!==0;){const l=new Date(n),w=r.length-(g+h)+1;l.setDate(n.getDate()+w);const k=E(l);r.push({key:k,date:l,day:l.getDate(),isCurrentMonth:!1,isSelected:k===a,count:s.get(k)??0})}return r}function Qt(e,t,a){const i=Ft(e,t,a),n=E(new Date),h=bt().map(s=>`<span class="month-weekday">${s}</span>`).join(""),g=i.map(s=>{const r=["month-cell"];return s.isCurrentMonth||r.push("is-outside"),s.isSelected&&r.push("is-selected"),s.isCurrentMonth&&s.key===n&&r.push("is-today"),s.count>0&&r.push("has-bookings"),`
        <button class="${r.join(" ")}" type="button" data-calendar-cell="${s.key}">
          <span class="month-cell-day">${s.day}</span>
          ${s.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    <div class="month-grid-board">
      <div class="month-week-row">${h}</div>
      <div class="month-grid-cells">${g}</div>
    </div>
  `}function Ut(e,t){const a=[];for(let n=0;n<=23;n+=1)a.push(`${String(n).padStart(2,"0")}:00`),a.push(`${String(n).padStart(2,"0")}:30`);const i=t.reduce((n,h,g)=>{const s=ze(h.appointmentAt??h.createdAt),r=n.get(s)??[];return r.push({booking:h,index:g}),n.set(s,r),n},new Map);return`
    <div class="day-board-list">
      ${a.map(n=>{const h=i.get(n)??[];if(!h.length)return`
              <div class="day-slot-row">
                <span class="day-slot-time">${n}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">${y("available",m())}</span>
              </div>
            `;const g=h.map(({booking:r,index:l},w)=>{const k=b(String(r.id??"")),_=String(r.licensePlate??"").toUpperCase()==="UNKNOWN",oe=b(r.color??"#2563EB"),j=b(r.licensePlate&&r.licensePlate!=="UNKNOWN"?ke(r.licensePlate):"UNKNOWN"),K=b(Ze(r)),O=h.length>1&&w<h.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${k}">
                <div class="day-slot-plate-wrapper">
                  ${_?`<span class="fast-appt-dot" style="background: ${oe}" aria-hidden="true"></span>`:`<span class="plate-chip">${j}</span>`}
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${K}</span>
                  </div>
                  <div class="day-slot-status-services">
                    ${_?'<span class="service-chip service-chip-other">Simple appointment</span>':`${We(r.service)}`}
                  </div>
                </div>
              </div>
              ${O?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),s=h.length>1?`<span class="day-slot-count">${h.length} ${y("appointments",m()).toLowerCase()}</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${n}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${s}
                <div class="day-slot-bookings">
                  ${g}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function Ot(e,t,a,i){return e.length?e.map((n,h)=>{const g=String(n.id??""),s=t===g,r=a===g,l=n.appointmentAt??n.createdAt,w=String(n.licensePlate??"").toUpperCase()==="UNKNOWN",k=b(n.color??"#2563EB"),_=b(n.licensePlate&&n.licensePlate!=="UNKNOWN"?ke(n.licensePlate):"UNKNOWN"),oe=b(Pt(n)),j=Ve(St(l)),K=b(j),O=b(Ye(j)),x=W(Mt(l)),ie=b(x),Z=W(_e(n.message)||Nt(x)),J=b(Z),re=b(Ze(n)),X=n.licensePlate?be(n.licensePlate):"",P=i.get(X)||wt(n.licensePlate),ee=P.buildYear?`${P.title} (${P.buildYear})`:P.title,B=b(String(n.phone??"No phone number")),te=b(It(n.message)||"No customer message.");return`
        <article class="request-card ${s?"is-expanded":""}" data-calendar-booking-id="${b(g)}">
          <div class="request-card-head">
            <div class="request-main">
              ${w?`<span class="fast-appt-dot" style="background: ${k}" aria-hidden="true"></span>`:`<span class="plate-chip">${_}</span>`}
              <div class="request-info">
                <p class="request-name"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1668 7.08463C14.1668 4.78345 12.3013 2.91797 10.0002 2.91797C7.69898 2.91797 5.8335 4.78345 5.8335 7.08463C5.8335 9.3858 7.69898 11.2513 10.0002 11.2513C12.3013 11.2513 14.1668 9.3858 14.1668 7.08463Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8332 17.0833C15.8332 13.8617 13.2215 11.25 9.99984 11.25C6.77818 11.25 4.1665 13.8617 4.1665 17.0833" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${re}</p>
                ${w?"":`<p class="request-vehicle"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50667 14.1667C7.50667 15.0872 6.76048 15.8333 5.84001 15.8333C4.91953 15.8333 4.17334 15.0872 4.17334 14.1667C4.17334 13.2462 4.91953 12.5 5.84001 12.5C6.76048 12.5 7.50667 13.2462 7.50667 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M15.8397 14.1667C15.8397 15.0872 15.0935 15.8333 14.173 15.8333C13.2525 15.8333 12.5063 15.0872 12.5063 14.1667C12.5063 13.2462 13.2525 12.5 14.173 12.5C15.0935 12.5 15.8397 13.2462 15.8397 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M1.67301 8.33464H15.0063M1.67301 8.33464C1.67301 8.98464 1.65635 10.868 1.67634 12.718C1.70632 13.318 1.80624 13.818 4.17444 14.168M1.67301 8.33464C1.85288 6.88464 2.63561 5.16797 3.0353 4.51797M7.50634 8.33464V4.16797M12.4981 14.168H7.5019M1.68634 4.16797H10.1998C10.1998 4.16797 10.6495 4.16797 11.0492 4.20797C11.7987 4.27797 12.4282 4.61797 13.0577 5.46797C13.7242 6.36797 14.2367 7.50797 14.9162 8.11797C16.0454 9.13164 18.1937 8.81797 18.3137 10.968C18.3437 12.068 18.3437 13.268 18.2937 13.468C18.2134 14.0569 17.7593 14.1531 17.1945 14.168C16.7043 14.181 16.1134 14.1447 15.8256 14.168" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
${ee}</p>`}
                <div class="request-services">${We(n.service)}</div>
              </div>
            </div>
            <div class="request-meta">
              <span class="request-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${oe}</span>
              <button
                class="request-toggle ${s?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${b(g)}"
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
                    <img src="${Ue("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${B}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${Ue("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${te}</span>
                </div>
              </div>

              <div class="request-actions">
                ${r?`
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
                          ${Ge(j)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${y("fastFrom",m())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${ie}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${ie}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${pe(x)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${y("fastTo",m())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${J}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${J}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${pe(Z)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${b(g)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${b(g)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${b(g)}" aria-label="Edit booking">✎</button>
                ${r?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${b(g)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${b(g)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments for this date.</p></article>'}function ve(e){return[...e].sort((t,a)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime())}async function jt(e){var $e,Te,Ee,xe,Be,He,Ne,Ie;if(!e)return;const t=await it();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}rt(t.activeGarage);const a=t.isAdmin?null:[($e=t.activeGarage)==null?void 0:$e.id].filter(Boolean),i=((Te=t.activeGarage)==null?void 0:Te.id)??((xe=(Ee=t.garages)==null?void 0:Ee[0])==null?void 0:xe.id)??"",n=String(((Be=t.activeGarage)==null?void 0:Be.calendarStyle)??((He=t.activeGarage)==null?void 0:He.calendar_style)??"1"),h=String(((Ne=t.activeGarage)==null?void 0:Ne.calendarDefaultView)??((Ie=t.activeGarage)==null?void 0:Ie.calendar_default_view)??"month").toLowerCase(),{shell:g,contentArea:s,setUnreadEmailCount:r}=lt({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:t.user.email,onLogout:dt,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(g),g.classList.toggle("calendar-style-agenda",n==="2"),s.innerHTML=`
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
              <button id="calendarModeMonth" class="calendar-mode-tab" type="button" data-calendar-mode="month">${y("month",m())}</button>
              <button id="calendarModeDay" class="calendar-mode-tab" type="button" data-calendar-mode="day">${y("day",m())}</button>
            </div>
          </div>

          <div id="calendarBoardBody" class="calendar-board-body"></div>
        </section>
      </div>

      <section class="panel calendar-day-panel">
        <div class="calendar-day-panel-head">
          <p id="calendarDayTitle" class="calendar-day-title"></p>
          <span id="calendarDayCount" class="calendar-day-count">0 ${y("appointments",m()).toLowerCase()}</span>
        </div>

        <div id="calendarDayList" class="request-list"></div>
      </section>
    </section>

    <div id="calendarQuickAddOverlay" class="calendar-quickadd-overlay" hidden>
      <div class="calendar-quickadd-backdrop" data-calendar-quickadd-close></div>
      <section class="calendar-quickadd-modal" role="dialog" aria-modal="true" aria-labelledby="calendarQuickAddTitle">
        <div class="calendar-quickadd-head">
          <h3 id="calendarQuickAddTitle">${y("appointmentTypeFast",m())}</h3>
          <button type="button" class="icon-button" data-calendar-quickadd-close aria-label="Close quick add">✕</button>
        </div>

        <form id="calendarQuickAddForm" class="calendar-quickadd-form" novalidate>
          <label>
            ${y("fastTitle",m())}
            <input id="calendarQuickAddName" name="title" type="text" placeholder="${y("fastTitlePlaceholder",m())}" required />
          </label>

          <div class="calendar-quickadd-row">
            <label>
              ${y("fastDate",m())}
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

          <fieldset class="calendar-quickadd-colors" aria-label="${y("fastColor",m())}">
            <legend>${y("fastColor",m())}</legend>
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
            <span>${y("allDay",m())}</span>
          </label>

          <div id="calendarQuickAddTimeRow" class="calendar-quickadd-time-row">
            <label>
              ${y("fastFrom",m())}
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
              ${y("fastTo",m())}
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
            ${y("fastNote",m())}
            <textarea id="calendarQuickAddNote" name="note" rows="2" placeholder="${y("fastNotePlaceholder",m())}"></textarea>
          </label>

          <div class="manual-appointment-actions">
            <button type="button" class="button subtle" data-calendar-quickadd-close>${y("cancel",m())}</button>
            <button type="submit" class="button">${y("fastSave",m())}</button>
          </div>
          <p id="calendarQuickAddStatus" class="status-text" role="status" aria-live="polite"></p>
        </form>
      </section>
    </div>
  `;const l=s.querySelector("#calendarBoardBody"),w=s.querySelector("#calendarPeriodLabel"),k=s.querySelector("#calendarModeMonth"),_=s.querySelector("#calendarModeDay"),oe=s.querySelector("#calendarDayTitle"),j=s.querySelector("#calendarDayCount"),K=s.querySelector("#calendarDayList"),O=s.querySelector("#calendarQuickAddOverlay"),x=s.querySelector("#calendarQuickAddForm"),ie=s.querySelector("#calendarQuickAddName"),Z=s.querySelector("#calendarQuickAddDatePicker"),J=s.querySelector("#calendarQuickAddStartPicker"),re=s.querySelector("#calendarQuickAddEndPicker"),X=s.querySelector("#calendarQuickAddDate"),P=s.querySelector("#calendarQuickAddStart"),ee=s.querySelector("#calendarQuickAddEnd"),B=s.querySelector("#calendarQuickAddAllDay"),te=s.querySelector("#calendarQuickAddTimeRow"),de=s.querySelector("#calendarQuickAddStatus");let F=[],H=[];const R=ct("calendar",{}),Xe=I(R.selectedDate??""),ge=I(R.currentMonth??"");let f=Xe??new Date,N=ge?new Date(ge.getFullYear(),ge.getMonth(),1):new Date(f.getFullYear(),f.getMonth(),1);const et=h==="day"||h==="week"||h==="agenda"?"day":"month";let Q=R.activeMode==="day"||R.activeMode==="month"?R.activeMode:et,C=String(R.expandedBookingId??"").trim(),L=String(R.editingBookingId??"").trim(),we="",Se="",Me=0,Ce="",ce=E(f);const he=new Map,Le=p=>{const o=String(p.getHours()).padStart(2,"0"),M=String(p.getMinutes()).padStart(2,"0");return`${o}:${M}`},qe=(p,o,M)=>{const S=Ve(p),q=W(o),d=W(M);if(X instanceof HTMLInputElement&&(X.value=S),Z instanceof HTMLElement){const v=Z.querySelector("[data-schedule-date-label]"),A=Z.querySelector("[data-schedule-date-options]");v instanceof HTMLElement&&(v.textContent=Ye(S)),A instanceof HTMLElement&&(A.innerHTML=Ge(S))}if(P instanceof HTMLInputElement&&(P.value=q),J instanceof HTMLElement){const v=J.querySelector("[data-schedule-time-label]"),A=J.querySelector("[data-schedule-time-options]");v instanceof HTMLElement&&(v.textContent=q),A instanceof HTMLElement&&(A.innerHTML=pe(q))}if(ee instanceof HTMLInputElement&&(ee.value=d),re instanceof HTMLElement){const v=re.querySelector("[data-schedule-time-label]"),A=re.querySelector("[data-schedule-time-options]");v instanceof HTMLElement&&(v.textContent=d),A instanceof HTMLElement&&(A.innerHTML=pe(d))}},V=(p,o="")=>{de instanceof HTMLElement&&(de.textContent=String(p??""),de.classList.remove("error","warning"),(o==="error"||o==="warning")&&de.classList.add(o))},Ae=()=>{O instanceof HTMLElement&&(O.hidden=!0,V(""))},tt=p=>{if(!(O instanceof HTMLElement))return;ce=String(p??E(f));const o=new Date,M=new Date(o.getTime()+60*60*1e3);qe(ce,Le(o),Le(M)),B instanceof HTMLInputElement&&(B.checked=!1),te instanceof HTMLElement&&te.classList.remove("is-hidden"),O.hidden=!1,V(""),window.requestAnimationFrame(()=>{ie instanceof HTMLInputElement&&ie.focus()})};B==null||B.addEventListener("change",()=>{const p=B.checked;if(P instanceof HTMLInputElement&&(P.disabled=p),ee instanceof HTMLInputElement&&(ee.disabled=p),p){const o=X instanceof HTMLInputElement?X.value:ce;qe(o,"00:00","23:59")}te instanceof HTMLElement&&te.classList.toggle("is-hidden",p)});const De=async()=>{const[p,o]=await Promise.all([gt({garageIds:a}),ht({garageIds:a})]),M=new Set(o.map(d=>String(d.bookingId??d.id??"").trim()).filter(Boolean));F=p;const S=new Set(F.map(d=>d.licensePlate).filter(d=>d&&d!=="UNKNOWN").map(d=>be(d)));for(const d of S)if(d&&!he.has(d))try{const v=await vt(d);v&&he.set(d,v)}catch(v){console.error(`Failed to fetch vehicle for ${d}:`,v)}H=ve(F.filter(d=>{const v=String(d.id??"").trim();return d.inAppointments===!0&&!Tt(d)&&!M.has(v)}));const q=Oe(F);r(q.unread)},at=()=>{ft("calendar",{selectedDate:f.toISOString(),currentMonth:N.toISOString(),activeMode:Q,expandedBookingId:C,editingBookingId:L})},nt=()=>{const p=E(f);return H.filter(o=>Je(o)===p).sort((o,M)=>new Date(o.appointmentAt??o.createdAt).getTime()-new Date(M.appointmentAt??M.createdAt).getTime())},$=()=>{const p=E(f),o=nt(),M=Q==="day"&&(we!=="day"||Se!==p);k.classList.toggle("is-active",Q==="month"),_.classList.toggle("is-active",Q==="day"),C&&!o.some(S=>String(S.id)===C)&&(C="",L=""),L&&!o.some(S=>String(S.id)===L)&&(L=""),Q==="month"?(w.textContent=Lt(N),l.innerHTML=Qt(N,H,p)):(w.textContent=qt(f),l.innerHTML=Ut(f,o),M&&window.requestAnimationFrame(()=>{const S=l.querySelector(".day-board-list");if(!(S instanceof HTMLElement))return;const q=S.querySelector(".day-slot-row.has-booking");if(q instanceof HTMLElement){const d=l.getBoundingClientRect(),v=q.getBoundingClientRect(),A=l.scrollTop+(v.top-d.top)-8;l.scrollTo({top:Math.max(0,A),behavior:"auto"})}else l.scrollTo({top:0,behavior:"auto"})})),oe.textContent=Dt(f),j.textContent=`${o.length} ${y("appointments",m()).toLowerCase()}`,K.innerHTML=Ot(o,C,L,he),we=Q,Se=p,at()};s.addEventListener("click",async p=>{const o=p.target instanceof Element?p.target:null;if(!o)return;if(o.closest("[data-calendar-quickadd-close]")instanceof HTMLElement){Ae();return}if(yt(s,o))return;const S=o.closest("[data-calendar-nav]");if(S instanceof HTMLElement){const c=S.dataset.calendarNav;if(Q==="month"){const u=new Date(N);u.setMonth(N.getMonth()+(c==="next"?1:-1)),N=new Date(u.getFullYear(),u.getMonth(),1)}else{const u=new Date(f);u.setDate(f.getDate()+(c==="next"?1:-1)),f=u,N=new Date(f.getFullYear(),f.getMonth(),1)}$();return}const q=o.closest("[data-calendar-mode]");if(q instanceof HTMLElement){Q=q.dataset.calendarMode==="day"?"day":"month",$();return}const d=o.closest("[data-calendar-cell]");if(d instanceof HTMLElement){const c=d.dataset.calendarCell;if(c){const u=Date.now(),U=c===Ce&&u-Me<=450;Ce=c,Me=u;const T=I(`${c}T12:00:00`);T&&(f=T,N=new Date(f.getFullYear(),f.getMonth(),1),$(),U&&Q==="month"&&tt(c))}return}const v=o.closest("[data-day-slot-booking-id]");if(v instanceof HTMLElement){const c=String(v.dataset.daySlotBookingId??"");c&&(C=c,L="",$(),window.requestAnimationFrame(()=>{const u=[...K.querySelectorAll("[data-calendar-booking-id]")].find(U=>U instanceof HTMLElement&&String(U.dataset.calendarBookingId??"")===c);u instanceof HTMLElement&&u.scrollIntoView({behavior:"smooth",block:"start"})}));return}const A=o.closest("[data-calendar-toggle]");if(A instanceof HTMLElement){const c=String(A.dataset.calendarToggle??"");C=C===c?"":c,C!==c&&(L=""),$();return}const ae=o.closest("[data-calendar-action]");if(ae instanceof HTMLElement){const c=String(ae.dataset.calendarAction??""),u=String(ae.dataset.bookingId??"");if(!u)return;if(c==="edit"){C=u,L=L===u?"":u,$();return}if(c==="cancel-edit"){L="",$();return}if(c==="save-schedule"){const T=ae.closest("[data-calendar-booking-id]");if(!(T instanceof HTMLElement))return;const G=H.find(D=>String(D.id)===u);if(!G)return;const se=T.querySelector("[data-schedule-edit-date]"),Pe=T.querySelector("[data-schedule-edit-start-time]"),Fe=T.querySelector("[data-schedule-edit-end-time]");if(!(se instanceof HTMLInputElement)||!(Pe instanceof HTMLInputElement)||!(Fe instanceof HTMLInputElement))return;const le=Ke(se.value,Pe.value),Qe=W(Fe.value);if(!le)return;try{await ut(G,le)}catch(D){window.alert(D instanceof Error?D.message:"Unable to save the appointment schedule.");return}F=ve(F.map(D=>String(D.id)===u?{...D,appointmentAt:le,message:Re(D.message,Qe)}:D)),H=ve(H.map(D=>String(D.id)===u?{...D,appointmentAt:le,message:Re(D.message,Qe)}:D));const ue=I(le);ue&&(f=ue,N=new Date(ue.getFullYear(),ue.getMonth(),1)),L="",C=u,$();return}if(!H.find(T=>String(T.id)===u))return;$();return}const ne=o.closest("[data-request-action]");if(ne instanceof HTMLElement){const c=String(ne.dataset.requestAction??""),u=String(ne.dataset.bookingId??"");if(!u)return;const U=H.find(T=>String(T.id)===u);if(!U)return;if(c==="complete"){(async()=>{if(await je("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await pt(U,{convertedFromEmail:U.source!=="manual"})}catch(G){window.alert(G instanceof Error?G.message:"Unable to mark appointment as completed.");return}window.location.href=st("completed.html")}})();return}if(c==="delete"){(async()=>{if(!await je("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;F=F.filter(se=>String(se.id)!==u),H=H.filter(se=>String(se.id)!==u),L="";const G=Oe(F);r(G.unread),$()})();return}}const Y=o.closest("[data-calendar-booking-id]");if(Y instanceof HTMLElement&&!Ct(o)){const c=String(Y.dataset.calendarBookingId??"");if(!c)return;C=C===c?"":c,C!==c&&(L=""),$()}}),x==null||x.addEventListener("submit",async p=>{if(p.preventDefault(),!i){V("No garage available for quick appointment creation.","warning");return}const o=new FormData(x),M=String(o.get("title")??"").trim(),S=String(o.get("date")??ce).trim(),q=B instanceof HTMLInputElement?B.checked:!1,d=q?"00:00":String(o.get("start")??"").trim(),v=q?"23:59":String(o.get("end")??"").trim(),A=String(o.get("color")??"#2563EB").trim(),ae=String(o.get("note")??"").trim();if(!M||!S||!d||!v){V("Please fill all required fields.","warning");return}const ne=Ke(S,d);if(!ne){V("Invalid date/time.","warning");return}const Y=x.querySelector("button[type='submit']");Y instanceof HTMLButtonElement&&(Y.disabled=!0),V("Adding appointment...");try{await mt({garageId:i,name:M,licensePlate:"UNKNOWN",phone:"0000000000",service:"Simple appointment",message:`Name: ${M}
Message: ${ae||ye}${q?`
All day: yes`:""}
Until: ${v}`,color:A,appointmentAt:ne}),f=I(`${S}T12:00:00`)??f,N=new Date(f.getFullYear(),f.getMonth(),1),C="",L="",await De(),$(),x.reset(),Ae()}catch(c){const u=c instanceof Error?c.message:"Unable to add appointment.";V(u,"error")}finally{Y instanceof HTMLButtonElement&&(Y.disabled=!1)}});try{await De(),$()}catch(p){l.innerHTML='<p class="muted">Unable to load calendar right now.</p>',K.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',r(0),console.error(p)}}const Kt=document.querySelector("#app");ot();jt(Kt);
