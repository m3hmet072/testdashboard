import{p as y,d as $,g as tt,s as nt,h as rt,i as R,f as Ce,u as _e,m as at,j as Ae,k as Ee,l as st,n as ot,o as it,q as ct,a as lt,r as dt}from"./theme-CzeyRWKH.js";function x(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ut(e){return e==="bookings"?`
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
  `}function pt(e){const t=String((e==null?void 0:e.domain)??"").trim();if(!t)return{href:"https://autoservicehouse.nl",label:"autoservicehouse.nl"};const n=/^https?:\/\//i.test(t)?t:`https://${t}`,r=t.replace(/^https?:\/\//i,"");return{href:n,label:r}}function mt(e){const n={dashboard:"dashboard",calendar:"calender",analytics:"analytics",bookings:"appointment",addappointment:"addappointment",emails:"email",completed:"succes",werkbon:"werkbon",settings:"settings1"}[e];return n?$(`sidebar-icons/${n}.png`):null}function ht({title:e,headerNote:t="",garage:n,activePage:r="dashboard"}){var g;const a=document.createElement("div");a.className="topbar-stack";const i=pt(n),o=x(e);x(t);const c=x(i.label),h=x(i.href),d=x(String(((g=n==null?void 0:n.name)==null?void 0:g[0])??"G").toUpperCase()),k=n!=null&&n.logoUrl?`<img class="brand-logo" src="${x(n.logoUrl)}" alt="" />`:`<span class="brand-mark">${d}</span>`,v=x((n==null?void 0:n.name)??""),s=mt(r),m=s?`<img class="topbar-page-icon topbar-page-icon-${x(r)}" src="${s}" alt="${o} icon" />`:`<span class="topbar-page-icon topbar-page-icon-${x(r)}">${ut(r)}</span>`;a.innerHTML=`
    <header class="topbar">
      <button class="topbar-hamburger" type="button" aria-label="Open navigation menu">
        ${k}
        <span class="topbar-hamburger-label">${v}</span>
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

            <a href="${h}" target="_blank" rel="noreferrer">https://${c}</a>
          </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.39917 2C4.96653 2.00438 3.69265 2.06411 2.87855 2.87835C2 3.75704 2 5.17128 2 7.99972C2 10.8282 2 12.2425 2.87855 13.1211C3.7571 13.9999 5.17111 13.9999 7.99917 13.9999C10.8271 13.9999 12.2412 13.9999 13.1197 13.1211C13.9338 12.3069 13.9935 11.0328 13.9979 8.59979" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.7039 2.33132L7.36572 8.7063M13.7039 2.33132C13.3746 2.00158 11.1561 2.03231 10.6871 2.03898M13.7039 2.33132C14.0333 2.66106 14.0025 4.88239 13.9959 5.352" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>

        <a class="topbar-add-link ${r==="add-appointment"?"is-current":""}" href="${y("add-appointment.html")}">
          <img class="navbar-icon-add-appointment" src="${$("sidebar-icons/addappointment.png")}" alt="Email icon">
          <span>Add Appointment</span>
        </a>
      </div>
    </header>

    <div class="topbar-title-row">
      <div class="topbar-title-wrap">
        ${m}
        <h1 class="topbar-title">${o}</h1>
      </div>
    </div>
  `;const b=a.querySelector(".topbar"),p=a.querySelector(".topbar-title-row");return{header:b,titleRow:p}}const ft=[{key:"dashboard",href:y("dashboard.html"),label:"Dashboard",icon:"dashboard"},{key:"calendar",href:y("calendar.html"),label:"Calendar",icon:"calendar"},{key:"bookings",href:y("bookings.html"),label:"Appointment",icon:"appointments"},{key:"completed",href:y("completed.html"),label:"Completed",icon:"completed"},{key:"werkbon",href:y("werkbon.html"),label:"Werkbon",icon:"werkbon"},{key:"addappointment",href:y("add-appointment.html"),label:"Add Appointment",icon:"addappointment"},{key:"emails",href:y("emails.html"),label:"E-mails",icon:"emails",showUnreadBadge:!0},{key:"analytics",href:y("analytics.html"),label:"Analytics",icon:"analytics"}],he={dashboard:$("sidebar-icons/dashboard.png"),appointments:$("sidebar-icons/appointment.png"),calendar:$("sidebar-icons/calender.png"),completed:$("sidebar-icons/succes.png"),werkbon:$("sidebar-icons/werkbon.png"),addappointment:$("sidebar-icons/addappointment.png"),emails:$("sidebar-icons/email.png"),analytics:$("sidebar-icons/analytics.png"),default:$("sidebar-icons/default.png")},fe="garage-dashboard.sidebar-collapsed";function gt(e){return`<img class="sidebar-link-icon-image" src="${he[e]??he.default}" alt="" width="32" height="33" aria-hidden="true" />`}function wt(e){return e?((String(e).split("@")[0]??"A")[0]??"A").toUpperCase():"A"}function bt(e,t){if(t)return t;const n=String(e??"").trim().split("@")[0];return n?n.split(/[._-]+/g).filter(Boolean).map(r=>r[0].toUpperCase()+r.slice(1)).slice(0,2).join(" "):"Garage User"}function St(e){var t;return e!=null&&e.logoUrl?`<img class="brand-logo" src="${e.logoUrl}" alt="${e.name} logo" />`:`<span class="brand-mark">${String(((t=e==null?void 0:e.name)==null?void 0:t[0])??"A").toUpperCase()}</span>`}function Le(e,t){const n=Number(t),r=Number.isFinite(n)?Math.max(0,Math.floor(n)):0;e.querySelectorAll("[data-email-unread-count]").forEach(i=>{i.textContent=r>99?"99+":String(r),i.hidden=r===0})}function vt(e,{garage:t,isAdmin:n=!1,userEmail:r="",onLogout:a,unreadEmailCount:i=0}={}){const o=document.createElement("aside");o.className="sidebar";const c=window.localStorage.getItem(fe)==="true";c&&(o.classList.add("is-collapsed"),o.dataset.collapsed="true");const h=ft.map(l=>{const w=l.key===e?"is-active":"";return`
      <a class="sidebar-link sidebar-link-${l.key} ${w}" href="${l.href}">
        <span class="sidebar-link-icon">${gt(l.icon)}</span>
        <span class="sidebar-link-label">${l.label}</span>
        ${l.showUnreadBadge?'<span class="sidebar-link-count" data-email-unread-count hidden>0</span>':""}
      </a>
    `}).join(""),d=bt(r,n?"Admin":""),k=n?"Owner":(t==null?void 0:t.name)??"Garage Staff",v=tt()==="dark",s=c?"Expand sidebar":"Collapse sidebar";o.innerHTML=`
    <div class="sidebar-main">
      <div class="sidebar-brand-row">
        <a href="${y("dashboard.html")}" class="brand">
          ${St(t)}
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
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z" stroke="#333333" stroke-width="1.5"/>
<path d="M21.011 14.0949C21.5329 13.9542 21.7939 13.8838 21.8969 13.7492C22 13.6147 22 13.3982 22 12.9653V11.0316C22 10.5987 22 10.3822 21.8969 10.2477C21.7938 10.1131 21.5329 10.0427 21.011 9.90194C19.0606 9.37595 17.8399 7.33687 18.3433 5.39923C18.4817 4.86635 18.5509 4.59992 18.4848 4.44365C18.4187 4.28738 18.2291 4.1797 17.8497 3.96432L16.125 2.98509C15.7528 2.77375 15.5667 2.66808 15.3997 2.69058C15.2326 2.71308 15.0442 2.90109 14.6672 3.27709C13.208 4.73284 10.7936 4.73278 9.33434 3.277C8.95743 2.90099 8.76898 2.71299 8.60193 2.69048C8.43489 2.66798 8.24877 2.77365 7.87653 2.98499L6.15184 3.96423C5.77253 4.17959 5.58287 4.28727 5.51678 4.44351C5.45068 4.59976 5.51987 4.86623 5.65825 5.39916C6.16137 7.33686 4.93972 9.37599 2.98902 9.90196C2.46712 10.0427 2.20617 10.1131 2.10308 10.2476C2 10.3822 2 10.5987 2 11.0316V12.9653C2 13.3982 2 13.6147 2.10308 13.7492C2.20615 13.8838 2.46711 13.9542 2.98902 14.0949C4.9394 14.6209 6.16008 16.66 5.65672 18.5976C5.51829 19.1305 5.44907 19.3969 5.51516 19.5532C5.58126 19.7095 5.77092 19.8172 6.15025 20.0325L7.87495 21.0118C8.24721 21.2231 8.43334 21.3288 8.6004 21.3063C8.76746 21.2838 8.95588 21.0957 9.33271 20.7197C10.7927 19.2628 13.2088 19.2627 14.6689 20.7196C15.0457 21.0957 15.2341 21.2837 15.4012 21.3062C15.5682 21.3287 15.7544 21.223 16.1266 21.0117L17.8513 20.0324C18.2307 19.8171 18.4204 19.7094 18.4864 19.5531C18.5525 19.3968 18.4833 19.1304 18.3448 18.5975C17.8412 16.66 19.0609 14.621 21.011 14.0949Z" stroke="#333333" stroke-width="1.5" stroke-linecap="round"/>
</svg>

        <span>Settings</span>
      </button>

      <button class="language-switcher" type="button" aria-label="Current language">
        <span class="language-code">GB</span>
        <span class="language-name">English</span>
        <span class="language-chevron" aria-hidden="true">▾</span>
      </button>

      <label class="theme-switcher" aria-label="Night mode">
        <span class="theme-switch-label">Night Mode</span>
        <span class="theme-switch-control">
          <input class="theme-switch-input" type="checkbox" data-theme-toggle role="switch" ${v?"checked":""} />
          <span class="theme-switch-track" aria-hidden="true"></span>
        </span>
      </label>

      <div class="sidebar-user-card">
        <span class="sidebar-avatar">${wt(r)}</span>
        <span class="sidebar-user-meta">
          <strong>${d}</strong>
          <small>${r||k}</small>
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
  `;const m=o.querySelector("[data-theme-toggle]");m instanceof HTMLInputElement&&m.addEventListener("change",()=>{nt(m.checked?"dark":"light")});const b=o.querySelector(".sidebar-logout"),p=o.querySelector(".sidebar-footer-action"),g=o.querySelector(".sidebar-collapse-toggle"),A=l=>{o.classList.toggle("is-collapsed",l),o.dataset.collapsed=l?"true":"false",g==null||g.setAttribute("aria-label",l?"Expand sidebar":"Collapse sidebar"),g==null||g.setAttribute("title",l?"Expand sidebar":"Collapse sidebar"),window.localStorage.setItem(fe,l?"true":"false");const w=o.closest(".app-shell");w==null||w.classList.toggle("is-sidebar-collapsed",l)};return g==null||g.addEventListener("click",()=>{A(!o.classList.contains("is-collapsed"))}),p==null||p.addEventListener("click",()=>{window.location.href=y("settings.html")}),typeof a=="function"?b==null||b.addEventListener("click",a):b==null||b.remove(),Le(o,i),o}const $e="garage_dashboard_manual_bookings_v1",Me="garage_dashboard_booking_workflow_v1",X="Manual appointment created in dashboard.";function Z(){return typeof window<"u"&&typeof window.localStorage<"u"}function P(e){return String(e??"").trim()}function Ne(e){const t=String(e??"new").trim().toLowerCase();return t==="confirmed"||t==="confirm"?"confirmed":t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":"new"}function ne(){if(!Z())return{};try{const e=window.localStorage.getItem(Me);if(!e)return{};const t=JSON.parse(e);return t&&typeof t=="object"?t:{}}catch{return{}}}function Ie(e){Z()&&window.localStorage.setItem(Me,JSON.stringify(e))}function xe(e,t){const n=P(t);if(!n)return{};const r=e[n];return r&&typeof r=="object"?r:{}}function I(e,t){const n=P(e);if(!n)return;const r=ne(),a=xe(r,n);r[n]={...a,...t},Ie(r)}function yt(e){const t=P(e);if(!t)return;const n=ne();t in n&&(delete n[t],Ie(n))}function kt(e,t){const n=xe(t,e.id),r=n.convertedFromEmail===!0,a=n.deleted===!0,i=String(e.source??"").trim().toLowerCase(),o=String(e.message??""),c=i==="manual"||o.includes(X),h=e.hasScheduledAppointment===!0,d=c||h?!0:r,k=Ne(n.status??e.status),v=k==="done"?!1:typeof n.inAppointments=="boolean"?n.inAppointments:d,s=String(n.appointmentAt??e.appointmentAt??"").trim()||e.createdAt,m=String(n.completedAt??e.completedAt??"").trim()||null;return{...e,status:k,inAppointments:v,convertedFromEmail:r,isDeleted:a,appointmentAt:s,completedAt:m}}function re(){if(!Z())return[];try{const e=window.localStorage.getItem($e);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}function Te(e){Z()&&window.localStorage.setItem($e,JSON.stringify(e))}function Ct(e){const t=P(e);if(!t)return!1;const n=re();if(!n.length)return!1;const r=n.filter(a=>P(a.id)!==t);return r.length===n.length?!1:(Te(r),!0)}function _t(e,t){const n=new Date(e);return Number.isNaN(n.getTime())?t:n.toISOString()}function At(){return`MAN-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function Et(e){const t=String(e.appointment_date??e.appointmentDate??"").trim(),n=String(e.appointment_time??e.appointmentTime??"").trim();return!t||!n?"":`${t}T${n}`}function G(e,t){var a;const n=String(e??""),r=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message|description|source|submittedat)\\s*:|$)`,"i");return(((a=n.match(r))==null?void 0:a[1])??"").trim()}function ee(e){const t=G(e,"message");if(t)return t;const n=G(e,"description");return n||String(e??"").trim()}function Lt(e,t){const n=String(e??"").trim();return n||String(t??"").trim().toUpperCase()||"UNKNOWN"}function Pe(e,t){const n=G(e.message,"name");return{status:"draft",werkbon_created:!1,customer_name:String(e.name??"").trim()||n||"Onbekende klant",customer_email:G(e.message,"email")||"",customer_phone:String(e.phone??"").trim(),car_model:"Voertuig",service_types:[String(e.service??"Service")],km_stand:0,vat_enabled:!0,description:ee(e.message),internal_note:"",invoice_number:"",paid_at:null,completed_at:t,parts:[{name:"Service",quantity:1,price:0}],labour:{hours:0,rate:0},totals:{subtotal:0,vat:0,total:0},updated_at:new Date().toISOString()}}function Re(e){if(e&&typeof e=="object"){const n=P(e.id),r=String(e.garageId??e.garage_id??"").trim();return{bookingId:n,garageId:r,isLocalOnly:n.startsWith("MAN-")}}const t=P(e);return{bookingId:t,garageId:"",isLocalOnly:t.startsWith("MAN-")}}function $t(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase booking_schedule table or bookings_with_schedule view is missing. Run the schedule SQL migration first."):t==="42501"?new Error("Supabase blocked the schedule update. Check RLS policies for booking_schedule."):e instanceof Error?e:new Error("Unable to save the appointment schedule.")}function De(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase bookings table is missing. Run the schema SQL first."):t==="42501"?new Error("Supabase blocked deleting this booking. Check RLS policies for bookings."):e instanceof Error?e:new Error("Unable to delete the appointment.")}function Mt(e){const t=String((e==null?void 0:e.code)??"").trim();return t==="42P01"?new Error("Supabase completed_appointments table is missing. Run the completed SQL migration first."):t==="42501"?new Error("Supabase blocked deleting this completed appointment. Check RLS policies for completed_appointments."):e instanceof Error?e:new Error("Unable to delete the completed appointment.")}function J(e){const t=e.created_at??e.createdAt??new Date().toISOString(),n=Et(e),r=String(e.appointment_at??e.appointmentAt??"").trim(),a=r||n||t,i=!!(r||n);return{id:e.id,garageId:e.garage_id??e.garageId,name:String(e.name??"").trim(),licensePlate:e.license_plate??"Unknown plate",phone:e.phone??"",service:e.service??"Service request",message:e.message??"",appointmentAt:a,completedAt:e.completed_at??e.completedAt??null,status:e.status??e.state??"new",source:e.source??"form",hasScheduledAppointment:i,createdAt:t}}function Nt({garageIds:e=null}={}){const t=re();return t.length?(Array.isArray(e)&&e.length?t.filter(r=>e.includes(r.garage_id??r.garageId)):t).map(J):[]}function It(e,t){return new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()}function vn(e){I(e,{convertedFromEmail:!0,inAppointments:!0,status:"new"})}function yn(e,t){I(e,{status:Ne(t)})}async function kn(e,t){const n=String(t??"").trim();if(!n)throw new Error("Please choose both a date and time for the appointment.");const{bookingId:r,garageId:a,isLocalOnly:i}=Re(e);if(!r)throw new Error("Booking id is required before saving a schedule.");if(!i&&a)try{await _e({bookingId:r,garageId:a,appointmentAt:n})}catch(o){throw $t(o)}return I(r,{appointmentAt:n}),n}async function Cn(e){const{bookingId:t,garageId:n,isLocalOnly:r}=Re(e);if(!t)throw new Error("Booking id is required before deleting a booking.");if(r)return Ct(t),yt(t),!0;if(!R())return I(t,{deleted:!0,inAppointments:!1,status:"deleted"}),!0;let a;try{a=await Ee({bookingId:t,garageId:n})}catch(i){throw De(i)}if(!a)throw new Error("Supabase did not delete this booking (row not found or blocked by RLS policy).");return I(t,{deleted:!0,inAppointments:!1,status:"deleted"}),!0}async function _n(e){const t=String((e==null?void 0:e.completedAppointmentId)??(e==null?void 0:e.id)??e).trim(),n=String((e==null?void 0:e.garageId)??(e==null?void 0:e.garage_id)??"").trim(),r=String((e==null?void 0:e.bookingId)??"").trim();if(!t)throw new Error("Completed appointment id is required before deleting.");if(!R())return r&&I(r,{deleted:!0,inAppointments:!1}),!0;let a;try{a=await ot({completedAppointmentId:t,garageId:n})}catch(i){throw Mt(i)}if(!a)throw new Error("Supabase did not delete this completed appointment (row not found or blocked by RLS policy).");if(r)try{await Ee({bookingId:r,garageId:n})}catch(i){throw De(i)}return r&&I(r,{deleted:!0,inAppointments:!1,status:"deleted"}),!0}async function An(e,{convertedFromEmail:t=!1}={}){const n=e&&typeof e=="object"?e:null,r=P((n==null?void 0:n.id)??e),a=new Date().toISOString(),i={inAppointments:!1,status:"done",completedAt:a};if(t&&(i.convertedFromEmail=!0),I(r,i),!n||!R())return{persistedToSupabase:!1};const o=String(n.garageId??n.garage_id??"").trim();if(!o)return{persistedToSupabase:!1};try{await at({bookingId:r,garageId:o});const c=Pe(n,a);return await Ae({garageId:o,bookingId:r,appointmentAt:n.appointmentAt,completedAt:a,licensePlate:n.licensePlate,service:n.service,completionNotes:c}),{persistedToSupabase:!0}}catch(c){if(String((c==null?void 0:c.code)??"")==="42501"||Number((c==null?void 0:c.status)??0)===403)return{persistedToSupabase:!1,warning:"RLS_BLOCKED"};throw c}}async function En(e){if(!R())return null;const t=String(e.garageId??e.garage_id??"").trim();if(!t)return null;const n=e.completedAt||new Date().toISOString(),r={...Pe(e,n),werkbon_created:!0};try{const a=await Ae({garageId:t,bookingId:String(e.id??""),appointmentAt:e.appointmentAt,completedAt:n,licensePlate:e.licensePlate,service:e.service,completionNotes:r});return String((a==null?void 0:a.id)??"")}catch(a){if(String((a==null?void 0:a.code)??"")==="42501"||Number((a==null?void 0:a.status)??0)===403)return null;throw a}}async function Ln(e,{created:t=!0}={}){if(!R())return null;const n=String((e==null?void 0:e.completedAppointmentId)??(e==null?void 0:e.id)??e).trim(),r=String((e==null?void 0:e.garageId)??(e==null?void 0:e.garage_id)??"").trim();if(!n)return null;try{const a=await st({completedAppointmentId:n,garageId:r,werkbonCreated:t});return a?String(a.id??""):null}catch(a){if(String((a==null?void 0:a.code)??"")==="42501"||Number((a==null?void 0:a.status)??0)===403)return null;throw a}}async function xt({garageIds:e=null}={}){return R()?(await Ce({garageIds:e})).map(n=>{let r={};try{r=JSON.parse(String(n.completion_notes??"{}"))}catch{r={}}const a=String(n.license_plate??"").trim(),i=G(r.description,"name"),o=Lt(String(r.customer_name??r.customerName??i??"").trim(),a),c=ee(r.description),h=ee(r.message),d=c||h;return{id:String(n.booking_id??n.id),completedAppointmentId:String(n.id??""),bookingId:n.booking_id?String(n.booking_id):"",garageId:String(n.garage_id??""),licensePlate:a,phone:String(r.customer_phone??r.customerPhone??""),service:String(n.service??"Service"),message:d,customerName:o,werkbonCreated:r.werkbon_created===!0,appointmentAt:n.appointment_date&&n.appointment_time?`${n.appointment_date}T${String(n.appointment_time).slice(0,8)}`:String(n.completed_at??n.created_at??""),completedAt:String(n.completed_at??n.created_at??""),status:"done",inAppointments:!1,source:"completed",createdAt:String(n.created_at??n.completed_at??"")}}):[]}async function $n({garageId:e,name:t,licensePlate:n,phone:r,service:a,message:i,appointmentAt:o}){const c=String(e??"").trim(),h=String(t??"").trim(),d=String(n??"").trim().toUpperCase(),k=String(r??"").trim(),v=String(a??"").trim(),s=String(i??"").trim(),m=s.includes(X)?s:`${s}
${X}`;if(!c)throw new Error("A garage is required before creating a manual appointment.");if(!d||!k||!v||!s||!o)throw new Error("Please fill in kenteken, phone number, service, bericht, and appointment date.");const b=new Date().toISOString(),p=_t(o,b),g=await it({garageId:c,name:h,licensePlate:d,phone:k,service:v,message:m,createdAt:b});if(g){try{await _e({bookingId:g.id,garageId:c,appointmentAt:p})}catch(w){console.warn("Unable to persist booking schedule in Supabase booking_schedule.",w)}return I(g.id,{convertedFromEmail:!1,inAppointments:!0,status:"new",appointmentAt:p}),J({...g,appointment_at:p,source:"manual",status:"new"})}const A={id:At(),garage_id:c,name:h,license_plate:d,phone:k,service:v,message:m,appointment_at:p,status:"new",source:"manual",created_at:b},l=re();return l.unshift(A),Te(l.slice(0,500)),I(A.id,{convertedFromEmail:!1,inAppointments:!0,status:"new",appointmentAt:p}),J(A)}async function Tt({garageIds:e=null}={}){const t=await rt({garageIds:e}),n=Nt({garageIds:e}),r=ne(),a=[...t.map(J),...n],i=new Map;for(const o of a){const c=String(o.id??"").trim();c&&(i.has(c)||i.set(c,o))}return Array.from(i.values()).map(o=>kt(o,r)).filter(o=>o.isDeleted!==!0).sort(It)}const He="garage_dashboard_email_read_state_v1";function Be(){return typeof window<"u"&&typeof window.localStorage<"u"}function Ue(){if(!Be())return{};try{const e=window.localStorage.getItem(He);if(!e)return{};const t=JSON.parse(e);return t&&typeof t=="object"?t:{}}catch{return{}}}function Pt(e){Be()&&window.localStorage.setItem(He,JSON.stringify(e))}function ae(e){return String(e??"").trim()}function q(e,t){var r;const n=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message|description|source|submittedat)\\s*:|$)`,"i");return(((r=e.match(n))==null?void 0:r[1])??"").trim()}function Rt(e){const t=String(e??"").trim();return t?/\b(?:name|email|message)\s*:/i.test(t)?{name:q(t,"name"),email:q(t,"email"),message:q(t,"message")||q(t,"description")}:{name:"",email:"",message:t}:{name:"",email:"",message:""}}function ge(e){const n=new Date(e).getTime();return Number.isFinite(n)?n:0}function Dt(e){const t=String(e??"new").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function je(e){return String((e==null?void 0:e.source)??"form")==="manual"||(e==null?void 0:e.hasScheduledAppointment)===!0||(e==null?void 0:e.convertedFromEmail)===!0?!1:Dt(e==null?void 0:e.status)!=="done"}function Fe(e){const t=ae(e);return t?Ue()[t]===!0:!1}function Mn(e,t=!0){const n=ae(e);if(!n)return;const r=Ue();t?r[n]=!0:delete r[n],Pt(r)}function Nn(e){const t=e.filter(je);let n=0;for(const r of t)Fe(r.id)||(n+=1);return{total:t.length,unread:n}}function Ht(e,{garageNameById:t=new Map}={}){return e.filter(je).map(n=>{const r=Rt(n.message),a=ae(n.id),i=`${n.licensePlate??"Unknown"} • ${n.service??"Service request"}`,o=r.message||String(n.message??"").trim()||"No message provided.",c=String(n.name??"").trim()||r.name||String(n.licensePlate??"").trim()||"UNKNOWN",h=r.email||"";return{id:a,subject:i,preview:o,message:o,senderName:c,senderEmail:h,phone:n.phone??"",service:n.service??"",licensePlate:n.licensePlate??"",garageId:n.garageId,garageName:t.get(n.garageId)??"",receivedAt:n.createdAt,appointmentAt:n.appointmentAt??n.createdAt,read:Fe(a)}}).sort((n,r)=>ge(r.receivedAt)-ge(n.receivedAt))}const we=2,Bt=300,Ut=3e4,jt=6e4,se=80,Ke="garage-dashboard.recent-searches",Ge=5,z=new Map,V=new Map;function C(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Ft(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function L(e,t){const n=C(e??""),r=String(t??"").trim().slice(0,se);if(!r)return n;const a=new RegExp(`(${Ft(r)})`,"ig");return n.replace(a,"<mark>$1</mark>")}function F(e){const t=String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"");return t?t.replace(/(.{2})(?=.)/g,"$1-"):""}function W(e){const t=new Date(e);return Number.isNaN(t.getTime())?"-":t.toLocaleDateString("nl-NL",{day:"2-digit",month:"short",year:"numeric"})}function be(e){const t=Number(e??0);return Number.isFinite(t)?new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2}).format(t):"EUR 0,00"}function oe(e){const t=String(e??"").trim().toLowerCase();return["done","completed","complete","closed"].includes(t)?"completed":["confirmed","confirm"].includes(t)?"confirmed":t||"new"}function Kt(e){const t=oe(e);return t==="completed"?"Voltooid":t==="confirmed"?"Bevestigd":t==="new"?"Nieuw":t}function Se(e){const t=String(e??"").replace(/[^a-z0-9]/gi,"");return t.length>=4&&/[a-z]/i.test(t)&&/\d/.test(t)}function ve(e){return/\d/.test(String(e??""))}function M(e){return{calendar:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 2.75V5M14 2.75V5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="3" y="4.5" width="14" height="12.5" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M3 8.5H17" stroke="currentColor" stroke-width="1.6"/></svg>',fileText:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6.5 2.5H11.5L15.5 6.5V15.5C15.5 16.33 14.83 17 14 17H6C5.17 17 4.5 16.33 4.5 15.5V4C4.5 3.17 5.17 2.5 6 2.5H6.5Z" stroke="currentColor" stroke-width="1.6"/><path d="M11.5 2.5V6.5H15.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 10H13M7 13H11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',check:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.8 10.2L8.9 12.3L13.3 7.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',user:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="6.5" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M4 16.2C4.8 13.9 6.8 12.8 10 12.8C13.2 12.8 15.2 13.9 16 16.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',mail:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="4.5" width="14" height="11" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M4.5 6L10 10L15.5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',car:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 11.5L5.5 7.5C5.8 6.8 6.4 6.4 7.2 6.4H12.8C13.6 6.4 14.2 6.8 14.5 7.5L16 11.5" stroke="currentColor" stroke-width="1.6"/><rect x="3.2" y="10" width="13.6" height="5.5" rx="1.8" stroke="currentColor" stroke-width="1.6"/><circle cx="6.5" cy="14" r="1.1" fill="currentColor"/><circle cx="13.5" cy="14" r="1.1" fill="currentColor"/></svg>',receipt:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 2.8H14V16.8L12 15.5L10 16.8L8 15.5L6 16.8V2.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 6.8H12M8 9.8H12M8 12.8H11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',plus:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.5V13.5M6.5 10H13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',settings:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 6.9A3.1 3.1 0 1 1 10 13.1A3.1 3.1 0 0 1 10 6.9Z" stroke="currentColor" stroke-width="1.6"/><path d="M16.1 10.9L15 11.4C14.9 11.8 14.7 12.2 14.5 12.5L14.9 13.7L13.7 14.9L12.5 14.5C12.2 14.7 11.8 14.9 11.4 15L10.9 16.1H9.1L8.6 15C8.2 14.9 7.8 14.7 7.5 14.5L6.3 14.9L5.1 13.7L5.5 12.5C5.3 12.2 5.1 11.8 5 11.4L3.9 10.9V9.1L5 8.6C5.1 8.2 5.3 7.8 5.5 7.5L5.1 6.3L6.3 5.1L7.5 5.5C7.8 5.3 8.2 5.1 8.6 5L9.1 3.9H10.9L11.4 5C11.8 5.1 12.2 5.3 12.5 5.5L13.7 5.1L14.9 6.3L14.5 7.5C14.7 7.8 14.9 8.2 15 8.6L16.1 9.1V10.9Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',clock:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.4V10L12.5 11.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',searchX:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.8" stroke="currentColor" stroke-width="1.6"/><path d="M12.7 12.7L17 17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M6.8 6.8L10.2 10.2M10.2 6.8L6.8 10.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',arrowLeft:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M11.8 4.8L6.6 10L11.8 15.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'}[e]??""}function ie(){try{const e=JSON.parse(window.localStorage.getItem(Ke)||"[]");return Array.isArray(e)?e.map(t=>String(t??"").trim()).filter(Boolean).slice(0,Ge):[]}catch{return[]}}function te(e){try{window.localStorage.setItem(Ke,JSON.stringify(e.slice(0,Ge)))}catch{}}function Gt(e){const t=String(e??"").trim();if(!t)return;const n=ie().filter(r=>r.toLowerCase()!==t.toLowerCase());n.unshift(t),te(n)}function Y(e){const t=oe(e);return t==="completed"?'<span class="global-search-badge global-search-badge-success">Voltooid</span>':t==="confirmed"?'<span class="global-search-badge global-search-badge-info">Bevestigd</span>':t==="new"?'<span class="global-search-badge global-search-badge-muted">Nieuw</span>':`<span class="global-search-badge global-search-badge-muted">${C(Kt(t))}</span>`}function qt(){return/Mac|iPhone|iPad|iPod/i.test(window.navigator.platform)?"⌘K":"Ctrl+K"}function qe(e,t){var a;const n=String(e??""),r=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((a=n.match(r))==null?void 0:a[1])??"").trim()}function O(e){return String(e??"").toLowerCase().replace(/[^a-z0-9]/g,"")}function zt(e){return String(e??"").trim().slice(0,se)}function Vt(e){const t=String((e==null?void 0:e.name)??"").trim();if(t)return t;const n=qe(e==null?void 0:e.message,"name");return n||String((e==null?void 0:e.licensePlate)??"").trim()||"UNKNOWN"}function Wt(e){return qe(e==null?void 0:e.message,"email")}function Yt(e,t,n,r){const a=e.filter(s=>oe(s==null?void 0:s.status)!=="completed"&&(s==null?void 0:s.inAppointments)!==!1).map(s=>({id:s.id,customer_name:Vt(s),customer_email:Wt(s),customer_phone:String(s.phone??""),license_plate:String(s.licensePlate??""),car_brand:String(s.service??"Service"),status:s.status,appointment_date:s.appointmentAt||s.createdAt,services:s.service})),i=t.map(s=>({id:s.id,customer_name:s.customerName||"Onbekende klant",license_plate:s.licensePlate,car_brand:s.service||"Service",appointment_date:s.appointmentAt||s.completedAt||s.createdAt,status:"completed"})),o=[...a,...i],c=new Map;a.forEach(s=>{const m=`${s.customer_name}|${s.customer_email}|${s.license_plate}`.toLowerCase();c.has(m)||c.set(m,{customer_name:s.customer_name,customer_email:s.customer_email,customer_phone:s.customer_phone,license_plate:s.license_plate,car_brand:s.car_brand})});const h=new Map;n.forEach(s=>{let m={};try{m=JSON.parse(String(s.completion_notes??"{}"))}catch{m={}}h.set(String(s.id??""),m)});const d=t.map(s=>{var p;const m=h.get(String(s.completedAppointmentId??""))??{},b=Number(((p=m==null?void 0:m.totals)==null?void 0:p.total)??0);return{id:s.completedAppointmentId,customer_name:s.customerName||String(m.customer_name??"Onbekende klant"),license_plate:s.licensePlate,car_brand:String(m.car_model??s.service??"Service"),total:b,status:String(m.status??"draft"),factuurnummer:String(m.invoice_number??"").trim(),created_at:s.createdAt}}),k=d.filter(s=>s.factuurnummer),v=r.map(s=>({id:s.id,from_name:s.senderName,from_email:s.senderEmail,subject:s.subject,created_at:s.receivedAt,read:s.read}));return{appointmentsSource:a,completedSource:i,plateSource:o,customerSource:Array.from(c.values()),werkbonSource:d,invoiceSource:k,emailsSource:v}}function Ot(e){const t=(d,k)=>d.map(v=>({...v,_searchToken:O(k.map(s=>String(v[s]??"")).join(" "))})),n=t(e.appointmentsSource,["customer_name","customer_email","customer_phone","license_plate","car_brand"]),r=t(e.completedSource,["customer_name","license_plate","car_brand"]),a=t(e.customerSource,["customer_name","customer_email","customer_phone","license_plate","car_brand"]),i=t(e.werkbonSource,["customer_name","license_plate","car_brand","factuurnummer"]),o=t(e.emailsSource,["from_name","from_email","subject"]),c=[...n,...r].map(d=>({...d,_plateToken:O(d.license_plate)})),h=e.invoiceSource.map(d=>({...d,_invoiceToken:O(d.factuurnummer)}));return{appointments:n,completed:r,customers:a,werkbonnen:i,emails:o,plates:c,invoices:h}}function H(e,t,n,r){const a=[];for(const i of e)if(r(i,t)&&(a.push(i),a.length>=n))break;return a}async function Jt(e){const t=String(e??"").trim(),n=Date.now(),r=V.get(t);if(r!=null&&r.data&&n-r.timestamp<jt)return r.data;if(r!=null&&r.inFlight)return r.inFlight;const a=Promise.all([Tt({garageIds:[t]}),xt({garageIds:[t]}),Ce({garageIds:[t]})]).then(([i,o,c])=>{const h=Ht(i),d=Yt(i,o,c,h);return{indexed:Ot(d)}});V.set(t,{timestamp:n,data:(r==null?void 0:r.data)??null,inFlight:a});try{const i=await a;return V.set(t,{timestamp:Date.now(),data:i,inFlight:null}),i}catch(i){if(r!=null&&r.data)return r.data;throw V.delete(t),i}}function ye(e){const t=String(e??"").trim().toLowerCase(),n=[{key:"new-appointment",icon:"plus",title:"Nieuwe afspraak toevoegen",match:["nieuwe afspraak","afspraak"],navigate:()=>{window.location.href=y("add-appointment.html")}},{key:"new-werkbon",icon:"fileText",title:"Nieuwe werkbon maken",match:["werkbon","factuur"],navigate:()=>{window.location.href=y("werkbon.html?action=create")}},{key:"calendar",icon:"calendar",title:"Kalender bekijken",match:["kalender","agenda"],navigate:()=>{window.location.href=y("calendar.html")}},{key:"settings",icon:"settings",title:"Instellingen openen",match:["instellingen","settings"],navigate:()=>{window.location.href=y("settings.html")}}];return t?n.filter(r=>r.match.some(a=>t.includes(a))):[]}async function Zt(e,t){const n=zt(e),r=`${t}:${n.toLowerCase()}`;if(z.has(r))return z.get(r);if(!R())return{appointments:[],werkbonnen:[],completed:[],customers:[],emails:[],plates:[],invoices:[],includePlateSection:Se(n),includeInvoiceSection:ve(n),quickActions:ye(n)};const a=Se(n),i=ve(n),o=O(n),{indexed:c}=await Jt(t),h=[],d=async(l,w)=>{try{const E=await w();return h.push({label:l,count:Array.isArray(E)?E.length:0,ok:!0}),Array.isArray(E)?E:[]}catch(E){return h.push({label:l,count:0,ok:!1,error:E instanceof Error?E.message:String(E??"Unknown error")}),[]}},[k,v,s,m,b,p,g]=await Promise.all([d("appointments",()=>Promise.resolve(H(c.appointments,o,4,(l,w)=>l._searchToken.includes(w)))),d("werkbonnen",()=>Promise.resolve(H(c.werkbonnen,o,4,(l,w)=>l._searchToken.includes(w)))),d("completed",()=>Promise.resolve(H(c.completed,o,3,(l,w)=>l._searchToken.includes(w)))),d("customers",()=>Promise.resolve(H(c.customers,o,3,(l,w)=>l._searchToken.includes(w)))),d("emails",()=>Promise.resolve(H(c.emails,o,3,(l,w)=>l._searchToken.includes(w)))),a?d("plates",()=>Promise.resolve(H(c.plates,o,4,(l,w)=>l._plateToken.includes(w)))):Promise.resolve([]),i?d("invoices",()=>Promise.resolve(H(c.invoices,o,3,(l,w)=>l._invoiceToken.includes(w)))):Promise.resolve([])]),A={appointments:k,werkbonnen:v,completed:s,customers:m,emails:b,plates:p,invoices:g,includePlateSection:a,includeInvoiceSection:i,quickActions:ye(n)};return z.set(r,A),window.setTimeout(()=>{z.delete(r)},Ut),A}function Qt(e,t,n){const r=`data-search-item-index="${n}"`;return e.type==="appointment"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-appointments">${M("calendar")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${L(e.customerName,t)}</span>
          <span class="search-result-secondary">${C(e.carBrand||"-")} <span class="plate-chip plate-chip-small">${C(F(e.plate)||"UNKNOWN")}</span></span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${C(e.date)}</span>
          ${Y(e.status)}
        </span>
      </button>
    `:e.type==="werkbon"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-werkbonnen">${M("fileText")}</span>
        <span class="search-result-main">
          <span class="search-result-primary"><small class="search-result-muted">${L(e.factuur,t)}</small> ${L(e.customerName,t)}</span>
          <span class="search-result-secondary"><span class="plate-chip plate-chip-small">${C(F(e.plate)||"UNKNOWN")}</span> ${C(e.carBrand||"-")}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${C(e.total)}</span>
          ${Y(e.status)}
        </span>
      </button>
    `:e.type==="completed"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-completed">${M("check")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${L(e.customerName,t)}</span>
          <span class="search-result-secondary">${C(e.carBrand||"-")} <span class="plate-chip plate-chip-small">${C(F(e.plate)||"UNKNOWN")}</span></span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${C(e.date)}</span>
          <span class="global-search-badge global-search-badge-success">Voltooid</span>
        </span>
      </button>
    `:e.type==="customer"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-customers">${M("user")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${L(e.customerName,t)}</span>
          <span class="search-result-secondary">${L(e.email,t)}</span>
        </span>
        <span class="search-result-side">
          <span class="plate-chip plate-chip-small">${C(F(e.plate)||"UNKNOWN")}</span>
          <span class="search-result-muted">${C(e.carBrand||"-")}</span>
        </span>
      </button>
    `:e.type==="email"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-emails">${M("mail")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${e.unread?'<span class="search-unread-dot"></span>':""}${L(e.sender,t)}</span>
          <span class="search-result-secondary">${L(e.subject,t)}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${C(e.date)}</span>
          ${e.unread?'<span class="global-search-badge global-search-badge-info">Ongelezen</span>':""}
        </span>
      </button>
    `:e.type==="plate"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-plates">${M("car")}</span>
        <span class="search-result-main">
          <span class="search-result-primary"><span class="plate-chip">${L(F(e.plate),t)}</span></span>
          <span class="search-result-secondary">${C(e.carBrand||"-")} - ${C(e.customerName||"-")}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${C(e.date)}</span>
          ${Y(e.status)}
        </span>
      </button>
    `:e.type==="invoice"?`
      <button class="search-result-item" type="button" ${r}>
        <span class="search-result-icon search-result-icon-invoices">${M("receipt")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${L(e.factuur,t)}</span>
          <span class="search-result-secondary">${L(e.customerName,t)}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${C(e.total)}</span>
          ${Y(e.status)}
        </span>
      </button>
    `:`
    <button class="search-result-item" type="button" ${r}>
      <span class="search-result-icon search-result-icon-actions">${M(e.icon)}</span>
      <span class="search-result-main">
        <span class="search-result-primary">${L(e.title,t)}</span>
      </span>
    </button>
  `}function Xt(e,t,n,r){if(!t.length)return"";const a=t.map((i,o)=>Qt(i,n,r+o)).join("");return`
    <section class="search-section" data-search-section>
      <header class="search-section-header">
        <span>${C(e)}</span>
        <span>${t.length}</span>
      </header>
      <div class="search-section-items">
        ${a}
      </div>
    </section>
  `}function en(e){return`
    <div class="search-empty-state">
      <span class="search-empty-icon">${M("searchX")}</span>
      <strong>Geen resultaten voor '${C(e)}'</strong>
      <p>Probeer een andere zoekterm</p>
    </div>
  `}function tn(){return`
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
  `}function nn(){const e=ie();return e.length?`
    <section class="search-section">
      <header class="search-section-header"><span>Recente zoekopdrachten</span><span>${e.length}</span></header>
      <div class="search-recents">
        ${e.map((t,n)=>`
          <button class="search-recent-item" type="button" data-recent-index="${n}" data-recent-term="${C(t)}">
            <span class="search-recent-left">${M("clock")} ${C(t)}</span>
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
    `}function rn(e){return{plates:e.plates.map(t=>({type:"plate",plate:t.license_plate,carBrand:t.car_brand,customerName:t.customer_name,date:W(t.appointment_date),status:t.status,open:()=>{const n=new URL(y("bookings.html"),window.location.origin);n.searchParams.set("plate",String(t.license_plate??"")),window.location.href=`${n.pathname}${n.search}`}})),appointments:e.appointments.map(t=>({type:"appointment",customerName:t.customer_name,carBrand:t.car_brand,plate:t.license_plate,date:W(t.appointment_date),status:t.status,open:()=>{const n=new URL(y("bookings.html"),window.location.origin);n.searchParams.set("bookingId",String(t.id)),window.location.href=`${n.pathname}${n.search}`}})),werkbonnen:e.werkbonnen.map(t=>({type:"werkbon",factuur:t.factuurnummer||"Factuur",customerName:t.customer_name,plate:t.license_plate,carBrand:t.car_brand,total:be(t.total),status:t.status,open:()=>{window.location.href=y(`werkbon-detail.html?id=${encodeURIComponent(String(t.id))}`)}})),completed:e.completed.map(t=>({type:"completed",customerName:t.customer_name,plate:t.license_plate,carBrand:t.car_brand,date:W(t.appointment_date),open:()=>{const n=new URL(y("completed.html"),window.location.origin);n.searchParams.set("customer",String(t.customer_name??"")),window.location.href=`${n.pathname}${n.search}`}})),customers:e.customers.map(t=>({type:"customer",customerName:t.customer_name,email:t.customer_email||t.customer_phone||"-",plate:t.license_plate,carBrand:t.car_brand,open:()=>{const n=new URL(y("bookings.html"),window.location.origin);n.searchParams.set("customer",String(t.customer_name??"")),window.location.href=`${n.pathname}${n.search}`}})),emails:e.emails.map(t=>({type:"email",sender:t.from_name||t.from_email||"Onbekend",subject:t.subject||"(geen onderwerp)",unread:t.read===!1,date:W(t.created_at),open:()=>{const n=new URL(y("emails.html"),window.location.origin);n.searchParams.set("emailId",String(t.id)),window.location.href=`${n.pathname}${n.search}`}})),invoices:e.invoices.map(t=>({type:"invoice",factuur:t.factuurnummer||"Factuur",customerName:t.customer_name,total:be(t.total),status:t.status,open:()=>{window.location.href=y(`werkbon-detail.html?id=${encodeURIComponent(String(t.id))}`)}})),quickActions:e.quickActions.map(t=>({type:"action",icon:t.icon,title:t.title,open:t.navigate}))}}function an({header:e,garageId:t}){if(!(e instanceof HTMLElement)||!t)return;const n=e.querySelector("[data-global-search-root]");if(!(n instanceof HTMLElement)||n.dataset.searchInitialized==="true")return;n.dataset.searchInitialized="true";const r=n.querySelector(".topbar-search-shell"),a=n.querySelector(".topbar-search-input"),i=n.querySelector("[data-global-search-dropdown]"),o=n.querySelector(".topbar-mobile-search-trigger"),c=n.querySelector("[data-search-shortcut-hint]");if(!(r instanceof HTMLElement)||!(a instanceof HTMLInputElement)||!(i instanceof HTMLElement)||!(o instanceof HTMLButtonElement))return;c instanceof HTMLElement&&(c.textContent=qt());const h=document.createElement("div");h.className="mobile-search-overlay",h.innerHTML=`
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
  `,document.body.append(h);const d=h.querySelector(".mobile-search-input"),k=h.querySelector(".mobile-search-results"),v=h.querySelector(".mobile-search-back");if(!(d instanceof HTMLInputElement)||!(k instanceof HTMLElement)||!(v instanceof HTMLButtonElement))return;let s="",m=!1,b=!1,p=-1,g=[],A=0;const l=u=>{if(m=u,!m){i.hidden=!0,i.innerHTML="",p=-1,g=[];return}b||(i.hidden=!1)},w=u=>{if(b=u,h.classList.toggle("open",b),!b){document.body.style.overflow="",l(!1);return}document.body.style.overflow="hidden",d.value=a.value,s=d.value.trim(),l(!0),d.focus(),d.select(),T()},E=()=>b?d:a,N=()=>b?k:i,U=u=>{const f=String(u??"").slice(0,se);a.value=f,d.value=f,s=f.trim()},j=u=>{u.querySelectorAll(".search-result-item").forEach(f=>{const _=Number(f.getAttribute("data-search-item-index")??-1);f.classList.toggle("is-selected",_===p)})},de=u=>{const f=g[u];f&&(s.length>=we&&Gt(s),l(!1),w(!1),f.open())},Ye=()=>{const u=N();u.innerHTML='<div class="search-empty-small">Zoeken tijdelijk niet beschikbaar</div>',l(!0)},T=async()=>{const u=s,f=N();if(!u){f.innerHTML=nn(),l(!0),p=-1,g=[],Oe();return}if(u.length<we){f.innerHTML='<div class="search-empty-small">Typ minimaal 2 tekens om te zoeken</div>',l(!0),p=-1,g=[];return}f.innerHTML=tn(),l(!0);try{const _=await Zt(u,t);if(u!==s)return;const S=rn(_);g=[...S.plates,...S.appointments,...S.werkbonnen,...S.completed,...S.customers,...S.emails,...S.invoices,...S.quickActions];let D=0;const Qe=[["Kentekens",S.plates],["Afspraken",S.appointments],["Werkbonnen",S.werkbonnen],["Voltooide afspraken",S.completed],["Klanten",S.customers],["E-mails",S.emails],["Factuurnummers",S.invoices],["Snelle acties",S.quickActions]].map(([Xe,me])=>{const et=Xt(Xe,me,u,D);return D+=me.length,et}).join("");f.innerHTML=Qe||en(u),g.length?(p<0||p>=g.length)&&(p=0):p=-1,j(f)}catch{Ye()}finally{}},Oe=()=>{var f;const u=N();u.querySelectorAll("[data-recent-term]").forEach(_=>{_.addEventListener("click",S=>{if(S.target instanceof Element?S.target.closest("[data-recent-remove]"):null)return;const B=String(_.getAttribute("data-recent-term")??"");U(B),T()})}),u.querySelectorAll("[data-recent-remove]").forEach(_=>{_.addEventListener("click",S=>{S.stopPropagation();const D=Number(_.getAttribute("data-recent-remove")??-1),B=ie();D<0||D>=B.length||(B.splice(D,1),te(B),T())})}),(f=u.querySelector("[data-recent-clear]"))==null||f.addEventListener("click",()=>{te([]),T()})},Q=u=>{U(u),window.clearTimeout(A),A=window.setTimeout(()=>{T()},Bt)},ue=u=>{if(!m||!g.length)return;const f=g.length-1;p<0?p=u>0?0:f:(p+=u,p>f&&(p=0),p<0&&(p=f)),j(N());const _=N().querySelector(`[data-search-item-index="${p}"]`);_ instanceof HTMLElement&&_.scrollIntoView({block:"nearest"})},Je=()=>{p<0||p>=g.length||de(p)},pe=u=>{if(u.key==="ArrowDown"){u.preventDefault(),ue(1);return}if(u.key==="ArrowUp"){u.preventDefault(),ue(-1);return}if(u.key==="Enter"){m&&p>=0&&(u.preventDefault(),Je());return}if(u.key==="Escape"){if(u.preventDefault(),m){l(!1);return}E().value?Q(""):b&&w(!1);return}u.key==="Tab"&&l(!1)},Ze=()=>{if(window.matchMedia("(max-width: 768px)").matches){w(!0);return}l(!0),a.focus(),a.select(),T()};a.addEventListener("focus",()=>{T()}),a.addEventListener("input",()=>Q(a.value)),a.addEventListener("keydown",pe),d.addEventListener("input",()=>Q(d.value)),d.addEventListener("keydown",pe),o.addEventListener("click",()=>{w(!0)}),v.addEventListener("click",()=>{w(!1)}),document.addEventListener("keydown",u=>{const f=String(u.key??"").toLowerCase();if((u.ctrlKey||u.metaKey)&&f==="k"){u.preventDefault(),Ze();return}if(f==="escape"){if(b){w(!1);return}m&&document.activeElement!==a&&document.activeElement!==d&&l(!1)}}),document.addEventListener("mousedown",u=>{const f=u.target;f instanceof Node&&(b&&h.contains(f)||n.contains(f)||l(!1))}),r.addEventListener("click",()=>{m||T()}),n.addEventListener("mouseover",u=>{const f=u.target;if(!(f instanceof Element))return;const _=f.closest(".search-result-item");if(!(_ instanceof HTMLElement))return;const S=Number(_.getAttribute("data-search-item-index")??-1);S<0||S===p||(p=S,j(N()))}),n.addEventListener("click",u=>{const f=u.target;if(!(f instanceof Element))return;const _=f.closest(".search-result-item");if(!(_ instanceof HTMLElement))return;const S=Number(_.getAttribute("data-search-item-index")??-1);S<0||de(S)}),window.matchMedia("(max-width: 768px)").matches&&a.setAttribute("tabindex","-1")}const ze="garage_dashboard_app_state_v1";function Ve(){return typeof window<"u"&&typeof window.localStorage<"u"}function K(e){const t=e&&typeof e=="object"?e:{},n=t.pages&&typeof t.pages=="object"?t.pages:{};return{currentPage:String(t.currentPage??"").trim(),pages:n}}function ce(e={currentPage:"",pages:{}}){if(!Ve())return K(e);try{const t=window.localStorage.getItem(ze);if(!t)return K(e);const n=JSON.parse(t);return K(n)}catch{return K(e)}}function We(e){if(!Ve())return;const t=K(e);try{window.localStorage.setItem(ze,JSON.stringify(t))}catch{}}function sn(e,t){const n=String(e??"").trim();if(!n||!t||typeof t!="object")return;const r=ce(),a=r.pages[n]&&typeof r.pages[n]=="object"?r.pages[n]:{};We({...r,pages:{...r.pages,[n]:{...a,...t}}})}function on(e){const t=String(e??"").trim();if(!t)return;const n=ce();We({...n,currentPage:t})}function cn(e,t={}){const n=String(e??"").trim();if(!n)return t;const a=ce().pages[n];return a&&typeof a=="object"?a:t}function ln(e,t){sn(e,t)}const ke="garage-dashboard.prefetched-documents",dn=["/dashboard.html","/calendar.html","/bookings.html","/completed.html","/werkbon.html","/werkbon-detail.html","/add-appointment.html","/emails.html","/analytics.html","/settings.html"];function un(){try{if(window.sessionStorage.getItem(ke)==="true")return;dn.forEach(e=>{if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const t=document.createElement("link");t.rel="prefetch",t.as="document",t.href=e,document.head.append(t)}),window.sessionStorage.setItem(ke,"true")}catch{}}function In({activePage:e,title:t,headerNote:n="",userEmail:r,unreadEmailCount:a=0,onLogout:i,garage:o,isAdmin:c=!1}){un(),on(e);const h=document.createElement("div");h.className="app-shell page-animate";const{header:d,titleRow:k}=ht({title:t,headerNote:n,garage:o,activePage:e}),v=vt(e,{garage:o,isAdmin:c,userEmail:r,unreadEmailCount:a,onLogout:i}),s=document.createElement("div");s.className="app-workspace";const m=document.createElement("main");m.className="content";const b=document.createElement("div");b.className="main-content",b.append(d,s),s.append(k,m),h.append(v,b);const p=document.createElement("div");p.className="sidebar-overlay",h.append(p);const g=()=>{v.classList.add("open"),p.classList.add("open"),document.body.style.overflow="hidden"},A=()=>{v.classList.remove("open"),p.classList.remove("open"),document.body.style.overflow=""},l=d.querySelector(".topbar-hamburger");l==null||l.addEventListener("click",g),p.addEventListener("click",A),an({header:d,garageId:(o==null?void 0:o.id)??""}),v.dataset.collapsed==="true"&&h.classList.add("is-sidebar-collapsed");const w=j=>{Le(v,j)},E=cn(e,{}),N=Number(E.scrollY??0);Number.isFinite(N)&&N>0&&window.requestAnimationFrame(()=>{window.scrollTo({top:N,behavior:"auto"})});const U=()=>{ln(e,{scrollY:Math.max(0,Math.round(window.scrollY||0))})};return window.addEventListener("scroll",U,{passive:!0}),window.addEventListener("beforeunload",U),{shell:h,contentArea:m,setUnreadEmailCount:w}}function pn(e){return{id:e.id,name:e.name??"Garage",domain:e.domain??"",analyticsPropertyId:e.analytics_property_id??null,logoUrl:e.logo_url??"",userId:e.user_id??"",paymentLink:e.payment_link??null,mollieMethod:String(e.mollie_method??"none"),paymentDays:typeof e.payment_days=="number"?e.payment_days:parseInt(String(e.payment_days??"14"),10)||14,garageName:String(e.garage_name||e.name||"Garage")}}function mn(e){var a,i;const t="owner@gmail.com".split(",").map(o=>o.trim().toLowerCase()).filter(Boolean),n=String((e==null?void 0:e.email)??"").toLowerCase();return(((a=e==null?void 0:e.app_metadata)==null?void 0:a.role)??((i=e==null?void 0:e.user_metadata)==null?void 0:i.role)??"")==="admin"||t.includes(n)}async function hn(e){const t=mn(e),n=(await ct({userId:e.id,includeAll:t})).map(pn);return{garages:n,activeGarage:n[0]??null,isAdmin:t}}const le="garage-dashboard.auth-context",fn=5*60*1e3;function gn(){try{const e=window.sessionStorage.getItem(le);if(!e)return null;const t=JSON.parse(e);if(!t||typeof t!="object")return null;const n=Number(t.expiresAt??0);return!Number.isFinite(n)||Date.now()>n?null:t}catch{return null}}function wn(e,t){try{const n={userId:e.id,email:String(e.email??""),isAdmin:t.isAdmin,garages:t.garages??[],activeGarage:t.activeGarage??null,expiresAt:Date.now()+fn};window.sessionStorage.setItem(le,JSON.stringify(n))}catch{}}function bn(){try{window.sessionStorage.removeItem(le)}catch{}}async function xn(){if(!R())return window.location.href=y("index.html"),null;const e=await lt();if(!e)return window.location.href=y("index.html"),null;const t=gn();if(t&&t.userId===e.user.id&&String(e.user.email??"")===t.email)return{user:e.user,garages:Array.isArray(t.garages)?t.garages:[],activeGarage:t.activeGarage??null,isAdmin:!!t.isAdmin,isDemo:!1};const n=await hn(e.user);return wn(e.user,n),{user:e.user,...n,isDemo:!1}}async function Tn(){try{await dt()}finally{bn(),window.location.href=y("index.html")}}function Pn(){const e=document.documentElement;e.style.removeProperty("--brand-primary"),e.style.removeProperty("--brand-secondary"),e.style.removeProperty("--brand-primary-rgb"),e.style.removeProperty("--brand-secondary-rgb")}export{Pn as a,xt as b,In as c,cn as d,xn as e,ln as f,Tt as g,yn as h,Cn as i,Ln as j,En as k,Tn as l,An as m,_n as n,$n as o,kn as p,vn as q,Mn as r,Nn as s,Ht as t};
