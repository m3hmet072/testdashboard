import{c as x}from"./theme-DgkmrLao.js";/* empty css                      */import{e as M,a as B,c as E,l as P,s as N,f as T,h as U,d as D,g as H,i as K}from"./branding-BAUB0jw_.js";import{s as R}from"./emailService-BZ0Xqht5.js";import{n as L,f as V}from"./rdwService-D13NyQC7.js";import{s as z}from"./confirmDialog-DSEC2-zx.js";const y={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},W=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]),q=["Thomas Mulder","Sophie Koning","Rupert Clark","Jack Thomesen","Mehmet B"];function l(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Y(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function O(e){const t=String(e??"").trim().toLowerCase();return t==="done"||t==="completed"||t==="complete"||t==="closed"?"done":t==="confirmed"||t==="confirm"?"confirmed":"new"}function F(e){return O(e.status)==="done"||e.inAppointments===!1}function $(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function G(e){const t=$(e);return t?t.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function _(e){const t=$(e);return t?t.toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"short"}):"Unknown date"}function j(e){const t=String(e??"").trim();if(!t)return["other"];const r=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(n=>n.trim()).filter(Boolean);return r.length?r:[t]}function J(e){return W.get(String(e??"").trim().toLowerCase())??"other"}function Z(e){return j(e).map(t=>{const r=J(t),n=y[r]??y.other;return`<span class="service-chip service-chip-${r}">${l(n)}</span>`}).join("")}function Q(e){const r=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((r==null?void 0:r[1])??"").trim()}function X(e,t){const r=Q(e.message);return r||q[t%q.length]}function ee(e,t){var g;const r=String(e??""),n=new RegExp(`\\b${t}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,"i");return(((g=r.match(n))==null?void 0:g[1])??"").trim()}function te(e){return ee(e.message,"message")||String(e.message??"").trim()||"No customer message."}function ne(e){return String(e.phone??"").trim()||"No phone number"}function ae(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function re(e=""){return{title:L(e)||"Unknown vehicle",buildYear:""}}function oe(e,t,r){return e.length?e.map((n,g)=>{const h=String(n.id??""),k=l(String(n.completedAppointmentId??"")),s=t===h,c=l(G(n.appointmentAt??n.createdAt));l(_(n.appointmentAt??n.createdAt));const S=l(n.licensePlate&&n.licensePlate!=="UNKNOWN"?Y(n.licensePlate):"UNKNOWN"),f=l(X(n,g)),C=n.licensePlate?L(n.licensePlate):"",i=r.get(C)||re(n.licensePlate),u=i.buildYear&&i.buildYear!=="—"?`${i.title} (${i.buildYear})`:i.title,w=l(ne(n)),m=l(te(n)),v=n.werkbonCreated?"View Werkbon":"Create Werkbon",d=n.werkbonCreated?"button secondary":"button";return`
        <article class="request-card completed-card ${s?"is-expanded":""}" data-booking-card-id="${l(h)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${S}</span>
              <div class="request-info">
                <p class="request-name">${f}</p>
                <p class="request-vehicle">${u}</p>
                <div class="request-services">${Z(n.service)}</div>
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
                    <img src="/sidebar-icons/user.png" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${w}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="/sidebar-icons/text.png" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${m}</span>
                </div>
              </div>

              <div class="request-actions">
                <button class="${d}" type="button" data-completed-action="create-werkbon" data-booking-id="${l(h)}" data-completed-appointment-id="${k}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.33203V14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M1.33203 8H14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
${v}</button>
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
      `}).join(""):'<article class="request-card"><p class="muted">No completed appointments yet.</p></article>'}async function ie(e){var C;if(!e)return;const t=await M();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}B(t.activeGarage);const r=t.isAdmin?null:[(C=t.activeGarage)==null?void 0:C.id].filter(Boolean),{shell:n,contentArea:g,setUnreadEmailCount:h}=E({activePage:"completed",title:"Completed Appointments",headerNote:"Review completed jobs from your queue",userEmail:t.user.email,onLogout:P,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(n),g.innerHTML=`
    <section class="panel completed-board">
      <div id="completedList" class="request-list"></div>
    </section>
  `;const k=g.querySelector("#completedList");let s=[],c="";const S=new Map,f=()=>{c&&!s.some(i=>String(i.id)===c)&&(c=""),k.innerHTML=oe(s,c,S)};g.addEventListener("click",async i=>{const u=i.target instanceof Element?i.target:null;if(!u)return;const w=u.closest("[data-completed-toggle]");if(w instanceof HTMLElement){const d=String(w.dataset.completedToggle??"");c=c===d?"":d,f();return}const m=u.closest("[data-completed-action]");if(m instanceof HTMLElement){const d=String(m.dataset.completedAction??""),a=String(m.dataset.bookingId??"");if(!a)return;const o=s.find(b=>String(b.id)===a);if(!o)return;if(d==="create-werkbon"){const b=String(m.dataset.completedAppointmentId??"");if(b){let p="";try{p=String(await N({completedAppointmentId:b,garageId:o.garageId},{created:!0})??"")}catch(I){window.alert(I instanceof Error?I.message:"Unable to create a werkbon for this appointment.");return}if(!p){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}o.werkbonCreated=!0,f(),setTimeout(()=>{window.location.href="/werkbon.html"},300);return}let A="";try{A=String(await T(o)??"")}catch(p){window.alert(p instanceof Error?p.message:"Unable to create a werkbon for this appointment.");return}if(!A){window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");return}o.werkbonCreated=!0,f(),setTimeout(()=>{window.location.href="/werkbon.html"},300);return}if(d==="delete"){i.stopPropagation();const b=String(m.dataset.completedAppointmentId??"");if(!await z("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;try{b?await U({completedAppointmentId:b,garageId:o.garageId,bookingId:o.bookingId||o.id}):await D(o)}catch(p){window.alert(p instanceof Error?p.message:"Unable to delete the appointment.");return}s=s.filter(p=>String(p.id)!==a),c===a&&(c=""),f();return}return}const v=u.closest("[data-booking-card-id]");if(v instanceof HTMLElement&&!ae(u)){const d=String(v.dataset.bookingCardId??"");if(!d)return;c=c===d?"":d,f()}});try{const i=await H({garageIds:r}),u=R(i);h(u.unread);const w=await K({garageIds:r}),m=new Set(w.flatMap(a=>[a.id,a.bookingId,a.completedAppointmentId].filter(Boolean))),v=i.filter(F).filter(a=>!m.has(String(a.id??"")));s=[...w,...v].sort((a,o)=>new Date(o.appointmentAt??o.createdAt).getTime()-new Date(a.appointmentAt??a.createdAt).getTime());const d=new Set(s.map(a=>a.licensePlate).filter(a=>a&&a!=="UNKNOWN").map(a=>L(a)));for(const a of d)if(a&&!S.has(a))try{const o=await V(a);o&&S.set(a,o)}catch(o){console.error(`Failed to fetch vehicle for ${a}:`,o)}c=s[0]?String(s[0].id):"",f()}catch(i){k.innerHTML='<article class="request-card"><p class="muted">Unable to load completed appointments.</p></article>',h(0),console.error(i)}}const se=document.querySelector("#app");x();ie(se);
