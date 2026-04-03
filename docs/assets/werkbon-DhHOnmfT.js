import{e as Vt,f as Gt,p as Be,c as Ut}from"./theme-CzeyRWKH.js";/* empty css                      */import{o as pt,g as Yt}from"./actionPopup-D9bI13ep.js";import{e as Jt,a as Qt,c as Zt,l as Xt,b as en,g as tn,s as nn,f as He}from"./branding-CLVp0Xjl.js";import{n as J,f as mt}from"./rdwService-CFrMDQAa.js";import{s as an}from"./confirmDialog-DSEC2-zx.js";const We={draft:{label:"Draft",className:"werkbon-status-draft"},link_sent:{label:"Link verstuurd",className:"werkbon-status-link-sent"},paid:{label:"Paid",className:"werkbon-status-paid"}},Se={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},rn=new Map([["apk","apk"],["apk keuring","apk"],["keuring","apk"],["banden","banden"],["band","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"],["overig","other"],["overige","other"],["other","other"]]),bt=["Voertuig","Klant","Onderdelen","Arbeid","Overzicht"],on=["contant","iDEAL","Mollie"],sn=[{label:"APK keuring",name:"APK keuring",price:45},{label:"Banden",name:"Banden",price:120},{label:"Remblokken voor",name:"Remblokken voor",price:85},{label:"Remblokken achter",name:"Remblokken achter",price:75},{label:"Olie",name:"Olie",price:35},{label:"Filters",name:"Filters",price:28},{label:"Accu",name:"Accu",price:95},{label:"Overige",name:"Overige",price:0}],ln="https://mkgfckxiusdcnqhethdy.supabase.co",cn="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",I=Vt(ln,cn);function ft(){return{voertuig:{},klant:{},onderdelen:[],arbeid:{enabled:!1,uren:0,minuten:0,tarief:65},btw:21}}function T(e,n=0){const u=Number(e);return Number.isFinite(u)&&u>=0?u:n}function me(e){const n=J(e).slice(0,6);return n?n.replace(/(.{2})(?=.)/g,"$1-"):""}function Le(e,n){const u=String(e??"").trim();if(u)return u;const p=J(n);return p?me(p):"UNKNOWN"}function dn(e){var f,d,$,N,C,M,x;const n=String(((f=e==null?void 0:e.voertuig)==null?void 0:f.kenteken)??"").trim(),u=[(d=e==null?void 0:e.klant)==null?void 0:d.naam,($=e==null?void 0:e.klant)==null?void 0:$.telefoon,(N=e==null?void 0:e.klant)==null?void 0:N.email,(C=e==null?void 0:e.klant)==null?void 0:C.omschrijving].some(v=>String(v??"").trim()),p=Array.isArray(e==null?void 0:e.onderdelen)&&e.onderdelen.some(v=>String((v==null?void 0:v.naam)??"").trim()||T(v==null?void 0:v.aantal)>0||T(v==null?void 0:v.prijs)>0),b=T((M=e==null?void 0:e.arbeid)==null?void 0:M.uren)*60+T((x=e==null?void 0:e.arbeid)==null?void 0:x.minuten);return!!(n||u||p||b>0)}function ae(e){var M,x,v,q;const n=(Array.isArray(e.onderdelen)?e.onderdelen:[]).map(D=>{const G=T(D==null?void 0:D.aantal),R=T(D==null?void 0:D.prijs);return{naam:String((D==null?void 0:D.naam)??"").trim()||"Onderdeel",aantal:G,prijs:R,totaal:F(G*R)}}),u=F(n.reduce((D,G)=>D+G.totaal,0)),p=T((M=e.arbeid)==null?void 0:M.uren)+T((x=e.arbeid)==null?void 0:x.minuten)/60,b=T((v=e.arbeid)==null?void 0:v.tarief,65),f=(q=e.arbeid)!=null&&q.enabled?F(p*b):0,d=F(u+f),$=T(e.btw)>0?.21:0,N=F(d*$),C=F(d+N);return{onderdelenRows:n,onderdelenSubtotaal:u,labourHours:p,labourRate:b,arbeidTotaal:f,subtotaal:d,btwBedrag:N,totaal:C}}function Y(e,n){return`<div class="werkbon-create-overview-row"><span>${l(e)}</span><strong>${l(n)}</strong></div>`}function $e(e,n,u){return`<div class="werkbon-create-overview-row"><span>${l(n)}</span><strong data-create-total="${l(e)}">${l(u)}</strong></div>`}function wt(e){return bt.map((n,u)=>{const p=u+1,b=p===e?"is-active":p<e?"is-done":"",f=p<e?"is-done":"",d=u<bt.length-1?`<span class="werkbon-create-step-separator ${f}" aria-hidden="true"></span>`:"";return`<button class="werkbon-create-step ${b}" type="button" data-create-action="jump-step" data-step="${p}"><span>${p}.</span>${l(n)}</button>${d}`}).join("")}function vt({step:e,state:n,rdwStatus:u}){var C,M,x,v,q,D,G,R,re,ce,fe,ke,ge,h;const p=ae(n),b=String(((C=n.voertuig)==null?void 0:C.title)??"").trim(),f=String(((M=n.voertuig)==null?void 0:M.buildYear)??"").trim(),d=String(((x=n.voertuig)==null?void 0:x.apkExpiryDate)??"").trim(),$=f?`${b||"Voertuig gegevens"} (${f})`:b||"Voertuig gegevens",N=u==="loading"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Kenteken controleren...</p>':u==="success"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-success">Kenteken gevonden</p>':u==="error"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-error">Kenteken niet gevonden</p>':'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Typ kenteken om te zoeken</p>';return e===1?`
      <div class="werkbon-create-body-step">
        <label class="werkbon-create-appointment-field">
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text" inputmode="text" maxlength="8" data-create-field="kenteken" value="${l(String(((v=n.voertuig)==null?void 0:v.kenteken)??""))}" placeholder="eg. 12-ABC-D1" required />
          ${N}
        </label>
        <div class="vehicle-preview-card werkbon-create-vehicle-preview" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${l($)}</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">${l(f)}</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">${l(d)}</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">${l(String(((q=n.voertuig)==null?void 0:q.color)??""))}</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">${l(String(((D=n.voertuig)==null?void 0:D.fuel)??""))}</strong></span>
          </div>
        </div>
      </div>
    `:e===2?`
      <div class="werkbon-create-body-step">
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input type="text" data-klant-field="naam" value="${l(String(((G=n.klant)==null?void 0:G.naam)??""))}" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" />
          </label>
          <label>
            Phone number
            <input type="tel" data-klant-field="telefoon" value="${l(String(((R=n.klant)==null?void 0:R.telefoon)??""))}" autocomplete="tel" placeholder="eg. 0624987172" />
          </label>
        </div>
        <label class="werkbon-create-appointment-field">
          Email
          <input type="email" data-klant-field="email" value="${l(String(((re=n.klant)==null?void 0:re.email)??""))}" autocomplete="email" placeholder="eg. klant@email.com" />
        </label>
        <label class="werkbon-create-appointment-field">
          Omschrijving
          <textarea rows="4" data-klant-field="omschrijving" placeholder="Optioneel">${l(String(((ce=n.klant)==null?void 0:ce.omschrijving)??""))}</textarea>
        </label>
      </div>
    `:e===3?`
      <div class="werkbon-create-body-step werkbon-create-parts-step">
        <div class="werkbon-create-section-copy">
          <label class="werkbon-create-section-title">Onderdelen</label>
          <p class="werkbon-create-section-subtitle">Voeg onderdelen en materialen toe aan de werkbon</p>
        </div>
        <div class="werkbon-create-quick-parts">
          ${sn.map(L=>`<button class="werkbon-chip-button" type="button" data-create-action="quick-part" data-part-name="${l(L.name)}" data-part-price="${l(String(L.price))}">+ ${l(L.label)}</button>`).join("")}
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
                ${n.onderdelen.map((L,j)=>`
                  <div class="werkbon-create-part-card">
                    <div class="werkbon-part-cell werkbon-part-cell-name">
                      <input type="text" class="werkbon-part-input" data-part-field="naam" data-part-index="${j}" value="${l(String(L.naam??""))}" placeholder="Onderdeel naam" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-price">
                      <div class="werkbon-currency-input">
                        <span class="werkbon-currency-symbol">€</span>
                        <input type="number" class="werkbon-part-input werkbon-part-input-price" min="0" step="0.01" data-part-field="prijs" data-part-index="${j}" value="${l(String(L.prijs??0))}" />
                      </div>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-quantity">
                      <input type="number" class="werkbon-part-input" min="1" step="1" data-part-field="aantal" data-part-index="${j}" value="${l(String(L.aantal??1))}" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-total">
                      <strong data-part-total-index="${j}">${l(g(F(T(L.aantal,1)*T(L.prijs))))}</strong>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-remove">
                      <button class="werkbon-remove-button" type="button" data-create-action="remove-part" data-part-index="${j}" aria-label="Verwijder onderdeel" title="Verwijder">
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
          ${$e("arbeid","Arbeid",g(p.arbeidTotaal))}
          ${$e("subtotaal","Subtotaal",g(p.subtotaal))}
          ${$e("btw","BTW",g(p.btwBedrag))}
          ${$e("totaal","Totaal",g(p.totaal))}
        </div>
      </div>
    `:`
    <div class="werkbon-create-body-step werkbon-create-overview">
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Voertuig</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="1">Bewerken</button></div>
        ${Y("Kenteken",String(((fe=n.voertuig)==null?void 0:fe.kenteken)??"-"))}
        ${Y("Voertuig",b||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Klant</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="2">Bewerken</button></div>
        ${Y("Naam",String(((ke=n.klant)==null?void 0:ke.naam)??"-")||"-")}
        ${Y("Email",String(((ge=n.klant)==null?void 0:ge.email)??"-")||"-")}
        ${Y("Telefoon",String(((h=n.klant)==null?void 0:h.telefoon)??"-")||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Onderdelen / Arbeid</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="3">Bewerken</button></div>
        ${Y("Onderdelen",g(p.onderdelenSubtotaal))}
        ${Y("Arbeid",g(p.arbeidTotaal))}
        ${Y("BTW",g(p.btwBedrag))}
        ${Y("Totaal",g(p.totaal))}
      </div>
    </div>
  `}async function un(){var e,n;if((e=window.jspdf)!=null&&e.jsPDF)return window.jspdf.jsPDF;if(await new Promise((u,p)=>{const b=document.querySelector('script[data-js-pdf-cdn="true"]');if(b){b.addEventListener("load",()=>u(),{once:!0}),b.addEventListener("error",()=>p(new Error("Kon jsPDF niet laden.")),{once:!0});return}const f=document.createElement("script");f.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",f.async=!0,f.dataset.jsPdfCdn="true",f.onload=()=>u(),f.onerror=()=>p(new Error("Kon jsPDF niet laden.")),document.head.append(f)}),!((n=window.jspdf)!=null&&n.jsPDF))throw new Error("jsPDF is niet beschikbaar.");return window.jspdf.jsPDF}function pn(e=""){return{title:J(e)||"Voertuig",buildYear:""}}function mn(e){const n=String(e||"").trim();if(!n)return["other"];const u=n.split(n.includes(",")?/,/g:/\+|\/|&| and /gi).map(p=>p.trim()).filter(Boolean);return u.length?u:[n]}function bn(e){return rn.get(String(e||"").trim().toLowerCase())||"other"}function ht(e){const n=String(e??"").trim();if(!n)return{key:"other",label:Se.other};const u=n.toLowerCase(),p=[{probe:"apk",key:"apk"},{probe:"band",key:"banden"},{probe:"airco",key:"airco"},{probe:"occasion",key:"occasions"},{probe:"brake",key:"brakes"},{probe:"onderhoud",key:"onderhoud"},{probe:"service",key:"onderhoud"},{probe:"overig",key:"other"}],b=bn(n);let f=b;if(b==="other"){const d=p.find($=>u.includes($.probe));d&&(f=d.key)}if(f==="other"){if(["other","overig","overige"].includes(u))return{key:f,label:Se.other};const d=n.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:f,label:d||n||Se.other}}return{key:f,label:Se[f]??n}}function fn(e){const n=Array.isArray(e==null?void 0:e.onderdelen)?e.onderdelen:[],u=new Set,p=[];for(const b of n){const f=String((b==null?void 0:b.naam)??"").trim();if(!f)continue;const d=ht(f),$=`${d.key}:${d.label.toLowerCase()}`;u.has($)||(u.add($),p.push(d.label))}return p.length?p:["Onderhoud"]}function kn(e){return mn(e).map(n=>{const{key:u,label:p}=ht(n);return`<span class="service-chip service-chip-${u}">${l(p)}</span>`}).join("")}function l(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function F(e){return Math.round(Number(e)*100)/100}function g(e){return`€${F(e).toFixed(2)}`}function qe(e){const n=String(e??"").replace(/\D+/g,"");return n?n.startsWith("00")?n.slice(2):n.startsWith("0")?`31${n.slice(1)}`:n:""}function je(e){const n=Number(e);return(Number.isFinite(n)?n:0).toFixed(2).replace(".",",")}function Me(e){const n=new Date(e);return Number.isNaN(n.getTime())?null:n}function gn(e){if(!e)return"";const n=Me(e);if(!n)return"";const u=n.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}),p=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${u} · ${p}`}function yt(e){const n=Me(e);return n?n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Unknown date"}function le(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function Fe(e){const n=String(e??"draft").trim().toLowerCase();return["paid","betaald"].includes(n)?"paid":["link_sent","link-sent","link sent","linkverstuurd","link_verstuurd","link verstuurd","sent","send","verzonden"].includes(n)?"link_sent":(["draft","pending","openstaand"].includes(n),"draft")}function be({status:e,paymentLink:n,paymentLinkSentAt:u,paidAt:p,paymentStatus:b}={}){const f=Fe(e);if(f==="paid")return"paid";const d=String(b??"").trim().toLowerCase(),$=!!String(p??"").trim();if(d==="paid"||$)return"paid";const N=!!(String(n??"").trim()||String(u??"").trim());return f==="link_sent"||N?"link_sent":"draft"}function Oe(e){if(!e)return{};if(typeof e=="object")return e;try{return JSON.parse(String(e))}catch{return{}}}function wn(e){return String(e??"").split(",").map(n=>n.trim()).filter(Boolean)}function St(e){var N,C;const n=(e.parts??[]).map(M=>{const x=Number(M.quantity??0),v=Number(M.price??0);return{name:String(M.name??"Item"),quantity:x,price:v,total:F(x*v)}}),u=Number(((N=e.labour)==null?void 0:N.hours)??0),p=Number(((C=e.labour)==null?void 0:C.rate)??0),b=F(u*p),f=F(n.reduce((M,x)=>M+x.total,0)+b),d=F(f*.21),$=F(f+d);return{id:String(e.id??""),completedAppointmentId:String(e.completedAppointmentId??""),bookingId:String(e.bookingId??""),garageId:String(e.garageId??""),licensePlate:String(e.licensePlate??"UNKNOWN"),customerName:Le(e.customerName,e.licensePlate),carModel:String(e.carModel??"Unknown vehicle"),serviceTypes:Array.isArray(e.serviceTypes)?e.serviceTypes.map(String):["Other"],completedAt:e.completedAt,status:be({status:e.status,paymentLink:e.paymentLink,paymentLinkSentAt:e.paymentLinkSentAt,paidAt:e.paidAt,paymentStatus:e.paymentStatus}),parts:n,labour:{hours:u,rate:p,total:b},summary:{subtotal:f,vat:d,total:$},paymentLink:String(e.paymentLink??""),paymentLinkSentAt:String(e.paymentLinkSentAt??""),paymentMethod:String(e.paymentMethod??""),paidAt:String(e.paidAt??"")}}function kt(e){const n=Oe(e.completion_notes),u=Array.isArray(n.service_types)?n.service_types.map(String):wn(e.service),p=n.labour&&typeof n.labour=="object"?n.labour:{},b=Array.isArray(n.parts)?n.parts:[{name:"Service",quantity:1,price:0}],f=be({status:n.status,paymentLink:n.payment_link,paymentLinkSentAt:n.payment_link_sent_at,paidAt:n.paid_at??n.paidAt,paymentStatus:n.payment_status}),d=String(e.license_plate??"");return St({id:String(e.id??""),completedAppointmentId:String(e.id??""),bookingId:String(e.booking_id??""),garageId:String(e.garage_id??""),licensePlate:d,customerName:Le(n.customer_name??n.customerName,d),carModel:String(n.car_model||n.carModel||"Voertuig"),serviceTypes:u.length?u:["Service"],completedAt:String(e.completed_at??e.created_at??new Date().toISOString()),status:f,werkbonCreated:n.werkbon_created===!0,parts:b,labour:{hours:Number(p.hours??0),rate:Number(p.rate??0)},paymentLink:String(n.payment_link??""),paymentLinkSentAt:String(n.payment_link_sent_at??""),paymentMethod:String(n.payment_method??""),paidAt:String(n.paid_at??n.paidAt??"")})}function vn(){const e=Be("werkbon-detail.html");if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const n=document.createElement("link");n.rel="prefetch",n.as="document",n.href=e,document.head.append(n)}function $t(e,n=""){const u=be({status:e,paymentLink:n}),p=We[u]??We.draft;return`<span class="status-chip ${p.className}">${p.label}</span>`}function hn(e){const n=e.filter(d=>d.status!=="paid").reduce((d,$)=>d+$.summary.total,0),u=e.filter(d=>d.status==="link_sent").length,p=e.filter(d=>d.status==="draft").length,b=e.filter(d=>d.status==="paid").reduce((d,$)=>d+$.summary.total,0);return[{label:"Outstanding revenue",value:g(n),note:`${e.filter(d=>d.status!=="paid").length} open werkbon`},{label:"Ready to send",value:String(p),note:"Draft invoices waiting for customer delivery"},{label:"In payment flow",value:String(u),note:"Werkbonnen met verstuurde link"},{label:"Paid total",value:g(b),note:"Completed payments"}].map(d=>`
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${l(d.label)}</p>
          <strong class="werkbon-summary-value">${l(d.value)}</strong>
          <span class="metric-note">${l(d.note)}</span>
        </article>
      `).join("")}function yn(e){return`
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
  `}function Sn(e,n){if(!e)return"";const u=e.status==="paid"?"":`<button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${l(e.id)}">Mark as Paid</button>`;return`
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${l(le(e.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${l(e.customerName)} · ${l(yt(e.completedAt))}</p>
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
              ${$t(e.status,e.paymentLink)}
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
                ${Tn(e)}
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
  `}function Lt(e,n){return`
    <article class="request-card werkbon-card ${n?"is-expanded":""}" data-werkbon-row-id="${l(e.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          <span class="plate-chip">${l(le(e.licensePlate))}</span>
          <div class="request-info">
            <p class="request-name">${l(e.customerName)}</p>
            <p class="request-vehicle">${l(e.carModel)}</p>
            <div class="request-services">${kn(Array.isArray(e.serviceTypes)?e.serviceTypes.join(", "):e.serviceTypes)}</div>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${l(g(e.summary.total))}</strong>
          ${$t(e.status,e.paymentLink)}
          ${e.status==="paid"&&e.paidAt?`<span class="werkbon-paid-at">${l(gn(e.paidAt))}</span>`:""}
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

      ${n?yn(e):""}
    </article>
  `}function Mt(e){return`
    <div class="werkbon-payment-overlay" role="presentation">
      <div class="werkbon-payment-dialog" role="dialog" aria-modal="true" aria-labelledby="werkbonPaymentTitle">
        <h3 id="werkbonPaymentTitle">Kies betaalmethode</h3>
        <div class="werkbon-payment-grid">
          ${on.map(n=>`
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
  `}function $n({isOpen:e,step:n,state:u,rdwStatus:p,rdwError:b,selectedPaymentMethod:f,isSaving:d,paymentModalOpen:$}){if(!e)return"";const C=n===1&&!(p==="success");return`
    <div class="werkbon-create-modal ${e?"is-open":""}" role="presentation">
      <div class="werkbon-create-shadow" data-create-action="attempt-close" aria-hidden="true">
        <section class="werkbon-create-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonCreateTitle">
          <header class="werkbon-create-header">
            <div>
              
              <h2 id="werkbonCreateTitle">Werkbon Maken</h2>
            </div>
            <button class="icon-button" type="button" data-create-action="attempt-close" aria-label="Sluiten">&times;</button>
          </header>

          <nav class="werkbon-create-stepper" aria-label="Werkbon stappen">${wt(n)}</nav>

          <div class="werkbon-create-content">${vt({step:n,state:u,rdwStatus:p})}</div>

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

        <div data-create-payment-host="true">${$?Mt(f):""}</div>
      </div>
    </div>
  `}function Ln({step:e,rdwStatus:n,isSaving:u}){const p=e===1&&n!=="success";return{left:`<button class="button subtle" type="button" data-create-action="prev-step" ${e===1?"disabled":""}>Vorige</button>`,right:e<5?`<button class="button subtle" type="button" data-create-action="next-step" ${p?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${u?"disabled":""}>${u?"Opslaan...":"Opslaan"}</button>`}}function Mn(e){return`
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${l(e)}</p>
      </div>
    </div>
  `}function En(e,n){return e.length?e.map(Lt).join(""):Mn(n?"No invoices match the current filters.":"Completed appointments will appear here once a werkbon is created.")}function Tn(e){return e.parts.map(n=>`
        <div class="werkbon-line-item">
          <span>${l(n.name)}</span>
          <span>${l(String(n.quantity))}</span>
          <span>${l(g(n.price))}</span>
          <strong>${l(g(n.total))}</strong>
        </div>
      `).join("")}function _n(e){return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Werkbon ${l(le(e.licensePlate))}</title>
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
          <p><strong>License plate:</strong> ${l(le(e.licensePlate))}</p>
          <p><strong>Customer:</strong> ${l(e.customerName)}</p>
          <p><strong>Date:</strong> ${l(yt(e.completedAt))}</p>
          <p><strong>Status:</strong> ${l(We[e.status].label)}</p>
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
  `}function gt(e){const n=window.open("","_blank","width=960,height=720,noopener,noreferrer");return n?(n.document.open(),n.document.write(_n(e)),n.document.close(),n.focus(),window.setTimeout(()=>{n.print()},180),!0):!1}async function An(e){var et,tt,nt,at,rt,ot,it,st;if(!e)return;document.body.style.overflow="";const n=await Jt();if(!n)return;if(!n.isAdmin&&!n.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Qt(n.activeGarage);const u=n.isAdmin?null:[(et=n.activeGarage)==null?void 0:et.id].filter(Boolean),{shell:p,contentArea:b,setUnreadEmailCount:f}=Zt({activePage:"werkbon",title:"Werkbon & Payments",headerNote:"Manage invoices and payment status",userEmail:n.user.email,onLogout:Xt,garage:n.activeGarage,isAdmin:n.isAdmin}),d=document.createElement("div");d.id="werkbonCreateModalHost",e.replaceChildren(p,d),vn(),b.innerHTML=`
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
  `;const $=b.querySelector("#werkbonNotice"),N=b.querySelector("#werkbonSummary"),C=b.querySelector("#werkbonList"),M=b.querySelector("#werkbonDrawer"),x=b.querySelector("#werkbonCreateTrigger"),v=b.querySelector("#werkbonStatusFilter"),q=b.querySelector("#werkbonSearch"),D=new URLSearchParams(window.location.search),G=String(D.get("action")??"").toLowerCase()==="create",R=en("werkbon",{}),re=String(R.searchTerm??"").trim(),ce=String(R.statusFilter??"all").trim()||"all",fe=String(R.expandedInvoiceId??"").trim(),ke=String(R.selectedInvoiceId??"").trim(),ge=String(R.editingInvoiceId??"").trim();let h=[],L=((tt=h[0])==null?void 0:tt.id)??"",j="",z=!1,V="",Q=!1,_=1,ee=!1,te="",oe=!1,P="idle",Z="",K=0,we=0,m=ft(),Re=0,de=null,ne=null,U={...n.activeGarage,mollieMethod:String(((nt=n.activeGarage)==null?void 0:nt.mollieMethod)??"none"),mollieApiKey:((at=n.activeGarage)==null?void 0:at.mollieApiKey)??null,paymentDays:parseInt(String(((rt=n.activeGarage)==null?void 0:rt.paymentDays)??"14"),10)||14,garageName:String(((ot=n.activeGarage)==null?void 0:ot.garageName)||((it=n.activeGarage)==null?void 0:it.name)||"Garage")};const Ee=new Map,Et=()=>{He("werkbon",{searchTerm:q instanceof HTMLInputElement?q.value.trim():"",statusFilter:v instanceof HTMLSelectElement?v.value:"all",expandedInvoiceId:L,selectedInvoiceId:j,editingInvoiceId:V})},H=t=>{$ instanceof HTMLElement&&($.textContent=t,$.hidden=!t,window.clearTimeout(Re),t&&(Re=window.setTimeout(()=>{$.hidden=!0,$.textContent=""},2600)))},A=(t,r="success")=>{if(r==="error"){H(String(t||"Er ging iets mis"));return}H(String(t||"Actie uitgevoerd."))},Tt=async()=>{var r;const t=(r=n.activeGarage)==null?void 0:r.id;if(!(!I||!t))try{const{data:a,error:s}=await I.from("garages").select("*").eq("id",t).maybeSingle();if(s||!a)return;U={...U,paymentLink:a.payment_link??U.paymentLink??null,mollieMethod:String(a.mollie_method??U.mollieMethod??"none"),mollieApiKey:a.mollie_api_key??U.mollieApiKey??null,paymentDays:parseInt(String(a.payment_days??U.paymentDays??14),10)||14,garageName:String(a.garage_name||a.name||U.garageName||"Garage")}}catch{}},ie=()=>{de instanceof HTMLElement&&de.remove(),de=null,ne=null},Ke=({title:t,body:r,confirmLabel:a,cancelLabel:s,confirmClassName:o=""})=>new Promise(i=>{const c=document.createElement("div");c.innerHTML=`
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
    `,document.body.append(c);const k=c.querySelector(".confirm-dialog-overlay"),w=c.querySelector('[data-confirm-action="continue"]');w instanceof HTMLButtonElement&&window.setTimeout(()=>w.focus(),50);const S=y=>{c.remove(),i(y)};k instanceof HTMLElement&&k.addEventListener("click",y=>{y.target===k&&S(!1)}),c.addEventListener("click",y=>{const B=y.target instanceof HTMLElement?y.target:null,O=B==null?void 0:B.closest("[data-confirm-action]");O instanceof HTMLElement&&S(O.dataset.confirmAction==="continue")}),c.addEventListener("keydown",y=>{y.key==="Escape"&&S(!1)})}),_t=()=>{K&&(window.clearTimeout(K),K=0),we+=1,_=1,ee=!1,te="",oe=!1,P="idle",Z="",m=ft()},W=({forceMount:t=!1,refreshContent:r=!1}={})=>{if(!(d instanceof HTMLElement))return;if(!Q){d.innerHTML&&(d.innerHTML=""),document.body.style.overflow="";return}if(!((t?null:d.querySelector(".werkbon-create-modal"))instanceof HTMLElement)){d.innerHTML=$n({isOpen:Q,step:_,state:m,rdwStatus:P,rdwError:Z,selectedPaymentMethod:te,isSaving:oe,paymentModalOpen:ee}),document.body.style.overflow="hidden";return}const s=d.querySelector(".werkbon-create-stepper");if(s instanceof HTMLElement&&(s.innerHTML=wt(_)),r){const S=d.querySelector(".werkbon-create-content");S instanceof HTMLElement&&(S.innerHTML=vt({step:_,state:m,rdwStatus:P}))}const o=d.querySelector('[data-create-action="prev-step"]');o instanceof HTMLButtonElement&&(o.disabled=_===1);const i=d.querySelector(".werkbon-create-actions-left"),c=d.querySelector(".werkbon-create-actions-right");if(i instanceof HTMLElement&&c instanceof HTMLElement){const S=Ln({step:_,rdwStatus:P,isSaving:oe});i.innerHTML=S.left,c.innerHTML=S.right}const k=d.querySelector('[data-create-saving-host="true"]');k instanceof HTMLElement&&(k.innerHTML=oe?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':"");const w=d.querySelector('[data-create-payment-host="true"]');w instanceof HTMLElement&&(w.innerHTML=ee?Mt(te):""),document.body.style.overflow="hidden"},Te=({rerenderPage:t=!1}={})=>{if(Q=!1,ie(),_t(),t){E();return}W()},_e=async()=>{if(!dn(m)){Te();return}await an("Er staan niet-opgeslagen gegevens in deze werkbon. Weet je zeker dat je wilt sluiten?","Werkbon sluiten")&&Te()},At=async t=>{if(!I||!t)return Date.now()%1e5;const{data:r,error:a}=await I.from("garages").select("invoice_sequence").eq("id",t).maybeSingle();if(a)throw a;const o=Math.max(1e3,Number((r==null?void 0:r.invoice_sequence)??1e3))+1,{error:i}=await I.from("garages").update({invoice_sequence:o}).eq("id",t);if(i)throw i;return o},Ct=async()=>{var O,X,ye,lt,ct,dt,ut;const t=(O=n.activeGarage)==null?void 0:O.id;if(!t)throw new Error("Geen garage gevonden voor deze gebruiker.");const r=J(((X=m.voertuig)==null?void 0:X.kenteken)??"");if(r.length<6)throw new Error("Voer eerst een geldig kenteken in.");if(P!=="success")throw new Error("Haal eerst RDW voertuiggegevens op.");const a=ae(m),s=await At(t),i=`wb-${String(Date.now()).slice(-4)}`,c=`F-${String(s).padStart(6,"0")}`,k=new Date().toISOString(),w=Le((ye=m.klant)==null?void 0:ye.naam,r),S=String(((lt=m.voertuig)==null?void 0:lt.title)??"").trim()||"Voertuig",y=fn(m),B={werkbon_id:i,status:"draft",werkbon_created:!0,customer_name:w,customer_email:String(((ct=m.klant)==null?void 0:ct.email)??"").trim(),customer_phone:String(((dt=m.klant)==null?void 0:dt.telefoon)??"").trim(),car_model:S,service_types:y,km_stand:0,vat_enabled:T(m.btw)>0,description:String(((ut=m.klant)==null?void 0:ut.omschrijving)??"").trim(),internal_note:"",invoice_number:c,paid_at:te?new Date().toISOString().slice(0,10):null,completed_at:k,parts:a.onderdelenRows.map(De=>({name:De.naam,quantity:De.aantal,price:De.prijs})),labour:{hours:a.labourHours,rate:a.labourRate},totals:{subtotal:a.subtotaal,vat:a.btwBedrag,total:a.totaal},payment_method:te};return{garageId:t,kenteken:r,completedAt:k,completionNotes:B,serviceSummary:y.join(", "),werkbonId:i,invoiceNumber:c}},xt=async()=>{if(!I)throw new Error("Supabase is niet geconfigureerd.");oe=!0,W();try{const t=await Ct(),{data:r,error:a}=await I.from("completed_appointments").insert({garage_id:t.garageId,booking_id:null,completed_at:t.completedAt,appointment_date:t.completedAt.slice(0,10),appointment_time:t.completedAt.slice(11,19),license_plate:t.kenteken,service:t.serviceSummary||"Onderhoud",completion_notes:JSON.stringify(t.completionNotes)}).select("id, booking_id, garage_id, completed_at, created_at, license_plate, service, completion_notes").single();if(a)throw a;const s=kt(r);h=[s,...h],L=s.id,H(`Werkbon ${t.werkbonId} opgeslagen als ${t.invoiceNumber}.`),Te()}finally{oe=!1,E()}},Pt=async()=>{var k,w,S;const t=await un(),r=ae(m),a=new t({unit:"pt",format:"a4"}),s=String(((k=m.voertuig)==null?void 0:k.kenteken)??"-"),o=Le((w=m.klant)==null?void 0:w.naam,s),i=String(((S=m.klant)==null?void 0:S.omschrijving)??"").trim();let c=56;a.setFont("helvetica","bold"),a.setFontSize(18),a.text("Werkbon / Factuur",42,c),c+=26,a.setFont("helvetica","normal"),a.setFontSize(11),a.text(`Datum: ${new Date().toLocaleDateString("nl-NL")}`,42,c),c+=16,a.text(`Kenteken: ${s}`,42,c),c+=16,a.text(`Klant: ${o}`,42,c),c+=16,i&&(a.text(`Omschrijving: ${i}`,42,c,{maxWidth:520}),c+=22),a.setFont("helvetica","bold"),a.text("Onderdelen",42,c),c+=16,a.setFont("helvetica","normal"),r.onderdelenRows.forEach(y=>{a.text(`${y.naam}  x${y.aantal}  ${g(y.prijs)}  ${g(y.totaal)}`,42,c),c+=14}),c+=12,a.text(`Arbeid: ${g(r.arbeidTotaal)}`,42,c),c+=14,a.text(`Subtotaal: ${g(r.subtotaal)}`,42,c),c+=14,a.text(`BTW: ${g(r.btwBedrag)}`,42,c),c+=14,a.setFont("helvetica","bold"),a.text(`Totaal: ${g(r.totaal)}`,42,c),a.save(`werkbon-${J(s)||"nieuw"}.pdf`)},It=async()=>{var s,o,i;if(!I)throw new Error("Supabase is niet geconfigureerd.");const t=String(((s=m.klant)==null?void 0:s.email)??"").trim();if(!t)throw new Error("Geen e-mailadres beschikbaar.");const r=ae(m),{error:a}=await I.functions.invoke("send-werkbon-email",{body:{to:t,template:"werkbon_factuur_nl",subject:`Werkbon ${me(((o=m.voertuig)==null?void 0:o.kenteken)??"")}`,customerName:String(((i=m.klant)==null?void 0:i.naam)??"Klant"),total:r.totaal}});if(a)throw a},Nt=()=>{var s,o,i;const t=String(((s=m.klant)==null?void 0:s.telefoon)??"").replace(/[^0-9]/g,""),r=ae(m),a=`Hallo ${String(((o=m.klant)==null?void 0:o.naam)??"")}, uw werkbon (${me(((i=m.voertuig)==null?void 0:i.kenteken)??"")}) staat klaar. Totaal: ${g(r.totaal)}.`;window.open(`https://wa.me/${encodeURIComponent(t)}?text=${encodeURIComponent(a)}`,"_blank","noopener,noreferrer")},ue=()=>{const t=d.querySelector("#vehicleLookupStatus");if(t instanceof HTMLElement){if(t.classList.remove("is-success","is-error"),P==="loading"){t.textContent="Kenteken controleren...";return}if(P==="success"){t.textContent="Kenteken gevonden",t.classList.add("is-success");return}if(P==="error"){t.textContent="Kenteken niet gevonden",t.classList.add("is-error");return}t.textContent="Typ kenteken om te zoeken"}},se=()=>{const t=d.querySelector('[data-create-action="next-step"]');if(t instanceof HTMLButtonElement){if(_===1){t.disabled=P!=="success";return}t.disabled=_===5}},ze=()=>{var w,S,y,B,O;const t=d.querySelector("#vehiclePreviewTitle"),r=d.querySelector("#vehiclePreviewBuildYear"),a=d.querySelector("#vehiclePreviewApk"),s=d.querySelector("#vehiclePreviewColor"),o=d.querySelector("#vehiclePreviewFuel");if(!(t instanceof HTMLElement)||!(r instanceof HTMLElement)||!(a instanceof HTMLElement)||!(s instanceof HTMLElement)||!(o instanceof HTMLElement))return;const i=String(((w=m.voertuig)==null?void 0:w.title)??"").trim(),c=String(((S=m.voertuig)==null?void 0:S.buildYear)??"").trim(),k=c?`${i||"Voertuig gegevens"} (${c})`:i||"Voertuig gegevens";t.textContent=k,r.textContent=c,a.textContent=String(((y=m.voertuig)==null?void 0:y.apkExpiryDate)??"").trim(),s.textContent=String(((B=m.voertuig)==null?void 0:B.color)??"").trim(),o.textContent=String(((O=m.voertuig)==null?void 0:O.fuel)??"").trim()},Dt=()=>{const t=ae(m),r=d.querySelector("[data-parts-subtotal-value]");r instanceof HTMLElement&&(r.textContent=g(t.onderdelenSubtotaal)),d.querySelectorAll("[data-part-total-index]").forEach(s=>{if(!(s instanceof HTMLElement))return;const o=Number(s.getAttribute("data-part-total-index")??-1),i=t.onderdelenRows[o];i&&(s.textContent=g(i.totaal))})},Ae=()=>{const t=ae(m),r={arbeid:g(t.arbeidTotaal),subtotaal:g(t.subtotaal),btw:g(t.btwBedrag),totaal:g(t.totaal)};d.querySelectorAll("[data-create-total]").forEach(s=>{if(!(s instanceof HTMLElement))return;const o=String(s.getAttribute("data-create-total")??"");o in r&&(s.textContent=r[o])})},Ht=()=>{var a;const t=!!((a=m.arbeid)!=null&&a.enabled);d.querySelectorAll("[data-arbeid-field]").forEach(s=>{if(s instanceof HTMLInputElement){if(s.getAttribute("data-arbeid-field")==="enabled"){s.checked=t;return}s.disabled=!t}}),Ae()},Ve=async({showShortInputError:t=!1}={})=>{var s;const r=J(((s=m.voertuig)==null?void 0:s.kenteken)??"");if(r.length<6){P="idle",Z=t?"Voer minimaal 6 tekens in voor het kenteken.":"",ue(),se();return}const a=++we;P="loading",Z="",ue(),se();try{const o=await mt(r);if(a!==we)return;if(!o){P="error",Z="Geen RDW voertuig gevonden voor dit kenteken.",m.voertuig={...m.voertuig,title:"",buildYear:"",apkExpiryDate:"",color:"",fuel:""},ue(),ze(),se();return}m.voertuig={...m.voertuig,kenteken:me(r),...o},P="success",Z="",ue(),ze(),se()}catch{if(a!==we)return;P="error",Z="RDW service is momenteel niet beschikbaar.",ue(),se()}},ve=(t,r)=>{h=h.map(a=>a.id===t?St(r(a)):a)},qt=t=>h.find(r=>r.id===t)??null,Ce=t=>{var r;return String((t==null?void 0:t.garageId)||((r=n.activeGarage)==null?void 0:r.id)||"")},jt=t=>{if(!(C instanceof HTMLElement))return null;const r=C.querySelectorAll("[data-werkbon-row-id]");for(const a of r)if(a instanceof HTMLElement&&String(a.dataset.werkbonRowId??"")===String(t))return a;return null},xe=async(t,r)=>{if(!I)throw new Error("Supabase is niet geconfigureerd.");const a=String(t.completedAppointmentId||t.id||"");if(!a)throw new Error("Werkbon ID ontbreekt.");const s=Ce(t);let o=I.from("completed_appointments").select("id, garage_id, completion_notes").eq("id",a);s&&(o=o.eq("garage_id",s));const{data:i,error:c}=await o.maybeSingle();if(c)throw c;if(!i)throw new Error("Werkbon niet gevonden.");const w={...Oe(i.completion_notes),...r};let S=I.from("completed_appointments").update({completion_notes:JSON.stringify(w)}).eq("id",a);s&&(S=S.eq("garage_id",s));const{error:y}=await S;if(y)throw y;return w},Pe=async t=>{const r=qt(t);if(!r)throw new Error("Werkbon niet gevonden.");const a=String(r.completedAppointmentId||r.id||"");if(!a||!I)return{invoice:r,customer_name:r.customerName,customer_email:"",customer_phone:"",factuurnummer:"",total:r.summary.total,status:r.status};const s=Ce(r);let o=I.from("werkbonnen").select("werkbon_id, garage_id, customer_name, customer_email, customer_phone, invoice_number, total_amount, invoice_status, payment_link, payment_link_sent_at, payment_method").eq("werkbon_id",a);s&&(o=o.eq("garage_id",s));const{data:i,error:c}=await o.maybeSingle();if(c)throw c;const k=Number((i==null?void 0:i.total_amount)??0);return{invoice:r,customer_name:String((i==null?void 0:i.customer_name)??r.customerName??"Klant"),customer_email:String((i==null?void 0:i.customer_email)??"").trim(),customer_phone:String((i==null?void 0:i.customer_phone)??"").trim(),factuurnummer:String((i==null?void 0:i.invoice_number)??"").trim(),total:Number.isFinite(k)&&k>0?k:r.summary.total,status:be({status:(i==null?void 0:i.invoice_status)??r.status??"draft",paymentLink:(i==null?void 0:i.payment_link)??r.paymentLink,paymentLinkSentAt:(i==null?void 0:i.payment_link_sent_at)??r.paymentLinkSentAt,paidAt:r.paidAt}),payment_link:String((i==null?void 0:i.payment_link)??"").trim(),payment_link_sent_at:String((i==null?void 0:i.payment_link_sent_at)??"").trim(),payment_method:String((i==null?void 0:i.payment_method)??"").trim()}},Ge=(t,r)=>{ve(t,a=>({...a,status:Fe(r)}))},Ie=async t=>t.customer_email?(await xe(t.invoice,{status:"link_sent"}),Ge(t.invoice.id,"link_sent"),A("Factuur verstuurd per e-mail ✓","success"),!0):(A("Geen e-mailadres bekend voor deze klant","error"),!1),he=async t=>{var y,B;if(!t.customer_phone)return A("Geen telefoonnummer bekend voor deze klant","error"),!1;const r=qe(t.customer_phone);if(!r)return A("Geen telefoonnummer bekend voor deze klant","error"),!1;const a=U||n.activeGarage,s=String((a==null?void 0:a.mollieMethod)||"none"),o=Math.max(1,parseInt(String((a==null?void 0:a.paymentDays)??14),10)||14),i=String((a==null?void 0:a.garageName)||(a==null?void 0:a.name)||"Uw garage");let c=null;try{c=await Yt(a,{totalAmount:t.total,factuurnummer:t.factuurnummer||"",customerName:t.customer_name||"Klant",paymentDays:o,completedAppointmentId:((y=t.invoice)==null?void 0:y.completedAppointmentId)||((B=t.invoice)==null?void 0:B.id)||""},O=>A(O,"error"),I)}catch{}if(s!=="none"&&!c)return A("Geen betaallink gemaakt. Controleer Mollie API-sleutel/instellingen en probeer opnieuw.","error"),!1;const k=[`Beste ${t.customer_name||"klant"},`,"",`Hierbij uw factuur van ${i}.`,"",`Factuurnummer: ${t.factuurnummer||"-"}`,`Totaalbedrag: €${je(t.total)}`,`Betaaltermijn: ${o} dagen`];c&&k.push("","Betaal eenvoudig via Mollie:",c),k.push("","Met vriendelijke groet,",i);const w=k.join(`
`),S=`https://wa.me/${encodeURIComponent(r)}?text=${encodeURIComponent(w)}`;if(window.open(S,"_blank","noopener,noreferrer"),c)try{await xe(t.invoice,{status:t.invoice.status!=="paid"?"link_sent":t.invoice.status,payment_link:c,payment_link_sent_at:new Date().toISOString(),payment_method:"mollie"});const O=new Date().toISOString(),X=h.findIndex(ye=>ye.id===t.invoice.id);X!==-1&&(h[X]={...h[X],status:h[X].status!=="paid"?"link_sent":h[X].status,paymentLink:c,paymentLinkSentAt:O,paymentMethod:"mollie"})}catch{}else Ge(t.invoice.id,"link_sent");return A("WhatsApp bericht geopend ✓","success"),!0},Bt=async(t,r)=>{const a=await Pe(r),s=!!a.customer_email,o=!!qe(a.customer_phone);return pt({triggerButton:t,title:"📄 PDF Acties",options:[{id:"download",icon:"⬇️",title:"Downloaden",description:"Sla de factuur op als PDF",onSelect:async i=>{const c=gt(a.invoice);i.forceClose(),A(c?"PDF wordt gedownload ✓":"Sta pop-ups toe om PDF te downloaden",c?"success":"error")}},{id:"email",icon:"📧",title:"Stuur via E-mail",description:s?"Verstuur naar klant e-mail":"⚠️ Geen e-mailadres bekend. Voeg een e-mailadres toe aan deze werkbon.",disabled:!s,onSelect:async(i,c)=>{i.setLoading(c,!0);const k=await Ie(a);i.setLoading(c,!1),k&&(i.forceClose(),E())}},{id:"whatsapp",icon:"💬",title:"Stuur via WhatsApp",description:o?"Deel de factuur via WhatsApp":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.",disabled:!o,onSelect:async(i,c)=>{i.setLoading(c,!0);const k=await he(a);i.setLoading(c,!1),k&&(i.forceClose(),E())}}]})},Wt=async(t,r)=>{var k;const a=await Pe(r),s=a.invoice,o=!!qe(a.customer_phone),c=String(((k=U||n.activeGarage)==null?void 0:k.mollieMethod)||"none")!=="none";return pt({triggerButton:t,title:"💳 Betaalmethode",subtitle:`Totaal te betalen: €${je(a.total)}`,options:[{id:"cash",icon:"💵",title:"Contant",description:"Registreer contante betaling",onSelect:async w=>{w.setBodyContent(`
              <div class="action-popup-confirm">
                <p class="action-popup-confirm-title">Bevestig contante betaling</p>
                <p class="action-popup-confirm-subtitle">€${l(je(a.total))} ontvangen?</p>
                <div class="action-popup-confirm-actions">
                  <button type="button" class="button subtle" data-popup-cancel>Annuleren</button>
                  <button type="button" class="button" data-popup-confirm>✓ Bevestigen</button>
                </div>
              </div>
            `,S=>{const y=S.querySelector("[data-popup-cancel]"),B=S.querySelector("[data-popup-confirm]");y==null||y.addEventListener("click",()=>w.forceClose()),B==null||B.addEventListener("click",async()=>{await Ye(s.id,t),w.forceClose(),E(),A("Contante betaling geregistreerd ✓","success")})})}},{id:"mollie_whatsapp",icon:"💬",title:"Betaallink via WhatsApp",description:c?o?"Stuur iDEAL link naar klant":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.":"⚠️ Geen Mollie account verbonden. Ga naar Instellingen → Betalingen.",disabled:!c||!o,onSelect:async(w,S)=>{w.setLoading(S,!0);const y=await he(a);w.setLoading(S,!1),y&&(w.forceClose(),E(),A("Betaallink verstuurd via WhatsApp ✓","success"))}}]})},Ft=(t,r)=>{ie();const a=t.getBoundingClientRect(),s=document.createElement("div");s.className="send-dropdown",s.setAttribute("data-send-dropdown","true"),s.innerHTML=`
      <button type="button" data-send-option="email" data-werkbon-id="${l(r.invoice.id)}">
        📧 Per e-mail ${r.customer_email?"":'<span class="send-dropdown-muted">(geen e-mail)</span>'}
      </button>
      <button type="button" data-send-option="whatsapp" data-werkbon-id="${l(r.invoice.id)}">
        💬 Via WhatsApp ${r.customer_phone?"":'<span class="send-dropdown-muted">(geen telefoon)</span>'}
      </button>
      <button type="button" data-send-option="both" data-werkbon-id="${l(r.invoice.id)}">
        📤 Beide versturen
      </button>
    `,document.body.append(s);const o=window.innerWidth,i=window.innerHeight,c=s.getBoundingClientRect(),k=Math.max(8,Math.min(a.left,o-c.width-8)),w=a.bottom+c.height+8>i?Math.max(8,a.top-c.height-8):a.bottom+6;s.style.left=`${Math.round(k)}px`,s.style.top=`${Math.round(w)}px`,de=s,ne=r},pe=(t,r)=>{if(!(t instanceof HTMLButtonElement))return()=>{};const a=t.textContent||"";return t.disabled=!0,t.textContent=r,()=>{t.disabled=!1,t.textContent=a}},Ot=t=>new Promise(r=>{const a=jt(t);if(!(a instanceof HTMLElement)){r();return}a.classList.add("werkbon-row-removing"),window.setTimeout(r,220)}),Ne=(t,r=!1)=>{j=t,z=!0,V=r?t:"",E()},Ue=(t,r)=>{const a=h.find(s=>s.id===t);if(a){if(a.status==="paid"){H(`Invoice for ${le(a.licensePlate)} is already paid.`),Ne(t,!1);return}ve(t,s=>({...s,status:"link_sent"})),H(`Werkbon sent to customer via ${r}.`),Ne(t,!1)}},Ye=async(t,r)=>{const a=h.find(i=>i.id===t);if(!a)return;if(a.status==="paid"){H(`Invoice for ${le(a.licensePlate)} is already marked as paid.`),Ne(t,!1);return}if(!await Ke({title:"Werkbon markeren als betaald?",body:"Dit registreert de betaling als vandaag ontvangen.",confirmLabel:"Markeer als betaald",cancelLabel:"Annuleren"}))return;const o=pe(r,"Opslaan...");try{await xe(a,{status:"paid",payment_method:"manual",payment_date:new Date().toISOString()}),ve(t,i=>({...i,status:"paid"})),A("Werkbon gemarkeerd als betaald ✓","success"),E()}catch{A("Er ging iets mis","error"),o();return}o()},Rt=t=>{const r=h.find(w=>w.id===t);if(!r||!(M instanceof HTMLElement))return;const a=M.querySelector("[data-werkbon-edit-status]"),s=M.querySelector("[data-werkbon-edit-hours]"),o=M.querySelector("[data-werkbon-edit-rate]");if(!(a instanceof HTMLSelectElement)||!(s instanceof HTMLInputElement)||!(o instanceof HTMLInputElement))return;const i=Fe(a.value),c=Math.max(0,Number(s.value||r.labour.hours)),k=Math.max(0,Number(o.value||r.labour.rate));ve(t,w=>({...w,status:i,labour:{...w.labour,hours:c,rate:k}})),V="",j=t,z=!0,H("Werkbon updated."),E()},Kt=async(t,r)=>{const a=h.find(i=>i.id===t);if(!a||!await Ke({title:"Werkbon verwijderen?",body:"Deze actie kan niet ongedaan worden gemaakt. De werkbon wordt permanent verwijderd.",confirmLabel:"Verwijderen",cancelLabel:"Annuleren",confirmClassName:"danger"}))return;const o=pe(r,"Opslaan...");try{if(!I)throw new Error("Supabase is niet geconfigureerd.");const i=String(a.completedAppointmentId||a.id||"");if(!i)throw new Error("Werkbon ID ontbreekt.");let c=I.from("completed_appointments").delete().eq("id",i);const k=Ce(a);k&&(c=c.eq("garage_id",k));const{error:w}=await c;if(w)throw w}catch{A("Verwijderen mislukt","error"),o();return}await Ot(t),h=h.filter(i=>i.id!==t),L===t&&(L=""),j===t&&(j="",z=!1,V=""),A("Werkbon verwijderd","success"),ie(),E(),o()},zt=async(t,r,a)=>{var s;if(t==="view"){He("werkbonDetail",{selectedWerkbonId:r,editMode:!1}),window.location.href=Be(`werkbon-detail.html?id=${encodeURIComponent(r)}`);return}if(t==="edit"){He("werkbonDetail",{selectedWerkbonId:r,editMode:!0}),window.location.href=Be(`werkbon-detail.html?id=${encodeURIComponent(r)}&edit=true`);return}if(t==="cancel-edit"){V="",z=!1,E();return}if(t==="save-edit"){Rt(r);return}if(t==="pdf-actions"){if(!(a instanceof HTMLButtonElement))return;const o=pe(a,"Laden...");try{await Bt(a,r)}catch{A("Er ging iets mis","error")}o();return}if(t==="payment-actions"){if(!(a instanceof HTMLButtonElement))return;const o=pe(a,"Laden...");try{await Wt(a,r)}catch{A("Er ging iets mis","error")}o();return}if(t==="send-customer"){if(!(a instanceof HTMLButtonElement))return;if(((s=ne==null?void 0:ne.invoice)==null?void 0:s.id)===r&&de instanceof HTMLElement){ie();return}const o=pe(a,"Laden...");try{const i=await Pe(r);Ft(a,i)}catch{A("Er ging iets mis","error")}o();return}if(t==="send-sms"){Ue(r,"SMS");return}if(t==="send-whatsapp"){Ue(r,"WhatsApp");return}if(t==="mark-paid"){await Ye(r,a);return}if(t==="download-pdf"){const o=h.find(c=>c.id===r);if(!o)return;const i=gt(o);H(i?"Print dialog opened for PDF export.":"Allow pop-ups to export this werkbon as PDF.");return}t==="delete"&&await Kt(r,a)},E=()=>{if(!(N instanceof HTMLElement)||!(C instanceof HTMLElement)||!(M instanceof HTMLElement)||!(d instanceof HTMLElement))return;const t=v instanceof HTMLSelectElement?v.value:"all",r=q instanceof HTMLInputElement?q.value.trim().toLowerCase():"",a=[...h].sort((o,i)=>{var c,k;return((c=Me(i.completedAt))==null?void 0:c.getTime())-((k=Me(o.completedAt))==null?void 0:k.getTime())}).filter(o=>{const i=[o.licensePlate,o.customerName,o.carModel].join(" ").toLowerCase(),c=!r||i.includes(r),k=t==="all"||be(o)===t;return c&&k});N.innerHTML=hn(h),C.innerHTML=a.length?a.map(o=>Lt(o,L===o.id)).join(""):En(a,!!(r||t!=="all"));const s=h.find(o=>o.id===j)??null;M.classList.toggle("is-open",z&&!!s),M.innerHTML=z&&s?Sn(s,V===s.id):"",W(),Et()};x==null||x.addEventListener("click",()=>{Q=!0,_=1,W({forceMount:!0,refreshContent:!0})});const Je=async t=>{const r=t.closest("[data-create-action]");if(!(r instanceof HTMLElement))return!1;const a=String(r.dataset.createAction??"");if(a==="attempt-close")return r.classList.contains("werkbon-create-shadow")&&t.closest(".werkbon-create-panel")||await _e(),!0;if(a==="jump-step"){const s=Number(r.dataset.step??_);return _=Math.min(5,Math.max(1,s)),ee=!1,W({refreshContent:!0}),!0}if(a==="prev-step")return _=Math.max(1,_-1),W({refreshContent:!0}),!0;if(a==="next-step")return _===1&&P!=="success"&&(K&&(window.clearTimeout(K),K=0),await Ve({showShortInputError:!0})),_===1&&P!=="success"?(H("Rond eerst de RDW validatie af."),!0):(_=Math.min(5,_+1),W({refreshContent:!0}),!0);if(a==="remove-part"){const s=Number(r.dataset.partIndex??-1);return Number.isFinite(s)&&s>=0&&(m.onderdelen.splice(s,1),W({refreshContent:!0})),!0}if(a==="quick-part")return m.onderdelen.push({naam:String(r.dataset.partName??"Onderdeel"),aantal:1,prijs:T(r.dataset.partPrice,0)}),W({refreshContent:!0}),!0;if(a==="add-manual-part")return m.onderdelen.push({naam:"",aantal:1,prijs:0}),W({refreshContent:!0}),!0;if(a==="open-payment")return ee=!0,W(),!0;if(a==="close-payment")return ee=!1,W(),!0;if(a==="select-payment")return te=String(r.dataset.paymentMethod??""),ee=!1,H(`Betaalmethode gekozen: ${te}.`),W(),!0;if(a==="save-werkbon"){try{await xt()}catch(s){H(s instanceof Error?s.message:"Opslaan mislukt.")}return!0}if(a==="create-pdf"){try{await Pt(),H("PDF gegenereerd.")}catch(s){H(s instanceof Error?s.message:"PDF genereren mislukt.")}return!0}if(a==="email-werkbon"){try{await It(),H("Werkbon e-mail verstuurd.")}catch(s){H(s instanceof Error?s.message:"E-mail verzenden mislukt.")}return!0}return a==="whatsapp-werkbon"?(Nt(),H("WhatsApp bericht geopend."),!0):!1},Qe=t=>{if(!(t instanceof HTMLElement)||!Q)return!1;if(t.matches("[data-create-field='kenteken']")){if(t instanceof HTMLInputElement){const r=me(t.value);t.value=r,m.voertuig={...m.voertuig,kenteken:r},P="idle",Z="",K&&(window.clearTimeout(K),K=0);const a=J(r),s=d.querySelector("#vehicleLookupStatus");s instanceof HTMLElement&&(s.classList.remove("is-success","is-error"),s.textContent=a.length>=6?"Kenteken controleren...":"Typ kenteken om te zoeken"),se(),a.length>=6&&(K=window.setTimeout(()=>{K=0,Ve()},420))}return!0}if(t.matches("[data-create-field='btw']"))return t instanceof HTMLSelectElement&&(m.btw=T(t.value,21),Ae()),!0;if(t.matches("[data-klant-field]")){const r=String(t.getAttribute("data-klant-field")??"");if(!r)return!0;const a=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:"";return m.klant={...m.klant,[r]:a},!0}if(t.matches("[data-arbeid-field]")){const r=String(t.getAttribute("data-arbeid-field")??"");if(!r)return!0;const a={...m.arbeid};return r==="enabled"&&t instanceof HTMLInputElement?(a.enabled=t.checked,m.arbeid=a,Ht(),!0):(t instanceof HTMLInputElement&&(a[r]=T(t.value,r==="tarief"?65:0)),m.arbeid=a,Ae(),!0)}if(t.matches("[data-part-field]")){const r=Number(t.getAttribute("data-part-index")??-1),a=String(t.getAttribute("data-part-field")??"");if(!Number.isFinite(r)||r<0||!a)return!0;const o={...m.onderdelen[r]??{naam:"",aantal:1,prijs:0}};return a==="naam"&&(o.naam=t instanceof HTMLInputElement?t.value:""),a==="aantal"&&(o.aantal=t instanceof HTMLInputElement?T(t.value,1):1),a==="prijs"&&(o.prijs=t instanceof HTMLInputElement?T(t.value,0):0),m.onderdelen[r]=o,Dt(),!0}return!1};d.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;r&&await Je(r)}),d.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&Qe(r)}),d.addEventListener("keydown",t=>{t.key==="Escape"&&Q&&(t.preventDefault(),_e())}),b.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;if(!r||await Je(r))return;const a=r.closest("[data-werkbon-action]");if(a instanceof HTMLElement){const o=String(a.dataset.werkbonAction??""),i=String(a.dataset.werkbonId??"");if(o==="close-modal"){z=!1,V="",E();return}if(o==="toggle"){L=L===i?"":i,E();return}if(o==="close-drawer"){L="",V="",E();return}if(!i)return;await zt(o,i,a);return}const s=r.closest("[data-werkbon-row-id]");if(s instanceof HTMLElement&&!r.closest("button, input, select, textarea, a")){const o=String(s.dataset.werkbonRowId??"");o&&(L=L===o?"":o,E())}});const Ze=window.__werkbonDocumentClickHandler;typeof Ze=="function"&&document.removeEventListener("click",Ze);const Xe=async t=>{const r=t.target instanceof Element?t.target:null;if(!r)return;const a=r.closest("[data-send-option]");if(a instanceof HTMLButtonElement&&ne){t.preventDefault();const s=String(a.dataset.sendOption??""),o=ne;ie();try{s==="email"?await Ie(o):s==="whatsapp"?await he(o):s==="both"&&(await Ie(o),await he(o)),E()}catch{A("Er ging iets mis","error")}return}r.closest("[data-send-dropdown]")||r.closest('[data-werkbon-action="send-customer"]')||ie()};window.__werkbonDocumentClickHandler=Xe,document.addEventListener("click",Xe),b.addEventListener("keydown",t=>{const r=t.target instanceof HTMLElement?t.target:null;if(r){if(t.key==="Escape"&&Q){t.preventDefault(),_e();return}if((t.key==="Enter"||t.key===" ")&&r.matches("[data-werkbon-row-id]")){t.preventDefault();const a=String(r.dataset.werkbonRowId??"");a&&(L=L===a?"":a,E())}if(t.key==="Escape"&&z){z=!1,V="",E();return}t.key==="Escape"&&L&&(L="",E())}}),b.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&Qe(r)}),q==null||q.addEventListener("input",E),v==null||v.addEventListener("change",E),await Tt();try{let t=[];try{t=await Gt({garageIds:u})}catch{}h=t.filter(o=>Oe(o.completion_notes).werkbon_created===!0).map(kt).sort((o,i)=>new Date(i.completedAt??0).getTime()-new Date(o.completedAt??0).getTime());const r=new Set(h.map(o=>o.licensePlate).filter(o=>o&&o!=="UNKNOWN").map(o=>J(o)));for(const o of r)if(o&&!Ee.has(o))try{const i=await mt(o);i&&Ee.set(o,i)}catch(i){console.error(`Failed to fetch vehicle for ${o}:`,i)}h=h.map(o=>{const i=J(o.licensePlate),c=Ee.get(i)||pn(i);return{...o,carModel:c.title+(c.buildYear?` (${c.buildYear})`:"")||o.carModel}});const a=await tn({garageIds:u}),s=nn(a);if(f(s.unread),q instanceof HTMLInputElement&&re&&(q.value=re),v instanceof HTMLSelectElement){const o=Array.from(v.options).some(i=>i.value===ce);v.value=o?ce:"all"}L=fe||(((st=h[0])==null?void 0:st.id)??""),j=ke,V=ge,j&&h.some(o=>o.id===j)&&(z=!0)}catch(t){h=[],f(0),console.error(t)}E(),G&&(Q=!0,_=1,W({forceMount:!0,refreshContent:!0}))}const Cn=document.querySelector("#app");Ut();An(Cn);
