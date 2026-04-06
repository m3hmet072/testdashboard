import{d as p,p as k,c as U}from"./theme-shgkqnbR.js";import{c as H}from"./charts-DureEa3z.js";import{e as R,a as V,c as _,g as j,b as z,s as G,l as Y}from"./branding-BLWMl1Cd.js";const c={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},F=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]),A=["apk","banden","onderhoud","airco","occasions","brakes","other"];function u(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function W(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function E(t){const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function Z(t){const e=E(t);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function T(t){const e=String(t??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function C(t){return T(t.status)==="done"||t.inAppointments===!1}function y(t){const e=t instanceof Date?t:E(t);if(!e)return"";const n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${a}`}function L(t){const e=String(t??"").trim();if(!e)return["other"];const n=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(i=>i.trim()).filter(Boolean);return n.length?n:[e]}function M(t){return F.get(String(t??"").trim().toLowerCase())??"other"}function J(t){return L(t).map(e=>{const n=M(e),i=c[n]??c.other;return`<span class="service-chip service-chip-${n}">${u(i)}</span>`}).join("")}function Q(t){const e=T(t);return e==="done"?{label:"Completed",className:"status-chip-completed"}:e==="confirmed"?{label:"Confirmed",className:"status-chip-confirmed"}:{label:"In Progress",className:"status-chip-progress"}}function X(t){return t.length?t.slice(0,4).map(e=>{const n=u(e.licensePlate&&e.licensePlate!=="UNKNOWN"?W(e.licensePlate):"UNKNOWN"),i=u(Z(e.appointmentAt??e.createdAt)),a=Q(e.status);return`
        <article class="schedule-row">
          <div class="schedule-row-main">
            <span class="schedule-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 14.6654C11.6818 14.6654 14.6666 11.6806 14.6666 7.9987C14.6666 4.3168 11.6818 1.33203 7.99992 1.33203C4.31802 1.33203 1.33325 4.3168 1.33325 7.9987C1.33325 11.6806 4.31802 14.6654 7.99992 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${i}</span>
            <span class="plate-chip">${n}</span>
            <div class="request-services">${J(e.service)}</div>
          </div>
          <span class="status-chip ${a.className}">${a.label}</span>
        </article>
      `}).join(""):'<article class="schedule-row-no"><p class="muted">No appointments scheduled for today.</p></article>'}function ee(t){const e=new Map(A.map(a=>[a,0]));for(const a of t){const r=new Set(L(a.service).map(o=>M(o)));r.size||r.add("other");for(const o of r)e.set(o,(e.get(o)??0)+1)}const n=A.map((a,r)=>({key:a,count:e.get(a)??0,index:r})).filter(a=>a.count>0).sort((a,r)=>r.count!==a.count?r.count-a.count:a.index-r.index);if(!n.length)return{labels:["No data"],values:[1],legend:[{key:"other",label:"No data",percentage:0}]};const i=n.reduce((a,r)=>a+r.count,0);return{labels:n.map(({key:a})=>c[a]??c.other),values:n.map(({count:a})=>a),legend:n.map(({key:a,count:r})=>({key:a,label:c[a]??c.other,percentage:Math.round(r/i*100)}))}}function te(t){return t.legend.map(e=>`
      <li>
        <span class="legend-dot legend-dot-${e.key}"></span>
        <span>${u(e.label)}</span>
        <span class="legend-value">${e.percentage}%</span>
      </li>
    `).join("")}async function ae(t){var b;if(!t)return;const e=await R();if(!e)return;if(!e.isAdmin&&!e.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}V(e.activeGarage);const n=e.isAdmin?null:[(b=e.activeGarage)==null?void 0:b.id].filter(Boolean),{shell:i,contentArea:a,setUnreadEmailCount:r}=_({activePage:"dashboard",title:"Dashboard",headerNote:"Monitor garage operations at a glance",userEmail:e.user.email,onLogout:Y,garage:e.activeGarage,isAdmin:e.isAdmin});t.replaceChildren(i),a.innerHTML=`
    <section class="metrics-grid">
      <article class="metric-card"><div><p>Total Appointments</p><img src="${p("sidebar-icons/appointment.png")}" alt="Appointment icon"></div><h2 id="metricTotal">0</h2><p class="subtext">All appointments</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>Today’s Schedule</p><img src="${p("sidebar-icons/calender.png")}" alt="Calendar icon"></div><h2 id="metricToday">0</h2><p class="subtext">Today's schedule</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>Completed</p><img src="${p("sidebar-icons/succes.png")}" alt="Success icon"></div><h2 id="metricCompleted">0</h2><p class="subtext">Completed appointments</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>Pending Emails</p><img src="${p("sidebar-icons/email.png")}" alt="Email icon"></div><h2 id="metricEmails">0</h2><p class="subtext">Yet to read</p></article>
    </section>

    <section class="dashboard-main-grid">
      <section class="panel dashboard-schedule-panel">
        <div class="panel-heading spread">
          <h3>Today’s Schedule</h3>
          <a class="panel-link" href="${k("bookings.html")}">View All <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3335 8H3.3335" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.6665 12C8.6665 12 12.6665 9.05407 12.6665 8C12.6665 6.94587 8.6665 4 8.6665 4" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
        </div>
        <div id="dashboardScheduleList" class="dashboard-schedule-list"></div>
      </section>

      <section class="panel dashboard-overview-panel">
        <div class="panel-heading spread">
          <h3>Appointment Overview</h3>
          <a class="panel-link" href="${k("analytics.html")}">View All →</a>
        </div>

        <div class="dashboard-overview-body">
          <ul id="dashboardOverviewLegend" class="overview-legend"></ul>
          <div class="overview-chart-wrap">
            <canvas id="dashboardOverviewChart" aria-label="Appointment overview chart"></canvas>
          </div>
        </div>
      </section>
    </section>
  `;const o=a.querySelector("#metricTotal"),$=a.querySelector("#metricToday"),B=a.querySelector("#metricCompleted"),N=a.querySelector("#metricEmails"),v=a.querySelector("#dashboardScheduleList"),f=a.querySelector("#dashboardOverviewLegend"),x=a.querySelector("#dashboardOverviewChart");try{const[l,m]=await Promise.all([j({garageIds:n}),z({garageIds:n})]),w=G(l),D=new Set(m.map(s=>String(s.bookingId??s.id??"").trim()).filter(Boolean)),h=l.filter(s=>{const d=String(s.id??"").trim();return s.inAppointments===!0&&!C(s)&&!D.has(d)}),I=l.filter(C),O=new Set(m.map(s=>String(s.bookingId??s.id??"").trim()).filter(Boolean)),q=I.filter(s=>!O.has(String(s.id??"").trim())),P=[...m,...q],K=y(new Date),S=h.filter(s=>y(s.appointmentAt??s.createdAt)===K).sort((s,d)=>new Date(s.appointmentAt??s.createdAt).getTime()-new Date(d.appointmentAt??d.createdAt).getTime());o.textContent=String(h.length),$.textContent=String(S.length),B.textContent=String(P.length),N.textContent=String(w.unread),v.innerHTML=X(S);const g=ee(h);f.innerHTML=te(g),H(x,g.labels,g.values),r(w.unread)}catch(l){v.innerHTML='<article class="schedule-row"><p class="muted">Unable to load dashboard data.</p></article>',f.innerHTML='<li><span class="muted">Unable to load overview.</span></li>',r(0),console.error(l)}}const ne=document.querySelector("#app");U();ae(ne);
