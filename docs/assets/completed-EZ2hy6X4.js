import{p as x,d as y,c as P}from"./theme-B0f129yT.js";/* empty css                      */import{e as T,a as U,c as z,l as D,f as H,h as K,i as R,d as V,g as W,s as Y,j as F}from"./branding-D4zs9BDF.js";import{n as M,f as O}from"./rdwService-CFrMDQAa.js";import{s as G}from"./confirmDialog-DSEC2-zx.js";const B={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},_=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]),E=["Thomas Mulder","Sophie Koning","Rupert Clark","Jack Thomesen","Mehmet B"];function p(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function j(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function J(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function Z(e){return J(e.status)==="done"||e.inAppointments===!1}function N(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function Q(e){const t=N(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function X(e){const t=N(e);return t?t.toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"short"}):"Unknown date"}function ee(e){const t=String(e??"").trim();if(!t)return["other"];const r=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(a=>a.trim()).filter(Boolean);return r.length?r:[t]}function te(e){return _.get(String(e??"").trim().toLowerCase())??"other"}function ne(e){return ee(e).map(t=>{const r=te(t),a=B[r]??B.other;return`<span class="service-chip service-chip-${r}">${p(a)}</span>`}).join("")}function ae(e){const r=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((r==null?void 0:r[1])??"").trim()}function I(e,t){if(e.name&&String(e.name).trim())return String(e.name).trim();if(e.customerName&&String(e.customerName).trim())return String(e.customerName).trim();const r=ae(e.message);return r||(e.email&&String(e.email).includes("@")?String(e.email).split("@")[0]:E[t%E.length])}function re(e,t){var w;const r=String(e??""),a=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((w=r.match(a))==null?void 0:w[1])??"").trim()}function ie(e){return re(e.message,"message")||String(e.message??"").trim()||"No customer message."}function oe(e){return String(e.phone??"").trim()||"No phone number"}function se(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function ce(e=""){return{title:M(e)||"Unknown vehicle",buildYear:""}}function le(e,t,r){return e.length?e.map((a,w)=>{const v=String(a.id??""),S=p(String(a.completedAppointmentId??"")),s=t===v,c=p(Q(a.appointmentAt??a.createdAt));p(X(a.appointmentAt??a.createdAt));const C=p(a.licensePlate&&a.licensePlate!=="UNKNOWN"?j(a.licensePlate):"UNKNOWN"),L=p(I(a,w)),k=a.licensePlate?M(a.licensePlate):"",d=r.get(k)||ce(a.licensePlate),A=d.buildYear&&d.buildYear!=="—"?`${d.title} (${d.buildYear})`:d.title,l=p(oe(a)),o=p(ie(a));let u,m,b;return a.werkbonCreated?(u='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3C4.5 3 2 8 2 8s2.5 5 6 5 6-5 6-5-2.5-5-6-5zm0 8.2A3.2 3.2 0 1 1 8 4.8a3.2 3.2 0 0 1 0 6.4zm0-5.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="currentColor"/></svg>',m="View Werkbon",b="button view-werkbon"):(u='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.33203V14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M1.33203 8H14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>',m="Create Werkbon",b="button"),`
        <article class="request-card completed-card ${s?"is-expanded":""}" data-booking-card-id="${p(v)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${C}</span>
              <div class="request-info">
                <p class="request-name">${L}</p>
                <p class="request-vehicle">${A}</p>
                <div class="request-services">${ne(a.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <div class="time-done-box">
              <span class="status-chip status-chip-completed">Done</span>
              <span class="request-time">${c}</span>
              </div>
            <button
                class="request-toggle ${s?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${p(v)}"
                aria-expanded="${s?"true":"false"}"
                aria-label="${s?"Collapse appointment details":"Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
            </div>
          </div>

          ${s?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${y("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${l}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${y("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${o}</span>
                </div>
              </div>

              <div class="request-actions">
                <button class="${b}" type="button" data-completed-action="create-werkbon" data-booking-id="${p(v)}" data-completed-appointment-id="${S}">${u}
${m}</button>
                <button class="button danger" type="button" data-completed-action="delete" data-booking-id="${p(v)}" data-completed-appointment-id="${S}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No completed appointments yet.</p></article>'}async function de(e){var A;if(!e)return;const t=await T();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}U(t.activeGarage);const r=t.isAdmin?null:[(A=t.activeGarage)==null?void 0:A.id].filter(Boolean),{shell:a,contentArea:w,setUnreadEmailCount:v}=z({activePage:"completed",title:"Completed Appointments",headerNote:"Review completed jobs from your queue",userEmail:t.user.email,onLogout:D,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(a),w.innerHTML=`
    <section class="panel completed-board">
      <div id="completedList" class="request-list"></div>
    </section>
  `;const S=w.querySelector("#completedList");let s=[],c="";const C=new Map,L=new URLSearchParams(window.location.search),k=String(L.get("customer")??"").trim().toLowerCase(),d=()=>{const l=k?s.filter((o,u)=>I(o,u).toLowerCase().includes(k)):s;if(c&&!l.some(o=>String(o.id)===c)&&(c=""),S.innerHTML=le(l,c,C),c){const o=S.querySelector(`[data-booking-card-id="${CSS.escape(c)}"]`);o instanceof HTMLElement&&(o.classList.remove("search-target-highlight"),o.offsetWidth,o.classList.add("search-target-highlight"))}};w.addEventListener("click",async l=>{const o=l.target instanceof Element?l.target:null;if(!o)return;const u=o.closest("[data-completed-toggle]");if(u instanceof HTMLElement){const g=String(u.dataset.completedToggle??"");c=c===g?"":g,d();return}const m=o.closest("[data-completed-action]");if(m instanceof HTMLElement){const g=String(m.dataset.completedAction??""),n=String(m.dataset.bookingId??"");if(!n)return;const i=s.find(f=>String(f.id)===n);if(!i)return;if(g==="create-werkbon"){const f=String(m.dataset.completedAppointmentId??"");if(f){let h="";try{h=String(await H({completedAppointmentId:f,garageId:i.garageId},{created:!0})??"")}catch(q){window.alert(q instanceof Error?q.message:"Unable to create a werkbon for this appointment.");return}if(!h){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}i.werkbonCreated=!0,d(),setTimeout(()=>{window.location.href=x("werkbon.html")},300);return}let $="";try{$=String(await K(i)??"")}catch(h){window.alert(h instanceof Error?h.message:"Unable to create a werkbon for this appointment.");return}if(!$){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}i.werkbonCreated=!0,d(),setTimeout(()=>{window.location.href=x("werkbon.html")},300);return}if(g==="delete"){l.stopPropagation();const f=String(m.dataset.completedAppointmentId??"");if(!await G("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{f?await R({completedAppointmentId:f,garageId:i.garageId,bookingId:i.bookingId||i.id}):await V(i)}catch(h){window.alert(h instanceof Error?h.message:"Unable to delete the appointment.");return}s=s.filter(h=>String(h.id)!==n),c===n&&(c=""),d();return}return}const b=o.closest("[data-booking-card-id]");if(b instanceof HTMLElement&&!se(o)){const g=String(b.dataset.bookingCardId??"");if(!g)return;c=c===g?"":g,d()}});try{const l=await W({garageIds:r}),o=Y(l);v(o.unread);const u=await F({garageIds:r}),m=new Set(u.flatMap(n=>[n.id,n.bookingId,n.completedAppointmentId].filter(Boolean))),b=l.filter(Z).filter(n=>!m.has(String(n.id??"")));s=[...u,...b].sort((n,i)=>new Date(i.appointmentAt??i.createdAt).getTime()-new Date(n.appointmentAt??n.createdAt).getTime());const g=new Set(s.map(n=>n.licensePlate).filter(n=>n&&n!=="UNKNOWN").map(n=>M(n)));for(const n of g)if(n&&!C.has(n))try{const i=await O(n);i&&C.set(n,i)}catch(i){console.error(`Failed to fetch vehicle for ${n}:`,i)}if(k){const n=s.find((i,f)=>I(i,f).toLowerCase().includes(k));c=n?String(n.id):""}else c=s[0]?String(s[0].id):"";d()}catch(l){S.innerHTML='<article class="request-card"><p class="muted">Unable to load completed appointments.</p></article>',v(0),console.error(l)}}const pe=document.querySelector("#app");P();de(pe);
