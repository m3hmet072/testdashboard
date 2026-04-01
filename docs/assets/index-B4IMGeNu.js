import{g as d,s as p,a as m,p as l,b,i as w,c as f}from"./theme-B0f129yT.js";function y(){return`
    <section class="auth-card page-animate">
      <div class="auth-theme-row">
        <label class="theme-switcher" aria-label="Night mode">
          <span class="theme-switch-label">Night Mode</span>
          <span class="theme-switch-control">
            <input class="theme-switch-input" type="checkbox" data-theme-toggle role="switch" ${d()==="dark"?"checked":""} />
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
  `}async function k(e){if(!e)return;e.innerHTML=y();const i=e.querySelector("#loginForm"),t=e.querySelector("#loginButton"),a=e.querySelector("#authMessage"),u=e.querySelector("#configHint"),s=e.querySelector("[data-theme-toggle]");s instanceof HTMLInputElement&&(s.checked=d()==="dark",s.addEventListener("change",()=>{p(s.checked?"dark":"light")}));const o=w();if(o)try{if(await m()){window.location.href=l("dashboard.html");return}}catch{a.textContent="Could not check your current session.",a.classList.add("error")}else t.disabled=!0,u.classList.remove("hidden");i.addEventListener("submit",async n=>{if(n.preventDefault(),!o)return;a.classList.remove("error"),a.textContent="Signing in...",t.disabled=!0;const r=new FormData(i),h=String(r.get("email")??""),g=String(r.get("password")??"");try{await b(h,g),window.location.href=l("dashboard.html")}catch(c){a.classList.add("error"),a.textContent=c instanceof Error?c.message:"Unable to sign in.",t.disabled=!1}})}const S=document.querySelector("#app");f();k(S);
