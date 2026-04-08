import{e as Zt,f as en,p as Ze,c as tn}from"./theme-C7qkBi-i.js";/* empty css                      */import{o as yt,g as nn}from"./actionPopup-D9bI13ep.js";import{e as an,a as rn,c as on,l as sn,k as ln,b as cn,s as dn,q as Ye,g as at,t as ee,f as Fe}from"./branding-CAr728QY.js";import{n as be,f as St}from"./rdwService-CFrMDQAa.js";import{s as un}from"./confirmDialog-DSEC2-zx.js";const et={draft:{label:"Draft",className:"werkbon-status-draft"},link_sent:{label:"Link verstuurd",className:"werkbon-status-link-sent"},paid:{label:"Paid",className:"werkbon-status-paid"}},mn=new Map([["apk","apk"],["apk keuring","apk"],["keuring","apk"],["banden","banden"],["band","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"],["overig","other"],["overige","other"],["other","other"]]),$t=["Voertuig","Klant","Onderdelen","Arbeid","Overzicht"],pn=["contant","iDEAL","Mollie"],bn=[{label:"APK keuring",name:"APK keuring",price:45},{label:"Banden",name:"Banden",price:120},{label:"Remblokken voor",name:"Remblokken voor",price:85},{label:"Remblokken achter",name:"Remblokken achter",price:75},{label:"Olie",name:"Olie",price:35},{label:"Filters",name:"Filters",price:28},{label:"Accu",name:"Accu",price:95},{label:"Overige",name:"Overige",price:0}],fn="https://mkgfckxiusdcnqhethdy.supabase.co",kn="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",z=Zt(fn,kn);function Lt(){return{voertuig:{},klant:{},onderdelen:[],arbeid:{enabled:!1,uren:0,minuten:0,tarief:65},btw:21}}function B(e,n=0){const u=Number(e);return Number.isFinite(u)&&u>=0?u:n}function Ce(e){const n=be(e).slice(0,6);return n?n.replace(/(.{2})(?=.)/g,"$1-"):""}function je(e,n){const u=String(e??"").trim();if(u)return u;const p=be(n);return p?Ce(p):"UNKNOWN"}function gn(e){var b,m,y,l,E,f,D;const n=String(((b=e==null?void 0:e.voertuig)==null?void 0:b.kenteken)??"").trim(),u=[(m=e==null?void 0:e.klant)==null?void 0:m.naam,(y=e==null?void 0:e.klant)==null?void 0:y.telefoon,(l=e==null?void 0:e.klant)==null?void 0:l.email,(E=e==null?void 0:e.klant)==null?void 0:E.omschrijving].some($=>String($??"").trim()),p=Array.isArray(e==null?void 0:e.onderdelen)&&e.onderdelen.some($=>String(($==null?void 0:$.naam)??"").trim()||B($==null?void 0:$.aantal)>0||B($==null?void 0:$.prijs)>0),w=B((f=e==null?void 0:e.arbeid)==null?void 0:f.uren)*60+B((D=e==null?void 0:e.arbeid)==null?void 0:D.minuten);return!!(n||u||p||w>0)}function ye(e){var f,D,$,A;const n=(Array.isArray(e.onderdelen)?e.onderdelen:[]).map(G=>{const X=B(G==null?void 0:G.aantal),N=B(G==null?void 0:G.prijs);return{naam:String((G==null?void 0:G.naam)??"").trim()||"Onderdeel",aantal:X,prijs:N,totaal:te(X*N)}}),u=te(n.reduce((G,X)=>G+X.totaal,0)),p=B((f=e.arbeid)==null?void 0:f.uren)+B((D=e.arbeid)==null?void 0:D.minuten)/60,w=B(($=e.arbeid)==null?void 0:$.tarief,65),b=(A=e.arbeid)!=null&&A.enabled?te(p*w):0,m=te(u+b),y=B(e.btw)>0?.21:0,l=te(m*y),E=te(m+l);return{onderdelenRows:n,onderdelenSubtotaal:u,labourHours:p,labourRate:w,arbeidTotaal:b,subtotaal:m,btwBedrag:l,totaal:E}}function pe(e,n){return`<div class="werkbon-create-overview-row"><span>${c(e)}</span><strong>${c(n)}</strong></div>`}function He(e,n,u){return`<div class="werkbon-create-overview-row"><span>${c(n)}</span><strong data-create-total="${c(e)}">${c(u)}</strong></div>`}function Et(e){return $t.map((n,u)=>{const p=u+1,w=p===e?"is-active":p<e?"is-done":"",b=p<e?"is-done":"",m=u<$t.length-1?`<span class="werkbon-create-step-separator ${b}" aria-hidden="true"></span>`:"";return`<button class="werkbon-create-step ${w}" type="button" data-create-action="jump-step" data-step="${p}"><span>${p}.</span>${c(n)}</button>${m}`}).join("")}function xt({step:e,state:n,rdwStatus:u}){var E,f,D,$,A,G,X,N,ae,fe,Se,he,ke,M;const p=ye(n),w=String(((E=n.voertuig)==null?void 0:E.title)??"").trim(),b=String(((f=n.voertuig)==null?void 0:f.buildYear)??"").trim(),m=String(((D=n.voertuig)==null?void 0:D.apkExpiryDate)??"").trim(),y=b?`${w||"Voertuig gegevens"} (${b})`:w||"Voertuig gegevens",l=u==="loading"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Kenteken controleren...</p>':u==="success"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-success">Kenteken gevonden</p>':u==="error"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-error">Kenteken niet gevonden</p>':'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Typ kenteken om te zoeken</p>';return e===1?`
      <div class="werkbon-create-body-step">
        <label class="werkbon-create-appointment-field">
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text" inputmode="text" maxlength="8" data-create-field="kenteken" value="${c(String((($=n.voertuig)==null?void 0:$.kenteken)??""))}" placeholder="eg. 12-ABC-D1" required />
          ${l}
        </label>
        <div class="vehicle-preview-card werkbon-create-vehicle-preview" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${c(y)}</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">${c(b)}</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">${c(m)}</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">${c(String(((A=n.voertuig)==null?void 0:A.color)??""))}</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">${c(String(((G=n.voertuig)==null?void 0:G.fuel)??""))}</strong></span>
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
          <input type="email" data-klant-field="email" value="${c(String(((ae=n.klant)==null?void 0:ae.email)??""))}" autocomplete="email" placeholder="eg. klant@email.com" />
        </label>
        <label class="werkbon-create-appointment-field">
          Omschrijving
          <textarea rows="4" data-klant-field="omschrijving" placeholder="Optioneel">${c(String(((fe=n.klant)==null?void 0:fe.omschrijving)??""))}</textarea>
        </label>
      </div>
    `:e===3?`
      <div class="werkbon-create-body-step werkbon-create-parts-step">
        <div class="werkbon-create-section-copy">
          <label class="werkbon-create-section-title">Onderdelen</label>
          <p class="werkbon-create-section-subtitle">Voeg onderdelen en materialen toe aan de werkbon</p>
        </div>
        <div class="werkbon-create-quick-parts">
          ${bn.map(C=>`<button class="werkbon-chip-button" type="button" data-create-action="quick-part" data-part-name="${c(C.name)}" data-part-price="${c(String(C.price))}">+ ${c(C.label)}</button>`).join("")}
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
                ${n.onderdelen.map((C,K)=>`
                  <div class="werkbon-create-part-card">
                    <div class="werkbon-part-cell werkbon-part-cell-name">
                      <input type="text" class="werkbon-part-input" data-part-field="naam" data-part-index="${K}" value="${c(String(C.naam??""))}" placeholder="Onderdeel naam" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-price">
                      <div class="werkbon-currency-input">
                        <span class="werkbon-currency-symbol">€</span>
                        <input type="number" class="werkbon-part-input werkbon-part-input-price" min="0" step="0.01" data-part-field="prijs" data-part-index="${K}" value="${c(String(C.prijs??0))}" />
                      </div>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-quantity">
                      <input type="number" class="werkbon-part-input" min="1" step="1" data-part-field="aantal" data-part-index="${K}" value="${c(String(C.aantal??1))}" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-total">
                      <strong data-part-total-index="${K}">${c(h(te(B(C.aantal,1)*B(C.prijs))))}</strong>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-remove">
                      <button class="werkbon-remove-button" type="button" data-create-action="remove-part" data-part-index="${K}" aria-label="Verwijder onderdeel" title="Verwijder">
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
            <option value="21" ${B(n.btw)>0?"selected":""}>21%</option>
            <option value="0" ${B(n.btw)===0?"selected":""}>Geen BTW</option>
          </select>
        </label>
        <div class="werkbon-create-calculation-card">
          ${He("arbeid","Arbeid",h(p.arbeidTotaal))}
          ${He("subtotaal","Subtotaal",h(p.subtotaal))}
          ${He("btw","BTW",h(p.btwBedrag))}
          ${He("totaal","Totaal",h(p.totaal))}
        </div>
      </div>
    `:`
    <div class="werkbon-create-body-step werkbon-create-overview">
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Voertuig</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="1">Bewerken</button></div>
        ${pe("Kenteken",String(((Se=n.voertuig)==null?void 0:Se.kenteken)??"-"))}
        ${pe("Voertuig",w||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Klant</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="2">Bewerken</button></div>
        ${pe("Naam",String(((he=n.klant)==null?void 0:he.naam)??"-")||"-")}
        ${pe("Email",String(((ke=n.klant)==null?void 0:ke.email)??"-")||"-")}
        ${pe("Telefoon",String(((M=n.klant)==null?void 0:M.telefoon)??"-")||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Onderdelen / Arbeid</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="3">Bewerken</button></div>
        ${pe("Onderdelen",h(p.onderdelenSubtotaal))}
        ${pe("Arbeid",h(p.arbeidTotaal))}
        ${pe("BTW",h(p.btwBedrag))}
        ${pe("Totaal",h(p.totaal))}
      </div>
    </div>
  `}async function Qe(){var e,n;if((e=window.jspdf)!=null&&e.jsPDF)return window.jspdf.jsPDF;if(await new Promise((u,p)=>{const w=document.querySelector('script[data-js-pdf-cdn="true"]');if(w){w.addEventListener("load",()=>u(),{once:!0}),w.addEventListener("error",()=>p(new Error("Kon jsPDF niet laden.")),{once:!0});return}const b=document.createElement("script");b.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",b.async=!0,b.dataset.jsPdfCdn="true",b.onload=()=>u(),b.onerror=()=>p(new Error("Kon jsPDF niet laden.")),document.head.append(b)}),!((n=window.jspdf)!=null&&n.jsPDF))throw new Error("jsPDF is niet beschikbaar.");return window.jspdf.jsPDF}function wn(e=""){return{title:be(e)||"Voertuig",buildYear:""}}function vn(e){const n=String(e||"").trim();if(!n)return["other"];const u=n.split(n.includes(",")?/,/g:/\+|\/|&| and /gi).map(p=>p.trim()).filter(Boolean);return u.length?u:[n]}function hn(e){return mn.get(String(e||"").trim().toLowerCase())||"other"}function At(e){const n=String(e??"").trim(),u=at();if(!n)return{key:"other",label:Fe("other",u)};const p=n.toLowerCase(),w=[{probe:"apk",key:"apk"},{probe:"band",key:"banden"},{probe:"airco",key:"airco"},{probe:"occasion",key:"occasions"},{probe:"brake",key:"brakes"},{probe:"onderhoud",key:"onderhoud"},{probe:"service",key:"onderhoud"},{probe:"overig",key:"other"}],b=hn(n);let m=b;if(b==="other"){const y=w.find(l=>p.includes(l.probe));y&&(m=y.key)}if(m==="other"){if(["other","overig","overige"].includes(p))return{key:m,label:Fe("other",u)};const y=n.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:m,label:y||n||Fe("other",u)}}return{key:m,label:Fe(m,u)}}function yn(e){const n=Array.isArray(e==null?void 0:e.onderdelen)?e.onderdelen:[],u=new Set,p=[];for(const w of n){const b=String((w==null?void 0:w.naam)??"").trim();if(!b)continue;const m=At(b),y=`${m.key}:${m.label.toLowerCase()}`;u.has(y)||(u.add(y),p.push(m.label))}return p.length?p:["Onderhoud"]}function Sn(e){return vn(e).map(n=>{const{key:u,label:p}=At(n);return`<span class="service-chip service-chip-${u}">${c(p)}</span>`}).join("")}function c(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function te(e){return Math.round(Number(e)*100)/100}function h(e){return`€${te(e).toFixed(2)}`}function Je(e){const n=String(e??"").replace(/\D+/g,"");return n?n.startsWith("00")?n.slice(2):n.startsWith("0")?`31${n.slice(1)}`:n:""}function Xe(e){const n=Number(e);return(Number.isFinite(n)?n:0).toFixed(2).replace(".",",")}function Pe(e){const n=new Date(e);return Number.isNaN(n.getTime())?null:n}function $n(e){if(!e)return"";const n=Pe(e);if(!n)return"";const u=n.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}),p=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${u} · ${p}`}function Ct(e){const n=Pe(e);return n?n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Unknown date"}function _t(e){return(Pe(e)||new Date).toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"})}function Ln(e){const n=String(e||"").trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(n)?{r:Number.parseInt(n.slice(0,2),16),g:Number.parseInt(n.slice(2,4),16),b:Number.parseInt(n.slice(4,6),16)}:null}function Ae(e,n,u=""){if(!e||typeof e!="object")return u;for(const p of n){const w=e[p];if(w!=null&&String(w).trim())return String(w).trim()}return u}function _n(e,n){return String(e||"").replace(/{{klant_naam}}/g,n.customerName||"klant").replace(/{{garage_naam}}/g,n.garageName||"Uw garage").replace(/{{factuur_nummer}}/g,n.invoiceNumber||"-").replace(/{{totaal_bedrag}}/g,n.amountText||"€0,00").replace(/{{betaaltermijn}}/g,String(n.paymentDays||14)).replace(/{{betaal_link}}/g,n.paymentLink||"").replace(/{{betaal_methode}}/g,n.paymentMethodLabel||"Mollie iDEAL").replace(/{{datum}}/g,n.today||new Date().toLocaleDateString("nl-NL")).replace(/{{kenteken}}/g,ve(n.licensePlate||"")).replace(/{{auto_merk}}/g,n.carModel||"Voertuig")}async function Mt({jsPDFCtor:e,invoice:n,customerEmail:u="",customerPhone:p="",garageProfile:w,pdfSettings:b,documentType:m="factuur",documentNumber:y=""}){const l=new e({unit:"pt",format:"a4"}),E=l.internal.pageSize.getWidth(),f=40,D=String(m||"factuur").toLowerCase()==="offerte"?"offerte":"factuur",$=D==="offerte",A=(_,oe,Be)=>($?(b==null?void 0:b[oe])??(b==null?void 0:b[_]):b==null?void 0:b[_])??Be,G=String(A("primary_color","quote_primary_color",$?"#16A34A":"#2563EB")),X=String(A("font","quote_font","helvetica")).toLowerCase(),N=X.includes("times")||X.includes("georgia")?"times":X.includes("courier")?"courier":"helvetica",ae=String(A("header_style","quote_header_style","professional")),fe=A("show_btw","quote_show_btw",!0)!==!1,Se=A("show_iban","quote_show_iban",!$)!==!1,he=A("show_kvk","quote_show_kvk",!0)!==!1,ke=A("show_customer","quote_show_customer",!0)!==!1,M=A("show_vehicle","quote_show_vehicle",!0)!==!1,C=String(A("payment_instruction_text","payment_instruction_text","Betaalinstructie: Gelieve binnen 14 dagen over te maken onder vermelding van het factuurnummer.")),K=String(A("footer_text","quote_footer_text","")),ne=String(A("quote_layout","quote_layout","proposal")),H=Ln(G)||{r:37,g:99,b:235},ie=D==="offerte"?"OFFERTE":"FACTUUR",j=D==="offerte"?"Offertenummer":"Factuurnummer",le=String(y||n.invoiceNumber||n.id||"-").trim()||"-",ce=Ae(w,["name","garage_name"],"Garage"),ge=Ae(w,["address","adres"],"Adres onbekend"),W=Ae(w,["btw_nummer","btw","vat_number"],"Onbekend"),se=Ae(w,["kvk_nummer","kvk","chamber_of_commerce"],"Onbekend"),Z=Ae(w,["iban"],"Onbekend"),$e=80+(fe?14:0)+(he?14:0),k=Math.max(128,$e+16);l.setFillColor(H.r,H.g,H.b),ae==="modern"?(l.rect(0,0,E,k,"F"),l.setTextColor(255,255,255)):l.rect(0,0,E,4,"F"),ae==="boxed"&&(l.setDrawColor(H.r,H.g,H.b),l.rect(f-10,28,E-f*2+20,k-12)),ae==="split"&&(l.setDrawColor(H.r,H.g,H.b),l.line(E/2+10,40,E/2+10,k-10)),l.setFont(N,"bold"),l.setFontSize(18),l.text(ie,f,48),l.setFont(N,"normal"),l.setFontSize(10);let re=66;l.text(ce,f,re),re+=14,l.text(ge,f,re),re+=14,fe&&l.text(`BTW nummer: ${W}`,f,re),re+=14,he&&l.text(`KVK nummer: ${se}`,f,re);const de=E-f-180;if(l.text(`${j}: ${le}`,de,94),l.text(`${$?"Offertedatum":"Factuurdatum"}: ${_t(n.completedAt)}`,de,108),$){const _=new Date(n.completedAt||Date.now());_.setDate(_.getDate()+14),l.text(`Geldig tot: ${_t(_)}`,de,122)}ae==="modern"&&l.setTextColor(0,0,0);let g=Math.max(re+20,128);l.setDrawColor(224,228,236),l.line(f,g,E-f,g),g+=18;const I=g;let Le=I,_e=I;if(ke){let _=I;l.setFont(N,"bold"),l.text("Klant",f,_),l.setFont(N,"normal"),_+=14,l.text(n.customerName||"-",f,_),$&&ne==="compact"||(_+=14,l.text(`E-mail: ${u||"-"}`,f,_),_+=14,l.text(`Telefoon: ${p||"-"}`,f,_)),Le=_}if(M){const _=ke?E/2+20:f;let oe=I;l.setFont(N,"bold"),l.text("Voertuig",_,oe),l.setFont(N,"normal"),oe+=14,l.text(n.carModel||"-",_,oe),oe+=14,l.text(`Kenteken: ${ve(n.licensePlate)}`,_,oe),_e=oe}g=Math.max(Le,_e)+24,(ke||M)&&(l.setDrawColor(224,228,236),l.line(f,g,E-f,g)),g+=20,l.setFont(N,"bold"),l.text("Onderdelen",f,g),g+=16;const De=f,O=f+280,P=f+350,we=f+440;l.setFontSize(9),l.text("Product",De,g),l.text("Aantal",O,g),l.text("Prijs",P,g),l.text("Totaal",we,g),g+=10,l.line(f,g,E-f,g),l.setFont(N,"normal"),l.setFontSize(10);for(const _ of n.parts)g+=16,g>700&&(l.addPage(),g=60),l.text(_.name||"-",De,g),l.text(String(_.quantity),O,g),l.text(h(_.price),P,g),l.text(h(_.total),we,g);g+=22,l.setFont(N,"bold"),l.text("Arbeid",f,g),l.setFont(N,"normal"),g+=16,l.text(`${String(n.labour.hours||0)} x ${h(n.labour.rate||0)}/h`,f,g),l.text(h(n.labour.total||0),we,g),g+=18,l.line(f,g,E-f,g),g+=20;const Te=E-f-200;if(l.text("Subtotaal",Te,g),l.text(h(n.summary.subtotal),we,g),g+=16,l.text("BTW 21%",Te,g),l.text(h(n.summary.vat),we,g),g+=18,l.setFont(N,"bold"),l.setFontSize(12),l.text("Totaal",Te,g),l.text(h(n.summary.total),we,g),$&&(g+=12),g+=36,l.setFont(N,"normal"),l.setFontSize(10),Se&&D!=="offerte"&&(l.text(`IBAN: ${Z}`,f,g),g+=14),!$){const _=String(C||"").trim();_&&l.text(_,f,g,{maxWidth:E-f*2})}if(K){const _=l.internal.pageSize.getHeight();l.setTextColor(120,120,120),l.setFontSize(9),l.text(K,f,_-24,{maxWidth:E-f*2}),l.setTextColor(0,0,0)}return l.output("blob")}function ve(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function tt(e){const n=String(e??"draft").trim().toLowerCase();return["paid","betaald"].includes(n)?"paid":["link_sent","link-sent","link sent","linkverstuurd","link_verstuurd","link verstuurd","sent","send","verzonden"].includes(n)?"link_sent":(["draft","pending","openstaand"].includes(n),"draft")}function Ne({status:e,paymentLink:n,paymentLinkSentAt:u,paidAt:p,paymentStatus:w}={}){const b=tt(e);if(b==="paid")return"paid";const m=String(w??"").trim().toLowerCase(),y=!!String(p??"").trim();if(m==="paid"||y)return"paid";const l=!!(String(n??"").trim()||String(u??"").trim());return b==="link_sent"||l?"link_sent":"draft"}function nt(e){if(!e)return{};if(typeof e=="object")return e;try{return JSON.parse(String(e))}catch{return{}}}function Mn(e){return String(e??"").split(",").map(n=>n.trim()).filter(Boolean)}function Pt(e){var l,E;const n=(e.parts??[]).map(f=>{const D=Number(f.quantity??0),$=Number(f.price??0);return{name:String(f.name??"Item"),quantity:D,price:$,total:te(D*$)}}),u=Number(((l=e.labour)==null?void 0:l.hours)??0),p=Number(((E=e.labour)==null?void 0:E.rate)??0),w=te(u*p),b=te(n.reduce((f,D)=>f+D.total,0)+w),m=te(b*.21),y=te(b+m);return{id:String(e.id??""),completedAppointmentId:String(e.completedAppointmentId??""),bookingId:String(e.bookingId??""),garageId:String(e.garageId??""),licensePlate:String(e.licensePlate??"UNKNOWN"),customerName:je(e.customerName,e.licensePlate),carModel:String(e.carModel??"Unknown vehicle"),serviceTypes:Array.isArray(e.serviceTypes)?e.serviceTypes.map(String):["Other"],completedAt:e.completedAt,status:Ne({status:e.status,paymentLink:e.paymentLink,paymentLinkSentAt:e.paymentLinkSentAt,paidAt:e.paidAt,paymentStatus:e.paymentStatus}),parts:n,labour:{hours:u,rate:p,total:w},summary:{subtotal:b,vat:m,total:y},paymentLink:String(e.paymentLink??""),paymentLinkSentAt:String(e.paymentLinkSentAt??""),paymentMethod:String(e.paymentMethod??""),paidAt:String(e.paidAt??"")}}function Tt(e){const n=nt(e.completion_notes),u=Array.isArray(n.service_types)?n.service_types.map(String):Mn(e.service),p=n.labour&&typeof n.labour=="object"?n.labour:{},w=Array.isArray(n.parts)?n.parts:[{name:"Service",quantity:1,price:0}],b=Ne({status:n.status,paymentLink:n.payment_link,paymentLinkSentAt:n.payment_link_sent_at,paidAt:n.paid_at??n.paidAt,paymentStatus:n.payment_status}),m=String(e.license_plate??"");return Pt({id:String(e.id??""),completedAppointmentId:String(e.id??""),bookingId:String(e.booking_id??""),garageId:String(e.garage_id??""),licensePlate:m,customerName:je(n.customer_name??n.customerName,m),carModel:String(n.car_model||n.carModel||"Voertuig"),serviceTypes:u.length?u:["Service"],completedAt:String(e.completed_at??e.created_at??new Date().toISOString()),status:b,werkbonCreated:n.werkbon_created===!0,parts:w,labour:{hours:Number(p.hours??0),rate:Number(p.rate??0)},paymentLink:String(n.payment_link??""),paymentLinkSentAt:String(n.payment_link_sent_at??""),paymentMethod:String(n.payment_method??""),paidAt:String(n.paid_at??n.paidAt??"")})}function Tn(){const e=Ze("werkbon-detail.html");if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const n=document.createElement("link");n.rel="prefetch",n.as="document",n.href=e,document.head.append(n)}function Nt(e,n=""){const u=Ne({status:e,paymentLink:n}),p=et[u]??et.draft;return`<span class="status-chip ${p.className}">${p.label}</span>`}function En(e){const n=e.filter(y=>y.status!=="paid").reduce((y,l)=>y+l.summary.total,0),u=e.filter(y=>y.status==="link_sent").length,p=e.filter(y=>y.status==="draft").length,w=e.filter(y=>y.status==="paid").reduce((y,l)=>y+l.summary.total,0),b=at();return[{label:ee("outstandingRevenue",b),value:h(n),note:`${e.filter(y=>y.status!=="paid").length} ${ee("openWorkOrders",b)}`},{label:ee("readyToSend",b),value:String(p),note:ee("draftInvoicesWaitingDelivery",b)},{label:ee("inPaymentFlow",b),value:String(u),note:ee("workOrdersWithSentLink",b)},{label:ee("paidTotal",b),value:h(w),note:ee("completedPayments",b)}].map(y=>`
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${c(y.label)}</p>
          <strong class="werkbon-summary-value">${c(y.value)}</strong>
          <span class="metric-note">${c(y.note)}</span>
        </article>
      `).join("")}function xn(e){const n=at();return`
    <div class="request-divider"></div>
    <div class="request-expanded werkbon-expanded">
      <div class="request-actions werkbon-bottom-actions">
        <button class="button subtle" type="button" data-werkbon-action="view" data-werkbon-id="${c(e.id)}">${c(ee("viewWorkOrder",n))}</button>
        <button class="button subtle" type="button" data-werkbon-action="edit" data-werkbon-id="${c(e.id)}">${c(ee("edit",n))}</button>
        <button class="button subtle werkbon-pdf-button" type="button" data-werkbon-action="pdf-actions" data-werkbon-id="${c(e.id)}">📄 ${c(ee("downloadPdf",n))} ▾</button>
        <button class="button werkbon-betalen-button" type="button" data-werkbon-action="payment-actions" data-werkbon-id="${c(e.id)}">💳 ${c(ee("payment",n))} ▾</button>
        <button class="button danger" type="button" data-werkbon-action="delete" data-werkbon-id="${c(e.id)}">${c(ee("delete",n))}</button>
      </div>
    </div>
  `}function An(e,n){if(!e)return"";const u=e.status==="paid"?"":`<button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${c(e.id)}">Mark as Paid</button>`;return`
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${c(ve(e.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${c(e.customerName)} · ${c(Ct(e.completedAt))}</p>
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
              ${Nt(e.status,e.paymentLink)}
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
                ${In(e)}
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
                ${u}
              `}
        </div>
      </aside>
    </div>
  `}function Dt(e,n){const u=String(e.licensePlate??"").toUpperCase()==="UNKNOWN";return`
    <article class="request-card werkbon-card ${n?"is-expanded":""}" data-werkbon-row-id="${c(e.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          ${u?'<span class="fast-appt-dot" style="background: #2563EB" aria-hidden="true"></span>':`<span class="plate-chip">${c(ve(e.licensePlate))}</span>`}
          <div class="request-info">
            <p class="request-name">${c(e.customerName)}</p>
            ${u?"":`<p class="request-vehicle">${c(e.carModel)}</p>`}
            <div class="request-services">${u?'<span class="service-chip service-chip-other">Simple appointment</span>':Sn(Array.isArray(e.serviceTypes)?e.serviceTypes.join(", "):e.serviceTypes)}</div>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${c(h(e.summary.total))}</strong>
          ${Nt(e.status,e.paymentLink)}
          ${e.status==="paid"&&e.paidAt?`<span class="werkbon-paid-at">${c($n(e.paidAt))}</span>`:""}
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

      ${n?xn(e):""}
    </article>
  `}function It(e){return`
    <div class="werkbon-payment-overlay" role="presentation">
      <div class="werkbon-payment-dialog" role="dialog" aria-modal="true" aria-labelledby="werkbonPaymentTitle">
        <h3 id="werkbonPaymentTitle">Kies betaalmethode</h3>
        <div class="werkbon-payment-grid">
          ${pn.map(n=>`
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
  `}function Cn({isOpen:e,step:n,state:u,rdwStatus:p,rdwError:w,selectedPaymentMethod:b,isSaving:m,paymentModalOpen:y}){if(!e)return"";const E=n===1&&!(p==="success");return`
    <div class="werkbon-create-modal ${e?"is-open":""}" role="presentation">
      <div class="werkbon-create-shadow" data-create-action="attempt-close" aria-hidden="true">
        <section class="werkbon-create-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonCreateTitle">
          <header class="werkbon-create-header">
            <div>
              
              <h2 id="werkbonCreateTitle">Werkbon Maken</h2>
            </div>
            <button class="icon-button" type="button" data-create-action="attempt-close" aria-label="Sluiten">&times;</button>
          </header>

          <nav class="werkbon-create-stepper" aria-label="Werkbon stappen">${Et(n)}</nav>

          <div class="werkbon-create-content">${xt({step:n,state:u,rdwStatus:p})}</div>

          <footer class="werkbon-create-actions">
            <div class="werkbon-create-actions-left">
              <button class="button subtle" type="button" data-create-action="prev-step" ${n===1?"disabled":""}>Vorige</button>
            </div>
            <div class="werkbon-create-actions-right">
              ${n<5?`<button class="button subtle" type="button" data-create-action="next-step" ${E?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${m?"disabled":""}>${m?"Opslaan...":"Opslaan"}</button>`}
            </div>
          </footer>

          <div data-create-saving-host="true">${m?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':""}</div>
        </section>

        <div data-create-payment-host="true">${y?It(b):""}</div>
      </div>
    </div>
  `}function Pn({step:e,rdwStatus:n,isSaving:u}){const p=e===1&&n!=="success";return{left:`<button class="button subtle" type="button" data-create-action="prev-step" ${e===1?"disabled":""}>Vorige</button>`,right:e<5?`<button class="button subtle" type="button" data-create-action="next-step" ${p?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${u?"disabled":""}>${u?"Opslaan...":"Opslaan"}</button>`}}function Nn(e){return`
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${c(e)}</p>
      </div>
    </div>
  `}function Dn(e,n){return e.length?e.map(Dt).join(""):Nn(n?"No invoices match the current filters.":"Completed appointments will appear here once a werkbon is created.")}function In(e){return e.parts.map(n=>`
        <div class="werkbon-line-item">
          <span>${c(n.name)}</span>
          <span>${c(String(n.quantity))}</span>
          <span>${c(h(n.price))}</span>
          <strong>${c(h(n.total))}</strong>
        </div>
      `).join("")}function qn(e){return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Werkbon ${c(ve(e.licensePlate))}</title>
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
          <p><strong>License plate:</strong> ${c(ve(e.licensePlate))}</p>
          <p><strong>Customer:</strong> ${c(e.customerName)}</p>
          <p><strong>Date:</strong> ${c(Ct(e.completedAt))}</p>
          <p><strong>Status:</strong> ${c(et[e.status].label)}</p>
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
  `}function Fn(e){const n=window.open("","_blank","width=960,height=720,noopener,noreferrer");return n?(n.document.open(),n.document.write(qn(e)),n.document.close(),n.focus(),window.setTimeout(()=>{n.print()},180),!0):!1}async function Hn(e){var pt,bt,ft,kt,gt,wt,vt,ht;if(!e)return;document.body.style.overflow="";const n=await an();if(!n)return;if(!n.isAdmin&&!n.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}rn(n.activeGarage);const u=n.isAdmin?null:[(pt=n.activeGarage)==null?void 0:pt.id].filter(Boolean),{shell:p,contentArea:w,setUnreadEmailCount:b}=on({activePage:"werkbon",title:"Werkbon & Payments",headerNote:"Manage invoices and payment status",userEmail:n.user.email,onLogout:sn,garage:n.activeGarage,isAdmin:n.isAdmin}),m=document.createElement("div");m.id="werkbonCreateModalHost",e.replaceChildren(p,m),Tn(),w.innerHTML=`
    <section class="werkbon-page">
      <div id="werkbonNotice" class="werkbon-notice" hidden aria-live="polite"></div>

      <div class="werkbon-topbar">
        <label class="werkbon-filter-field werkbon-search-field">
          <input id="werkbonSearch" type="search" data-i18n-placeholder="searchLicensePlateOrCustomer" placeholder="Search license plate or customer" />
        </label>

        <label class="werkbon-filter-field werkbon-status-field">
          <select id="werkbonStatusFilter" aria-label="Filter werkbon by status">
            <option value="all" data-i18n="allStatuses">All statuses</option>
            <option value="draft">Draft</option>
            <option value="link_sent">Link verstuurd</option>
            <option value="paid">Paid</option>
          </select>
        </label>

        <div class="werkbon-create-trigger-wrap">
          <button id="werkbonCreateTrigger" class="button" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.001 5V19.002" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.002 12.0039H5" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> <span data-i18n="createWorkOrder">Werkbon Maken</span></button>
        </div>
      </div>

      <div id="werkbonSummary" class="werkbon-summary-grid"></div>

      <section class="panel werkbon-panel">
        <div id="werkbonList" class="werkbon-list"></div>
      </section>

      <div id="werkbonDrawer" class="werkbon-drawer"></div>
    </section>
  `;const y=w.querySelector("#werkbonNotice"),l=w.querySelector("#werkbonSummary"),E=w.querySelector("#werkbonList"),f=w.querySelector("#werkbonDrawer"),D=w.querySelector("#werkbonCreateTrigger"),$=w.querySelector("#werkbonStatusFilter"),A=w.querySelector("#werkbonSearch"),G=new URLSearchParams(window.location.search),X=String(G.get("action")??"").toLowerCase()==="create",N=ln("werkbon",{}),ae=String(N.searchTerm??"").trim(),fe=String(N.statusFilter??"all").trim()||"all",Se=String(N.expandedInvoiceId??"").trim(),he=String(N.selectedInvoiceId??"").trim(),ke=String(N.editingInvoiceId??"").trim();let M=[],C=((bt=M[0])==null?void 0:bt.id)??"",K="",ne=!1,H="",ie=!1,j=1,le=!1,ce="",ge=!1,W="idle",se="",Z=0,$e=0,k=Lt(),re=0,de=null,g=null,I={...n.activeGarage,mollieMethod:String(((ft=n.activeGarage)==null?void 0:ft.mollieMethod)??"none"),mollieApiKey:((kt=n.activeGarage)==null?void 0:kt.mollieApiKey)??null,paymentDays:parseInt(String(((gt=n.activeGarage)==null?void 0:gt.paymentDays)??"14"),10)||14,garageName:String(((wt=n.activeGarage)==null?void 0:wt.garageName)||((vt=n.activeGarage)==null?void 0:vt.name)||"Garage")};const Le=new Map;let _e={};const De=()=>{Ye("werkbon",{searchTerm:A instanceof HTMLInputElement?A.value.trim():"",statusFilter:$ instanceof HTMLSelectElement?$.value:"all",expandedInvoiceId:C,selectedInvoiceId:K,editingInvoiceId:H})},O=t=>{y instanceof HTMLElement&&(y.textContent=t,y.hidden=!t,window.clearTimeout(re),t&&(re=window.setTimeout(()=>{y.hidden=!0,y.textContent=""},2600)))},P=(t,r="success")=>{if(r==="error"){O(String(t||"Er ging iets mis"));return}O(String(t||"Actie uitgevoerd."))},we=async()=>{var r;const t=(r=n.activeGarage)==null?void 0:r.id;if(!(!z||!t))try{const{data:a,error:o}=await z.from("garages").select("*").eq("id",t).maybeSingle();if(o||!a)return;I={...I,...a,paymentLink:a.payment_link??I.paymentLink??null,mollieMethod:String(a.mollie_method??I.mollieMethod??"none"),mollieApiKey:a.mollie_api_key??I.mollieApiKey??null,paymentDays:parseInt(String(a.payment_days??I.paymentDays??14),10)||14,garageName:String(a.garage_name||a.name||I.garageName||"Garage")}}catch{}},Te=async()=>{var r;const t=(r=n.activeGarage)==null?void 0:r.id;if(!(!z||!t))try{const{data:a}=await z.from("garage_pdf_settings").select("*").eq("garage_id",t).maybeSingle();a&&(_e=a)}catch{}},_=()=>{de instanceof HTMLElement&&de.remove(),de=null,g=null},oe=({title:t,body:r,confirmLabel:a,cancelLabel:o,confirmClassName:i=""})=>new Promise(s=>{const d=document.createElement("div");d.innerHTML=`
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
    `,document.body.append(d);const v=d.querySelector(".confirm-dialog-overlay"),S=d.querySelector('[data-confirm-action="continue"]');S instanceof HTMLButtonElement&&window.setTimeout(()=>S.focus(),50);const L=T=>{d.remove(),s(T)};v instanceof HTMLElement&&v.addEventListener("click",T=>{T.target===v&&L(!1)}),d.addEventListener("click",T=>{const V=T.target instanceof HTMLElement?T.target:null,J=V==null?void 0:V.closest("[data-confirm-action]");J instanceof HTMLElement&&L(J.dataset.confirmAction==="continue")}),d.addEventListener("keydown",T=>{T.key==="Escape"&&L(!1)})}),Be=()=>{Z&&(window.clearTimeout(Z),Z=0),$e+=1,j=1,le=!1,ce="",ge=!1,W="idle",se="",k=Lt()},Y=({forceMount:t=!1,refreshContent:r=!1}={})=>{if(!(m instanceof HTMLElement))return;if(!ie){m.innerHTML&&(m.innerHTML=""),document.body.style.overflow="";return}if(!((t?null:m.querySelector(".werkbon-create-modal"))instanceof HTMLElement)){m.innerHTML=Cn({isOpen:ie,step:j,state:k,rdwStatus:W,rdwError:se,selectedPaymentMethod:ce,isSaving:ge,paymentModalOpen:le}),document.body.style.overflow="hidden";return}const o=m.querySelector(".werkbon-create-stepper");if(o instanceof HTMLElement&&(o.innerHTML=Et(j)),r){const L=m.querySelector(".werkbon-create-content");L instanceof HTMLElement&&(L.innerHTML=xt({step:j,state:k,rdwStatus:W}))}const i=m.querySelector('[data-create-action="prev-step"]');i instanceof HTMLButtonElement&&(i.disabled=j===1);const s=m.querySelector(".werkbon-create-actions-left"),d=m.querySelector(".werkbon-create-actions-right");if(s instanceof HTMLElement&&d instanceof HTMLElement){const L=Pn({step:j,rdwStatus:W,isSaving:ge});s.innerHTML=L.left,d.innerHTML=L.right}const v=m.querySelector('[data-create-saving-host="true"]');v instanceof HTMLElement&&(v.innerHTML=ge?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':"");const S=m.querySelector('[data-create-payment-host="true"]');S instanceof HTMLElement&&(S.innerHTML=le?It(ce):""),document.body.style.overflow="hidden"},We=({rerenderPage:t=!1}={})=>{if(ie=!1,_(),Be(),t){q();return}Y()},Oe=async()=>{if(!gn(k)){We();return}await un("Er staan niet-opgeslagen gegevens in deze werkbon. Weet je zeker dat je wilt sluiten?","Werkbon sluiten")&&We()},qt=async t=>{if(!z||!t){const L=Math.max(1,Date.now()%1e5);return{invoiceNumber:`F-${String(L).padStart(6,"0")}`,nextCounter:L}}const{data:r,error:a}=await z.from("garages").select("invoice_prefix, invoice_counter, invoice_sequence").eq("id",t).maybeSingle();if(a)throw a;const o=String((r==null?void 0:r.invoice_prefix)??"F-"),i=Number((r==null?void 0:r.invoice_counter)??(r==null?void 0:r.invoice_sequence)??1),s=Number.isFinite(i)&&i>0?i:1,d=s+1,v=`${o}${String(s).padStart(3,"0")}`,{error:S}=await z.from("garages").update({invoice_counter:d,invoice_sequence:d}).eq("id",t);if(S)throw S;return{invoiceNumber:v,nextCounter:d}},Ft=async()=>{var J,ue,x,R,Q,U,F;const t=(J=n.activeGarage)==null?void 0:J.id;if(!t)throw new Error("Geen garage gevonden voor deze gebruiker.");const r=be(((ue=k.voertuig)==null?void 0:ue.kenteken)??"");if(r.length<6)throw new Error("Voer eerst een geldig kenteken in.");if(W!=="success")throw new Error("Haal eerst RDW voertuiggegevens op.");const a=ye(k),o=await qt(t),s=`wb-${String(Date.now()).slice(-4)}`,d=String(o.invoiceNumber||"").trim()||`F-${String(Date.now()%1e5).padStart(6,"0")}`,v=new Date().toISOString(),S=je((x=k.klant)==null?void 0:x.naam,r),L=String(((R=k.voertuig)==null?void 0:R.title)??"").trim()||"Voertuig",T=yn(k),V={werkbon_id:s,status:"draft",werkbon_created:!0,customer_name:S,customer_email:String(((Q=k.klant)==null?void 0:Q.email)??"").trim(),customer_phone:String(((U=k.klant)==null?void 0:U.telefoon)??"").trim(),car_model:L,service_types:T,km_stand:0,vat_enabled:B(k.btw)>0,description:String(((F=k.klant)==null?void 0:F.omschrijving)??"").trim(),internal_note:"",invoice_number:d,paid_at:ce?new Date().toISOString().slice(0,10):null,completed_at:v,parts:a.onderdelenRows.map(me=>({name:me.naam,quantity:me.aantal,price:me.prijs})),labour:{hours:a.labourHours,rate:a.labourRate},totals:{subtotal:a.subtotaal,vat:a.btwBedrag,total:a.totaal},payment_method:ce};return{garageId:t,kenteken:r,completedAt:v,completionNotes:V,serviceSummary:T.join(", "),werkbonId:s,invoiceNumber:d}},Ht=async()=>{if(!z)throw new Error("Supabase is niet geconfigureerd.");ge=!0,Y();try{const t=await Ft(),{data:r,error:a}=await z.from("completed_appointments").insert({garage_id:t.garageId,booking_id:null,completed_at:t.completedAt,appointment_date:t.completedAt.slice(0,10),appointment_time:t.completedAt.slice(11,19),license_plate:t.kenteken,service:t.serviceSummary||"Onderhoud",completion_notes:JSON.stringify(t.completionNotes)}).select("id, booking_id, garage_id, completed_at, created_at, license_plate, service, completion_notes").single();if(a)throw a;const o=Tt(r);M=[o,...M],C=o.id,O(`Werkbon ${t.werkbonId} opgeslagen als ${t.invoiceNumber}.`),We()}finally{ge=!1,q()}},jt=async()=>{var v,S,L;const t=await Qe(),r=ye(k),a=new t({unit:"pt",format:"a4"}),o=String(((v=k.voertuig)==null?void 0:v.kenteken)??"-"),i=je((S=k.klant)==null?void 0:S.naam,o),s=String(((L=k.klant)==null?void 0:L.omschrijving)??"").trim();let d=56;a.setFont("helvetica","bold"),a.setFontSize(18),a.text("Werkbon / Factuur",42,d),d+=26,a.setFont("helvetica","normal"),a.setFontSize(11),a.text(`Datum: ${new Date().toLocaleDateString("nl-NL")}`,42,d),d+=16,a.text(`Kenteken: ${o}`,42,d),d+=16,a.text(`Klant: ${i}`,42,d),d+=16,s&&(a.text(`Omschrijving: ${s}`,42,d,{maxWidth:520}),d+=22),a.setFont("helvetica","bold"),a.text("Onderdelen",42,d),d+=16,a.setFont("helvetica","normal"),r.onderdelenRows.forEach(T=>{a.text(`${T.naam}  x${T.aantal}  ${h(T.prijs)}  ${h(T.totaal)}`,42,d),d+=14}),d+=12,a.text(`Arbeid: ${h(r.arbeidTotaal)}`,42,d),d+=14,a.text(`Subtotaal: ${h(r.subtotaal)}`,42,d),d+=14,a.text(`BTW: ${h(r.btwBedrag)}`,42,d),d+=14,a.setFont("helvetica","bold"),a.text(`Totaal: ${h(r.totaal)}`,42,d),a.save(`werkbon-${be(o)||"nieuw"}.pdf`)},Bt=async()=>{var o,i,s;if(!z)throw new Error("Supabase is niet geconfigureerd.");const t=String(((o=k.klant)==null?void 0:o.email)??"").trim();if(!t)throw new Error("Geen e-mailadres beschikbaar.");const r=ye(k),{error:a}=await z.functions.invoke("send-werkbon-email",{body:{to:t,template:"werkbon_factuur_nl",subject:`Werkbon ${Ce(((i=k.voertuig)==null?void 0:i.kenteken)??"")}`,customerName:String(((s=k.klant)==null?void 0:s.naam)??"Klant"),total:r.totaal}});if(a)throw a},Wt=()=>{var o,i,s;const t=String(((o=k.klant)==null?void 0:o.telefoon)??"").replace(/[^0-9]/g,""),r=ye(k),a=`Hallo ${String(((i=k.klant)==null?void 0:i.naam)??"")}, uw werkbon (${Ce(((s=k.voertuig)==null?void 0:s.kenteken)??"")}) staat klaar. Totaal: ${h(r.totaal)}.`;window.open(`https://wa.me/${encodeURIComponent(t)}?text=${encodeURIComponent(a)}`,"_blank","noopener,noreferrer")},Ee=()=>{const t=m.querySelector("#vehicleLookupStatus");if(t instanceof HTMLElement){if(t.classList.remove("is-success","is-error"),W==="loading"){t.textContent="Kenteken controleren...";return}if(W==="success"){t.textContent="Kenteken gevonden",t.classList.add("is-success");return}if(W==="error"){t.textContent="Kenteken niet gevonden",t.classList.add("is-error");return}t.textContent="Typ kenteken om te zoeken"}},Me=()=>{const t=m.querySelector('[data-create-action="next-step"]');if(t instanceof HTMLButtonElement){if(j===1){t.disabled=W!=="success";return}t.disabled=j===5}},rt=()=>{var S,L,T,V,J;const t=m.querySelector("#vehiclePreviewTitle"),r=m.querySelector("#vehiclePreviewBuildYear"),a=m.querySelector("#vehiclePreviewApk"),o=m.querySelector("#vehiclePreviewColor"),i=m.querySelector("#vehiclePreviewFuel");if(!(t instanceof HTMLElement)||!(r instanceof HTMLElement)||!(a instanceof HTMLElement)||!(o instanceof HTMLElement)||!(i instanceof HTMLElement))return;const s=String(((S=k.voertuig)==null?void 0:S.title)??"").trim(),d=String(((L=k.voertuig)==null?void 0:L.buildYear)??"").trim(),v=d?`${s||"Voertuig gegevens"} (${d})`:s||"Voertuig gegevens";t.textContent=v,r.textContent=d,a.textContent=String(((T=k.voertuig)==null?void 0:T.apkExpiryDate)??"").trim(),o.textContent=String(((V=k.voertuig)==null?void 0:V.color)??"").trim(),i.textContent=String(((J=k.voertuig)==null?void 0:J.fuel)??"").trim()},Ot=()=>{const t=ye(k),r=m.querySelector("[data-parts-subtotal-value]");r instanceof HTMLElement&&(r.textContent=h(t.onderdelenSubtotaal)),m.querySelectorAll("[data-part-total-index]").forEach(o=>{if(!(o instanceof HTMLElement))return;const i=Number(o.getAttribute("data-part-total-index")??-1),s=t.onderdelenRows[i];s&&(o.textContent=h(s.totaal))})},Re=()=>{const t=ye(k),r={arbeid:h(t.arbeidTotaal),subtotaal:h(t.subtotaal),btw:h(t.btwBedrag),totaal:h(t.totaal)};m.querySelectorAll("[data-create-total]").forEach(o=>{if(!(o instanceof HTMLElement))return;const i=String(o.getAttribute("data-create-total")??"");i in r&&(o.textContent=r[i])})},Rt=()=>{var a;const t=!!((a=k.arbeid)!=null&&a.enabled);m.querySelectorAll("[data-arbeid-field]").forEach(o=>{if(o instanceof HTMLInputElement){if(o.getAttribute("data-arbeid-field")==="enabled"){o.checked=t;return}o.disabled=!t}}),Re()},ot=async({showShortInputError:t=!1}={})=>{var o;const r=be(((o=k.voertuig)==null?void 0:o.kenteken)??"");if(r.length<6){W="idle",se=t?"Voer minimaal 6 tekens in voor het kenteken.":"",Ee(),Me();return}const a=++$e;W="loading",se="",Ee(),Me();try{const i=await St(r);if(a!==$e)return;if(!i){W="error",se="Geen RDW voertuig gevonden voor dit kenteken.",k.voertuig={...k.voertuig,title:"",buildYear:"",apkExpiryDate:"",color:"",fuel:""},Ee(),rt(),Me();return}k.voertuig={...k.voertuig,kenteken:Ce(r),...i},W="success",se="",Ee(),rt(),Me()}catch{if(a!==$e)return;W="error",se="RDW service is momenteel niet beschikbaar.",Ee(),Me()}},Ie=(t,r)=>{M=M.map(a=>a.id===t?Pt(r(a)):a)},zt=t=>M.find(r=>r.id===t)??null,ze=t=>{var r;return String((t==null?void 0:t.garageId)||((r=n.activeGarage)==null?void 0:r.id)||"")},Gt=t=>{if(!(E instanceof HTMLElement))return null;const r=E.querySelectorAll("[data-werkbon-row-id]");for(const a of r)if(a instanceof HTMLElement&&String(a.dataset.werkbonRowId??"")===String(t))return a;return null},Ge=async(t,r)=>{if(!z)throw new Error("Supabase is niet geconfigureerd.");const a=String(t.completedAppointmentId||t.id||"");if(!a)throw new Error("Werkbon ID ontbreekt.");const o=ze(t);let i=z.from("completed_appointments").select("id, garage_id, completion_notes").eq("id",a);o&&(i=i.eq("garage_id",o));const{data:s,error:d}=await i.maybeSingle();if(d)throw d;if(!s)throw new Error("Werkbon niet gevonden.");const S={...nt(s.completion_notes),...r};let L=z.from("completed_appointments").update({completion_notes:JSON.stringify(S)}).eq("id",a);o&&(L=L.eq("garage_id",o));const{error:T}=await L;if(T)throw T;return S},Ke=async t=>{const r=zt(t);if(!r)throw new Error("Werkbon niet gevonden.");const a=String(r.completedAppointmentId||r.id||"");if(!a||!z){const S=String(r.invoiceNumber||"").trim();return{invoice:r,customer_name:r.customerName,customer_email:"",customer_phone:"",factuurnummer:S,total:r.summary.total,status:r.status}}const o=ze(r);let i=z.from("werkbonnen").select("werkbon_id, garage_id, customer_name, customer_email, customer_phone, invoice_number, total_amount, invoice_status, payment_link, payment_link_sent_at, payment_method").eq("werkbon_id",a);o&&(i=i.eq("garage_id",o));const{data:s,error:d}=await i.maybeSingle();if(d)throw d;const v=Number((s==null?void 0:s.total_amount)??0);return{invoice:r,customer_name:String((s==null?void 0:s.customer_name)??r.customerName??"Klant"),customer_email:String((s==null?void 0:s.customer_email)??"").trim(),customer_phone:String((s==null?void 0:s.customer_phone)??"").trim(),factuurnummer:String((s==null?void 0:s.invoice_number)??r.invoiceNumber??"").trim(),total:Number.isFinite(v)&&v>0?v:r.summary.total,status:Ne({status:(s==null?void 0:s.invoice_status)??r.status??"draft",paymentLink:(s==null?void 0:s.payment_link)??r.paymentLink,paymentLinkSentAt:(s==null?void 0:s.payment_link_sent_at)??r.paymentLinkSentAt,paidAt:r.paidAt}),payment_link:String((s==null?void 0:s.payment_link)??"").trim(),payment_link_sent_at:String((s==null?void 0:s.payment_link_sent_at)??"").trim(),payment_method:String((s==null?void 0:s.payment_method)??"").trim()}},it=(t,r)=>{Ie(t,a=>({...a,status:tt(r)}))},Ue=async t=>t.customer_email?(await Ge(t.invoice,{status:"link_sent"}),it(t.invoice.id,"link_sent"),P("Factuur verstuurd per e-mail ✓","success"),!0):(P("Geen e-mailadres bekend voor deze klant","error"),!1),qe=async(t,{includePaymentLink:r=!0}={})=>{var R,Q;if(!t.customer_phone)return P("Geen telefoonnummer bekend voor deze klant","error"),!1;const a=Je(t.customer_phone);if(!a)return P("Geen telefoonnummer bekend voor deze klant","error"),!1;const o=I||n.activeGarage,i=String((o==null?void 0:o.mollieMethod)||"none"),s=Math.max(1,parseInt(String((o==null?void 0:o.paymentDays)??14),10)||14),d=String((o==null?void 0:o.garageName)||(o==null?void 0:o.name)||"Uw garage");let v=null;if(r){try{v=await nn(o,{totalAmount:t.total,factuurnummer:t.factuurnummer||"",customerName:t.customer_name||"Klant",paymentDays:s,completedAppointmentId:((R=t.invoice)==null?void 0:R.completedAppointmentId)||((Q=t.invoice)==null?void 0:Q.id)||""},U=>P(U,"error"),z)}catch{}if(i!=="none"&&!v)return P("Geen betaallink gemaakt. Controleer Mollie API-sleutel/instellingen en probeer opnieuw.","error"),!1}const L=String((o==null?void 0:o.payment_method)||(o==null?void 0:o.paymentMethod)||"mollie").toLowerCase()==="tikkie"?"Tikkie":"Mollie iDEAL",T=`€${Xe(t.total)}`,V=new Date().toLocaleDateString("nl-NL"),J=String((o==null?void 0:o.whatsapp_template)||(o==null?void 0:o.whatsappTemplate)||"").trim();let ue="";if(J)ue=_n(J,{customerName:t.customer_name||"klant",garageName:d,invoiceNumber:t.factuurnummer||t.invoice.id||"-",amountText:T,paymentDays:s,paymentLink:r&&(v||t.payment_link)||"",paymentMethodLabel:L,today:V,licensePlate:t.invoice.licensePlate||"",carModel:t.invoice.carModel||"Voertuig"});else{const U=[`Beste ${t.customer_name||"klant"},`,"",`Hierbij uw factuur van ${d}.`,"",`Factuurnummer: ${t.factuurnummer||"-"}`,`Totaalbedrag: ${T}`,`Betaaltermijn: ${s} dagen`];r&&v&&U.push("",`Betaal eenvoudig via ${L}:`,v),U.push("","Met vriendelijke groet,",d),ue=U.join(`
`)}const x=`https://wa.me/${encodeURIComponent(a)}?text=${encodeURIComponent(ue)}`;if(window.open(x,"_blank","noopener,noreferrer"),r&&v)try{await Ge(t.invoice,{status:t.invoice.status!=="paid"?"link_sent":t.invoice.status,payment_link:v,payment_link_sent_at:new Date().toISOString(),payment_method:"mollie"});const U=new Date().toISOString(),F=M.findIndex(me=>me.id===t.invoice.id);F!==-1&&(M[F]={...M[F],status:M[F].status!=="paid"?"link_sent":M[F].status,paymentLink:v,paymentLinkSentAt:U,paymentMethod:"mollie"})}catch{}else it(t.invoice.id,"link_sent");return P("WhatsApp bericht geopend ✓","success"),!0},Kt=async(t,r)=>{var J,ue;const a=await Ke(r),o=!!a.customer_email,i=!!Je(a.customer_phone),s=String((I==null?void 0:I.quote_prefix)??((J=n.activeGarage)==null?void 0:J.quotePrefix)??"OFF-"),d=Number((I==null?void 0:I.quote_counter)??((ue=n.activeGarage)==null?void 0:ue.quoteCounter)??1),v=Number.isFinite(d)&&d>0?d:1,S=`${s}${String(v).padStart(3,"0")}`,L=String(a.factuurnummer||a.invoice.invoiceNumber||a.invoice.id||"factuur").trim(),T=async()=>{const x=await Qe();return Mt({jsPDFCtor:x,invoice:{...a.invoice,invoiceNumber:L},customerEmail:a.customer_email,customerPhone:a.customer_phone,garageProfile:I,pdfSettings:_e,documentType:"factuur",documentNumber:L})},V=async()=>{const x=await Qe();return Mt({jsPDFCtor:x,invoice:{...a.invoice,invoiceNumber:S},customerEmail:a.customer_email,customerPhone:a.customer_phone,garageProfile:I,pdfSettings:_e,documentType:"offerte",documentNumber:S})};return yt({triggerButton:t,title:"📄 PDF Acties",options:[{id:"download",icon:"⬇️",title:"Downloaden",description:"Sla de factuur op als PDF",onSelect:async x=>{x.setLoading("download",!0);try{const R=await T(),Q=`${L||"factuur"}.pdf`,U=URL.createObjectURL(R),F=document.createElement("a");F.href=U,F.download=Q,F.click(),URL.revokeObjectURL(U),x.forceClose(),P("PDF wordt gedownload ✓","success")}catch{P("PDF genereren mislukt","error")}finally{x.setLoading("download",!1)}}},{id:"quote-download",icon:"🧾",title:"Offerte downloaden",description:`Sla een offerte op als PDF (${S})`,onSelect:async(x,R)=>{x.setLoading(R,!0);try{const Q=await V(),U=`${S||a.invoice.id||"offerte"}.pdf`,F=URL.createObjectURL(Q),me=document.createElement("a");me.href=F,me.download=U,me.click(),URL.revokeObjectURL(F),x.forceClose(),P("Offerte PDF wordt gedownload ✓","success")}catch{P("Offerte PDF genereren mislukt","error")}finally{x.setLoading(R,!1)}}},{id:"print",icon:"🖨️",title:"Afdrukken",description:"Print direct naar printer",onSelect:async(x,R)=>{x.setLoading(R,!0);try{const Q=await T(),U=URL.createObjectURL(Q),F=window.open(U,"_blank","noopener,noreferrer");if(!F)throw new Error("Popup blocked");F.addEventListener("load",()=>{F.print(),F.addEventListener("afterprint",()=>{try{F.close()}catch{}URL.revokeObjectURL(U)},{once:!0})},{once:!0}),x.forceClose(),P("Print dialoog geopend ✓","success")}catch{P("Afdrukken mislukt","error")}finally{x.setLoading(R,!1)}}},{id:"email",icon:"📧",title:"Stuur via E-mail",description:o?"Verstuur naar klant e-mail":"⚠️ Geen e-mailadres bekend. Voeg een e-mailadres toe aan deze werkbon.",disabled:!o,onSelect:async(x,R)=>{x.setLoading(R,!0);const Q=await Ue(a);x.setLoading(R,!1),Q&&(x.forceClose(),q())}},{id:"whatsapp",icon:"💬",title:"Stuur via WhatsApp",description:i?"Deel alleen de factuur via WhatsApp (zonder betaallink)":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.",disabled:!i,onSelect:async(x,R)=>{x.setLoading(R,!0);const Q=await qe(a,{includePaymentLink:!1});x.setLoading(R,!1),Q&&(x.forceClose(),q())}}]})},Ut=async(t,r)=>{var v;const a=await Ke(r),o=a.invoice,i=!!Je(a.customer_phone),d=String(((v=I||n.activeGarage)==null?void 0:v.mollieMethod)||"none")!=="none";return yt({triggerButton:t,title:"💳 Betaalmethode",subtitle:`Totaal te betalen: €${Xe(a.total)}`,options:[{id:"cash",icon:"💵",title:"Contant",description:"Registreer contante betaling",onSelect:async S=>{S.setBodyContent(`
              <div class="action-popup-confirm">
                <p class="action-popup-confirm-title">Bevestig contante betaling</p>
                <p class="action-popup-confirm-subtitle">€${c(Xe(a.total))} ontvangen?</p>
                <div class="action-popup-confirm-actions">
                  <button type="button" class="button subtle" data-popup-cancel>Annuleren</button>
                  <button type="button" class="button" data-popup-confirm>✓ Bevestigen</button>
                </div>
              </div>
            `,L=>{const T=L.querySelector("[data-popup-cancel]"),V=L.querySelector("[data-popup-confirm]");T==null||T.addEventListener("click",()=>S.forceClose()),V==null||V.addEventListener("click",async()=>{await lt(o.id,t),S.forceClose(),q(),P("Contante betaling geregistreerd ✓","success")})})}},{id:"mollie_whatsapp",icon:"💬",title:"Betaallink via WhatsApp",description:d?i?"Stuur iDEAL link naar klant":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.":"⚠️ Geen Mollie account verbonden. Ga naar Instellingen → Betalingen.",disabled:!d||!i,onSelect:async(S,L)=>{S.setLoading(L,!0);const T=await qe(a);S.setLoading(L,!1),T&&(S.forceClose(),q(),P("Betaallink verstuurd via WhatsApp ✓","success"))}}]})},Vt=(t,r)=>{_();const a=t.getBoundingClientRect(),o=document.createElement("div");o.className="send-dropdown",o.setAttribute("data-send-dropdown","true"),o.innerHTML=`
      <button type="button" data-send-option="email" data-werkbon-id="${c(r.invoice.id)}">
        📧 Per e-mail ${r.customer_email?"":'<span class="send-dropdown-muted">(geen e-mail)</span>'}
      </button>
      <button type="button" data-send-option="whatsapp" data-werkbon-id="${c(r.invoice.id)}">
        💬 Via WhatsApp ${r.customer_phone?"":'<span class="send-dropdown-muted">(geen telefoon)</span>'}
      </button>
      <button type="button" data-send-option="both" data-werkbon-id="${c(r.invoice.id)}">
        📤 Beide versturen
      </button>
    `,document.body.append(o);const i=window.innerWidth,s=window.innerHeight,d=o.getBoundingClientRect(),v=Math.max(8,Math.min(a.left,i-d.width-8)),S=a.bottom+d.height+8>s?Math.max(8,a.top-d.height-8):a.bottom+6;o.style.left=`${Math.round(v)}px`,o.style.top=`${Math.round(S)}px`,de=o,g=r},xe=(t,r)=>{if(!(t instanceof HTMLButtonElement))return()=>{};const a=t.textContent||"";return t.disabled=!0,t.textContent=r,()=>{t.disabled=!1,t.textContent=a}},Yt=t=>new Promise(r=>{const a=Gt(t);if(!(a instanceof HTMLElement)){r();return}a.classList.add("werkbon-row-removing"),window.setTimeout(r,220)}),Ve=(t,r=!1)=>{K=t,ne=!0,H=r?t:"",q()},st=(t,r)=>{const a=M.find(o=>o.id===t);if(a){if(a.status==="paid"){O(`Invoice for ${ve(a.licensePlate)} is already paid.`),Ve(t,!1);return}Ie(t,o=>({...o,status:"link_sent"})),O(`Werkbon sent to customer via ${r}.`),Ve(t,!1)}},lt=async(t,r)=>{const a=M.find(s=>s.id===t);if(!a)return;if(a.status==="paid"){O(`Invoice for ${ve(a.licensePlate)} is already marked as paid.`),Ve(t,!1);return}if(!await oe({title:"Werkbon markeren als betaald?",body:"Dit registreert de betaling als vandaag ontvangen.",confirmLabel:"Markeer als betaald",cancelLabel:"Annuleren"}))return;const i=xe(r,"Opslaan...");try{await Ge(a,{status:"paid",payment_method:"manual",payment_date:new Date().toISOString()}),Ie(t,s=>({...s,status:"paid"})),P("Werkbon gemarkeerd als betaald ✓","success"),q()}catch{P("Er ging iets mis","error"),i();return}i()},Qt=t=>{const r=M.find(S=>S.id===t);if(!r||!(f instanceof HTMLElement))return;const a=f.querySelector("[data-werkbon-edit-status]"),o=f.querySelector("[data-werkbon-edit-hours]"),i=f.querySelector("[data-werkbon-edit-rate]");if(!(a instanceof HTMLSelectElement)||!(o instanceof HTMLInputElement)||!(i instanceof HTMLInputElement))return;const s=tt(a.value),d=Math.max(0,Number(o.value||r.labour.hours)),v=Math.max(0,Number(i.value||r.labour.rate));Ie(t,S=>({...S,status:s,labour:{...S.labour,hours:d,rate:v}})),H="",K=t,ne=!0,O("Werkbon updated."),q()},Jt=async(t,r)=>{const a=M.find(s=>s.id===t);if(!a||!await oe({title:"Werkbon verwijderen?",body:"Deze actie kan niet ongedaan worden gemaakt. De werkbon wordt permanent verwijderd.",confirmLabel:"Verwijderen",cancelLabel:"Annuleren",confirmClassName:"danger"}))return;const i=xe(r,"Opslaan...");try{if(!z)throw new Error("Supabase is niet geconfigureerd.");const s=String(a.completedAppointmentId||a.id||"");if(!s)throw new Error("Werkbon ID ontbreekt.");let d=z.from("completed_appointments").delete().eq("id",s);const v=ze(a);v&&(d=d.eq("garage_id",v));const{error:S}=await d;if(S)throw S}catch{P("Verwijderen mislukt","error"),i();return}await Yt(t),M=M.filter(s=>s.id!==t),C===t&&(C=""),K===t&&(K="",ne=!1,H=""),P("Werkbon verwijderd","success"),_(),q(),i()},Xt=async(t,r,a)=>{var o;if(t==="view"){Ye("werkbonDetail",{selectedWerkbonId:r,editMode:!1}),window.location.href=Ze(`werkbon-detail.html?id=${encodeURIComponent(r)}`);return}if(t==="edit"){Ye("werkbonDetail",{selectedWerkbonId:r,editMode:!0}),window.location.href=Ze(`werkbon-detail.html?id=${encodeURIComponent(r)}&edit=true`);return}if(t==="cancel-edit"){H="",ne=!1,q();return}if(t==="save-edit"){Qt(r);return}if(t==="pdf-actions"){if(!(a instanceof HTMLButtonElement))return;const i=xe(a,"Laden...");try{await Kt(a,r)}catch{P("Er ging iets mis","error")}i();return}if(t==="payment-actions"){if(!(a instanceof HTMLButtonElement))return;const i=xe(a,"Laden...");try{await Ut(a,r)}catch{P("Er ging iets mis","error")}i();return}if(t==="send-customer"){if(!(a instanceof HTMLButtonElement))return;if(((o=g==null?void 0:g.invoice)==null?void 0:o.id)===r&&de instanceof HTMLElement){_();return}const i=xe(a,"Laden...");try{const s=await Ke(r);Vt(a,s)}catch{P("Er ging iets mis","error")}i();return}if(t==="send-sms"){st(r,"SMS");return}if(t==="send-whatsapp"){st(r,"WhatsApp");return}if(t==="mark-paid"){await lt(r,a);return}if(t==="download-pdf"){const i=M.find(d=>d.id===r);if(!i)return;const s=Fn(i);O(s?"Print dialog opened for PDF export.":"Allow pop-ups to export this werkbon as PDF.");return}t==="delete"&&await Jt(r,a)},q=()=>{if(!(l instanceof HTMLElement)||!(E instanceof HTMLElement)||!(f instanceof HTMLElement)||!(m instanceof HTMLElement))return;const t=$ instanceof HTMLSelectElement?$.value:"all",r=A instanceof HTMLInputElement?A.value.trim().toLowerCase():"",a=[...M].sort((i,s)=>{var d,v;return((d=Pe(s.completedAt))==null?void 0:d.getTime())-((v=Pe(i.completedAt))==null?void 0:v.getTime())}).filter(i=>{const s=[i.licensePlate,i.customerName,i.carModel].join(" ").toLowerCase(),d=!r||s.includes(r),v=t==="all"||Ne(i)===t;return d&&v});l.innerHTML=En(M),E.innerHTML=a.length?a.map(i=>Dt(i,C===i.id)).join(""):Dn(a,!!(r||t!=="all"));const o=M.find(i=>i.id===K)??null;f.classList.toggle("is-open",ne&&!!o),f.innerHTML=ne&&o?An(o,H===o.id):"",Y(),De()};D==null||D.addEventListener("click",()=>{ie=!0,j=1,Y({forceMount:!0,refreshContent:!0})});const ct=async t=>{const r=t.closest("[data-create-action]");if(!(r instanceof HTMLElement))return!1;const a=String(r.dataset.createAction??"");if(a==="attempt-close")return r.classList.contains("werkbon-create-shadow")&&t.closest(".werkbon-create-panel")||await Oe(),!0;if(a==="jump-step"){const o=Number(r.dataset.step??j);return j=Math.min(5,Math.max(1,o)),le=!1,Y({refreshContent:!0}),!0}if(a==="prev-step")return j=Math.max(1,j-1),Y({refreshContent:!0}),!0;if(a==="next-step")return j===1&&W!=="success"&&(Z&&(window.clearTimeout(Z),Z=0),await ot({showShortInputError:!0})),j===1&&W!=="success"?(O("Rond eerst de RDW validatie af."),!0):(j=Math.min(5,j+1),Y({refreshContent:!0}),!0);if(a==="remove-part"){const o=Number(r.dataset.partIndex??-1);return Number.isFinite(o)&&o>=0&&(k.onderdelen.splice(o,1),Y({refreshContent:!0})),!0}if(a==="quick-part")return k.onderdelen.push({naam:String(r.dataset.partName??"Onderdeel"),aantal:1,prijs:B(r.dataset.partPrice,0)}),Y({refreshContent:!0}),!0;if(a==="add-manual-part")return k.onderdelen.push({naam:"",aantal:1,prijs:0}),Y({refreshContent:!0}),!0;if(a==="open-payment")return le=!0,Y(),!0;if(a==="close-payment")return le=!1,Y(),!0;if(a==="select-payment")return ce=String(r.dataset.paymentMethod??""),le=!1,O(`Betaalmethode gekozen: ${ce}.`),Y(),!0;if(a==="save-werkbon"){try{await Ht()}catch(o){O(o instanceof Error?o.message:"Opslaan mislukt.")}return!0}if(a==="create-pdf"){try{await jt(),O("PDF gegenereerd.")}catch(o){O(o instanceof Error?o.message:"PDF genereren mislukt.")}return!0}if(a==="email-werkbon"){try{await Bt(),O("Werkbon e-mail verstuurd.")}catch(o){O(o instanceof Error?o.message:"E-mail verzenden mislukt.")}return!0}return a==="whatsapp-werkbon"?(Wt(),O("WhatsApp bericht geopend."),!0):!1},dt=t=>{if(!(t instanceof HTMLElement)||!ie)return!1;if(t.matches("[data-create-field='kenteken']")){if(t instanceof HTMLInputElement){const r=Ce(t.value);t.value=r,k.voertuig={...k.voertuig,kenteken:r},W="idle",se="",Z&&(window.clearTimeout(Z),Z=0);const a=be(r),o=m.querySelector("#vehicleLookupStatus");o instanceof HTMLElement&&(o.classList.remove("is-success","is-error"),o.textContent=a.length>=6?"Kenteken controleren...":"Typ kenteken om te zoeken"),Me(),a.length>=6&&(Z=window.setTimeout(()=>{Z=0,ot()},420))}return!0}if(t.matches("[data-create-field='btw']"))return t instanceof HTMLSelectElement&&(k.btw=B(t.value,21),Re()),!0;if(t.matches("[data-klant-field]")){const r=String(t.getAttribute("data-klant-field")??"");if(!r)return!0;const a=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:"";return k.klant={...k.klant,[r]:a},!0}if(t.matches("[data-arbeid-field]")){const r=String(t.getAttribute("data-arbeid-field")??"");if(!r)return!0;const a={...k.arbeid};return r==="enabled"&&t instanceof HTMLInputElement?(a.enabled=t.checked,k.arbeid=a,Rt(),!0):(t instanceof HTMLInputElement&&(a[r]=B(t.value,r==="tarief"?65:0)),k.arbeid=a,Re(),!0)}if(t.matches("[data-part-field]")){const r=Number(t.getAttribute("data-part-index")??-1),a=String(t.getAttribute("data-part-field")??"");if(!Number.isFinite(r)||r<0||!a)return!0;const i={...k.onderdelen[r]??{naam:"",aantal:1,prijs:0}};return a==="naam"&&(i.naam=t instanceof HTMLInputElement?t.value:""),a==="aantal"&&(i.aantal=t instanceof HTMLInputElement?B(t.value,1):1),a==="prijs"&&(i.prijs=t instanceof HTMLInputElement?B(t.value,0):0),k.onderdelen[r]=i,Ot(),!0}return!1};m.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;r&&await ct(r)}),m.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&dt(r)}),m.addEventListener("keydown",t=>{t.key==="Escape"&&ie&&(t.preventDefault(),Oe())}),w.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;if(!r||await ct(r))return;const a=r.closest("[data-werkbon-action]");if(a instanceof HTMLElement){const i=String(a.dataset.werkbonAction??""),s=String(a.dataset.werkbonId??"");if(i==="close-modal"){ne=!1,H="",q();return}if(i==="toggle"){C=C===s?"":s,q();return}if(i==="close-drawer"){C="",H="",q();return}if(!s)return;await Xt(i,s,a);return}const o=r.closest("[data-werkbon-row-id]");if(o instanceof HTMLElement&&!r.closest("button, input, select, textarea, a")){const i=String(o.dataset.werkbonRowId??"");i&&(C=C===i?"":i,q())}});const ut=window.__werkbonDocumentClickHandler;typeof ut=="function"&&document.removeEventListener("click",ut);const mt=async t=>{const r=t.target instanceof Element?t.target:null;if(!r)return;const a=r.closest("[data-send-option]");if(a instanceof HTMLButtonElement&&g){t.preventDefault();const o=String(a.dataset.sendOption??""),i=g;_();try{o==="email"?await Ue(i):o==="whatsapp"?await qe(i):o==="both"&&(await Ue(i),await qe(i)),q()}catch{P("Er ging iets mis","error")}return}r.closest("[data-send-dropdown]")||r.closest('[data-werkbon-action="send-customer"]')||_()};window.__werkbonDocumentClickHandler=mt,document.addEventListener("click",mt),w.addEventListener("keydown",t=>{const r=t.target instanceof HTMLElement?t.target:null;if(r){if(t.key==="Escape"&&ie){t.preventDefault(),Oe();return}if((t.key==="Enter"||t.key===" ")&&r.matches("[data-werkbon-row-id]")){t.preventDefault();const a=String(r.dataset.werkbonRowId??"");a&&(C=C===a?"":a,q())}if(t.key==="Escape"&&ne){ne=!1,H="",q();return}t.key==="Escape"&&C&&(C="",q())}}),w.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&dt(r)}),A==null||A.addEventListener("input",q),$==null||$.addEventListener("change",q),await we(),await Te();try{let t=[];try{t=await en({garageIds:u})}catch{}M=t.filter(i=>nt(i.completion_notes).werkbon_created===!0).map(Tt).sort((i,s)=>new Date(s.completedAt??0).getTime()-new Date(i.completedAt??0).getTime());const r=new Set(M.map(i=>i.licensePlate).filter(i=>i&&i!=="UNKNOWN").map(i=>be(i)));for(const i of r)if(i&&!Le.has(i))try{const s=await St(i);s&&Le.set(i,s)}catch(s){console.error(`Failed to fetch vehicle for ${i}:`,s)}M=M.map(i=>{const s=be(i.licensePlate),d=Le.get(s)||wn(s);return{...i,carModel:d.title+(d.buildYear?` (${d.buildYear})`:"")||i.carModel}});const a=await cn({garageIds:u}),o=dn(a);if(b(o.unread),A instanceof HTMLInputElement&&ae&&(A.value=ae),$ instanceof HTMLSelectElement){const i=Array.from($.options).some(s=>s.value===fe);$.value=i?fe:"all"}C=Se||(((ht=M[0])==null?void 0:ht.id)??""),K=he,H=ke,K&&M.some(i=>i.id===K)&&(ne=!0)}catch(t){M=[],b(0),console.error(t)}q(),X&&(ie=!0,j=1,Y({forceMount:!0,refreshContent:!0}))}const jn=document.querySelector("#app");tn();Hn(jn);
