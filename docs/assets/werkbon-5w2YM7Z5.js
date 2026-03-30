import{p as F,f as K,c as Z}from"./theme-Cm8RCokO.js";/* empty css                      *//* empty css                */import{e as X,a as ee,c as te,l as ae,g as ne,s as re,d as se}from"./branding-ObYa84jE.js";import{s as oe}from"./emailService-BZ0Xqht5.js";import{s as ie}from"./confirmDialog-DSEC2-zx.js";const C={draft:{label:"Draft",className:"werkbon-status-draft"},sent:{label:"Sent",className:"werkbon-status-sent"},paid:{label:"Paid",className:"werkbon-status-paid"}},le=new Map([["apk","apk"],["banden","banden"],["onderhoud","onderhoud"],["airco","airco"],["brakes","brakes"]]);function a(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function q(e){return Math.round(Number(e)*100)/100}function u(e){return`€${q(e).toFixed(2)}`}function H(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function W(e){const t=H(e);return t?t.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Unknown date"}function x(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function _(e){const t=String(e??"draft").trim().toLowerCase();return C[t]?t:"draft"}function G(e){if(!e)return{};if(typeof e=="object")return e;try{return JSON.parse(String(e))}catch{return{}}}function de(e){return String(e??"").split(",").map(t=>t.trim()).filter(Boolean)}function O(e){var I,g;const t=(e.parts??[]).map(k=>{const f=Number(k.quantity??0),d=Number(k.price??0);return{name:String(k.name??"Item"),quantity:f,price:d,total:q(f*d)}}),w=Number(((I=e.labour)==null?void 0:I.hours)??0),h=Number(((g=e.labour)==null?void 0:g.rate)??0),p=q(w*h),T=q(t.reduce((k,f)=>k+f.total,0)+p),i=q(T*.21),S=q(T+i);return{id:String(e.id??""),completedAppointmentId:String(e.completedAppointmentId??""),bookingId:String(e.bookingId??""),garageId:String(e.garageId??""),licensePlate:String(e.licensePlate??"UNKNOWN"),customerName:String(e.customerName??"Unknown customer"),carModel:String(e.carModel??"Unknown vehicle"),serviceTypes:Array.isArray(e.serviceTypes)?e.serviceTypes.map(String):["Other"],completedAt:e.completedAt,status:_(e.status),parts:t,labour:{hours:w,rate:h,total:p},summary:{subtotal:T,vat:i,total:S}}}function ce(e){const t=G(e.completion_notes),w=Array.isArray(t.service_types)?t.service_types.map(String):de(e.service),h=t.labour&&typeof t.labour=="object"?t.labour:{},p=Array.isArray(t.parts)?t.parts:[{name:"Service",quantity:1,price:0}];return O({id:String(e.id??""),completedAppointmentId:String(e.id??""),bookingId:String(e.booking_id??""),garageId:String(e.garage_id??""),licensePlate:String(e.license_plate??""),customerName:String(t.customer_name??t.customerName??"Onbekende klant"),carModel:String(t.car_model??t.carModel??"Voertuig"),serviceTypes:w.length?w:["Service"],completedAt:String(e.completed_at??e.created_at??new Date().toISOString()),status:String(t.status??"draft"),werkbonCreated:t.werkbon_created===!0,parts:p,labour:{hours:Number(h.hours??0),rate:Number(h.rate??0)}})}function ue(){const e=F("werkbon-detail.html");if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const t=document.createElement("link");t.rel="prefetch",t.as="document",t.href=e,document.head.append(t)}function V(e){const t=C[_(e)]??C.draft;return`<span class="status-chip ${t.className}">${t.label}</span>`}function pe(e){return e.map(t=>`<span class="service-chip service-chip-${le.get(String(t).trim().toLowerCase())??"other"}">${a(t)}</span>`).join("")}function be(e){const t=e.filter(i=>i.status!=="paid").reduce((i,S)=>i+S.summary.total,0),w=e.filter(i=>i.status==="sent").length,h=e.filter(i=>i.status==="draft").length,p=e.filter(i=>i.status==="paid").reduce((i,S)=>i+S.summary.total,0);return[{label:"Outstanding revenue",value:u(t),note:`${e.filter(i=>i.status!=="paid").length} open werkbon`},{label:"Ready to send",value:String(h),note:"Draft invoices waiting for customer delivery"},{label:"In payment flow",value:String(w),note:"Sent via SMS or WhatsApp"},{label:"Paid total",value:u(p),note:"Completed payments"}].map(i=>`
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${a(i.label)}</p>
          <strong class="werkbon-summary-value">${a(i.value)}</strong>
          <span class="metric-note">${a(i.note)}</span>
        </article>
      `).join("")}function me(e){return`
    <div class="request-divider"></div>
    <div class="request-expanded werkbon-expanded">
      <div class="request-actions werkbon-bottom-actions">
        <button class="button subtle" type="button" data-werkbon-action="view" data-werkbon-id="${a(e.id)}">View Werkbon</button>
        <button class="button subtle" type="button" data-werkbon-action="edit" data-werkbon-id="${a(e.id)}">Edit</button>
        <button class="button subtle werkbon-send-button" type="button" data-werkbon-action="send-customer" data-werkbon-id="${a(e.id)}">Send to Customer</button>
        <button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${a(e.id)}">Mark as Paid</button>
        <button class="button danger" type="button" data-werkbon-action="delete" data-werkbon-id="${a(e.id)}">Delete</button>
      </div>
    </div>
  `}function we(e,t){return e?`
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${a(x(e.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${a(e.customerName)} · ${a(W(e.completedAt))}</p>
          </div>
          <button class="icon-button" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details">
            <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M5 5l10 10M15 5L5 15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
            </svg>
          </button>
        </div>

        <div class="werkbon-drawer-scroll">
          <section class="werkbon-section request-contact-box werkbon-modal-meta">
            <div>
              <span class="werkbon-detail-label">Customer</span>
              <strong>${a(e.customerName)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Vehicle</span>
              <strong>${a(e.carModel)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Status</span>
              ${V(e.status)}
            </div>
          </section>

          ${t?`
                <section class="werkbon-section request-contact-box werkbon-edit-card">
                  <div class="werkbon-section-heading">
                    <span class="kicker">Edit Werkbon</span>
                    <p class="muted">Adjust status and labour totals.</p>
                  </div>
                  <div class="werkbon-edit-grid">
                    <label>
                      <span>Status</span>
                      <select data-werkbon-edit-status>
                        <option value="draft" ${e.status==="draft"?"selected":""}>Draft</option>
                        <option value="sent" ${e.status==="sent"?"selected":""}>Sent</option>
                        <option value="paid" ${e.status==="paid"?"selected":""}>Paid</option>
                      </select>
                    </label>
                    <label>
                      <span>Labour hours</span>
                      <input data-werkbon-edit-hours type="number" min="0" step="0.1" value="${a(String(e.labour.hours))}" />
                    </label>
                    <label>
                      <span>Price per hour</span>
                      <input data-werkbon-edit-rate type="number" min="0" step="0.01" value="${a(String(e.labour.rate))}" />
                    </label>
                  </div>
                </section>
              `:""}

          <div class="request-expanded-grid werkbon-detail-grid">
            <section class="request-contact-box werkbon-section">
              <div class="request-box-label">
                <span>Parts</span>
              </div>
              <div class="request-box-divider"></div>
              <div class="werkbon-line-items werkbon-line-items-head">
                <span>Product</span>
                <span>Qty</span>
                <span>Price</span>
                <span>Total</span>
              </div>
              <div class="werkbon-line-items">
                ${fe(e)}
              </div>
            </section>

            <section class="request-contact-box werkbon-section">
              <div class="request-box-label">
                <span>Labour</span>
              </div>
              <div class="request-box-divider"></div>
              <div class="werkbon-labour-grid">
                <div>
                  <span class="werkbon-detail-label">Hours</span>
                  <strong>${a(String(e.labour.hours))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Price per hour</span>
                  <strong>${a(u(e.labour.rate))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Total</span>
                  <strong>${a(u(e.labour.total))}</strong>
                </div>
              </div>
            </section>
          </div>

          <section class="request-contact-box werkbon-section werkbon-summary-section">
            <div class="request-box-label">
              <span>Summary</span>
            </div>
            <div class="request-box-divider"></div>
            <div class="werkbon-summary-breakdown">
              <div><span>Subtotal</span><strong>${a(u(e.summary.subtotal))}</strong></div>
              <div><span>VAT (21%)</span><strong>${a(u(e.summary.vat))}</strong></div>
              <div class="werkbon-summary-total"><span>Total price</span><strong>${a(u(e.summary.total))}</strong></div>
            </div>
          </section>
        </div>

        <div class="request-actions werkbon-bottom-actions werkbon-modal-actions">
          ${t?`
                <button class="button subtle" type="button" data-werkbon-action="cancel-edit" data-werkbon-id="${a(e.id)}">Cancel</button>
                <button class="button" type="button" data-werkbon-action="save-edit" data-werkbon-id="${a(e.id)}">Save Changes</button>
              `:`
                <button class="button subtle" type="button" data-werkbon-action="download-pdf" data-werkbon-id="${a(e.id)}">Download PDF</button>
                <button class="button subtle" type="button" data-werkbon-action="send-sms" data-werkbon-id="${a(e.id)}">Send via SMS</button>
                <button class="button subtle" type="button" data-werkbon-action="send-whatsapp" data-werkbon-id="${a(e.id)}">Send via WhatsApp</button>
                <button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${a(e.id)}">Mark as Paid</button>
              `}
        </div>
      </aside>
    </div>
  `:""}function z(e,t){return`
    <article class="request-card werkbon-card ${t?"is-expanded":""}" data-werkbon-row-id="${a(e.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          <span class="plate-chip">${a(x(e.licensePlate))}</span>
          <div class="request-info">
            <p class="request-name">${a(e.customerName)}</p>
            <p class="request-vehicle">${a(e.carModel)}</p>
            <div class="request-services">${pe(e.serviceTypes)}</div>
            <p class="werkbon-inline-meta">Completed ${a(W(e.completedAt))}</p>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${a(u(e.summary.total))}</strong>
          ${V(e.status)}
          </div>
          <button
            class="request-toggle ${t?"is-expanded":""}"
            type="button"
            data-werkbon-action="toggle"
            data-werkbon-id="${a(e.id)}"
            aria-expanded="${t?"true":"false"}"
            aria-label="${t?"Collapse werkbon actions":"Expand werkbon actions"}"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>

      ${t?me(e):""}
    </article>
  `}function ke(e){return`
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${a(e)}</p>
      </div>
    </div>
  `}function ge(e,t){return e.length?e.map(z).join(""):ke(t?"No invoices match the current filters.":"Completed appointments will appear here once a werkbon is created.")}function fe(e){return e.parts.map(t=>`
        <div class="werkbon-line-item">
          <span>${a(t.name)}</span>
          <span>${a(String(t.quantity))}</span>
          <span>${a(u(t.price))}</span>
          <strong>${a(u(t.total))}</strong>
        </div>
      `).join("")}function he(e){return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Werkbon ${a(x(e.licensePlate))}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 32px; color: #111827; }
          h1, h2, p { margin: 0; }
          .meta { margin-top: 12px; display: grid; gap: 6px; }
          .section { margin-top: 28px; }
          .row { display: grid; grid-template-columns: 2fr .6fr .8fr .8fr; gap: 12px; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
          .summary { margin-top: 20px; max-width: 280px; margin-left: auto; display: grid; gap: 10px; }
          .summary div { display: flex; justify-content: space-between; }
          .summary strong { font-size: 20px; }
        </style>
      </head>
      <body>
        <h1>Werkbon & Payments</h1>
        <div class="meta">
          <p><strong>License plate:</strong> ${a(x(e.licensePlate))}</p>
          <p><strong>Customer:</strong> ${a(e.customerName)}</p>
          <p><strong>Date:</strong> ${a(W(e.completedAt))}</p>
          <p><strong>Status:</strong> ${a(C[e.status].label)}</p>
        </div>
        <div class="section">
          <h2>Parts</h2>
          <div class="row"><strong>Product</strong><strong>Qty</strong><strong>Price</strong><strong>Total</strong></div>
          ${e.parts.map(t=>`<div class="row"><span>${a(t.name)}</span><span>${a(String(t.quantity))}</span><span>${a(u(t.price))}</span><span>${a(u(t.total))}</span></div>`).join("")}
        </div>
        <div class="section">
          <h2>Labour</h2>
          <p>${a(String(e.labour.hours))}h × ${a(u(e.labour.rate))} = ${a(u(e.labour.total))}</p>
        </div>
        <div class="summary">
          <div><span>Subtotal</span><span>${a(u(e.summary.subtotal))}</span></div>
          <div><span>VAT (21%)</span><span>${a(u(e.summary.vat))}</span></div>
          <div><span>Total</span><strong>${a(u(e.summary.total))}</strong></div>
        </div>
      </body>
    </html>
  `}function ve(e){const t=window.open("","_blank","width=960,height=720,noopener,noreferrer");return t?(t.document.open(),t.document.write(he(e)),t.document.close(),t.focus(),window.setTimeout(()=>{t.print()},180),!0):!1}async function ye(e){var j,R,U;if(!e)return;const t=await X();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}ee(t.activeGarage);const w=t.isAdmin?null:[(j=t.activeGarage)==null?void 0:j.id].filter(Boolean),{shell:h,contentArea:p,setUnreadEmailCount:T}=te({activePage:"werkbon",title:"Werkbon & Payments",headerNote:"Manage invoices and payment status",userEmail:t.user.email,onLogout:ae,garage:t.activeGarage,isAdmin:t.isAdmin});e.replaceChildren(h),ue(),p.innerHTML=`
    <section class="werkbon-page">
      <div id="werkbonNotice" class="werkbon-notice" hidden aria-live="polite"></div>

      <div class="werkbon-topbar">
        <label class="werkbon-filter-field werkbon-search-field">
          <input id="werkbonSearch" type="search" placeholder="Search license plate or customer" />
        </label>

        <label class="werkbon-filter-field werkbon-status-field">
          <select id="werkbonStatusFilter" aria-label="Filter werkbon by status">
            <option value="all">All statuses</option>
            <option value="draft">Draft</option>
            <option value="sent">Sent</option>
            <option value="paid">Paid</option>
          </select>
        </label>
      </div>

      <div id="werkbonSummary" class="werkbon-summary-grid"></div>

      <section class="panel werkbon-panel">
        <div id="werkbonList" class="werkbon-list"></div>
      </section>

      <div id="werkbonDrawer" class="werkbon-drawer"></div>
    </section>
  `;const i=p.querySelector("#werkbonNotice"),S=p.querySelector("#werkbonSummary"),I=p.querySelector("#werkbonList"),g=p.querySelector("#werkbonDrawer"),k=p.querySelector("#werkbonStatusFilter"),f=p.querySelector("#werkbonSearch");let d=[],m=((R=d[0])==null?void 0:R.id)??"",N="",v=!1,$="",B=0;const M=n=>{i instanceof HTMLElement&&(i.textContent=n,i.hidden=!n,window.clearTimeout(B),n&&(B=window.setTimeout(()=>{i.hidden=!0,i.textContent=""},2600)))},E=(n,r)=>{d=d.map(o=>o.id===n?O(r(o)):o)},P=(n,r=!1)=>{N=n,v=!0,$=r?n:"",b()},D=(n,r)=>{const o=d.find(l=>l.id===n);if(o){if(o.status==="paid"){M(`Invoice for ${x(o.licensePlate)} is already paid.`),P(n,!1);return}E(n,l=>({...l,status:"sent"})),M(`Werkbon sent to customer via ${r}.`),P(n,!1)}},Q=n=>{const r=d.find(o=>o.id===n);if(r){if(r.status==="paid"){M(`Invoice for ${x(r.licensePlate)} is already marked as paid.`),P(n,!1);return}E(n,o=>({...o,status:"paid"})),M(`Payment completed for ${x(r.licensePlate)}.`),P(n,!1)}},Y=n=>{const r=d.find(L=>L.id===n);if(!r||!(g instanceof HTMLElement))return;const o=g.querySelector("[data-werkbon-edit-status]"),l=g.querySelector("[data-werkbon-edit-hours]"),s=g.querySelector("[data-werkbon-edit-rate]");if(!(o instanceof HTMLSelectElement)||!(l instanceof HTMLInputElement)||!(s instanceof HTMLInputElement))return;const c=_(o.value),y=Math.max(0,Number(l.value||r.labour.hours)),A=Math.max(0,Number(s.value||r.labour.rate));E(n,L=>({...L,status:c,labour:{...L.labour,hours:y,rate:A}})),$="",N=n,v=!0,M("Werkbon updated."),b()},J=async n=>{const r=d.find(l=>l.id===n);if(!(!r||!await ie("Are you sure you want to delete this werkbon? This action cannot be undone.","Delete Werkbon"))){try{if(r.completedAppointmentId){if(!await re({completedAppointmentId:r.completedAppointmentId,garageId:r.garageId},{created:!1}))throw new Error("Unable to remove this werkbon from the werkbon list.")}else r.bookingId&&await se({id:r.bookingId,garageId:r.garageId})}catch(l){window.alert(l instanceof Error?l.message:"Unable to delete this werkbon.");return}d=d.filter(l=>l.id!==n),m===n&&(m=""),N===n&&(N="",v=!1,$=""),M("Werkbon deleted."),b()}},b=()=>{if(!(S instanceof HTMLElement)||!(I instanceof HTMLElement)||!(g instanceof HTMLElement))return;const n=k instanceof HTMLSelectElement?k.value:"all",r=f instanceof HTMLInputElement?f.value.trim().toLowerCase():"",o=[...d].sort((s,c)=>{var y,A;return((y=H(c.completedAt))==null?void 0:y.getTime())-((A=H(s.completedAt))==null?void 0:A.getTime())}).filter(s=>{const c=[s.licensePlate,s.customerName,s.carModel].join(" ").toLowerCase(),y=!r||c.includes(r),A=n==="all"||s.status===n;return y&&A});S.innerHTML=be(d),I.innerHTML=o.length?o.map(s=>z(s,m===s.id)).join(""):ge(o,!!(r||n!=="all"));const l=d.find(s=>s.id===N)??null;g.classList.toggle("is-open",v&&!!l),g.innerHTML=v&&l?we(l,$===l.id):""};p.addEventListener("click",n=>{const r=n.target instanceof Element?n.target:null;if(!r)return;const o=r.closest("[data-werkbon-action]");if(o instanceof HTMLElement){const s=String(o.dataset.werkbonAction??""),c=String(o.dataset.werkbonId??"");if(s==="close-modal"){v=!1,$="",b();return}if(s==="toggle"){m=m===c?"":c,b();return}if(s==="close-drawer"){m="",$="",b();return}if(!c)return;if(s==="view"){window.location.href=F(`werkbon-detail.html?id=${encodeURIComponent(c)}`);return}if(s==="edit"){P(c,!0);return}if(s==="cancel-edit"){$="",v=!1,b();return}if(s==="save-edit"){Y(c);return}if(s==="send-customer"){D(c,"SMS / WhatsApp");return}if(s==="send-sms"){D(c,"SMS");return}if(s==="send-whatsapp"){D(c,"WhatsApp");return}if(s==="mark-paid"){Q(c);return}if(s==="download-pdf"){const y=d.find(L=>L.id===c);if(!y)return;const A=ve(y);M(A?"Print dialog opened for PDF export.":"Allow pop-ups to export this werkbon as PDF.")}s==="delete"&&J(c);return}const l=r.closest("[data-werkbon-row-id]");if(l instanceof HTMLElement&&!r.closest("button, input, select, textarea, a")){const s=String(l.dataset.werkbonRowId??"");s&&(m=m===s?"":s,b())}}),p.addEventListener("keydown",n=>{const r=n.target instanceof HTMLElement?n.target:null;if(r){if((n.key==="Enter"||n.key===" ")&&r.matches("[data-werkbon-row-id]")){n.preventDefault();const o=String(r.dataset.werkbonRowId??"");o&&(m=m===o?"":o,b())}if(n.key==="Escape"&&v){v=!1,$="",b();return}n.key==="Escape"&&m&&(m="",b())}}),f==null||f.addEventListener("input",b),k==null||k.addEventListener("change",b);try{let n=[];try{n=await K({garageIds:w})}catch{}d=n.filter(l=>G(l.completion_notes).werkbon_created===!0).map(ce).sort((l,s)=>new Date(s.completedAt??0).getTime()-new Date(l.completedAt??0).getTime());const r=await ne({garageIds:w}),o=oe(r);T(o.unread),m=((U=d[0])==null?void 0:U.id)??""}catch(n){d=[],T(0),console.error(n)}b()}const Se=document.querySelector("#app");Z();ye(Se);
