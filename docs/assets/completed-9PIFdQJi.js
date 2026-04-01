import{p as $,d as x,c as B}from"./theme-Blf4yLZ3.js";/* empty css                      */import{e as E,a as N,c as P,l as T,s as U,f as z,h as D,d as H,g as K,i as R}from"./branding-C_1I2c5p.js";import{s as V}from"./emailService-BZ0Xqht5.js";import{n as L,f as W}from"./rdwService-CFrMDQAa.js";import{s as Y}from"./confirmDialog-DSEC2-zx.js";const q={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},O=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]),y=["Thomas Mulder","Sophie Koning","Rupert Clark","Jack Thomesen","Mehmet B"];function l(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function F(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function G(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function _(e){return G(e.status)==="done"||e.inAppointments===!1}function M(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function j(e){const t=M(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function J(e){const t=M(e);return t?t.toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"short"}):"Unknown date"}function Z(e){const t=String(e??"").trim();if(!t)return["other"];const r=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(a=>a.trim()).filter(Boolean);return r.length?r:[t]}function Q(e){return O.get(String(e??"").trim().toLowerCase())??"other"}function X(e){return Z(e).map(t=>{const r=Q(t),a=q[r]??q.other;return`<span class="service-chip service-chip-${r}">${l(a)}</span>`}).join("")}function ee(e){const r=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((r==null?void 0:r[1])??"").trim()}function te(e,t){if(e.name&&String(e.name).trim())return String(e.name).trim();if(e.customerName&&String(e.customerName).trim())return String(e.customerName).trim();const r=ee(e.message);return r||(e.email&&String(e.email).includes("@")?String(e.email).split("@")[0]:y[t%y.length])}function ne(e,t){var g;const r=String(e??""),a=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((g=r.match(a))==null?void 0:g[1])??"").trim()}function ae(e){return ne(e.message,"message")||String(e.message??"").trim()||"No customer message."}function re(e){return String(e.phone??"").trim()||"No phone number"}function ie(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function oe(e=""){return{title:L(e)||"Unknown vehicle",buildYear:""}}function se(e,t,r){return e.length?e.map((a,g)=>{const h=String(a.id??""),k=l(String(a.completedAppointmentId??"")),s=t===h,d=l(j(a.appointmentAt??a.createdAt));l(J(a.appointmentAt??a.createdAt));const S=l(a.licensePlate&&a.licensePlate!=="UNKNOWN"?F(a.licensePlate):"UNKNOWN"),f=l(te(a,g)),C=a.licensePlate?L(a.licensePlate):"",o=r.get(C)||oe(a.licensePlate),u=o.buildYear&&o.buildYear!=="—"?`${o.title} (${o.buildYear})`:o.title,v=l(re(a)),m=l(ae(a));let w,c,n;return a.werkbonCreated?(w='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3C4.5 3 2 8 2 8s2.5 5 6 5 6-5 6-5-2.5-5-6-5zm0 8.2A3.2 3.2 0 1 1 8 4.8a3.2 3.2 0 0 1 0 6.4zm0-5.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="currentColor"/></svg>',c="View Werkbon",n="button view-werkbon"):(w='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.33203V14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M1.33203 8H14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>',c="Create Werkbon",n="button"),`
        <article class="request-card completed-card ${s?"is-expanded":""}" data-booking-card-id="${l(h)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${S}</span>
              <div class="request-info">
                <p class="request-name">${f}</p>
                <p class="request-vehicle">${u}</p>
                <div class="request-services">${X(a.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <div class="time-done-box">
              <span class="status-chip status-chip-completed">Done</span>
              <span class="request-time">${d}</span>
              </div>
            <button
                class="request-toggle ${s?"is-expanded":""}"
                type="button"
                data-calendar-toggle="${l(h)}"
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
                    <img src="${x("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${v}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${x("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${m}</span>
                </div>
              </div>

              <div class="request-actions">
                <button class="${n}" type="button" data-completed-action="create-werkbon" data-booking-id="${l(h)}" data-completed-appointment-id="${k}">${w}
${c}</button>
                <button class="button danger" type="button" data-completed-action="delete" data-booking-id="${l(h)}" data-completed-appointment-id="${k}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `}).join(""):'<article class="request-card"><p class="muted">No completed appointments yet.</p></article>'}async function ce(e){var C;if(!e)return;const t=await E();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}N(t.activeGarage);const r=t.isAdmin?null:[(C=t.activeGarage)==null?void 0:C.id].filter(Boolean),{shell:a,contentArea:g,setUnreadEmailCount:h}=P({activePage:"completed",title:"Completed Appointments",headerNote:"Review completed jobs from your queue",userEmail:t.user.email,onLogout:T,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(a),g.innerHTML=`
    <section class="panel completed-board">
      <div id="completedList" class="request-list"></div>
    </section>
  `;const k=g.querySelector("#completedList");let s=[],d="";const S=new Map,f=()=>{d&&!s.some(o=>String(o.id)===d)&&(d=""),k.innerHTML=se(s,d,S)};g.addEventListener("click",async o=>{const u=o.target instanceof Element?o.target:null;if(!u)return;const v=u.closest("[data-completed-toggle]");if(v instanceof HTMLElement){const c=String(v.dataset.completedToggle??"");d=d===c?"":c,f();return}const m=u.closest("[data-completed-action]");if(m instanceof HTMLElement){const c=String(m.dataset.completedAction??""),n=String(m.dataset.bookingId??"");if(!n)return;const i=s.find(b=>String(b.id)===n);if(!i)return;if(c==="create-werkbon"){const b=String(m.dataset.completedAppointmentId??"");if(b){let p="";try{p=String(await U({completedAppointmentId:b,garageId:i.garageId},{created:!0})??"")}catch(I){window.alert(I instanceof Error?I.message:"Unable to create a werkbon for this appointment.");return}if(!p){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}i.werkbonCreated=!0,f(),setTimeout(()=>{window.location.href=$("werkbon.html")},300);return}let A="";try{A=String(await z(i)??"")}catch(p){window.alert(p instanceof Error?p.message:"Unable to create a werkbon for this appointment.");return}if(!A){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}i.werkbonCreated=!0,f(),setTimeout(()=>{window.location.href=$("werkbon.html")},300);return}if(c==="delete"){o.stopPropagation();const b=String(m.dataset.completedAppointmentId??"");if(!await Y("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{b?await D({completedAppointmentId:b,garageId:i.garageId,bookingId:i.bookingId||i.id}):await H(i)}catch(p){window.alert(p instanceof Error?p.message:"Unable to delete the appointment.");return}s=s.filter(p=>String(p.id)!==n),d===n&&(d=""),f();return}return}const w=u.closest("[data-booking-card-id]");if(w instanceof HTMLElement&&!ie(u)){const c=String(w.dataset.bookingCardId??"");if(!c)return;d=d===c?"":c,f()}});try{const o=await K({garageIds:r}),u=V(o);h(u.unread);const v=await R({garageIds:r}),m=new Set(v.flatMap(n=>[n.id,n.bookingId,n.completedAppointmentId].filter(Boolean))),w=o.filter(_).filter(n=>!m.has(String(n.id??"")));s=[...v,...w].sort((n,i)=>new Date(i.appointmentAt??i.createdAt).getTime()-new Date(n.appointmentAt??n.createdAt).getTime());const c=new Set(s.map(n=>n.licensePlate).filter(n=>n&&n!=="UNKNOWN").map(n=>L(n)));for(const n of c)if(n&&!S.has(n))try{const i=await W(n);i&&S.set(n,i)}catch(i){console.error(`Failed to fetch vehicle for ${n}:`,i)}d=s[0]?String(s[0].id):"",f()}catch(o){k.innerHTML='<article class="request-card"><p class="muted">Unable to load completed appointments.</p></article>',h(0),console.error(o)}}const de=document.querySelector("#app");B();ce(de);
