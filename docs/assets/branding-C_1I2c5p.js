import{p as f,d as w,g as V,s as Q,h as X,u as R,i as C,j as U,k as G,l as Z,m as O,f as ee,n as te,o as ne,a as ae,q as re}from"./theme-Blf4yLZ3.js";function y(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function se(e){return e==="bookings"?`
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M7 3v3M17 3v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <rect x="4" y="5.5" width="16" height="14.5" rx="4" stroke="currentColor" stroke-width="1.6"/>
        <path d="M4 10h16" stroke="currentColor" stroke-width="1.6"/>
      </svg>
    `:e==="calendar"?`
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M16 3v3M8 3v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
        <rect x="4" y="5.5" width="16" height="14.5" rx="4" stroke="currentColor" stroke-width="1.7"/>
        <path d="M4 10h16" stroke="currentColor" stroke-width="1.7"/>
      </svg>
    `:e==="addappointment"?`<img class="topbar-page-icon topbar-page-icon-addappointment" src="${w("sidebar-icons/addappointment.png")}" alt="Add Appointment icon">`:e==="emails"?`
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.6"/>
        <path d="M4.5 7.5l7.5 5.5 7.5-5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `:e==="analytics"?`
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M4 18h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <rect x="5" y="11" width="3.4" height="5.8" rx="1" fill="currentColor"/>
        <rect x="10.3" y="7.8" width="3.4" height="9" rx="1" fill="currentColor"/>
        <rect x="15.6" y="9.6" width="3.4" height="7.2" rx="1" fill="currentColor"/>
      </svg>
    `:e==="completed"?`
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/>
        <path d="M8.5 12.2l2.2 2.2 4.8-4.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `:`
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 12c0-4.3 3.7-8 8-8h8v8c0 4.3-3.7 8-8 8H4z" stroke="currentColor" stroke-width="1.6"/>
      <path d="M8 8h3M8 12h6M8 16h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>
  `}function ie(e){const t=String((e==null?void 0:e.domain)??"").trim();if(!t)return{href:"https://autoservicehouse.nl",label:"autoservicehouse.nl"};const n=/^https?:\/\//i.test(t)?t:`https://${t}`,a=t.replace(/^https?:\/\//i,"");return{href:n,label:a}}function oe(e){const n={dashboard:"dashboard",calendar:"calender",analytics:"analytics",bookings:"appointment",addappointment:"addappointment",emails:"email",completed:"succes",werkbon:"werkbon"}[e];return n?w(`sidebar-icons/${n}.png`):null}function le({title:e,headerNote:t="",garage:n,activePage:a="dashboard"}){var l;const r=document.createElement("div");r.className="topbar-stack";const i=ie(n),s=y(e);y(t);const o=y(i.label);y(i.href);const p=y(String(((l=n==null?void 0:n.name)==null?void 0:l[0])??"G").toUpperCase()),g=n!=null&&n.logoUrl?`<img class="brand-logo" src="${y(n.logoUrl)}" alt="" />`:`<span class="brand-mark">${p}</span>`,b=y((n==null?void 0:n.name)??""),m=oe(a),h=m?`<img class="topbar-page-icon topbar-page-icon-${y(a)}" src="${m}" alt="${s} icon" />`:`<span class="topbar-page-icon topbar-page-icon-${y(a)}">${se(a)}</span>`;r.innerHTML=`
    <header class="topbar">
      <button class="topbar-hamburger" type="button" aria-label="Open navigation menu">
        ${g}
        <span class="topbar-hamburger-label">${b}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="topbar-main-row">
        <label class="topbar-search" aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 11.332L13.9999 13.9987" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          <input type="search" placeholder="Search..." />
        </label>

        <div class="topbar-domain">
          <div class="topbar-domain-inner-left-side">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.6665 8.0013C1.6665 5.01574 1.6665 3.52296 2.594 2.59546C3.5215 1.66797 5.01428 1.66797 7.99984 1.66797C10.9854 1.66797 12.4782 1.66797 13.4057 2.59546C14.3332 3.52296 14.3332 5.01574 14.3332 8.0013C14.3332 10.9868 14.3332 12.4796 13.4057 13.4072C12.4782 14.3346 10.9854 14.3346 7.99984 14.3346C5.01428 14.3346 3.5215 14.3346 2.594 13.4072C1.6665 12.4796 1.6665 10.9868 1.6665 8.0013Z" stroke="#666666"/>
              <path d="M1.6665 6H14.3332" stroke="#666666" stroke-linejoin="round"/>
              <path d="M4.6665 4H4.67249" stroke="#666666" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.3335 4H7.3395" stroke="#666666" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <a href="https://autoservicehoute.nl">https://${o}</a>
          </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.39917 2C4.96653 2.00438 3.69265 2.06411 2.87855 2.87835C2 3.75704 2 5.17128 2 7.99972C2 10.8282 2 12.2425 2.87855 13.1211C3.7571 13.9999 5.17111 13.9999 7.99917 13.9999C10.8271 13.9999 12.2412 13.9999 13.1197 13.1211C13.9338 12.3069 13.9935 11.0328 13.9979 8.59979" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.7039 2.33132L7.36572 8.7063M13.7039 2.33132C13.3746 2.00158 11.1561 2.03231 10.6871 2.03898M13.7039 2.33132C14.0333 2.66106 14.0025 4.88239 13.9959 5.352" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>

        <a class="topbar-add-link ${a==="add-appointment"?"is-current":""}" href="${f("add-appointment.html")}">
          <img class="navbar-icon-add-appointment" src="${w("sidebar-icons/addappointment.png")}" alt="Email icon">
          <span>Add Appointment</span>
        </a>
      </div>
    </header>

    <div class="topbar-title-row">
      <div class="topbar-title-wrap">
        ${h}
        <h1 class="topbar-title">${s}</h1>
      </div>
    </div>
  `;const c=r.querySelector(".topbar"),d=r.querySelector(".topbar-title-row");return{header:c,titleRow:d}}const ce=[{key:"dashboard",href:f("dashboard.html"),label:"Dashboard",icon:"dashboard"},{key:"calendar",href:f("calendar.html"),label:"Calendar",icon:"calendar"},{key:"bookings",href:f("bookings.html"),label:"Appointment",icon:"appointments"},{key:"completed",href:f("completed.html"),label:"Completed",icon:"completed"},{key:"werkbon",href:f("werkbon.html"),label:"Werkbon",icon:"werkbon"},{key:"addappointment",href:f("add-appointment.html"),label:"Add Appointment",icon:"addappointment"},{key:"emails",href:f("emails.html"),label:"E-mails",icon:"emails",showUnreadBadge:!0},{key:"analytics",href:f("analytics.html"),label:"Analytics",icon:"analytics"}],$={dashboard:w("sidebar-icons/dashboard.png"),appointments:w("sidebar-icons/appointment.png"),calendar:w("sidebar-icons/calender.png"),completed:w("sidebar-icons/succes.png"),werkbon:w("sidebar-icons/werkbon.png"),addappointment:w("sidebar-icons/addappointment.png"),emails:w("sidebar-icons/email.png"),analytics:w("sidebar-icons/analytics.png"),default:w("sidebar-icons/default.png")},T="garage-dashboard.sidebar-collapsed";function de(e){return`<img class="sidebar-link-icon-image" src="${$[e]??$.default}" alt="" width="32" height="33" aria-hidden="true" />`}function ue(e){return e?((String(e).split("@")[0]??"A")[0]??"A").toUpperCase():"A"}function pe(e,t){if(t)return t;const n=String(e??"").trim().split("@")[0];return n?n.split(/[._-]+/g).filter(Boolean).map(a=>a[0].toUpperCase()+a.slice(1)).slice(0,2).join(" "):"Garage User"}function me(e){var t;return e!=null&&e.logoUrl?`<img class="brand-logo" src="${e.logoUrl}" alt="${e.name} logo" />`:`<span class="brand-mark">${String(((t=e==null?void 0:e.name)==null?void 0:t[0])??"A").toUpperCase()}</span>`}function P(e,t){const n=Number(t),a=Number.isFinite(n)?Math.max(0,Math.floor(n)):0;e.querySelectorAll("[data-email-unread-count]").forEach(i=>{i.textContent=a>99?"99+":String(a),i.hidden=a===0})}function he(e,{garage:t,isAdmin:n=!1,userEmail:a="",onLogout:r,unreadEmailCount:i=0}={}){const s=document.createElement("aside");s.className="sidebar";const o=window.localStorage.getItem(T)==="true";o&&(s.classList.add("is-collapsed"),s.dataset.collapsed="true");const p=ce.map(u=>{const v=u.key===e?"is-active":"";return`
      <a class="sidebar-link sidebar-link-${u.key} ${v}" href="${u.href}">
        <span class="sidebar-link-icon">${de(u.icon)}</span>
        <span class="sidebar-link-label">${u.label}</span>
        ${u.showUnreadBadge?'<span class="sidebar-link-count" data-email-unread-count hidden>0</span>':""}
      </a>
    `}).join(""),g=pe(a,n?"Admin":""),b=n?"Owner":(t==null?void 0:t.name)??"Garage Staff",m=V()==="dark",h=o?"Expand sidebar":"Collapse sidebar";s.innerHTML=`
    <div class="sidebar-main">
      <div class="sidebar-brand-row">
        <a href="${f("dashboard.html")}" class="brand">
          ${me(t)}
          <span class="brand-text-wrap">
            <span class="brand-text">${t==null?void 0:t.name}</span>
          </span>
        </a>
        <button class="sidebar-collapse-toggle" type="button" aria-label="${h}" title="${h}">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M20.25 7c0-.69-.56-1.25-1.25-1.25H9.75v12.5H19c.69 0 1.25-.56 1.25-1.25zM3.75 17c0 .69.56 1.25 1.25 1.25h3.25V5.75H5c-.69 0-1.25.56-1.25 1.25zm18 0A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17V7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7z"></path>
          </svg>
        </button>
      </div>

      <p class="sidebar-section-label">Navigate</p>

      <nav class="sidebar-nav">
        ${p}
      </nav>
    </div>

    <div class="sidebar-footer">
      <button class="sidebar-footer-action" type="button" aria-label="Settings">
        <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
          <circle cx="10" cy="10" r="2.2" fill="none" stroke="currentColor" stroke-width="1.5"></circle>
          <path d="M10 2.8v1.8M10 15.4v1.8M17.2 10h-1.8M4.6 10H2.8M15.2 4.8l-1.3 1.3M6.1 13.9l-1.3 1.3M15.2 15.2l-1.3-1.3M6.1 6.1L4.8 4.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
        <span>Settings</span>
      </button>

      <button class="language-switcher" type="button" aria-label="Current language">
        <span class="language-flag" aria-hidden="true">🇬🇧</span>
        <span class="language-code">GB</span>
        <span class="language-name">English</span>
        <span class="language-chevron" aria-hidden="true">▾</span>
      </button>

      <label class="theme-switcher" aria-label="Night mode">
        <span class="theme-switch-label">Night Mode</span>
        <span class="theme-switch-control">
          <input class="theme-switch-input" type="checkbox" data-theme-toggle role="switch" ${m?"checked":""} />
          <span class="theme-switch-track" aria-hidden="true"></span>
        </span>
      </label>

      <div class="sidebar-user-card">
        <span class="sidebar-avatar">${ue(a)}</span>
        <span class="sidebar-user-meta">
          <strong>${g}</strong>
          <small>${a||b}</small>
        </span>
        <button class="sidebar-logout" type="button" aria-label="Log out">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M7 5.5h-2a2 2 0 00-2 2v5a2 2 0 002 2h2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M10 6.2l3.8 3.8-3.8 3.8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M13.5 10H8" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
        </button>
      </div>
    </div>
  `;const c=s.querySelector("[data-theme-toggle]");c instanceof HTMLInputElement&&c.addEventListener("change",()=>{Q(c.checked?"dark":"light")});const d=s.querySelector(".sidebar-logout"),l=s.querySelector(".sidebar-collapse-toggle"),_=u=>{s.classList.toggle("is-collapsed",u),s.dataset.collapsed=u?"true":"false",l==null||l.setAttribute("aria-label",u?"Expand sidebar":"Collapse sidebar"),l==null||l.setAttribute("title",u?"Expand sidebar":"Collapse sidebar"),window.localStorage.setItem(T,u?"true":"false");const v=s.closest(".app-shell");v==null||v.classList.toggle("is-sidebar-collapsed",u)};return l==null||l.addEventListener("click",()=>{_(!s.classList.contains("is-collapsed"))}),typeof r=="function"?d==null||d.addEventListener("click",r):d==null||d.remove(),P(s,i),s}const D="garage-dashboard.prefetched-documents",fe=["/dashboard.html","/calendar.html","/bookings.html","/completed.html","/werkbon.html","/werkbon-detail.html","/add-appointment.html","/emails.html","/analytics.html"];function ge(){try{if(window.sessionStorage.getItem(D)==="true")return;fe.forEach(e=>{if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const t=document.createElement("link");t.rel="prefetch",t.as="document",t.href=e,document.head.append(t)}),window.sessionStorage.setItem(D,"true")}catch{}}function Ue({activePage:e,title:t,headerNote:n="",userEmail:a,unreadEmailCount:r=0,onLogout:i,garage:s,isAdmin:o=!1}){ge();const p=document.createElement("div");p.className="app-shell page-animate";const{header:g,titleRow:b}=le({title:t,headerNote:n,garage:s,activePage:e}),m=he(e,{garage:s,isAdmin:o,userEmail:a,unreadEmailCount:r,onLogout:i}),h=document.createElement("div");h.className="app-workspace";const c=document.createElement("main");c.className="content";const d=document.createElement("div");d.className="main-content",d.append(g,h),h.append(b,c),p.append(m,d);const l=document.createElement("div");l.className="sidebar-overlay",p.append(l);const _=()=>{m.classList.add("open"),l.classList.add("open"),document.body.style.overflow="hidden"},u=()=>{m.classList.remove("open"),l.classList.remove("open"),document.body.style.overflow=""},v=g.querySelector(".topbar-hamburger");return v==null||v.addEventListener("click",_),l.addEventListener("click",u),m.dataset.collapsed==="true"&&p.classList.add("is-sidebar-collapsed"),{shell:p,contentArea:c,setUnreadEmailCount:Y=>{P(m,Y)}}}const F="garage_dashboard_manual_bookings_v1",H="garage_dashboard_booking_workflow_v1",M="Manual appointment created in dashboard.";function E(){return typeof window<"u"&&typeof window.localStorage<"u"}function k(e){return String(e??"").trim()}function j(e){const t=String(e??"new").trim().toLowerCase();return t==="confirmed"||t==="confirm"?"confirmed":t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":"new"}function N(){if(!E())return{};try{const e=window.localStorage.getItem(H);if(!e)return{};const t=JSON.parse(e);return t&&typeof t=="object"?t:{}}catch{return{}}}function q(e){E()&&window.localStorage.setItem(H,JSON.stringify(e))}function B(e,t){const n=k(t);if(!n)return{};const a=e[n];return a&&typeof a=="object"?a:{}}function S(e,t){const n=k(e);if(!n)return;const a=N(),r=B(a,n);a[n]={...r,...t},q(a)}function be(e){const t=k(e);if(!t)return;const n=N();t in n&&(delete n[t],q(n))}function we(e,t){const n=B(t,e.id),a=n.convertedFromEmail===!0,r=n.deleted===!0,i=String(e.source??"").trim().toLowerCase(),s=String(e.message??""),o=i==="manual"||s.includes(M),p=e.hasScheduledAppointment===!0,g=o||p?!0:a,b=typeof n.inAppointments=="boolean"?n.inAppointments:g,m=j(n.status??e.status),h=String(n.appointmentAt??e.appointmentAt??"").trim()||e.createdAt,c=String(n.completedAt??e.completedAt??"").trim()||null;return{...e,status:m,inAppointments:b,convertedFromEmail:a,isDeleted:r,appointmentAt:h,completedAt:c}}function x(){if(!E())return[];try{const e=window.localStorage.getItem(F);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}function W(e){E()&&window.localStorage.setItem(F,JSON.stringify(e))}function Se(e){const t=k(e);if(!t)return!1;const n=x();if(!n.length)return!1;const a=n.filter(r=>k(r.id)!==t);return a.length===n.length?!1:(W(a),!0)}function ve(e,t){const n=new Date(e);return Number.isNaN(n.getTime())?t:n.toISOString()}function ye(){return`MAN-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function ke(e){const t=String(e.appointment_date??e.appointmentDate??"").trim(),n=String(e.appointment_time??e.appointmentTime??"").trim();return!t||!n?"":`${t}T${n}`}function I(e,t){var r;const n=String(e??""),a=new RegExp(`\\b${t}\\s*:\\s*([^\\n]+)`,"i");return(((r=n.match(a))==null?void 0:r[1])??"").trim()}function K(e,t){return{status:"draft",werkbon_created:!1,customer_name:I(e.message,"name")||"Onbekende klant",customer_email:I(e.message,"email")||"",customer_phone:String(e.phone??"").trim(),car_model:"Voertuig",service_types:[String(e.service??"Service")],km_stand:0,vat_enabled:!0,description:I(e.message,"message")||"",internal_note:"",invoice_number:"",paid_at:null,completed_at:t,parts:[{name:"Service",quantity:1,price:0}],labour:{hours:0,rate:0},totals:{subtotal:0,vat:0,total:0},updated_at:new Date().toISOString()}}function z(e){if(e&&typeof e=="object"){const n=k(e.id),a=String(e.garageId??e.garage_id??"").trim();return{bookingId:n,garageId:a,isLocalOnly:n.startsWith("MAN-")}}const t=k(e);return{bookingId:t,garageId:"",isLocalOnly:t.startsWith("MAN-")}}function Ce(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase booking_schedule table or bookings_with_schedule view is missing. Run the schedule SQL migration first."):t==="42501"?new Error("Supabase blocked the schedule update. Check RLS policies for booking_schedule."):e instanceof Error?e:new Error("Unable to save the appointment schedule.")}function J(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase bookings table is missing. Run the schema SQL first."):t==="42501"?new Error("Supabase blocked deleting this booking. Check RLS policies for bookings."):e instanceof Error?e:new Error("Unable to delete the appointment.")}function _e(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase completed_appointments table is missing. Run the completed SQL migration first."):t==="42501"?new Error("Supabase blocked deleting this completed appointment. Check RLS policies for completed_appointments."):e instanceof Error?e:new Error("Unable to delete the completed appointment.")}function A(e){const t=e.created_at??e.createdAt??new Date().toISOString(),n=ke(e),a=String(e.appointment_at??e.appointmentAt??"").trim(),r=a||n||t,i=!!(a||n);return{id:e.id,garageId:e.garage_id??e.garageId,licensePlate:e.license_plate??"Unknown plate",phone:e.phone??"",service:e.service??"Service request",message:e.message??"",appointmentAt:r,completedAt:e.completed_at??e.completedAt??null,status:e.status??e.state??"new",source:e.source??"form",hasScheduledAppointment:i,createdAt:t}}function Ae({garageIds:e=null}={}){const t=x();return t.length?(Array.isArray(e)&&e.length?t.filter(a=>e.includes(a.garage_id??a.garageId)):t).map(A):[]}function Ee(e,t){return new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()}function Ge(e){S(e,{convertedFromEmail:!0,inAppointments:!0,status:"new"})}function Pe(e,t){S(e,{status:j(t)})}async function Fe(e,t){const n=String(t??"").trim();if(!n)throw new Error("Please choose both a date and time for the appointment.");const{bookingId:a,garageId:r,isLocalOnly:i}=z(e);if(!a)throw new Error("Booking id is required before saving a schedule.");if(!i&&r)try{await R({bookingId:a,garageId:r,appointmentAt:n})}catch(s){throw Ce(s)}return S(a,{appointmentAt:n}),n}async function He(e){const{bookingId:t,garageId:n,isLocalOnly:a}=z(e);if(!t)throw new Error("Booking id is required before deleting a booking.");if(a)return Se(t),be(t),!0;if(!C())return S(t,{deleted:!0,inAppointments:!1,status:"deleted"}),!0;let r;try{r=await G({bookingId:t,garageId:n})}catch(i){throw J(i)}if(!r)throw new Error("Supabase did not delete this booking (row not found or blocked by RLS policy).");return S(t,{deleted:!0,inAppointments:!1,status:"deleted"}),!0}async function je(e){const t=String((e==null?void 0:e.completedAppointmentId)??(e==null?void 0:e.id)??e).trim(),n=String((e==null?void 0:e.garageId)??(e==null?void 0:e.garage_id)??"").trim(),a=String((e==null?void 0:e.bookingId)??"").trim();if(!t)throw new Error("Completed appointment id is required before deleting.");if(!C())return a&&S(a,{deleted:!0,inAppointments:!1}),!0;let r;try{r=await O({completedAppointmentId:t,garageId:n})}catch(i){throw _e(i)}if(!r)throw new Error("Supabase did not delete this completed appointment (row not found or blocked by RLS policy).");if(a)try{await G({bookingId:a,garageId:n})}catch(i){throw J(i)}return a&&S(a,{deleted:!0,inAppointments:!1,status:"deleted"}),!0}async function qe(e,{convertedFromEmail:t=!1}={}){const n=e&&typeof e=="object"?e:null,a=k((n==null?void 0:n.id)??e),r=new Date().toISOString(),i={inAppointments:!1,status:"done",completedAt:r};if(t&&(i.convertedFromEmail=!0),S(a,i),!n||!C())return{persistedToSupabase:!1};const s=String(n.garageId??n.garage_id??"").trim();if(!s)return{persistedToSupabase:!1};try{const o=K(n,r);return await U({garageId:s,bookingId:a,appointmentAt:n.appointmentAt,completedAt:r,licensePlate:n.licensePlate,service:n.service,completionNotes:o}),{persistedToSupabase:!0}}catch(o){if(String((o==null?void 0:o.code)??"")==="42501"||Number((o==null?void 0:o.status)??0)===403)return{persistedToSupabase:!1,warning:"RLS_BLOCKED"};throw o}}async function Be(e){if(!C())return null;const t=String(e.garageId??e.garage_id??"").trim();if(!t)return null;const n=e.completedAt||new Date().toISOString(),a={...K(e,n),werkbon_created:!0};try{const r=await U({garageId:t,bookingId:String(e.id??""),appointmentAt:e.appointmentAt,completedAt:n,licensePlate:e.licensePlate,service:e.service,completionNotes:a});return String((r==null?void 0:r.id)??"")}catch(r){if(String((r==null?void 0:r.code)??"")==="42501"||Number((r==null?void 0:r.status)??0)===403)return null;throw r}}async function We(e,{created:t=!0}={}){if(!C())return null;const n=String((e==null?void 0:e.completedAppointmentId)??(e==null?void 0:e.id)??e).trim(),a=String((e==null?void 0:e.garageId)??(e==null?void 0:e.garage_id)??"").trim();if(!n)return null;try{const r=await Z({completedAppointmentId:n,garageId:a,werkbonCreated:t});return r?String(r.id??""):null}catch(r){if(String((r==null?void 0:r.code)??"")==="42501"||Number((r==null?void 0:r.status)??0)===403)return null;throw r}}async function Ke({garageIds:e=null}={}){return C()?(await ee({garageIds:e})).map(n=>{let a={};try{a=JSON.parse(String(n.completion_notes??"{}"))}catch{a={}}let r=String(a.customer_name??a.customerName??"").trim();if(!r&&a.description){const i=String(a.description).match(/\bname\s*:\s*([^\n]+)/i);i&&i[1]&&(r=i[1].trim())}return{id:String(n.booking_id??n.id),completedAppointmentId:String(n.id??""),bookingId:n.booking_id?String(n.booking_id):"",garageId:String(n.garage_id??""),licensePlate:String(n.license_plate??""),phone:String(a.customer_phone??a.customerPhone??""),service:String(n.service??"Service"),message:String(a.description??""),customerName:r,werkbonCreated:a.werkbon_created===!0,appointmentAt:n.appointment_date&&n.appointment_time?`${n.appointment_date}T${String(n.appointment_time).slice(0,8)}`:String(n.completed_at??n.created_at??""),completedAt:String(n.completed_at??n.created_at??""),status:"done",inAppointments:!1,source:"completed",createdAt:String(n.created_at??n.completed_at??"")}}):[]}async function ze({garageId:e,licensePlate:t,phone:n,service:a,message:r,appointmentAt:i}){const s=String(e??"").trim(),o=String(t??"").trim().toUpperCase(),p=String(n??"").trim(),g=String(a??"").trim(),b=String(r??"").trim(),m=b.includes(M)?b:`${b}
${M}`;if(!s)throw new Error("A garage is required before creating a manual appointment.");if(!o||!p||!g||!b||!i)throw new Error("Please fill in kenteken, phone number, service, bericht, and appointment date.");const h=new Date().toISOString(),c=ve(i,h),d=await te({garageId:s,licensePlate:o,phone:p,service:g,message:m,createdAt:h});if(d){try{await R({bookingId:d.id,garageId:s,appointmentAt:c})}catch(u){console.warn("Unable to persist booking schedule in Supabase booking_schedule.",u)}return S(d.id,{convertedFromEmail:!1,inAppointments:!0,status:"new",appointmentAt:c}),A({...d,appointment_at:c,source:"manual",status:"new"})}const l={id:ye(),garage_id:s,license_plate:o,phone:p,service:g,message:m,appointment_at:c,status:"new",source:"manual",created_at:h},_=x();return _.unshift(l),W(_.slice(0,500)),S(l.id,{convertedFromEmail:!1,inAppointments:!0,status:"new",appointmentAt:c}),A(l)}async function Je({garageIds:e=null}={}){const t=await X({garageIds:e}),n=Ae({garageIds:e}),a=N(),r=[...t.map(A),...n],i=new Map;for(const s of r){const o=String(s.id??"").trim();o&&(i.has(o)||i.set(o,s))}return Array.from(i.values()).map(s=>we(s,a)).filter(s=>s.isDeleted!==!0).sort(Ee)}function Ie(e){return{id:e.id,name:e.name??"Garage",domain:e.domain??"",analyticsPropertyId:e.analytics_property_id??null,logoUrl:e.logo_url??"",userId:e.user_id??""}}function Me(e){var r,i;const t="owner@gmail.com".split(",").map(s=>s.trim().toLowerCase()).filter(Boolean),n=String((e==null?void 0:e.email)??"").toLowerCase();return(((r=e==null?void 0:e.app_metadata)==null?void 0:r.role)??((i=e==null?void 0:e.user_metadata)==null?void 0:i.role)??"")==="admin"||t.includes(n)}async function Ne(e){const t=Me(e),n=(await ne({userId:e.id,includeAll:t})).map(Ie);return{garages:n,activeGarage:n[0]??null,isAdmin:t}}const L="garage-dashboard.auth-context",xe=5*60*1e3;function Le(){try{const e=window.sessionStorage.getItem(L);if(!e)return null;const t=JSON.parse(e);if(!t||typeof t!="object")return null;const n=Number(t.expiresAt??0);return!Number.isFinite(n)||Date.now()>n?null:t}catch{return null}}function $e(e,t){try{const n={userId:e.id,email:String(e.email??""),isAdmin:t.isAdmin,garages:t.garages??[],activeGarage:t.activeGarage??null,expiresAt:Date.now()+xe};window.sessionStorage.setItem(L,JSON.stringify(n))}catch{}}function Te(){try{window.sessionStorage.removeItem(L)}catch{}}async function Ye(){if(!C())return window.location.href=f("index.html"),null;const e=await ae();if(!e)return window.location.href=f("index.html"),null;const t=Le();if(t&&t.userId===e.user.id&&String(e.user.email??"")===t.email)return{user:e.user,garages:Array.isArray(t.garages)?t.garages:[],activeGarage:t.activeGarage??null,isAdmin:!!t.isAdmin,isDemo:!1};const n=await Ne(e.user);return $e(e.user,n),{user:e.user,...n,isDemo:!1}}async function Ve(){try{await re()}finally{Te(),window.location.href=f("index.html")}}function Qe(){const e=document.documentElement;e.style.removeProperty("--brand-primary"),e.style.removeProperty("--brand-secondary"),e.style.removeProperty("--brand-primary-rgb"),e.style.removeProperty("--brand-secondary-rgb")}export{Qe as a,Pe as b,Ue as c,He as d,Ye as e,Be as f,Je as g,je as h,Ke as i,ze as j,Ge as k,Ve as l,qe as m,Fe as p,We as s};
