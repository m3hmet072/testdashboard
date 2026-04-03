import{d,p as S,c as D}from"./theme-CzeyRWKH.js";import{c as O}from"./charts-DureEa3z.js";import{e as q,a as I,c as K,g as P,s as U,l as H}from"./branding-D-S-35Vh.js";const c={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},R=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]),A=["apk","banden","onderhoud","airco","occasions","brakes","other"];function p(a){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function V(a){return String(a??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function y(a){const e=new Date(a);return Number.isNaN(e.getTime())?null:e}function _(a){const e=y(a);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function C(a){const e=String(a??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function k(a){const e=a instanceof Date?a:y(a);if(!e)return"";const n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");return`${n}-${r}-${t}`}function E(a){const e=String(a??"").trim();if(!e)return["other"];const n=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(r=>r.trim()).filter(Boolean);return n.length?n:[e]}function T(a){return R.get(String(a??"").trim().toLowerCase())??"other"}function j(a){return E(a).map(e=>{const n=T(e),r=c[n]??c.other;return`<span class="service-chip service-chip-${n}">${p(r)}</span>`}).join("")}function z(a){const e=C(a);return e==="done"?{label:"Completed",className:"status-chip-completed"}:e==="confirmed"?{label:"Confirmed",className:"status-chip-confirmed"}:{label:"In Progress",className:"status-chip-progress"}}function G(a){return a.length?a.slice(0,4).map(e=>{const n=p(e.licensePlate&&e.licensePlate!=="UNKNOWN"?V(e.licensePlate):"UNKNOWN"),r=p(_(e.appointmentAt??e.createdAt)),t=z(e.status);return`
        <article class="schedule-row">
          <div class="schedule-row-main">
            <span class="schedule-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 14.6654C11.6818 14.6654 14.6666 11.6806 14.6666 7.9987C14.6666 4.3168 11.6818 1.33203 7.99992 1.33203C4.31802 1.33203 1.33325 4.3168 1.33325 7.9987C1.33325 11.6806 4.31802 14.6654 7.99992 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${r}</span>
            <span class="plate-chip">${n}</span>
            <div class="request-services">${j(e.service)}</div>
          </div>
          <span class="status-chip ${t.className}">${t.label}</span>
        </article>
      `}).join(""):'<article class="schedule-row-no"><p class="muted">No appointments scheduled for today.</p></article>'}function Y(a){const e=new Map(A.map(t=>[t,0]));for(const t of a){const s=new Set(E(t.service).map(o=>T(o)));s.size||s.add("other");for(const o of s)e.set(o,(e.get(o)??0)+1)}const n=A.map((t,s)=>({key:t,count:e.get(t)??0,index:s})).filter(t=>t.count>0).sort((t,s)=>s.count!==t.count?s.count-t.count:t.index-s.index);if(!n.length)return{labels:["No data"],values:[1],legend:[{key:"other",label:"No data",percentage:0}]};const r=n.reduce((t,s)=>t+s.count,0);return{labels:n.map(({key:t})=>c[t]??c.other),values:n.map(({count:t})=>t),legend:n.map(({key:t,count:s})=>({key:t,label:c[t]??c.other,percentage:Math.round(s/r*100)}))}}function W(a){return a.legend.map(e=>`
      <li>
        <span class="legend-dot legend-dot-${e.key}"></span>
        <span>${p(e.label)}</span>
        <span class="legend-value">${e.percentage}%</span>
      </li>
    `).join("")}async function Z(a){var v;if(!a)return;const e=await q();if(!e)return;if(!e.isAdmin&&!e.activeGarage){a.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}I(e.activeGarage);const n=e.isAdmin?null:[(v=e.activeGarage)==null?void 0:v.id].filter(Boolean),{shell:r,contentArea:t,setUnreadEmailCount:s}=K({activePage:"dashboard",title:"Dashboard",headerNote:"Monitor garage operations at a glance",userEmail:e.user.email,onLogout:H,garage:e.activeGarage,isAdmin:e.isAdmin});a.replaceChildren(r),t.innerHTML=`
    <section class="metrics-grid">
      <article class="metric-card"><div><p>Total Appointments</p><img src="${d("sidebar-icons/appointment.png")}" alt="Appointment icon"></div><h2 id="metricTotal">0</h2><p class="subtext">All appointments</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>Today’s Schedule</p><img src="${d("sidebar-icons/calender.png")}" alt="Calendar icon"></div><h2 id="metricToday">0</h2><p class="subtext">Today's schedule</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>Completed</p><img src="${d("sidebar-icons/succes.png")}" alt="Success icon"></div><h2 id="metricCompleted">0</h2><p class="subtext">Completed appointments</p></article>
      <div class="metric-divider"></div>
      <article class="metric-card"><div><p>Pending Emails</p><img src="${d("sidebar-icons/email.png")}" alt="Email icon"></div><h2 id="metricEmails">0</h2><p class="subtext">Yet to read</p></article>
    </section>

    <section class="dashboard-main-grid">
      <section class="panel dashboard-schedule-panel">
        <div class="panel-heading spread">
          <h3>Today’s Schedule</h3>
          <a class="panel-link" href="${S("bookings.html")}">View All <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <a class="panel-link" href="${S("analytics.html")}">View All →</a>
        </div>

        <div class="dashboard-overview-body">
          <ul id="dashboardOverviewLegend" class="overview-legend"></ul>
          <div class="overview-chart-wrap">
            <canvas id="dashboardOverviewChart" aria-label="Appointment overview chart"></canvas>
          </div>
        </div>
      </section>
    </section>
  `;const o=t.querySelector("#metricTotal"),L=t.querySelector("#metricToday"),M=t.querySelector("#metricCompleted"),$=t.querySelector("#metricEmails"),h=t.querySelector("#dashboardScheduleList"),g=t.querySelector("#dashboardOverviewLegend"),N=t.querySelector("#dashboardOverviewChart");try{const l=await P({garageIds:n}),f=U(l),u=l.filter(i=>i.inAppointments===!0),x=l.filter(i=>C(i.status)==="done"),B=k(new Date),b=u.filter(i=>k(i.appointmentAt??i.createdAt)===B).sort((i,w)=>new Date(i.appointmentAt??i.createdAt).getTime()-new Date(w.appointmentAt??w.createdAt).getTime());o.textContent=String(u.length),L.textContent=String(b.length),M.textContent=String(x.length),$.textContent=String(f.unread),h.innerHTML=G(b);const m=Y(u);g.innerHTML=W(m),O(N,m.labels,m.values),s(f.unread)}catch(l){h.innerHTML='<article class="schedule-row"><p class="muted">Unable to load dashboard data.</p></article>',g.innerHTML='<li><span class="muted">Unable to load overview.</span></li>',s(0),console.error(l)}}const F=document.querySelector("#app");D();Z(F);
