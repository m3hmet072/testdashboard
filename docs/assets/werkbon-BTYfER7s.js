import{e as It,f as jt,p as xe,c as Bt}from"./theme-Bb-bjqwO.js";/* empty css                      */import{o as rt,g as Wt}from"./actionPopup-D9bI13ep.js";import{e as Ot,a as Ft,c as Rt,l as Kt,g as Vt,s as zt}from"./branding-BytcG8ls.js";import{n as ee,f as ot}from"./rdwService-CFrMDQAa.js";import{s as Gt}from"./confirmDialog-DSEC2-zx.js";const Pe={draft:{label:"Draft",className:"werkbon-status-draft"},link_sent:{label:"Link verstuurd",className:"werkbon-status-link-sent"},paid:{label:"Paid",className:"werkbon-status-paid"}},fe={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},Ut=new Map([["apk","apk"],["apk keuring","apk"],["keuring","apk"],["banden","banden"],["band","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"],["overig","other"],["overige","other"],["other","other"]]),it=["Voertuig","Klant","Onderdelen","Arbeid","Overzicht"],Yt=["contant","iDEAL","Mollie"],Jt=[{label:"APK keuring",name:"APK keuring",price:45},{label:"Banden",name:"Banden",price:120},{label:"Remblokken voor",name:"Remblokken voor",price:85},{label:"Remblokken achter",name:"Remblokken achter",price:75},{label:"Olie",name:"Olie",price:35},{label:"Filters",name:"Filters",price:28},{label:"Accu",name:"Accu",price:95},{label:"Overige",name:"Overige",price:0}],Qt="https://mkgfckxiusdcnqhethdy.supabase.co",Zt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",N=It(Qt,Zt);function st(){return{voertuig:{},klant:{},onderdelen:[],arbeid:{enabled:!1,uren:0,minuten:0,tarief:65},btw:21}}function T(e,a=0){const u=Number(e);return Number.isFinite(u)&&u>=0?u:a}function ke(e){const a=ee(e).slice(0,6);return a?a.replace(/(.{2})(?=.)/g,"$1-"):""}function Xt(e){var f,d,S,H,C,L,x;const a=String(((f=e==null?void 0:e.voertuig)==null?void 0:f.kenteken)??"").trim(),u=[(d=e==null?void 0:e.klant)==null?void 0:d.naam,(S=e==null?void 0:e.klant)==null?void 0:S.telefoon,(H=e==null?void 0:e.klant)==null?void 0:H.email,(C=e==null?void 0:e.klant)==null?void 0:C.omschrijving].some($=>String($??"").trim()),p=Array.isArray(e==null?void 0:e.onderdelen)&&e.onderdelen.some($=>String(($==null?void 0:$.naam)??"").trim()||T($==null?void 0:$.aantal)>0||T($==null?void 0:$.prijs)>0),b=T((L=e==null?void 0:e.arbeid)==null?void 0:L.uren)*60+T((x=e==null?void 0:e.arbeid)==null?void 0:x.minuten);return!!(a||u||p||b>0)}function ne(e){var L,x,$,K;const a=(Array.isArray(e.onderdelen)?e.onderdelen:[]).map(q=>{const U=T(q==null?void 0:q.aantal),v=T(q==null?void 0:q.prijs);return{naam:String((q==null?void 0:q.naam)??"").trim()||"Onderdeel",aantal:U,prijs:v,totaal:O(U*v)}}),u=O(a.reduce((q,U)=>q+U.totaal,0)),p=T((L=e.arbeid)==null?void 0:L.uren)+T((x=e.arbeid)==null?void 0:x.minuten)/60,b=T(($=e.arbeid)==null?void 0:$.tarief,65),f=(K=e.arbeid)!=null&&K.enabled?O(p*b):0,d=O(u+f),S=T(e.btw)>0?.21:0,H=O(d*S),C=O(d+H);return{onderdelenRows:a,onderdelenSubtotaal:u,labourHours:p,labourRate:b,arbeidTotaal:f,subtotaal:d,btwBedrag:H,totaal:C}}function J(e,a){return`<div class="werkbon-create-overview-row"><span>${l(e)}</span><strong>${l(a)}</strong></div>`}function ge(e,a,u){return`<div class="werkbon-create-overview-row"><span>${l(a)}</span><strong data-create-total="${l(e)}">${l(u)}</strong></div>`}function dt(e){return it.map((a,u)=>{const p=u+1,b=p===e?"is-active":p<e?"is-done":"",f=p<e?"is-done":"",d=u<it.length-1?`<span class="werkbon-create-step-separator ${f}" aria-hidden="true"></span>`:"";return`<button class="werkbon-create-step ${b}" type="button" data-create-action="jump-step" data-step="${p}"><span>${p}.</span>${l(a)}</button>${d}`}).join("")}function ut({step:e,state:a,rdwStatus:u}){var C,L,x,$,K,q,U,v,_,Q,F,V,z,E;const p=ne(a),b=String(((C=a.voertuig)==null?void 0:C.title)??"").trim(),f=String(((L=a.voertuig)==null?void 0:L.buildYear)??"").trim(),d=String(((x=a.voertuig)==null?void 0:x.apkExpiryDate)??"").trim(),S=f?`${b||"Voertuig gegevens"} (${f})`:b||"Voertuig gegevens",H=u==="loading"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Kenteken controleren...</p>':u==="success"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-success">Kenteken gevonden</p>':u==="error"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-error">Kenteken niet gevonden</p>':'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Typ kenteken om te zoeken</p>';return e===1?`
      <div class="werkbon-create-body-step">
        <label class="werkbon-create-appointment-field">
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text" inputmode="text" maxlength="8" data-create-field="kenteken" value="${l(String((($=a.voertuig)==null?void 0:$.kenteken)??""))}" placeholder="eg. 12-ABC-D1" required />
          ${H}
        </label>
        <div class="vehicle-preview-card werkbon-create-vehicle-preview" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${l(S)}</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">${l(f)}</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">${l(d)}</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">${l(String(((K=a.voertuig)==null?void 0:K.color)??""))}</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">${l(String(((q=a.voertuig)==null?void 0:q.fuel)??""))}</strong></span>
          </div>
        </div>
      </div>
    `:e===2?`
      <div class="werkbon-create-body-step">
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input type="text" data-klant-field="naam" value="${l(String(((U=a.klant)==null?void 0:U.naam)??""))}" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" />
          </label>
          <label>
            Phone number
            <input type="tel" data-klant-field="telefoon" value="${l(String(((v=a.klant)==null?void 0:v.telefoon)??""))}" autocomplete="tel" placeholder="eg. 0624987172" />
          </label>
        </div>
        <label class="werkbon-create-appointment-field">
          Email
          <input type="email" data-klant-field="email" value="${l(String(((_=a.klant)==null?void 0:_.email)??""))}" autocomplete="email" placeholder="eg. klant@email.com" />
        </label>
        <label class="werkbon-create-appointment-field">
          Omschrijving
          <textarea rows="4" data-klant-field="omschrijving" placeholder="Optioneel">${l(String(((Q=a.klant)==null?void 0:Q.omschrijving)??""))}</textarea>
        </label>
      </div>
    `:e===3?`
      <div class="werkbon-create-body-step werkbon-create-parts-step">
        <div class="werkbon-create-section-copy">
          <label class="werkbon-create-section-title">Onderdelen</label>
          <p class="werkbon-create-section-subtitle">Voeg onderdelen en materialen toe aan de werkbon</p>
        </div>
        <div class="werkbon-create-quick-parts">
          ${Jt.map(P=>`<button class="werkbon-chip-button" type="button" data-create-action="quick-part" data-part-name="${l(P.name)}" data-part-price="${l(String(P.price))}">+ ${l(P.label)}</button>`).join("")}
        </div>
        ${a.onderdelen.length?`
            <div class="werkbon-create-parts-panel">
              <div class="werkbon-create-parts-header" role="presentation">
                <div>Omschrijving</div>
                <div>Prijs</div>
                <div>Aantal</div>
                <div>Totaal</div>
                <div></div>
              </div>
              <div class="werkbon-create-parts-list">
                ${a.onderdelen.map((P,W)=>`
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
          <input type="checkbox" data-arbeid-field="enabled" ${a.arbeid.enabled?"checked":""} />
          <span>Arbeid inschakelen</span>
        </label>
        <label class="werkbon-create-field"><span>Uren</span><input type="number" min="0" step="1" data-arbeid-field="uren" value="${l(String(a.arbeid.uren))}" ${a.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>Minuten</span><input type="number" min="0" max="59" step="1" data-arbeid-field="minuten" value="${l(String(a.arbeid.minuten))}" ${a.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>Tarief p/u</span><input type="number" min="0" step="0.01" data-arbeid-field="tarief" value="${l(String(a.arbeid.tarief))}" ${a.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>BTW</span>
          <select data-create-field="btw">
            <option value="21" ${T(a.btw)>0?"selected":""}>21%</option>
            <option value="0" ${T(a.btw)===0?"selected":""}>Geen BTW</option>
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
        ${J("Kenteken",String(((F=a.voertuig)==null?void 0:F.kenteken)??"-"))}
        ${J("Voertuig",b||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Klant</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="2">Bewerken</button></div>
        ${J("Naam",String(((V=a.klant)==null?void 0:V.naam)??"-")||"-")}
        ${J("Email",String(((z=a.klant)==null?void 0:z.email)??"-")||"-")}
        ${J("Telefoon",String(((E=a.klant)==null?void 0:E.telefoon)??"-")||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Onderdelen / Arbeid</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="3">Bewerken</button></div>
        ${J("Onderdelen",g(p.onderdelenSubtotaal))}
        ${J("Arbeid",g(p.arbeidTotaal))}
        ${J("BTW",g(p.btwBedrag))}
        ${J("Totaal",g(p.totaal))}
      </div>
    </div>
  `}async function en(){var e,a;if((e=window.jspdf)!=null&&e.jsPDF)return window.jspdf.jsPDF;if(await new Promise((u,p)=>{const b=document.querySelector('script[data-js-pdf-cdn="true"]');if(b){b.addEventListener("load",()=>u(),{once:!0}),b.addEventListener("error",()=>p(new Error("Kon jsPDF niet laden.")),{once:!0});return}const f=document.createElement("script");f.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",f.async=!0,f.dataset.jsPdfCdn="true",f.onload=()=>u(),f.onerror=()=>p(new Error("Kon jsPDF niet laden.")),document.head.append(f)}),!((a=window.jspdf)!=null&&a.jsPDF))throw new Error("jsPDF is niet beschikbaar.");return window.jspdf.jsPDF}function tn(e=""){return{title:ee(e)||"Voertuig",buildYear:""}}function nn(e){const a=String(e||"").trim();if(!a)return["other"];const u=a.split(a.includes(",")?/,/g:/\+|\/|&| and /gi).map(p=>p.trim()).filter(Boolean);return u.length?u:[a]}function an(e){return Ut.get(String(e||"").trim().toLowerCase())||"other"}function pt(e){const a=String(e??"").trim();if(!a)return{key:"other",label:fe.other};const u=a.toLowerCase(),p=[{probe:"apk",key:"apk"},{probe:"band",key:"banden"},{probe:"airco",key:"airco"},{probe:"occasion",key:"occasions"},{probe:"brake",key:"brakes"},{probe:"onderhoud",key:"onderhoud"},{probe:"service",key:"onderhoud"},{probe:"overig",key:"other"}],b=an(a);let f=b;if(b==="other"){const d=p.find(S=>u.includes(S.probe));d&&(f=d.key)}if(f==="other"){if(["other","overig","overige"].includes(u))return{key:f,label:fe.other};const d=a.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:f,label:d||a||fe.other}}return{key:f,label:fe[f]??a}}function rn(e){const a=Array.isArray(e==null?void 0:e.onderdelen)?e.onderdelen:[],u=new Set,p=[];for(const b of a){const f=String((b==null?void 0:b.naam)??"").trim();if(!f)continue;const d=pt(f),S=`${d.key}:${d.label.toLowerCase()}`;u.has(S)||(u.add(S),p.push(d.label))}return p.length?p:["Onderhoud"]}function on(e){return nn(e).map(a=>{const{key:u,label:p}=pt(a);return`<span class="service-chip service-chip-${u}">${l(p)}</span>`}).join("")}function l(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function O(e){return Math.round(Number(e)*100)/100}function g(e){return`€${O(e).toFixed(2)}`}function Ae(e){const a=String(e??"").replace(/\D+/g,"");return a?a.startsWith("00")?a.slice(2):a.startsWith("0")?`31${a.slice(1)}`:a:""}function Ce(e){const a=Number(e);return(Number.isFinite(a)?a:0).toFixed(2).replace(".",",")}function we(e){const a=new Date(e);return Number.isNaN(a.getTime())?null:a}function sn(e){if(!e)return"";const a=we(e);if(!a)return"";const u=a.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}),p=a.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${u} · ${p}`}function mt(e){const a=we(e);return a?a.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Unknown date"}function ie(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function De(e){const a=String(e??"draft").trim().toLowerCase();return["paid","betaald"].includes(a)?"paid":["link_sent","link-sent","link sent","linkverstuurd","link_verstuurd","link verstuurd","sent","send","verzonden"].includes(a)?"link_sent":(["draft","pending","openstaand"].includes(a),"draft")}function de({status:e,paymentLink:a,paymentLinkSentAt:u,paidAt:p,paymentStatus:b}={}){const f=De(e);if(f==="paid")return"paid";const d=String(b??"").trim().toLowerCase(),S=!!String(p??"").trim();if(d==="paid"||S)return"paid";const H=!!(String(a??"").trim()||String(u??"").trim());return f==="link_sent"||H?"link_sent":"draft"}function Ne(e){if(!e)return{};if(typeof e=="object")return e;try{return JSON.parse(String(e))}catch{return{}}}function ln(e){return String(e??"").split(",").map(a=>a.trim()).filter(Boolean)}function bt(e){var H,C;const a=(e.parts??[]).map(L=>{const x=Number(L.quantity??0),$=Number(L.price??0);return{name:String(L.name??"Item"),quantity:x,price:$,total:O(x*$)}}),u=Number(((H=e.labour)==null?void 0:H.hours)??0),p=Number(((C=e.labour)==null?void 0:C.rate)??0),b=O(u*p),f=O(a.reduce((L,x)=>L+x.total,0)+b),d=O(f*.21),S=O(f+d);return{id:String(e.id??""),completedAppointmentId:String(e.completedAppointmentId??""),bookingId:String(e.bookingId??""),garageId:String(e.garageId??""),licensePlate:String(e.licensePlate??"UNKNOWN"),customerName:String(e.customerName??"Unknown customer"),carModel:String(e.carModel??"Unknown vehicle"),serviceTypes:Array.isArray(e.serviceTypes)?e.serviceTypes.map(String):["Other"],completedAt:e.completedAt,status:de({status:e.status,paymentLink:e.paymentLink,paymentLinkSentAt:e.paymentLinkSentAt,paidAt:e.paidAt,paymentStatus:e.paymentStatus}),parts:a,labour:{hours:u,rate:p,total:b},summary:{subtotal:f,vat:d,total:S},paymentLink:String(e.paymentLink??""),paymentLinkSentAt:String(e.paymentLinkSentAt??""),paymentMethod:String(e.paymentMethod??""),paidAt:String(e.paidAt??"")}}function lt(e){const a=Ne(e.completion_notes),u=Array.isArray(a.service_types)?a.service_types.map(String):ln(e.service),p=a.labour&&typeof a.labour=="object"?a.labour:{},b=Array.isArray(a.parts)?a.parts:[{name:"Service",quantity:1,price:0}],f=de({status:a.status,paymentLink:a.payment_link,paymentLinkSentAt:a.payment_link_sent_at,paidAt:a.paid_at??a.paidAt,paymentStatus:a.payment_status});return bt({id:String(e.id??""),completedAppointmentId:String(e.id??""),bookingId:String(e.booking_id??""),garageId:String(e.garage_id??""),licensePlate:String(e.license_plate??""),customerName:String(a.customer_name??a.customerName??"Onbekende klant"),carModel:String(a.car_model||a.carModel||"Voertuig"),serviceTypes:u.length?u:["Service"],completedAt:String(e.completed_at??e.created_at??new Date().toISOString()),status:f,werkbonCreated:a.werkbon_created===!0,parts:b,labour:{hours:Number(p.hours??0),rate:Number(p.rate??0)},paymentLink:String(a.payment_link??""),paymentLinkSentAt:String(a.payment_link_sent_at??""),paymentMethod:String(a.payment_method??""),paidAt:String(a.paid_at??a.paidAt??"")})}function cn(){const e=xe("werkbon-detail.html");if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const a=document.createElement("link");a.rel="prefetch",a.as="document",a.href=e,document.head.append(a)}function ft(e,a=""){const u=de({status:e,paymentLink:a}),p=Pe[u]??Pe.draft;return`<span class="status-chip ${p.className}">${p.label}</span>`}function dn(e){const a=e.filter(d=>d.status!=="paid").reduce((d,S)=>d+S.summary.total,0),u=e.filter(d=>d.status==="link_sent").length,p=e.filter(d=>d.status==="draft").length,b=e.filter(d=>d.status==="paid").reduce((d,S)=>d+S.summary.total,0);return[{label:"Outstanding revenue",value:g(a),note:`${e.filter(d=>d.status!=="paid").length} open werkbon`},{label:"Ready to send",value:String(p),note:"Draft invoices waiting for customer delivery"},{label:"In payment flow",value:String(u),note:"Werkbonnen met verstuurde link"},{label:"Paid total",value:g(b),note:"Completed payments"}].map(d=>`
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${l(d.label)}</p>
          <strong class="werkbon-summary-value">${l(d.value)}</strong>
          <span class="metric-note">${l(d.note)}</span>
        </article>
      `).join("")}function un(e){return`
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
  `}function pn(e,a){if(!e)return"";const u=e.status==="paid"?"":`<button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${l(e.id)}">Mark as Paid</button>`;return`
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${l(ie(e.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${l(e.customerName)} · ${l(mt(e.completedAt))}</p>
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
              ${ft(e.status,e.paymentLink)}
            </div>
          </section>

          ${a?`
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
                ${gn(e)}
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
          ${a?`
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
  `}function kt(e,a){return`
    <article class="request-card werkbon-card ${a?"is-expanded":""}" data-werkbon-row-id="${l(e.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          <span class="plate-chip">${l(ie(e.licensePlate))}</span>
          <div class="request-info">
            <p class="request-name">${l(e.customerName)}</p>
            <p class="request-vehicle">${l(e.carModel)}</p>
            <div class="request-services">${on(Array.isArray(e.serviceTypes)?e.serviceTypes.join(", "):e.serviceTypes)}</div>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${l(g(e.summary.total))}</strong>
          ${ft(e.status,e.paymentLink)}
          ${e.status==="paid"&&e.paidAt?`<span class="werkbon-paid-at">${l(sn(e.paidAt))}</span>`:""}
          </div>
          <button
            class="request-toggle ${a?"is-expanded":""}"
            type="button"
            data-werkbon-action="toggle"
            data-werkbon-id="${l(e.id)}"
            aria-expanded="${a?"true":"false"}"
            aria-label="${a?"Collapse werkbon actions":"Expand werkbon actions"}"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>

      ${a?un(e):""}
    </article>
  `}function gt(e){return`
    <div class="werkbon-payment-overlay" role="presentation">
      <div class="werkbon-payment-dialog" role="dialog" aria-modal="true" aria-labelledby="werkbonPaymentTitle">
        <h3 id="werkbonPaymentTitle">Kies betaalmethode</h3>
        <div class="werkbon-payment-grid">
          ${Yt.map(a=>`
            <button
              class="button subtle werkbon-payment-method ${e===a?"is-active":""}"
              type="button"
              data-create-action="select-payment"
              data-payment-method="${l(a)}"
            >${l(a)}</button>
          `).join("")}
        </div>
        <div class="werkbon-payment-actions">
          <button class="button subtle" type="button" data-create-action="close-payment">Sluiten</button>
        </div>
      </div>
    </div>
  `}function mn({isOpen:e,step:a,state:u,rdwStatus:p,rdwError:b,selectedPaymentMethod:f,isSaving:d,paymentModalOpen:S}){if(!e)return"";const C=a===1&&!(p==="success");return`
    <div class="werkbon-create-modal ${e?"is-open":""}" role="presentation">
      <div class="werkbon-create-shadow" data-create-action="attempt-close" aria-hidden="true">
        <section class="werkbon-create-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonCreateTitle">
          <header class="werkbon-create-header">
            <div>
              
              <h2 id="werkbonCreateTitle">Werkbon Maken</h2>
            </div>
            <button class="icon-button" type="button" data-create-action="attempt-close" aria-label="Sluiten">&times;</button>
          </header>

          <nav class="werkbon-create-stepper" aria-label="Werkbon stappen">${dt(a)}</nav>

          <div class="werkbon-create-content">${ut({step:a,state:u,rdwStatus:p})}</div>

          <footer class="werkbon-create-actions">
            <div class="werkbon-create-actions-left">
              <button class="button subtle" type="button" data-create-action="prev-step" ${a===1?"disabled":""}>Vorige</button>
            </div>
            <div class="werkbon-create-actions-right">
              ${a<5?`<button class="button subtle" type="button" data-create-action="next-step" ${C?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${d?"disabled":""}>${d?"Opslaan...":"Opslaan"}</button>`}
            </div>
          </footer>

          <div data-create-saving-host="true">${d?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':""}</div>
        </section>

        <div data-create-payment-host="true">${S?gt(f):""}</div>
      </div>
    </div>
  `}function bn({step:e,rdwStatus:a,isSaving:u}){const p=e===1&&a!=="success";return{left:`<button class="button subtle" type="button" data-create-action="prev-step" ${e===1?"disabled":""}>Vorige</button>`,right:e<5?`<button class="button subtle" type="button" data-create-action="next-step" ${p?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${u?"disabled":""}>${u?"Opslaan...":"Opslaan"}</button>`}}function fn(e){return`
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${l(e)}</p>
      </div>
    </div>
  `}function kn(e,a){return e.length?e.map(kt).join(""):fn(a?"No invoices match the current filters.":"Completed appointments will appear here once a werkbon is created.")}function gn(e){return e.parts.map(a=>`
        <div class="werkbon-line-item">
          <span>${l(a.name)}</span>
          <span>${l(String(a.quantity))}</span>
          <span>${l(g(a.price))}</span>
          <strong>${l(g(a.total))}</strong>
        </div>
      `).join("")}function wn(e){return`
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
          <p><strong>Date:</strong> ${l(mt(e.completedAt))}</p>
          <p><strong>Status:</strong> ${l(Pe[e.status].label)}</p>
        </div>
        <div class="section">
          <h2>Parts</h2>
          <div class="row"><strong>Product</strong><strong>Qty</strong><strong>Price</strong><strong>Total</strong></div>
          ${e.parts.map(a=>`<div class="row"><span>${l(a.name)}</span><span>${l(String(a.quantity))}</span><span>${l(g(a.price))}</span><span>${l(g(a.total))}</span></div>`).join("")}
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
  `}function ct(e){const a=window.open("","_blank","width=960,height=720,noopener,noreferrer");return a?(a.document.open(),a.document.write(wn(e)),a.document.close(),a.focus(),window.setTimeout(()=>{a.print()},180),!0):!1}async function vn(e){var ze,Ge,Ue,Ye,Je,Qe,Ze,Xe;if(!e)return;document.body.style.overflow="";const a=await Ot();if(!a)return;if(!a.isAdmin&&!a.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Ft(a.activeGarage);const u=a.isAdmin?null:[(ze=a.activeGarage)==null?void 0:ze.id].filter(Boolean),{shell:p,contentArea:b,setUnreadEmailCount:f}=Rt({activePage:"werkbon",title:"Werkbon & Payments",headerNote:"Manage invoices and payment status",userEmail:a.user.email,onLogout:Kt,garage:a.activeGarage,isAdmin:a.isAdmin}),d=document.createElement("div");d.id="werkbonCreateModalHost",e.replaceChildren(p,d),cn(),b.innerHTML=`
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
  `;const S=b.querySelector("#werkbonNotice"),H=b.querySelector("#werkbonSummary"),C=b.querySelector("#werkbonList"),L=b.querySelector("#werkbonDrawer"),x=b.querySelector("#werkbonCreateTrigger"),$=b.querySelector("#werkbonStatusFilter"),K=b.querySelector("#werkbonSearch"),q=new URLSearchParams(window.location.search),U=String(q.get("action")??"").toLowerCase()==="create";let v=[],_=((Ge=v[0])==null?void 0:Ge.id)??"",Q="",F=!1,V="",z=!1,E=1,P=!1,W="",ae=!1,D="idle",Z="",G=0,ue=0,m=st(),He=0,se=null,te=null,Y={...a.activeGarage,mollieMethod:String(((Ue=a.activeGarage)==null?void 0:Ue.mollieMethod)??"none"),mollieApiKey:((Ye=a.activeGarage)==null?void 0:Ye.mollieApiKey)??null,paymentDays:parseInt(String(((Je=a.activeGarage)==null?void 0:Je.paymentDays)??"14"),10)||14,garageName:String(((Qe=a.activeGarage)==null?void 0:Qe.garageName)||((Ze=a.activeGarage)==null?void 0:Ze.name)||"Garage")};const ve=new Map,I=t=>{S instanceof HTMLElement&&(S.textContent=t,S.hidden=!t,window.clearTimeout(He),t&&(He=window.setTimeout(()=>{S.hidden=!0,S.textContent=""},2600)))},A=(t,r="success")=>{if(r==="error"){I(String(t||"Er ging iets mis"));return}I(String(t||"Actie uitgevoerd."))},wt=async()=>{var r;const t=(r=a.activeGarage)==null?void 0:r.id;if(!(!N||!t))try{const{data:n,error:s}=await N.from("garages").select("*").eq("id",t).maybeSingle();if(s||!n)return;Y={...Y,paymentLink:n.payment_link??Y.paymentLink??null,mollieMethod:String(n.mollie_method??Y.mollieMethod??"none"),mollieApiKey:n.mollie_api_key??Y.mollieApiKey??null,paymentDays:parseInt(String(n.payment_days??Y.paymentDays??14),10)||14,garageName:String(n.garage_name||n.name||Y.garageName||"Garage")}}catch{}},re=()=>{se instanceof HTMLElement&&se.remove(),se=null,te=null},qe=({title:t,body:r,confirmLabel:n,cancelLabel:s,confirmClassName:o=""})=>new Promise(i=>{const c=document.createElement("div");c.innerHTML=`
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title" id="confirm-title">${l(t)}</h2>
            <p id="confirm-desc">${l(r)}</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button subtle" type="button" data-confirm-action="cancel">${l(s)}</button>
            <button class="button ${l(o)}" type="button" data-confirm-action="continue">${l(n)}</button>
          </div>
        </div>
      </div>
    `,document.body.append(c);const k=c.querySelector(".confirm-dialog-overlay"),w=c.querySelector('[data-confirm-action="continue"]');w instanceof HTMLButtonElement&&window.setTimeout(()=>w.focus(),50);const y=h=>{c.remove(),i(h)};k instanceof HTMLElement&&k.addEventListener("click",h=>{h.target===k&&y(!1)}),c.addEventListener("click",h=>{const j=h.target instanceof HTMLElement?h.target:null,R=j==null?void 0:j.closest("[data-confirm-action]");R instanceof HTMLElement&&y(R.dataset.confirmAction==="continue")}),c.addEventListener("keydown",h=>{h.key==="Escape"&&y(!1)})}),vt=()=>{G&&(window.clearTimeout(G),G=0),ue+=1,E=1,P=!1,W="",ae=!1,D="idle",Z="",m=st()},B=({forceMount:t=!1,refreshContent:r=!1}={})=>{if(!(d instanceof HTMLElement))return;if(!z){d.innerHTML&&(d.innerHTML=""),document.body.style.overflow="";return}if(!((t?null:d.querySelector(".werkbon-create-modal"))instanceof HTMLElement)){d.innerHTML=mn({isOpen:z,step:E,state:m,rdwStatus:D,rdwError:Z,selectedPaymentMethod:W,isSaving:ae,paymentModalOpen:P}),document.body.style.overflow="hidden";return}const s=d.querySelector(".werkbon-create-stepper");if(s instanceof HTMLElement&&(s.innerHTML=dt(E)),r){const y=d.querySelector(".werkbon-create-content");y instanceof HTMLElement&&(y.innerHTML=ut({step:E,state:m,rdwStatus:D}))}const o=d.querySelector('[data-create-action="prev-step"]');o instanceof HTMLButtonElement&&(o.disabled=E===1);const i=d.querySelector(".werkbon-create-actions-left"),c=d.querySelector(".werkbon-create-actions-right");if(i instanceof HTMLElement&&c instanceof HTMLElement){const y=bn({step:E,rdwStatus:D,isSaving:ae});i.innerHTML=y.left,c.innerHTML=y.right}const k=d.querySelector('[data-create-saving-host="true"]');k instanceof HTMLElement&&(k.innerHTML=ae?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':"");const w=d.querySelector('[data-create-payment-host="true"]');w instanceof HTMLElement&&(w.innerHTML=P?gt(W):""),document.body.style.overflow="hidden"},he=({rerenderPage:t=!1}={})=>{if(z=!1,re(),vt(),t){M();return}B()},ye=async()=>{if(!Xt(m)){he();return}await Gt("Er staan niet-opgeslagen gegevens in deze werkbon. Weet je zeker dat je wilt sluiten?","Werkbon sluiten")&&he()},ht=async t=>{if(!N||!t)return Date.now()%1e5;const{data:r,error:n}=await N.from("garages").select("invoice_sequence").eq("id",t).maybeSingle();if(n)throw n;const o=Math.max(1e3,Number((r==null?void 0:r.invoice_sequence)??1e3))+1,{error:i}=await N.from("garages").update({invoice_sequence:o}).eq("id",t);if(i)throw i;return o},yt=async()=>{var R,X,be,et,tt,nt,at;const t=(R=a.activeGarage)==null?void 0:R.id;if(!t)throw new Error("Geen garage gevonden voor deze gebruiker.");const r=ee(((X=m.voertuig)==null?void 0:X.kenteken)??"");if(r.length<6)throw new Error("Voer eerst een geldig kenteken in.");if(D!=="success")throw new Error("Haal eerst RDW voertuiggegevens op.");const n=ne(m),s=await ht(t),i=`wb-${String(Date.now()).slice(-4)}`,c=`F-${String(s).padStart(6,"0")}`,k=new Date().toISOString(),w=String(((be=m.klant)==null?void 0:be.naam)??"").trim()||"Onbekende klant",y=String(((et=m.voertuig)==null?void 0:et.title)??"").trim()||"Voertuig",h=rn(m),j={werkbon_id:i,status:"draft",werkbon_created:!0,customer_name:w,customer_email:String(((tt=m.klant)==null?void 0:tt.email)??"").trim(),customer_phone:String(((nt=m.klant)==null?void 0:nt.telefoon)??"").trim(),car_model:y,service_types:h,km_stand:0,vat_enabled:T(m.btw)>0,description:String(((at=m.klant)==null?void 0:at.omschrijving)??"").trim(),internal_note:"",invoice_number:c,paid_at:W?new Date().toISOString().slice(0,10):null,completed_at:k,parts:n.onderdelenRows.map(_e=>({name:_e.naam,quantity:_e.aantal,price:_e.prijs})),labour:{hours:n.labourHours,rate:n.labourRate},totals:{subtotal:n.subtotaal,vat:n.btwBedrag,total:n.totaal},payment_method:W};return{garageId:t,kenteken:r,completedAt:k,completionNotes:j,serviceSummary:h.join(", "),werkbonId:i,invoiceNumber:c}},St=async()=>{if(!N)throw new Error("Supabase is niet geconfigureerd.");ae=!0,B();try{const t=await yt(),{data:r,error:n}=await N.from("completed_appointments").insert({garage_id:t.garageId,booking_id:null,completed_at:t.completedAt,appointment_date:t.completedAt.slice(0,10),appointment_time:t.completedAt.slice(11,19),license_plate:t.kenteken,service:t.serviceSummary||"Onderhoud",completion_notes:JSON.stringify(t.completionNotes)}).select("id, booking_id, garage_id, completed_at, created_at, license_plate, service, completion_notes").single();if(n)throw n;const s=lt(r);v=[s,...v],_=s.id,I(`Werkbon ${t.werkbonId} opgeslagen als ${t.invoiceNumber}.`),he()}finally{ae=!1,M()}},$t=async()=>{var k,w,y;const t=await en(),r=ne(m),n=new t({unit:"pt",format:"a4"}),s=String(((k=m.voertuig)==null?void 0:k.kenteken)??"-"),o=String(((w=m.klant)==null?void 0:w.naam)??"Onbekende klant"),i=String(((y=m.klant)==null?void 0:y.omschrijving)??"").trim();let c=56;n.setFont("helvetica","bold"),n.setFontSize(18),n.text("Werkbon / Factuur",42,c),c+=26,n.setFont("helvetica","normal"),n.setFontSize(11),n.text(`Datum: ${new Date().toLocaleDateString("nl-NL")}`,42,c),c+=16,n.text(`Kenteken: ${s}`,42,c),c+=16,n.text(`Klant: ${o}`,42,c),c+=16,i&&(n.text(`Omschrijving: ${i}`,42,c,{maxWidth:520}),c+=22),n.setFont("helvetica","bold"),n.text("Onderdelen",42,c),c+=16,n.setFont("helvetica","normal"),r.onderdelenRows.forEach(h=>{n.text(`${h.naam}  x${h.aantal}  ${g(h.prijs)}  ${g(h.totaal)}`,42,c),c+=14}),c+=12,n.text(`Arbeid: ${g(r.arbeidTotaal)}`,42,c),c+=14,n.text(`Subtotaal: ${g(r.subtotaal)}`,42,c),c+=14,n.text(`BTW: ${g(r.btwBedrag)}`,42,c),c+=14,n.setFont("helvetica","bold"),n.text(`Totaal: ${g(r.totaal)}`,42,c),n.save(`werkbon-${ee(s)||"nieuw"}.pdf`)},Lt=async()=>{var s,o,i;if(!N)throw new Error("Supabase is niet geconfigureerd.");const t=String(((s=m.klant)==null?void 0:s.email)??"").trim();if(!t)throw new Error("Geen e-mailadres beschikbaar.");const r=ne(m),{error:n}=await N.functions.invoke("send-werkbon-email",{body:{to:t,template:"werkbon_factuur_nl",subject:`Werkbon ${ke(((o=m.voertuig)==null?void 0:o.kenteken)??"")}`,customerName:String(((i=m.klant)==null?void 0:i.naam)??"Klant"),total:r.totaal}});if(n)throw n},Mt=()=>{var s,o,i;const t=String(((s=m.klant)==null?void 0:s.telefoon)??"").replace(/[^0-9]/g,""),r=ne(m),n=`Hallo ${String(((o=m.klant)==null?void 0:o.naam)??"")}, uw werkbon (${ke(((i=m.voertuig)==null?void 0:i.kenteken)??"")}) staat klaar. Totaal: ${g(r.totaal)}.`;window.open(`https://wa.me/${encodeURIComponent(t)}?text=${encodeURIComponent(n)}`,"_blank","noopener,noreferrer")},le=()=>{const t=d.querySelector("#vehicleLookupStatus");if(t instanceof HTMLElement){if(t.classList.remove("is-success","is-error"),D==="loading"){t.textContent="Kenteken controleren...";return}if(D==="success"){t.textContent="Kenteken gevonden",t.classList.add("is-success");return}if(D==="error"){t.textContent="Kenteken niet gevonden",t.classList.add("is-error");return}t.textContent="Typ kenteken om te zoeken"}},oe=()=>{const t=d.querySelector('[data-create-action="next-step"]');if(t instanceof HTMLButtonElement){if(E===1){t.disabled=D!=="success";return}t.disabled=E===5}},Ie=()=>{var w,y,h,j,R;const t=d.querySelector("#vehiclePreviewTitle"),r=d.querySelector("#vehiclePreviewBuildYear"),n=d.querySelector("#vehiclePreviewApk"),s=d.querySelector("#vehiclePreviewColor"),o=d.querySelector("#vehiclePreviewFuel");if(!(t instanceof HTMLElement)||!(r instanceof HTMLElement)||!(n instanceof HTMLElement)||!(s instanceof HTMLElement)||!(o instanceof HTMLElement))return;const i=String(((w=m.voertuig)==null?void 0:w.title)??"").trim(),c=String(((y=m.voertuig)==null?void 0:y.buildYear)??"").trim(),k=c?`${i||"Voertuig gegevens"} (${c})`:i||"Voertuig gegevens";t.textContent=k,r.textContent=c,n.textContent=String(((h=m.voertuig)==null?void 0:h.apkExpiryDate)??"").trim(),s.textContent=String(((j=m.voertuig)==null?void 0:j.color)??"").trim(),o.textContent=String(((R=m.voertuig)==null?void 0:R.fuel)??"").trim()},Et=()=>{const t=ne(m),r=d.querySelector("[data-parts-subtotal-value]");r instanceof HTMLElement&&(r.textContent=g(t.onderdelenSubtotaal)),d.querySelectorAll("[data-part-total-index]").forEach(s=>{if(!(s instanceof HTMLElement))return;const o=Number(s.getAttribute("data-part-total-index")??-1),i=t.onderdelenRows[o];i&&(s.textContent=g(i.totaal))})},Se=()=>{const t=ne(m),r={arbeid:g(t.arbeidTotaal),subtotaal:g(t.subtotaal),btw:g(t.btwBedrag),totaal:g(t.totaal)};d.querySelectorAll("[data-create-total]").forEach(s=>{if(!(s instanceof HTMLElement))return;const o=String(s.getAttribute("data-create-total")??"");o in r&&(s.textContent=r[o])})},Tt=()=>{var n;const t=!!((n=m.arbeid)!=null&&n.enabled);d.querySelectorAll("[data-arbeid-field]").forEach(s=>{if(s instanceof HTMLInputElement){if(s.getAttribute("data-arbeid-field")==="enabled"){s.checked=t;return}s.disabled=!t}}),Se()},je=async({showShortInputError:t=!1}={})=>{var s;const r=ee(((s=m.voertuig)==null?void 0:s.kenteken)??"");if(r.length<6){D="idle",Z=t?"Voer minimaal 6 tekens in voor het kenteken.":"",le(),oe();return}const n=++ue;D="loading",Z="",le(),oe();try{const o=await ot(r);if(n!==ue)return;if(!o){D="error",Z="Geen RDW voertuig gevonden voor dit kenteken.",m.voertuig={...m.voertuig,title:"",buildYear:"",apkExpiryDate:"",color:"",fuel:""},le(),Ie(),oe();return}m.voertuig={...m.voertuig,kenteken:ke(r),...o},D="success",Z="",le(),Ie(),oe()}catch{if(n!==ue)return;D="error",Z="RDW service is momenteel niet beschikbaar.",le(),oe()}},pe=(t,r)=>{v=v.map(n=>n.id===t?bt(r(n)):n)},_t=t=>v.find(r=>r.id===t)??null,$e=t=>{var r;return String((t==null?void 0:t.garageId)||((r=a.activeGarage)==null?void 0:r.id)||"")},At=t=>{if(!(C instanceof HTMLElement))return null;const r=C.querySelectorAll("[data-werkbon-row-id]");for(const n of r)if(n instanceof HTMLElement&&String(n.dataset.werkbonRowId??"")===String(t))return n;return null},Le=async(t,r)=>{if(!N)throw new Error("Supabase is niet geconfigureerd.");const n=String(t.completedAppointmentId||t.id||"");if(!n)throw new Error("Werkbon ID ontbreekt.");const s=$e(t);let o=N.from("completed_appointments").select("id, garage_id, completion_notes").eq("id",n);s&&(o=o.eq("garage_id",s));const{data:i,error:c}=await o.maybeSingle();if(c)throw c;if(!i)throw new Error("Werkbon niet gevonden.");const w={...Ne(i.completion_notes),...r};let y=N.from("completed_appointments").update({completion_notes:JSON.stringify(w)}).eq("id",n);s&&(y=y.eq("garage_id",s));const{error:h}=await y;if(h)throw h;return w},Me=async t=>{const r=_t(t);if(!r)throw new Error("Werkbon niet gevonden.");const n=String(r.completedAppointmentId||r.id||"");if(!n||!N)return{invoice:r,customer_name:r.customerName,customer_email:"",customer_phone:"",factuurnummer:"",total:r.summary.total,status:r.status};const s=$e(r);let o=N.from("werkbonnen").select("werkbon_id, garage_id, customer_name, customer_email, customer_phone, invoice_number, total_amount, invoice_status, payment_link, payment_link_sent_at, payment_method").eq("werkbon_id",n);s&&(o=o.eq("garage_id",s));const{data:i,error:c}=await o.maybeSingle();if(c)throw c;const k=Number((i==null?void 0:i.total_amount)??0);return{invoice:r,customer_name:String((i==null?void 0:i.customer_name)??r.customerName??"Klant"),customer_email:String((i==null?void 0:i.customer_email)??"").trim(),customer_phone:String((i==null?void 0:i.customer_phone)??"").trim(),factuurnummer:String((i==null?void 0:i.invoice_number)??"").trim(),total:Number.isFinite(k)&&k>0?k:r.summary.total,status:de({status:(i==null?void 0:i.invoice_status)??r.status??"draft",paymentLink:(i==null?void 0:i.payment_link)??r.paymentLink,paymentLinkSentAt:(i==null?void 0:i.payment_link_sent_at)??r.paymentLinkSentAt,paidAt:r.paidAt}),payment_link:String((i==null?void 0:i.payment_link)??"").trim(),payment_link_sent_at:String((i==null?void 0:i.payment_link_sent_at)??"").trim(),payment_method:String((i==null?void 0:i.payment_method)??"").trim()}},Be=(t,r)=>{pe(t,n=>({...n,status:De(r)}))},Ee=async t=>t.customer_email?(await Le(t.invoice,{status:"link_sent"}),Be(t.invoice.id,"link_sent"),A("Factuur verstuurd per e-mail ✓","success"),!0):(A("Geen e-mailadres bekend voor deze klant","error"),!1),me=async t=>{var h,j;if(!t.customer_phone)return A("Geen telefoonnummer bekend voor deze klant","error"),!1;const r=Ae(t.customer_phone);if(!r)return A("Geen telefoonnummer bekend voor deze klant","error"),!1;const n=Y||a.activeGarage,s=String((n==null?void 0:n.mollieMethod)||"none"),o=Math.max(1,parseInt(String((n==null?void 0:n.paymentDays)??14),10)||14),i=String((n==null?void 0:n.garageName)||(n==null?void 0:n.name)||"Uw garage");let c=null;try{c=await Wt(n,{totalAmount:t.total,factuurnummer:t.factuurnummer||"",customerName:t.customer_name||"Klant",paymentDays:o,completedAppointmentId:((h=t.invoice)==null?void 0:h.completedAppointmentId)||((j=t.invoice)==null?void 0:j.id)||""},R=>A(R,"error"),N)}catch{}if(s!=="none"&&!c)return A("Geen betaallink gemaakt. Controleer Mollie API-sleutel/instellingen en probeer opnieuw.","error"),!1;const k=[`Beste ${t.customer_name||"klant"},`,"",`Hierbij uw factuur van ${i}.`,"",`Factuurnummer: ${t.factuurnummer||"-"}`,`Totaalbedrag: €${Ce(t.total)}`,`Betaaltermijn: ${o} dagen`];c&&k.push("","Betaal eenvoudig via Mollie:",c),k.push("","Met vriendelijke groet,",i);const w=k.join(`
`),y=`https://wa.me/${encodeURIComponent(r)}?text=${encodeURIComponent(w)}`;if(window.open(y,"_blank","noopener,noreferrer"),c)try{await Le(t.invoice,{status:t.invoice.status!=="paid"?"link_sent":t.invoice.status,payment_link:c,payment_link_sent_at:new Date().toISOString(),payment_method:"mollie"});const R=new Date().toISOString(),X=v.findIndex(be=>be.id===t.invoice.id);X!==-1&&(v[X]={...v[X],status:v[X].status!=="paid"?"link_sent":v[X].status,paymentLink:c,paymentLinkSentAt:R,paymentMethod:"mollie"})}catch{}else Be(t.invoice.id,"link_sent");return A("WhatsApp bericht geopend ✓","success"),!0},Ct=async(t,r)=>{const n=await Me(r),s=!!n.customer_email,o=!!Ae(n.customer_phone);return rt({triggerButton:t,title:"📄 PDF Acties",options:[{id:"download",icon:"⬇️",title:"Downloaden",description:"Sla de factuur op als PDF",onSelect:async i=>{const c=ct(n.invoice);i.forceClose(),A(c?"PDF wordt gedownload ✓":"Sta pop-ups toe om PDF te downloaden",c?"success":"error")}},{id:"email",icon:"📧",title:"Stuur via E-mail",description:s?"Verstuur naar klant e-mail":"⚠️ Geen e-mailadres bekend. Voeg een e-mailadres toe aan deze werkbon.",disabled:!s,onSelect:async(i,c)=>{i.setLoading(c,!0);const k=await Ee(n);i.setLoading(c,!1),k&&(i.forceClose(),M())}},{id:"whatsapp",icon:"💬",title:"Stuur via WhatsApp",description:o?"Deel de factuur via WhatsApp":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.",disabled:!o,onSelect:async(i,c)=>{i.setLoading(c,!0);const k=await me(n);i.setLoading(c,!1),k&&(i.forceClose(),M())}}]})},xt=async(t,r)=>{var k;const n=await Me(r),s=n.invoice,o=!!Ae(n.customer_phone),c=String(((k=Y||a.activeGarage)==null?void 0:k.mollieMethod)||"none")!=="none";return rt({triggerButton:t,title:"💳 Betaalmethode",subtitle:`Totaal te betalen: €${Ce(n.total)}`,options:[{id:"cash",icon:"💵",title:"Contant",description:"Registreer contante betaling",onSelect:async w=>{w.setBodyContent(`
              <div class="action-popup-confirm">
                <p class="action-popup-confirm-title">Bevestig contante betaling</p>
                <p class="action-popup-confirm-subtitle">€${l(Ce(n.total))} ontvangen?</p>
                <div class="action-popup-confirm-actions">
                  <button type="button" class="button subtle" data-popup-cancel>Annuleren</button>
                  <button type="button" class="button" data-popup-confirm>✓ Bevestigen</button>
                </div>
              </div>
            `,y=>{const h=y.querySelector("[data-popup-cancel]"),j=y.querySelector("[data-popup-confirm]");h==null||h.addEventListener("click",()=>w.forceClose()),j==null||j.addEventListener("click",async()=>{await Oe(s.id,t),w.forceClose(),M(),A("Contante betaling geregistreerd ✓","success")})})}},{id:"mollie_whatsapp",icon:"💬",title:"Betaallink via WhatsApp",description:c?o?"Stuur iDEAL link naar klant":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.":"⚠️ Geen Mollie account verbonden. Ga naar Instellingen → Betalingen.",disabled:!c||!o,onSelect:async(w,y)=>{w.setLoading(y,!0);const h=await me(n);w.setLoading(y,!1),h&&(w.forceClose(),M(),A("Betaallink verstuurd via WhatsApp ✓","success"))}}]})},Pt=(t,r)=>{re();const n=t.getBoundingClientRect(),s=document.createElement("div");s.className="send-dropdown",s.setAttribute("data-send-dropdown","true"),s.innerHTML=`
      <button type="button" data-send-option="email" data-werkbon-id="${l(r.invoice.id)}">
        📧 Per e-mail ${r.customer_email?"":'<span class="send-dropdown-muted">(geen e-mail)</span>'}
      </button>
      <button type="button" data-send-option="whatsapp" data-werkbon-id="${l(r.invoice.id)}">
        💬 Via WhatsApp ${r.customer_phone?"":'<span class="send-dropdown-muted">(geen telefoon)</span>'}
      </button>
      <button type="button" data-send-option="both" data-werkbon-id="${l(r.invoice.id)}">
        📤 Beide versturen
      </button>
    `,document.body.append(s);const o=window.innerWidth,i=window.innerHeight,c=s.getBoundingClientRect(),k=Math.max(8,Math.min(n.left,o-c.width-8)),w=n.bottom+c.height+8>i?Math.max(8,n.top-c.height-8):n.bottom+6;s.style.left=`${Math.round(k)}px`,s.style.top=`${Math.round(w)}px`,se=s,te=r},ce=(t,r)=>{if(!(t instanceof HTMLButtonElement))return()=>{};const n=t.textContent||"";return t.disabled=!0,t.textContent=r,()=>{t.disabled=!1,t.textContent=n}},Dt=t=>new Promise(r=>{const n=At(t);if(!(n instanceof HTMLElement)){r();return}n.classList.add("werkbon-row-removing"),window.setTimeout(r,220)}),Te=(t,r=!1)=>{Q=t,F=!0,V=r?t:"",M()},We=(t,r)=>{const n=v.find(s=>s.id===t);if(n){if(n.status==="paid"){I(`Invoice for ${ie(n.licensePlate)} is already paid.`),Te(t,!1);return}pe(t,s=>({...s,status:"link_sent"})),I(`Werkbon sent to customer via ${r}.`),Te(t,!1)}},Oe=async(t,r)=>{const n=v.find(i=>i.id===t);if(!n)return;if(n.status==="paid"){I(`Invoice for ${ie(n.licensePlate)} is already marked as paid.`),Te(t,!1);return}if(!await qe({title:"Werkbon markeren als betaald?",body:"Dit registreert de betaling als vandaag ontvangen.",confirmLabel:"Markeer als betaald",cancelLabel:"Annuleren"}))return;const o=ce(r,"Opslaan...");try{await Le(n,{status:"paid",payment_method:"manual",payment_date:new Date().toISOString()}),pe(t,i=>({...i,status:"paid"})),A("Werkbon gemarkeerd als betaald ✓","success"),M()}catch{A("Er ging iets mis","error"),o();return}o()},Nt=t=>{const r=v.find(w=>w.id===t);if(!r||!(L instanceof HTMLElement))return;const n=L.querySelector("[data-werkbon-edit-status]"),s=L.querySelector("[data-werkbon-edit-hours]"),o=L.querySelector("[data-werkbon-edit-rate]");if(!(n instanceof HTMLSelectElement)||!(s instanceof HTMLInputElement)||!(o instanceof HTMLInputElement))return;const i=De(n.value),c=Math.max(0,Number(s.value||r.labour.hours)),k=Math.max(0,Number(o.value||r.labour.rate));pe(t,w=>({...w,status:i,labour:{...w.labour,hours:c,rate:k}})),V="",Q=t,F=!0,I("Werkbon updated."),M()},Ht=async(t,r)=>{const n=v.find(i=>i.id===t);if(!n||!await qe({title:"Werkbon verwijderen?",body:"Deze actie kan niet ongedaan worden gemaakt. De werkbon wordt permanent verwijderd.",confirmLabel:"Verwijderen",cancelLabel:"Annuleren",confirmClassName:"danger"}))return;const o=ce(r,"Opslaan...");try{if(!N)throw new Error("Supabase is niet geconfigureerd.");const i=String(n.completedAppointmentId||n.id||"");if(!i)throw new Error("Werkbon ID ontbreekt.");let c=N.from("completed_appointments").delete().eq("id",i);const k=$e(n);k&&(c=c.eq("garage_id",k));const{error:w}=await c;if(w)throw w}catch{A("Verwijderen mislukt","error"),o();return}await Dt(t),v=v.filter(i=>i.id!==t),_===t&&(_=""),Q===t&&(Q="",F=!1,V=""),A("Werkbon verwijderd","success"),re(),M(),o()},qt=async(t,r,n)=>{var s;if(t==="view"){window.location.href=xe(`werkbon-detail.html?id=${encodeURIComponent(r)}`);return}if(t==="edit"){window.location.href=xe(`werkbon-detail.html?id=${encodeURIComponent(r)}&edit=true`);return}if(t==="cancel-edit"){V="",F=!1,M();return}if(t==="save-edit"){Nt(r);return}if(t==="pdf-actions"){if(!(n instanceof HTMLButtonElement))return;const o=ce(n,"Laden...");try{await Ct(n,r)}catch{A("Er ging iets mis","error")}o();return}if(t==="payment-actions"){if(!(n instanceof HTMLButtonElement))return;const o=ce(n,"Laden...");try{await xt(n,r)}catch{A("Er ging iets mis","error")}o();return}if(t==="send-customer"){if(!(n instanceof HTMLButtonElement))return;if(((s=te==null?void 0:te.invoice)==null?void 0:s.id)===r&&se instanceof HTMLElement){re();return}const o=ce(n,"Laden...");try{const i=await Me(r);Pt(n,i)}catch{A("Er ging iets mis","error")}o();return}if(t==="send-sms"){We(r,"SMS");return}if(t==="send-whatsapp"){We(r,"WhatsApp");return}if(t==="mark-paid"){await Oe(r,n);return}if(t==="download-pdf"){const o=v.find(c=>c.id===r);if(!o)return;const i=ct(o);I(i?"Print dialog opened for PDF export.":"Allow pop-ups to export this werkbon as PDF.");return}t==="delete"&&await Ht(r,n)},M=()=>{if(!(H instanceof HTMLElement)||!(C instanceof HTMLElement)||!(L instanceof HTMLElement)||!(d instanceof HTMLElement))return;const t=$ instanceof HTMLSelectElement?$.value:"all",r=K instanceof HTMLInputElement?K.value.trim().toLowerCase():"",n=[...v].sort((o,i)=>{var c,k;return((c=we(i.completedAt))==null?void 0:c.getTime())-((k=we(o.completedAt))==null?void 0:k.getTime())}).filter(o=>{const i=[o.licensePlate,o.customerName,o.carModel].join(" ").toLowerCase(),c=!r||i.includes(r),k=t==="all"||de(o)===t;return c&&k});H.innerHTML=dn(v),C.innerHTML=n.length?n.map(o=>kt(o,_===o.id)).join(""):kn(n,!!(r||t!=="all"));const s=v.find(o=>o.id===Q)??null;L.classList.toggle("is-open",F&&!!s),L.innerHTML=F&&s?pn(s,V===s.id):"",B()};x==null||x.addEventListener("click",()=>{z=!0,E=1,B({forceMount:!0,refreshContent:!0})});const Fe=async t=>{const r=t.closest("[data-create-action]");if(!(r instanceof HTMLElement))return!1;const n=String(r.dataset.createAction??"");if(n==="attempt-close")return r.classList.contains("werkbon-create-shadow")&&t.closest(".werkbon-create-panel")||await ye(),!0;if(n==="jump-step"){const s=Number(r.dataset.step??E);return E=Math.min(5,Math.max(1,s)),P=!1,B({refreshContent:!0}),!0}if(n==="prev-step")return E=Math.max(1,E-1),B({refreshContent:!0}),!0;if(n==="next-step")return E===1&&D!=="success"&&(G&&(window.clearTimeout(G),G=0),await je({showShortInputError:!0})),E===1&&D!=="success"?(I("Rond eerst de RDW validatie af."),!0):(E=Math.min(5,E+1),B({refreshContent:!0}),!0);if(n==="remove-part"){const s=Number(r.dataset.partIndex??-1);return Number.isFinite(s)&&s>=0&&(m.onderdelen.splice(s,1),B({refreshContent:!0})),!0}if(n==="quick-part")return m.onderdelen.push({naam:String(r.dataset.partName??"Onderdeel"),aantal:1,prijs:T(r.dataset.partPrice,0)}),B({refreshContent:!0}),!0;if(n==="add-manual-part")return m.onderdelen.push({naam:"",aantal:1,prijs:0}),B({refreshContent:!0}),!0;if(n==="open-payment")return P=!0,B(),!0;if(n==="close-payment")return P=!1,B(),!0;if(n==="select-payment")return W=String(r.dataset.paymentMethod??""),P=!1,I(`Betaalmethode gekozen: ${W}.`),B(),!0;if(n==="save-werkbon"){try{await St()}catch(s){I(s instanceof Error?s.message:"Opslaan mislukt.")}return!0}if(n==="create-pdf"){try{await $t(),I("PDF gegenereerd.")}catch(s){I(s instanceof Error?s.message:"PDF genereren mislukt.")}return!0}if(n==="email-werkbon"){try{await Lt(),I("Werkbon e-mail verstuurd.")}catch(s){I(s instanceof Error?s.message:"E-mail verzenden mislukt.")}return!0}return n==="whatsapp-werkbon"?(Mt(),I("WhatsApp bericht geopend."),!0):!1},Re=t=>{if(!(t instanceof HTMLElement)||!z)return!1;if(t.matches("[data-create-field='kenteken']")){if(t instanceof HTMLInputElement){const r=ke(t.value);t.value=r,m.voertuig={...m.voertuig,kenteken:r},D="idle",Z="",G&&(window.clearTimeout(G),G=0);const n=ee(r),s=d.querySelector("#vehicleLookupStatus");s instanceof HTMLElement&&(s.classList.remove("is-success","is-error"),s.textContent=n.length>=6?"Kenteken controleren...":"Typ kenteken om te zoeken"),oe(),n.length>=6&&(G=window.setTimeout(()=>{G=0,je()},420))}return!0}if(t.matches("[data-create-field='btw']"))return t instanceof HTMLSelectElement&&(m.btw=T(t.value,21),Se()),!0;if(t.matches("[data-klant-field]")){const r=String(t.getAttribute("data-klant-field")??"");if(!r)return!0;const n=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:"";return m.klant={...m.klant,[r]:n},!0}if(t.matches("[data-arbeid-field]")){const r=String(t.getAttribute("data-arbeid-field")??"");if(!r)return!0;const n={...m.arbeid};return r==="enabled"&&t instanceof HTMLInputElement?(n.enabled=t.checked,m.arbeid=n,Tt(),!0):(t instanceof HTMLInputElement&&(n[r]=T(t.value,r==="tarief"?65:0)),m.arbeid=n,Se(),!0)}if(t.matches("[data-part-field]")){const r=Number(t.getAttribute("data-part-index")??-1),n=String(t.getAttribute("data-part-field")??"");if(!Number.isFinite(r)||r<0||!n)return!0;const o={...m.onderdelen[r]??{naam:"",aantal:1,prijs:0}};return n==="naam"&&(o.naam=t instanceof HTMLInputElement?t.value:""),n==="aantal"&&(o.aantal=t instanceof HTMLInputElement?T(t.value,1):1),n==="prijs"&&(o.prijs=t instanceof HTMLInputElement?T(t.value,0):0),m.onderdelen[r]=o,Et(),!0}return!1};d.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;r&&await Fe(r)}),d.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&Re(r)}),d.addEventListener("keydown",t=>{t.key==="Escape"&&z&&(t.preventDefault(),ye())}),b.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;if(!r||await Fe(r))return;const n=r.closest("[data-werkbon-action]");if(n instanceof HTMLElement){const o=String(n.dataset.werkbonAction??""),i=String(n.dataset.werkbonId??"");if(o==="close-modal"){F=!1,V="",M();return}if(o==="toggle"){_=_===i?"":i,M();return}if(o==="close-drawer"){_="",V="",M();return}if(!i)return;await qt(o,i,n);return}const s=r.closest("[data-werkbon-row-id]");if(s instanceof HTMLElement&&!r.closest("button, input, select, textarea, a")){const o=String(s.dataset.werkbonRowId??"");o&&(_=_===o?"":o,M())}});const Ke=window.__werkbonDocumentClickHandler;typeof Ke=="function"&&document.removeEventListener("click",Ke);const Ve=async t=>{const r=t.target instanceof Element?t.target:null;if(!r)return;const n=r.closest("[data-send-option]");if(n instanceof HTMLButtonElement&&te){t.preventDefault();const s=String(n.dataset.sendOption??""),o=te;re();try{s==="email"?await Ee(o):s==="whatsapp"?await me(o):s==="both"&&(await Ee(o),await me(o)),M()}catch{A("Er ging iets mis","error")}return}r.closest("[data-send-dropdown]")||r.closest('[data-werkbon-action="send-customer"]')||re()};window.__werkbonDocumentClickHandler=Ve,document.addEventListener("click",Ve),b.addEventListener("keydown",t=>{const r=t.target instanceof HTMLElement?t.target:null;if(r){if(t.key==="Escape"&&z){t.preventDefault(),ye();return}if((t.key==="Enter"||t.key===" ")&&r.matches("[data-werkbon-row-id]")){t.preventDefault();const n=String(r.dataset.werkbonRowId??"");n&&(_=_===n?"":n,M())}if(t.key==="Escape"&&F){F=!1,V="",M();return}t.key==="Escape"&&_&&(_="",M())}}),b.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&Re(r)}),K==null||K.addEventListener("input",M),$==null||$.addEventListener("change",M),await wt();try{let t=[];try{t=await jt({garageIds:u})}catch{}v=t.filter(o=>Ne(o.completion_notes).werkbon_created===!0).map(lt).sort((o,i)=>new Date(i.completedAt??0).getTime()-new Date(o.completedAt??0).getTime());const r=new Set(v.map(o=>o.licensePlate).filter(o=>o&&o!=="UNKNOWN").map(o=>ee(o)));for(const o of r)if(o&&!ve.has(o))try{const i=await ot(o);i&&ve.set(o,i)}catch(i){console.error(`Failed to fetch vehicle for ${o}:`,i)}v=v.map(o=>{const i=ee(o.licensePlate),c=ve.get(i)||tn(i);return{...o,carModel:c.title+(c.buildYear?` (${c.buildYear})`:"")||o.carModel}});const n=await Vt({garageIds:u}),s=zt(n);f(s.unread),_=((Xe=v[0])==null?void 0:Xe.id)??""}catch(t){v=[],f(0),console.error(t)}M(),U&&(z=!0,E=1,B({forceMount:!0,refreshContent:!0}))}const hn=document.querySelector("#app");Bt();vn(hn);
