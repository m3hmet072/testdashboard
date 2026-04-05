import{d,p as k,c as P}from"./theme-CzeyRWKH.js";import{c as K}from"./charts-DureEa3z.js";import{e as U,a as H,c as R,g as V,b as _,s as j,l as z}from"./branding-BCgtwUdv.js";const c={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},G=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]),A=["apk","banden","onderhoud","airco","occasions","brakes","other"];function p(a){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Y(a){return String(a??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function y(a){const e=new Date(a);return Number.isNaN(e.getTime())?null:e}function F(a){const e=y(a);return e?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function E(a){const e=String(a??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function C(a){const e=a instanceof Date?a:y(a);if(!e)return"";const n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${t}`}function T(a){const e=String(a??"").trim();if(!e)return["other"];const n=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(i=>i.trim()).filter(Boolean);return n.length?n:[e]}function L(a){return G.get(String(a??"").trim().toLowerCase())??"other"}function W(a){return T(a).map(e=>{const n=L(e),i=c[n]??c.other;return`<span class="service-chip service-chip-${n}">${p(i)}</span>`}).join("")}function Z(a){const e=E(a);return e==="done"?{label:"Completed",className:"status-chip-completed"}:e==="confirmed"?{label:"Confirmed",className:"status-chip-confirmed"}:{label:"In Progress",className:"status-chip-progress"}}function J(a){return a.length?a.slice(0,4).map(e=>{const n=p(e.licensePlate&&e.licensePlate!=="UNKNOWN"?Y(e.licensePlate):"UNKNOWN"),i=p(F(e.appointmentAt??e.createdAt)),t=Z(e.status);return`
        <article class="schedule-row">
          <div class="schedule-row-main">
            <span class="schedule-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 14.6654C11.6818 14.6654 14.6666 11.6806 14.6666 7.9987C14.6666 4.3168 11.6818 1.33203 7.99992 1.33203C4.31802 1.33203 1.33325 4.3168 1.33325 7.9987C1.33325 11.6806 4.31802 14.6654 7.99992 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${i}</span>
            <span class="plate-chip">${n}</span>
            <div class="request-services">${W(e.service)}</div>
          </div>
          <span class="status-chip ${t.className}">${t.label}</span>
        </article>
      `}).join(""):'<article class="schedule-row-no"><p class="muted">No appointments scheduled for today.</p></article>'}function Q(a){const e=new Map(A.map(t=>[t,0]));for(const t of a){const s=new Set(T(t.service).map(o=>L(o)));s.size||s.add("other");for(const o of s)e.set(o,(e.get(o)??0)+1)}const n=A.map((t,s)=>({key:t,count:e.get(t)??0,index:s})).filter(t=>t.count>0).sort((t,s)=>s.count!==t.count?s.count-t.count:t.index-s.index);if(!n.length)return{labels:["No data"],values:[1],legend:[{key:"other",label:"No data",percentage:0}]};const i=n.reduce((t,s)=>t+s.count,0);return{labels:n.map(({key:t})=>c[t]??c.other),values:n.map(({count:t})=>t),legend:n.map(({key:t,count:s})=>({key:t,label:c[t]??c.other,percentage:Math.round(s/i*100)}))}}function X(a){return a.legend.map(e=>`
      <li>
        <span class="legend-dot legend-dot-${e.key}"></span>
        <span>${p(e.label)}</span>
        <span class="legend-value">${e.percentage}%</span>
      </li>
    `).join("")}async function ee(a){var v;if(!a)return;const e=await U();if(!e)return;if(!e.isAdmin&&!e.activeGarage){a.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}H(e.activeGarage);const n=e.isAdmin?null:[(v=e.activeGarage)==null?void 0:v.id].filter(Boolean),{shell:i,contentArea:t,setUnreadEmailCount:s}=R({activePage:"dashboard",title:"Dashboard",headerNote:"Monitor garage operations at a glance",userEmail:e.user.email,onLogout:z,garage:e.activeGarage,isAdmin:e.isAdmin});a.replaceChildren(i),t.innerHTML=`
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
  `;const o=t.querySelector("#metricTotal"),M=t.querySelector("#metricToday"),$=t.querySelector("#metricCompleted"),N=t.querySelector("#metricEmails"),h=t.querySelector("#dashboardScheduleList"),g=t.querySelector("#dashboardOverviewLegend"),B=t.querySelector("#dashboardOverviewChart");try{const[l,b]=await Promise.all([V({garageIds:n}),_({garageIds:n})]),f=j(l),u=l.filter(r=>r.inAppointments===!0),x=l.filter(r=>E(r.status)==="done"),D=new Set(b.map(r=>String(r.bookingId??r.id??"").trim()).filter(Boolean)),O=x.filter(r=>!D.has(String(r.id??"").trim())),I=[...b,...O],q=C(new Date),w=u.filter(r=>C(r.appointmentAt??r.createdAt)===q).sort((r,S)=>new Date(r.appointmentAt??r.createdAt).getTime()-new Date(S.appointmentAt??S.createdAt).getTime());o.textContent=String(u.length),M.textContent=String(w.length),$.textContent=String(I.length),N.textContent=String(f.unread),h.innerHTML=J(w);const m=Q(u);g.innerHTML=X(m),K(B,m.labels,m.values),s(f.unread)}catch(l){h.innerHTML='<article class="schedule-row"><p class="muted">Unable to load dashboard data.</p></article>',g.innerHTML='<li><span class="muted">Unable to load overview.</span></li>',s(0),console.error(l)}}const te=document.querySelector("#app");P();ee(te);
