import{e as xt,f as Ct,p as Me,c as Pt}from"./theme-B0f129yT.js";/* empty css                      */import{g as Nt}from"./mollieService-Gq8TZItX.js";import{e as It,a as Dt,c as qt,l as Ht,g as jt,s as Bt}from"./branding-D4zs9BDF.js";import{n as X,f as Xe}from"./rdwService-CFrMDQAa.js";import{s as Wt}from"./confirmDialog-DSEC2-zx.js";const pe={pending:{label:"Openstaand",className:"werkbon-status-openstaand"},draft:{label:"Draft",className:"werkbon-status-draft"},sent:{label:"Sent",className:"werkbon-status-sent"},paid:{label:"Paid",className:"werkbon-status-paid"}},$e={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},Ot=new Map([["apk","apk"],["apk keuring","apk"],["keuring","apk"],["banden","banden"],["band","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"],["overig","other"],["overige","other"],["other","other"]]),et=["Voertuig","Klant","Onderdelen","Arbeid","Overzicht"],Rt=["contant","iDEAL","Mollie"],Ft=[{label:"APK keuring",name:"APK keuring",price:45},{label:"Banden",name:"Banden",price:120},{label:"Remblokken voor",name:"Remblokken voor",price:85},{label:"Remblokken achter",name:"Remblokken achter",price:75},{label:"Olie",name:"Olie",price:35},{label:"Filters",name:"Filters",price:28},{label:"Accu",name:"Accu",price:95},{label:"Overige",name:"Overige",price:0}],Kt="https://mkgfckxiusdcnqhethdy.supabase.co",zt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",N=xt(Kt,zt);function tt(){return{voertuig:{},klant:{},onderdelen:[],arbeid:{enabled:!1,uren:0,minuten:0,tarief:65},btw:21}}function L(t,n=0){const u=Number(t);return Number.isFinite(u)&&u>=0?u:n}function de(t){const n=X(t).slice(0,6);return n?n.replace(/(.{2})(?=.)/g,"$1-"):""}function Vt(t){var k,d,S,q,A,M,x;const n=String(((k=t==null?void 0:t.voertuig)==null?void 0:k.kenteken)??"").trim(),u=[(d=t==null?void 0:t.klant)==null?void 0:d.naam,(S=t==null?void 0:t.klant)==null?void 0:S.telefoon,(q=t==null?void 0:t.klant)==null?void 0:q.email,(A=t==null?void 0:t.klant)==null?void 0:A.omschrijving].some(h=>String(h??"").trim()),p=Array.isArray(t==null?void 0:t.onderdelen)&&t.onderdelen.some(h=>String((h==null?void 0:h.naam)??"").trim()||L(h==null?void 0:h.aantal)>0||L(h==null?void 0:h.prijs)>0),b=L((M=t==null?void 0:t.arbeid)==null?void 0:M.uren)*60+L((x=t==null?void 0:t.arbeid)==null?void 0:x.minuten);return!!(n||u||p||b>0)}function te(t){var M,x,h,F;const n=(Array.isArray(t.onderdelen)?t.onderdelen:[]).map(I=>{const U=L(I==null?void 0:I.aantal),w=L(I==null?void 0:I.prijs);return{naam:String((I==null?void 0:I.naam)??"").trim()||"Onderdeel",aantal:U,prijs:w,totaal:O(U*w)}}),u=O(n.reduce((I,U)=>I+U.totaal,0)),p=L((M=t.arbeid)==null?void 0:M.uren)+L((x=t.arbeid)==null?void 0:x.minuten)/60,b=L((h=t.arbeid)==null?void 0:h.tarief,65),k=(F=t.arbeid)!=null&&F.enabled?O(p*b):0,d=O(u+k),S=L(t.btw)>0?.21:0,q=O(d*S),A=O(d+q);return{onderdelenRows:n,onderdelenSubtotaal:u,labourHours:p,labourRate:b,arbeidTotaal:k,subtotaal:d,btwBedrag:q,totaal:A}}function Y(t,n){return`<div class="werkbon-create-overview-row"><span>${l(t)}</span><strong>${l(n)}</strong></div>`}function ue(t,n,u){return`<div class="werkbon-create-overview-row"><span>${l(n)}</span><strong data-create-total="${l(t)}">${l(u)}</strong></div>`}function at(t){return et.map((n,u)=>{const p=u+1,b=p===t?"is-active":p<t?"is-done":"",k=p<t?"is-done":"",d=u<et.length-1?`<span class="werkbon-create-step-separator ${k}" aria-hidden="true"></span>`:"";return`<button class="werkbon-create-step ${b}" type="button" data-create-action="jump-step" data-step="${p}"><span>${p}.</span>${l(n)}</button>${d}`}).join("")}function rt({step:t,state:n,rdwStatus:u}){var A,M,x,h,F,I,U,w,T,J,R,K,z,E;const p=te(n),b=String(((A=n.voertuig)==null?void 0:A.title)??"").trim(),k=String(((M=n.voertuig)==null?void 0:M.buildYear)??"").trim(),d=String(((x=n.voertuig)==null?void 0:x.apkExpiryDate)??"").trim(),S=k?`${b||"Voertuig gegevens"} (${k})`:b||"Voertuig gegevens",q=u==="loading"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Kenteken controleren...</p>':u==="success"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-success">Kenteken gevonden</p>':u==="error"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-error">Kenteken niet gevonden</p>':'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Typ kenteken om te zoeken</p>';return t===1?`
      <div class="werkbon-create-body-step">
        <label class="werkbon-create-appointment-field">
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text" inputmode="text" maxlength="8" data-create-field="kenteken" value="${l(String(((h=n.voertuig)==null?void 0:h.kenteken)??""))}" placeholder="eg. 12-ABC-D1" required />
          ${q}
        </label>
        <div class="vehicle-preview-card werkbon-create-vehicle-preview" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${l(S)}</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">${l(k)}</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">${l(d)}</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">${l(String(((F=n.voertuig)==null?void 0:F.color)??""))}</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">${l(String(((I=n.voertuig)==null?void 0:I.fuel)??""))}</strong></span>
          </div>
        </div>
      </div>
    `:t===2?`
      <div class="werkbon-create-body-step">
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input type="text" data-klant-field="naam" value="${l(String(((U=n.klant)==null?void 0:U.naam)??""))}" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" />
          </label>
          <label>
            Phone number
            <input type="tel" data-klant-field="telefoon" value="${l(String(((w=n.klant)==null?void 0:w.telefoon)??""))}" autocomplete="tel" placeholder="eg. 0624987172" />
          </label>
        </div>
        <label class="werkbon-create-appointment-field">
          Email
          <input type="email" data-klant-field="email" value="${l(String(((T=n.klant)==null?void 0:T.email)??""))}" autocomplete="email" placeholder="eg. klant@email.com" />
        </label>
        <label class="werkbon-create-appointment-field">
          Omschrijving
          <textarea rows="4" data-klant-field="omschrijving" placeholder="Optioneel">${l(String(((J=n.klant)==null?void 0:J.omschrijving)??""))}</textarea>
        </label>
      </div>
    `:t===3?`
      <div class="werkbon-create-body-step werkbon-create-parts-step">
        <div class="werkbon-create-section-copy">
          <label class="werkbon-create-section-title">Onderdelen</label>
          <p class="werkbon-create-section-subtitle">Voeg onderdelen en materialen toe aan de werkbon</p>
        </div>
        <div class="werkbon-create-quick-parts">
          ${Ft.map(C=>`<button class="werkbon-chip-button" type="button" data-create-action="quick-part" data-part-name="${l(C.name)}" data-part-price="${l(String(C.price))}">+ ${l(C.label)}</button>`).join("")}
        </div>
        ${n.onderdelen.length?`
            <div class="werkbon-create-parts-panel">
              <div class="werkbon-create-parts-header" role="presentation">
                <div>Omschrijving</div>
                <div>Prijs</div>
                <div>Aantal</div>
                <div>Totaal</div>
                <div></div>
              </div>
              <div class="werkbon-create-parts-list">
                ${n.onderdelen.map((C,B)=>`
                  <div class="werkbon-create-part-card">
                    <div class="werkbon-part-cell werkbon-part-cell-name">
                      <input type="text" class="werkbon-part-input" data-part-field="naam" data-part-index="${B}" value="${l(String(C.naam??""))}" placeholder="Onderdeel naam" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-price">
                      <div class="werkbon-currency-input">
                        <span class="werkbon-currency-symbol">€</span>
                        <input type="number" class="werkbon-part-input werkbon-part-input-price" min="0" step="0.01" data-part-field="prijs" data-part-index="${B}" value="${l(String(C.prijs??0))}" />
                      </div>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-quantity">
                      <input type="number" class="werkbon-part-input" min="1" step="1" data-part-field="aantal" data-part-index="${B}" value="${l(String(C.aantal??1))}" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-total">
                      <strong data-part-total-index="${B}">${l(f(O(L(C.aantal,1)*L(C.prijs))))}</strong>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-remove">
                      <button class="werkbon-remove-button" type="button" data-create-action="remove-part" data-part-index="${B}" aria-label="Verwijder onderdeel" title="Verwijder">
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
          <strong data-parts-subtotal-value="true">${l(f(p.onderdelenSubtotaal))}</strong>
        </div>
      </div>
    `:t===4?`
      <div class="werkbon-create-body-step werkbon-create-grid-two">
        <label class="werkbon-create-toggle">
          <input type="checkbox" data-arbeid-field="enabled" ${n.arbeid.enabled?"checked":""} />
          <span>Arbeid inschakelen</span>
        </label>
        <label class="werkbon-create-field"><span>Uren</span><input type="number" min="0" step="1" data-arbeid-field="uren" value="${l(String(n.arbeid.uren))}" ${n.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>Minuten</span><input type="number" min="0" max="59" step="1" data-arbeid-field="minuten" value="${l(String(n.arbeid.minuten))}" ${n.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>Tarief p/u</span><input type="number" min="0" step="0.01" data-arbeid-field="tarief" value="${l(String(n.arbeid.tarief))}" ${n.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>BTW</span>
          <select data-create-field="btw">
            <option value="21" ${L(n.btw)>0?"selected":""}>21%</option>
            <option value="0" ${L(n.btw)===0?"selected":""}>Geen BTW</option>
          </select>
        </label>
        <div class="werkbon-create-calculation-card">
          ${ue("arbeid","Arbeid",f(p.arbeidTotaal))}
          ${ue("subtotaal","Subtotaal",f(p.subtotaal))}
          ${ue("btw","BTW",f(p.btwBedrag))}
          ${ue("totaal","Totaal",f(p.totaal))}
        </div>
      </div>
    `:`
    <div class="werkbon-create-body-step werkbon-create-overview">
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Voertuig</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="1">Bewerken</button></div>
        ${Y("Kenteken",String(((R=n.voertuig)==null?void 0:R.kenteken)??"-"))}
        ${Y("Voertuig",b||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Klant</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="2">Bewerken</button></div>
        ${Y("Naam",String(((K=n.klant)==null?void 0:K.naam)??"-")||"-")}
        ${Y("Email",String(((z=n.klant)==null?void 0:z.email)??"-")||"-")}
        ${Y("Telefoon",String(((E=n.klant)==null?void 0:E.telefoon)??"-")||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Onderdelen / Arbeid</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="3">Bewerken</button></div>
        ${Y("Onderdelen",f(p.onderdelenSubtotaal))}
        ${Y("Arbeid",f(p.arbeidTotaal))}
        ${Y("BTW",f(p.btwBedrag))}
        ${Y("Totaal",f(p.totaal))}
      </div>
    </div>
  `}async function Gt(){var t,n;if((t=window.jspdf)!=null&&t.jsPDF)return window.jspdf.jsPDF;if(await new Promise((u,p)=>{const b=document.querySelector('script[data-js-pdf-cdn="true"]');if(b){b.addEventListener("load",()=>u(),{once:!0}),b.addEventListener("error",()=>p(new Error("Kon jsPDF niet laden.")),{once:!0});return}const k=document.createElement("script");k.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",k.async=!0,k.dataset.jsPdfCdn="true",k.onload=()=>u(),k.onerror=()=>p(new Error("Kon jsPDF niet laden.")),document.head.append(k)}),!((n=window.jspdf)!=null&&n.jsPDF))throw new Error("jsPDF is niet beschikbaar.");return window.jspdf.jsPDF}function Ut(t=""){return{title:X(t)||"Voertuig",buildYear:""}}function Yt(t){const n=String(t||"").trim();if(!n)return["other"];const u=n.split(n.includes(",")?/,/g:/\+|\/|&| and /gi).map(p=>p.trim()).filter(Boolean);return u.length?u:[n]}function Jt(t){return Ot.get(String(t||"").trim().toLowerCase())||"other"}function ot(t){const n=String(t??"").trim();if(!n)return{key:"other",label:$e.other};const u=n.toLowerCase(),p=[{probe:"apk",key:"apk"},{probe:"band",key:"banden"},{probe:"airco",key:"airco"},{probe:"occasion",key:"occasions"},{probe:"brake",key:"brakes"},{probe:"onderhoud",key:"onderhoud"},{probe:"service",key:"onderhoud"},{probe:"overig",key:"other"}],b=Jt(n);let k=b;if(b==="other"){const d=p.find(S=>u.includes(S.probe));d&&(k=d.key)}return k==="other"&&!["other","overig","overige"].includes(u)?{key:k,label:n}:{key:k,label:$e[k]??$e.other}}function Qt(t){const n=Array.isArray(t==null?void 0:t.onderdelen)?t.onderdelen:[],u=new Set,p=[];for(const b of n){const k=String((b==null?void 0:b.naam)??"").trim();if(!k)continue;const d=ot(k),S=`${d.key}:${d.label.toLowerCase()}`;u.has(S)||(u.add(S),p.push(d.label))}return p.length?p:["Onderhoud"]}function Zt(t){return Yt(t).map(n=>{const{key:u,label:p}=ot(n);return`<span class="service-chip service-chip-${u}">${l(p)}</span>`}).join("")}function l(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function O(t){return Math.round(Number(t)*100)/100}function f(t){return`€${O(t).toFixed(2)}`}function Xt(t){const n=String(t??"").replace(/\D+/g,"");return n?n.startsWith("00")?n.slice(2):n.startsWith("0")?`31${n.slice(1)}`:n:""}function en(t){const n=Number(t);return(Number.isFinite(n)?n:0).toFixed(2).replace(".",",")}function Ee(t){const n=new Date(t);return Number.isNaN(n.getTime())?null:n}function it(t){const n=Ee(t);return n?n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Unknown date"}function oe(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function me(t){const n=String(t??"draft").trim().toLowerCase();return pe[n]?n:"draft"}function Le(t){if(!t)return{};if(typeof t=="object")return t;try{return JSON.parse(String(t))}catch{return{}}}function tn(t){return String(t??"").split(",").map(n=>n.trim()).filter(Boolean)}function st(t){var q,A;const n=(t.parts??[]).map(M=>{const x=Number(M.quantity??0),h=Number(M.price??0);return{name:String(M.name??"Item"),quantity:x,price:h,total:O(x*h)}}),u=Number(((q=t.labour)==null?void 0:q.hours)??0),p=Number(((A=t.labour)==null?void 0:A.rate)??0),b=O(u*p),k=O(n.reduce((M,x)=>M+x.total,0)+b),d=O(k*.21),S=O(k+d);return{id:String(t.id??""),completedAppointmentId:String(t.completedAppointmentId??""),bookingId:String(t.bookingId??""),garageId:String(t.garageId??""),licensePlate:String(t.licensePlate??"UNKNOWN"),customerName:String(t.customerName??"Unknown customer"),carModel:String(t.carModel??"Unknown vehicle"),serviceTypes:Array.isArray(t.serviceTypes)?t.serviceTypes.map(String):["Other"],completedAt:t.completedAt,status:me(t.status),parts:n,labour:{hours:u,rate:p,total:b},summary:{subtotal:k,vat:d,total:S},paymentLink:String(t.paymentLink??""),paymentLinkSentAt:String(t.paymentLinkSentAt??""),paymentMethod:String(t.paymentMethod??"")}}function nt(t){const n=Le(t.completion_notes),u=Array.isArray(n.service_types)?n.service_types.map(String):tn(t.service),p=n.labour&&typeof n.labour=="object"?n.labour:{},b=Array.isArray(n.parts)?n.parts:[{name:"Service",quantity:1,price:0}];return st({id:String(t.id??""),completedAppointmentId:String(t.id??""),bookingId:String(t.booking_id??""),garageId:String(t.garage_id??""),licensePlate:String(t.license_plate??""),customerName:String(n.customer_name??n.customerName??"Onbekende klant"),carModel:String(n.car_model||n.carModel||"Voertuig"),serviceTypes:u.length?u:["Service"],completedAt:String(t.completed_at??t.created_at??new Date().toISOString()),status:String(n.status??"draft"),werkbonCreated:n.werkbon_created===!0,parts:b,labour:{hours:Number(p.hours??0),rate:Number(p.rate??0)},paymentLink:String(n.payment_link??""),paymentLinkSentAt:String(n.payment_link_sent_at??""),paymentMethod:String(n.payment_method??"")})}function nn(){const t=Me("werkbon-detail.html");if(document.head.querySelector(`link[rel="prefetch"][href="${t}"]`))return;const n=document.createElement("link");n.rel="prefetch",n.as="document",n.href=t,document.head.append(n)}function lt(t,n=""){const u=me(t);if(u!=="paid"&&n)return'<span class="status-chip werkbon-status-link-sent">Link verstuurd</span>';if(u==="draft"&&!n)return'<span class="status-chip werkbon-status-openstaand">Openstaand</span>';const p=pe[u]??pe.draft;return`<span class="status-chip ${p.className}">${p.label}</span>`}function an(t){const n=t.filter(d=>d.status!=="paid").reduce((d,S)=>d+S.summary.total,0),u=t.filter(d=>d.status==="sent").length,p=t.filter(d=>d.status==="draft").length,b=t.filter(d=>d.status==="paid").reduce((d,S)=>d+S.summary.total,0);return[{label:"Outstanding revenue",value:f(n),note:`${t.filter(d=>d.status!=="paid").length} open werkbon`},{label:"Ready to send",value:String(p),note:"Draft invoices waiting for customer delivery"},{label:"In payment flow",value:String(u),note:"Sent via SMS or WhatsApp"},{label:"Paid total",value:f(b),note:"Completed payments"}].map(d=>`
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${l(d.label)}</p>
          <strong class="werkbon-summary-value">${l(d.value)}</strong>
          <span class="metric-note">${l(d.note)}</span>
        </article>
      `).join("")}function rn(t){const n=t.status==="paid"?"":`<button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${l(t.id)}">Mark as Paid</button>`;return`
    <div class="request-divider"></div>
    <div class="request-expanded werkbon-expanded">
      <div class="request-actions werkbon-bottom-actions">
        <button class="button subtle" type="button" data-werkbon-action="view" data-werkbon-id="${l(t.id)}">View Werkbon</button>
        <button class="button subtle" type="button" data-werkbon-action="edit" data-werkbon-id="${l(t.id)}">Edit</button>
        <button class="button subtle werkbon-send-button" type="button" data-werkbon-action="send-customer" data-werkbon-id="${l(t.id)}">Send to Customer</button>
        ${n}
        <button class="button danger" type="button" data-werkbon-action="delete" data-werkbon-id="${l(t.id)}">Delete</button>
      </div>
    </div>
  `}function on(t,n){if(!t)return"";const u=t.status==="paid"?"":`<button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${l(t.id)}">Mark as Paid</button>`;return`
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${l(oe(t.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${l(t.customerName)} · ${l(it(t.completedAt))}</p>
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
              <strong>${l(t.customerName)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Vehicle</span>
              <strong>${l(t.carModel)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Status</span>
              ${lt(t.status,t.paymentLink)}
            </div>
          </section>

          ${n?`
                <section class="werkbon-section request-contact-box werkbon-edit-card">
                  <div class="werkbon-section-heading">
                    <span class="kicker">Edit Werkbon</span>
                    <p class="muted">Adjust status and labour totals.</p>
                  </div>
                  <div class="werkbon-edit-grid">
                    <label>
                      <span>Status</span>
                      <select data-werkbon-edit-status>
                        <option value="draft" ${t.status==="draft"?"selected":""}>Draft</option>
                        <option value="sent" ${t.status==="sent"?"selected":""}>Sent</option>
                        <option value="paid" ${t.status==="paid"?"selected":""}>Paid</option>
                      </select>
                    </label>
                    <label>
                      <span>Labour hours</span>
                      <input data-werkbon-edit-hours type="number" min="0" step="0.1" value="${l(String(t.labour.hours))}" />
                    </label>
                    <label>
                      <span>Price per hour</span>
                      <input data-werkbon-edit-rate type="number" min="0" step="0.01" value="${l(String(t.labour.rate))}" />
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
                ${un(t)}
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
                  <strong>${l(String(t.labour.hours))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Price per hour</span>
                  <strong>${l(f(t.labour.rate))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Total</span>
                  <strong>${l(f(t.labour.total))}</strong>
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
              <div><span>Subtotal</span><strong>${l(f(t.summary.subtotal))}</strong></div>
              <div><span>VAT (21%)</span><strong>${l(f(t.summary.vat))}</strong></div>
              <div class="werkbon-summary-total"><span>Total price</span><strong>${l(f(t.summary.total))}</strong></div>
            </div>
          </section>
        </div>

        <div class="request-actions werkbon-bottom-actions werkbon-modal-actions">
          ${n?`
                <button class="button subtle" type="button" data-werkbon-action="cancel-edit" data-werkbon-id="${l(t.id)}">Cancel</button>
                <button class="button" type="button" data-werkbon-action="save-edit" data-werkbon-id="${l(t.id)}">Save Changes</button>
              `:`
                <button class="button subtle" type="button" data-werkbon-action="download-pdf" data-werkbon-id="${l(t.id)}">Download PDF</button>
                <button class="button subtle" type="button" data-werkbon-action="send-sms" data-werkbon-id="${l(t.id)}">Send via SMS</button>
                <button class="button subtle" type="button" data-werkbon-action="send-whatsapp" data-werkbon-id="${l(t.id)}">Send via WhatsApp</button>
                ${u}
              `}
        </div>
      </aside>
    </div>
  `}function ct(t,n){return`
    <article class="request-card werkbon-card ${n?"is-expanded":""}" data-werkbon-row-id="${l(t.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          <span class="plate-chip">${l(oe(t.licensePlate))}</span>
          <div class="request-info">
            <p class="request-name">${l(t.customerName)}</p>
            <p class="request-vehicle">${l(t.carModel)}</p>
            <div class="request-services">${Zt(Array.isArray(t.serviceTypes)?t.serviceTypes.join(", "):t.serviceTypes)}</div>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${l(f(t.summary.total))}</strong>
          ${lt(t.status,t.paymentLink)}
          </div>
          <button
            class="request-toggle ${n?"is-expanded":""}"
            type="button"
            data-werkbon-action="toggle"
            data-werkbon-id="${l(t.id)}"
            aria-expanded="${n?"true":"false"}"
            aria-label="${n?"Collapse werkbon actions":"Expand werkbon actions"}"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>

      ${n?rn(t):""}
    </article>
  `}function dt(t){return`
    <div class="werkbon-payment-overlay" role="presentation">
      <div class="werkbon-payment-dialog" role="dialog" aria-modal="true" aria-labelledby="werkbonPaymentTitle">
        <h3 id="werkbonPaymentTitle">Kies betaalmethode</h3>
        <div class="werkbon-payment-grid">
          ${Rt.map(n=>`
            <button
              class="button subtle werkbon-payment-method ${t===n?"is-active":""}"
              type="button"
              data-create-action="select-payment"
              data-payment-method="${l(n)}"
            >${l(n)}</button>
          `).join("")}
        </div>
        <div class="werkbon-payment-actions">
          <button class="button subtle" type="button" data-create-action="close-payment">Sluiten</button>
        </div>
      </div>
    </div>
  `}function sn({isOpen:t,step:n,state:u,rdwStatus:p,rdwError:b,selectedPaymentMethod:k,isSaving:d,paymentModalOpen:S}){if(!t)return"";const A=n===1&&!(p==="success");return`
    <div class="werkbon-create-modal ${t?"is-open":""}" role="presentation">
      <div class="werkbon-create-shadow" data-create-action="attempt-close" aria-hidden="true">
        <section class="werkbon-create-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonCreateTitle">
          <header class="werkbon-create-header">
            <div>
              
              <h2 id="werkbonCreateTitle">Werkbon Maken</h2>
            </div>
            <button class="icon-button" type="button" data-create-action="attempt-close" aria-label="Sluiten">&times;</button>
          </header>

          <nav class="werkbon-create-stepper" aria-label="Werkbon stappen">${at(n)}</nav>

          <div class="werkbon-create-content">${rt({step:n,state:u,rdwStatus:p})}</div>

          <footer class="werkbon-create-actions">
            <div class="werkbon-create-actions-left">
              <button class="button subtle" type="button" data-create-action="prev-step" ${n===1?"disabled":""}>Vorige</button>
            </div>
            <div class="werkbon-create-actions-right">
              ${n<5?`<button class="button subtle" type="button" data-create-action="next-step" ${A?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${d?"disabled":""}>${d?"Opslaan...":"Opslaan"}</button>`}
            </div>
          </footer>

          <div data-create-saving-host="true">${d?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':""}</div>
        </section>

        <div data-create-payment-host="true">${S?dt(k):""}</div>
      </div>
    </div>
  `}function ln({step:t,rdwStatus:n,isSaving:u}){const p=t===1&&n!=="success";return{left:`<button class="button subtle" type="button" data-create-action="prev-step" ${t===1?"disabled":""}>Vorige</button>`,right:t<5?`<button class="button subtle" type="button" data-create-action="next-step" ${p?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${u?"disabled":""}>${u?"Opslaan...":"Opslaan"}</button>`}}function cn(t){return`
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${l(t)}</p>
      </div>
    </div>
  `}function dn(t,n){return t.length?t.map(ct).join(""):cn(n?"No invoices match the current filters.":"Completed appointments will appear here once a werkbon is created.")}function un(t){return t.parts.map(n=>`
        <div class="werkbon-line-item">
          <span>${l(n.name)}</span>
          <span>${l(String(n.quantity))}</span>
          <span>${l(f(n.price))}</span>
          <strong>${l(f(n.total))}</strong>
        </div>
      `).join("")}function pn(t){return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Werkbon ${l(oe(t.licensePlate))}</title>
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
          <p><strong>License plate:</strong> ${l(oe(t.licensePlate))}</p>
          <p><strong>Customer:</strong> ${l(t.customerName)}</p>
          <p><strong>Date:</strong> ${l(it(t.completedAt))}</p>
          <p><strong>Status:</strong> ${l(pe[t.status].label)}</p>
        </div>
        <div class="section">
          <h2>Parts</h2>
          <div class="row"><strong>Product</strong><strong>Qty</strong><strong>Price</strong><strong>Total</strong></div>
          ${t.parts.map(n=>`<div class="row"><span>${l(n.name)}</span><span>${l(String(n.quantity))}</span><span>${l(f(n.price))}</span><span>${l(f(n.total))}</span></div>`).join("")}
        </div>
        <div class="section">
          <h2>Labour</h2>
          <p>${l(String(t.labour.hours))}h × ${l(f(t.labour.rate))} = ${l(f(t.labour.total))}</p>
        </div>
        <div class="summary">
          <div><span>Subtotal</span><span>${l(f(t.summary.subtotal))}</span></div>
          <div><span>VAT (21%)</span><span>${l(f(t.summary.vat))}</span></div>
          <div><span>Total</span><strong>${l(f(t.summary.total))}</strong></div>
        </div>
      </body>
    </html>
  `}function mn(t){const n=window.open("","_blank","width=960,height=720,noopener,noreferrer");return n?(n.document.open(),n.document.write(pn(t)),n.document.close(),n.focus(),window.setTimeout(()=>{n.print()},180),!0):!1}async function bn(t){var Be,We,Oe,Re,Fe,Ke,ze,Ve;if(!t)return;document.body.style.overflow="";const n=await It();if(!n)return;if(!n.isAdmin&&!n.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Dt(n.activeGarage);const u=n.isAdmin?null:[(Be=n.activeGarage)==null?void 0:Be.id].filter(Boolean),{shell:p,contentArea:b,setUnreadEmailCount:k}=qt({activePage:"werkbon",title:"Werkbon & Payments",headerNote:"Manage invoices and payment status",userEmail:n.user.email,onLogout:Ht,garage:n.activeGarage,isAdmin:n.isAdmin}),d=document.createElement("div");d.id="werkbonCreateModalHost",t.replaceChildren(p,d),nn(),b.innerHTML=`
    <section class="werkbon-page">
      <div id="werkbonNotice" class="werkbon-notice" hidden aria-live="polite"></div>

      <div class="werkbon-topbar">
        <label class="werkbon-filter-field werkbon-search-field">
          <input id="werkbonSearch" type="search" placeholder="Search license plate or customer" />
        </label>

        <label class="werkbon-filter-field werkbon-status-field">
          <select id="werkbonStatusFilter" aria-label="Filter werkbon by status">
            <option value="all">All statuses</option>
            <option value="pending">Openstaand</option>
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
  `;const S=b.querySelector("#werkbonNotice"),q=b.querySelector("#werkbonSummary"),A=b.querySelector("#werkbonList"),M=b.querySelector("#werkbonDrawer"),x=b.querySelector("#werkbonCreateTrigger"),h=b.querySelector("#werkbonStatusFilter"),F=b.querySelector("#werkbonSearch"),I=new URLSearchParams(window.location.search),U=String(I.get("action")??"").toLowerCase()==="create";let w=[],T=((We=w[0])==null?void 0:We.id)??"",J="",R=!1,K="",z=!1,E=1,C=!1,B="",ne=!1,P="idle",Q="",V=0,le=0,m=tt(),Te=0,ie=null,ee=null,Z={...n.activeGarage,mollieMethod:String(((Oe=n.activeGarage)==null?void 0:Oe.mollieMethod)??"none"),mollieApiKey:((Re=n.activeGarage)==null?void 0:Re.mollieApiKey)??null,paymentDays:parseInt(String(((Fe=n.activeGarage)==null?void 0:Fe.paymentDays)??"14"),10)||14,garageName:String(((Ke=n.activeGarage)==null?void 0:Ke.garageName)||((ze=n.activeGarage)==null?void 0:ze.name)||"Garage")};const be=new Map,D=e=>{S instanceof HTMLElement&&(S.textContent=e,S.hidden=!e,window.clearTimeout(Te),e&&(Te=window.setTimeout(()=>{S.hidden=!0,S.textContent=""},2600)))},W=(e,r="success")=>{if(r==="error"){D(String(e||"Er ging iets mis"));return}D(String(e||"Actie uitgevoerd."))},ut=async()=>{var r;const e=(r=n.activeGarage)==null?void 0:r.id;if(!(!N||!e))try{const{data:a,error:i}=await N.from("garages").select("*").eq("id",e).maybeSingle();if(i||!a)return;Z={...Z,paymentLink:a.payment_link??Z.paymentLink??null,mollieMethod:String(a.mollie_method??Z.mollieMethod??"none"),mollieApiKey:a.mollie_api_key??Z.mollieApiKey??null,paymentDays:parseInt(String(a.payment_days??Z.paymentDays??14),10)||14,garageName:String(a.garage_name||a.name||Z.garageName||"Garage")}}catch{}},ae=()=>{ie instanceof HTMLElement&&ie.remove(),ie=null,ee=null},_e=({title:e,body:r,confirmLabel:a,cancelLabel:i,confirmClassName:o=""})=>new Promise(s=>{const c=document.createElement("div");c.innerHTML=`
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title" id="confirm-title">${l(e)}</h2>
            <p id="confirm-desc">${l(r)}</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button subtle" type="button" data-confirm-action="cancel">${l(i)}</button>
            <button class="button ${l(o)}" type="button" data-confirm-action="continue">${l(a)}</button>
          </div>
        </div>
      </div>
    `,document.body.append(c);const g=c.querySelector(".confirm-dialog-overlay"),v=c.querySelector('[data-confirm-action="continue"]');v instanceof HTMLButtonElement&&window.setTimeout(()=>v.focus(),50);const $=y=>{c.remove(),s(y)};g instanceof HTMLElement&&g.addEventListener("click",y=>{y.target===g&&$(!1)}),c.addEventListener("click",y=>{const j=y.target instanceof HTMLElement?y.target:null,G=j==null?void 0:j.closest("[data-confirm-action]");G instanceof HTMLElement&&$(G.dataset.confirmAction==="continue")}),c.addEventListener("keydown",y=>{y.key==="Escape"&&$(!1)})}),pt=()=>{V&&(window.clearTimeout(V),V=0),le+=1,E=1,C=!1,B="",ne=!1,P="idle",Q="",m=tt()},H=({forceMount:e=!1,refreshContent:r=!1}={})=>{if(!(d instanceof HTMLElement))return;if(!z){d.innerHTML&&(d.innerHTML=""),document.body.style.overflow="";return}if(!((e?null:d.querySelector(".werkbon-create-modal"))instanceof HTMLElement)){d.innerHTML=sn({isOpen:z,step:E,state:m,rdwStatus:P,rdwError:Q,selectedPaymentMethod:B,isSaving:ne,paymentModalOpen:C}),document.body.style.overflow="hidden";return}const i=d.querySelector(".werkbon-create-stepper");if(i instanceof HTMLElement&&(i.innerHTML=at(E)),r){const $=d.querySelector(".werkbon-create-content");$ instanceof HTMLElement&&($.innerHTML=rt({step:E,state:m,rdwStatus:P}))}const o=d.querySelector('[data-create-action="prev-step"]');o instanceof HTMLButtonElement&&(o.disabled=E===1);const s=d.querySelector(".werkbon-create-actions-left"),c=d.querySelector(".werkbon-create-actions-right");if(s instanceof HTMLElement&&c instanceof HTMLElement){const $=ln({step:E,rdwStatus:P,isSaving:ne});s.innerHTML=$.left,c.innerHTML=$.right}const g=d.querySelector('[data-create-saving-host="true"]');g instanceof HTMLElement&&(g.innerHTML=ne?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':"");const v=d.querySelector('[data-create-payment-host="true"]');v instanceof HTMLElement&&(v.innerHTML=C?dt(B):""),document.body.style.overflow="hidden"},fe=({rerenderPage:e=!1}={})=>{if(z=!1,ae(),pt(),e){_();return}H()},ke=async()=>{if(!Vt(m)){fe();return}await Wt("Er staan niet-opgeslagen gegevens in deze werkbon. Weet je zeker dat je wilt sluiten?","Werkbon sluiten")&&fe()},mt=async e=>{if(!N||!e)return Date.now()%1e5;const{data:r,error:a}=await N.from("garages").select("invoice_sequence").eq("id",e).maybeSingle();if(a)throw a;const o=Math.max(1e3,Number((r==null?void 0:r.invoice_sequence)??1e3))+1,{error:s}=await N.from("garages").update({invoice_sequence:o}).eq("id",e);if(s)throw s;return o},bt=async()=>{var G,Ge,Ue,Ye,Je,Qe,Ze;const e=(G=n.activeGarage)==null?void 0:G.id;if(!e)throw new Error("Geen garage gevonden voor deze gebruiker.");const r=X(((Ge=m.voertuig)==null?void 0:Ge.kenteken)??"");if(r.length<6)throw new Error("Voer eerst een geldig kenteken in.");if(P!=="success")throw new Error("Haal eerst RDW voertuiggegevens op.");const a=te(m),i=await mt(e),s=`wb-${String(Date.now()).slice(-4)}`,c=`F-${String(i).padStart(6,"0")}`,g=new Date().toISOString(),v=String(((Ue=m.klant)==null?void 0:Ue.naam)??"").trim()||"Onbekende klant",$=String(((Ye=m.voertuig)==null?void 0:Ye.title)??"").trim()||"Voertuig",y=Qt(m),j={werkbon_id:s,status:"draft",werkbon_created:!0,customer_name:v,customer_email:String(((Je=m.klant)==null?void 0:Je.email)??"").trim(),customer_phone:String(((Qe=m.klant)==null?void 0:Qe.telefoon)??"").trim(),car_model:$,service_types:y,km_stand:0,vat_enabled:L(m.btw)>0,description:String(((Ze=m.klant)==null?void 0:Ze.omschrijving)??"").trim(),internal_note:"",invoice_number:c,paid_at:B?new Date().toISOString().slice(0,10):null,completed_at:g,parts:a.onderdelenRows.map(Se=>({name:Se.naam,quantity:Se.aantal,price:Se.prijs})),labour:{hours:a.labourHours,rate:a.labourRate},totals:{subtotal:a.subtotaal,vat:a.btwBedrag,total:a.totaal},payment_method:B};return{garageId:e,kenteken:r,completedAt:g,completionNotes:j,serviceSummary:y.join(", "),werkbonId:s,invoiceNumber:c}},ft=async()=>{if(!N)throw new Error("Supabase is niet geconfigureerd.");ne=!0,H();try{const e=await bt(),{data:r,error:a}=await N.from("completed_appointments").insert({garage_id:e.garageId,booking_id:null,completed_at:e.completedAt,appointment_date:e.completedAt.slice(0,10),appointment_time:e.completedAt.slice(11,19),license_plate:e.kenteken,service:e.serviceSummary||"Onderhoud",completion_notes:JSON.stringify(e.completionNotes)}).select("id, booking_id, garage_id, completed_at, created_at, license_plate, service, completion_notes").single();if(a)throw a;const i=nt(r);w=[i,...w],T=i.id,D(`Werkbon ${e.werkbonId} opgeslagen als ${e.invoiceNumber}.`),fe()}finally{ne=!1,_()}},kt=async()=>{var g,v,$;const e=await Gt(),r=te(m),a=new e({unit:"pt",format:"a4"}),i=String(((g=m.voertuig)==null?void 0:g.kenteken)??"-"),o=String(((v=m.klant)==null?void 0:v.naam)??"Onbekende klant"),s=String((($=m.klant)==null?void 0:$.omschrijving)??"").trim();let c=56;a.setFont("helvetica","bold"),a.setFontSize(18),a.text("Werkbon / Factuur",42,c),c+=26,a.setFont("helvetica","normal"),a.setFontSize(11),a.text(`Datum: ${new Date().toLocaleDateString("nl-NL")}`,42,c),c+=16,a.text(`Kenteken: ${i}`,42,c),c+=16,a.text(`Klant: ${o}`,42,c),c+=16,s&&(a.text(`Omschrijving: ${s}`,42,c,{maxWidth:520}),c+=22),a.setFont("helvetica","bold"),a.text("Onderdelen",42,c),c+=16,a.setFont("helvetica","normal"),r.onderdelenRows.forEach(y=>{a.text(`${y.naam}  x${y.aantal}  ${f(y.prijs)}  ${f(y.totaal)}`,42,c),c+=14}),c+=12,a.text(`Arbeid: ${f(r.arbeidTotaal)}`,42,c),c+=14,a.text(`Subtotaal: ${f(r.subtotaal)}`,42,c),c+=14,a.text(`BTW: ${f(r.btwBedrag)}`,42,c),c+=14,a.setFont("helvetica","bold"),a.text(`Totaal: ${f(r.totaal)}`,42,c),a.save(`werkbon-${X(i)||"nieuw"}.pdf`)},gt=async()=>{var i,o,s;if(!N)throw new Error("Supabase is niet geconfigureerd.");const e=String(((i=m.klant)==null?void 0:i.email)??"").trim();if(!e)throw new Error("Geen e-mailadres beschikbaar.");const r=te(m),{error:a}=await N.functions.invoke("send-werkbon-email",{body:{to:e,template:"werkbon_factuur_nl",subject:`Werkbon ${de(((o=m.voertuig)==null?void 0:o.kenteken)??"")}`,customerName:String(((s=m.klant)==null?void 0:s.naam)??"Klant"),total:r.totaal}});if(a)throw a},wt=()=>{var i,o,s;const e=String(((i=m.klant)==null?void 0:i.telefoon)??"").replace(/[^0-9]/g,""),r=te(m),a=`Hallo ${String(((o=m.klant)==null?void 0:o.naam)??"")}, uw werkbon (${de(((s=m.voertuig)==null?void 0:s.kenteken)??"")}) staat klaar. Totaal: ${f(r.totaal)}.`;window.open(`https://wa.me/${encodeURIComponent(e)}?text=${encodeURIComponent(a)}`,"_blank","noopener,noreferrer")},se=()=>{const e=d.querySelector("#vehicleLookupStatus");if(e instanceof HTMLElement){if(e.classList.remove("is-success","is-error"),P==="loading"){e.textContent="Kenteken controleren...";return}if(P==="success"){e.textContent="Kenteken gevonden",e.classList.add("is-success");return}if(P==="error"){e.textContent="Kenteken niet gevonden",e.classList.add("is-error");return}e.textContent="Typ kenteken om te zoeken"}},re=()=>{const e=d.querySelector('[data-create-action="next-step"]');if(e instanceof HTMLButtonElement){if(E===1){e.disabled=P!=="success";return}e.disabled=E===5}},Ae=()=>{var v,$,y,j,G;const e=d.querySelector("#vehiclePreviewTitle"),r=d.querySelector("#vehiclePreviewBuildYear"),a=d.querySelector("#vehiclePreviewApk"),i=d.querySelector("#vehiclePreviewColor"),o=d.querySelector("#vehiclePreviewFuel");if(!(e instanceof HTMLElement)||!(r instanceof HTMLElement)||!(a instanceof HTMLElement)||!(i instanceof HTMLElement)||!(o instanceof HTMLElement))return;const s=String(((v=m.voertuig)==null?void 0:v.title)??"").trim(),c=String((($=m.voertuig)==null?void 0:$.buildYear)??"").trim(),g=c?`${s||"Voertuig gegevens"} (${c})`:s||"Voertuig gegevens";e.textContent=g,r.textContent=c,a.textContent=String(((y=m.voertuig)==null?void 0:y.apkExpiryDate)??"").trim(),i.textContent=String(((j=m.voertuig)==null?void 0:j.color)??"").trim(),o.textContent=String(((G=m.voertuig)==null?void 0:G.fuel)??"").trim()},vt=()=>{const e=te(m),r=d.querySelector("[data-parts-subtotal-value]");r instanceof HTMLElement&&(r.textContent=f(e.onderdelenSubtotaal)),d.querySelectorAll("[data-part-total-index]").forEach(i=>{if(!(i instanceof HTMLElement))return;const o=Number(i.getAttribute("data-part-total-index")??-1),s=e.onderdelenRows[o];s&&(i.textContent=f(s.totaal))})},ge=()=>{const e=te(m),r={arbeid:f(e.arbeidTotaal),subtotaal:f(e.subtotaal),btw:f(e.btwBedrag),totaal:f(e.totaal)};d.querySelectorAll("[data-create-total]").forEach(i=>{if(!(i instanceof HTMLElement))return;const o=String(i.getAttribute("data-create-total")??"");o in r&&(i.textContent=r[o])})},ht=()=>{var a;const e=!!((a=m.arbeid)!=null&&a.enabled);d.querySelectorAll("[data-arbeid-field]").forEach(i=>{if(i instanceof HTMLInputElement){if(i.getAttribute("data-arbeid-field")==="enabled"){i.checked=e;return}i.disabled=!e}}),ge()},xe=async({showShortInputError:e=!1}={})=>{var i;const r=X(((i=m.voertuig)==null?void 0:i.kenteken)??"");if(r.length<6){P="idle",Q=e?"Voer minimaal 6 tekens in voor het kenteken.":"",se(),re();return}const a=++le;P="loading",Q="",se(),re();try{const o=await Xe(r);if(a!==le)return;if(!o){P="error",Q="Geen RDW voertuig gevonden voor dit kenteken.",m.voertuig={...m.voertuig,title:"",buildYear:"",apkExpiryDate:"",color:"",fuel:""},se(),Ae(),re();return}m.voertuig={...m.voertuig,kenteken:de(r),...o},P="success",Q="",se(),Ae(),re()}catch{if(a!==le)return;P="error",Q="RDW service is momenteel niet beschikbaar.",se(),re()}},ce=(e,r)=>{w=w.map(a=>a.id===e?st(r(a)):a)},yt=e=>w.find(r=>r.id===e)??null,we=e=>{var r;return String((e==null?void 0:e.garageId)||((r=n.activeGarage)==null?void 0:r.id)||"")},St=e=>{if(!(A instanceof HTMLElement))return null;const r=A.querySelectorAll("[data-werkbon-row-id]");for(const a of r)if(a instanceof HTMLElement&&String(a.dataset.werkbonRowId??"")===String(e))return a;return null},ve=async(e,r)=>{if(!N)throw new Error("Supabase is niet geconfigureerd.");const a=String(e.completedAppointmentId||e.id||"");if(!a)throw new Error("Werkbon ID ontbreekt.");const i=we(e);let o=N.from("completed_appointments").select("id, garage_id, completion_notes").eq("id",a);i&&(o=o.eq("garage_id",i));const{data:s,error:c}=await o.maybeSingle();if(c)throw c;if(!s)throw new Error("Werkbon niet gevonden.");const v={...Le(s.completion_notes),...r};let $=N.from("completed_appointments").update({completion_notes:JSON.stringify(v)}).eq("id",a);i&&($=$.eq("garage_id",i));const{error:y}=await $;if(y)throw y;return v},$t=async e=>{const r=yt(e);if(!r)throw new Error("Werkbon niet gevonden.");const a=String(r.completedAppointmentId||r.id||"");if(!a||!N)return{invoice:r,customer_name:r.customerName,customer_email:"",customer_phone:"",factuurnummer:"",total:r.summary.total,status:r.status};const i=we(r);let o=N.from("werkbonnen").select("werkbon_id, garage_id, customer_name, customer_email, customer_phone, invoice_number, total_amount, invoice_status, payment_link, payment_link_sent_at, payment_method").eq("werkbon_id",a);i&&(o=o.eq("garage_id",i));const{data:s,error:c}=await o.maybeSingle();if(c)throw c;const g=Number((s==null?void 0:s.total_amount)??0);return{invoice:r,customer_name:String((s==null?void 0:s.customer_name)??r.customerName??"Klant"),customer_email:String((s==null?void 0:s.customer_email)??"").trim(),customer_phone:String((s==null?void 0:s.customer_phone)??"").trim(),factuurnummer:String((s==null?void 0:s.invoice_number)??"").trim(),total:Number.isFinite(g)&&g>0?g:r.summary.total,status:String((s==null?void 0:s.invoice_status)??r.status??"draft"),payment_link:String((s==null?void 0:s.payment_link)??"").trim(),payment_link_sent_at:String((s==null?void 0:s.payment_link_sent_at)??"").trim(),payment_method:String((s==null?void 0:s.payment_method)??"").trim()}},Ce=(e,r)=>{ce(e,a=>({...a,status:me(r)}))},Pe=async e=>e.customer_email?(await ve(e.invoice,{status:"sent"}),Ce(e.invoice.id,"sent"),W("Factuur verstuurd per e-mail ✓","success"),!0):(W("Geen e-mailadres bekend voor deze klant","error"),!1),Ne=async e=>{if(!e.customer_phone)return W("Geen telefoonnummer bekend voor deze klant","error"),!1;const r=Xt(e.customer_phone);if(!r)return W("Geen telefoonnummer bekend voor deze klant","error"),!1;const a=Z||n.activeGarage,i=String((a==null?void 0:a.mollieMethod)||"none"),o=Math.max(1,parseInt(String((a==null?void 0:a.paymentDays)??14),10)||14),s=String((a==null?void 0:a.garageName)||(a==null?void 0:a.name)||"Uw garage");let c=null;try{c=await Nt(a,{totalAmount:e.total,factuurnummer:e.factuurnummer||"",customerName:e.customer_name||"Klant",paymentDays:o},y=>W(y,"error"),N)}catch{}if(i!=="none"&&!c)return W("Geen betaallink gemaakt. Controleer Mollie API-sleutel/instellingen en probeer opnieuw.","error"),!1;const g=[`Beste ${e.customer_name||"klant"},`,"",`Hierbij uw factuur van ${s}.`,"",`Factuurnummer: ${e.factuurnummer||"-"}`,`Totaalbedrag: €${en(e.total)}`,`Betaaltermijn: ${o} dagen`];c&&g.push("","Betaal eenvoudig via Mollie:",c),g.push("","Met vriendelijke groet,",s);const v=g.join(`
`),$=`https://wa.me/${encodeURIComponent(r)}?text=${encodeURIComponent(v)}`;if(window.open($,"_blank","noopener,noreferrer"),c)try{await ve(e.invoice,{status:e.invoice.status!=="paid"?"sent":e.invoice.status,payment_link:c,payment_link_sent_at:new Date().toISOString(),payment_method:"mollie"});const y=new Date().toISOString(),j=w.findIndex(G=>G.id===e.invoice.id);j!==-1&&(w[j]={...w[j],status:w[j].status!=="paid"?"sent":w[j].status,paymentLink:c,paymentLinkSentAt:y,paymentMethod:"mollie"})}catch{}else Ce(e.invoice.id,"sent");return W("WhatsApp bericht geopend ✓","success"),!0},Mt=(e,r)=>{ae();const a=e.getBoundingClientRect(),i=document.createElement("div");i.className="send-dropdown",i.setAttribute("data-send-dropdown","true"),i.innerHTML=`
      <button type="button" data-send-option="email" data-werkbon-id="${l(r.invoice.id)}">
        📧 Per e-mail ${r.customer_email?"":'<span class="send-dropdown-muted">(geen e-mail)</span>'}
      </button>
      <button type="button" data-send-option="whatsapp" data-werkbon-id="${l(r.invoice.id)}">
        💬 Via WhatsApp ${r.customer_phone?"":'<span class="send-dropdown-muted">(geen telefoon)</span>'}
      </button>
      <button type="button" data-send-option="both" data-werkbon-id="${l(r.invoice.id)}">
        📤 Beide versturen
      </button>
    `,document.body.append(i);const o=window.innerWidth,s=window.innerHeight,c=i.getBoundingClientRect(),g=Math.max(8,Math.min(a.left,o-c.width-8)),v=a.bottom+c.height+8>s?Math.max(8,a.top-c.height-8):a.bottom+6;i.style.left=`${Math.round(g)}px`,i.style.top=`${Math.round(v)}px`,ie=i,ee=r},he=(e,r)=>{if(!(e instanceof HTMLButtonElement))return()=>{};const a=e.textContent||"";return e.disabled=!0,e.textContent=r,()=>{e.disabled=!1,e.textContent=a}},Et=e=>new Promise(r=>{const a=St(e);if(!(a instanceof HTMLElement)){r();return}a.classList.add("werkbon-row-removing"),window.setTimeout(r,220)}),ye=(e,r=!1)=>{J=e,R=!0,K=r?e:"",_()},Ie=(e,r)=>{const a=w.find(i=>i.id===e);if(a){if(a.status==="paid"){D(`Invoice for ${oe(a.licensePlate)} is already paid.`),ye(e,!1);return}ce(e,i=>({...i,status:"sent"})),D(`Werkbon sent to customer via ${r}.`),ye(e,!1)}},Lt=async(e,r)=>{const a=w.find(s=>s.id===e);if(!a)return;if(a.status==="paid"){D(`Invoice for ${oe(a.licensePlate)} is already marked as paid.`),ye(e,!1);return}if(!await _e({title:"Werkbon markeren als betaald?",body:"Dit registreert de betaling als vandaag ontvangen.",confirmLabel:"Markeer als betaald",cancelLabel:"Annuleren"}))return;const o=he(r,"Opslaan...");try{await ve(a,{status:"paid",payment_method:"manual",payment_date:new Date().toISOString()}),ce(e,s=>({...s,status:"paid"})),W("Werkbon gemarkeerd als betaald ✓","success"),_()}catch{W("Er ging iets mis","error"),o();return}o()},Tt=e=>{const r=w.find(v=>v.id===e);if(!r||!(M instanceof HTMLElement))return;const a=M.querySelector("[data-werkbon-edit-status]"),i=M.querySelector("[data-werkbon-edit-hours]"),o=M.querySelector("[data-werkbon-edit-rate]");if(!(a instanceof HTMLSelectElement)||!(i instanceof HTMLInputElement)||!(o instanceof HTMLInputElement))return;const s=me(a.value),c=Math.max(0,Number(i.value||r.labour.hours)),g=Math.max(0,Number(o.value||r.labour.rate));ce(e,v=>({...v,status:s,labour:{...v.labour,hours:c,rate:g}})),K="",J=e,R=!0,D("Werkbon updated."),_()},_t=async(e,r)=>{const a=w.find(s=>s.id===e);if(!a||!await _e({title:"Werkbon verwijderen?",body:"Deze actie kan niet ongedaan worden gemaakt. De werkbon wordt permanent verwijderd.",confirmLabel:"Verwijderen",cancelLabel:"Annuleren",confirmClassName:"danger"}))return;const o=he(r,"Opslaan...");try{if(!N)throw new Error("Supabase is niet geconfigureerd.");const s=String(a.completedAppointmentId||a.id||"");if(!s)throw new Error("Werkbon ID ontbreekt.");let c=N.from("completed_appointments").delete().eq("id",s);const g=we(a);g&&(c=c.eq("garage_id",g));const{error:v}=await c;if(v)throw v}catch{W("Verwijderen mislukt","error"),o();return}await Et(e),w=w.filter(s=>s.id!==e),T===e&&(T=""),J===e&&(J="",R=!1,K=""),W("Werkbon verwijderd","success"),ae(),_(),o()},At=async(e,r,a)=>{var i;if(e==="view"){window.location.href=Me(`werkbon-detail.html?id=${encodeURIComponent(r)}`);return}if(e==="edit"){window.location.href=Me(`werkbon-detail.html?id=${encodeURIComponent(r)}&edit=true`);return}if(e==="cancel-edit"){K="",R=!1,_();return}if(e==="save-edit"){Tt(r);return}if(e==="send-customer"){if(!(a instanceof HTMLButtonElement))return;if(((i=ee==null?void 0:ee.invoice)==null?void 0:i.id)===r&&ie instanceof HTMLElement){ae();return}const o=he(a,"Laden...");try{const s=await $t(r);Mt(a,s)}catch{W("Er ging iets mis","error")}o();return}if(e==="send-sms"){Ie(r,"SMS");return}if(e==="send-whatsapp"){Ie(r,"WhatsApp");return}if(e==="mark-paid"){await Lt(r,a);return}if(e==="download-pdf"){const o=w.find(c=>c.id===r);if(!o)return;const s=mn(o);D(s?"Print dialog opened for PDF export.":"Allow pop-ups to export this werkbon as PDF.");return}e==="delete"&&await _t(r,a)},_=()=>{if(!(q instanceof HTMLElement)||!(A instanceof HTMLElement)||!(M instanceof HTMLElement)||!(d instanceof HTMLElement))return;const e=h instanceof HTMLSelectElement?h.value:"all",r=F instanceof HTMLInputElement?F.value.trim().toLowerCase():"",a=[...w].sort((o,s)=>{var c,g;return((c=Ee(s.completedAt))==null?void 0:c.getTime())-((g=Ee(o.completedAt))==null?void 0:g.getTime())}).filter(o=>{const s=[o.licensePlate,o.customerName,o.carModel].join(" ").toLowerCase(),c=!r||s.includes(r),g=e==="all"||o.status===e;return c&&g});q.innerHTML=an(w),A.innerHTML=a.length?a.map(o=>ct(o,T===o.id)).join(""):dn(a,!!(r||e!=="all"));const i=w.find(o=>o.id===J)??null;M.classList.toggle("is-open",R&&!!i),M.innerHTML=R&&i?on(i,K===i.id):"",H()};x==null||x.addEventListener("click",()=>{z=!0,E=1,H({forceMount:!0,refreshContent:!0})});const De=async e=>{const r=e.closest("[data-create-action]");if(!(r instanceof HTMLElement))return!1;const a=String(r.dataset.createAction??"");if(a==="attempt-close")return r.classList.contains("werkbon-create-shadow")&&e.closest(".werkbon-create-panel")||await ke(),!0;if(a==="jump-step"){const i=Number(r.dataset.step??E);return E=Math.min(5,Math.max(1,i)),C=!1,H({refreshContent:!0}),!0}if(a==="prev-step")return E=Math.max(1,E-1),H({refreshContent:!0}),!0;if(a==="next-step")return E===1&&P!=="success"&&(V&&(window.clearTimeout(V),V=0),await xe({showShortInputError:!0})),E===1&&P!=="success"?(D("Rond eerst de RDW validatie af."),!0):(E=Math.min(5,E+1),H({refreshContent:!0}),!0);if(a==="remove-part"){const i=Number(r.dataset.partIndex??-1);return Number.isFinite(i)&&i>=0&&(m.onderdelen.splice(i,1),H({refreshContent:!0})),!0}if(a==="quick-part")return m.onderdelen.push({naam:String(r.dataset.partName??"Onderdeel"),aantal:1,prijs:L(r.dataset.partPrice,0)}),H({refreshContent:!0}),!0;if(a==="add-manual-part")return m.onderdelen.push({naam:"",aantal:1,prijs:0}),H({refreshContent:!0}),!0;if(a==="open-payment")return C=!0,H(),!0;if(a==="close-payment")return C=!1,H(),!0;if(a==="select-payment")return B=String(r.dataset.paymentMethod??""),C=!1,D(`Betaalmethode gekozen: ${B}.`),H(),!0;if(a==="save-werkbon"){try{await ft()}catch(i){D(i instanceof Error?i.message:"Opslaan mislukt.")}return!0}if(a==="create-pdf"){try{await kt(),D("PDF gegenereerd.")}catch(i){D(i instanceof Error?i.message:"PDF genereren mislukt.")}return!0}if(a==="email-werkbon"){try{await gt(),D("Werkbon e-mail verstuurd.")}catch(i){D(i instanceof Error?i.message:"E-mail verzenden mislukt.")}return!0}return a==="whatsapp-werkbon"?(wt(),D("WhatsApp bericht geopend."),!0):!1},qe=e=>{if(!(e instanceof HTMLElement)||!z)return!1;if(e.matches("[data-create-field='kenteken']")){if(e instanceof HTMLInputElement){const r=de(e.value);e.value=r,m.voertuig={...m.voertuig,kenteken:r},P="idle",Q="",V&&(window.clearTimeout(V),V=0);const a=X(r),i=d.querySelector("#vehicleLookupStatus");i instanceof HTMLElement&&(i.classList.remove("is-success","is-error"),i.textContent=a.length>=6?"Kenteken controleren...":"Typ kenteken om te zoeken"),re(),a.length>=6&&(V=window.setTimeout(()=>{V=0,xe()},420))}return!0}if(e.matches("[data-create-field='btw']"))return e instanceof HTMLSelectElement&&(m.btw=L(e.value,21),ge()),!0;if(e.matches("[data-klant-field]")){const r=String(e.getAttribute("data-klant-field")??"");if(!r)return!0;const a=e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?e.value:"";return m.klant={...m.klant,[r]:a},!0}if(e.matches("[data-arbeid-field]")){const r=String(e.getAttribute("data-arbeid-field")??"");if(!r)return!0;const a={...m.arbeid};return r==="enabled"&&e instanceof HTMLInputElement?(a.enabled=e.checked,m.arbeid=a,ht(),!0):(e instanceof HTMLInputElement&&(a[r]=L(e.value,r==="tarief"?65:0)),m.arbeid=a,ge(),!0)}if(e.matches("[data-part-field]")){const r=Number(e.getAttribute("data-part-index")??-1),a=String(e.getAttribute("data-part-field")??"");if(!Number.isFinite(r)||r<0||!a)return!0;const o={...m.onderdelen[r]??{naam:"",aantal:1,prijs:0}};return a==="naam"&&(o.naam=e instanceof HTMLInputElement?e.value:""),a==="aantal"&&(o.aantal=e instanceof HTMLInputElement?L(e.value,1):1),a==="prijs"&&(o.prijs=e instanceof HTMLInputElement?L(e.value,0):0),m.onderdelen[r]=o,vt(),!0}return!1};d.addEventListener("click",async e=>{const r=e.target instanceof Element?e.target:null;r&&await De(r)}),d.addEventListener("input",e=>{const r=e.target;r instanceof HTMLElement&&qe(r)}),d.addEventListener("keydown",e=>{e.key==="Escape"&&z&&(e.preventDefault(),ke())}),b.addEventListener("click",async e=>{const r=e.target instanceof Element?e.target:null;if(!r||await De(r))return;const a=r.closest("[data-werkbon-action]");if(a instanceof HTMLElement){const o=String(a.dataset.werkbonAction??""),s=String(a.dataset.werkbonId??"");if(o==="close-modal"){R=!1,K="",_();return}if(o==="toggle"){T=T===s?"":s,_();return}if(o==="close-drawer"){T="",K="",_();return}if(!s)return;await At(o,s,a);return}const i=r.closest("[data-werkbon-row-id]");if(i instanceof HTMLElement&&!r.closest("button, input, select, textarea, a")){const o=String(i.dataset.werkbonRowId??"");o&&(T=T===o?"":o,_())}});const He=window.__werkbonDocumentClickHandler;typeof He=="function"&&document.removeEventListener("click",He);const je=async e=>{const r=e.target instanceof Element?e.target:null;if(!r)return;const a=r.closest("[data-send-option]");if(a instanceof HTMLButtonElement&&ee){e.preventDefault();const i=String(a.dataset.sendOption??""),o=ee;ae();try{i==="email"?await Pe(o):i==="whatsapp"?await Ne(o):i==="both"&&(await Pe(o),await Ne(o)),_()}catch{W("Er ging iets mis","error")}return}r.closest("[data-send-dropdown]")||r.closest('[data-werkbon-action="send-customer"]')||ae()};window.__werkbonDocumentClickHandler=je,document.addEventListener("click",je),b.addEventListener("keydown",e=>{const r=e.target instanceof HTMLElement?e.target:null;if(r){if(e.key==="Escape"&&z){e.preventDefault(),ke();return}if((e.key==="Enter"||e.key===" ")&&r.matches("[data-werkbon-row-id]")){e.preventDefault();const a=String(r.dataset.werkbonRowId??"");a&&(T=T===a?"":a,_())}if(e.key==="Escape"&&R){R=!1,K="",_();return}e.key==="Escape"&&T&&(T="",_())}}),b.addEventListener("input",e=>{const r=e.target;r instanceof HTMLElement&&qe(r)}),F==null||F.addEventListener("input",_),h==null||h.addEventListener("change",_),await ut();try{let e=[];try{e=await Ct({garageIds:u})}catch{}w=e.filter(o=>Le(o.completion_notes).werkbon_created===!0).map(nt).sort((o,s)=>new Date(s.completedAt??0).getTime()-new Date(o.completedAt??0).getTime());const r=new Set(w.map(o=>o.licensePlate).filter(o=>o&&o!=="UNKNOWN").map(o=>X(o)));for(const o of r)if(o&&!be.has(o))try{const s=await Xe(o);s&&be.set(o,s)}catch(s){console.error(`Failed to fetch vehicle for ${o}:`,s)}w=w.map(o=>{const s=X(o.licensePlate),c=be.get(s)||Ut(s);return{...o,carModel:c.title+(c.buildYear?` (${c.buildYear})`:"")||o.carModel}});const a=await jt({garageIds:u}),i=Bt(a);k(i.unread),T=((Ve=w[0])==null?void 0:Ve.id)??""}catch(e){w=[],k(0),console.error(e)}_(),U&&(z=!0,E=1,H({forceMount:!0,refreshContent:!0}))}const fn=document.querySelector("#app");Pt();bn(fn);
