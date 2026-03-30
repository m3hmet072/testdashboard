import{c as U}from"./theme-DgkmrLao.js";import{c as N}from"./charts-R4R4JoyE.js";import{e as I,a as M,c as B,l as P,g as O}from"./branding-BAUB0jw_.js";import{s as x}from"./emailService-BZ0Xqht5.js";function p(s){const e=Number(s??0);return Number.isFinite(e)?e:0}function R(s){const e=new Date().toISOString().slice(0,10),i=e.slice(0,7);let r=0,t=0,n=0,o=0,c=0,l=0;for(const d of s){const u=p(d.activeUsers),v=p(d.pageviews),m=p(d.conversions);r+=u,o+=v,c+=m,l=Math.max(l,u),d.date===e&&(t+=u),String(d.date??"").startsWith(i)&&(n+=u)}return{totalVisitors:r,peakVisitors:l,averageVisitors:s.length?Math.round(r/s.length):0,visitorsToday:t,visitorsThisMonth:n,pageviews:o,conversions:c,conversionRate:o?Number((c/o*100).toFixed(2)):0}}function f(s){return R(s)}function q(s){return s.map(e=>({date:String(e.date??""),activeUsers:p(e.activeUsers),pageviews:p(e.pageviews),conversions:p(e.conversions)}))}async function G({propertyId:s,startDate:e,endDate:i}){const r=new URLSearchParams({startDate:e,endDate:i,propertyId:s}),t=await fetch(`/api/googleAnalytics?${r.toString()}`);if(!t.ok)throw new Error(`Analytics request failed (${t.status})`);const n=await t.json(),o=q(Array.isArray(n.visitors)?n.visitors:[]);return{source:n.source??"ga",propertyId:s,visitors:o,summary:n.summary??f(o),warning:n.warning??null}}function _(s){const e=new Map;for(const i of s)for(const r of i.visitors){const t=e.get(r.date)??{date:r.date,activeUsers:0,pageviews:0,conversions:0};t.activeUsers+=p(r.activeUsers),t.pageviews+=p(r.pageviews),t.conversions+=p(r.conversions),e.set(r.date,t)}return Array.from(e.values()).sort((i,r)=>i.date.localeCompare(r.date))}function z(s){return f(s)}async function $({garage:s=null,garages:e=[],isAdmin:i=!1,startDate:r="30daysAgo",endDate:t="today"}={}){var m,g;const n=i?e.filter(a=>a==null?void 0:a.analyticsPropertyId):[s].filter(a=>a==null?void 0:a.analyticsPropertyId);if(!n.length){const a=[];return{source:"ga",visitors:a,summary:f(a),warning:"No analytics_property_id set for this garage. Configure it in the garages table."}}const o=await Promise.allSettled(n.map(a=>G({propertyId:a.analyticsPropertyId,startDate:r,endDate:t}))),c=o.filter(a=>a.status==="fulfilled").map(a=>a.value),l=o.filter(a=>a.status==="rejected");if(!c.length){const a=[];return{source:"ga",visitors:a,summary:f(a),warning:((m=l[0])==null?void 0:m.reason)instanceof Error?l[0].reason.message:"Unable to load Google Analytics data."}}const d=_(c),u=z(d),v=l.length?`Some properties failed to load (${l.length}/${n.length}).`:((g=c.find(a=>a.warning))==null?void 0:g.warning)??null;return{source:c.length>1?"ga-multi":c[0].source,visitors:d,summary:u,warning:v}}const h={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},D=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]),C=["apk","banden","onderhoud","airco","occasions","brakes","other"];function K(s){const e=String(s??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function j(s){return K(s.status)==="done"||s.inAppointments===!1}function H(s){const e=String(s??"").trim();if(!e)return["other"];const i=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(r=>r.trim()).filter(Boolean);return i.length?i:[e]}function Y(s){return D.get(String(s??"").trim().toLowerCase())??"other"}function F(s){const e=new Map(C.map(t=>[t,0]));for(const t of s){const n=new Set(H(t.service).map(o=>Y(o)));n.size||n.add("other");for(const o of n)e.set(o,(e.get(o)??0)+1)}const i=C.map((t,n)=>({key:t,count:e.get(t)??0,index:n})).filter(t=>t.count>0).sort((t,n)=>n.count!==t.count?n.count-t.count:t.index-n.index);if(!i.length)return{labels:["No data"],values:[1],legend:[{key:"other",label:"No data",percentage:0}]};const r=i.reduce((t,n)=>t+n.count,0);return{labels:i.map(({key:t})=>h[t]??h.other),values:i.map(({count:t})=>t),legend:i.map(({key:t,count:n})=>({key:t,label:h[t]??h.other,percentage:Math.round(n/r*100)}))}}function W(s){return s.legend.map(e=>`
      <li>
        <span class="legend-dot legend-dot-${e.key}"></span>
        <span>${e.label}</span>
        <span class="legend-value">${e.percentage}%</span>
      </li>
    `).join("")}async function J(s){var m;if(!s)return;const e=await I();if(!e)return;if(!e.isAdmin&&!e.activeGarage){s.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}M(e.activeGarage);const i=e.isAdmin?null:[(m=e.activeGarage)==null?void 0:m.id].filter(Boolean),{shell:r,contentArea:t,setUnreadEmailCount:n}=B({activePage:"analytics",title:"Analytics",headerNote:"Visitor and booking insights",userEmail:e.user.email,onLogout:P,garage:e.activeGarage,isAdmin:e.isAdmin});s.replaceChildren(r),t.innerHTML=`
    <section class="metrics-grid">
      <article class="metric-card">
        <div class="live-visitors-title">
          <p>Live visitors</p>
          <span class="live-visitors-dot" aria-hidden="true"></span>
        </div>
        <h2 id="metricLiveVisitors">0</h2>
        <span class="metric-note">Currently on website</span>
      </article>
      <article class="metric-card">
       <div>
          <p>Today's visitors</p>
          <img src="/sidebar-icons/userpurple.png" alt="Appointment icon">
        </div>
        <h2 id="metricTodayVisitors">0</h2>
        <span class="metric-note">Unique visitors today</span>
      </article>
      <article class="metric-card">
         <div>
          <p>Total visitors</p>
          <img src="/sidebar-icons/user.png" alt="Appointment icon">
        </div>
        <h2 id="metricTotalVisitors">0</h2>
        <span class="metric-note">All time visitors</span>
      </article>
      <article class="metric-card">
         <div>
          <p>Completed Appointments</p>
          <img src="/sidebar-icons/succes.png" alt="Appointment icon">
        </div>
        <h2 id="metricCompletedAppointments">0</h2>
        <span class="metric-note">All completed jobs</span>
      </article>
    </section>

    <section class="panel dashboard-overview-panel analytics-overview-panel">
      <div class="panel-heading spread">
        <h3>Completed Overview</h3>
      </div>

      <div class="dashboard-overview-body">
        <ul id="analyticsOverviewLegend" class="overview-legend"></ul>
        <div class="overview-chart-wrap">
          <canvas id="analyticsOverviewChart" aria-label="Appointment distribution chart"></canvas>
        </div>
      </div>
    </section>
  `;const o=t.querySelector("#metricLiveVisitors"),c=t.querySelector("#metricTodayVisitors"),l=t.querySelector("#metricTotalVisitors"),d=t.querySelector("#metricCompletedAppointments"),u=t.querySelector("#analyticsOverviewLegend"),v=t.querySelector("#analyticsOverviewChart");try{const[g,a]=await Promise.all([O({garageIds:i}),$({garage:e.activeGarage,garages:e.garages,isAdmin:e.isAdmin})]),V=x(g);n(V.unread);const b=a.visitors.map(w=>Number(w.activeUsers??0)),S=Number(a.summary.visitorsToday??0),k=Number(a.summary.totalVisitors??b.reduce((w,T)=>w+T,0)),E=Number(b.at(-1)??S??0),A=g.filter(j),L=A.length;o.textContent=String(E),c.textContent=String(S),l.textContent=String(k),d.textContent=String(L);const y=F(A);u.innerHTML=W(y),N(v,y.labels,y.values)}catch(g){u.innerHTML='<li><span class="muted">Unable to load analytics data.</span></li>',n(0),console.error(g)}}const Q=document.querySelector("#app");U();J(Q);
