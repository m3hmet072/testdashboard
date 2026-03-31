import{e as at,p as He,f as rt,c as ot}from"./theme-D1OhZick.js";/* empty css                      *//* empty css                */import{e as st,a as it,c as lt,l as ct,g as dt,s as ut,d as pt}from"./branding-rmtIPR3U.js";import{s as bt}from"./emailService-BZ0Xqht5.js";import{n as U,f as Ce}from"./rdwService-CFrMDQAa.js";import{s as Pe}from"./confirmDialog-DSEC2-zx.js";const oe={draft:{label:"Draft",className:"werkbon-status-draft"},sent:{label:"Sent",className:"werkbon-status-sent"},paid:{label:"Paid",className:"werkbon-status-paid"}},be={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},mt=new Map([["apk","apk"],["apk keuring","apk"],["keuring","apk"],["banden","banden"],["band","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"],["overig","other"],["overige","other"],["other","other"]]),Ie=["Voertuig","Klant","Onderdelen","Arbeid","Overzicht"],kt=["contant","iDEAL","Tikkie"],ft=[{label:"APK keuring",name:"APK keuring",price:45},{label:"Banden",name:"Banden",price:120},{label:"Remblokken voor",name:"Remblokken voor",price:85},{label:"Remblokken achter",name:"Remblokken achter",price:75},{label:"Olie",name:"Olie",price:35},{label:"Filters",name:"Filters",price:28},{label:"Accu",name:"Accu",price:95},{label:"Overige",name:"Overige",price:0}],vt="https://mkgfckxiusdcnqhethdy.supabase.co",wt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",G=at(vt,wt);function qe(){return{voertuig:{},klant:{},onderdelen:[],arbeid:{enabled:!1,uren:0,minuten:0,tarief:65},btw:21}}function T(e,t=0){const p=Number(e);return Number.isFinite(p)&&p>=0?p:t}function ae(e){const t=U(e).slice(0,6);return t?t.replace(/(.{2})(?=.)/g,"$1-"):""}function gt(e){var f,l,g,I,P,y,E;const t=String(((f=e==null?void 0:e.voertuig)==null?void 0:f.kenteken)??"").trim(),p=[(l=e==null?void 0:e.klant)==null?void 0:l.naam,(g=e==null?void 0:e.klant)==null?void 0:g.telefoon,(I=e==null?void 0:e.klant)==null?void 0:I.email,(P=e==null?void 0:e.klant)==null?void 0:P.omschrijving].some(w=>String(w??"").trim()),u=Array.isArray(e==null?void 0:e.onderdelen)&&e.onderdelen.some(w=>String((w==null?void 0:w.naam)??"").trim()||T(w==null?void 0:w.aantal)>0||T(w==null?void 0:w.prijs)>0),m=T((y=e==null?void 0:e.arbeid)==null?void 0:y.uren)*60+T((E=e==null?void 0:e.arbeid)==null?void 0:E.minuten);return!!(t||p||u||m>0)}function Y(e){var y,E,w,D;const t=(Array.isArray(e.onderdelen)?e.onderdelen:[]).map(v=>{const S=T(v==null?void 0:v.aantal),_=T(v==null?void 0:v.prijs);return{naam:String((v==null?void 0:v.naam)??"").trim()||"Onderdeel",aantal:S,prijs:_,totaal:j(S*_)}}),p=j(t.reduce((v,S)=>v+S.totaal,0)),u=T((y=e.arbeid)==null?void 0:y.uren)+T((E=e.arbeid)==null?void 0:E.minuten)/60,m=T((w=e.arbeid)==null?void 0:w.tarief,65),f=(D=e.arbeid)!=null&&D.enabled?j(u*m):0,l=j(p+f),g=T(e.btw)>0?.21:0,I=j(l*g),P=j(l+I);return{onderdelenRows:t,onderdelenSubtotaal:p,labourHours:u,labourRate:m,arbeidTotaal:f,subtotaal:l,btwBedrag:I,totaal:P}}function z(e,t){return`<div class="werkbon-create-overview-row"><span>${s(e)}</span><strong>${s(t)}</strong></div>`}function re(e,t,p){return`<div class="werkbon-create-overview-row"><span>${s(t)}</span><strong data-create-total="${s(e)}">${s(p)}</strong></div>`}function je(e){return Ie.map((t,p)=>{const u=p+1,m=u===e?"is-active":u<e?"is-done":"",f=u<e?"is-done":"",l=p<Ie.length-1?`<span class="werkbon-create-step-separator ${f}" aria-hidden="true"></span>`:"";return`<button class="werkbon-create-step ${m}" type="button" data-create-action="jump-step" data-step="${u}"><span>${u}.</span>${s(t)}</button>${l}`}).join("")}function De({step:e,state:t,rdwStatus:p}){var P,y,E,w,D,v,S,_,q,B,W,$,F,R;const u=Y(t),m=String(((P=t.voertuig)==null?void 0:P.title)??"").trim(),f=String(((y=t.voertuig)==null?void 0:y.buildYear)??"").trim(),l=String(((E=t.voertuig)==null?void 0:E.apkExpiryDate)??"").trim(),g=f?`${m||"Voertuig gegevens"} (${f})`:m||"Voertuig gegevens",I=p==="loading"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Kenteken controleren...</p>':p==="success"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-success">Kenteken gevonden</p>':p==="error"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-error">Kenteken niet gevonden</p>':'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Typ kenteken om te zoeken</p>';return e===1?`
      <div class="werkbon-create-body-step">
        <label class="werkbon-create-appointment-field">
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text" inputmode="text" maxlength="8" data-create-field="kenteken" value="${s(String(((w=t.voertuig)==null?void 0:w.kenteken)??""))}" placeholder="eg. 12-ABC-D1" required />
          ${I}
        </label>
        <div class="vehicle-preview-card werkbon-create-vehicle-preview" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${s(g)}</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">${s(f)}</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">${s(l)}</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">${s(String(((D=t.voertuig)==null?void 0:D.color)??""))}</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">${s(String(((v=t.voertuig)==null?void 0:v.fuel)??""))}</strong></span>
          </div>
        </div>
      </div>
    `:e===2?`
      <div class="werkbon-create-body-step">
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input type="text" data-klant-field="naam" value="${s(String(((S=t.klant)==null?void 0:S.naam)??""))}" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" />
          </label>
          <label>
            Phone number
            <input type="tel" data-klant-field="telefoon" value="${s(String(((_=t.klant)==null?void 0:_.telefoon)??""))}" autocomplete="tel" placeholder="eg. 0624987172" />
          </label>
        </div>
        <label class="werkbon-create-appointment-field">
          Email
          <input type="email" data-klant-field="email" value="${s(String(((q=t.klant)==null?void 0:q.email)??""))}" autocomplete="email" placeholder="eg. klant@email.com" />
        </label>
        <label class="werkbon-create-appointment-field">
          Omschrijving
          <textarea rows="4" data-klant-field="omschrijving" placeholder="Optioneel">${s(String(((B=t.klant)==null?void 0:B.omschrijving)??""))}</textarea>
        </label>
      </div>
    `:e===3?`
      <div class="werkbon-create-body-step werkbon-create-parts-step">
        <div class="werkbon-create-section-copy">
          <label class="werkbon-create-section-title">Onderdelen</label>
          <p class="werkbon-create-section-subtitle">Voeg onderdelen en materialen toe aan de werkbon</p>
        </div>
        <div class="werkbon-create-quick-parts">
          ${ft.map(x=>`<button class="werkbon-chip-button" type="button" data-create-action="quick-part" data-part-name="${s(x.name)}" data-part-price="${s(String(x.price))}">+ ${s(x.label)}</button>`).join("")}
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
                ${t.onderdelen.map((x,h)=>`
                  <div class="werkbon-create-part-card">
                    <div class="werkbon-part-cell werkbon-part-cell-name">
                      <input type="text" class="werkbon-part-input" data-part-field="naam" data-part-index="${h}" value="${s(String(x.naam??""))}" placeholder="Onderdeel naam" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-price">
                      <div class="werkbon-currency-input">
                        <span class="werkbon-currency-symbol">€</span>
                        <input type="number" class="werkbon-part-input werkbon-part-input-price" min="0" step="0.01" data-part-field="prijs" data-part-index="${h}" value="${s(String(x.prijs??0))}" />
                      </div>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-quantity">
                      <input type="number" class="werkbon-part-input" min="1" step="1" data-part-field="aantal" data-part-index="${h}" value="${s(String(x.aantal??1))}" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-total">
                      <strong data-part-total-index="${h}">${s(k(j(T(x.aantal,1)*T(x.prijs))))}</strong>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-remove">
                      <button class="werkbon-remove-button" type="button" data-create-action="remove-part" data-part-index="${h}" aria-label="Verwijder onderdeel" title="Verwijder">
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
            <option value="21" ${T(t.btw)>0?"selected":""}>21%</option>
            <option value="0" ${T(t.btw)===0?"selected":""}>Geen BTW</option>
          </select>
        </label>
        <div class="werkbon-create-calculation-card">
          ${re("arbeid","Arbeid",k(u.arbeidTotaal))}
          ${re("subtotaal","Subtotaal",k(u.subtotaal))}
          ${re("btw","BTW",k(u.btwBedrag))}
          ${re("totaal","Totaal",k(u.totaal))}
        </div>
      </div>
    `:`
    <div class="werkbon-create-body-step werkbon-create-overview">
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Voertuig</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="1">Bewerken</button></div>
        ${z("Kenteken",String(((W=t.voertuig)==null?void 0:W.kenteken)??"-"))}
        ${z("Voertuig",m||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Klant</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="2">Bewerken</button></div>
        ${z("Naam",String((($=t.klant)==null?void 0:$.naam)??"-")||"-")}
        ${z("Email",String(((F=t.klant)==null?void 0:F.email)??"-")||"-")}
        ${z("Telefoon",String(((R=t.klant)==null?void 0:R.telefoon)??"-")||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Onderdelen / Arbeid</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="3">Bewerken</button></div>
        ${z("Onderdelen",k(u.onderdelenSubtotaal))}
        ${z("Arbeid",k(u.arbeidTotaal))}
        ${z("BTW",k(u.btwBedrag))}
        ${z("Totaal",k(u.totaal))}
      </div>
    </div>
  `}async function ht(){var e,t;if((e=window.jspdf)!=null&&e.jsPDF)return window.jspdf.jsPDF;if(await new Promise((p,u)=>{const m=document.querySelector('script[data-js-pdf-cdn="true"]');if(m){m.addEventListener("load",()=>p(),{once:!0}),m.addEventListener("error",()=>u(new Error("Kon jsPDF niet laden.")),{once:!0});return}const f=document.createElement("script");f.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",f.async=!0,f.dataset.jsPdfCdn="true",f.onload=()=>p(),f.onerror=()=>u(new Error("Kon jsPDF niet laden.")),document.head.append(f)}),!((t=window.jspdf)!=null&&t.jsPDF))throw new Error("jsPDF is niet beschikbaar.");return window.jspdf.jsPDF}function yt(e=""){return{title:U(e)||"Voertuig",buildYear:""}}function St(e){const t=String(e||"").trim();if(!t)return["other"];const p=t.split(t.includes(",")?/,/g:/\+|\/|&| and /gi).map(u=>u.trim()).filter(Boolean);return p.length?p:[t]}function $t(e){return mt.get(String(e||"").trim().toLowerCase())||"other"}function _e(e){const t=String(e??"").trim();if(!t)return{key:"other",label:be.other};const p=t.toLowerCase(),u=[{probe:"apk",key:"apk"},{probe:"band",key:"banden"},{probe:"airco",key:"airco"},{probe:"occasion",key:"occasions"},{probe:"brake",key:"brakes"},{probe:"onderhoud",key:"onderhoud"},{probe:"service",key:"onderhoud"},{probe:"overig",key:"other"}],m=$t(t);let f=m;if(m==="other"){const l=u.find(g=>p.includes(g.probe));l&&(f=l.key)}return f==="other"&&!["other","overig","overige"].includes(p)?{key:f,label:t}:{key:f,label:be[f]??be.other}}function Tt(e){const t=Array.isArray(e==null?void 0:e.onderdelen)?e.onderdelen:[],p=new Set,u=[];for(const m of t){const f=String((m==null?void 0:m.naam)??"").trim();if(!f)continue;const l=_e(f),g=`${l.key}:${l.label.toLowerCase()}`;p.has(g)||(p.add(g),u.push(l.label))}return u.length?u:["Onderhoud"]}function Mt(e){return St(e).map(t=>{const{key:p,label:u}=_e(t);return`<span class="service-chip service-chip-${p}">${s(u)}</span>`}).join("")}function s(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function j(e){return Math.round(Number(e)*100)/100}function k(e){return`€${j(e).toFixed(2)}`}function me(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}function Be(e){const t=me(e);return t?t.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Unknown date"}function J(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function ke(e){const t=String(e??"draft").trim().toLowerCase();return oe[t]?t:"draft"}function Oe(e){if(!e)return{};if(typeof e=="object")return e;try{return JSON.parse(String(e))}catch{return{}}}function Et(e){return String(e??"").split(",").map(t=>t.trim()).filter(Boolean)}function We(e){var I,P;const t=(e.parts??[]).map(y=>{const E=Number(y.quantity??0),w=Number(y.price??0);return{name:String(y.name??"Item"),quantity:E,price:w,total:j(E*w)}}),p=Number(((I=e.labour)==null?void 0:I.hours)??0),u=Number(((P=e.labour)==null?void 0:P.rate)??0),m=j(p*u),f=j(t.reduce((y,E)=>y+E.total,0)+m),l=j(f*.21),g=j(f+l);return{id:String(e.id??""),completedAppointmentId:String(e.completedAppointmentId??""),bookingId:String(e.bookingId??""),garageId:String(e.garageId??""),licensePlate:String(e.licensePlate??"UNKNOWN"),customerName:String(e.customerName??"Unknown customer"),carModel:String(e.carModel??"Unknown vehicle"),serviceTypes:Array.isArray(e.serviceTypes)?e.serviceTypes.map(String):["Other"],completedAt:e.completedAt,status:ke(e.status),parts:t,labour:{hours:p,rate:u,total:m},summary:{subtotal:f,vat:l,total:g}}}function Ne(e){const t=Oe(e.completion_notes),p=Array.isArray(t.service_types)?t.service_types.map(String):Et(e.service),u=t.labour&&typeof t.labour=="object"?t.labour:{},m=Array.isArray(t.parts)?t.parts:[{name:"Service",quantity:1,price:0}];return We({id:String(e.id??""),completedAppointmentId:String(e.id??""),bookingId:String(e.booking_id??""),garageId:String(e.garage_id??""),licensePlate:String(e.license_plate??""),customerName:String(t.customer_name??t.customerName??"Onbekende klant"),carModel:String(t.car_model||t.carModel||"Voertuig"),serviceTypes:p.length?p:["Service"],completedAt:String(e.completed_at??e.created_at??new Date().toISOString()),status:String(t.status??"draft"),werkbonCreated:t.werkbon_created===!0,parts:m,labour:{hours:Number(u.hours??0),rate:Number(u.rate??0)}})}function Lt(){const e=He("werkbon-detail.html");if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const t=document.createElement("link");t.rel="prefetch",t.as="document",t.href=e,document.head.append(t)}function Fe(e){const t=oe[ke(e)]??oe.draft;return`<span class="status-chip ${t.className}">${t.label}</span>`}function xt(e){const t=e.filter(l=>l.status!=="paid").reduce((l,g)=>l+g.summary.total,0),p=e.filter(l=>l.status==="sent").length,u=e.filter(l=>l.status==="draft").length,m=e.filter(l=>l.status==="paid").reduce((l,g)=>l+g.summary.total,0);return[{label:"Outstanding revenue",value:k(t),note:`${e.filter(l=>l.status!=="paid").length} open werkbon`},{label:"Ready to send",value:String(u),note:"Draft invoices waiting for customer delivery"},{label:"In payment flow",value:String(p),note:"Sent via SMS or WhatsApp"},{label:"Paid total",value:k(m),note:"Completed payments"}].map(l=>`
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${s(l.label)}</p>
          <strong class="werkbon-summary-value">${s(l.value)}</strong>
          <span class="metric-note">${s(l.note)}</span>
        </article>
      `).join("")}function At(e){return`
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
  `}function Ct(e,t){return e?`
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${s(J(e.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${s(e.customerName)} · ${s(Be(e.completedAt))}</p>
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
              ${Fe(e.status)}
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
                ${Ht(e)}
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
  `:""}function Re(e,t){return`
    <article class="request-card werkbon-card ${t?"is-expanded":""}" data-werkbon-row-id="${s(e.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          <span class="plate-chip">${s(J(e.licensePlate))}</span>
          <div class="request-info">
            <p class="request-name">${s(e.customerName)}</p>
            <p class="request-vehicle">${s(e.carModel)}</p>
            <div class="request-services">${Mt(Array.isArray(e.serviceTypes)?e.serviceTypes.join(", "):e.serviceTypes)}</div>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${s(k(e.summary.total))}</strong>
          ${Fe(e.status)}
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

      ${t?At(e):""}
    </article>
  `}function Ke(e){return`
    <div class="werkbon-payment-overlay" role="presentation">
      <div class="werkbon-payment-dialog" role="dialog" aria-modal="true" aria-labelledby="werkbonPaymentTitle">
        <h3 id="werkbonPaymentTitle">Kies betaalmethode</h3>
        <div class="werkbon-payment-grid">
          ${kt.map(t=>`
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
  `}function Pt({isOpen:e,step:t,state:p,rdwStatus:u,rdwError:m,selectedPaymentMethod:f,isSaving:l,paymentModalOpen:g}){if(!e)return"";const P=t===1&&!(u==="success");return`
    <div class="werkbon-create-modal ${e?"is-open":""}" role="presentation">
      <div class="werkbon-create-shadow" data-create-action="attempt-close" aria-hidden="true">
        <section class="werkbon-create-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonCreateTitle">
          <header class="werkbon-create-header">
            <div>
              
              <h2 id="werkbonCreateTitle">Werkbon Maken</h2>
            </div>
            <button class="icon-button" type="button" data-create-action="attempt-close" aria-label="Sluiten">&times;</button>
          </header>

          <nav class="werkbon-create-stepper" aria-label="Werkbon stappen">${je(t)}</nav>

          <div class="werkbon-create-content">${De({step:t,state:p,rdwStatus:u})}</div>

          <footer class="werkbon-create-actions">
            <div class="werkbon-create-actions-left">
              <button class="button subtle" type="button" data-create-action="prev-step" ${t===1?"disabled":""}>Vorige</button>
            </div>
            <div class="werkbon-create-actions-right">
              ${t<5?`<button class="button subtle" type="button" data-create-action="next-step" ${P?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${l?"disabled":""}>${l?"Opslaan...":"Opslaan"}</button>`}
            </div>
          </footer>

          <div data-create-saving-host="true">${l?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':""}</div>
        </section>

        <div data-create-payment-host="true">${g?Ke(f):""}</div>
      </div>
    </div>
  `}function It({step:e,rdwStatus:t,isSaving:p}){const u=e===1&&t!=="success";return{left:`<button class="button subtle" type="button" data-create-action="prev-step" ${e===1?"disabled":""}>Vorige</button>`,right:e<5?`<button class="button subtle" type="button" data-create-action="next-step" ${u?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${p?"disabled":""}>${p?"Opslaan...":"Opslaan"}</button>`}}function qt(e){return`
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${s(e)}</p>
      </div>
    </div>
  `}function Nt(e,t){return e.length?e.map(Re).join(""):qt(t?"No invoices match the current filters.":"Completed appointments will appear here once a werkbon is created.")}function Ht(e){return e.parts.map(t=>`
        <div class="werkbon-line-item">
          <span>${s(t.name)}</span>
          <span>${s(String(t.quantity))}</span>
          <span>${s(k(t.price))}</span>
          <strong>${s(k(t.total))}</strong>
        </div>
      `).join("")}function jt(e){return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Werkbon ${s(J(e.licensePlate))}</title>
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
          <p><strong>License plate:</strong> ${s(J(e.licensePlate))}</p>
          <p><strong>Customer:</strong> ${s(e.customerName)}</p>
          <p><strong>Date:</strong> ${s(Be(e.completedAt))}</p>
          <p><strong>Status:</strong> ${s(oe[e.status].label)}</p>
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
  `}function Dt(e){const t=window.open("","_blank","width=960,height=720,noopener,noreferrer");return t?(t.document.open(),t.document.write(jt(e)),t.document.close(),t.focus(),window.setTimeout(()=>{t.print()},180),!0):!1}async function _t(e){var ye,Se,$e;if(!e)return;document.body.style.overflow="";const t=await st();if(!t)return;if(!t.isAdmin&&!t.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}it(t.activeGarage);const p=t.isAdmin?null:[(ye=t.activeGarage)==null?void 0:ye.id].filter(Boolean),{shell:u,contentArea:m,setUnreadEmailCount:f}=lt({activePage:"werkbon",title:"Werkbon & Payments",headerNote:"Manage invoices and payment status",userEmail:t.user.email,onLogout:ct,garage:t.activeGarage,isAdmin:t.isAdmin}),l=document.createElement("div");l.id="werkbonCreateModalHost",e.replaceChildren(u,l),Lt(),m.innerHTML=`
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
  `;const g=m.querySelector("#werkbonNotice"),I=m.querySelector("#werkbonSummary"),P=m.querySelector("#werkbonList"),y=m.querySelector("#werkbonDrawer"),E=m.querySelector("#werkbonCreateTrigger"),w=m.querySelector("#werkbonStatusFilter"),D=m.querySelector("#werkbonSearch");let v=[],S=((Se=v[0])==null?void 0:Se.id)??"",_="",q=!1,B="",W=!1,$=1,F=!1,R="",x=!1,h="idle",V="",O=0,te=0,d=qe(),fe=0;const se=new Map,A=n=>{g instanceof HTMLElement&&(g.textContent=n,g.hidden=!n,window.clearTimeout(fe),n&&(fe=window.setTimeout(()=>{g.hidden=!0,g.textContent=""},2600)))},ze=()=>{O&&(window.clearTimeout(O),O=0),te+=1,$=1,F=!1,R="",x=!1,h="idle",V="",d=qe()},N=({forceMount:n=!1,refreshContent:r=!1}={})=>{if(!(l instanceof HTMLElement))return;if(!W){l.innerHTML&&(l.innerHTML=""),document.body.style.overflow="";return}if(!((n?null:l.querySelector(".werkbon-create-modal"))instanceof HTMLElement)){l.innerHTML=Pt({isOpen:W,step:$,state:d,rdwStatus:h,rdwError:V,selectedPaymentMethod:R,isSaving:x,paymentModalOpen:F}),document.body.style.overflow="hidden";return}const i=l.querySelector(".werkbon-create-stepper");if(i instanceof HTMLElement&&(i.innerHTML=je($)),r){const H=l.querySelector(".werkbon-create-content");H instanceof HTMLElement&&(H.innerHTML=De({step:$,state:d,rdwStatus:h}))}const o=l.querySelector('[data-create-action="prev-step"]');o instanceof HTMLButtonElement&&(o.disabled=$===1);const c=l.querySelector(".werkbon-create-actions-left"),b=l.querySelector(".werkbon-create-actions-right");if(c instanceof HTMLElement&&b instanceof HTMLElement){const H=It({step:$,rdwStatus:h,isSaving:x});c.innerHTML=H.left,b.innerHTML=H.right}const M=l.querySelector('[data-create-saving-host="true"]');M instanceof HTMLElement&&(M.innerHTML=x?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':"");const L=l.querySelector('[data-create-payment-host="true"]');L instanceof HTMLElement&&(L.innerHTML=F?Ke(R):""),document.body.style.overflow="hidden"},ie=({rerenderPage:n=!1}={})=>{if(W=!1,ze(),n){C();return}N()},le=async()=>{if(!gt(d)){ie();return}await Pe("Er staan niet-opgeslagen gegevens in deze werkbon. Weet je zeker dat je wilt sluiten?","Werkbon sluiten")&&ie()},Ve=async n=>{if(!G||!n)return Date.now()%1e5;const{data:r,error:a}=await G.from("garages").select("invoice_sequence").eq("id",n).maybeSingle();if(a)throw a;const o=Math.max(1e3,Number((r==null?void 0:r.invoice_sequence)??1e3))+1,{error:c}=await G.from("garages").update({invoice_sequence:o}).eq("id",n);if(c)throw c;return o},Ue=async()=>{var ee,Te,Me,Ee,Le,xe,Ae;const n=(ee=t.activeGarage)==null?void 0:ee.id;if(!n)throw new Error("Geen garage gevonden voor deze gebruiker.");const r=U(((Te=d.voertuig)==null?void 0:Te.kenteken)??"");if(r.length<6)throw new Error("Voer eerst een geldig kenteken in.");if(h!=="success")throw new Error("Haal eerst RDW voertuiggegevens op.");const a=Y(d),i=await Ve(n),c=`wb-${String(Date.now()).slice(-4)}`,b=`F-${String(i).padStart(6,"0")}`,M=new Date().toISOString(),L=String(((Me=d.klant)==null?void 0:Me.naam)??"").trim()||"Onbekende klant",H=String(((Ee=d.voertuig)==null?void 0:Ee.title)??"").trim()||"Voertuig",K=Tt(d),ne={werkbon_id:c,status:"draft",werkbon_created:!0,customer_name:L,customer_email:String(((Le=d.klant)==null?void 0:Le.email)??"").trim(),customer_phone:String(((xe=d.klant)==null?void 0:xe.telefoon)??"").trim(),car_model:H,service_types:K,km_stand:0,vat_enabled:T(d.btw)>0,description:String(((Ae=d.klant)==null?void 0:Ae.omschrijving)??"").trim(),internal_note:"",invoice_number:b,paid_at:R?new Date().toISOString().slice(0,10):null,completed_at:M,parts:a.onderdelenRows.map(pe=>({name:pe.naam,quantity:pe.aantal,price:pe.prijs})),labour:{hours:a.labourHours,rate:a.labourRate},totals:{subtotal:a.subtotaal,vat:a.btwBedrag,total:a.totaal},payment_method:R};return{garageId:n,kenteken:r,completedAt:M,completionNotes:ne,serviceSummary:K.join(", "),werkbonId:c,invoiceNumber:b}},Ge=async()=>{if(!G)throw new Error("Supabase is niet geconfigureerd.");x=!0,N();try{const n=await Ue(),{data:r,error:a}=await G.from("completed_appointments").insert({garage_id:n.garageId,booking_id:null,completed_at:n.completedAt,appointment_date:n.completedAt.slice(0,10),appointment_time:n.completedAt.slice(11,19),license_plate:n.kenteken,service:n.serviceSummary||"Onderhoud",completion_notes:JSON.stringify(n.completionNotes)}).select("id, booking_id, garage_id, completed_at, created_at, license_plate, service, completion_notes").single();if(a)throw a;const i=Ne(r);v=[i,...v],S=i.id,A(`Werkbon ${n.werkbonId} opgeslagen als ${n.invoiceNumber}.`),ie()}finally{x=!1,C()}},Ye=async()=>{var M,L,H;const n=await ht(),r=Y(d),a=new n({unit:"pt",format:"a4"}),i=String(((M=d.voertuig)==null?void 0:M.kenteken)??"-"),o=String(((L=d.klant)==null?void 0:L.naam)??"Onbekende klant"),c=String(((H=d.klant)==null?void 0:H.omschrijving)??"").trim();let b=56;a.setFont("helvetica","bold"),a.setFontSize(18),a.text("Werkbon / Factuur",42,b),b+=26,a.setFont("helvetica","normal"),a.setFontSize(11),a.text(`Datum: ${new Date().toLocaleDateString("nl-NL")}`,42,b),b+=16,a.text(`Kenteken: ${i}`,42,b),b+=16,a.text(`Klant: ${o}`,42,b),b+=16,c&&(a.text(`Omschrijving: ${c}`,42,b,{maxWidth:520}),b+=22),a.setFont("helvetica","bold"),a.text("Onderdelen",42,b),b+=16,a.setFont("helvetica","normal"),r.onderdelenRows.forEach(K=>{a.text(`${K.naam}  x${K.aantal}  ${k(K.prijs)}  ${k(K.totaal)}`,42,b),b+=14}),b+=12,a.text(`Arbeid: ${k(r.arbeidTotaal)}`,42,b),b+=14,a.text(`Subtotaal: ${k(r.subtotaal)}`,42,b),b+=14,a.text(`BTW: ${k(r.btwBedrag)}`,42,b),b+=14,a.setFont("helvetica","bold"),a.text(`Totaal: ${k(r.totaal)}`,42,b),a.save(`werkbon-${U(i)||"nieuw"}.pdf`)},Je=async()=>{var i,o,c;if(!G)throw new Error("Supabase is niet geconfigureerd.");const n=String(((i=d.klant)==null?void 0:i.email)??"").trim();if(!n)throw new Error("Geen e-mailadres beschikbaar.");const r=Y(d),{error:a}=await G.functions.invoke("send-werkbon-email",{body:{to:n,template:"werkbon_factuur_nl",subject:`Werkbon ${ae(((o=d.voertuig)==null?void 0:o.kenteken)??"")}`,customerName:String(((c=d.klant)==null?void 0:c.naam)??"Klant"),total:r.totaal}});if(a)throw a},Qe=()=>{var i,o,c;const n=String(((i=d.klant)==null?void 0:i.telefoon)??"").replace(/[^0-9]/g,""),r=Y(d),a=`Hallo ${String(((o=d.klant)==null?void 0:o.naam)??"")}, uw werkbon (${ae(((c=d.voertuig)==null?void 0:c.kenteken)??"")}) staat klaar. Totaal: ${k(r.totaal)}.`;window.open(`https://wa.me/${encodeURIComponent(n)}?text=${encodeURIComponent(a)}`,"_blank","noopener,noreferrer")},Z=()=>{const n=l.querySelector("#vehicleLookupStatus");if(n instanceof HTMLElement){if(n.classList.remove("is-success","is-error"),h==="loading"){n.textContent="Kenteken controleren...";return}if(h==="success"){n.textContent="Kenteken gevonden",n.classList.add("is-success");return}if(h==="error"){n.textContent="Kenteken niet gevonden",n.classList.add("is-error");return}n.textContent="Typ kenteken om te zoeken"}},Q=()=>{const n=l.querySelector('[data-create-action="next-step"]');if(n instanceof HTMLButtonElement){if($===1){n.disabled=h!=="success";return}n.disabled=$===5}},ve=()=>{var L,H,K,ne,ee;const n=l.querySelector("#vehiclePreviewTitle"),r=l.querySelector("#vehiclePreviewBuildYear"),a=l.querySelector("#vehiclePreviewApk"),i=l.querySelector("#vehiclePreviewColor"),o=l.querySelector("#vehiclePreviewFuel");if(!(n instanceof HTMLElement)||!(r instanceof HTMLElement)||!(a instanceof HTMLElement)||!(i instanceof HTMLElement)||!(o instanceof HTMLElement))return;const c=String(((L=d.voertuig)==null?void 0:L.title)??"").trim(),b=String(((H=d.voertuig)==null?void 0:H.buildYear)??"").trim(),M=b?`${c||"Voertuig gegevens"} (${b})`:c||"Voertuig gegevens";n.textContent=M,r.textContent=b,a.textContent=String(((K=d.voertuig)==null?void 0:K.apkExpiryDate)??"").trim(),i.textContent=String(((ne=d.voertuig)==null?void 0:ne.color)??"").trim(),o.textContent=String(((ee=d.voertuig)==null?void 0:ee.fuel)??"").trim()},Ze=()=>{const n=Y(d),r=l.querySelector("[data-parts-subtotal-value]");r instanceof HTMLElement&&(r.textContent=k(n.onderdelenSubtotaal)),l.querySelectorAll("[data-part-total-index]").forEach(i=>{if(!(i instanceof HTMLElement))return;const o=Number(i.getAttribute("data-part-total-index")??-1),c=n.onderdelenRows[o];c&&(i.textContent=k(c.totaal))})},ce=()=>{const n=Y(d),r={arbeid:k(n.arbeidTotaal),subtotaal:k(n.subtotaal),btw:k(n.btwBedrag),totaal:k(n.totaal)};l.querySelectorAll("[data-create-total]").forEach(i=>{if(!(i instanceof HTMLElement))return;const o=String(i.getAttribute("data-create-total")??"");o in r&&(i.textContent=r[o])})},Xe=()=>{var a;const n=!!((a=d.arbeid)!=null&&a.enabled);l.querySelectorAll("[data-arbeid-field]").forEach(i=>{if(i instanceof HTMLInputElement){if(i.getAttribute("data-arbeid-field")==="enabled"){i.checked=n;return}i.disabled=!n}}),ce()},we=async({showShortInputError:n=!1}={})=>{var i;const r=U(((i=d.voertuig)==null?void 0:i.kenteken)??"");if(r.length<6){h="idle",V=n?"Voer minimaal 6 tekens in voor het kenteken.":"",Z(),Q();return}const a=++te;h="loading",V="",Z(),Q();try{const o=await Ce(r);if(a!==te)return;if(!o){h="error",V="Geen RDW voertuig gevonden voor dit kenteken.",d.voertuig={...d.voertuig,title:"",buildYear:"",apkExpiryDate:"",color:"",fuel:""},Z(),ve(),Q();return}d.voertuig={...d.voertuig,kenteken:ae(r),...o},h="success",V="",Z(),ve(),Q()}catch{if(a!==te)return;h="error",V="RDW service is momenteel niet beschikbaar.",Z(),Q()}},de=(n,r)=>{v=v.map(a=>a.id===n?We(r(a)):a)},X=(n,r=!1)=>{_=n,q=!0,B=r?n:"",C()},ue=(n,r)=>{const a=v.find(i=>i.id===n);if(a){if(a.status==="paid"){A(`Invoice for ${J(a.licensePlate)} is already paid.`),X(n,!1);return}de(n,i=>({...i,status:"sent"})),A(`Werkbon sent to customer via ${r}.`),X(n,!1)}},et=n=>{const r=v.find(a=>a.id===n);if(r){if(r.status==="paid"){A(`Invoice for ${J(r.licensePlate)} is already marked as paid.`),X(n,!1);return}de(n,a=>({...a,status:"paid"})),A(`Payment completed for ${J(r.licensePlate)}.`),X(n,!1)}},tt=n=>{const r=v.find(L=>L.id===n);if(!r||!(y instanceof HTMLElement))return;const a=y.querySelector("[data-werkbon-edit-status]"),i=y.querySelector("[data-werkbon-edit-hours]"),o=y.querySelector("[data-werkbon-edit-rate]");if(!(a instanceof HTMLSelectElement)||!(i instanceof HTMLInputElement)||!(o instanceof HTMLInputElement))return;const c=ke(a.value),b=Math.max(0,Number(i.value||r.labour.hours)),M=Math.max(0,Number(o.value||r.labour.rate));de(n,L=>({...L,status:c,labour:{...L.labour,hours:b,rate:M}})),B="",_=n,q=!0,A("Werkbon updated."),C()},nt=async n=>{const r=v.find(i=>i.id===n);if(!(!r||!await Pe("Are you sure you want to delete this werkbon? This action cannot be undone.","Delete Werkbon"))){try{if(r.completedAppointmentId){if(!await ut({completedAppointmentId:r.completedAppointmentId,garageId:r.garageId},{created:!1}))throw new Error("Unable to remove this werkbon from the werkbon list.")}else r.bookingId&&await pt({id:r.bookingId,garageId:r.garageId})}catch(i){window.alert(i instanceof Error?i.message:"Unable to delete this werkbon.");return}v=v.filter(i=>i.id!==n),S===n&&(S=""),_===n&&(_="",q=!1,B=""),A("Werkbon deleted."),C()}},C=()=>{if(!(I instanceof HTMLElement)||!(P instanceof HTMLElement)||!(y instanceof HTMLElement)||!(l instanceof HTMLElement))return;const n=w instanceof HTMLSelectElement?w.value:"all",r=D instanceof HTMLInputElement?D.value.trim().toLowerCase():"",a=[...v].sort((o,c)=>{var b,M;return((b=me(c.completedAt))==null?void 0:b.getTime())-((M=me(o.completedAt))==null?void 0:M.getTime())}).filter(o=>{const c=[o.licensePlate,o.customerName,o.carModel].join(" ").toLowerCase(),b=!r||c.includes(r),M=n==="all"||o.status===n;return b&&M});I.innerHTML=xt(v),P.innerHTML=a.length?a.map(o=>Re(o,S===o.id)).join(""):Nt(a,!!(r||n!=="all"));const i=v.find(o=>o.id===_)??null;y.classList.toggle("is-open",q&&!!i),y.innerHTML=q&&i?Ct(i,B===i.id):"",N()};E==null||E.addEventListener("click",()=>{W=!0,$=1,N({forceMount:!0,refreshContent:!0})});const ge=async n=>{const r=n.closest("[data-create-action]");if(!(r instanceof HTMLElement))return!1;const a=String(r.dataset.createAction??"");if(a==="attempt-close")return r.classList.contains("werkbon-create-shadow")&&n.closest(".werkbon-create-panel")||await le(),!0;if(a==="jump-step"){const i=Number(r.dataset.step??$);return $=Math.min(5,Math.max(1,i)),F=!1,N({refreshContent:!0}),!0}if(a==="prev-step")return $=Math.max(1,$-1),N({refreshContent:!0}),!0;if(a==="next-step")return $===1&&h!=="success"&&(O&&(window.clearTimeout(O),O=0),await we({showShortInputError:!0})),$===1&&h!=="success"?(A("Rond eerst de RDW validatie af."),!0):($=Math.min(5,$+1),N({refreshContent:!0}),!0);if(a==="remove-part"){const i=Number(r.dataset.partIndex??-1);return Number.isFinite(i)&&i>=0&&(d.onderdelen.splice(i,1),N({refreshContent:!0})),!0}if(a==="quick-part")return d.onderdelen.push({naam:String(r.dataset.partName??"Onderdeel"),aantal:1,prijs:T(r.dataset.partPrice,0)}),N({refreshContent:!0}),!0;if(a==="add-manual-part")return d.onderdelen.push({naam:"",aantal:1,prijs:0}),N({refreshContent:!0}),!0;if(a==="open-payment")return F=!0,N(),!0;if(a==="close-payment")return F=!1,N(),!0;if(a==="select-payment")return R=String(r.dataset.paymentMethod??""),F=!1,A(`Betaalmethode gekozen: ${R}.`),N(),!0;if(a==="save-werkbon"){try{await Ge()}catch(i){A(i instanceof Error?i.message:"Opslaan mislukt.")}return!0}if(a==="create-pdf"){try{await Ye(),A("PDF gegenereerd.")}catch(i){A(i instanceof Error?i.message:"PDF genereren mislukt.")}return!0}if(a==="email-werkbon"){try{await Je(),A("Werkbon e-mail verstuurd.")}catch(i){A(i instanceof Error?i.message:"E-mail verzenden mislukt.")}return!0}return a==="whatsapp-werkbon"?(Qe(),A("WhatsApp bericht geopend."),!0):!1},he=n=>{if(!(n instanceof HTMLElement)||!W)return!1;if(n.matches("[data-create-field='kenteken']")){if(n instanceof HTMLInputElement){const r=ae(n.value);n.value=r,d.voertuig={...d.voertuig,kenteken:r},h="idle",V="",O&&(window.clearTimeout(O),O=0);const a=U(r),i=l.querySelector("#vehicleLookupStatus");i instanceof HTMLElement&&(i.classList.remove("is-success","is-error"),i.textContent=a.length>=6?"Kenteken controleren...":"Typ kenteken om te zoeken"),Q(),a.length>=6&&(O=window.setTimeout(()=>{O=0,we()},420))}return!0}if(n.matches("[data-create-field='btw']"))return n instanceof HTMLSelectElement&&(d.btw=T(n.value,21),ce()),!0;if(n.matches("[data-klant-field]")){const r=String(n.getAttribute("data-klant-field")??"");if(!r)return!0;const a=n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement?n.value:"";return d.klant={...d.klant,[r]:a},!0}if(n.matches("[data-arbeid-field]")){const r=String(n.getAttribute("data-arbeid-field")??"");if(!r)return!0;const a={...d.arbeid};return r==="enabled"&&n instanceof HTMLInputElement?(a.enabled=n.checked,d.arbeid=a,Xe(),!0):(n instanceof HTMLInputElement&&(a[r]=T(n.value,r==="tarief"?65:0)),d.arbeid=a,ce(),!0)}if(n.matches("[data-part-field]")){const r=Number(n.getAttribute("data-part-index")??-1),a=String(n.getAttribute("data-part-field")??"");if(!Number.isFinite(r)||r<0||!a)return!0;const o={...d.onderdelen[r]??{naam:"",aantal:1,prijs:0}};return a==="naam"&&(o.naam=n instanceof HTMLInputElement?n.value:""),a==="aantal"&&(o.aantal=n instanceof HTMLInputElement?T(n.value,1):1),a==="prijs"&&(o.prijs=n instanceof HTMLInputElement?T(n.value,0):0),d.onderdelen[r]=o,Ze(),!0}return!1};l.addEventListener("click",async n=>{const r=n.target instanceof Element?n.target:null;r&&await ge(r)}),l.addEventListener("input",n=>{const r=n.target;r instanceof HTMLElement&&he(r)}),l.addEventListener("keydown",n=>{n.key==="Escape"&&W&&(n.preventDefault(),le())}),m.addEventListener("click",async n=>{const r=n.target instanceof Element?n.target:null;if(!r||await ge(r))return;const a=r.closest("[data-werkbon-action]");if(a instanceof HTMLElement){const o=String(a.dataset.werkbonAction??""),c=String(a.dataset.werkbonId??"");if(o==="close-modal"){q=!1,B="",C();return}if(o==="toggle"){S=S===c?"":c,C();return}if(o==="close-drawer"){S="",B="",C();return}if(!c)return;if(o==="view"){window.location.href=He(`werkbon-detail.html?id=${encodeURIComponent(c)}`);return}if(o==="edit"){X(c,!0);return}if(o==="cancel-edit"){B="",q=!1,C();return}if(o==="save-edit"){tt(c);return}if(o==="send-customer"){ue(c,"SMS / WhatsApp");return}if(o==="send-sms"){ue(c,"SMS");return}if(o==="send-whatsapp"){ue(c,"WhatsApp");return}if(o==="mark-paid"){et(c);return}if(o==="download-pdf"){const b=v.find(L=>L.id===c);if(!b)return;const M=Dt(b);A(M?"Print dialog opened for PDF export.":"Allow pop-ups to export this werkbon as PDF.")}o==="delete"&&nt(c);return}const i=r.closest("[data-werkbon-row-id]");if(i instanceof HTMLElement&&!r.closest("button, input, select, textarea, a")){const o=String(i.dataset.werkbonRowId??"");o&&(S=S===o?"":o,C())}}),m.addEventListener("keydown",n=>{const r=n.target instanceof HTMLElement?n.target:null;if(r){if(n.key==="Escape"&&W){n.preventDefault(),le();return}if((n.key==="Enter"||n.key===" ")&&r.matches("[data-werkbon-row-id]")){n.preventDefault();const a=String(r.dataset.werkbonRowId??"");a&&(S=S===a?"":a,C())}if(n.key==="Escape"&&q){q=!1,B="",C();return}n.key==="Escape"&&S&&(S="",C())}}),m.addEventListener("input",n=>{const r=n.target;r instanceof HTMLElement&&he(r)}),D==null||D.addEventListener("input",C),w==null||w.addEventListener("change",C);try{let n=[];try{n=await rt({garageIds:p})}catch{}v=n.filter(o=>Oe(o.completion_notes).werkbon_created===!0).map(Ne).sort((o,c)=>new Date(c.completedAt??0).getTime()-new Date(o.completedAt??0).getTime());const r=new Set(v.map(o=>o.licensePlate).filter(o=>o&&o!=="UNKNOWN").map(o=>U(o)));for(const o of r)if(o&&!se.has(o))try{const c=await Ce(o);c&&se.set(o,c)}catch(c){console.error(`Failed to fetch vehicle for ${o}:`,c)}v=v.map(o=>{const c=U(o.licensePlate),b=se.get(c)||yt(c);return{...o,carModel:b.title+(b.buildYear?` (${b.buildYear})`:"")||o.carModel}});const a=await dt({garageIds:p}),i=bt(a);f(i.unread),S=(($e=v[0])==null?void 0:$e.id)??""}catch(n){v=[],f(0),console.error(n)}C()}const Bt=document.querySelector("#app");ot();_t(Bt);
