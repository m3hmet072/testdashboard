import { ensureAuthenticated } from "../utils/auth.js";
import { createWerkbonStore } from "./werkbon/werkbonStore.js";

function noGarageMarkup() {
  return `
    <section class="auth-card page-animate">
      <h1>No Garage Linked</h1>
      <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
    </section>
  `;
}

export async function mountWerkbonSubPage(rootElement, {
  title,
  note,
  createSection,
  showTitleRow = true,
  headerToolbarHtml = "",
}) {
  if (!rootElement) {
    return;
  }

  const authState = await ensureAuthenticated();
  if (!authState) {
    return;
  }

  if (!authState.isAdmin && !authState.activeGarage) {
    rootElement.innerHTML = noGarageMarkup();
    return;
  }

  const store = createWerkbonStore();
  const section = createSection({ store });

  rootElement.innerHTML = `
    <main class="werkbon-standalone page-animate" role="main">
      <section class="werkbon-standalone-shell">
        <div class="werkbon-page-shell werkbon-choice-shell">
          <div class="werkbon-back-row">
            <a class="button subtle" href="./werkbon.html">← Terug naar Werkbon</a>
          </div>
          <header class="werkbon-section-header panel werkbon-choice-hero">
            ${showTitleRow ? `<h1 class="werkbon-title">${title}</h1>` : ""}
            ${showTitleRow && note ? `<p class="muted">${note}</p>` : ""}
            <div class="werkbon-header-extra" data-header-extra>${headerToolbarHtml}</div>
          </header>
        </div>
      </section>
    </main>
  `;

  const shell = rootElement.querySelector(".werkbon-page-shell");
  if (shell) {
    shell.append(section);
  }
}
