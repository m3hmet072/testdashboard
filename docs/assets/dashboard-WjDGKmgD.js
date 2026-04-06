import{d as m,p as $,c as z}from"./theme-BVsy-V8_.js";import{c as G}from"./charts-DureEa3z.js";import{e as _,a as Y,c as F,g as p,t as c,b as V,d as W,s as Z,l as J,f as h,h as w}from"./branding-CkZidQ_L.js";const Q=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]),L=["apk","banden","onderhoud","airco","occasions","brakes","other"];function g(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function X(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function T(t){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function ee(t){const e=T(t);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function N(t){const e=String(t??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function M(t){return N(t.status)==="done"||t.inAppointments===!1}function E(t){const e=t instanceof Date?t:T(t);if(!e)return"";const s=e.getFullYear(),o=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${s}-${o}-${i}`}function x(t){const e=String(t??"").trim();if(!e)return["other"];const s=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(o=>o.trim()).filter(Boolean);return s.length?s:[e]}function B(t){return Q.get(String(t??"").trim().toLowerCase())??"other"}function te(t){return x(t).map(e=>{const s=B(e),o=h(s,p());return`<span class="service-chip service-chip-${s}">${g(o)}</span>`}).join("")}function ae(t){const e=N(t),s=p();return e==="done"?{label:w(t,s),className:"status-chip-completed"}:e==="confirmed"?{label:w(t,s),className:"status-chip-confirmed"}:{label:w(t,s),className:"status-chip-progress"}}function ne(t){return t.length?t.slice(0,4).map(e=>{const s=g(e.licensePlate&&e.licensePlate!=="UNKNOWN"?X(e.licensePlate):"UNKNOWN"),o=g(ee(e.appointmentAt??e.createdAt)),i=ae(e.status);return`
        <article class="schedule-row">
          <div class="schedule-row-main">
            <span class="schedule-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 14.6654C11.6818 14.6654 14.6666 11.6806 14.6666 7.9987C14.6666 4.3168 11.6818 1.33203 7.99992 1.33203C4.31802 1.33203 1.33325 4.3168 1.33325 7.9987C1.33325 11.6806 4.31802 14.6654 7.99992 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${o}</span>
            <span class="plate-chip">${s}</span>
            <div class="request-services">${te(e.service)}</div>
          </div>
          <span class="status-chip ${i.className}">${i.label}</span>
        </article>
      `}).join(""):'<article class="schedule-row-no"><p class="muted">No appointments scheduled for today.</p></article>'}function se(t){const e=new Map(L.map(a=>[a,0]));for(const a of t){const n=new Set(x(a.service).map(l=>B(l)));n.size||n.add("other");for(const l of n)e.set(l,(e.get(l)??0)+1)}const s=L.map((a,n)=>({key:a,count:e.get(a)??0,index:n})).filter(a=>a.count>0).sort((a,n)=>n.count!==a.count?n.count-a.count:a.index-n.index);if(!s.length)return{labels:["No data"],values:[1],legend:[{key:"other",label:h("other",p()),percentage:0}]};const o=s.reduce((a,n)=>a+n.count,0),i=p();return{labels:s.map(({key:a})=>h(a,i)),values:s.map(({count:a})=>a),legend:s.map(({key:a,count:n})=>({key:a,label:h(a,i),percentage:Math.round(n/o*100)}))}}function re(t){return t.legend.map(e=>`
      <li>
        <span class="legend-dot legend-dot-${e.key}"></span>
        <span>${g(e.label)}</span>
        <span class="legend-value">${e.percentage}%</span>
      </li>
    `).join("")}async function ie(t){var A;if(!t)return;const e=await _();if(!e)return;if(!e.isAdmin&&!e.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Y(e.activeGarage);const s=e.isAdmin?null:[(A=e.activeGarage)==null?void 0:A.id].filter(Boolean),{shell:o,contentArea:i,setUnreadEmailCount:a}=F({activePage:"dashboard",title:"Dashboard",headerNote:"Monitor garage operations at a glance",userEmail:e.user.email,onLogout:J,garage:e.activeGarage,isAdmin:e.isAdmin});t.replaceChildren(o);const n=p();i.innerHTML=`
    <section class="metrics-grid">
      <article class="metric-card"><div><p>${c("totalAppointments",n)}</p><img src="${m("sidebar-icons/appointment.png")}" alt="Appointment icon"></div><h2 id="metricTotal">0</h2><p class="subtext">${c("allAppointments",n)}</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>${c("todaysSchedule",n)}</p><img src="${m("sidebar-icons/calender.png")}" alt="Calendar icon"></div><h2 id="metricToday">0</h2><p class="subtext">${c("todaysSchedule",n)}</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>${c("completed",n)}</p><img src="${m("sidebar-icons/succes.png")}" alt="Success icon"></div><h2 id="metricCompleted">0</h2><p class="subtext">${c("completedAppointments",n)}</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>${c("pendingEmails",n)}</p><img src="${m("sidebar-icons/email.png")}" alt="Email icon"></div><h2 id="metricEmails">0</h2><p class="subtext">${c("ytRead",n)}</p></article>
    </section>

    <section class="dashboard-main-grid">
      <section class="panel dashboard-schedule-panel">
        <div class="panel-heading spread">
          <h3>Today’s Schedule</h3>
          <a class="panel-link" href="${$("bookings.html")}">View All <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3335 8H3.3335" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.6665 12C8.6665 12 12.6665 9.05407 12.6665 8C12.6665 6.94587 8.6665 4 8.6665 4" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
        </div>
        <div id="dashboardScheduleList" class="dashboard-schedule-list"></div>
      </section>

      <section class="panel dashboard-overview-panel">
        <div class="panel-heading spread">
          <h3>${c("appointmentOverview",n)}</h3>
          <a class="panel-link" href="${$("analytics.html")}">${c("viewAll",n)} →</a>
        </div>

        <div class="dashboard-overview-body">
          <ul id="dashboardOverviewLegend" class="overview-legend"></ul>
          <div class="overview-chart-wrap">
            <canvas id="dashboardOverviewChart" aria-label="Appointment overview chart"></canvas>
          </div>
        </div>
      </section>
    </section>
  `;const l=i.querySelector("#metricTotal"),D=i.querySelector("#metricToday"),I=i.querySelector("#metricCompleted"),q=i.querySelector("#metricEmails"),S=i.querySelector("#dashboardScheduleList"),k=i.querySelector("#dashboardOverviewLegend"),O=i.querySelector("#dashboardOverviewChart");try{const[d,v]=await Promise.all([V({garageIds:s}),W({garageIds:s})]),y=Z(d),U=new Set(v.map(r=>String(r.bookingId??r.id??"").trim()).filter(Boolean)),f=d.filter(r=>{const u=String(r.id??"").trim();return r.inAppointments===!0&&!M(r)&&!U.has(u)}),H=d.filter(M),R=new Set(v.map(r=>String(r.bookingId??r.id??"").trim()).filter(Boolean)),K=H.filter(r=>!R.has(String(r.id??"").trim())),P=[...v,...K],j=E(new Date),C=f.filter(r=>E(r.appointmentAt??r.createdAt)===j).sort((r,u)=>new Date(r.appointmentAt??r.createdAt).getTime()-new Date(u.appointmentAt??u.createdAt).getTime());l.textContent=String(f.length),D.textContent=String(C.length),I.textContent=String(P.length),q.textContent=String(y.unread),S.innerHTML=ne(C);const b=se(f);k.innerHTML=re(b),G(O,b.labels,b.values),a(y.unread)}catch(d){S.innerHTML='<article class="schedule-row"><p class="muted">Unable to load dashboard data.</p></article>',k.innerHTML='<li><span class="muted">Unable to load overview.</span></li>',a(0),console.error(d)}}const oe=document.querySelector("#app");z();ie(oe);
