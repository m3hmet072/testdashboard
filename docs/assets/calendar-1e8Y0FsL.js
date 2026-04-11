import"./theme-8bHWXU28.js";/* empty css                      */import{n as ht,t as bt,r as Ze}from"./theme-DMvK0XTA.js";import{h as qe,p as ot}from"./rdwService-B_7TgNhE.js";import{m as Ye}from"./confirmDialog-DOdHvhLG.js";import{G as st,H as j,x as We,K as rt,Z as dt,z as Ve,W as kt,U as yt}from"./requestCard-CqIap2Dn.js";import{n as St,r as Mt,t as Lt,b as qt,K as ze,H as Xe,Y as Tt,a as et,e as tt,Q as wt}from"./branding-D-58_Ovy.js";const He=["#2563EB","#EAB308","#F97316","#EF4444","#22C55E","#8B5CF6","#EC4899"],de=["APK","Banden","Onderhoud","Airco","Occasions","Remmen"],Ae="Manual appointment created in dashboard.",At=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function Et(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function je(e){return At.get(String(e??"").trim().toLowerCase())??"other"}function $t(e){const n=String(e??"").trim();if(!n)return["other"];const l=n.split(n.includes(",")?/,/g:/\+|\/|&| and /gi).map(a=>a.trim()).filter(Boolean);return l.length?l:[n]}function ct(e){const n=new Date(e);return Number.isNaN(n.getTime())?null:n}function Ht(e){const n=ct(e);if(!n)return"";const l=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${l}-${a}-${r}`}function xt(e){const n=ct(e);return n?`${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}`:"09:00"}function Qe(e){const[n,l]=j(e).split(":").map(Number),a=(n*60+l+60)%(24*60);return`${String(Math.floor(a/60)).padStart(2,"0")}:${String(a%60).padStart(2,"0")}`}function Ct(e){const n=String(e??"").match(/\btitle\s*:\s*([^\n]+)/i);return((n==null?void 0:n[1])??"").trim()}function Nt(e){const n=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((n==null?void 0:n[1])??"").trim()}function Dt(e){const n=String(e??"").replace(Ae,"").trim(),l=n.match(/\bmessage\s*:\s*([\s\S]*)/i),a=i=>String(i??"").split(/\r?\n/g).filter(p=>{const u=String(p??"").trim();return!(!u||/^\s*(until|end|tot)\s*:?\s*\d{1,2}:\d{2}\s*$/i.test(u)||/^\s*all[\s_-]?day\s*:\s*(true|false|1|0|yes|no|ja|nee)\s*$/i.test(u))}).join(`
`).trim();if(l)return a(l[1]);const r=n.split(/\r?\n/g).filter(i=>{const p=i.trim();return p&&!/^\s*(name|title|end|allday|all[\s_-]?day|message)\s*:/i.test(p)});return a(r.join(`
`))}function Ft(e){const n=String(e??"").match(/\bend\s*:\s*([^\n]+)/i);return j(((n==null?void 0:n[1])??"").trim(),"")}function nt(e){const n=String(e??"").match(/\ball[\s_-]?day\s*:\s*([^\n]+)/i);if(!(n!=null&&n[1]))return!1;const l=String(n[1]).trim().toLowerCase();return l==="true"||l==="1"||l==="yes"||l==="ja"}function It({onSubmit:e}){const n=new Set(de.map(t=>je(t))),l=document.createElement("div");l.className="calendar-quickadd-backdrop",l.setAttribute("data-calendar-quickadd-root","true"),l.hidden=!0,l.innerHTML=`
    <section class="calendar-quickadd-modal" role="dialog" aria-modal="true" aria-labelledby="calendarQuickAddTitle">
    <div class="calendar-quickadd-head">
      <h3 id="calendarQuickAddTitle">Afspraak toevoegen</h3>
      <button type="button" class="icon-button" data-calendar-quickadd-close aria-label="Close quick add">✕</button>
    </div>
    <form id="calendarQuickAddForm" class="calendar-quickadd-form" novalidate>
      <div class="calendar-quickadd-panel" data-calendar-quickadd-panel="quick">
        <div class="calendar-quickadd-row">
          <label>
            Titel / naam
            <input id="calendarQuickAddName" name="title" type="text" placeholder="Naam of beschrijving" required autocomplete="off" />
          </label>
          <label>
            Telefoonnummer
            <input id="calendarQuickAddPhone" name="phone" type="tel" placeholder="Optioneel" autocomplete="off" />
          </label>
        </div>
        <div class="calendar-quickadd-row">
          <label>
            Datum
            <div id="calendarQuickAddDatePicker" class="request-date-picker" data-schedule-date-picker>
              <input type="hidden" name="date" data-schedule-edit-date value="" />
              <button class="request-date-trigger" type="button" data-schedule-date-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-date-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div class="request-date-options" role="listbox" data-schedule-date-options></div>
            </div>
          </label>
          <label for="calendarQuickAddAllDay">
            Hele dag
            <span class="calendar-quickadd-toggle">
              <input id="calendarQuickAddAllDay" name="allDay" type="checkbox" />
              <span>Hele dag</span>
            </span>
          </label>
        </div>
        <fieldset class="calendar-quickadd-colors" aria-label="Kleur">
          <legend>Kleur</legend>
          ${He.map((t,o)=>`
            <label class="calendar-color-option">
              <input type="radio" name="color" value="${t}" ${o===0?"checked":""} />
              <span class="calendar-color-dot" style="background:${t};--dot-color:${t}" aria-hidden="true"></span>
            </label>
          `).join("")}
        </fieldset>
        <div id="calendarQuickAddTimeRow" class="calendar-quickadd-time-row">
          <label>
            Vanaf
            <div id="calendarQuickAddStartPicker" class="request-time-picker" data-schedule-time-picker>
              <input type="hidden" name="start" data-schedule-edit-time value="" />
              <button class="request-time-trigger" type="button" data-schedule-time-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-time-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div class="request-time-options" role="listbox" data-schedule-time-options></div>
            </div>
          </label>
          <label>
            Tot
            <div id="calendarQuickAddEndPicker" class="request-time-picker" data-schedule-time-picker>
              <input type="hidden" name="end" data-schedule-edit-time value="" />
              <button class="request-time-trigger" type="button" data-schedule-time-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-time-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div class="request-time-options" role="listbox" data-schedule-time-options></div>
            </div>
          </label>
        </div>
        <label>
          Notitie
          <textarea id="calendarQuickAddNote" name="note" rows="2" placeholder="Optioneel"></textarea>
        </label>
      </div>

      <div class="calendar-quickadd-panel" data-calendar-quickadd-panel="full" hidden>
        <div class="calendar-quickadd-row">
          <label>
            Titel / naam
            <input id="calendarQuickAddFullName" name="fullTitle" type="text" placeholder="Naam of beschrijving" autocomplete="off" />
          </label>
          <label>
            Telefoonnummer
            <input id="calendarQuickAddFullPhone" name="fullPhone" type="tel" placeholder="Optioneel" autocomplete="off" />
          </label>
        </div>
        <div class="calendar-quickadd-row">
          <label>
            Kenteken
            <input id="calendarQuickAddFullLicensePlate" name="fullLicensePlate" type="text" placeholder="Bijv. 12-ABC-3" autocomplete="off" />
            <p id="calendarQuickAddFullVehicleHint" class="calendar-quickadd-vehicle-hint" aria-live="polite"></p>
          </label>
          <label>
            Service
            <div id="calendarQuickAddFullServiceUi" class="calendar-quickadd-service-select">
              <select id="calendarQuickAddFullServiceSelect" name="fullService" class="calendar-quickadd-service-native" tabindex="-1" aria-hidden="true">
                ${de.map((t,o)=>`<option value="${t}" ${o===0?"selected":""}>${t}</option>`).join("")}
              </select>
              <button
                type="button"
                id="calendarQuickAddFullServiceTrigger"
                class="calendar-quickadd-service-trigger service-option-${je(de[0])}"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <span class="calendar-quickadd-service-dot" aria-hidden="true"></span>
                <span id="calendarQuickAddFullServiceLabel">${de[0]}</span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div id="calendarQuickAddFullServiceMenu" class="calendar-quickadd-service-menu" role="listbox" hidden>
                ${de.map(t=>`
                  <button
                    type="button"
                    class="calendar-quickadd-service-item service-option-${je(t)}"
                    data-quickadd-service-value="${t}"
                  >
                    <span class="calendar-quickadd-service-dot" aria-hidden="true"></span>
                    <span>${t}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </label>
        </div>

        <fieldset id="calendarQuickAddFullColors" class="calendar-quickadd-colors" aria-label="Kleur" hidden>
          <legend>Kleur</legend>
          ${He.map((t,o)=>`
            <label class="calendar-color-option">
              <input type="radio" name="fullColor" value="${t}" ${o===0?"checked":""} />
              <span class="calendar-color-dot" style="background:${t};--dot-color:${t}" aria-hidden="true"></span>
            </label>
          `).join("")}
        </fieldset>

        <label id="calendarQuickAddFullServiceGroup">
          Voeg eigen service toe
          <div class="calendar-quickadd-service-input-row">
            <input id="calendarQuickAddFullServiceInput" type="text" placeholder="Bijv. Wintercheck" autocomplete="off" />
            <button id="calendarQuickAddFullAddServiceBtn" type="button" class="button subtle" style="display:none;">Toevoegen</button>
          </div>
        </label>

        <div class="calendar-quickadd-row">
          <label>
            Datum
            <div id="calendarQuickAddFullDatePicker" class="request-date-picker" data-schedule-date-picker>
              <input type="hidden" name="fullDate" data-schedule-edit-date value="" />
              <button class="request-date-trigger" type="button" data-schedule-date-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-date-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div class="request-date-options" role="listbox" data-schedule-date-options></div>
            </div>
          </label>
          <label for="calendarQuickAddFullAllDay">
            Hele dag
            <span class="calendar-quickadd-toggle">
              <input id="calendarQuickAddFullAllDay" name="fullAllDay" type="checkbox" />
              <span>Hele dag</span>
            </span>
          </label>
        </div>

        <div id="calendarQuickAddFullTimeRow" class="calendar-quickadd-time-row">
          <label>
            Vanaf
            <div id="calendarQuickAddFullStartPicker" class="request-time-picker" data-schedule-time-picker>
              <input type="hidden" name="fullStart" data-schedule-edit-time value="" />
              <button class="request-time-trigger" type="button" data-schedule-time-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-time-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div class="request-time-options" role="listbox" data-schedule-time-options></div>
            </div>
          </label>
          <label>
            Tot
            <div id="calendarQuickAddFullEndPicker" class="request-time-picker" data-schedule-time-picker>
              <input type="hidden" name="fullEnd" data-schedule-edit-time value="" />
              <button class="request-time-trigger" type="button" data-schedule-time-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-time-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div class="request-time-options" role="listbox" data-schedule-time-options></div>
            </div>
          </label>
        </div>

        <label>
          Notitie
          <textarea id="calendarQuickAddFullNote" name="fullNote" rows="2" placeholder="Optioneel"></textarea>
        </label>
      </div>

      <div class="manual-appointment-actions">
        <button type="button" class="button subtle" data-calendar-quickadd-close>Annuleren</button>
        <button type="submit" class="button">Snel opslaan</button>
      </div>
      <p id="calendarQuickAddStatus" class="status-text" role="status" aria-live="polite"></p>
    </form>
    </section>
  `,document.querySelectorAll(".calendar-quickadd-backdrop[data-calendar-quickadd-root='true']").forEach(t=>{t!==l&&t.remove()}),document.body.append(l);const a=l.querySelector(".calendar-quickadd-modal"),r=a.querySelector("#calendarQuickAddForm"),i=a.querySelector("#calendarQuickAddName"),p=a.querySelector("#calendarQuickAddDatePicker"),u=a.querySelector("#calendarQuickAddStartPicker"),k=a.querySelector("#calendarQuickAddEndPicker"),s=a.querySelector("#calendarQuickAddAllDay"),w=a.querySelector("#calendarQuickAddTimeRow"),f=a.querySelector("#calendarQuickAddPhone"),ee=a.querySelector("#calendarQuickAddNote"),$=a.querySelector("#calendarQuickAddStatus"),R=a.querySelector("button[type='submit']"),ue=a.querySelector("[data-calendar-quickadd-panel='quick']"),ke=a.querySelector("[data-calendar-quickadd-panel='full']"),C=a.querySelector("#calendarQuickAddFullName"),B=a.querySelector("#calendarQuickAddFullPhone"),D=a.querySelector("#calendarQuickAddFullLicensePlate"),_=a.querySelector("#calendarQuickAddFullServiceSelect"),A=a.querySelector("#calendarQuickAddFullServiceUi"),y=a.querySelector("#calendarQuickAddFullServiceTrigger"),H=a.querySelector("#calendarQuickAddFullServiceLabel"),S=a.querySelector("#calendarQuickAddFullServiceMenu"),E=a.querySelector("#calendarQuickAddFullServiceInput"),x=a.querySelector("#calendarQuickAddFullAddServiceBtn"),P=a.querySelector("#calendarQuickAddFullSelectedServices"),pe=a.querySelector("#calendarQuickAddFullVehicleHint"),te=a.querySelector("#calendarQuickAddFullDatePicker"),ne=a.querySelector("#calendarQuickAddFullStartPicker"),J=a.querySelector("#calendarQuickAddFullEndPicker"),U=a.querySelector("#calendarQuickAddFullAllDay"),K=a.querySelector("#calendarQuickAddFullTimeRow"),z=a.querySelector("#calendarQuickAddFullNote"),Ce=a.querySelector("#calendarQuickAddFullColors"),Ee=a.querySelector("#calendarQuickAddFullServiceGroup");let he="create",ae="",ie=[],O=[],Ne=0,v=null,d=!1;const m=()=>{const t=te==null?void 0:te.querySelector("[data-schedule-edit-date]"),o=ne==null?void 0:ne.querySelector("[data-schedule-edit-time]"),c=J==null?void 0:J.querySelector("[data-schedule-edit-time]");return{mode:he,editingId:ae,name:C instanceof HTMLInputElement?C.value.trim():"",phone:B instanceof HTMLInputElement?B.value.trim():"",licensePlate:D instanceof HTMLInputElement?qe(D.value):"",note:z instanceof HTMLTextAreaElement?z.value.trim():"",date:t instanceof HTMLInputElement?t.value.trim():"",startTime:o instanceof HTMLInputElement?j(o.value.trim(),"09:00"):"09:00",endTime:c instanceof HTMLInputElement?j(c.value.trim(),"10:00"):"10:00",isAllDay:U instanceof HTMLInputElement?U.checked:!1,color:r.querySelector("input[name='fullColor']:checked")instanceof HTMLInputElement?r.querySelector("input[name='fullColor']:checked").value:He[0],presetServices:[...O],customServices:[...ie],customServiceInputDraft:E instanceof HTMLInputElement?E.value.trim():""}},q=()=>{v=m()},Y=()=>v?JSON.stringify(m())!==JSON.stringify(v):!1,N=(t,o="")=>{pe instanceof HTMLElement&&(pe.textContent=String(t??""),pe.classList.remove("is-loading","is-error"),o==="loading"&&pe.classList.add("is-loading"),o==="error"&&pe.classList.add("is-error"))},X=async()=>{const t=qe(D instanceof HTMLInputElement?D.value:""),o=++Ne;if(!t||t.length<6){N("");return}N("Auto ophalen...","loading");try{const c=await ot(t);if(o!==Ne)return;if(!(c!=null&&c.title)){N("Geen voertuig gevonden","error");return}const T=c.buildYear&&c.buildYear!=="Onbekend"?` (${c.buildYear})`:"";N(`${c.title}${T}`)}catch{if(o!==Ne)return;N("Voertuig niet beschikbaar","error")}},W=(t,o)=>{if(t instanceof HTMLElement){for(const c of n)t.classList.remove(`service-option-${c}`);t.classList.add(`service-option-${je(o)}`)}},Z=()=>{S instanceof HTMLElement&&(S.hidden=!0),y instanceof HTMLButtonElement&&y.setAttribute("aria-expanded","false")},le=()=>{_ instanceof HTMLSelectElement&&(_.value=O[0]??"")},g=()=>{const t=O[0]??"";H instanceof HTMLElement&&(H.textContent=t?O.length>1?`${t} (+${O.length-1})`:t:"Kies service"),W(y,t||de[0]),S instanceof HTMLElement&&S.querySelectorAll("[data-quickadd-service-value]").forEach(o=>{if(!(o instanceof HTMLElement))return;const c=String(o.dataset.quickaddServiceValue??""),T=O.includes(c);o.setAttribute("aria-selected",T?"true":"false"),o.classList.toggle("is-selected",T)}),le()},h=t=>{O=Array.from(new Set((Array.isArray(t)?t:[]).map(o=>String(o??"").trim()).filter(o=>de.includes(o)))),g()},M=t=>{const o=String(t??"").trim();de.includes(o)&&(O=O.includes(o)?O.filter(c=>c!==o):[...O,o],g())},b=()=>{P instanceof HTMLElement&&(P.innerHTML=ie.map((t,o)=>`
        <span class="service-chip service-chip-other" data-quickadd-custom-index="${o}">
          ${Et(t)}
          <button type="button" class="service-chip-remove" data-quickadd-remove-custom-index="${o}" aria-label="Service verwijderen">×</button>
        </span>`).join(""))},F=()=>{!(E instanceof HTMLInputElement)||!(x instanceof HTMLButtonElement)||(x.style.display=E.value.trim().length>0?"block":"none")},oe=()=>{if(!(E instanceof HTMLInputElement))return;const t=E.value.trim();if(!t||ie.includes(t)){F();return}ie.push(t),E.value="",b(),F(),E.focus()};E==null||E.addEventListener("input",F),E==null||E.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),oe())}),x==null||x.addEventListener("click",t=>{t.preventDefault(),oe()}),y==null||y.addEventListener("click",()=>{if(!(S instanceof HTMLElement))return;const t=S.hidden;S.hidden=!t,y.setAttribute("aria-expanded",t?"true":"false")}),S==null||S.addEventListener("click",t=>{var o;const c=(o=t.target instanceof Element?t.target:null)==null?void 0:o.closest("[data-quickadd-service-value]");c instanceof HTMLElement&&(t.preventDefault(),M(c.dataset.quickaddServiceValue??""))}),_ instanceof HTMLSelectElement&&h([_.value||de[0]]);const me=()=>{const t=!!qe(D instanceof HTMLInputElement?D.value:"");Ce instanceof HTMLElement&&(Ce.hidden=t),A instanceof HTMLElement&&(A.hidden=!1),Ee instanceof HTMLElement&&(Ee.hidden=!1)},Te=t=>{if(!(r instanceof HTMLFormElement))return;for(const c of r.querySelectorAll("input[name='color'], input[name='fullColor']"))if(c instanceof HTMLInputElement&&c.value===String(t??"")){c.checked=!0;return}const o=r.querySelector("input[name='color']");o instanceof HTMLInputElement&&(o.checked=!0)},se=(t,o)=>{if(!(t instanceof HTMLElement))return;const c=We(o),T=t.querySelector("[data-schedule-edit-date]"),V=t.querySelector("[data-schedule-date-label]"),G=t.querySelector("[data-schedule-date-options]");T instanceof HTMLInputElement&&(T.value=c),V instanceof HTMLElement&&(V.textContent=rt(c)),G instanceof HTMLElement&&(G.innerHTML=dt(c))},I=(t,o)=>{if(!(t instanceof HTMLElement))return;const c=j(o),T=t.querySelector("[data-schedule-edit-time]"),V=t.querySelector("[data-schedule-time-label]"),G=t.querySelector("[data-schedule-time-options]");T instanceof HTMLInputElement&&(T.value=c),V instanceof HTMLElement&&(V.textContent=c),G instanceof HTMLElement&&(G.innerHTML=Ve(c))},re=(t,o,c,T)=>{if(!(t instanceof HTMLElement))return;const V=o instanceof HTMLInputElement&&o.checked;if(t.classList.toggle("is-hidden",V),V){const Se=c==null?void 0:c.querySelector("[data-schedule-time-label]"),Me=T==null?void 0:T.querySelector("[data-schedule-time-label]");Se instanceof HTMLElement&&(Se.textContent="All day"),Me instanceof HTMLElement&&(Me.textContent="All day");return}const G=c==null?void 0:c.querySelector("[data-schedule-edit-time]"),ge=T==null?void 0:T.querySelector("[data-schedule-edit-time]"),fe=c==null?void 0:c.querySelector("[data-schedule-time-label]"),ve=T==null?void 0:T.querySelector("[data-schedule-time-label]");fe instanceof HTMLElement&&G instanceof HTMLInputElement&&(fe.textContent=j(G.value)),ve instanceof HTMLElement&&ge instanceof HTMLInputElement&&(ve.textContent=j(ge.value))},Q=()=>{re(w,s,u,k),re(K,U,ne,J)};s==null||s.addEventListener("change",Q),U==null||U.addEventListener("change",Q);const De=()=>{R instanceof HTMLButtonElement&&(R.textContent=he==="edit"?"Wijzigingen opslaan":"Opslaan")},Pe=()=>{ue instanceof HTMLElement&&(ue.hidden=!0),ke instanceof HTMLElement&&(ke.hidden=!1),De()},ye=()=>{l.hidden=!0,d=!1},Fe=(t,o)=>{he="create",ae="",ie=[],Pe(),i instanceof HTMLInputElement&&(i.value=""),f instanceof HTMLInputElement&&(f.value=""),ee instanceof HTMLTextAreaElement&&(ee.value=""),C instanceof HTMLInputElement&&(C.value=""),B instanceof HTMLInputElement&&(B.value=""),D instanceof HTMLInputElement&&(D.value=""),N(""),_ instanceof HTMLSelectElement&&h([]),E instanceof HTMLInputElement&&(E.value=""),z instanceof HTMLTextAreaElement&&(z.value=""),b(),F(),me(),Z(),$ instanceof HTMLElement&&($.textContent="",$.className="status-text"),Te(He[0]),se(p,t),se(te,t);const c=j(o||"09:00");I(u,c),I(k,Qe(c)),I(ne,c),I(J,Qe(c)),s instanceof HTMLInputElement&&(s.checked=!o),U instanceof HTMLInputElement&&(U.checked=!o),Q(),l.hidden=!1,setTimeout(()=>{C instanceof HTMLInputElement&&C.focus()},60),q()},$e=t=>{if(!t)return;he="edit",ae=String(t.id??""),Pe();const o=t.appointmentAt??t.createdAt,c=We(Ht(o)),T=j(xt(o)),V=j(Ft(t.message)||Qe(T)),G=Ct(t.message)||Nt(t.message)||String(t.name??t.title??"").trim(),ge=Dt(t.message),fe=String(t.phone??"").trim(),ve=qe(t.licensePlate),Se=$t(t.service).map(Le=>String(Le??"").trim()).filter(Boolean),Me=Se.filter(Le=>de.includes(Le)),Ke=Se.filter(Le=>!de.includes(Le)),Ie=!!ve&&ve!=="UNKNOWN";i instanceof HTMLInputElement&&(i.value=G),f instanceof HTMLInputElement&&(f.value=fe==="0000000000"?"":fe),ee instanceof HTMLTextAreaElement&&(ee.value=ge===Ae?"":ge),$ instanceof HTMLElement&&($.textContent="",$.className="status-text"),C instanceof HTMLInputElement&&(C.value=G),B instanceof HTMLInputElement&&(B.value=fe==="0000000000"?"":fe),D instanceof HTMLInputElement&&(D.value=Ie?ve:""),Ie?(N("Auto ophalen...","loading"),X()):N(""),z instanceof HTMLTextAreaElement&&(z.value=ge===Ae?"":ge),ie=Ke,b(),h(Me),Te(String(t.color??"")||He[0]),se(p,c),se(te,c),I(u,T),I(k,V),I(ne,T),I(J,V),s instanceof HTMLInputElement&&(s.checked=nt(t.message)),U instanceof HTMLInputElement&&(U.checked=nt(t.message)),me(),Q(),l.hidden=!1,setTimeout(()=>{C instanceof HTMLInputElement&&C.focus()},60),q()};return a.addEventListener("click",t=>{const o=t.target instanceof Element?t.target:null;if(!o||st(a,o)||o.closest("[data-quickadd-service-value]"))return;A instanceof HTMLElement&&!o.closest("#calendarQuickAddFullServiceUi")&&Z();const c=o.closest("[data-quickadd-remove-custom-index]");if(c instanceof HTMLElement){const T=Number(c.dataset.quickaddRemoveCustomIndex??-1);T>=0&&(ie.splice(T,1),b());return}o.closest("[data-calendar-quickadd-close]")&&ye()}),l.addEventListener("click",async t=>{if(t.target!==l)return;if(!Y()){ye();return}if(d)return;d=!0;const o=await Ye("You have unsaved changes. Close without saving?","Discard changes?");d=!1,o&&ye()}),a.addEventListener("keydown",t=>{if(t.key==="Escape"){if(S instanceof HTMLElement&&!S.hidden){Z();return}ye()}}),D==null||D.addEventListener("input",()=>{me(),X()}),r==null||r.addEventListener("submit",async t=>{t.preventDefault();const o=C instanceof HTMLInputElement?C.value.trim():"",c=B instanceof HTMLInputElement?B.value.trim():"",T=z instanceof HTMLTextAreaElement?z.value.trim():"",V=te==null?void 0:te.querySelector("[data-schedule-edit-date]"),G=ne==null?void 0:ne.querySelector("[data-schedule-edit-time]"),ge=J==null?void 0:J.querySelector("[data-schedule-edit-time]"),fe=r.querySelector("input[name='fullColor']:checked"),ve=U instanceof HTMLInputElement&&U.checked,Se=V instanceof HTMLInputElement?V.value.trim():"",Me=!ve&&G instanceof HTMLInputElement?G.value.trim():"09:00",Ke=!ve&&ge instanceof HTMLInputElement?j(ge.value.trim(),Qe(Me)):Qe(Me),Ie=qe(D instanceof HTMLInputElement?D.value:""),Le=!Ie,gt=Le&&fe instanceof HTMLInputElement?fe.value:He[0],ft=[...O,...ie].map(Be=>Be.trim()).filter(Boolean).join(", ");if(!o){$ instanceof HTMLElement&&($.textContent="Vul een naam in.",$.className="status-text warning"),C instanceof HTMLInputElement&&C.focus();return}if(!Se){$ instanceof HTMLElement&&($.textContent="Geen datum geselecteerd.",$.className="status-text warning");return}R instanceof HTMLButtonElement&&(R.disabled=!0),$ instanceof HTMLElement&&($.textContent=he==="edit"?"Opslaan...":"Toevoegen...",$.className="status-text");try{await e({mode:he,editingBookingId:ae,name:o,phone:c,note:T,date:Se,time:Me,endTime:Ke,isAllDay:ve,color:gt,service:ft,licensePlate:Ie,isSimpleAppointment:Le}),q(),ye()}catch(Be){const vt=Be instanceof Error?Be.message:"Kan afspraak niet toevoegen.";$ instanceof HTMLElement&&($.textContent=vt,$.className="status-text error")}finally{R instanceof HTMLButtonElement&&(R.disabled=!1)}}),{openForCreate:Fe,openForEdit:$e,close:ye,destroy(){l.remove()}}}const Qt=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],at=["Thomas Mulder","Sophie Koning","Rupert Clark","Jack Thomesen","Alex Vermeer"],Oe={apk:"APK",banden:"Banden",airco:"Airco",occasions:"Occasions",onderhoud:"Onderhoud",brakes:"Brakes",other:"Other"},Pt=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function L(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Bt(e=""){return{title:qe(e)||"Unknown vehicle",buildYear:""}}function Ge(e){return String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,"").replace(/(.{2})(?=.)/g,"$1-")}function be(e){const n=new Date(e);return Number.isNaN(n.getTime())?null:n}function ce(e){const n=e instanceof Date?e:be(e);if(!n)return"";const l=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${l}-${a}-${r}`}function ut(e){const n=be(e);return n?n.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",hour12:!1}):"--:--"}function it(e){const n=String(e??"").trim().match(/^(\d{1,2}):(\d{2})$/);if(!n)return null;const l=Number.parseInt(n[1],10),a=Number.parseInt(n[2],10);if(!Number.isFinite(l)||!Number.isFinite(a))return null;const r=Math.min(23,Math.max(0,l)),i=Math.min(59,Math.max(0,a));return r*60+i}function jt(e){const n={startMinutes:0,endMinutes:1380},l=(e==null?void 0:e.workingHoursStart)??(e==null?void 0:e.working_hours_start)??"00:00",a=(e==null?void 0:e.workingHoursEnd)??(e==null?void 0:e.working_hours_end)??"23:00",r=it(l),i=it(a);return r===null||i===null?n:r>i?{startMinutes:r,endMinutes:r}:{startMinutes:r,endMinutes:i}}function Ut(e){const n=Number.isFinite(e==null?void 0:e.startMinutes)?e.startMinutes:0,l=Number.isFinite(e==null?void 0:e.endMinutes)?e.endMinutes:23*60,a=[];for(let r=n;r<=l;r+=30){const i=String(Math.floor(r/60)).padStart(2,"0"),p=String(r%60).padStart(2,"0");a.push(`${i}:${p}`)}return a.length||a.push("00:00"),a}function Kt(e){const n=be(e);if(!n)return"";const l=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,"0"),r=String(n.getDate()).padStart(2,"0");return`${l}-${a}-${r}`}function Ot(e){const n=be(e);if(!n)return"09:00";const l=String(n.getHours()).padStart(2,"0"),a=String(n.getMinutes()).padStart(2,"0");return`${l}:${a}`}function Re(e,n=60){const[l,a]=j(e).split(":"),r=Number(l),i=Number(a),p=(r*60+i+n)%(24*60),u=String(Math.floor(p/60)).padStart(2,"0"),k=String(p%60).padStart(2,"0");return`${u}:${k}`}function Yt(e,n){const l=String(e??"").trim(),a=String(n??"").trim();if(!l||!a)return"";const r=`${l}T${a}:00`;return be(r)?r:""}function Wt(e){return e instanceof Element&&!!e.closest("button, input, select, textarea, a, label")}function Vt(e){return e.toLocaleDateString(void 0,{month:"long",year:"numeric"})}function Gt(e){return e.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric"})}function Rt(e){return e.toLocaleDateString(void 0,{weekday:"short",day:"2-digit",month:"short"})}function _t(e){const n=e.toLocaleDateString(void 0,{day:"2-digit",month:"short"});return ce(e)===ce(new Date)?`Today, ${n}`:Rt(e)}function Jt(e){const n=String(e??"").trim().toLowerCase();return n==="done"||n==="completed"||n==="complete"||n==="closed"?"done":n==="confirmed"||n==="confirm"?"confirmed":"new"}function lt(e){return Jt(e.status)==="done"||e.inAppointments===!1}function Zt(e){const n=String(e??"").trim();if(!n)return["other"];const l=n.split(n.includes(",")?/,/g:/\+|\/|&| and /gi).map(a=>a.trim()).filter(Boolean);return l.length?l:[n]}function zt(e){return Pt.get(String(e??"").trim().toLowerCase())??"other"}function _e(e){return Zt(e).map(n=>{const l=zt(n),a=l==="other"?String(n??"").trim()||Oe.other:Oe[l]??Oe.other;return`<span class="service-chip service-chip-${l}">${L(a)}</span>`}).join("")}function Xt(e){const n=String(e??"").match(/\bname\s*:\s*([^\n]+)/i);return((n==null?void 0:n[1])??"").trim()}function pt(e){const n=String(e??"").replace(Ae,"").trim(),l=n.match(/\bmessage\s*:\s*([\s\S]*)/i),a=i=>String(i??"").split(/\r?\n/g).filter(p=>{const u=String(p??"").trim();return!(!u||/^\s*(until|end|tot)\s*:?\s*\d{1,2}:\d{2}\s*$/i.test(u)||/^\s*all[\s_-]?day\s*:\s*(true|false|1|0|yes|no|ja|nee)\s*$/i.test(u))}).join(`
`).trim();if(l)return a(l[1]);const r=n.split(/\r?\n/g).filter(i=>{const p=i.trim();return p&&!/^\s*(name|title|end|allday|all[\s_-]?day|message)\s*:/i.test(p)});return a(r.join(`
`))}function Je(e){const n=String(e??"").match(/\btitle\s*:\s*([^\n]+)/i);return((n==null?void 0:n[1])??"").trim()}function en(e){const n=String(e??"").match(/\bend\s*:\s*([^\n]+)/i);return j(((n==null?void 0:n[1])??"").trim(),"")}function Ue(e){const n=String(e??"").match(/\ball[\s_-]?day\s*:\s*([^\n]+)/i);if(!(n!=null&&n[1]))return!1;const l=String(n[1]).trim().toLowerCase();return l==="true"||l==="1"||l==="yes"||l==="ja"}function xe(e,n){const l=String((e==null?void 0:e.name)??"").trim(),a=String((e==null?void 0:e.title)??"").trim(),r=Xt(e.message),i=Je(e.message);return l||a||r||i||at[n%at.length]}function mt(e){return ce(e.appointmentAt??e.createdAt)}function tn(e,n,l){const a=new Date(e.getFullYear(),e.getMonth(),1),r=new Date(e.getFullYear(),e.getMonth()+1,0),i=r.getDate(),p=(a.getDay()+6)%7,u=n.reduce((s,w)=>{const f=mt(w);return f&&s.set(f,(s.get(f)??0)+1),s},new Map),k=[];for(let s=p;s>0;s-=1){const w=new Date(a);w.setDate(1-s);const f=ce(w);k.push({key:f,date:w,day:w.getDate(),isCurrentMonth:!1,isSelected:f===l,count:u.get(f)??0})}for(let s=1;s<=i;s+=1){const w=new Date(a.getFullYear(),a.getMonth(),s),f=ce(w);k.push({key:f,date:w,day:s,isCurrentMonth:!0,isSelected:f===l,count:u.get(f)??0})}for(;k.length%7!==0;){const s=new Date(r),w=k.length-(p+i)+1;s.setDate(r.getDate()+w);const f=ce(s);k.push({key:f,date:s,day:s.getDate(),isCurrentMonth:!1,isSelected:f===l,count:u.get(f)??0})}return k}function nn(e,n,l){const a=tn(e,n,l),r=ce(new Date),i=Qt.map(u=>`<span class="month-weekday">${u}</span>`).join(""),p=a.map(u=>{const k=["month-cell"];return u.isCurrentMonth||k.push("is-outside"),u.isSelected&&k.push("is-selected"),u.isCurrentMonth&&u.key===r&&k.push("is-today"),u.count>0&&k.push("has-bookings"),`
        <button class="${k.join(" ")}" type="button" data-calendar-cell="${u.key}">
          <span class="month-cell-day">${u.day}</span>
          ${u.count>0?'<span class="month-cell-dot" aria-hidden="true"></span>':""}
        </button>
      `}).join("");return`
    <div class="month-grid-board">
      <div class="month-week-row">${i}</div>
      <div class="month-grid-cells">${p}</div>
    </div>
  `}function an(e,n){const l=Ut(n),a=e.filter(i=>Ue(i.message)),r=e.filter(i=>!Ue(i.message)).reduce((i,p,u)=>{const k=ut(p.appointmentAt??p.createdAt),s=i.get(k)??[];return s.push({booking:p,index:u}),i.set(k,s),i},new Map);return`
    <div class="day-board-list">
      ${a.length?`
      <div class="day-all-day-row day-slot-row has-booking">
        <span class="day-slot-time is-all-day">All day</span>
        <div class="day-slot-line"></div>
        <div class="day-slot-booking">
          <span class="day-slot-count">${a.length} appointment${a.length===1?"":"s"}</span>
          <div class="day-slot-bookings">
            ${a.map((i,p)=>{const u=L(String(i.id??"")),k=String(i.licensePlate??"").toUpperCase()==="UNKNOWN",s=L(i.color??"#2563EB"),w=L(i.licensePlate&&i.licensePlate!=="UNKNOWN"?Ge(i.licensePlate):"UNKNOWN"),f=L(xe(i,p));return`
                <div class="day-slot-booking-item" data-day-slot-booking-id="${u}">
                  <div class="day-slot-plate-wrapper">
                    ${k?`<span class="fast-appt-dot" style="background: ${s}" aria-hidden="true"></span>`:`<span class="plate-chip">${w}</span>`}
                  </div>
                  <div class="day-slot-booking-info">
                    <div class="day-slot-booking-row">
                      <span class="day-slot-name">${f}</span>
                    </div>
                    <div class="day-slot-status-services">
                      <span class="status-chip status-chip-progress">All day</span>
                      ${_e(i.service)}
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    `:""}
      ${l.map(i=>{const p=r.get(i)??[];if(!p.length)return`
              <div class="day-slot-row">
                <span class="day-slot-time">${i}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">Available</span>
              </div>
            `;const u=p.map(({booking:s,index:w},f)=>{const ee=L(String(s.id??"")),$=String(s.licensePlate??"").toUpperCase()==="UNKNOWN",R=L(s.color??"#2563EB"),ue=L(s.licensePlate&&s.licensePlate!=="UNKNOWN"?Ge(s.licensePlate):"UNKNOWN"),ke=L(xe(s,w)),C=p.length>1&&f<p.length-1;return`
              <div class="day-slot-booking-item" data-day-slot-booking-id="${ee}">
                <div class="day-slot-plate-wrapper">
                  ${$?`<span class="fast-appt-dot" style="background: ${R}" aria-hidden="true"></span>`:`<span class="plate-chip">${ue}</span>`}
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${ke}</span>
                  </div>
                  <div class="day-slot-status-services">
                    <span class="status-chip status-chip-progress">In Progress</span>
                    ${_e(s.service)}
                  </div>
                </div>
              </div>
              ${C?'<div class="line-days" aria-hidden="true"></div>':""}
            `}).join(""),k=p.length>1?`<span class="day-slot-count">${p.length} appointments</span>`:"";return`
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${i}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${k}
                <div class="day-slot-bookings">
                  ${u}
                </div>
              </div>
            </div>
          `}).join("")}
    </div>
  `}function ln(e,n,l,a,r){return e.length?e.map((i,p)=>{const u=String(i.id??""),k=n===u,s=l===u,w=i.appointmentAt??i.createdAt,f=String(i.licensePlate??"").toUpperCase()==="UNKNOWN",ee=L(i.color??"#2563EB"),$=L(i.licensePlate&&i.licensePlate!=="UNKNOWN"?Ge(i.licensePlate):"UNKNOWN"),R=ut(w),ue=We(Kt(w)),ke=L(ue),C=L(rt(ue)),B=j(Ot(w)),D=L(B),_=Ue(i.message),A=j(en(i.message)||Re(B)),y=L(A);L(_?"All day":`${R} - ${A}`),L(xe(i,p));const H=i.licensePlate?qe(i.licensePlate):"",S=a.get(H)||Bt(i.licensePlate),E=S.buildYear?`${S.title} (${S.buildYear})`:S.title,x=String(i.phone??"").trim(),P=L(!x||x==="0000000000"?"Not filled in":x),pe=L(x==="0000000000"?"":x),te=L(pt(i.message)||"No customer message."),ne=L(Je(i.message)||xe(i,p)),J=f?`<span class="fast-appt-dot" style="background: ${ee}" aria-hidden="true"></span>`:`<span class="plate-chip">${$}</span>`,U=kt({leadMarkup:J,name:xe(i,p),vehicle:f?"":E,servicesMarkup:_e(i.service),timeLabel:_?"All day":`${R} - ${A}`,isExpanded:k,toggleDataAttribute:"data-calendar-toggle",toggleId:u,expandAriaLabel:"Expand appointment details",collapseAriaLabel:"Collapse appointment details"});return`
        <article class="request-card ${k?"is-expanded":""}" data-calendar-booking-id="${L(u)}">
          ${U}

          ${k?`
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${Ze("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${P}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${Ze("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${te}</span>
                </div>
              </div>

              <div class="request-actions">
                ${s?`
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Title</span>
                      <input type="text" data-schedule-edit-title value="${ne}" placeholder="Title" autocomplete="off" />
                    </label>
                    <label class="request-edit-field">
                      <span>Phone</span>
                      <input type="tel" data-schedule-edit-phone value="${pe}" placeholder="Phone" autocomplete="off" />
                    </label>
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${ke}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${C}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${dt(ue)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Vanaf</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${D}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${D}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${Ve(B,r)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Tot</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time data-schedule-edit-end-time value="${y}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${y}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${Ve(A,r)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${L(u)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${L(u)}">Cancel</button>
                  </div>
                `:""}

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${L(u)}" aria-label="Edit booking">✎</button>
                ${s?"":`<button class="button" type="button" data-request-action="complete" data-booking-id="${L(u)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${L(u)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3.66797L12.5869 10.3514C12.4813 12.0589 12.4285 12.9127 12.0005 13.5266C11.7889 13.83 11.5165 14.0862 11.2005 14.2786C10.5614 14.668 9.706 14.668 7.99513 14.668C6.28208 14.668 5.42553 14.668 4.78603 14.2779C4.46987 14.0851 4.19733 13.8285 3.98579 13.5245C3.55792 12.9097 3.5063 12.0547 3.40307 10.3448L3 3.66797" stroke="white" stroke-linecap="round"/>
<path d="M2 3.66536H14M10.7038 3.66536L10.2487 2.72652C9.9464 2.10287 9.7952 1.79104 9.53447 1.59657C9.47667 1.55343 9.4154 1.51506 9.35133 1.48183C9.0626 1.33203 8.71607 1.33203 8.023 1.33203C7.31253 1.33203 6.95733 1.33203 6.66379 1.48811C6.59873 1.5227 6.53665 1.56263 6.47819 1.60748C6.21443 1.80983 6.06709 2.13306 5.77241 2.77954L5.36861 3.66536" stroke="white" stroke-linecap="round"/>
<path d="M6.3335 11V7" stroke="white" stroke-linecap="round"/>
<path d="M9.6665 11V7" stroke="white" stroke-linecap="round"/>
</svg>
Delete</button>`}
              </div>
            </div>
          `:""}
        </article>
      `}).join(""):yt("No appointments for this date.")}function we(e){return[...e].sort((n,l)=>new Date(n.appointmentAt??n.createdAt).getTime()-new Date(l.appointmentAt??l.createdAt).getTime())}async function on(e){var n,l,a,r;if(!e)return;const i=await St();if(!i)return;if(!i.isAdmin&&!i.activeGarage){e.innerHTML=`
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;return}Mt(i.activeGarage);const p=i.isAdmin?null:[(n=i.activeGarage)==null?void 0:n.id].filter(Boolean),u=((l=i.activeGarage)==null?void 0:l.id)??((r=(a=i.garages)==null?void 0:a[0])==null?void 0:r.id)??"",{shell:k,contentArea:s,setUnreadEmailCount:w}=Lt({activePage:"calendar",title:"Calendar",headerNote:"Plan and track the day schedule",userEmail:i.user.email,onLogout:qt,garage:i.activeGarage,isAdmin:i.isAdmin});e.replaceChildren(k),s.innerHTML=`
    <section class="calendar-page-grid">
      <div class="calendar-primary-col">
        <section class="panel calendar-board-panel">
          <div class="calendar-board-head">
            <div class="calendar-board-nav">
              <button class="calendar-nav-button" type="button" data-calendar-nav="prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 4C10 4 6.00001 6.94593 6 8C5.99999 9.05413 10 12 10 12" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
              <p id="calendarPeriodLabel" class="calendar-period-label"></p>
              <button class="calendar-nav-button" type="button" data-calendar-nav="next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            </div>

            <div class="calendar-mode-tabs" role="tablist" aria-label="Calendar mode">
              <button id="calendarModeMonth" class="calendar-mode-tab" type="button" data-calendar-mode="month">Month</button>
              <button id="calendarModeDay" class="calendar-mode-tab" type="button" data-calendar-mode="day">Day</button>
            </div>
          </div>

          <div id="calendarBoardBody" class="calendar-board-body"></div>
        </section>
      </div>

      <section class="panel calendar-day-panel">
        <div class="calendar-day-panel-head">
          <p id="calendarDayTitle" class="calendar-day-title"></p>
          <span id="calendarDayCount" class="calendar-day-count">0 appointment</span>
        </div>

        <div id="calendarDayList" class="request-list"></div>
      </section>
    </section>
  `;const f=s.querySelector("#calendarBoardBody"),ee=s.querySelector("#calendarPeriodLabel"),$=s.querySelector("#calendarModeMonth"),R=s.querySelector("#calendarModeDay"),ue=s.querySelector("#calendarDayTitle"),ke=s.querySelector("#calendarDayCount"),C=s.querySelector("#calendarDayList"),B=new URLSearchParams(window.location.search),D=["1","true","yes"].includes(String(B.get("quickadd")??"").trim().toLowerCase()),_=String(B.get("quickaddEdit")??B.get("editBookingId")??"").trim();let A=[],y=[],H=new Date,S=new Date(H.getFullYear(),H.getMonth(),1),E="month",x="",P="",pe="",te="";const ne=jt(i.activeGarage),J=new Map,U=()=>{const v=ce(H);return y.filter(d=>mt(d)===v).sort((d,m)=>new Date(d.appointmentAt??d.createdAt).getTime()-new Date(m.appointmentAt??m.createdAt).getTime())},K=()=>{const v=ce(H),d=U(),m=E==="day"&&(pe!=="day"||te!==v);$.classList.toggle("is-active",E==="month"),R.classList.toggle("is-active",E==="day"),x&&!d.some(q=>String(q.id)===x)&&(x="",P=""),P&&!d.some(q=>String(q.id)===P)&&(P=""),E==="month"?(ee.textContent=Vt(S),f.innerHTML=nn(S,y,v)):(ee.textContent=Gt(H),f.innerHTML=an(d,ne),m&&window.requestAnimationFrame(()=>{const q=f.querySelector(".day-board-list");if(!(q instanceof HTMLElement))return;const Y=q.querySelector(".day-slot-row.has-booking");if(Y instanceof HTMLElement){const N=f.getBoundingClientRect(),X=Y.getBoundingClientRect(),W=f.scrollTop+(X.top-N.top)-8;f.scrollTo({top:Math.max(0,W),behavior:"auto"})}else f.scrollTo({top:0,behavior:"auto"})})),ue.textContent=_t(H),ke.textContent=`${d.length} appointment${d.length===1?"":"s"}`,C.innerHTML=ln(d,x,P,J,i.activeGarage),pe=E,te=v};let z=0,Ce="",Ee=0,he="";s.addEventListener("click",async v=>{const d=v.target instanceof Element?v.target:null;if(!d||st(s,d))return;const m=d.closest("[data-calendar-nav]");if(m instanceof HTMLElement){const g=m.dataset.calendarNav;if(E==="month"){const h=new Date(S);h.setMonth(S.getMonth()+(g==="next"?1:-1)),S=new Date(h.getFullYear(),h.getMonth(),1)}else{const h=new Date(H);h.setDate(H.getDate()+(g==="next"?1:-1)),H=h,S=new Date(H.getFullYear(),H.getMonth(),1)}K();return}const q=d.closest("[data-calendar-mode]");if(q instanceof HTMLElement){E=q.dataset.calendarMode==="day"?"day":"month",K();return}const Y=d.closest("[data-calendar-cell]");if(Y instanceof HTMLElement){const g=Y.dataset.calendarCell;if(g){const h=Date.now(),M=v.detail>=2||h-z<550&&Ce===g;if(z=h,Ce=g,M){z=0,ae.openForCreate(g,"");return}const b=be(`${g}T12:00:00`);b&&(H=b,S=new Date(H.getFullYear(),H.getMonth(),1),K())}return}const N=d.closest("[data-day-slot-booking-id]");if(N instanceof HTMLElement){const g=String(N.dataset.daySlotBookingId??"");g&&(x=g,P="",K(),window.requestAnimationFrame(()=>{const h=[...C.querySelectorAll("[data-calendar-booking-id]")].find(M=>M instanceof HTMLElement&&String(M.dataset.calendarBookingId??"")===g);h instanceof HTMLElement&&h.scrollIntoView({behavior:"smooth",block:"start"})}));return}const X=d.closest("[data-calendar-toggle]");if(X instanceof HTMLElement){const g=String(X.dataset.calendarToggle??"");x=x===g?"":g,x!==g&&(P=""),K();return}const W=d.closest("[data-calendar-action]");if(W instanceof HTMLElement){const g=String(W.dataset.calendarAction??""),h=String(W.dataset.bookingId??"");if(!h)return;if(g==="edit"){const M=y.find(b=>String(b.id)===h)??A.find(b=>String(b.id)===h);M&&ae.openForEdit(M);return}if(g==="cancel-edit"){P="",K();return}if(g==="save-schedule"){const M=W.closest("[data-calendar-booking-id]");if(!(M instanceof HTMLElement))return;const b=y.find(t=>String(t.id)===h);if(!b)return;const F=M.querySelector("[data-schedule-edit-date]"),oe=M.querySelector("[data-schedule-edit-time]"),me=M.querySelector("[data-schedule-edit-end-time]"),Te=M.querySelector("[data-schedule-edit-title]"),se=M.querySelector("[data-schedule-edit-phone]");if(!(F instanceof HTMLInputElement)||!(oe instanceof HTMLInputElement))return;const I=Yt(F.value,oe.value);if(!I)return;const re=(Te instanceof HTMLInputElement?Te.value.trim():Je(b.message))||xe(b,0),Q=me instanceof HTMLInputElement?j(me.value.trim(),Re(oe.value)):Re(oe.value),De=se instanceof HTMLInputElement?se.value.trim():String(b.phone??"").trim(),Pe=Ue(b.message),ye=pt(b.message)||"",Fe=[`Name: ${re}`,`AllDay: ${Pe?"true":"false"}`,`End: ${Q}`,`Message: ${ye||Ae}`].filter(Boolean).join(`
`);try{await ze(b,I),await Xe(b,{name:re,phone:De,message:Fe})}catch(t){window.alert(t instanceof Error?t.message:"Unable to save the appointment schedule.");return}A=we(A.map(t=>String(t.id)===h?{...t,appointmentAt:I,name:re,phone:De,message:Fe}:t)),y=we(y.map(t=>String(t.id)===h?{...t,appointmentAt:I,name:re,phone:De,message:Fe}:t));const $e=be(I);$e&&(H=$e,S=new Date($e.getFullYear(),$e.getMonth(),1)),P="",x=h,K();return}if(!y.find(M=>String(M.id)===h))return;K();return}const Z=d.closest("[data-request-action]");if(Z instanceof HTMLElement){const g=String(Z.dataset.requestAction??""),h=String(Z.dataset.bookingId??"");if(!h)return;const M=y.find(b=>String(b.id)===h);if(!M)return;if(g==="complete"){(async()=>{if(await Ye("Are you sure you want to mark this appointment as completed?","Mark as Completed")){try{await Tt(M,{convertedFromEmail:M.source!=="manual"})}catch(b){window.alert(b instanceof Error?b.message:"Unable to mark appointment as completed.");return}window.location.href=bt("completed.html")}})();return}if(g==="delete"){(async()=>{if(!await Ye("Are you sure you want to delete this appointment? This action cannot be undone.","Delete Appointment"))return;A=A.filter(F=>String(F.id)!==h),y=y.filter(F=>String(F.id)!==h),P="";const b=et(A);w(b.unread),K()})();return}}const le=d.closest("[data-calendar-booking-id]");if(le instanceof HTMLElement&&!Wt(d)){const g=String(le.dataset.calendarBookingId??"");if(!g)return;x=x===g?"":g,x!==g&&(P=""),K()}});const ae=It({onSubmit:async({mode:v,editingBookingId:d,name:m,phone:q,note:Y,date:N,time:X,endTime:W,isAllDay:Z,color:le,service:g,licensePlate:h,isSimpleAppointment:M})=>{if(!u)throw new Error("Geen garage beschikbaar.");if(v==="edit"&&d){const F=y.find(Q=>String(Q.id)===d)??A.find(Q=>String(Q.id)===d);if(!F)throw new Error("Appointment not found for editing.");const oe=`${N}T${X}`,me=q||String(F.phone??"").trim()||"0000000000",Te=Y||Ae,se=M?g||"Simple appointment":g,I=M?"UNKNOWN":h||"UNKNOWN",re=[`Name: ${m}`,`AllDay: ${Z?"true":"false"}`,`End: ${W}`,`Message: ${Te}`].join(`
`);await ze(F,oe),await Xe(F,{name:m,phone:me,message:re,color:le,service:se,licensePlate:I}),A=we(A.map(Q=>String(Q.id)===d?{...Q,appointmentAt:oe,name:m,phone:me,color:le,message:re,service:se,licensePlate:I}:Q)),y=we(y.map(Q=>String(Q.id)===d?{...Q,appointmentAt:oe,name:m,phone:me,color:le,message:re,service:se,licensePlate:I}:Q))}else await wt({garageId:u,name:m,licensePlate:M?"UNKNOWN":h||"UNKNOWN",phone:q||"0000000000",service:M?g||"Simple appointment":g||"Service",message:`Name: ${m}
AllDay: ${Z?"true":"false"}
End: ${W}
Message: ${Y||Ae}`,color:le,appointmentAt:`${N}T${X}`}),A=we(await tt({garageIds:p})),y=we(A.filter(F=>F.inAppointments===!0&&!lt(F)));const b=be(`${N}T12:00:00`);b&&(H=b,S=new Date(b.getFullYear(),b.getMonth(),1)),K()}}),ie=()=>{const v=new URLSearchParams(window.location.search);v.delete("quickadd"),v.delete("quickaddEdit"),v.delete("editBookingId");const d=v.toString(),m=window.location.hash||"",q=`${window.location.pathname}${d?`?${d}`:""}${m}`;window.history.replaceState(null,"",q)},O=()=>{!D||_||(ae.openForCreate(ce(H),"09:00"),ie())},Ne=()=>{if(!_)return;const v=y.find(d=>String(d.id)===_)??A.find(d=>String(d.id)===_);if(v){const d=be(v.appointmentAt??v.createdAt);d&&(H=d,S=new Date(d.getFullYear(),d.getMonth(),1),E="day",x=String(v.id??""),P=String(v.id??""),K()),ae.openForEdit(v)}ie()};f.addEventListener("click",v=>{const d=v.target instanceof Element?v.target:null;if(!d)return;const m=d.closest(".day-slot-row");if(m instanceof HTMLElement){const q=m.querySelector(".day-slot-time"),Y=q instanceof HTMLElement?(q.textContent??"").trim():"",N=Date.now(),X=v.detail>=2||N-Ee<550&&he===Y;if(Ee=N,he=Y,X){if(Ee=0,m.classList.contains("has-booking")){const W=d.closest("[data-day-slot-booking-id]"),Z=m.querySelector("[data-day-slot-booking-id]"),le=String((W instanceof HTMLElement?W.dataset.daySlotBookingId:Z instanceof HTMLElement?Z.dataset.daySlotBookingId:"")??""),g=y.find(h=>String(h.id)===le);if(g){ae.openForEdit(g);return}}ae.openForCreate(ce(H),Y||"09:00")}}}),O();try{A=await tt({garageIds:p});const v=new Set(A.map(m=>m.licensePlate).filter(m=>m&&m!=="UNKNOWN").map(m=>qe(m)));for(const m of v)if(m&&!J.has(m))try{const q=await ot(m);q&&J.set(m,q)}catch(q){console.error(`Failed to fetch vehicle for ${m}:`,q)}y=we(A.filter(m=>m.inAppointments===!0&&!lt(m)));const d=et(A);w(d.unread),K(),Ne()}catch(v){f.innerHTML='<p class="muted">Unable to load calendar right now.</p>',C.innerHTML='<article class="request-card"><p class="muted">Unable to load appointments.</p></article>',w(0),console.error(v)}}const sn=document.querySelector("#app");ht();on(sn);
