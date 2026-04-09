import{h as Y,p as Ve}from"./rdwService-B_7TgNhE.js";import{m as Ge}from"./confirmDialog-DOdHvhLG.js";import{G as Re,H as g,x as He,K as Ye,Z as We,z as ze}from"./requestCard-CqIap2Dn.js";const K=["#2563EB","#EAB308","#F97316","#EF4444","#22C55E","#8B5CF6","#EC4899"],b=["APK","Banden","Onderhoud","Airco","Occasions","Remmen"],fe="Manual appointment created in dashboard.",Je=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function Ue(r){return String(r).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function le(r){return Je.get(String(r??"").trim().toLowerCase())??"other"}function _e(r){const l=String(r??"").trim();if(!l)return["other"];const i=l.split(l.includes(",")?/,/g:/\+|\/|&| and /gi).map(n=>n.trim()).filter(Boolean);return i.length?i:[l]}function Qe(r){const l=new Date(r);return Number.isNaN(l.getTime())?null:l}function Ze(r){const l=Qe(r);if(!l)return"";const i=l.getFullYear(),n=String(l.getMonth()+1).padStart(2,"0"),f=String(l.getDate()).padStart(2,"0");return`${i}-${n}-${f}`}function Xe(r){const l=Qe(r);return l?`${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`:"09:00"}function W(r){const[l,i]=g(r).split(":").map(Number),n=(l*60+i+60)%(24*60);return`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`}function et(r){const l=String(r??"").match(/\btitle\s*:\s*([^\n]+)/i);return((l==null?void 0:l[1])??"").trim()}function tt(r){const l=String(r??"").match(/\bname\s*:\s*([^\n]+)/i);return((l==null?void 0:l[1])??"").trim()}function at(r){const l=String(r??"").replace(fe,"").trim(),i=l.match(/\bmessage\s*:\s*([\s\S]*)/i),n=q=>String(q??"").split(/\r?\n/g).filter(I=>{const w=String(I??"").trim();return!(!w||/^\s*(until|end|tot)\s*:?\s*\d{1,2}:\d{2}\s*$/i.test(w)||/^\s*all[\s_-]?day\s*:\s*(true|false|1|0|yes|no|ja|nee)\s*$/i.test(w))}).join(`
`).trim();if(i)return n(i[1]);const f=l.split(/\r?\n/g).filter(q=>{const I=q.trim();return I&&!/^\s*(name|title|end|allday|all[\s_-]?day|message)\s*:/i.test(I)});return n(f.join(`
`))}function nt(r){const l=String(r??"").match(/\bend\s*:\s*([^\n]+)/i);return g(((l==null?void 0:l[1])??"").trim(),"")}function xe(r){const l=String(r??"").match(/\ball[\s_-]?day\s*:\s*([^\n]+)/i);if(!(l!=null&&l[1]))return!1;const i=String(l[1]).trim().toLowerCase();return i==="true"||i==="1"||i==="yes"||i==="ja"}function rt({onSubmit:r}){const l=new Set(b.map(e=>le(e))),i=document.createElement("div");i.className="calendar-quickadd-backdrop",i.setAttribute("data-calendar-quickadd-root","true"),i.hidden=!0,i.innerHTML=`
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
          ${K.map((e,t)=>`
            <label class="calendar-color-option">
              <input type="radio" name="color" value="${e}" ${t===0?"checked":""} />
              <span class="calendar-color-dot" style="background:${e};--dot-color:${e}" aria-hidden="true"></span>
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
                ${b.map((e,t)=>`<option value="${e}" ${t===0?"selected":""}>${e}</option>`).join("")}
              </select>
              <button
                type="button"
                id="calendarQuickAddFullServiceTrigger"
                class="calendar-quickadd-service-trigger service-option-${le(b[0])}"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <span class="calendar-quickadd-service-dot" aria-hidden="true"></span>
                <span id="calendarQuickAddFullServiceLabel">${b[0]}</span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div id="calendarQuickAddFullServiceMenu" class="calendar-quickadd-service-menu" role="listbox" hidden>
                ${b.map(e=>`
                  <button
                    type="button"
                    class="calendar-quickadd-service-item service-option-${le(e)}"
                    data-quickadd-service-value="${e}"
                  >
                    <span class="calendar-quickadd-service-dot" aria-hidden="true"></span>
                    <span>${e}</span>
                  </button>
                `).join("")}
              </div>
            </div>
          </label>
        </div>

        <fieldset id="calendarQuickAddFullColors" class="calendar-quickadd-colors" aria-label="Kleur" hidden>
          <legend>Kleur</legend>
          ${K.map((e,t)=>`
            <label class="calendar-color-option">
              <input type="radio" name="fullColor" value="${e}" ${t===0?"checked":""} />
              <span class="calendar-color-dot" style="background:${e};--dot-color:${e}" aria-hidden="true"></span>
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
  `,document.querySelectorAll(".calendar-quickadd-backdrop[data-calendar-quickadd-root='true']").forEach(e=>{e!==i&&e.remove()}),document.body.append(i);const n=i.querySelector(".calendar-quickadd-modal"),f=n.querySelector("#calendarQuickAddForm"),q=n.querySelector("#calendarQuickAddName"),I=n.querySelector("#calendarQuickAddDatePicker"),w=n.querySelector("#calendarQuickAddStartPicker"),ie=n.querySelector("#calendarQuickAddEndPicker"),$=n.querySelector("#calendarQuickAddAllDay"),Fe=n.querySelector("#calendarQuickAddTimeRow"),z=n.querySelector("#calendarQuickAddPhone"),J=n.querySelector("#calendarQuickAddNote"),c=n.querySelector("#calendarQuickAddStatus"),B=n.querySelector("button[type='submit']"),ve=n.querySelector("[data-calendar-quickadd-panel='quick']"),ke=n.querySelector("[data-calendar-quickadd-panel='full']"),o=n.querySelector("#calendarQuickAddFullName"),E=n.querySelector("#calendarQuickAddFullPhone"),s=n.querySelector("#calendarQuickAddFullLicensePlate"),V=n.querySelector("#calendarQuickAddFullServiceSelect"),de=n.querySelector("#calendarQuickAddFullServiceUi"),D=n.querySelector("#calendarQuickAddFullServiceTrigger"),he=n.querySelector("#calendarQuickAddFullServiceLabel"),k=n.querySelector("#calendarQuickAddFullServiceMenu"),u=n.querySelector("#calendarQuickAddFullServiceInput"),U=n.querySelector("#calendarQuickAddFullAddServiceBtn"),be=n.querySelector("#calendarQuickAddFullSelectedServices"),G=n.querySelector("#calendarQuickAddFullVehicleHint"),P=n.querySelector("#calendarQuickAddFullDatePicker"),C=n.querySelector("#calendarQuickAddFullStartPicker"),N=n.querySelector("#calendarQuickAddFullEndPicker"),h=n.querySelector("#calendarQuickAddFullAllDay"),Ie=n.querySelector("#calendarQuickAddFullTimeRow"),L=n.querySelector("#calendarQuickAddFullNote"),ge=n.querySelector("#calendarQuickAddFullColors"),Se=n.querySelector("#calendarQuickAddFullServiceGroup");let j="create",_="",M=[],v=[],re=0,ce=null,Z=!1;const ye=()=>{const e=P==null?void 0:P.querySelector("[data-schedule-edit-date]"),t=C==null?void 0:C.querySelector("[data-schedule-edit-time]"),a=N==null?void 0:N.querySelector("[data-schedule-edit-time]");return{mode:j,editingId:_,name:o instanceof HTMLInputElement?o.value.trim():"",phone:E instanceof HTMLInputElement?E.value.trim():"",licensePlate:s instanceof HTMLInputElement?Y(s.value):"",note:L instanceof HTMLTextAreaElement?L.value.trim():"",date:e instanceof HTMLInputElement?e.value.trim():"",startTime:t instanceof HTMLInputElement?g(t.value.trim(),"09:00"):"09:00",endTime:a instanceof HTMLInputElement?g(a.value.trim(),"10:00"):"10:00",isAllDay:h instanceof HTMLInputElement?h.checked:!1,color:f.querySelector("input[name='fullColor']:checked")instanceof HTMLInputElement?f.querySelector("input[name='fullColor']:checked").value:K[0],presetServices:[...v],customServices:[...M],customServiceInputDraft:u instanceof HTMLInputElement?u.value.trim():""}},oe=()=>{ce=ye()},we=()=>ce?JSON.stringify(ye())!==JSON.stringify(ce):!1,A=(e,t="")=>{G instanceof HTMLElement&&(G.textContent=String(e??""),G.classList.remove("is-loading","is-error"),t==="loading"&&G.classList.add("is-loading"),t==="error"&&G.classList.add("is-error"))},Te=async()=>{const e=Y(s instanceof HTMLInputElement?s.value:""),t=++re;if(!e||e.length<6){A("");return}A("Auto ophalen...","loading");try{const a=await Ve(e);if(t!==re)return;if(!(a!=null&&a.title)){A("Geen voertuig gevonden","error");return}const d=a.buildYear&&a.buildYear!=="Onbekend"?` (${a.buildYear})`:"";A(`${a.title}${d}`)}catch{if(t!==re)return;A("Voertuig niet beschikbaar","error")}},$e=(e,t)=>{if(e instanceof HTMLElement){for(const a of l)e.classList.remove(`service-option-${a}`);e.classList.add(`service-option-${le(t)}`)}},se=()=>{k instanceof HTMLElement&&(k.hidden=!0),D instanceof HTMLButtonElement&&D.setAttribute("aria-expanded","false")},Ce=()=>{V instanceof HTMLSelectElement&&(V.value=v[0]??"")},qe=()=>{const e=v[0]??"";he instanceof HTMLElement&&(he.textContent=e?v.length>1?`${e} (+${v.length-1})`:e:"Kies service"),$e(D,e||b[0]),k instanceof HTMLElement&&k.querySelectorAll("[data-quickadd-service-value]").forEach(t=>{if(!(t instanceof HTMLElement))return;const a=String(t.dataset.quickaddServiceValue??""),d=v.includes(a);t.setAttribute("aria-selected",d?"true":"false"),t.classList.toggle("is-selected",d)}),Ce()},ue=e=>{v=Array.from(new Set((Array.isArray(e)?e:[]).map(t=>String(t??"").trim()).filter(t=>b.includes(t)))),qe()},Ne=e=>{const t=String(e??"").trim();b.includes(t)&&(v=v.includes(t)?v.filter(a=>a!==t):[...v,t],qe())},X=()=>{be instanceof HTMLElement&&(be.innerHTML=M.map((e,t)=>`
        <span class="service-chip service-chip-other" data-quickadd-custom-index="${t}">
          ${Ue(e)}
          <button type="button" class="service-chip-remove" data-quickadd-remove-custom-index="${t}" aria-label="Service verwijderen">×</button>
        </span>`).join(""))},ee=()=>{!(u instanceof HTMLInputElement)||!(U instanceof HTMLButtonElement)||(U.style.display=u.value.trim().length>0?"block":"none")},Ee=()=>{if(!(u instanceof HTMLInputElement))return;const e=u.value.trim();if(!e||M.includes(e)){ee();return}M.push(e),u.value="",X(),ee(),u.focus()};u==null||u.addEventListener("input",ee),u==null||u.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),Ee())}),U==null||U.addEventListener("click",e=>{e.preventDefault(),Ee()}),D==null||D.addEventListener("click",()=>{if(!(k instanceof HTMLElement))return;const e=k.hidden;k.hidden=!e,D.setAttribute("aria-expanded",e?"true":"false")}),k==null||k.addEventListener("click",e=>{var t;const a=(t=e.target instanceof Element?e.target:null)==null?void 0:t.closest("[data-quickadd-service-value]");a instanceof HTMLElement&&(e.preventDefault(),Ne(a.dataset.quickaddServiceValue??""))}),V instanceof HTMLSelectElement&&ue([V.value||b[0]]);const pe=()=>{const e=!!Y(s instanceof HTMLInputElement?s.value:"");ge instanceof HTMLElement&&(ge.hidden=e),de instanceof HTMLElement&&(de.hidden=!1),Se instanceof HTMLElement&&(Se.hidden=!1)},Le=e=>{if(!(f instanceof HTMLFormElement))return;for(const a of f.querySelectorAll("input[name='color'], input[name='fullColor']"))if(a instanceof HTMLInputElement&&a.value===String(e??"")){a.checked=!0;return}const t=f.querySelector("input[name='color']");t instanceof HTMLInputElement&&(t.checked=!0)},te=(e,t)=>{if(!(e instanceof HTMLElement))return;const a=He(t),d=e.querySelector("[data-schedule-edit-date]"),p=e.querySelector("[data-schedule-date-label]"),m=e.querySelector("[data-schedule-date-options]");d instanceof HTMLInputElement&&(d.value=a),p instanceof HTMLElement&&(p.textContent=Ye(a)),m instanceof HTMLElement&&(m.innerHTML=We(a))},H=(e,t)=>{if(!(e instanceof HTMLElement))return;const a=g(t),d=e.querySelector("[data-schedule-edit-time]"),p=e.querySelector("[data-schedule-time-label]"),m=e.querySelector("[data-schedule-time-options]");d instanceof HTMLInputElement&&(d.value=a),p instanceof HTMLElement&&(p.textContent=a),m instanceof HTMLElement&&(m.innerHTML=ze(a))},Me=(e,t,a,d)=>{if(!(e instanceof HTMLElement))return;const p=t instanceof HTMLInputElement&&t.checked;if(e.classList.toggle("is-hidden",p),p){const x=a==null?void 0:a.querySelector("[data-schedule-time-label]"),Q=d==null?void 0:d.querySelector("[data-schedule-time-label]");x instanceof HTMLElement&&(x.textContent="All day"),Q instanceof HTMLElement&&(Q.textContent="All day");return}const m=a==null?void 0:a.querySelector("[data-schedule-edit-time]"),S=d==null?void 0:d.querySelector("[data-schedule-edit-time]"),y=a==null?void 0:a.querySelector("[data-schedule-time-label]"),T=d==null?void 0:d.querySelector("[data-schedule-time-label]");y instanceof HTMLElement&&m instanceof HTMLInputElement&&(y.textContent=g(m.value)),T instanceof HTMLElement&&S instanceof HTMLInputElement&&(T.textContent=g(S.value))},ae=()=>{Me(Fe,$,w,ie),Me(Ie,h,C,N)};$==null||$.addEventListener("change",ae),h==null||h.addEventListener("change",ae);const Be=()=>{B instanceof HTMLButtonElement&&(B.textContent=j==="edit"?"Wijzigingen opslaan":"Opslaan")},Ae=()=>{ve instanceof HTMLElement&&(ve.hidden=!0),ke instanceof HTMLElement&&(ke.hidden=!1),Be()},O=()=>{i.hidden=!0,Z=!1},De=(e,t)=>{j="create",_="",M=[],Ae(),q instanceof HTMLInputElement&&(q.value=""),z instanceof HTMLInputElement&&(z.value=""),J instanceof HTMLTextAreaElement&&(J.value=""),o instanceof HTMLInputElement&&(o.value=""),E instanceof HTMLInputElement&&(E.value=""),s instanceof HTMLInputElement&&(s.value=""),A(""),V instanceof HTMLSelectElement&&ue([]),u instanceof HTMLInputElement&&(u.value=""),L instanceof HTMLTextAreaElement&&(L.value=""),X(),ee(),pe(),se(),c instanceof HTMLElement&&(c.textContent="",c.className="status-text"),Le(K[0]),te(I,e),te(P,e);const a=g(t||"09:00");H(w,a),H(ie,W(a)),H(C,a),H(N,W(a)),$ instanceof HTMLInputElement&&($.checked=!t),h instanceof HTMLInputElement&&(h.checked=!t),ae(),i.hidden=!1,setTimeout(()=>{o instanceof HTMLInputElement&&o.focus()},60),oe()},Pe=e=>{if(!e)return;j="edit",_=String(e.id??""),Ae();const t=e.appointmentAt??e.createdAt,a=He(Ze(t)),d=g(Xe(t)),p=g(nt(e.message)||W(d)),m=et(e.message)||tt(e.message)||"",S=at(e.message),y=String(e.phone??"").trim(),T=Y(e.licensePlate),x=_e(e.service).map(F=>String(F??"").trim()).filter(Boolean),Q=x.filter(F=>b.includes(F)),me=x.filter(F=>!b.includes(F)),R=!!T&&T!=="UNKNOWN";q instanceof HTMLInputElement&&(q.value=m),z instanceof HTMLInputElement&&(z.value=y==="0000000000"?"":y),J instanceof HTMLTextAreaElement&&(J.value=S===fe?"":S),c instanceof HTMLElement&&(c.textContent="",c.className="status-text"),o instanceof HTMLInputElement&&(o.value=m),E instanceof HTMLInputElement&&(E.value=y==="0000000000"?"":y),s instanceof HTMLInputElement&&(s.value=R?T:""),R?(A("Auto ophalen...","loading"),Te()):A(""),L instanceof HTMLTextAreaElement&&(L.value=S===fe?"":S),M=me,X(),ue(Q),Le(String(e.color??"")||K[0]),te(I,a),te(P,a),H(w,d),H(ie,p),H(C,d),H(N,p),$ instanceof HTMLInputElement&&($.checked=xe(e.message)),h instanceof HTMLInputElement&&(h.checked=xe(e.message)),pe(),ae(),i.hidden=!1,setTimeout(()=>{o instanceof HTMLInputElement&&o.focus()},60),oe()};return n.addEventListener("click",e=>{const t=e.target instanceof Element?e.target:null;if(!t||Re(n,t)||t.closest("[data-quickadd-service-value]"))return;de instanceof HTMLElement&&!t.closest("#calendarQuickAddFullServiceUi")&&se();const a=t.closest("[data-quickadd-remove-custom-index]");if(a instanceof HTMLElement){const d=Number(a.dataset.quickaddRemoveCustomIndex??-1);d>=0&&(M.splice(d,1),X());return}t.closest("[data-calendar-quickadd-close]")&&O()}),i.addEventListener("click",async e=>{if(e.target!==i)return;if(!we()){O();return}if(Z)return;Z=!0;const t=await Ge("You have unsaved changes. Close without saving?","Discard changes?");Z=!1,t&&O()}),n.addEventListener("keydown",e=>{if(e.key==="Escape"){if(k instanceof HTMLElement&&!k.hidden){se();return}O()}}),s==null||s.addEventListener("input",()=>{pe(),Te()}),f==null||f.addEventListener("submit",async e=>{e.preventDefault();const t=o instanceof HTMLInputElement?o.value.trim():"",a=E instanceof HTMLInputElement?E.value.trim():"",d=L instanceof HTMLTextAreaElement?L.value.trim():"",p=P==null?void 0:P.querySelector("[data-schedule-edit-date]"),m=C==null?void 0:C.querySelector("[data-schedule-edit-time]"),S=N==null?void 0:N.querySelector("[data-schedule-edit-time]"),y=f.querySelector("input[name='fullColor']:checked"),T=h instanceof HTMLInputElement&&h.checked,x=p instanceof HTMLInputElement?p.value.trim():"",Q=!T&&m instanceof HTMLInputElement?m.value.trim():"09:00",me=!T&&S instanceof HTMLInputElement?g(S.value.trim(),W(Q)):W(Q),R=Y(s instanceof HTMLInputElement?s.value:""),F=!R,je=F&&y instanceof HTMLInputElement?y.value:K[0],Oe=[...v,...M].map(ne=>ne.trim()).filter(Boolean).join(", ");if(!t){c instanceof HTMLElement&&(c.textContent="Vul een naam in.",c.className="status-text warning"),o instanceof HTMLInputElement&&o.focus();return}if(!x){c instanceof HTMLElement&&(c.textContent="Geen datum geselecteerd.",c.className="status-text warning");return}B instanceof HTMLButtonElement&&(B.disabled=!0),c instanceof HTMLElement&&(c.textContent=j==="edit"?"Opslaan...":"Toevoegen...",c.className="status-text");try{await r({mode:j,editingBookingId:_,name:t,phone:a,note:d,date:x,time:Q,endTime:me,isAllDay:T,color:je,service:Oe,licensePlate:R,isSimpleAppointment:F}),oe(),O()}catch(ne){const Ke=ne instanceof Error?ne.message:"Kan afspraak niet toevoegen.";c instanceof HTMLElement&&(c.textContent=Ke,c.className="status-text error")}finally{B instanceof HTMLButtonElement&&(B.disabled=!1)}}),{openForCreate:De,openForEdit:Pe,close:O,destroy(){i.remove()}}}export{fe as f,rt as r};
