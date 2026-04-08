import{n as U,f as Re}from"./rdwService-CFrMDQAa.js";import{s as Ke}from"./confirmDialog-DSEC2-zx.js";import{h as _e,n as b,a as He,f as ze,s as Ue,c as Ge}from"./requestCard-Ckf8MfSD.js";const D=["#2563EB","#EAB308","#F97316","#EF4444","#22C55E","#8B5CF6","#EC4899"],S=["APK","Banden","Onderhoud","Airco","Occasions","Remmen"],fe="Manual appointment created in dashboard.",Ye=new Map([["apk","apk"],["banden","banden"],["tire","banden"],["tires","banden"],["airco","airco"],["ac","airco"],["occasion","occasions"],["occasions","occasions"],["onderhoud","onderhoud"],["maintenance","onderhoud"],["service","onderhoud"],["brakes","brakes"],["brake","brakes"],["remmen","brakes"]]);function We(r){return String(r).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function le(r){return Ye.get(String(r??"").trim().toLowerCase())??"other"}function Je(r){const l=String(r??"").trim();if(!l)return["other"];const c=l.split(l.includes(",")?/,/g:/\+|\/|&| and /gi).map(n=>n.trim()).filter(Boolean);return c.length?c:[l]}function Qe(r){const l=new Date(r);return Number.isNaN(l.getTime())?null:l}function Xe(r){const l=Qe(r);if(!l)return"";const c=l.getFullYear(),n=String(l.getMonth()+1).padStart(2,"0"),f=String(l.getDate()).padStart(2,"0");return`${c}-${n}-${f}`}function Ze(r){const l=Qe(r);return l?`${String(l.getHours()).padStart(2,"0")}:${String(l.getMinutes()).padStart(2,"0")}`:"09:00"}function G(r){const[l,c]=b(r).split(":").map(Number),n=(l*60+c+60)%(24*60);return`${String(Math.floor(n/60)).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`}function et(r){const l=String(r??"").match(/\btitle\s*:\s*([^\n]+)/i);return((l==null?void 0:l[1])??"").trim()}function tt(r){const l=String(r??"").match(/\bname\s*:\s*([^\n]+)/i);return((l==null?void 0:l[1])??"").trim()}function at(r){const l=String(r??"").replace(fe,"").trim(),c=l.match(/\bmessage\s*:\s*([\s\S]*)/i),n=L=>String(L??"").split(/\r?\n/g).filter(N=>{const P=String(N??"").trim();return!(!P||/^\s*(until|end|tot)\s*:?\s*\d{1,2}:\d{2}\s*$/i.test(P)||/^\s*all[\s_-]?day\s*:\s*(true|false|1|0|yes|no|ja|nee)\s*$/i.test(P))}).join(`
`).trim();if(c)return n(c[1]);const f=l.split(/\r?\n/g).filter(L=>{const N=L.trim();return N&&!/^\s*(name|title|end|allday|all[\s_-]?day|message)\s*:/i.test(N)});return n(f.join(`
`))}function nt(r){const l=String(r??"").match(/\bend\s*:\s*([^\n]+)/i);return b(((l==null?void 0:l[1])??"").trim(),"")}function xe(r){const l=String(r??"").match(/\ball[\s_-]?day\s*:\s*([^\n]+)/i);if(!(l!=null&&l[1]))return!1;const c=String(l[1]).trim().toLowerCase();return c==="true"||c==="1"||c==="yes"||c==="ja"}function rt({onSubmit:r}){const l=new Set(S.map(e=>le(e))),c=document.createElement("div");c.className="calendar-quickadd-backdrop",c.setAttribute("data-calendar-quickadd-root","true"),c.hidden=!0,c.innerHTML=`
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
          ${D.map((e,t)=>`
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
                ${S.map((e,t)=>`<option value="${e}" ${t===0?"selected":""}>${e}</option>`).join("")}
              </select>
              <button
                type="button"
                id="calendarQuickAddFullServiceTrigger"
                class="calendar-quickadd-service-trigger service-option-${le(S[0])}"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <span class="calendar-quickadd-service-dot" aria-hidden="true"></span>
                <span id="calendarQuickAddFullServiceLabel">${S[0]}</span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </button>
              <div id="calendarQuickAddFullServiceMenu" class="calendar-quickadd-service-menu" role="listbox" hidden>
                ${S.map(e=>`
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
          ${D.map((e,t)=>`
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
  `,document.querySelectorAll(".calendar-quickadd-backdrop[data-calendar-quickadd-root='true']").forEach(e=>{e!==c&&e.remove()}),document.body.append(c);const n=c.querySelector(".calendar-quickadd-modal"),f=n.querySelector("#calendarQuickAddForm"),L=n.querySelector("#calendarQuickAddName"),N=n.querySelector("#calendarQuickAddDatePicker"),P=n.querySelector("#calendarQuickAddStartPicker"),ie=n.querySelector("#calendarQuickAddEndPicker"),M=n.querySelector("#calendarQuickAddAllDay"),Ie=n.querySelector("#calendarQuickAddTimeRow"),Y=n.querySelector("#calendarQuickAddPhone"),W=n.querySelector("#calendarQuickAddNote"),d=n.querySelector("#calendarQuickAddStatus"),V=n.querySelector("button[type='submit']"),ve=n.querySelector("[data-calendar-quickadd-panel='quick']"),he=n.querySelector("[data-calendar-quickadd-panel='full']"),u=n.querySelector("#calendarQuickAddFullName"),A=n.querySelector("#calendarQuickAddFullPhone"),o=n.querySelector("#calendarQuickAddFullLicensePlate"),R=n.querySelector("#calendarQuickAddFullServiceSelect"),ce=n.querySelector("#calendarQuickAddFullServiceUi"),B=n.querySelector("#calendarQuickAddFullServiceTrigger"),ke=n.querySelector("#calendarQuickAddFullServiceLabel"),v=n.querySelector("#calendarQuickAddFullServiceMenu"),s=n.querySelector("#calendarQuickAddFullServiceInput"),K=n.querySelector("#calendarQuickAddFullAddServiceBtn"),Se=n.querySelector("#calendarQuickAddFullSelectedServices"),_=n.querySelector("#calendarQuickAddFullVehicleHint"),H=n.querySelector("#calendarQuickAddFullDatePicker"),q=n.querySelector("#calendarQuickAddFullStartPicker"),E=n.querySelector("#calendarQuickAddFullEndPicker"),h=n.querySelector("#calendarQuickAddFullAllDay"),Ce=n.querySelector("#calendarQuickAddFullTimeRow"),x=n.querySelector("#calendarQuickAddFullNote"),be=n.querySelector("#calendarQuickAddFullColors"),ge=n.querySelector("#calendarQuickAddFullServiceGroup");let j="create",J="",Q=[],k=[],re=0,de=null,X=!1;const Te=()=>{const e=H==null?void 0:H.querySelector("[data-schedule-edit-date]"),t=q==null?void 0:q.querySelector("[data-schedule-edit-time]"),a=E==null?void 0:E.querySelector("[data-schedule-edit-time]");return{mode:j,editingId:J,name:u instanceof HTMLInputElement?u.value.trim():"",phone:A instanceof HTMLInputElement?A.value.trim():"",licensePlate:o instanceof HTMLInputElement?U(o.value):"",note:x instanceof HTMLTextAreaElement?x.value.trim():"",date:e instanceof HTMLInputElement?e.value.trim():"",startTime:t instanceof HTMLInputElement?b(t.value.trim(),"09:00"):"09:00",endTime:a instanceof HTMLInputElement?b(a.value.trim(),"10:00"):"10:00",isAllDay:h instanceof HTMLInputElement?h.checked:!1,color:f.querySelector("input[name='fullColor']:checked")instanceof HTMLInputElement?f.querySelector("input[name='fullColor']:checked").value:D[0],presetServices:[...k],customServices:[...Q],customServiceInputDraft:s instanceof HTMLInputElement?s.value.trim():""}},se=()=>{de=Te()},Fe=()=>de?JSON.stringify(Te())!==JSON.stringify(de):!1,I=(e,t="")=>{_ instanceof HTMLElement&&(_.textContent=String(e??""),_.classList.remove("is-loading","is-error"),t==="loading"&&_.classList.add("is-loading"),t==="error"&&_.classList.add("is-error"))},ye=async()=>{const e=U(o instanceof HTMLInputElement?o.value:""),t=++re;if(!e||e.length<6){I("");return}I("Auto ophalen...","loading");try{const a=await Re(e);if(t!==re)return;if(!(a!=null&&a.title)){I("Geen voertuig gevonden","error");return}const i=a.buildYear&&a.buildYear!=="Onbekend"?` (${a.buildYear})`:"";I(`${a.title}${i}`)}catch{if(t!==re)return;I("Voertuig niet beschikbaar","error")}},we=(e,t)=>{if(e instanceof HTMLElement){for(const a of l)e.classList.remove(`service-option-${a}`);e.classList.add(`service-option-${le(t)}`)}},oe=()=>{v instanceof HTMLElement&&(v.hidden=!0),B instanceof HTMLButtonElement&&B.setAttribute("aria-expanded","false")},$e=()=>{R instanceof HTMLSelectElement&&(R.value=k[0]??"")},qe=()=>{const e=k[0]??"";ke instanceof HTMLElement&&(ke.textContent=e?k.length>1?`${e} (+${k.length-1})`:e:"Kies service"),we(B,e||S[0]),v instanceof HTMLElement&&v.querySelectorAll("[data-quickadd-service-value]").forEach(t=>{if(!(t instanceof HTMLElement))return;const a=String(t.dataset.quickaddServiceValue??""),i=k.includes(a);t.setAttribute("aria-selected",i?"true":"false"),t.classList.toggle("is-selected",i)}),$e()},ue=e=>{k=Array.from(new Set((Array.isArray(e)?e:[]).map(t=>String(t??"").trim()).filter(t=>S.includes(t)))),qe()},Ne=e=>{const t=String(e??"").trim();S.includes(t)&&(k=k.includes(t)?k.filter(a=>a!==t):[...k,t],qe())},Z=()=>{Se instanceof HTMLElement&&(Se.innerHTML=Q.map((e,t)=>`
        <span class="service-chip service-chip-other" data-quickadd-custom-index="${t}">
          ${We(e)}
          <button type="button" class="service-chip-remove" data-quickadd-remove-custom-index="${t}" aria-label="Service verwijderen">×</button>
        </span>`).join(""))},ee=()=>{!(s instanceof HTMLInputElement)||!(K instanceof HTMLButtonElement)||(K.style.display=s.value.trim().length>0?"block":"none")},Ee=()=>{if(!(s instanceof HTMLInputElement))return;const e=s.value.trim();if(!e||Q.includes(e)){ee();return}Q.push(e),s.value="",Z(),ee(),s.focus()};s==null||s.addEventListener("input",ee),s==null||s.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),Ee())}),K==null||K.addEventListener("click",e=>{e.preventDefault(),Ee()}),B==null||B.addEventListener("click",()=>{if(!(v instanceof HTMLElement))return;const e=v.hidden;v.hidden=!e,B.setAttribute("aria-expanded",e?"true":"false")}),v==null||v.addEventListener("click",e=>{var a;const t=(a=e.target instanceof Element?e.target:null)==null?void 0:a.closest("[data-quickadd-service-value]");t instanceof HTMLElement&&(e.preventDefault(),Ne(t.dataset.quickaddServiceValue??""))}),R instanceof HTMLSelectElement&&ue([R.value||S[0]]);const me=()=>{const e=!!U(o instanceof HTMLInputElement?o.value:"");be instanceof HTMLElement&&(be.hidden=e),ce instanceof HTMLElement&&(ce.hidden=!1),ge instanceof HTMLElement&&(ge.hidden=!1)},Le=e=>{if(!(f instanceof HTMLFormElement))return;for(const a of f.querySelectorAll("input[name='color'], input[name='fullColor']"))if(a instanceof HTMLInputElement&&a.value===String(e??"")){a.checked=!0;return}const t=f.querySelector("input[name='color']");t instanceof HTMLInputElement&&(t.checked=!0)},te=(e,t)=>{if(!(e instanceof HTMLElement))return;const a=He(t),i=e.querySelector("[data-schedule-edit-date]"),m=e.querySelector("[data-schedule-date-label]"),p=e.querySelector("[data-schedule-date-options]");i instanceof HTMLInputElement&&(i.value=a),m instanceof HTMLElement&&(m.textContent=ze(a)),p instanceof HTMLElement&&(p.innerHTML=Ue(a))},C=(e,t)=>{if(!(e instanceof HTMLElement))return;const a=b(t),i=e.querySelector("[data-schedule-edit-time]"),m=e.querySelector("[data-schedule-time-label]"),p=e.querySelector("[data-schedule-time-options]");i instanceof HTMLInputElement&&(i.value=a),m instanceof HTMLElement&&(m.textContent=a),p instanceof HTMLElement&&(p.innerHTML=Ge(a))},Me=(e,t,a,i)=>{if(!(e instanceof HTMLElement))return;const m=t instanceof HTMLInputElement&&t.checked;if(e.classList.toggle("is-hidden",m),m){const F=a==null?void 0:a.querySelector("[data-schedule-time-label]"),w=i==null?void 0:i.querySelector("[data-schedule-time-label]");F instanceof HTMLElement&&(F.textContent="All day"),w instanceof HTMLElement&&(w.textContent="All day");return}const p=a==null?void 0:a.querySelector("[data-schedule-edit-time]"),g=i==null?void 0:i.querySelector("[data-schedule-edit-time]"),T=a==null?void 0:a.querySelector("[data-schedule-time-label]"),y=i==null?void 0:i.querySelector("[data-schedule-time-label]");T instanceof HTMLElement&&p instanceof HTMLInputElement&&(T.textContent=b(p.value)),y instanceof HTMLElement&&g instanceof HTMLInputElement&&(y.textContent=b(g.value))},ae=()=>{Me(Ie,M,P,ie),Me(Ce,h,q,E)};M==null||M.addEventListener("change",ae),h==null||h.addEventListener("change",ae);const Pe=()=>{V instanceof HTMLButtonElement&&(V.textContent=j==="edit"?"Wijzigingen opslaan":"Opslaan")},Ae=()=>{ve instanceof HTMLElement&&(ve.hidden=!0),he instanceof HTMLElement&&(he.hidden=!1),Pe()},O=()=>{c.hidden=!0,X=!1},Be=(e,t)=>{j="create",J="",Q=[],Ae(),L instanceof HTMLInputElement&&(L.value=""),Y instanceof HTMLInputElement&&(Y.value=""),W instanceof HTMLTextAreaElement&&(W.value=""),u instanceof HTMLInputElement&&(u.value=""),A instanceof HTMLInputElement&&(A.value=""),o instanceof HTMLInputElement&&(o.value=""),I(""),R instanceof HTMLSelectElement&&ue([]),s instanceof HTMLInputElement&&(s.value=""),x instanceof HTMLTextAreaElement&&(x.value=""),Z(),ee(),me(),oe(),d instanceof HTMLElement&&(d.textContent="",d.className="status-text"),Le(D[0]),te(N,e),te(H,e);const a=b(t||"09:00");C(P,a),C(ie,G(a)),C(q,a),C(E,G(a)),M instanceof HTMLInputElement&&(M.checked=!t),h instanceof HTMLInputElement&&(h.checked=!t),ae(),c.hidden=!1,setTimeout(()=>{u instanceof HTMLInputElement&&u.focus()},60),se()},De=e=>{if(!e)return;j="edit",J=String(e.id??""),Ae();const t=e.appointmentAt??e.createdAt,a=He(Xe(t)),i=b(Ze(t)),m=b(nt(e.message)||G(i)),p=et(e.message)||tt(e.message)||"",g=at(e.message),T=String(e.phone??"").trim(),y=U(e.licensePlate),F=Je(e.service).map($=>String($??"").trim()).filter(Boolean),w=F.filter($=>S.includes($)),pe=F.filter($=>!S.includes($)),z=!!y&&y!=="UNKNOWN";L instanceof HTMLInputElement&&(L.value=p),Y instanceof HTMLInputElement&&(Y.value=T==="0000000000"?"":T),W instanceof HTMLTextAreaElement&&(W.value=g===fe?"":g),d instanceof HTMLElement&&(d.textContent="",d.className="status-text"),u instanceof HTMLInputElement&&(u.value=p),A instanceof HTMLInputElement&&(A.value=T==="0000000000"?"":T),o instanceof HTMLInputElement&&(o.value=z?y:""),z?(I("Auto ophalen...","loading"),ye()):I(""),x instanceof HTMLTextAreaElement&&(x.value=g===fe?"":g),Q=pe,Z(),ue(w),Le(String(e.color??"")||D[0]),te(N,a),te(H,a),C(P,i),C(ie,m),C(q,i),C(E,m),M instanceof HTMLInputElement&&(M.checked=xe(e.message)),h instanceof HTMLInputElement&&(h.checked=xe(e.message)),me(),ae(),c.hidden=!1,setTimeout(()=>{u instanceof HTMLInputElement&&u.focus()},60),se()};return n.addEventListener("click",e=>{const t=e.target instanceof Element?e.target:null;if(!t||_e(n,t)||t.closest("[data-quickadd-service-value]"))return;ce instanceof HTMLElement&&!t.closest("#calendarQuickAddFullServiceUi")&&oe();const a=t.closest("[data-quickadd-remove-custom-index]");if(a instanceof HTMLElement){const i=Number(a.dataset.quickaddRemoveCustomIndex??-1);i>=0&&(Q.splice(i,1),Z());return}t.closest("[data-calendar-quickadd-close]")&&O()}),c.addEventListener("click",async e=>{if(e.target!==c)return;if(!Fe()){O();return}if(X)return;X=!0;const t=await Ke("You have unsaved changes. Close without saving?","Discard changes?");X=!1,t&&O()}),n.addEventListener("keydown",e=>{if(e.key==="Escape"){if(v instanceof HTMLElement&&!v.hidden){oe();return}O()}}),o==null||o.addEventListener("input",()=>{me(),ye()}),f==null||f.addEventListener("submit",async e=>{e.preventDefault();const t=u instanceof HTMLInputElement?u.value.trim():"",a=A instanceof HTMLInputElement?A.value.trim():"",i=x instanceof HTMLTextAreaElement?x.value.trim():"",m=H==null?void 0:H.querySelector("[data-schedule-edit-date]"),p=q==null?void 0:q.querySelector("[data-schedule-edit-time]"),g=E==null?void 0:E.querySelector("[data-schedule-edit-time]"),T=f.querySelector("input[name='fullColor']:checked"),y=h instanceof HTMLInputElement&&h.checked,F=m instanceof HTMLInputElement?m.value.trim():"",w=!y&&p instanceof HTMLInputElement?p.value.trim():"09:00",pe=!y&&g instanceof HTMLInputElement?b(g.value.trim(),G(w)):G(w),z=U(o instanceof HTMLInputElement?o.value:""),$=!z,Ve=$&&T instanceof HTMLInputElement?T.value:D[0],je=[...k,...Q].map(ne=>ne.trim()).filter(Boolean).join(", ");if(!t){d instanceof HTMLElement&&(d.textContent="Vul een naam in.",d.className="status-text warning"),u instanceof HTMLInputElement&&u.focus();return}if(!F){d instanceof HTMLElement&&(d.textContent="Geen datum geselecteerd.",d.className="status-text warning");return}V instanceof HTMLButtonElement&&(V.disabled=!0),d instanceof HTMLElement&&(d.textContent=j==="edit"?"Opslaan...":"Toevoegen...",d.className="status-text");try{await r({mode:j,editingBookingId:J,name:t,phone:a,note:i,date:F,time:w,endTime:pe,isAllDay:y,color:Ve,service:je,licensePlate:z,isSimpleAppointment:$}),se(),O()}catch(ne){const Oe=ne instanceof Error?ne.message:"Kan afspraak niet toevoegen.";d instanceof HTMLElement&&(d.textContent=Oe,d.className="status-text error")}finally{V instanceof HTMLButtonElement&&(V.disabled=!1)}}),{openForCreate:Be,openForEdit:De,close:O,destroy(){c.remove()}}}export{fe as M,rt as c};
