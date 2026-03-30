import{g as l,s as g,a as p,b as m,i as b,c as w}from"./theme-DgkmrLao.js";function f(){return`
    <section class="auth-card page-animate">
      <div class="auth-theme-row">
        <label class="theme-switcher" aria-label="Night mode">
          <span class="theme-switch-label">Night Mode</span>
          <span class="theme-switch-control">
            <input class="theme-switch-input" type="checkbox" data-theme-toggle role="switch" ${l()==="dark"?"checked":""} />
            <span class="theme-switch-track" aria-hidden="true"></span>
          </span>
        </label>
      </div>

      <p class="kicker">Garage Dashboard</p>
      <h1>Welcome back</h1>
      <p class="muted">Sign in with your garage account to load only your own bookings and analytics.</p>

      <form id="loginForm" class="stacked-form">
        <label>
          Email
          <input type="email" name="email" placeholder="owner@garage.com" required />
        </label>

        <label>
          Password
          <input type="password" name="password" placeholder="Your password" required />
        </label>

        <button id="loginButton" class="button" type="submit">Sign in with Supabase</button>
      </form>

      <p id="authMessage" class="status-text" role="status" aria-live="polite"></p>

      <p id="configHint" class="config-hint hidden">
        Supabase credentials are missing. Add values in <code>.env</code> using <code>.env.example</code>.
      </p>
    </section>
  `}async function y(e){if(!e)return;e.innerHTML=f();const i=e.querySelector("#loginForm"),s=e.querySelector("#loginButton"),a=e.querySelector("#authMessage"),d=e.querySelector("#configHint"),t=e.querySelector("[data-theme-toggle]");t instanceof HTMLInputElement&&(t.checked=l()==="dark",t.addEventListener("change",()=>{g(t.checked?"dark":"light")}));const o=b();if(o)try{if(await p()){window.location.href="/dashboard.html";return}}catch{a.textContent="Could not check your current session.",a.classList.add("error")}else s.disabled=!0,d.classList.remove("hidden");i.addEventListener("submit",async n=>{if(n.preventDefault(),!o)return;a.classList.remove("error"),a.textContent="Signing in...",s.disabled=!0;const r=new FormData(i),u=String(r.get("email")??""),h=String(r.get("password")??"");try{await m(u,h),window.location.href="/dashboard.html"}catch(c){a.classList.add("error"),a.textContent=c instanceof Error?c.message:"Unable to sign in.",s.disabled=!1}})}const k=document.querySelector("#app");w();y(k);
