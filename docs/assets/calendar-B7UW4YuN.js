import{p as Gt,d as Ct,c as Wt}from"./theme-DhME38Lo.js";/* empty css                      */import{e as zt,a as Xt,c as Zt,l as Jt,t as $,g as k,i as ea,p as ta,m as aa,s as At,j as na,b as sa,d as la,k as ia,n as de,f as Ze}from"./branding-BojcsMHH.js";import{n as nt,f as ra}from"./rdwService-CFrMDQAa.js";import{s as xt}from"./confirmDialog-DSEC2-zx.js";import{h as oa,n as ce,a as It,f as Nt,s as Pt,b as Ne}from"./scheduleTimePicker-q1IARKz3.js";function Pe(){const e=k();return[de(0,e),de(1,e),de(2,e),de(3,e),de(4,e),de(5,e),de(6,e)]}const da=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function g(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ca(e=""){return{title:nt(e)||"Unknown vehicle",buildYear:""}}function Ye(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function z(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function C(e){const t=e instanceof Date?e:z(e);if(!t)return"";const s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${s}-${r}-${i}`}function Fe(e){const t=z(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function ua(e){const t=z(e);if(!t)return"";const s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${s}-${r}-${i}`}function pa(e){const t=z(e);if(!t)return"09:00";const s=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0");return`${s}:${r}`}function Et(e,t){const s=String(e??"").trim(),r=String(t??"").trim();if(!s||!r)return"";const i=`${s}T${r}:00`;return z(i)?i:""}function ma(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function je(e){return e==="tr"?"tr-TR":e==="en"?"en-GB":"nl-NL"}function Ht(e){return e.toLocaleDateString(je(k()),{month:"long",year:"numeric"})}function fa(e){return e.toLocaleDateString(je(k()),{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function ga(e){return e.toLocaleDateString(je(k()),{weekday:"short",day:"2-digit",month:"short"})}function Ue(e){const t=k(),s=e.toLocaleDateString(je(t),{day:"2-digit",month:"short"});return C(e)===C(new Date)?`${$("today",t)}, ${s}`:ga(e)}function ha(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function ba(e){return ha(e.status)==="done"||e.inAppointments===!1}function ya(e){const t=String(e??"").trim();if(!t)return["other"];const s=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(r=>r.trim()).filter(Boolean);return s.length?s:[t]}function va(e){return da.get(String(e??"").trim().toLowerCase())??"other"}function wa(e){const t=String(e??"").trim(),s=k();if(!t)return{key:"other",label:Ze("other",s)};const r=t.toLowerCase(),i=va(t);if(i==="other"){if(["other","overig","overige"].includes(r))return{key:i,label:Ze("other",s)};const c=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:i,label:c||t}}return{key:i,label:Ze(i,s)}}function Yt(e){return ya(e).map(t=>{const{key:s,label:r}=wa(t);return`<span class="service-chip service-chip-${s}">${g(r)}</span>`}).join("")}function ka(e){const s=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((s==null?void 0:s[1])??"").trim()}const tt="Manual appointment created in dashboard.";function Qe(e){const s=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((s==null?void 0:s[1])??"").trim()}function Ma(e){const t=ce(e),[s,r]=t.split(":"),i=Number(s),c=Number(r);if(!Number.isFinite(i)||!Number.isFinite(c))return"01:00";const o=new Date(2e3,0,1,i,c,0,0);return o.setHours(o.getHours()+1),`${String(o.getHours()).padStart(2,"0")}:${String(o.getMinutes()).padStart(2,"0")}`}function Bt(e,t){const s=ce(t);return`${String(e??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${s}`.trim()}function st(e){const t=String(e??""),s=t.match(/\bmessage\s*:\s*([\s\S]+)/i),r=s!=null&&s[1]?s[1].trim():t.trim(),i=r.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim();return i||(r.toLowerCase().includes(tt.toLowerCase())?tt:"")}function at(e){const t=Fe((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),s=Qe(e==null?void 0:e.message);return s?`${t} - ${s}`:t}function ae(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const s=ka(e.message);if(s)return s;const r=String((e==null?void 0:e.licensePlate)??"").trim();return r?Ye(r):"UNKNOWN"}function lt(e){return C(e.appointmentAt??e.createdAt)}function Sa(e,t,s){const r=new Date(e.getFullYear(),e.getMonth(),1),i=new Date(e.getFullYear(),e.getMonth()+1,0),c=i.getDate(),o=(r.getDay()+6)%7,p=t.reduce((l,h)=>{const b=lt(h);return b&&l.set(b,(l.get(b)??0)+1),l},new Map),d=[];for(let l=o;l>0;l-=1){const h=new Date(r);h.setDate(1-l);const b=C(h);d.push({key:b,date:h,day:h.getDate(),isCurrentMonth:!1,isSelected:b===s,count:p.get(b)??0})}for(let l=1;l<=c;l+=1){const h=new Date(r.getFullYear(),r.getMonth(),l),b=C(h);d.push({key:b,date:h,day:l,isCurrentMonth:!0,isSelected:b===s,count:p.get(b)??0})}for(;d.length%7!==0;){const l=new Date(i),h=d.length-(o+c)+1;l.setDate(i.getDate()+h);const b=C(l);d.push({key:b,date:l,day:l.getDate(),isCurrentMonth:!1,isSelected:b===s,count:p.get(b)??0})}return d}function Ft(e){return e.reduce((t,s)=>{const r=lt(s);if(!r)return t;const i=t.get(r)??[];return i.push(s),t.set(r,i),t},new Map)}function ve(e){return String((e==null?void 0:e.color)??"#1565C0").trim()||"#1565C0"}function $a(e){if(String((e==null?void 0:e.message)??"").toLowerCase().includes("all day: yes"))return!0;const s=Fe((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),r=Qe(e==null?void 0:e.message);return s==="00:00"&&r==="23:59"}function jt(e){const t=`${ae(e)} ${st((e==null?void 0:e.message)??"")}`.toLowerCase();return t.includes("good friday")||t.includes("goede vrijdag")||t.includes("easter")||t.includes("paas")||t.includes("koningsdag")||t.includes("king")}function La(e){const t=new Date(e.getFullYear(),e.getMonth(),1),s=new Date(e.getFullYear(),e.getMonth()+1,0),r=(t.getDay()+6)%7,i=[];for(let c=r;c>0;c-=1){const o=new Date(t);o.setDate(1-c),i.push(o)}for(let c=1;c<=s.getDate();c+=1)i.push(new Date(t.getFullYear(),t.getMonth(),c));for(;i.length%7!==0;){const c=new Date(s),o=i.length-(r+s.getDate())+1;c.setDate(s.getDate()+o),i.push(c)}return i}function Da(e){const t=new Date(e),s=(t.getDay()+6)%7;return t.setDate(t.getDate()-s),Array.from({length:7},(r,i)=>{const c=new Date(t);return c.setDate(t.getDate()+i),c})}function Ta(e,t,s,r,i){const c=C(new Date),o=C(s),p=i==="full";return e.map(d=>{const l=C(d),h=r.get(l)??[],b=["calendar-mobile-month-cell"];d.getMonth()!==t.getMonth()&&b.push("is-outside"),l===o&&b.push("is-selected");const U=p?(()=>{if(!h.length)return'<span class="calendar-mobile-month-chips"></span>';const A=h[0],x=`<span class="calendar-mobile-month-chip${jt(A)?" is-holiday":""}" style="--calendar-mobile-chip-color: ${g(ve(A))};">${g(ae(A))}</span>`,R=h.length-1,Q=R>0?`<span class="calendar-mobile-month-more">+${R} more</span>`:"";return`<span class="calendar-mobile-month-chips">${x}${Q}</span>`})():`<span class="calendar-mobile-month-lines" aria-hidden="true">${h.slice(0,3).map(A=>`<span class="calendar-mobile-month-line" style="--calendar-mobile-line-color: ${g(ve(A))};"></span>`).join("")}</span>`;return`
        <button class="${b.join(" ")}" type="button" data-calendar-cell="${l}">
          <span class="calendar-mobile-month-date ${l===c?"is-today":""}">${d.getDate()}</span>
          ${U}
        </button>
      `}).join("")}function Je(e,t,s,r,i=La(e)){const c=Pe().map(d=>`<span class="calendar-mobile-weekday">${d}</span>`).join(""),o=Ta(i,e,t,s,r),p=Math.max(1,Math.ceil(i.length/7));return`
    <div class="calendar-mobile-week-header">${c}</div>
    <div class="calendar-mobile-month-grid" data-mobile-grid-state="${r}" style="--calendar-mobile-grid-rows: ${p};">
      ${o}
    </div>
  `}function qa(e,t,s){const r=new Date(e),i=(r.getDay()+6)%7;r.setDate(r.getDate()-i);const c=Pe().map(d=>`<span class="calendar-mobile-weekday">${d}</span>`).join(""),o=C(new Date),p=Array.from({length:7},(d,l)=>{const h=new Date(r);h.setDate(r.getDate()+l);const b=C(h),B=(t.get(b)??[]).map(Q=>ve(Q)).slice(0,4),x=["calendar-mobile-week-day"];b===s&&x.push("is-selected"),b===o&&x.push("is-today");const R=B.length?B.map(Q=>`<span class="calendar-mobile-week-bar" style="--calendar-mobile-bar-color: ${g(Q)};"></span>`).join(""):'<span class="calendar-mobile-week-bar calendar-mobile-week-bar-empty" aria-hidden="true"></span>';return`
      <button class="${x.join(" ")}" type="button" data-calendar-cell="${b}">
        <span class="calendar-mobile-week-daylabel">${Pe()[l]}</span>
        <span class="calendar-mobile-week-date ${b===o?"is-today":""}">${h.getDate()}</span>
        <span class="calendar-mobile-week-bars" aria-hidden="true">${R}</span>
      </button>
    `}).join("");return`
    <div class="calendar-mobile-week-strip" aria-label="Selected week">
      <div class="calendar-mobile-week-header">${c}</div>
      <div class="calendar-mobile-week-days">${p}</div>
    </div>
  `}function Ca(e,t){const s=t.filter(d=>$a(d)||jt(d)),i=t.filter(d=>!s.includes(d)).reduce((d,l)=>{const h=Fe(l.appointmentAt??l.createdAt),b=d.get(h)??[];return b.push(l),d.set(h,b),d},new Map),c=[...i.keys()].sort();if(!t.length)return`<div class="calendar-mobile-agenda-empty">${$("noAppointmentsToday",k())}</div>`;const o=s.map(d=>{const l=g(String(d.id??""));return`
        <div class="calendar-mobile-agenda-row is-all-day">
          <div class="calendar-mobile-agenda-time">📅</div>
          <button class="calendar-mobile-agenda-event" style="--calendar-mobile-chip-color: ${g(ve(d))};" type="button" data-calendar-mobile-booking-id="${l}">
            <span class="calendar-mobile-agenda-title">${g(ae(d))}</span>
            <span class="calendar-mobile-agenda-subtitle">${$("allDay",k())}</span>
          </button>
        </div>
      `}).join(""),p=c.map(d=>{const h=(i.get(d)??[]).map(b=>{const U=g(String(b.id??"")),A=Qe(b.message),B=String(b.licensePlate??"").trim(),x=[A?`${d} - ${A}`:d];return B&&B!=="UNKNOWN"&&x.push(Ye(B)),`
            <button class="calendar-mobile-agenda-event" style="--calendar-mobile-chip-color: ${g(ve(b))};" type="button" data-calendar-mobile-booking-id="${U}">
              <span class="calendar-mobile-agenda-title">${g(ae(b))}</span>
              <span class="calendar-mobile-agenda-subtitle">${g(x.join("  "))}</span>
            </button>
          `}).join("");return`
        <div class="calendar-mobile-agenda-row">
          <div class="calendar-mobile-agenda-time">${d}</div>
          <div class="calendar-mobile-agenda-events">${h}</div>
        </div>
      `}).join("");return`
    <div class="calendar-mobile-agenda">
      <div class="calendar-mobile-agenda-daylabel">${g(Ue(e))}</div>
      ${o}
      ${p}
    </div>
  `}function Aa({monthCursor:e,selectedDate:t,bookingsByDay:s,bookingsForDay:r,mobileLayer:i,animateSplitBottom:c,detailBooking:o,mobileDetailId:p}){C(t);const d=`
    <div class="calendar-mobile-layer-agenda" data-calendar-mobile-agenda-scroll>
      ${Ca(t,r)}
    </div>
  `,l=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-full" data-calendar-mobile-layer="full">
      <div class="calendar-mobile-layer-top">
        ${Je(e,t,s,"full")}
      </div>
      <div class="calendar-mobile-layer-bottom calendar-mobile-layer-bottom-preview" aria-hidden="true">
        ${d}
      </div>
    </section>
  `,h=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-split" data-calendar-mobile-layer="split">
      <div class="calendar-mobile-layer-top">
        ${Je(e,t,s,"half")}
      </div>
      <div class="calendar-mobile-layer-bottom${c?" calendar-mobile-layer-bottom-enter":""}">
        ${d}
      </div>
    </section>
  `,b=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-week" data-calendar-mobile-layer="week">
      <div class="calendar-mobile-layer-top">
        ${Je(e,t,s,"week",Da(t))}
      </div>
      <div class="calendar-mobile-layer-bottom">
        ${d}
      </div>
    </section>
  `,U={full:l,split:h,week:b},B=p&&p.startsWith("__day-detail__")?`
      <div class="calendar-mobile-detail-overlay">
        <div class="calendar-mobile-detail-backdrop" data-calendar-mobile-detail-close></div>
        <article class="calendar-mobile-detail-card">
          <h3 style="margin: 0 0 8px; font-size: 18px;">${g(Ue(t))}</h3>
          <div style="margin-bottom: 12px; font-size: 14px; color: var(--666666);">
            ${r&&r.length>0?r.map(x=>`
                <div style="margin-top: 8px; padding: 8px 0 8px 10px; border: 1px solid var(--e6e6e6); border-left: 4px solid ${g(ve(x))}; border-radius: 8px; cursor: pointer;" data-calendar-mobile-booking-id="${g(String(x.id??""))}">
                  <div style="font-weight: 600; color: var(--333333);">${g(ae(x))}</div>
                  <div>${g(at(x))}</div>
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
                  <p class="request-name">${g(ae(o))}</p>
                </div>
              </div>
              <div class="request-meta">
                <span class="request-time">${g(at(o))}</span>
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
                  <span>${g(st(o.message)||"No customer message.")}</span>
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
  `}function xa(e){const t=C(e);return`
    <button class="calendar-mobile-addpill" type="button" data-calendar-mobile-quickadd="${t}">
      Toevoegen op ${g(Ue(e))}
    </button>
    <button class="calendar-mobile-fab" type="button" data-calendar-mobile-quickadd="${t}" aria-label="Add event">+</button>
  `}function Ea(e,t,s,r){const i=Sa(e,t,r),c=C(new Date),o=Pe().map(d=>`<span class="month-weekday">${d}</span>`).join(""),p=i.map(d=>{const l=["month-cell"];return d.isCurrentMonth||l.push("is-outside"),d.isSelected&&l.push("is-selected"),d.isCurrentMonth&&d.key===c&&l.push("is-today"),d.count>0&&l.push("has-bookings"),`
        <button class="${l.join(" ")}" type="button" data-calendar-cell="${d.key}">
          <span class="month-cell-day">${d.day}</span>
          ${d.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    ${qa(s,Ft(t),r)}
    <div class="month-grid-board">
      <div class="month-week-row">${o}</div>
      <div class="month-grid-cells">${p}</div>
    </div>
  `}function Ha(e,t){const s=t.reduce((c,o,p)=>{const d=Fe(o.appointmentAt??o.createdAt),l=c.get(d)??[];return l.push({booking:o,index:p}),c.set(d,l),c},new Map),r=[];for(let c=0;c<=23;c+=1)r.push(`${String(c).padStart(2,"0")}:00`),r.push(`${String(c).padStart(2,"0")}:30`);s.forEach((c,o)=>{r.includes(o)||r.push(o)});const i=c=>{const o=String(c).match(/^(\d{2}):(\d{2})$/);if(!o)return Number.POSITIVE_INFINITY;const p=Number(o[1]),d=Number(o[2]);return!Number.isFinite(p)||!Number.isFinite(d)?Number.POSITIVE_INFINITY:p*60+d};return r.sort((c,o)=>i(c)-i(o)),`
    <div class="day-board-list">
      ${r.map(c=>{const o=s.get(c)??[];if(!o.length)return`
              <div class="day-slot-row" data-calendar-slot-time="${g(c)}">
                <span class="day-slot-time">${c}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">${$("available",k())}</span>
              </div>
            `;const p=o.map(({booking:l,index:h},b)=>{const U=g(String(l.id??"")),A=String(l.licensePlate??"").toUpperCase()==="UNKNOWN",B=g(l.color??"#2563EB"),x=g(l.licensePlate&&l.licensePlate!=="UNKNOWN"?Ye(l.licensePlate):"UNKNOWN"),R=g(ae(l)),Q=o.length>1&&b<o.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${U}">
                <div class="day-slot-plate-wrapper">
                  ${A?`<span class="fast-appt-dot" style="background: ${B}" aria-hidden="true"></span>`:`<span class="plate-chip">${x}</span>`}
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${R}</span>
                  </div>
                  <div class="day-slot-status-services">
                    ${A?'<span class="service-chip service-chip-other">Simple appointment</span>':`${Yt(l.service)}`}
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
  `}function Ba(e,t,s,r){return e.length?e.map((i,c)=>{const o=String(i.id??""),p=t===o,d=s===o,l=i.appointmentAt??i.createdAt,h=String(i.licensePlate??"").toUpperCase()==="UNKNOWN",b=g(i.color??"#2563EB"),U=g(i.licensePlate&&i.licensePlate!=="UNKNOWN"?Ye(i.licensePlate):"UNKNOWN"),A=g(at(i)),B=It(ua(l)),x=g(B),R=g(Nt(B)),Q=ce(pa(l)),ue=g(Q),ne=ce(Qe(i.message)||Ma(Q)),X=g(ne),De=g(ae(i)),we=i.licensePlate?nt(i.licensePlate):"",ee=r.get(we)||ca(i.licensePlate),ke=ee.buildYear?`${ee.title} (${ee.buildYear})`:ee.title,pe=g(String(i.phone??"No phone number")),me=g(st(i.message)||"No customer message.");return`
        <article class="request-card ${p?"is-expanded":""}" data-calendar-booking-id="${g(o)}">
          <div class="request-card-head">
            <div class="request-main">
              ${h?`<span class="fast-appt-dot" style="background: ${b}" aria-hidden="true"></span>`:`<span class="plate-chip">${U}</span>`}
              <div class="request-info">
                <p class="request-name"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1668 7.08463C14.1668 4.78345 12.3013 2.91797 10.0002 2.91797C7.69898 2.91797 5.8335 4.78345 5.8335 7.08463C5.8335 9.3858 7.69898 11.2513 10.0002 11.2513C12.3013 11.2513 14.1668 9.3858 14.1668 7.08463Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8332 17.0833C15.8332 13.8617 13.2215 11.25 9.99984 11.25C6.77818 11.25 4.1665 13.8617 4.1665 17.0833" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${De}</p>
                ${h?"":`<p class="request-vehicle"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50667 14.1667C7.50667 15.0872 6.76048 15.8333 5.84001 15.8333C4.91953 15.8333 4.17334 15.0872 4.17334 14.1667C4.17334 13.2462 4.91953 12.5 5.84001 12.5C6.76048 12.5 7.50667 13.2462 7.50667 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M15.8397 14.1667C15.8397 15.0872 15.0935 15.8333 14.173 15.8333C13.2525 15.8333 12.5063 15.0872 12.5063 14.1667C12.5063 13.2462 13.2525 12.5 14.173 12.5C15.0935 12.5 15.8397 13.2462 15.8397 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M1.67301 8.33464H15.0063M1.67301 8.33464C1.67301 8.98464 1.65635 10.868 1.67634 12.718C1.70632 13.318 1.80624 13.818 4.17444 14.168M1.67301 8.33464C1.85288 6.88464 2.63561 5.16797 3.0353 4.51797M7.50634 8.33464V4.16797M12.4981 14.168H7.5019M1.68634 4.16797H10.1998C10.1998 4.16797 10.6495 4.16797 11.0492 4.20797C11.7987 4.27797 12.4282 4.61797 13.0577 5.46797C13.7242 6.36797 14.2367 7.50797 14.9162 8.11797C16.0454 9.13164 18.1937 8.81797 18.3137 10.968C18.3437 12.068 18.3437 13.268 18.2937 13.468C18.2134 14.0569 17.7593 14.1531 17.1945 14.168C16.7043 14.181 16.1134 14.1447 15.8256 14.168" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
${ke}</p>`}
                <div class="request-services">${Yt(i.service)}</div>
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
                    <img src="${Ct("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${pe}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${Ct("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${me}</span>
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
                          ${Pt(B)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${$("fastFrom",k())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${ue}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${ue}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${Ne(Q)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${$("fastTo",k())}</span>
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
                          ${Ne(ne)}
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments for this date.</p></article>'}function et(e){return[...e].sort((t,s)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(s.appointmentAt??s.createdAt).getTime())}async function Ia(e){var yt,vt,wt,kt,Mt,St,$t,Lt;if(!e)return;const t=await zt();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Xt(t.activeGarage);const s=t.isAdmin?null:[(yt=t.activeGarage)==null?void 0:yt.id].filter(Boolean),r=((vt=t.activeGarage)==null?void 0:vt.id)??((kt=(wt=t.garages)==null?void 0:wt[0])==null?void 0:kt.id)??"",i=String(((Mt=t.activeGarage)==null?void 0:Mt.calendarStyle)??((St=t.activeGarage)==null?void 0:St.calendar_style)??"1"),c=String((($t=t.activeGarage)==null?void 0:$t.calendarDefaultView)??((Lt=t.activeGarage)==null?void 0:Lt.calendar_default_view)??"month").toLowerCase(),{shell:o,contentArea:p,setUnreadEmailCount:d}=Zt({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:t.user.email,onLogout:Jt,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(o),o.classList.toggle("calendar-style-agenda",i==="2"),p.innerHTML=`
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
  `;const l=p.querySelector("#calendarBoardBody"),h=p.querySelector("#calendarBoardContent"),b=p.querySelector("#calendarMobileAddbarHost"),U=p.querySelector(".calendar-board-head"),A=p.querySelector("#calendarPeriodLabel"),B=p.querySelector("#calendarModeMonth"),x=p.querySelector("#calendarModeDay"),R=p.querySelector("#calendarDayTitle"),Q=p.querySelector("#calendarDayCount"),ue=p.querySelector("#calendarDayList"),ne=p.querySelector("#calendarQuickAddOverlay"),X=p.querySelector("#calendarQuickAddForm"),De=p.querySelector("#calendarQuickAddName"),we=p.querySelector("#calendarQuickAddDatePicker"),ee=p.querySelector("#calendarQuickAddStartPicker"),ke=p.querySelector("#calendarQuickAddEndPicker"),pe=p.querySelector("#calendarQuickAddDate"),me=p.querySelector("#calendarQuickAddStart"),Te=p.querySelector("#calendarQuickAddEnd"),te=p.querySelector("#calendarQuickAddAllDay"),qe=p.querySelector("#calendarQuickAddTimeRow"),Ce=p.querySelector("#calendarQuickAddStatus"),Oe=()=>{!(l instanceof HTMLElement)||!(U instanceof HTMLElement)||l.style.setProperty("--calendar-board-head-offset",`${U.offsetHeight}px`)};let Z=[],O=[];const G=ea("calendar",{}),Ut=z(G.selectedDate??""),_e=z(G.currentMonth??"");let y=Ut??new Date,q=_e?new Date(_e.getFullYear(),_e.getMonth(),1):new Date(y.getFullYear(),y.getMonth(),1);const Qt=c==="day"||c==="week"||c==="agenda"?"day":"month";let W=G.activeMode==="day"||G.activeMode==="month"?G.activeMode:Qt,I=String(G.expandedBookingId??"").trim(),N=String(G.editingBookingId??"").trim(),it="",rt="",ot=0,dt="";const Ot=String(G.mobileLayer??G.mobileViewMode??"full");let L={month:"full",split:"split",week:"week",full:"full"}[Ot]??"full",E=String(G.mobileDetailBookingId??"").trim(),Ae=0,Ke=0,se=null,Ve=L,fe=0,ge=!1,Re=0,xe=0,Me=!1,Y=L,Se=!1,Ge=!1,he=0,ct=L,Ee=C(y);const We=new Map,V=()=>window.matchMedia("(max-width: 768px)").matches,He=(n=1)=>{const a=["full","split","week"],u=a.indexOf(L),M=Math.min(a.length-1,Math.max(0,u+n));L=a[M]??"full"},_t=(n,a)=>{const u=n instanceof Element?n.closest("[data-calendar-mobile-agenda-scroll]"):null;return!(u instanceof HTMLElement)||u.scrollHeight<=u.clientHeight+2?!0:a>0?Math.ceil(u.scrollTop+u.clientHeight)>=u.scrollHeight:u.scrollTop<=0},Be=()=>h.querySelector(".calendar-mobile-layer-full"),ut=n=>{const a=Be();a instanceof HTMLElement&&a.style.setProperty("--calendar-mobile-full-drag-offset",`${n}px`)},pt=()=>{const n=Be();n instanceof HTMLElement&&(n.classList.remove("is-dragging"),n.style.removeProperty("--calendar-mobile-full-drag-offset"))},Kt=()=>{if(!V())return;const n=h.querySelector(".calendar-mobile-layer-top");if(!(n instanceof HTMLElement))return;const a=h.querySelector(".calendar-mobile-layer-bottom"),u=h.querySelector(".calendar-mobile-layer"),M=h.querySelector('.calendar-mobile-month-grid[data-mobile-grid-state="full"]'),w=h.querySelector('.calendar-mobile-month-grid[data-mobile-grid-state="half"], .calendar-mobile-month-grid[data-mobile-grid-state="week"]'),m=()=>{n.style.transition="",n.style.transform="",n.style.clipPath="",a instanceof HTMLElement&&(a.style.transition="",a.style.transform=""),u instanceof HTMLElement&&(u.style.removeProperty("--calendar-mobile-fs-progress"),u.style.removeProperty("--calendar-mobile-sw-progress"),u.style.borderRadius="",u.style.boxShadow=""),M instanceof HTMLElement&&(M.style.transition=""),w instanceof HTMLElement&&(L!=="week"&&w.setAttribute("data-mobile-grid-state","half"),w.style.removeProperty("--calendar-mobile-sw-progress"),w.style.transition="")};n.addEventListener("touchstart",f=>{var H;const S=(H=f.touches)==null?void 0:H[0];S&&(Re=S.clientY,xe=S.clientY,Y=L,Me=!0,Se=!1)},{passive:!0}),n.addEventListener("touchmove",f=>{var ie,re,be;if(!Me)return;const S=(ie=f.touches)==null?void 0:ie[0];if(!S)return;xe=S.clientY;const H=xe-Re,_=(((be=(re=f.touches)==null?void 0:re[0])==null?void 0:be.clientX)??0)-Ae;if(Math.abs(H)<=Math.abs(_))return;if(Y==="full"||Y==="split"){const $e=Y==="split"&&H<0;if(n.scrollTop>0&&!$e)return;if($e){f.preventDefault(),w instanceof HTMLElement&&w.setAttribute("data-mobile-grid-state","half");return}f.preventDefault();return}const P=H>0&&Y!=="full",F=H<0&&Y!=="week";!P&&!F||n.scrollTop<=0&&(f.preventDefault(),n.style.transition="",n.style.transform=`translateY(${H}px)`,a instanceof HTMLElement&&(a.style.transition="",a.style.transform=`translateY(${H}px)`))},{passive:!1}),n.addEventListener("touchend",()=>{if(!Me)return;Me=!1;const f=xe-Re;if(Y==="full"||Y==="split"){const _=Y==="split"&&f<0;if(n.scrollTop>0&&!_){m();return}Se=!0;const P=Math.max(64,Math.round(window.innerHeight*.08));let F=Y;Y==="full"?F=f<=-P?"split":"full":Y==="split"&&(f<=-P?F="week":f>=P?F="full":F="split"),n.style.transition="",n.style.transform="",a instanceof HTMLElement&&(a.style.transition="",a.style.transform=""),window.setTimeout(()=>{if(L!==F){L=F,he=Date.now()+300,E="",Ge=!0,D();return}m(),u instanceof HTMLElement&&(u.style.transition="")},250);return}const S=f>0&&Y!=="full",H=f<0&&Y!=="week";if(n.scrollTop>0||!S&&!H){n.style.transform="",a instanceof HTMLElement&&(a.style.transform="");return}if(Se=!0,Math.abs(f)>120){const _=f<0?1:-1,P=L;if(He(_),L!==P){he=Date.now()+360,E="",D();return}}n.style.transition="transform 0.25s ease",n.style.transform="translateY(0)",a instanceof HTMLElement&&(a.style.transition="transform 0.25s ease",a.style.transform="translateY(0)"),window.setTimeout(()=>{n.style.transition="",a instanceof HTMLElement&&(a.style.transition="")},250)},{passive:!0})},mt=(n,a)=>{if(!V())return!1;const u=Date.now();if(u<he||!_t(a,n))return!1;const M=L;if(M==="full"&&n>0){const w=h.querySelector('.calendar-mobile-month-grid[data-mobile-grid-state="full"]');if(w instanceof HTMLElement)return w.classList.add("is-shrinking-to-split"),he=u+520,window.setTimeout(()=>{L==="full"&&(He(n),E="",D())},280),!0}return He(n),M===L?!1:(he=u+280,E="",D(),!0)},ze=n=>{if(V()){if(L==="week")y=new Date(y.getFullYear(),y.getMonth(),y.getDate()+n*7),q=new Date(y.getFullYear(),y.getMonth(),1);else{const u=new Date(q);u.setMonth(q.getMonth()+n),q=new Date(u.getFullYear(),u.getMonth(),1),(y.getMonth()!==q.getMonth()||y.getFullYear()!==q.getFullYear())&&(y=new Date(q.getFullYear(),q.getMonth(),1))}return}if(W==="month"){const u=new Date(q);u.setMonth(q.getMonth()+n),q=new Date(u.getFullYear(),u.getMonth(),1);return}const a=new Date(y);a.setDate(y.getDate()+n),y=a,q=new Date(y.getFullYear(),y.getMonth(),1)},ft=n=>{const a=String(n.getHours()).padStart(2,"0"),u=String(n.getMinutes()).padStart(2,"0");return`${a}:${u}`},gt=(n,a,u)=>{const M=It(n),w=ce(a),m=ce(u);if(pe instanceof HTMLInputElement&&(pe.value=M),we instanceof HTMLElement){const f=we.querySelector("[data-schedule-date-label]"),S=we.querySelector("[data-schedule-date-options]");f instanceof HTMLElement&&(f.textContent=Nt(M)),S instanceof HTMLElement&&(S.innerHTML=Pt(M))}if(me instanceof HTMLInputElement&&(me.value=w),ee instanceof HTMLElement){const f=ee.querySelector("[data-schedule-time-label]"),S=ee.querySelector("[data-schedule-time-options]");f instanceof HTMLElement&&(f.textContent=w),S instanceof HTMLElement&&(S.innerHTML=Ne(w))}if(Te instanceof HTMLInputElement&&(Te.value=m),ke instanceof HTMLElement){const f=ke.querySelector("[data-schedule-time-label]"),S=ke.querySelector("[data-schedule-time-options]");f instanceof HTMLElement&&(f.textContent=m),S instanceof HTMLElement&&(S.innerHTML=Ne(m))}},le=(n,a="")=>{Ce instanceof HTMLElement&&(Ce.textContent=String(n??""),Ce.classList.remove("error","warning"),(a==="error"||a==="warning")&&Ce.classList.add(a))},ht=()=>{ne instanceof HTMLElement&&(ne.hidden=!0,le(""))},Xe=(n,a)=>{if(!(ne instanceof HTMLElement))return;Ee=String(n??C(y));let u,M;if(a){const[w,m]=a.split(":").map(Number),f=w*60+m+60;u=a,M=`${String(Math.floor(f/60)%24).padStart(2,"0")}:${String(f%60).padStart(2,"0")}`}else{const w=new Date,m=new Date(w.getTime()+60*60*1e3);u=ft(w),M=ft(m)}gt(Ee,u,M),te instanceof HTMLInputElement&&(te.checked=!1),qe instanceof HTMLElement&&qe.classList.remove("is-hidden"),ne.hidden=!1,le(""),window.requestAnimationFrame(()=>{De instanceof HTMLInputElement&&De.focus()})};te==null||te.addEventListener("change",()=>{const n=te.checked;if(me instanceof HTMLInputElement&&(me.disabled=n),Te instanceof HTMLInputElement&&(Te.disabled=n),n){const a=pe instanceof HTMLInputElement?pe.value:Ee;gt(a,"00:00","23:59")}qe instanceof HTMLElement&&qe.classList.toggle("is-hidden",n)});const bt=async()=>{const[n,a]=await Promise.all([sa({garageIds:s}),la({garageIds:s})]),u=new Set(a.map(m=>String(m.bookingId??m.id??"").trim()).filter(Boolean));Z=n;const M=new Set(Z.map(m=>m.licensePlate).filter(m=>m&&m!=="UNKNOWN").map(m=>nt(m)));for(const m of M)if(m&&!We.has(m))try{const f=await ra(m);f&&We.set(m,f)}catch(f){console.error(`Failed to fetch vehicle for ${m}:`,f)}O=et(Z.filter(m=>{const f=String(m.id??"").trim();return m.inAppointments===!0&&!ba(m)&&!u.has(f)}));const w=At(Z);d(w.unread)},Vt=()=>{ia("calendar",{selectedDate:y.toISOString(),currentMonth:q.toISOString(),activeMode:W,mobileLayer:L,mobileViewMode:L,mobileDetailBookingId:E,expandedBookingId:I,editingBookingId:N})},Rt=()=>{const n=C(y);return O.filter(a=>lt(a)===n).sort((a,u)=>new Date(a.appointmentAt??a.createdAt).getTime()-new Date(u.appointmentAt??u.createdAt).getTime())},D=()=>{const n=C(y),a=Rt(),u=Ft(O),M=V(),w=W==="day"&&(it!=="day"||rt!==n);if(B.classList.toggle("is-active",W==="month"),x.classList.toggle("is-active",W==="day"),I&&!a.some(m=>String(m.id)===I)&&(I="",N=""),N&&!a.some(m=>String(m.id)===N)&&(N=""),E&&!E.startsWith("__day-detail__")&&!O.some(m=>String(m.id)===E)&&(E=""),M){const m=ct==="full"&&L==="split"&&!Ge;A.textContent=Ht(q).toUpperCase();const f=E&&!E.startsWith("__day-detail__")?O.find(S=>String(S.id)===E)??null:null;if(h.innerHTML=Aa({monthCursor:q,selectedDate:y,bookingsByDay:u,bookingsForDay:a,mobileLayer:L,animateSplitBottom:m,detailBooking:f,mobileDetailId:E}),b.innerHTML=xa(y),ge||pt(),m){const S=h.querySelector(".calendar-mobile-layer-bottom-enter");S instanceof HTMLElement&&window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{S.classList.remove("calendar-mobile-layer-bottom-enter")})})}Ge=!1,Kt(),ct=L}else W==="month"?(A.textContent=Ht(q),h.innerHTML=Ea(q,O,y,n),b.innerHTML=""):(A.textContent=fa(y),h.innerHTML=Ha(y,a),b.innerHTML="",w&&window.requestAnimationFrame(()=>{const m=h.querySelector(".day-board-list");if(!(m instanceof HTMLElement))return;const f=m.querySelector(".day-slot-row.has-booking");if(f instanceof HTMLElement){const S=l.getBoundingClientRect(),H=f.getBoundingClientRect(),_=l.scrollTop+(H.top-S.top)-8;l.scrollTo({top:Math.max(0,_),behavior:"auto"})}else l.scrollTo({top:0,behavior:"auto"})}));R.textContent=Ue(y),Q.textContent=`${a.length} ${$("appointments",k()).toLowerCase()}`,ue.innerHTML=Ba(a,I,N,We),window.requestAnimationFrame(Oe),it=W,rt=n,Vt()};p.addEventListener("click",async n=>{const a=n.target instanceof Element?n.target:null;if(!a)return;if(a.closest("[data-calendar-quickadd-close]")instanceof HTMLElement){ht();return}if(a.closest("[data-calendar-mobile-detail-close]")instanceof HTMLElement){E="",D();return}const w=a.closest("[data-calendar-mobile-quickadd]");if(w instanceof HTMLElement){const v=String(w.dataset.calendarMobileQuickadd??C(y));Xe(v);return}if(a.closest("[data-calendar-mobile-cycle]")instanceof HTMLElement&&V()){He(),D();return}if(oa(p,a))return;const f=a.closest("[data-calendar-nav]");if(f instanceof HTMLElement){const v=f.dataset.calendarNav;ze(v==="next"?1:-1),D();return}const S=a.closest("[data-calendar-mode]");if(S instanceof HTMLElement){W=S.dataset.calendarMode==="day"?"day":"month",D();return}const H=a.closest("[data-calendar-cell]");if(H instanceof HTMLElement){const v=H.dataset.calendarCell;if(v){const T=Date.now(),J=v===dt&&T-ot<=450;dt=v,ot=T;const K=z(`${v}T12:00:00`);K&&(y=K,q=new Date(y.getFullYear(),y.getMonth(),1),V()&&L==="full"&&(E=`__day-detail__${v}`),D(),!V()&&J&&W==="month"&&Xe(v))}return}const _=a.closest("[data-calendar-slot-time]");if(_ instanceof HTMLElement&&W==="day"){const v=String(_.dataset.calendarSlotTime??"");v&&Xe(C(y),v);return}const P=a.closest("[data-calendar-mobile-booking-id]");if(P instanceof HTMLElement){const v=String(P.dataset.calendarMobileBookingId??"");v&&(E=v,D());return}const F=a.closest("[data-day-slot-booking-id]");if(F instanceof HTMLElement){const v=String(F.dataset.daySlotBookingId??"");v&&(I=v,N="",D(),window.requestAnimationFrame(()=>{const T=[...ue.querySelectorAll("[data-calendar-booking-id]")].find(J=>J instanceof HTMLElement&&String(J.dataset.calendarBookingId??"")===v);T instanceof HTMLElement&&T.scrollIntoView({behavior:"smooth",block:"start"})}));return}const ie=a.closest("[data-calendar-toggle]");if(ie instanceof HTMLElement){const v=String(ie.dataset.calendarToggle??"");I=I===v?"":v,I!==v&&(N=""),D();return}const re=a.closest("[data-calendar-action]");if(re instanceof HTMLElement){const v=String(re.dataset.calendarAction??""),T=String(re.dataset.bookingId??"");if(!T)return;if(v==="edit"){I=T,N=N===T?"":T,D();return}if(v==="cancel-edit"){N="",D();return}if(v==="save-schedule"){const K=re.closest("[data-calendar-booking-id]");if(!(K instanceof HTMLElement))return;const oe=O.find(j=>String(j.id)===T);if(!oe)return;const ye=K.querySelector("[data-schedule-edit-date]"),Dt=K.querySelector("[data-schedule-edit-start-time]"),Tt=K.querySelector("[data-schedule-edit-end-time]");if(!(ye instanceof HTMLInputElement)||!(Dt instanceof HTMLInputElement)||!(Tt instanceof HTMLInputElement))return;const Le=Et(ye.value,Dt.value),qt=ce(Tt.value);if(!Le)return;try{await ta(oe,Le)}catch(j){window.alert(j instanceof Error?j.message:"Unable to save the appointment schedule.");return}Z=et(Z.map(j=>String(j.id)===T?{...j,appointmentAt:Le,message:Bt(j.message,qt)}:j)),O=et(O.map(j=>String(j.id)===T?{...j,appointmentAt:Le,message:Bt(j.message,qt)}:j));const Ie=z(Le);Ie&&(y=Ie,q=new Date(Ie.getFullYear(),Ie.getMonth(),1)),N="",I=T,D();return}if(!O.find(K=>String(K.id)===T))return;D();return}const be=a.closest("[data-request-action]");if(be instanceof HTMLElement){const v=String(be.dataset.requestAction??""),T=String(be.dataset.bookingId??"");if(!T)return;const J=O.find(K=>String(K.id)===T);if(!J)return;if(v==="complete"){(async()=>{if(await xt("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await aa(J,{convertedFromEmail:J.source!=="manual"})}catch(oe){window.alert(oe instanceof Error?oe.message:"Unable to mark appointment as completed.");return}window.location.href=Gt("completed.html")}})();return}if(v==="delete"){(async()=>{if(!await xt("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;Z=Z.filter(ye=>String(ye.id)!==T),O=O.filter(ye=>String(ye.id)!==T),N="",E===T&&(E="");const oe=At(Z);d(oe.unread),D()})();return}}const $e=a.closest("[data-calendar-booking-id]");if($e instanceof HTMLElement&&!ma(a)){const v=String($e.dataset.calendarBookingId??"");if(!v)return;I=I===v?"":v,I!==v&&(N=""),D()}}),window.addEventListener("resize",Oe),Oe(),X==null||X.addEventListener("submit",async n=>{if(n.preventDefault(),!r){le("No garage available for quick appointment creation.","warning");return}const a=new FormData(X),u=String(a.get("title")??"").trim(),M=String(a.get("date")??Ee).trim(),w=te instanceof HTMLInputElement?te.checked:!1,m=w?"00:00":String(a.get("start")??"").trim(),f=w?"23:59":String(a.get("end")??"").trim(),S=String(a.get("color")??"#2563EB").trim(),H=String(a.get("note")??"").trim();if(!u||!M||!m||!f){le("Please fill all required fields.","warning");return}const _=Et(M,m);if(!_){le("Invalid date/time.","warning");return}const P=X.querySelector("button[type='submit']");P instanceof HTMLButtonElement&&(P.disabled=!0),le("Adding appointment...");try{await na({garageId:r,name:u,licensePlate:"UNKNOWN",phone:"0000000000",service:"Simple appointment",message:`Name: ${u}
Message: ${H||tt}${w?`
All day: yes`:""}
Until: ${f}`,color:S,appointmentAt:_}),y=z(`${M}T12:00:00`)??y,q=new Date(y.getFullYear(),y.getMonth(),1),I="",N="",await bt(),D(),X.reset(),ht()}catch(F){const ie=F instanceof Error?F.message:"Unable to add appointment.";le(ie,"error")}finally{P instanceof HTMLButtonElement&&(P.disabled=!1)}}),window.addEventListener("keydown",n=>{V()&&(n.key==="ArrowLeft"&&(ze(-1),D()),n.key==="ArrowRight"&&(ze(1),D()))}),l==null||l.addEventListener("wheel",n=>{!V()||Math.abs(n.deltaY)<12||mt(n.deltaY>0?1:-1,n.target)&&n.preventDefault()},{passive:!1}),l==null||l.addEventListener("touchstart",n=>{var u;const a=(u=n.touches)==null?void 0:u[0];a&&(Ae=a.clientX,Ke=a.clientY,se=n.target instanceof Element?n.target:null,Ve=L,fe=0,ge=!1)},{passive:!0}),l==null||l.addEventListener("touchmove",n=>{var f;if(Me||!V()||Ve!=="full"||L!=="full")return;const a=(f=n.touches)==null?void 0:f[0];if(!a)return;const u=a.clientX-Ae,M=a.clientY-Ke;if(Math.abs(M)<=Math.abs(u)||M>=0)return;const w=Be();if(!(w instanceof HTMLElement))return;const m=Math.max(140,Math.round(window.innerHeight*.36));fe=Math.max(-m,M),ge=!0,w.classList.add("is-dragging"),ut(fe),n.preventDefault()},{passive:!1}),l==null||l.addEventListener("touchend",n=>{var w;if(!V())return;if(Se){Se=!1,se=null;return}const a=(w=n.changedTouches)==null?void 0:w[0];if(!a)return;const u=a.clientX-Ae,M=a.clientY-Ke;if(ge&&Ve==="full"&&L==="full"){const m=Be();m instanceof HTMLElement&&m.classList.remove("is-dragging");const f=Math.max(72,Math.round(window.innerHeight*.11));if(Math.abs(fe)>=f){he=Date.now()+420,E="",L="split",fe=0,ge=!1,D(),se=null;return}fe=0,ge=!1,ut(0),window.setTimeout(()=>{pt()},280),se=null;return}if(Math.abs(M)<48||Math.abs(M)<=Math.abs(u)){se=null;return}mt(M<0?1:-1,se),se=null},{passive:!0});try{await bt(),D()}catch(n){h.innerHTML='<p class="muted">Unable to load calendar right now.</p>',b.innerHTML="",ue.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',d(0),console.error(n)}}const Na=document.querySelector("#app");Wt();Ia(Na);
