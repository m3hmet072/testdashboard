import{e as ot,p as De,f as st,c as it}from"./theme-C3aD1XeO.js";/* empty css                      *//* empty css                */import{e as lt,a as ct,c as dt,l as ut,g as pt,s as bt,f as mt,d as kt}from"./branding-CB7Fbo0p.js";import{n as G,f as Ie}from"./rdwService-CFrMDQAa.js";import{s as qe}from"./confirmDialog-DSEC2-zx.js";const ie={draft:{label:"Draft",className:"werkbon-status-draft"},sent:{label:"Sent",className:"werkbon-status-sent"},paid:{label:"Paid",className:"werkbon-status-paid"}},ke={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},ft=new Map([["apk","apk"],["apk keuring","apk"],["keuring","apk"],["banden","banden"],["band","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"],["overig","other"],["overige","other"],["other","other"]]),Ne=["Voertuig","Klant","Onderdelen","Arbeid","Overzicht"],vt=["contant","iDEAL","Tikkie"],wt=[{label:"APK keuring",name:"APK keuring",price:45},{label:"Banden",name:"Banden",price:120},{label:"Remblokken voor",name:"Remblokken voor",price:85},{label:"Remblokken achter",name:"Remblokken achter",price:75},{label:"Olie",name:"Olie",price:35},{label:"Filters",name:"Filters",price:28},{label:"Accu",name:"Accu",price:95},{label:"Overige",name:"Overige",price:0}],gt="https://mkgfckxiusdcnqhethdy.supabase.co",ht="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",Y=ot(gt,ht);function He(){return{voertuig:{},klant:{},onderdelen:[],arbeid:{enabled:!1,uren:0,minuten:0,tarief:65},btw:21}}function S(e,t=0){const p=Number(e);return Number.isFinite(p)&&p>=0?p:t}function oe(e){const t=G(e).slice(0,6);return t?t.replace(/(.{2})(?=.)/g,"$1-"):""}function yt(e){var f,l,g,q,I,h,M;const t=String(((f=e==null?void 0:e.voertuig)==null?void 0:f.kenteken)??"").trim(),p=[(l=e==null?void 0:e.klant)==null?void 0:l.naam,(g=e==null?void 0:e.klant)==null?void 0:g.telefoon,(q=e==null?void 0:e.klant)==null?void 0:q.email,(I=e==null?void 0:e.klant)==null?void 0:I.omschrijving].some(w=>String(w??"").trim()),u=Array.isArray(e==null?void 0:e.onderdelen)&&e.onderdelen.some(w=>String((w==null?void 0:w.naam)??"").trim()||S(w==null?void 0:w.aantal)>0||S(w==null?void 0:w.prijs)>0),m=S((h=e==null?void 0:e.arbeid)==null?void 0:h.uren)*60+S((M=e==null?void 0:e.arbeid)==null?void 0:M.minuten);return!!(t||p||u||m>0)}function J(e){var h,M,w,B;const t=(Array.isArray(e.onderdelen)?e.onderdelen:[]).map(C=>{const K=S(C==null?void 0:C.aantal),v=S(C==null?void 0:C.prijs);return{naam:String((C==null?void 0:C.naam)??"").trim()||"Onderdeel",aantal:K,prijs:v,totaal:D(K*v)}}),p=D(t.reduce((C,K)=>C+K.totaal,0)),u=S((h=e.arbeid)==null?void 0:h.uren)+S((M=e.arbeid)==null?void 0:M.minuten)/60,m=S((w=e.arbeid)==null?void 0:w.tarief,65),f=(B=e.arbeid)!=null&&B.enabled?D(u*m):0,l=D(p+f),g=S(e.btw)>0?.21:0,q=D(l*g),I=D(l+q);return{onderdelenRows:t,onderdelenSubtotaal:p,labourHours:u,labourRate:m,arbeidTotaal:f,subtotaal:l,btwBedrag:q,totaal:I}}function z(e,t){return`<div class="werkbon-create-overview-row"><span>${s(e)}</span><strong>${s(t)}</strong></div>`}function se(e,t,p){return`<div class="werkbon-create-overview-row"><span>${s(t)}</span><strong data-create-total="${s(e)}">${s(p)}</strong></div>`}function _e(e){return Ne.map((t,p)=>{const u=p+1,m=u===e?"is-active":u<e?"is-done":"",f=u<e?"is-done":"",l=p<Ne.length-1?`<span class="werkbon-create-step-separator ${f}" aria-hidden="true"></span>`:"";return`<button class="werkbon-create-step ${m}" type="button" data-create-action="jump-step" data-step="${u}"><span>${u}.</span>${s(t)}</button>${l}`}).join("")}function Be({step:e,state:t,rdwStatus:p}){var I,h,M,w,B,C,K,v,T,V,_,O,W,y;const u=J(t),m=String(((I=t.voertuig)==null?void 0:I.title)??"").trim(),f=String(((h=t.voertuig)==null?void 0:h.buildYear)??"").trim(),l=String(((M=t.voertuig)==null?void 0:M.apkExpiryDate)??"").trim(),g=f?`${m||"Voertuig gegevens"} (${f})`:m||"Voertuig gegevens",q=p==="loading"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Kenteken controleren...</p>':p==="success"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-success">Kenteken gevonden</p>':p==="error"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-error">Kenteken niet gevonden</p>':'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Typ kenteken om te zoeken</p>';return e===1?`
      <div class="werkbon-create-body-step">
        <label class="werkbon-create-appointment-field">
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text" inputmode="text" maxlength="8" data-create-field="kenteken" value="${s(String(((w=t.voertuig)==null?void 0:w.kenteken)??""))}" placeholder="eg. 12-ABC-D1" required />
          ${q}
        </label>
        <div class="vehicle-preview-card werkbon-create-vehicle-preview" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${s(g)}</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">${s(f)}</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">${s(l)}</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">${s(String(((B=t.voertuig)==null?void 0:B.color)??""))}</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">${s(String(((C=t.voertuig)==null?void 0:C.fuel)??""))}</strong></span>
          </div>
        </div>
      </div>
    `:e===2?`
      <div class="werkbon-create-body-step">
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input type="text" data-klant-field="naam" value="${s(String(((K=t.klant)==null?void 0:K.naam)??""))}" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" />
          </label>
          <label>
            Phone number
            <input type="tel" data-klant-field="telefoon" value="${s(String(((v=t.klant)==null?void 0:v.telefoon)??""))}" autocomplete="tel" placeholder="eg. 0624987172" />
          </label>
        </div>
        <label class="werkbon-create-appointment-field">
          Email
          <input type="email" data-klant-field="email" value="${s(String(((T=t.klant)==null?void 0:T.email)??""))}" autocomplete="email" placeholder="eg. klant@email.com" />
        </label>
        <label class="werkbon-create-appointment-field">
          Omschrijving
          <textarea rows="4" data-klant-field="omschrijving" placeholder="Optioneel">${s(String(((V=t.klant)==null?void 0:V.omschrijving)??""))}</textarea>
        </label>
      </div>
    `:e===3?`
      <div class="werkbon-create-body-step werkbon-create-parts-step">
        <div class="werkbon-create-section-copy">
          <label class="werkbon-create-section-title">Onderdelen</label>
          <p class="werkbon-create-section-subtitle">Voeg onderdelen en materialen toe aan de werkbon</p>
        </div>
        <div class="werkbon-create-quick-parts">
          ${wt.map(E=>`<button class="werkbon-chip-button" type="button" data-create-action="quick-part" data-part-name="${s(E.name)}" data-part-price="${s(String(E.price))}">+ ${s(E.label)}</button>`).join("")}
        </div>
        ${t.onderdelen.length?`
            <div class="werkbon-create-parts-panel">
              <div class="werkbon-create-parts-header" role="presentation">
                <div>Omschrijving</div>
                <div>Prijs</div>
                <div>Aantal</div>
                <div>Totaal</div>
                <div></div>
              </div>
              <div class="werkbon-create-parts-list">
                ${t.onderdelen.map((E,H)=>`
                  <div class="werkbon-create-part-card">
                    <div class="werkbon-part-cell werkbon-part-cell-name">
                      <input type="text" class="werkbon-part-input" data-part-field="naam" data-part-index="${H}" value="${s(String(E.naam??""))}" placeholder="Onderdeel naam" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-price">
                      <div class="werkbon-currency-input">
                        <span class="werkbon-currency-symbol">€</span>
                        <input type="number" class="werkbon-part-input werkbon-part-input-price" min="0" step="0.01" data-part-field="prijs" data-part-index="${H}" value="${s(String(E.prijs??0))}" />
                      </div>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-quantity">
                      <input type="number" class="werkbon-part-input" min="1" step="1" data-part-field="aantal" data-part-index="${H}" value="${s(String(E.aantal??1))}" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-total">
                      <strong data-part-total-index="${H}">${s(k(D(S(E.aantal,1)*S(E.prijs))))}</strong>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-remove">
                      <button class="werkbon-remove-button" type="button" data-create-action="remove-part" data-part-index="${H}" aria-label="Verwijder onderdeel" title="Verwijder">
                        <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                          <path d="M5 5l10 10M15 5L5 15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}
        <button class="werkbon-add-part-button" type="button" data-create-action="add-manual-part">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <path d="M10 4v12M4 10h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path>
          </svg>
          <span>Onderdeel toevoegen</span>
        </button>
        <div class="werkbon-create-parts-subtotal">
          <span>Subtotaal onderdelen</span>
          <strong data-parts-subtotal-value="true">${s(k(u.onderdelenSubtotaal))}</strong>
        </div>
      </div>
    `:e===4?`
      <div class="werkbon-create-body-step werkbon-create-grid-two">
        <label class="werkbon-create-toggle">
          <input type="checkbox" data-arbeid-field="enabled" ${t.arbeid.enabled?"checked":""} />
          <span>Arbeid inschakelen</span>
        </label>
        <label class="werkbon-create-field"><span>Uren</span><input type="number" min="0" step="1" data-arbeid-field="uren" value="${s(String(t.arbeid.uren))}" ${t.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>Minuten</span><input type="number" min="0" max="59" step="1" data-arbeid-field="minuten" value="${s(String(t.arbeid.minuten))}" ${t.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>Tarief p/u</span><input type="number" min="0" step="0.01" data-arbeid-field="tarief" value="${s(String(t.arbeid.tarief))}" ${t.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>BTW</span>
          <select data-create-field="btw">
            <option value="21" ${S(t.btw)>0?"selected":""}>21%</option>
            <option value="0" ${S(t.btw)===0?"selected":""}>Geen BTW</option>
          </select>
        </label>
        <div class="werkbon-create-calculation-card">
          ${se("arbeid","Arbeid",k(u.arbeidTotaal))}
          ${se("subtotaal","Subtotaal",k(u.subtotaal))}
          ${se("btw","BTW",k(u.btwBedrag))}
          ${se("totaal","Totaal",k(u.totaal))}
        </div>
      </div>
    `:`
    <div class="werkbon-create-body-step werkbon-create-overview">
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Voertuig</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="1">Bewerken</button></div>
        ${z("Kenteken",String(((_=t.voertuig)==null?void 0:_.kenteken)??"-"))}
        ${z("Voertuig",m||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Klant</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="2">Bewerken</button></div>
        ${z("Naam",String(((O=t.klant)==null?void 0:O.naam)??"-")||"-")}
        ${z("Email",String(((W=t.klant)==null?void 0:W.email)??"-")||"-")}
        ${z("Telefoon",String(((y=t.klant)==null?void 0:y.telefoon)??"-")||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Onderdelen / Arbeid</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="3">Bewerken</button></div>
        ${z("Onderdelen",k(u.onderdelenSubtotaal))}
        ${z("Arbeid",k(u.arbeidTotaal))}
        ${z("BTW",k(u.btwBedrag))}
        ${z("Totaal",k(u.totaal))}
      </div>
    </div>
  `}async function St(){var e,t;if((e=window.jspdf)!=null&&e.jsPDF)return window.jspdf.jsPDF;if(await new Promise((p,u)=>{const m=document.querySelector('script[data-js-pdf-cdn="true"]');if(m){m.addEventListener("load",()=>p(),{once:!0}),m.addEventListener("error",()=>u(new Error("Kon jsPDF niet laden.")),{once:!0});return}const f=document.createElement("script");f.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",f.async=!0,f.dataset.jsPdfCdn="true",f.onload=()=>p(),f.onerror=()=>u(new Error("Kon jsPDF niet laden.")),document.head.append(f)}),!((t=window.jspdf)!=null&&t.jsPDF))throw new Error("jsPDF is niet beschikbaar.");return window.jspdf.jsPDF}function $t(e=""){return{title:G(e)||"Voertuig",buildYear:""}}function Tt(e){const t=String(e||"").trim();if(!t)return["other"];const p=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(u=>u.trim()).filter(Boolean);return p.length?p:[t]}function Mt(e){return ft.get(String(e||"").trim().toLowerCase())||"other"}function Oe(e){const t=String(e??"").trim();if(!t)return{key:"other",label:ke.other};const p=t.toLowerCase(),u=[{probe:"apk",key:"apk"},{probe:"band",key:"banden"},{probe:"airco",key:"airco"},{probe:"occasion",key:"occasions"},{probe:"brake",key:"brakes"},{probe:"onderhoud",key:"onderhoud"},{probe:"service",key:"onderhoud"},{probe:"overig",key:"other"}],m=Mt(t);let f=m;if(m==="other"){const l=u.find(g=>p.includes(g.probe));l&&(f=l.key)}return f==="other"&&!["other","overig","overige"].includes(p)?{key:f,label:t}:{key:f,label:ke[f]??ke.other}}function Et(e){const t=Array.isArray(e==null?void 0:e.onderdelen)?e.onderdelen:[],p=new Set,u=[];for(const m of t){const f=String((m==null?void 0:m.naam)??"").trim();if(!f)continue;const l=Oe(f),g=`${l.key}:${l.label.toLowerCase()}`;p.has(g)||(p.add(g),u.push(l.label))}return u.length?u:["Onderhoud"]}function Lt(e){return Tt(e).map(t=>{const{key:p,label:u}=Oe(t);return`<span class="service-chip service-chip-${p}">${s(u)}</span>`}).join("")}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function D(e){return Math.round(Number(e)*100)/100}function k(e){return`€${D(e).toFixed(2)}`}function fe(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function We(e){const t=fe(e);return t?t.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Unknown date"}function Q(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function ve(e){const t=String(e??"draft").trim().toLowerCase();return ie[t]?t:"draft"}function Fe(e){if(!e)return{};if(typeof e=="object")return e;try{return JSON.parse(String(e))}catch{return{}}}function xt(e){return String(e??"").split(",").map(t=>t.trim()).filter(Boolean)}function Re(e){var q,I;const t=(e.parts??[]).map(h=>{const M=Number(h.quantity??0),w=Number(h.price??0);return{name:String(h.name??"Item"),quantity:M,price:w,total:D(M*w)}}),p=Number(((q=e.labour)==null?void 0:q.hours)??0),u=Number(((I=e.labour)==null?void 0:I.rate)??0),m=D(p*u),f=D(t.reduce((h,M)=>h+M.total,0)+m),l=D(f*.21),g=D(f+l);return{id:String(e.id??""),completedAppointmentId:String(e.completedAppointmentId??""),bookingId:String(e.bookingId??""),garageId:String(e.garageId??""),licensePlate:String(e.licensePlate??"UNKNOWN"),customerName:String(e.customerName??"Unknown customer"),carModel:String(e.carModel??"Unknown vehicle"),serviceTypes:Array.isArray(e.serviceTypes)?e.serviceTypes.map(String):["Other"],completedAt:e.completedAt,status:ve(e.status),parts:t,labour:{hours:p,rate:u,total:m},summary:{subtotal:f,vat:l,total:g}}}function je(e){const t=Fe(e.completion_notes),p=Array.isArray(t.service_types)?t.service_types.map(String):xt(e.service),u=t.labour&&typeof t.labour=="object"?t.labour:{},m=Array.isArray(t.parts)?t.parts:[{name:"Service",quantity:1,price:0}];return Re({id:String(e.id??""),completedAppointmentId:String(e.id??""),bookingId:String(e.booking_id??""),garageId:String(e.garage_id??""),licensePlate:String(e.license_plate??""),customerName:String(t.customer_name??t.customerName??"Onbekende klant"),carModel:String(t.car_model||t.carModel||"Voertuig"),serviceTypes:p.length?p:["Service"],completedAt:String(e.completed_at??e.created_at??new Date().toISOString()),status:String(t.status??"draft"),werkbonCreated:t.werkbon_created===!0,parts:m,labour:{hours:Number(u.hours??0),rate:Number(u.rate??0)}})}function Ct(){const e=De("werkbon-detail.html");if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const t=document.createElement("link");t.rel="prefetch",t.as="document",t.href=e,document.head.append(t)}function Ke(e){const t=ie[ve(e)]??ie.draft;return`<span class="status-chip ${t.className}">${t.label}</span>`}function At(e){const t=e.filter(l=>l.status!=="paid").reduce((l,g)=>l+g.summary.total,0),p=e.filter(l=>l.status==="sent").length,u=e.filter(l=>l.status==="draft").length,m=e.filter(l=>l.status==="paid").reduce((l,g)=>l+g.summary.total,0);return[{label:"Outstanding revenue",value:k(t),note:`${e.filter(l=>l.status!=="paid").length} open werkbon`},{label:"Ready to send",value:String(u),note:"Draft invoices waiting for customer delivery"},{label:"In payment flow",value:String(p),note:"Sent via SMS or WhatsApp"},{label:"Paid total",value:k(m),note:"Completed payments"}].map(l=>`
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${s(l.label)}</p>
          <strong class="werkbon-summary-value">${s(l.value)}</strong>
          <span class="metric-note">${s(l.note)}</span>
        </article>
      `).join("")}function Pt(e){return`
    <div class="request-divider"></div>
    <div class="request-expanded werkbon-expanded">
      <div class="request-actions werkbon-bottom-actions">
        <button class="button subtle" type="button" data-werkbon-action="view" data-werkbon-id="${s(e.id)}">View Werkbon</button>
        <button class="button subtle" type="button" data-werkbon-action="edit" data-werkbon-id="${s(e.id)}">Edit</button>
        <button class="button subtle werkbon-send-button" type="button" data-werkbon-action="send-customer" data-werkbon-id="${s(e.id)}">Send to Customer</button>
        <button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${s(e.id)}">Mark as Paid</button>
        <button class="button danger" type="button" data-werkbon-action="delete" data-werkbon-id="${s(e.id)}">Delete</button>
      </div>
    </div>
  `}function It(e,t){return e?`
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${s(Q(e.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${s(e.customerName)} · ${s(We(e.completedAt))}</p>
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
              <strong>${s(e.customerName)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Vehicle</span>
              <strong>${s(e.carModel)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Status</span>
              ${Ke(e.status)}
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
                      <input data-werkbon-edit-hours type="number" min="0" step="0.1" value="${s(String(e.labour.hours))}" />
                    </label>
                    <label>
                      <span>Price per hour</span>
                      <input data-werkbon-edit-rate type="number" min="0" step="0.01" value="${s(String(e.labour.rate))}" />
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
                ${Dt(e)}
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
                  <strong>${s(String(e.labour.hours))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Price per hour</span>
                  <strong>${s(k(e.labour.rate))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Total</span>
                  <strong>${s(k(e.labour.total))}</strong>
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
              <div><span>Subtotal</span><strong>${s(k(e.summary.subtotal))}</strong></div>
              <div><span>VAT (21%)</span><strong>${s(k(e.summary.vat))}</strong></div>
              <div class="werkbon-summary-total"><span>Total price</span><strong>${s(k(e.summary.total))}</strong></div>
            </div>
          </section>
        </div>

        <div class="request-actions werkbon-bottom-actions werkbon-modal-actions">
          ${t?`
                <button class="button subtle" type="button" data-werkbon-action="cancel-edit" data-werkbon-id="${s(e.id)}">Cancel</button>
                <button class="button" type="button" data-werkbon-action="save-edit" data-werkbon-id="${s(e.id)}">Save Changes</button>
              `:`
                <button class="button subtle" type="button" data-werkbon-action="download-pdf" data-werkbon-id="${s(e.id)}">Download PDF</button>
                <button class="button subtle" type="button" data-werkbon-action="send-sms" data-werkbon-id="${s(e.id)}">Send via SMS</button>
                <button class="button subtle" type="button" data-werkbon-action="send-whatsapp" data-werkbon-id="${s(e.id)}">Send via WhatsApp</button>
                <button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${s(e.id)}">Mark as Paid</button>
              `}
        </div>
      </aside>
    </div>
  `:""}function ze(e,t){return`
    <article class="request-card werkbon-card ${t?"is-expanded":""}" data-werkbon-row-id="${s(e.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          <span class="plate-chip">${s(Q(e.licensePlate))}</span>
          <div class="request-info">
            <p class="request-name">${s(e.customerName)}</p>
            <p class="request-vehicle">${s(e.carModel)}</p>
            <div class="request-services">${Lt(Array.isArray(e.serviceTypes)?e.serviceTypes.join(", "):e.serviceTypes)}</div>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${s(k(e.summary.total))}</strong>
          ${Ke(e.status)}
          </div>
          <button
            class="request-toggle ${t?"is-expanded":""}"
            type="button"
            data-werkbon-action="toggle"
            data-werkbon-id="${s(e.id)}"
            aria-expanded="${t?"true":"false"}"
            aria-label="${t?"Collapse werkbon actions":"Expand werkbon actions"}"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>

      ${t?Pt(e):""}
    </article>
  `}function Ve(e){return`
    <div class="werkbon-payment-overlay" role="presentation">
      <div class="werkbon-payment-dialog" role="dialog" aria-modal="true" aria-labelledby="werkbonPaymentTitle">
        <h3 id="werkbonPaymentTitle">Kies betaalmethode</h3>
        <div class="werkbon-payment-grid">
          ${vt.map(t=>`
            <button
              class="button subtle werkbon-payment-method ${e===t?"is-active":""}"
              type="button"
              data-create-action="select-payment"
              data-payment-method="${s(t)}"
            >${s(t)}</button>
          `).join("")}
        </div>
        <div class="werkbon-payment-actions">
          <button class="button subtle" type="button" data-create-action="close-payment">Sluiten</button>
        </div>
      </div>
    </div>
  `}function qt({isOpen:e,step:t,state:p,rdwStatus:u,rdwError:m,selectedPaymentMethod:f,isSaving:l,paymentModalOpen:g}){if(!e)return"";const I=t===1&&!(u==="success");return`
    <div class="werkbon-create-modal ${e?"is-open":""}" role="presentation">
      <div class="werkbon-create-shadow" data-create-action="attempt-close" aria-hidden="true">
        <section class="werkbon-create-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonCreateTitle">
          <header class="werkbon-create-header">
            <div>
              
              <h2 id="werkbonCreateTitle">Werkbon Maken</h2>
            </div>
            <button class="icon-button" type="button" data-create-action="attempt-close" aria-label="Sluiten">&times;</button>
          </header>

          <nav class="werkbon-create-stepper" aria-label="Werkbon stappen">${_e(t)}</nav>

          <div class="werkbon-create-content">${Be({step:t,state:p,rdwStatus:u})}</div>

          <footer class="werkbon-create-actions">
            <div class="werkbon-create-actions-left">
              <button class="button subtle" type="button" data-create-action="prev-step" ${t===1?"disabled":""}>Vorige</button>
            </div>
            <div class="werkbon-create-actions-right">
              ${t<5?`<button class="button subtle" type="button" data-create-action="next-step" ${I?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${l?"disabled":""}>${l?"Opslaan...":"Opslaan"}</button>`}
            </div>
          </footer>

          <div data-create-saving-host="true">${l?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':""}</div>
        </section>

        <div data-create-payment-host="true">${g?Ve(f):""}</div>
      </div>
    </div>
  `}function Nt({step:e,rdwStatus:t,isSaving:p}){const u=e===1&&t!=="success";return{left:`<button class="button subtle" type="button" data-create-action="prev-step" ${e===1?"disabled":""}>Vorige</button>`,right:e<5?`<button class="button subtle" type="button" data-create-action="next-step" ${u?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${p?"disabled":""}>${p?"Opslaan...":"Opslaan"}</button>`}}function Ht(e){return`
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${s(e)}</p>
      </div>
    </div>
  `}function jt(e,t){return e.length?e.map(ze).join(""):Ht(t?"No invoices match the current filters.":"Completed appointments will appear here once a werkbon is created.")}function Dt(e){return e.parts.map(t=>`
        <div class="werkbon-line-item">
          <span>${s(t.name)}</span>
          <span>${s(String(t.quantity))}</span>
          <span>${s(k(t.price))}</span>
          <strong>${s(k(t.total))}</strong>
        </div>
      `).join("")}function _t(e){return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Werkbon ${s(Q(e.licensePlate))}</title>
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
          <p><strong>License plate:</strong> ${s(Q(e.licensePlate))}</p>
          <p><strong>Customer:</strong> ${s(e.customerName)}</p>
          <p><strong>Date:</strong> ${s(We(e.completedAt))}</p>
          <p><strong>Status:</strong> ${s(ie[e.status].label)}</p>
        </div>
        <div class="section">
          <h2>Parts</h2>
          <div class="row"><strong>Product</strong><strong>Qty</strong><strong>Price</strong><strong>Total</strong></div>
          ${e.parts.map(t=>`<div class="row"><span>${s(t.name)}</span><span>${s(String(t.quantity))}</span><span>${s(k(t.price))}</span><span>${s(k(t.total))}</span></div>`).join("")}
        </div>
        <div class="section">
          <h2>Labour</h2>
          <p>${s(String(e.labour.hours))}h × ${s(k(e.labour.rate))} = ${s(k(e.labour.total))}</p>
        </div>
        <div class="summary">
          <div><span>Subtotal</span><span>${s(k(e.summary.subtotal))}</span></div>
          <div><span>VAT (21%)</span><span>${s(k(e.summary.vat))}</span></div>
          <div><span>Total</span><strong>${s(k(e.summary.total))}</strong></div>
        </div>
      </body>
    </html>
  `}function Bt(e){const t=window.open("","_blank","width=960,height=720,noopener,noreferrer");return t?(t.document.open(),t.document.write(_t(e)),t.document.close(),t.focus(),window.setTimeout(()=>{t.print()},180),!0):!1}async function Ot(e){var $e,Te,Me;if(!e)return;document.body.style.overflow="";const t=await lt();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}ct(t.activeGarage);const p=t.isAdmin?null:[($e=t.activeGarage)==null?void 0:$e.id].filter(Boolean),{shell:u,contentArea:m,setUnreadEmailCount:f}=dt({activePage:"werkbon",title:"Werkbon & Payments",headerNote:"Manage invoices and payment status",userEmail:t.user.email,onLogout:ut,garage:t.activeGarage,isAdmin:t.isAdmin}),l=document.createElement("div");l.id="werkbonCreateModalHost",e.replaceChildren(u,l),Ct(),m.innerHTML=`
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

        <div class="werkbon-create-trigger-wrap">
          <button id="werkbonCreateTrigger" class="button" type="button">＋ Werkbon Maken</button>
        </div>
      </div>

      <div id="werkbonSummary" class="werkbon-summary-grid"></div>

      <section class="panel werkbon-panel">
        <div id="werkbonList" class="werkbon-list"></div>
      </section>

      <div id="werkbonDrawer" class="werkbon-drawer"></div>
    </section>
  `;const g=m.querySelector("#werkbonNotice"),q=m.querySelector("#werkbonSummary"),I=m.querySelector("#werkbonList"),h=m.querySelector("#werkbonDrawer"),M=m.querySelector("#werkbonCreateTrigger"),w=m.querySelector("#werkbonStatusFilter"),B=m.querySelector("#werkbonSearch"),C=new URLSearchParams(window.location.search),K=String(C.get("action")??"").toLowerCase()==="create";let v=[],T=((Te=v[0])==null?void 0:Te.id)??"",V="",_=!1,O="",W=!1,y=1,E=!1,H="",Z=!1,L="idle",U="",F=0,ae=0,d=He(),we=0;const le=new Map,A=n=>{g instanceof HTMLElement&&(g.textContent=n,g.hidden=!n,window.clearTimeout(we),n&&(we=window.setTimeout(()=>{g.hidden=!0,g.textContent=""},2600)))},Ue=()=>{F&&(window.clearTimeout(F),F=0),ae+=1,y=1,E=!1,H="",Z=!1,L="idle",U="",d=He()},N=({forceMount:n=!1,refreshContent:r=!1}={})=>{if(!(l instanceof HTMLElement))return;if(!W){l.innerHTML&&(l.innerHTML=""),document.body.style.overflow="";return}if(!((n?null:l.querySelector(".werkbon-create-modal"))instanceof HTMLElement)){l.innerHTML=qt({isOpen:W,step:y,state:d,rdwStatus:L,rdwError:U,selectedPaymentMethod:H,isSaving:Z,paymentModalOpen:E}),document.body.style.overflow="hidden";return}const i=l.querySelector(".werkbon-create-stepper");if(i instanceof HTMLElement&&(i.innerHTML=_e(y)),r){const j=l.querySelector(".werkbon-create-content");j instanceof HTMLElement&&(j.innerHTML=Be({step:y,state:d,rdwStatus:L}))}const o=l.querySelector('[data-create-action="prev-step"]');o instanceof HTMLButtonElement&&(o.disabled=y===1);const c=l.querySelector(".werkbon-create-actions-left"),b=l.querySelector(".werkbon-create-actions-right");if(c instanceof HTMLElement&&b instanceof HTMLElement){const j=Nt({step:y,rdwStatus:L,isSaving:Z});c.innerHTML=j.left,b.innerHTML=j.right}const $=l.querySelector('[data-create-saving-host="true"]');$ instanceof HTMLElement&&($.innerHTML=Z?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':"");const x=l.querySelector('[data-create-payment-host="true"]');x instanceof HTMLElement&&(x.innerHTML=E?Ve(H):""),document.body.style.overflow="hidden"},ce=({rerenderPage:n=!1}={})=>{if(W=!1,Ue(),n){P();return}N()},de=async()=>{if(!yt(d)){ce();return}await qe("Er staan niet-opgeslagen gegevens in deze werkbon. Weet je zeker dat je wilt sluiten?","Werkbon sluiten")&&ce()},Ge=async n=>{if(!Y||!n)return Date.now()%1e5;const{data:r,error:a}=await Y.from("garages").select("invoice_sequence").eq("id",n).maybeSingle();if(a)throw a;const o=Math.max(1e3,Number((r==null?void 0:r.invoice_sequence)??1e3))+1,{error:c}=await Y.from("garages").update({invoice_sequence:o}).eq("id",n);if(c)throw c;return o},Ye=async()=>{var ne,Ee,Le,xe,Ce,Ae,Pe;const n=(ne=t.activeGarage)==null?void 0:ne.id;if(!n)throw new Error("Geen garage gevonden voor deze gebruiker.");const r=G(((Ee=d.voertuig)==null?void 0:Ee.kenteken)??"");if(r.length<6)throw new Error("Voer eerst een geldig kenteken in.");if(L!=="success")throw new Error("Haal eerst RDW voertuiggegevens op.");const a=J(d),i=await Ge(n),c=`wb-${String(Date.now()).slice(-4)}`,b=`F-${String(i).padStart(6,"0")}`,$=new Date().toISOString(),x=String(((Le=d.klant)==null?void 0:Le.naam)??"").trim()||"Onbekende klant",j=String(((xe=d.voertuig)==null?void 0:xe.title)??"").trim()||"Voertuig",R=Et(d),re={werkbon_id:c,status:"draft",werkbon_created:!0,customer_name:x,customer_email:String(((Ce=d.klant)==null?void 0:Ce.email)??"").trim(),customer_phone:String(((Ae=d.klant)==null?void 0:Ae.telefoon)??"").trim(),car_model:j,service_types:R,km_stand:0,vat_enabled:S(d.btw)>0,description:String(((Pe=d.klant)==null?void 0:Pe.omschrijving)??"").trim(),internal_note:"",invoice_number:b,paid_at:H?new Date().toISOString().slice(0,10):null,completed_at:$,parts:a.onderdelenRows.map(me=>({name:me.naam,quantity:me.aantal,price:me.prijs})),labour:{hours:a.labourHours,rate:a.labourRate},totals:{subtotal:a.subtotaal,vat:a.btwBedrag,total:a.totaal},payment_method:H};return{garageId:n,kenteken:r,completedAt:$,completionNotes:re,serviceSummary:R.join(", "),werkbonId:c,invoiceNumber:b}},Je=async()=>{if(!Y)throw new Error("Supabase is niet geconfigureerd.");Z=!0,N();try{const n=await Ye(),{data:r,error:a}=await Y.from("completed_appointments").insert({garage_id:n.garageId,booking_id:null,completed_at:n.completedAt,appointment_date:n.completedAt.slice(0,10),appointment_time:n.completedAt.slice(11,19),license_plate:n.kenteken,service:n.serviceSummary||"Onderhoud",completion_notes:JSON.stringify(n.completionNotes)}).select("id, booking_id, garage_id, completed_at, created_at, license_plate, service, completion_notes").single();if(a)throw a;const i=je(r);v=[i,...v],T=i.id,A(`Werkbon ${n.werkbonId} opgeslagen als ${n.invoiceNumber}.`),ce()}finally{Z=!1,P()}},Qe=async()=>{var $,x,j;const n=await St(),r=J(d),a=new n({unit:"pt",format:"a4"}),i=String((($=d.voertuig)==null?void 0:$.kenteken)??"-"),o=String(((x=d.klant)==null?void 0:x.naam)??"Onbekende klant"),c=String(((j=d.klant)==null?void 0:j.omschrijving)??"").trim();let b=56;a.setFont("helvetica","bold"),a.setFontSize(18),a.text("Werkbon / Factuur",42,b),b+=26,a.setFont("helvetica","normal"),a.setFontSize(11),a.text(`Datum: ${new Date().toLocaleDateString("nl-NL")}`,42,b),b+=16,a.text(`Kenteken: ${i}`,42,b),b+=16,a.text(`Klant: ${o}`,42,b),b+=16,c&&(a.text(`Omschrijving: ${c}`,42,b,{maxWidth:520}),b+=22),a.setFont("helvetica","bold"),a.text("Onderdelen",42,b),b+=16,a.setFont("helvetica","normal"),r.onderdelenRows.forEach(R=>{a.text(`${R.naam}  x${R.aantal}  ${k(R.prijs)}  ${k(R.totaal)}`,42,b),b+=14}),b+=12,a.text(`Arbeid: ${k(r.arbeidTotaal)}`,42,b),b+=14,a.text(`Subtotaal: ${k(r.subtotaal)}`,42,b),b+=14,a.text(`BTW: ${k(r.btwBedrag)}`,42,b),b+=14,a.setFont("helvetica","bold"),a.text(`Totaal: ${k(r.totaal)}`,42,b),a.save(`werkbon-${G(i)||"nieuw"}.pdf`)},Ze=async()=>{var i,o,c;if(!Y)throw new Error("Supabase is niet geconfigureerd.");const n=String(((i=d.klant)==null?void 0:i.email)??"").trim();if(!n)throw new Error("Geen e-mailadres beschikbaar.");const r=J(d),{error:a}=await Y.functions.invoke("send-werkbon-email",{body:{to:n,template:"werkbon_factuur_nl",subject:`Werkbon ${oe(((o=d.voertuig)==null?void 0:o.kenteken)??"")}`,customerName:String(((c=d.klant)==null?void 0:c.naam)??"Klant"),total:r.totaal}});if(a)throw a},Xe=()=>{var i,o,c;const n=String(((i=d.klant)==null?void 0:i.telefoon)??"").replace(/[^0-9]/g,""),r=J(d),a=`Hallo ${String(((o=d.klant)==null?void 0:o.naam)??"")}, uw werkbon (${oe(((c=d.voertuig)==null?void 0:c.kenteken)??"")}) staat klaar. Totaal: ${k(r.totaal)}.`;window.open(`https://wa.me/${encodeURIComponent(n)}?text=${encodeURIComponent(a)}`,"_blank","noopener,noreferrer")},ee=()=>{const n=l.querySelector("#vehicleLookupStatus");if(n instanceof HTMLElement){if(n.classList.remove("is-success","is-error"),L==="loading"){n.textContent="Kenteken controleren...";return}if(L==="success"){n.textContent="Kenteken gevonden",n.classList.add("is-success");return}if(L==="error"){n.textContent="Kenteken niet gevonden",n.classList.add("is-error");return}n.textContent="Typ kenteken om te zoeken"}},X=()=>{const n=l.querySelector('[data-create-action="next-step"]');if(n instanceof HTMLButtonElement){if(y===1){n.disabled=L!=="success";return}n.disabled=y===5}},ge=()=>{var x,j,R,re,ne;const n=l.querySelector("#vehiclePreviewTitle"),r=l.querySelector("#vehiclePreviewBuildYear"),a=l.querySelector("#vehiclePreviewApk"),i=l.querySelector("#vehiclePreviewColor"),o=l.querySelector("#vehiclePreviewFuel");if(!(n instanceof HTMLElement)||!(r instanceof HTMLElement)||!(a instanceof HTMLElement)||!(i instanceof HTMLElement)||!(o instanceof HTMLElement))return;const c=String(((x=d.voertuig)==null?void 0:x.title)??"").trim(),b=String(((j=d.voertuig)==null?void 0:j.buildYear)??"").trim(),$=b?`${c||"Voertuig gegevens"} (${b})`:c||"Voertuig gegevens";n.textContent=$,r.textContent=b,a.textContent=String(((R=d.voertuig)==null?void 0:R.apkExpiryDate)??"").trim(),i.textContent=String(((re=d.voertuig)==null?void 0:re.color)??"").trim(),o.textContent=String(((ne=d.voertuig)==null?void 0:ne.fuel)??"").trim()},et=()=>{const n=J(d),r=l.querySelector("[data-parts-subtotal-value]");r instanceof HTMLElement&&(r.textContent=k(n.onderdelenSubtotaal)),l.querySelectorAll("[data-part-total-index]").forEach(i=>{if(!(i instanceof HTMLElement))return;const o=Number(i.getAttribute("data-part-total-index")??-1),c=n.onderdelenRows[o];c&&(i.textContent=k(c.totaal))})},ue=()=>{const n=J(d),r={arbeid:k(n.arbeidTotaal),subtotaal:k(n.subtotaal),btw:k(n.btwBedrag),totaal:k(n.totaal)};l.querySelectorAll("[data-create-total]").forEach(i=>{if(!(i instanceof HTMLElement))return;const o=String(i.getAttribute("data-create-total")??"");o in r&&(i.textContent=r[o])})},tt=()=>{var a;const n=!!((a=d.arbeid)!=null&&a.enabled);l.querySelectorAll("[data-arbeid-field]").forEach(i=>{if(i instanceof HTMLInputElement){if(i.getAttribute("data-arbeid-field")==="enabled"){i.checked=n;return}i.disabled=!n}}),ue()},he=async({showShortInputError:n=!1}={})=>{var i;const r=G(((i=d.voertuig)==null?void 0:i.kenteken)??"");if(r.length<6){L="idle",U=n?"Voer minimaal 6 tekens in voor het kenteken.":"",ee(),X();return}const a=++ae;L="loading",U="",ee(),X();try{const o=await Ie(r);if(a!==ae)return;if(!o){L="error",U="Geen RDW voertuig gevonden voor dit kenteken.",d.voertuig={...d.voertuig,title:"",buildYear:"",apkExpiryDate:"",color:"",fuel:""},ee(),ge(),X();return}d.voertuig={...d.voertuig,kenteken:oe(r),...o},L="success",U="",ee(),ge(),X()}catch{if(a!==ae)return;L="error",U="RDW service is momenteel niet beschikbaar.",ee(),X()}},pe=(n,r)=>{v=v.map(a=>a.id===n?Re(r(a)):a)},te=(n,r=!1)=>{V=n,_=!0,O=r?n:"",P()},be=(n,r)=>{const a=v.find(i=>i.id===n);if(a){if(a.status==="paid"){A(`Invoice for ${Q(a.licensePlate)} is already paid.`),te(n,!1);return}pe(n,i=>({...i,status:"sent"})),A(`Werkbon sent to customer via ${r}.`),te(n,!1)}},nt=n=>{const r=v.find(a=>a.id===n);if(r){if(r.status==="paid"){A(`Invoice for ${Q(r.licensePlate)} is already marked as paid.`),te(n,!1);return}pe(n,a=>({...a,status:"paid"})),A(`Payment completed for ${Q(r.licensePlate)}.`),te(n,!1)}},at=n=>{const r=v.find(x=>x.id===n);if(!r||!(h instanceof HTMLElement))return;const a=h.querySelector("[data-werkbon-edit-status]"),i=h.querySelector("[data-werkbon-edit-hours]"),o=h.querySelector("[data-werkbon-edit-rate]");if(!(a instanceof HTMLSelectElement)||!(i instanceof HTMLInputElement)||!(o instanceof HTMLInputElement))return;const c=ve(a.value),b=Math.max(0,Number(i.value||r.labour.hours)),$=Math.max(0,Number(o.value||r.labour.rate));pe(n,x=>({...x,status:c,labour:{...x.labour,hours:b,rate:$}})),O="",V=n,_=!0,A("Werkbon updated."),P()},rt=async n=>{const r=v.find(i=>i.id===n);if(!(!r||!await qe("Are you sure you want to delete this werkbon? This action cannot be undone.","Delete Werkbon"))){try{if(r.completedAppointmentId){if(!await mt({completedAppointmentId:r.completedAppointmentId,garageId:r.garageId},{created:!1}))throw new Error("Unable to remove this werkbon from the werkbon list.")}else r.bookingId&&await kt({id:r.bookingId,garageId:r.garageId})}catch(i){window.alert(i instanceof Error?i.message:"Unable to delete this werkbon.");return}v=v.filter(i=>i.id!==n),T===n&&(T=""),V===n&&(V="",_=!1,O=""),A("Werkbon deleted."),P()}},P=()=>{if(!(q instanceof HTMLElement)||!(I instanceof HTMLElement)||!(h instanceof HTMLElement)||!(l instanceof HTMLElement))return;const n=w instanceof HTMLSelectElement?w.value:"all",r=B instanceof HTMLInputElement?B.value.trim().toLowerCase():"",a=[...v].sort((o,c)=>{var b,$;return((b=fe(c.completedAt))==null?void 0:b.getTime())-(($=fe(o.completedAt))==null?void 0:$.getTime())}).filter(o=>{const c=[o.licensePlate,o.customerName,o.carModel].join(" ").toLowerCase(),b=!r||c.includes(r),$=n==="all"||o.status===n;return b&&$});q.innerHTML=At(v),I.innerHTML=a.length?a.map(o=>ze(o,T===o.id)).join(""):jt(a,!!(r||n!=="all"));const i=v.find(o=>o.id===V)??null;h.classList.toggle("is-open",_&&!!i),h.innerHTML=_&&i?It(i,O===i.id):"",N()};M==null||M.addEventListener("click",()=>{W=!0,y=1,N({forceMount:!0,refreshContent:!0})});const ye=async n=>{const r=n.closest("[data-create-action]");if(!(r instanceof HTMLElement))return!1;const a=String(r.dataset.createAction??"");if(a==="attempt-close")return r.classList.contains("werkbon-create-shadow")&&n.closest(".werkbon-create-panel")||await de(),!0;if(a==="jump-step"){const i=Number(r.dataset.step??y);return y=Math.min(5,Math.max(1,i)),E=!1,N({refreshContent:!0}),!0}if(a==="prev-step")return y=Math.max(1,y-1),N({refreshContent:!0}),!0;if(a==="next-step")return y===1&&L!=="success"&&(F&&(window.clearTimeout(F),F=0),await he({showShortInputError:!0})),y===1&&L!=="success"?(A("Rond eerst de RDW validatie af."),!0):(y=Math.min(5,y+1),N({refreshContent:!0}),!0);if(a==="remove-part"){const i=Number(r.dataset.partIndex??-1);return Number.isFinite(i)&&i>=0&&(d.onderdelen.splice(i,1),N({refreshContent:!0})),!0}if(a==="quick-part")return d.onderdelen.push({naam:String(r.dataset.partName??"Onderdeel"),aantal:1,prijs:S(r.dataset.partPrice,0)}),N({refreshContent:!0}),!0;if(a==="add-manual-part")return d.onderdelen.push({naam:"",aantal:1,prijs:0}),N({refreshContent:!0}),!0;if(a==="open-payment")return E=!0,N(),!0;if(a==="close-payment")return E=!1,N(),!0;if(a==="select-payment")return H=String(r.dataset.paymentMethod??""),E=!1,A(`Betaalmethode gekozen: ${H}.`),N(),!0;if(a==="save-werkbon"){try{await Je()}catch(i){A(i instanceof Error?i.message:"Opslaan mislukt.")}return!0}if(a==="create-pdf"){try{await Qe(),A("PDF gegenereerd.")}catch(i){A(i instanceof Error?i.message:"PDF genereren mislukt.")}return!0}if(a==="email-werkbon"){try{await Ze(),A("Werkbon e-mail verstuurd.")}catch(i){A(i instanceof Error?i.message:"E-mail verzenden mislukt.")}return!0}return a==="whatsapp-werkbon"?(Xe(),A("WhatsApp bericht geopend."),!0):!1},Se=n=>{if(!(n instanceof HTMLElement)||!W)return!1;if(n.matches("[data-create-field='kenteken']")){if(n instanceof HTMLInputElement){const r=oe(n.value);n.value=r,d.voertuig={...d.voertuig,kenteken:r},L="idle",U="",F&&(window.clearTimeout(F),F=0);const a=G(r),i=l.querySelector("#vehicleLookupStatus");i instanceof HTMLElement&&(i.classList.remove("is-success","is-error"),i.textContent=a.length>=6?"Kenteken controleren...":"Typ kenteken om te zoeken"),X(),a.length>=6&&(F=window.setTimeout(()=>{F=0,he()},420))}return!0}if(n.matches("[data-create-field='btw']"))return n instanceof HTMLSelectElement&&(d.btw=S(n.value,21),ue()),!0;if(n.matches("[data-klant-field]")){const r=String(n.getAttribute("data-klant-field")??"");if(!r)return!0;const a=n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement?n.value:"";return d.klant={...d.klant,[r]:a},!0}if(n.matches("[data-arbeid-field]")){const r=String(n.getAttribute("data-arbeid-field")??"");if(!r)return!0;const a={...d.arbeid};return r==="enabled"&&n instanceof HTMLInputElement?(a.enabled=n.checked,d.arbeid=a,tt(),!0):(n instanceof HTMLInputElement&&(a[r]=S(n.value,r==="tarief"?65:0)),d.arbeid=a,ue(),!0)}if(n.matches("[data-part-field]")){const r=Number(n.getAttribute("data-part-index")??-1),a=String(n.getAttribute("data-part-field")??"");if(!Number.isFinite(r)||r<0||!a)return!0;const o={...d.onderdelen[r]??{naam:"",aantal:1,prijs:0}};return a==="naam"&&(o.naam=n instanceof HTMLInputElement?n.value:""),a==="aantal"&&(o.aantal=n instanceof HTMLInputElement?S(n.value,1):1),a==="prijs"&&(o.prijs=n instanceof HTMLInputElement?S(n.value,0):0),d.onderdelen[r]=o,et(),!0}return!1};l.addEventListener("click",async n=>{const r=n.target instanceof Element?n.target:null;r&&await ye(r)}),l.addEventListener("input",n=>{const r=n.target;r instanceof HTMLElement&&Se(r)}),l.addEventListener("keydown",n=>{n.key==="Escape"&&W&&(n.preventDefault(),de())}),m.addEventListener("click",async n=>{const r=n.target instanceof Element?n.target:null;if(!r||await ye(r))return;const a=r.closest("[data-werkbon-action]");if(a instanceof HTMLElement){const o=String(a.dataset.werkbonAction??""),c=String(a.dataset.werkbonId??"");if(o==="close-modal"){_=!1,O="",P();return}if(o==="toggle"){T=T===c?"":c,P();return}if(o==="close-drawer"){T="",O="",P();return}if(!c)return;if(o==="view"){window.location.href=De(`werkbon-detail.html?id=${encodeURIComponent(c)}`);return}if(o==="edit"){te(c,!0);return}if(o==="cancel-edit"){O="",_=!1,P();return}if(o==="save-edit"){at(c);return}if(o==="send-customer"){be(c,"SMS / WhatsApp");return}if(o==="send-sms"){be(c,"SMS");return}if(o==="send-whatsapp"){be(c,"WhatsApp");return}if(o==="mark-paid"){nt(c);return}if(o==="download-pdf"){const b=v.find(x=>x.id===c);if(!b)return;const $=Bt(b);A($?"Print dialog opened for PDF export.":"Allow pop-ups to export this werkbon as PDF.")}o==="delete"&&rt(c);return}const i=r.closest("[data-werkbon-row-id]");if(i instanceof HTMLElement&&!r.closest("button, input, select, textarea, a")){const o=String(i.dataset.werkbonRowId??"");o&&(T=T===o?"":o,P())}}),m.addEventListener("keydown",n=>{const r=n.target instanceof HTMLElement?n.target:null;if(r){if(n.key==="Escape"&&W){n.preventDefault(),de();return}if((n.key==="Enter"||n.key===" ")&&r.matches("[data-werkbon-row-id]")){n.preventDefault();const a=String(r.dataset.werkbonRowId??"");a&&(T=T===a?"":a,P())}if(n.key==="Escape"&&_){_=!1,O="",P();return}n.key==="Escape"&&T&&(T="",P())}}),m.addEventListener("input",n=>{const r=n.target;r instanceof HTMLElement&&Se(r)}),B==null||B.addEventListener("input",P),w==null||w.addEventListener("change",P);try{let n=[];try{n=await st({garageIds:p})}catch{}v=n.filter(o=>Fe(o.completion_notes).werkbon_created===!0).map(je).sort((o,c)=>new Date(c.completedAt??0).getTime()-new Date(o.completedAt??0).getTime());const r=new Set(v.map(o=>o.licensePlate).filter(o=>o&&o!=="UNKNOWN").map(o=>G(o)));for(const o of r)if(o&&!le.has(o))try{const c=await Ie(o);c&&le.set(o,c)}catch(c){console.error(`Failed to fetch vehicle for ${o}:`,c)}v=v.map(o=>{const c=G(o.licensePlate),b=le.get(c)||$t(c);return{...o,carModel:b.title+(b.buildYear?` (${b.buildYear})`:"")||o.carModel}});const a=await pt({garageIds:p}),i=bt(a);f(i.unread),T=((Me=v[0])==null?void 0:Me.id)??""}catch(n){v=[],f(0),console.error(n)}P(),K&&(W=!0,y=1,N({forceMount:!0,refreshContent:!0}))}const Wt=document.querySelector("#app");it();Ot(Wt);
