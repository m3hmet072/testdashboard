function r(n){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function m(n,s="Confirm"){return new Promise(d=>{const f=`
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title" id="confirm-title">${r(s)}</h2>
            <p id="confirm-desc">${r(n)}</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button" type="button" data-confirm-action="cancel">Cancel</button>
            <button class="button danger" type="button" data-confirm-action="continue">Continue</button>
          </div>
        </div>
      </div>
    `,e=document.createElement("div");e.innerHTML=f,document.body.appendChild(e);const o=e.querySelector(".confirm-dialog-overlay"),a=e.querySelector('[data-confirm-action="continue"]');a instanceof HTMLButtonElement&&setTimeout(()=>a.focus(),100);const i=t=>{e.remove(),d(t)};o instanceof HTMLElement&&o.addEventListener("click",t=>{t.target===o&&i(!1)}),e.addEventListener("click",t=>{const c=t.target instanceof HTMLElement?t.target:null;if(!c)return;const l=c.closest("[data-confirm-action]");l instanceof HTMLElement&&i(l.dataset.confirmAction==="continue")}),e.addEventListener("keydown",t=>{t.key==="Escape"&&i(!1)})})}export{m as s};
