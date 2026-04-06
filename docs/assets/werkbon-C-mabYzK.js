import{e as Jt,f as Xt,p as Xe,c as Zt}from"./theme-shgkqnbR.js";/* empty css                      */import{o as vt,g as en}from"./actionPopup-D9bI13ep.js";import{e as tn,a as nn,c as an,l as rn,d as on,g as sn,s as ln,f as Ue}from"./branding-BLWMl1Cd.js";import{n as pe,f as ht}from"./rdwService-CFrMDQAa.js";import{s as cn}from"./confirmDialog-DSEC2-zx.js";const Ze={draft:{label:"Draft",className:"werkbon-status-draft"},link_sent:{label:"Link verstuurd",className:"werkbon-status-link-sent"},paid:{label:"Paid",className:"werkbon-status-paid"}},qe={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},dn=new Map([["apk","apk"],["apk keuring","apk"],["keuring","apk"],["banden","banden"],["band","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"],["overig","other"],["overige","other"],["other","other"]]),yt=["Voertuig","Klant","Onderdelen","Arbeid","Overzicht"],un=["contant","iDEAL","Mollie"],mn=[{label:"APK keuring",name:"APK keuring",price:45},{label:"Banden",name:"Banden",price:120},{label:"Remblokken voor",name:"Remblokken voor",price:85},{label:"Remblokken achter",name:"Remblokken achter",price:75},{label:"Olie",name:"Olie",price:35},{label:"Filters",name:"Filters",price:28},{label:"Accu",name:"Accu",price:95},{label:"Overige",name:"Overige",price:0}],pn="https://mkgfckxiusdcnqhethdy.supabase.co",bn="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",z=Jt(pn,bn);function St(){return{voertuig:{},klant:{},onderdelen:[],arbeid:{enabled:!1,uren:0,minuten:0,tarief:65},btw:21}}function j(e,n=0){const m=Number(e);return Number.isFinite(m)&&m>=0?m:n}function Ae(e){const n=pe(e).slice(0,6);return n?n.replace(/(.{2})(?=.)/g,"$1-"):""}function He(e,n){const m=String(e??"").trim();if(m)return m;const p=pe(n);return p?Ae(p):"UNKNOWN"}function fn(e){var w,d,T,l,E,b,D;const n=String(((w=e==null?void 0:e.voertuig)==null?void 0:w.kenteken)??"").trim(),m=[(d=e==null?void 0:e.klant)==null?void 0:d.naam,(T=e==null?void 0:e.klant)==null?void 0:T.telefoon,(l=e==null?void 0:e.klant)==null?void 0:l.email,(E=e==null?void 0:e.klant)==null?void 0:E.omschrijving].some(S=>String(S??"").trim()),p=Array.isArray(e==null?void 0:e.onderdelen)&&e.onderdelen.some(S=>String((S==null?void 0:S.naam)??"").trim()||j(S==null?void 0:S.aantal)>0||j(S==null?void 0:S.prijs)>0),k=j((b=e==null?void 0:e.arbeid)==null?void 0:b.uren)*60+j((D=e==null?void 0:e.arbeid)==null?void 0:D.minuten);return!!(n||m||p||k>0)}function he(e){var b,D,S,A;const n=(Array.isArray(e.onderdelen)?e.onderdelen:[]).map(K=>{const X=j(K==null?void 0:K.aantal),N=j(K==null?void 0:K.prijs);return{naam:String((K==null?void 0:K.naam)??"").trim()||"Onderdeel",aantal:X,prijs:N,totaal:ee(X*N)}}),m=ee(n.reduce((K,X)=>K+X.totaal,0)),p=j((b=e.arbeid)==null?void 0:b.uren)+j((D=e.arbeid)==null?void 0:D.minuten)/60,k=j((S=e.arbeid)==null?void 0:S.tarief,65),w=(A=e.arbeid)!=null&&A.enabled?ee(p*k):0,d=ee(m+w),T=j(e.btw)>0?.21:0,l=ee(d*T),E=ee(d+l);return{onderdelenRows:n,onderdelenSubtotaal:m,labourHours:p,labourRate:k,arbeidTotaal:w,subtotaal:d,btwBedrag:l,totaal:E}}function me(e,n){return`<div class="werkbon-create-overview-row"><span>${c(e)}</span><strong>${c(n)}</strong></div>`}function Fe(e,n,m){return`<div class="werkbon-create-overview-row"><span>${c(n)}</span><strong data-create-total="${c(e)}">${c(m)}</strong></div>`}function Mt(e){return yt.map((n,m)=>{const p=m+1,k=p===e?"is-active":p<e?"is-done":"",w=p<e?"is-done":"",d=m<yt.length-1?`<span class="werkbon-create-step-separator ${w}" aria-hidden="true"></span>`:"";return`<button class="werkbon-create-step ${k}" type="button" data-create-action="jump-step" data-step="${p}"><span>${p}.</span>${c(n)}</button>${d}`}).join("")}function Et({step:e,state:n,rdwStatus:m}){var E,b,D,S,A,K,X,N,ne,be,ye,ve,fe,_;const p=he(n),k=String(((E=n.voertuig)==null?void 0:E.title)??"").trim(),w=String(((b=n.voertuig)==null?void 0:b.buildYear)??"").trim(),d=String(((D=n.voertuig)==null?void 0:D.apkExpiryDate)??"").trim(),T=w?`${k||"Voertuig gegevens"} (${w})`:k||"Voertuig gegevens",l=m==="loading"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Kenteken controleren...</p>':m==="success"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-success">Kenteken gevonden</p>':m==="error"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-error">Kenteken niet gevonden</p>':'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Typ kenteken om te zoeken</p>';return e===1?`
      <div class="werkbon-create-body-step">
        <label class="werkbon-create-appointment-field">
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text" inputmode="text" maxlength="8" data-create-field="kenteken" value="${c(String(((S=n.voertuig)==null?void 0:S.kenteken)??""))}" placeholder="eg. 12-ABC-D1" required />
          ${l}
        </label>
        <div class="vehicle-preview-card werkbon-create-vehicle-preview" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${c(T)}</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">${c(w)}</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">${c(d)}</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">${c(String(((A=n.voertuig)==null?void 0:A.color)??""))}</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">${c(String(((K=n.voertuig)==null?void 0:K.fuel)??""))}</strong></span>
          </div>
        </div>
      </div>
    `:e===2?`
      <div class="werkbon-create-body-step">
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input type="text" data-klant-field="naam" value="${c(String(((X=n.klant)==null?void 0:X.naam)??""))}" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" />
          </label>
          <label>
            Phone number
            <input type="tel" data-klant-field="telefoon" value="${c(String(((N=n.klant)==null?void 0:N.telefoon)??""))}" autocomplete="tel" placeholder="eg. 0624987172" />
          </label>
        </div>
        <label class="werkbon-create-appointment-field">
          Email
          <input type="email" data-klant-field="email" value="${c(String(((ne=n.klant)==null?void 0:ne.email)??""))}" autocomplete="email" placeholder="eg. klant@email.com" />
        </label>
        <label class="werkbon-create-appointment-field">
          Omschrijving
          <textarea rows="4" data-klant-field="omschrijving" placeholder="Optioneel">${c(String(((be=n.klant)==null?void 0:be.omschrijving)??""))}</textarea>
        </label>
      </div>
    `:e===3?`
      <div class="werkbon-create-body-step werkbon-create-parts-step">
        <div class="werkbon-create-section-copy">
          <label class="werkbon-create-section-title">Onderdelen</label>
          <p class="werkbon-create-section-subtitle">Voeg onderdelen en materialen toe aan de werkbon</p>
        </div>
        <div class="werkbon-create-quick-parts">
          ${mn.map(C=>`<button class="werkbon-chip-button" type="button" data-create-action="quick-part" data-part-name="${c(C.name)}" data-part-price="${c(String(C.price))}">+ ${c(C.label)}</button>`).join("")}
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
                ${n.onderdelen.map((C,G)=>`
                  <div class="werkbon-create-part-card">
                    <div class="werkbon-part-cell werkbon-part-cell-name">
                      <input type="text" class="werkbon-part-input" data-part-field="naam" data-part-index="${G}" value="${c(String(C.naam??""))}" placeholder="Onderdeel naam" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-price">
                      <div class="werkbon-currency-input">
                        <span class="werkbon-currency-symbol">€</span>
                        <input type="number" class="werkbon-part-input werkbon-part-input-price" min="0" step="0.01" data-part-field="prijs" data-part-index="${G}" value="${c(String(C.prijs??0))}" />
                      </div>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-quantity">
                      <input type="number" class="werkbon-part-input" min="1" step="1" data-part-field="aantal" data-part-index="${G}" value="${c(String(C.aantal??1))}" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-total">
                      <strong data-part-total-index="${G}">${c(h(ee(j(C.aantal,1)*j(C.prijs))))}</strong>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-remove">
                      <button class="werkbon-remove-button" type="button" data-create-action="remove-part" data-part-index="${G}" aria-label="Verwijder onderdeel" title="Verwijder">
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
          <strong data-parts-subtotal-value="true">${c(h(p.onderdelenSubtotaal))}</strong>
        </div>
      </div>
    `:e===4?`
      <div class="werkbon-create-body-step werkbon-create-grid-two">
        <label class="werkbon-create-toggle">
          <input type="checkbox" data-arbeid-field="enabled" ${n.arbeid.enabled?"checked":""} />
          <span>Arbeid inschakelen</span>
        </label>
        <label class="werkbon-create-field"><span>Uren</span><input type="number" min="0" step="1" data-arbeid-field="uren" value="${c(String(n.arbeid.uren))}" ${n.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>Minuten</span><input type="number" min="0" max="59" step="1" data-arbeid-field="minuten" value="${c(String(n.arbeid.minuten))}" ${n.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>Tarief p/u</span><input type="number" min="0" step="0.01" data-arbeid-field="tarief" value="${c(String(n.arbeid.tarief))}" ${n.arbeid.enabled?"":"disabled"} /></label>
        <label class="werkbon-create-field"><span>BTW</span>
          <select data-create-field="btw">
            <option value="21" ${j(n.btw)>0?"selected":""}>21%</option>
            <option value="0" ${j(n.btw)===0?"selected":""}>Geen BTW</option>
          </select>
        </label>
        <div class="werkbon-create-calculation-card">
          ${Fe("arbeid","Arbeid",h(p.arbeidTotaal))}
          ${Fe("subtotaal","Subtotaal",h(p.subtotaal))}
          ${Fe("btw","BTW",h(p.btwBedrag))}
          ${Fe("totaal","Totaal",h(p.totaal))}
        </div>
      </div>
    `:`
    <div class="werkbon-create-body-step werkbon-create-overview">
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Voertuig</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="1">Bewerken</button></div>
        ${me("Kenteken",String(((ye=n.voertuig)==null?void 0:ye.kenteken)??"-"))}
        ${me("Voertuig",k||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Klant</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="2">Bewerken</button></div>
        ${me("Naam",String(((ve=n.klant)==null?void 0:ve.naam)??"-")||"-")}
        ${me("Email",String(((fe=n.klant)==null?void 0:fe.email)??"-")||"-")}
        ${me("Telefoon",String(((_=n.klant)==null?void 0:_.telefoon)??"-")||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Onderdelen / Arbeid</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="3">Bewerken</button></div>
        ${me("Onderdelen",h(p.onderdelenSubtotaal))}
        ${me("Arbeid",h(p.arbeidTotaal))}
        ${me("BTW",h(p.btwBedrag))}
        ${me("Totaal",h(p.totaal))}
      </div>
    </div>
  `}async function Ye(){var e,n;if((e=window.jspdf)!=null&&e.jsPDF)return window.jspdf.jsPDF;if(await new Promise((m,p)=>{const k=document.querySelector('script[data-js-pdf-cdn="true"]');if(k){k.addEventListener("load",()=>m(),{once:!0}),k.addEventListener("error",()=>p(new Error("Kon jsPDF niet laden.")),{once:!0});return}const w=document.createElement("script");w.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",w.async=!0,w.dataset.jsPdfCdn="true",w.onload=()=>m(),w.onerror=()=>p(new Error("Kon jsPDF niet laden.")),document.head.append(w)}),!((n=window.jspdf)!=null&&n.jsPDF))throw new Error("jsPDF is niet beschikbaar.");return window.jspdf.jsPDF}function kn(e=""){return{title:pe(e)||"Voertuig",buildYear:""}}function gn(e){const n=String(e||"").trim();if(!n)return["other"];const m=n.split(n.includes(",")?/,/g:/\+|\/|&| and /gi).map(p=>p.trim()).filter(Boolean);return m.length?m:[n]}function wn(e){return dn.get(String(e||"").trim().toLowerCase())||"other"}function Tt(e){const n=String(e??"").trim();if(!n)return{key:"other",label:qe.other};const m=n.toLowerCase(),p=[{probe:"apk",key:"apk"},{probe:"band",key:"banden"},{probe:"airco",key:"airco"},{probe:"occasion",key:"occasions"},{probe:"brake",key:"brakes"},{probe:"onderhoud",key:"onderhoud"},{probe:"service",key:"onderhoud"},{probe:"overig",key:"other"}],k=wn(n);let w=k;if(k==="other"){const d=p.find(T=>m.includes(T.probe));d&&(w=d.key)}if(w==="other"){if(["other","overig","overige"].includes(m))return{key:w,label:qe.other};const d=n.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:w,label:d||n||qe.other}}return{key:w,label:qe[w]??n}}function vn(e){const n=Array.isArray(e==null?void 0:e.onderdelen)?e.onderdelen:[],m=new Set,p=[];for(const k of n){const w=String((k==null?void 0:k.naam)??"").trim();if(!w)continue;const d=Tt(w),T=`${d.key}:${d.label.toLowerCase()}`;m.has(T)||(m.add(T),p.push(d.label))}return p.length?p:["Onderhoud"]}function hn(e){return gn(e).map(n=>{const{key:m,label:p}=Tt(n);return`<span class="service-chip service-chip-${m}">${c(p)}</span>`}).join("")}function c(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function ee(e){return Math.round(Number(e)*100)/100}function h(e){return`€${ee(e).toFixed(2)}`}function Qe(e){const n=String(e??"").replace(/\D+/g,"");return n?n.startsWith("00")?n.slice(2):n.startsWith("0")?`31${n.slice(1)}`:n:""}function Je(e){const n=Number(e);return(Number.isFinite(n)?n:0).toFixed(2).replace(".",",")}function Ce(e){const n=new Date(e);return Number.isNaN(n.getTime())?null:n}function yn(e){if(!e)return"";const n=Ce(e);if(!n)return"";const m=n.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}),p=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${m} · ${p}`}function xt(e){const n=Ce(e);return n?n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Unknown date"}function Lt(e){return(Ce(e)||new Date).toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"})}function Sn(e){const n=String(e||"").trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(n)?{r:Number.parseInt(n.slice(0,2),16),g:Number.parseInt(n.slice(2,4),16),b:Number.parseInt(n.slice(4,6),16)}:null}function xe(e,n,m=""){if(!e||typeof e!="object")return m;for(const p of n){const k=e[p];if(k!=null&&String(k).trim())return String(k).trim()}return m}function Ln(e,n){return String(e||"").replace(/{{klant_naam}}/g,n.customerName||"klant").replace(/{{garage_naam}}/g,n.garageName||"Uw garage").replace(/{{factuur_nummer}}/g,n.invoiceNumber||"-").replace(/{{totaal_bedrag}}/g,n.amountText||"€0,00").replace(/{{betaaltermijn}}/g,String(n.paymentDays||14)).replace(/{{betaal_link}}/g,n.paymentLink||"").replace(/{{betaal_methode}}/g,n.paymentMethodLabel||"Mollie iDEAL").replace(/{{datum}}/g,n.today||new Date().toLocaleDateString("nl-NL")).replace(/{{kenteken}}/g,we(n.licensePlate||"")).replace(/{{auto_merk}}/g,n.carModel||"Voertuig")}async function $t({jsPDFCtor:e,invoice:n,customerEmail:m="",customerPhone:p="",garageProfile:k,pdfSettings:w,documentType:d="factuur",documentNumber:T=""}){const l=new e({unit:"pt",format:"a4"}),E=l.internal.pageSize.getWidth(),b=40,D=String(d||"factuur").toLowerCase()==="offerte"?"offerte":"factuur",S=D==="offerte",A=($,re,Be)=>(S?(w==null?void 0:w[re])??(w==null?void 0:w[$]):w==null?void 0:w[$])??Be,K=String(A("primary_color","quote_primary_color",S?"#16A34A":"#2563EB")),X=String(A("font","quote_font","helvetica")).toLowerCase(),N=X.includes("times")||X.includes("georgia")?"times":X.includes("courier")?"courier":"helvetica",ne=String(A("header_style","quote_header_style","professional")),be=A("show_btw","quote_show_btw",!0)!==!1,ye=A("show_iban","quote_show_iban",!S)!==!1,ve=A("show_kvk","quote_show_kvk",!0)!==!1,fe=A("show_customer","quote_show_customer",!0)!==!1,_=A("show_vehicle","quote_show_vehicle",!0)!==!1,C=String(A("payment_instruction_text","payment_instruction_text","Betaalinstructie: Gelieve binnen 14 dagen over te maken onder vermelding van het factuurnummer.")),G=String(A("footer_text","quote_footer_text","")),te=String(A("quote_layout","quote_layout","proposal")),H=Sn(K)||{r:37,g:99,b:235},oe=D==="offerte"?"OFFERTE":"FACTUUR",B=D==="offerte"?"Offertenummer":"Factuurnummer",se=String(T||n.invoiceNumber||n.id||"-").trim()||"-",le=xe(k,["name","garage_name"],"Garage"),ke=xe(k,["address","adres"],"Adres onbekend"),W=xe(k,["btw_nummer","btw","vat_number"],"Onbekend"),ie=xe(k,["kvk_nummer","kvk","chamber_of_commerce"],"Onbekend"),Z=xe(k,["iban"],"Onbekend"),Se=80+(be?14:0)+(ve?14:0),f=Math.max(128,Se+16);l.setFillColor(H.r,H.g,H.b),ne==="modern"?(l.rect(0,0,E,f,"F"),l.setTextColor(255,255,255)):l.rect(0,0,E,4,"F"),ne==="boxed"&&(l.setDrawColor(H.r,H.g,H.b),l.rect(b-10,28,E-b*2+20,f-12)),ne==="split"&&(l.setDrawColor(H.r,H.g,H.b),l.line(E/2+10,40,E/2+10,f-10)),l.setFont(N,"bold"),l.setFontSize(18),l.text(oe,b,48),l.setFont(N,"normal"),l.setFontSize(10);let ae=66;l.text(le,b,ae),ae+=14,l.text(ke,b,ae),ae+=14,be&&l.text(`BTW nummer: ${W}`,b,ae),ae+=14,ve&&l.text(`KVK nummer: ${ie}`,b,ae);const ce=E-b-180;if(l.text(`${B}: ${se}`,ce,94),l.text(`${S?"Offertedatum":"Factuurdatum"}: ${Lt(n.completedAt)}`,ce,108),S){const $=new Date(n.completedAt||Date.now());$.setDate($.getDate()+14),l.text(`Geldig tot: ${Lt($)}`,ce,122)}ne==="modern"&&l.setTextColor(0,0,0);let g=Math.max(ae+20,128);l.setDrawColor(224,228,236),l.line(b,g,E-b,g),g+=18;const I=g;let Le=I,$e=I;if(fe){let $=I;l.setFont(N,"bold"),l.text("Klant",b,$),l.setFont(N,"normal"),$+=14,l.text(n.customerName||"-",b,$),S&&te==="compact"||($+=14,l.text(`E-mail: ${m||"-"}`,b,$),$+=14,l.text(`Telefoon: ${p||"-"}`,b,$)),Le=$}if(_){const $=fe?E/2+20:b;let re=I;l.setFont(N,"bold"),l.text("Voertuig",$,re),l.setFont(N,"normal"),re+=14,l.text(n.carModel||"-",$,re),re+=14,l.text(`Kenteken: ${we(n.licensePlate)}`,$,re),$e=re}g=Math.max(Le,$e)+24,(fe||_)&&(l.setDrawColor(224,228,236),l.line(b,g,E-b,g)),g+=20,l.setFont(N,"bold"),l.text("Onderdelen",b,g),g+=16;const Ne=b,O=b+280,P=b+350,ge=b+440;l.setFontSize(9),l.text("Product",Ne,g),l.text("Aantal",O,g),l.text("Prijs",P,g),l.text("Totaal",ge,g),g+=10,l.line(b,g,E-b,g),l.setFont(N,"normal"),l.setFontSize(10);for(const $ of n.parts)g+=16,g>700&&(l.addPage(),g=60),l.text($.name||"-",Ne,g),l.text(String($.quantity),O,g),l.text(h($.price),P,g),l.text(h($.total),ge,g);g+=22,l.setFont(N,"bold"),l.text("Arbeid",b,g),l.setFont(N,"normal"),g+=16,l.text(`${String(n.labour.hours||0)} x ${h(n.labour.rate||0)}/h`,b,g),l.text(h(n.labour.total||0),ge,g),g+=18,l.line(b,g,E-b,g),g+=20;const Me=E-b-200;if(l.text("Subtotaal",Me,g),l.text(h(n.summary.subtotal),ge,g),g+=16,l.text("BTW 21%",Me,g),l.text(h(n.summary.vat),ge,g),g+=18,l.setFont(N,"bold"),l.setFontSize(12),l.text("Totaal",Me,g),l.text(h(n.summary.total),ge,g),S&&(g+=12),g+=36,l.setFont(N,"normal"),l.setFontSize(10),ye&&D!=="offerte"&&(l.text(`IBAN: ${Z}`,b,g),g+=14),!S){const $=String(C||"").trim();$&&l.text($,b,g,{maxWidth:E-b*2})}if(G){const $=l.internal.pageSize.getHeight();l.setTextColor(120,120,120),l.setFontSize(9),l.text(G,b,$-24,{maxWidth:E-b*2}),l.setTextColor(0,0,0)}return l.output("blob")}function we(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function et(e){const n=String(e??"draft").trim().toLowerCase();return["paid","betaald"].includes(n)?"paid":["link_sent","link-sent","link sent","linkverstuurd","link_verstuurd","link verstuurd","sent","send","verzonden"].includes(n)?"link_sent":(["draft","pending","openstaand"].includes(n),"draft")}function Pe({status:e,paymentLink:n,paymentLinkSentAt:m,paidAt:p,paymentStatus:k}={}){const w=et(e);if(w==="paid")return"paid";const d=String(k??"").trim().toLowerCase(),T=!!String(p??"").trim();if(d==="paid"||T)return"paid";const l=!!(String(n??"").trim()||String(m??"").trim());return w==="link_sent"||l?"link_sent":"draft"}function tt(e){if(!e)return{};if(typeof e=="object")return e;try{return JSON.parse(String(e))}catch{return{}}}function $n(e){return String(e??"").split(",").map(n=>n.trim()).filter(Boolean)}function At(e){var l,E;const n=(e.parts??[]).map(b=>{const D=Number(b.quantity??0),S=Number(b.price??0);return{name:String(b.name??"Item"),quantity:D,price:S,total:ee(D*S)}}),m=Number(((l=e.labour)==null?void 0:l.hours)??0),p=Number(((E=e.labour)==null?void 0:E.rate)??0),k=ee(m*p),w=ee(n.reduce((b,D)=>b+D.total,0)+k),d=ee(w*.21),T=ee(w+d);return{id:String(e.id??""),completedAppointmentId:String(e.completedAppointmentId??""),bookingId:String(e.bookingId??""),garageId:String(e.garageId??""),licensePlate:String(e.licensePlate??"UNKNOWN"),customerName:He(e.customerName,e.licensePlate),carModel:String(e.carModel??"Unknown vehicle"),serviceTypes:Array.isArray(e.serviceTypes)?e.serviceTypes.map(String):["Other"],completedAt:e.completedAt,status:Pe({status:e.status,paymentLink:e.paymentLink,paymentLinkSentAt:e.paymentLinkSentAt,paidAt:e.paidAt,paymentStatus:e.paymentStatus}),parts:n,labour:{hours:m,rate:p,total:k},summary:{subtotal:w,vat:d,total:T},paymentLink:String(e.paymentLink??""),paymentLinkSentAt:String(e.paymentLinkSentAt??""),paymentMethod:String(e.paymentMethod??""),paidAt:String(e.paidAt??"")}}function _t(e){const n=tt(e.completion_notes),m=Array.isArray(n.service_types)?n.service_types.map(String):$n(e.service),p=n.labour&&typeof n.labour=="object"?n.labour:{},k=Array.isArray(n.parts)?n.parts:[{name:"Service",quantity:1,price:0}],w=Pe({status:n.status,paymentLink:n.payment_link,paymentLinkSentAt:n.payment_link_sent_at,paidAt:n.paid_at??n.paidAt,paymentStatus:n.payment_status}),d=String(e.license_plate??"");return At({id:String(e.id??""),completedAppointmentId:String(e.id??""),bookingId:String(e.booking_id??""),garageId:String(e.garage_id??""),licensePlate:d,customerName:He(n.customer_name??n.customerName,d),carModel:String(n.car_model||n.carModel||"Voertuig"),serviceTypes:m.length?m:["Service"],completedAt:String(e.completed_at??e.created_at??new Date().toISOString()),status:w,werkbonCreated:n.werkbon_created===!0,parts:k,labour:{hours:Number(p.hours??0),rate:Number(p.rate??0)},paymentLink:String(n.payment_link??""),paymentLinkSentAt:String(n.payment_link_sent_at??""),paymentMethod:String(n.payment_method??""),paidAt:String(n.paid_at??n.paidAt??"")})}function _n(){const e=Xe("werkbon-detail.html");if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const n=document.createElement("link");n.rel="prefetch",n.as="document",n.href=e,document.head.append(n)}function Ct(e,n=""){const m=Pe({status:e,paymentLink:n}),p=Ze[m]??Ze.draft;return`<span class="status-chip ${p.className}">${p.label}</span>`}function Mn(e){const n=e.filter(d=>d.status!=="paid").reduce((d,T)=>d+T.summary.total,0),m=e.filter(d=>d.status==="link_sent").length,p=e.filter(d=>d.status==="draft").length,k=e.filter(d=>d.status==="paid").reduce((d,T)=>d+T.summary.total,0);return[{label:"Outstanding revenue",value:h(n),note:`${e.filter(d=>d.status!=="paid").length} open werkbon`},{label:"Ready to send",value:String(p),note:"Draft invoices waiting for customer delivery"},{label:"In payment flow",value:String(m),note:"Werkbonnen met verstuurde link"},{label:"Paid total",value:h(k),note:"Completed payments"}].map(d=>`
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${c(d.label)}</p>
          <strong class="werkbon-summary-value">${c(d.value)}</strong>
          <span class="metric-note">${c(d.note)}</span>
        </article>
      `).join("")}function En(e){return`
    <div class="request-divider"></div>
    <div class="request-expanded werkbon-expanded">
      <div class="request-actions werkbon-bottom-actions">
        <button class="button subtle" type="button" data-werkbon-action="view" data-werkbon-id="${c(e.id)}">View Werkbon</button>
        <button class="button subtle" type="button" data-werkbon-action="edit" data-werkbon-id="${c(e.id)}">Edit</button>
        <button class="button subtle werkbon-pdf-button" type="button" data-werkbon-action="pdf-actions" data-werkbon-id="${c(e.id)}">📄 PDF ▾</button>
        <button class="button werkbon-betalen-button" type="button" data-werkbon-action="payment-actions" data-werkbon-id="${c(e.id)}">💳 Betalen ▾</button>
        <button class="button danger" type="button" data-werkbon-action="delete" data-werkbon-id="${c(e.id)}">Delete</button>
      </div>
    </div>
  `}function Tn(e,n){if(!e)return"";const m=e.status==="paid"?"":`<button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${c(e.id)}">Mark as Paid</button>`;return`
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${c(we(e.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${c(e.customerName)} · ${c(xt(e.completedAt))}</p>
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
              <strong>${c(e.customerName)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Vehicle</span>
              <strong>${c(e.carModel)}</strong>
            </div>
            <div>
              <span class="werkbon-detail-label">Status</span>
              ${Ct(e.status,e.paymentLink)}
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
                      <input data-werkbon-edit-hours type="number" min="0" step="0.1" value="${c(String(e.labour.hours))}" />
                    </label>
                    <label>
                      <span>Price per hour</span>
                      <input data-werkbon-edit-rate type="number" min="0" step="0.01" value="${c(String(e.labour.rate))}" />
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
                ${Nn(e)}
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
                  <strong>${c(String(e.labour.hours))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Price per hour</span>
                  <strong>${c(h(e.labour.rate))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Total</span>
                  <strong>${c(h(e.labour.total))}</strong>
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
              <div><span>Subtotal</span><strong>${c(h(e.summary.subtotal))}</strong></div>
              <div><span>VAT (21%)</span><strong>${c(h(e.summary.vat))}</strong></div>
              <div class="werkbon-summary-total"><span>Total price</span><strong>${c(h(e.summary.total))}</strong></div>
            </div>
          </section>
        </div>

        <div class="request-actions werkbon-bottom-actions werkbon-modal-actions">
          ${n?`
                <button class="button subtle" type="button" data-werkbon-action="cancel-edit" data-werkbon-id="${c(e.id)}">Cancel</button>
                <button class="button" type="button" data-werkbon-action="save-edit" data-werkbon-id="${c(e.id)}">Save Changes</button>
              `:`
                <button class="button subtle" type="button" data-werkbon-action="download-pdf" data-werkbon-id="${c(e.id)}">Download PDF</button>
                <button class="button subtle" type="button" data-werkbon-action="send-sms" data-werkbon-id="${c(e.id)}">Send via SMS</button>
                <button class="button subtle" type="button" data-werkbon-action="send-whatsapp" data-werkbon-id="${c(e.id)}">Send via WhatsApp</button>
                ${m}
              `}
        </div>
      </aside>
    </div>
  `}function Pt(e,n){return`
    <article class="request-card werkbon-card ${n?"is-expanded":""}" data-werkbon-row-id="${c(e.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          <span class="plate-chip">${c(we(e.licensePlate))}</span>
          <div class="request-info">
            <p class="request-name">${c(e.customerName)}</p>
            <p class="request-vehicle">${c(e.carModel)}</p>
            <div class="request-services">${hn(Array.isArray(e.serviceTypes)?e.serviceTypes.join(", "):e.serviceTypes)}</div>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${c(h(e.summary.total))}</strong>
          ${Ct(e.status,e.paymentLink)}
          ${e.status==="paid"&&e.paidAt?`<span class="werkbon-paid-at">${c(yn(e.paidAt))}</span>`:""}
          </div>
          <button
            class="request-toggle ${n?"is-expanded":""}"
            type="button"
            data-werkbon-action="toggle"
            data-werkbon-id="${c(e.id)}"
            aria-expanded="${n?"true":"false"}"
            aria-label="${n?"Collapse werkbon actions":"Expand werkbon actions"}"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>

      ${n?En(e):""}
    </article>
  `}function Nt(e){return`
    <div class="werkbon-payment-overlay" role="presentation">
      <div class="werkbon-payment-dialog" role="dialog" aria-modal="true" aria-labelledby="werkbonPaymentTitle">
        <h3 id="werkbonPaymentTitle">Kies betaalmethode</h3>
        <div class="werkbon-payment-grid">
          ${un.map(n=>`
            <button
              class="button subtle werkbon-payment-method ${e===n?"is-active":""}"
              type="button"
              data-create-action="select-payment"
              data-payment-method="${c(n)}"
            >${c(n)}</button>
          `).join("")}
        </div>
        <div class="werkbon-payment-actions">
          <button class="button subtle" type="button" data-create-action="close-payment">Sluiten</button>
        </div>
      </div>
    </div>
  `}function xn({isOpen:e,step:n,state:m,rdwStatus:p,rdwError:k,selectedPaymentMethod:w,isSaving:d,paymentModalOpen:T}){if(!e)return"";const E=n===1&&!(p==="success");return`
    <div class="werkbon-create-modal ${e?"is-open":""}" role="presentation">
      <div class="werkbon-create-shadow" data-create-action="attempt-close" aria-hidden="true">
        <section class="werkbon-create-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonCreateTitle">
          <header class="werkbon-create-header">
            <div>
              
              <h2 id="werkbonCreateTitle">Werkbon Maken</h2>
            </div>
            <button class="icon-button" type="button" data-create-action="attempt-close" aria-label="Sluiten">&times;</button>
          </header>

          <nav class="werkbon-create-stepper" aria-label="Werkbon stappen">${Mt(n)}</nav>

          <div class="werkbon-create-content">${Et({step:n,state:m,rdwStatus:p})}</div>

          <footer class="werkbon-create-actions">
            <div class="werkbon-create-actions-left">
              <button class="button subtle" type="button" data-create-action="prev-step" ${n===1?"disabled":""}>Vorige</button>
            </div>
            <div class="werkbon-create-actions-right">
              ${n<5?`<button class="button subtle" type="button" data-create-action="next-step" ${E?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${d?"disabled":""}>${d?"Opslaan...":"Opslaan"}</button>`}
            </div>
          </footer>

          <div data-create-saving-host="true">${d?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':""}</div>
        </section>

        <div data-create-payment-host="true">${T?Nt(w):""}</div>
      </div>
    </div>
  `}function An({step:e,rdwStatus:n,isSaving:m}){const p=e===1&&n!=="success";return{left:`<button class="button subtle" type="button" data-create-action="prev-step" ${e===1?"disabled":""}>Vorige</button>`,right:e<5?`<button class="button subtle" type="button" data-create-action="next-step" ${p?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${m?"disabled":""}>${m?"Opslaan...":"Opslaan"}</button>`}}function Cn(e){return`
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${c(e)}</p>
      </div>
    </div>
  `}function Pn(e,n){return e.length?e.map(Pt).join(""):Cn(n?"No invoices match the current filters.":"Completed appointments will appear here once a werkbon is created.")}function Nn(e){return e.parts.map(n=>`
        <div class="werkbon-line-item">
          <span>${c(n.name)}</span>
          <span>${c(String(n.quantity))}</span>
          <span>${c(h(n.price))}</span>
          <strong>${c(h(n.total))}</strong>
        </div>
      `).join("")}function Dn(e){return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Werkbon ${c(we(e.licensePlate))}</title>
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
          <p><strong>License plate:</strong> ${c(we(e.licensePlate))}</p>
          <p><strong>Customer:</strong> ${c(e.customerName)}</p>
          <p><strong>Date:</strong> ${c(xt(e.completedAt))}</p>
          <p><strong>Status:</strong> ${c(Ze[e.status].label)}</p>
        </div>
        <div class="section">
          <h2>Parts</h2>
          <div class="row"><strong>Product</strong><strong>Qty</strong><strong>Price</strong><strong>Total</strong></div>
          ${e.parts.map(n=>`<div class="row"><span>${c(n.name)}</span><span>${c(String(n.quantity))}</span><span>${c(h(n.price))}</span><span>${c(h(n.total))}</span></div>`).join("")}
        </div>
        <div class="section">
          <h2>Labour</h2>
          <p>${c(String(e.labour.hours))}h × ${c(h(e.labour.rate))} = ${c(h(e.labour.total))}</p>
        </div>
        <div class="summary">
          <div><span>Subtotal</span><span>${c(h(e.summary.subtotal))}</span></div>
          <div><span>VAT (21%)</span><span>${c(h(e.summary.vat))}</span></div>
          <div><span>Total</span><strong>${c(h(e.summary.total))}</strong></div>
        </div>
      </body>
    </html>
  `}function In(e){const n=window.open("","_blank","width=960,height=720,noopener,noreferrer");return n?(n.document.open(),n.document.write(Dn(e)),n.document.close(),n.focus(),window.setTimeout(()=>{n.print()},180),!0):!1}async function qn(e){var ut,mt,pt,bt,ft,kt,gt,wt;if(!e)return;document.body.style.overflow="";const n=await tn();if(!n)return;if(!n.isAdmin&&!n.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}nn(n.activeGarage);const m=n.isAdmin?null:[(ut=n.activeGarage)==null?void 0:ut.id].filter(Boolean),{shell:p,contentArea:k,setUnreadEmailCount:w}=an({activePage:"werkbon",title:"Werkbon & Payments",headerNote:"Manage invoices and payment status",userEmail:n.user.email,onLogout:rn,garage:n.activeGarage,isAdmin:n.isAdmin}),d=document.createElement("div");d.id="werkbonCreateModalHost",e.replaceChildren(p,d),_n(),k.innerHTML=`
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
  `;const T=k.querySelector("#werkbonNotice"),l=k.querySelector("#werkbonSummary"),E=k.querySelector("#werkbonList"),b=k.querySelector("#werkbonDrawer"),D=k.querySelector("#werkbonCreateTrigger"),S=k.querySelector("#werkbonStatusFilter"),A=k.querySelector("#werkbonSearch"),K=new URLSearchParams(window.location.search),X=String(K.get("action")??"").toLowerCase()==="create",N=on("werkbon",{}),ne=String(N.searchTerm??"").trim(),be=String(N.statusFilter??"all").trim()||"all",ye=String(N.expandedInvoiceId??"").trim(),ve=String(N.selectedInvoiceId??"").trim(),fe=String(N.editingInvoiceId??"").trim();let _=[],C=((mt=_[0])==null?void 0:mt.id)??"",G="",te=!1,H="",oe=!1,B=1,se=!1,le="",ke=!1,W="idle",ie="",Z=0,Se=0,f=St(),ae=0,ce=null,g=null,I={...n.activeGarage,mollieMethod:String(((pt=n.activeGarage)==null?void 0:pt.mollieMethod)??"none"),mollieApiKey:((bt=n.activeGarage)==null?void 0:bt.mollieApiKey)??null,paymentDays:parseInt(String(((ft=n.activeGarage)==null?void 0:ft.paymentDays)??"14"),10)||14,garageName:String(((kt=n.activeGarage)==null?void 0:kt.garageName)||((gt=n.activeGarage)==null?void 0:gt.name)||"Garage")};const Le=new Map;let $e={};const Ne=()=>{Ue("werkbon",{searchTerm:A instanceof HTMLInputElement?A.value.trim():"",statusFilter:S instanceof HTMLSelectElement?S.value:"all",expandedInvoiceId:C,selectedInvoiceId:G,editingInvoiceId:H})},O=t=>{T instanceof HTMLElement&&(T.textContent=t,T.hidden=!t,window.clearTimeout(ae),t&&(ae=window.setTimeout(()=>{T.hidden=!0,T.textContent=""},2600)))},P=(t,r="success")=>{if(r==="error"){O(String(t||"Er ging iets mis"));return}O(String(t||"Actie uitgevoerd."))},ge=async()=>{var r;const t=(r=n.activeGarage)==null?void 0:r.id;if(!(!z||!t))try{const{data:a,error:o}=await z.from("garages").select("*").eq("id",t).maybeSingle();if(o||!a)return;I={...I,...a,paymentLink:a.payment_link??I.paymentLink??null,mollieMethod:String(a.mollie_method??I.mollieMethod??"none"),mollieApiKey:a.mollie_api_key??I.mollieApiKey??null,paymentDays:parseInt(String(a.payment_days??I.paymentDays??14),10)||14,garageName:String(a.garage_name||a.name||I.garageName||"Garage")}}catch{}},Me=async()=>{var r;const t=(r=n.activeGarage)==null?void 0:r.id;if(!(!z||!t))try{const{data:a}=await z.from("garage_pdf_settings").select("*").eq("garage_id",t).maybeSingle();a&&($e=a)}catch{}},$=()=>{ce instanceof HTMLElement&&ce.remove(),ce=null,g=null},re=({title:t,body:r,confirmLabel:a,cancelLabel:o,confirmClassName:i=""})=>new Promise(s=>{const u=document.createElement("div");u.innerHTML=`
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title" id="confirm-title">${c(t)}</h2>
            <p id="confirm-desc">${c(r)}</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button subtle" type="button" data-confirm-action="cancel">${c(o)}</button>
            <button class="button ${c(i)}" type="button" data-confirm-action="continue">${c(a)}</button>
          </div>
        </div>
      </div>
    `,document.body.append(u);const v=u.querySelector(".confirm-dialog-overlay"),y=u.querySelector('[data-confirm-action="continue"]');y instanceof HTMLButtonElement&&window.setTimeout(()=>y.focus(),50);const L=M=>{u.remove(),s(M)};v instanceof HTMLElement&&v.addEventListener("click",M=>{M.target===v&&L(!1)}),u.addEventListener("click",M=>{const U=M.target instanceof HTMLElement?M.target:null,J=U==null?void 0:U.closest("[data-confirm-action]");J instanceof HTMLElement&&L(J.dataset.confirmAction==="continue")}),u.addEventListener("keydown",M=>{M.key==="Escape"&&L(!1)})}),Be=()=>{Z&&(window.clearTimeout(Z),Z=0),Se+=1,B=1,se=!1,le="",ke=!1,W="idle",ie="",f=St()},Y=({forceMount:t=!1,refreshContent:r=!1}={})=>{if(!(d instanceof HTMLElement))return;if(!oe){d.innerHTML&&(d.innerHTML=""),document.body.style.overflow="";return}if(!((t?null:d.querySelector(".werkbon-create-modal"))instanceof HTMLElement)){d.innerHTML=xn({isOpen:oe,step:B,state:f,rdwStatus:W,rdwError:ie,selectedPaymentMethod:le,isSaving:ke,paymentModalOpen:se}),document.body.style.overflow="hidden";return}const o=d.querySelector(".werkbon-create-stepper");if(o instanceof HTMLElement&&(o.innerHTML=Mt(B)),r){const L=d.querySelector(".werkbon-create-content");L instanceof HTMLElement&&(L.innerHTML=Et({step:B,state:f,rdwStatus:W}))}const i=d.querySelector('[data-create-action="prev-step"]');i instanceof HTMLButtonElement&&(i.disabled=B===1);const s=d.querySelector(".werkbon-create-actions-left"),u=d.querySelector(".werkbon-create-actions-right");if(s instanceof HTMLElement&&u instanceof HTMLElement){const L=An({step:B,rdwStatus:W,isSaving:ke});s.innerHTML=L.left,u.innerHTML=L.right}const v=d.querySelector('[data-create-saving-host="true"]');v instanceof HTMLElement&&(v.innerHTML=ke?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':"");const y=d.querySelector('[data-create-payment-host="true"]');y instanceof HTMLElement&&(y.innerHTML=se?Nt(le):""),document.body.style.overflow="hidden"},je=({rerenderPage:t=!1}={})=>{if(oe=!1,$(),Be(),t){q();return}Y()},We=async()=>{if(!fn(f)){je();return}await cn("Er staan niet-opgeslagen gegevens in deze werkbon. Weet je zeker dat je wilt sluiten?","Werkbon sluiten")&&je()},Dt=async t=>{if(!z||!t){const L=Math.max(1,Date.now()%1e5);return{invoiceNumber:`F-${String(L).padStart(6,"0")}`,nextCounter:L}}const{data:r,error:a}=await z.from("garages").select("invoice_prefix, invoice_counter, invoice_sequence").eq("id",t).maybeSingle();if(a)throw a;const o=String((r==null?void 0:r.invoice_prefix)??"F-"),i=Number((r==null?void 0:r.invoice_counter)??(r==null?void 0:r.invoice_sequence)??1),s=Number.isFinite(i)&&i>0?i:1,u=s+1,v=`${o}${String(s).padStart(3,"0")}`,{error:y}=await z.from("garages").update({invoice_counter:u,invoice_sequence:u}).eq("id",t);if(y)throw y;return{invoiceNumber:v,nextCounter:u}},It=async()=>{var J,de,x,R,Q,V,F;const t=(J=n.activeGarage)==null?void 0:J.id;if(!t)throw new Error("Geen garage gevonden voor deze gebruiker.");const r=pe(((de=f.voertuig)==null?void 0:de.kenteken)??"");if(r.length<6)throw new Error("Voer eerst een geldig kenteken in.");if(W!=="success")throw new Error("Haal eerst RDW voertuiggegevens op.");const a=he(f),o=await Dt(t),s=`wb-${String(Date.now()).slice(-4)}`,u=String(o.invoiceNumber||"").trim()||`F-${String(Date.now()%1e5).padStart(6,"0")}`,v=new Date().toISOString(),y=He((x=f.klant)==null?void 0:x.naam,r),L=String(((R=f.voertuig)==null?void 0:R.title)??"").trim()||"Voertuig",M=vn(f),U={werkbon_id:s,status:"draft",werkbon_created:!0,customer_name:y,customer_email:String(((Q=f.klant)==null?void 0:Q.email)??"").trim(),customer_phone:String(((V=f.klant)==null?void 0:V.telefoon)??"").trim(),car_model:L,service_types:M,km_stand:0,vat_enabled:j(f.btw)>0,description:String(((F=f.klant)==null?void 0:F.omschrijving)??"").trim(),internal_note:"",invoice_number:u,paid_at:le?new Date().toISOString().slice(0,10):null,completed_at:v,parts:a.onderdelenRows.map(ue=>({name:ue.naam,quantity:ue.aantal,price:ue.prijs})),labour:{hours:a.labourHours,rate:a.labourRate},totals:{subtotal:a.subtotaal,vat:a.btwBedrag,total:a.totaal},payment_method:le};return{garageId:t,kenteken:r,completedAt:v,completionNotes:U,serviceSummary:M.join(", "),werkbonId:s,invoiceNumber:u}},qt=async()=>{if(!z)throw new Error("Supabase is niet geconfigureerd.");ke=!0,Y();try{const t=await It(),{data:r,error:a}=await z.from("completed_appointments").insert({garage_id:t.garageId,booking_id:null,completed_at:t.completedAt,appointment_date:t.completedAt.slice(0,10),appointment_time:t.completedAt.slice(11,19),license_plate:t.kenteken,service:t.serviceSummary||"Onderhoud",completion_notes:JSON.stringify(t.completionNotes)}).select("id, booking_id, garage_id, completed_at, created_at, license_plate, service, completion_notes").single();if(a)throw a;const o=_t(r);_=[o,..._],C=o.id,O(`Werkbon ${t.werkbonId} opgeslagen als ${t.invoiceNumber}.`),je()}finally{ke=!1,q()}},Ft=async()=>{var v,y,L;const t=await Ye(),r=he(f),a=new t({unit:"pt",format:"a4"}),o=String(((v=f.voertuig)==null?void 0:v.kenteken)??"-"),i=He((y=f.klant)==null?void 0:y.naam,o),s=String(((L=f.klant)==null?void 0:L.omschrijving)??"").trim();let u=56;a.setFont("helvetica","bold"),a.setFontSize(18),a.text("Werkbon / Factuur",42,u),u+=26,a.setFont("helvetica","normal"),a.setFontSize(11),a.text(`Datum: ${new Date().toLocaleDateString("nl-NL")}`,42,u),u+=16,a.text(`Kenteken: ${o}`,42,u),u+=16,a.text(`Klant: ${i}`,42,u),u+=16,s&&(a.text(`Omschrijving: ${s}`,42,u,{maxWidth:520}),u+=22),a.setFont("helvetica","bold"),a.text("Onderdelen",42,u),u+=16,a.setFont("helvetica","normal"),r.onderdelenRows.forEach(M=>{a.text(`${M.naam}  x${M.aantal}  ${h(M.prijs)}  ${h(M.totaal)}`,42,u),u+=14}),u+=12,a.text(`Arbeid: ${h(r.arbeidTotaal)}`,42,u),u+=14,a.text(`Subtotaal: ${h(r.subtotaal)}`,42,u),u+=14,a.text(`BTW: ${h(r.btwBedrag)}`,42,u),u+=14,a.setFont("helvetica","bold"),a.text(`Totaal: ${h(r.totaal)}`,42,u),a.save(`werkbon-${pe(o)||"nieuw"}.pdf`)},Ht=async()=>{var o,i,s;if(!z)throw new Error("Supabase is niet geconfigureerd.");const t=String(((o=f.klant)==null?void 0:o.email)??"").trim();if(!t)throw new Error("Geen e-mailadres beschikbaar.");const r=he(f),{error:a}=await z.functions.invoke("send-werkbon-email",{body:{to:t,template:"werkbon_factuur_nl",subject:`Werkbon ${Ae(((i=f.voertuig)==null?void 0:i.kenteken)??"")}`,customerName:String(((s=f.klant)==null?void 0:s.naam)??"Klant"),total:r.totaal}});if(a)throw a},Bt=()=>{var o,i,s;const t=String(((o=f.klant)==null?void 0:o.telefoon)??"").replace(/[^0-9]/g,""),r=he(f),a=`Hallo ${String(((i=f.klant)==null?void 0:i.naam)??"")}, uw werkbon (${Ae(((s=f.voertuig)==null?void 0:s.kenteken)??"")}) staat klaar. Totaal: ${h(r.totaal)}.`;window.open(`https://wa.me/${encodeURIComponent(t)}?text=${encodeURIComponent(a)}`,"_blank","noopener,noreferrer")},Ee=()=>{const t=d.querySelector("#vehicleLookupStatus");if(t instanceof HTMLElement){if(t.classList.remove("is-success","is-error"),W==="loading"){t.textContent="Kenteken controleren...";return}if(W==="success"){t.textContent="Kenteken gevonden",t.classList.add("is-success");return}if(W==="error"){t.textContent="Kenteken niet gevonden",t.classList.add("is-error");return}t.textContent="Typ kenteken om te zoeken"}},_e=()=>{const t=d.querySelector('[data-create-action="next-step"]');if(t instanceof HTMLButtonElement){if(B===1){t.disabled=W!=="success";return}t.disabled=B===5}},nt=()=>{var y,L,M,U,J;const t=d.querySelector("#vehiclePreviewTitle"),r=d.querySelector("#vehiclePreviewBuildYear"),a=d.querySelector("#vehiclePreviewApk"),o=d.querySelector("#vehiclePreviewColor"),i=d.querySelector("#vehiclePreviewFuel");if(!(t instanceof HTMLElement)||!(r instanceof HTMLElement)||!(a instanceof HTMLElement)||!(o instanceof HTMLElement)||!(i instanceof HTMLElement))return;const s=String(((y=f.voertuig)==null?void 0:y.title)??"").trim(),u=String(((L=f.voertuig)==null?void 0:L.buildYear)??"").trim(),v=u?`${s||"Voertuig gegevens"} (${u})`:s||"Voertuig gegevens";t.textContent=v,r.textContent=u,a.textContent=String(((M=f.voertuig)==null?void 0:M.apkExpiryDate)??"").trim(),o.textContent=String(((U=f.voertuig)==null?void 0:U.color)??"").trim(),i.textContent=String(((J=f.voertuig)==null?void 0:J.fuel)??"").trim()},jt=()=>{const t=he(f),r=d.querySelector("[data-parts-subtotal-value]");r instanceof HTMLElement&&(r.textContent=h(t.onderdelenSubtotaal)),d.querySelectorAll("[data-part-total-index]").forEach(o=>{if(!(o instanceof HTMLElement))return;const i=Number(o.getAttribute("data-part-total-index")??-1),s=t.onderdelenRows[i];s&&(o.textContent=h(s.totaal))})},Oe=()=>{const t=he(f),r={arbeid:h(t.arbeidTotaal),subtotaal:h(t.subtotaal),btw:h(t.btwBedrag),totaal:h(t.totaal)};d.querySelectorAll("[data-create-total]").forEach(o=>{if(!(o instanceof HTMLElement))return;const i=String(o.getAttribute("data-create-total")??"");i in r&&(o.textContent=r[i])})},Wt=()=>{var a;const t=!!((a=f.arbeid)!=null&&a.enabled);d.querySelectorAll("[data-arbeid-field]").forEach(o=>{if(o instanceof HTMLInputElement){if(o.getAttribute("data-arbeid-field")==="enabled"){o.checked=t;return}o.disabled=!t}}),Oe()},at=async({showShortInputError:t=!1}={})=>{var o;const r=pe(((o=f.voertuig)==null?void 0:o.kenteken)??"");if(r.length<6){W="idle",ie=t?"Voer minimaal 6 tekens in voor het kenteken.":"",Ee(),_e();return}const a=++Se;W="loading",ie="",Ee(),_e();try{const i=await ht(r);if(a!==Se)return;if(!i){W="error",ie="Geen RDW voertuig gevonden voor dit kenteken.",f.voertuig={...f.voertuig,title:"",buildYear:"",apkExpiryDate:"",color:"",fuel:""},Ee(),nt(),_e();return}f.voertuig={...f.voertuig,kenteken:Ae(r),...i},W="success",ie="",Ee(),nt(),_e()}catch{if(a!==Se)return;W="error",ie="RDW service is momenteel niet beschikbaar.",Ee(),_e()}},De=(t,r)=>{_=_.map(a=>a.id===t?At(r(a)):a)},Ot=t=>_.find(r=>r.id===t)??null,Re=t=>{var r;return String((t==null?void 0:t.garageId)||((r=n.activeGarage)==null?void 0:r.id)||"")},Rt=t=>{if(!(E instanceof HTMLElement))return null;const r=E.querySelectorAll("[data-werkbon-row-id]");for(const a of r)if(a instanceof HTMLElement&&String(a.dataset.werkbonRowId??"")===String(t))return a;return null},ze=async(t,r)=>{if(!z)throw new Error("Supabase is niet geconfigureerd.");const a=String(t.completedAppointmentId||t.id||"");if(!a)throw new Error("Werkbon ID ontbreekt.");const o=Re(t);let i=z.from("completed_appointments").select("id, garage_id, completion_notes").eq("id",a);o&&(i=i.eq("garage_id",o));const{data:s,error:u}=await i.maybeSingle();if(u)throw u;if(!s)throw new Error("Werkbon niet gevonden.");const y={...tt(s.completion_notes),...r};let L=z.from("completed_appointments").update({completion_notes:JSON.stringify(y)}).eq("id",a);o&&(L=L.eq("garage_id",o));const{error:M}=await L;if(M)throw M;return y},Ke=async t=>{const r=Ot(t);if(!r)throw new Error("Werkbon niet gevonden.");const a=String(r.completedAppointmentId||r.id||"");if(!a||!z){const y=String(r.invoiceNumber||"").trim();return{invoice:r,customer_name:r.customerName,customer_email:"",customer_phone:"",factuurnummer:y,total:r.summary.total,status:r.status}}const o=Re(r);let i=z.from("werkbonnen").select("werkbon_id, garage_id, customer_name, customer_email, customer_phone, invoice_number, total_amount, invoice_status, payment_link, payment_link_sent_at, payment_method").eq("werkbon_id",a);o&&(i=i.eq("garage_id",o));const{data:s,error:u}=await i.maybeSingle();if(u)throw u;const v=Number((s==null?void 0:s.total_amount)??0);return{invoice:r,customer_name:String((s==null?void 0:s.customer_name)??r.customerName??"Klant"),customer_email:String((s==null?void 0:s.customer_email)??"").trim(),customer_phone:String((s==null?void 0:s.customer_phone)??"").trim(),factuurnummer:String((s==null?void 0:s.invoice_number)??r.invoiceNumber??"").trim(),total:Number.isFinite(v)&&v>0?v:r.summary.total,status:Pe({status:(s==null?void 0:s.invoice_status)??r.status??"draft",paymentLink:(s==null?void 0:s.payment_link)??r.paymentLink,paymentLinkSentAt:(s==null?void 0:s.payment_link_sent_at)??r.paymentLinkSentAt,paidAt:r.paidAt}),payment_link:String((s==null?void 0:s.payment_link)??"").trim(),payment_link_sent_at:String((s==null?void 0:s.payment_link_sent_at)??"").trim(),payment_method:String((s==null?void 0:s.payment_method)??"").trim()}},rt=(t,r)=>{De(t,a=>({...a,status:et(r)}))},Ge=async t=>t.customer_email?(await ze(t.invoice,{status:"link_sent"}),rt(t.invoice.id,"link_sent"),P("Factuur verstuurd per e-mail ✓","success"),!0):(P("Geen e-mailadres bekend voor deze klant","error"),!1),Ie=async(t,{includePaymentLink:r=!0}={})=>{var R,Q;if(!t.customer_phone)return P("Geen telefoonnummer bekend voor deze klant","error"),!1;const a=Qe(t.customer_phone);if(!a)return P("Geen telefoonnummer bekend voor deze klant","error"),!1;const o=I||n.activeGarage,i=String((o==null?void 0:o.mollieMethod)||"none"),s=Math.max(1,parseInt(String((o==null?void 0:o.paymentDays)??14),10)||14),u=String((o==null?void 0:o.garageName)||(o==null?void 0:o.name)||"Uw garage");let v=null;if(r){try{v=await en(o,{totalAmount:t.total,factuurnummer:t.factuurnummer||"",customerName:t.customer_name||"Klant",paymentDays:s,completedAppointmentId:((R=t.invoice)==null?void 0:R.completedAppointmentId)||((Q=t.invoice)==null?void 0:Q.id)||""},V=>P(V,"error"),z)}catch{}if(i!=="none"&&!v)return P("Geen betaallink gemaakt. Controleer Mollie API-sleutel/instellingen en probeer opnieuw.","error"),!1}const L=String((o==null?void 0:o.payment_method)||(o==null?void 0:o.paymentMethod)||"mollie").toLowerCase()==="tikkie"?"Tikkie":"Mollie iDEAL",M=`€${Je(t.total)}`,U=new Date().toLocaleDateString("nl-NL"),J=String((o==null?void 0:o.whatsapp_template)||(o==null?void 0:o.whatsappTemplate)||"").trim();let de="";if(J)de=Ln(J,{customerName:t.customer_name||"klant",garageName:u,invoiceNumber:t.factuurnummer||t.invoice.id||"-",amountText:M,paymentDays:s,paymentLink:r&&(v||t.payment_link)||"",paymentMethodLabel:L,today:U,licensePlate:t.invoice.licensePlate||"",carModel:t.invoice.carModel||"Voertuig"});else{const V=[`Beste ${t.customer_name||"klant"},`,"",`Hierbij uw factuur van ${u}.`,"",`Factuurnummer: ${t.factuurnummer||"-"}`,`Totaalbedrag: ${M}`,`Betaaltermijn: ${s} dagen`];r&&v&&V.push("",`Betaal eenvoudig via ${L}:`,v),V.push("","Met vriendelijke groet,",u),de=V.join(`
`)}const x=`https://wa.me/${encodeURIComponent(a)}?text=${encodeURIComponent(de)}`;if(window.open(x,"_blank","noopener,noreferrer"),r&&v)try{await ze(t.invoice,{status:t.invoice.status!=="paid"?"link_sent":t.invoice.status,payment_link:v,payment_link_sent_at:new Date().toISOString(),payment_method:"mollie"});const V=new Date().toISOString(),F=_.findIndex(ue=>ue.id===t.invoice.id);F!==-1&&(_[F]={..._[F],status:_[F].status!=="paid"?"link_sent":_[F].status,paymentLink:v,paymentLinkSentAt:V,paymentMethod:"mollie"})}catch{}else rt(t.invoice.id,"link_sent");return P("WhatsApp bericht geopend ✓","success"),!0},zt=async(t,r)=>{var J,de;const a=await Ke(r),o=!!a.customer_email,i=!!Qe(a.customer_phone),s=String((I==null?void 0:I.quote_prefix)??((J=n.activeGarage)==null?void 0:J.quotePrefix)??"OFF-"),u=Number((I==null?void 0:I.quote_counter)??((de=n.activeGarage)==null?void 0:de.quoteCounter)??1),v=Number.isFinite(u)&&u>0?u:1,y=`${s}${String(v).padStart(3,"0")}`,L=String(a.factuurnummer||a.invoice.invoiceNumber||a.invoice.id||"factuur").trim(),M=async()=>{const x=await Ye();return $t({jsPDFCtor:x,invoice:{...a.invoice,invoiceNumber:L},customerEmail:a.customer_email,customerPhone:a.customer_phone,garageProfile:I,pdfSettings:$e,documentType:"factuur",documentNumber:L})},U=async()=>{const x=await Ye();return $t({jsPDFCtor:x,invoice:{...a.invoice,invoiceNumber:y},customerEmail:a.customer_email,customerPhone:a.customer_phone,garageProfile:I,pdfSettings:$e,documentType:"offerte",documentNumber:y})};return vt({triggerButton:t,title:"📄 PDF Acties",options:[{id:"download",icon:"⬇️",title:"Downloaden",description:"Sla de factuur op als PDF",onSelect:async x=>{x.setLoading("download",!0);try{const R=await M(),Q=`${L||"factuur"}.pdf`,V=URL.createObjectURL(R),F=document.createElement("a");F.href=V,F.download=Q,F.click(),URL.revokeObjectURL(V),x.forceClose(),P("PDF wordt gedownload ✓","success")}catch{P("PDF genereren mislukt","error")}finally{x.setLoading("download",!1)}}},{id:"quote-download",icon:"🧾",title:"Offerte downloaden",description:`Sla een offerte op als PDF (${y})`,onSelect:async(x,R)=>{x.setLoading(R,!0);try{const Q=await U(),V=`${y||a.invoice.id||"offerte"}.pdf`,F=URL.createObjectURL(Q),ue=document.createElement("a");ue.href=F,ue.download=V,ue.click(),URL.revokeObjectURL(F),x.forceClose(),P("Offerte PDF wordt gedownload ✓","success")}catch{P("Offerte PDF genereren mislukt","error")}finally{x.setLoading(R,!1)}}},{id:"print",icon:"🖨️",title:"Afdrukken",description:"Print direct naar printer",onSelect:async(x,R)=>{x.setLoading(R,!0);try{const Q=await M(),V=URL.createObjectURL(Q),F=window.open(V,"_blank","noopener,noreferrer");if(!F)throw new Error("Popup blocked");F.addEventListener("load",()=>{F.print(),F.addEventListener("afterprint",()=>{try{F.close()}catch{}URL.revokeObjectURL(V)},{once:!0})},{once:!0}),x.forceClose(),P("Print dialoog geopend ✓","success")}catch{P("Afdrukken mislukt","error")}finally{x.setLoading(R,!1)}}},{id:"email",icon:"📧",title:"Stuur via E-mail",description:o?"Verstuur naar klant e-mail":"⚠️ Geen e-mailadres bekend. Voeg een e-mailadres toe aan deze werkbon.",disabled:!o,onSelect:async(x,R)=>{x.setLoading(R,!0);const Q=await Ge(a);x.setLoading(R,!1),Q&&(x.forceClose(),q())}},{id:"whatsapp",icon:"💬",title:"Stuur via WhatsApp",description:i?"Deel alleen de factuur via WhatsApp (zonder betaallink)":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.",disabled:!i,onSelect:async(x,R)=>{x.setLoading(R,!0);const Q=await Ie(a,{includePaymentLink:!1});x.setLoading(R,!1),Q&&(x.forceClose(),q())}}]})},Kt=async(t,r)=>{var v;const a=await Ke(r),o=a.invoice,i=!!Qe(a.customer_phone),u=String(((v=I||n.activeGarage)==null?void 0:v.mollieMethod)||"none")!=="none";return vt({triggerButton:t,title:"💳 Betaalmethode",subtitle:`Totaal te betalen: €${Je(a.total)}`,options:[{id:"cash",icon:"💵",title:"Contant",description:"Registreer contante betaling",onSelect:async y=>{y.setBodyContent(`
              <div class="action-popup-confirm">
                <p class="action-popup-confirm-title">Bevestig contante betaling</p>
                <p class="action-popup-confirm-subtitle">€${c(Je(a.total))} ontvangen?</p>
                <div class="action-popup-confirm-actions">
                  <button type="button" class="button subtle" data-popup-cancel>Annuleren</button>
                  <button type="button" class="button" data-popup-confirm>✓ Bevestigen</button>
                </div>
              </div>
            `,L=>{const M=L.querySelector("[data-popup-cancel]"),U=L.querySelector("[data-popup-confirm]");M==null||M.addEventListener("click",()=>y.forceClose()),U==null||U.addEventListener("click",async()=>{await it(o.id,t),y.forceClose(),q(),P("Contante betaling geregistreerd ✓","success")})})}},{id:"mollie_whatsapp",icon:"💬",title:"Betaallink via WhatsApp",description:u?i?"Stuur iDEAL link naar klant":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.":"⚠️ Geen Mollie account verbonden. Ga naar Instellingen → Betalingen.",disabled:!u||!i,onSelect:async(y,L)=>{y.setLoading(L,!0);const M=await Ie(a);y.setLoading(L,!1),M&&(y.forceClose(),q(),P("Betaallink verstuurd via WhatsApp ✓","success"))}}]})},Gt=(t,r)=>{$();const a=t.getBoundingClientRect(),o=document.createElement("div");o.className="send-dropdown",o.setAttribute("data-send-dropdown","true"),o.innerHTML=`
      <button type="button" data-send-option="email" data-werkbon-id="${c(r.invoice.id)}">
        📧 Per e-mail ${r.customer_email?"":'<span class="send-dropdown-muted">(geen e-mail)</span>'}
      </button>
      <button type="button" data-send-option="whatsapp" data-werkbon-id="${c(r.invoice.id)}">
        💬 Via WhatsApp ${r.customer_phone?"":'<span class="send-dropdown-muted">(geen telefoon)</span>'}
      </button>
      <button type="button" data-send-option="both" data-werkbon-id="${c(r.invoice.id)}">
        📤 Beide versturen
      </button>
    `,document.body.append(o);const i=window.innerWidth,s=window.innerHeight,u=o.getBoundingClientRect(),v=Math.max(8,Math.min(a.left,i-u.width-8)),y=a.bottom+u.height+8>s?Math.max(8,a.top-u.height-8):a.bottom+6;o.style.left=`${Math.round(v)}px`,o.style.top=`${Math.round(y)}px`,ce=o,g=r},Te=(t,r)=>{if(!(t instanceof HTMLButtonElement))return()=>{};const a=t.textContent||"";return t.disabled=!0,t.textContent=r,()=>{t.disabled=!1,t.textContent=a}},Vt=t=>new Promise(r=>{const a=Rt(t);if(!(a instanceof HTMLElement)){r();return}a.classList.add("werkbon-row-removing"),window.setTimeout(r,220)}),Ve=(t,r=!1)=>{G=t,te=!0,H=r?t:"",q()},ot=(t,r)=>{const a=_.find(o=>o.id===t);if(a){if(a.status==="paid"){O(`Invoice for ${we(a.licensePlate)} is already paid.`),Ve(t,!1);return}De(t,o=>({...o,status:"link_sent"})),O(`Werkbon sent to customer via ${r}.`),Ve(t,!1)}},it=async(t,r)=>{const a=_.find(s=>s.id===t);if(!a)return;if(a.status==="paid"){O(`Invoice for ${we(a.licensePlate)} is already marked as paid.`),Ve(t,!1);return}if(!await re({title:"Werkbon markeren als betaald?",body:"Dit registreert de betaling als vandaag ontvangen.",confirmLabel:"Markeer als betaald",cancelLabel:"Annuleren"}))return;const i=Te(r,"Opslaan...");try{await ze(a,{status:"paid",payment_method:"manual",payment_date:new Date().toISOString()}),De(t,s=>({...s,status:"paid"})),P("Werkbon gemarkeerd als betaald ✓","success"),q()}catch{P("Er ging iets mis","error"),i();return}i()},Ut=t=>{const r=_.find(y=>y.id===t);if(!r||!(b instanceof HTMLElement))return;const a=b.querySelector("[data-werkbon-edit-status]"),o=b.querySelector("[data-werkbon-edit-hours]"),i=b.querySelector("[data-werkbon-edit-rate]");if(!(a instanceof HTMLSelectElement)||!(o instanceof HTMLInputElement)||!(i instanceof HTMLInputElement))return;const s=et(a.value),u=Math.max(0,Number(o.value||r.labour.hours)),v=Math.max(0,Number(i.value||r.labour.rate));De(t,y=>({...y,status:s,labour:{...y.labour,hours:u,rate:v}})),H="",G=t,te=!0,O("Werkbon updated."),q()},Yt=async(t,r)=>{const a=_.find(s=>s.id===t);if(!a||!await re({title:"Werkbon verwijderen?",body:"Deze actie kan niet ongedaan worden gemaakt. De werkbon wordt permanent verwijderd.",confirmLabel:"Verwijderen",cancelLabel:"Annuleren",confirmClassName:"danger"}))return;const i=Te(r,"Opslaan...");try{if(!z)throw new Error("Supabase is niet geconfigureerd.");const s=String(a.completedAppointmentId||a.id||"");if(!s)throw new Error("Werkbon ID ontbreekt.");let u=z.from("completed_appointments").delete().eq("id",s);const v=Re(a);v&&(u=u.eq("garage_id",v));const{error:y}=await u;if(y)throw y}catch{P("Verwijderen mislukt","error"),i();return}await Vt(t),_=_.filter(s=>s.id!==t),C===t&&(C=""),G===t&&(G="",te=!1,H=""),P("Werkbon verwijderd","success"),$(),q(),i()},Qt=async(t,r,a)=>{var o;if(t==="view"){Ue("werkbonDetail",{selectedWerkbonId:r,editMode:!1}),window.location.href=Xe(`werkbon-detail.html?id=${encodeURIComponent(r)}`);return}if(t==="edit"){Ue("werkbonDetail",{selectedWerkbonId:r,editMode:!0}),window.location.href=Xe(`werkbon-detail.html?id=${encodeURIComponent(r)}&edit=true`);return}if(t==="cancel-edit"){H="",te=!1,q();return}if(t==="save-edit"){Ut(r);return}if(t==="pdf-actions"){if(!(a instanceof HTMLButtonElement))return;const i=Te(a,"Laden...");try{await zt(a,r)}catch{P("Er ging iets mis","error")}i();return}if(t==="payment-actions"){if(!(a instanceof HTMLButtonElement))return;const i=Te(a,"Laden...");try{await Kt(a,r)}catch{P("Er ging iets mis","error")}i();return}if(t==="send-customer"){if(!(a instanceof HTMLButtonElement))return;if(((o=g==null?void 0:g.invoice)==null?void 0:o.id)===r&&ce instanceof HTMLElement){$();return}const i=Te(a,"Laden...");try{const s=await Ke(r);Gt(a,s)}catch{P("Er ging iets mis","error")}i();return}if(t==="send-sms"){ot(r,"SMS");return}if(t==="send-whatsapp"){ot(r,"WhatsApp");return}if(t==="mark-paid"){await it(r,a);return}if(t==="download-pdf"){const i=_.find(u=>u.id===r);if(!i)return;const s=In(i);O(s?"Print dialog opened for PDF export.":"Allow pop-ups to export this werkbon as PDF.");return}t==="delete"&&await Yt(r,a)},q=()=>{if(!(l instanceof HTMLElement)||!(E instanceof HTMLElement)||!(b instanceof HTMLElement)||!(d instanceof HTMLElement))return;const t=S instanceof HTMLSelectElement?S.value:"all",r=A instanceof HTMLInputElement?A.value.trim().toLowerCase():"",a=[..._].sort((i,s)=>{var u,v;return((u=Ce(s.completedAt))==null?void 0:u.getTime())-((v=Ce(i.completedAt))==null?void 0:v.getTime())}).filter(i=>{const s=[i.licensePlate,i.customerName,i.carModel].join(" ").toLowerCase(),u=!r||s.includes(r),v=t==="all"||Pe(i)===t;return u&&v});l.innerHTML=Mn(_),E.innerHTML=a.length?a.map(i=>Pt(i,C===i.id)).join(""):Pn(a,!!(r||t!=="all"));const o=_.find(i=>i.id===G)??null;b.classList.toggle("is-open",te&&!!o),b.innerHTML=te&&o?Tn(o,H===o.id):"",Y(),Ne()};D==null||D.addEventListener("click",()=>{oe=!0,B=1,Y({forceMount:!0,refreshContent:!0})});const st=async t=>{const r=t.closest("[data-create-action]");if(!(r instanceof HTMLElement))return!1;const a=String(r.dataset.createAction??"");if(a==="attempt-close")return r.classList.contains("werkbon-create-shadow")&&t.closest(".werkbon-create-panel")||await We(),!0;if(a==="jump-step"){const o=Number(r.dataset.step??B);return B=Math.min(5,Math.max(1,o)),se=!1,Y({refreshContent:!0}),!0}if(a==="prev-step")return B=Math.max(1,B-1),Y({refreshContent:!0}),!0;if(a==="next-step")return B===1&&W!=="success"&&(Z&&(window.clearTimeout(Z),Z=0),await at({showShortInputError:!0})),B===1&&W!=="success"?(O("Rond eerst de RDW validatie af."),!0):(B=Math.min(5,B+1),Y({refreshContent:!0}),!0);if(a==="remove-part"){const o=Number(r.dataset.partIndex??-1);return Number.isFinite(o)&&o>=0&&(f.onderdelen.splice(o,1),Y({refreshContent:!0})),!0}if(a==="quick-part")return f.onderdelen.push({naam:String(r.dataset.partName??"Onderdeel"),aantal:1,prijs:j(r.dataset.partPrice,0)}),Y({refreshContent:!0}),!0;if(a==="add-manual-part")return f.onderdelen.push({naam:"",aantal:1,prijs:0}),Y({refreshContent:!0}),!0;if(a==="open-payment")return se=!0,Y(),!0;if(a==="close-payment")return se=!1,Y(),!0;if(a==="select-payment")return le=String(r.dataset.paymentMethod??""),se=!1,O(`Betaalmethode gekozen: ${le}.`),Y(),!0;if(a==="save-werkbon"){try{await qt()}catch(o){O(o instanceof Error?o.message:"Opslaan mislukt.")}return!0}if(a==="create-pdf"){try{await Ft(),O("PDF gegenereerd.")}catch(o){O(o instanceof Error?o.message:"PDF genereren mislukt.")}return!0}if(a==="email-werkbon"){try{await Ht(),O("Werkbon e-mail verstuurd.")}catch(o){O(o instanceof Error?o.message:"E-mail verzenden mislukt.")}return!0}return a==="whatsapp-werkbon"?(Bt(),O("WhatsApp bericht geopend."),!0):!1},lt=t=>{if(!(t instanceof HTMLElement)||!oe)return!1;if(t.matches("[data-create-field='kenteken']")){if(t instanceof HTMLInputElement){const r=Ae(t.value);t.value=r,f.voertuig={...f.voertuig,kenteken:r},W="idle",ie="",Z&&(window.clearTimeout(Z),Z=0);const a=pe(r),o=d.querySelector("#vehicleLookupStatus");o instanceof HTMLElement&&(o.classList.remove("is-success","is-error"),o.textContent=a.length>=6?"Kenteken controleren...":"Typ kenteken om te zoeken"),_e(),a.length>=6&&(Z=window.setTimeout(()=>{Z=0,at()},420))}return!0}if(t.matches("[data-create-field='btw']"))return t instanceof HTMLSelectElement&&(f.btw=j(t.value,21),Oe()),!0;if(t.matches("[data-klant-field]")){const r=String(t.getAttribute("data-klant-field")??"");if(!r)return!0;const a=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:"";return f.klant={...f.klant,[r]:a},!0}if(t.matches("[data-arbeid-field]")){const r=String(t.getAttribute("data-arbeid-field")??"");if(!r)return!0;const a={...f.arbeid};return r==="enabled"&&t instanceof HTMLInputElement?(a.enabled=t.checked,f.arbeid=a,Wt(),!0):(t instanceof HTMLInputElement&&(a[r]=j(t.value,r==="tarief"?65:0)),f.arbeid=a,Oe(),!0)}if(t.matches("[data-part-field]")){const r=Number(t.getAttribute("data-part-index")??-1),a=String(t.getAttribute("data-part-field")??"");if(!Number.isFinite(r)||r<0||!a)return!0;const i={...f.onderdelen[r]??{naam:"",aantal:1,prijs:0}};return a==="naam"&&(i.naam=t instanceof HTMLInputElement?t.value:""),a==="aantal"&&(i.aantal=t instanceof HTMLInputElement?j(t.value,1):1),a==="prijs"&&(i.prijs=t instanceof HTMLInputElement?j(t.value,0):0),f.onderdelen[r]=i,jt(),!0}return!1};d.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;r&&await st(r)}),d.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&lt(r)}),d.addEventListener("keydown",t=>{t.key==="Escape"&&oe&&(t.preventDefault(),We())}),k.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;if(!r||await st(r))return;const a=r.closest("[data-werkbon-action]");if(a instanceof HTMLElement){const i=String(a.dataset.werkbonAction??""),s=String(a.dataset.werkbonId??"");if(i==="close-modal"){te=!1,H="",q();return}if(i==="toggle"){C=C===s?"":s,q();return}if(i==="close-drawer"){C="",H="",q();return}if(!s)return;await Qt(i,s,a);return}const o=r.closest("[data-werkbon-row-id]");if(o instanceof HTMLElement&&!r.closest("button, input, select, textarea, a")){const i=String(o.dataset.werkbonRowId??"");i&&(C=C===i?"":i,q())}});const ct=window.__werkbonDocumentClickHandler;typeof ct=="function"&&document.removeEventListener("click",ct);const dt=async t=>{const r=t.target instanceof Element?t.target:null;if(!r)return;const a=r.closest("[data-send-option]");if(a instanceof HTMLButtonElement&&g){t.preventDefault();const o=String(a.dataset.sendOption??""),i=g;$();try{o==="email"?await Ge(i):o==="whatsapp"?await Ie(i):o==="both"&&(await Ge(i),await Ie(i)),q()}catch{P("Er ging iets mis","error")}return}r.closest("[data-send-dropdown]")||r.closest('[data-werkbon-action="send-customer"]')||$()};window.__werkbonDocumentClickHandler=dt,document.addEventListener("click",dt),k.addEventListener("keydown",t=>{const r=t.target instanceof HTMLElement?t.target:null;if(r){if(t.key==="Escape"&&oe){t.preventDefault(),We();return}if((t.key==="Enter"||t.key===" ")&&r.matches("[data-werkbon-row-id]")){t.preventDefault();const a=String(r.dataset.werkbonRowId??"");a&&(C=C===a?"":a,q())}if(t.key==="Escape"&&te){te=!1,H="",q();return}t.key==="Escape"&&C&&(C="",q())}}),k.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&lt(r)}),A==null||A.addEventListener("input",q),S==null||S.addEventListener("change",q),await ge(),await Me();try{let t=[];try{t=await Xt({garageIds:m})}catch{}_=t.filter(i=>tt(i.completion_notes).werkbon_created===!0).map(_t).sort((i,s)=>new Date(s.completedAt??0).getTime()-new Date(i.completedAt??0).getTime());const r=new Set(_.map(i=>i.licensePlate).filter(i=>i&&i!=="UNKNOWN").map(i=>pe(i)));for(const i of r)if(i&&!Le.has(i))try{const s=await ht(i);s&&Le.set(i,s)}catch(s){console.error(`Failed to fetch vehicle for ${i}:`,s)}_=_.map(i=>{const s=pe(i.licensePlate),u=Le.get(s)||kn(s);return{...i,carModel:u.title+(u.buildYear?` (${u.buildYear})`:"")||i.carModel}});const a=await sn({garageIds:m}),o=ln(a);if(w(o.unread),A instanceof HTMLInputElement&&ne&&(A.value=ne),S instanceof HTMLSelectElement){const i=Array.from(S.options).some(s=>s.value===be);S.value=i?be:"all"}C=ye||(((wt=_[0])==null?void 0:wt.id)??""),G=ve,H=fe,G&&_.some(i=>i.id===G)&&(te=!0)}catch(t){_=[],w(0),console.error(t)}q(),X&&(oe=!0,B=1,Y({forceMount:!0,refreshContent:!0}))}const Fn=document.querySelector("#app");Zt();qn(Fn);
