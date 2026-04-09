import{n as W,r as h,t as y}from"./theme-DNexrY8-.js";import{I as X}from"./charts-CiywijUq.js";import{n as z,r as R,t as Y,x as u,N as c,e as Z,X as F,a as K,b as Q,W as g,V as w}from"./branding-DRG9Zl5n.js";const J=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]),C=["apk","banden","onderhoud","airco","occasions","brakes","other"];function d(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function _(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function N(t){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function ee(t){const e=N(t);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function M(t){const e=String(t??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function x(t){return M(t.status)==="done"||t.inAppointments===!1}function L(t){const e=t instanceof Date?t:N(t);if(!e)return"";const n=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),l=String(e.getDate()).padStart(2,"0");return`${n}-${o}-${l}`}function T(t){const e=String(t??"").trim();if(!e)return["other"];const n=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(o=>o.trim()).filter(Boolean);return n.length?n:[e]}function q(t){return J.get(String(t??"").trim().toLowerCase())??"other"}function te(t){return T(t).map(e=>{const n=q(e),o=g(n,u());return`<span class="service-chip service-chip-${n}">${d(o)}</span>`}).join("")}function ae(t){const e=M(t),n=u();return e==="done"?{label:w(t,n),className:"status-chip-completed"}:e==="confirmed"?{label:w(t,n),className:"status-chip-confirmed"}:{label:w(t,n),className:"status-chip-progress"}}function ne(t){return t.length?t.slice(0,4).map(e=>{const n=String(e.licensePlate??"").toUpperCase()==="UNKNOWN",o=d(_(e.licensePlate)),l=d(e.name||"Onbekende klant"),a=d(ee(e.appointmentAt??e.createdAt)),i=d(e.color??"#2563EB"),s=ae(e.status);return`
        <article class="schedule-row">
          <div class="schedule-row-main">
            <span class="schedule-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 14.6654C11.6818 14.6654 14.6666 11.6806 14.6666 7.9987C14.6666 4.3168 11.6818 1.33203 7.99992 1.33203C4.31802 1.33203 1.33325 4.3168 1.33325 7.9987C1.33325 11.6806 4.31802 14.6654 7.99992 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${a}</span>
            ${n?`<span class="fast-appt-dot" style="background: ${i}" aria-hidden="true"></span><span class="schedule-name">${l}</span>`:`<span class="plate-chip">${o}</span>`}
            <div class="request-services">${n?'<span class="service-chip service-chip-other">Simple appointment</span>':te(e.service)}</div>
          </div>
          ${n?"":`<span class="status-chip ${s.className}">${s.label}</span>`}
        </article>
      `}).join(""):'<article class="schedule-row-no"><p class="muted">No appointments scheduled for today.</p></article>'}function ie(t){const e=new Map(C.map(a=>[a,0]));for(const a of t){const i=new Set(T(a.service).map(s=>q(s)));i.size||i.add("other");for(const s of i)e.set(s,(e.get(s)??0)+1)}const n=C.map((a,i)=>({key:a,count:e.get(a)??0,index:i})).filter(a=>a.count>0).sort((a,i)=>i.count!==a.count?i.count-a.count:a.index-i.index);if(!n.length)return{labels:["No data"],values:[1],legend:[{key:"other",label:g("other",u()),percentage:0}]};const o=n.reduce((a,i)=>a+i.count,0),l=u();return{labels:n.map(({key:a})=>g(a,l)),values:n.map(({count:a})=>a),legend:n.map(({key:a,count:i})=>({key:a,label:g(a,l),percentage:Math.round(i/o*100)}))}}function se(t){return t.legend.map(e=>`
      <li>
        <span class="legend-dot legend-dot-${e.key}"></span>
        <span>${d(e.label)}</span>
        <span class="legend-value">${e.percentage}%</span>
      </li>
    `).join("")}async function re(t){var e;if(!t)return;const n=await z();if(!n)return;if(!n.isAdmin&&!n.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}R(n.activeGarage);const o=n.isAdmin?null:[(e=n.activeGarage)==null?void 0:e.id].filter(Boolean),{shell:l,contentArea:a,setUnreadEmailCount:i}=Y({activePage:"dashboard",title:"Dashboard",headerNote:"Monitor garage operations at a glance",userEmail:n.user.email,onLogout:Q,garage:n.activeGarage,isAdmin:n.isAdmin});t.replaceChildren(l);const s=u();a.innerHTML=`
    <section class="metrics-grid">
      <article class="metric-card"><div><p>${c("totalAppointments",s)}</p><img src="${h("sidebar-icons/appointment.png")}" alt="Appointment icon"></div><h2 id="metricTotal">0</h2><p class="subtext">${c("allAppointments",s)}</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>${c("todaysSchedule",s)}</p><img src="${h("sidebar-icons/calender.png")}" alt="Calendar icon"></div><h2 id="metricToday">0</h2><p class="subtext">${c("todaysSchedule",s)}</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>${c("completed",s)}</p><img src="${h("sidebar-icons/succes.png")}" alt="Success icon"></div><h2 id="metricCompleted">0</h2><p class="subtext">${c("completedAppointments",s)}</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>${c("pendingEmails",s)}</p><img src="${h("sidebar-icons/email.png")}" alt="Email icon"></div><h2 id="metricEmails">0</h2><p class="subtext">${c("ytRead",s)}</p></article>
    </section>

    <section class="dashboard-main-grid">
      <section class="panel dashboard-schedule-panel">
        <div class="panel-heading spread">
          <h3>Today’s Schedule</h3>
          <a class="panel-link" href="${y("bookings.html")}">View All <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3335 8H3.3335" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.6665 12C8.6665 12 12.6665 9.05407 12.6665 8C12.6665 6.94587 8.6665 4 8.6665 4" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
        </div>
        <div id="dashboardScheduleList" class="dashboard-schedule-list"></div>
      </section>

      <section class="panel dashboard-overview-panel">
        <div class="panel-heading spread">
          <h3>${c("appointmentOverview",s)}</h3>
          <a class="panel-link" href="${y("analytics.html")}">${c("viewAll",s)} →</a>
        </div>

        <div class="dashboard-overview-body">
          <ul id="dashboardOverviewLegend" class="overview-legend"></ul>
          <div class="overview-chart-wrap">
            <canvas id="dashboardOverviewChart" aria-label="Appointment overview chart"></canvas>
          </div>
        </div>
      </section>
    </section>
  `;const B=a.querySelector("#metricTotal"),D=a.querySelector("#metricToday"),E=a.querySelector("#metricCompleted"),H=a.querySelector("#metricEmails"),k=a.querySelector("#dashboardScheduleList"),S=a.querySelector("#dashboardOverviewLegend"),O=a.querySelector("#dashboardOverviewChart");try{const[p,v]=await Promise.all([Z({garageIds:o}),F({garageIds:o})]),$=K(p),j=new Set(v.map(r=>String(r.bookingId??r.id??"").trim()).filter(Boolean)),b=p.filter(r=>{const m=String(r.id??"").trim();return r.inAppointments===!0&&!x(r)&&!j.has(m)}),I=p.filter(x),U=new Set(v.map(r=>String(r.bookingId??r.id??"").trim()).filter(Boolean)),G=I.filter(r=>!U.has(String(r.id??"").trim())),P=[...v,...G],V=L(new Date),A=b.filter(r=>L(r.appointmentAt??r.createdAt)===V).sort((r,m)=>new Date(r.appointmentAt??r.createdAt).getTime()-new Date(m.appointmentAt??m.createdAt).getTime());B.textContent=String(b.length),D.textContent=String(A.length),E.textContent=String(P.length),H.textContent=String($.unread),k.innerHTML=ne(A);const f=ie(b);S.innerHTML=se(f),X(O,f.labels,f.values),i($.unread)}catch(p){k.innerHTML='<article class="schedule-row"><p class="muted">Unable to load dashboard data.</p></article>',S.innerHTML='<li><span class="muted">Unable to load overview.</span></li>',i(0),console.error(p)}}const oe=document.querySelector("#app");W();re(oe);
