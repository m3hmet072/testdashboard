import{p as M,d as B,c as E}from"./theme-Bb-bjqwO.js";/* empty css                      */import{e as T,a as U,c as z,l as D,f as H,h as W,i as K,d as R,g as V,s as O,j as Y}from"./branding-CDwx9-lU.js";import{n as q,f as F}from"./rdwService-CFrMDQAa.js";import{s as G}from"./confirmDialog-DSEC2-zx.js";const y={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},j=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function p(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function N(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function _(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function Z(e){return _(e.status)==="done"||e.inAppointments===!1}function P(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function J(e){const t=P(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function Q(e){const t=P(e);return t?t.toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"short"}):"Unknown date"}function X(e){const t=String(e??"").trim();if(!t)return["other"];const r=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(n=>n.trim()).filter(Boolean);return r.length?r:[t]}function ee(e){return j.get(String(e??"").trim().toLowerCase())??"other"}function te(e){const t=String(e??"").trim();if(!t)return{key:"other",label:y.other};const r=t.toLowerCase(),n=ee(t);if(n==="other"){if(["other","overig","overige"].includes(r))return{key:n,label:y.other};const c=t.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:n,label:c||t}}return{key:n,label:y[n]??t}}function ne(e){return X(e).map(t=>{const{key:r,label:n}=te(t);return`<span class="service-chip service-chip-${r}">${p(n)}</span>`}).join("")}function ae(e){const r=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((r==null?void 0:r[1])??"").trim()}function I(e){if(e.name&&String(e.name).trim())return String(e.name).trim();if(e.customerName&&String(e.customerName).trim())return String(e.customerName).trim();const t=ae(e.message);if(t)return t;const r=String((e==null?void 0:e.licensePlate)??"").trim();return r?N(r):"UNKNOWN"}function re(e,t){var c;const r=String(e??""),n=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((c=r.match(n))==null?void 0:c[1])??"").trim()}function ie(e){return re(e.message,"message")||String(e.message??"").trim()||"No customer message."}function oe(e){return String(e.phone??"").trim()||"No phone number"}function se(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function ce(e=""){return{title:q(e)||"Unknown vehicle",buildYear:""}}function le(e,t,r){return e.length?e.map(n=>{const c=String(n.id??""),S=p(String(n.completedAppointmentId??"")),f=t===c,d=p(J(n.appointmentAt??n.createdAt));p(Q(n.appointmentAt??n.createdAt));const s=p(n.licensePlate&&n.licensePlate!=="UNKNOWN"?N(n.licensePlate):"UNKNOWN"),k=p(I(n)),L=n.licensePlate?q(n.licensePlate):"",g=r.get(L)||ce(n.licensePlate),v=g.buildYear&&g.buildYear!=="—"?`${g.title} (${g.buildYear})`:g.title,C=p(oe(n)),l=p(ie(n));let i,w,u;return n.werkbonCreated?(i='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3C4.5 3 2 8 2 8s2.5 5 6 5 6-5 6-5-2.5-5-6-5zm0 8.2A3.2 3.2 0 1 1 8 4.8a3.2 3.2 0 0 1 0 6.4zm0-5.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="currentColor"/></svg>',w="View Werkbon",u="button view-werkbon"):(i='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.33203V14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M1.33203 8H14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>',w="Create Werkbon",u="button"),`
        <article class="request-card completed-card ${f?"is-expanded":""}" data-booking-card-id="${p(c)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${s}</span>
              <div class="request-info">
                <p class="request-name">${k}</p>
                <p class="request-vehicle">${v}</p>
                <div class="request-services">${ne(n.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <div class="time-done-box">
              <span class="status-chip status-chip-completed">Done</span>
              <span class="request-time">${d}</span>
              </div>
            <button
                class="request-toggle ${f?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${p(c)}"
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
                    <img src="${B("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${C}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${B("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${l}</span>
                </div>
              </div>

              <div class="request-actions">
                <button class="${u}" type="button" data-completed-action="create-werkbon" data-booking-id="${p(c)}" data-completed-appointment-id="${S}">${i}
${w}</button>
                <button class="button danger" type="button" data-completed-action="delete" data-booking-id="${p(c)}" data-completed-appointment-id="${S}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No completed appointments yet.</p></article>'}async function de(e){var C;if(!e)return;const t=await T();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}U(t.activeGarage);const r=t.isAdmin?null:[(C=t.activeGarage)==null?void 0:C.id].filter(Boolean),{shell:n,contentArea:c,setUnreadEmailCount:S}=z({activePage:"completed",title:"Completed Appointments",headerNote:"Review completed jobs from your queue",userEmail:t.user.email,onLogout:D,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(n),c.innerHTML=`
    <section class="panel completed-board">
      <div id="completedList" class="request-list"></div>
    </section>
  `;const f=c.querySelector("#completedList");let d=[],s="";const k=new Map,L=new URLSearchParams(window.location.search),g=String(L.get("customer")??"").trim().toLowerCase(),v=()=>{const l=g?d.filter(i=>I(i).toLowerCase().includes(g)):d;if(s&&!l.some(i=>String(i.id)===s)&&(s=""),f.innerHTML=le(l,s,k),s){const i=f.querySelector(`[data-booking-card-id="${CSS.escape(s)}"]`);i instanceof HTMLElement&&(i.classList.remove("search-target-highlight"),i.offsetWidth,i.classList.add("search-target-highlight"))}};c.addEventListener("click",async l=>{const i=l.target instanceof Element?l.target:null;if(!i)return;const w=i.closest("[data-completed-toggle]");if(w instanceof HTMLElement){const m=String(w.dataset.completedToggle??"");s=s===m?"":m,v();return}const u=i.closest("[data-completed-action]");if(u instanceof HTMLElement){const m=String(u.dataset.completedAction??""),a=String(u.dataset.bookingId??"");if(!a)return;const o=d.find(b=>String(b.id)===a);if(!o)return;if(m==="create-werkbon"){const b=String(u.dataset.completedAppointmentId??"");if(b){let h="";try{h=String(await H({completedAppointmentId:b,garageId:o.garageId},{created:!0})??"")}catch(x){window.alert(x instanceof Error?x.message:"Unable to create a werkbon for this appointment.");return}if(!h){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}o.werkbonCreated=!0,v(),setTimeout(()=>{window.location.href=M("werkbon.html")},300);return}let $="";try{$=String(await W(o)??"")}catch(h){window.alert(h instanceof Error?h.message:"Unable to create a werkbon for this appointment.");return}if(!$){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}o.werkbonCreated=!0,v(),setTimeout(()=>{window.location.href=M("werkbon.html")},300);return}if(m==="delete"){l.stopPropagation();const b=String(u.dataset.completedAppointmentId??"");if(!await G("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{b?await K({completedAppointmentId:b,garageId:o.garageId,bookingId:o.bookingId||o.id}):await R(o)}catch(h){window.alert(h instanceof Error?h.message:"Unable to delete the appointment.");return}d=d.filter(h=>String(h.id)!==a),s===a&&(s=""),v();return}return}const A=i.closest("[data-booking-card-id]");if(A instanceof HTMLElement&&!se(i)){const m=String(A.dataset.bookingCardId??"");if(!m)return;s=s===m?"":m,v()}});try{const l=await V({garageIds:r}),i=O(l);S(i.unread);const w=await Y({garageIds:r}),u=new Set(w.flatMap(a=>[a.id,a.bookingId,a.completedAppointmentId].filter(Boolean))),A=l.filter(Z).filter(a=>!u.has(String(a.id??"")));d=[...w,...A].sort((a,o)=>new Date(o.appointmentAt??o.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime());const m=new Set(d.map(a=>a.licensePlate).filter(a=>a&&a!=="UNKNOWN").map(a=>q(a)));for(const a of m)if(a&&!k.has(a))try{const o=await F(a);o&&k.set(a,o)}catch(o){console.error(`Failed to fetch vehicle for ${a}:`,o)}if(g){const a=d.find(o=>I(o).toLowerCase().includes(g));s=a?String(a.id):""}else s=d[0]?String(d[0].id):"";v()}catch(l){f.innerHTML='<article class="request-card"><p class="muted">Unable to load completed appointments.</p></article>',S(0),console.error(l)}}const pe=document.querySelector("#app");E();de(pe);
