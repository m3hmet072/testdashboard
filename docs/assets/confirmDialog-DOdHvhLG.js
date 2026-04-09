function r(n){return String(n).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function f(n,d="Confirm"){return new Promise(s=>{const m=`
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title" id="confirm-title">${r(d)}</h2>
            <p id="confirm-desc">${r(n)}</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button" type="button" data-confirm-action="cancel">Cancel</button>
            <button class="button danger" type="button" data-confirm-action="continue">Continue</button>
          </div>
        </div>
      </div>
    `,t=document.createElement("div");t.innerHTML=m,document.body.appendChild(t);const o=t.querySelector(".confirm-dialog-overlay"),c=t.querySelector('[data-confirm-action="continue"]');c instanceof HTMLButtonElement&&setTimeout(()=>c.focus(),100);const i=e=>{t.remove(),s(e)};o instanceof HTMLElement&&o.addEventListener("click",e=>{e.target===o&&i(!1)}),t.addEventListener("click",e=>{const a=e.target instanceof HTMLElement?e.target:null;if(!a)return;const l=a.closest("[data-confirm-action]");l instanceof HTMLElement&&i(l.dataset.confirmAction==="continue")}),t.addEventListener("keydown",e=>{e.key==="Escape"&&i(!1)})})}export{f as m};
