import{p as Qt,d as Mt,c as Ut}from"./theme-DhME38Lo.js";/* empty css                      */import{e as Ot,a as _t,c as Kt,l as Vt,t as S,g as w,i as Rt,p as Gt,m as Wt,s as St,j as zt,b as Xt,d as Zt,k as Jt,n as se,f as Ke}from"./branding-BojcsMHH.js";import{n as ze,f as ea}from"./rdwService-CFrMDQAa.js";import{s as $t}from"./confirmDialog-DSEC2-zx.js";import{h as ta,n as le,a as Ct,f as At,s as qt,b as Ce}from"./scheduleTimePicker-q1IARKz3.js";function Ae(){const e=w();return[se(0,e),se(1,e),se(2,e),se(3,e),se(4,e),se(5,e),se(6,e)]}const aa=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function f(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function na(e=""){return{title:ze(e)||"Unknown vehicle",buildYear:""}}function qe(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function _(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function C(e){const t=e instanceof Date?e:_(e);if(!t)return"";const a=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0");return`${a}-${i}-${l}`}function xe(e){const t=_(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function sa(e){const t=_(e);if(!t)return"";const a=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0");return`${a}-${i}-${l}`}function la(e){const t=_(e);if(!t)return"09:00";const a=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0");return`${a}:${i}`}function Lt(e,t){const a=String(e??"").trim(),i=String(t??"").trim();if(!a||!i)return"";const l=`${a}T${i}:00`;return _(l)?l:""}function ia(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function Ee(e){return e==="tr"?"tr-TR":e==="en"?"en-GB":"nl-NL"}function Dt(e){return e.toLocaleDateString(Ee(w()),{month:"long",year:"numeric"})}function oa(e){return e.toLocaleDateString(Ee(w()),{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function ra(e){return e.toLocaleDateString(Ee(w()),{weekday:"short",day:"2-digit",month:"short"})}function He(e){const t=w(),a=e.toLocaleDateString(Ee(t),{day:"2-digit",month:"short"});return C(e)===C(new Date)?`${S("today",t)}, ${a}`:ra(e)}function da(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function ca(e){return da(e.status)==="done"||e.inAppointments===!1}function ua(e){const t=String(e??"").trim();if(!t)return["other"];const a=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(i=>i.trim()).filter(Boolean);return a.length?a:[t]}function pa(e){return aa.get(String(e??"").trim().toLowerCase())??"other"}function ma(e){const t=String(e??"").trim(),a=w();if(!t)return{key:"other",label:Ke("other",a)};const i=t.toLowerCase(),l=pa(t);if(l==="other"){if(["other","overig","overige"].includes(i))return{key:l,label:Ke("other",a)};const c=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:l,label:c||t}}return{key:l,label:Ke(l,a)}}function xt(e){return ua(e).map(t=>{const{key:a,label:i}=ma(t);return`<span class="service-chip service-chip-${a}">${f(i)}</span>`}).join("")}function ga(e){const a=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((a==null?void 0:a[1])??"").trim()}const Ge="Manual appointment created in dashboard.";function Be(e){const a=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((a==null?void 0:a[1])??"").trim()}function fa(e){const t=le(e),[a,i]=t.split(":"),l=Number(a),c=Number(i);if(!Number.isFinite(l)||!Number.isFinite(c))return"01:00";const d=new Date(2e3,0,1,l,c,0,0);return d.setHours(d.getHours()+1),`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`}function Tt(e,t){const a=le(t);return`${String(e??"").trim().replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()}
Until: ${a}`.trim()}function Et(e){const t=String(e??""),a=t.match(/\bmessage\s*:\s*([\s\S]+)/i),i=a!=null&&a[1]?a[1].trim():t.trim(),l=i.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim();return l||(i.toLowerCase().includes(Ge.toLowerCase())?Ge:"")}function We(e){const t=xe((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),a=Be(e==null?void 0:e.message);return a?`${t} - ${a}`:t}function X(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const a=ga(e.message);if(a)return a;const i=String((e==null?void 0:e.licensePlate)??"").trim();return i?qe(i):"UNKNOWN"}function Xe(e){return C(e.appointmentAt??e.createdAt)}function ha(e,t,a){const i=new Date(e.getFullYear(),e.getMonth(),1),l=new Date(e.getFullYear(),e.getMonth()+1,0),c=l.getDate(),d=(i.getDay()+6)%7,u=t.reduce((s,h)=>{const g=Xe(h);return g&&s.set(g,(s.get(g)??0)+1),s},new Map),r=[];for(let s=d;s>0;s-=1){const h=new Date(i);h.setDate(1-s);const g=C(h);r.push({key:g,date:h,day:h.getDate(),isCurrentMonth:!1,isSelected:g===a,count:u.get(g)??0})}for(let s=1;s<=c;s+=1){const h=new Date(i.getFullYear(),i.getMonth(),s),g=C(h);r.push({key:g,date:h,day:s,isCurrentMonth:!0,isSelected:g===a,count:u.get(g)??0})}for(;r.length%7!==0;){const s=new Date(l),h=r.length-(d+c)+1;s.setDate(l.getDate()+h);const g=C(s);r.push({key:g,date:s,day:s.getDate(),isCurrentMonth:!1,isSelected:g===a,count:u.get(g)??0})}return r}function Ht(e){return e.reduce((t,a)=>{const i=Xe(a);if(!i)return t;const l=t.get(i)??[];return l.push(a),t.set(i,l),t},new Map)}function be(e){return String((e==null?void 0:e.color)??"#1565C0").trim()||"#1565C0"}function ba(e){if(String((e==null?void 0:e.message)??"").toLowerCase().includes("all day: yes"))return!0;const a=xe((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),i=Be(e==null?void 0:e.message);return a==="00:00"&&i==="23:59"}function Bt(e){const t=`${X(e)} ${Et((e==null?void 0:e.message)??"")}`.toLowerCase();return t.includes("good friday")||t.includes("goede vrijdag")||t.includes("easter")||t.includes("paas")||t.includes("koningsdag")||t.includes("king")}function ya(e){const t=new Date(e.getFullYear(),e.getMonth(),1),a=new Date(e.getFullYear(),e.getMonth()+1,0),i=(t.getDay()+6)%7,l=[];for(let c=i;c>0;c-=1){const d=new Date(t);d.setDate(1-c),l.push(d)}for(let c=1;c<=a.getDate();c+=1)l.push(new Date(t.getFullYear(),t.getMonth(),c));for(;l.length%7!==0;){const c=new Date(a),d=l.length-(i+a.getDate())+1;c.setDate(a.getDate()+d),l.push(c)}return l}function va(e){const t=new Date(e),a=(t.getDay()+6)%7;return t.setDate(t.getDate()-a),Array.from({length:7},(i,l)=>{const c=new Date(t);return c.setDate(t.getDate()+l),c})}function wa(e,t,a,i,l){const c=C(new Date),d=C(a),u=l==="full";return e.map(r=>{const s=C(r),h=i.get(s)??[],g=["calendar-mobile-month-cell"];r.getMonth()!==t.getMonth()&&g.push("is-outside"),s===d&&g.push("is-selected");const F=u?(()=>{const q=h.slice(0,2),A=h.length-q.length,x=q.map(B=>`<span class="calendar-mobile-month-chip${Bt(B)?" is-holiday":""}" style="--calendar-mobile-chip-color: ${f(be(B))};">${f(X(B))}</span>`).join(""),K=A>0?`<span class="calendar-mobile-month-more">+${A} more</span>`:"";return`<span class="calendar-mobile-month-chips">${x}${K}</span>`})():`<span class="calendar-mobile-month-lines" aria-hidden="true">${h.slice(0,3).map(q=>`<span class="calendar-mobile-month-line" style="--calendar-mobile-line-color: ${f(be(q))};"></span>`).join("")}</span>`;return`
        <button class="${g.join(" ")}" type="button" data-calendar-cell="${s}">
          <span class="calendar-mobile-month-date ${s===c?"is-today":""}">${r.getDate()}</span>
          ${F}
        </button>
      `}).join("")}function Ve(e,t,a,i,l=ya(e)){const c=Ae().map(r=>`<span class="calendar-mobile-weekday">${r}</span>`).join(""),d=wa(l,e,t,a,i),u=Math.max(1,Math.ceil(l.length/7));return`
    <div class="calendar-mobile-week-header">${c}</div>
    <div class="calendar-mobile-month-grid" data-mobile-grid-state="${i}" style="--calendar-mobile-grid-rows: ${u};">
      ${d}
    </div>
  `}function ka(e,t,a){const i=new Date(e),l=(i.getDay()+6)%7;i.setDate(i.getDate()-l);const c=Ae().map(r=>`<span class="calendar-mobile-weekday">${r}</span>`).join(""),d=C(new Date),u=Array.from({length:7},(r,s)=>{const h=new Date(i);h.setDate(i.getDate()+s);const g=C(h),A=(t.get(g)??[]).map(B=>be(B)).slice(0,4),x=["calendar-mobile-week-day"];g===a&&x.push("is-selected"),g===d&&x.push("is-today");const K=A.length?A.map(B=>`<span class="calendar-mobile-week-bar" style="--calendar-mobile-bar-color: ${f(B)};"></span>`).join(""):'<span class="calendar-mobile-week-bar calendar-mobile-week-bar-empty" aria-hidden="true"></span>';return`
      <button class="${x.join(" ")}" type="button" data-calendar-cell="${g}">
        <span class="calendar-mobile-week-daylabel">${Ae()[s]}</span>
        <span class="calendar-mobile-week-date ${g===d?"is-today":""}">${h.getDate()}</span>
        <span class="calendar-mobile-week-bars" aria-hidden="true">${K}</span>
      </button>
    `}).join("");return`
    <div class="calendar-mobile-week-strip" aria-label="Selected week">
      <div class="calendar-mobile-week-header">${c}</div>
      <div class="calendar-mobile-week-days">${u}</div>
    </div>
  `}function Ma(e,t){const a=t.filter(r=>ba(r)||Bt(r)),l=t.filter(r=>!a.includes(r)).reduce((r,s)=>{const h=xe(s.appointmentAt??s.createdAt),g=r.get(h)??[];return g.push(s),r.set(h,g),r},new Map),c=[...l.keys()].sort();if(!t.length)return`<div class="calendar-mobile-agenda-empty">${S("noAppointmentsToday",w())}</div>`;const d=a.map(r=>{const s=f(String(r.id??""));return`
        <div class="calendar-mobile-agenda-row is-all-day">
          <div class="calendar-mobile-agenda-time">📅</div>
          <button class="calendar-mobile-agenda-event" style="--calendar-mobile-chip-color: ${f(be(r))};" type="button" data-calendar-mobile-booking-id="${s}">
            <span class="calendar-mobile-agenda-title">${f(X(r))}</span>
            <span class="calendar-mobile-agenda-subtitle">${S("allDay",w())}</span>
          </button>
        </div>
      `}).join(""),u=c.map(r=>{const h=(l.get(r)??[]).map(g=>{const F=f(String(g.id??"")),q=Be(g.message),A=String(g.licensePlate??"").trim(),x=[q?`${r} - ${q}`:r];return A&&A!=="UNKNOWN"&&x.push(qe(A)),`
            <button class="calendar-mobile-agenda-event" style="--calendar-mobile-chip-color: ${f(be(g))};" type="button" data-calendar-mobile-booking-id="${F}">
              <span class="calendar-mobile-agenda-title">${f(X(g))}</span>
              <span class="calendar-mobile-agenda-subtitle">${f(x.join("  "))}</span>
            </button>
          `}).join("");return`
        <div class="calendar-mobile-agenda-row">
          <div class="calendar-mobile-agenda-time">${r}</div>
          <div class="calendar-mobile-agenda-events">${h}</div>
        </div>
      `}).join("");return`
    <div class="calendar-mobile-agenda">
      <div class="calendar-mobile-agenda-daylabel">${f(He(e))}</div>
      ${d}
      ${u}
    </div>
  `}function Sa({monthCursor:e,selectedDate:t,bookingsByDay:a,bookingsForDay:i,mobileLayer:l,animateSplitBottom:c,detailBooking:d,mobileDetailId:u}){C(t);const r=`
    <div class="calendar-mobile-layer-agenda" data-calendar-mobile-agenda-scroll>
      ${Ma(t,i)}
    </div>
  `,s=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-full" data-calendar-mobile-layer="full">
      <div class="calendar-mobile-layer-top">
        ${Ve(e,t,a,"full")}
      </div>
      <div class="calendar-mobile-layer-bottom calendar-mobile-layer-bottom-preview" aria-hidden="true">
        ${r}
      </div>
    </section>
  `,h=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-split" data-calendar-mobile-layer="split">
      <div class="calendar-mobile-layer-top">
        ${Ve(e,t,a,"half")}
      </div>
      <div class="calendar-mobile-layer-bottom${c?" calendar-mobile-layer-bottom-enter":""}">
        ${r}
      </div>
    </section>
  `,g=`
    <section class="calendar-mobile-view-panel calendar-mobile-layer calendar-mobile-layer-week" data-calendar-mobile-layer="week">
      <div class="calendar-mobile-layer-top">
        ${Ve(e,t,a,"week",va(t))}
      </div>
      <div class="calendar-mobile-layer-bottom">
        ${r}
      </div>
    </section>
  `,F={full:s,split:h,week:g},A=u&&u.startsWith("__day-detail__")?`
      <div class="calendar-mobile-detail-overlay">
        <div class="calendar-mobile-detail-backdrop" data-calendar-mobile-detail-close></div>
        <article class="calendar-mobile-detail-card">
          <h3 style="margin: 0 0 8px; font-size: 18px;">${f(He(t))}</h3>
          <div style="margin-bottom: 12px; font-size: 14px; color: var(--666666);">
            ${i&&i.length>0?i.map(x=>`
                <div style="padding: 8px 0; border-top: 1px solid var(--e6e6e6); cursor: pointer;" data-calendar-mobile-booking-id="${f(String(x.id??""))}">
                  <div style="font-weight: 600; color: var(--333333);">${f(X(x))}</div>
                  <div>${f(We(x))}</div>
                </div>
              `).join(""):`<div style="padding: 12px; color: var(--999999);">${S("noAppointmentsToday",w())}</div>`}
          </div>
          <div class="calendar-mobile-detail-actions" style="justify-content: flex-end; gap: 8px;">
            <button class="button subtle" type="button" data-calendar-mobile-detail-close>${S("cancel",w())}</button>
          </div>
        </article>
      </div>
    `:d?`
        <div class="calendar-mobile-detail-overlay">
          <div class="calendar-mobile-detail-backdrop" data-calendar-mobile-detail-close></div>
          <article class="calendar-mobile-detail-card">
            <h3>${f(X(d))}</h3>
            <p>${f(We(d))}</p>
            <div class="calendar-mobile-detail-actions">
              <button class="button subtle" type="button" data-calendar-mobile-detail-close>${S("cancel",w())}</button>
              <button class="button danger" type="button" data-request-action="delete" data-booking-id="${f(String(d.id??""))}">${S("delete",w())}</button>
            </div>
          </article>
        </div>
      `:"";return`
    <div class="calendar-mobile-shell" data-calendar-mobile-layer="${f(l)}">
      ${F[l]??s}
    </div>
    ${A}
  `}function $a(e){const t=C(e);return`
    <button class="calendar-mobile-addpill" type="button" data-calendar-mobile-quickadd="${t}">
      Toevoegen op ${f(He(e))}
    </button>
    <button class="calendar-mobile-fab" type="button" data-calendar-mobile-quickadd="${t}" aria-label="Add event">+</button>
  `}function La(e,t,a,i){const l=ha(e,t,i),c=C(new Date),d=Ae().map(r=>`<span class="month-weekday">${r}</span>`).join(""),u=l.map(r=>{const s=["month-cell"];return r.isCurrentMonth||s.push("is-outside"),r.isSelected&&s.push("is-selected"),r.isCurrentMonth&&r.key===c&&s.push("is-today"),r.count>0&&s.push("has-bookings"),`
        <button class="${s.join(" ")}" type="button" data-calendar-cell="${r.key}">
          <span class="month-cell-day">${r.day}</span>
          ${r.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    ${ka(a,Ht(t),i)}
    <div class="month-grid-board">
      <div class="month-week-row">${d}</div>
      <div class="month-grid-cells">${u}</div>
    </div>
  `}function Da(e,t){const a=t.reduce((c,d,u)=>{const r=xe(d.appointmentAt??d.createdAt),s=c.get(r)??[];return s.push({booking:d,index:u}),c.set(r,s),c},new Map),i=[];for(let c=0;c<=23;c+=1)i.push(`${String(c).padStart(2,"0")}:00`),i.push(`${String(c).padStart(2,"0")}:30`);a.forEach((c,d)=>{i.includes(d)||i.push(d)});const l=c=>{const d=String(c).match(/^(\d{2}):(\d{2})$/);if(!d)return Number.POSITIVE_INFINITY;const u=Number(d[1]),r=Number(d[2]);return!Number.isFinite(u)||!Number.isFinite(r)?Number.POSITIVE_INFINITY:u*60+r};return i.sort((c,d)=>l(c)-l(d)),`
    <div class="day-board-list">
      ${i.map(c=>{const d=a.get(c)??[];if(!d.length)return`
              <div class="day-slot-row" data-calendar-slot-time="${f(c)}">
                <span class="day-slot-time">${c}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">${S("available",w())}</span>
              </div>
            `;const u=d.map(({booking:s,index:h},g)=>{const F=f(String(s.id??"")),q=String(s.licensePlate??"").toUpperCase()==="UNKNOWN",A=f(s.color??"#2563EB"),x=f(s.licensePlate&&s.licensePlate!=="UNKNOWN"?qe(s.licensePlate):"UNKNOWN"),K=f(X(s)),B=d.length>1&&g<d.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${F}">
                <div class="day-slot-plate-wrapper">
                  ${q?`<span class="fast-appt-dot" style="background: ${A}" aria-hidden="true"></span>`:`<span class="plate-chip">${x}</span>`}
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${K}</span>
                  </div>
                  <div class="day-slot-status-services">
                    ${q?'<span class="service-chip service-chip-other">Simple appointment</span>':`${xt(s.service)}`}
                  </div>
                </div>
              </div>
              ${B?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),r=d.length>1?`<span class="day-slot-count">${d.length} ${S("appointments",w()).toLowerCase()}</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${c}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${r}
                <div class="day-slot-bookings">
                  ${u}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function Ta(e,t,a,i){return e.length?e.map((l,c)=>{const d=String(l.id??""),u=t===d,r=a===d,s=l.appointmentAt??l.createdAt,h=String(l.licensePlate??"").toUpperCase()==="UNKNOWN",g=f(l.color??"#2563EB"),F=f(l.licensePlate&&l.licensePlate!=="UNKNOWN"?qe(l.licensePlate):"UNKNOWN"),q=f(We(l)),A=Ct(sa(s)),x=f(A),K=f(At(A)),B=le(la(s)),Z=f(B),J=le(Be(l.message)||fa(B)),V=f(J),ye=f(X(l)),me=l.licensePlate?ze(l.licensePlate):"",W=i.get(me)||na(l.licensePlate),ge=W.buildYear?`${W.title} (${W.buildYear})`:W.title,ie=f(String(l.phone??"No phone number")),oe=f(Et(l.message)||"No customer message.");return`
        <article class="request-card ${u?"is-expanded":""}" data-calendar-booking-id="${f(d)}">
          <div class="request-card-head">
            <div class="request-main">
              ${h?`<span class="fast-appt-dot" style="background: ${g}" aria-hidden="true"></span>`:`<span class="plate-chip">${F}</span>`}
              <div class="request-info">
                <p class="request-name"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1668 7.08463C14.1668 4.78345 12.3013 2.91797 10.0002 2.91797C7.69898 2.91797 5.8335 4.78345 5.8335 7.08463C5.8335 9.3858 7.69898 11.2513 10.0002 11.2513C12.3013 11.2513 14.1668 9.3858 14.1668 7.08463Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8332 17.0833C15.8332 13.8617 13.2215 11.25 9.99984 11.25C6.77818 11.25 4.1665 13.8617 4.1665 17.0833" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${ye}</p>
                ${h?"":`<p class="request-vehicle"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50667 14.1667C7.50667 15.0872 6.76048 15.8333 5.84001 15.8333C4.91953 15.8333 4.17334 15.0872 4.17334 14.1667C4.17334 13.2462 4.91953 12.5 5.84001 12.5C6.76048 12.5 7.50667 13.2462 7.50667 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M15.8397 14.1667C15.8397 15.0872 15.0935 15.8333 14.173 15.8333C13.2525 15.8333 12.5063 15.0872 12.5063 14.1667C12.5063 13.2462 13.2525 12.5 14.173 12.5C15.0935 12.5 15.8397 13.2462 15.8397 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M1.67301 8.33464H15.0063M1.67301 8.33464C1.67301 8.98464 1.65635 10.868 1.67634 12.718C1.70632 13.318 1.80624 13.818 4.17444 14.168M1.67301 8.33464C1.85288 6.88464 2.63561 5.16797 3.0353 4.51797M7.50634 8.33464V4.16797M12.4981 14.168H7.5019M1.68634 4.16797H10.1998C10.1998 4.16797 10.6495 4.16797 11.0492 4.20797C11.7987 4.27797 12.4282 4.61797 13.0577 5.46797C13.7242 6.36797 14.2367 7.50797 14.9162 8.11797C16.0454 9.13164 18.1937 8.81797 18.3137 10.968C18.3437 12.068 18.3437 13.268 18.2937 13.468C18.2134 14.0569 17.7593 14.1531 17.1945 14.168C16.7043 14.181 16.1134 14.1447 15.8256 14.168" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
${ge}</p>`}
                <div class="request-services">${xt(l.service)}</div>
              </div>
            </div>
            <div class="request-meta">
              <span class="request-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${q}</span>
              <button
                class="request-toggle ${u?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${f(d)}"
                aria-expanded="${u?"true":"false"}"
                aria-label="${u?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          ${u?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${Mt("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${ie}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${Mt("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${oe}</span>
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
                          <span data-schedule-date-label>${K}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${qt(A)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${S("fastFrom",w())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-start-time value="${Z}" />
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
                          ${Ce(B)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>${S("fastTo",w())}</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${V}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${V}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${Ce(J)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${f(d)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${f(d)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${f(d)}" aria-label="Edit booking">✎</button>
                ${r?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${f(d)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${f(d)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No appointments for this date.</p></article>'}function Re(e){return[...e].sort((t,a)=>new Date(t.appointmentAt??t.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime())}async function Ca(e){var ct,ut,pt,mt,gt,ft,ht,bt;if(!e)return;const t=await Ot();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}_t(t.activeGarage);const a=t.isAdmin?null:[(ct=t.activeGarage)==null?void 0:ct.id].filter(Boolean),i=((ut=t.activeGarage)==null?void 0:ut.id)??((mt=(pt=t.garages)==null?void 0:pt[0])==null?void 0:mt.id)??"",l=String(((gt=t.activeGarage)==null?void 0:gt.calendarStyle)??((ft=t.activeGarage)==null?void 0:ft.calendar_style)??"1"),c=String(((ht=t.activeGarage)==null?void 0:ht.calendarDefaultView)??((bt=t.activeGarage)==null?void 0:bt.calendar_default_view)??"month").toLowerCase(),{shell:d,contentArea:u,setUnreadEmailCount:r}=Kt({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:t.user.email,onLogout:Vt,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(d),d.classList.toggle("calendar-style-agenda",l==="2"),u.innerHTML=`
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
                <button id="calendarModeMonth" class="calendar-mode-tab" type="button" data-calendar-mode="month">${S("month",w())}</button>
                <button id="calendarModeDay" class="calendar-mode-tab" type="button" data-calendar-mode="day">${S("day",w())}</button>
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
          <span id="calendarDayCount" class="calendar-day-count">0 ${S("appointments",w()).toLowerCase()}</span>
        </div>

        <div id="calendarDayList" class="request-list"></div>
      </section>
    </section>

    <div id="calendarQuickAddOverlay" class="calendar-quickadd-overlay" hidden>
      <div class="calendar-quickadd-backdrop" data-calendar-quickadd-close></div>
      <section class="calendar-quickadd-modal" role="dialog" aria-modal="true" aria-labelledby="calendarQuickAddTitle">
        <div class="calendar-quickadd-head">
          <h3 id="calendarQuickAddTitle">${S("appointmentTypeFast",w())}</h3>
          <button type="button" class="icon-button" data-calendar-quickadd-close aria-label="Close quick add">✕</button>
        </div>

        <form id="calendarQuickAddForm" class="calendar-quickadd-form" novalidate>
          <label>
            ${S("fastTitle",w())}
            <input id="calendarQuickAddName" name="title" type="text" placeholder="${S("fastTitlePlaceholder",w())}" required />
          </label>

          <div class="calendar-quickadd-row">
            <label>
              ${S("fastDate",w())}
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

          <fieldset class="calendar-quickadd-colors" aria-label="${S("fastColor",w())}">
            <legend>${S("fastColor",w())}</legend>
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
            <span>${S("allDay",w())}</span>
          </label>

          <div id="calendarQuickAddTimeRow" class="calendar-quickadd-time-row">
            <label>
              ${S("fastFrom",w())}
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
              ${S("fastTo",w())}
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
            ${S("fastNote",w())}
            <textarea id="calendarQuickAddNote" name="note" rows="2" placeholder="${S("fastNotePlaceholder",w())}"></textarea>
          </label>

          <div class="manual-appointment-actions">
            <button type="button" class="button subtle" data-calendar-quickadd-close>${S("cancel",w())}</button>
            <button type="submit" class="button">${S("fastSave",w())}</button>
          </div>
          <p id="calendarQuickAddStatus" class="status-text" role="status" aria-live="polite"></p>
        </form>
      </section>
    </div>
  `;const s=u.querySelector("#calendarBoardBody"),h=u.querySelector("#calendarBoardContent"),g=u.querySelector("#calendarMobileAddbarHost"),F=u.querySelector(".calendar-board-head"),q=u.querySelector("#calendarPeriodLabel"),A=u.querySelector("#calendarModeMonth"),x=u.querySelector("#calendarModeDay"),K=u.querySelector("#calendarDayTitle"),B=u.querySelector("#calendarDayCount"),Z=u.querySelector("#calendarDayList"),J=u.querySelector("#calendarQuickAddOverlay"),V=u.querySelector("#calendarQuickAddForm"),ye=u.querySelector("#calendarQuickAddName"),me=u.querySelector("#calendarQuickAddDatePicker"),W=u.querySelector("#calendarQuickAddStartPicker"),ge=u.querySelector("#calendarQuickAddEndPicker"),ie=u.querySelector("#calendarQuickAddDate"),oe=u.querySelector("#calendarQuickAddStart"),ve=u.querySelector("#calendarQuickAddEnd"),z=u.querySelector("#calendarQuickAddAllDay"),we=u.querySelector("#calendarQuickAddTimeRow"),ke=u.querySelector("#calendarQuickAddStatus"),Ie=()=>{!(s instanceof HTMLElement)||!(F instanceof HTMLElement)||s.style.setProperty("--calendar-board-head-offset",`${F.offsetHeight}px`)};let R=[],j=[];const Q=Rt("calendar",{}),It=_(Q.selectedDate??""),Ne=_(Q.currentMonth??"");let b=It??new Date,D=Ne?new Date(Ne.getFullYear(),Ne.getMonth(),1):new Date(b.getFullYear(),b.getMonth(),1);const Nt=c==="day"||c==="week"||c==="agenda"?"day":"month";let U=Q.activeMode==="day"||Q.activeMode==="month"?Q.activeMode:Nt,I=String(Q.expandedBookingId??"").trim(),N=String(Q.editingBookingId??"").trim(),Ze="",Je="",et=0,tt="";const Pt=String(Q.mobileLayer??Q.mobileViewMode??"full");let E={month:"full",split:"split",week:"week",full:"full"}[Pt]??"full",H=String(Q.mobileDetailBookingId??"").trim(),Pe=0,Fe=0,re=null,je=E,de=0,ce=!1,Me=0,at=E,Se=C(b);const Ye=new Map,O=()=>window.matchMedia("(max-width: 768px)").matches,Qe=(o=1)=>{const n=["full","split","week"],p=n.indexOf(E),k=Math.min(n.length-1,Math.max(0,p+o));E=n[k]??"full"},Ft=(o,n)=>{const p=o instanceof Element?o.closest("[data-calendar-mobile-agenda-scroll]"):null;return!(p instanceof HTMLElement)||p.scrollHeight<=p.clientHeight+2?!0:n>0?Math.ceil(p.scrollTop+p.clientHeight)>=p.scrollHeight:p.scrollTop<=0},$e=()=>h.querySelector(".calendar-mobile-layer-full"),nt=o=>{const n=$e();n instanceof HTMLElement&&n.style.setProperty("--calendar-mobile-full-drag-offset",`${o}px`)},st=()=>{const o=$e();o instanceof HTMLElement&&(o.classList.remove("is-dragging"),o.style.removeProperty("--calendar-mobile-full-drag-offset"))},lt=(o,n)=>{if(!O())return!1;const p=Date.now();if(p<Me||!Ft(n,o))return!1;const k=E;if(k==="full"&&o>0){const M=h.querySelector('.calendar-mobile-month-grid[data-mobile-grid-state="full"]');if(M instanceof HTMLElement)return M.classList.add("is-shrinking-to-split"),Me=p+520,window.setTimeout(()=>{E==="full"&&(Qe(o),H="",$())},280),!0}return Qe(o),k===E?!1:(Me=p+280,H="",$(),!0)},Ue=o=>{if(O()){if(E==="week")b=new Date(b.getFullYear(),b.getMonth(),b.getDate()+o*7),D=new Date(b.getFullYear(),b.getMonth(),1);else{const p=new Date(D);p.setMonth(D.getMonth()+o),D=new Date(p.getFullYear(),p.getMonth(),1),(b.getMonth()!==D.getMonth()||b.getFullYear()!==D.getFullYear())&&(b=new Date(D.getFullYear(),D.getMonth(),1))}return}if(U==="month"){const p=new Date(D);p.setMonth(D.getMonth()+o),D=new Date(p.getFullYear(),p.getMonth(),1);return}const n=new Date(b);n.setDate(b.getDate()+o),b=n,D=new Date(b.getFullYear(),b.getMonth(),1)},it=o=>{const n=String(o.getHours()).padStart(2,"0"),p=String(o.getMinutes()).padStart(2,"0");return`${n}:${p}`},ot=(o,n,p)=>{const k=Ct(o),M=le(n),m=le(p);if(ie instanceof HTMLInputElement&&(ie.value=k),me instanceof HTMLElement){const v=me.querySelector("[data-schedule-date-label]"),T=me.querySelector("[data-schedule-date-options]");v instanceof HTMLElement&&(v.textContent=At(k)),T instanceof HTMLElement&&(T.innerHTML=qt(k))}if(oe instanceof HTMLInputElement&&(oe.value=M),W instanceof HTMLElement){const v=W.querySelector("[data-schedule-time-label]"),T=W.querySelector("[data-schedule-time-options]");v instanceof HTMLElement&&(v.textContent=M),T instanceof HTMLElement&&(T.innerHTML=Ce(M))}if(ve instanceof HTMLInputElement&&(ve.value=m),ge instanceof HTMLElement){const v=ge.querySelector("[data-schedule-time-label]"),T=ge.querySelector("[data-schedule-time-options]");v instanceof HTMLElement&&(v.textContent=m),T instanceof HTMLElement&&(T.innerHTML=Ce(m))}},ee=(o,n="")=>{ke instanceof HTMLElement&&(ke.textContent=String(o??""),ke.classList.remove("error","warning"),(n==="error"||n==="warning")&&ke.classList.add(n))},rt=()=>{J instanceof HTMLElement&&(J.hidden=!0,ee(""))},Oe=(o,n)=>{if(!(J instanceof HTMLElement))return;Se=String(o??C(b));let p,k;if(n){const[M,m]=n.split(":").map(Number),v=M*60+m+60;p=n,k=`${String(Math.floor(v/60)%24).padStart(2,"0")}:${String(v%60).padStart(2,"0")}`}else{const M=new Date,m=new Date(M.getTime()+60*60*1e3);p=it(M),k=it(m)}ot(Se,p,k),z instanceof HTMLInputElement&&(z.checked=!1),we instanceof HTMLElement&&we.classList.remove("is-hidden"),J.hidden=!1,ee(""),window.requestAnimationFrame(()=>{ye instanceof HTMLInputElement&&ye.focus()})};z==null||z.addEventListener("change",()=>{const o=z.checked;if(oe instanceof HTMLInputElement&&(oe.disabled=o),ve instanceof HTMLInputElement&&(ve.disabled=o),o){const n=ie instanceof HTMLInputElement?ie.value:Se;ot(n,"00:00","23:59")}we instanceof HTMLElement&&we.classList.toggle("is-hidden",o)});const dt=async()=>{const[o,n]=await Promise.all([Xt({garageIds:a}),Zt({garageIds:a})]),p=new Set(n.map(m=>String(m.bookingId??m.id??"").trim()).filter(Boolean));R=o;const k=new Set(R.map(m=>m.licensePlate).filter(m=>m&&m!=="UNKNOWN").map(m=>ze(m)));for(const m of k)if(m&&!Ye.has(m))try{const v=await ea(m);v&&Ye.set(m,v)}catch(v){console.error(`Failed to fetch vehicle for ${m}:`,v)}j=Re(R.filter(m=>{const v=String(m.id??"").trim();return m.inAppointments===!0&&!ca(m)&&!p.has(v)}));const M=St(R);r(M.unread)},jt=()=>{Jt("calendar",{selectedDate:b.toISOString(),currentMonth:D.toISOString(),activeMode:U,mobileLayer:E,mobileViewMode:E,mobileDetailBookingId:H,expandedBookingId:I,editingBookingId:N})},Yt=()=>{const o=C(b);return j.filter(n=>Xe(n)===o).sort((n,p)=>new Date(n.appointmentAt??n.createdAt).getTime()-new Date(p.appointmentAt??p.createdAt).getTime())},$=()=>{const o=C(b),n=Yt(),p=Ht(j),k=O(),M=U==="day"&&(Ze!=="day"||Je!==o);if(A.classList.toggle("is-active",U==="month"),x.classList.toggle("is-active",U==="day"),I&&!n.some(m=>String(m.id)===I)&&(I="",N=""),N&&!n.some(m=>String(m.id)===N)&&(N=""),H&&!H.startsWith("__day-detail__")&&!j.some(m=>String(m.id)===H)&&(H=""),k){const m=at==="full"&&E==="split";q.textContent=Dt(D).toUpperCase();const v=H&&!H.startsWith("__day-detail__")?j.find(T=>String(T.id)===H)??null:null;if(h.innerHTML=Sa({monthCursor:D,selectedDate:b,bookingsByDay:p,bookingsForDay:n,mobileLayer:E,animateSplitBottom:m,detailBooking:v,mobileDetailId:H}),g.innerHTML=$a(b),ce||st(),m){const T=h.querySelector(".calendar-mobile-layer-bottom-enter");T instanceof HTMLElement&&window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{T.classList.remove("calendar-mobile-layer-bottom-enter")})})}at=E}else U==="month"?(q.textContent=Dt(D),h.innerHTML=La(D,j,b,o),g.innerHTML=""):(q.textContent=oa(b),h.innerHTML=Da(b,n),g.innerHTML="",M&&window.requestAnimationFrame(()=>{const m=h.querySelector(".day-board-list");if(!(m instanceof HTMLElement))return;const v=m.querySelector(".day-slot-row.has-booking");if(v instanceof HTMLElement){const T=s.getBoundingClientRect(),ue=v.getBoundingClientRect(),te=s.scrollTop+(ue.top-T.top)-8;s.scrollTo({top:Math.max(0,te),behavior:"auto"})}else s.scrollTo({top:0,behavior:"auto"})}));K.textContent=He(b),B.textContent=`${n.length} ${S("appointments",w()).toLowerCase()}`,Z.innerHTML=Ta(n,I,N,Ye),window.requestAnimationFrame(Ie),Ze=U,Je=o,jt()};u.addEventListener("click",async o=>{const n=o.target instanceof Element?o.target:null;if(!n)return;if(n.closest("[data-calendar-quickadd-close]")instanceof HTMLElement){rt();return}if(n.closest("[data-calendar-mobile-detail-close]")instanceof HTMLElement){H="",$();return}const M=n.closest("[data-calendar-mobile-quickadd]");if(M instanceof HTMLElement){const y=String(M.dataset.calendarMobileQuickadd??C(b));Oe(y);return}if(n.closest("[data-calendar-mobile-cycle]")instanceof HTMLElement&&O()){Qe(),$();return}if(ta(u,n))return;const v=n.closest("[data-calendar-nav]");if(v instanceof HTMLElement){const y=v.dataset.calendarNav;Ue(y==="next"?1:-1),$();return}const T=n.closest("[data-calendar-mode]");if(T instanceof HTMLElement){U=T.dataset.calendarMode==="day"?"day":"month",$();return}const ue=n.closest("[data-calendar-cell]");if(ue instanceof HTMLElement){const y=ue.dataset.calendarCell;if(y){const L=Date.now(),G=y===tt&&L-et<=450;tt=y,et=L;const Y=_(`${y}T12:00:00`);Y&&(b=Y,D=new Date(b.getFullYear(),b.getMonth(),1),O()&&E==="full"&&(H=`__day-detail__${y}`),$(),!O()&&G&&U==="month"&&Oe(y))}return}const te=n.closest("[data-calendar-slot-time]");if(te instanceof HTMLElement&&U==="day"){const y=String(te.dataset.calendarSlotTime??"");y&&Oe(C(b),y);return}const ae=n.closest("[data-calendar-mobile-booking-id]");if(ae instanceof HTMLElement){const y=String(ae.dataset.calendarMobileBookingId??"");y&&(H=y,$());return}const fe=n.closest("[data-day-slot-booking-id]");if(fe instanceof HTMLElement){const y=String(fe.dataset.daySlotBookingId??"");y&&(I=y,N="",$(),window.requestAnimationFrame(()=>{const L=[...Z.querySelectorAll("[data-calendar-booking-id]")].find(G=>G instanceof HTMLElement&&String(G.dataset.calendarBookingId??"")===y);L instanceof HTMLElement&&L.scrollIntoView({behavior:"smooth",block:"start"})}));return}const Le=n.closest("[data-calendar-toggle]");if(Le instanceof HTMLElement){const y=String(Le.dataset.calendarToggle??"");I=I===y?"":y,I!==y&&(N=""),$();return}const De=n.closest("[data-calendar-action]");if(De instanceof HTMLElement){const y=String(De.dataset.calendarAction??""),L=String(De.dataset.bookingId??"");if(!L)return;if(y==="edit"){I=L,N=N===L?"":L,$();return}if(y==="cancel-edit"){N="",$();return}if(y==="save-schedule"){const Y=De.closest("[data-calendar-booking-id]");if(!(Y instanceof HTMLElement))return;const ne=j.find(P=>String(P.id)===L);if(!ne)return;const pe=Y.querySelector("[data-schedule-edit-date]"),vt=Y.querySelector("[data-schedule-edit-start-time]"),wt=Y.querySelector("[data-schedule-edit-end-time]");if(!(pe instanceof HTMLInputElement)||!(vt instanceof HTMLInputElement)||!(wt instanceof HTMLInputElement))return;const he=Lt(pe.value,vt.value),kt=le(wt.value);if(!he)return;try{await Gt(ne,he)}catch(P){window.alert(P instanceof Error?P.message:"Unable to save the appointment schedule.");return}R=Re(R.map(P=>String(P.id)===L?{...P,appointmentAt:he,message:Tt(P.message,kt)}:P)),j=Re(j.map(P=>String(P.id)===L?{...P,appointmentAt:he,message:Tt(P.message,kt)}:P));const Te=_(he);Te&&(b=Te,D=new Date(Te.getFullYear(),Te.getMonth(),1)),N="",I=L,$();return}if(!j.find(Y=>String(Y.id)===L))return;$();return}const _e=n.closest("[data-request-action]");if(_e instanceof HTMLElement){const y=String(_e.dataset.requestAction??""),L=String(_e.dataset.bookingId??"");if(!L)return;const G=j.find(Y=>String(Y.id)===L);if(!G)return;if(y==="complete"){(async()=>{if(await $t("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await Wt(G,{convertedFromEmail:G.source!=="manual"})}catch(ne){window.alert(ne instanceof Error?ne.message:"Unable to mark appointment as completed.");return}window.location.href=Qt("completed.html")}})();return}if(y==="delete"){(async()=>{if(!await $t("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;R=R.filter(pe=>String(pe.id)!==L),j=j.filter(pe=>String(pe.id)!==L),N="",H===L&&(H="");const ne=St(R);r(ne.unread),$()})();return}}const yt=n.closest("[data-calendar-booking-id]");if(yt instanceof HTMLElement&&!ia(n)){const y=String(yt.dataset.calendarBookingId??"");if(!y)return;I=I===y?"":y,I!==y&&(N=""),$()}}),window.addEventListener("resize",Ie),Ie(),V==null||V.addEventListener("submit",async o=>{if(o.preventDefault(),!i){ee("No garage available for quick appointment creation.","warning");return}const n=new FormData(V),p=String(n.get("title")??"").trim(),k=String(n.get("date")??Se).trim(),M=z instanceof HTMLInputElement?z.checked:!1,m=M?"00:00":String(n.get("start")??"").trim(),v=M?"23:59":String(n.get("end")??"").trim(),T=String(n.get("color")??"#2563EB").trim(),ue=String(n.get("note")??"").trim();if(!p||!k||!m||!v){ee("Please fill all required fields.","warning");return}const te=Lt(k,m);if(!te){ee("Invalid date/time.","warning");return}const ae=V.querySelector("button[type='submit']");ae instanceof HTMLButtonElement&&(ae.disabled=!0),ee("Adding appointment...");try{await zt({garageId:i,name:p,licensePlate:"UNKNOWN",phone:"0000000000",service:"Simple appointment",message:`Name: ${p}
Message: ${ue||Ge}${M?`
All day: yes`:""}
Until: ${v}`,color:T,appointmentAt:te}),b=_(`${k}T12:00:00`)??b,D=new Date(b.getFullYear(),b.getMonth(),1),I="",N="",await dt(),$(),V.reset(),rt()}catch(fe){const Le=fe instanceof Error?fe.message:"Unable to add appointment.";ee(Le,"error")}finally{ae instanceof HTMLButtonElement&&(ae.disabled=!1)}}),window.addEventListener("keydown",o=>{O()&&(o.key==="ArrowLeft"&&(Ue(-1),$()),o.key==="ArrowRight"&&(Ue(1),$()))}),s==null||s.addEventListener("wheel",o=>{!O()||Math.abs(o.deltaY)<12||lt(o.deltaY>0?1:-1,o.target)&&o.preventDefault()},{passive:!1}),s==null||s.addEventListener("touchstart",o=>{var p;const n=(p=o.touches)==null?void 0:p[0];n&&(Pe=n.clientX,Fe=n.clientY,re=o.target instanceof Element?o.target:null,je=E,de=0,ce=!1)},{passive:!0}),s==null||s.addEventListener("touchmove",o=>{var v;if(!O()||je!=="full"||E!=="full")return;const n=(v=o.touches)==null?void 0:v[0];if(!n)return;const p=n.clientX-Pe,k=n.clientY-Fe;if(Math.abs(k)<=Math.abs(p)||k>=0)return;const M=$e();if(!(M instanceof HTMLElement))return;const m=Math.max(140,Math.round(window.innerHeight*.36));de=Math.max(-m,k),ce=!0,M.classList.add("is-dragging"),nt(de),o.preventDefault()},{passive:!1}),s==null||s.addEventListener("touchend",o=>{var M;if(!O())return;const n=(M=o.changedTouches)==null?void 0:M[0];if(!n)return;const p=n.clientX-Pe,k=n.clientY-Fe;if(ce&&je==="full"&&E==="full"){const m=$e();m instanceof HTMLElement&&m.classList.remove("is-dragging");const v=Math.max(72,Math.round(window.innerHeight*.11));if(Math.abs(de)>=v){Me=Date.now()+420,H="",E="split",de=0,ce=!1,$(),re=null;return}de=0,ce=!1,nt(0),window.setTimeout(()=>{st()},280),re=null;return}if(Math.abs(k)<48||Math.abs(k)<=Math.abs(p)){re=null;return}lt(k<0?1:-1,re),re=null},{passive:!0});try{await dt(),$()}catch(o){h.innerHTML='<p class="muted">Unable to load calendar right now.</p>',g.innerHTML="",Z.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',r(0),console.error(o)}}const Aa=document.querySelector("#app");Ut();Ca(Aa);
