import{p as Wt,d as At,c as zt}from"./theme-DhME38Lo.js";/* empty css                      */import{e as Xt,a as Zt,c as Jt,l as ea,t as $,g as k,i as ta,p as aa,m as na,s as xt,j as sa,b as la,d as ia,k as ra,n as ce,f as Je}from"./branding-BojcsMHH.js";import{n as st,f as oa}from"./rdwService-CFrMDQAa.js";import{s as Et}from"./confirmDialog-DSEC2-zx.js";import{h as da,n as ue,a as Nt,f as Pt,s as Yt,b as Pe}from"./scheduleTimePicker-q1IARKz3.js";function Ye(){const e=k();return[ce(0,e),ce(1,e),ce(2,e),ce(3,e),ce(4,e),ce(5,e),ce(6,e)]}const ca=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function g(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ua(e=""){return{title:st(e)||"Unknown vehicle",buildYear:""}}function Fe(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function X(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function C(e){const t=e instanceof Date?e:X(e);if(!t)return"";const s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${s}-${r}-${i}`}function je(e){const t=X(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function pa(e){const t=X(e);if(!t)return"";const s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${s}-${r}-${i}`}function ma(e){const t=X(e);if(!t)return"09:00";const s=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0");return`${s}:${r}`}function Ht(e,t){const s=String(e??"").trim(),r=String(t??"").trim();if(!s||!r)return"";const i=`${s}T${r}:00`;return X(i)?i:""}function fa(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function Ue(e){return e==="tr"?"tr-TR":e==="en"?"en-GB":"nl-NL"}function Bt(e){return e.toLocaleDateString(Ue(k()),{month:"long",year:"numeric"})}function ga(e){return e.toLocaleDateString(Ue(k()),{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function ha(e){return e.toLocaleDateString(Ue(k()),{weekday:"short",day:"2-digit",month:"short"})}function Qe(e){const t=k(),s=e.toLocaleDateString(Ue(t),{day:"2-digit",month:"short"});return C(e)===C(new Date)?`${$("today",t)}, ${s}`:ha(e)}function ba(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function ya(e){return ba(e.status)==="done"||e.inAppointments===!1}function va(e){const t=String(e??"").trim();if(!t)return["other"];const s=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(r=>r.trim()).filter(Boolean);return s.length?s:[t]}function wa(e){return ca.get(String(e??"").trim().toLowerCase())??"other"}function ka(e){const t=String(e??"").trim(),s=k();if(!t)return{key:"other",label:Je("other",s)};const r=t.toLowerCase(),i=wa(t);if(i==="other"){if(["other","overig","overige"].includes(r))return{key:i,label:Je("other",s)};const c=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:i,label:c||t}}return{key:i,label:Je(i,s)}}function Ft(e){return va(e).map(t=>{const{key:s,label:r}=ka(t);return`<span class="service-chip service-chip-${s}">${g(r)}</span>`}).join("")}function Ma(e){const s=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((s==null?void 0:s[1])??"").trim()}const at="Manual appointment created in dashboard.";function Oe(e){const s=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((s==null?void 0:s[1])??"").trim()}function Sa(e){const t=ue(e),[s,r]=t.split(":"),i=Number(s),c=Number(r);if(!Number.isFinite(i)||!Number.isFinite(c))return"01:00";const o=new Date(2e3,0,1,i,c,0,0);return o.setHours(o.getHours()+1),`${String(o.getHours()).padStart(2,"0")}:${String(o.getMinutes()).padStart(2,"0")}`}function It(e,t){const s=ue(t);return`${String(e??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${s}`.trim()}function lt(e){const t=String(e??""),s=t.match(/\bmessage\s*:\s*([\s\S]+)/i),r=s!=null&&s[1]?s[1].trim():t.trim(),i=r.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim();return i||(r.toLowerCase().includes(at.toLowerCase())?at:"")}function nt(e){const t=je((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),s=Oe(e==null?void 0:e.message);return s?`${t} - ${s}`:t}function se(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const s=Ma(e.message);if(s)return s;const r=String((e==null?void 0:e.licensePlate)??"").trim();return r?Fe(r):"UNKNOWN"}function it(e){return C(e.appointmentAt??e.createdAt)}function $a(e,t,s){const r=new Date(e.getFullYear(),e.getMonth(),1),i=new Date(e.getFullYear(),e.getMonth()+1,0),c=i.getDate(),o=(r.getDay()+6)%7,p=t.reduce((l,h)=>{const b=it(h);return b&&l.set(b,(l.get(b)??0)+1),l},new Map),d=[];for(let l=o;l>0;l-=1){const h=new Date(r);h.setDate(1-l);const b=C(h);d.push({key:b,date:h,day:h.getDate(),isCurrentMonth:!1,isSelected:b===s,count:p.get(b)??0})}for(let l=1;l<=c;l+=1){const h=new Date(r.getFullYear(),r.getMonth(),l),b=C(h);d.push({key:b,date:h,day:l,isCurrentMonth:!0,isSelected:b===s,count:p.get(b)??0})}for(;d.length%7!==0;){const l=new Date(i),h=d.length-(o+c)+1;l.setDate(i.getDate()+h);const b=C(l);d.push({key:b,date:l,day:l.getDate(),isCurrentMonth:!1,isSelected:b===s,count:p.get(b)??0})}return d}function jt(e){return e.reduce((t,s)=>{const r=it(s);if(!r)return t;const i=t.get(r)??[];return i.push(s),t.set(r,i),t},new Map)}function we(e){return String((e==null?void 0:e.color)??"#1565C0").trim()||"#1565C0"}function La(e){if(String((e==null?void 0:e.message)??"").toLowerCase().includes("all day: yes"))return!0;const s=je((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),r=Oe(e==null?void 0:e.message);return s==="00:00"&&r==="23:59"}function Ut(e){const t=`${se(e)} ${lt((e==null?void 0:e.message)??"")}`.toLowerCase();return t.includes("good friday")||t.includes("goede vrijdag")||t.includes("easter")||t.includes("paas")||t.includes("koningsdag")||t.includes("king")}function Da(e){const t=new Date(e.getFullYear(),e.getMonth(),1),s=new Date(e.getFullYear(),e.getMonth()+1,0),r=(t.getDay()+6)%7,i=[];for(let c=r;c>0;c-=1){const o=new Date(t);o.setDate(1-c),i.push(o)}for(let c=1;c<=s.getDate();c+=1)i.push(new Date(t.getFullYear(),t.getMonth(),c));for(;i.length%7!==0;){const c=new Date(s),o=i.length-(r+s.getDate())+1;c.setDate(s.getDate()+o),i.push(c)}return i}function Ta(e){const t=new Date(e),s=(t.getDay()+6)%7;return t.setDate(t.getDate()-s),Array.from({length:7},(r,i)=>{const c=new Date(t);return c.setDate(t.getDate()+i),c})}function qa(e,t,s,r,i){const c=C(new Date),o=C(s),p=i==="full";return e.map(d=>{const l=C(d),h=r.get(l)??[],b=["calendar-mobile-month-cell"];d.getMonth()!==t.getMonth()&&b.push("is-outside"),l===o&&b.push("is-selected");const U=p?(()=>{if(!h.length)return'<span class="calendar-mobile-month-chips"></span>';const A=h[0],x=`<span class="calendar-mobile-month-chip${Ut(A)?" is-holiday":""}" style="--calendar-mobile-chip-color: ${g(we(A))};">${g(se(A))}</span>`,R=h.length-1,Q=R>0?`<span class="calendar-mobile-month-more">+${R} more</span>`:"";return`<span class="calendar-mobile-month-chips">${x}${Q}</span>`})():`<span class="calendar-mobile-month-lines" aria-hidden="true">${h.slice(0,3).map(A=>`<span class="calendar-mobile-month-line" style="--calendar-mobile-line-color: ${g(we(A))};"></span>`).join("")}</span>`;return`
        <button class="${b.join(" ")}" type="button" data-calendar-cell="${l}">
          <span class="calendar-mobile-month-date ${l===c?"is-today":""}">${d.getDate()}</span>
          ${U}
        </button>
      `}).join("")}function et(e,t,s,r,i=Da(e)){const c=Ye().map(d=>`<span class="calendar-mobile-weekday">${d}</span>`).join(""),o=qa(i,e,t,s,r),p=Math.max(1,Math.ceil(i.length/7));return`
    <div class="calendar-mobile-week-header">${c}</div>
    <div class="calendar-mobile-month-grid" data-mobile-grid-state="${r}" style="--calendar-mobile-grid-rows: ${p};">
      ${o}
    </div>
  `}function Ca(e,t,s){const r=new Date(e),i=(r.getDay()+6)%7;r.setDate(r.getDate()-i);const c=Ye().map(d=>`<span class="calendar-mobile-weekday">${d}</span>`).join(""),o=C(new Date),p=Array.from({length:7},(d,l)=>{const h=new Date(r);h.setDate(r.getDate()+l);const b=C(h),B=(t.get(b)??[]).map(Q=>we(Q)).slice(0,4),x=["calendar-mobile-week-day"];b===s&&x.push("is-selected"),b===o&&x.push("is-today");const R=B.length?B.map(Q=>`<span class="calendar-mobile-week-bar" style="--calendar-mobile-bar-color: ${g(Q)};"></span>`).join(""):'<span class="calendar-mobile-week-bar calendar-mobile-week-bar-empty" aria-hidden="true"></span>';return`
      <button class="${x.join(" ")}" type="button" data-calendar-cell="${b}">
        <span class="calendar-mobile-week-daylabel">${Ye()[l]}</span>
        <span class="calendar-mobile-week-date ${b===o?"is-today":""}">${h.getDate()}</span>
        <span class="calendar-mobile-week-bars" aria-hidden="true">${R}</span>
      </button>
    `}).join("");return`
    <div class="calendar-mobile-week-strip" aria-label="Selected week">
      <div class="calendar-mobile-week-header">${c}</div>
      <div class="calendar-mobile-week-days">${p}</div>
    </div>
  `}function Aa(e,t){const s=t.filter(d=>La(d)||Ut(d)),i=t.filter(d=>!s.includes(d)).reduce((d,l)=>{const h=je(l.appointmentAt??l.createdAt),b=d.get(h)??[];return b.push(l),d.set(h,b),d},new Map),c=[...i.keys()].sort();if(!t.length)return`<div class="calendar-mobile-agenda-empty">${$("noAppointmentsToday",k())}</div>`;const o=s.map(d=>{const l=g(String(d.id??""));return`
        <div class="calendar-mobile-agenda-row is-all-day">
          <div class="calendar-mobile-agenda-time">📅</div>
          <button class="calendar-mobile-agenda-event" style="--calendar-mobile-chip-color: ${g(we(d))};" type="button" data-calendar-mobile-booking-id="${l}">
            <span class="calendar-mobile-agenda-title">${g(se(d))}</span>
            <span class="calendar-mobile-agenda-subtitle">${$("allDay",k())}</span>
          </button>
        </div>
      `}).join(""),p=c.map(d=>{const h=(i.get(d)??[]).map(b=>{const U=g(String(b.id??"")),A=Oe(b.message),B=String(b.licensePlate??"").trim(),x=[A?`${d} - ${A}`:d];return B&&B!=="UNKNOWN"&&x.push(Fe(B)),`
            <button class="calendar-mobile-agenda-event" style="--calendar-mobile-chip-color: ${g(we(b))};" type="button" data-calendar-mobile-booking-id="${U}">
              <span class="calendar-mobile-agenda-title">${g(se(b))}</span>
              <span class="calendar-mobile-agenda-subtitle">${g(x.join("  "))}</span>
            </button>
          `}).join("");return`
        <div class="calendar-mobile-agenda-row">
          <div class="calendar-mobile-agenda-time">${d}</div>
          <div class="calendar-mobile-agenda-events">${h}</div>
        </div>
      `}).join("");return`
    <div class="calendar-mobile-agenda">
      <div class="calendar-mobile-agenda-daylabel">${g(Qe(e))}</div>
      ${o}
      ${p}
    </div>
  `}function xa({monthCursor:e,selectedDate:t,bookingsByDay:s,bookingsForDay:r,mobileLayer:i,animateSplitBottom:c,detailBooking:o,mobileDetailId:p}){C(t);const d=`
    <div class="calendar-mobile-layer-agenda" data-calendar-mobile-agenda-scroll>
      ${Aa(t,r)}
    </div>
  `,l=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-full" data-calendar-mobile-layer="full">
      <div class="calendar-mobile-layer-top">
        ${et(e,t,s,"full")}
      </div>
      <div class="calendar-mobile-layer-bottom calendar-mobile-layer-bottom-preview" aria-hidden="true">
        ${d}
      </div>
    </section>
  `,h=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-split" data-calendar-mobile-layer="split">
      <div class="calendar-mobile-layer-top">
        ${et(e,t,s,"half")}
      </div>
      <div class="calendar-mobile-layer-bottom${c?" calendar-mobile-layer-bottom-enter":""}">
        ${d}
      </div>
    </section>
  `,b=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-week" data-calendar-mobile-layer="week">
      <div class="calendar-mobile-layer-top">
        ${et(e,t,s,"week",Ta(t))}
      </div>
      <div class="calendar-mobile-layer-bottom">
        ${d}
      </div>
    </section>
  `,U={full:l,split:h,week:b},B=p&&p.startsWith("__day-detail__")?`
      <div class="calendar-mobile-detail-overlay">
        <div class="calendar-mobile-detail-backdrop" data-calendar-mobile-detail-close></div>
        <article class="calendar-mobile-detail-card">
          <h3 style="margin: 0 0 8px; font-size: 18px;">${g(Qe(t))}</h3>
          <div style="margin-bottom: 12px; font-size: 14px; color: var(--666666);">
            ${r&&r.length>0?r.map(x=>`
                <div style="margin-top: 8px; padding: 8px 0 8px 10px; border: 1px solid var(--e6e6e6); border-left: 4px solid ${g(we(x))}; border-radius: 8px; cursor: pointer;" data-calendar-mobile-booking-id="${g(String(x.id??""))}">
                  <div style="font-weight: 600; color: var(--333333);">${g(se(x))}</div>
                  <div>${g(nt(x))}</div>
                </div>
              `).join(""):`<div style="padding: 12px; color: var(--999999);">${$("noAppointmentsToday",k())}</div>`}
          </div>
          <div class="calendar-mobile-detail-actions" style="justify-content: flex-end; gap: 8px;">
            <button class="button subtle" type="button" data-calendar-mobile-detail-close>${$("cancel",k())}</button>
          </div>
        </article>
      </div>
    `:o?`
        <div class="calendar-mobile-detail-overlay">
          <div class="calendar-mobile-detail-backdrop" data-calendar-mobile-detail-close></div>
          <article class="calendar-mobile-detail-card request-card is-expanded">
            <div class="request-card-head">
              <div class="request-main">
                <div class="request-info">
                  <p class="request-name">${g(se(o))}</p>
                </div>
              </div>
              <div class="request-meta">
                <span class="request-time">${g(nt(o))}</span>
              </div>
            </div>

            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label"><span>Phone</span></div>
                  <div class="request-box-divider"></div>
                  <span>${g(String(o.phone??"No phone number"))}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label"><span>Message</span></div>
                  <div class="request-box-divider"></div>
                  <span>${g(lt(o.message)||"No customer message.")}</span>
                </div>
              </div>
              <div class="calendar-mobile-detail-actions">
                <button class="button subtle" type="button" data-calendar-mobile-detail-close>${$("cancel",k())}</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${g(String(o.id??""))}">${$("delete",k())}</button>
              </div>
            </div>
          </article>
        </div>
      `:"";return`
    <div class="calendar-mobile-shell" data-calendar-mobile-layer="${g(i)}">
      ${U[i]??l}
    </div>
    ${B}
  `}function Ea(e){const t=C(e);return`
    <button class="calendar-mobile-addpill" type="button" data-calendar-mobile-quickadd="${t}">
      Toevoegen op ${g(Qe(e))}
    </button>
    <button class="calendar-mobile-fab" type="button" data-calendar-mobile-quickadd="${t}" aria-label="Add event">+</button>
  `}function Ha(e,t,s,r){const i=$a(e,t,r),c=C(new Date),o=Ye().map(d=>`<span class="month-weekday">${d}</span>`).join(""),p=i.map(d=>{const l=["month-cell"];return d.isCurrentMonth||l.push("is-outside"),d.isSelected&&l.push("is-selected"),d.isCurrentMonth&&d.key===c&&l.push("is-today"),d.count>0&&l.push("has-bookings"),`
        <button class="${l.join(" ")}" type="button" data-calendar-cell="${d.key}">
          <span class="month-cell-day">${d.day}</span>
          ${d.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    ${Ca(s,jt(t),r)}
    <div class="month-grid-board">
      <div class="month-week-row">${o}</div>
      <div class="month-grid-cells">${p}</div>
    </div>
  `}function Ba(e,t){const s=t.reduce((c,o,p)=>{const d=je(o.appointmentAt??o.createdAt),l=c.get(d)??[];return l.push({booking:o,index:p}),c.set(d,l),c},new Map),r=[];for(let c=0;c<=23;c+=1)r.push(`${String(c).padStart(2,"0")}:00`),r.push(`${String(c).padStart(2,"0")}:30`);s.forEach((c,o)=>{r.includes(o)||r.push(o)});const i=c=>{const o=String(c).match(/^(\d{2}):(\d{2})$/);if(!o)return Number.POSITIVE_INFINITY;const p=Number(o[1]),d=Number(o[2]);return!Number.isFinite(p)||!Number.isFinite(d)?Number.POSITIVE_INFINITY:p*60+d};return r.sort((c,o)=>i(c)-i(o)),`
    <div class="day-board-list">
      ${r.map(c=>{const o=s.get(c)??[];if(!o.length)return`
              <div class="day-slot-row" data-calendar-slot-time="${g(c)}">
                <span class="day-slot-time">${c}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">${$("available",k())}</span>
              </div>
            `;const p=o.map(({booking:l,index:h},b)=>{const U=g(String(l.id??"")),A=String(l.licensePlate??"").toUpperCase()==="UNKNOWN",B=g(l.color??"#2563EB"),x=g(l.licensePlate&&l.licensePlate!=="UNKNOWN"?Fe(l.licensePlate):"UNKNOWN"),R=g(se(l)),Q=o.length>1&&b<o.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${U}">
                <div class="day-slot-plate-wrapper">
                  ${A?`<span class="fast-appt-dot" style="background: ${B}" aria-hidden="true"></span>`:`<span class="plate-chip">${x}</span>`}
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${R}</span>
                  </div>
                  <div class="day-slot-status-services">
                    ${A?'<span class="service-chip service-chip-other">Simple appointment</span>':`${Ft(l.service)}`}
                  </div>
                </div>
              </div>
              ${Q?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),d=o.length>1?`<span class="day-slot-count">${o.length} ${$("appointments",k()).toLowerCase()}</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${c}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${d}
                <div class="day-slot-bookings">
                  ${p}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function Ia(e,t,s,r){return e.length?e.map((i,c)=>{const o=String(i.id??""),p=t===o,d=s===o,l=i.appointmentAt??i.createdAt,h=String(i.licensePlate??"").toUpperCase()==="UNKNOWN",b=g(i.color??"#2563EB"),U=g(i.licensePlate&&i.licensePlate!=="UNKNOWN"?Fe(i.licensePlate):"UNKNOWN"),A=g(nt(i)),B=Nt(pa(l)),x=g(B),R=g(Pt(B)),Q=ue(ma(l)),pe=g(Q),le=ue(Oe(i.message)||Sa(Q)),Z=g(le),Te=g(se(i)),ke=i.licensePlate?st(i.licensePlate):"",te=r.get(ke)||ua(i.licensePlate),Me=te.buildYear?`${te.title} (${te.buildYear})`:te.title,me=g(String(i.phone??"No phone number")),fe=g(lt(i.message)||"No customer message.");return`
        <article class="request-card ${p?"is-expanded":""}" data-calendar-booking-id="${g(o)}">
          <div class="request-card-head">
            <div class="request-main">
              ${h?`<span class="fast-appt-dot" style="background: ${b}" aria-hidden="true"></span>`:`<span class="plate-chip">${U}</span>`}
              <div class="request-info">
                <p class="request-name"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1668 7.08463C14.1668 4.78345 12.3013 2.91797 10.0002 2.91797C7.69898 2.91797 5.8335 4.78345 5.8335 7.08463C5.8335 9.3858 7.69898 11.2513 10.0002 11.2513C12.3013 11.2513 14.1668 9.3858 14.1668 7.08463Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8332 17.0833C15.8332 13.8617 13.2215 11.25 9.99984 11.25C6.77818 11.25 4.1665 13.8617 4.1665 17.0833" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${Te}</p>
                ${h?"":`<p class="request-vehicle"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50667 14.1667C7.50667 15.0872 6.76048 15.8333 5.84001 15.8333C4.91953 15.8333 4.17334 15.0872 4.17334 14.1667C4.17334 13.2462 4.91953 12.5 5.84001 12.5C6.76048 12.5 7.50667 13.2462 7.50667 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M15.8397 14.1667C15.8397 15.0872 15.0935 15.8333 14.173 15.8333C13.2525 15.8333 12.5063 15.0872 12.5063 14.1667C12.5063 13.2462 13.2525 12.5 14.173 12.5C15.0935 12.5 15.8397 13.2462 15.8397 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M1.67301 8.33464H15.0063M1.67301 8.33464C1.67301 8.98464 1.65635 10.868 1.67634 12.718C1.70632 13.318 1.80624 13.818 4.17444 14.168M1.67301 8.33464C1.85288 6.88464 2.63561 5.16797 3.0353 4.51797M7.50634 8.33464V4.16797M12.4981 14.168H7.5019M1.68634 4.16797H10.1998C10.1998 4.16797 10.6495 4.16797 11.0492 4.20797C11.7987 4.27797 12.4282 4.61797 13.0577 5.46797C13.7242 6.36797 14.2367 7.50797 14.9162 8.11797C16.0454 9.13164 18.1937 8.81797 18.3137 10.968C18.3437 12.068 18.3437 13.268 18.2937 13.468C18.2134 14.0569 17.7593 14.1531 17.1945 14.168C16.7043 14.181 16.1134 14.1447 15.8256 14.168" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
${Me}</p>`}
                <div class="request-services">${Ft(i.service)}</div>
              </div>
            </div>
            <div class="request-meta">
              <span class="request-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${A}</span>
              <button
                class="request-toggle ${p?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${g(o)}"
                aria-expanded="${p?"true":"false"}"
                aria-label="${p?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          ${p?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${At("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${me}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${At("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${fe}</span>
                </div>
              </div>

              <div class="request-actions">
                ${d?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${x}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${R}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${Yt(B)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${$("fastFrom",k())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${pe}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${pe}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${Pe(Q)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${$("fastTo",k())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${Z}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${Z}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${Pe(le)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${g(o)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${g(o)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${g(o)}" aria-label="Edit booking">✎</button>
                ${d?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${g(o)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${g(o)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments for this date.</p></article>'}function tt(e){return[...e].sort((t,s)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(s.appointmentAt??s.createdAt).getTime())}async function Na(e){var vt,wt,kt,Mt,St,$t,Lt,Dt;if(!e)return;const t=await Xt();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Zt(t.activeGarage);const s=t.isAdmin?null:[(vt=t.activeGarage)==null?void 0:vt.id].filter(Boolean),r=((wt=t.activeGarage)==null?void 0:wt.id)??((Mt=(kt=t.garages)==null?void 0:kt[0])==null?void 0:Mt.id)??"",i=String(((St=t.activeGarage)==null?void 0:St.calendarStyle)??(($t=t.activeGarage)==null?void 0:$t.calendar_style)??"1"),c=String(((Lt=t.activeGarage)==null?void 0:Lt.calendarDefaultView)??((Dt=t.activeGarage)==null?void 0:Dt.calendar_default_view)??"month").toLowerCase(),{shell:o,contentArea:p,setUnreadEmailCount:d}=Jt({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:t.user.email,onLogout:ea,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(o),o.classList.toggle("calendar-style-agenda",i==="2"),p.innerHTML=`
    <section class="calendar-page-grid">
      <div class="calendar-primary-col">
        <section class="panel calendar-board-panel">
          <div id="calendarBoardBody" class="calendar-board-body">
            <div class="calendar-board-head">
              <div class="calendar-board-nav">
                <button class="calendar-nav-button" type="button" data-calendar-nav="prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 4C10 4 6.00001 6.94593 6 8C5.99999 9.05413 10 12 10 12" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
                <p id="calendarPeriodLabel" class="calendar-period-label" data-calendar-mobile-cycle="true"></p>
                <button class="calendar-nav-button" type="button" data-calendar-nav="next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
              </div>

              <div class="calendar-mode-tabs" role="tablist" aria-label="Calendar mode">
                <button id="calendarModeMonth" class="calendar-mode-tab" type="button" data-calendar-mode="month">${$("month",k())}</button>
                <button id="calendarModeDay" class="calendar-mode-tab" type="button" data-calendar-mode="day">${$("day",k())}</button>
              </div>
            </div>
            <div id="calendarBoardContent" class="calendar-board-content"></div>
            <div id="calendarMobileAddbarHost" class="calendar-mobile-addbar"></div>
          </div>
        </section>
      </div>

      <section class="panel calendar-day-panel">
        <div class="calendar-day-panel-head">
          <p id="calendarDayTitle" class="calendar-day-title"></p>
          <span id="calendarDayCount" class="calendar-day-count">0 ${$("appointments",k()).toLowerCase()}</span>
        </div>

        <div id="calendarDayList" class="request-list"></div>
      </section>
    </section>

    <div id="calendarQuickAddOverlay" class="calendar-quickadd-overlay" hidden>
      <div class="calendar-quickadd-backdrop" data-calendar-quickadd-close></div>
      <section class="calendar-quickadd-modal" role="dialog" aria-modal="true" aria-labelledby="calendarQuickAddTitle">
        <div class="calendar-quickadd-head">
          <h3 id="calendarQuickAddTitle">${$("appointmentTypeFast",k())}</h3>
          <button type="button" class="icon-button" data-calendar-quickadd-close aria-label="Close quick add">✕</button>
        </div>

        <form id="calendarQuickAddForm" class="calendar-quickadd-form" novalidate>
          <label>
            ${$("fastTitle",k())}
            <input id="calendarQuickAddName" name="title" type="text" placeholder="${$("fastTitlePlaceholder",k())}" required />
          </label>

          <div class="calendar-quickadd-row">
            <label>
              ${$("fastDate",k())}
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

          <fieldset class="calendar-quickadd-colors" aria-label="${$("fastColor",k())}">
            <legend>${$("fastColor",k())}</legend>
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
            <span>${$("allDay",k())}</span>
          </label>

          <div id="calendarQuickAddTimeRow" class="calendar-quickadd-time-row">
            <label>
              ${$("fastFrom",k())}
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
              ${$("fastTo",k())}
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
            ${$("fastNote",k())}
            <textarea id="calendarQuickAddNote" name="note" rows="2" placeholder="${$("fastNotePlaceholder",k())}"></textarea>
          </label>

          <div class="manual-appointment-actions">
            <button type="button" class="button subtle" data-calendar-quickadd-close>${$("cancel",k())}</button>
            <button type="submit" class="button">${$("fastSave",k())}</button>
          </div>
          <p id="calendarQuickAddStatus" class="status-text" role="status" aria-live="polite"></p>
        </form>
      </section>
    </div>
  `;const l=p.querySelector("#calendarBoardBody"),h=p.querySelector("#calendarBoardContent"),b=p.querySelector("#calendarMobileAddbarHost"),U=p.querySelector(".calendar-board-head"),A=p.querySelector("#calendarPeriodLabel"),B=p.querySelector("#calendarModeMonth"),x=p.querySelector("#calendarModeDay"),R=p.querySelector("#calendarDayTitle"),Q=p.querySelector("#calendarDayCount"),pe=p.querySelector("#calendarDayList"),le=p.querySelector("#calendarQuickAddOverlay"),Z=p.querySelector("#calendarQuickAddForm"),Te=p.querySelector("#calendarQuickAddName"),ke=p.querySelector("#calendarQuickAddDatePicker"),te=p.querySelector("#calendarQuickAddStartPicker"),Me=p.querySelector("#calendarQuickAddEndPicker"),me=p.querySelector("#calendarQuickAddDate"),fe=p.querySelector("#calendarQuickAddStart"),qe=p.querySelector("#calendarQuickAddEnd"),ae=p.querySelector("#calendarQuickAddAllDay"),Ce=p.querySelector("#calendarQuickAddTimeRow"),Ae=p.querySelector("#calendarQuickAddStatus"),_e=()=>{!(l instanceof HTMLElement)||!(U instanceof HTMLElement)||l.style.setProperty("--calendar-board-head-offset",`${U.offsetHeight}px`)};let J=[],O=[];const G=ta("calendar",{}),Qt=X(G.selectedDate??""),Ke=X(G.currentMonth??"");let y=Qt??new Date,q=Ke?new Date(Ke.getFullYear(),Ke.getMonth(),1):new Date(y.getFullYear(),y.getMonth(),1);const Ot=c==="day"||c==="week"||c==="agenda"?"day":"month";let W=G.activeMode==="day"||G.activeMode==="month"?G.activeMode:Ot,I=String(G.expandedBookingId??"").trim(),N=String(G.editingBookingId??"").trim(),rt="",ot="",dt=0,ct="";const _t=String(G.mobileLayer??G.mobileViewMode??"full");let L={month:"full",split:"split",week:"week",full:"full"}[_t]??"full",E=String(G.mobileDetailBookingId??"").trim(),xe=0,Ve=0,z=null,ne=!1,Re=L,ge=0,he=!1,Ge=0,Ee=0,Se=!1,Y=L,$e=!1,We=!1,be=0,ut=L,He=C(y);const ze=new Map,V=()=>window.matchMedia("(max-width: 768px)").matches,Be=(n=1)=>{const a=["full","split","week"],u=a.indexOf(L),M=Math.min(a.length-1,Math.max(0,u+n));L=a[M]??"full"},Kt=(n,a)=>{const u=n instanceof Element?n.closest("[data-calendar-mobile-agenda-scroll]"):null;return!(u instanceof HTMLElement)||u.scrollHeight<=u.clientHeight+2?!0:a>0?Math.ceil(u.scrollTop+u.clientHeight)>=u.scrollHeight:u.scrollTop<=0},Ie=()=>h.querySelector(".calendar-mobile-layer-full"),pt=n=>{const a=Ie();a instanceof HTMLElement&&a.style.setProperty("--calendar-mobile-full-drag-offset",`${n}px`)},mt=()=>{const n=Ie();n instanceof HTMLElement&&(n.classList.remove("is-dragging"),n.style.removeProperty("--calendar-mobile-full-drag-offset"))},Vt=()=>{if(!V())return;const n=h.querySelector(".calendar-mobile-layer-top");if(!(n instanceof HTMLElement))return;const a=h.querySelector(".calendar-mobile-layer-bottom"),u=h.querySelector(".calendar-mobile-layer"),M=h.querySelector('.calendar-mobile-month-grid[data-mobile-grid-state="full"]'),w=h.querySelector('.calendar-mobile-month-grid[data-mobile-grid-state="half"], .calendar-mobile-month-grid[data-mobile-grid-state="week"]'),m=()=>{n.style.transition="",n.style.transform="",n.style.clipPath="",a instanceof HTMLElement&&(a.style.transition="",a.style.transform=""),u instanceof HTMLElement&&(u.style.removeProperty("--calendar-mobile-fs-progress"),u.style.removeProperty("--calendar-mobile-sw-progress"),u.style.borderRadius="",u.style.boxShadow=""),M instanceof HTMLElement&&(M.style.transition=""),w instanceof HTMLElement&&(L!=="week"&&w.setAttribute("data-mobile-grid-state","half"),w.style.removeProperty("--calendar-mobile-sw-progress"),w.style.transition="")};n.addEventListener("touchstart",f=>{var H;const S=(H=f.touches)==null?void 0:H[0];S&&(Ge=S.clientY,Ee=S.clientY,Y=L,Se=!0,$e=!1)},{passive:!0}),n.addEventListener("touchmove",f=>{var re,oe,ye;if(!Se)return;const S=(re=f.touches)==null?void 0:re[0];if(!S)return;Ee=S.clientY;const H=Ee-Ge,_=(((ye=(oe=f.touches)==null?void 0:oe[0])==null?void 0:ye.clientX)??0)-xe;if(Math.abs(H)<=Math.abs(_))return;if(Y==="full"||Y==="split"){const Le=Y==="split"&&H<0;if(n.scrollTop>0&&!Le)return;if(Le){f.preventDefault(),w instanceof HTMLElement&&w.setAttribute("data-mobile-grid-state","half");return}f.preventDefault();return}const P=H>0&&Y!=="full",F=H<0&&Y!=="week";!P&&!F||n.scrollTop<=0&&(f.preventDefault(),n.style.transition="",n.style.transform=`translateY(${H}px)`,a instanceof HTMLElement&&(a.style.transition="",a.style.transform=`translateY(${H}px)`))},{passive:!1}),n.addEventListener("touchend",()=>{if(!Se)return;Se=!1;const f=Ee-Ge;if(Y==="full"||Y==="split"){const _=Y==="split"&&f<0;if(n.scrollTop>0&&!_){m();return}$e=!0;const P=Math.max(64,Math.round(window.innerHeight*.08));let F=Y;Y==="full"?F=f<=-P?"split":"full":Y==="split"&&(f<=-P?F="week":f>=P?F="full":F="split"),n.style.transition="",n.style.transform="",a instanceof HTMLElement&&(a.style.transition="",a.style.transform=""),window.setTimeout(()=>{if(L!==F){L=F,be=Date.now()+300,E="",We=!0,D();return}m(),u instanceof HTMLElement&&(u.style.transition="")},250);return}const S=f>0&&Y!=="full",H=f<0&&Y!=="week";if(n.scrollTop>0||!S&&!H){n.style.transform="",a instanceof HTMLElement&&(a.style.transform="");return}if($e=!0,Math.abs(f)>120){const _=f<0?1:-1,P=L;if(Be(_),L!==P){be=Date.now()+360,E="",D();return}}n.style.transition="transform 0.25s ease",n.style.transform="translateY(0)",a instanceof HTMLElement&&(a.style.transition="transform 0.25s ease",a.style.transform="translateY(0)"),window.setTimeout(()=>{n.style.transition="",a instanceof HTMLElement&&(a.style.transition="")},250)},{passive:!0})},ft=(n,a)=>{if(!V())return!1;const u=Date.now();if(u<be||!Kt(a,n))return!1;const M=L;if(M==="full"&&n>0){const w=h.querySelector('.calendar-mobile-month-grid[data-mobile-grid-state="full"]');if(w instanceof HTMLElement)return w.classList.add("is-shrinking-to-split"),be=u+520,window.setTimeout(()=>{L==="full"&&(Be(n),E="",D())},280),!0}return Be(n),M===L?!1:(be=u+280,E="",D(),!0)},Xe=n=>{if(V()){if(L==="week")y=new Date(y.getFullYear(),y.getMonth(),y.getDate()+n*7),q=new Date(y.getFullYear(),y.getMonth(),1);else{const u=new Date(q);u.setMonth(q.getMonth()+n),q=new Date(u.getFullYear(),u.getMonth(),1),(y.getMonth()!==q.getMonth()||y.getFullYear()!==q.getFullYear())&&(y=new Date(q.getFullYear(),q.getMonth(),1))}return}if(W==="month"){const u=new Date(q);u.setMonth(q.getMonth()+n),q=new Date(u.getFullYear(),u.getMonth(),1);return}const a=new Date(y);a.setDate(y.getDate()+n),y=a,q=new Date(y.getFullYear(),y.getMonth(),1)},gt=n=>{const a=String(n.getHours()).padStart(2,"0"),u=String(n.getMinutes()).padStart(2,"0");return`${a}:${u}`},ht=(n,a,u)=>{const M=Nt(n),w=ue(a),m=ue(u);if(me instanceof HTMLInputElement&&(me.value=M),ke instanceof HTMLElement){const f=ke.querySelector("[data-schedule-date-label]"),S=ke.querySelector("[data-schedule-date-options]");f instanceof HTMLElement&&(f.textContent=Pt(M)),S instanceof HTMLElement&&(S.innerHTML=Yt(M))}if(fe instanceof HTMLInputElement&&(fe.value=w),te instanceof HTMLElement){const f=te.querySelector("[data-schedule-time-label]"),S=te.querySelector("[data-schedule-time-options]");f instanceof HTMLElement&&(f.textContent=w),S instanceof HTMLElement&&(S.innerHTML=Pe(w))}if(qe instanceof HTMLInputElement&&(qe.value=m),Me instanceof HTMLElement){const f=Me.querySelector("[data-schedule-time-label]"),S=Me.querySelector("[data-schedule-time-options]");f instanceof HTMLElement&&(f.textContent=m),S instanceof HTMLElement&&(S.innerHTML=Pe(m))}},ie=(n,a="")=>{Ae instanceof HTMLElement&&(Ae.textContent=String(n??""),Ae.classList.remove("error","warning"),(a==="error"||a==="warning")&&Ae.classList.add(a))},bt=()=>{le instanceof HTMLElement&&(le.hidden=!0,ie(""))},Ze=(n,a)=>{if(!(le instanceof HTMLElement))return;He=String(n??C(y));let u,M;if(a){const[w,m]=a.split(":").map(Number),f=w*60+m+60;u=a,M=`${String(Math.floor(f/60)%24).padStart(2,"0")}:${String(f%60).padStart(2,"0")}`}else{const w=new Date,m=new Date(w.getTime()+60*60*1e3);u=gt(w),M=gt(m)}ht(He,u,M),ae instanceof HTMLInputElement&&(ae.checked=!1),Ce instanceof HTMLElement&&Ce.classList.remove("is-hidden"),le.hidden=!1,ie(""),window.requestAnimationFrame(()=>{Te instanceof HTMLInputElement&&Te.focus()})};ae==null||ae.addEventListener("change",()=>{const n=ae.checked;if(fe instanceof HTMLInputElement&&(fe.disabled=n),qe instanceof HTMLInputElement&&(qe.disabled=n),n){const a=me instanceof HTMLInputElement?me.value:He;ht(a,"00:00","23:59")}Ce instanceof HTMLElement&&Ce.classList.toggle("is-hidden",n)});const yt=async()=>{const[n,a]=await Promise.all([la({garageIds:s}),ia({garageIds:s})]),u=new Set(a.map(m=>String(m.bookingId??m.id??"").trim()).filter(Boolean));J=n;const M=new Set(J.map(m=>m.licensePlate).filter(m=>m&&m!=="UNKNOWN").map(m=>st(m)));for(const m of M)if(m&&!ze.has(m))try{const f=await oa(m);f&&ze.set(m,f)}catch(f){console.error(`Failed to fetch vehicle for ${m}:`,f)}O=tt(J.filter(m=>{const f=String(m.id??"").trim();return m.inAppointments===!0&&!ya(m)&&!u.has(f)}));const w=xt(J);d(w.unread)},Rt=()=>{ra("calendar",{selectedDate:y.toISOString(),currentMonth:q.toISOString(),activeMode:W,mobileLayer:L,mobileViewMode:L,mobileDetailBookingId:E,expandedBookingId:I,editingBookingId:N})},Gt=()=>{const n=C(y);return O.filter(a=>it(a)===n).sort((a,u)=>new Date(a.appointmentAt??a.createdAt).getTime()-new Date(u.appointmentAt??u.createdAt).getTime())},D=()=>{const n=C(y),a=Gt(),u=jt(O),M=V(),w=W==="day"&&(rt!=="day"||ot!==n);if(B.classList.toggle("is-active",W==="month"),x.classList.toggle("is-active",W==="day"),I&&!a.some(m=>String(m.id)===I)&&(I="",N=""),N&&!a.some(m=>String(m.id)===N)&&(N=""),E&&!E.startsWith("__day-detail__")&&!O.some(m=>String(m.id)===E)&&(E=""),M){const m=ut==="full"&&L==="split"&&!We;A.textContent=Bt(q).toUpperCase();const f=E&&!E.startsWith("__day-detail__")?O.find(S=>String(S.id)===E)??null:null;if(h.innerHTML=xa({monthCursor:q,selectedDate:y,bookingsByDay:u,bookingsForDay:a,mobileLayer:L,animateSplitBottom:m,detailBooking:f,mobileDetailId:E}),b.innerHTML=Ea(y),he||mt(),m){const S=h.querySelector(".calendar-mobile-layer-bottom-enter");S instanceof HTMLElement&&window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{S.classList.remove("calendar-mobile-layer-bottom-enter")})})}We=!1,Vt(),ut=L}else W==="month"?(A.textContent=Bt(q),h.innerHTML=Ha(q,O,y,n),b.innerHTML=""):(A.textContent=ga(y),h.innerHTML=Ba(y,a),b.innerHTML="",w&&window.requestAnimationFrame(()=>{const m=h.querySelector(".day-board-list");if(!(m instanceof HTMLElement))return;const f=m.querySelector(".day-slot-row.has-booking");if(f instanceof HTMLElement){const S=l.getBoundingClientRect(),H=f.getBoundingClientRect(),_=l.scrollTop+(H.top-S.top)-8;l.scrollTo({top:Math.max(0,_),behavior:"auto"})}else l.scrollTo({top:0,behavior:"auto"})}));R.textContent=Qe(y),Q.textContent=`${a.length} ${$("appointments",k()).toLowerCase()}`,pe.innerHTML=Ia(a,I,N,ze),window.requestAnimationFrame(_e),rt=W,ot=n,Rt()};p.addEventListener("click",async n=>{const a=n.target instanceof Element?n.target:null;if(!a)return;if(a.closest("[data-calendar-quickadd-close]")instanceof HTMLElement){bt();return}if(a.closest("[data-calendar-mobile-detail-close]")instanceof HTMLElement){E="",D();return}const w=a.closest("[data-calendar-mobile-quickadd]");if(w instanceof HTMLElement){const v=String(w.dataset.calendarMobileQuickadd??C(y));Ze(v);return}if(a.closest("[data-calendar-mobile-cycle]")instanceof HTMLElement&&V()){Be(),D();return}if(da(p,a))return;const f=a.closest("[data-calendar-nav]");if(f instanceof HTMLElement){const v=f.dataset.calendarNav;Xe(v==="next"?1:-1),D();return}const S=a.closest("[data-calendar-mode]");if(S instanceof HTMLElement){W=S.dataset.calendarMode==="day"?"day":"month",D();return}const H=a.closest("[data-calendar-cell]");if(H instanceof HTMLElement){const v=H.dataset.calendarCell;if(v){const T=Date.now(),ee=v===ct&&T-dt<=450;ct=v,dt=T;const K=X(`${v}T12:00:00`);K&&(y=K,q=new Date(y.getFullYear(),y.getMonth(),1),V()&&L==="full"&&(E=`__day-detail__${v}`),D(),!V()&&ee&&W==="month"&&Ze(v))}return}const _=a.closest("[data-calendar-slot-time]");if(_ instanceof HTMLElement&&W==="day"){const v=String(_.dataset.calendarSlotTime??"");v&&Ze(C(y),v);return}const P=a.closest("[data-calendar-mobile-booking-id]");if(P instanceof HTMLElement){const v=String(P.dataset.calendarMobileBookingId??"");v&&(E=v,D());return}const F=a.closest("[data-day-slot-booking-id]");if(F instanceof HTMLElement){const v=String(F.dataset.daySlotBookingId??"");v&&(I=v,N="",D(),window.requestAnimationFrame(()=>{const T=[...pe.querySelectorAll("[data-calendar-booking-id]")].find(ee=>ee instanceof HTMLElement&&String(ee.dataset.calendarBookingId??"")===v);T instanceof HTMLElement&&T.scrollIntoView({behavior:"smooth",block:"start"})}));return}const re=a.closest("[data-calendar-toggle]");if(re instanceof HTMLElement){const v=String(re.dataset.calendarToggle??"");I=I===v?"":v,I!==v&&(N=""),D();return}const oe=a.closest("[data-calendar-action]");if(oe instanceof HTMLElement){const v=String(oe.dataset.calendarAction??""),T=String(oe.dataset.bookingId??"");if(!T)return;if(v==="edit"){I=T,N=N===T?"":T,D();return}if(v==="cancel-edit"){N="",D();return}if(v==="save-schedule"){const K=oe.closest("[data-calendar-booking-id]");if(!(K instanceof HTMLElement))return;const de=O.find(j=>String(j.id)===T);if(!de)return;const ve=K.querySelector("[data-schedule-edit-date]"),Tt=K.querySelector("[data-schedule-edit-start-time]"),qt=K.querySelector("[data-schedule-edit-end-time]");if(!(ve instanceof HTMLInputElement)||!(Tt instanceof HTMLInputElement)||!(qt instanceof HTMLInputElement))return;const De=Ht(ve.value,Tt.value),Ct=ue(qt.value);if(!De)return;try{await aa(de,De)}catch(j){window.alert(j instanceof Error?j.message:"Unable to save the appointment schedule.");return}J=tt(J.map(j=>String(j.id)===T?{...j,appointmentAt:De,message:It(j.message,Ct)}:j)),O=tt(O.map(j=>String(j.id)===T?{...j,appointmentAt:De,message:It(j.message,Ct)}:j));const Ne=X(De);Ne&&(y=Ne,q=new Date(Ne.getFullYear(),Ne.getMonth(),1)),N="",I=T,D();return}if(!O.find(K=>String(K.id)===T))return;D();return}const ye=a.closest("[data-request-action]");if(ye instanceof HTMLElement){const v=String(ye.dataset.requestAction??""),T=String(ye.dataset.bookingId??"");if(!T)return;const ee=O.find(K=>String(K.id)===T);if(!ee)return;if(v==="complete"){(async()=>{if(await Et("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await na(ee,{convertedFromEmail:ee.source!=="manual"})}catch(de){window.alert(de instanceof Error?de.message:"Unable to mark appointment as completed.");return}window.location.href=Wt("completed.html")}})();return}if(v==="delete"){(async()=>{if(!await Et("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;J=J.filter(ve=>String(ve.id)!==T),O=O.filter(ve=>String(ve.id)!==T),N="",E===T&&(E="");const de=xt(J);d(de.unread),D()})();return}}const Le=a.closest("[data-calendar-booking-id]");if(Le instanceof HTMLElement&&!fa(a)){const v=String(Le.dataset.calendarBookingId??"");if(!v)return;I=I===v?"":v,I!==v&&(N=""),D()}}),window.addEventListener("resize",_e),_e(),Z==null||Z.addEventListener("submit",async n=>{if(n.preventDefault(),!r){ie("No garage available for quick appointment creation.","warning");return}const a=new FormData(Z),u=String(a.get("title")??"").trim(),M=String(a.get("date")??He).trim(),w=ae instanceof HTMLInputElement?ae.checked:!1,m=w?"00:00":String(a.get("start")??"").trim(),f=w?"23:59":String(a.get("end")??"").trim(),S=String(a.get("color")??"#2563EB").trim(),H=String(a.get("note")??"").trim();if(!u||!M||!m||!f){ie("Please fill all required fields.","warning");return}const _=Ht(M,m);if(!_){ie("Invalid date/time.","warning");return}const P=Z.querySelector("button[type='submit']");P instanceof HTMLButtonElement&&(P.disabled=!0),ie("Adding appointment...");try{await sa({garageId:r,name:u,licensePlate:"UNKNOWN",phone:"0000000000",service:"Simple appointment",message:`Name: ${u}
Message: ${H||at}${w?`
All day: yes`:""}
Until: ${f}`,color:S,appointmentAt:_}),y=X(`${M}T12:00:00`)??y,q=new Date(y.getFullYear(),y.getMonth(),1),I="",N="",await yt(),D(),Z.reset(),bt()}catch(F){const re=F instanceof Error?F.message:"Unable to add appointment.";ie(re,"error")}finally{P instanceof HTMLButtonElement&&(P.disabled=!1)}}),window.addEventListener("keydown",n=>{V()&&(n.key==="ArrowLeft"&&(Xe(-1),D()),n.key==="ArrowRight"&&(Xe(1),D()))}),l==null||l.addEventListener("wheel",n=>{if(!V()||Math.abs(n.deltaY)<12)return;const a=n.target instanceof Element?n.target:null;!(a instanceof Element)||!a.closest(".calendar-mobile-layer-top")||ft(n.deltaY>0?1:-1,n.target)&&n.preventDefault()},{passive:!1}),l==null||l.addEventListener("touchstart",n=>{var u;const a=(u=n.touches)==null?void 0:u[0];a&&(xe=a.clientX,Ve=a.clientY,z=n.target instanceof Element?n.target:null,ne=z instanceof Element?!!z.closest(".calendar-mobile-layer-top"):!1,Re=L,ge=0,he=!1)},{passive:!0}),l==null||l.addEventListener("touchmove",n=>{var f;if(Se||!V()||!ne||Re!=="full"||L!=="full")return;const a=(f=n.touches)==null?void 0:f[0];if(!a)return;const u=a.clientX-xe,M=a.clientY-Ve;if(Math.abs(M)<=Math.abs(u)||M>=0)return;const w=Ie();if(!(w instanceof HTMLElement))return;const m=Math.max(140,Math.round(window.innerHeight*.36));ge=Math.max(-m,M),he=!0,w.classList.add("is-dragging"),pt(ge),n.preventDefault()},{passive:!1}),l==null||l.addEventListener("touchend",n=>{var w;if(!V())return;if($e){$e=!1,z=null,ne=!1;return}if(!ne){z=null;return}const a=(w=n.changedTouches)==null?void 0:w[0];if(!a)return;const u=a.clientX-xe,M=a.clientY-Ve;if(he&&Re==="full"&&L==="full"){const m=Ie();m instanceof HTMLElement&&m.classList.remove("is-dragging");const f=Math.max(72,Math.round(window.innerHeight*.11));if(Math.abs(ge)>=f){be=Date.now()+420,E="",L="split",ge=0,he=!1,D(),z=null,ne=!1;return}ge=0,he=!1,pt(0),window.setTimeout(()=>{mt()},280),z=null,ne=!1;return}if(Math.abs(M)<48||Math.abs(M)<=Math.abs(u)){z=null,ne=!1;return}ft(M<0?1:-1,z),z=null,ne=!1},{passive:!0});try{await yt(),D()}catch(n){h.innerHTML='<p class="muted">Unable to load calendar right now.</p>',b.innerHTML="",pe.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',d(0),console.error(n)}}const Pa=document.querySelector("#app");zt();Na(Pa);
