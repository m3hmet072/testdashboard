import{p as M,d as N,c as U}from"./theme-shgkqnbR.js";/* empty css                      */import{e as z,a as D,c as H,l as W,d as K,j as R,k as V,n as O,i as Y,g as F,s as G,b as j,f as _}from"./branding-BLWMl1Cd.js";import{n as P,f as Z}from"./rdwService-CFrMDQAa.js";import{s as J}from"./confirmDialog-DSEC2-zx.js";const x={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},Q=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function p(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function E(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function X(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function ee(e){return X(e.status)==="done"||e.inAppointments===!1}function T(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function te(e){const t=T(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function ne(e){const t=T(e);return t?t.toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"short"}):"Unknown date"}function ae(e){const t=String(e??"").trim();if(!t)return["other"];const r=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(n=>n.trim()).filter(Boolean);return r.length?r:[t]}function re(e){return Q.get(String(e??"").trim().toLowerCase())??"other"}function ie(e){const t=String(e??"").trim();if(!t)return{key:"other",label:x.other};const r=t.toLowerCase(),n=re(t);if(n==="other"){if(["other","overig","overige"].includes(r))return{key:n,label:x.other};const l=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:n,label:l||t}}return{key:n,label:x[n]??t}}function oe(e){return ae(e).map(t=>{const{key:r,label:n}=ie(t);return`<span class="service-chip service-chip-${r}">${p(n)}</span>`}).join("")}function se(e){const r=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((r==null?void 0:r[1])??"").trim()}function q(e){if(e.name&&String(e.name).trim())return String(e.name).trim();if(e.customerName&&String(e.customerName).trim())return String(e.customerName).trim();const t=se(e.message);if(t)return t;const r=String((e==null?void 0:e.licensePlate)??"").trim();return r?E(r):"UNKNOWN"}function ce(e,t){var l;const r=String(e??""),n=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((l=r.match(n))==null?void 0:l[1])??"").trim()}function le(e){return ce(e.message,"message")||String(e.message??"").trim()||"No customer message."}function de(e){return String(e.phone??"").trim()||"No phone number"}function pe(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function ue(e=""){return{title:P(e)||"Unknown vehicle",buildYear:""}}function me(e,t,r){return e.length?e.map(n=>{const l=String(n.id??""),k=p(String(n.completedAppointmentId??"")),g=t===l,d=p(te(n.appointmentAt??n.createdAt));p(ne(n.appointmentAt??n.createdAt));const I=p(n.licensePlate&&n.licensePlate!=="UNKNOWN"?E(n.licensePlate):"UNKNOWN"),s=p(q(n)),C=n.licensePlate?P(n.licensePlate):"",f=r.get(C)||ue(n.licensePlate),b=f.buildYear&&f.buildYear!=="—"?`${f.title} (${f.buildYear})`:f.title,$=p(de(n)),h=p(le(n));let S,c,i;return n.werkbonCreated?(S='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3C4.5 3 2 8 2 8s2.5 5 6 5 6-5 6-5-2.5-5-6-5zm0 8.2A3.2 3.2 0 1 1 8 4.8a3.2 3.2 0 0 1 0 6.4zm0-5.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="currentColor"/></svg>',c="View Werkbon",i="button view-werkbon"):(S='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.33203V14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M1.33203 8H14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>',c="Create Werkbon",i="button"),`
        <article class="request-card completed-card ${g?"is-expanded":""}" data-booking-card-id="${p(l)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${I}</span>
              <div class="request-info">
                <p class="request-name">${s}</p>
                <p class="request-vehicle">${b}</p>
                <div class="request-services">${oe(n.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <div class="time-done-box">
              <span class="status-chip status-chip-completed">Done</span>
              <span class="request-time">${d}</span>
              </div>
            <button
                class="request-toggle ${g?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${p(l)}"
                aria-expanded="${g?"true":"false"}"
                aria-label="${g?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
            </div>
          </div>

          ${g?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${N("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${$}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${N("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${h}</span>
                </div>
              </div>

              <div class="request-actions">
                <button class="${i}" type="button" data-completed-action="create-werkbon" data-booking-id="${p(l)}" data-completed-appointment-id="${k}">${S}
${c}</button>
                <button class="button danger" type="button" data-completed-action="delete" data-booking-id="${p(l)}" data-completed-appointment-id="${k}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No completed appointments yet.</p></article>'}async function ge(e){var S;if(!e)return;const t=await z();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}D(t.activeGarage);const r=t.isAdmin?null:[(S=t.activeGarage)==null?void 0:S.id].filter(Boolean),{shell:n,contentArea:l,setUnreadEmailCount:k}=H({activePage:"completed",title:"Completed Appointments",headerNote:"Review completed jobs from your queue",userEmail:t.user.email,onLogout:W,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(n),l.innerHTML=`
    <section class="panel completed-board">
      <div id="completedList" class="request-list"></div>
    </section>
  `;const g=l.querySelector("#completedList");let d=[];const I=K("completed",{});let s=String(I.expandedBookingId??"").trim();const C=new Map,f=new URLSearchParams(window.location.search),b=String(f.get("customer")??"").trim().toLowerCase(),$=()=>{_("completed",{expandedBookingId:s})},h=()=>{const c=b?d.filter(i=>q(i).toLowerCase().includes(b)):d;if(s&&!c.some(i=>String(i.id)===s)&&(s=""),g.innerHTML=me(c,s,C),$(),s){const i=g.querySelector(`[data-booking-card-id="${CSS.escape(s)}"]`);i instanceof HTMLElement&&(i.classList.remove("search-target-highlight"),i.offsetWidth,i.classList.add("search-target-highlight"))}};l.addEventListener("click",async c=>{const i=c.target instanceof Element?c.target:null;if(!i)return;const A=i.closest("[data-completed-toggle]");if(A instanceof HTMLElement){const u=String(A.dataset.completedToggle??"");s=s===u?"":u,h();return}const w=i.closest("[data-completed-action]");if(w instanceof HTMLElement){const u=String(w.dataset.completedAction??""),a=String(w.dataset.bookingId??"");if(!a)return;const o=d.find(v=>String(v.id)===a);if(!o)return;if(u==="create-werkbon"){const v=String(w.dataset.completedAppointmentId??"");if(v){let m="";try{m=String(await R({completedAppointmentId:v,garageId:o.garageId},{created:!0})??"")}catch(B){window.alert(B instanceof Error?B.message:"Unable to create a werkbon for this appointment.");return}if(!m){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}o.werkbonCreated=!0,h(),setTimeout(()=>{window.location.href=M("werkbon.html")},300);return}let y="";try{y=String(await V(o)??"")}catch(m){window.alert(m instanceof Error?m.message:"Unable to create a werkbon for this appointment.");return}if(!y){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}o.werkbonCreated=!0,h(),setTimeout(()=>{window.location.href=M("werkbon.html")},300);return}if(u==="delete"){c.stopPropagation();const v=String(w.dataset.completedAppointmentId??"");if(!await J("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{v?await O({completedAppointmentId:v,garageId:o.garageId,bookingId:o.bookingId||o.id}):await Y(o)}catch(m){window.alert(m instanceof Error?m.message:"Unable to delete the appointment.");return}d=d.filter(m=>String(m.id)!==a),s===a&&(s=""),h();return}return}const L=i.closest("[data-booking-card-id]");if(L instanceof HTMLElement&&!pe(i)){const u=String(L.dataset.bookingCardId??"");if(!u)return;s=s===u?"":u,h()}});try{const c=await F({garageIds:r}),i=G(c);k(i.unread);const A=await j({garageIds:r}),w=new Set(A.flatMap(a=>[a.id,a.bookingId,a.completedAppointmentId].filter(Boolean))),L=c.filter(ee).filter(a=>!w.has(String(a.id??"")));d=[...A,...L].sort((a,o)=>new Date(o.appointmentAt??o.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime());const u=new Set(d.map(a=>a.licensePlate).filter(a=>a&&a!=="UNKNOWN").map(a=>P(a)));for(const a of u)if(a&&!C.has(a))try{const o=await Z(a);o&&C.set(a,o)}catch(o){console.error(`Failed to fetch vehicle for ${a}:`,o)}if(b){const a=d.find(o=>q(o).toLowerCase().includes(b));s=a?String(a.id):""}else s||(s=d[0]?String(d[0].id):"");h()}catch(c){g.innerHTML='<article class="request-card"><p class="muted">Unable to load completed appointments.</p></article>',k(0),console.error(c)}}const he=document.querySelector("#app");U();ge(he);
