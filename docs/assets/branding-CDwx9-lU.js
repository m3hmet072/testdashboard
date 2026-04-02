import{p as k,d as E,g as Ze,s as Qe,h as Ye,u as ke,i as R,j as ye,k as _e,l as Xe,m as et,f as Ce,n as tt,o as nt,a as rt,q as at}from"./theme-Bb-bjqwO.js";function I(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function st(e){return e==="bookings"?`
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
    `:e==="addappointment"?`<img class="topbar-page-icon topbar-page-icon-addappointment" src="${E("sidebar-icons/addappointment.png")}" alt="Add Appointment icon">`:e==="emails"?`
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
  `}function ot(e){const t=String((e==null?void 0:e.domain)??"").trim();if(!t)return{href:"https://autoservicehouse.nl",label:"autoservicehouse.nl"};const n=/^https?:\/\//i.test(t)?t:`https://${t}`,r=t.replace(/^https?:\/\//i,"");return{href:n,label:r}}function it(e){const n={dashboard:"dashboard",calendar:"calender",analytics:"analytics",bookings:"appointment",addappointment:"addappointment",emails:"email",completed:"succes",werkbon:"werkbon"}[e];return n?E(`sidebar-icons/${n}.png`):null}function ct({title:e,headerNote:t="",garage:n,activePage:r="dashboard"}){var c;const a=document.createElement("div");a.className="topbar-stack";const i=ot(n),o=I(e);I(t);const l=I(i.label);I(i.href);const h=I(String(((c=n==null?void 0:n.name)==null?void 0:c[0])??"G").toUpperCase()),d=n!=null&&n.logoUrl?`<img class="brand-logo" src="${I(n.logoUrl)}" alt="" />`:`<span class="brand-mark">${h}</span>`,_=I((n==null?void 0:n.name)??""),b=it(r),s=b?`<img class="topbar-page-icon topbar-page-icon-${I(r)}" src="${b}" alt="${o} icon" />`:`<span class="topbar-page-icon topbar-page-icon-${I(r)}">${st(r)}</span>`;a.innerHTML=`
    <header class="topbar">
      <button class="topbar-hamburger" type="button" aria-label="Open navigation menu">
        ${d}
        <span class="topbar-hamburger-label">${_}</span>
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

            <a href="https://autoservicehoute.nl">https://${l}</a>
          </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.39917 2C4.96653 2.00438 3.69265 2.06411 2.87855 2.87835C2 3.75704 2 5.17128 2 7.99972C2 10.8282 2 12.2425 2.87855 13.1211C3.7571 13.9999 5.17111 13.9999 7.99917 13.9999C10.8271 13.9999 12.2412 13.9999 13.1197 13.1211C13.9338 12.3069 13.9935 11.0328 13.9979 8.59979" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.7039 2.33132L7.36572 8.7063M13.7039 2.33132C13.3746 2.00158 11.1561 2.03231 10.6871 2.03898M13.7039 2.33132C14.0333 2.66106 14.0025 4.88239 13.9959 5.352" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>

        <a class="topbar-add-link ${r==="add-appointment"?"is-current":""}" href="${k("add-appointment.html")}">
          <img class="navbar-icon-add-appointment" src="${E("sidebar-icons/addappointment.png")}" alt="Email icon">
          <span>Add Appointment</span>
        </a>
      </div>
    </header>

    <div class="topbar-title-row">
      <div class="topbar-title-wrap">
        ${s}
        <h1 class="topbar-title">${o}</h1>
      </div>
    </div>
  `;const m=a.querySelector(".topbar"),g=a.querySelector(".topbar-title-row");return{header:m,titleRow:g}}const lt=[{key:"dashboard",href:k("dashboard.html"),label:"Dashboard",icon:"dashboard"},{key:"calendar",href:k("calendar.html"),label:"Calendar",icon:"calendar"},{key:"bookings",href:k("bookings.html"),label:"Appointment",icon:"appointments"},{key:"completed",href:k("completed.html"),label:"Completed",icon:"completed"},{key:"werkbon",href:k("werkbon.html"),label:"Werkbon",icon:"werkbon"},{key:"addappointment",href:k("add-appointment.html"),label:"Add Appointment",icon:"addappointment"},{key:"emails",href:k("emails.html"),label:"E-mails",icon:"emails",showUnreadBadge:!0},{key:"analytics",href:k("analytics.html"),label:"Analytics",icon:"analytics"},{key:"settings",href:k("settings.html"),label:"Instellingen",icon:"settings"}],pe={dashboard:E("sidebar-icons/dashboard.png"),appointments:E("sidebar-icons/appointment.png"),calendar:E("sidebar-icons/calender.png"),completed:E("sidebar-icons/succes.png"),werkbon:E("sidebar-icons/werkbon.png"),addappointment:E("sidebar-icons/addappointment.png"),emails:E("sidebar-icons/email.png"),analytics:E("sidebar-icons/analytics.png"),default:E("sidebar-icons/default.png"),settings:E("sidebar-icons/default.png")},me="garage-dashboard.sidebar-collapsed";function dt(e){return`<img class="sidebar-link-icon-image" src="${pe[e]??pe.default}" alt="" width="32" height="33" aria-hidden="true" />`}function ut(e){return e?((String(e).split("@")[0]??"A")[0]??"A").toUpperCase():"A"}function pt(e,t){if(t)return t;const n=String(e??"").trim().split("@")[0];return n?n.split(/[._-]+/g).filter(Boolean).map(r=>r[0].toUpperCase()+r.slice(1)).slice(0,2).join(" "):"Garage User"}function mt(e){var t;return e!=null&&e.logoUrl?`<img class="brand-logo" src="${e.logoUrl}" alt="${e.name} logo" />`:`<span class="brand-mark">${String(((t=e==null?void 0:e.name)==null?void 0:t[0])??"A").toUpperCase()}</span>`}function Ae(e,t){const n=Number(t),r=Number.isFinite(n)?Math.max(0,Math.floor(n)):0;e.querySelectorAll("[data-email-unread-count]").forEach(i=>{i.textContent=r>99?"99+":String(r),i.hidden=r===0})}function ht(e,{garage:t,isAdmin:n=!1,userEmail:r="",onLogout:a,unreadEmailCount:i=0}={}){const o=document.createElement("aside");o.className="sidebar";const l=window.localStorage.getItem(me)==="true";l&&(o.classList.add("is-collapsed"),o.dataset.collapsed="true");const h=lt.map(v=>{const p=v.key===e?"is-active":"";return`
      <a class="sidebar-link sidebar-link-${v.key} ${p}" href="${v.href}">
        <span class="sidebar-link-icon">${dt(v.icon)}</span>
        <span class="sidebar-link-label">${v.label}</span>
        ${v.showUnreadBadge?'<span class="sidebar-link-count" data-email-unread-count hidden>0</span>':""}
      </a>
    `}).join(""),d=pt(r,n?"Admin":""),_=n?"Owner":(t==null?void 0:t.name)??"Garage Staff",b=Ze()==="dark",s=l?"Expand sidebar":"Collapse sidebar";o.innerHTML=`
    <div class="sidebar-main">
      <div class="sidebar-brand-row">
        <a href="${k("dashboard.html")}" class="brand">
          ${mt(t)}
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
        <span class="sidebar-avatar">${ut(r)}</span>
        <span class="sidebar-user-meta">
          <strong>${d}</strong>
          <small>${r||_}</small>
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
  `;const m=o.querySelector("[data-theme-toggle]");m instanceof HTMLInputElement&&m.addEventListener("change",()=>{Qe(m.checked?"dark":"light")});const g=o.querySelector(".sidebar-logout"),c=o.querySelector(".sidebar-collapse-toggle"),C=v=>{o.classList.toggle("is-collapsed",v),o.dataset.collapsed=v?"true":"false",c==null||c.setAttribute("aria-label",v?"Expand sidebar":"Collapse sidebar"),c==null||c.setAttribute("title",v?"Expand sidebar":"Collapse sidebar"),window.localStorage.setItem(me,v?"true":"false");const p=o.closest(".app-shell");p==null||p.classList.toggle("is-sidebar-collapsed",v)};return c==null||c.addEventListener("click",()=>{C(!o.classList.contains("is-collapsed"))}),typeof a=="function"?g==null||g.addEventListener("click",a):g==null||g.remove(),Ae(o,i),o}const Ee="garage_dashboard_manual_bookings_v1",Le="garage_dashboard_booking_workflow_v1",Q="Manual appointment created in dashboard.";function J(){return typeof window<"u"&&typeof window.localStorage<"u"}function T(e){return String(e??"").trim()}function $e(e){const t=String(e??"new").trim().toLowerCase();return t==="confirmed"||t==="confirm"?"confirmed":t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":"new"}function ee(){if(!J())return{};try{const e=window.localStorage.getItem(Le);if(!e)return{};const t=JSON.parse(e);return t&&typeof t=="object"?t:{}}catch{return{}}}function Me(e){J()&&window.localStorage.setItem(Le,JSON.stringify(e))}function Ne(e,t){const n=T(t);if(!n)return{};const r=e[n];return r&&typeof r=="object"?r:{}}function N(e,t){const n=T(e);if(!n)return;const r=ee(),a=Ne(r,n);r[n]={...a,...t},Me(r)}function ft(e){const t=T(e);if(!t)return;const n=ee();t in n&&(delete n[t],Me(n))}function gt(e,t){const n=Ne(t,e.id),r=n.convertedFromEmail===!0,a=n.deleted===!0,i=String(e.source??"").trim().toLowerCase(),o=String(e.message??""),l=i==="manual"||o.includes(Q),h=e.hasScheduledAppointment===!0,d=l||h?!0:r,_=typeof n.inAppointments=="boolean"?n.inAppointments:d,b=$e(n.status??e.status),s=String(n.appointmentAt??e.appointmentAt??"").trim()||e.createdAt,m=String(n.completedAt??e.completedAt??"").trim()||null;return{...e,status:b,inAppointments:_,convertedFromEmail:r,isDeleted:a,appointmentAt:s,completedAt:m}}function te(){if(!J())return[];try{const e=window.localStorage.getItem(Ee);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}function Ie(e){J()&&window.localStorage.setItem(Ee,JSON.stringify(e))}function wt(e){const t=T(e);if(!t)return!1;const n=te();if(!n.length)return!1;const r=n.filter(a=>T(a.id)!==t);return r.length===n.length?!1:(Ie(r),!0)}function bt(e,t){const n=new Date(e);return Number.isNaN(n.getTime())?t:n.toISOString()}function vt(){return`MAN-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function St(e){const t=String(e.appointment_date??e.appointmentDate??"").trim(),n=String(e.appointment_time??e.appointmentTime??"").trim();return!t||!n?"":`${t}T${n}`}function j(e,t){var a;const n=String(e??""),r=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message|description|source|submittedat)\\s*:|$)`,"i");return(((a=n.match(r))==null?void 0:a[1])??"").trim()}function Y(e){const t=j(e,"message");if(t)return t;const n=j(e,"description");return n||String(e??"").trim()}function kt(e,t){const n=String(e??"").trim();return n||String(t??"").trim().toUpperCase()||"UNKNOWN"}function xe(e,t){const n=j(e.message,"name");return{status:"draft",werkbon_created:!1,customer_name:String(e.name??"").trim()||n||"Onbekende klant",customer_email:j(e.message,"email")||"",customer_phone:String(e.phone??"").trim(),car_model:"Voertuig",service_types:[String(e.service??"Service")],km_stand:0,vat_enabled:!0,description:Y(e.message),internal_note:"",invoice_number:"",paid_at:null,completed_at:t,parts:[{name:"Service",quantity:1,price:0}],labour:{hours:0,rate:0},totals:{subtotal:0,vat:0,total:0},updated_at:new Date().toISOString()}}function Te(e){if(e&&typeof e=="object"){const n=T(e.id),r=String(e.garageId??e.garage_id??"").trim();return{bookingId:n,garageId:r,isLocalOnly:n.startsWith("MAN-")}}const t=T(e);return{bookingId:t,garageId:"",isLocalOnly:t.startsWith("MAN-")}}function yt(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase booking_schedule table or bookings_with_schedule view is missing. Run the schedule SQL migration first."):t==="42501"?new Error("Supabase blocked the schedule update. Check RLS policies for booking_schedule."):e instanceof Error?e:new Error("Unable to save the appointment schedule.")}function Re(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase bookings table is missing. Run the schema SQL first."):t==="42501"?new Error("Supabase blocked deleting this booking. Check RLS policies for bookings."):e instanceof Error?e:new Error("Unable to delete the appointment.")}function _t(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase completed_appointments table is missing. Run the completed SQL migration first."):t==="42501"?new Error("Supabase blocked deleting this completed appointment. Check RLS policies for completed_appointments."):e instanceof Error?e:new Error("Unable to delete the completed appointment.")}function V(e){const t=e.created_at??e.createdAt??new Date().toISOString(),n=St(e),r=String(e.appointment_at??e.appointmentAt??"").trim(),a=r||n||t,i=!!(r||n);return{id:e.id,garageId:e.garage_id??e.garageId,name:String(e.name??"").trim(),licensePlate:e.license_plate??"Unknown plate",phone:e.phone??"",service:e.service??"Service request",message:e.message??"",appointmentAt:a,completedAt:e.completed_at??e.completedAt??null,status:e.status??e.state??"new",source:e.source??"form",hasScheduledAppointment:i,createdAt:t}}function Ct({garageIds:e=null}={}){const t=te();return t.length?(Array.isArray(e)&&e.length?t.filter(r=>e.includes(r.garage_id??r.garageId)):t).map(V):[]}function At(e,t){return new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()}function dn(e){N(e,{convertedFromEmail:!0,inAppointments:!0,status:"new"})}function un(e,t){N(e,{status:$e(t)})}async function pn(e,t){const n=String(t??"").trim();if(!n)throw new Error("Please choose both a date and time for the appointment.");const{bookingId:r,garageId:a,isLocalOnly:i}=Te(e);if(!r)throw new Error("Booking id is required before saving a schedule.");if(!i&&a)try{await ke({bookingId:r,garageId:a,appointmentAt:n})}catch(o){throw yt(o)}return N(r,{appointmentAt:n}),n}async function mn(e){const{bookingId:t,garageId:n,isLocalOnly:r}=Te(e);if(!t)throw new Error("Booking id is required before deleting a booking.");if(r)return wt(t),ft(t),!0;if(!R())return N(t,{deleted:!0,inAppointments:!1,status:"deleted"}),!0;let a;try{a=await _e({bookingId:t,garageId:n})}catch(i){throw Re(i)}if(!a)throw new Error("Supabase did not delete this booking (row not found or blocked by RLS policy).");return N(t,{deleted:!0,inAppointments:!1,status:"deleted"}),!0}async function hn(e){const t=String((e==null?void 0:e.completedAppointmentId)??(e==null?void 0:e.id)??e).trim(),n=String((e==null?void 0:e.garageId)??(e==null?void 0:e.garage_id)??"").trim(),r=String((e==null?void 0:e.bookingId)??"").trim();if(!t)throw new Error("Completed appointment id is required before deleting.");if(!R())return r&&N(r,{deleted:!0,inAppointments:!1}),!0;let a;try{a=await et({completedAppointmentId:t,garageId:n})}catch(i){throw _t(i)}if(!a)throw new Error("Supabase did not delete this completed appointment (row not found or blocked by RLS policy).");if(r)try{await _e({bookingId:r,garageId:n})}catch(i){throw Re(i)}return r&&N(r,{deleted:!0,inAppointments:!1,status:"deleted"}),!0}async function fn(e,{convertedFromEmail:t=!1}={}){const n=e&&typeof e=="object"?e:null,r=T((n==null?void 0:n.id)??e),a=new Date().toISOString(),i={inAppointments:!1,status:"done",completedAt:a};if(t&&(i.convertedFromEmail=!0),N(r,i),!n||!R())return{persistedToSupabase:!1};const o=String(n.garageId??n.garage_id??"").trim();if(!o)return{persistedToSupabase:!1};try{const l=xe(n,a);return await ye({garageId:o,bookingId:r,appointmentAt:n.appointmentAt,completedAt:a,licensePlate:n.licensePlate,service:n.service,completionNotes:l}),{persistedToSupabase:!0}}catch(l){if(String((l==null?void 0:l.code)??"")==="42501"||Number((l==null?void 0:l.status)??0)===403)return{persistedToSupabase:!1,warning:"RLS_BLOCKED"};throw l}}async function gn(e){if(!R())return null;const t=String(e.garageId??e.garage_id??"").trim();if(!t)return null;const n=e.completedAt||new Date().toISOString(),r={...xe(e,n),werkbon_created:!0};try{const a=await ye({garageId:t,bookingId:String(e.id??""),appointmentAt:e.appointmentAt,completedAt:n,licensePlate:e.licensePlate,service:e.service,completionNotes:r});return String((a==null?void 0:a.id)??"")}catch(a){if(String((a==null?void 0:a.code)??"")==="42501"||Number((a==null?void 0:a.status)??0)===403)return null;throw a}}async function wn(e,{created:t=!0}={}){if(!R())return null;const n=String((e==null?void 0:e.completedAppointmentId)??(e==null?void 0:e.id)??e).trim(),r=String((e==null?void 0:e.garageId)??(e==null?void 0:e.garage_id)??"").trim();if(!n)return null;try{const a=await Xe({completedAppointmentId:n,garageId:r,werkbonCreated:t});return a?String(a.id??""):null}catch(a){if(String((a==null?void 0:a.code)??"")==="42501"||Number((a==null?void 0:a.status)??0)===403)return null;throw a}}async function Et({garageIds:e=null}={}){return R()?(await Ce({garageIds:e})).map(n=>{let r={};try{r=JSON.parse(String(n.completion_notes??"{}"))}catch{r={}}const a=String(n.license_plate??"").trim(),i=j(r.description,"name"),o=kt(String(r.customer_name??r.customerName??i??"").trim(),a),l=Y(r.description),h=Y(r.message),d=l||h;return{id:String(n.booking_id??n.id),completedAppointmentId:String(n.id??""),bookingId:n.booking_id?String(n.booking_id):"",garageId:String(n.garage_id??""),licensePlate:a,phone:String(r.customer_phone??r.customerPhone??""),service:String(n.service??"Service"),message:d,customerName:o,werkbonCreated:r.werkbon_created===!0,appointmentAt:n.appointment_date&&n.appointment_time?`${n.appointment_date}T${String(n.appointment_time).slice(0,8)}`:String(n.completed_at??n.created_at??""),completedAt:String(n.completed_at??n.created_at??""),status:"done",inAppointments:!1,source:"completed",createdAt:String(n.created_at??n.completed_at??"")}}):[]}async function bn({garageId:e,name:t,licensePlate:n,phone:r,service:a,message:i,appointmentAt:o}){const l=String(e??"").trim(),h=String(t??"").trim(),d=String(n??"").trim().toUpperCase(),_=String(r??"").trim(),b=String(a??"").trim(),s=String(i??"").trim(),m=s.includes(Q)?s:`${s}
${Q}`;if(!l)throw new Error("A garage is required before creating a manual appointment.");if(!d||!_||!b||!s||!o)throw new Error("Please fill in kenteken, phone number, service, bericht, and appointment date.");const g=new Date().toISOString(),c=bt(o,g),C=await tt({garageId:l,name:h,licensePlate:d,phone:_,service:b,message:m,createdAt:g});if(C){try{await ke({bookingId:C.id,garageId:l,appointmentAt:c})}catch(S){console.warn("Unable to persist booking schedule in Supabase booking_schedule.",S)}return N(C.id,{convertedFromEmail:!1,inAppointments:!0,status:"new",appointmentAt:c}),V({...C,appointment_at:c,source:"manual",status:"new"})}const v={id:vt(),garage_id:l,name:h,license_plate:d,phone:_,service:b,message:m,appointment_at:c,status:"new",source:"manual",created_at:g},p=te();return p.unshift(v),Ie(p.slice(0,500)),N(v.id,{convertedFromEmail:!1,inAppointments:!0,status:"new",appointmentAt:c}),V(v)}async function Lt({garageIds:e=null}={}){const t=await Ye({garageIds:e}),n=Ct({garageIds:e}),r=ee(),a=[...t.map(V),...n],i=new Map;for(const o of a){const l=String(o.id??"").trim();l&&(i.has(l)||i.set(l,o))}return Array.from(i.values()).map(o=>gt(o,r)).filter(o=>o.isDeleted!==!0).sort(At)}const Pe="garage_dashboard_email_read_state_v1";function De(){return typeof window<"u"&&typeof window.localStorage<"u"}function He(){if(!De())return{};try{const e=window.localStorage.getItem(Pe);if(!e)return{};const t=JSON.parse(e);return t&&typeof t=="object"?t:{}}catch{return{}}}function $t(e){De()&&window.localStorage.setItem(Pe,JSON.stringify(e))}function ne(e){return String(e??"").trim()}function F(e,t){var r;const n=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message|description|source|submittedat)\\s*:|$)`,"i");return(((r=e.match(n))==null?void 0:r[1])??"").trim()}function Mt(e){const t=String(e??"").trim();return t?/\b(?:name|email|message)\s*:/i.test(t)?{name:F(t,"name"),email:F(t,"email"),message:F(t,"message")||F(t,"description")}:{name:"",email:"",message:t}:{name:"",email:"",message:""}}function he(e){const n=new Date(e).getTime();return Number.isFinite(n)?n:0}function Nt(e){const t=String(e??"new").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function Ue(e){return String((e==null?void 0:e.source)??"form")==="manual"||(e==null?void 0:e.hasScheduledAppointment)===!0||(e==null?void 0:e.convertedFromEmail)===!0?!1:Nt(e==null?void 0:e.status)!=="done"}function Be(e){const t=ne(e);return t?He()[t]===!0:!1}function vn(e,t=!0){const n=ne(e);if(!n)return;const r=He();t?r[n]=!0:delete r[n],$t(r)}function Sn(e){const t=e.filter(Ue);let n=0;for(const r of t)Be(r.id)||(n+=1);return{total:t.length,unread:n}}function It(e,{garageNameById:t=new Map}={}){return e.filter(Ue).map(n=>{const r=Mt(n.message),a=ne(n.id),i=`${n.licensePlate??"Unknown"} • ${n.service??"Service request"}`,o=r.message||String(n.message??"").trim()||"No message provided.",l=String(n.name??"").trim()||r.name||String(n.licensePlate??"").trim()||"UNKNOWN",h=r.email||"";return{id:a,subject:i,preview:o,message:o,senderName:l,senderEmail:h,phone:n.phone??"",service:n.service??"",licensePlate:n.licensePlate??"",garageId:n.garageId,garageName:t.get(n.garageId)??"",receivedAt:n.createdAt,appointmentAt:n.appointmentAt??n.createdAt,read:Be(a)}}).sort((n,r)=>he(r.receivedAt)-he(n.receivedAt))}const fe=2,xt=300,Tt=3e4,Rt=6e4,re=80,je="garage-dashboard.recent-searches",Fe=5,G=new Map,q=new Map;function y(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Pt(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $(e,t){const n=y(e??""),r=String(t??"").trim().slice(0,re);if(!r)return n;const a=new RegExp(`(${Pt(r)})`,"ig");return n.replace(a,"<mark>$1</mark>")}function B(e){const t=String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"");return t?t.replace(/(.{2})(?=.)/g,"$1-"):""}function z(e){const t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleDateString("nl-NL",{day:"2-digit",month:"short",year:"numeric"})}function ge(e){const t=Number(e??0);return Number.isFinite(t)?new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2}).format(t):"EUR 0,00"}function ae(e){const t=String(e??"").trim().toLowerCase();return["done","completed","complete","closed"].includes(t)?"completed":["confirmed","confirm"].includes(t)?"confirmed":t||"new"}function Dt(e){const t=ae(e);return t==="completed"?"Voltooid":t==="confirmed"?"Bevestigd":t==="new"?"Nieuw":t}function we(e){const t=String(e??"").replace(/[^a-z0-9]/gi,"");return t.length>=4&&/[a-z]/i.test(t)&&/\d/.test(t)}function be(e){return/\d/.test(String(e??""))}function M(e){return{calendar:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 2.75V5M14 2.75V5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="3" y="4.5" width="14" height="12.5" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M3 8.5H17" stroke="currentColor" stroke-width="1.6"/></svg>',fileText:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6.5 2.5H11.5L15.5 6.5V15.5C15.5 16.33 14.83 17 14 17H6C5.17 17 4.5 16.33 4.5 15.5V4C4.5 3.17 5.17 2.5 6 2.5H6.5Z" stroke="currentColor" stroke-width="1.6"/><path d="M11.5 2.5V6.5H15.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 10H13M7 13H11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',check:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.8 10.2L8.9 12.3L13.3 7.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',user:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="6.5" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M4 16.2C4.8 13.9 6.8 12.8 10 12.8C13.2 12.8 15.2 13.9 16 16.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',mail:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="4.5" width="14" height="11" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M4.5 6L10 10L15.5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',car:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 11.5L5.5 7.5C5.8 6.8 6.4 6.4 7.2 6.4H12.8C13.6 6.4 14.2 6.8 14.5 7.5L16 11.5" stroke="currentColor" stroke-width="1.6"/><rect x="3.2" y="10" width="13.6" height="5.5" rx="1.8" stroke="currentColor" stroke-width="1.6"/><circle cx="6.5" cy="14" r="1.1" fill="currentColor"/><circle cx="13.5" cy="14" r="1.1" fill="currentColor"/></svg>',receipt:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 2.8H14V16.8L12 15.5L10 16.8L8 15.5L6 16.8V2.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 6.8H12M8 9.8H12M8 12.8H11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',plus:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.5V13.5M6.5 10H13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',settings:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 6.9A3.1 3.1 0 1 1 10 13.1A3.1 3.1 0 0 1 10 6.9Z" stroke="currentColor" stroke-width="1.6"/><path d="M16.1 10.9L15 11.4C14.9 11.8 14.7 12.2 14.5 12.5L14.9 13.7L13.7 14.9L12.5 14.5C12.2 14.7 11.8 14.9 11.4 15L10.9 16.1H9.1L8.6 15C8.2 14.9 7.8 14.7 7.5 14.5L6.3 14.9L5.1 13.7L5.5 12.5C5.3 12.2 5.1 11.8 5 11.4L3.9 10.9V9.1L5 8.6C5.1 8.2 5.3 7.8 5.5 7.5L5.1 6.3L6.3 5.1L7.5 5.5C7.8 5.3 8.2 5.1 8.6 5L9.1 3.9H10.9L11.4 5C11.8 5.1 12.2 5.3 12.5 5.5L13.7 5.1L14.9 6.3L14.5 7.5C14.7 7.8 14.9 8.2 15 8.6L16.1 9.1V10.9Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',clock:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.4V10L12.5 11.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',searchX:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.8" stroke="currentColor" stroke-width="1.6"/><path d="M12.7 12.7L17 17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M6.8 6.8L10.2 10.2M10.2 6.8L6.8 10.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',arrowLeft:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M11.8 4.8L6.6 10L11.8 15.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'}[e]??""}function se(){try{const e=JSON.parse(window.localStorage.getItem(je)||"[]");return Array.isArray(e)?e.map(t=>String(t??"").trim()).filter(Boolean).slice(0,Fe):[]}catch{return[]}}function X(e){try{window.localStorage.setItem(je,JSON.stringify(e.slice(0,Fe)))}catch{}}function Ht(e){const t=String(e??"").trim();if(!t)return;const n=se().filter(r=>r.toLowerCase()!==t.toLowerCase());n.unshift(t),X(n)}function K(e){const t=ae(e);return t==="completed"?'<span class="global-search-badge global-search-badge-success">Voltooid</span>':t==="confirmed"?'<span class="global-search-badge global-search-badge-info">Bevestigd</span>':t==="new"?'<span class="global-search-badge global-search-badge-muted">Nieuw</span>':`<span class="global-search-badge global-search-badge-muted">${y(Dt(t))}</span>`}function Ut(){return/Mac|iPhone|iPad|iPod/i.test(window.navigator.platform)?"⌘K":"Ctrl+K"}function Ge(e,t){var a;const n=String(e??""),r=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((a=n.match(r))==null?void 0:a[1])??"").trim()}function W(e){return String(e??"").toLowerCase().replace(/[^a-z0-9]/g,"")}function Bt(e){return String(e??"").trim().slice(0,re)}function jt(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const n=Ge(e==null?void 0:e.message,"name");return n||String((e==null?void 0:e.licensePlate)??"").trim()||"UNKNOWN"}function Ft(e){return Ge(e==null?void 0:e.message,"email")}function Gt(e,t,n,r){const a=e.filter(s=>ae(s==null?void 0:s.status)!=="completed"&&(s==null?void 0:s.inAppointments)!==!1).map(s=>({id:s.id,customer_name:jt(s),customer_email:Ft(s),customer_phone:String(s.phone??""),license_plate:String(s.licensePlate??""),car_brand:String(s.service??"Service"),status:s.status,appointment_date:s.appointmentAt||s.createdAt,services:s.service})),i=t.map(s=>({id:s.id,customer_name:s.customerName||"Onbekende klant",license_plate:s.licensePlate,car_brand:s.service||"Service",appointment_date:s.appointmentAt||s.completedAt||s.createdAt,status:"completed"})),o=[...a,...i],l=new Map;a.forEach(s=>{const m=`${s.customer_name}|${s.customer_email}|${s.license_plate}`.toLowerCase();l.has(m)||l.set(m,{customer_name:s.customer_name,customer_email:s.customer_email,customer_phone:s.customer_phone,license_plate:s.license_plate,car_brand:s.car_brand})});const h=new Map;n.forEach(s=>{let m={};try{m=JSON.parse(String(s.completion_notes??"{}"))}catch{m={}}h.set(String(s.id??""),m)});const d=t.map(s=>{var c;const m=h.get(String(s.completedAppointmentId??""))??{},g=Number(((c=m==null?void 0:m.totals)==null?void 0:c.total)??0);return{id:s.completedAppointmentId,customer_name:s.customerName||String(m.customer_name??"Onbekende klant"),license_plate:s.licensePlate,car_brand:String(m.car_model??s.service??"Service"),total:g,status:String(m.status??"draft"),factuurnummer:String(m.invoice_number??"").trim(),created_at:s.createdAt}}),_=d.filter(s=>s.factuurnummer),b=r.map(s=>({id:s.id,from_name:s.senderName,from_email:s.senderEmail,subject:s.subject,created_at:s.receivedAt,read:s.read}));return{appointmentsSource:a,completedSource:i,plateSource:o,customerSource:Array.from(l.values()),werkbonSource:d,invoiceSource:_,emailsSource:b}}function qt(e){const t=(d,_)=>d.map(b=>({...b,_searchToken:W(_.map(s=>String(b[s]??"")).join(" "))})),n=t(e.appointmentsSource,["customer_name","customer_email","customer_phone","license_plate","car_brand"]),r=t(e.completedSource,["customer_name","license_plate","car_brand"]),a=t(e.customerSource,["customer_name","customer_email","customer_phone","license_plate","car_brand"]),i=t(e.werkbonSource,["customer_name","license_plate","car_brand","factuurnummer"]),o=t(e.emailsSource,["from_name","from_email","subject"]),l=[...n,...r].map(d=>({...d,_plateToken:W(d.license_plate)})),h=e.invoiceSource.map(d=>({...d,_invoiceToken:W(d.factuurnummer)}));return{appointments:n,completed:r,customers:a,werkbonnen:i,emails:o,plates:l,invoices:h}}function D(e,t,n,r){const a=[];for(const i of e)if(r(i,t)&&(a.push(i),a.length>=n))break;return a}async function zt(e){const t=String(e??"").trim(),n=Date.now(),r=q.get(t);if(r!=null&&r.data&&n-r.timestamp<Rt)return r.data;if(r!=null&&r.inFlight)return r.inFlight;const a=Promise.all([Lt({garageIds:[t]}),Et({garageIds:[t]}),Ce({garageIds:[t]})]).then(([i,o,l])=>{const h=It(i),d=Gt(i,o,l,h);return{indexed:qt(d)}});q.set(t,{timestamp:n,data:(r==null?void 0:r.data)??null,inFlight:a});try{const i=await a;return q.set(t,{timestamp:Date.now(),data:i,inFlight:null}),i}catch(i){if(r!=null&&r.data)return r.data;throw q.delete(t),i}}function ve(e){const t=String(e??"").trim().toLowerCase(),n=[{key:"new-appointment",icon:"plus",title:"Nieuwe afspraak toevoegen",match:["nieuwe afspraak","afspraak"],navigate:()=>{window.location.href=k("add-appointment.html")}},{key:"new-werkbon",icon:"fileText",title:"Nieuwe werkbon maken",match:["werkbon","factuur"],navigate:()=>{window.location.href=k("werkbon.html?action=create")}},{key:"calendar",icon:"calendar",title:"Kalender bekijken",match:["kalender","agenda"],navigate:()=>{window.location.href=k("calendar.html")}},{key:"settings",icon:"settings",title:"Instellingen openen",match:["instellingen","settings"],navigate:()=>{window.location.href=k("settings.html")}}];return t?n.filter(r=>r.match.some(a=>t.includes(a))):[]}async function Kt(e,t){const n=Bt(e),r=`${t}:${n.toLowerCase()}`;if(G.has(r))return G.get(r);if(!R())return{appointments:[],werkbonnen:[],completed:[],customers:[],emails:[],plates:[],invoices:[],includePlateSection:we(n),includeInvoiceSection:be(n),quickActions:ve(n)};const a=we(n),i=be(n),o=W(n),{indexed:l}=await zt(t),h=[],d=async(p,S)=>{try{const L=await S();return h.push({label:p,count:Array.isArray(L)?L.length:0,ok:!0}),Array.isArray(L)?L:[]}catch(L){return h.push({label:p,count:0,ok:!1,error:L instanceof Error?L.message:String(L??"Unknown error")}),[]}},[_,b,s,m,g,c,C]=await Promise.all([d("appointments",()=>Promise.resolve(D(l.appointments,o,4,(p,S)=>p._searchToken.includes(S)))),d("werkbonnen",()=>Promise.resolve(D(l.werkbonnen,o,4,(p,S)=>p._searchToken.includes(S)))),d("completed",()=>Promise.resolve(D(l.completed,o,3,(p,S)=>p._searchToken.includes(S)))),d("customers",()=>Promise.resolve(D(l.customers,o,3,(p,S)=>p._searchToken.includes(S)))),d("emails",()=>Promise.resolve(D(l.emails,o,3,(p,S)=>p._searchToken.includes(S)))),a?d("plates",()=>Promise.resolve(D(l.plates,o,4,(p,S)=>p._plateToken.includes(S)))):Promise.resolve([]),i?d("invoices",()=>Promise.resolve(D(l.invoices,o,3,(p,S)=>p._invoiceToken.includes(S)))):Promise.resolve([])]),v={appointments:_,werkbonnen:b,completed:s,customers:m,emails:g,plates:c,invoices:C,includePlateSection:a,includeInvoiceSection:i,quickActions:ve(n)};return G.set(r,v),window.setTimeout(()=>{G.delete(r)},Tt),v}function Wt(e,t,n){const r=`data-search-item-index="${n}"`;return e.type==="appointment"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-appointments">${M("calendar")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${$(e.customerName,t)}</span>
          <span class="search-result-secondary">${y(e.carBrand||"-")} <span class="plate-chip plate-chip-small">${y(B(e.plate)||"UNKNOWN")}</span></span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${y(e.date)}</span>
          ${K(e.status)}
        </span>
      </button>
    `:e.type==="werkbon"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-werkbonnen">${M("fileText")}</span>
        <span class="search-result-main">
          <span class="search-result-primary"><small class="search-result-muted">${$(e.factuur,t)}</small> ${$(e.customerName,t)}</span>
          <span class="search-result-secondary"><span class="plate-chip plate-chip-small">${y(B(e.plate)||"UNKNOWN")}</span> ${y(e.carBrand||"-")}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${y(e.total)}</span>
          ${K(e.status)}
        </span>
      </button>
    `:e.type==="completed"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-completed">${M("check")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${$(e.customerName,t)}</span>
          <span class="search-result-secondary">${y(e.carBrand||"-")} <span class="plate-chip plate-chip-small">${y(B(e.plate)||"UNKNOWN")}</span></span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${y(e.date)}</span>
          <span class="global-search-badge global-search-badge-success">Voltooid</span>
        </span>
      </button>
    `:e.type==="customer"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-customers">${M("user")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${$(e.customerName,t)}</span>
          <span class="search-result-secondary">${$(e.email,t)}</span>
        </span>
        <span class="search-result-side">
          <span class="plate-chip plate-chip-small">${y(B(e.plate)||"UNKNOWN")}</span>
          <span class="search-result-muted">${y(e.carBrand||"-")}</span>
        </span>
      </button>
    `:e.type==="email"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-emails">${M("mail")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${e.unread?'<span class="search-unread-dot"></span>':""}${$(e.sender,t)}</span>
          <span class="search-result-secondary">${$(e.subject,t)}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${y(e.date)}</span>
          ${e.unread?'<span class="global-search-badge global-search-badge-info">Ongelezen</span>':""}
        </span>
      </button>
    `:e.type==="plate"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-plates">${M("car")}</span>
        <span class="search-result-main">
          <span class="search-result-primary"><span class="plate-chip">${$(B(e.plate),t)}</span></span>
          <span class="search-result-secondary">${y(e.carBrand||"-")} - ${y(e.customerName||"-")}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${y(e.date)}</span>
          ${K(e.status)}
        </span>
      </button>
    `:e.type==="invoice"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-invoices">${M("receipt")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${$(e.factuur,t)}</span>
          <span class="search-result-secondary">${$(e.customerName,t)}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${y(e.total)}</span>
          ${K(e.status)}
        </span>
      </button>
    `:`
    <button class="search-result-item" type="button" ${r}>
      <span class="search-result-icon search-result-icon-actions">${M(e.icon)}</span>
      <span class="search-result-main">
        <span class="search-result-primary">${$(e.title,t)}</span>
      </span>
    </button>
  `}function Vt(e,t,n,r){if(!t.length)return"";const a=t.map((i,o)=>Wt(i,n,r+o)).join("");return`
    <section class="search-section" data-search-section>
      <header class="search-section-header">
        <span>${y(e)}</span>
        <span>${t.length}</span>
      </header>
      <div class="search-section-items">
        ${a}
      </div>
    </section>
  `}function Jt(e){return`
    <div class="search-empty-state">
      <span class="search-empty-icon">${M("searchX")}</span>
      <strong>Geen resultaten voor '${y(e)}'</strong>
      <p>Probeer een andere zoekterm</p>
    </div>
  `}function Ot(){return`
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
  `}function Zt(){const e=se();return e.length?`
    <section class="search-section">
      <header class="search-section-header"><span>Recente zoekopdrachten</span><span>${e.length}</span></header>
      <div class="search-recents">
        ${e.map((t,n)=>`
          <button class="search-recent-item" type="button" data-recent-index="${n}" data-recent-term="${y(t)}">
            <span class="search-recent-left">${M("clock")} ${y(t)}</span>
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
    `}function Qt(e){return{plates:e.plates.map(t=>({type:"plate",plate:t.license_plate,carBrand:t.car_brand,customerName:t.customer_name,date:z(t.appointment_date),status:t.status,open:()=>{const n=new URL(k("bookings.html"),window.location.origin);n.searchParams.set("plate",String(t.license_plate??"")),window.location.href=`${n.pathname}${n.search}`}})),appointments:e.appointments.map(t=>({type:"appointment",customerName:t.customer_name,carBrand:t.car_brand,plate:t.license_plate,date:z(t.appointment_date),status:t.status,open:()=>{const n=new URL(k("bookings.html"),window.location.origin);n.searchParams.set("bookingId",String(t.id)),window.location.href=`${n.pathname}${n.search}`}})),werkbonnen:e.werkbonnen.map(t=>({type:"werkbon",factuur:t.factuurnummer||"Factuur",customerName:t.customer_name,plate:t.license_plate,carBrand:t.car_brand,total:ge(t.total),status:t.status,open:()=>{window.location.href=k(`werkbon-detail.html?id=${encodeURIComponent(String(t.id))}`)}})),completed:e.completed.map(t=>({type:"completed",customerName:t.customer_name,plate:t.license_plate,carBrand:t.car_brand,date:z(t.appointment_date),open:()=>{const n=new URL(k("completed.html"),window.location.origin);n.searchParams.set("customer",String(t.customer_name??"")),window.location.href=`${n.pathname}${n.search}`}})),customers:e.customers.map(t=>({type:"customer",customerName:t.customer_name,email:t.customer_email||t.customer_phone||"-",plate:t.license_plate,carBrand:t.car_brand,open:()=>{const n=new URL(k("bookings.html"),window.location.origin);n.searchParams.set("customer",String(t.customer_name??"")),window.location.href=`${n.pathname}${n.search}`}})),emails:e.emails.map(t=>({type:"email",sender:t.from_name||t.from_email||"Onbekend",subject:t.subject||"(geen onderwerp)",unread:t.read===!1,date:z(t.created_at),open:()=>{const n=new URL(k("emails.html"),window.location.origin);n.searchParams.set("emailId",String(t.id)),window.location.href=`${n.pathname}${n.search}`}})),invoices:e.invoices.map(t=>({type:"invoice",factuur:t.factuurnummer||"Factuur",customerName:t.customer_name,total:ge(t.total),status:t.status,open:()=>{window.location.href=k(`werkbon-detail.html?id=${encodeURIComponent(String(t.id))}`)}})),quickActions:e.quickActions.map(t=>({type:"action",icon:t.icon,title:t.title,open:t.navigate}))}}function Yt({header:e,garageId:t}){if(!(e instanceof HTMLElement)||!t)return;const n=e.querySelector("[data-global-search-root]");if(!(n instanceof HTMLElement)||n.dataset.searchInitialized==="true")return;n.dataset.searchInitialized="true";const r=n.querySelector(".topbar-search-shell"),a=n.querySelector(".topbar-search-input"),i=n.querySelector("[data-global-search-dropdown]"),o=n.querySelector(".topbar-mobile-search-trigger"),l=n.querySelector("[data-search-shortcut-hint]");if(!(r instanceof HTMLElement)||!(a instanceof HTMLInputElement)||!(i instanceof HTMLElement)||!(o instanceof HTMLButtonElement))return;l instanceof HTMLElement&&(l.textContent=Ut());const h=document.createElement("div");h.className="mobile-search-overlay",h.innerHTML=`
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
  `,document.body.append(h);const d=h.querySelector(".mobile-search-input"),_=h.querySelector(".mobile-search-results"),b=h.querySelector(".mobile-search-back");if(!(d instanceof HTMLInputElement)||!(_ instanceof HTMLElement)||!(b instanceof HTMLButtonElement))return;let s="",m=!1,g=!1,c=-1,C=[],v=0;const p=u=>{if(m=u,!m){i.hidden=!0,i.innerHTML="",c=-1,C=[];return}g||(i.hidden=!1)},S=u=>{if(g=u,h.classList.toggle("open",g),!g){document.body.style.overflow="",p(!1);return}document.body.style.overflow="hidden",d.value=a.value,s=d.value.trim(),p(!0),d.focus(),d.select(),x()},L=()=>g?d:a,H=()=>g?_:i,ie=u=>{const f=String(u??"").slice(0,re);a.value=f,d.value=f,s=f.trim()},O=u=>{u.querySelectorAll(".search-result-item").forEach(f=>{const A=Number(f.getAttribute("data-search-item-index")??-1);f.classList.toggle("is-selected",A===c)})},ce=u=>{const f=C[u];f&&(s.length>=fe&&Ht(s),p(!1),S(!1),f.open())},qe=()=>{const u=H();u.innerHTML='<div class="search-empty-small">Zoeken tijdelijk niet beschikbaar</div>',p(!0)},x=async()=>{const u=s,f=H();if(!u){f.innerHTML=Zt(),p(!0),c=-1,C=[],ze();return}if(u.length<fe){f.innerHTML='<div class="search-empty-small">Typ minimaal 2 tekens om te zoeken</div>',p(!0),c=-1,C=[];return}f.innerHTML=Ot(),p(!0);try{const A=await Kt(u,t);if(u!==s)return;const w=Qt(A);C=[...w.plates,...w.appointments,...w.werkbonnen,...w.completed,...w.customers,...w.emails,...w.invoices,...w.quickActions];let P=0;const Ve=[["Kentekens",w.plates],["Afspraken",w.appointments],["Werkbonnen",w.werkbonnen],["Voltooide afspraken",w.completed],["Klanten",w.customers],["E-mails",w.emails],["Factuurnummers",w.invoices],["Snelle acties",w.quickActions]].map(([Je,ue])=>{const Oe=Vt(Je,ue,u,P);return P+=ue.length,Oe}).join("");f.innerHTML=Ve||Jt(u),C.length?(c<0||c>=C.length)&&(c=0):c=-1,O(f)}catch{qe()}finally{}},ze=()=>{var f;const u=H();u.querySelectorAll("[data-recent-term]").forEach(A=>{A.addEventListener("click",w=>{if(w.target instanceof Element?w.target.closest("[data-recent-remove]"):null)return;const U=String(A.getAttribute("data-recent-term")??"");ie(U),x()})}),u.querySelectorAll("[data-recent-remove]").forEach(A=>{A.addEventListener("click",w=>{w.stopPropagation();const P=Number(A.getAttribute("data-recent-remove")??-1),U=se();P<0||P>=U.length||(U.splice(P,1),X(U),x())})}),(f=u.querySelector("[data-recent-clear]"))==null||f.addEventListener("click",()=>{X([]),x()})},Z=u=>{ie(u),window.clearTimeout(v),v=window.setTimeout(()=>{x()},xt)},le=u=>{if(!m||!C.length)return;const f=C.length-1;c<0?c=u>0?0:f:(c+=u,c>f&&(c=0),c<0&&(c=f)),O(H());const A=H().querySelector(`[data-search-item-index="${c}"]`);A instanceof HTMLElement&&A.scrollIntoView({block:"nearest"})},Ke=()=>{c<0||c>=C.length||ce(c)},de=u=>{if(u.key==="ArrowDown"){u.preventDefault(),le(1);return}if(u.key==="ArrowUp"){u.preventDefault(),le(-1);return}if(u.key==="Enter"){m&&c>=0&&(u.preventDefault(),Ke());return}if(u.key==="Escape"){if(u.preventDefault(),m){p(!1);return}L().value?Z(""):g&&S(!1);return}u.key==="Tab"&&p(!1)},We=()=>{if(window.matchMedia("(max-width: 768px)").matches){S(!0);return}p(!0),a.focus(),a.select(),x()};a.addEventListener("focus",()=>{x()}),a.addEventListener("input",()=>Z(a.value)),a.addEventListener("keydown",de),d.addEventListener("input",()=>Z(d.value)),d.addEventListener("keydown",de),o.addEventListener("click",()=>{S(!0)}),b.addEventListener("click",()=>{S(!1)}),document.addEventListener("keydown",u=>{const f=String(u.key??"").toLowerCase();if((u.ctrlKey||u.metaKey)&&f==="k"){u.preventDefault(),We();return}if(f==="escape"){if(g){S(!1);return}m&&document.activeElement!==a&&document.activeElement!==d&&p(!1)}}),document.addEventListener("mousedown",u=>{const f=u.target;f instanceof Node&&(g&&h.contains(f)||n.contains(f)||p(!1))}),r.addEventListener("click",()=>{m||x()}),n.addEventListener("mouseover",u=>{const f=u.target;if(!(f instanceof Element))return;const A=f.closest(".search-result-item");if(!(A instanceof HTMLElement))return;const w=Number(A.getAttribute("data-search-item-index")??-1);w<0||w===c||(c=w,O(H()))}),n.addEventListener("click",u=>{const f=u.target;if(!(f instanceof Element))return;const A=f.closest(".search-result-item");if(!(A instanceof HTMLElement))return;const w=Number(A.getAttribute("data-search-item-index")??-1);w<0||ce(w)}),window.matchMedia("(max-width: 768px)").matches&&a.setAttribute("tabindex","-1")}const Se="garage-dashboard.prefetched-documents",Xt=["/dashboard.html","/calendar.html","/bookings.html","/completed.html","/werkbon.html","/werkbon-detail.html","/add-appointment.html","/emails.html","/analytics.html","/settings.html"];function en(){try{if(window.sessionStorage.getItem(Se)==="true")return;Xt.forEach(e=>{if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const t=document.createElement("link");t.rel="prefetch",t.as="document",t.href=e,document.head.append(t)}),window.sessionStorage.setItem(Se,"true")}catch{}}function kn({activePage:e,title:t,headerNote:n="",userEmail:r,unreadEmailCount:a=0,onLogout:i,garage:o,isAdmin:l=!1}){en();const h=document.createElement("div");h.className="app-shell page-animate";const{header:d,titleRow:_}=ct({title:t,headerNote:n,garage:o,activePage:e}),b=ht(e,{garage:o,isAdmin:l,userEmail:r,unreadEmailCount:a,onLogout:i}),s=document.createElement("div");s.className="app-workspace";const m=document.createElement("main");m.className="content";const g=document.createElement("div");g.className="main-content",g.append(d,s),s.append(_,m),h.append(b,g);const c=document.createElement("div");c.className="sidebar-overlay",h.append(c);const C=()=>{b.classList.add("open"),c.classList.add("open"),document.body.style.overflow="hidden"},v=()=>{b.classList.remove("open"),c.classList.remove("open"),document.body.style.overflow=""},p=d.querySelector(".topbar-hamburger");return p==null||p.addEventListener("click",C),c.addEventListener("click",v),Yt({header:d,garageId:(o==null?void 0:o.id)??""}),b.dataset.collapsed==="true"&&h.classList.add("is-sidebar-collapsed"),{shell:h,contentArea:m,setUnreadEmailCount:L=>{Ae(b,L)}}}function tn(e){return{id:e.id,name:e.name??"Garage",domain:e.domain??"",analyticsPropertyId:e.analytics_property_id??null,logoUrl:e.logo_url??"",userId:e.user_id??"",paymentLink:e.payment_link??null,mollieMethod:String(e.mollie_method??"none"),paymentDays:typeof e.payment_days=="number"?e.payment_days:parseInt(String(e.payment_days??"14"),10)||14,garageName:String(e.garage_name||e.name||"Garage")}}function nn(e){var a,i;const t="owner@gmail.com".split(",").map(o=>o.trim().toLowerCase()).filter(Boolean),n=String((e==null?void 0:e.email)??"").toLowerCase();return(((a=e==null?void 0:e.app_metadata)==null?void 0:a.role)??((i=e==null?void 0:e.user_metadata)==null?void 0:i.role)??"")==="admin"||t.includes(n)}async function rn(e){const t=nn(e),n=(await nt({userId:e.id,includeAll:t})).map(tn);return{garages:n,activeGarage:n[0]??null,isAdmin:t}}const oe="garage-dashboard.auth-context",an=5*60*1e3;function sn(){try{const e=window.sessionStorage.getItem(oe);if(!e)return null;const t=JSON.parse(e);if(!t||typeof t!="object")return null;const n=Number(t.expiresAt??0);return!Number.isFinite(n)||Date.now()>n?null:t}catch{return null}}function on(e,t){try{const n={userId:e.id,email:String(e.email??""),isAdmin:t.isAdmin,garages:t.garages??[],activeGarage:t.activeGarage??null,expiresAt:Date.now()+an};window.sessionStorage.setItem(oe,JSON.stringify(n))}catch{}}function cn(){try{window.sessionStorage.removeItem(oe)}catch{}}async function yn(){if(!R())return window.location.href=k("index.html"),null;const e=await rt();if(!e)return window.location.href=k("index.html"),null;const t=sn();if(t&&t.userId===e.user.id&&String(e.user.email??"")===t.email)return{user:e.user,garages:Array.isArray(t.garages)?t.garages:[],activeGarage:t.activeGarage??null,isAdmin:!!t.isAdmin,isDemo:!1};const n=await rn(e.user);return on(e.user,n),{user:e.user,...n,isDemo:!1}}async function _n(){try{await at()}finally{cn(),window.location.href=k("index.html")}}function Cn(){const e=document.documentElement;e.style.removeProperty("--brand-primary"),e.style.removeProperty("--brand-secondary"),e.style.removeProperty("--brand-primary-rgb"),e.style.removeProperty("--brand-secondary-rgb")}export{Cn as a,un as b,kn as c,mn as d,yn as e,wn as f,Lt as g,gn as h,hn as i,Et as j,bn as k,_n as l,fn as m,dn as n,vn as o,pn as p,It as q,Sn as s};
