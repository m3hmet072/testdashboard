import"./theme-8bHWXU28.js";import{I as P}from"./charts-BvIUXahZ.js";import{a as k}from"./paths-D6ujGOT0.js";import{n as O}from"./theme-DMvK0XTA.js";import{e as $,l as q}from"./auth-BjeLGIG2.js";import{g as G,s as R}from"./emailService-1laQrJMd.js";import{t as B}from"./branding-D-58_Ovy.js";function p(s){const e=Number(s??0);return Number.isFinite(e)?e:0}function h(s){const e=new Date().toISOString().slice(0,10),r=e.slice(0,7);let n=0,t=0,a=0,o=0,c=0,l=0;for(const d of s){const u=p(d.activeUsers),g=p(d.pageviews),m=p(d.conversions);n+=u,o+=g,c+=m,l=Math.max(l,u),d.date===e&&(t+=u),String(d.date??"").startsWith(r)&&(a+=u)}return{totalVisitors:n,peakVisitors:l,averageVisitors:s.length?Math.round(n/s.length):0,visitorsToday:t,visitorsThisMonth:a,pageviews:o,conversions:c,conversionRate:o?Number((c/o*100).toFixed(2)):0}}function _(s){return s.map(e=>({date:String(e.date??""),activeUsers:p(e.activeUsers),pageviews:p(e.pageviews),conversions:p(e.conversions)}))}async function H({propertyId:s,startDate:e,endDate:r}){const n=new URLSearchParams({startDate:e,endDate:r,propertyId:s}),t=await fetch(`/api/googleAnalytics?${n.toString()}`);if(!t.ok)throw new Error(`Analytics request failed (${t.status})`);const a=await t.json(),o=_(Array.isArray(a.visitors)?a.visitors:[]);return{source:a.source??"ga",propertyId:s,visitors:o,summary:a.summary??h(o),warning:a.warning??null}}function j(s){const e=new Map;for(const r of s)for(const n of r.visitors){const t=e.get(n.date)??{date:n.date,activeUsers:0,pageviews:0,conversions:0};t.activeUsers+=p(n.activeUsers),t.pageviews+=p(n.pageviews),t.conversions+=p(n.conversions),e.set(n.date,t)}return Array.from(e.values()).sort((r,n)=>r.date.localeCompare(n.date))}async function D({garage:s=null,garages:e=[],isAdmin:r=!1,startDate:n="30daysAgo",endDate:t="today"}={}){var m,v;const a=r?e.filter(i=>i==null?void 0:i.analyticsPropertyId):[s].filter(i=>i==null?void 0:i.analyticsPropertyId);if(!a.length)return{source:"ga",visitors:[],summary:h([]),warning:"No analytics_property_id set for this garage. Configure it in the garages table."};const o=await Promise.allSettled(a.map(i=>H({propertyId:i.analyticsPropertyId,startDate:n,endDate:t}))),c=o.filter(i=>i.status==="fulfilled").map(i=>i.value),l=o.filter(i=>i.status==="rejected");if(!c.length)return{source:"ga",visitors:[],summary:h([]),warning:((m=l[0])==null?void 0:m.reason)instanceof Error?l[0].reason.message:"Unable to load Google Analytics data."};const d=j(c),u=h(d),g=l.length?`Some properties failed to load (${l.length}/${a.length}).`:((v=c.find(i=>i.warning))==null?void 0:v.warning)??null;return{source:c.length>1?"ga-multi":c[0].source,visitors:d,summary:u,warning:g}}const F=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]),M=["apk","banden","onderhoud","airco","occasions","brakes","other"],C={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"};function Y(s){const e=String(s??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function K(s){return Y(s.status)==="done"||s.inAppointments===!1}function W(s){const e=String(s??"").trim();if(!e)return["other"];const r=e.includes(",")?/,/g:/\+|\/|&| and /gi,n=e.split(r).map(t=>t.trim()).filter(Boolean);return n.length?n:[e]}function J(s){return F.get(String(s??"").trim().toLowerCase())??"other"}function Q(s){const e=new Map(M.map(t=>[t,0]));for(const t of s){const a=W(t.service),o=new Set(a.map(c=>J(c)));o.size===0&&o.add("other");for(const c of o)e.set(c,(e.get(c)??0)+1)}const r=M.map((t,a)=>({key:t,count:e.get(t)??0,index:a})).filter(t=>t.count>0).sort((t,a)=>t.count!==a.count?a.count-t.count:t.index-a.index);if(!r.length)return{labels:["No data"],values:[1],legend:[{key:"other",label:C.other,percentage:0}]};const n=r.reduce((t,a)=>t+a.count,0);return{labels:r.map(({key:t})=>C[t]??t),values:r.map(({count:t})=>t),legend:r.map(({key:t,count:a})=>({key:t,label:C[t]??t,percentage:Math.round(a/n*100)}))}}function X(s){return s.legend.map(e=>`
      <li>
        <span class="legend-dot legend-dot-${e.key}"></span>
        <span>${e.label}</span>
        <span class="legend-value">${e.percentage}%</span>
      </li>
    `).join("")}async function Z(s){var m,v,i,V;if(!s)return;const e=await $();if(!e)return;if(!e.isAdmin&&!e.activeGarage){s.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}const r=e.isAdmin?null:[(m=e.activeGarage)==null?void 0:m.id].filter(Boolean),{shell:n,contentArea:t,setUnreadEmailCount:a}=B({activePage:"analytics",title:"Analytics",headerNote:"Visitor and booking insights",userEmail:e.user.email,onLogout:q,garage:e.activeGarage,isAdmin:e.isAdmin});s.replaceChildren(n),t.innerHTML=`
    <section class="metrics-grid">
      <article class="metric-card">
        <div class="live-visitors-title">
           <p>Live bezoekers</p>
          <span class="live-visitors-dot" aria-hidden="true"></span>
        </div>
        <h2 id="metricLiveVisitors">0</h2>
        <span class="metric-note">Nu online</span>
      </article>
      <article class="metric-card">
       <div>
           <p>Unieke bezoekers</p>
          <img src="${k("sidebar-icons/userpurple.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricTodayVisitors">0</h2>
        <span class="metric-note">Vandaag</span>
      </article>
      <article class="metric-card">
         <div>
           <p>Totaal bezoekers</p>
          <img src="${k("sidebar-icons/user.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricTotalVisitors">0</h2>
        <span class="metric-note">Alle tijd</span>
      </article>
      <article class="metric-card">
         <div>
           <p>Voltooide afspraken</p>
          <img src="${k("sidebar-icons/succes.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricCompletedAppointments">0</h2>
        <span class="metric-note">Totaal afgerond</span>
      </article>
    </section>

    <section class="panel dashboard-overview-panel analytics-overview-panel">
      <div class="panel-heading spread">
        <h3>Service Verdeling</h3>
      </div>

      <div class="dashboard-overview-body">
        <ul id="analyticsOverviewLegend" class="overview-legend"></ul>
        <div class="overview-chart-wrap">
          <canvas id="analyticsOverviewChart" aria-label="Appointment distribution chart"></canvas>
        </div>
      </div>
    </section>
  `;const o=t.querySelector("#metricLiveVisitors"),c=t.querySelector("#metricTodayVisitors"),l=t.querySelector("#metricTotalVisitors"),d=t.querySelector("#metricCompletedAppointments"),u=t.querySelector("#analyticsOverviewLegend"),g=t.querySelector("#analyticsOverviewChart");try{const f=await Promise.all([G({garageIds:r}),D({garage:e.activeGarage,garages:e.garages,isAdmin:e.isAdmin})]),y=(((v=f[0])==null?void 0:v.data)??[])||[],b=f[1]??{},w=await R(y);a((w==null?void 0:w.unread)??0);const E=(b.visitors??[]).map(S=>Number(S.activeUsers??0)),L=Number(((i=b.summary)==null?void 0:i.visitorsToday)??0),N=Number(((V=b.summary)==null?void 0:V.totalVisitors)??E.reduce((S,z)=>S+z,0)),U=Number(E.at(-1)??L??0),T=(Array.isArray(y)?y:[]).filter(K),x=T.length,I=T;o.textContent=String(U),c.textContent=String(L),l.textContent=String(N),d.textContent=String(x);const A=Q(I);u.innerHTML=X(A),P(g,A.labels,A.values)}catch(f){u.innerHTML='<li><span class="muted">Unable to load analytics data.</span></li>',a(0),console.error(f)}}const ee=document.querySelector("#app");O();Z(ee);
