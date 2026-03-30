function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function showConfirmDialog(message, title = "Confirm") {
  return new Promise((resolve) => {
    const dialogHTML = `
      <div class="confirm-dialog-overlay" role="presentation">
        <div class="confirm-dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
          <div class="confirm-dialog-content">
            <h2 class="confirm-dialog-title" id="confirm-title">${escapeHtml(title)}</h2>
            <p id="confirm-desc">${escapeHtml(message)}</p>
          </div>
          <div class="confirm-dialog-actions">
            <button class="button" type="button" data-confirm-action="cancel">Cancel</button>
            <button class="button danger" type="button" data-confirm-action="continue">Continue</button>
          </div>
        </div>
      </div>
    `;

    const dialogContainer = document.createElement("div");
    dialogContainer.innerHTML = dialogHTML;
    document.body.appendChild(dialogContainer);

    const overlay = dialogContainer.querySelector(".confirm-dialog-overlay");
    const continueButton = dialogContainer.querySelector('[data-confirm-action="continue"]');

    if (continueButton instanceof HTMLButtonElement) {
      setTimeout(() => continueButton.focus(), 100);
    }

    const handleAction = (confirmed) => {
      dialogContainer.remove();
      resolve(confirmed);
    };

    if (overlay instanceof HTMLElement) {
      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
          handleAction(false);
        }
      });
    }

    dialogContainer.addEventListener("click", (event) => {
      const target = event.target instanceof HTMLElement ? event.target : null;
      if (!target) {
        return;
      }

      const actionButton = target.closest("[data-confirm-action]");
      if (actionButton instanceof HTMLElement) {
        handleAction(actionButton.dataset.confirmAction === "continue");
      }
    });

    dialogContainer.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        handleAction(false);
      }
    });
  });
}
