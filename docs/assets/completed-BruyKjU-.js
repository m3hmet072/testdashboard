import{p as P,d as T,c as z}from"./theme-DFmgD8P9.js";/* empty css                      */import{e as D,a as H,c as R,l as W,k as K,r as V,u as O,v as F,o as G,b as Y,s as j,d as _,q as Z,g as J,f as q}from"./branding-B2eQ7lFX.js";import{n as N,f as Q}from"./rdwService-CFrMDQAa.js";import{s as X}from"./confirmDialog-DSEC2-zx.js";const ee=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function d(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function E(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function te(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function ae(e){return te(e.status)==="done"||e.inAppointments===!1}function U(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function ne(e){const t=U(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function re(e){const t=U(e);return t?t.toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"short"}):"Unknown date"}function se(e){const t=String(e??"").trim();if(!t)return["other"];const a=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(r=>r.trim()).filter(Boolean);return a.length?a:[t]}function ie(e){return ee.get(String(e??"").trim().toLowerCase())??"other"}function oe(e){const t=String(e??"").trim(),a=J();if(!t)return{key:"other",label:q("other",a)};const r=t.toLowerCase(),o=ie(t);if(o==="other"){if(["other","overig","overige"].includes(r))return{key:o,label:q("other",a)};const v=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:o,label:v||t}}return{key:o,label:q(o,a)}}function ce(e){return se(e).map(t=>{const{key:a,label:r}=oe(t);return`<span class="service-chip service-chip-${a}">${d(r)}</span>`}).join("")}function le(e){const a=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((a==null?void 0:a[1])??"").trim()}function x(e){if(e.name&&String(e.name).trim())return String(e.name).trim();if(e.customerName&&String(e.customerName).trim())return String(e.customerName).trim();const t=le(e.message);if(t)return t;const a=String((e==null?void 0:e.licensePlate)??"").trim();return a?E(a):"UNKNOWN"}function de(e,t){var o;const a=String(e??""),r=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((o=a.match(r))==null?void 0:o[1])??"").trim()}const B="Manual appointment created in dashboard.";function pe(e){const a=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((a==null?void 0:a[1])??"").trim()}function ue(e){const t=de(e.message,"message")||String(e.message??"").trim(),a=t.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim();return a||(t.toLowerCase().includes(B.toLowerCase())?B:"No customer message.")}function me(e){const t=ne((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),a=pe(e==null?void 0:e.message);return a?`${t} - ${a}`:t}function ge(e){return String(e.phone??"").trim()||"No phone number"}function fe(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function he(e=""){return{title:N(e)||"Unknown vehicle",buildYear:""}}function we(e,t,a){return e.length?e.map(r=>{const o=String(r.id??""),v=d(String(r.completedAppointmentId??"")),f=t===o,p=d(me(r));d(re(r.appointmentAt??r.createdAt));const A=String(r.licensePlate??"").toUpperCase()==="UNKNOWN",c=d(r.color??"#2563EB"),k=d(r.licensePlate&&r.licensePlate!=="UNKNOWN"?E(r.licensePlate):"UNKNOWN"),y=d(x(r)),C=r.licensePlate?N(r.licensePlate):"",S=a.get(C)||he(r.licensePlate),w=S.buildYear&&S.buildYear!=="—"?`${S.title} (${S.buildYear})`:S.title,L=d(ge(r)),l=d(ue(r));let s,h,u;return r.werkbonCreated?(s='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3C4.5 3 2 8 2 8s2.5 5 6 5 6-5 6-5-2.5-5-6-5zm0 8.2A3.2 3.2 0 1 1 8 4.8a3.2 3.2 0 0 1 0 6.4zm0-5.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="currentColor"/></svg>',h="View Werkbon",u="button view-werkbon"):(s='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.33203V14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M1.33203 8H14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>',h="Create Werkbon",u="button"),`
        <article class="request-card completed-card ${f?"is-expanded":""}" data-booking-card-id="${d(o)}">
          <div class="request-card-head">
            <div class="request-main">
              ${A?`<span class="fast-appt-dot" style="background: ${c}" aria-hidden="true"></span>`:`<span class="plate-chip">${k}</span>`}
              <div class="request-info">
                <p class="request-name">${y}</p>
                ${A?"":`<p class="request-vehicle">${w}</p>`}
                <div class="request-services">${ce(r.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <div class="time-done-box">
              <span class="status-chip status-chip-completed">Done</span>
              <span class="request-time">${p}</span>
              </div>
            <button
                class="request-toggle ${f?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${d(o)}"
                aria-expanded="${f?"true":"false"}"
                aria-label="${f?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
            </div>
          </div>

          ${f?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${T("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${L}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${T("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${l}</span>
                </div>
              </div>

              <div class="request-actions">
                <button class="${u}" type="button" data-completed-action="create-werkbon" data-booking-id="${d(o)}" data-completed-appointment-id="${v}">${s}
${h}</button>
                <button class="button danger" type="button" data-completed-action="delete" data-booking-id="${d(o)}" data-completed-appointment-id="${v}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3.66797L12.5869 10.3514C12.4813 12.0589 12.4285 12.9127 12.0005 13.5266C11.7889 13.83 11.5165 14.0862 11.2005 14.2786C10.5614 14.668 9.706 14.668 7.99513 14.668C6.28208 14.668 5.42553 14.668 4.78603 14.2779C4.46987 14.0851 4.19733 13.8285 3.98579 13.5245C3.55792 12.9097 3.5063 12.0547 3.40307 10.3448L3 3.66797" stroke="white" stroke-linecap="round"/>
<path d="M2 3.66536H14M10.7038 3.66536L10.2487 2.72652C9.9464 2.10287 9.7952 1.79104 9.53447 1.59657C9.47667 1.55343 9.4154 1.51506 9.35133 1.48183C9.0626 1.33203 8.71607 1.33203 8.023 1.33203C7.31253 1.33203 6.95733 1.33203 6.66379 1.48811C6.59873 1.5227 6.53665 1.56263 6.47819 1.60748C6.21443 1.80983 6.06709 2.13306 5.77241 2.77954L5.36861 3.66536" stroke="white" stroke-linecap="round"/>
<path d="M6.3335 11V7" stroke="white" stroke-linecap="round"/>
<path d="M9.6665 11V7" stroke="white" stroke-linecap="round"/>
</svg>
Delete</button>
                
              </div>
            </div>
          `:""}
        </article>
      `}).join(""):'<article class="request-card"><p class="muted">No completed appointments yet.</p></article>'}async function ve(e){var L;if(!e)return;const t=await D();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}H(t.activeGarage);const a=t.isAdmin?null:[(L=t.activeGarage)==null?void 0:L.id].filter(Boolean),{shell:r,contentArea:o,setUnreadEmailCount:v}=R({activePage:"completed",title:"Completed Appointments",headerNote:"Review completed jobs from your queue",userEmail:t.user.email,onLogout:W,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(r),o.innerHTML=`
    <section class="panel completed-board">
      <div id="completedList" class="request-list"></div>
    </section>
  `;const f=o.querySelector("#completedList");let p=[];const A=K("completed",{});let c=String(A.expandedBookingId??"").trim();const k=new Map,y=new URLSearchParams(window.location.search),C=String(y.get("customer")??"").trim().toLowerCase(),S=()=>{Z("completed",{expandedBookingId:c})},w=()=>{const l=C?p.filter(s=>x(s).toLowerCase().includes(C)):p;if(c&&!l.some(s=>String(s.id)===c)&&(c=""),f.innerHTML=we(l,c,k),S(),c){const s=f.querySelector(`[data-booking-card-id="${CSS.escape(c)}"]`);s instanceof HTMLElement&&(s.classList.remove("search-target-highlight"),s.offsetWidth,s.classList.add("search-target-highlight"))}};o.addEventListener("click",async l=>{const s=l.target instanceof Element?l.target:null;if(!s)return;const h=s.closest("[data-completed-toggle]");if(h instanceof HTMLElement){const m=String(h.dataset.completedToggle??"");c=c===m?"":m,w();return}const u=s.closest("[data-completed-action]");if(u instanceof HTMLElement){const m=String(u.dataset.completedAction??""),n=String(u.dataset.bookingId??"");if(!n)return;const i=p.find(b=>String(b.id)===n);if(!i)return;if(m==="create-werkbon"){const b=String(u.dataset.completedAppointmentId??"");if(b){let g="";try{g=String(await V({completedAppointmentId:b,garageId:i.garageId},{created:!0})??"")}catch(M){window.alert(M instanceof Error?M.message:"Unable to create a werkbon for this appointment.");return}if(!g){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}i.werkbonCreated=!0,w(),setTimeout(()=>{window.location.href=P("werkbon.html")},300);return}let I="";try{I=String(await O(i)??"")}catch(g){window.alert(g instanceof Error?g.message:"Unable to create a werkbon for this appointment.");return}if(!I){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}i.werkbonCreated=!0,w(),setTimeout(()=>{window.location.href=P("werkbon.html")},300);return}if(m==="delete"){l.stopPropagation();const b=String(u.dataset.completedAppointmentId??"");if(!await X("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{b?await F({completedAppointmentId:b,garageId:i.garageId,bookingId:i.bookingId||i.id}):await G(i)}catch(g){window.alert(g instanceof Error?g.message:"Unable to delete the appointment.");return}p=p.filter(g=>String(g.id)!==n),c===n&&(c=""),w();return}return}const $=s.closest("[data-booking-card-id]");if($ instanceof HTMLElement&&!fe(s)){const m=String($.dataset.bookingCardId??"");if(!m)return;c=c===m?"":m,w()}});try{const l=await Y({garageIds:a}),s=j(l);v(s.unread);const h=await _({garageIds:a}),u=new Set(h.flatMap(n=>[n.id,n.bookingId,n.completedAppointmentId].filter(Boolean))),$=l.filter(ae).filter(n=>!u.has(String(n.id??"")));p=[...h,...$].sort((n,i)=>new Date(i.appointmentAt??i.createdAt).getTime()-new Date(n.appointmentAt??n.createdAt).getTime());const m=new Set(p.map(n=>n.licensePlate).filter(n=>n&&n!=="UNKNOWN").map(n=>N(n)));for(const n of m)if(n&&!k.has(n))try{const i=await Q(n);i&&k.set(n,i)}catch(i){console.error(`Failed to fetch vehicle for ${n}:`,i)}if(C){const n=p.find(i=>x(i).toLowerCase().includes(C));c=n?String(n.id):""}else c||(c=p[0]?String(p[0].id):"");w()}catch(l){f.innerHTML='<article class="request-card"><p class="muted">Unable to load completed appointments.</p></article>',v(0),console.error(l)}}const Se=document.querySelector("#app");z();ve(Se);
