let activePopup = null;
let activeOverlay = null;
let activeCloseHandler = null;
let activeKeyHandler = null;

function ensureClosed() {
  if (activeCloseHandler) {
    activeCloseHandler();
  }
}

function positionPopup(popup, button) {
  const rect = button.getBoundingClientRect();
  const popupHeight = popup.offsetHeight || 200;
  const popupWidth = popup.offsetWidth || 280;
  const spaceBelow = window.innerHeight - rect.bottom;

  let top;
  let left = rect.left;

  if (spaceBelow > popupHeight + 8) {
    top = rect.bottom + 8;
  } else {
    top = Math.max(8, rect.top - popupHeight - 8);
  }

  const rightEdge = left + popupWidth;
  if (rightEdge > window.innerWidth - 8) {
    left = Math.max(8, window.innerWidth - popupWidth - 8);
  }

  popup.style.top = `${Math.round(top)}px`;
  popup.style.left = `${Math.round(left)}px`;
}

function createOptionRow(option) {
  const row = document.createElement("button");
  row.type = "button";
  row.className = "action-popup-option";
  row.dataset.popupOptionId = option.id;

  if (option.disabled) {
    row.classList.add("disabled");
    row.disabled = true;
  }

  row.innerHTML = `
    <span class="action-popup-option-icon" aria-hidden="true">${option.icon || "•"}</span>
    <span class="action-popup-option-content">
      <strong class="action-popup-option-title">${option.title}</strong>
      <span class="action-popup-option-description">${option.description || ""}</span>
      <span class="action-popup-option-error" hidden></span>
    </span>
  `;

  return row;
}

export function openActionPopup(config) {
  ensureClosed();

  const triggerButton = config?.triggerButton;
  if (!(triggerButton instanceof HTMLElement)) {
    return null;
  }

  const isMobileSheet = window.matchMedia("(max-width: 768px)").matches;

  const popup = document.createElement("div");
  popup.className = "action-popup";
  popup.setAttribute("role", "dialog");
  popup.setAttribute("aria-modal", "true");

  const overlay = document.createElement("button");
  overlay.type = "button";
  overlay.className = "popup-overlay";
  overlay.hidden = !isMobileSheet;

  popup.innerHTML = `
    ${isMobileSheet ? '<div class="sheet-handle" aria-hidden="true"></div>' : ""}
    <div class="action-popup-header">
      <span>${config.title || "Acties"}</span>
      <button type="button" class="action-popup-close" aria-label="Sluiten">&times;</button>
    </div>
    ${config.subtitle ? `<div class="action-popup-subtitle">${config.subtitle}</div>` : ""}
    <div class="action-popup-body"></div>
  `;

  const body = popup.querySelector(".action-popup-body");
  const closeButton = popup.querySelector(".action-popup-close");
  const optionState = new Map();
  let loadingCount = 0;

  const setLoading = (optionId, isLoading) => {
    const row = popup.querySelector(`[data-popup-option-id="${optionId}"]`);
    if (!(row instanceof HTMLElement)) return;

    if (isLoading) {
      if (!row.classList.contains("loading")) {
        loadingCount += 1;
      }
      row.classList.add("loading");
    } else {
      if (row.classList.contains("loading")) {
        loadingCount = Math.max(0, loadingCount - 1);
      }
      row.classList.remove("loading");
    }
  };

  const setDisabled = (optionId, isDisabled) => {
    const row = popup.querySelector(`[data-popup-option-id="${optionId}"]`);
    if (!(row instanceof HTMLButtonElement)) return;
    row.disabled = Boolean(isDisabled);
    row.classList.toggle("disabled", Boolean(isDisabled));
  };

  const setError = (optionId, message) => {
    const row = popup.querySelector(`[data-popup-option-id="${optionId}"]`);
    if (!(row instanceof HTMLElement)) return;
    const errorEl = row.querySelector(".action-popup-option-error");
    if (!(errorEl instanceof HTMLElement)) return;
    if (message) {
      row.classList.add("error");
      errorEl.hidden = false;
      errorEl.textContent = message;
    } else {
      row.classList.remove("error");
      errorEl.hidden = true;
      errorEl.textContent = "";
    }
  };

  const setBodyContent = (html, attachHandlers) => {
    if (!(body instanceof HTMLElement)) return;
    body.innerHTML = html;
    if (typeof attachHandlers === "function") {
      attachHandlers(body, controls);
    }
  };

  const controls = {
    close: () => {
      if (loadingCount > 0) return;
      ensureClosed();
    },
    forceClose: () => ensureClosed(),
    setLoading,
    setDisabled,
    setError,
    setBodyContent,
  };

  const options = Array.isArray(config.options) ? config.options : [];
  options.forEach((option) => {
    optionState.set(option.id, { ...option });
    body?.append(createOptionRow(option));
  });

  const onBodyClick = async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const row = target.closest("[data-popup-option-id]");
    if (!(row instanceof HTMLButtonElement)) return;

    const optionId = String(row.dataset.popupOptionId || "");
    const option = optionState.get(optionId);
    if (!option || row.disabled || row.classList.contains("loading")) {
      return;
    }

    setError(optionId, "");

    try {
      await option.onSelect?.(controls, optionId);
    } catch {
      setError(optionId, "Actie mislukt. Probeer opnieuw.");
    }
  };

  const closePopup = () => {
    popup.removeEventListener("click", onBodyClick);
    closeButton?.removeEventListener("click", closePopup);
    overlay.removeEventListener("click", onOverlayClick);
    document.removeEventListener("click", onDocumentClick, true);
    document.removeEventListener("keydown", onKeyDown);
    popup.remove();
    overlay.remove();
    if (activePopup === popup) {
      activePopup = null;
      activeOverlay = null;
      activeCloseHandler = null;
      activeKeyHandler = null;
    }
  };

  const onOverlayClick = () => {
    if (loadingCount > 0) return;
    closePopup();
  };

  const onDocumentClick = (event) => {
    if (loadingCount > 0) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (popup.contains(target)) return;
    if (triggerButton.contains(target)) return;
    closePopup();
  };

  const onKeyDown = (event) => {
    if (event.key !== "Escape") return;
    if (loadingCount > 0) return;
    closePopup();
  };

  popup.addEventListener("click", onBodyClick);
  closeButton?.addEventListener("click", closePopup);
  overlay.addEventListener("click", onOverlayClick);

  document.body.append(overlay, popup);
  if (!isMobileSheet) {
    positionPopup(popup, triggerButton);
  }

  window.setTimeout(() => {
    document.addEventListener("click", onDocumentClick, true);
    document.addEventListener("keydown", onKeyDown);
  }, 0);

  activePopup = popup;
  activeOverlay = overlay;
  activeCloseHandler = closePopup;
  activeKeyHandler = onKeyDown;

  return controls;
}

export function closeActionPopup() {
  ensureClosed();
}
