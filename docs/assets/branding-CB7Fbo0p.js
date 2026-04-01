import{p as v,d as $,g as Ze,s as Qe,h as Ye,u as ke,i as R,j as Se,k as ye,l as Oe,m as Xe,f as _e,n as et,o as tt,a as nt,q as at}from"./theme-C3aD1XeO.js";function x(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function rt(e){return e==="bookings"?`
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
    `:e==="addappointment"?`<img class="topbar-page-icon topbar-page-icon-addappointment" src="${$("sidebar-icons/addappointment.png")}" alt="Add Appointment icon">`:e==="emails"?`
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
  `}function st(e){const t=String((e==null?void 0:e.domain)??"").trim();if(!t)return{href:"https://autoservicehouse.nl",label:"autoservicehouse.nl"};const n=/^https?:\/\//i.test(t)?t:`https://${t}`,a=t.replace(/^https?:\/\//i,"");return{href:n,label:a}}function ot(e){const n={dashboard:"dashboard",calendar:"calender",analytics:"analytics",bookings:"appointment",addappointment:"addappointment",emails:"email",completed:"succes",werkbon:"werkbon"}[e];return n?$(`sidebar-icons/${n}.png`):null}function it({title:e,headerNote:t="",garage:n,activePage:a="dashboard"}){var c;const r=document.createElement("div");r.className="topbar-stack";const o=st(n),i=x(e);x(t);const d=x(o.label);x(o.href);const h=x(String(((c=n==null?void 0:n.name)==null?void 0:c[0])??"G").toUpperCase()),u=n!=null&&n.logoUrl?`<img class="brand-logo" src="${x(n.logoUrl)}" alt="" />`:`<span class="brand-mark">${h}</span>`,y=x((n==null?void 0:n.name)??""),b=ot(a),s=b?`<img class="topbar-page-icon topbar-page-icon-${x(a)}" src="${b}" alt="${i} icon" />`:`<span class="topbar-page-icon topbar-page-icon-${x(a)}">${rt(a)}</span>`;r.innerHTML=`
    <header class="topbar">
      <button class="topbar-hamburger" type="button" aria-label="Open navigation menu">
        ${u}
        <span class="topbar-hamburger-label">${y}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="topbar-main-row">
        <div class="topbar-global-search" data-global-search-root>
          <button class="topbar-mobile-search-trigger" type="button" aria-label="Open global search">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
              <path d="M11.3333 11.332L13.9999 13.9987" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <div class="topbar-search-shell">
            <label class="topbar-search" aria-label="Global search">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                <path d="M11.3333 11.332L13.9999 13.9987" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <input class="topbar-search-input" type="search" placeholder="Zoek afspraken, werkbonnen, klanten..." autocomplete="off" />
              <span class="topbar-search-shortcut" data-search-shortcut-hint>Ctrl+K</span>
            </label>
            <div class="global-search-dropdown" data-global-search-dropdown hidden></div>
          </div>
        </div>

        <div class="topbar-domain">
          <div class="topbar-domain-inner-left-side">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.6665 8.0013C1.6665 5.01574 1.6665 3.52296 2.594 2.59546C3.5215 1.66797 5.01428 1.66797 7.99984 1.66797C10.9854 1.66797 12.4782 1.66797 13.4057 2.59546C14.3332 3.52296 14.3332 5.01574 14.3332 8.0013C14.3332 10.9868 14.3332 12.4796 13.4057 13.4072C12.4782 14.3346 10.9854 14.3346 7.99984 14.3346C5.01428 14.3346 3.5215 14.3346 2.594 13.4072C1.6665 12.4796 1.6665 10.9868 1.6665 8.0013Z" stroke="#666666"/>
              <path d="M1.6665 6H14.3332" stroke="#666666" stroke-linejoin="round"/>
              <path d="M4.6665 4H4.67249" stroke="#666666" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.3335 4H7.3395" stroke="#666666" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <a href="https://autoservicehoute.nl">https://${d}</a>
          </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.39917 2C4.96653 2.00438 3.69265 2.06411 2.87855 2.87835C2 3.75704 2 5.17128 2 7.99972C2 10.8282 2 12.2425 2.87855 13.1211C3.7571 13.9999 5.17111 13.9999 7.99917 13.9999C10.8271 13.9999 12.2412 13.9999 13.1197 13.1211C13.9338 12.3069 13.9935 11.0328 13.9979 8.59979" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.7039 2.33132L7.36572 8.7063M13.7039 2.33132C13.3746 2.00158 11.1561 2.03231 10.6871 2.03898M13.7039 2.33132C14.0333 2.66106 14.0025 4.88239 13.9959 5.352" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>

        <a class="topbar-add-link ${a==="add-appointment"?"is-current":""}" href="${v("add-appointment.html")}">
          <img class="navbar-icon-add-appointment" src="${$("sidebar-icons/addappointment.png")}" alt="Email icon">
          <span>Add Appointment</span>
        </a>
      </div>
    </header>

    <div class="topbar-title-row">
      <div class="topbar-title-wrap">
        ${s}
        <h1 class="topbar-title">${i}</h1>
      </div>
    </div>
  `;const p=r.querySelector(".topbar"),g=r.querySelector(".topbar-title-row");return{header:p,titleRow:g}}const ct=[{key:"dashboard",href:v("dashboard.html"),label:"Dashboard",icon:"dashboard"},{key:"calendar",href:v("calendar.html"),label:"Calendar",icon:"calendar"},{key:"bookings",href:v("bookings.html"),label:"Appointment",icon:"appointments"},{key:"completed",href:v("completed.html"),label:"Completed",icon:"completed"},{key:"werkbon",href:v("werkbon.html"),label:"Werkbon",icon:"werkbon"},{key:"addappointment",href:v("add-appointment.html"),label:"Add Appointment",icon:"addappointment"},{key:"emails",href:v("emails.html"),label:"E-mails",icon:"emails",showUnreadBadge:!0},{key:"analytics",href:v("analytics.html"),label:"Analytics",icon:"analytics"}],ue={dashboard:$("sidebar-icons/dashboard.png"),appointments:$("sidebar-icons/appointment.png"),calendar:$("sidebar-icons/calender.png"),completed:$("sidebar-icons/succes.png"),werkbon:$("sidebar-icons/werkbon.png"),addappointment:$("sidebar-icons/addappointment.png"),emails:$("sidebar-icons/email.png"),analytics:$("sidebar-icons/analytics.png"),default:$("sidebar-icons/default.png")},pe="garage-dashboard.sidebar-collapsed";function lt(e){return`<img class="sidebar-link-icon-image" src="${ue[e]??ue.default}" alt="" width="32" height="33" aria-hidden="true" />`}function dt(e){return e?((String(e).split("@")[0]??"A")[0]??"A").toUpperCase():"A"}function ut(e,t){if(t)return t;const n=String(e??"").trim().split("@")[0];return n?n.split(/[._-]+/g).filter(Boolean).map(a=>a[0].toUpperCase()+a.slice(1)).slice(0,2).join(" "):"Garage User"}function pt(e){var t;return e!=null&&e.logoUrl?`<img class="brand-logo" src="${e.logoUrl}" alt="${e.name} logo" />`:`<span class="brand-mark">${String(((t=e==null?void 0:e.name)==null?void 0:t[0])??"A").toUpperCase()}</span>`}function Ce(e,t){const n=Number(t),a=Number.isFinite(n)?Math.max(0,Math.floor(n)):0;e.querySelectorAll("[data-email-unread-count]").forEach(o=>{o.textContent=a>99?"99+":String(a),o.hidden=a===0})}function mt(e,{garage:t,isAdmin:n=!1,userEmail:a="",onLogout:r,unreadEmailCount:o=0}={}){const i=document.createElement("aside");i.className="sidebar";const d=window.localStorage.getItem(pe)==="true";d&&(i.classList.add("is-collapsed"),i.dataset.collapsed="true");const h=ct.map(k=>{const m=k.key===e?"is-active":"";return`
      <a class="sidebar-link sidebar-link-${k.key} ${m}" href="${k.href}">
        <span class="sidebar-link-icon">${lt(k.icon)}</span>
        <span class="sidebar-link-label">${k.label}</span>
        ${k.showUnreadBadge?'<span class="sidebar-link-count" data-email-unread-count hidden>0</span>':""}
      </a>
    `}).join(""),u=ut(a,n?"Admin":""),y=n?"Owner":(t==null?void 0:t.name)??"Garage Staff",b=Ze()==="dark",s=d?"Expand sidebar":"Collapse sidebar";i.innerHTML=`
    <div class="sidebar-main">
      <div class="sidebar-brand-row">
        <a href="${v("dashboard.html")}" class="brand">
          ${pt(t)}
          <span class="brand-text-wrap">
            <span class="brand-text">${t==null?void 0:t.name}</span>
          </span>
        </a>
        <button class="sidebar-collapse-toggle" type="button" aria-label="${s}" title="${s}">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M20.25 7c0-.69-.56-1.25-1.25-1.25H9.75v12.5H19c.69 0 1.25-.56 1.25-1.25zM3.75 17c0 .69.56 1.25 1.25 1.25h3.25V5.75H5c-.69 0-1.25.56-1.25 1.25zm18 0A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17V7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7z"></path>
          </svg>
        </button>
      </div>

      <p class="sidebar-section-label">Navigate</p>

      <nav class="sidebar-nav">
        ${h}
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
          <input class="theme-switch-input" type="checkbox" data-theme-toggle role="switch" ${b?"checked":""} />
          <span class="theme-switch-track" aria-hidden="true"></span>
        </span>
      </label>

      <div class="sidebar-user-card">
        <span class="sidebar-avatar">${dt(a)}</span>
        <span class="sidebar-user-meta">
          <strong>${u}</strong>
          <small>${a||y}</small>
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
  `;const p=i.querySelector("[data-theme-toggle]");p instanceof HTMLInputElement&&p.addEventListener("change",()=>{Qe(p.checked?"dark":"light")});const g=i.querySelector(".sidebar-logout"),c=i.querySelector(".sidebar-collapse-toggle"),C=k=>{i.classList.toggle("is-collapsed",k),i.dataset.collapsed=k?"true":"false",c==null||c.setAttribute("aria-label",k?"Expand sidebar":"Collapse sidebar"),c==null||c.setAttribute("title",k?"Expand sidebar":"Collapse sidebar"),window.localStorage.setItem(pe,k?"true":"false");const m=i.closest(".app-shell");m==null||m.classList.toggle("is-sidebar-collapsed",k)};return c==null||c.addEventListener("click",()=>{C(!i.classList.contains("is-collapsed"))}),typeof r=="function"?g==null||g.addEventListener("click",r):g==null||g.remove(),Ce(i,o),i}const Ae="garage_dashboard_manual_bookings_v1",Ee="garage_dashboard_booking_workflow_v1",Y="Manual appointment created in dashboard.";function V(){return typeof window<"u"&&typeof window.localStorage<"u"}function T(e){return String(e??"").trim()}function Le(e){const t=String(e??"new").trim().toLowerCase();return t==="confirmed"||t==="confirm"?"confirmed":t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":"new"}function X(){if(!V())return{};try{const e=window.localStorage.getItem(Ee);if(!e)return{};const t=JSON.parse(e);return t&&typeof t=="object"?t:{}}catch{return{}}}function $e(e){V()&&window.localStorage.setItem(Ee,JSON.stringify(e))}function Me(e,t){const n=T(t);if(!n)return{};const a=e[n];return a&&typeof a=="object"?a:{}}function I(e,t){const n=T(e);if(!n)return;const a=X(),r=Me(a,n);a[n]={...r,...t},$e(a)}function ht(e){const t=T(e);if(!t)return;const n=X();t in n&&(delete n[t],$e(n))}function ft(e,t){const n=Me(t,e.id),a=n.convertedFromEmail===!0,r=n.deleted===!0,o=String(e.source??"").trim().toLowerCase(),i=String(e.message??""),d=o==="manual"||i.includes(Y),h=e.hasScheduledAppointment===!0,u=d||h?!0:a,y=typeof n.inAppointments=="boolean"?n.inAppointments:u,b=Le(n.status??e.status),s=String(n.appointmentAt??e.appointmentAt??"").trim()||e.createdAt,p=String(n.completedAt??e.completedAt??"").trim()||null;return{...e,status:b,inAppointments:y,convertedFromEmail:a,isDeleted:r,appointmentAt:s,completedAt:p}}function ee(){if(!V())return[];try{const e=window.localStorage.getItem(Ae);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}function Ie(e){V()&&window.localStorage.setItem(Ae,JSON.stringify(e))}function gt(e){const t=T(e);if(!t)return!1;const n=ee();if(!n.length)return!1;const a=n.filter(r=>T(r.id)!==t);return a.length===n.length?!1:(Ie(a),!0)}function wt(e,t){const n=new Date(e);return Number.isNaN(n.getTime())?t:n.toISOString()}function bt(){return`MAN-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function vt(e){const t=String(e.appointment_date??e.appointmentDate??"").trim(),n=String(e.appointment_time??e.appointmentTime??"").trim();return!t||!n?"":`${t}T${n}`}function Z(e,t){var r;const n=String(e??""),a=new RegExp(`\\b${t}\\s*:\\s*([^\\n]+)`,"i");return(((r=n.match(a))==null?void 0:r[1])??"").trim()}function xe(e,t){return{status:"draft",werkbon_created:!1,customer_name:Z(e.message,"name")||"Onbekende klant",customer_email:Z(e.message,"email")||"",customer_phone:String(e.phone??"").trim(),car_model:"Voertuig",service_types:[String(e.service??"Service")],km_stand:0,vat_enabled:!0,description:Z(e.message,"message")||"",internal_note:"",invoice_number:"",paid_at:null,completed_at:t,parts:[{name:"Service",quantity:1,price:0}],labour:{hours:0,rate:0},totals:{subtotal:0,vat:0,total:0},updated_at:new Date().toISOString()}}function Ne(e){if(e&&typeof e=="object"){const n=T(e.id),a=String(e.garageId??e.garage_id??"").trim();return{bookingId:n,garageId:a,isLocalOnly:n.startsWith("MAN-")}}const t=T(e);return{bookingId:t,garageId:"",isLocalOnly:t.startsWith("MAN-")}}function kt(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase booking_schedule table or bookings_with_schedule view is missing. Run the schedule SQL migration first."):t==="42501"?new Error("Supabase blocked the schedule update. Check RLS policies for booking_schedule."):e instanceof Error?e:new Error("Unable to save the appointment schedule.")}function Te(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase bookings table is missing. Run the schema SQL first."):t==="42501"?new Error("Supabase blocked deleting this booking. Check RLS policies for bookings."):e instanceof Error?e:new Error("Unable to delete the appointment.")}function St(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase completed_appointments table is missing. Run the completed SQL migration first."):t==="42501"?new Error("Supabase blocked deleting this completed appointment. Check RLS policies for completed_appointments."):e instanceof Error?e:new Error("Unable to delete the completed appointment.")}function K(e){const t=e.created_at??e.createdAt??new Date().toISOString(),n=vt(e),a=String(e.appointment_at??e.appointmentAt??"").trim(),r=a||n||t,o=!!(a||n);return{id:e.id,garageId:e.garage_id??e.garageId,licensePlate:e.license_plate??"Unknown plate",phone:e.phone??"",service:e.service??"Service request",message:e.message??"",appointmentAt:r,completedAt:e.completed_at??e.completedAt??null,status:e.status??e.state??"new",source:e.source??"form",hasScheduledAppointment:o,createdAt:t}}function yt({garageIds:e=null}={}){const t=ee();return t.length?(Array.isArray(e)&&e.length?t.filter(a=>e.includes(a.garage_id??a.garageId)):t).map(K):[]}function _t(e,t){return new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()}function cn(e){I(e,{convertedFromEmail:!0,inAppointments:!0,status:"new"})}function ln(e,t){I(e,{status:Le(t)})}async function dn(e,t){const n=String(t??"").trim();if(!n)throw new Error("Please choose both a date and time for the appointment.");const{bookingId:a,garageId:r,isLocalOnly:o}=Ne(e);if(!a)throw new Error("Booking id is required before saving a schedule.");if(!o&&r)try{await ke({bookingId:a,garageId:r,appointmentAt:n})}catch(i){throw kt(i)}return I(a,{appointmentAt:n}),n}async function un(e){const{bookingId:t,garageId:n,isLocalOnly:a}=Ne(e);if(!t)throw new Error("Booking id is required before deleting a booking.");if(a)return gt(t),ht(t),!0;if(!R())return I(t,{deleted:!0,inAppointments:!1,status:"deleted"}),!0;let r;try{r=await ye({bookingId:t,garageId:n})}catch(o){throw Te(o)}if(!r)throw new Error("Supabase did not delete this booking (row not found or blocked by RLS policy).");return I(t,{deleted:!0,inAppointments:!1,status:"deleted"}),!0}async function pn(e){const t=String((e==null?void 0:e.completedAppointmentId)??(e==null?void 0:e.id)??e).trim(),n=String((e==null?void 0:e.garageId)??(e==null?void 0:e.garage_id)??"").trim(),a=String((e==null?void 0:e.bookingId)??"").trim();if(!t)throw new Error("Completed appointment id is required before deleting.");if(!R())return a&&I(a,{deleted:!0,inAppointments:!1}),!0;let r;try{r=await Xe({completedAppointmentId:t,garageId:n})}catch(o){throw St(o)}if(!r)throw new Error("Supabase did not delete this completed appointment (row not found or blocked by RLS policy).");if(a)try{await ye({bookingId:a,garageId:n})}catch(o){throw Te(o)}return a&&I(a,{deleted:!0,inAppointments:!1,status:"deleted"}),!0}async function mn(e,{convertedFromEmail:t=!1}={}){const n=e&&typeof e=="object"?e:null,a=T((n==null?void 0:n.id)??e),r=new Date().toISOString(),o={inAppointments:!1,status:"done",completedAt:r};if(t&&(o.convertedFromEmail=!0),I(a,o),!n||!R())return{persistedToSupabase:!1};const i=String(n.garageId??n.garage_id??"").trim();if(!i)return{persistedToSupabase:!1};try{const d=xe(n,r);return await Se({garageId:i,bookingId:a,appointmentAt:n.appointmentAt,completedAt:r,licensePlate:n.licensePlate,service:n.service,completionNotes:d}),{persistedToSupabase:!0}}catch(d){if(String((d==null?void 0:d.code)??"")==="42501"||Number((d==null?void 0:d.status)??0)===403)return{persistedToSupabase:!1,warning:"RLS_BLOCKED"};throw d}}async function hn(e){if(!R())return null;const t=String(e.garageId??e.garage_id??"").trim();if(!t)return null;const n=e.completedAt||new Date().toISOString(),a={...xe(e,n),werkbon_created:!0};try{const r=await Se({garageId:t,bookingId:String(e.id??""),appointmentAt:e.appointmentAt,completedAt:n,licensePlate:e.licensePlate,service:e.service,completionNotes:a});return String((r==null?void 0:r.id)??"")}catch(r){if(String((r==null?void 0:r.code)??"")==="42501"||Number((r==null?void 0:r.status)??0)===403)return null;throw r}}async function fn(e,{created:t=!0}={}){if(!R())return null;const n=String((e==null?void 0:e.completedAppointmentId)??(e==null?void 0:e.id)??e).trim(),a=String((e==null?void 0:e.garageId)??(e==null?void 0:e.garage_id)??"").trim();if(!n)return null;try{const r=await Oe({completedAppointmentId:n,garageId:a,werkbonCreated:t});return r?String(r.id??""):null}catch(r){if(String((r==null?void 0:r.code)??"")==="42501"||Number((r==null?void 0:r.status)??0)===403)return null;throw r}}async function Ct({garageIds:e=null}={}){return R()?(await _e({garageIds:e})).map(n=>{let a={};try{a=JSON.parse(String(n.completion_notes??"{}"))}catch{a={}}let r=String(a.customer_name??a.customerName??"").trim();if(!r&&a.description){const o=String(a.description).match(/\bname\s*:\s*([^\n]+)/i);o&&o[1]&&(r=o[1].trim())}return{id:String(n.booking_id??n.id),completedAppointmentId:String(n.id??""),bookingId:n.booking_id?String(n.booking_id):"",garageId:String(n.garage_id??""),licensePlate:String(n.license_plate??""),phone:String(a.customer_phone??a.customerPhone??""),service:String(n.service??"Service"),message:String(a.description??""),customerName:r,werkbonCreated:a.werkbon_created===!0,appointmentAt:n.appointment_date&&n.appointment_time?`${n.appointment_date}T${String(n.appointment_time).slice(0,8)}`:String(n.completed_at??n.created_at??""),completedAt:String(n.completed_at??n.created_at??""),status:"done",inAppointments:!1,source:"completed",createdAt:String(n.created_at??n.completed_at??"")}}):[]}async function gn({garageId:e,licensePlate:t,phone:n,service:a,message:r,appointmentAt:o}){const i=String(e??"").trim(),d=String(t??"").trim().toUpperCase(),h=String(n??"").trim(),u=String(a??"").trim(),y=String(r??"").trim(),b=y.includes(Y)?y:`${y}
${Y}`;if(!i)throw new Error("A garage is required before creating a manual appointment.");if(!d||!h||!u||!y||!o)throw new Error("Please fill in kenteken, phone number, service, bericht, and appointment date.");const s=new Date().toISOString(),p=wt(o,s),g=await et({garageId:i,licensePlate:d,phone:h,service:u,message:b,createdAt:s});if(g){try{await ke({bookingId:g.id,garageId:i,appointmentAt:p})}catch(k){console.warn("Unable to persist booking schedule in Supabase booking_schedule.",k)}return I(g.id,{convertedFromEmail:!1,inAppointments:!0,status:"new",appointmentAt:p}),K({...g,appointment_at:p,source:"manual",status:"new"})}const c={id:bt(),garage_id:i,license_plate:d,phone:h,service:u,message:b,appointment_at:p,status:"new",source:"manual",created_at:s},C=ee();return C.unshift(c),Ie(C.slice(0,500)),I(c.id,{convertedFromEmail:!1,inAppointments:!0,status:"new",appointmentAt:p}),K(c)}async function At({garageIds:e=null}={}){const t=await Ye({garageIds:e}),n=yt({garageIds:e}),a=X(),r=[...t.map(K),...n],o=new Map;for(const i of r){const d=String(i.id??"").trim();d&&(o.has(d)||o.set(d,i))}return Array.from(o.values()).map(i=>ft(i,a)).filter(i=>i.isDeleted!==!0).sort(_t)}const Re="garage_dashboard_email_read_state_v1";function He(){return typeof window<"u"&&typeof window.localStorage<"u"}function De(){if(!He())return{};try{const e=window.localStorage.getItem(Re);if(!e)return{};const t=JSON.parse(e);return t&&typeof t=="object"?t:{}}catch{return{}}}function Et(e){He()&&window.localStorage.setItem(Re,JSON.stringify(e))}function te(e){return String(e??"").trim()}function Q(e,t){var a;const n=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((a=e.match(n))==null?void 0:a[1])??"").trim()}function Lt(e){const t=String(e??"").trim();return t?/\b(?:name|email|message)\s*:/i.test(t)?{name:Q(t,"name"),email:Q(t,"email"),message:Q(t,"message")}:{name:"",email:"",message:t}:{name:"",email:"",message:""}}function me(e){const n=new Date(e).getTime();return Number.isFinite(n)?n:0}function $t(e){const t=String(e??"new").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function Be(e){return String((e==null?void 0:e.source)??"form")==="manual"||(e==null?void 0:e.hasScheduledAppointment)===!0||(e==null?void 0:e.convertedFromEmail)===!0?!1:$t(e==null?void 0:e.status)!=="done"}function Pe(e){const t=te(e);return t?De()[t]===!0:!1}function wn(e,t=!0){const n=te(e);if(!n)return;const a=De();t?a[n]=!0:delete a[n],Et(a)}function bn(e){const t=e.filter(Be);let n=0;for(const a of t)Pe(a.id)||(n+=1);return{total:t.length,unread:n}}function Mt(e,{garageNameById:t=new Map}={}){return e.filter(Be).map(n=>{const a=Lt(n.message),r=te(n.id),o=`${n.licensePlate??"Unknown"} • ${n.service??"Service request"}`,i=a.message||String(n.message??"").trim()||"No message provided.",d=a.name||"Website form",h=a.email||"";return{id:r,subject:o,preview:i,message:i,senderName:d,senderEmail:h,phone:n.phone??"",service:n.service??"",licensePlate:n.licensePlate??"",garageId:n.garageId,garageName:t.get(n.garageId)??"",receivedAt:n.createdAt,appointmentAt:n.appointmentAt??n.createdAt,read:Pe(r)}}).sort((n,a)=>me(a.receivedAt)-me(n.receivedAt))}const he=2,It=300,xt=3e4,Nt=6e4,ne=80,Ue="garage-dashboard.recent-searches",je=5,j=new Map,F=new Map;function _(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Tt(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function L(e,t){const n=_(e??""),a=String(t??"").trim().slice(0,ne);if(!a)return n;const r=new RegExp(`(${Tt(a)})`,"ig");return n.replace(r,"<mark>$1</mark>")}function U(e){const t=String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"");return t?t.replace(/(.{2})(?=.)/g,"$1-"):""}function G(e){const t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleDateString("nl-NL",{day:"2-digit",month:"short",year:"numeric"})}function fe(e){const t=Number(e??0);return Number.isFinite(t)?new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2}).format(t):"EUR 0,00"}function ae(e){const t=String(e??"").trim().toLowerCase();return["done","completed","complete","closed"].includes(t)?"completed":["confirmed","confirm"].includes(t)?"confirmed":t||"new"}function Rt(e){const t=ae(e);return t==="completed"?"Voltooid":t==="confirmed"?"Bevestigd":t==="new"?"Nieuw":t}function ge(e){const t=String(e??"").replace(/[^a-z0-9]/gi,"");return t.length>=4&&/[a-z]/i.test(t)&&/\d/.test(t)}function we(e){return/\d/.test(String(e??""))}function M(e){return{calendar:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 2.75V5M14 2.75V5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="3" y="4.5" width="14" height="12.5" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M3 8.5H17" stroke="currentColor" stroke-width="1.6"/></svg>',fileText:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6.5 2.5H11.5L15.5 6.5V15.5C15.5 16.33 14.83 17 14 17H6C5.17 17 4.5 16.33 4.5 15.5V4C4.5 3.17 5.17 2.5 6 2.5H6.5Z" stroke="currentColor" stroke-width="1.6"/><path d="M11.5 2.5V6.5H15.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 10H13M7 13H11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',check:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.8 10.2L8.9 12.3L13.3 7.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',user:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="6.5" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M4 16.2C4.8 13.9 6.8 12.8 10 12.8C13.2 12.8 15.2 13.9 16 16.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',mail:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="4.5" width="14" height="11" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M4.5 6L10 10L15.5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',car:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 11.5L5.5 7.5C5.8 6.8 6.4 6.4 7.2 6.4H12.8C13.6 6.4 14.2 6.8 14.5 7.5L16 11.5" stroke="currentColor" stroke-width="1.6"/><rect x="3.2" y="10" width="13.6" height="5.5" rx="1.8" stroke="currentColor" stroke-width="1.6"/><circle cx="6.5" cy="14" r="1.1" fill="currentColor"/><circle cx="13.5" cy="14" r="1.1" fill="currentColor"/></svg>',receipt:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 2.8H14V16.8L12 15.5L10 16.8L8 15.5L6 16.8V2.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 6.8H12M8 9.8H12M8 12.8H11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',plus:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.5V13.5M6.5 10H13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',settings:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 6.9A3.1 3.1 0 1 1 10 13.1A3.1 3.1 0 0 1 10 6.9Z" stroke="currentColor" stroke-width="1.6"/><path d="M16.1 10.9L15 11.4C14.9 11.8 14.7 12.2 14.5 12.5L14.9 13.7L13.7 14.9L12.5 14.5C12.2 14.7 11.8 14.9 11.4 15L10.9 16.1H9.1L8.6 15C8.2 14.9 7.8 14.7 7.5 14.5L6.3 14.9L5.1 13.7L5.5 12.5C5.3 12.2 5.1 11.8 5 11.4L3.9 10.9V9.1L5 8.6C5.1 8.2 5.3 7.8 5.5 7.5L5.1 6.3L6.3 5.1L7.5 5.5C7.8 5.3 8.2 5.1 8.6 5L9.1 3.9H10.9L11.4 5C11.8 5.1 12.2 5.3 12.5 5.5L13.7 5.1L14.9 6.3L14.5 7.5C14.7 7.8 14.9 8.2 15 8.6L16.1 9.1V10.9Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',clock:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.4V10L12.5 11.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',searchX:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.8" stroke="currentColor" stroke-width="1.6"/><path d="M12.7 12.7L17 17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M6.8 6.8L10.2 10.2M10.2 6.8L6.8 10.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',arrowLeft:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M11.8 4.8L6.6 10L11.8 15.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'}[e]??""}function re(){try{const e=JSON.parse(window.localStorage.getItem(Ue)||"[]");return Array.isArray(e)?e.map(t=>String(t??"").trim()).filter(Boolean).slice(0,je):[]}catch{return[]}}function O(e){try{window.localStorage.setItem(Ue,JSON.stringify(e.slice(0,je)))}catch{}}function Ht(e){const t=String(e??"").trim();if(!t)return;const n=re().filter(a=>a.toLowerCase()!==t.toLowerCase());n.unshift(t),O(n)}function q(e){const t=ae(e);return t==="completed"?'<span class="global-search-badge global-search-badge-success">Voltooid</span>':t==="confirmed"?'<span class="global-search-badge global-search-badge-info">Bevestigd</span>':t==="new"?'<span class="global-search-badge global-search-badge-muted">Nieuw</span>':`<span class="global-search-badge global-search-badge-muted">${_(Rt(t))}</span>`}function Dt(){return/Mac|iPhone|iPad|iPod/i.test(window.navigator.platform)?"⌘K":"Ctrl+K"}function Fe(e,t){var r;const n=String(e??""),a=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((r=n.match(a))==null?void 0:r[1])??"").trim()}function z(e){return String(e??"").toLowerCase().replace(/[^a-z0-9]/g,"")}function Bt(e){return String(e??"").trim().slice(0,ne)}function Pt(e){return Fe(e==null?void 0:e.message,"name")||"Onbekende klant"}function Ut(e){return Fe(e==null?void 0:e.message,"email")}function jt(e,t,n,a){const r=e.filter(s=>ae(s==null?void 0:s.status)!=="completed"&&(s==null?void 0:s.inAppointments)!==!1).map(s=>({id:s.id,customer_name:Pt(s),customer_email:Ut(s),customer_phone:String(s.phone??""),license_plate:String(s.licensePlate??""),car_brand:String(s.service??"Service"),status:s.status,appointment_date:s.appointmentAt||s.createdAt,services:s.service})),o=t.map(s=>({id:s.id,customer_name:s.customerName||"Onbekende klant",license_plate:s.licensePlate,car_brand:s.service||"Service",appointment_date:s.appointmentAt||s.completedAt||s.createdAt,status:"completed"})),i=[...r,...o],d=new Map;r.forEach(s=>{const p=`${s.customer_name}|${s.customer_email}|${s.license_plate}`.toLowerCase();d.has(p)||d.set(p,{customer_name:s.customer_name,customer_email:s.customer_email,customer_phone:s.customer_phone,license_plate:s.license_plate,car_brand:s.car_brand})});const h=new Map;n.forEach(s=>{let p={};try{p=JSON.parse(String(s.completion_notes??"{}"))}catch{p={}}h.set(String(s.id??""),p)});const u=t.map(s=>{var c;const p=h.get(String(s.completedAppointmentId??""))??{},g=Number(((c=p==null?void 0:p.totals)==null?void 0:c.total)??0);return{id:s.completedAppointmentId,customer_name:s.customerName||String(p.customer_name??"Onbekende klant"),license_plate:s.licensePlate,car_brand:String(p.car_model??s.service??"Service"),total:g,status:String(p.status??"draft"),factuurnummer:String(p.invoice_number??"").trim(),created_at:s.createdAt}}),y=u.filter(s=>s.factuurnummer),b=a.map(s=>({id:s.id,from_name:s.senderName,from_email:s.senderEmail,subject:s.subject,created_at:s.receivedAt,read:s.read}));return{appointmentsSource:r,completedSource:o,plateSource:i,customerSource:Array.from(d.values()),werkbonSource:u,invoiceSource:y,emailsSource:b}}function Ft(e){const t=(u,y)=>u.map(b=>({...b,_searchToken:z(y.map(s=>String(b[s]??"")).join(" "))})),n=t(e.appointmentsSource,["customer_name","customer_email","customer_phone","license_plate","car_brand"]),a=t(e.completedSource,["customer_name","license_plate","car_brand"]),r=t(e.customerSource,["customer_name","customer_email","customer_phone","license_plate","car_brand"]),o=t(e.werkbonSource,["customer_name","license_plate","car_brand","factuurnummer"]),i=t(e.emailsSource,["from_name","from_email","subject"]),d=[...n,...a].map(u=>({...u,_plateToken:z(u.license_plate)})),h=e.invoiceSource.map(u=>({...u,_invoiceToken:z(u.factuurnummer)}));return{appointments:n,completed:a,customers:r,werkbonnen:o,emails:i,plates:d,invoices:h}}function D(e,t,n,a){const r=[];for(const o of e)if(a(o,t)&&(r.push(o),r.length>=n))break;return r}async function Gt(e){const t=String(e??"").trim(),n=Date.now(),a=F.get(t);if(a!=null&&a.data&&n-a.timestamp<Nt)return a.data;if(a!=null&&a.inFlight)return a.inFlight;const r=Promise.all([At({garageIds:[t]}),Ct({garageIds:[t]}),_e({garageIds:[t]})]).then(([o,i,d])=>{const h=Mt(o),u=jt(o,i,d,h);return{indexed:Ft(u)}});F.set(t,{timestamp:n,data:(a==null?void 0:a.data)??null,inFlight:r});try{const o=await r;return F.set(t,{timestamp:Date.now(),data:o,inFlight:null}),o}catch(o){if(a!=null&&a.data)return a.data;throw F.delete(t),o}}function be(e){const t=String(e??"").trim().toLowerCase(),n=[{key:"new-appointment",icon:"plus",title:"Nieuwe afspraak toevoegen",match:["nieuwe afspraak","afspraak"],navigate:()=>{window.location.href=v("add-appointment.html")}},{key:"new-werkbon",icon:"fileText",title:"Nieuwe werkbon maken",match:["werkbon","factuur"],navigate:()=>{window.location.href=v("werkbon.html?action=create")}},{key:"calendar",icon:"calendar",title:"Kalender bekijken",match:["kalender","agenda"],navigate:()=>{window.location.href=v("calendar.html")}},{key:"settings",icon:"settings",title:"Instellingen openen",match:["instellingen","settings"],navigate:()=>{window.location.href=v("settings.html")}}];return t?n.filter(a=>a.match.some(r=>t.includes(r))):[]}async function qt(e,t){const n=Bt(e),a=`${t}:${n.toLowerCase()}`;if(j.has(a))return j.get(a);if(!R())return{appointments:[],werkbonnen:[],completed:[],customers:[],emails:[],plates:[],invoices:[],includePlateSection:ge(n),includeInvoiceSection:we(n),quickActions:be(n)};const r=ge(n),o=we(n),i=z(n),{indexed:d}=await Gt(t),h=[],u=async(m,S)=>{try{const E=await S();return h.push({label:m,count:Array.isArray(E)?E.length:0,ok:!0}),Array.isArray(E)?E:[]}catch(E){return h.push({label:m,count:0,ok:!1,error:E instanceof Error?E.message:String(E??"Unknown error")}),[]}},[y,b,s,p,g,c,C]=await Promise.all([u("appointments",()=>Promise.resolve(D(d.appointments,i,4,(m,S)=>m._searchToken.includes(S)))),u("werkbonnen",()=>Promise.resolve(D(d.werkbonnen,i,4,(m,S)=>m._searchToken.includes(S)))),u("completed",()=>Promise.resolve(D(d.completed,i,3,(m,S)=>m._searchToken.includes(S)))),u("customers",()=>Promise.resolve(D(d.customers,i,3,(m,S)=>m._searchToken.includes(S)))),u("emails",()=>Promise.resolve(D(d.emails,i,3,(m,S)=>m._searchToken.includes(S)))),r?u("plates",()=>Promise.resolve(D(d.plates,i,4,(m,S)=>m._plateToken.includes(S)))):Promise.resolve([]),o?u("invoices",()=>Promise.resolve(D(d.invoices,i,3,(m,S)=>m._invoiceToken.includes(S)))):Promise.resolve([])]),k={appointments:y,werkbonnen:b,completed:s,customers:p,emails:g,plates:c,invoices:C,includePlateSection:r,includeInvoiceSection:o,quickActions:be(n)};return j.set(a,k),window.setTimeout(()=>{j.delete(a)},xt),k}function zt(e,t,n){const a=`data-search-item-index="${n}"`;return e.type==="appointment"?`
      <button class="search-result-item" type="button" ${a}>
        <span class="search-result-icon search-result-icon-appointments">${M("calendar")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${L(e.customerName,t)}</span>
          <span class="search-result-secondary">${_(e.carBrand||"-")} <span class="plate-chip plate-chip-small">${_(U(e.plate)||"UNKNOWN")}</span></span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${_(e.date)}</span>
          ${q(e.status)}
        </span>
      </button>
    `:e.type==="werkbon"?`
      <button class="search-result-item" type="button" ${a}>
        <span class="search-result-icon search-result-icon-werkbonnen">${M("fileText")}</span>
        <span class="search-result-main">
          <span class="search-result-primary"><small class="search-result-muted">${L(e.factuur,t)}</small> ${L(e.customerName,t)}</span>
          <span class="search-result-secondary"><span class="plate-chip plate-chip-small">${_(U(e.plate)||"UNKNOWN")}</span> ${_(e.carBrand||"-")}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${_(e.total)}</span>
          ${q(e.status)}
        </span>
      </button>
    `:e.type==="completed"?`
      <button class="search-result-item" type="button" ${a}>
        <span class="search-result-icon search-result-icon-completed">${M("check")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${L(e.customerName,t)}</span>
          <span class="search-result-secondary">${_(e.carBrand||"-")} <span class="plate-chip plate-chip-small">${_(U(e.plate)||"UNKNOWN")}</span></span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${_(e.date)}</span>
          <span class="global-search-badge global-search-badge-success">Voltooid</span>
        </span>
      </button>
    `:e.type==="customer"?`
      <button class="search-result-item" type="button" ${a}>
        <span class="search-result-icon search-result-icon-customers">${M("user")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${L(e.customerName,t)}</span>
          <span class="search-result-secondary">${L(e.email,t)}</span>
        </span>
        <span class="search-result-side">
          <span class="plate-chip plate-chip-small">${_(U(e.plate)||"UNKNOWN")}</span>
          <span class="search-result-muted">${_(e.carBrand||"-")}</span>
        </span>
      </button>
    `:e.type==="email"?`
      <button class="search-result-item" type="button" ${a}>
        <span class="search-result-icon search-result-icon-emails">${M("mail")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${e.unread?'<span class="search-unread-dot"></span>':""}${L(e.sender,t)}</span>
          <span class="search-result-secondary">${L(e.subject,t)}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${_(e.date)}</span>
          ${e.unread?'<span class="global-search-badge global-search-badge-info">Ongelezen</span>':""}
        </span>
      </button>
    `:e.type==="plate"?`
      <button class="search-result-item" type="button" ${a}>
        <span class="search-result-icon search-result-icon-plates">${M("car")}</span>
        <span class="search-result-main">
          <span class="search-result-primary"><span class="plate-chip">${L(U(e.plate),t)}</span></span>
          <span class="search-result-secondary">${_(e.carBrand||"-")} - ${_(e.customerName||"-")}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${_(e.date)}</span>
          ${q(e.status)}
        </span>
      </button>
    `:e.type==="invoice"?`
      <button class="search-result-item" type="button" ${a}>
        <span class="search-result-icon search-result-icon-invoices">${M("receipt")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${L(e.factuur,t)}</span>
          <span class="search-result-secondary">${L(e.customerName,t)}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${_(e.total)}</span>
          ${q(e.status)}
        </span>
      </button>
    `:`
    <button class="search-result-item" type="button" ${a}>
      <span class="search-result-icon search-result-icon-actions">${M(e.icon)}</span>
      <span class="search-result-main">
        <span class="search-result-primary">${L(e.title,t)}</span>
      </span>
    </button>
  `}function Kt(e,t,n,a){if(!t.length)return"";const r=t.map((o,i)=>zt(o,n,a+i)).join("");return`
    <section class="search-section" data-search-section>
      <header class="search-section-header">
        <span>${_(e)}</span>
        <span>${t.length}</span>
      </header>
      <div class="search-section-items">
        ${r}
      </div>
    </section>
  `}function Vt(e){return`
    <div class="search-empty-state">
      <span class="search-empty-icon">${M("searchX")}</span>
      <strong>Geen resultaten voor '${_(e)}'</strong>
      <p>Probeer een andere zoekterm</p>
    </div>
  `}function Wt(){return`
    <div class="search-loading-stack">
      ${Array.from({length:4}).map(()=>`
        <div class="search-loading-section">
          <div class="skeleton search-loading-head"></div>
          <div class="skeleton search-loading-row"></div>
          <div class="skeleton search-loading-row"></div>
          <div class="skeleton search-loading-row"></div>
        </div>
      `).join("")}
    </div>
  `}function Jt(){const e=re();return e.length?`
    <section class="search-section">
      <header class="search-section-header"><span>Recente zoekopdrachten</span><span>${e.length}</span></header>
      <div class="search-recents">
        ${e.map((t,n)=>`
          <button class="search-recent-item" type="button" data-recent-index="${n}" data-recent-term="${_(t)}">
            <span class="search-recent-left">${M("clock")} ${_(t)}</span>
            <span class="search-recent-remove" role="button" tabindex="0" data-recent-remove="${n}">×</span>
          </button>
        `).join("")}
      </div>
      <button class="search-clear-history" type="button" data-recent-clear="true">Wis geschiedenis</button>
    </section>
  `:`
      <section class="search-section">
        <header class="search-section-header"><span>Recente zoekopdrachten</span><span>0</span></header>
        <div class="search-empty-small">Nog geen recente zoekopdrachten.</div>
      </section>
    `}function Zt(e){return{plates:e.plates.map(t=>({type:"plate",plate:t.license_plate,carBrand:t.car_brand,customerName:t.customer_name,date:G(t.appointment_date),status:t.status,open:()=>{const n=new URL(v("bookings.html"),window.location.origin);n.searchParams.set("plate",String(t.license_plate??"")),window.location.href=`${n.pathname}${n.search}`}})),appointments:e.appointments.map(t=>({type:"appointment",customerName:t.customer_name,carBrand:t.car_brand,plate:t.license_plate,date:G(t.appointment_date),status:t.status,open:()=>{const n=new URL(v("bookings.html"),window.location.origin);n.searchParams.set("bookingId",String(t.id)),window.location.href=`${n.pathname}${n.search}`}})),werkbonnen:e.werkbonnen.map(t=>({type:"werkbon",factuur:t.factuurnummer||"Factuur",customerName:t.customer_name,plate:t.license_plate,carBrand:t.car_brand,total:fe(t.total),status:t.status,open:()=>{window.location.href=v(`werkbon-detail.html?id=${encodeURIComponent(String(t.id))}`)}})),completed:e.completed.map(t=>({type:"completed",customerName:t.customer_name,plate:t.license_plate,carBrand:t.car_brand,date:G(t.appointment_date),open:()=>{const n=new URL(v("completed.html"),window.location.origin);n.searchParams.set("customer",String(t.customer_name??"")),window.location.href=`${n.pathname}${n.search}`}})),customers:e.customers.map(t=>({type:"customer",customerName:t.customer_name,email:t.customer_email||t.customer_phone||"-",plate:t.license_plate,carBrand:t.car_brand,open:()=>{const n=new URL(v("bookings.html"),window.location.origin);n.searchParams.set("customer",String(t.customer_name??"")),window.location.href=`${n.pathname}${n.search}`}})),emails:e.emails.map(t=>({type:"email",sender:t.from_name||t.from_email||"Onbekend",subject:t.subject||"(geen onderwerp)",unread:t.read===!1,date:G(t.created_at),open:()=>{const n=new URL(v("emails.html"),window.location.origin);n.searchParams.set("emailId",String(t.id)),window.location.href=`${n.pathname}${n.search}`}})),invoices:e.invoices.map(t=>({type:"invoice",factuur:t.factuurnummer||"Factuur",customerName:t.customer_name,total:fe(t.total),status:t.status,open:()=>{window.location.href=v(`werkbon-detail.html?id=${encodeURIComponent(String(t.id))}`)}})),quickActions:e.quickActions.map(t=>({type:"action",icon:t.icon,title:t.title,open:t.navigate}))}}function Qt({header:e,garageId:t}){if(!(e instanceof HTMLElement)||!t)return;const n=e.querySelector("[data-global-search-root]");if(!(n instanceof HTMLElement)||n.dataset.searchInitialized==="true")return;n.dataset.searchInitialized="true";const a=n.querySelector(".topbar-search-shell"),r=n.querySelector(".topbar-search-input"),o=n.querySelector("[data-global-search-dropdown]"),i=n.querySelector(".topbar-mobile-search-trigger"),d=n.querySelector("[data-search-shortcut-hint]");if(!(a instanceof HTMLElement)||!(r instanceof HTMLInputElement)||!(o instanceof HTMLElement)||!(i instanceof HTMLButtonElement))return;d instanceof HTMLElement&&(d.textContent=Dt());const h=document.createElement("div");h.className="mobile-search-overlay",h.innerHTML=`
    <div class="mobile-search-header">
      <button class="mobile-search-back" type="button" aria-label="Back">${M("arrowLeft")}</button>
      <label class="mobile-search-input-wrap" aria-label="Global search">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
          <path d="M11.3333 11.332L13.9999 13.9987" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input class="mobile-search-input" type="search" placeholder="Zoek afspraken, werkbonnen, klanten..." autocomplete="off" />
      </label>
    </div>
    <div class="mobile-search-results"></div>
  `,document.body.append(h);const u=h.querySelector(".mobile-search-input"),y=h.querySelector(".mobile-search-results"),b=h.querySelector(".mobile-search-back");if(!(u instanceof HTMLInputElement)||!(y instanceof HTMLElement)||!(b instanceof HTMLButtonElement))return;let s="",p=!1,g=!1,c=-1,C=[],k=0;const m=l=>{if(p=l,!p){o.hidden=!0,o.innerHTML="",c=-1,C=[];return}g||(o.hidden=!1)},S=l=>{if(g=l,h.classList.toggle("open",g),!g){document.body.style.overflow="",m(!1);return}document.body.style.overflow="hidden",u.value=r.value,s=u.value.trim(),m(!0),u.focus(),u.select(),N()},E=()=>g?u:r,B=()=>g?y:o,oe=l=>{const f=String(l??"").slice(0,ne);r.value=f,u.value=f,s=f.trim()},W=l=>{l.querySelectorAll(".search-result-item").forEach(f=>{const A=Number(f.getAttribute("data-search-item-index")??-1);f.classList.toggle("is-selected",A===c)})},ie=l=>{const f=C[l];f&&(s.length>=he&&Ht(s),m(!1),S(!1),f.open())},Ge=()=>{const l=B();l.innerHTML='<div class="search-empty-small">Zoeken tijdelijk niet beschikbaar</div>',m(!0)},N=async()=>{const l=s,f=B();if(!l){f.innerHTML=Jt(),m(!0),c=-1,C=[],qe();return}if(l.length<he){f.innerHTML='<div class="search-empty-small">Typ minimaal 2 tekens om te zoeken</div>',m(!0),c=-1,C=[];return}f.innerHTML=Wt(),m(!0);try{const A=await qt(l,t);if(l!==s)return;const w=Zt(A);C=[...w.plates,...w.appointments,...w.werkbonnen,...w.completed,...w.customers,...w.emails,...w.invoices,...w.quickActions];let H=0;const Ve=[["Kentekens",w.plates],["Afspraken",w.appointments],["Werkbonnen",w.werkbonnen],["Voltooide afspraken",w.completed],["Klanten",w.customers],["E-mails",w.emails],["Factuurnummers",w.invoices],["Snelle acties",w.quickActions]].map(([We,de])=>{const Je=Kt(We,de,l,H);return H+=de.length,Je}).join("");f.innerHTML=Ve||Vt(l),C.length?(c<0||c>=C.length)&&(c=0):c=-1,W(f)}catch{Ge()}finally{}},qe=()=>{var f;const l=B();l.querySelectorAll("[data-recent-term]").forEach(A=>{A.addEventListener("click",w=>{if(w.target instanceof Element?w.target.closest("[data-recent-remove]"):null)return;const P=String(A.getAttribute("data-recent-term")??"");oe(P),N()})}),l.querySelectorAll("[data-recent-remove]").forEach(A=>{A.addEventListener("click",w=>{w.stopPropagation();const H=Number(A.getAttribute("data-recent-remove")??-1),P=re();H<0||H>=P.length||(P.splice(H,1),O(P),N())})}),(f=l.querySelector("[data-recent-clear]"))==null||f.addEventListener("click",()=>{O([]),N()})},J=l=>{oe(l),window.clearTimeout(k),k=window.setTimeout(()=>{N()},It)},ce=l=>{if(!p||!C.length)return;const f=C.length-1;c<0?c=l>0?0:f:(c+=l,c>f&&(c=0),c<0&&(c=f)),W(B());const A=B().querySelector(`[data-search-item-index="${c}"]`);A instanceof HTMLElement&&A.scrollIntoView({block:"nearest"})},ze=()=>{c<0||c>=C.length||ie(c)},le=l=>{if(l.key==="ArrowDown"){l.preventDefault(),ce(1);return}if(l.key==="ArrowUp"){l.preventDefault(),ce(-1);return}if(l.key==="Enter"){p&&c>=0&&(l.preventDefault(),ze());return}if(l.key==="Escape"){if(l.preventDefault(),p){m(!1);return}E().value?J(""):g&&S(!1);return}l.key==="Tab"&&m(!1)},Ke=()=>{if(window.matchMedia("(max-width: 768px)").matches){S(!0);return}m(!0),r.focus(),r.select(),N()};r.addEventListener("focus",()=>{N()}),r.addEventListener("input",()=>J(r.value)),r.addEventListener("keydown",le),u.addEventListener("input",()=>J(u.value)),u.addEventListener("keydown",le),i.addEventListener("click",()=>{S(!0)}),b.addEventListener("click",()=>{S(!1)}),document.addEventListener("keydown",l=>{const f=String(l.key??"").toLowerCase();if((l.ctrlKey||l.metaKey)&&f==="k"){l.preventDefault(),Ke();return}if(f==="escape"){if(g){S(!1);return}p&&document.activeElement!==r&&document.activeElement!==u&&m(!1)}}),document.addEventListener("mousedown",l=>{const f=l.target;f instanceof Node&&(g&&h.contains(f)||n.contains(f)||m(!1))}),a.addEventListener("click",()=>{p||N()}),n.addEventListener("mouseover",l=>{const f=l.target;if(!(f instanceof Element))return;const A=f.closest(".search-result-item");if(!(A instanceof HTMLElement))return;const w=Number(A.getAttribute("data-search-item-index")??-1);w<0||w===c||(c=w,W(B()))}),n.addEventListener("click",l=>{const f=l.target;if(!(f instanceof Element))return;const A=f.closest(".search-result-item");if(!(A instanceof HTMLElement))return;const w=Number(A.getAttribute("data-search-item-index")??-1);w<0||ie(w)}),window.matchMedia("(max-width: 768px)").matches&&r.setAttribute("tabindex","-1")}const ve="garage-dashboard.prefetched-documents",Yt=["/dashboard.html","/calendar.html","/bookings.html","/completed.html","/werkbon.html","/werkbon-detail.html","/add-appointment.html","/emails.html","/analytics.html"];function Ot(){try{if(window.sessionStorage.getItem(ve)==="true")return;Yt.forEach(e=>{if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const t=document.createElement("link");t.rel="prefetch",t.as="document",t.href=e,document.head.append(t)}),window.sessionStorage.setItem(ve,"true")}catch{}}function vn({activePage:e,title:t,headerNote:n="",userEmail:a,unreadEmailCount:r=0,onLogout:o,garage:i,isAdmin:d=!1}){Ot();const h=document.createElement("div");h.className="app-shell page-animate";const{header:u,titleRow:y}=it({title:t,headerNote:n,garage:i,activePage:e}),b=mt(e,{garage:i,isAdmin:d,userEmail:a,unreadEmailCount:r,onLogout:o}),s=document.createElement("div");s.className="app-workspace";const p=document.createElement("main");p.className="content";const g=document.createElement("div");g.className="main-content",g.append(u,s),s.append(y,p),h.append(b,g);const c=document.createElement("div");c.className="sidebar-overlay",h.append(c);const C=()=>{b.classList.add("open"),c.classList.add("open"),document.body.style.overflow="hidden"},k=()=>{b.classList.remove("open"),c.classList.remove("open"),document.body.style.overflow=""},m=u.querySelector(".topbar-hamburger");return m==null||m.addEventListener("click",C),c.addEventListener("click",k),Qt({header:u,garageId:(i==null?void 0:i.id)??""}),b.dataset.collapsed==="true"&&h.classList.add("is-sidebar-collapsed"),{shell:h,contentArea:p,setUnreadEmailCount:E=>{Ce(b,E)}}}function Xt(e){return{id:e.id,name:e.name??"Garage",domain:e.domain??"",analyticsPropertyId:e.analytics_property_id??null,logoUrl:e.logo_url??"",userId:e.user_id??""}}function en(e){var r,o;const t="owner@gmail.com".split(",").map(i=>i.trim().toLowerCase()).filter(Boolean),n=String((e==null?void 0:e.email)??"").toLowerCase();return(((r=e==null?void 0:e.app_metadata)==null?void 0:r.role)??((o=e==null?void 0:e.user_metadata)==null?void 0:o.role)??"")==="admin"||t.includes(n)}async function tn(e){const t=en(e),n=(await tt({userId:e.id,includeAll:t})).map(Xt);return{garages:n,activeGarage:n[0]??null,isAdmin:t}}const se="garage-dashboard.auth-context",nn=5*60*1e3;function an(){try{const e=window.sessionStorage.getItem(se);if(!e)return null;const t=JSON.parse(e);if(!t||typeof t!="object")return null;const n=Number(t.expiresAt??0);return!Number.isFinite(n)||Date.now()>n?null:t}catch{return null}}function rn(e,t){try{const n={userId:e.id,email:String(e.email??""),isAdmin:t.isAdmin,garages:t.garages??[],activeGarage:t.activeGarage??null,expiresAt:Date.now()+nn};window.sessionStorage.setItem(se,JSON.stringify(n))}catch{}}function sn(){try{window.sessionStorage.removeItem(se)}catch{}}async function kn(){if(!R())return window.location.href=v("index.html"),null;const e=await nt();if(!e)return window.location.href=v("index.html"),null;const t=an();if(t&&t.userId===e.user.id&&String(e.user.email??"")===t.email)return{user:e.user,garages:Array.isArray(t.garages)?t.garages:[],activeGarage:t.activeGarage??null,isAdmin:!!t.isAdmin,isDemo:!1};const n=await tn(e.user);return rn(e.user,n),{user:e.user,...n,isDemo:!1}}async function Sn(){try{await at()}finally{sn(),window.location.href=v("index.html")}}function yn(){const e=document.documentElement;e.style.removeProperty("--brand-primary"),e.style.removeProperty("--brand-secondary"),e.style.removeProperty("--brand-primary-rgb"),e.style.removeProperty("--brand-secondary-rgb")}export{yn as a,ln as b,vn as c,un as d,kn as e,fn as f,At as g,hn as h,pn as i,Ct as j,gn as k,Sn as l,mn as m,cn as n,wn as o,dn as p,Mt as q,bn as s};
