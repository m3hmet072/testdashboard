import{e as Yt,f as Jt,p as ze,c as Qt}from"./theme-CzeyRWKH.js";/* empty css                      */import{o as bt,g as Xt}from"./actionPopup-D9bI13ep.js";import{e as Zt,a as en,c as tn,l as nn,d as an,g as rn,s as on,f as We}from"./branding-BCgtwUdv.js";import{n as ae,f as ft}from"./rdwService-CFrMDQAa.js";import{s as sn}from"./confirmDialog-DSEC2-zx.js";const Ke={draft:{label:"Draft",className:"werkbon-status-draft"},link_sent:{label:"Link verstuurd",className:"werkbon-status-link-sent"},paid:{label:"Paid",className:"werkbon-status-paid"}},xe={apk:"APK",banden:"Banden",onderhoud:"Onderhoud",airco:"Airco",occasions:"Occasions",brakes:"Brakes",other:"Overige"},ln=new Map([["apk","apk"],["apk keuring","apk"],["keuring","apk"],["banden","banden"],["band","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"],["overig","other"],["overige","other"],["other","other"]]),kt=["Voertuig","Klant","Onderdelen","Arbeid","Overzicht"],cn=["contant","iDEAL","Mollie"],dn=[{label:"APK keuring",name:"APK keuring",price:45},{label:"Banden",name:"Banden",price:120},{label:"Remblokken voor",name:"Remblokken voor",price:85},{label:"Remblokken achter",name:"Remblokken achter",price:75},{label:"Olie",name:"Olie",price:35},{label:"Filters",name:"Filters",price:28},{label:"Accu",name:"Accu",price:95},{label:"Overige",name:"Overige",price:0}],un="https://mkgfckxiusdcnqhethdy.supabase.co",mn="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2Zja3hpdXNkY25xaGV0aGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMDQ4MzIsImV4cCI6MjA4ODU4MDgzMn0.LD7oUSC-S-Kwdjkfgivz1_-tA3QzNS6-W8sETLha2lc",q=Yt(un,mn);function gt(){return{voertuig:{},klant:{},onderdelen:[],arbeid:{enabled:!1,uren:0,minuten:0,tarief:65},btw:21}}function P(e,n=0){const u=Number(e);return Number.isFinite(u)&&u>=0?u:n}function $e(e){const n=ae(e).slice(0,6);return n?n.replace(/(.{2})(?=.)/g,"$1-"):""}function Ce(e,n){const u=String(e??"").trim();if(u)return u;const m=ae(n);return m?$e(m):"UNKNOWN"}function pn(e){var k,o,h,g,N,E,T;const n=String(((k=e==null?void 0:e.voertuig)==null?void 0:k.kenteken)??"").trim(),u=[(o=e==null?void 0:e.klant)==null?void 0:o.naam,(h=e==null?void 0:e.klant)==null?void 0:h.telefoon,(g=e==null?void 0:e.klant)==null?void 0:g.email,(N=e==null?void 0:e.klant)==null?void 0:N.omschrijving].some(S=>String(S??"").trim()),m=Array.isArray(e==null?void 0:e.onderdelen)&&e.onderdelen.some(S=>String((S==null?void 0:S.naam)??"").trim()||P(S==null?void 0:S.aantal)>0||P(S==null?void 0:S.prijs)>0),f=P((E=e==null?void 0:e.arbeid)==null?void 0:E.uren)*60+P((T=e==null?void 0:e.arbeid)==null?void 0:T.minuten);return!!(n||u||m||f>0)}function ce(e){var E,T,S,B;const n=(Array.isArray(e.onderdelen)?e.onderdelen:[]).map(F=>{const Y=P(F==null?void 0:F.aantal),R=P(F==null?void 0:F.prijs);return{naam:String((F==null?void 0:F.naam)??"").trim()||"Onderdeel",aantal:Y,prijs:R,totaal:U(Y*R)}}),u=U(n.reduce((F,Y)=>F+Y.totaal,0)),m=P((E=e.arbeid)==null?void 0:E.uren)+P((T=e.arbeid)==null?void 0:T.minuten)/60,f=P((S=e.arbeid)==null?void 0:S.tarief,65),k=(B=e.arbeid)!=null&&B.enabled?U(m*f):0,o=U(u+k),h=P(e.btw)>0?.21:0,g=U(o*h),N=U(o+g);return{onderdelenRows:n,onderdelenSubtotaal:u,labourHours:m,labourRate:f,arbeidTotaal:k,subtotaal:o,btwBedrag:g,totaal:N}}function ne(e,n){return`<div class="werkbon-create-overview-row"><span>${c(e)}</span><strong>${c(n)}</strong></div>`}function Ae(e,n,u){return`<div class="werkbon-create-overview-row"><span>${c(n)}</span><strong data-create-total="${c(e)}">${c(u)}</strong></div>`}function ht(e){return kt.map((n,u)=>{const m=u+1,f=m===e?"is-active":m<e?"is-done":"",k=m<e?"is-done":"",o=u<kt.length-1?`<span class="werkbon-create-step-separator ${k}" aria-hidden="true"></span>`:"";return`<button class="werkbon-create-step ${f}" type="button" data-create-action="jump-step" data-step="${m}"><span>${m}.</span>${c(n)}</button>${o}`}).join("")}function yt({step:e,state:n,rdwStatus:u}){var N,E,T,S,B,F,Y,R,W,se,de,ue,me,L;const m=ce(n),f=String(((N=n.voertuig)==null?void 0:N.title)??"").trim(),k=String(((E=n.voertuig)==null?void 0:E.buildYear)??"").trim(),o=String(((T=n.voertuig)==null?void 0:T.apkExpiryDate)??"").trim(),h=k?`${f||"Voertuig gegevens"} (${k})`:f||"Voertuig gegevens",g=u==="loading"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Kenteken controleren...</p>':u==="success"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-success">Kenteken gevonden</p>':u==="error"?'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback is-error">Kenteken niet gevonden</p>':'<p id="vehicleLookupStatus" class="werkbon-rdw-feedback">Typ kenteken om te zoeken</p>';return e===1?`
      <div class="werkbon-create-body-step">
        <label class="werkbon-create-appointment-field">
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text" inputmode="text" maxlength="8" data-create-field="kenteken" value="${c(String(((S=n.voertuig)==null?void 0:S.kenteken)??""))}" placeholder="eg. 12-ABC-D1" required />
          ${g}
        </label>
        <div class="vehicle-preview-card werkbon-create-vehicle-preview" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">${c(h)}</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">${c(k)}</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">${c(o)}</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">${c(String(((B=n.voertuig)==null?void 0:B.color)??""))}</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">${c(String(((F=n.voertuig)==null?void 0:F.fuel)??""))}</strong></span>
          </div>
        </div>
      </div>
    `:e===2?`
      <div class="werkbon-create-body-step">
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input type="text" data-klant-field="naam" value="${c(String(((Y=n.klant)==null?void 0:Y.naam)??""))}" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" />
          </label>
          <label>
            Phone number
            <input type="tel" data-klant-field="telefoon" value="${c(String(((R=n.klant)==null?void 0:R.telefoon)??""))}" autocomplete="tel" placeholder="eg. 0624987172" />
          </label>
        </div>
        <label class="werkbon-create-appointment-field">
          Email
          <input type="email" data-klant-field="email" value="${c(String(((W=n.klant)==null?void 0:W.email)??""))}" autocomplete="email" placeholder="eg. klant@email.com" />
        </label>
        <label class="werkbon-create-appointment-field">
          Omschrijving
          <textarea rows="4" data-klant-field="omschrijving" placeholder="Optioneel">${c(String(((se=n.klant)==null?void 0:se.omschrijving)??""))}</textarea>
        </label>
      </div>
    `:e===3?`
      <div class="werkbon-create-body-step werkbon-create-parts-step">
        <div class="werkbon-create-section-copy">
          <label class="werkbon-create-section-title">Onderdelen</label>
          <p class="werkbon-create-section-subtitle">Voeg onderdelen en materialen toe aan de werkbon</p>
        </div>
        <div class="werkbon-create-quick-parts">
          ${dn.map(_=>`<button class="werkbon-chip-button" type="button" data-create-action="quick-part" data-part-name="${c(_.name)}" data-part-price="${c(String(_.price))}">+ ${c(_.label)}</button>`).join("")}
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
                ${n.onderdelen.map((_,D)=>`
                  <div class="werkbon-create-part-card">
                    <div class="werkbon-part-cell werkbon-part-cell-name">
                      <input type="text" class="werkbon-part-input" data-part-field="naam" data-part-index="${D}" value="${c(String(_.naam??""))}" placeholder="Onderdeel naam" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-price">
                      <div class="werkbon-currency-input">
                        <span class="werkbon-currency-symbol">€</span>
                        <input type="number" class="werkbon-part-input werkbon-part-input-price" min="0" step="0.01" data-part-field="prijs" data-part-index="${D}" value="${c(String(_.prijs??0))}" />
                      </div>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-quantity">
                      <input type="number" class="werkbon-part-input" min="1" step="1" data-part-field="aantal" data-part-index="${D}" value="${c(String(_.aantal??1))}" />
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-total">
                      <strong data-part-total-index="${D}">${c(v(U(P(_.aantal,1)*P(_.prijs))))}</strong>
                    </div>
                    <div class="werkbon-part-cell werkbon-part-cell-remove">
                      <button class="werkbon-remove-button" type="button" data-create-action="remove-part" data-part-index="${D}" aria-label="Verwijder onderdeel" title="Verwijder">
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
          <strong data-parts-subtotal-value="true">${c(v(m.onderdelenSubtotaal))}</strong>
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
            <option value="21" ${P(n.btw)>0?"selected":""}>21%</option>
            <option value="0" ${P(n.btw)===0?"selected":""}>Geen BTW</option>
          </select>
        </label>
        <div class="werkbon-create-calculation-card">
          ${Ae("arbeid","Arbeid",v(m.arbeidTotaal))}
          ${Ae("subtotaal","Subtotaal",v(m.subtotaal))}
          ${Ae("btw","BTW",v(m.btwBedrag))}
          ${Ae("totaal","Totaal",v(m.totaal))}
        </div>
      </div>
    `:`
    <div class="werkbon-create-body-step werkbon-create-overview">
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Voertuig</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="1">Bewerken</button></div>
        ${ne("Kenteken",String(((de=n.voertuig)==null?void 0:de.kenteken)??"-"))}
        ${ne("Voertuig",f||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Klant</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="2">Bewerken</button></div>
        ${ne("Naam",String(((ue=n.klant)==null?void 0:ue.naam)??"-")||"-")}
        ${ne("Email",String(((me=n.klant)==null?void 0:me.email)??"-")||"-")}
        ${ne("Telefoon",String(((L=n.klant)==null?void 0:L.telefoon)??"-")||"-")}
      </div>
      <div class="werkbon-create-overview-card">
        <div class="werkbon-create-overview-head"><h4>Onderdelen / Arbeid</h4><button class="button subtle" type="button" data-create-action="jump-step" data-step="3">Bewerken</button></div>
        ${ne("Onderdelen",v(m.onderdelenSubtotaal))}
        ${ne("Arbeid",v(m.arbeidTotaal))}
        ${ne("BTW",v(m.btwBedrag))}
        ${ne("Totaal",v(m.totaal))}
      </div>
    </div>
  `}async function wt(){var e,n;if((e=window.jspdf)!=null&&e.jsPDF)return window.jspdf.jsPDF;if(await new Promise((u,m)=>{const f=document.querySelector('script[data-js-pdf-cdn="true"]');if(f){f.addEventListener("load",()=>u(),{once:!0}),f.addEventListener("error",()=>m(new Error("Kon jsPDF niet laden.")),{once:!0});return}const k=document.createElement("script");k.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",k.async=!0,k.dataset.jsPdfCdn="true",k.onload=()=>u(),k.onerror=()=>m(new Error("Kon jsPDF niet laden.")),document.head.append(k)}),!((n=window.jspdf)!=null&&n.jsPDF))throw new Error("jsPDF is niet beschikbaar.");return window.jspdf.jsPDF}function bn(e=""){return{title:ae(e)||"Voertuig",buildYear:""}}function fn(e){const n=String(e||"").trim();if(!n)return["other"];const u=n.split(n.includes(",")?/,/g:/\+|\/|&| and /gi).map(m=>m.trim()).filter(Boolean);return u.length?u:[n]}function kn(e){return ln.get(String(e||"").trim().toLowerCase())||"other"}function St(e){const n=String(e??"").trim();if(!n)return{key:"other",label:xe.other};const u=n.toLowerCase(),m=[{probe:"apk",key:"apk"},{probe:"band",key:"banden"},{probe:"airco",key:"airco"},{probe:"occasion",key:"occasions"},{probe:"brake",key:"brakes"},{probe:"onderhoud",key:"onderhoud"},{probe:"service",key:"onderhoud"},{probe:"overig",key:"other"}],f=kn(n);let k=f;if(f==="other"){const o=m.find(h=>u.includes(h.probe));o&&(k=o.key)}if(k==="other"){if(["other","overig","overige"].includes(u))return{key:k,label:xe.other};const o=n.replace(/^\s*(other|overig|overige)\s*[:\-]\s*/i,"").trim();return{key:k,label:o||n||xe.other}}return{key:k,label:xe[k]??n}}function gn(e){const n=Array.isArray(e==null?void 0:e.onderdelen)?e.onderdelen:[],u=new Set,m=[];for(const f of n){const k=String((f==null?void 0:f.naam)??"").trim();if(!k)continue;const o=St(k),h=`${o.key}:${o.label.toLowerCase()}`;u.has(h)||(u.add(h),m.push(o.label))}return m.length?m:["Onderhoud"]}function wn(e){return fn(e).map(n=>{const{key:u,label:m}=St(n);return`<span class="service-chip service-chip-${u}">${c(m)}</span>`}).join("")}function c(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function U(e){return Math.round(Number(e)*100)/100}function v(e){return`€${U(e).toFixed(2)}`}function Oe(e){const n=String(e??"").replace(/\D+/g,"");return n?n.startsWith("00")?n.slice(2):n.startsWith("0")?`31${n.slice(1)}`:n:""}function Re(e){const n=Number(e);return(Number.isFinite(n)?n:0).toFixed(2).replace(".",",")}function Le(e){const n=new Date(e);return Number.isNaN(n.getTime())?null:n}function vn(e){if(!e)return"";const n=Le(e);if(!n)return"";const u=n.toLocaleDateString("nl-NL",{day:"numeric",month:"short"}),m=n.toLocaleTimeString("nl-NL",{hour:"2-digit",minute:"2-digit",hour12:!1});return`${u} · ${m}`}function $t(e){const n=Le(e);return n?n.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"Unknown date"}function hn(e){return(Le(e)||new Date).toLocaleDateString("nl-NL",{day:"2-digit",month:"2-digit",year:"numeric"})}function yn(e){const n=String(e).trim().replace("#","");return/^[0-9a-fA-F]{6}$/.test(n)?{r:Number.parseInt(n.slice(0,2),16),g:Number.parseInt(n.slice(2,4),16),b:Number.parseInt(n.slice(4,6),16)}:null}function Se(e,n,u=""){if(!e||typeof e!="object")return u;for(const m of n){const f=e[m];if(f!=null&&String(f).trim())return String(f).trim()}return u}function Sn(e,n){return String(e||"").replace(/{{klant_naam}}/g,n.customerName||"klant").replace(/{{garage_naam}}/g,n.garageName||"Uw garage").replace(/{{factuur_nummer}}/g,n.invoiceNumber||"-").replace(/{{totaal_bedrag}}/g,n.amountText||"€0,00").replace(/{{betaaltermijn}}/g,String(n.paymentDays||14)).replace(/{{betaal_link}}/g,n.paymentLink||"").replace(/{{betaal_methode}}/g,n.paymentMethodLabel||"Mollie iDEAL").replace(/{{datum}}/g,n.today||new Date().toLocaleDateString("nl-NL")).replace(/{{kenteken}}/g,ie(n.licensePlate||"")).replace(/{{auto_merk}}/g,n.carModel||"Voertuig")}async function $n({jsPDFCtor:e,invoice:n,customerEmail:u="",customerPhone:m="",garageProfile:f,pdfSettings:k}){const o=new e({unit:"pt",format:"a4"}),h=o.internal.pageSize.getWidth(),g=40,N=k.primary_color||"#2563EB",E=(k.font||"helvetica").toLowerCase(),T=E.includes("times")||E.includes("georgia")?"times":E.includes("courier")?"courier":"helvetica",S=k.header_style||"professional",B=k.show_btw!==!1,F=k.show_iban!==!1,Y=k.show_kvk!==!1,R=k.footer_text||"",W=yn(N)||{r:37,g:99,b:235},se=Se(f,["name","garage_name"],"Garage"),de=Se(f,["address","adres"],"Adres onbekend"),ue=Se(f,["btw_nummer","btw","vat_number"],"Onbekend"),me=Se(f,["kvk_nummer","kvk","chamber_of_commerce"],"Onbekend"),L=Se(f,["iban"],"Onbekend"),_=80+(B?14:0)+(Y?14:0),D=Math.max(128,_+16);o.setFillColor(W.r,W.g,W.b),S==="modern"?(o.rect(0,0,h,D,"F"),o.setTextColor(255,255,255)):o.rect(0,0,h,4,"F"),S==="boxed"&&(o.setDrawColor(W.r,W.g,W.b),o.rect(g-10,28,h-g*2+20,D-12)),S==="split"&&(o.setDrawColor(W.r,W.g,W.b),o.line(h/2+10,40,h/2+10,D-10)),o.setFont(T,"bold"),o.setFontSize(18),o.text("FACTUUR",g,48),o.setFont(T,"normal"),o.setFontSize(10);let I=66;o.text(se,g,I),I+=14,o.text(de,g,I),I+=14,B&&o.text(`BTW nummer: ${ue}`,g,I),I+=14,Y&&o.text(`KVK nummer: ${me}`,g,I);const V=h-g-180;o.text(`Factuurnummer: ${n.invoiceNumber||n.id||"-"}`,V,94),o.text(`Factuurdatum: ${hn(n.completedAt)}`,V,108),S==="modern"&&o.setTextColor(0,0,0);let p=Math.max(I+20,128);o.setDrawColor(224,228,236),o.line(g,p,h-g,p),p+=18;const A=p;o.setFont(T,"bold"),o.text("Klant",g,p),o.setFont(T,"normal"),p+=14,o.text(n.customerName||"-",g,p),p+=14,o.text(`E-mail: ${u||"-"}`,g,p),p+=14,o.text(`Telefoon: ${m||"-"}`,g,p);const J=h/2+20;let G=A;o.setFont(T,"bold"),o.text("Voertuig",J,G),o.setFont(T,"normal"),G+=14,o.text(n.carModel||"-",J,G),G+=14,o.text(`Kenteken: ${ie(n.licensePlate)}`,J,G),p+=24,o.setDrawColor(224,228,236),o.line(g,p,h-g,p),p+=20,o.setFont(T,"bold"),o.text("Onderdelen",g,p),p+=16;const te=g,C=g+280,Q=g+350,j=g+440;o.setFontSize(9),o.text("Product",te,p),o.text("Aantal",C,p),o.text("Prijs",Q,p),o.text("Totaal",j,p),p+=10,o.line(g,p,h-g,p),o.setFont(T,"normal"),o.setFontSize(10);for(const b of n.parts)p+=16,p>700&&(o.addPage(),p=60),o.text(b.name||"-",te,p),o.text(String(b.quantity),C,p),o.text(v(b.price),Q,p),o.text(v(b.total),j,p);p+=22,o.setFont(T,"bold"),o.text("Arbeid",g,p),o.setFont(T,"normal"),p+=16,o.text(`${String(n.labour.hours||0)} x ${v(n.labour.rate||0)}/h`,g,p),o.text(v(n.labour.total||0),j,p),p+=18,o.line(g,p,h-g,p),p+=20;const re=h-g-200;if(o.text("Subtotaal",re,p),o.text(v(n.summary.subtotal),j,p),p+=16,o.text("BTW 21%",re,p),o.text(v(n.summary.vat),j,p),p+=18,o.setFont(T,"bold"),o.setFontSize(12),o.text("Totaal",re,p),o.text(v(n.summary.total),j,p),p+=36,o.setFont(T,"normal"),o.setFontSize(10),F&&(o.text(`IBAN: ${L}`,g,p),p+=14),o.text("Betaalinstructie: Gelieve binnen 14 dagen over te maken onder vermelding van het factuurnummer.",g,p,{maxWidth:h-g*2}),R){const b=o.internal.pageSize.getHeight();o.setTextColor(120,120,120),o.setFontSize(9),o.text(R,g,b-24,{maxWidth:h-g*2}),o.setTextColor(0,0,0)}return o.output("blob")}function ie(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function Ve(e){const n=String(e??"draft").trim().toLowerCase();return["paid","betaald"].includes(n)?"paid":["link_sent","link-sent","link sent","linkverstuurd","link_verstuurd","link verstuurd","sent","send","verzonden"].includes(n)?"link_sent":(["draft","pending","openstaand"].includes(n),"draft")}function Me({status:e,paymentLink:n,paymentLinkSentAt:u,paidAt:m,paymentStatus:f}={}){const k=Ve(e);if(k==="paid")return"paid";const o=String(f??"").trim().toLowerCase(),h=!!String(m??"").trim();if(o==="paid"||h)return"paid";const g=!!(String(n??"").trim()||String(u??"").trim());return k==="link_sent"||g?"link_sent":"draft"}function Ge(e){if(!e)return{};if(typeof e=="object")return e;try{return JSON.parse(String(e))}catch{return{}}}function Ln(e){return String(e??"").split(",").map(n=>n.trim()).filter(Boolean)}function Lt(e){var g,N;const n=(e.parts??[]).map(E=>{const T=Number(E.quantity??0),S=Number(E.price??0);return{name:String(E.name??"Item"),quantity:T,price:S,total:U(T*S)}}),u=Number(((g=e.labour)==null?void 0:g.hours)??0),m=Number(((N=e.labour)==null?void 0:N.rate)??0),f=U(u*m),k=U(n.reduce((E,T)=>E+T.total,0)+f),o=U(k*.21),h=U(k+o);return{id:String(e.id??""),completedAppointmentId:String(e.completedAppointmentId??""),bookingId:String(e.bookingId??""),garageId:String(e.garageId??""),licensePlate:String(e.licensePlate??"UNKNOWN"),customerName:Ce(e.customerName,e.licensePlate),carModel:String(e.carModel??"Unknown vehicle"),serviceTypes:Array.isArray(e.serviceTypes)?e.serviceTypes.map(String):["Other"],completedAt:e.completedAt,status:Me({status:e.status,paymentLink:e.paymentLink,paymentLinkSentAt:e.paymentLinkSentAt,paidAt:e.paidAt,paymentStatus:e.paymentStatus}),parts:n,labour:{hours:u,rate:m,total:f},summary:{subtotal:k,vat:o,total:h},paymentLink:String(e.paymentLink??""),paymentLinkSentAt:String(e.paymentLinkSentAt??""),paymentMethod:String(e.paymentMethod??""),paidAt:String(e.paidAt??"")}}function vt(e){const n=Ge(e.completion_notes),u=Array.isArray(n.service_types)?n.service_types.map(String):Ln(e.service),m=n.labour&&typeof n.labour=="object"?n.labour:{},f=Array.isArray(n.parts)?n.parts:[{name:"Service",quantity:1,price:0}],k=Me({status:n.status,paymentLink:n.payment_link,paymentLinkSentAt:n.payment_link_sent_at,paidAt:n.paid_at??n.paidAt,paymentStatus:n.payment_status}),o=String(e.license_plate??"");return Lt({id:String(e.id??""),completedAppointmentId:String(e.id??""),bookingId:String(e.booking_id??""),garageId:String(e.garage_id??""),licensePlate:o,customerName:Ce(n.customer_name??n.customerName,o),carModel:String(n.car_model||n.carModel||"Voertuig"),serviceTypes:u.length?u:["Service"],completedAt:String(e.completed_at??e.created_at??new Date().toISOString()),status:k,werkbonCreated:n.werkbon_created===!0,parts:f,labour:{hours:Number(m.hours??0),rate:Number(m.rate??0)},paymentLink:String(n.payment_link??""),paymentLinkSentAt:String(n.payment_link_sent_at??""),paymentMethod:String(n.payment_method??""),paidAt:String(n.paid_at??n.paidAt??"")})}function Mn(){const e=ze("werkbon-detail.html");if(document.head.querySelector(`link[rel="prefetch"][href="${e}"]`))return;const n=document.createElement("link");n.rel="prefetch",n.as="document",n.href=e,document.head.append(n)}function Mt(e,n=""){const u=Me({status:e,paymentLink:n}),m=Ke[u]??Ke.draft;return`<span class="status-chip ${m.className}">${m.label}</span>`}function Tn(e){const n=e.filter(o=>o.status!=="paid").reduce((o,h)=>o+h.summary.total,0),u=e.filter(o=>o.status==="link_sent").length,m=e.filter(o=>o.status==="draft").length,f=e.filter(o=>o.status==="paid").reduce((o,h)=>o+h.summary.total,0);return[{label:"Outstanding revenue",value:v(n),note:`${e.filter(o=>o.status!=="paid").length} open werkbon`},{label:"Ready to send",value:String(m),note:"Draft invoices waiting for customer delivery"},{label:"In payment flow",value:String(u),note:"Werkbonnen met verstuurde link"},{label:"Paid total",value:v(f),note:"Completed payments"}].map(o=>`
        <article class="metric-card werkbon-summary-card">
          <p class="werkbon-summary-label">${c(o.label)}</p>
          <strong class="werkbon-summary-value">${c(o.value)}</strong>
          <span class="metric-note">${c(o.note)}</span>
        </article>
      `).join("")}function _n(e){return`
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
  `}function En(e,n){if(!e)return"";const u=e.status==="paid"?"":`<button class="button werkbon-paid-button" type="button" data-werkbon-action="mark-paid" data-werkbon-id="${c(e.id)}">Mark as Paid</button>`;return`
    <div class="werkbon-drawer-shell">
      <button class="werkbon-drawer-backdrop" type="button" data-werkbon-action="close-modal" aria-label="Close werkbon details"></button>
      <aside class="werkbon-drawer-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonDrawerTitle">
        <div class="werkbon-drawer-head">
          <div>
            <p class="kicker">Werkbon details</p>
            <h2 id="werkbonDrawerTitle">${c(ie(e.licensePlate))}</h2>
            <p class="werkbon-drawer-subtitle">${c(e.customerName)} · ${c($t(e.completedAt))}</p>
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
              ${Mt(e.status,e.paymentLink)}
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
                  <strong>${c(v(e.labour.rate))}</strong>
                </div>
                <div>
                  <span class="werkbon-detail-label">Total</span>
                  <strong>${c(v(e.labour.total))}</strong>
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
              <div><span>Subtotal</span><strong>${c(v(e.summary.subtotal))}</strong></div>
              <div><span>VAT (21%)</span><strong>${c(v(e.summary.vat))}</strong></div>
              <div class="werkbon-summary-total"><span>Total price</span><strong>${c(v(e.summary.total))}</strong></div>
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
  `}function Tt(e,n){return`
    <article class="request-card werkbon-card ${n?"is-expanded":""}" data-werkbon-row-id="${c(e.id)}" tabindex="0">
      <div class="request-card-head">
        <div class="request-main">
          <span class="plate-chip">${c(ie(e.licensePlate))}</span>
          <div class="request-info">
            <p class="request-name">${c(e.customerName)}</p>
            <p class="request-vehicle">${c(e.carModel)}</p>
            <div class="request-services">${wn(Array.isArray(e.serviceTypes)?e.serviceTypes.join(", "):e.serviceTypes)}</div>
          </div>
        </div>

        <div class="request-meta werkbon-meta">
          <div class="werkbon-meta-top">
            <strong class="werkbon-price">${c(v(e.summary.total))}</strong>
          ${Mt(e.status,e.paymentLink)}
          ${e.status==="paid"&&e.paidAt?`<span class="werkbon-paid-at">${c(vn(e.paidAt))}</span>`:""}
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

      ${n?_n(e):""}
    </article>
  `}function _t(e){return`
    <div class="werkbon-payment-overlay" role="presentation">
      <div class="werkbon-payment-dialog" role="dialog" aria-modal="true" aria-labelledby="werkbonPaymentTitle">
        <h3 id="werkbonPaymentTitle">Kies betaalmethode</h3>
        <div class="werkbon-payment-grid">
          ${cn.map(n=>`
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
  `}function xn({isOpen:e,step:n,state:u,rdwStatus:m,rdwError:f,selectedPaymentMethod:k,isSaving:o,paymentModalOpen:h}){if(!e)return"";const N=n===1&&!(m==="success");return`
    <div class="werkbon-create-modal ${e?"is-open":""}" role="presentation">
      <div class="werkbon-create-shadow" data-create-action="attempt-close" aria-hidden="true">
        <section class="werkbon-create-panel" role="dialog" aria-modal="true" aria-labelledby="werkbonCreateTitle">
          <header class="werkbon-create-header">
            <div>
              
              <h2 id="werkbonCreateTitle">Werkbon Maken</h2>
            </div>
            <button class="icon-button" type="button" data-create-action="attempt-close" aria-label="Sluiten">&times;</button>
          </header>

          <nav class="werkbon-create-stepper" aria-label="Werkbon stappen">${ht(n)}</nav>

          <div class="werkbon-create-content">${yt({step:n,state:u,rdwStatus:m})}</div>

          <footer class="werkbon-create-actions">
            <div class="werkbon-create-actions-left">
              <button class="button subtle" type="button" data-create-action="prev-step" ${n===1?"disabled":""}>Vorige</button>
            </div>
            <div class="werkbon-create-actions-right">
              ${n<5?`<button class="button subtle" type="button" data-create-action="next-step" ${N?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${o?"disabled":""}>${o?"Opslaan...":"Opslaan"}</button>`}
            </div>
          </footer>

          <div data-create-saving-host="true">${o?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':""}</div>
        </section>

        <div data-create-payment-host="true">${h?_t(k):""}</div>
      </div>
    </div>
  `}function An({step:e,rdwStatus:n,isSaving:u}){const m=e===1&&n!=="success";return{left:`<button class="button subtle" type="button" data-create-action="prev-step" ${e===1?"disabled":""}>Vorige</button>`,right:e<5?`<button class="button subtle" type="button" data-create-action="next-step" ${m?"disabled":""}>Volgende</button>`:`<button class="button" type="button" data-create-action="save-werkbon" ${u?"disabled":""}>${u?"Opslaan...":"Opslaan"}</button>`}}function Cn(e){return`
    <div class="werkbon-empty-state">
      <div>
        <h3>No invoices yet</h3>
        <p class="muted">${c(e)}</p>
      </div>
    </div>
  `}function Pn(e,n){return e.length?e.map(Tt).join(""):Cn(n?"No invoices match the current filters.":"Completed appointments will appear here once a werkbon is created.")}function Nn(e){return e.parts.map(n=>`
        <div class="werkbon-line-item">
          <span>${c(n.name)}</span>
          <span>${c(String(n.quantity))}</span>
          <span>${c(v(n.price))}</span>
          <strong>${c(v(n.total))}</strong>
        </div>
      `).join("")}function Dn(e){return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Werkbon ${c(ie(e.licensePlate))}</title>
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
          <p><strong>License plate:</strong> ${c(ie(e.licensePlate))}</p>
          <p><strong>Customer:</strong> ${c(e.customerName)}</p>
          <p><strong>Date:</strong> ${c($t(e.completedAt))}</p>
          <p><strong>Status:</strong> ${c(Ke[e.status].label)}</p>
        </div>
        <div class="section">
          <h2>Parts</h2>
          <div class="row"><strong>Product</strong><strong>Qty</strong><strong>Price</strong><strong>Total</strong></div>
          ${e.parts.map(n=>`<div class="row"><span>${c(n.name)}</span><span>${c(String(n.quantity))}</span><span>${c(v(n.price))}</span><span>${c(v(n.total))}</span></div>`).join("")}
        </div>
        <div class="section">
          <h2>Labour</h2>
          <p>${c(String(e.labour.hours))}h × ${c(v(e.labour.rate))} = ${c(v(e.labour.total))}</p>
        </div>
        <div class="summary">
          <div><span>Subtotal</span><span>${c(v(e.summary.subtotal))}</span></div>
          <div><span>VAT (21%)</span><span>${c(v(e.summary.vat))}</span></div>
          <div><span>Total</span><strong>${c(v(e.summary.total))}</strong></div>
        </div>
      </body>
    </html>
  `}function In(e){const n=window.open("","_blank","width=960,height=720,noopener,noreferrer");return n?(n.document.open(),n.document.write(Dn(e)),n.document.close(),n.focus(),window.setTimeout(()=>{n.print()},180),!0):!1}async function Hn(e){var it,st,lt,ct,dt,ut,mt,pt;if(!e)return;document.body.style.overflow="";const n=await Zt();if(!n)return;if(!n.isAdmin&&!n.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}en(n.activeGarage);const u=n.isAdmin?null:[(it=n.activeGarage)==null?void 0:it.id].filter(Boolean),{shell:m,contentArea:f,setUnreadEmailCount:k}=tn({activePage:"werkbon",title:"Werkbon & Payments",headerNote:"Manage invoices and payment status",userEmail:n.user.email,onLogout:nn,garage:n.activeGarage,isAdmin:n.isAdmin}),o=document.createElement("div");o.id="werkbonCreateModalHost",e.replaceChildren(m,o),Mn(),f.innerHTML=`
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
  `;const h=f.querySelector("#werkbonNotice"),g=f.querySelector("#werkbonSummary"),N=f.querySelector("#werkbonList"),E=f.querySelector("#werkbonDrawer"),T=f.querySelector("#werkbonCreateTrigger"),S=f.querySelector("#werkbonStatusFilter"),B=f.querySelector("#werkbonSearch"),F=new URLSearchParams(window.location.search),Y=String(F.get("action")??"").toLowerCase()==="create",R=an("werkbon",{}),W=String(R.searchTerm??"").trim(),se=String(R.statusFilter??"all").trim()||"all",de=String(R.expandedInvoiceId??"").trim(),ue=String(R.selectedInvoiceId??"").trim(),me=String(R.editingInvoiceId??"").trim();let L=[],_=((st=L[0])==null?void 0:st.id)??"",D="",I=!1,V="",p=!1,A=1,J=!1,G="",te=!1,C="idle",Q="",j=0,re=0,b=gt(),Ue=0,ke=null,le=null,Z={...n.activeGarage,mollieMethod:String(((lt=n.activeGarage)==null?void 0:lt.mollieMethod)??"none"),mollieApiKey:((ct=n.activeGarage)==null?void 0:ct.mollieApiKey)??null,paymentDays:parseInt(String(((dt=n.activeGarage)==null?void 0:dt.paymentDays)??"14"),10)||14,garageName:String(((ut=n.activeGarage)==null?void 0:ut.garageName)||((mt=n.activeGarage)==null?void 0:mt.name)||"Garage")};const Pe=new Map;let Ye={};const Et=()=>{We("werkbon",{searchTerm:B instanceof HTMLInputElement?B.value.trim():"",statusFilter:S instanceof HTMLSelectElement?S.value:"all",expandedInvoiceId:_,selectedInvoiceId:D,editingInvoiceId:V})},O=t=>{h instanceof HTMLElement&&(h.textContent=t,h.hidden=!t,window.clearTimeout(Ue),t&&(Ue=window.setTimeout(()=>{h.hidden=!0,h.textContent=""},2600)))},H=(t,r="success")=>{if(r==="error"){O(String(t||"Er ging iets mis"));return}O(String(t||"Actie uitgevoerd."))},xt=async()=>{var r;const t=(r=n.activeGarage)==null?void 0:r.id;if(!(!q||!t))try{const{data:a,error:i}=await q.from("garages").select("*").eq("id",t).maybeSingle();if(i||!a)return;Z={...Z,...a,paymentLink:a.payment_link??Z.paymentLink??null,mollieMethod:String(a.mollie_method??Z.mollieMethod??"none"),mollieApiKey:a.mollie_api_key??Z.mollieApiKey??null,paymentDays:parseInt(String(a.payment_days??Z.paymentDays??14),10)||14,garageName:String(a.garage_name||a.name||Z.garageName||"Garage")}}catch{}},At=async()=>{var r;const t=(r=n.activeGarage)==null?void 0:r.id;if(!(!q||!t))try{const{data:a}=await q.from("garage_pdf_settings").select("*").eq("garage_id",t).maybeSingle();a&&(Ye=a)}catch{}},pe=()=>{ke instanceof HTMLElement&&ke.remove(),ke=null,le=null},Je=({title:t,body:r,confirmLabel:a,cancelLabel:i,confirmClassName:l=""})=>new Promise(s=>{const d=document.createElement("div");d.innerHTML=`
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title" id="confirm-title">${c(t)}</h2>
            <p id="confirm-desc">${c(r)}</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button subtle" type="button" data-confirm-action="cancel">${c(i)}</button>
            <button class="button ${c(l)}" type="button" data-confirm-action="continue">${c(a)}</button>
          </div>
        </div>
      </div>
    `,document.body.append(d);const w=d.querySelector(".confirm-dialog-overlay"),y=d.querySelector('[data-confirm-action="continue"]');y instanceof HTMLButtonElement&&window.setTimeout(()=>y.focus(),50);const M=$=>{d.remove(),s($)};w instanceof HTMLElement&&w.addEventListener("click",$=>{$.target===w&&M(!1)}),d.addEventListener("click",$=>{const K=$.target instanceof HTMLElement?$.target:null,X=K==null?void 0:K.closest("[data-confirm-action]");X instanceof HTMLElement&&M(X.dataset.confirmAction==="continue")}),d.addEventListener("keydown",$=>{$.key==="Escape"&&M(!1)})}),Ct=()=>{j&&(window.clearTimeout(j),j=0),re+=1,A=1,J=!1,G="",te=!1,C="idle",Q="",b=gt()},z=({forceMount:t=!1,refreshContent:r=!1}={})=>{if(!(o instanceof HTMLElement))return;if(!p){o.innerHTML&&(o.innerHTML=""),document.body.style.overflow="";return}if(!((t?null:o.querySelector(".werkbon-create-modal"))instanceof HTMLElement)){o.innerHTML=xn({isOpen:p,step:A,state:b,rdwStatus:C,rdwError:Q,selectedPaymentMethod:G,isSaving:te,paymentModalOpen:J}),document.body.style.overflow="hidden";return}const i=o.querySelector(".werkbon-create-stepper");if(i instanceof HTMLElement&&(i.innerHTML=ht(A)),r){const M=o.querySelector(".werkbon-create-content");M instanceof HTMLElement&&(M.innerHTML=yt({step:A,state:b,rdwStatus:C}))}const l=o.querySelector('[data-create-action="prev-step"]');l instanceof HTMLButtonElement&&(l.disabled=A===1);const s=o.querySelector(".werkbon-create-actions-left"),d=o.querySelector(".werkbon-create-actions-right");if(s instanceof HTMLElement&&d instanceof HTMLElement){const M=An({step:A,rdwStatus:C,isSaving:te});s.innerHTML=M.left,d.innerHTML=M.right}const w=o.querySelector('[data-create-saving-host="true"]');w instanceof HTMLElement&&(w.innerHTML=te?'<div class="werkbon-create-saving">Opslaan naar Supabase...</div>':"");const y=o.querySelector('[data-create-payment-host="true"]');y instanceof HTMLElement&&(y.innerHTML=J?_t(G):""),document.body.style.overflow="hidden"},Ne=({rerenderPage:t=!1}={})=>{if(p=!1,pe(),Ct(),t){x();return}z()},De=async()=>{if(!pn(b)){Ne();return}await sn("Er staan niet-opgeslagen gegevens in deze werkbon. Weet je zeker dat je wilt sluiten?","Werkbon sluiten")&&Ne()},Pt=async t=>{if(!q||!t)return Date.now()%1e5;const{data:r,error:a}=await q.from("garages").select("invoice_sequence").eq("id",t).maybeSingle();if(a)throw a;const l=Math.max(1e3,Number((r==null?void 0:r.invoice_sequence)??1e3))+1,{error:s}=await q.from("garages").update({invoice_sequence:l}).eq("id",t);if(s)throw s;return l},Nt=async()=>{var X,fe,Ee,ve,he,ee,oe;const t=(X=n.activeGarage)==null?void 0:X.id;if(!t)throw new Error("Geen garage gevonden voor deze gebruiker.");const r=ae(((fe=b.voertuig)==null?void 0:fe.kenteken)??"");if(r.length<6)throw new Error("Voer eerst een geldig kenteken in.");if(C!=="success")throw new Error("Haal eerst RDW voertuiggegevens op.");const a=ce(b),i=await Pt(t),s=`wb-${String(Date.now()).slice(-4)}`,d=`F-${String(i).padStart(6,"0")}`,w=new Date().toISOString(),y=Ce((Ee=b.klant)==null?void 0:Ee.naam,r),M=String(((ve=b.voertuig)==null?void 0:ve.title)??"").trim()||"Voertuig",$=gn(b),K={werkbon_id:s,status:"draft",werkbon_created:!0,customer_name:y,customer_email:String(((he=b.klant)==null?void 0:he.email)??"").trim(),customer_phone:String(((ee=b.klant)==null?void 0:ee.telefoon)??"").trim(),car_model:M,service_types:$,km_stand:0,vat_enabled:P(b.btw)>0,description:String(((oe=b.klant)==null?void 0:oe.omschrijving)??"").trim(),internal_note:"",invoice_number:d,paid_at:G?new Date().toISOString().slice(0,10):null,completed_at:w,parts:a.onderdelenRows.map(ye=>({name:ye.naam,quantity:ye.aantal,price:ye.prijs})),labour:{hours:a.labourHours,rate:a.labourRate},totals:{subtotal:a.subtotaal,vat:a.btwBedrag,total:a.totaal},payment_method:G};return{garageId:t,kenteken:r,completedAt:w,completionNotes:K,serviceSummary:$.join(", "),werkbonId:s,invoiceNumber:d}},Dt=async()=>{if(!q)throw new Error("Supabase is niet geconfigureerd.");te=!0,z();try{const t=await Nt(),{data:r,error:a}=await q.from("completed_appointments").insert({garage_id:t.garageId,booking_id:null,completed_at:t.completedAt,appointment_date:t.completedAt.slice(0,10),appointment_time:t.completedAt.slice(11,19),license_plate:t.kenteken,service:t.serviceSummary||"Onderhoud",completion_notes:JSON.stringify(t.completionNotes)}).select("id, booking_id, garage_id, completed_at, created_at, license_plate, service, completion_notes").single();if(a)throw a;const i=vt(r);L=[i,...L],_=i.id,O(`Werkbon ${t.werkbonId} opgeslagen als ${t.invoiceNumber}.`),Ne()}finally{te=!1,x()}},It=async()=>{var w,y,M;const t=await wt(),r=ce(b),a=new t({unit:"pt",format:"a4"}),i=String(((w=b.voertuig)==null?void 0:w.kenteken)??"-"),l=Ce((y=b.klant)==null?void 0:y.naam,i),s=String(((M=b.klant)==null?void 0:M.omschrijving)??"").trim();let d=56;a.setFont("helvetica","bold"),a.setFontSize(18),a.text("Werkbon / Factuur",42,d),d+=26,a.setFont("helvetica","normal"),a.setFontSize(11),a.text(`Datum: ${new Date().toLocaleDateString("nl-NL")}`,42,d),d+=16,a.text(`Kenteken: ${i}`,42,d),d+=16,a.text(`Klant: ${l}`,42,d),d+=16,s&&(a.text(`Omschrijving: ${s}`,42,d,{maxWidth:520}),d+=22),a.setFont("helvetica","bold"),a.text("Onderdelen",42,d),d+=16,a.setFont("helvetica","normal"),r.onderdelenRows.forEach($=>{a.text(`${$.naam}  x${$.aantal}  ${v($.prijs)}  ${v($.totaal)}`,42,d),d+=14}),d+=12,a.text(`Arbeid: ${v(r.arbeidTotaal)}`,42,d),d+=14,a.text(`Subtotaal: ${v(r.subtotaal)}`,42,d),d+=14,a.text(`BTW: ${v(r.btwBedrag)}`,42,d),d+=14,a.setFont("helvetica","bold"),a.text(`Totaal: ${v(r.totaal)}`,42,d),a.save(`werkbon-${ae(i)||"nieuw"}.pdf`)},Ht=async()=>{var i,l,s;if(!q)throw new Error("Supabase is niet geconfigureerd.");const t=String(((i=b.klant)==null?void 0:i.email)??"").trim();if(!t)throw new Error("Geen e-mailadres beschikbaar.");const r=ce(b),{error:a}=await q.functions.invoke("send-werkbon-email",{body:{to:t,template:"werkbon_factuur_nl",subject:`Werkbon ${$e(((l=b.voertuig)==null?void 0:l.kenteken)??"")}`,customerName:String(((s=b.klant)==null?void 0:s.naam)??"Klant"),total:r.totaal}});if(a)throw a},qt=()=>{var i,l,s;const t=String(((i=b.klant)==null?void 0:i.telefoon)??"").replace(/[^0-9]/g,""),r=ce(b),a=`Hallo ${String(((l=b.klant)==null?void 0:l.naam)??"")}, uw werkbon (${$e(((s=b.voertuig)==null?void 0:s.kenteken)??"")}) staat klaar. Totaal: ${v(r.totaal)}.`;window.open(`https://wa.me/${encodeURIComponent(t)}?text=${encodeURIComponent(a)}`,"_blank","noopener,noreferrer")},ge=()=>{const t=o.querySelector("#vehicleLookupStatus");if(t instanceof HTMLElement){if(t.classList.remove("is-success","is-error"),C==="loading"){t.textContent="Kenteken controleren...";return}if(C==="success"){t.textContent="Kenteken gevonden",t.classList.add("is-success");return}if(C==="error"){t.textContent="Kenteken niet gevonden",t.classList.add("is-error");return}t.textContent="Typ kenteken om te zoeken"}},be=()=>{const t=o.querySelector('[data-create-action="next-step"]');if(t instanceof HTMLButtonElement){if(A===1){t.disabled=C!=="success";return}t.disabled=A===5}},Qe=()=>{var y,M,$,K,X;const t=o.querySelector("#vehiclePreviewTitle"),r=o.querySelector("#vehiclePreviewBuildYear"),a=o.querySelector("#vehiclePreviewApk"),i=o.querySelector("#vehiclePreviewColor"),l=o.querySelector("#vehiclePreviewFuel");if(!(t instanceof HTMLElement)||!(r instanceof HTMLElement)||!(a instanceof HTMLElement)||!(i instanceof HTMLElement)||!(l instanceof HTMLElement))return;const s=String(((y=b.voertuig)==null?void 0:y.title)??"").trim(),d=String(((M=b.voertuig)==null?void 0:M.buildYear)??"").trim(),w=d?`${s||"Voertuig gegevens"} (${d})`:s||"Voertuig gegevens";t.textContent=w,r.textContent=d,a.textContent=String((($=b.voertuig)==null?void 0:$.apkExpiryDate)??"").trim(),i.textContent=String(((K=b.voertuig)==null?void 0:K.color)??"").trim(),l.textContent=String(((X=b.voertuig)==null?void 0:X.fuel)??"").trim()},Bt=()=>{const t=ce(b),r=o.querySelector("[data-parts-subtotal-value]");r instanceof HTMLElement&&(r.textContent=v(t.onderdelenSubtotaal)),o.querySelectorAll("[data-part-total-index]").forEach(i=>{if(!(i instanceof HTMLElement))return;const l=Number(i.getAttribute("data-part-total-index")??-1),s=t.onderdelenRows[l];s&&(i.textContent=v(s.totaal))})},Ie=()=>{const t=ce(b),r={arbeid:v(t.arbeidTotaal),subtotaal:v(t.subtotaal),btw:v(t.btwBedrag),totaal:v(t.totaal)};o.querySelectorAll("[data-create-total]").forEach(i=>{if(!(i instanceof HTMLElement))return;const l=String(i.getAttribute("data-create-total")??"");l in r&&(i.textContent=r[l])})},Ft=()=>{var a;const t=!!((a=b.arbeid)!=null&&a.enabled);o.querySelectorAll("[data-arbeid-field]").forEach(i=>{if(i instanceof HTMLInputElement){if(i.getAttribute("data-arbeid-field")==="enabled"){i.checked=t;return}i.disabled=!t}}),Ie()},Xe=async({showShortInputError:t=!1}={})=>{var i;const r=ae(((i=b.voertuig)==null?void 0:i.kenteken)??"");if(r.length<6){C="idle",Q=t?"Voer minimaal 6 tekens in voor het kenteken.":"",ge(),be();return}const a=++re;C="loading",Q="",ge(),be();try{const l=await ft(r);if(a!==re)return;if(!l){C="error",Q="Geen RDW voertuig gevonden voor dit kenteken.",b.voertuig={...b.voertuig,title:"",buildYear:"",apkExpiryDate:"",color:"",fuel:""},ge(),Qe(),be();return}b.voertuig={...b.voertuig,kenteken:$e(r),...l},C="success",Q="",ge(),Qe(),be()}catch{if(a!==re)return;C="error",Q="RDW service is momenteel niet beschikbaar.",ge(),be()}},Te=(t,r)=>{L=L.map(a=>a.id===t?Lt(r(a)):a)},jt=t=>L.find(r=>r.id===t)??null,He=t=>{var r;return String((t==null?void 0:t.garageId)||((r=n.activeGarage)==null?void 0:r.id)||"")},Wt=t=>{if(!(N instanceof HTMLElement))return null;const r=N.querySelectorAll("[data-werkbon-row-id]");for(const a of r)if(a instanceof HTMLElement&&String(a.dataset.werkbonRowId??"")===String(t))return a;return null},qe=async(t,r)=>{if(!q)throw new Error("Supabase is niet geconfigureerd.");const a=String(t.completedAppointmentId||t.id||"");if(!a)throw new Error("Werkbon ID ontbreekt.");const i=He(t);let l=q.from("completed_appointments").select("id, garage_id, completion_notes").eq("id",a);i&&(l=l.eq("garage_id",i));const{data:s,error:d}=await l.maybeSingle();if(d)throw d;if(!s)throw new Error("Werkbon niet gevonden.");const y={...Ge(s.completion_notes),...r};let M=q.from("completed_appointments").update({completion_notes:JSON.stringify(y)}).eq("id",a);i&&(M=M.eq("garage_id",i));const{error:$}=await M;if($)throw $;return y},Be=async t=>{const r=jt(t);if(!r)throw new Error("Werkbon niet gevonden.");const a=String(r.completedAppointmentId||r.id||"");if(!a||!q)return{invoice:r,customer_name:r.customerName,customer_email:"",customer_phone:"",factuurnummer:"",total:r.summary.total,status:r.status};const i=He(r);let l=q.from("werkbonnen").select("werkbon_id, garage_id, customer_name, customer_email, customer_phone, invoice_number, total_amount, invoice_status, payment_link, payment_link_sent_at, payment_method").eq("werkbon_id",a);i&&(l=l.eq("garage_id",i));const{data:s,error:d}=await l.maybeSingle();if(d)throw d;const w=Number((s==null?void 0:s.total_amount)??0);return{invoice:r,customer_name:String((s==null?void 0:s.customer_name)??r.customerName??"Klant"),customer_email:String((s==null?void 0:s.customer_email)??"").trim(),customer_phone:String((s==null?void 0:s.customer_phone)??"").trim(),factuurnummer:String((s==null?void 0:s.invoice_number)??"").trim(),total:Number.isFinite(w)&&w>0?w:r.summary.total,status:Me({status:(s==null?void 0:s.invoice_status)??r.status??"draft",paymentLink:(s==null?void 0:s.payment_link)??r.paymentLink,paymentLinkSentAt:(s==null?void 0:s.payment_link_sent_at)??r.paymentLinkSentAt,paidAt:r.paidAt}),payment_link:String((s==null?void 0:s.payment_link)??"").trim(),payment_link_sent_at:String((s==null?void 0:s.payment_link_sent_at)??"").trim(),payment_method:String((s==null?void 0:s.payment_method)??"").trim()}},Ze=(t,r)=>{Te(t,a=>({...a,status:Ve(r)}))},Fe=async t=>t.customer_email?(await qe(t.invoice,{status:"link_sent"}),Ze(t.invoice.id,"link_sent"),H("Factuur verstuurd per e-mail ✓","success"),!0):(H("Geen e-mailadres bekend voor deze klant","error"),!1),_e=async(t,{includePaymentLink:r=!0}={})=>{var ve,he;if(!t.customer_phone)return H("Geen telefoonnummer bekend voor deze klant","error"),!1;const a=Oe(t.customer_phone);if(!a)return H("Geen telefoonnummer bekend voor deze klant","error"),!1;const i=Z||n.activeGarage,l=String((i==null?void 0:i.mollieMethod)||"none"),s=Math.max(1,parseInt(String((i==null?void 0:i.paymentDays)??14),10)||14),d=String((i==null?void 0:i.garageName)||(i==null?void 0:i.name)||"Uw garage");let w=null;if(r){try{w=await Xt(i,{totalAmount:t.total,factuurnummer:t.factuurnummer||"",customerName:t.customer_name||"Klant",paymentDays:s,completedAppointmentId:((ve=t.invoice)==null?void 0:ve.completedAppointmentId)||((he=t.invoice)==null?void 0:he.id)||""},ee=>H(ee,"error"),q)}catch{}if(l!=="none"&&!w)return H("Geen betaallink gemaakt. Controleer Mollie API-sleutel/instellingen en probeer opnieuw.","error"),!1}const M=String((i==null?void 0:i.payment_method)||(i==null?void 0:i.paymentMethod)||"mollie").toLowerCase()==="tikkie"?"Tikkie":"Mollie iDEAL",$=`€${Re(t.total)}`,K=new Date().toLocaleDateString("nl-NL"),X=String((i==null?void 0:i.whatsapp_template)||(i==null?void 0:i.whatsappTemplate)||"").trim();let fe="";if(X)fe=Sn(X,{customerName:t.customer_name||"klant",garageName:d,invoiceNumber:t.factuurnummer||t.invoice.id||"-",amountText:$,paymentDays:s,paymentLink:r&&(w||t.payment_link)||"",paymentMethodLabel:M,today:K,licensePlate:t.invoice.licensePlate||"",carModel:t.invoice.carModel||"Voertuig"});else{const ee=[`Beste ${t.customer_name||"klant"},`,"",`Hierbij uw factuur van ${d}.`,"",`Factuurnummer: ${t.factuurnummer||"-"}`,`Totaalbedrag: ${$}`,`Betaaltermijn: ${s} dagen`];r&&w&&ee.push("",`Betaal eenvoudig via ${M}:`,w),ee.push("","Met vriendelijke groet,",d),fe=ee.join(`
`)}const Ee=`https://wa.me/${encodeURIComponent(a)}?text=${encodeURIComponent(fe)}`;if(window.open(Ee,"_blank","noopener,noreferrer"),r&&w)try{await qe(t.invoice,{status:t.invoice.status!=="paid"?"link_sent":t.invoice.status,payment_link:w,payment_link_sent_at:new Date().toISOString(),payment_method:"mollie"});const ee=new Date().toISOString(),oe=L.findIndex(ye=>ye.id===t.invoice.id);oe!==-1&&(L[oe]={...L[oe],status:L[oe].status!=="paid"?"link_sent":L[oe].status,paymentLink:w,paymentLinkSentAt:ee,paymentMethod:"mollie"})}catch{}else Ze(t.invoice.id,"link_sent");return H("WhatsApp bericht geopend ✓","success"),!0},Ot=async(t,r)=>{const a=await Be(r),i=!!a.customer_email,l=!!Oe(a.customer_phone);return bt({triggerButton:t,title:"📄 PDF Acties",options:[{id:"download",icon:"⬇️",title:"Downloaden",description:"Sla de factuur op als PDF",onSelect:async s=>{s.setLoading("download",!0);try{const d=await wt(),w=await $n({jsPDFCtor:d,invoice:{...a.invoice,invoiceNumber:a.factuurnummer||a.invoice.id||a.invoice.invoiceNumber},customerEmail:a.customer_email,customerPhone:a.customer_phone,garageProfile:Z,pdfSettings:Ye}),y=`${a.factuurnummer||a.invoice.id||"factuur"}.pdf`,M=URL.createObjectURL(w),$=document.createElement("a");$.href=M,$.download=y,$.click(),URL.revokeObjectURL(M),s.forceClose(),H("PDF wordt gedownload ✓","success")}catch{H("PDF genereren mislukt","error")}finally{s.setLoading("download",!1)}}},{id:"email",icon:"📧",title:"Stuur via E-mail",description:i?"Verstuur naar klant e-mail":"⚠️ Geen e-mailadres bekend. Voeg een e-mailadres toe aan deze werkbon.",disabled:!i,onSelect:async(s,d)=>{s.setLoading(d,!0);const w=await Fe(a);s.setLoading(d,!1),w&&(s.forceClose(),x())}},{id:"whatsapp",icon:"💬",title:"Stuur via WhatsApp",description:l?"Deel alleen de factuur via WhatsApp (zonder betaallink)":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.",disabled:!l,onSelect:async(s,d)=>{s.setLoading(d,!0);const w=await _e(a,{includePaymentLink:!1});s.setLoading(d,!1),w&&(s.forceClose(),x())}}]})},Rt=async(t,r)=>{var w;const a=await Be(r),i=a.invoice,l=!!Oe(a.customer_phone),d=String(((w=Z||n.activeGarage)==null?void 0:w.mollieMethod)||"none")!=="none";return bt({triggerButton:t,title:"💳 Betaalmethode",subtitle:`Totaal te betalen: €${Re(a.total)}`,options:[{id:"cash",icon:"💵",title:"Contant",description:"Registreer contante betaling",onSelect:async y=>{y.setBodyContent(`
              <div class="action-popup-confirm">
                <p class="action-popup-confirm-title">Bevestig contante betaling</p>
                <p class="action-popup-confirm-subtitle">€${c(Re(a.total))} ontvangen?</p>
                <div class="action-popup-confirm-actions">
                  <button type="button" class="button subtle" data-popup-cancel>Annuleren</button>
                  <button type="button" class="button" data-popup-confirm>✓ Bevestigen</button>
                </div>
              </div>
            `,M=>{const $=M.querySelector("[data-popup-cancel]"),K=M.querySelector("[data-popup-confirm]");$==null||$.addEventListener("click",()=>y.forceClose()),K==null||K.addEventListener("click",async()=>{await tt(i.id,t),y.forceClose(),x(),H("Contante betaling geregistreerd ✓","success")})})}},{id:"mollie_whatsapp",icon:"💬",title:"Betaallink via WhatsApp",description:d?l?"Stuur iDEAL link naar klant":"⚠️ Geen telefoonnummer bekend. Voeg een telefoonnummer toe.":"⚠️ Geen Mollie account verbonden. Ga naar Instellingen → Betalingen.",disabled:!d||!l,onSelect:async(y,M)=>{y.setLoading(M,!0);const $=await _e(a);y.setLoading(M,!1),$&&(y.forceClose(),x(),H("Betaallink verstuurd via WhatsApp ✓","success"))}}]})},zt=(t,r)=>{pe();const a=t.getBoundingClientRect(),i=document.createElement("div");i.className="send-dropdown",i.setAttribute("data-send-dropdown","true"),i.innerHTML=`
      <button type="button" data-send-option="email" data-werkbon-id="${c(r.invoice.id)}">
        📧 Per e-mail ${r.customer_email?"":'<span class="send-dropdown-muted">(geen e-mail)</span>'}
      </button>
      <button type="button" data-send-option="whatsapp" data-werkbon-id="${c(r.invoice.id)}">
        💬 Via WhatsApp ${r.customer_phone?"":'<span class="send-dropdown-muted">(geen telefoon)</span>'}
      </button>
      <button type="button" data-send-option="both" data-werkbon-id="${c(r.invoice.id)}">
        📤 Beide versturen
      </button>
    `,document.body.append(i);const l=window.innerWidth,s=window.innerHeight,d=i.getBoundingClientRect(),w=Math.max(8,Math.min(a.left,l-d.width-8)),y=a.bottom+d.height+8>s?Math.max(8,a.top-d.height-8):a.bottom+6;i.style.left=`${Math.round(w)}px`,i.style.top=`${Math.round(y)}px`,ke=i,le=r},we=(t,r)=>{if(!(t instanceof HTMLButtonElement))return()=>{};const a=t.textContent||"";return t.disabled=!0,t.textContent=r,()=>{t.disabled=!1,t.textContent=a}},Kt=t=>new Promise(r=>{const a=Wt(t);if(!(a instanceof HTMLElement)){r();return}a.classList.add("werkbon-row-removing"),window.setTimeout(r,220)}),je=(t,r=!1)=>{D=t,I=!0,V=r?t:"",x()},et=(t,r)=>{const a=L.find(i=>i.id===t);if(a){if(a.status==="paid"){O(`Invoice for ${ie(a.licensePlate)} is already paid.`),je(t,!1);return}Te(t,i=>({...i,status:"link_sent"})),O(`Werkbon sent to customer via ${r}.`),je(t,!1)}},tt=async(t,r)=>{const a=L.find(s=>s.id===t);if(!a)return;if(a.status==="paid"){O(`Invoice for ${ie(a.licensePlate)} is already marked as paid.`),je(t,!1);return}if(!await Je({title:"Werkbon markeren als betaald?",body:"Dit registreert de betaling als vandaag ontvangen.",confirmLabel:"Markeer als betaald",cancelLabel:"Annuleren"}))return;const l=we(r,"Opslaan...");try{await qe(a,{status:"paid",payment_method:"manual",payment_date:new Date().toISOString()}),Te(t,s=>({...s,status:"paid"})),H("Werkbon gemarkeerd als betaald ✓","success"),x()}catch{H("Er ging iets mis","error"),l();return}l()},Vt=t=>{const r=L.find(y=>y.id===t);if(!r||!(E instanceof HTMLElement))return;const a=E.querySelector("[data-werkbon-edit-status]"),i=E.querySelector("[data-werkbon-edit-hours]"),l=E.querySelector("[data-werkbon-edit-rate]");if(!(a instanceof HTMLSelectElement)||!(i instanceof HTMLInputElement)||!(l instanceof HTMLInputElement))return;const s=Ve(a.value),d=Math.max(0,Number(i.value||r.labour.hours)),w=Math.max(0,Number(l.value||r.labour.rate));Te(t,y=>({...y,status:s,labour:{...y.labour,hours:d,rate:w}})),V="",D=t,I=!0,O("Werkbon updated."),x()},Gt=async(t,r)=>{const a=L.find(s=>s.id===t);if(!a||!await Je({title:"Werkbon verwijderen?",body:"Deze actie kan niet ongedaan worden gemaakt. De werkbon wordt permanent verwijderd.",confirmLabel:"Verwijderen",cancelLabel:"Annuleren",confirmClassName:"danger"}))return;const l=we(r,"Opslaan...");try{if(!q)throw new Error("Supabase is niet geconfigureerd.");const s=String(a.completedAppointmentId||a.id||"");if(!s)throw new Error("Werkbon ID ontbreekt.");let d=q.from("completed_appointments").delete().eq("id",s);const w=He(a);w&&(d=d.eq("garage_id",w));const{error:y}=await d;if(y)throw y}catch{H("Verwijderen mislukt","error"),l();return}await Kt(t),L=L.filter(s=>s.id!==t),_===t&&(_=""),D===t&&(D="",I=!1,V=""),H("Werkbon verwijderd","success"),pe(),x(),l()},Ut=async(t,r,a)=>{var i;if(t==="view"){We("werkbonDetail",{selectedWerkbonId:r,editMode:!1}),window.location.href=ze(`werkbon-detail.html?id=${encodeURIComponent(r)}`);return}if(t==="edit"){We("werkbonDetail",{selectedWerkbonId:r,editMode:!0}),window.location.href=ze(`werkbon-detail.html?id=${encodeURIComponent(r)}&edit=true`);return}if(t==="cancel-edit"){V="",I=!1,x();return}if(t==="save-edit"){Vt(r);return}if(t==="pdf-actions"){if(!(a instanceof HTMLButtonElement))return;const l=we(a,"Laden...");try{await Ot(a,r)}catch{H("Er ging iets mis","error")}l();return}if(t==="payment-actions"){if(!(a instanceof HTMLButtonElement))return;const l=we(a,"Laden...");try{await Rt(a,r)}catch{H("Er ging iets mis","error")}l();return}if(t==="send-customer"){if(!(a instanceof HTMLButtonElement))return;if(((i=le==null?void 0:le.invoice)==null?void 0:i.id)===r&&ke instanceof HTMLElement){pe();return}const l=we(a,"Laden...");try{const s=await Be(r);zt(a,s)}catch{H("Er ging iets mis","error")}l();return}if(t==="send-sms"){et(r,"SMS");return}if(t==="send-whatsapp"){et(r,"WhatsApp");return}if(t==="mark-paid"){await tt(r,a);return}if(t==="download-pdf"){const l=L.find(d=>d.id===r);if(!l)return;const s=In(l);O(s?"Print dialog opened for PDF export.":"Allow pop-ups to export this werkbon as PDF.");return}t==="delete"&&await Gt(r,a)},x=()=>{if(!(g instanceof HTMLElement)||!(N instanceof HTMLElement)||!(E instanceof HTMLElement)||!(o instanceof HTMLElement))return;const t=S instanceof HTMLSelectElement?S.value:"all",r=B instanceof HTMLInputElement?B.value.trim().toLowerCase():"",a=[...L].sort((l,s)=>{var d,w;return((d=Le(s.completedAt))==null?void 0:d.getTime())-((w=Le(l.completedAt))==null?void 0:w.getTime())}).filter(l=>{const s=[l.licensePlate,l.customerName,l.carModel].join(" ").toLowerCase(),d=!r||s.includes(r),w=t==="all"||Me(l)===t;return d&&w});g.innerHTML=Tn(L),N.innerHTML=a.length?a.map(l=>Tt(l,_===l.id)).join(""):Pn(a,!!(r||t!=="all"));const i=L.find(l=>l.id===D)??null;E.classList.toggle("is-open",I&&!!i),E.innerHTML=I&&i?En(i,V===i.id):"",z(),Et()};T==null||T.addEventListener("click",()=>{p=!0,A=1,z({forceMount:!0,refreshContent:!0})});const nt=async t=>{const r=t.closest("[data-create-action]");if(!(r instanceof HTMLElement))return!1;const a=String(r.dataset.createAction??"");if(a==="attempt-close")return r.classList.contains("werkbon-create-shadow")&&t.closest(".werkbon-create-panel")||await De(),!0;if(a==="jump-step"){const i=Number(r.dataset.step??A);return A=Math.min(5,Math.max(1,i)),J=!1,z({refreshContent:!0}),!0}if(a==="prev-step")return A=Math.max(1,A-1),z({refreshContent:!0}),!0;if(a==="next-step")return A===1&&C!=="success"&&(j&&(window.clearTimeout(j),j=0),await Xe({showShortInputError:!0})),A===1&&C!=="success"?(O("Rond eerst de RDW validatie af."),!0):(A=Math.min(5,A+1),z({refreshContent:!0}),!0);if(a==="remove-part"){const i=Number(r.dataset.partIndex??-1);return Number.isFinite(i)&&i>=0&&(b.onderdelen.splice(i,1),z({refreshContent:!0})),!0}if(a==="quick-part")return b.onderdelen.push({naam:String(r.dataset.partName??"Onderdeel"),aantal:1,prijs:P(r.dataset.partPrice,0)}),z({refreshContent:!0}),!0;if(a==="add-manual-part")return b.onderdelen.push({naam:"",aantal:1,prijs:0}),z({refreshContent:!0}),!0;if(a==="open-payment")return J=!0,z(),!0;if(a==="close-payment")return J=!1,z(),!0;if(a==="select-payment")return G=String(r.dataset.paymentMethod??""),J=!1,O(`Betaalmethode gekozen: ${G}.`),z(),!0;if(a==="save-werkbon"){try{await Dt()}catch(i){O(i instanceof Error?i.message:"Opslaan mislukt.")}return!0}if(a==="create-pdf"){try{await It(),O("PDF gegenereerd.")}catch(i){O(i instanceof Error?i.message:"PDF genereren mislukt.")}return!0}if(a==="email-werkbon"){try{await Ht(),O("Werkbon e-mail verstuurd.")}catch(i){O(i instanceof Error?i.message:"E-mail verzenden mislukt.")}return!0}return a==="whatsapp-werkbon"?(qt(),O("WhatsApp bericht geopend."),!0):!1},at=t=>{if(!(t instanceof HTMLElement)||!p)return!1;if(t.matches("[data-create-field='kenteken']")){if(t instanceof HTMLInputElement){const r=$e(t.value);t.value=r,b.voertuig={...b.voertuig,kenteken:r},C="idle",Q="",j&&(window.clearTimeout(j),j=0);const a=ae(r),i=o.querySelector("#vehicleLookupStatus");i instanceof HTMLElement&&(i.classList.remove("is-success","is-error"),i.textContent=a.length>=6?"Kenteken controleren...":"Typ kenteken om te zoeken"),be(),a.length>=6&&(j=window.setTimeout(()=>{j=0,Xe()},420))}return!0}if(t.matches("[data-create-field='btw']"))return t instanceof HTMLSelectElement&&(b.btw=P(t.value,21),Ie()),!0;if(t.matches("[data-klant-field]")){const r=String(t.getAttribute("data-klant-field")??"");if(!r)return!0;const a=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:"";return b.klant={...b.klant,[r]:a},!0}if(t.matches("[data-arbeid-field]")){const r=String(t.getAttribute("data-arbeid-field")??"");if(!r)return!0;const a={...b.arbeid};return r==="enabled"&&t instanceof HTMLInputElement?(a.enabled=t.checked,b.arbeid=a,Ft(),!0):(t instanceof HTMLInputElement&&(a[r]=P(t.value,r==="tarief"?65:0)),b.arbeid=a,Ie(),!0)}if(t.matches("[data-part-field]")){const r=Number(t.getAttribute("data-part-index")??-1),a=String(t.getAttribute("data-part-field")??"");if(!Number.isFinite(r)||r<0||!a)return!0;const l={...b.onderdelen[r]??{naam:"",aantal:1,prijs:0}};return a==="naam"&&(l.naam=t instanceof HTMLInputElement?t.value:""),a==="aantal"&&(l.aantal=t instanceof HTMLInputElement?P(t.value,1):1),a==="prijs"&&(l.prijs=t instanceof HTMLInputElement?P(t.value,0):0),b.onderdelen[r]=l,Bt(),!0}return!1};o.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;r&&await nt(r)}),o.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&at(r)}),o.addEventListener("keydown",t=>{t.key==="Escape"&&p&&(t.preventDefault(),De())}),f.addEventListener("click",async t=>{const r=t.target instanceof Element?t.target:null;if(!r||await nt(r))return;const a=r.closest("[data-werkbon-action]");if(a instanceof HTMLElement){const l=String(a.dataset.werkbonAction??""),s=String(a.dataset.werkbonId??"");if(l==="close-modal"){I=!1,V="",x();return}if(l==="toggle"){_=_===s?"":s,x();return}if(l==="close-drawer"){_="",V="",x();return}if(!s)return;await Ut(l,s,a);return}const i=r.closest("[data-werkbon-row-id]");if(i instanceof HTMLElement&&!r.closest("button, input, select, textarea, a")){const l=String(i.dataset.werkbonRowId??"");l&&(_=_===l?"":l,x())}});const rt=window.__werkbonDocumentClickHandler;typeof rt=="function"&&document.removeEventListener("click",rt);const ot=async t=>{const r=t.target instanceof Element?t.target:null;if(!r)return;const a=r.closest("[data-send-option]");if(a instanceof HTMLButtonElement&&le){t.preventDefault();const i=String(a.dataset.sendOption??""),l=le;pe();try{i==="email"?await Fe(l):i==="whatsapp"?await _e(l):i==="both"&&(await Fe(l),await _e(l)),x()}catch{H("Er ging iets mis","error")}return}r.closest("[data-send-dropdown]")||r.closest('[data-werkbon-action="send-customer"]')||pe()};window.__werkbonDocumentClickHandler=ot,document.addEventListener("click",ot),f.addEventListener("keydown",t=>{const r=t.target instanceof HTMLElement?t.target:null;if(r){if(t.key==="Escape"&&p){t.preventDefault(),De();return}if((t.key==="Enter"||t.key===" ")&&r.matches("[data-werkbon-row-id]")){t.preventDefault();const a=String(r.dataset.werkbonRowId??"");a&&(_=_===a?"":a,x())}if(t.key==="Escape"&&I){I=!1,V="",x();return}t.key==="Escape"&&_&&(_="",x())}}),f.addEventListener("input",t=>{const r=t.target;r instanceof HTMLElement&&at(r)}),B==null||B.addEventListener("input",x),S==null||S.addEventListener("change",x),await xt(),await At();try{let t=[];try{t=await Jt({garageIds:u})}catch{}L=t.filter(l=>Ge(l.completion_notes).werkbon_created===!0).map(vt).sort((l,s)=>new Date(s.completedAt??0).getTime()-new Date(l.completedAt??0).getTime());const r=new Set(L.map(l=>l.licensePlate).filter(l=>l&&l!=="UNKNOWN").map(l=>ae(l)));for(const l of r)if(l&&!Pe.has(l))try{const s=await ft(l);s&&Pe.set(l,s)}catch(s){console.error(`Failed to fetch vehicle for ${l}:`,s)}L=L.map(l=>{const s=ae(l.licensePlate),d=Pe.get(s)||bn(s);return{...l,carModel:d.title+(d.buildYear?` (${d.buildYear})`:"")||l.carModel}});const a=await rn({garageIds:u}),i=on(a);if(k(i.unread),B instanceof HTMLInputElement&&W&&(B.value=W),S instanceof HTMLSelectElement){const l=Array.from(S.options).some(s=>s.value===se);S.value=l?se:"all"}_=de||(((pt=L[0])==null?void 0:pt.id)??""),D=ue,V=me,D&&L.some(l=>l.id===D)&&(I=!0)}catch(t){L=[],k(0),console.error(t)}x(),Y&&(p=!0,A=1,z({forceMount:!0,refreshContent:!0}))}const qn=document.querySelector("#app");Qt();Hn(qn);
