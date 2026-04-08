import{d as S,c as O}from"./theme-C7qkBi-i.js";import{c as q}from"./charts-VtSD5TS0.js";import{e as B,a as G,c as R,l as z,t as m,b as D,d as _,s as F,f as A,g as $}from"./branding-CAr728QY.js";function p(a){const e=Number(a??0);return Number.isFinite(e)?e:0}function H(a){const e=new Date().toISOString().slice(0,10),o=e.slice(0,7);let r=0,i=0,t=0,s=0,c=0,l=0;for(const d of a){const u=p(d.activeUsers),y=p(d.pageviews),v=p(d.conversions);r+=u,s+=y,c+=v,l=Math.max(l,u),d.date===e&&(i+=u),String(d.date??"").startsWith(o)&&(t+=u)}return{totalVisitors:r,peakVisitors:l,averageVisitors:a.length?Math.round(r/a.length):0,visitorsToday:i,visitorsThisMonth:t,pageviews:s,conversions:c,conversionRate:s?Number((c/s*100).toFixed(2)):0}}function h(a){return H(a)}function K(a){return a.map(e=>({date:String(e.date??""),activeUsers:p(e.activeUsers),pageviews:p(e.pageviews),conversions:p(e.conversions)}))}async function j({propertyId:a,startDate:e,endDate:o}){const r=new URLSearchParams({startDate:e,endDate:o,propertyId:a}),i=await fetch(`/api/googleAnalytics?${r.toString()}`);if(!i.ok)throw new Error(`Analytics request failed (${i.status})`);const t=await i.json(),s=K(Array.isArray(t.visitors)?t.visitors:[]);return{source:t.source??"ga",propertyId:a,visitors:s,summary:t.summary??h(s),warning:t.warning??null}}function W(a){const e=new Map;for(const o of a)for(const r of o.visitors){const i=e.get(r.date)??{date:r.date,activeUsers:0,pageviews:0,conversions:0};i.activeUsers+=p(r.activeUsers),i.pageviews+=p(r.pageviews),i.conversions+=p(r.conversions),e.set(r.date,i)}return Array.from(e.values()).sort((o,r)=>o.date.localeCompare(r.date))}function Y(a){return h(a)}async function J({garage:a=null,garages:e=[],isAdmin:o=!1,startDate:r="30daysAgo",endDate:i="today"}={}){var v,f;const t=o?e.filter(n=>n==null?void 0:n.analyticsPropertyId):[a].filter(n=>n==null?void 0:n.analyticsPropertyId);if(!t.length){const n=[];return{source:"ga",visitors:n,summary:h(n),warning:"No analytics_property_id set for this garage. Configure it in the garages table."}}const s=await Promise.allSettled(t.map(n=>j({propertyId:n.analyticsPropertyId,startDate:r,endDate:i}))),c=s.filter(n=>n.status==="fulfilled").map(n=>n.value),l=s.filter(n=>n.status==="rejected");if(!c.length){const n=[];return{source:"ga",visitors:n,summary:h(n),warning:((v=l[0])==null?void 0:v.reason)instanceof Error?l[0].reason.message:"Unable to load Google Analytics data."}}const d=W(c),u=Y(d),y=l.length?`Some properties failed to load (${l.length}/${t.length}).`:((f=c.find(n=>n.warning))==null?void 0:f.warning)??null;return{source:c.length>1?"ga-multi":c[0].source,visitors:d,summary:u,warning:y}}const Q=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]),L=["apk","banden","onderhoud","airco","occasions","brakes","other"];function X(a){const e=String(a??"").trim().toLowerCase();return e==="done"||e==="completed"||e==="complete"||e==="closed"?"done":e==="confirmed"||e==="confirm"?"confirmed":"new"}function Z(a){return X(a.status)==="done"||a.inAppointments===!1}function ee(a){const e=String(a??"").trim();if(!e)return["other"];const o=e.split(e.includes(",")?/,/g:/\+|\/|&| and /gi).map(r=>r.trim()).filter(Boolean);return o.length?o:[e]}function te(a){return Q.get(String(a??"").trim().toLowerCase())??"other"}function ae(a){const e=new Map(L.map(t=>[t,0]));for(const t of a){const s=new Set(ee(t.service).map(c=>te(c)));s.size||s.add("other");for(const c of s)e.set(c,(e.get(c)??0)+1)}const o=L.map((t,s)=>({key:t,count:e.get(t)??0,index:s})).filter(t=>t.count>0).sort((t,s)=>s.count!==t.count?s.count-t.count:t.index-s.index);if(!o.length)return{labels:["No data"],values:[1],legend:[{key:"other",label:A("other",$()),percentage:0}]};const r=o.reduce((t,s)=>t+s.count,0),i=$();return{labels:o.map(({key:t})=>A(t,i)),values:o.map(({count:t})=>t),legend:o.map(({key:t,count:s})=>({key:t,label:A(t,i),percentage:Math.round(s/r*100)}))}}function se(a){return a.legend.map(e=>`
      <li>
        <span class="legend-dot legend-dot-${e.key}"></span>
        <span>${e.label}</span>
        <span class="legend-value">${e.percentage}%</span>
      </li>
    `).join("")}async function ne(a){var v;if(!a)return;const e=await B();if(!e)return;if(!e.isAdmin&&!e.activeGarage){a.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}G(e.activeGarage);const o=e.isAdmin?null:[(v=e.activeGarage)==null?void 0:v.id].filter(Boolean),{shell:r,contentArea:i,setUnreadEmailCount:t}=R({activePage:"analytics",title:"Analytics",headerNote:"Visitor and booking insights",userEmail:e.user.email,onLogout:z,garage:e.activeGarage,isAdmin:e.isAdmin});a.replaceChildren(r),i.innerHTML=`
    <section class="metrics-grid">
      <article class="metric-card">
        <div class="live-visitors-title">
          <p>${m("analytics",lang)}</p>
          <span class="live-visitors-dot" aria-hidden="true"></span>
        </div>
        <h2 id="metricLiveVisitors">0</h2>
        <span class="metric-note">${m("currentlyOnWebsite",lang)}</span>
      </article>
      <article class="metric-card">
       <div>
          <p>${m("todaysVisitors",lang)}</p>
          <img src="${S("sidebar-icons/userpurple.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricTodayVisitors">0</h2>
        <span class="metric-note">${m("uniqueVisitorsToday",lang)}</span>
      </article>
      <article class="metric-card">
         <div>
          <p>${m("totalVisitors",lang)}</p>
          <img src="${S("sidebar-icons/user.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricTotalVisitors">0</h2>
        <span class="metric-note">${m("allTimeVisitors",lang)}</span>
      </article>
      <article class="metric-card">
         <div>
          <p>${m("completedAppointments",lang)}</p>
          <img src="${S("sidebar-icons/succes.png")}" alt="Appointment icon">
        </div>
        <h2 id="metricCompletedAppointments">0</h2>
        <span class="metric-note">${m("allCompletedJobs",lang)}</span>
      </article>
    </section>

    <section class="panel dashboard-overview-panel analytics-overview-panel">
      <div class="panel-heading spread">
        <h3>${m("completedOverview",lang)}</h3>
      </div>

      <div class="dashboard-overview-body">
        <ul id="analyticsOverviewLegend" class="overview-legend"></ul>
        <div class="overview-chart-wrap">
          <canvas id="analyticsOverviewChart" aria-label="Appointment distribution chart"></canvas>
        </div>
      </div>
    </section>
  `;const s=i.querySelector("#metricLiveVisitors"),c=i.querySelector("#metricTodayVisitors"),l=i.querySelector("#metricTotalVisitors"),d=i.querySelector("#metricCompletedAppointments"),u=i.querySelector("#analyticsOverviewLegend"),y=i.querySelector("#analyticsOverviewChart");try{const[f,n,b]=await Promise.all([D({garageIds:o}),_({garageIds:o}),J({garage:e.activeGarage,garages:e.garages,isAdmin:e.isAdmin})]),T=F(f);t(T.unread);const C=b.visitors.map(g=>Number(g.activeUsers??0)),V=Number(b.summary.visitorsToday??0),E=Number(b.summary.totalVisitors??C.reduce((g,x)=>g+x,0)),U=Number(C.at(-1)??V??0),I=f.filter(Z),M=new Set(n.map(g=>String(g.bookingId??g.id??"").trim()).filter(Boolean)),N=I.filter(g=>!M.has(String(g.id??"").trim())),k=[...n,...N],P=k.length;s.textContent=String(U),c.textContent=String(V),l.textContent=String(E),d.textContent=String(P);const w=ae(k);u.innerHTML=se(w),q(y,w.labels,w.values)}catch(f){u.innerHTML='<li><span class="muted">Unable to load analytics data.</span></li>',t(0),console.error(f)}}const ie=document.querySelector("#app");O();ne(ie);
