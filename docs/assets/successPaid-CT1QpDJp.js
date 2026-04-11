import"./theme-8bHWXU28.js";import{p as y,a as _,i as we,f as ge}from"./paths-D6ujGOT0.js";import{s as ve,i as ye}from"./theme-DMvK0XTA.js";import{g as Ce,a as Se,b as Le,s as $e}from"./emailService-1laQrJMd.js";import{e as Me,l as xe}from"./auth-BjeLGIG2.js";function N(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function _e(t){return t==="bookings"?`
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M7 3v3M17 3v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <rect x="4" y="5.5" width="16" height="14.5" rx="4" stroke="currentColor" stroke-width="1.6"/>
        <path d="M4 10h16" stroke="currentColor" stroke-width="1.6"/>
      </svg>
    `:t==="calendar"?`
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M16 3v3M8 3v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
        <rect x="4" y="5.5" width="16" height="14.5" rx="4" stroke="currentColor" stroke-width="1.7"/>
        <path d="M4 10h16" stroke="currentColor" stroke-width="1.7"/>
      </svg>
    `:t==="addappointment"?`<img class="topbar-page-icon topbar-page-icon-addappointment" src="${_("sidebar-icons/addappointment.png")}" alt="Add Appointment icon">`:t==="emails"?`
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.6"/>
        <path d="M4.5 7.5l7.5 5.5 7.5-5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `:t==="analytics"?`
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M4 18h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        <rect x="5" y="11" width="3.4" height="5.8" rx="1" fill="currentColor"/>
        <rect x="10.3" y="7.8" width="3.4" height="9" rx="1" fill="currentColor"/>
        <rect x="15.6" y="9.6" width="3.4" height="7.2" rx="1" fill="currentColor"/>
      </svg>
    `:t==="completed"?`
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/>
        <path d="M8.5 12.2l2.2 2.2 4.8-4.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `:`
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 12c0-4.3 3.7-8 8-8h8v8c0 4.3-3.7 8-8 8H4z" stroke="currentColor" stroke-width="1.6"/>
      <path d="M8 8h3M8 12h6M8 16h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>
  `}function Ee(t){const e=String((t==null?void 0:t.domain)??"").trim();if(!e)return{href:"https://autoservicehouse.nl",label:"autoservicehouse.nl"};const n=/^https?:\/\//i.test(e)?e:`https://${e}`,s=e.replace(/^https?:\/\//i,"");return{href:n,label:s}}function Ae(t){const n={dashboard:"dashboard",calendar:"calender",analytics:"analytics",bookings:"appointment",addappointment:"addappointment",emails:"email",completed:"succes",werkbon:"werkbon"}[t];return n?_(`sidebar-icons/${n}.png`):null}function Ne({title:t,headerNote:e="",garage:n,activePage:s="dashboard"}){var u;const a=document.createElement("div");a.className="topbar-stack";const l=Ee(n),d=N(t);N(e);const m=N(l.label);N(l.href);const g=N(String(((u=n==null?void 0:n.name)==null?void 0:u[0])??"G").toUpperCase()),i=n!=null&&n.logoUrl?`<img class="brand-logo" src="${N(n.logoUrl)}" alt="" />`:`<span class="brand-mark">${g}</span>`,S=N((n==null?void 0:n.name)??""),L=Ae(s),r=L?`<img class="topbar-page-icon topbar-page-icon-${N(s)}" src="${L}" alt="${d} icon" />`:`<span class="topbar-page-icon topbar-page-icon-${N(s)}">${_e(s)}</span>`;a.innerHTML=`
    <header class="topbar">
      <button class="topbar-hamburger" type="button" aria-label="Open navigation menu">
        ${i}
        <span class="topbar-hamburger-label">${S}</span>
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

            <a href="https://autoservicehoute.nl">https://${m}</a>
          </div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.39917 2C4.96653 2.00438 3.69265 2.06411 2.87855 2.87835C2 3.75704 2 5.17128 2 7.99972C2 10.8282 2 12.2425 2.87855 13.1211C3.7571 13.9999 5.17111 13.9999 7.99917 13.9999C10.8271 13.9999 12.2412 13.9999 13.1197 13.1211C13.9338 12.3069 13.9935 11.0328 13.9979 8.59979" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.7039 2.33132L7.36572 8.7063M13.7039 2.33132C13.3746 2.00158 11.1561 2.03231 10.6871 2.03898M13.7039 2.33132C14.0333 2.66106 14.0025 4.88239 13.9959 5.352" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>

        <a class="topbar-add-link ${s==="add-appointment"?"is-current":""}" href="${y("add-appointment.html")}">
          <img class="navbar-icon-add-appointment" src="${_("sidebar-icons/addappointment.png")}" alt="Email icon">
          <span>Add Appointment</span>
        </a>
      </div>
    </header>

    <div class="topbar-title-row">
      <div class="topbar-title-wrap">
        ${r}
        <h1 class="topbar-title">${d}</h1>
      </div>
    </div>
  `;const h=a.querySelector(".topbar"),w=a.querySelector(".topbar-title-row");return{header:h,titleRow:w}}const Te=[{key:"dashboard",href:y("dashboard.html"),label:"Dashboard",icon:"dashboard"},{key:"calendar",href:y("calendar.html"),label:"Calendar",icon:"calendar"},{key:"completed",href:y("completed.html"),label:"Completed",icon:"completed"},{key:"werkbon",href:y("werkbon.html"),label:"Werkbon",icon:"werkbon"},{key:"emails",href:y("emails.html"),label:"E-mails",icon:"emails",showUnreadBadge:!0},{key:"analytics",href:y("analytics.html"),label:"Analytics",icon:"analytics"}],X={dashboard:_("sidebar-icons/dashboard.png"),appointments:_("sidebar-icons/appointment.png"),calendar:_("sidebar-icons/calender.png"),completed:_("sidebar-icons/succes.png"),werkbon:_("sidebar-icons/werkbon.png"),emails:_("sidebar-icons/email.png"),analytics:_("sidebar-icons/analytics.png"),default:_("sidebar-icons/default.png")},ee="garage-dashboard.sidebar-collapsed";function Ie(t){return`<img class="sidebar-link-icon-image" src="${X[t]??X.default}" alt="" width="32" height="33" aria-hidden="true" />`}function He(t){return t?((String(t).split("@")[0]??"A")[0]??"A").toUpperCase():"A"}function Be(t,e){if(e)return e;const n=String(t??"").trim().split("@")[0];return n?n.split(/[._-]+/g).filter(Boolean).map(s=>s[0].toUpperCase()+s.slice(1)).slice(0,2).join(" "):"Garage User"}function je(t){var e;return t!=null&&t.logoUrl?`<img class="brand-logo" src="${t.logoUrl}" alt="${t.name} logo" />`:`<span class="brand-mark">${String(((e=t==null?void 0:t.name)==null?void 0:e[0])??"A").toUpperCase()}</span>`}function ce(t,e){const n=Number(e),s=Number.isFinite(n)?Math.max(0,Math.floor(n)):0;t.querySelectorAll("[data-email-unread-count]").forEach(l=>{l.textContent=s>99?"99+":String(s),l.hidden=s===0})}function Ue(t,{garage:e,isAdmin:n=!1,userEmail:s="",onLogout:a,unreadEmailCount:l=0}={}){const d=document.createElement("aside");d.className="sidebar";const m=window.localStorage.getItem(ee)==="true";m&&(d.classList.add("is-collapsed"),d.dataset.collapsed="true");const g=Te.map(c=>{const f=c.key===t?"is-active":"";return`
      <a class="sidebar-link sidebar-link-${c.key} ${f}" href="${c.href}">
        <span class="sidebar-link-icon">${Ie(c.icon)}</span>
        <span class="sidebar-link-label">${c.label}</span>
        ${c.showUnreadBadge?'<span class="sidebar-link-count" data-email-unread-count hidden>0</span>':""}
      </a>
    `}).join(""),i=Be(s,n?"Admin":""),S=n?"Owner":(e==null?void 0:e.name)??"Garage Staff",L=ve()==="dark",r=m?"Expand sidebar":"Collapse sidebar";d.innerHTML=`
    <div class="sidebar-main">
      <div class="sidebar-brand-row">
        <a href="${y("dashboard.html")}" class="brand">
          ${je(e)}
          <span class="brand-text-wrap">
            <span class="brand-text">${e==null?void 0:e.name}</span>
          </span>
        </a>
        <button class="sidebar-collapse-toggle" type="button" aria-label="${r}" title="${r}">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M20.25 7c0-.69-.56-1.25-1.25-1.25H9.75v12.5H19c.69 0 1.25-.56 1.25-1.25zM3.75 17c0 .69.56 1.25 1.25 1.25h3.25V5.75H5c-.69 0-1.25.56-1.25 1.25zm18 0A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17V7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7z"></path>
          </svg>
        </button>
      </div>

      <p class="sidebar-section-label">Navigate</p>

      <nav class="sidebar-nav">
        ${g}
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
          <input class="theme-switch-input" type="checkbox" data-theme-toggle role="switch" ${L?"checked":""} />
          <span class="theme-switch-track" aria-hidden="true"></span>
        </span>
      </label>

      <div class="sidebar-user-card">
        <span class="sidebar-avatar">${He(s)}</span>
        <span class="sidebar-user-meta">
          <strong>${i}</strong>
          <small>${s||S}</small>
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
  `;const h=d.querySelector("[data-theme-toggle]");h instanceof HTMLInputElement&&h.addEventListener("change",()=>{ye(h.checked?"dark":"light")});const w=d.querySelector(".sidebar-logout"),u=d.querySelector(".sidebar-footer-action"),b=d.querySelector(".sidebar-collapse-toggle"),A=c=>{d.classList.toggle("is-collapsed",c),d.dataset.collapsed=c?"true":"false",b==null||b.setAttribute("aria-label",c?"Expand sidebar":"Collapse sidebar"),b==null||b.setAttribute("title",c?"Expand sidebar":"Collapse sidebar"),window.localStorage.setItem(ee,c?"true":"false");const f=d.closest(".app-shell");f==null||f.classList.toggle("is-sidebar-collapsed",c)};return b==null||b.addEventListener("click",()=>{A(!d.classList.contains("is-collapsed"))}),u==null||u.addEventListener("click",()=>{window.location.href=y("settings.html")}),typeof a=="function"?w==null||w.addEventListener("click",a):w==null||w.remove(),ce(d,l),d}const te=2,Re=300,Pe=3e4,De=6e4,F=80,ie="garage-dashboard.recent-searches",le=5,U=new Map,R=new Map;function v(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ze(t){return String(t).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function x(t,e){const n=v(t??""),s=String(e??"").trim().slice(0,F);if(!s)return n;const a=new RegExp(`(${ze(s)})`,"ig");return n.replace(a,"<mark>$1</mark>")}function j(t){const e=String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"");return e?e.replace(/(.{2})(?=.)/g,"$1-"):""}function P(t){const e=new Date(t);return Number.isNaN(e.getTime())?"-":e.toLocaleDateString("nl-NL",{day:"2-digit",month:"short",year:"numeric"})}function ne(t){const e=Number(t??0);return Number.isFinite(e)?new Intl.NumberFormat("nl-NL",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2}).format(e):"EUR 0,00"}function K(t){const e=String(t??"").trim().toLowerCase();return["done","completed","complete","closed"].includes(e)?"completed":["confirmed","confirm"].includes(e)?"confirmed":e||"new"}function Oe(t){const e=K(t);return e==="completed"?"Voltooid":e==="confirmed"?"Bevestigd":e==="new"?"Nieuw":e}function re(t){const e=String(t??"").replace(/[^a-z0-9]/gi,"");return e.length>=4&&/[a-z]/i.test(e)&&/\d/.test(e)}function se(t){return/\d/.test(String(t??""))}function E(t){return{calendar:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 2.75V5M14 2.75V5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="3" y="4.5" width="14" height="12.5" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M3 8.5H17" stroke="currentColor" stroke-width="1.6"/></svg>',fileText:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6.5 2.5H11.5L15.5 6.5V15.5C15.5 16.33 14.83 17 14 17H6C5.17 17 4.5 16.33 4.5 15.5V4C4.5 3.17 5.17 2.5 6 2.5H6.5Z" stroke="currentColor" stroke-width="1.6"/><path d="M11.5 2.5V6.5H15.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 10H13M7 13H11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',check:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M6.8 10.2L8.9 12.3L13.3 7.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',user:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="6.5" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M4 16.2C4.8 13.9 6.8 12.8 10 12.8C13.2 12.8 15.2 13.9 16 16.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',mail:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="3" y="4.5" width="14" height="11" rx="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M4.5 6L10 10L15.5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',car:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 11.5L5.5 7.5C5.8 6.8 6.4 6.4 7.2 6.4H12.8C13.6 6.4 14.2 6.8 14.5 7.5L16 11.5" stroke="currentColor" stroke-width="1.6"/><rect x="3.2" y="10" width="13.6" height="5.5" rx="1.8" stroke="currentColor" stroke-width="1.6"/><circle cx="6.5" cy="14" r="1.1" fill="currentColor"/><circle cx="13.5" cy="14" r="1.1" fill="currentColor"/></svg>',receipt:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 2.8H14V16.8L12 15.5L10 16.8L8 15.5L6 16.8V2.8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 6.8H12M8 9.8H12M8 12.8H11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',plus:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.5V13.5M6.5 10H13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',settings:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 6.9A3.1 3.1 0 1 1 10 13.1A3.1 3.1 0 0 1 10 6.9Z" stroke="currentColor" stroke-width="1.6"/><path d="M16.1 10.9L15 11.4C14.9 11.8 14.7 12.2 14.5 12.5L14.9 13.7L13.7 14.9L12.5 14.5C12.2 14.7 11.8 14.9 11.4 15L10.9 16.1H9.1L8.6 15C8.2 14.9 7.8 14.7 7.5 14.5L6.3 14.9L5.1 13.7L5.5 12.5C5.3 12.2 5.1 11.8 5 11.4L3.9 10.9V9.1L5 8.6C5.1 8.2 5.3 7.8 5.5 7.5L5.1 6.3L6.3 5.1L7.5 5.5C7.8 5.3 8.2 5.1 8.6 5L9.1 3.9H10.9L11.4 5C11.8 5.1 12.2 5.3 12.5 5.5L13.7 5.1L14.9 6.3L14.5 7.5C14.7 7.8 14.9 8.2 15 8.6L16.1 9.1V10.9Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',clock:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.6"/><path d="M10 6.4V10L12.5 11.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',searchX:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.8" stroke="currentColor" stroke-width="1.6"/><path d="M12.7 12.7L17 17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M6.8 6.8L10.2 10.2M10.2 6.8L6.8 10.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',arrowLeft:'<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M11.8 4.8L6.6 10L11.8 15.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'}[t]??""}function G(){try{const t=JSON.parse(window.localStorage.getItem(ie)||"[]");return Array.isArray(t)?t.map(e=>String(e??"").trim()).filter(Boolean).slice(0,le):[]}catch{return[]}}function V(t){try{window.localStorage.setItem(ie,JSON.stringify(t.slice(0,le)))}catch{}}function qe(t){const e=String(t??"").trim();if(!e)return;const n=G().filter(s=>s.toLowerCase()!==e.toLowerCase());n.unshift(e),V(n)}function D(t){const e=K(t);return e==="completed"?'<span class="global-search-badge global-search-badge-success">Voltooid</span>':e==="confirmed"?'<span class="global-search-badge global-search-badge-info">Bevestigd</span>':e==="new"?'<span class="global-search-badge global-search-badge-muted">Nieuw</span>':`<span class="global-search-badge global-search-badge-muted">${v(Oe(e))}</span>`}function Ve(){return/Mac|iPhone|iPad|iPod/i.test(window.navigator.platform)?"⌘K":"Ctrl+K"}function de(t,e){var a;const n=String(t??""),s=new RegExp(`\\b${e}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((a=n.match(s))==null?void 0:a[1])??"").trim()}function z(t){return String(t??"").toLowerCase().replace(/[^a-z0-9]/g,"")}function Fe(t){return String(t??"").trim().slice(0,F)}function Ke(t){return de(t==null?void 0:t.message,"name")||"Onbekende klant"}function Ge(t){return de(t==null?void 0:t.message,"email")}function Ye(t,e,n,s){const a=t.filter(r=>K(r==null?void 0:r.status)!=="completed"&&(r==null?void 0:r.inAppointments)!==!1).map(r=>({id:r.id,customer_name:Ke(r),customer_email:Ge(r),customer_phone:String(r.phone??""),license_plate:String(r.licensePlate??""),car_brand:String(r.service??"Service"),status:r.status,appointment_date:r.appointmentAt||r.createdAt,services:r.service})),l=e.map(r=>({id:r.id,customer_name:r.customerName||"Onbekende klant",license_plate:r.licensePlate,car_brand:r.service||"Service",appointment_date:r.appointmentAt||r.completedAt||r.createdAt,status:"completed"})),d=[...a,...l],m=new Map;a.forEach(r=>{const h=`${r.customer_name}|${r.customer_email}|${r.license_plate}`.toLowerCase();m.has(h)||m.set(h,{customer_name:r.customer_name,customer_email:r.customer_email,customer_phone:r.customer_phone,license_plate:r.license_plate,car_brand:r.car_brand})});const g=new Map;n.forEach(r=>{let h={};try{h=JSON.parse(String(r.completion_notes??"{}"))}catch{h={}}g.set(String(r.id??""),h)});const i=e.map(r=>{var u;const h=g.get(String(r.completedAppointmentId??""))??{},w=Number(((u=h==null?void 0:h.totals)==null?void 0:u.total)??0);return{id:r.completedAppointmentId,customer_name:r.customerName||String(h.customer_name??"Onbekende klant"),license_plate:r.licensePlate,car_brand:String(h.car_model??r.service??"Service"),total:w,status:String(h.status??"draft"),factuurnummer:String(h.invoice_number??"").trim(),created_at:r.createdAt}}),S=i.filter(r=>r.factuurnummer),L=s.map(r=>({id:r.id,from_name:r.senderName,from_email:r.senderEmail,subject:r.subject,created_at:r.receivedAt,read:r.read}));return{appointmentsSource:a,completedSource:l,plateSource:d,customerSource:Array.from(m.values()),werkbonSource:i,invoiceSource:S,emailsSource:L}}function Ze(t){const e=(i,S)=>i.map(L=>({...L,_searchToken:z(S.map(r=>String(L[r]??"")).join(" "))})),n=e(t.appointmentsSource,["customer_name","customer_email","customer_phone","license_plate","car_brand"]),s=e(t.completedSource,["customer_name","license_plate","car_brand"]),a=e(t.customerSource,["customer_name","customer_email","customer_phone","license_plate","car_brand"]),l=e(t.werkbonSource,["customer_name","license_plate","car_brand","factuurnummer"]),d=e(t.emailsSource,["from_name","from_email","subject"]),m=[...n,...s].map(i=>({...i,_plateToken:z(i.license_plate)})),g=t.invoiceSource.map(i=>({...i,_invoiceToken:z(i.factuurnummer)}));return{appointments:n,completed:s,customers:a,werkbonnen:l,emails:d,plates:m,invoices:g}}function H(t,e,n,s){const a=[];for(const l of t)if(s(l,e)&&(a.push(l),a.length>=n))break;return a}async function Qe(t){const e=String(t??"").trim(),n=Date.now(),s=R.get(e);if(s!=null&&s.data&&n-s.timestamp<De)return s.data;if(s!=null&&s.inFlight)return s.inFlight;const a=Promise.all([Ce({garageIds:[e]}),Se({garageIds:[e]}),ge({garageIds:[e]})]).then(([l,d,m])=>{const g=Le(l),i=Ye(l,d,m,g);return{indexed:Ze(i)}});R.set(e,{timestamp:n,data:(s==null?void 0:s.data)??null,inFlight:a});try{const l=await a;return R.set(e,{timestamp:Date.now(),data:l,inFlight:null}),l}catch(l){if(s!=null&&s.data)return s.data;throw R.delete(e),l}}function ae(t){const e=String(t??"").trim().toLowerCase(),n=[{key:"new-appointment",icon:"plus",title:"Nieuwe afspraak toevoegen",match:["nieuwe afspraak","afspraak"],navigate:()=>{window.location.href=y("add-appointment.html")}},{key:"new-werkbon",icon:"fileText",title:"Nieuwe werkbon maken",match:["werkbon","factuur"],navigate:()=>{window.location.href=y("werkbon.html?action=create")}},{key:"calendar",icon:"calendar",title:"Kalender bekijken",match:["kalender","agenda"],navigate:()=>{window.location.href=y("calendar.html")}},{key:"settings",icon:"settings",title:"Instellingen openen",match:["instellingen","settings"],navigate:()=>{window.location.href=y("settings.html")}}];return e?n.filter(s=>s.match.some(a=>e.includes(a))):[]}async function We(t,e){const n=Fe(t),s=`${e}:${n.toLowerCase()}`;if(U.has(s))return U.get(s);if(!we())return{appointments:[],werkbonnen:[],completed:[],customers:[],emails:[],plates:[],invoices:[],includePlateSection:re(n),includeInvoiceSection:se(n),quickActions:ae(n)};const a=re(n),l=se(n),d=z(n),{indexed:m}=await Qe(e),g=[],i=async(c,f)=>{try{const $=await f();return g.push({label:c,count:Array.isArray($)?$.length:0,ok:!0}),Array.isArray($)?$:[]}catch($){return g.push({label:c,count:0,ok:!1,error:$ instanceof Error?$.message:String($??"Unknown error")}),[]}},[S,L,r,h,w,u,b]=await Promise.all([i("appointments",()=>Promise.resolve(H(m.appointments,d,4,(c,f)=>c._searchToken.includes(f)))),i("werkbonnen",()=>Promise.resolve(H(m.werkbonnen,d,4,(c,f)=>c._searchToken.includes(f)))),i("completed",()=>Promise.resolve(H(m.completed,d,3,(c,f)=>c._searchToken.includes(f)))),i("customers",()=>Promise.resolve(H(m.customers,d,3,(c,f)=>c._searchToken.includes(f)))),i("emails",()=>Promise.resolve(H(m.emails,d,3,(c,f)=>c._searchToken.includes(f)))),a?i("plates",()=>Promise.resolve(H(m.plates,d,4,(c,f)=>c._plateToken.includes(f)))):Promise.resolve([]),l?i("invoices",()=>Promise.resolve(H(m.invoices,d,3,(c,f)=>c._invoiceToken.includes(f)))):Promise.resolve([])]),A={appointments:S,werkbonnen:L,completed:r,customers:h,emails:w,plates:u,invoices:b,includePlateSection:a,includeInvoiceSection:l,quickActions:ae(n)};return U.set(s,A),window.setTimeout(()=>{U.delete(s)},Pe),A}function Je(t,e,n){const s=`data-search-item-index="${n}"`;return t.type==="appointment"?`
      <button class="search-result-item" type="button" ${s}>
        <span class="search-result-icon search-result-icon-appointments">${E("calendar")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${x(t.customerName,e)}</span>
          <span class="search-result-secondary">${v(t.carBrand||"-")} <span class="plate-chip plate-chip-small">${v(j(t.plate)||"UNKNOWN")}</span></span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${v(t.date)}</span>
          ${D(t.status)}
        </span>
      </button>
    `:t.type==="werkbon"?`
      <button class="search-result-item" type="button" ${s}>
        <span class="search-result-icon search-result-icon-werkbonnen">${E("fileText")}</span>
        <span class="search-result-main">
          <span class="search-result-primary"><small class="search-result-muted">${x(t.factuur,e)}</small> ${x(t.customerName,e)}</span>
          <span class="search-result-secondary"><span class="plate-chip plate-chip-small">${v(j(t.plate)||"UNKNOWN")}</span> ${v(t.carBrand||"-")}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${v(t.total)}</span>
          ${D(t.status)}
        </span>
      </button>
    `:t.type==="completed"?`
      <button class="search-result-item" type="button" ${s}>
        <span class="search-result-icon search-result-icon-completed">${E("check")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${x(t.customerName,e)}</span>
          <span class="search-result-secondary">${v(t.carBrand||"-")} <span class="plate-chip plate-chip-small">${v(j(t.plate)||"UNKNOWN")}</span></span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${v(t.date)}</span>
          <span class="global-search-badge global-search-badge-success">Voltooid</span>
        </span>
      </button>
    `:t.type==="customer"?`
      <button class="search-result-item" type="button" ${s}>
        <span class="search-result-icon search-result-icon-customers">${E("user")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${x(t.customerName,e)}</span>
          <span class="search-result-secondary">${x(t.email,e)}</span>
        </span>
        <span class="search-result-side">
          <span class="plate-chip plate-chip-small">${v(j(t.plate)||"UNKNOWN")}</span>
          <span class="search-result-muted">${v(t.carBrand||"-")}</span>
        </span>
      </button>
    `:t.type==="email"?`
      <button class="search-result-item" type="button" ${s}>
        <span class="search-result-icon search-result-icon-emails">${E("mail")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${t.unread?'<span class="search-unread-dot"></span>':""}${x(t.sender,e)}</span>
          <span class="search-result-secondary">${x(t.subject,e)}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${v(t.date)}</span>
          ${t.unread?'<span class="global-search-badge global-search-badge-info">Ongelezen</span>':""}
        </span>
      </button>
    `:t.type==="plate"?`
      <button class="search-result-item" type="button" ${s}>
        <span class="search-result-icon search-result-icon-plates">${E("car")}</span>
        <span class="search-result-main">
          <span class="search-result-primary"><span class="plate-chip">${x(j(t.plate),e)}</span></span>
          <span class="search-result-secondary">${v(t.carBrand||"-")} - ${v(t.customerName||"-")}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${v(t.date)}</span>
          ${D(t.status)}
        </span>
      </button>
    `:t.type==="invoice"?`
      <button class="search-result-item" type="button" ${s}>
        <span class="search-result-icon search-result-icon-invoices">${E("receipt")}</span>
        <span class="search-result-main">
          <span class="search-result-primary">${x(t.factuur,e)}</span>
          <span class="search-result-secondary">${x(t.customerName,e)}</span>
        </span>
        <span class="search-result-side">
          <span class="search-result-right">${v(t.total)}</span>
          ${D(t.status)}
        </span>
      </button>
    `:`
    <button class="search-result-item" type="button" ${s}>
      <span class="search-result-icon search-result-icon-actions">${E(t.icon)}</span>
      <span class="search-result-main">
        <span class="search-result-primary">${x(t.title,e)}</span>
      </span>
    </button>
  `}function Xe(t,e,n,s){if(!e.length)return"";const a=e.map((l,d)=>Je(l,n,s+d)).join("");return`
    <section class="search-section" data-search-section>
      <header class="search-section-header">
        <span>${v(t)}</span>
        <span>${e.length}</span>
      </header>
      <div class="search-section-items">
        ${a}
      </div>
    </section>
  `}function et(t){return`
    <div class="search-empty-state">
      <span class="search-empty-icon">${E("searchX")}</span>
      <strong>Geen resultaten voor '${v(t)}'</strong>
      <p>Probeer een andere zoekterm</p>
    </div>
  `}function tt(){return`
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
  `}function nt(){const t=G();return t.length?`
    <section class="search-section">
      <header class="search-section-header"><span>Recente zoekopdrachten</span><span>${t.length}</span></header>
      <div class="search-recents">
        ${t.map((e,n)=>`
          <button class="search-recent-item" type="button" data-recent-index="${n}" data-recent-term="${v(e)}">
            <span class="search-recent-left">${E("clock")} ${v(e)}</span>
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
    `}function rt(t){return{plates:t.plates.map(e=>({type:"plate",plate:e.license_plate,carBrand:e.car_brand,customerName:e.customer_name,date:P(e.appointment_date),status:e.status,open:()=>{const n=new URL(y("bookings.html"),window.location.origin);n.searchParams.set("plate",String(e.license_plate??"")),window.location.href=`${n.pathname}${n.search}`}})),appointments:t.appointments.map(e=>({type:"appointment",customerName:e.customer_name,carBrand:e.car_brand,plate:e.license_plate,date:P(e.appointment_date),status:e.status,open:()=>{const n=new URL(y("bookings.html"),window.location.origin);n.searchParams.set("bookingId",String(e.id)),window.location.href=`${n.pathname}${n.search}`}})),werkbonnen:t.werkbonnen.map(e=>({type:"werkbon",factuur:e.factuurnummer||"Factuur",customerName:e.customer_name,plate:e.license_plate,carBrand:e.car_brand,total:ne(e.total),status:e.status,open:()=>{window.location.href=y(`werkbon-detail.html?id=${encodeURIComponent(String(e.id))}`)}})),completed:t.completed.map(e=>({type:"completed",customerName:e.customer_name,plate:e.license_plate,carBrand:e.car_brand,date:P(e.appointment_date),open:()=>{const n=new URL(y("completed.html"),window.location.origin);n.searchParams.set("customer",String(e.customer_name??"")),window.location.href=`${n.pathname}${n.search}`}})),customers:t.customers.map(e=>({type:"customer",customerName:e.customer_name,email:e.customer_email||e.customer_phone||"-",plate:e.license_plate,carBrand:e.car_brand,open:()=>{const n=new URL(y("bookings.html"),window.location.origin);n.searchParams.set("customer",String(e.customer_name??"")),window.location.href=`${n.pathname}${n.search}`}})),emails:t.emails.map(e=>({type:"email",sender:e.from_name||e.from_email||"Onbekend",subject:e.subject||"(geen onderwerp)",unread:e.read===!1,date:P(e.created_at),open:()=>{const n=new URL(y("emails.html"),window.location.origin);n.searchParams.set("emailId",String(e.id)),window.location.href=`${n.pathname}${n.search}`}})),invoices:t.invoices.map(e=>({type:"invoice",factuur:e.factuurnummer||"Factuur",customerName:e.customer_name,total:ne(e.total),status:e.status,open:()=>{window.location.href=y(`werkbon-detail.html?id=${encodeURIComponent(String(e.id))}`)}})),quickActions:t.quickActions.map(e=>({type:"action",icon:e.icon,title:e.title,open:e.navigate}))}}function st({header:t,garageId:e}){if(!(t instanceof HTMLElement)||!e)return;const n=t.querySelector("[data-global-search-root]");if(!(n instanceof HTMLElement)||n.dataset.searchInitialized==="true")return;n.dataset.searchInitialized="true";const s=n.querySelector(".topbar-search-shell"),a=n.querySelector(".topbar-search-input"),l=n.querySelector("[data-global-search-dropdown]"),d=n.querySelector(".topbar-mobile-search-trigger"),m=n.querySelector("[data-search-shortcut-hint]");if(!(s instanceof HTMLElement)||!(a instanceof HTMLInputElement)||!(l instanceof HTMLElement)||!(d instanceof HTMLButtonElement))return;m instanceof HTMLElement&&(m.textContent=Ve());const g=document.createElement("div");g.className="mobile-search-overlay",g.innerHTML=`
    <div class="mobile-search-header">
      <button class="mobile-search-back" type="button" aria-label="Back">${E("arrowLeft")}</button>
      <label class="mobile-search-input-wrap" aria-label="Global search">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
          <path d="M11.3333 11.332L13.9999 13.9987" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input class="mobile-search-input" type="search" placeholder="Zoek afspraken, werkbonnen, klanten..." autocomplete="off" />
      </label>
    </div>
    <div class="mobile-search-results"></div>
  `,document.body.append(g);const i=g.querySelector(".mobile-search-input"),S=g.querySelector(".mobile-search-results"),L=g.querySelector(".mobile-search-back");if(!(i instanceof HTMLInputElement)||!(S instanceof HTMLElement)||!(L instanceof HTMLButtonElement))return;let r="",h=!1,w=!1,u=-1,b=[],A=0;const c=o=>{if(h=o,!h){l.hidden=!0,l.innerHTML="",u=-1,b=[];return}w||(l.hidden=!1)},f=o=>{if(w=o,g.classList.toggle("open",w),!w){document.body.style.overflow="",c(!1);return}document.body.style.overflow="hidden",i.value=a.value,r=i.value.trim(),c(!0),i.focus(),i.select(),T()},$=()=>w?i:a,M=()=>w?S:l,Y=o=>{const p=String(o??"").slice(0,F);a.value=p,i.value=p,r=p.trim()},O=o=>{o.querySelectorAll(".search-result-item").forEach(p=>{const C=Number(p.getAttribute("data-search-item-index")??-1);p.classList.toggle("is-selected",C===u)})},Z=o=>{const p=b[o];p&&(r.length>=te&&qe(r),c(!1),f(!1),p.open())},ue=()=>{const o=M();o.innerHTML='<div class="search-empty-small">Zoeken tijdelijk niet beschikbaar</div>',c(!0)},T=async()=>{const o=r,p=M();if(!o){p.innerHTML=nt(),c(!0),u=-1,b=[],pe();return}if(o.length<te){p.innerHTML='<div class="search-empty-small">Typ minimaal 2 tekens om te zoeken</div>',c(!0),u=-1,b=[];return}p.innerHTML=tt(),c(!0);try{const C=await We(o,e);if(o!==r)return;const k=rt(C);b=[...k.plates,...k.appointments,...k.werkbonnen,...k.completed,...k.customers,...k.emails,...k.invoices,...k.quickActions];let I=0;const fe=[["Kentekens",k.plates],["Afspraken",k.appointments],["Werkbonnen",k.werkbonnen],["Voltooide afspraken",k.completed],["Klanten",k.customers],["E-mails",k.emails],["Factuurnummers",k.invoices],["Snelle acties",k.quickActions]].map(([be,J])=>{const ke=Xe(be,J,o,I);return I+=J.length,ke}).join("");p.innerHTML=fe||et(o),b.length?(u<0||u>=b.length)&&(u=0):u=-1,O(p)}catch{ue()}finally{}},pe=()=>{var p;const o=M();o.querySelectorAll("[data-recent-term]").forEach(C=>{C.addEventListener("click",k=>{if(k.target instanceof Element?k.target.closest("[data-recent-remove]"):null)return;const B=String(C.getAttribute("data-recent-term")??"");Y(B),T()})}),o.querySelectorAll("[data-recent-remove]").forEach(C=>{C.addEventListener("click",k=>{k.stopPropagation();const I=Number(C.getAttribute("data-recent-remove")??-1),B=G();I<0||I>=B.length||(B.splice(I,1),V(B),T())})}),(p=o.querySelector("[data-recent-clear]"))==null||p.addEventListener("click",()=>{V([]),T()})},q=o=>{Y(o),window.clearTimeout(A),A=window.setTimeout(()=>{T()},Re)},Q=o=>{if(!h||!b.length)return;const p=b.length-1;u<0?u=o>0?0:p:(u+=o,u>p&&(u=0),u<0&&(u=p)),O(M());const C=M().querySelector(`[data-search-item-index="${u}"]`);C instanceof HTMLElement&&C.scrollIntoView({block:"nearest"})},he=()=>{u<0||u>=b.length||Z(u)},W=o=>{if(o.key==="ArrowDown"){o.preventDefault(),Q(1);return}if(o.key==="ArrowUp"){o.preventDefault(),Q(-1);return}if(o.key==="Enter"){h&&u>=0&&(o.preventDefault(),he());return}if(o.key==="Escape"){if(o.preventDefault(),h){c(!1);return}$().value?q(""):w&&f(!1);return}o.key==="Tab"&&c(!1)},me=()=>{if(window.matchMedia("(max-width: 768px)").matches){f(!0);return}c(!0),a.focus(),a.select(),T()};a.addEventListener("focus",()=>{T()}),a.addEventListener("input",()=>q(a.value)),a.addEventListener("keydown",W),i.addEventListener("input",()=>q(i.value)),i.addEventListener("keydown",W),d.addEventListener("click",()=>{f(!0)}),L.addEventListener("click",()=>{f(!1)}),document.addEventListener("keydown",o=>{const p=String(o.key??"").toLowerCase();if((o.ctrlKey||o.metaKey)&&p==="k"){o.preventDefault(),me();return}if(p==="escape"){if(w){f(!1);return}h&&document.activeElement!==a&&document.activeElement!==i&&c(!1)}}),document.addEventListener("mousedown",o=>{const p=o.target;p instanceof Node&&(w&&g.contains(p)||n.contains(p)||c(!1))}),s.addEventListener("click",()=>{h||T()}),n.addEventListener("mouseover",o=>{const p=o.target;if(!(p instanceof Element))return;const C=p.closest(".search-result-item");if(!(C instanceof HTMLElement))return;const k=Number(C.getAttribute("data-search-item-index")??-1);k<0||k===u||(u=k,O(M()))}),n.addEventListener("click",o=>{const p=o.target;if(!(p instanceof Element))return;const C=p.closest(".search-result-item");if(!(C instanceof HTMLElement))return;const k=Number(C.getAttribute("data-search-item-index")??-1);k<0||Z(k)}),window.matchMedia("(max-width: 768px)").matches&&a.setAttribute("tabindex","-1")}const oe="garage-dashboard.prefetched-documents",at=["/dashboard.html","/calendar.html","/bookings.html","/completed.html","/werkbon.html","/werkbon-artikelen.html","/werkbon-artikelen-menu.html","/werkbon-artikelen-nieuw.html","/werkbon-artikelen-zoek.html","/werkbon-artikelen-vind.html","/werkbon-artikelen-vind-alles.html","/werkbon-artikelen-lijst.html","/werkbon-artikelen-print.html","/werkbon-artikelen-import.html","/werkbon-artikelen-inboeken.html","/werkbon-artikelen-waarde.html","/werkbon-artikelen-verwijder.html","/werkbon-artikelen-eerste.html","/werkbon-artikelen-vorige.html","/werkbon-artikelen-volgende.html","/werkbon-artikelen-laatste.html","/werkbon-facturen.html","/werkbon-omzet-btw.html","/werkbon-instellingen.html","/werkbon-detail.html","/add-appointment.html","/emails.html","/analytics.html","/settings.html","/success-paid.html"];function ot(){try{if(window.sessionStorage.getItem(oe)==="true")return;at.forEach(t=>{if(document.head.querySelector(`link[rel="prefetch"][href="${t}"]`))return;const e=document.createElement("link");e.rel="prefetch",e.as="document",e.href=t,document.head.append(e)}),window.sessionStorage.setItem(oe,"true")}catch{}}function ct({activePage:t,title:e,headerNote:n="",showTitleRow:s=!0,userEmail:a,unreadEmailCount:l=0,onLogout:d,garage:m,isAdmin:g=!1}){ot();const i=document.createElement("div");i.className="app-shell page-animate";const{header:S,titleRow:L}=Ne({title:e,headerNote:n,garage:m,activePage:t}),r=Ue(t,{garage:m,isAdmin:g,userEmail:a,unreadEmailCount:l,onLogout:d}),h=document.createElement("div");h.className="app-workspace";const w=document.createElement("main");w.className="content";const u=document.createElement("div");u.className="main-content",u.append(S,h),s?h.append(L,w):h.append(w),i.append(r,u);const b=document.createElement("div");b.className="sidebar-overlay",i.append(b);const A=()=>{r.classList.add("open"),b.classList.add("open"),document.body.style.overflow="hidden"},c=()=>{r.classList.remove("open"),b.classList.remove("open"),document.body.style.overflow=""},f=S.querySelector(".topbar-hamburger");f==null||f.addEventListener("click",A),b.addEventListener("click",c),st({header:S,garageId:(m==null?void 0:m.id)??""}),r.dataset.collapsed==="true"&&i.classList.add("is-sidebar-collapsed");const $=M=>{ce(r,M)};return l===0&&(m!=null&&m.id)?(async()=>{try{const M=await $e({garageIds:g?null:[m.id]});M&&typeof M.unread=="number"&&$(M.unread)}catch(M){console.debug("Failed to update email badge:",M)}})():l>0&&$(l),{shell:i,contentArea:w,setUnreadEmailCount:$}}async function it(t){if(t)try{const e=await Me();if(!e)return;const{shell:n,contentArea:s}=ct({activePage:"success-paid",title:"Payment Successful",headerNote:"Your payment has been processed",userEmail:e.user.email,onLogout:xe,garage:e.activeGarage,isAdmin:e.isAdmin});t.replaceChildren(n),s.innerHTML=`
      <section class="success-paid-container">
        <div class="success-paid-card">
          <div class="success-icon">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="48" cy="48" r="45" fill="#d4edda" stroke="#28a745" stroke-width="3"/>
              <path d="M35 48L45 58L62 38" stroke="#28a745" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </div>
          <h1>Payment Successful!</h1>
          <p class="success-message">Your payment has been processed successfully.</p>
          <p class="success-subtitle">Thank you for your transaction. Your appointment has been confirmed.</p>
          
          <div class="success-actions">
            <a href="./dashboard.html" class="button button-primary">Back to Dashboard</a>
            <a href="./calendar.html" class="button button-secondary">View Calendar</a>
          </div>
        </div>
      </section>
    `,document.head.insertAdjacentHTML("beforeend",`
      <style>
        .success-paid-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          padding: 2rem;
        }

        .success-paid-card {
          background: white;
          border-radius: 12px;
          padding: 3rem 2rem;
          text-align: center;
          max-width: 500px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .success-icon {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .success-paid-card h1 {
          color: #28a745;
          margin: 1rem 0;
          font-size: 2rem;
        }

        .success-message {
          color: #333;
          font-size: 1.1rem;
          margin: 0.5rem 0;
          font-weight: 500;
        }

        .success-subtitle {
          color: #666;
          margin: 0.5rem 0 2rem 0;
          font-size: 0.95rem;
        }

        .success-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .button {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .button-primary {
          background-color: #28a745;
          color: white;
        }

        .button-primary:hover {
          background-color: #218838;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
        }

        .button-secondary {
          background-color: #e9ecef;
          color: #333;
        }

        .button-secondary:hover {
          background-color: #dee2e6;
          transform: translateY(-2px);
        }
      </style>
    `)}catch(e){const n=`
      <section class="auth-card page-animate">
        <h1>Error Loading Page</h1>
        <p class="muted">Unable to load the success page. Please try again.</p>
      </section>
    `;t.innerHTML=n,console.error(e)}}const lt=document.querySelector("#app");it(lt);
