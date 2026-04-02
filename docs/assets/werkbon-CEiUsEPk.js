import{e as jt,f as Bt,p as Pe,c as Wt}from"./theme-Bb-bjqwO.js";/* empty css                      */import{o as ot,g as Ot}from"./actionPopup-D9bI13ep.js";import{e as Ft,a as Rt,c as Kt,l as zt,g as Vt,s as Gt}from"./branding-CDwx9-lU.js";import{n as Q,f as it}from"./rdwService-CFrMDQAa.js";import{s as Ut}from"./confirmDialog-DSEC2-zx.js";const Ne={draft:{label:"Draft",className:"werkbon-status-draft"},link_sent:{label:"Link verstuurd",className:"werkbon-status-link-sent"},paid:{label:"Paid",className:"werkbon-status-paid"}},ke={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},Yt=new Map([["apk","apk"],["apk keuring","apk"],["keuring","apk"],["banden","banden"],["band","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"],["overig","other"],["overige","other"],["other","other"]]),st=["Voertuig","Klant","Onderdelen","Arbeid","Overzicht"],Jt=["contant","iDEAL","Mollie"],Qt=[{label:"APK keuring",name:"APK keuring",price:45},{label:"Banden",name:"Banden",price:120},{label:"Remblokken voor",name:"Remblokken voor",price:85},{label:"Remblokken achter",name:"Remblokken achter",price:75},{label:"Olie",name:"Olie",price:35},{label:"Filters",name:"Filters",price:28},{label:"Accu",name:"Accu",price:95},{label:"Overige",name:"Overige",price:0}],Zt="https://mkgfckxiusdcnqhethdy.supabase.co",Xt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",D=jt(Zt,Xt);function lt(){return{voertuig:{},klant:{},onderdelen:[],arbeid:{enabled:!1,uren:0,minuten:0,tarief:65},btw:21}}function T(e,n=0){const u=Number(e);return Number.isFinite(u)&&u>=0?u:n}function de(e){const n=Q(e).slice(0,6);return n?n.replace(/(.{2})(?=.)/g,"$1-"):""}function we(e,n){const u=String(e??"").trim();if(u)return u;const p=Q(n);return p?de(p):"UNKNOWN"}function en(e){var f,d,S,H,C,L,x;const n=String(((f=e==null?void 0:e.voertuig)==null?void 0:f.kenteken)??"").trim(),u=[(d=e==null?void 0:e.klant)==null?void 0:d.naam,(S=e==null?void 0:e.klant)==null?void 0:S.telefoon,(H=e==null?void 0:e.klant)==null?void 0:H.email,(C=e==null?void 0:e.klant)==null?void 0:C.omschrijving].some($=>String($??"").trim()),p=Array.isArray(e==null?void 0:e.onderdelen)&&e.onderdelen.some($=>String(($==null?void 0:$.naam)??"").trim()||T($==null?void 0:$.aantal)>0||T($==null?void 0:$.prijs)>0),b=T((L=e==null?void 0:e.arbeid)==null?void 0:L.uren)*60+T((x=e==null?void 0:e.arbeid)==null?void 0:x.minuten);return!!(n||u||p||b>0)}function ne(e){var L,x,$,K;const n=(Array.isArray(e.onderdelen)?e.onderdelen:[]).map(q=>{const U=T(q==null?void 0:q.aantal),v=T(q==null?void 0:q.prijs);return{naam:String((q==null?void 0:q.naam)??"").trim()||"Onderdeel",aantal:U,prijs:v,totaal:O(U*v)}}),u=O(n.reduce((q,U)=>q+U.totaal,0)),p=T((L=e.arbeid)==null?void 0:L.uren)+T((x=e.arbeid)==null?void 0:x.minuten)/60,b=T(($=e.arbeid)==null?void 0:$.tarief,65),f=(K=e.arbeid)!=null&&K.enabled?O(p*b):0,d=O(u+f),S=T(e.btw)>0?.21:0,H=O(d*S),C=O(d+H);return{onderdelenRows:n,onderdelenSubtotaal:u,labourHours:p,labourRate:b,arbeidTotaal:f,subtotaal:d,btwBedrag:H,totaal:C}}function J(e,n){return`<div class="werkbon-create-overview-row"><span>${l(e)}</span><strong>${l(n)}</strong></div>`}function ge(e,n,u){return`<div class="werkbon-create-overview-row"><span>${l(n)}</span><strong data-create-total="${l(e)}">${l(u)}</strong></div>`}function ut(e){return st.map((n,u)=>{const p=u+1,b=p===e?"is-active":p<e?"is-done":"",f=p<e?"is-done":"",d=u<st.length-1?`<span class="werkbon-create-step-separator ${f}" aria-hidden="true"></span>`:"";return`<button class="werkbon-create-step ${b}" type="button" data-create-action="jump-step" data-step="${p}"><span>${p}.</span>${l(n)}</button>${d}`}).join("")}function pt({step:e,state:n,rdwStatus:u}){var C,L,x,$,K,q,U,v,_,Z,F,z,V,E;const p=ne(n),b=String(((C=n.voertuig)==null?void 0:C.title)??"").trim(),f=String(((L=n.voertuig)==null?void 0:L.buildYear)??"").trim(),d=String(((x=n.voertuig)==null?void 0:x.apkExpiryDate)??"").trim(),S=f?`${b||"Voertuig gegevens"} (${f})`:b||"Voertuig gegevens",H=u==="loading"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Kenteken controleren...</p>':u==="success"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-success">Kenteken gevonden</p>':u==="error"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-error">Kenteken niet gevonden</p>':'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Typ kenteken om te zoeken</p>';return e===1?`
      <div class="werkbon-create-body-step">
        <label class="werkbon-create-appointment-field">
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text" inputmode="text" maxlength="8" data-create-field="kenteken" value="${l(String((($=n.voertuig)==null?void 0:$.kenteken)??""))}" placeholder="eg. 12-ABC-D1" required />
          ${H}
        </label>
        <div class="vehicle-preview-card werkbon-create-vehicle-preview" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${l(S)}</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">${l(f)}</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">${l(d)}</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">${l(String(((K=n.voertuig)==null?void 0:K.color)??""))}</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">${l(String(((q=n.voertuig)==null?void 0:q.fuel)??""))}</strong></span>
          </div>
        </div>
      </div>
    `:e===2?`
      <div class="werkbon-create-body-step">
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input type="text" data-klant-field="naam" value="${l(String(((U=n.klant)==null?void 0:U.naam)??""))}" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" />
          </label>
          <label>
            Phone number
            <input type="tel" data-klant-field="telefoon" value="${l(String(((v=n.klant)==null?void 0:v.telefoon)??""))}" autocomplete="tel" placeholder="eg. 0624987172" />
          </label>
        </div>
        <label class="werkbon-create-appointment-field">
          Email
          <input type="email" data-klant-field="email" value="${l(String(((_=n.klant)==null?void 0:_.email)??""))}" autocomplete="email" placeholder="eg. klant@email.com" />
        </label>
        <label class="werkbon-create-appointment-field">
          Omschrijving
          <textarea rows="4" data-klant-field="omschrijving" placeholder="Optioneel">${l(String(((Z=n.klant)==null?void 0:Z.omschrijving)??""))}</textarea>
        </label>
      </div>
    `:e===3?`
      <div class="werkbon-create-body-step werkbon-create-parts-step">
        <div class="werkbon-create-section-copy">
          <label class="werkbon-create-section-title">Onderdelen</label>
          <p class="werkbon-create-section-subtitle">Voeg onderdelen en materialen toe aan de werkbon</p>
        </div>
        <div class="werkbon-create-quick-parts">
          ${Qt.map(P=>`<button class="werkbon-chip-button" type="button" data-create-action="quick-part" data-part-name="${l(P.name)}" data-part-price="${l(String(P.price))}">+ ${l(P.label)}</button>`).join("")}
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
                ${n.onderdelen.map((P,W)=>`
                  <div class="werkbon-create-part-card">
                    <div class="werkbon-part-cell werkbon-part-cell-name">
                      <input type="text" class="werkbon-part-input" data-part-field="naam" data-part-index="${W}" value="${l(String(P.naam??""))}" placeholder="Onderdeel naam" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-price">
                      <div class="werkbon-currency-input">
                        <span class="werkbon-currency-symbol">€</span>
                        <input type="number" class="werkbon-part-input werkbon-part-input-price" min="0" step="0.01" data-part-field="prijs" data-part-index="${W}" value="${l(String(P.prijs??0))}" />
                      </div>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-quantity">
                      <input type="number" class="werkbon-part-input" min="1" step="1" data-part-field="aantal" data-part-index="${W}" value="${l(String(P.aantal??1))}" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-total">
                      <strong data-part-total-index="${W}">${l(g(O(T(P.aantal,1)*T(P.prijs))))}</strong>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-remove">
                      <button class="werkbon-remove-button" type="button" data-create-action="remove-part" data-part-index="${W}" aria-label="Verwijder onderdeel" title="Verwijder">
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
          <strong data-parts-subtotal-value="true">${l(g(p.onderdelenSubtotaal))}</strong>
        </div>
      </div>
    `:e===4?`
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
            <option value="21" ${T(n.btw)>0?"selected":""}>21%</option>
            <option value="0" ${T(n.btw)===0?"selected":""}>Geen BTW</option>
          </select>
        </label>
        <div class="werkbon-create-calculation-card">
          ${ge("arbeid","Arbeid",g(p.arbeidTotaal))}
          ${ge("subtotaal","Subtotaal",g(p.subtotaal))}
          ${ge("btw","BTW",g(p.btwBedrag))}
          ${ge("totaal","Totaal",g(p.totaal))}
        </div>
      </div>
    `:`
    <div class="werkbon-create-body-step werkbon-create-overview">
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Voertuig</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="1">Bewerken</button></div>
        ${J("Kenteken",String(((F=n.voertuig)==null?void 0:F.kenteken)??"-"))}
        ${J("Voertuig",b||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Klant</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="2">Bewerken</button></div>
        ${J("Naam",String(((z=n.klant)==null?void 0:z.naam)??"-")||"-")}
        ${J("Email",String(((V=n.klant)==null?void 0:V.email)??"-")||"-")}
        ${J("Telefoon",String(((E=n.klant)==null?void 0:E.telefoon)??"-")||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Onderdelen / Arbeid</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="3">Bewerken</button></div>
        ${J("Onderdelen",g(p.onderdelenSubtotaal))}
        ${J("Arbeid",g(p.arbeidTotaal))}
        ${J("BTW",g(p.btwBedrag))}
        ${J("Totaal",g(p.totaal))}
      </div>
    </div>
  `}async function tn(){var e,n;if((e=window.jspdf)!=null&&e.jsPDF)return window.jspdf.jsPDF;if(await new Promise((u,p)=>{const b=document.querySelector('script[data-js-pdf-cdn="true"]');if(b){b.addEventListener("load",()=>u(),{once:!0}),b.addEventListener("error",()=>p(new Error("Kon jsPDF niet laden.")),{once:!0});return}const f=document.createElement("script");f.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",f.async=!0,f.dataset.jsPdfCdn="true",f.onload=()=>u(),f.onerror=()=>p(new Error("Kon jsPDF niet laden.")),document.head.append(f)}),!((n=window.jspdf)!=null&&n.jsPDF))throw new Error("jsPDF is niet beschikbaar.");return window.jspdf.jsPDF}function nn(e=""){return{title:Q(e)||"Voertuig",buildYear:""}}function an(e){const n=String(e||"").trim();if(!n)return["other"];const u=n.split(n.includes(",")?/,/g:/\+|\/|&| and /gi).map(p=>p.trim()).filter(Boolean);return u.length?u:[n]}function rn(e){return Yt.get(String(e||"").trim().toLowerCase())||"other"}function mt(e){const n=String(e??"").trim();if(!n)return{key:"other",label:ke.other};const u=n.toLowerCase(),p=[{probe:"apk",key:"apk"},{probe:"band",key:"banden"},{probe:"airco",key:"airco"},{probe:"occasion",key:"occasions"},{probe:"brake",key:"brakes"},{probe:"onderhoud",key:"onderhoud"},{probe:"service",key:"onderhoud"},{probe:"overig",key:"other"}],b=rn(n);let f=b;if(b==="other"){const d=p.find(S=>u.includes(S.probe));d&&(f=d.key)}if(f==="other"){if(["other","overig","overige"].includes(u))return{key:f,label:ke.other};const d=n.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:f,label:d||n||ke.other}}return{key:f,label:ke[f]??n}}function on(e){const n=Array.isArray(e==null?void 0:e.onderdelen)?e.onderdelen:[],u=new Set,p=[];for(const b of n){const f=String((b==null?void 0:b.naam)??"").trim();if(!f)continue;const d=mt(f),S=`${d.key}:${d.label.toLowerCase()}`;u.has(S)||(u.add(S),p.push(d.label))}return p.length?p:["Onderhoud"]}function sn(e){return an(e).map(n=>{const{key:u,label:p}=mt(n);return`<span class="service-chip service-chip-${u}">${l(p)}</span>`}).join("")}function l(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function O(e){return Math.round(Number(e)*100)/100}function g(e){return`€${O(e).toFixed(2)}`}function Ce(e){const n=String(e??"").replace(/\D+/g,"");return n?n.startsWith("00")?n.slice(2):n.startsWith("0")?`31${n.slice(1)}`:n:""}function xe(e){const n=Number(e);return(Number.isFinite(n)?n:0).toFixed(2).replace(".",",")}function ve(e){const n=new Date(e);return Number.isNaN(n.getTime())?null:n}function ln(e){if(!e)return"";const n=ve(e);if(!n)return"";const u=n.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}),p=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${u} · ${p}`}function bt(e){const n=ve(e);return n?n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Unknown date"}function ie(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function De(e){const n=String(e??"draft").trim().toLowerCase();return["paid","betaald"].includes(n)?"paid":["link_sent","link-sent","link sent","linkverstuurd","link_verstuurd","link verstuurd","sent","send","verzonden"].includes(n)?"link_sent":(["draft","pending","openstaand"].includes(n),"draft")}function ue({status:e,paymentLink:n,paymentLinkSentAt:u,paidAt:p,paymentStatus:b}={}){const f=De(e);if(f==="paid")return"paid";const d=String(b??"").trim().toLowerCase(),S=!!String(p??"").trim();if(d==="paid"||S)return"paid";const H=!!(String(n??"").trim()||String(u??"").trim());return f==="link_sent"||H?"link_sent":"draft"}function He(e){if(!e)return{};if(typeof e=="object")return e;try{return JSON.parse(String(e))}catch{return{}}}function cn(e){return String(e??"").split(",").map(n=>n.trim()).filter(Boolean)}function ft(e){var H,C;const n=(e.parts??[]).map(L=>{const x=Number(L.quantity??0),$=Number(L.price??0);return{name:String(L.name??"Item"),quantity:x,price:$,total:O(x*$)}}),u=Number(((H=e.labour)==null?void 0:H.hours)??0),p=Number(((C=e.labour)==null?void 0:C.rate)??0),b=O(u*p),f=O(n.reduce((L,x)=>L+x.total,0)+b),d=O(f*.21),S=O(f+d);return{id:String(e.id??""),completedAppointmentId:String(e.completedAppointmentId??""),bookingId:String(e.bookingId??""),garageId:String(e.garageId??""),licensePlate:String(e.licensePlate??"UNKNOWN"),customerName:we(e.customerName,e.licensePlate),carModel:String(e.carModel??"Unknown vehicle"),serviceTypes:Array.isArray(e.serviceTypes)?e.serviceTypes.map(String):["Other"],completedAt:e.completedAt,status:ue({status:e.status,paymentLink:e.paymentLink,paymentLinkSentAt:e.paymentLinkSentAt,paidAt:e.paidAt,paymentStatus:e.paymentStatus}),parts:n,labour:{hours:u,rate:p,total:b},summary:{subtotal:f,vat:d,total:S},paymentLink:String(e.paymentLink??""),paymentLinkSentAt:String(e.paymentLinkSentAt??""),paymentMethod:String(e.paymentMethod??""),paidAt:String(e.paidAt??"")}}function ct(e){const n=He(e.completion_notes),u=Array.isArray(n.service_types)?n.service_types.map(String):cn(e.service),p=n.labour&&typeof n.labour=="object"?n.labour:{},b=Array.isArray(n.parts)?n.parts:[{name:"Service",quantity:1,price:0}],f=ue({status:n.status,paymentLink:n.payment_link,paymentLinkSentAt:n.payment_link_sent_at,paidAt:n.paid_at??n.paidAt,paymentStatus:n.payment_status}),d=String(e.license_plate??"");return ft({id:String(e.id??""),completedAppointmentId:String(e.id??""),bookingId:String(e.booking_id??""),garageId:String(e.garage_id??""),licensePlate:d,customerName:we(n.customer_name??n.customerName,d),carModel:String(n.car_model||n.carModel||"Voertuig"),serviceTypes:u.length?u:["Service"],completedAt:String(e.completed_at??e.created_at??new Date().toISOString()),status:f,werkbonCreated:n.werkbon_created===!0,parts:b,labour:{hours:Number(p.hours??0),rate:Number(p.rate??0)},paymentLink:String(n.payment_link??""),paymentLinkSentAt:String(n.payment_link_sent_at??""),paymentMethod:String(n.payment_method??""),paidAt:String(n.paid_at??n.paidAt??"")})}function dn(){const e=Pe("werkbon-detail.html");if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const n=document.createElement("link");n.rel="prefetch",n.as="document",n.href=e,document.head.append(n)}function kt(e,n=""){const u=ue({status:e,paymentLink:n}),p=Ne[u]??Ne.draft;return`<span class="status-chip ${p.className}">${p.label}</span>`}function un(e){const n=e.filter(d=>d.status!=="paid").reduce((d,S)=>d+S.summary.total,0),u=e.filter(d=>d.status==="link_sent").length,p=e.filter(d=>d.status==="draft").length,b=e.filter(d=>d.status==="paid").reduce((d,S)=>d+S.summary.total,0);return[{label:"Outstanding revenue",value:g(n),note:`${e.filter(d=>d.status!=="paid").length} open werkbon`},{label:"Ready to send",value:String(p),note:"Draft invoices waiting for customer delivery"},{label:"In payment flow",value:String(u),note:"Werkbonnen met verstuurde link"},{label:"Paid total",value:g(b),note:"Completed payments"}].map(d=>`
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${l(d.label)}</p>
          <strong class="werkbon-summary-value">${l(d.value)}</strong>
          <span class="metric-note">${l(d.note)}</span>
        </article>
      `).join("")}function pn(e){return`
    <div class="request-divider"></div>
    <div class="request-expanded werkbon-expanded">
      <div class="request-actions werkbon-bottom-actions">
        <button class="button subtle" type="button" data-werkbon-action="view" data-werkbon-id="${l(e.id)}">View Werkbon</button>
        <button class="button subtle" type="button" data-werkbon-action="edit" data-werkbon-id="${l(e.id)}">Edit</button>
        <button class="button subtle werkbon-pdf-button" type="button" data-werkbon-action="pdf-actions" data-werkbon-id="${l(e.id)}">📄 PDF ▾</button>
        <button class="button werkbon-betalen-button" type="button" data-werkbon-action="payment-actions" data-werkbon-id="${l(e.id)}">💳 Betalen ▾</button>
        <button class="button danger" type="button" data-werkbon-action="delete" data-werkbon-id="${l(e.id)}">Delete</button>
      </div>
    </div>
  `}function mn(e,n){if(!e)return"";const u=e.status==="paid"?"":`<button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${l(e.id)}">Mark as Paid</button>`;return`
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${l(ie(e.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${l(e.customerName)} · ${l(bt(e.completedAt))}</p>
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
              <strong>${l(e.customerName)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Vehicle</span>
              <strong>${l(e.carModel)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Status</span>
              ${kt(e.status,e.paymentLink)}
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
                        <option value="draft" ${e.status==="draft"?"selected":""}>Draft</option>
                        <option value="link_sent" ${e.status==="link_sent"?"selected":""}>Link verstuurd</option>
                        <option value="paid" ${e.status==="paid"?"selected":""}>Paid</option>
                      </select>
                    </label>
                    <label>
                      <span>Labour hours</span>
                      <input data-werkbon-edit-hours type="number" min="0" step="0.1" value="${l(String(e.labour.hours))}" />
                    </label>
                    <label>
                      <span>Price per hour</span>
                      <input data-werkbon-edit-rate type="number" min="0" step="0.01" value="${l(String(e.labour.rate))}" />
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
                ${wn(e)}
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
                  <strong>${l(String(e.labour.hours))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Price per hour</span>
                  <strong>${l(g(e.labour.rate))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Total</span>
                  <strong>${l(g(e.labour.total))}</strong>
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
              <div><span>Subtotal</span><strong>${l(g(e.summary.subtotal))}</strong></div>
              <div><span>VAT (21%)</span><strong>${l(g(e.summary.vat))}</strong></div>
              <div class="werkbon-summary-total"><span>Total price</span><strong>${l(g(e.summary.total))}</strong></div>
            </div>
          </section>
        </div>

        <div class="request-actions werkbon-bottom-actions werkbon-modal-actions">
          ${n?`
                <button class="button subtle" type="button" data-werkbon-action="cancel-edit" data-werkbon-id="${l(e.id)}">Cancel</button>
                <button class="button" type="button" data-werkbon-action="save-edit" data-werkbon-id="${l(e.id)}">Save Changes</button>
              `:`
                <button class="button subtle" type="button" data-werkbon-action="download-pdf" data-werkbon-id="${l(e.id)}">Download PDF</button>
                <button class="button subtle" type="button" data-werkbon-action="send-sms" data-werkbon-id="${l(e.id)}">Send via SMS</button>
                <button class="button subtle" type="button" data-werkbon-action="send-whatsapp" data-werkbon-id="${l(e.id)}">Send via WhatsApp</button>
                ${u}
              `}
        </div>
      </aside>
    </div>
  `}function gt(e,n){return`
    <article class="request-card werkbon-card ${n?"is-expanded":""}" data-werkbon-row-id="${l(e.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          <span class="plate-chip">${l(ie(e.licensePlate))}</span>
          <div class="request-info">
            <p class="request-name">${l(e.customerName)}</p>
            <p class="request-vehicle">${l(e.carModel)}</p>
            <div class="request-services">${sn(Array.isArray(e.serviceTypes)?e.serviceTypes.join(", "):e.serviceTypes)}</div>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${l(g(e.summary.total))}</strong>
          ${kt(e.status,e.paymentLink)}
          ${e.status==="paid"&&e.paidAt?`<span class="werkbon-paid-at">${l(ln(e.paidAt))}</span>`:""}
          </div>
          <button
            class="request-toggle ${n?"is-expanded":""}"
            type="button"
            data-werkbon-action="toggle"
            data-werkbon-id="${l(e.id)}"
            aria-expanded="${n?"true":"false"}"
            aria-label="${n?"Collapse werkbon actions":"Expand werkbon actions"}"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>

      ${n?pn(e):""}
    </article>
  `}function wt(e){return`
    <div class="werkbon-payment-overlay" role="presentation">
      <div class="werkbon-payment-dialog" role="dialog" aria-modal="true" aria-labelledby="werkbonPaymentTitle">
        <h3 id="werkbonPaymentTitle">Kies betaalmethode</h3>
        <div class="werkbon-payment-grid">
          ${Jt.map(n=>`
            <button
              class="button subtle werkbon-payment-method ${e===n?"is-active":""}"
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
  `}function bn({isOpen:e,step:n,state:u,rdwStatus:p,rdwError:b,selectedPaymentMethod:f,isSaving:d,paymentModalOpen:S}){if(!e)return"";const C=n===1&&!(p==="success");return`
    <div class="werkbon-create-modal ${e?"is-open":""}" role="presentation">
      <div class="werkbon-create-shadow" data-create-action="attempt-close" aria-hidden="true">
        <section class="werkbon-create-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonCreateTitle">
          <header class="werkbon-create-header">
            <div>
              
              <h2 id="werkbonCreateTitle">Werkbon Maken</h2>
            </div>
            <button class="icon-button" type="button" data-create-action="attempt-close" aria-label="Sluiten">&times;</button>
          </header>

          <nav class="werkbon-create-stepper" aria-label="Werkbon stappen">${ut(n)}</nav>

          <div class="werkbon-create-content">${pt({step:n,state:u,rdwStatus:p})}</div>

          <footer class="werkbon-create-actions">
            <div class="werkbon-create-actions-left">
              <button class="button subtle" type="button" data-create-action="prev-step" ${n===1?"disabled":""}>Vorige</button>
            </div>
            <div class="werkbon-create-actions-right">
              ${n<5?`<button class="button subtle" type="button" data-create-action="next-step" ${C?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${d?"disabled":""}>${d?"Opslaan...":"Opslaan"}</button>`}
            </div>
          </footer>

          <div data-create-saving-host="true">${d?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':""}</div>
        </section>

        <div data-create-payment-host="true">${S?wt(f):""}</div>
      </div>
    </div>
  `}function fn({step:e,rdwStatus:n,isSaving:u}){const p=e===1&&n!=="success";return{left:`<button class="button subtle" type="button" data-create-action="prev-step" ${e===1?"disabled":""}>Vorige</button>`,right:e<5?`<button class="button subtle" type="button" data-create-action="next-step" ${p?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${u?"disabled":""}>${u?"Opslaan...":"Opslaan"}</button>`}}function kn(e){return`
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${l(e)}</p>
      </div>
    </div>
  `}function gn(e,n){return e.length?e.map(gt).join(""):kn(n?"No invoices match the current filters.":"Completed appointments will appear here once a werkbon is created.")}function wn(e){return e.parts.map(n=>`
        <div class="werkbon-line-item">
          <span>${l(n.name)}</span>
          <span>${l(String(n.quantity))}</span>
          <span>${l(g(n.price))}</span>
          <strong>${l(g(n.total))}</strong>
        </div>
      `).join("")}function vn(e){return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Werkbon ${l(ie(e.licensePlate))}</title>
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
          <p><strong>License plate:</strong> ${l(ie(e.licensePlate))}</p>
          <p><strong>Customer:</strong> ${l(e.customerName)}</p>
          <p><strong>Date:</strong> ${l(bt(e.completedAt))}</p>
          <p><strong>Status:</strong> ${l(Ne[e.status].label)}</p>
        </div>
        <div class="section">
          <h2>Parts</h2>
          <div class="row"><strong>Product</strong><strong>Qty</strong><strong>Price</strong><strong>Total</strong></div>
          ${e.parts.map(n=>`<div class="row"><span>${l(n.name)}</span><span>${l(String(n.quantity))}</span><span>${l(g(n.price))}</span><span>${l(g(n.total))}</span></div>`).join("")}
        </div>
        <div class="section">
          <h2>Labour</h2>
          <p>${l(String(e.labour.hours))}h × ${l(g(e.labour.rate))} = ${l(g(e.labour.total))}</p>
        </div>
        <div class="summary">
          <div><span>Subtotal</span><span>${l(g(e.summary.subtotal))}</span></div>
          <div><span>VAT (21%)</span><span>${l(g(e.summary.vat))}</span></div>
          <div><span>Total</span><strong>${l(g(e.summary.total))}</strong></div>
        </div>
      </body>
    </html>
  `}function dt(e){const n=window.open("","_blank","width=960,height=720,noopener,noreferrer");return n?(n.document.open(),n.document.write(vn(e)),n.document.close(),n.focus(),window.setTimeout(()=>{n.print()},180),!0):!1}async function hn(e){var Ge,Ue,Ye,Je,Qe,Ze,Xe,et;if(!e)return;document.body.style.overflow="";const n=await Ft();if(!n)return;if(!n.isAdmin&&!n.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Rt(n.activeGarage);const u=n.isAdmin?null:[(Ge=n.activeGarage)==null?void 0:Ge.id].filter(Boolean),{shell:p,contentArea:b,setUnreadEmailCount:f}=Kt({activePage:"werkbon",title:"Werkbon & Payments",headerNote:"Manage invoices and payment status",userEmail:n.user.email,onLogout:zt,garage:n.activeGarage,isAdmin:n.isAdmin}),d=document.createElement("div");d.id="werkbonCreateModalHost",e.replaceChildren(p,d),dn(),b.innerHTML=`
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
            <option value="link_sent">Link verstuurd</option>
            <option value="paid">Paid</option>
          </select>
        </label>

        <div class="werkbon-create-trigger-wrap">
          <button id="werkbonCreateTrigger" class="button" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.001 5V19.002" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.002 12.0039H5" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Werkbon Maken</button>
        </div>
      </div>

      <div id="werkbonSummary" class="werkbon-summary-grid"></div>

      <section class="panel werkbon-panel">
        <div id="werkbonList" class="werkbon-list"></div>
      </section>

      <div id="werkbonDrawer" class="werkbon-drawer"></div>
    </section>
  `;const S=b.querySelector("#werkbonNotice"),H=b.querySelector("#werkbonSummary"),C=b.querySelector("#werkbonList"),L=b.querySelector("#werkbonDrawer"),x=b.querySelector("#werkbonCreateTrigger"),$=b.querySelector("#werkbonStatusFilter"),K=b.querySelector("#werkbonSearch"),q=new URLSearchParams(window.location.search),U=String(q.get("action")??"").toLowerCase()==="create";let v=[],_=((Ue=v[0])==null?void 0:Ue.id)??"",Z="",F=!1,z="",V=!1,E=1,P=!1,W="",ae=!1,N="idle",X="",G=0,pe=0,m=lt(),qe=0,se=null,te=null,Y={...n.activeGarage,mollieMethod:String(((Ye=n.activeGarage)==null?void 0:Ye.mollieMethod)??"none"),mollieApiKey:((Je=n.activeGarage)==null?void 0:Je.mollieApiKey)??null,paymentDays:parseInt(String(((Qe=n.activeGarage)==null?void 0:Qe.paymentDays)??"14"),10)||14,garageName:String(((Ze=n.activeGarage)==null?void 0:Ze.garageName)||((Xe=n.activeGarage)==null?void 0:Xe.name)||"Garage")};const he=new Map,I=t=>{S instanceof HTMLElement&&(S.textContent=t,S.hidden=!t,window.clearTimeout(qe),t&&(qe=window.setTimeout(()=>{S.hidden=!0,S.textContent=""},2600)))},A=(t,r="success")=>{if(r==="error"){I(String(t||"Er ging iets mis"));return}I(String(t||"Actie uitgevoerd."))},vt=async()=>{var r;const t=(r=n.activeGarage)==null?void 0:r.id;if(!(!D||!t))try{const{data:a,error:s}=await D.from("garages").select("*").eq("id",t).maybeSingle();if(s||!a)return;Y={...Y,paymentLink:a.payment_link??Y.paymentLink??null,mollieMethod:String(a.mollie_method??Y.mollieMethod??"none"),mollieApiKey:a.mollie_api_key??Y.mollieApiKey??null,paymentDays:parseInt(String(a.payment_days??Y.paymentDays??14),10)||14,garageName:String(a.garage_name||a.name||Y.garageName||"Garage")}}catch{}},re=()=>{se instanceof HTMLElement&&se.remove(),se=null,te=null},Ie=({title:t,body:r,confirmLabel:a,cancelLabel:s,confirmClassName:o=""})=>new Promise(i=>{const c=document.createElement("div");c.innerHTML=`
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title" id="confirm-title">${l(t)}</h2>
            <p id="confirm-desc">${l(r)}</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button subtle" type="button" data-confirm-action="cancel">${l(s)}</button>
            <button class="button ${l(o)}" type="button" data-confirm-action="continue">${l(a)}</button>
          </div>
        </div>
      </div>
    `,document.body.append(c);const k=c.querySelector(".confirm-dialog-overlay"),w=c.querySelector('[data-confirm-action="continue"]');w instanceof HTMLButtonElement&&window.setTimeout(()=>w.focus(),50);const y=h=>{c.remove(),i(h)};k instanceof HTMLElement&&k.addEventListener("click",h=>{h.target===k&&y(!1)}),c.addEventListener("click",h=>{const j=h.target instanceof HTMLElement?h.target:null,R=j==null?void 0:j.closest("[data-confirm-action]");R instanceof HTMLElement&&y(R.dataset.confirmAction==="continue")}),c.addEventListener("keydown",h=>{h.key==="Escape"&&y(!1)})}),ht=()=>{G&&(window.clearTimeout(G),G=0),pe+=1,E=1,P=!1,W="",ae=!1,N="idle",X="",m=lt()},B=({forceMount:t=!1,refreshContent:r=!1}={})=>{if(!(d instanceof HTMLElement))return;if(!V){d.innerHTML&&(d.innerHTML=""),document.body.style.overflow="";return}if(!((t?null:d.querySelector(".werkbon-create-modal"))instanceof HTMLElement)){d.innerHTML=bn({isOpen:V,step:E,state:m,rdwStatus:N,rdwError:X,selectedPaymentMethod:W,isSaving:ae,paymentModalOpen:P}),document.body.style.overflow="hidden";return}const s=d.querySelector(".werkbon-create-stepper");if(s instanceof HTMLElement&&(s.innerHTML=ut(E)),r){const y=d.querySelector(".werkbon-create-content");y instanceof HTMLElement&&(y.innerHTML=pt({step:E,state:m,rdwStatus:N}))}const o=d.querySelector('[data-create-action="prev-step"]');o instanceof HTMLButtonElement&&(o.disabled=E===1);const i=d.querySelector(".werkbon-create-actions-left"),c=d.querySelector(".werkbon-create-actions-right");if(i instanceof HTMLElement&&c instanceof HTMLElement){const y=fn({step:E,rdwStatus:N,isSaving:ae});i.innerHTML=y.left,c.innerHTML=y.right}const k=d.querySelector('[data-create-saving-host="true"]');k instanceof HTMLElement&&(k.innerHTML=ae?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':"");const w=d.querySelector('[data-create-payment-host="true"]');w instanceof HTMLElement&&(w.innerHTML=P?wt(W):""),document.body.style.overflow="hidden"},ye=({rerenderPage:t=!1}={})=>{if(V=!1,re(),ht(),t){M();return}B()},Se=async()=>{if(!en(m)){ye();return}await Ut("Er staan niet-opgeslagen gegevens in deze werkbon. Weet je zeker dat je wilt sluiten?","Werkbon sluiten")&&ye()},yt=async t=>{if(!D||!t)return Date.now()%1e5;const{data:r,error:a}=await D.from("garages").select("invoice_sequence").eq("id",t).maybeSingle();if(a)throw a;const o=Math.max(1e3,Number((r==null?void 0:r.invoice_sequence)??1e3))+1,{error:i}=await D.from("garages").update({invoice_sequence:o}).eq("id",t);if(i)throw i;return o},St=async()=>{var R,ee,fe,tt,nt,at,rt;const t=(R=n.activeGarage)==null?void 0:R.id;if(!t)throw new Error("Geen garage gevonden voor deze gebruiker.");const r=Q(((ee=m.voertuig)==null?void 0:ee.kenteken)??"");if(r.length<6)throw new Error("Voer eerst een geldig kenteken in.");if(N!=="success")throw new Error("Haal eerst RDW voertuiggegevens op.");const a=ne(m),s=await yt(t),i=`wb-${String(Date.now()).slice(-4)}`,c=`F-${String(s).padStart(6,"0")}`,k=new Date().toISOString(),w=we((fe=m.klant)==null?void 0:fe.naam,r),y=String(((tt=m.voertuig)==null?void 0:tt.title)??"").trim()||"Voertuig",h=on(m),j={werkbon_id:i,status:"draft",werkbon_created:!0,customer_name:w,customer_email:String(((nt=m.klant)==null?void 0:nt.email)??"").trim(),customer_phone:String(((at=m.klant)==null?void 0:at.telefoon)??"").trim(),car_model:y,service_types:h,km_stand:0,vat_enabled:T(m.btw)>0,description:String(((rt=m.klant)==null?void 0:rt.omschrijving)??"").trim(),internal_note:"",invoice_number:c,paid_at:W?new Date().toISOString().slice(0,10):null,completed_at:k,parts:a.onderdelenRows.map(Ae=>({name:Ae.naam,quantity:Ae.aantal,price:Ae.prijs})),labour:{hours:a.labourHours,rate:a.labourRate},totals:{subtotal:a.subtotaal,vat:a.btwBedrag,total:a.totaal},payment_method:W};return{garageId:t,kenteken:r,completedAt:k,completionNotes:j,serviceSummary:h.join(", "),werkbonId:i,invoiceNumber:c}},$t=async()=>{if(!D)throw new Error("Supabase is niet geconfigureerd.");ae=!0,B();try{const t=await St(),{data:r,error:a}=await D.from("completed_appointments").insert({garage_id:t.garageId,booking_id:null,completed_at:t.completedAt,appointment_date:t.completedAt.slice(0,10),appointment_time:t.completedAt.slice(11,19),license_plate:t.kenteken,service:t.serviceSummary||"Onderhoud",completion_notes:JSON.stringify(t.completionNotes)}).select("id, booking_id, garage_id, completed_at, created_at, license_plate, service, completion_notes").single();if(a)throw a;const s=ct(r);v=[s,...v],_=s.id,I(`Werkbon ${t.werkbonId} opgeslagen als ${t.invoiceNumber}.`),ye()}finally{ae=!1,M()}},Lt=async()=>{var k,w,y;const t=await tn(),r=ne(m),a=new t({unit:"pt",format:"a4"}),s=String(((k=m.voertuig)==null?void 0:k.kenteken)??"-"),o=we((w=m.klant)==null?void 0:w.naam,s),i=String(((y=m.klant)==null?void 0:y.omschrijving)??"").trim();let c=56;a.setFont("helvetica","bold"),a.setFontSize(18),a.text("Werkbon / Factuur",42,c),c+=26,a.setFont("helvetica","normal"),a.setFontSize(11),a.text(`Datum: ${new Date().toLocaleDateString("nl-NL")}`,42,c),c+=16,a.text(`Kenteken: ${s}`,42,c),c+=16,a.text(`Klant: ${o}`,42,c),c+=16,i&&(a.text(`Omschrijving: ${i}`,42,c,{maxWidth:520}),c+=22),a.setFont("helvetica","bold"),a.text("Onderdelen",42,c),c+=16,a.setFont("helvetica","normal"),r.onderdelenRows.forEach(h=>{a.text(`${h.naam}  x${h.aantal}  ${g(h.prijs)}  ${g(h.totaal)}`,42,c),c+=14}),c+=12,a.text(`Arbeid: ${g(r.arbeidTotaal)}`,42,c),c+=14,a.text(`Subtotaal: ${g(r.subtotaal)}`,42,c),c+=14,a.text(`BTW: ${g(r.btwBedrag)}`,42,c),c+=14,a.setFont("helvetica","bold"),a.text(`Totaal: ${g(r.totaal)}`,42,c),a.save(`werkbon-${Q(s)||"nieuw"}.pdf`)},Mt=async()=>{var s,o,i;if(!D)throw new Error("Supabase is niet geconfigureerd.");const t=String(((s=m.klant)==null?void 0:s.email)??"").trim();if(!t)throw new Error("Geen e-mailadres beschikbaar.");const r=ne(m),{error:a}=await D.functions.invoke("send-werkbon-email",{body:{to:t,template:"werkbon_factuur_nl",subject:`Werkbon ${de(((o=m.voertuig)==null?void 0:o.kenteken)??"")}`,customerName:String(((i=m.klant)==null?void 0:i.naam)??"Klant"),total:r.totaal}});if(a)throw a},Et=()=>{var s,o,i;const t=String(((s=m.klant)==null?void 0:s.telefoon)??"").replace(/[^0-9]/g,""),r=ne(m),a=`Hallo ${String(((o=m.klant)==null?void 0:o.naam)??"")}, uw werkbon (${de(((i=m.voertuig)==null?void 0:i.kenteken)??"")}) staat klaar. Totaal: ${g(r.totaal)}.`;window.open(`https://wa.me/${encodeURIComponent(t)}?text=${encodeURIComponent(a)}`,"_blank","noopener,noreferrer")},le=()=>{const t=d.querySelector("#vehicleLookupStatus");if(t instanceof HTMLElement){if(t.classList.remove("is-success","is-error"),N==="loading"){t.textContent="Kenteken controleren...";return}if(N==="success"){t.textContent="Kenteken gevonden",t.classList.add("is-success");return}if(N==="error"){t.textContent="Kenteken niet gevonden",t.classList.add("is-error");return}t.textContent="Typ kenteken om te zoeken"}},oe=()=>{const t=d.querySelector('[data-create-action="next-step"]');if(t instanceof HTMLButtonElement){if(E===1){t.disabled=N!=="success";return}t.disabled=E===5}},je=()=>{var w,y,h,j,R;const t=d.querySelector("#vehiclePreviewTitle"),r=d.querySelector("#vehiclePreviewBuildYear"),a=d.querySelector("#vehiclePreviewApk"),s=d.querySelector("#vehiclePreviewColor"),o=d.querySelector("#vehiclePreviewFuel");if(!(t instanceof HTMLElement)||!(r instanceof HTMLElement)||!(a instanceof HTMLElement)||!(s instanceof HTMLElement)||!(o instanceof HTMLElement))return;const i=String(((w=m.voertuig)==null?void 0:w.title)??"").trim(),c=String(((y=m.voertuig)==null?void 0:y.buildYear)??"").trim(),k=c?`${i||"Voertuig gegevens"} (${c})`:i||"Voertuig gegevens";t.textContent=k,r.textContent=c,a.textContent=String(((h=m.voertuig)==null?void 0:h.apkExpiryDate)??"").trim(),s.textContent=String(((j=m.voertuig)==null?void 0:j.color)??"").trim(),o.textContent=String(((R=m.voertuig)==null?void 0:R.fuel)??"").trim()},Tt=()=>{const t=ne(m),r=d.querySelector("[data-parts-subtotal-value]");r instanceof HTMLElement&&(r.textContent=g(t.onderdelenSubtotaal)),d.querySelectorAll("[data-part-total-index]").forEach(s=>{if(!(s instanceof HTMLElement))return;const o=Number(s.getAttribute("data-part-total-index")??-1),i=t.onderdelenRows[o];i&&(s.textContent=g(i.totaal))})},$e=()=>{const t=ne(m),r={arbeid:g(t.arbeidTotaal),subtotaal:g(t.subtotaal),btw:g(t.btwBedrag),totaal:g(t.totaal)};d.querySelectorAll("[data-create-total]").forEach(s=>{if(!(s instanceof HTMLElement))return;const o=String(s.getAttribute("data-create-total")??"");o in r&&(s.textContent=r[o])})},_t=()=>{var a;const t=!!((a=m.arbeid)!=null&&a.enabled);d.querySelectorAll("[data-arbeid-field]").forEach(s=>{if(s instanceof HTMLInputElement){if(s.getAttribute("data-arbeid-field")==="enabled"){s.checked=t;return}s.disabled=!t}}),$e()},Be=async({showShortInputError:t=!1}={})=>{var s;const r=Q(((s=m.voertuig)==null?void 0:s.kenteken)??"");if(r.length<6){N="idle",X=t?"Voer minimaal 6 tekens in voor het kenteken.":"",le(),oe();return}const a=++pe;N="loading",X="",le(),oe();try{const o=await it(r);if(a!==pe)return;if(!o){N="error",X="Geen RDW voertuig gevonden voor dit kenteken.",m.voertuig={...m.voertuig,title:"",buildYear:"",apkExpiryDate:"",color:"",fuel:""},le(),je(),oe();return}m.voertuig={...m.voertuig,kenteken:de(r),...o},N="success",X="",le(),je(),oe()}catch{if(a!==pe)return;N="error",X="RDW service is momenteel niet beschikbaar.",le(),oe()}},me=(t,r)=>{v=v.map(a=>a.id===t?ft(r(a)):a)},At=t=>v.find(r=>r.id===t)??null,Le=t=>{var r;return String((t==null?void 0:t.garageId)||((r=n.activeGarage)==null?void 0:r.id)||"")},Ct=t=>{if(!(C instanceof HTMLElement))return null;const r=C.querySelectorAll("[data-werkbon-row-id]");for(const a of r)if(a instanceof HTMLElement&&String(a.dataset.werkbonRowId??"")===String(t))return a;return null},Me=async(t,r)=>{if(!D)throw new Error("Supabase is niet geconfigureerd.");const a=String(t.completedAppointmentId||t.id||"");if(!a)throw new Error("Werkbon ID ontbreekt.");const s=Le(t);let o=D.from("completed_appointments").select("id, garage_id, completion_notes").eq("id",a);s&&(o=o.eq("garage_id",s));const{data:i,error:c}=await o.maybeSingle();if(c)throw c;if(!i)throw new Error("Werkbon niet gevonden.");const w={...He(i.completion_notes),...r};let y=D.from("completed_appointments").update({completion_notes:JSON.stringify(w)}).eq("id",a);s&&(y=y.eq("garage_id",s));const{error:h}=await y;if(h)throw h;return w},Ee=async t=>{const r=At(t);if(!r)throw new Error("Werkbon niet gevonden.");const a=String(r.completedAppointmentId||r.id||"");if(!a||!D)return{invoice:r,customer_name:r.customerName,customer_email:"",customer_phone:"",factuurnummer:"",total:r.summary.total,status:r.status};const s=Le(r);let o=D.from("werkbonnen").select("werkbon_id, garage_id, customer_name, customer_email, customer_phone, invoice_number, total_amount, invoice_status, payment_link, payment_link_sent_at, payment_method").eq("werkbon_id",a);s&&(o=o.eq("garage_id",s));const{data:i,error:c}=await o.maybeSingle();if(c)throw c;const k=Number((i==null?void 0:i.total_amount)??0);return{invoice:r,customer_name:String((i==null?void 0:i.customer_name)??r.customerName??"Klant"),customer_email:String((i==null?void 0:i.customer_email)??"").trim(),customer_phone:String((i==null?void 0:i.customer_phone)??"").trim(),factuurnummer:String((i==null?void 0:i.invoice_number)??"").trim(),total:Number.isFinite(k)&&k>0?k:r.summary.total,status:ue({status:(i==null?void 0:i.invoice_status)??r.status??"draft",paymentLink:(i==null?void 0:i.payment_link)??r.paymentLink,paymentLinkSentAt:(i==null?void 0:i.payment_link_sent_at)??r.paymentLinkSentAt,paidAt:r.paidAt}),payment_link:String((i==null?void 0:i.payment_link)??"").trim(),payment_link_sent_at:String((i==null?void 0:i.payment_link_sent_at)??"").trim(),payment_method:String((i==null?void 0:i.payment_method)??"").trim()}},We=(t,r)=>{me(t,a=>({...a,status:De(r)}))},Te=async t=>t.customer_email?(await Me(t.invoice,{status:"link_sent"}),We(t.invoice.id,"link_sent"),A("Factuur verstuurd per e-mail ✓","success"),!0):(A("Geen e-mailadres bekend voor deze klant","error"),!1),be=async t=>{var h,j;if(!t.customer_phone)return A("Geen telefoonnummer bekend voor deze klant","error"),!1;const r=Ce(t.customer_phone);if(!r)return A("Geen telefoonnummer bekend voor deze klant","error"),!1;const a=Y||n.activeGarage,s=String((a==null?void 0:a.mollieMethod)||"none"),o=Math.max(1,parseInt(String((a==null?void 0:a.paymentDays)??14),10)||14),i=String((a==null?void 0:a.garageName)||(a==null?void 0:a.name)||"Uw garage");let c=null;try{c=await Ot(a,{totalAmount:t.total,factuurnummer:t.factuurnummer||"",customerName:t.customer_name||"Klant",paymentDays:o,completedAppointmentId:((h=t.invoice)==null?void 0:h.completedAppointmentId)||((j=t.invoice)==null?void 0:j.id)||""},R=>A(R,"error"),D)}catch{}if(s!=="none"&&!c)return A("Geen betaallink gemaakt. Controleer Mollie API-sleutel/instellingen en probeer opnieuw.","error"),!1;const k=[`Beste ${t.customer_name||"klant"},`,"",`Hierbij uw factuur van ${i}.`,"",`Factuurnummer: ${t.factuurnummer||"-"}`,`Totaalbedrag: €${xe(t.total)}`,`Betaaltermijn: ${o} dagen`];c&&k.push("","Betaal eenvoudig via Mollie:",c),k.push("","Met vriendelijke groet,",i);const w=k.join(`
`),y=`https://wa.me/${encodeURIComponent(r)}?text=${encodeURIComponent(w)}`;if(window.open(y,"_blank","noopener,noreferrer"),c)try{await Me(t.invoice,{status:t.invoice.status!=="paid"?"link_sent":t.invoice.status,payment_link:c,payment_link_sent_at:new Date().toISOString(),payment_method:"mollie"});const R=new Date().toISOString(),ee=v.findIndex(fe=>fe.id===t.invoice.id);ee!==-1&&(v[ee]={...v[ee],status:v[ee].status!=="paid"?"link_sent":v[ee].status,paymentLink:c,paymentLinkSentAt:R,paymentMethod:"mollie"})}catch{}else We(t.invoice.id,"link_sent");return A("WhatsApp bericht geopend ✓","success"),!0},xt=async(t,r)=>{const a=await Ee(r),s=!!a.customer_email,o=!!Ce(a.customer_phone);return ot({triggerButton:t,title:"📄 PDF Acties",options:[{id:"download",icon:"⬇️",title:"Downloaden",description:"Sla de factuur op als PDF",onSelect:async i=>{const c=dt(a.invoice);i.forceClose(),A(c?"PDF wordt gedownload ✓":"Sta pop-ups toe om PDF te downloaden",c?"success":"error")}},{id:"email",icon:"📧",title:"Stuur via E-mail",description:s?"Verstuur naar klant e-mail":"⚠️ Geen e-mailadres bekend. Voeg een e-mailadres toe aan deze werkbon.",disabled:!s,onSelect:async(i,c)=>{i.setLoading(c,!0);const k=await Te(a);i.setLoading(c,!1),k&&(i.forceClose(),M())}},{id:"whatsapp",icon:"💬",title:"Stuur via WhatsApp",description:o?"Deel de factuur via WhatsApp":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.",disabled:!o,onSelect:async(i,c)=>{i.setLoading(c,!0);const k=await be(a);i.setLoading(c,!1),k&&(i.forceClose(),M())}}]})},Pt=async(t,r)=>{var k;const a=await Ee(r),s=a.invoice,o=!!Ce(a.customer_phone),c=String(((k=Y||n.activeGarage)==null?void 0:k.mollieMethod)||"none")!=="none";return ot({triggerButton:t,title:"💳 Betaalmethode",subtitle:`Totaal te betalen: €${xe(a.total)}`,options:[{id:"cash",icon:"💵",title:"Contant",description:"Registreer contante betaling",onSelect:async w=>{w.setBodyContent(`
              <div class="action-popup-confirm">
                <p class="action-popup-confirm-title">Bevestig contante betaling</p>
                <p class="action-popup-confirm-subtitle">€${l(xe(a.total))} ontvangen?</p>
                <div class="action-popup-confirm-actions">
                  <button type="button" class="button subtle" data-popup-cancel>Annuleren</button>
                  <button type="button" class="button" data-popup-confirm>✓ Bevestigen</button>
                </div>
              </div>
            `,y=>{const h=y.querySelector("[data-popup-cancel]"),j=y.querySelector("[data-popup-confirm]");h==null||h.addEventListener("click",()=>w.forceClose()),j==null||j.addEventListener("click",async()=>{await Fe(s.id,t),w.forceClose(),M(),A("Contante betaling geregistreerd ✓","success")})})}},{id:"mollie_whatsapp",icon:"💬",title:"Betaallink via WhatsApp",description:c?o?"Stuur iDEAL link naar klant":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.":"⚠️ Geen Mollie account verbonden. Ga naar Instellingen → Betalingen.",disabled:!c||!o,onSelect:async(w,y)=>{w.setLoading(y,!0);const h=await be(a);w.setLoading(y,!1),h&&(w.forceClose(),M(),A("Betaallink verstuurd via WhatsApp ✓","success"))}}]})},Nt=(t,r)=>{re();const a=t.getBoundingClientRect(),s=document.createElement("div");s.className="send-dropdown",s.setAttribute("data-send-dropdown","true"),s.innerHTML=`
      <button type="button" data-send-option="email" data-werkbon-id="${l(r.invoice.id)}">
        📧 Per e-mail ${r.customer_email?"":'<span class="send-dropdown-muted">(geen e-mail)</span>'}
      </button>
      <button type="button" data-send-option="whatsapp" data-werkbon-id="${l(r.invoice.id)}">
        💬 Via WhatsApp ${r.customer_phone?"":'<span class="send-dropdown-muted">(geen telefoon)</span>'}
      </button>
      <button type="button" data-send-option="both" data-werkbon-id="${l(r.invoice.id)}">
        📤 Beide versturen
      </button>
    `,document.body.append(s);const o=window.innerWidth,i=window.innerHeight,c=s.getBoundingClientRect(),k=Math.max(8,Math.min(a.left,o-c.width-8)),w=a.bottom+c.height+8>i?Math.max(8,a.top-c.height-8):a.bottom+6;s.style.left=`${Math.round(k)}px`,s.style.top=`${Math.round(w)}px`,se=s,te=r},ce=(t,r)=>{if(!(t instanceof HTMLButtonElement))return()=>{};const a=t.textContent||"";return t.disabled=!0,t.textContent=r,()=>{t.disabled=!1,t.textContent=a}},Dt=t=>new Promise(r=>{const a=Ct(t);if(!(a instanceof HTMLElement)){r();return}a.classList.add("werkbon-row-removing"),window.setTimeout(r,220)}),_e=(t,r=!1)=>{Z=t,F=!0,z=r?t:"",M()},Oe=(t,r)=>{const a=v.find(s=>s.id===t);if(a){if(a.status==="paid"){I(`Invoice for ${ie(a.licensePlate)} is already paid.`),_e(t,!1);return}me(t,s=>({...s,status:"link_sent"})),I(`Werkbon sent to customer via ${r}.`),_e(t,!1)}},Fe=async(t,r)=>{const a=v.find(i=>i.id===t);if(!a)return;if(a.status==="paid"){I(`Invoice for ${ie(a.licensePlate)} is already marked as paid.`),_e(t,!1);return}if(!await Ie({title:"Werkbon markeren als betaald?",body:"Dit registreert de betaling als vandaag ontvangen.",confirmLabel:"Markeer als betaald",cancelLabel:"Annuleren"}))return;const o=ce(r,"Opslaan...");try{await Me(a,{status:"paid",payment_method:"manual",payment_date:new Date().toISOString()}),me(t,i=>({...i,status:"paid"})),A("Werkbon gemarkeerd als betaald ✓","success"),M()}catch{A("Er ging iets mis","error"),o();return}o()},Ht=t=>{const r=v.find(w=>w.id===t);if(!r||!(L instanceof HTMLElement))return;const a=L.querySelector("[data-werkbon-edit-status]"),s=L.querySelector("[data-werkbon-edit-hours]"),o=L.querySelector("[data-werkbon-edit-rate]");if(!(a instanceof HTMLSelectElement)||!(s instanceof HTMLInputElement)||!(o instanceof HTMLInputElement))return;const i=De(a.value),c=Math.max(0,Number(s.value||r.labour.hours)),k=Math.max(0,Number(o.value||r.labour.rate));me(t,w=>({...w,status:i,labour:{...w.labour,hours:c,rate:k}})),z="",Z=t,F=!0,I("Werkbon updated."),M()},qt=async(t,r)=>{const a=v.find(i=>i.id===t);if(!a||!await Ie({title:"Werkbon verwijderen?",body:"Deze actie kan niet ongedaan worden gemaakt. De werkbon wordt permanent verwijderd.",confirmLabel:"Verwijderen",cancelLabel:"Annuleren",confirmClassName:"danger"}))return;const o=ce(r,"Opslaan...");try{if(!D)throw new Error("Supabase is niet geconfigureerd.");const i=String(a.completedAppointmentId||a.id||"");if(!i)throw new Error("Werkbon ID ontbreekt.");let c=D.from("completed_appointments").delete().eq("id",i);const k=Le(a);k&&(c=c.eq("garage_id",k));const{error:w}=await c;if(w)throw w}catch{A("Verwijderen mislukt","error"),o();return}await Dt(t),v=v.filter(i=>i.id!==t),_===t&&(_=""),Z===t&&(Z="",F=!1,z=""),A("Werkbon verwijderd","success"),re(),M(),o()},It=async(t,r,a)=>{var s;if(t==="view"){window.location.href=Pe(`werkbon-detail.html?id=${encodeURIComponent(r)}`);return}if(t==="edit"){window.location.href=Pe(`werkbon-detail.html?id=${encodeURIComponent(r)}&edit=true`);return}if(t==="cancel-edit"){z="",F=!1,M();return}if(t==="save-edit"){Ht(r);return}if(t==="pdf-actions"){if(!(a instanceof HTMLButtonElement))return;const o=ce(a,"Laden...");try{await xt(a,r)}catch{A("Er ging iets mis","error")}o();return}if(t==="payment-actions"){if(!(a instanceof HTMLButtonElement))return;const o=ce(a,"Laden...");try{await Pt(a,r)}catch{A("Er ging iets mis","error")}o();return}if(t==="send-customer"){if(!(a instanceof HTMLButtonElement))return;if(((s=te==null?void 0:te.invoice)==null?void 0:s.id)===r&&se instanceof HTMLElement){re();return}const o=ce(a,"Laden...");try{const i=await Ee(r);Nt(a,i)}catch{A("Er ging iets mis","error")}o();return}if(t==="send-sms"){Oe(r,"SMS");return}if(t==="send-whatsapp"){Oe(r,"WhatsApp");return}if(t==="mark-paid"){await Fe(r,a);return}if(t==="download-pdf"){const o=v.find(c=>c.id===r);if(!o)return;const i=dt(o);I(i?"Print dialog opened for PDF export.":"Allow pop-ups to export this werkbon as PDF.");return}t==="delete"&&await qt(r,a)},M=()=>{if(!(H instanceof HTMLElement)||!(C instanceof HTMLElement)||!(L instanceof HTMLElement)||!(d instanceof HTMLElement))return;const t=$ instanceof HTMLSelectElement?$.value:"all",r=K instanceof HTMLInputElement?K.value.trim().toLowerCase():"",a=[...v].sort((o,i)=>{var c,k;return((c=ve(i.completedAt))==null?void 0:c.getTime())-((k=ve(o.completedAt))==null?void 0:k.getTime())}).filter(o=>{const i=[o.licensePlate,o.customerName,o.carModel].join(" ").toLowerCase(),c=!r||i.includes(r),k=t==="all"||ue(o)===t;return c&&k});H.innerHTML=un(v),C.innerHTML=a.length?a.map(o=>gt(o,_===o.id)).join(""):gn(a,!!(r||t!=="all"));const s=v.find(o=>o.id===Z)??null;L.classList.toggle("is-open",F&&!!s),L.innerHTML=F&&s?mn(s,z===s.id):"",B()};x==null||x.addEventListener("click",()=>{V=!0,E=1,B({forceMount:!0,refreshContent:!0})});const Re=async t=>{const r=t.closest("[data-create-action]");if(!(r instanceof HTMLElement))return!1;const a=String(r.dataset.createAction??"");if(a==="attempt-close")return r.classList.contains("werkbon-create-shadow")&&t.closest(".werkbon-create-panel")||await Se(),!0;if(a==="jump-step"){const s=Number(r.dataset.step??E);return E=Math.min(5,Math.max(1,s)),P=!1,B({refreshContent:!0}),!0}if(a==="prev-step")return E=Math.max(1,E-1),B({refreshContent:!0}),!0;if(a==="next-step")return E===1&&N!=="success"&&(G&&(window.clearTimeout(G),G=0),await Be({showShortInputError:!0})),E===1&&N!=="success"?(I("Rond eerst de RDW validatie af."),!0):(E=Math.min(5,E+1),B({refreshContent:!0}),!0);if(a==="remove-part"){const s=Number(r.dataset.partIndex??-1);return Number.isFinite(s)&&s>=0&&(m.onderdelen.splice(s,1),B({refreshContent:!0})),!0}if(a==="quick-part")return m.onderdelen.push({naam:String(r.dataset.partName??"Onderdeel"),aantal:1,prijs:T(r.dataset.partPrice,0)}),B({refreshContent:!0}),!0;if(a==="add-manual-part")return m.onderdelen.push({naam:"",aantal:1,prijs:0}),B({refreshContent:!0}),!0;if(a==="open-payment")return P=!0,B(),!0;if(a==="close-payment")return P=!1,B(),!0;if(a==="select-payment")return W=String(r.dataset.paymentMethod??""),P=!1,I(`Betaalmethode gekozen: ${W}.`),B(),!0;if(a==="save-werkbon"){try{await $t()}catch(s){I(s instanceof Error?s.message:"Opslaan mislukt.")}return!0}if(a==="create-pdf"){try{await Lt(),I("PDF gegenereerd.")}catch(s){I(s instanceof Error?s.message:"PDF genereren mislukt.")}return!0}if(a==="email-werkbon"){try{await Mt(),I("Werkbon e-mail verstuurd.")}catch(s){I(s instanceof Error?s.message:"E-mail verzenden mislukt.")}return!0}return a==="whatsapp-werkbon"?(Et(),I("WhatsApp bericht geopend."),!0):!1},Ke=t=>{if(!(t instanceof HTMLElement)||!V)return!1;if(t.matches("[data-create-field='kenteken']")){if(t instanceof HTMLInputElement){const r=de(t.value);t.value=r,m.voertuig={...m.voertuig,kenteken:r},N="idle",X="",G&&(window.clearTimeout(G),G=0);const a=Q(r),s=d.querySelector("#vehicleLookupStatus");s instanceof HTMLElement&&(s.classList.remove("is-success","is-error"),s.textContent=a.length>=6?"Kenteken controleren...":"Typ kenteken om te zoeken"),oe(),a.length>=6&&(G=window.setTimeout(()=>{G=0,Be()},420))}return!0}if(t.matches("[data-create-field='btw']"))return t instanceof HTMLSelectElement&&(m.btw=T(t.value,21),$e()),!0;if(t.matches("[data-klant-field]")){const r=String(t.getAttribute("data-klant-field")??"");if(!r)return!0;const a=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:"";return m.klant={...m.klant,[r]:a},!0}if(t.matches("[data-arbeid-field]")){const r=String(t.getAttribute("data-arbeid-field")??"");if(!r)return!0;const a={...m.arbeid};return r==="enabled"&&t instanceof HTMLInputElement?(a.enabled=t.checked,m.arbeid=a,_t(),!0):(t instanceof HTMLInputElement&&(a[r]=T(t.value,r==="tarief"?65:0)),m.arbeid=a,$e(),!0)}if(t.matches("[data-part-field]")){const r=Number(t.getAttribute("data-part-index")??-1),a=String(t.getAttribute("data-part-field")??"");if(!Number.isFinite(r)||r<0||!a)return!0;const o={...m.onderdelen[r]??{naam:"",aantal:1,prijs:0}};return a==="naam"&&(o.naam=t instanceof HTMLInputElement?t.value:""),a==="aantal"&&(o.aantal=t instanceof HTMLInputElement?T(t.value,1):1),a==="prijs"&&(o.prijs=t instanceof HTMLInputElement?T(t.value,0):0),m.onderdelen[r]=o,Tt(),!0}return!1};d.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;r&&await Re(r)}),d.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&Ke(r)}),d.addEventListener("keydown",t=>{t.key==="Escape"&&V&&(t.preventDefault(),Se())}),b.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;if(!r||await Re(r))return;const a=r.closest("[data-werkbon-action]");if(a instanceof HTMLElement){const o=String(a.dataset.werkbonAction??""),i=String(a.dataset.werkbonId??"");if(o==="close-modal"){F=!1,z="",M();return}if(o==="toggle"){_=_===i?"":i,M();return}if(o==="close-drawer"){_="",z="",M();return}if(!i)return;await It(o,i,a);return}const s=r.closest("[data-werkbon-row-id]");if(s instanceof HTMLElement&&!r.closest("button, input, select, textarea, a")){const o=String(s.dataset.werkbonRowId??"");o&&(_=_===o?"":o,M())}});const ze=window.__werkbonDocumentClickHandler;typeof ze=="function"&&document.removeEventListener("click",ze);const Ve=async t=>{const r=t.target instanceof Element?t.target:null;if(!r)return;const a=r.closest("[data-send-option]");if(a instanceof HTMLButtonElement&&te){t.preventDefault();const s=String(a.dataset.sendOption??""),o=te;re();try{s==="email"?await Te(o):s==="whatsapp"?await be(o):s==="both"&&(await Te(o),await be(o)),M()}catch{A("Er ging iets mis","error")}return}r.closest("[data-send-dropdown]")||r.closest('[data-werkbon-action="send-customer"]')||re()};window.__werkbonDocumentClickHandler=Ve,document.addEventListener("click",Ve),b.addEventListener("keydown",t=>{const r=t.target instanceof HTMLElement?t.target:null;if(r){if(t.key==="Escape"&&V){t.preventDefault(),Se();return}if((t.key==="Enter"||t.key===" ")&&r.matches("[data-werkbon-row-id]")){t.preventDefault();const a=String(r.dataset.werkbonRowId??"");a&&(_=_===a?"":a,M())}if(t.key==="Escape"&&F){F=!1,z="",M();return}t.key==="Escape"&&_&&(_="",M())}}),b.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&Ke(r)}),K==null||K.addEventListener("input",M),$==null||$.addEventListener("change",M),await vt();try{let t=[];try{t=await Bt({garageIds:u})}catch{}v=t.filter(o=>He(o.completion_notes).werkbon_created===!0).map(ct).sort((o,i)=>new Date(i.completedAt??0).getTime()-new Date(o.completedAt??0).getTime());const r=new Set(v.map(o=>o.licensePlate).filter(o=>o&&o!=="UNKNOWN").map(o=>Q(o)));for(const o of r)if(o&&!he.has(o))try{const i=await it(o);i&&he.set(o,i)}catch(i){console.error(`Failed to fetch vehicle for ${o}:`,i)}v=v.map(o=>{const i=Q(o.licensePlate),c=he.get(i)||nn(i);return{...o,carModel:c.title+(c.buildYear?` (${c.buildYear})`:"")||o.carModel}});const a=await Vt({garageIds:u}),s=Gt(a);f(s.unread),_=((et=v[0])==null?void 0:et.id)??""}catch(t){v=[],f(0),console.error(t)}M(),U&&(V=!0,E=1,B({forceMount:!0,refreshContent:!0}))}const yn=document.querySelector("#app");Wt();hn(yn);
