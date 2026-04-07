import{p as Rt,d as Tt,c as Gt}from"./theme-DhME38Lo.js";/* empty css                      */import{e as Wt,a as zt,c as Xt,l as Zt,t as S,g as M,i as Jt,p as ea,m as ta,s as Ct,j as aa,b as na,d as sa,k as la,n as ie,f as ze}from"./branding-BojcsMHH.js";import{n as tt,f as ia}from"./rdwService-CFrMDQAa.js";import{s as At}from"./confirmDialog-DSEC2-zx.js";import{h as oa,n as oe,a as Ht,f as Bt,s as It,b as Be}from"./scheduleTimePicker-q1IARKz3.js";function Ie(){const e=M();return[ie(0,e),ie(1,e),ie(2,e),ie(3,e),ie(4,e),ie(5,e),ie(6,e)]}const ra=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function g(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function da(e=""){return{title:tt(e)||"Unknown vehicle",buildYear:""}}function Ne(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function V(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function A(e){const t=e instanceof Date?e:V(e);if(!t)return"";const n=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${n}-${o}-${i}`}function Pe(e){const t=V(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function ca(e){const t=V(e);if(!t)return"";const n=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${n}-${o}-${i}`}function ua(e){const t=V(e);if(!t)return"09:00";const n=String(t.getHours()).padStart(2,"0"),o=String(t.getMinutes()).padStart(2,"0");return`${n}:${o}`}function qt(e,t){const n=String(e??"").trim(),o=String(t??"").trim();if(!n||!o)return"";const i=`${n}T${o}:00`;return V(i)?i:""}function pa(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function Ye(e){return e==="tr"?"tr-TR":e==="en"?"en-GB":"nl-NL"}function Et(e){return e.toLocaleDateString(Ye(M()),{month:"long",year:"numeric"})}function ma(e){return e.toLocaleDateString(Ye(M()),{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function fa(e){return e.toLocaleDateString(Ye(M()),{weekday:"short",day:"2-digit",month:"short"})}function Fe(e){const t=M(),n=e.toLocaleDateString(Ye(t),{day:"2-digit",month:"short"});return A(e)===A(new Date)?`${S("today",t)}, ${n}`:fa(e)}function ga(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function ha(e){return ga(e.status)==="done"||e.inAppointments===!1}function ba(e){const t=String(e??"").trim();if(!t)return["other"];const n=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(o=>o.trim()).filter(Boolean);return n.length?n:[t]}function ya(e){return ra.get(String(e??"").trim().toLowerCase())??"other"}function va(e){const t=String(e??"").trim(),n=M();if(!t)return{key:"other",label:ze("other",n)};const o=t.toLowerCase(),i=ya(t);if(i==="other"){if(["other","overig","overige"].includes(o))return{key:i,label:ze("other",n)};const u=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:i,label:u||t}}return{key:i,label:ze(i,n)}}function Nt(e){return ba(e).map(t=>{const{key:n,label:o}=va(t);return`<span class="service-chip service-chip-${n}">${g(o)}</span>`}).join("")}function wa(e){const n=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((n==null?void 0:n[1])??"").trim()}const Je="Manual appointment created in dashboard.";function je(e){const n=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((n==null?void 0:n[1])??"").trim()}function ka(e){const t=oe(e),[n,o]=t.split(":"),i=Number(n),u=Number(o);if(!Number.isFinite(i)||!Number.isFinite(u))return"01:00";const d=new Date(2e3,0,1,i,u,0,0);return d.setHours(d.getHours()+1),`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`}function xt(e,t){const n=oe(t);return`${String(e??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${n}`.trim()}function Pt(e){const t=String(e??""),n=t.match(/\bmessage\s*:\s*([\s\S]+)/i),o=n!=null&&n[1]?n[1].trim():t.trim(),i=o.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim();return i||(o.toLowerCase().includes(Je.toLowerCase())?Je:"")}function et(e){const t=Pe((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),n=je(e==null?void 0:e.message);return n?`${t} - ${n}`:t}function ee(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const n=wa(e.message);if(n)return n;const o=String((e==null?void 0:e.licensePlate)??"").trim();return o?Ne(o):"UNKNOWN"}function at(e){return A(e.appointmentAt??e.createdAt)}function Ma(e,t,n){const o=new Date(e.getFullYear(),e.getMonth(),1),i=new Date(e.getFullYear(),e.getMonth()+1,0),u=i.getDate(),d=(o.getDay()+6)%7,p=t.reduce((l,h)=>{const f=at(h);return f&&l.set(f,(l.get(f)??0)+1),l},new Map),r=[];for(let l=d;l>0;l-=1){const h=new Date(o);h.setDate(1-l);const f=A(h);r.push({key:f,date:h,day:h.getDate(),isCurrentMonth:!1,isSelected:f===n,count:p.get(f)??0})}for(let l=1;l<=u;l+=1){const h=new Date(o.getFullYear(),o.getMonth(),l),f=A(h);r.push({key:f,date:h,day:l,isCurrentMonth:!0,isSelected:f===n,count:p.get(f)??0})}for(;r.length%7!==0;){const l=new Date(i),h=r.length-(d+u)+1;l.setDate(i.getDate()+h);const f=A(l);r.push({key:f,date:l,day:l.getDate(),isCurrentMonth:!1,isSelected:f===n,count:p.get(f)??0})}return r}function Yt(e){return e.reduce((t,n)=>{const o=at(n);if(!o)return t;const i=t.get(o)??[];return i.push(n),t.set(o,i),t},new Map)}function we(e){return String((e==null?void 0:e.color)??"#1565C0").trim()||"#1565C0"}function Sa(e){if(String((e==null?void 0:e.message)??"").toLowerCase().includes("all day: yes"))return!0;const n=Pe((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),o=je(e==null?void 0:e.message);return n==="00:00"&&o==="23:59"}function Ft(e){const t=`${ee(e)} ${Pt((e==null?void 0:e.message)??"")}`.toLowerCase();return t.includes("good friday")||t.includes("goede vrijdag")||t.includes("easter")||t.includes("paas")||t.includes("koningsdag")||t.includes("king")}function $a(e){const t=new Date(e.getFullYear(),e.getMonth(),1),n=new Date(e.getFullYear(),e.getMonth()+1,0),o=(t.getDay()+6)%7,i=[];for(let u=o;u>0;u-=1){const d=new Date(t);d.setDate(1-u),i.push(d)}for(let u=1;u<=n.getDate();u+=1)i.push(new Date(t.getFullYear(),t.getMonth(),u));for(;i.length%7!==0;){const u=new Date(n),d=i.length-(o+n.getDate())+1;u.setDate(n.getDate()+d),i.push(u)}return i}function La(e){const t=new Date(e),n=(t.getDay()+6)%7;return t.setDate(t.getDate()-n),Array.from({length:7},(o,i)=>{const u=new Date(t);return u.setDate(t.getDate()+i),u})}function Da(e,t,n,o,i){const u=A(new Date),d=A(n),p=i==="full";return e.map(r=>{const l=A(r),h=o.get(l)??[],f=["calendar-mobile-month-cell"];r.getMonth()!==t.getMonth()&&f.push("is-outside"),l===d&&f.push("is-selected");const Y=p?(()=>{const E=h.slice(0,2),q=h.length-E.length,x=E.map(B=>`<span class="calendar-mobile-month-chip${Ft(B)?" is-holiday":""}" style="--calendar-mobile-chip-color: ${g(we(B))};">${g(ee(B))}</span>`).join(""),R=q>0?`<span class="calendar-mobile-month-more">+${q} more</span>`:"";return`<span class="calendar-mobile-month-chips">${x}${R}</span>`})():`<span class="calendar-mobile-month-lines" aria-hidden="true">${h.slice(0,3).map(E=>`<span class="calendar-mobile-month-line" style="--calendar-mobile-line-color: ${g(we(E))};"></span>`).join("")}</span>`;return`
        <button class="${f.join(" ")}" type="button" data-calendar-cell="${l}">
          <span class="calendar-mobile-month-date ${l===u?"is-today":""}">${r.getDate()}</span>
          ${Y}
        </button>
      `}).join("")}function Xe(e,t,n,o,i=$a(e)){const u=Ie().map(r=>`<span class="calendar-mobile-weekday">${r}</span>`).join(""),d=Da(i,e,t,n,o),p=Math.max(1,Math.ceil(i.length/7));return`
    <div class="calendar-mobile-week-header">${u}</div>
    <div class="calendar-mobile-month-grid" data-mobile-grid-state="${o}" style="--calendar-mobile-grid-rows: ${p};">
      ${d}
    </div>
  `}function Ta(e,t,n){const o=new Date(e),i=(o.getDay()+6)%7;o.setDate(o.getDate()-i);const u=Ie().map(r=>`<span class="calendar-mobile-weekday">${r}</span>`).join(""),d=A(new Date),p=Array.from({length:7},(r,l)=>{const h=new Date(o);h.setDate(o.getDate()+l);const f=A(h),q=(t.get(f)??[]).map(B=>we(B)).slice(0,4),x=["calendar-mobile-week-day"];f===n&&x.push("is-selected"),f===d&&x.push("is-today");const R=q.length?q.map(B=>`<span class="calendar-mobile-week-bar" style="--calendar-mobile-bar-color: ${g(B)};"></span>`).join(""):'<span class="calendar-mobile-week-bar calendar-mobile-week-bar-empty" aria-hidden="true"></span>';return`
      <button class="${x.join(" ")}" type="button" data-calendar-cell="${f}">
        <span class="calendar-mobile-week-daylabel">${Ie()[l]}</span>
        <span class="calendar-mobile-week-date ${f===d?"is-today":""}">${h.getDate()}</span>
        <span class="calendar-mobile-week-bars" aria-hidden="true">${R}</span>
      </button>
    `}).join("");return`
    <div class="calendar-mobile-week-strip" aria-label="Selected week">
      <div class="calendar-mobile-week-header">${u}</div>
      <div class="calendar-mobile-week-days">${p}</div>
    </div>
  `}function Ca(e,t){const n=t.filter(r=>Sa(r)||Ft(r)),i=t.filter(r=>!n.includes(r)).reduce((r,l)=>{const h=Pe(l.appointmentAt??l.createdAt),f=r.get(h)??[];return f.push(l),r.set(h,f),r},new Map),u=[...i.keys()].sort();if(!t.length)return`<div class="calendar-mobile-agenda-empty">${S("noAppointmentsToday",M())}</div>`;const d=n.map(r=>{const l=g(String(r.id??""));return`
        <div class="calendar-mobile-agenda-row is-all-day">
          <div class="calendar-mobile-agenda-time">📅</div>
          <button class="calendar-mobile-agenda-event" style="--calendar-mobile-chip-color: ${g(we(r))};" type="button" data-calendar-mobile-booking-id="${l}">
            <span class="calendar-mobile-agenda-title">${g(ee(r))}</span>
            <span class="calendar-mobile-agenda-subtitle">${S("allDay",M())}</span>
          </button>
        </div>
      `}).join(""),p=u.map(r=>{const h=(i.get(r)??[]).map(f=>{const Y=g(String(f.id??"")),E=je(f.message),q=String(f.licensePlate??"").trim(),x=[E?`${r} - ${E}`:r];return q&&q!=="UNKNOWN"&&x.push(Ne(q)),`
            <button class="calendar-mobile-agenda-event" style="--calendar-mobile-chip-color: ${g(we(f))};" type="button" data-calendar-mobile-booking-id="${Y}">
              <span class="calendar-mobile-agenda-title">${g(ee(f))}</span>
              <span class="calendar-mobile-agenda-subtitle">${g(x.join("  "))}</span>
            </button>
          `}).join("");return`
        <div class="calendar-mobile-agenda-row">
          <div class="calendar-mobile-agenda-time">${r}</div>
          <div class="calendar-mobile-agenda-events">${h}</div>
        </div>
      `}).join("");return`
    <div class="calendar-mobile-agenda">
      <div class="calendar-mobile-agenda-daylabel">${g(Fe(e))}</div>
      ${d}
      ${p}
    </div>
  `}function Aa({monthCursor:e,selectedDate:t,bookingsByDay:n,bookingsForDay:o,mobileLayer:i,animateSplitBottom:u,detailBooking:d,mobileDetailId:p}){A(t);const r=`
    <div class="calendar-mobile-layer-agenda" data-calendar-mobile-agenda-scroll>
      ${Ca(t,o)}
    </div>
  `,l=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-full" data-calendar-mobile-layer="full">
      <div class="calendar-mobile-layer-top">
        ${Xe(e,t,n,"full")}
      </div>
      <div class="calendar-mobile-layer-bottom calendar-mobile-layer-bottom-preview" aria-hidden="true">
        ${r}
      </div>
    </section>
  `,h=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-split" data-calendar-mobile-layer="split">
      <div class="calendar-mobile-layer-top">
        ${Xe(e,t,n,"half")}
      </div>
      <div class="calendar-mobile-layer-bottom${u?" calendar-mobile-layer-bottom-enter":""}">
        ${r}
      </div>
    </section>
  `,f=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-week" data-calendar-mobile-layer="week">
      <div class="calendar-mobile-layer-top">
        ${Xe(e,t,n,"week",La(t))}
      </div>
      <div class="calendar-mobile-layer-bottom">
        ${r}
      </div>
    </section>
  `,Y={full:l,split:h,week:f},q=p&&p.startsWith("__day-detail__")?`
      <div class="calendar-mobile-detail-overlay">
        <div class="calendar-mobile-detail-backdrop" data-calendar-mobile-detail-close></div>
        <article class="calendar-mobile-detail-card">
          <h3 style="margin: 0 0 8px; font-size: 18px;">${g(Fe(t))}</h3>
          <div style="margin-bottom: 12px; font-size: 14px; color: var(--666666);">
            ${o&&o.length>0?o.map(x=>`
                <div style="padding: 8px 0; border-top: 1px solid var(--e6e6e6); cursor: pointer;" data-calendar-mobile-booking-id="${g(String(x.id??""))}">
                  <div style="font-weight: 600; color: var(--333333);">${g(ee(x))}</div>
                  <div>${g(et(x))}</div>
                </div>
              `).join(""):`<div style="padding: 12px; color: var(--999999);">${S("noAppointmentsToday",M())}</div>`}
          </div>
          <div class="calendar-mobile-detail-actions" style="justify-content: flex-end; gap: 8px;">
            <button class="button subtle" type="button" data-calendar-mobile-detail-close>${S("cancel",M())}</button>
          </div>
        </article>
      </div>
    `:d?`
        <div class="calendar-mobile-detail-overlay">
          <div class="calendar-mobile-detail-backdrop" data-calendar-mobile-detail-close></div>
          <article class="calendar-mobile-detail-card">
            <h3>${g(ee(d))}</h3>
            <p>${g(et(d))}</p>
            <div class="calendar-mobile-detail-actions">
              <button class="button subtle" type="button" data-calendar-mobile-detail-close>${S("cancel",M())}</button>
              <button class="button danger" type="button" data-request-action="delete" data-booking-id="${g(String(d.id??""))}">${S("delete",M())}</button>
            </div>
          </article>
        </div>
      `:"";return`
    <div class="calendar-mobile-shell" data-calendar-mobile-layer="${g(i)}">
      ${Y[i]??l}
    </div>
    ${q}
  `}function qa(e){const t=A(e);return`
    <button class="calendar-mobile-addpill" type="button" data-calendar-mobile-quickadd="${t}">
      Toevoegen op ${g(Fe(e))}
    </button>
    <button class="calendar-mobile-fab" type="button" data-calendar-mobile-quickadd="${t}" aria-label="Add event">+</button>
  `}function Ea(e,t,n,o){const i=Ma(e,t,o),u=A(new Date),d=Ie().map(r=>`<span class="month-weekday">${r}</span>`).join(""),p=i.map(r=>{const l=["month-cell"];return r.isCurrentMonth||l.push("is-outside"),r.isSelected&&l.push("is-selected"),r.isCurrentMonth&&r.key===u&&l.push("is-today"),r.count>0&&l.push("has-bookings"),`
        <button class="${l.join(" ")}" type="button" data-calendar-cell="${r.key}">
          <span class="month-cell-day">${r.day}</span>
          ${r.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    ${Ta(n,Yt(t),o)}
    <div class="month-grid-board">
      <div class="month-week-row">${d}</div>
      <div class="month-grid-cells">${p}</div>
    </div>
  `}function xa(e,t){const n=t.reduce((u,d,p)=>{const r=Pe(d.appointmentAt??d.createdAt),l=u.get(r)??[];return l.push({booking:d,index:p}),u.set(r,l),u},new Map),o=[];for(let u=0;u<=23;u+=1)o.push(`${String(u).padStart(2,"0")}:00`),o.push(`${String(u).padStart(2,"0")}:30`);n.forEach((u,d)=>{o.includes(d)||o.push(d)});const i=u=>{const d=String(u).match(/^(\d{2}):(\d{2})$/);if(!d)return Number.POSITIVE_INFINITY;const p=Number(d[1]),r=Number(d[2]);return!Number.isFinite(p)||!Number.isFinite(r)?Number.POSITIVE_INFINITY:p*60+r};return o.sort((u,d)=>i(u)-i(d)),`
    <div class="day-board-list">
      ${o.map(u=>{const d=n.get(u)??[];if(!d.length)return`
              <div class="day-slot-row" data-calendar-slot-time="${g(u)}">
                <span class="day-slot-time">${u}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">${S("available",M())}</span>
              </div>
            `;const p=d.map(({booking:l,index:h},f)=>{const Y=g(String(l.id??"")),E=String(l.licensePlate??"").toUpperCase()==="UNKNOWN",q=g(l.color??"#2563EB"),x=g(l.licensePlate&&l.licensePlate!=="UNKNOWN"?Ne(l.licensePlate):"UNKNOWN"),R=g(ee(l)),B=d.length>1&&f<d.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${Y}">
                <div class="day-slot-plate-wrapper">
                  ${E?`<span class="fast-appt-dot" style="background: ${q}" aria-hidden="true"></span>`:`<span class="plate-chip">${x}</span>`}
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${R}</span>
                  </div>
                  <div class="day-slot-status-services">
                    ${E?'<span class="service-chip service-chip-other">Simple appointment</span>':`${Nt(l.service)}`}
                  </div>
                </div>
              </div>
              ${B?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),r=d.length>1?`<span class="day-slot-count">${d.length} ${S("appointments",M()).toLowerCase()}</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${u}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${r}
                <div class="day-slot-bookings">
                  ${p}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function Ha(e,t,n,o){return e.length?e.map((i,u)=>{const d=String(i.id??""),p=t===d,r=n===d,l=i.appointmentAt??i.createdAt,h=String(i.licensePlate??"").toUpperCase()==="UNKNOWN",f=g(i.color??"#2563EB"),Y=g(i.licensePlate&&i.licensePlate!=="UNKNOWN"?Ne(i.licensePlate):"UNKNOWN"),E=g(et(i)),q=Ht(ca(l)),x=g(q),R=g(Bt(q)),B=oe(ua(l)),te=g(B),ae=oe(je(i.message)||ka(B)),G=g(ae),ke=g(ee(i)),me=i.licensePlate?tt(i.licensePlate):"",Z=o.get(me)||da(i.licensePlate),fe=Z.buildYear?`${Z.title} (${Z.buildYear})`:Z.title,re=g(String(i.phone??"No phone number")),de=g(Pt(i.message)||"No customer message.");return`
        <article class="request-card ${p?"is-expanded":""}" data-calendar-booking-id="${g(d)}">
          <div class="request-card-head">
            <div class="request-main">
              ${h?`<span class="fast-appt-dot" style="background: ${f}" aria-hidden="true"></span>`:`<span class="plate-chip">${Y}</span>`}
              <div class="request-info">
                <p class="request-name"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1668 7.08463C14.1668 4.78345 12.3013 2.91797 10.0002 2.91797C7.69898 2.91797 5.8335 4.78345 5.8335 7.08463C5.8335 9.3858 7.69898 11.2513 10.0002 11.2513C12.3013 11.2513 14.1668 9.3858 14.1668 7.08463Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8332 17.0833C15.8332 13.8617 13.2215 11.25 9.99984 11.25C6.77818 11.25 4.1665 13.8617 4.1665 17.0833" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${ke}</p>
                ${h?"":`<p class="request-vehicle"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50667 14.1667C7.50667 15.0872 6.76048 15.8333 5.84001 15.8333C4.91953 15.8333 4.17334 15.0872 4.17334 14.1667C4.17334 13.2462 4.91953 12.5 5.84001 12.5C6.76048 12.5 7.50667 13.2462 7.50667 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M15.8397 14.1667C15.8397 15.0872 15.0935 15.8333 14.173 15.8333C13.2525 15.8333 12.5063 15.0872 12.5063 14.1667C12.5063 13.2462 13.2525 12.5 14.173 12.5C15.0935 12.5 15.8397 13.2462 15.8397 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M1.67301 8.33464H15.0063M1.67301 8.33464C1.67301 8.98464 1.65635 10.868 1.67634 12.718C1.70632 13.318 1.80624 13.818 4.17444 14.168M1.67301 8.33464C1.85288 6.88464 2.63561 5.16797 3.0353 4.51797M7.50634 8.33464V4.16797M12.4981 14.168H7.5019M1.68634 4.16797H10.1998C10.1998 4.16797 10.6495 4.16797 11.0492 4.20797C11.7987 4.27797 12.4282 4.61797 13.0577 5.46797C13.7242 6.36797 14.2367 7.50797 14.9162 8.11797C16.0454 9.13164 18.1937 8.81797 18.3137 10.968C18.3437 12.068 18.3437 13.268 18.2937 13.468C18.2134 14.0569 17.7593 14.1531 17.1945 14.168C16.7043 14.181 16.1134 14.1447 15.8256 14.168" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
${fe}</p>`}
                <div class="request-services">${Nt(i.service)}</div>
              </div>
            </div>
            <div class="request-meta">
              <span class="request-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${E}</span>
              <button
                class="request-toggle ${p?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${g(d)}"
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
                    <img src="${Tt("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${re}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${Tt("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${de}</span>
                </div>
              </div>

              <div class="request-actions">
                ${r?`
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
                          ${It(q)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${S("fastFrom",M())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${te}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${te}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${Be(B)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${S("fastTo",M())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${G}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${G}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${Be(ae)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${g(d)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${g(d)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${g(d)}" aria-label="Edit booking">✎</button>
                ${r?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${g(d)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${g(d)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments for this date.</p></article>'}function Ze(e){return[...e].sort((t,n)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(n.appointmentAt??n.createdAt).getTime())}async function Ba(e){var gt,ht,bt,yt,vt,wt,kt,Mt;if(!e)return;const t=await Wt();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}zt(t.activeGarage);const n=t.isAdmin?null:[(gt=t.activeGarage)==null?void 0:gt.id].filter(Boolean),o=((ht=t.activeGarage)==null?void 0:ht.id)??((yt=(bt=t.garages)==null?void 0:bt[0])==null?void 0:yt.id)??"",i=String(((vt=t.activeGarage)==null?void 0:vt.calendarStyle)??((wt=t.activeGarage)==null?void 0:wt.calendar_style)??"1"),u=String(((kt=t.activeGarage)==null?void 0:kt.calendarDefaultView)??((Mt=t.activeGarage)==null?void 0:Mt.calendar_default_view)??"month").toLowerCase(),{shell:d,contentArea:p,setUnreadEmailCount:r}=Xt({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:t.user.email,onLogout:Zt,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(d),d.classList.toggle("calendar-style-agenda",i==="2"),p.innerHTML=`
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
                <button id="calendarModeMonth" class="calendar-mode-tab" type="button" data-calendar-mode="month">${S("month",M())}</button>
                <button id="calendarModeDay" class="calendar-mode-tab" type="button" data-calendar-mode="day">${S("day",M())}</button>
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
          <span id="calendarDayCount" class="calendar-day-count">0 ${S("appointments",M()).toLowerCase()}</span>
        </div>

        <div id="calendarDayList" class="request-list"></div>
      </section>
    </section>

    <div id="calendarQuickAddOverlay" class="calendar-quickadd-overlay" hidden>
      <div class="calendar-quickadd-backdrop" data-calendar-quickadd-close></div>
      <section class="calendar-quickadd-modal" role="dialog" aria-modal="true" aria-labelledby="calendarQuickAddTitle">
        <div class="calendar-quickadd-head">
          <h3 id="calendarQuickAddTitle">${S("appointmentTypeFast",M())}</h3>
          <button type="button" class="icon-button" data-calendar-quickadd-close aria-label="Close quick add">✕</button>
        </div>

        <form id="calendarQuickAddForm" class="calendar-quickadd-form" novalidate>
          <label>
            ${S("fastTitle",M())}
            <input id="calendarQuickAddName" name="title" type="text" placeholder="${S("fastTitlePlaceholder",M())}" required />
          </label>

          <div class="calendar-quickadd-row">
            <label>
              ${S("fastDate",M())}
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

          <fieldset class="calendar-quickadd-colors" aria-label="${S("fastColor",M())}">
            <legend>${S("fastColor",M())}</legend>
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
            <span>${S("allDay",M())}</span>
          </label>

          <div id="calendarQuickAddTimeRow" class="calendar-quickadd-time-row">
            <label>
              ${S("fastFrom",M())}
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
              ${S("fastTo",M())}
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
            ${S("fastNote",M())}
            <textarea id="calendarQuickAddNote" name="note" rows="2" placeholder="${S("fastNotePlaceholder",M())}"></textarea>
          </label>

          <div class="manual-appointment-actions">
            <button type="button" class="button subtle" data-calendar-quickadd-close>${S("cancel",M())}</button>
            <button type="submit" class="button">${S("fastSave",M())}</button>
          </div>
          <p id="calendarQuickAddStatus" class="status-text" role="status" aria-live="polite"></p>
        </form>
      </section>
    </div>
  `;const l=p.querySelector("#calendarBoardBody"),h=p.querySelector("#calendarBoardContent"),f=p.querySelector("#calendarMobileAddbarHost"),Y=p.querySelector(".calendar-board-head"),E=p.querySelector("#calendarPeriodLabel"),q=p.querySelector("#calendarModeMonth"),x=p.querySelector("#calendarModeDay"),R=p.querySelector("#calendarDayTitle"),B=p.querySelector("#calendarDayCount"),te=p.querySelector("#calendarDayList"),ae=p.querySelector("#calendarQuickAddOverlay"),G=p.querySelector("#calendarQuickAddForm"),ke=p.querySelector("#calendarQuickAddName"),me=p.querySelector("#calendarQuickAddDatePicker"),Z=p.querySelector("#calendarQuickAddStartPicker"),fe=p.querySelector("#calendarQuickAddEndPicker"),re=p.querySelector("#calendarQuickAddDate"),de=p.querySelector("#calendarQuickAddStart"),Me=p.querySelector("#calendarQuickAddEnd"),J=p.querySelector("#calendarQuickAddAllDay"),Se=p.querySelector("#calendarQuickAddTimeRow"),$e=p.querySelector("#calendarQuickAddStatus"),Ue=()=>{!(l instanceof HTMLElement)||!(Y instanceof HTMLElement)||l.style.setProperty("--calendar-board-head-offset",`${Y.offsetHeight}px`)};let W=[],F=[];const Q=Jt("calendar",{}),jt=V(Q.selectedDate??""),Qe=V(Q.currentMonth??"");let w=jt??new Date,C=Qe?new Date(Qe.getFullYear(),Qe.getMonth(),1):new Date(w.getFullYear(),w.getMonth(),1);const Ut=u==="day"||u==="week"||u==="agenda"?"day":"month";let O=Q.activeMode==="day"||Q.activeMode==="month"?Q.activeMode:Ut,I=String(Q.expandedBookingId??"").trim(),N=String(Q.editingBookingId??"").trim(),nt="",st="",lt=0,it="";const Qt=String(Q.mobileLayer??Q.mobileViewMode??"full");let $={month:"full",split:"split",week:"week",full:"full"}[Qt]??"full",H=String(Q.mobileDetailBookingId??"").trim(),Le=0,Oe=0,ne=null,_e=$,ce=0,ue=!1,Ke=0,De=0,ge=!1,he=$,Te=!1,be=0,ot=$,Ce=A(w);const Ve=new Map,U=()=>window.matchMedia("(max-width: 768px)").matches,Ae=(s=1)=>{const a=["full","split","week"],c=a.indexOf($),y=Math.min(a.length-1,Math.max(0,c+s));$=a[y]??"full"},Ot=(s,a)=>{const c=s instanceof Element?s.closest("[data-calendar-mobile-agenda-scroll]"):null;return!(c instanceof HTMLElement)||c.scrollHeight<=c.clientHeight+2?!0:a>0?Math.ceil(c.scrollTop+c.clientHeight)>=c.scrollHeight:c.scrollTop<=0},qe=()=>h.querySelector(".calendar-mobile-layer-full"),rt=s=>{const a=qe();a instanceof HTMLElement&&a.style.setProperty("--calendar-mobile-full-drag-offset",`${s}px`)},dt=()=>{const s=qe();s instanceof HTMLElement&&(s.classList.remove("is-dragging"),s.style.removeProperty("--calendar-mobile-full-drag-offset"))},_t=()=>{if(!U())return;const s=h.querySelector(".calendar-mobile-layer-top");if(!(s instanceof HTMLElement))return;const a=h.querySelector(".calendar-mobile-layer-bottom");s.addEventListener("touchstart",c=>{var b;const y=(b=c.touches)==null?void 0:b[0];y&&(Ke=y.clientY,De=y.clientY,he=$,ge=!0,Te=!1)},{passive:!0}),s.addEventListener("touchmove",c=>{var z,_,K;if(!ge)return;const y=(z=c.touches)==null?void 0:z[0];if(!y)return;De=y.clientY;const b=De-Ke,m=(((K=(_=c.touches)==null?void 0:_[0])==null?void 0:K.clientX)??0)-Le;if(Math.abs(b)<=Math.abs(m))return;const v=b>0&&he!=="full",D=b<0&&he!=="week";!v&&!D||s.scrollTop<=0&&(c.preventDefault(),s.style.transition="",s.style.transform=`translateY(${b}px)`,a instanceof HTMLElement&&(a.style.transition="",a.style.transform=`translateY(${b}px)`))},{passive:!1}),s.addEventListener("touchend",()=>{if(!ge)return;ge=!1;const c=De-Ke,y=c>0&&he!=="full",b=c<0&&he!=="week";if(s.scrollTop>0||!y&&!b){s.style.transform="",a instanceof HTMLElement&&(a.style.transform="");return}if(Te=!0,Math.abs(c)>120){const m=c<0?1:-1,v=$;if(Ae(m),$!==v){be=Date.now()+360,H="",L();return}}s.style.transition="transform 0.25s ease",s.style.transform="translateY(0)",a instanceof HTMLElement&&(a.style.transition="transform 0.25s ease",a.style.transform="translateY(0)"),window.setTimeout(()=>{s.style.transition="",a instanceof HTMLElement&&(a.style.transition="")},250)},{passive:!0})},ct=(s,a)=>{if(!U())return!1;const c=Date.now();if(c<be||!Ot(a,s))return!1;const y=$;if(y==="full"&&s>0){const b=h.querySelector('.calendar-mobile-month-grid[data-mobile-grid-state="full"]');if(b instanceof HTMLElement)return b.classList.add("is-shrinking-to-split"),be=c+520,window.setTimeout(()=>{$==="full"&&(Ae(s),H="",L())},280),!0}return Ae(s),y===$?!1:(be=c+280,H="",L(),!0)},Re=s=>{if(U()){if($==="week")w=new Date(w.getFullYear(),w.getMonth(),w.getDate()+s*7),C=new Date(w.getFullYear(),w.getMonth(),1);else{const c=new Date(C);c.setMonth(C.getMonth()+s),C=new Date(c.getFullYear(),c.getMonth(),1),(w.getMonth()!==C.getMonth()||w.getFullYear()!==C.getFullYear())&&(w=new Date(C.getFullYear(),C.getMonth(),1))}return}if(O==="month"){const c=new Date(C);c.setMonth(C.getMonth()+s),C=new Date(c.getFullYear(),c.getMonth(),1);return}const a=new Date(w);a.setDate(w.getDate()+s),w=a,C=new Date(w.getFullYear(),w.getMonth(),1)},ut=s=>{const a=String(s.getHours()).padStart(2,"0"),c=String(s.getMinutes()).padStart(2,"0");return`${a}:${c}`},pt=(s,a,c)=>{const y=Ht(s),b=oe(a),m=oe(c);if(re instanceof HTMLInputElement&&(re.value=y),me instanceof HTMLElement){const v=me.querySelector("[data-schedule-date-label]"),D=me.querySelector("[data-schedule-date-options]");v instanceof HTMLElement&&(v.textContent=Bt(y)),D instanceof HTMLElement&&(D.innerHTML=It(y))}if(de instanceof HTMLInputElement&&(de.value=b),Z instanceof HTMLElement){const v=Z.querySelector("[data-schedule-time-label]"),D=Z.querySelector("[data-schedule-time-options]");v instanceof HTMLElement&&(v.textContent=b),D instanceof HTMLElement&&(D.innerHTML=Be(b))}if(Me instanceof HTMLInputElement&&(Me.value=m),fe instanceof HTMLElement){const v=fe.querySelector("[data-schedule-time-label]"),D=fe.querySelector("[data-schedule-time-options]");v instanceof HTMLElement&&(v.textContent=m),D instanceof HTMLElement&&(D.innerHTML=Be(m))}},se=(s,a="")=>{$e instanceof HTMLElement&&($e.textContent=String(s??""),$e.classList.remove("error","warning"),(a==="error"||a==="warning")&&$e.classList.add(a))},mt=()=>{ae instanceof HTMLElement&&(ae.hidden=!0,se(""))},Ge=(s,a)=>{if(!(ae instanceof HTMLElement))return;Ce=String(s??A(w));let c,y;if(a){const[b,m]=a.split(":").map(Number),v=b*60+m+60;c=a,y=`${String(Math.floor(v/60)%24).padStart(2,"0")}:${String(v%60).padStart(2,"0")}`}else{const b=new Date,m=new Date(b.getTime()+60*60*1e3);c=ut(b),y=ut(m)}pt(Ce,c,y),J instanceof HTMLInputElement&&(J.checked=!1),Se instanceof HTMLElement&&Se.classList.remove("is-hidden"),ae.hidden=!1,se(""),window.requestAnimationFrame(()=>{ke instanceof HTMLInputElement&&ke.focus()})};J==null||J.addEventListener("change",()=>{const s=J.checked;if(de instanceof HTMLInputElement&&(de.disabled=s),Me instanceof HTMLInputElement&&(Me.disabled=s),s){const a=re instanceof HTMLInputElement?re.value:Ce;pt(a,"00:00","23:59")}Se instanceof HTMLElement&&Se.classList.toggle("is-hidden",s)});const ft=async()=>{const[s,a]=await Promise.all([na({garageIds:n}),sa({garageIds:n})]),c=new Set(a.map(m=>String(m.bookingId??m.id??"").trim()).filter(Boolean));W=s;const y=new Set(W.map(m=>m.licensePlate).filter(m=>m&&m!=="UNKNOWN").map(m=>tt(m)));for(const m of y)if(m&&!Ve.has(m))try{const v=await ia(m);v&&Ve.set(m,v)}catch(v){console.error(`Failed to fetch vehicle for ${m}:`,v)}F=Ze(W.filter(m=>{const v=String(m.id??"").trim();return m.inAppointments===!0&&!ha(m)&&!c.has(v)}));const b=Ct(W);r(b.unread)},Kt=()=>{la("calendar",{selectedDate:w.toISOString(),currentMonth:C.toISOString(),activeMode:O,mobileLayer:$,mobileViewMode:$,mobileDetailBookingId:H,expandedBookingId:I,editingBookingId:N})},Vt=()=>{const s=A(w);return F.filter(a=>at(a)===s).sort((a,c)=>new Date(a.appointmentAt??a.createdAt).getTime()-new Date(c.appointmentAt??c.createdAt).getTime())},L=()=>{const s=A(w),a=Vt(),c=Yt(F),y=U(),b=O==="day"&&(nt!=="day"||st!==s);if(q.classList.toggle("is-active",O==="month"),x.classList.toggle("is-active",O==="day"),I&&!a.some(m=>String(m.id)===I)&&(I="",N=""),N&&!a.some(m=>String(m.id)===N)&&(N=""),H&&!H.startsWith("__day-detail__")&&!F.some(m=>String(m.id)===H)&&(H=""),y){const m=ot==="full"&&$==="split";E.textContent=Et(C).toUpperCase();const v=H&&!H.startsWith("__day-detail__")?F.find(D=>String(D.id)===H)??null:null;if(h.innerHTML=Aa({monthCursor:C,selectedDate:w,bookingsByDay:c,bookingsForDay:a,mobileLayer:$,animateSplitBottom:m,detailBooking:v,mobileDetailId:H}),f.innerHTML=qa(w),ue||dt(),m){const D=h.querySelector(".calendar-mobile-layer-bottom-enter");D instanceof HTMLElement&&window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{D.classList.remove("calendar-mobile-layer-bottom-enter")})})}_t(),ot=$}else O==="month"?(E.textContent=Et(C),h.innerHTML=Ea(C,F,w,s),f.innerHTML=""):(E.textContent=ma(w),h.innerHTML=xa(w,a),f.innerHTML="",b&&window.requestAnimationFrame(()=>{const m=h.querySelector(".day-board-list");if(!(m instanceof HTMLElement))return;const v=m.querySelector(".day-slot-row.has-booking");if(v instanceof HTMLElement){const D=l.getBoundingClientRect(),z=v.getBoundingClientRect(),_=l.scrollTop+(z.top-D.top)-8;l.scrollTo({top:Math.max(0,_),behavior:"auto"})}else l.scrollTo({top:0,behavior:"auto"})}));R.textContent=Fe(w),B.textContent=`${a.length} ${S("appointments",M()).toLowerCase()}`,te.innerHTML=Ha(a,I,N,Ve),window.requestAnimationFrame(Ue),nt=O,st=s,Kt()};p.addEventListener("click",async s=>{const a=s.target instanceof Element?s.target:null;if(!a)return;if(a.closest("[data-calendar-quickadd-close]")instanceof HTMLElement){mt();return}if(a.closest("[data-calendar-mobile-detail-close]")instanceof HTMLElement){H="",L();return}const b=a.closest("[data-calendar-mobile-quickadd]");if(b instanceof HTMLElement){const k=String(b.dataset.calendarMobileQuickadd??A(w));Ge(k);return}if(a.closest("[data-calendar-mobile-cycle]")instanceof HTMLElement&&U()){Ae(),L();return}if(oa(p,a))return;const v=a.closest("[data-calendar-nav]");if(v instanceof HTMLElement){const k=v.dataset.calendarNav;Re(k==="next"?1:-1),L();return}const D=a.closest("[data-calendar-mode]");if(D instanceof HTMLElement){O=D.dataset.calendarMode==="day"?"day":"month",L();return}const z=a.closest("[data-calendar-cell]");if(z instanceof HTMLElement){const k=z.dataset.calendarCell;if(k){const T=Date.now(),X=k===it&&T-lt<=450;it=k,lt=T;const j=V(`${k}T12:00:00`);j&&(w=j,C=new Date(w.getFullYear(),w.getMonth(),1),U()&&$==="full"&&(H=`__day-detail__${k}`),L(),!U()&&X&&O==="month"&&Ge(k))}return}const _=a.closest("[data-calendar-slot-time]");if(_ instanceof HTMLElement&&O==="day"){const k=String(_.dataset.calendarSlotTime??"");k&&Ge(A(w),k);return}const K=a.closest("[data-calendar-mobile-booking-id]");if(K instanceof HTMLElement){const k=String(K.dataset.calendarMobileBookingId??"");k&&(H=k,L());return}const ye=a.closest("[data-day-slot-booking-id]");if(ye instanceof HTMLElement){const k=String(ye.dataset.daySlotBookingId??"");k&&(I=k,N="",L(),window.requestAnimationFrame(()=>{const T=[...te.querySelectorAll("[data-calendar-booking-id]")].find(X=>X instanceof HTMLElement&&String(X.dataset.calendarBookingId??"")===k);T instanceof HTMLElement&&T.scrollIntoView({behavior:"smooth",block:"start"})}));return}const Ee=a.closest("[data-calendar-toggle]");if(Ee instanceof HTMLElement){const k=String(Ee.dataset.calendarToggle??"");I=I===k?"":k,I!==k&&(N=""),L();return}const xe=a.closest("[data-calendar-action]");if(xe instanceof HTMLElement){const k=String(xe.dataset.calendarAction??""),T=String(xe.dataset.bookingId??"");if(!T)return;if(k==="edit"){I=T,N=N===T?"":T,L();return}if(k==="cancel-edit"){N="",L();return}if(k==="save-schedule"){const j=xe.closest("[data-calendar-booking-id]");if(!(j instanceof HTMLElement))return;const le=F.find(P=>String(P.id)===T);if(!le)return;const pe=j.querySelector("[data-schedule-edit-date]"),$t=j.querySelector("[data-schedule-edit-start-time]"),Lt=j.querySelector("[data-schedule-edit-end-time]");if(!(pe instanceof HTMLInputElement)||!($t instanceof HTMLInputElement)||!(Lt instanceof HTMLInputElement))return;const ve=qt(pe.value,$t.value),Dt=oe(Lt.value);if(!ve)return;try{await ea(le,ve)}catch(P){window.alert(P instanceof Error?P.message:"Unable to save the appointment schedule.");return}W=Ze(W.map(P=>String(P.id)===T?{...P,appointmentAt:ve,message:xt(P.message,Dt)}:P)),F=Ze(F.map(P=>String(P.id)===T?{...P,appointmentAt:ve,message:xt(P.message,Dt)}:P));const He=V(ve);He&&(w=He,C=new Date(He.getFullYear(),He.getMonth(),1)),N="",I=T,L();return}if(!F.find(j=>String(j.id)===T))return;L();return}const We=a.closest("[data-request-action]");if(We instanceof HTMLElement){const k=String(We.dataset.requestAction??""),T=String(We.dataset.bookingId??"");if(!T)return;const X=F.find(j=>String(j.id)===T);if(!X)return;if(k==="complete"){(async()=>{if(await At("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await ta(X,{convertedFromEmail:X.source!=="manual"})}catch(le){window.alert(le instanceof Error?le.message:"Unable to mark appointment as completed.");return}window.location.href=Rt("completed.html")}})();return}if(k==="delete"){(async()=>{if(!await At("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;W=W.filter(pe=>String(pe.id)!==T),F=F.filter(pe=>String(pe.id)!==T),N="",H===T&&(H="");const le=Ct(W);r(le.unread),L()})();return}}const St=a.closest("[data-calendar-booking-id]");if(St instanceof HTMLElement&&!pa(a)){const k=String(St.dataset.calendarBookingId??"");if(!k)return;I=I===k?"":k,I!==k&&(N=""),L()}}),window.addEventListener("resize",Ue),Ue(),G==null||G.addEventListener("submit",async s=>{if(s.preventDefault(),!o){se("No garage available for quick appointment creation.","warning");return}const a=new FormData(G),c=String(a.get("title")??"").trim(),y=String(a.get("date")??Ce).trim(),b=J instanceof HTMLInputElement?J.checked:!1,m=b?"00:00":String(a.get("start")??"").trim(),v=b?"23:59":String(a.get("end")??"").trim(),D=String(a.get("color")??"#2563EB").trim(),z=String(a.get("note")??"").trim();if(!c||!y||!m||!v){se("Please fill all required fields.","warning");return}const _=qt(y,m);if(!_){se("Invalid date/time.","warning");return}const K=G.querySelector("button[type='submit']");K instanceof HTMLButtonElement&&(K.disabled=!0),se("Adding appointment...");try{await aa({garageId:o,name:c,licensePlate:"UNKNOWN",phone:"0000000000",service:"Simple appointment",message:`Name: ${c}
Message: ${z||Je}${b?`
All day: yes`:""}
Until: ${v}`,color:D,appointmentAt:_}),w=V(`${y}T12:00:00`)??w,C=new Date(w.getFullYear(),w.getMonth(),1),I="",N="",await ft(),L(),G.reset(),mt()}catch(ye){const Ee=ye instanceof Error?ye.message:"Unable to add appointment.";se(Ee,"error")}finally{K instanceof HTMLButtonElement&&(K.disabled=!1)}}),window.addEventListener("keydown",s=>{U()&&(s.key==="ArrowLeft"&&(Re(-1),L()),s.key==="ArrowRight"&&(Re(1),L()))}),l==null||l.addEventListener("wheel",s=>{!U()||Math.abs(s.deltaY)<12||ct(s.deltaY>0?1:-1,s.target)&&s.preventDefault()},{passive:!1}),l==null||l.addEventListener("touchstart",s=>{var c;const a=(c=s.touches)==null?void 0:c[0];a&&(Le=a.clientX,Oe=a.clientY,ne=s.target instanceof Element?s.target:null,_e=$,ce=0,ue=!1)},{passive:!0}),l==null||l.addEventListener("touchmove",s=>{var v;if(ge||!U()||_e!=="full"||$!=="full")return;const a=(v=s.touches)==null?void 0:v[0];if(!a)return;const c=a.clientX-Le,y=a.clientY-Oe;if(Math.abs(y)<=Math.abs(c)||y>=0)return;const b=qe();if(!(b instanceof HTMLElement))return;const m=Math.max(140,Math.round(window.innerHeight*.36));ce=Math.max(-m,y),ue=!0,b.classList.add("is-dragging"),rt(ce),s.preventDefault()},{passive:!1}),l==null||l.addEventListener("touchend",s=>{var b;if(!U())return;if(Te){Te=!1,ne=null;return}const a=(b=s.changedTouches)==null?void 0:b[0];if(!a)return;const c=a.clientX-Le,y=a.clientY-Oe;if(ue&&_e==="full"&&$==="full"){const m=qe();m instanceof HTMLElement&&m.classList.remove("is-dragging");const v=Math.max(72,Math.round(window.innerHeight*.11));if(Math.abs(ce)>=v){be=Date.now()+420,H="",$="split",ce=0,ue=!1,L(),ne=null;return}ce=0,ue=!1,rt(0),window.setTimeout(()=>{dt()},280),ne=null;return}if(Math.abs(y)<48||Math.abs(y)<=Math.abs(c)){ne=null;return}ct(y<0?1:-1,ne),ne=null},{passive:!0});try{await ft(),L()}catch(s){h.innerHTML='<p class="muted">Unable to load calendar right now.</p>',f.innerHTML="",te.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',r(0),console.error(s)}}const Ia=document.querySelector("#app");Gt();Ba(Ia);
