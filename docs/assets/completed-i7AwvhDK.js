import{n as H,t as U,r as E}from"./theme-DS55tFGy.js";/* empty css                      */import{n as W,r as D,t as G,b as K,P as O,Z as R,J as Y,q as j,U as V,e as z,a as Z,X as J,c as X,x as F,W as x}from"./branding-DFlHPucr.js";import{h as M,p as Q}from"./rdwService-B_7TgNhE.js";import{m as _}from"./confirmDialog-DOdHvhLG.js";const ee=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function p(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function P(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function te(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function ne(e){return te(e.status)==="done"||e.inAppointments===!1}function B(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function ae(e){const t=B(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function ie(e){const t=B(e);return t?t.toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"short"}):"Unknown date"}function re(e){const t=String(e??"").trim();if(!t)return["other"];const n=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(a=>a.trim()).filter(Boolean);return n.length?n:[t]}function oe(e){return ee.get(String(e??"").trim().toLowerCase())??"other"}function se(e){const t=String(e??"").trim(),n=F();if(!t)return{key:"other",label:x("other",n)};const a=t.toLowerCase(),c=oe(t);if(c==="other"){if(["other","overig","overige"].includes(a))return{key:c,label:x("other",n)};const f=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:c,label:f||t}}return{key:c,label:x(c,n)}}function ce(e){return re(e).map(t=>{const{key:n,label:a}=se(t);return`<span class="service-chip service-chip-${n}">${p(a)}</span>`}).join("")}function le(e){const t=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((t==null?void 0:t[1])??"").trim()}function N(e){if(e.name&&String(e.name).trim())return String(e.name).trim();if(e.customerName&&String(e.customerName).trim())return String(e.customerName).trim();const t=le(e.message);if(t)return t;const n=String((e==null?void 0:e.licensePlate)??"").trim();return n?P(n):"UNKNOWN"}function de(e,t){var n;const a=String(e??""),c=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((n=a.match(c))==null?void 0:n[1])??"").trim()}const T="Manual appointment created in dashboard.";function pe(e){const t=String(e??"").match(/\buntil\s*:\s*([0-2]?\d:[0-5]\d)\b/i);return((t==null?void 0:t[1])??"").trim()}function ue(e){const t=de(e.message,"message")||String(e.message??"").trim();return t.replace(/\n?\s*until\s*:\s*[0-2]?\d:[0-5]\d\s*/gi,`
`).replace(/\n?\s*all day\s*:\s*yes\s*/gi,`
`).replace(/\n?\s*manual appointment created in dashboard\.?\s*/gi,`
`).replace(/\n{2,}/g,`
`).trim()||(t.toLowerCase().includes(T.toLowerCase())?T:"No customer message.")}function me(e){const t=ae((e==null?void 0:e.appointmentAt)??(e==null?void 0:e.createdAt)),n=pe(e==null?void 0:e.message);return n?`${t} - ${n}`:t}function ge(e){return String(e.phone??"").trim()||"No phone number"}function he(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function fe(e=""){return{title:M(e)||"Unknown vehicle",buildYear:""}}function be(e,t,n){return e.length?e.map(a=>{const c=String(a.id??""),f=p(String(a.completedAppointmentId??"")),b=t===c,S=p(me(a));p(ie(a.appointmentAt??a.createdAt));const l=String(a.licensePlate??"").toUpperCase()==="UNKNOWN",A=p(a.color??"#2563EB"),s=p(a.licensePlate&&a.licensePlate!=="UNKNOWN"?P(a.licensePlate):"UNKNOWN"),$=p(N(a)),y=a.licensePlate?M(a.licensePlate):"",g=n.get(y)||fe(a.licensePlate),q=g.buildYear&&g.buildYear!=="—"?`${g.title} (${g.buildYear})`:g.title,w=p(ge(a)),d=p(ue(a));let r,h,u;return a.werkbonCreated?(r='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3C4.5 3 2 8 2 8s2.5 5 6 5 6-5 6-5-2.5-5-6-5zm0 8.2A3.2 3.2 0 1 1 8 4.8a3.2 3.2 0 0 1 0 6.4zm0-5.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="currentColor"/></svg>',h="View Werkbon",u="button view-werkbon"):(r='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.33203V14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M1.33203 8H14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>',h="Create Werkbon",u="button"),`
        <article class="request-card completed-card ${b?"is-expanded":""}" data-booking-card-id="${p(c)}">
          <div class="request-card-head">
            <div class="request-main">
              ${l?`<span class="fast-appt-dot" style="background: ${A}" aria-hidden="true"></span>`:`<span class="plate-chip">${s}</span>`}
              <div class="request-info">
                <p class="request-name">${$}</p>
                ${l?"":`<p class="request-vehicle">${q}</p>`}
                <div class="request-services">${ce(a.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <div class="time-done-box">
              <span class="status-chip status-chip-completed">Done</span>
              <span class="request-time">${S}</span>
              </div>
            <button
                class="request-toggle ${b?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${p(c)}"
                aria-expanded="${b?"true":"false"}"
                aria-label="${b?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
            </div>
          </div>

          ${b?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${E("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${w}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${E("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${d}</span>
                </div>
              </div>

              <div class="request-actions">
                <button class="${u}" type="button" data-completed-action="create-werkbon" data-booking-id="${p(c)}" data-completed-appointment-id="${f}">${r}
${h}</button>
                <button class="button danger" type="button" data-completed-action="delete" data-booking-id="${p(c)}" data-completed-appointment-id="${f}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No completed appointments yet.</p></article>'}async function we(e){var t;if(!e)return;const n=await W();if(!n)return;if(!n.isAdmin&&!n.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}D(n.activeGarage);const a=n.isAdmin?null:[(t=n.activeGarage)==null?void 0:t.id].filter(Boolean),{shell:c,contentArea:f,setUnreadEmailCount:b}=G({activePage:"completed",title:"Completed Appointments",headerNote:"Review completed jobs from your queue",userEmail:n.user.email,onLogout:K,garage:n.activeGarage,isAdmin:n.isAdmin});e.replaceChildren(c),f.innerHTML=`
    <section class="panel completed-board">
      <div id="completedList" class="request-list"></div>
    </section>
  `;const S=f.querySelector("#completedList");let l=[];const A=O("completed",{});let s=String(A.expandedBookingId??"").trim();const $=new Map,y=new URLSearchParams(window.location.search),g=String(y.get("customer")??"").trim().toLowerCase(),q=()=>{X("completed",{expandedBookingId:s})},w=()=>{const d=g?l.filter(r=>N(r).toLowerCase().includes(g)):l;if(s&&!d.some(r=>String(r.id)===s)&&(s=""),S.innerHTML=be(d,s,$),q(),s){const r=S.querySelector(`[data-booking-card-id="${CSS.escape(s)}"]`);r instanceof HTMLElement&&(r.classList.remove("search-target-highlight"),r.offsetWidth,r.classList.add("search-target-highlight"))}};f.addEventListener("click",async d=>{const r=d.target instanceof Element?d.target:null;if(!r)return;const h=r.closest("[data-completed-toggle]");if(h instanceof HTMLElement){const m=String(h.dataset.completedToggle??"");s=s===m?"":m,w();return}const u=r.closest("[data-completed-action]");if(u instanceof HTMLElement){const m=String(u.dataset.completedAction??""),i=String(u.dataset.bookingId??"");if(!i)return;const o=l.find(v=>String(v.id)===i);if(!o)return;if(m==="create-werkbon"){const v=String(u.dataset.completedAppointmentId??"");if(v){let C="";try{C=String(await R({completedAppointmentId:v,garageId:o.garageId},{created:!0})??"")}catch(I){window.alert(I instanceof Error?I.message:"Unable to create a werkbon for this appointment.");return}if(!C){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}o.werkbonCreated=!0,w(),setTimeout(()=>{window.location.href=U("werkbon.html")},300);return}let k="";try{k=String(await Y(o)??"")}catch(C){window.alert(C instanceof Error?C.message:"Unable to create a werkbon for this appointment.");return}if(!k){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}o.werkbonCreated=!0,w(),setTimeout(()=>{window.location.href=U("werkbon.html")},300);return}if(m==="delete"){d.stopPropagation();const v=String(u.dataset.completedAppointmentId??"");if(!await _("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{v?await j({completedAppointmentId:v,garageId:o.garageId,bookingId:o.bookingId||o.id}):await V(o)}catch(k){window.alert(k instanceof Error?k.message:"Unable to delete the appointment.");return}l=l.filter(k=>String(k.id)!==i),s===i&&(s=""),w();return}return}const L=r.closest("[data-booking-card-id]");if(L instanceof HTMLElement&&!he(r)){const m=String(L.dataset.bookingCardId??"");if(!m)return;s=s===m?"":m,w()}});try{const d=await z({garageIds:a}),r=Z(d);b(r.unread);const h=await J({garageIds:a}),u=new Set(h.flatMap(i=>[i.id,i.bookingId,i.completedAppointmentId].filter(Boolean))),L=d.filter(ne).filter(i=>!u.has(String(i.id??"")));l=[...h,...L].sort((i,o)=>new Date(o.appointmentAt??o.createdAt).getTime()-new Date(i.appointmentAt??i.createdAt).getTime());const m=new Set(l.map(i=>i.licensePlate).filter(i=>i&&i!=="UNKNOWN").map(i=>M(i)));for(const i of m)if(i&&!$.has(i))try{const o=await Q(i);o&&$.set(i,o)}catch(o){console.error(`Failed to fetch vehicle for ${i}:`,o)}if(g){const i=l.find(o=>N(o).toLowerCase().includes(g));s=i?String(i.id):""}else s||(s=l[0]?String(l[0].id):"");w()}catch(d){S.innerHTML='<article class="request-card"><p class="muted">Unable to load completed appointments.</p></article>',b(0),console.error(d)}}const ve=document.querySelector("#app");H();we(ve);
