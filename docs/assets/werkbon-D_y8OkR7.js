import{C as Zt,n as en,X as tn,t as nt}from"./theme-DS55tFGy.js";/* empty css                      */import{S as ft,N as nn}from"./actionPopup-DiwfxwFC.js";import{n as an,r as rn,t as on,b as sn,P as ln,e as dn,a as cn,c as Xe,x as it,N as ae,W as je}from"./branding-DFlHPucr.js";import{h as fe,p as kt}from"./rdwService-B_7TgNhE.js";import{m as un}from"./confirmDialog-DOdHvhLG.js";const at={draft:{label:"Draft",className:"werkbon-status-draft"},link_sent:{label:"Link verstuurd",className:"werkbon-status-link-sent"},paid:{label:"Paid",className:"werkbon-status-paid"}},pn=new Map([["apk","apk"],["apk keuring","apk"],["keuring","apk"],["banden","banden"],["band","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"],["overig","other"],["overige","other"],["other","other"]]),wt=["Voertuig","Klant","Onderdelen","Arbeid","Overzicht"],mn=["contant","iDEAL","Mollie"],bn=[{label:"APK keuring",name:"APK keuring",price:45},{label:"Banden",name:"Banden",price:120},{label:"Remblokken voor",name:"Remblokken voor",price:85},{label:"Remblokken achter",name:"Remblokken achter",price:75},{label:"Olie",name:"Olie",price:35},{label:"Filters",name:"Filters",price:28},{label:"Accu",name:"Accu",price:95},{label:"Overige",name:"Overige",price:0}],vn="https://mkgfckxiusdcnqhethdy.supabase.co",gn="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",O=Zt(vn,gn);function ht(){return{voertuig:{},klant:{},onderdelen:[],arbeid:{enabled:!1,uren:0,minuten:0,tarief:65},btw:21}}function j(t,n=0){const c=Number(t);return Number.isFinite(c)&&c>=0?c:n}function Ne(t){const n=fe(t).slice(0,6);return n?n.replace(/(.{2})(?=.)/g,"$1-"):""}function Fe(t,n){const c=String(t??"").trim();if(c)return c;const u=fe(n);return u?Ne(u):"UNKNOWN"}function fn(t){var n,c,u,_,f,b,T;const d=String(((n=t==null?void 0:t.voertuig)==null?void 0:n.kenteken)??"").trim(),h=[(c=t==null?void 0:t.klant)==null?void 0:c.naam,(u=t==null?void 0:t.klant)==null?void 0:u.telefoon,(_=t==null?void 0:t.klant)==null?void 0:_.email,(f=t==null?void 0:t.klant)==null?void 0:f.omschrijving].some(M=>String(M??"").trim()),k=Array.isArray(t==null?void 0:t.onderdelen)&&t.onderdelen.some(M=>String((M==null?void 0:M.naam)??"").trim()||j(M==null?void 0:M.aantal)>0||j(M==null?void 0:M.prijs)>0),W=j((b=t==null?void 0:t.arbeid)==null?void 0:b.uren)*60+j((T=t==null?void 0:t.arbeid)==null?void 0:T.minuten);return!!(d||h||k||W>0)}function Se(t){var n,c,u,_;const f=(Array.isArray(t.onderdelen)?t.onderdelen:[]).map(L=>{const R=j(L==null?void 0:L.aantal),D=j(L==null?void 0:L.prijs);return{naam:String((L==null?void 0:L.naam)??"").trim()||"Onderdeel",aantal:R,prijs:D,totaal:re(R*D)}}),b=re(f.reduce((L,R)=>L+R.totaal,0)),T=j((n=t.arbeid)==null?void 0:n.uren)+j((c=t.arbeid)==null?void 0:c.minuten)/60,d=j((u=t.arbeid)==null?void 0:u.tarief,65),h=(_=t.arbeid)!=null&&_.enabled?re(T*d):0,k=re(b+h),W=j(t.btw)>0?.21:0,M=re(k*W),H=re(k+M);return{onderdelenRows:f,onderdelenSubtotaal:b,labourHours:T,labourRate:d,arbeidTotaal:h,subtotaal:k,btwBedrag:M,totaal:H}}function ge(t,n){return`<div class="werkbon-create-overview-row"><span>${l(t)}</span><strong>${l(n)}</strong></div>`}function He(t,n,c){return`<div class="werkbon-create-overview-row"><span>${l(n)}</span><strong data-create-total="${l(t)}">${l(c)}</strong></div>`}function Lt(t){return wt.map((n,c)=>{const u=c+1,_=u===t?"is-active":u<t?"is-done":"",f=u<t?"is-done":"",b=c<wt.length-1?`<span class="werkbon-create-step-separator ${f}" aria-hidden="true"></span>`:"";return`<button class="werkbon-create-step ${_}" type="button" data-create-action="jump-step" data-step="${u}"><span>${u}.</span>${l(n)}</button>${b}`}).join("")}function _t({step:t,state:n,rdwStatus:c}){var u,_,f,b,T,d,h,k,W,M,H,L,R,D;const F=Se(n),Q=String(((u=n.voertuig)==null?void 0:u.title)??"").trim(),ke=String(((_=n.voertuig)==null?void 0:_.buildYear)??"").trim(),Y=String(((f=n.voertuig)==null?void 0:f.apkExpiryDate)??"").trim(),X=ke?`${Q||"Voertuig gegevens"} (${ke})`:Q||"Voertuig gegevens",$e=c==="loading"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Kenteken controleren...</p>':c==="success"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-success">Kenteken gevonden</p>':c==="error"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-error">Kenteken niet gevonden</p>':'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Typ kenteken om te zoeken</p>';return t===1?`
      <div class="werkbon-create-body-step">
        <label class="werkbon-create-appointment-field">
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text" inputmode="text" maxlength="8" data-create-field="kenteken" value="${l(String(((b=n.voertuig)==null?void 0:b.kenteken)??""))}" placeholder="eg. 12-ABC-D1" required />
          ${$e}
        </label>
        <div class="vehicle-preview-card werkbon-create-vehicle-preview" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${l(X)}</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">${l(ke)}</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">${l(Y)}</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">${l(String(((T=n.voertuig)==null?void 0:T.color)??""))}</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">${l(String(((d=n.voertuig)==null?void 0:d.fuel)??""))}</strong></span>
          </div>
        </div>
      </div>
    `:t===2?`
      <div class="werkbon-create-body-step">
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input type="text" data-klant-field="naam" value="${l(String(((h=n.klant)==null?void 0:h.naam)??""))}" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" />
          </label>
          <label>
            Phone number
            <input type="tel" data-klant-field="telefoon" value="${l(String(((k=n.klant)==null?void 0:k.telefoon)??""))}" autocomplete="tel" placeholder="eg. 0624987172" />
          </label>
        </div>
        <label class="werkbon-create-appointment-field">
          Email
          <input type="email" data-klant-field="email" value="${l(String(((W=n.klant)==null?void 0:W.email)??""))}" autocomplete="email" placeholder="eg. klant@email.com" />
        </label>
        <label class="werkbon-create-appointment-field">
          Omschrijving
          <textarea rows="4" data-klant-field="omschrijving" placeholder="Optioneel">${l(String(((M=n.klant)==null?void 0:M.omschrijving)??""))}</textarea>
        </label>
      </div>
    `:t===3?`
      <div class="werkbon-create-body-step werkbon-create-parts-step">
        <div class="werkbon-create-section-copy">
          <label class="werkbon-create-section-title">Onderdelen</label>
          <p class="werkbon-create-section-subtitle">Voeg onderdelen en materialen toe aan de werkbon</p>
        </div>
        <div class="werkbon-create-quick-parts">
          ${bn.map(ne=>`<button class="werkbon-chip-button" type="button" data-create-action="quick-part" data-part-name="${l(ne.name)}" data-part-price="${l(String(ne.price))}">+ ${l(ne.label)}</button>`).join("")}
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
                ${n.onderdelen.map((ne,Z)=>`
                  <div class="werkbon-create-part-card">
                    <div class="werkbon-part-cell werkbon-part-cell-name">
                      <input type="text" class="werkbon-part-input" data-part-field="naam" data-part-index="${Z}" value="${l(String(ne.naam??""))}" placeholder="Onderdeel naam" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-price">
                      <div class="werkbon-currency-input">
                        <span class="werkbon-currency-symbol">€</span>
                        <input type="number" class="werkbon-part-input werkbon-part-input-price" min="0" step="0.01" data-part-field="prijs" data-part-index="${Z}" value="${l(String(ne.prijs??0))}" />
                      </div>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-quantity">
                      <input type="number" class="werkbon-part-input" min="1" step="1" data-part-field="aantal" data-part-index="${Z}" value="${l(String(ne.aantal??1))}" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-total">
                      <strong data-part-total-index="${Z}">${l(S(re(j(ne.aantal,1)*j(ne.prijs))))}</strong>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-remove">
                      <button class="werkbon-remove-button" type="button" data-create-action="remove-part" data-part-index="${Z}" aria-label="Verwijder onderdeel" title="Verwijder">
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
          <strong data-parts-subtotal-value="true">${l(S(F.onderdelenSubtotaal))}</strong>
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
            <option value="21" ${j(n.btw)>0?"selected":""}>21%</option>
            <option value="0" ${j(n.btw)===0?"selected":""}>Geen BTW</option>
          </select>
        </label>
        <div class="werkbon-create-calculation-card">
          ${He("arbeid","Arbeid",S(F.arbeidTotaal))}
          ${He("subtotaal","Subtotaal",S(F.subtotaal))}
          ${He("btw","BTW",S(F.btwBedrag))}
          ${He("totaal","Totaal",S(F.totaal))}
        </div>
      </div>
    `:`
    <div class="werkbon-create-body-step werkbon-create-overview">
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Voertuig</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="1">Bewerken</button></div>
        ${ge("Kenteken",String(((H=n.voertuig)==null?void 0:H.kenteken)??"-"))}
        ${ge("Voertuig",Q||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Klant</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="2">Bewerken</button></div>
        ${ge("Naam",String(((L=n.klant)==null?void 0:L.naam)??"-")||"-")}
        ${ge("Email",String(((R=n.klant)==null?void 0:R.email)??"-")||"-")}
        ${ge("Telefoon",String(((D=n.klant)==null?void 0:D.telefoon)??"-")||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Onderdelen / Arbeid</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="3">Bewerken</button></div>
        ${ge("Onderdelen",S(F.onderdelenSubtotaal))}
        ${ge("Arbeid",S(F.arbeidTotaal))}
        ${ge("BTW",S(F.btwBedrag))}
        ${ge("Totaal",S(F.totaal))}
      </div>
    </div>
  `}async function Ze(){var t,n;if((t=window.jspdf)!=null&&t.jsPDF)return window.jspdf.jsPDF;if(await new Promise((c,u)=>{const _=document.querySelector('script[data-js-pdf-cdn="true"]');if(_){_.addEventListener("load",()=>c(),{once:!0}),_.addEventListener("error",()=>u(new Error("Kon jsPDF niet laden.")),{once:!0});return}const f=document.createElement("script");f.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",f.async=!0,f.dataset.jsPdfCdn="true",f.onload=()=>c(),f.onerror=()=>u(new Error("Kon jsPDF niet laden.")),document.head.append(f)}),!((n=window.jspdf)!=null&&n.jsPDF))throw new Error("jsPDF is niet beschikbaar.");return window.jspdf.jsPDF}function kn(t=""){return{title:fe(t)||"Voertuig",buildYear:""}}function wn(t){const n=String(t||"").trim();if(!n)return["other"];const c=n.split(n.includes(",")?/,/g:/\+|\/|&| and /gi).map(u=>u.trim()).filter(Boolean);return c.length?c:[n]}function hn(t){return pn.get(String(t||"").trim().toLowerCase())||"other"}function Mt(t){const n=String(t??"").trim(),c=it();if(!n)return{key:"other",label:je("other",c)};const u=n.toLowerCase(),_=[{probe:"apk",key:"apk"},{probe:"band",key:"banden"},{probe:"airco",key:"airco"},{probe:"occasion",key:"occasions"},{probe:"brake",key:"brakes"},{probe:"onderhoud",key:"onderhoud"},{probe:"service",key:"onderhoud"},{probe:"overig",key:"other"}],f=hn(n);let b=f;if(f==="other"){const T=_.find(d=>u.includes(d.probe));T&&(b=T.key)}if(b==="other"){if(["other","overig","overige"].includes(u))return{key:b,label:je("other",c)};const T=n.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:b,label:T||n||je("other",c)}}return{key:b,label:je(b,c)}}function yn(t){const n=Array.isArray(t==null?void 0:t.onderdelen)?t.onderdelen:[],c=new Set,u=[];for(const _ of n){const f=String((_==null?void 0:_.naam)??"").trim();if(!f)continue;const b=Mt(f),T=`${b.key}:${b.label.toLowerCase()}`;c.has(T)||(c.add(T),u.push(b.label))}return u.length?u:["Onderhoud"]}function Sn(t){return wn(t).map(n=>{const{key:c,label:u}=Mt(n);return`<span class="service-chip service-chip-${c}">${l(u)}</span>`}).join("")}function l(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function re(t){return Math.round(Number(t)*100)/100}function S(t){return`€${re(t).toFixed(2)}`}function et(t){const n=String(t??"").replace(/\D+/g,"");return n?n.startsWith("00")?n.slice(2):n.startsWith("0")?`31${n.slice(1)}`:n:""}function tt(t){const n=Number(t);return(Number.isFinite(n)?n:0).toFixed(2).replace(".",",")}function Pe(t){const n=new Date(t);return Number.isNaN(n.getTime())?null:n}function $n(t){if(!t)return"";const n=Pe(t);if(!n)return"";const c=n.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}),u=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${c} · ${u}`}function Tt(t){const n=Pe(t);return n?n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Unknown date"}function yt(t){return(Pe(t)||new Date).toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"})}function Ln(t){const n=String(t||"").trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(n)?{r:Number.parseInt(n.slice(0,2),16),g:Number.parseInt(n.slice(2,4),16),b:Number.parseInt(n.slice(4,6),16)}:null}function Ae(t,n,c=""){if(!t||typeof t!="object")return c;for(const u of n){const _=t[u];if(_!=null&&String(_).trim())return String(_).trim()}return c}function _n(t,n){return String(t||"").replace(/{{klant_naam}}/g,n.customerName||"klant").replace(/{{garage_naam}}/g,n.garageName||"Uw garage").replace(/{{factuur_nummer}}/g,n.invoiceNumber||"-").replace(/{{totaal_bedrag}}/g,n.amountText||"€0,00").replace(/{{betaaltermijn}}/g,String(n.paymentDays||14)).replace(/{{betaal_link}}/g,n.paymentLink||"").replace(/{{betaal_methode}}/g,n.paymentMethodLabel||"Mollie iDEAL").replace(/{{datum}}/g,n.today||new Date().toLocaleDateString("nl-NL")).replace(/{{kenteken}}/g,we(n.licensePlate||"")).replace(/{{auto_merk}}/g,n.carModel||"Voertuig")}async function St({jsPDFCtor:t,invoice:n,customerEmail:c="",customerPhone:u="",garageProfile:_,pdfSettings:f,documentType:b="factuur",documentNumber:T=""}){const d=new t({unit:"pt",format:"a4"}),h=d.internal.pageSize.getWidth(),k=40,W=String(b||"factuur").toLowerCase()==="offerte"?"offerte":"factuur",M=W==="offerte",H=($,de,Te)=>(M?(f==null?void 0:f[de])??(f==null?void 0:f[$]):f==null?void 0:f[$])??Te,L=String(H("primary_color","quote_primary_color",M?"#16A34A":"#2563EB")),R=String(H("font","quote_font","helvetica")).toLowerCase(),D=R.includes("times")||R.includes("georgia")?"times":R.includes("courier")?"courier":"helvetica",F=String(H("header_style","quote_header_style","professional")),Q=H("show_btw","quote_show_btw",!0)!==!1,ke=H("show_iban","quote_show_iban",!M)!==!1,Y=H("show_kvk","quote_show_kvk",!0)!==!1,X=H("show_customer","quote_show_customer",!0)!==!1,$e=H("show_vehicle","quote_show_vehicle",!0)!==!1,ne=String(H("payment_instruction_text","payment_instruction_text","Betaalinstructie: Gelieve binnen 14 dagen over te maken onder vermelding van het factuurnummer.")),Z=String(H("footer_text","quote_footer_text","")),Ce=String(H("quote_layout","quote_layout","proposal")),oe=Ln(L)||{r:37,g:99,b:235},Oe=W==="offerte"?"OFFERTE":"FACTUUR",We=W==="offerte"?"Offertenummer":"Factuurnummer",Be=String(T||n.invoiceNumber||n.id||"-").trim()||"-",x=Ae(_,["name","garage_name"],"Garage"),U=Ae(_,["address","adres"],"Adres onbekend"),ue=Ae(_,["btw_nummer","btw","vat_number"],"Onbekend"),ie=Ae(_,["kvk_nummer","kvk","chamber_of_commerce"],"Onbekend"),se=Ae(_,["iban"],"Onbekend"),be=80+(Q?14:0)+(Y?14:0),P=Math.max(128,be+16);d.setFillColor(oe.r,oe.g,oe.b),F==="modern"?(d.rect(0,0,h,P,"F"),d.setTextColor(255,255,255)):d.rect(0,0,h,4,"F"),F==="boxed"&&(d.setDrawColor(oe.r,oe.g,oe.b),d.rect(k-10,28,h-k*2+20,P-12)),F==="split"&&(d.setDrawColor(oe.r,oe.g,oe.b),d.line(h/2+10,40,h/2+10,P-10)),d.setFont(D,"bold"),d.setFontSize(18),d.text(Oe,k,48),d.setFont(D,"normal"),d.setFontSize(10);let G=66;d.text(x,k,G),G+=14,d.text(U,k,G),G+=14,Q&&d.text(`BTW nummer: ${ue}`,k,G),G+=14,Y&&d.text(`KVK nummer: ${ie}`,k,G);const pe=h-k-180;if(d.text(`${We}: ${Be}`,pe,94),d.text(`${M?"Offertedatum":"Factuurdatum"}: ${yt(n.completedAt)}`,pe,108),M){const $=new Date(n.completedAt||Date.now());$.setDate($.getDate()+14),d.text(`Geldig tot: ${yt($)}`,pe,122)}F==="modern"&&d.setTextColor(0,0,0);let g=Math.max(G+20,128);d.setDrawColor(224,228,236),d.line(k,g,h-k,g),g+=18;const q=g;let me=q,ee=q;if(X){let $=q;d.setFont(D,"bold"),d.text("Klant",k,$),d.setFont(D,"normal"),$+=14,d.text(n.customerName||"-",k,$),M&&Ce==="compact"||($+=14,d.text(`E-mail: ${c||"-"}`,k,$),$+=14,d.text(`Telefoon: ${u||"-"}`,k,$)),me=$}if($e){const $=X?h/2+20:k;let de=q;d.setFont(D,"bold"),d.text("Voertuig",$,de),d.setFont(D,"normal"),de+=14,d.text(n.carModel||"-",$,de),de+=14,d.text(`Kenteken: ${we(n.licensePlate)}`,$,de),ee=de}g=Math.max(me,ee)+24,(X||$e)&&(d.setDrawColor(224,228,236),d.line(k,g,h-k,g)),g+=20,d.setFont(D,"bold"),d.text("Onderdelen",k,g),g+=16;const he=k,v=k+280,Me=k+350,le=k+440;d.setFontSize(9),d.text("Product",he,g),d.text("Aantal",v,g),d.text("Prijs",Me,g),d.text("Totaal",le,g),g+=10,d.line(k,g,h-k,g),d.setFont(D,"normal"),d.setFontSize(10);for(const $ of n.parts)g+=16,g>700&&(d.addPage(),g=60),d.text($.name||"-",he,g),d.text(String($.quantity),v,g),d.text(S($.price),Me,g),d.text(S($.total),le,g);g+=22,d.setFont(D,"bold"),d.text("Arbeid",k,g),d.setFont(D,"normal"),g+=16,d.text(`${String(n.labour.hours||0)} x ${S(n.labour.rate||0)}/h`,k,g),d.text(S(n.labour.total||0),le,g),g+=18,d.line(k,g,h-k,g),g+=20;const ve=h-k-200;if(d.text("Subtotaal",ve,g),d.text(S(n.summary.subtotal),le,g),g+=16,d.text("BTW 21%",ve,g),d.text(S(n.summary.vat),le,g),g+=18,d.setFont(D,"bold"),d.setFontSize(12),d.text("Totaal",ve,g),d.text(S(n.summary.total),le,g),M&&(g+=12),g+=36,d.setFont(D,"normal"),d.setFontSize(10),ke&&W!=="offerte"&&(d.text(`IBAN: ${se}`,k,g),g+=14),!M){const $=String(ne||"").trim();$&&d.text($,k,g,{maxWidth:h-k*2})}if(Z){const $=d.internal.pageSize.getHeight();d.setTextColor(120,120,120),d.setFontSize(9),d.text(Z,k,$-24,{maxWidth:h-k*2}),d.setTextColor(0,0,0)}return d.output("blob")}function we(t){return String(t??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function rt(t){const n=String(t??"draft").trim().toLowerCase();return["paid","betaald"].includes(n)?"paid":["link_sent","link-sent","link sent","linkverstuurd","link_verstuurd","link verstuurd","sent","send","verzonden"].includes(n)?"link_sent":"draft"}function qe({status:t,paymentLink:n,paymentLinkSentAt:c,paidAt:u,paymentStatus:_}={}){const f=rt(t);if(f==="paid")return"paid";const b=String(_??"").trim().toLowerCase(),T=!!String(u??"").trim();if(b==="paid"||T)return"paid";const d=!!(String(n??"").trim()||String(c??"").trim());return f==="link_sent"||d?"link_sent":"draft"}function ot(t){if(!t)return{};if(typeof t=="object")return t;try{return JSON.parse(String(t))}catch{return{}}}function Mn(t){return String(t??"").split(",").map(n=>n.trim()).filter(Boolean)}function xt(t){var n,c;const u=(t.parts??[]).map(k=>{const W=Number(k.quantity??0),M=Number(k.price??0);return{name:String(k.name??"Item"),quantity:W,price:M,total:re(W*M)}}),_=Number(((n=t.labour)==null?void 0:n.hours)??0),f=Number(((c=t.labour)==null?void 0:c.rate)??0),b=re(_*f),T=re(u.reduce((k,W)=>k+W.total,0)+b),d=re(T*.21),h=re(T+d);return{id:String(t.id??""),completedAppointmentId:String(t.completedAppointmentId??""),bookingId:String(t.bookingId??""),garageId:String(t.garageId??""),licensePlate:String(t.licensePlate??"UNKNOWN"),customerName:Fe(t.customerName,t.licensePlate),carModel:String(t.carModel??"Unknown vehicle"),serviceTypes:Array.isArray(t.serviceTypes)?t.serviceTypes.map(String):["Other"],completedAt:t.completedAt,status:qe({status:t.status,paymentLink:t.paymentLink,paymentLinkSentAt:t.paymentLinkSentAt,paidAt:t.paidAt,paymentStatus:t.paymentStatus}),parts:u,labour:{hours:_,rate:f,total:b},summary:{subtotal:T,vat:d,total:h},paymentLink:String(t.paymentLink??""),paymentLinkSentAt:String(t.paymentLinkSentAt??""),paymentMethod:String(t.paymentMethod??""),paidAt:String(t.paidAt??"")}}function $t(t){const n=ot(t.completion_notes),c=Array.isArray(n.service_types)?n.service_types.map(String):Mn(t.service),u=n.labour&&typeof n.labour=="object"?n.labour:{},_=Array.isArray(n.parts)?n.parts:[{name:"Service",quantity:1,price:0}],f=qe({status:n.status,paymentLink:n.payment_link,paymentLinkSentAt:n.payment_link_sent_at,paidAt:n.paid_at??n.paidAt,paymentStatus:n.payment_status}),b=String(t.license_plate??"");return xt({id:String(t.id??""),completedAppointmentId:String(t.id??""),bookingId:String(t.booking_id??""),garageId:String(t.garage_id??""),licensePlate:b,customerName:Fe(n.customer_name??n.customerName,b),carModel:String(n.car_model||n.carModel||"Voertuig"),serviceTypes:c.length?c:["Service"],completedAt:String(t.completed_at??t.created_at??new Date().toISOString()),status:f,werkbonCreated:n.werkbon_created===!0,parts:_,labour:{hours:Number(u.hours??0),rate:Number(u.rate??0)},paymentLink:String(n.payment_link??""),paymentLinkSentAt:String(n.payment_link_sent_at??""),paymentMethod:String(n.payment_method??""),paidAt:String(n.paid_at??n.paidAt??"")})}function Tn(){const t=nt("werkbon-detail.html");if(document.head.querySelector(`link[rel="prefetch"][href="${t}"]`))return;const n=document.createElement("link");n.rel="prefetch",n.as="document",n.href=t,document.head.append(n)}function Et(t,n=""){const c=qe({status:t,paymentLink:n}),u=at[c]??at.draft;return`<span class="status-chip ${u.className}">${u.label}</span>`}function xn(t){const n=t.filter(b=>b.status!=="paid").reduce((b,T)=>b+T.summary.total,0),c=t.filter(b=>b.status==="link_sent").length,u=t.filter(b=>b.status==="draft").length,_=t.filter(b=>b.status==="paid").reduce((b,T)=>b+T.summary.total,0),f=it();return[{label:ae("outstandingRevenue",f),value:S(n),note:`${t.filter(b=>b.status!=="paid").length} ${ae("openWorkOrders",f)}`},{label:ae("readyToSend",f),value:String(u),note:ae("draftInvoicesWaitingDelivery",f)},{label:ae("inPaymentFlow",f),value:String(c),note:ae("workOrdersWithSentLink",f)},{label:ae("paidTotal",f),value:S(_),note:ae("completedPayments",f)}].map(b=>`
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${l(b.label)}</p>
          <strong class="werkbon-summary-value">${l(b.value)}</strong>
          <span class="metric-note">${l(b.note)}</span>
        </article>
      `).join("")}function En(t){const n=it();return`
    <div class="request-divider"></div>
    <div class="request-expanded werkbon-expanded">
      <div class="request-actions werkbon-bottom-actions">
        <button class="button subtle" type="button" data-werkbon-action="view" data-werkbon-id="${l(t.id)}">${l(ae("viewWorkOrder",n))}</button>
        <button class="button subtle" type="button" data-werkbon-action="edit" data-werkbon-id="${l(t.id)}">${l(ae("edit",n))}</button>
        <button class="button subtle werkbon-pdf-button" type="button" data-werkbon-action="pdf-actions" data-werkbon-id="${l(t.id)}">📄 ${l(ae("downloadPdf",n))} ▾</button>
        <button class="button werkbon-betalen-button" type="button" data-werkbon-action="payment-actions" data-werkbon-id="${l(t.id)}">💳 ${l(ae("payment",n))} ▾</button>
        <button class="button danger" type="button" data-werkbon-action="delete" data-werkbon-id="${l(t.id)}">${l(ae("delete",n))}</button>
      </div>
    </div>
  `}function An(t,n){if(!t)return"";const c=t.status==="paid"?"":`<button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${l(t.id)}">Mark as Paid</button>`;return`
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${l(we(t.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${l(t.customerName)} · ${l(Tt(t.completedAt))}</p>
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
              ${Et(t.status,t.paymentLink)}
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
                        <option value="link_sent" ${t.status==="link_sent"?"selected":""}>Link verstuurd</option>
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
                ${Dn(t)}
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
                  <strong>${l(S(t.labour.rate))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Total</span>
                  <strong>${l(S(t.labour.total))}</strong>
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
              <div><span>Subtotal</span><strong>${l(S(t.summary.subtotal))}</strong></div>
              <div><span>VAT (21%)</span><strong>${l(S(t.summary.vat))}</strong></div>
              <div class="werkbon-summary-total"><span>Total price</span><strong>${l(S(t.summary.total))}</strong></div>
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
                ${c}
              `}
        </div>
      </aside>
    </div>
  `}function At(t,n){const c=String(t.licensePlate??"").toUpperCase()==="UNKNOWN";return`
    <article class="request-card werkbon-card ${n?"is-expanded":""}" data-werkbon-row-id="${l(t.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          ${c?'<span class="fast-appt-dot" style="background: #2563EB" aria-hidden="true"></span>':`<span class="plate-chip">${l(we(t.licensePlate))}</span>`}
          <div class="request-info">
            <p class="request-name">${l(t.customerName)}</p>
            ${c?"":`<p class="request-vehicle">${l(t.carModel)}</p>`}
            <div class="request-services">${c?'<span class="service-chip service-chip-other">Simple appointment</span>':Sn(Array.isArray(t.serviceTypes)?t.serviceTypes.join(", "):t.serviceTypes)}</div>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${l(S(t.summary.total))}</strong>
          ${Et(t.status,t.paymentLink)}
          ${t.status==="paid"&&t.paidAt?`<span class="werkbon-paid-at">${l($n(t.paidAt))}</span>`:""}
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

      ${n?En(t):""}
    </article>
  `}function Nt(t){return`
    <div class="werkbon-payment-overlay" role="presentation">
      <div class="werkbon-payment-dialog" role="dialog" aria-modal="true" aria-labelledby="werkbonPaymentTitle">
        <h3 id="werkbonPaymentTitle">Kies betaalmethode</h3>
        <div class="werkbon-payment-grid">
          ${mn.map(n=>`
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
  `}function Nn({isOpen:t,step:n,state:c,rdwStatus:u,rdwError:_,selectedPaymentMethod:f,isSaving:b,paymentModalOpen:T}){if(!t)return"";const d=n===1&&u!=="success";return`
    <div class="werkbon-create-modal ${t?"is-open":""}" role="presentation">
      <div class="werkbon-create-shadow" data-create-action="attempt-close" aria-hidden="true">
        <section class="werkbon-create-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonCreateTitle">
          <header class="werkbon-create-header">
            <div>
              
              <h2 id="werkbonCreateTitle">Werkbon Maken</h2>
            </div>
            <button class="icon-button" type="button" data-create-action="attempt-close" aria-label="Sluiten">&times;</button>
          </header>

          <nav class="werkbon-create-stepper" aria-label="Werkbon stappen">${Lt(n)}</nav>

          <div class="werkbon-create-content">${_t({step:n,state:c,rdwStatus:u})}</div>

          <footer class="werkbon-create-actions">
            <div class="werkbon-create-actions-left">
              <button class="button subtle" type="button" data-create-action="prev-step" ${n===1?"disabled":""}>Vorige</button>
            </div>
            <div class="werkbon-create-actions-right">
              ${n<5?`<button class="button subtle" type="button" data-create-action="next-step" ${d?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${b?"disabled":""}>${b?"Opslaan...":"Opslaan"}</button>`}
            </div>
          </footer>

          <div data-create-saving-host="true">${b?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':""}</div>
        </section>

        <div data-create-payment-host="true">${T?Nt(f):""}</div>
      </div>
    </div>
  `}function Pn({step:t,rdwStatus:n,isSaving:c}){const u=t===1&&n!=="success";return{left:`<button class="button subtle" type="button" data-create-action="prev-step" ${t===1?"disabled":""}>Vorige</button>`,right:t<5?`<button class="button subtle" type="button" data-create-action="next-step" ${u?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${c?"disabled":""}>${c?"Opslaan...":"Opslaan"}</button>`}}function qn(t){return`
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${l(t)}</p>
      </div>
    </div>
  `}function Cn(t,n){return t.length?t.map(At).join(""):qn(n?"No invoices match the current filters.":"Completed appointments will appear here once a werkbon is created.")}function Dn(t){return t.parts.map(n=>`
        <div class="werkbon-line-item">
          <span>${l(n.name)}</span>
          <span>${l(String(n.quantity))}</span>
          <span>${l(S(n.price))}</span>
          <strong>${l(S(n.total))}</strong>
        </div>
      `).join("")}function In(t){return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Werkbon ${l(we(t.licensePlate))}</title>
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
          <p><strong>License plate:</strong> ${l(we(t.licensePlate))}</p>
          <p><strong>Customer:</strong> ${l(t.customerName)}</p>
          <p><strong>Date:</strong> ${l(Tt(t.completedAt))}</p>
          <p><strong>Status:</strong> ${l(at[t.status].label)}</p>
        </div>
        <div class="section">
          <h2>Parts</h2>
          <div class="row"><strong>Product</strong><strong>Qty</strong><strong>Price</strong><strong>Total</strong></div>
          ${t.parts.map(n=>`<div class="row"><span>${l(n.name)}</span><span>${l(String(n.quantity))}</span><span>${l(S(n.price))}</span><span>${l(S(n.total))}</span></div>`).join("")}
        </div>
        <div class="section">
          <h2>Labour</h2>
          <p>${l(String(t.labour.hours))}h × ${l(S(t.labour.rate))} = ${l(S(t.labour.total))}</p>
        </div>
        <div class="summary">
          <div><span>Subtotal</span><span>${l(S(t.summary.subtotal))}</span></div>
          <div><span>VAT (21%)</span><span>${l(S(t.summary.vat))}</span></div>
          <div><span>Total</span><strong>${l(S(t.summary.total))}</strong></div>
        </div>
      </body>
    </html>
  `}function jn(t){const n=window.open("","_blank","width=960,height=720,noopener,noreferrer");return n?(n.document.open(),n.document.write(In(t)),n.document.close(),n.focus(),window.setTimeout(()=>{n.print()},180),!0):!1}async function Hn(t){var n,c,u,_,f,b,T,d;if(!t)return;document.body.style.overflow="";const h=await an();if(!h)return;if(!h.isAdmin&&!h.activeGarage){t.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}rn(h.activeGarage);const k=h.isAdmin?null:[(n=h.activeGarage)==null?void 0:n.id].filter(Boolean),{shell:W,contentArea:M,setUnreadEmailCount:H}=on({activePage:"werkbon",title:"Werkbon & Payments",headerNote:"Manage invoices and payment status",userEmail:h.user.email,onLogout:sn,garage:h.activeGarage,isAdmin:h.isAdmin}),L=document.createElement("div");L.id="werkbonCreateModalHost",t.replaceChildren(W,L),Tn(),M.innerHTML=`
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
  `;const R=M.querySelector("#werkbonNotice"),D=M.querySelector("#werkbonSummary"),F=M.querySelector("#werkbonList"),Q=M.querySelector("#werkbonDrawer"),ke=M.querySelector("#werkbonCreateTrigger"),Y=M.querySelector("#werkbonStatusFilter"),X=M.querySelector("#werkbonSearch"),$e=new URLSearchParams(window.location.search),ne=String($e.get("action")??"").toLowerCase()==="create",Z=ln("werkbon",{}),Ce=String(Z.searchTerm??"").trim(),oe=String(Z.statusFilter??"all").trim()||"all",Oe=String(Z.expandedInvoiceId??"").trim(),We=String(Z.selectedInvoiceId??"").trim(),Be=String(Z.editingInvoiceId??"").trim();let x=[],U=((c=x[0])==null?void 0:c.id)??"",ue="",ie=!1,se="",be=!1,P=1,G=!1,pe="",g=!1,q="idle",me="",ee=0,he=0,v=ht(),Me=0,le=null,ve=null,$={...h.activeGarage,mollieMethod:String(((u=h.activeGarage)==null?void 0:u.mollieMethod)??"none"),mollieApiKey:((_=h.activeGarage)==null?void 0:_.mollieApiKey)??null,paymentDays:parseInt(String(((f=h.activeGarage)==null?void 0:f.paymentDays)??"14"),10)||14,garageName:String(((b=h.activeGarage)==null?void 0:b.garageName)||((T=h.activeGarage)==null?void 0:T.name)||"Garage")};const de=new Map;let Te={};const Pt=()=>{Xe("werkbon",{searchTerm:X instanceof HTMLInputElement?X.value.trim():"",statusFilter:Y instanceof HTMLSelectElement?Y.value:"all",expandedInvoiceId:U,selectedInvoiceId:ue,editingInvoiceId:se})},z=e=>{R instanceof HTMLElement&&(R.textContent=e,R.hidden=!e,window.clearTimeout(Me),e&&(Me=window.setTimeout(()=>{R.hidden=!0,R.textContent=""},2600)))},N=(e,a="success")=>{if(a==="error"){z(String(e||"Er ging iets mis"));return}z(String(e||"Actie uitgevoerd."))},qt=async()=>{var e;const a=(e=h.activeGarage)==null?void 0:e.id;if(!(!O||!a))try{const{data:r,error:s}=await O.from("garages").select("*").eq("id",a).maybeSingle();if(s||!r)return;$={...$,...r,paymentLink:r.payment_link??$.paymentLink??null,mollieMethod:String(r.mollie_method??$.mollieMethod??"none"),mollieApiKey:r.mollie_api_key??$.mollieApiKey??null,paymentDays:parseInt(String(r.payment_days??$.paymentDays??14),10)||14,garageName:String(r.garage_name||r.name||$.garageName||"Garage")}}catch{}},Ct=async()=>{var e;const a=(e=h.activeGarage)==null?void 0:e.id;if(!(!O||!a))try{const{data:r}=await O.from("garage_pdf_settings").select("*").eq("garage_id",a).maybeSingle();r&&(Te=r)}catch{}},Le=()=>{le instanceof HTMLElement&&le.remove(),le=null,ve=null},st=({title:e,body:a,confirmLabel:r,cancelLabel:s,confirmClassName:o=""})=>new Promise(i=>{const p=document.createElement("div");p.innerHTML=`
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title" id="confirm-title">${l(e)}</h2>
            <p id="confirm-desc">${l(a)}</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button subtle" type="button" data-confirm-action="cancel">${l(s)}</button>
            <button class="button ${l(o)}" type="button" data-confirm-action="continue">${l(r)}</button>
          </div>
        </div>
      </div>
    `,document.body.append(p);const w=p.querySelector(".confirm-dialog-overlay"),y=p.querySelector('[data-confirm-action="continue"]');y instanceof HTMLButtonElement&&window.setTimeout(()=>y.focus(),50);const m=E=>{p.remove(),i(E)};w instanceof HTMLElement&&w.addEventListener("click",E=>{E.target===w&&m(!1)}),p.addEventListener("click",E=>{const K=E.target instanceof HTMLElement?E.target:null,ce=K==null?void 0:K.closest("[data-confirm-action]");ce instanceof HTMLElement&&m(ce.dataset.confirmAction==="continue")}),p.addEventListener("keydown",E=>{E.key==="Escape"&&m(!1)})}),Dt=()=>{ee&&(window.clearTimeout(ee),ee=0),he+=1,P=1,G=!1,pe="",g=!1,q="idle",me="",v=ht()},te=({forceMount:e=!1,refreshContent:a=!1}={})=>{if(!(L instanceof HTMLElement))return;if(!be){L.innerHTML&&(L.innerHTML=""),document.body.style.overflow="";return}if(!((e?null:L.querySelector(".werkbon-create-modal"))instanceof HTMLElement)){L.innerHTML=Nn({isOpen:be,step:P,state:v,rdwStatus:q,rdwError:me,selectedPaymentMethod:pe,isSaving:g,paymentModalOpen:G}),document.body.style.overflow="hidden";return}const r=L.querySelector(".werkbon-create-stepper");if(r instanceof HTMLElement&&(r.innerHTML=Lt(P)),a){const y=L.querySelector(".werkbon-create-content");y instanceof HTMLElement&&(y.innerHTML=_t({step:P,state:v,rdwStatus:q}))}const s=L.querySelector('[data-create-action="prev-step"]');s instanceof HTMLButtonElement&&(s.disabled=P===1);const o=L.querySelector(".werkbon-create-actions-left"),i=L.querySelector(".werkbon-create-actions-right");if(o instanceof HTMLElement&&i instanceof HTMLElement){const y=Pn({step:P,rdwStatus:q,isSaving:g});o.innerHTML=y.left,i.innerHTML=y.right}const p=L.querySelector('[data-create-saving-host="true"]');p instanceof HTMLElement&&(p.innerHTML=g?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':"");const w=L.querySelector('[data-create-payment-host="true"]');w instanceof HTMLElement&&(w.innerHTML=G?Nt(pe):""),document.body.style.overflow="hidden"},Re=({rerenderPage:e=!1}={})=>{if(be=!1,Le(),Dt(),e){C();return}te()},Ue=async()=>{if(!fn(v)){Re();return}await un("Er staan niet-opgeslagen gegevens in deze werkbon. Weet je zeker dat je wilt sluiten?","Werkbon sluiten")&&Re()},It=async e=>{if(!O||!e){const m=Math.max(1,Date.now()%1e5);return{invoiceNumber:`F-${String(m).padStart(6,"0")}`,nextCounter:m}}const{data:a,error:r}=await O.from("garages").select("invoice_prefix, invoice_counter, invoice_sequence").eq("id",e).maybeSingle();if(r)throw r;const s=String((a==null?void 0:a.invoice_prefix)??"F-"),o=Number((a==null?void 0:a.invoice_counter)??(a==null?void 0:a.invoice_sequence)??1),i=Number.isFinite(o)&&o>0?o:1,p=i+1,w=`${s}${String(i).padStart(3,"0")}`,{error:y}=await O.from("garages").update({invoice_counter:p,invoice_sequence:p}).eq("id",e);if(y)throw y;return{invoiceNumber:w,nextCounter:p}},jt=async()=>{var e,a,r,s,o,i,p;const w=(e=h.activeGarage)==null?void 0:e.id;if(!w)throw new Error("Geen garage gevonden voor deze gebruiker.");const y=fe(((a=v.voertuig)==null?void 0:a.kenteken)??"");if(y.length<6)throw new Error("Voer eerst een geldig kenteken in.");if(q!=="success")throw new Error("Haal eerst RDW voertuiggegevens op.");const m=Se(v),E=await It(w),K=`wb-${String(Date.now()).slice(-4)}`,ce=String(E.invoiceNumber||"").trim()||`F-${String(Date.now()%1e5).padStart(6,"0")}`,ye=new Date().toISOString(),A=Fe((r=v.klant)==null?void 0:r.naam,y),V=String(((s=v.voertuig)==null?void 0:s.title)??"").trim()||"Voertuig",I=yn(v),J={werkbon_id:K,status:"draft",werkbon_created:!0,customer_name:A,customer_email:String(((o=v.klant)==null?void 0:o.email)??"").trim(),customer_phone:String(((i=v.klant)==null?void 0:i.telefoon)??"").trim(),car_model:V,service_types:I,km_stand:0,vat_enabled:j(v.btw)>0,description:String(((p=v.klant)==null?void 0:p.omschrijving)??"").trim(),internal_note:"",invoice_number:ce,paid_at:pe?new Date().toISOString().slice(0,10):null,completed_at:ye,parts:m.onderdelenRows.map(B=>({name:B.naam,quantity:B.aantal,price:B.prijs})),labour:{hours:m.labourHours,rate:m.labourRate},totals:{subtotal:m.subtotaal,vat:m.btwBedrag,total:m.totaal},payment_method:pe};return{garageId:w,kenteken:y,completedAt:ye,completionNotes:J,serviceSummary:I.join(", "),werkbonId:K,invoiceNumber:ce}},Ht=async()=>{if(!O)throw new Error("Supabase is niet geconfigureerd.");g=!0,te();try{const e=await jt(),{data:a,error:r}=await O.from("completed_appointments").insert({garage_id:e.garageId,booking_id:null,completed_at:e.completedAt,appointment_date:e.completedAt.slice(0,10),appointment_time:e.completedAt.slice(11,19),license_plate:e.kenteken,service:e.serviceSummary||"Onderhoud",completion_notes:JSON.stringify(e.completionNotes)}).select("id, booking_id, garage_id, completed_at, created_at, license_plate, service, completion_notes").single();if(r)throw r;const s=$t(a);x=[s,...x],U=s.id,z(`Werkbon ${e.werkbonId} opgeslagen als ${e.invoiceNumber}.`),Re()}finally{g=!1,C()}},Ft=async()=>{var e,a,r;const s=await Ze(),o=Se(v),i=new s({unit:"pt",format:"a4"}),p=String(((e=v.voertuig)==null?void 0:e.kenteken)??"-"),w=Fe((a=v.klant)==null?void 0:a.naam,p),y=String(((r=v.klant)==null?void 0:r.omschrijving)??"").trim();let m=56;i.setFont("helvetica","bold"),i.setFontSize(18),i.text("Werkbon / Factuur",42,m),m+=26,i.setFont("helvetica","normal"),i.setFontSize(11),i.text(`Datum: ${new Date().toLocaleDateString("nl-NL")}`,42,m),m+=16,i.text(`Kenteken: ${p}`,42,m),m+=16,i.text(`Klant: ${w}`,42,m),m+=16,y&&(i.text(`Omschrijving: ${y}`,42,m,{maxWidth:520}),m+=22),i.setFont("helvetica","bold"),i.text("Onderdelen",42,m),m+=16,i.setFont("helvetica","normal"),o.onderdelenRows.forEach(E=>{i.text(`${E.naam}  x${E.aantal}  ${S(E.prijs)}  ${S(E.totaal)}`,42,m),m+=14}),m+=12,i.text(`Arbeid: ${S(o.arbeidTotaal)}`,42,m),m+=14,i.text(`Subtotaal: ${S(o.subtotaal)}`,42,m),m+=14,i.text(`BTW: ${S(o.btwBedrag)}`,42,m),m+=14,i.setFont("helvetica","bold"),i.text(`Totaal: ${S(o.totaal)}`,42,m),i.save(`werkbon-${fe(p)||"nieuw"}.pdf`)},Ot=async()=>{var e,a,r;if(!O)throw new Error("Supabase is niet geconfigureerd.");const s=String(((e=v.klant)==null?void 0:e.email)??"").trim();if(!s)throw new Error("Geen e-mailadres beschikbaar.");const o=Se(v),{error:i}=await O.functions.invoke("send-werkbon-email",{body:{to:s,template:"werkbon_factuur_nl",subject:`Werkbon ${Ne(((a=v.voertuig)==null?void 0:a.kenteken)??"")}`,customerName:String(((r=v.klant)==null?void 0:r.naam)??"Klant"),total:o.totaal}});if(i)throw i},Wt=()=>{var e,a,r;const s=String(((e=v.klant)==null?void 0:e.telefoon)??"").replace(/[^0-9]/g,""),o=Se(v),i=`Hallo ${String(((a=v.klant)==null?void 0:a.naam)??"")}, uw werkbon (${Ne(((r=v.voertuig)==null?void 0:r.kenteken)??"")}) staat klaar. Totaal: ${S(o.totaal)}.`;window.open(`https://wa.me/${encodeURIComponent(s)}?text=${encodeURIComponent(i)}`,"_blank","noopener,noreferrer")},xe=()=>{const e=L.querySelector("#vehicleLookupStatus");if(e instanceof HTMLElement){if(e.classList.remove("is-success","is-error"),q==="loading"){e.textContent="Kenteken controleren...";return}if(q==="success"){e.textContent="Kenteken gevonden",e.classList.add("is-success");return}if(q==="error"){e.textContent="Kenteken niet gevonden",e.classList.add("is-error");return}e.textContent="Typ kenteken om te zoeken"}},_e=()=>{const e=L.querySelector('[data-create-action="next-step"]');if(e instanceof HTMLButtonElement){if(P===1){e.disabled=q!=="success";return}e.disabled=P===5}},lt=()=>{var e,a,r,s,o;const i=L.querySelector("#vehiclePreviewTitle"),p=L.querySelector("#vehiclePreviewBuildYear"),w=L.querySelector("#vehiclePreviewApk"),y=L.querySelector("#vehiclePreviewColor"),m=L.querySelector("#vehiclePreviewFuel");if(!(i instanceof HTMLElement)||!(p instanceof HTMLElement)||!(w instanceof HTMLElement)||!(y instanceof HTMLElement)||!(m instanceof HTMLElement))return;const E=String(((e=v.voertuig)==null?void 0:e.title)??"").trim(),K=String(((a=v.voertuig)==null?void 0:a.buildYear)??"").trim(),ce=K?`${E||"Voertuig gegevens"} (${K})`:E||"Voertuig gegevens";i.textContent=ce,p.textContent=K,w.textContent=String(((r=v.voertuig)==null?void 0:r.apkExpiryDate)??"").trim(),y.textContent=String(((s=v.voertuig)==null?void 0:s.color)??"").trim(),m.textContent=String(((o=v.voertuig)==null?void 0:o.fuel)??"").trim()},Bt=()=>{const e=Se(v),a=L.querySelector("[data-parts-subtotal-value]");a instanceof HTMLElement&&(a.textContent=S(e.onderdelenSubtotaal)),L.querySelectorAll("[data-part-total-index]").forEach(r=>{if(!(r instanceof HTMLElement))return;const s=Number(r.getAttribute("data-part-total-index")??-1),o=e.onderdelenRows[s];o&&(r.textContent=S(o.totaal))})},Ve=()=>{const e=Se(v),a={arbeid:S(e.arbeidTotaal),subtotaal:S(e.subtotaal),btw:S(e.btwBedrag),totaal:S(e.totaal)};L.querySelectorAll("[data-create-total]").forEach(r=>{if(!(r instanceof HTMLElement))return;const s=String(r.getAttribute("data-create-total")??"");s in a&&(r.textContent=a[s])})},Rt=()=>{var e;const a=!!((e=v.arbeid)!=null&&e.enabled);L.querySelectorAll("[data-arbeid-field]").forEach(r=>{if(r instanceof HTMLInputElement){if(r.getAttribute("data-arbeid-field")==="enabled"){r.checked=a;return}r.disabled=!a}}),Ve()},dt=async({showShortInputError:e=!1}={})=>{var a;const r=fe(((a=v.voertuig)==null?void 0:a.kenteken)??"");if(r.length<6){q="idle",me=e?"Voer minimaal 6 tekens in voor het kenteken.":"",xe(),_e();return}const s=++he;q="loading",me="",xe(),_e();try{const o=await kt(r);if(s!==he)return;if(!o){q="error",me="Geen RDW voertuig gevonden voor dit kenteken.",v.voertuig={...v.voertuig,title:"",buildYear:"",apkExpiryDate:"",color:"",fuel:""},xe(),lt(),_e();return}v.voertuig={...v.voertuig,kenteken:Ne(r),...o},q="success",me="",xe(),lt(),_e()}catch{if(s!==he)return;q="error",me="RDW service is momenteel niet beschikbaar.",xe(),_e()}},De=(e,a)=>{x=x.map(r=>r.id===e?xt(a(r)):r)},Ut=e=>x.find(a=>a.id===e)??null,Ge=e=>{var a;return String((e==null?void 0:e.garageId)||((a=h.activeGarage)==null?void 0:a.id)||"")},Vt=e=>{if(!(F instanceof HTMLElement))return null;const a=F.querySelectorAll("[data-werkbon-row-id]");for(const r of a)if(r instanceof HTMLElement&&String(r.dataset.werkbonRowId??"")===String(e))return r;return null},ze=async(e,a)=>{if(!O)throw new Error("Supabase is niet geconfigureerd.");const r=String(e.completedAppointmentId||e.id||"");if(!r)throw new Error("Werkbon ID ontbreekt.");const s=Ge(e);let o=O.from("completed_appointments").select("id, garage_id, completion_notes").eq("id",r);s&&(o=o.eq("garage_id",s));const{data:i,error:p}=await o.maybeSingle();if(p)throw p;if(!i)throw new Error("Werkbon niet gevonden.");const w={...ot(i.completion_notes),...a};let y=O.from("completed_appointments").update({completion_notes:JSON.stringify(w)}).eq("id",r);s&&(y=y.eq("garage_id",s));const{error:m}=await y;if(m)throw m;return w},Ke=async e=>{const a=Ut(e);if(!a)throw new Error("Werkbon niet gevonden.");const r=String(a.completedAppointmentId||a.id||"");if(!r||!O){const y=String(a.invoiceNumber||"").trim();return{invoice:a,customer_name:a.customerName,customer_email:"",customer_phone:"",factuurnummer:y,total:a.summary.total,status:a.status}}const s=Ge(a);let o=O.from("werkbonnen").select("werkbon_id, garage_id, customer_name, customer_email, customer_phone, invoice_number, total_amount, invoice_status, payment_link, payment_link_sent_at, payment_method").eq("werkbon_id",r);s&&(o=o.eq("garage_id",s));const{data:i,error:p}=await o.maybeSingle();if(p)throw p;const w=Number((i==null?void 0:i.total_amount)??0);return{invoice:a,customer_name:String((i==null?void 0:i.customer_name)??a.customerName??"Klant"),customer_email:String((i==null?void 0:i.customer_email)??"").trim(),customer_phone:String((i==null?void 0:i.customer_phone)??"").trim(),factuurnummer:String((i==null?void 0:i.invoice_number)??a.invoiceNumber??"").trim(),total:Number.isFinite(w)&&w>0?w:a.summary.total,status:qe({status:(i==null?void 0:i.invoice_status)??a.status??"draft",paymentLink:(i==null?void 0:i.payment_link)??a.paymentLink,paymentLinkSentAt:(i==null?void 0:i.payment_link_sent_at)??a.paymentLinkSentAt,paidAt:a.paidAt}),payment_link:String((i==null?void 0:i.payment_link)??"").trim(),payment_link_sent_at:String((i==null?void 0:i.payment_link_sent_at)??"").trim(),payment_method:String((i==null?void 0:i.payment_method)??"").trim()}},ct=(e,a)=>{De(e,r=>({...r,status:rt(a)}))},Je=async e=>e.customer_email?(await ze(e.invoice,{status:"link_sent"}),ct(e.invoice.id,"link_sent"),N("Factuur verstuurd per e-mail ✓","success"),!0):(N("Geen e-mailadres bekend voor deze klant","error"),!1),Ie=async(e,{includePaymentLink:a=!0}={})=>{var r,s;if(!e.customer_phone)return N("Geen telefoonnummer bekend voor deze klant","error"),!1;const o=et(e.customer_phone);if(!o)return N("Geen telefoonnummer bekend voor deze klant","error"),!1;const i=$||h.activeGarage,p=String((i==null?void 0:i.mollieMethod)||"none"),w=Math.max(1,parseInt(String((i==null?void 0:i.paymentDays)??14),10)||14),y=String((i==null?void 0:i.garageName)||(i==null?void 0:i.name)||"Uw garage");let m=null;if(a){try{m=await nn(i,{totalAmount:e.total,factuurnummer:e.factuurnummer||"",customerName:e.customer_name||"Klant",paymentDays:w,completedAppointmentId:((r=e.invoice)==null?void 0:r.completedAppointmentId)||((s=e.invoice)==null?void 0:s.id)||""},I=>N(I,"error"),O)}catch{}if(p!=="none"&&!m)return N("Geen betaallink gemaakt. Controleer Mollie API-sleutel/instellingen en probeer opnieuw.","error"),!1}const E=String((i==null?void 0:i.payment_method)||(i==null?void 0:i.paymentMethod)||"mollie").toLowerCase()==="tikkie"?"Tikkie":"Mollie iDEAL",K=`€${tt(e.total)}`,ce=new Date().toLocaleDateString("nl-NL"),ye=String((i==null?void 0:i.whatsapp_template)||(i==null?void 0:i.whatsappTemplate)||"").trim();let A="";if(ye)A=_n(ye,{customerName:e.customer_name||"klant",garageName:y,invoiceNumber:e.factuurnummer||e.invoice.id||"-",amountText:K,paymentDays:w,paymentLink:a&&(m||e.payment_link)||"",paymentMethodLabel:E,today:ce,licensePlate:e.invoice.licensePlate||"",carModel:e.invoice.carModel||"Voertuig"});else{const I=[`Beste ${e.customer_name||"klant"},`,"",`Hierbij uw factuur van ${y}.`,"",`Factuurnummer: ${e.factuurnummer||"-"}`,`Totaalbedrag: ${K}`,`Betaaltermijn: ${w} dagen`];a&&m&&I.push("",`Betaal eenvoudig via ${E}:`,m),I.push("","Met vriendelijke groet,",y),A=I.join(`
`)}const V=`https://wa.me/${encodeURIComponent(o)}?text=${encodeURIComponent(A)}`;if(window.open(V,"_blank","noopener,noreferrer"),a&&m)try{await ze(e.invoice,{status:e.invoice.status!=="paid"?"link_sent":e.invoice.status,payment_link:m,payment_link_sent_at:new Date().toISOString(),payment_method:"mollie"});const I=new Date().toISOString(),J=x.findIndex(B=>B.id===e.invoice.id);J!==-1&&(x[J]={...x[J],status:x[J].status!=="paid"?"link_sent":x[J].status,paymentLink:m,paymentLinkSentAt:I,paymentMethod:"mollie"})}catch{}else ct(e.invoice.id,"link_sent");return N("WhatsApp bericht geopend ✓","success"),!0},Gt=async(e,a)=>{var r,s;const o=await Ke(a),i=!!o.customer_email,p=!!et(o.customer_phone),w=String(($==null?void 0:$.quote_prefix)??((r=h.activeGarage)==null?void 0:r.quotePrefix)??"OFF-"),y=Number(($==null?void 0:$.quote_counter)??((s=h.activeGarage)==null?void 0:s.quoteCounter)??1),m=Number.isFinite(y)&&y>0?y:1,E=`${w}${String(m).padStart(3,"0")}`,K=String(o.factuurnummer||o.invoice.invoiceNumber||o.invoice.id||"factuur").trim(),ce=async()=>{const A=await Ze();return St({jsPDFCtor:A,invoice:{...o.invoice,invoiceNumber:K},customerEmail:o.customer_email,customerPhone:o.customer_phone,garageProfile:$,pdfSettings:Te,documentType:"factuur",documentNumber:K})},ye=async()=>{const A=await Ze();return St({jsPDFCtor:A,invoice:{...o.invoice,invoiceNumber:E},customerEmail:o.customer_email,customerPhone:o.customer_phone,garageProfile:$,pdfSettings:Te,documentType:"offerte",documentNumber:E})};return ft({triggerButton:e,title:"📄 PDF Acties",options:[{id:"download",icon:"⬇️",title:"Downloaden",description:"Sla de factuur op als PDF",onSelect:async A=>{A.setLoading("download",!0);try{const V=await ce(),I=`${K||"factuur"}.pdf`,J=URL.createObjectURL(V),B=document.createElement("a");B.href=J,B.download=I,B.click(),URL.revokeObjectURL(J),A.forceClose(),N("PDF wordt gedownload ✓","success")}catch{N("PDF genereren mislukt","error")}finally{A.setLoading("download",!1)}}},{id:"quote-download",icon:"🧾",title:"Offerte downloaden",description:`Sla een offerte op als PDF (${E})`,onSelect:async(A,V)=>{A.setLoading(V,!0);try{const I=await ye(),J=`${E||o.invoice.id||"offerte"}.pdf`,B=URL.createObjectURL(I),Ye=document.createElement("a");Ye.href=B,Ye.download=J,Ye.click(),URL.revokeObjectURL(B),A.forceClose(),N("Offerte PDF wordt gedownload ✓","success")}catch{N("Offerte PDF genereren mislukt","error")}finally{A.setLoading(V,!1)}}},{id:"print",icon:"🖨️",title:"Afdrukken",description:"Print direct naar printer",onSelect:async(A,V)=>{A.setLoading(V,!0);try{const I=await ce(),J=URL.createObjectURL(I),B=window.open(J,"_blank","noopener,noreferrer");if(!B)throw new Error("Popup blocked");B.addEventListener("load",()=>{B.print(),B.addEventListener("afterprint",()=>{try{B.close()}catch{}URL.revokeObjectURL(J)},{once:!0})},{once:!0}),A.forceClose(),N("Print dialoog geopend ✓","success")}catch{N("Afdrukken mislukt","error")}finally{A.setLoading(V,!1)}}},{id:"email",icon:"📧",title:"Stuur via E-mail",description:i?"Verstuur naar klant e-mail":"⚠️ Geen e-mailadres bekend. Voeg een e-mailadres toe aan deze werkbon.",disabled:!i,onSelect:async(A,V)=>{A.setLoading(V,!0);const I=await Je(o);A.setLoading(V,!1),I&&(A.forceClose(),C())}},{id:"whatsapp",icon:"💬",title:"Stuur via WhatsApp",description:p?"Deel alleen de factuur via WhatsApp (zonder betaallink)":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.",disabled:!p,onSelect:async(A,V)=>{A.setLoading(V,!0);const I=await Ie(o,{includePaymentLink:!1});A.setLoading(V,!1),I&&(A.forceClose(),C())}}]})},zt=async(e,a)=>{var r;const s=await Ke(a),o=s.invoice,i=!!et(s.customer_phone),p=String(((r=$||h.activeGarage)==null?void 0:r.mollieMethod)||"none")!=="none";return ft({triggerButton:e,title:"💳 Betaalmethode",subtitle:`Totaal te betalen: €${tt(s.total)}`,options:[{id:"cash",icon:"💵",title:"Contant",description:"Registreer contante betaling",onSelect:async w=>{w.setBodyContent(`
              <div class="action-popup-confirm">
                <p class="action-popup-confirm-title">Bevestig contante betaling</p>
                <p class="action-popup-confirm-subtitle">€${l(tt(s.total))} ontvangen?</p>
                <div class="action-popup-confirm-actions">
                  <button type="button" class="button subtle" data-popup-cancel>Annuleren</button>
                  <button type="button" class="button" data-popup-confirm>✓ Bevestigen</button>
                </div>
              </div>
            `,y=>{const m=y.querySelector("[data-popup-cancel]"),E=y.querySelector("[data-popup-confirm]");m==null||m.addEventListener("click",()=>w.forceClose()),E==null||E.addEventListener("click",async()=>{await pt(o.id,e),w.forceClose(),C(),N("Contante betaling geregistreerd ✓","success")})})}},{id:"mollie_whatsapp",icon:"💬",title:"Betaallink via WhatsApp",description:p?i?"Stuur iDEAL link naar klant":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.":"⚠️ Geen Mollie account verbonden. Ga naar Instellingen → Betalingen.",disabled:!p||!i,onSelect:async(w,y)=>{w.setLoading(y,!0);const m=await Ie(s);w.setLoading(y,!1),m&&(w.forceClose(),C(),N("Betaallink verstuurd via WhatsApp ✓","success"))}}]})},Kt=(e,a)=>{Le();const r=e.getBoundingClientRect(),s=document.createElement("div");s.className="send-dropdown",s.setAttribute("data-send-dropdown","true"),s.innerHTML=`
      <button type="button" data-send-option="email" data-werkbon-id="${l(a.invoice.id)}">
        📧 Per e-mail ${a.customer_email?"":'<span class="send-dropdown-muted">(geen e-mail)</span>'}
      </button>
      <button type="button" data-send-option="whatsapp" data-werkbon-id="${l(a.invoice.id)}">
        💬 Via WhatsApp ${a.customer_phone?"":'<span class="send-dropdown-muted">(geen telefoon)</span>'}
      </button>
      <button type="button" data-send-option="both" data-werkbon-id="${l(a.invoice.id)}">
        📤 Beide versturen
      </button>
    `,document.body.append(s);const o=window.innerWidth,i=window.innerHeight,p=s.getBoundingClientRect(),w=Math.max(8,Math.min(r.left,o-p.width-8)),y=r.bottom+p.height+8>i?Math.max(8,r.top-p.height-8):r.bottom+6;s.style.left=`${Math.round(w)}px`,s.style.top=`${Math.round(y)}px`,le=s,ve=a},Ee=(e,a)=>{if(!(e instanceof HTMLButtonElement))return()=>{};const r=e.textContent||"";return e.disabled=!0,e.textContent=a,()=>{e.disabled=!1,e.textContent=r}},Jt=e=>new Promise(a=>{const r=Vt(e);if(!(r instanceof HTMLElement)){a();return}r.classList.add("werkbon-row-removing"),window.setTimeout(a,220)}),Qe=(e,a=!1)=>{ue=e,ie=!0,se=a?e:"",C()},ut=(e,a)=>{const r=x.find(s=>s.id===e);if(r){if(r.status==="paid"){z(`Invoice for ${we(r.licensePlate)} is already paid.`),Qe(e,!1);return}De(e,s=>({...s,status:"link_sent"})),z(`Werkbon sent to customer via ${a}.`),Qe(e,!1)}},pt=async(e,a)=>{const r=x.find(o=>o.id===e);if(!r)return;if(r.status==="paid"){z(`Invoice for ${we(r.licensePlate)} is already marked as paid.`),Qe(e,!1);return}if(!await st({title:"Werkbon markeren als betaald?",body:"Dit registreert de betaling als vandaag ontvangen.",confirmLabel:"Markeer als betaald",cancelLabel:"Annuleren"}))return;const s=Ee(a,"Opslaan...");try{await ze(r,{status:"paid",payment_method:"manual",payment_date:new Date().toISOString()}),De(e,o=>({...o,status:"paid"})),N("Werkbon gemarkeerd als betaald ✓","success"),C()}catch{N("Er ging iets mis","error"),s();return}s()},Qt=e=>{const a=x.find(y=>y.id===e);if(!a||!(Q instanceof HTMLElement))return;const r=Q.querySelector("[data-werkbon-edit-status]"),s=Q.querySelector("[data-werkbon-edit-hours]"),o=Q.querySelector("[data-werkbon-edit-rate]");if(!(r instanceof HTMLSelectElement)||!(s instanceof HTMLInputElement)||!(o instanceof HTMLInputElement))return;const i=rt(r.value),p=Math.max(0,Number(s.value||a.labour.hours)),w=Math.max(0,Number(o.value||a.labour.rate));De(e,y=>({...y,status:i,labour:{...y.labour,hours:p,rate:w}})),se="",ue=e,ie=!0,z("Werkbon updated."),C()},Yt=async(e,a)=>{const r=x.find(o=>o.id===e);if(!r||!await st({title:"Werkbon verwijderen?",body:"Deze actie kan niet ongedaan worden gemaakt. De werkbon wordt permanent verwijderd.",confirmLabel:"Verwijderen",cancelLabel:"Annuleren",confirmClassName:"danger"}))return;const s=Ee(a,"Opslaan...");try{if(!O)throw new Error("Supabase is niet geconfigureerd.");const o=String(r.completedAppointmentId||r.id||"");if(!o)throw new Error("Werkbon ID ontbreekt.");let i=O.from("completed_appointments").delete().eq("id",o);const p=Ge(r);p&&(i=i.eq("garage_id",p));const{error:w}=await i;if(w)throw w}catch{N("Verwijderen mislukt","error"),s();return}await Jt(e),x=x.filter(o=>o.id!==e),U===e&&(U=""),ue===e&&(ue="",ie=!1,se=""),N("Werkbon verwijderd","success"),Le(),C(),s()},Xt=async(e,a,r)=>{var s;if(e==="view"){Xe("werkbonDetail",{selectedWerkbonId:a,editMode:!1}),window.location.href=nt(`werkbon-detail.html?id=${encodeURIComponent(a)}`);return}if(e==="edit"){Xe("werkbonDetail",{selectedWerkbonId:a,editMode:!0}),window.location.href=nt(`werkbon-detail.html?id=${encodeURIComponent(a)}&edit=true`);return}if(e==="cancel-edit"){se="",ie=!1,C();return}if(e==="save-edit"){Qt(a);return}if(e==="pdf-actions"){if(!(r instanceof HTMLButtonElement))return;const o=Ee(r,"Laden...");try{await Gt(r,a)}catch{N("Er ging iets mis","error")}o();return}if(e==="payment-actions"){if(!(r instanceof HTMLButtonElement))return;const o=Ee(r,"Laden...");try{await zt(r,a)}catch{N("Er ging iets mis","error")}o();return}if(e==="send-customer"){if(!(r instanceof HTMLButtonElement))return;if(((s=ve==null?void 0:ve.invoice)==null?void 0:s.id)===a&&le instanceof HTMLElement){Le();return}const o=Ee(r,"Laden...");try{const i=await Ke(a);Kt(r,i)}catch{N("Er ging iets mis","error")}o();return}if(e==="send-sms"){ut(a,"SMS");return}if(e==="send-whatsapp"){ut(a,"WhatsApp");return}if(e==="mark-paid"){await pt(a,r);return}if(e==="download-pdf"){const o=x.find(p=>p.id===a);if(!o)return;const i=jn(o);z(i?"Print dialog opened for PDF export.":"Allow pop-ups to export this werkbon as PDF.");return}e==="delete"&&await Yt(a,r)},C=()=>{if(!(D instanceof HTMLElement)||!(F instanceof HTMLElement)||!(Q instanceof HTMLElement)||!(L instanceof HTMLElement))return;const e=Y instanceof HTMLSelectElement?Y.value:"all",a=X instanceof HTMLInputElement?X.value.trim().toLowerCase():"",r=[...x].sort((o,i)=>{var p,w;return((p=Pe(i.completedAt))==null?void 0:p.getTime())-((w=Pe(o.completedAt))==null?void 0:w.getTime())}).filter(o=>{const i=[o.licensePlate,o.customerName,o.carModel].join(" ").toLowerCase(),p=!a||i.includes(a),w=e==="all"||qe(o)===e;return p&&w});D.innerHTML=xn(x),F.innerHTML=r.length?r.map(o=>At(o,U===o.id)).join(""):Cn(r,!!(a||e!=="all"));const s=x.find(o=>o.id===ue)??null;Q.classList.toggle("is-open",ie&&!!s),Q.innerHTML=ie&&s?An(s,se===s.id):"",te(),Pt()};ke==null||ke.addEventListener("click",()=>{be=!0,P=1,te({forceMount:!0,refreshContent:!0})});const mt=async e=>{const a=e.closest("[data-create-action]");if(!(a instanceof HTMLElement))return!1;const r=String(a.dataset.createAction??"");if(r==="attempt-close")return a.classList.contains("werkbon-create-shadow")&&e.closest(".werkbon-create-panel")||await Ue(),!0;if(r==="jump-step"){const s=Number(a.dataset.step??P);return P=Math.min(5,Math.max(1,s)),G=!1,te({refreshContent:!0}),!0}if(r==="prev-step")return P=Math.max(1,P-1),te({refreshContent:!0}),!0;if(r==="next-step")return P===1&&q!=="success"&&(ee&&(window.clearTimeout(ee),ee=0),await dt({showShortInputError:!0})),P===1&&q!=="success"?(z("Rond eerst de RDW validatie af."),!0):(P=Math.min(5,P+1),te({refreshContent:!0}),!0);if(r==="remove-part"){const s=Number(a.dataset.partIndex??-1);return Number.isFinite(s)&&s>=0&&(v.onderdelen.splice(s,1),te({refreshContent:!0})),!0}if(r==="quick-part")return v.onderdelen.push({naam:String(a.dataset.partName??"Onderdeel"),aantal:1,prijs:j(a.dataset.partPrice,0)}),te({refreshContent:!0}),!0;if(r==="add-manual-part")return v.onderdelen.push({naam:"",aantal:1,prijs:0}),te({refreshContent:!0}),!0;if(r==="open-payment")return G=!0,te(),!0;if(r==="close-payment")return G=!1,te(),!0;if(r==="select-payment")return pe=String(a.dataset.paymentMethod??""),G=!1,z(`Betaalmethode gekozen: ${pe}.`),te(),!0;if(r==="save-werkbon"){try{await Ht()}catch(s){z(s instanceof Error?s.message:"Opslaan mislukt.")}return!0}if(r==="create-pdf"){try{await Ft(),z("PDF gegenereerd.")}catch(s){z(s instanceof Error?s.message:"PDF genereren mislukt.")}return!0}if(r==="email-werkbon"){try{await Ot(),z("Werkbon e-mail verstuurd.")}catch(s){z(s instanceof Error?s.message:"E-mail verzenden mislukt.")}return!0}return r==="whatsapp-werkbon"?(Wt(),z("WhatsApp bericht geopend."),!0):!1},bt=e=>{if(!(e instanceof HTMLElement)||!be)return!1;if(e.matches("[data-create-field='kenteken']")){if(e instanceof HTMLInputElement){const a=Ne(e.value);e.value=a,v.voertuig={...v.voertuig,kenteken:a},q="idle",me="",ee&&(window.clearTimeout(ee),ee=0);const r=fe(a),s=L.querySelector("#vehicleLookupStatus");s instanceof HTMLElement&&(s.classList.remove("is-success","is-error"),s.textContent=r.length>=6?"Kenteken controleren...":"Typ kenteken om te zoeken"),_e(),r.length>=6&&(ee=window.setTimeout(()=>{ee=0,dt()},420))}return!0}if(e.matches("[data-create-field='btw']"))return e instanceof HTMLSelectElement&&(v.btw=j(e.value,21),Ve()),!0;if(e.matches("[data-klant-field]")){const a=String(e.getAttribute("data-klant-field")??"");if(!a)return!0;const r=e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?e.value:"";return v.klant={...v.klant,[a]:r},!0}if(e.matches("[data-arbeid-field]")){const a=String(e.getAttribute("data-arbeid-field")??"");if(!a)return!0;const r={...v.arbeid};return a==="enabled"&&e instanceof HTMLInputElement?(r.enabled=e.checked,v.arbeid=r,Rt(),!0):(e instanceof HTMLInputElement&&(r[a]=j(e.value,a==="tarief"?65:0)),v.arbeid=r,Ve(),!0)}if(e.matches("[data-part-field]")){const a=Number(e.getAttribute("data-part-index")??-1),r=String(e.getAttribute("data-part-field")??"");if(!Number.isFinite(a)||a<0||!r)return!0;const s={...v.onderdelen[a]??{naam:"",aantal:1,prijs:0}};return r==="naam"&&(s.naam=e instanceof HTMLInputElement?e.value:""),r==="aantal"&&(s.aantal=e instanceof HTMLInputElement?j(e.value,1):1),r==="prijs"&&(s.prijs=e instanceof HTMLInputElement?j(e.value,0):0),v.onderdelen[a]=s,Bt(),!0}return!1};L.addEventListener("click",async e=>{const a=e.target instanceof Element?e.target:null;a&&await mt(a)}),L.addEventListener("input",e=>{const a=e.target;a instanceof HTMLElement&&bt(a)}),L.addEventListener("keydown",e=>{e.key==="Escape"&&be&&(e.preventDefault(),Ue())}),M.addEventListener("click",async e=>{const a=e.target instanceof Element?e.target:null;if(!a||await mt(a))return;const r=a.closest("[data-werkbon-action]");if(r instanceof HTMLElement){const o=String(r.dataset.werkbonAction??""),i=String(r.dataset.werkbonId??"");if(o==="close-modal"){ie=!1,se="",C();return}if(o==="toggle"){U=U===i?"":i,C();return}if(o==="close-drawer"){U="",se="",C();return}if(!i)return;await Xt(o,i,r);return}const s=a.closest("[data-werkbon-row-id]");if(s instanceof HTMLElement&&!a.closest("button, input, select, textarea, a")){const o=String(s.dataset.werkbonRowId??"");o&&(U=U===o?"":o,C())}});const vt=window.__werkbonDocumentClickHandler;typeof vt=="function"&&document.removeEventListener("click",vt);const gt=async e=>{const a=e.target instanceof Element?e.target:null;if(!a)return;const r=a.closest("[data-send-option]");if(r instanceof HTMLButtonElement&&ve){e.preventDefault();const s=String(r.dataset.sendOption??""),o=ve;Le();try{s==="email"?await Je(o):s==="whatsapp"?await Ie(o):s==="both"&&(await Je(o),await Ie(o)),C()}catch{N("Er ging iets mis","error")}return}a.closest("[data-send-dropdown]")||a.closest('[data-werkbon-action="send-customer"]')||Le()};window.__werkbonDocumentClickHandler=gt,document.addEventListener("click",gt),M.addEventListener("keydown",e=>{const a=e.target instanceof HTMLElement?e.target:null;if(a){if(e.key==="Escape"&&be){e.preventDefault(),Ue();return}if((e.key==="Enter"||e.key===" ")&&a.matches("[data-werkbon-row-id]")){e.preventDefault();const r=String(a.dataset.werkbonRowId??"");r&&(U=U===r?"":r,C())}if(e.key==="Escape"&&ie){ie=!1,se="",C();return}e.key==="Escape"&&U&&(U="",C())}}),M.addEventListener("input",e=>{const a=e.target;a instanceof HTMLElement&&bt(a)}),X==null||X.addEventListener("input",C),Y==null||Y.addEventListener("change",C),await qt(),await Ct();try{let e=[];try{e=await tn({garageIds:k})}catch{}x=e.filter(o=>ot(o.completion_notes).werkbon_created===!0).map($t).sort((o,i)=>new Date(i.completedAt??0).getTime()-new Date(o.completedAt??0).getTime());const a=new Set(x.map(o=>o.licensePlate).filter(o=>o&&o!=="UNKNOWN").map(o=>fe(o)));for(const o of a)if(o&&!de.has(o))try{const i=await kt(o);i&&de.set(o,i)}catch(i){console.error(`Failed to fetch vehicle for ${o}:`,i)}x=x.map(o=>{const i=fe(o.licensePlate),p=de.get(i)||kn(i);return{...o,carModel:p.title+(p.buildYear?` (${p.buildYear})`:"")||o.carModel}});const r=await dn({garageIds:k}),s=cn(r);if(H(s.unread),X instanceof HTMLInputElement&&Ce&&(X.value=Ce),Y instanceof HTMLSelectElement){const o=Array.from(Y.options).some(i=>i.value===oe);Y.value=o?oe:"all"}U=Oe||(((d=x[0])==null?void 0:d.id)??""),ue=We,se=Be,ue&&x.some(o=>o.id===ue)&&(ie=!0)}catch(e){x=[],H(0),console.error(e)}C(),ne&&(be=!0,P=1,te({forceMount:!0,refreshContent:!0}))}const Fn=document.querySelector("#app");en();Hn(Fn);
