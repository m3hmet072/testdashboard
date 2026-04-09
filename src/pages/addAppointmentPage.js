import { createAppShell } from "../components/appShell.js";
import { createManualBooking, getBookings } from "../services/bookingService.js";
import { summarizeEmailInbox } from "../services/emailService.js";
import { fetchVehicleByLicensePlate, normalizeLicensePlate } from "../services/rdwService.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";
import {
  formatScheduleDateLabel,
  handleScheduleTimePickerInteraction,
  normalizeDateValue,
  normalizeTimeValue,
  scheduleDateOptionsMarkup,
  scheduleTimeOptionsMarkup,
} from "../utils/scheduleTimePicker.js";

const SERVICE_OPTIONS = ["APK", "Banden", "Onderhoud", "Airco", "Occasions", "Brakes"];

const SERVICE_KEY_BY_LABEL = {
  apk: "apk",
  banden: "banden",
  onderhoud: "onderhoud",
  airco: "airco",
  occasions: "occasions",
  brakes: "brakes",
};

const SERVICE_LABEL_BY_KEY = {
  apk: "APK",
  banden: "Banden",
  onderhoud: "Onderhoud",
  airco: "Airco",
  occasions: "Occasions",
  brakes: "Brakes",
  other: "Overige",
};

const SERVICE_KEY_ALIASES = new Map([
  ["apk", "apk"],
  ["banden", "banden"],
  ["tire", "banden"],
  ["tires", "banden"],
  ["airco", "airco"],
  ["ac", "airco"],
  ["occasion", "occasions"],
  ["occasions", "occasions"],
  ["onderhoud", "onderhoud"],
  ["maintenance", "onderhoud"],
  ["service", "onderhoud"],
  ["brakes", "brakes"],
  ["brake", "brakes"],
  ["remmen", "brakes"],
]);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeServiceKey(token) {
  return SERVICE_KEY_ALIASES.get(String(token ?? "").trim().toLowerCase()) ?? "other";
}

function splitServiceValues(service) {
  const raw = String(service ?? "").trim();
  if (!raw) {
    return [];
  }

  const parts = raw
    .split(raw.includes(",") ? /,/g : /\+|\/|&| and /gi)
    .map((item) => item.trim())
    .filter(Boolean);

  return parts;
}

function serviceChipsMarkup(service) {
  return splitServiceValues(service)
    .map((item) => {
      const key = normalizeServiceKey(item);
      const label = SERVICE_LABEL_BY_KEY[key] ?? item;
      return `<span class="service-chip service-chip-${key}">${escapeHtml(label)}</span>`;
    })
    .join("");
}

function toDateInputValue(date) {
  return date.toISOString().slice(0, 10);
}

function nextHalfHour() {
  const now = new Date();
  const minutes = now.getMinutes();
  const rounded = minutes < 30 ? 30 : 60;
  now.setMinutes(rounded, 0, 0);

  if (rounded === 60) {
    now.setHours(now.getHours() + 1, 0, 0, 0);
  }

  return now;
}

function fallbackVehiclePreview(licensePlate = "") {
  const normalized = normalizeLicensePlate(licensePlate);

  return {
    title: normalized ? `${normalized}` : "Voertuig gegevens",
    buildYear: "",
    apkExpiryDate: "",
    color: "",
    fuel: "",
  };
}

export async function mountAddAppointmentPage(rootElement) {
  if (!rootElement) {
    return;
  }

  const authState = await ensureAuthenticated();
  if (!authState) {
    return;
  }

  if (!authState.isAdmin && !authState.activeGarage) {
    rootElement.innerHTML = `
      <section class="auth-card page-animate">
        <h1>No Garage Linked</h1>
        <p class="muted">Your account is authenticated but not mapped to a row in the garages table.</p>
      </section>
    `;
    return;
  }

  applyGarageBranding(authState.activeGarage);

  const garageIds = authState.isAdmin ? null : [authState.activeGarage?.id].filter(Boolean);
  const manualGarageId = authState.activeGarage?.id ?? authState.garages?.[0]?.id ?? "";

  const { shell, contentArea, setUnreadEmailCount } = createAppShell({
    activePage: "addappointment",
    title: "Add Appointment",
    headerNote: "Create a booking manually",
    userEmail: authState.user.email,
    onLogout: logoutAndRedirect,
    garage: authState.activeGarage,
    isAdmin: authState.isAdmin,
  });

  rootElement.replaceChildren(shell);

  const toastRegion = document.createElement("div");
  toastRegion.className = "appointment-toast-region";
  toastRegion.setAttribute("aria-live", "polite");
  toastRegion.setAttribute("aria-atomic", "true");
  shell.append(toastRegion);

  const defaultDateTime = nextHalfHour();

  contentArea.innerHTML = `
    <section class="panel appointment-form-panel">
      <form id="manualAppointmentForm" class="appointment-create-form" novalidate>
        <div class="appointment-grid-two">
          <label>
            Customer name
            <input id="manualCustomerName" name="customerName" type="text" autocomplete="name" placeholder="eg. Mehmet Babacanoglu" required />
          </label>

          <label>
            Phone number
            <input id="manualPhone" name="phone" type="tel" autocomplete="tel" placeholder="eg. 0624987172" required />
          </label>
        </div>

        <label>
          License Plate
          <input id="manualLicensePlate" name="licensePlate" type="text"  placeholder="eg. 12-ABC-D1" required />
        </label>

        <div class="vehicle-preview-card" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle" class="request-vehicle">Vehicle preview</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear"></strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk"></strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor"></strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel"></strong></span>
          </div>
        </div>

        <div class="appointment-grid-two">
          <div class="appt-picker-field">
            <span class="appt-picker-label">Date</span>
            <div class="request-date-picker" data-schedule-date-picker>
              <input type="hidden" name="date" data-schedule-edit-date value="" />
              <button class="request-date-trigger" type="button" data-schedule-date-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-date-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <div class="request-date-options" role="listbox" data-schedule-date-options></div>
            </div>
          </div>

          <div class="appt-picker-field">
            <span class="appt-picker-label">Time</span>
            <div class="request-time-picker" data-schedule-time-picker>
              <input type="hidden" name="time" data-schedule-edit-time value="" />
              <button class="request-time-trigger" type="button" data-schedule-time-toggle aria-haspopup="listbox" aria-expanded="false">
                <span data-schedule-time-label></span>
                <svg viewBox="0 0 16 16" fill="none"><path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <div class="request-time-options" role="listbox" data-schedule-time-options></div>
            </div>
          </div>
        </div>

        <div class="service-selector-group" role="group" aria-label="Service">
          <span class="service-selector-label">Service</span>
          <div class="service-selector-options">
            ${SERVICE_OPTIONS.map((service, index) => {
              const serviceKey = SERVICE_KEY_BY_LABEL[String(service).toLowerCase()] ?? "other";
              return `
                <label class="service-option service-option-${serviceKey}">
                  <input type="checkbox" name="services" value="${service}" ${index === 0 ? "checked" : ""} />
                  <span class="service-option-ui">
                    <span class="service-option-check" aria-hidden="true">
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8.2L6.7 11.2L12.5 5.2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </span>
                    <span class="service-option-text">${service}</span>
                  </span>
                </label>
              `;
            }).join("")}
          </div>
          <div class="manual-service-input-group">
            <label class="manual-service-label">Or add custom service:</label>
            <input 
              type="text" 
              id="serviceInput" 
              class="service-input" 
              placeholder="e.g., Remblokken, Wielen balanceren"
              aria-label="Custom service input"
            />
            <div id="selectedServices" class="service-chips-display"></div>
          </div>
        </div>

        <div class="manual-appointment-actions">
          <button type="submit" class="button">Save Appointment</button>
          <p id="manualAppointmentStatus" class="status-text" role="status" aria-live="polite"></p>
        </div>
      </form>
    </section>
  `;

  const manualForm = contentArea.querySelector("#manualAppointmentForm");
  const statusElement = contentArea.querySelector("#manualAppointmentStatus");
  const submitButton = manualForm?.querySelector("button[type='submit']");
  const licensePlateInput = contentArea.querySelector("#manualLicensePlate");
  const vehiclePreviewTitle = contentArea.querySelector("#vehiclePreviewTitle");
  const vehiclePreviewBuildYear = contentArea.querySelector("#vehiclePreviewBuildYear");
  const vehiclePreviewApk = contentArea.querySelector("#vehiclePreviewApk");
  const vehiclePreviewColor = contentArea.querySelector("#vehiclePreviewColor");
  const vehiclePreviewFuel = contentArea.querySelector("#vehiclePreviewFuel");
  const datePicker = contentArea.querySelector("[data-schedule-date-picker]");
  const timePicker = contentArea.querySelector("[data-schedule-time-picker]");

  const initDatePicker = (dateValue) => {
    if (!(datePicker instanceof HTMLElement)) return;
    const normalized = normalizeDateValue(dateValue);
    const hiddenInput = datePicker.querySelector("[data-schedule-edit-date]");
    const label = datePicker.querySelector("[data-schedule-date-label]");
    const optionsDiv = datePicker.querySelector("[data-schedule-date-options]");
    if (hiddenInput instanceof HTMLInputElement) hiddenInput.value = normalized;
    if (label instanceof HTMLElement) label.textContent = formatScheduleDateLabel(normalized);
    if (optionsDiv instanceof HTMLElement) optionsDiv.innerHTML = scheduleDateOptionsMarkup(normalized);
  };

  const initTimePicker = (timeValue) => {
    if (!(timePicker instanceof HTMLElement)) return;
    const normalized = normalizeTimeValue(timeValue);
    const hiddenInput = timePicker.querySelector("[data-schedule-edit-time]");
    const label = timePicker.querySelector("[data-schedule-time-label]");
    const optionsDiv = timePicker.querySelector("[data-schedule-time-options]");
    if (hiddenInput instanceof HTMLInputElement) hiddenInput.value = normalized;
    if (label instanceof HTMLElement) label.textContent = normalized;
    if (optionsDiv instanceof HTMLElement) optionsDiv.innerHTML = scheduleTimeOptionsMarkup(normalized, authState.activeGarage);
  };

  const defaultDate = toDateInputValue(defaultDateTime);
  const defaultTime = `${String(defaultDateTime.getHours()).padStart(2, "0")}:${String(defaultDateTime.getMinutes()).padStart(2, "0")}`;
  initDatePicker(defaultDate);
  initTimePicker(defaultTime);

  const serviceInput = contentArea.querySelector("#serviceInput");
  const selectedServicesDisplay = contentArea.querySelector("#selectedServices");
  let customServices = [];

  const updateServiceChipsDisplay = () => {
    if (!selectedServicesDisplay) return;
    selectedServicesDisplay.innerHTML = customServices.map((service, idx) => `
      <span class="service-chip service-chip-other" data-custom-idx="${idx}">
        ${escapeHtml(service)}
        <button class="service-chip-remove" type="button" data-remove-idx="${idx}" aria-label="Remove service">×</button>
      </span>
    `).join("");
  };

  if (serviceInput instanceof HTMLInputElement) {
    serviceInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const value = serviceInput.value.trim();
        if (value && !customServices.includes(value)) {
          customServices.push(value);
          serviceInput.value = "";
          updateServiceChipsDisplay();
        }
      }
    });
  }

  contentArea.addEventListener("click", (event) => {
    handleScheduleTimePickerInteraction(contentArea, event.target);

    const removeBtn = event.target instanceof HTMLElement ? event.target.closest(".service-chip-remove") : null;
    if (removeBtn instanceof HTMLElement) {
      const idx = Number(removeBtn.dataset.removeIdx ?? -1);
      if (idx >= 0) {
        customServices.splice(idx, 1);
        updateServiceChipsDisplay();
      }
    }
  });

  const setStatus = (message, tone = "") => {
    if (!statusElement) {
      return;
    }

    statusElement.textContent = String(message ?? "");
    statusElement.classList.remove("error", "warning");

    if (tone === "error" || tone === "warning") {
      statusElement.classList.add(tone);
    }
  };

  let toastHideTimerId = 0;
  let toastCleanupTimerId = 0;

  const clearToastTimers = () => {
    if (toastHideTimerId) {
      window.clearTimeout(toastHideTimerId);
      toastHideTimerId = 0;
    }

    if (toastCleanupTimerId) {
      window.clearTimeout(toastCleanupTimerId);
      toastCleanupTimerId = 0;
    }
  };

  const dismissToast = () => {
    const toast = toastRegion.querySelector(".appointment-toast");
    if (!toast) {
      toastRegion.innerHTML = "";
      clearToastTimers();
      return;
    }

    toast.classList.remove("is-visible");
    if (toastCleanupTimerId) {
      window.clearTimeout(toastCleanupTimerId);
    }
    toastCleanupTimerId = window.setTimeout(() => {
      toastRegion.innerHTML = "";
      toastCleanupTimerId = 0;
    }, 220);
  };

  const showToast = (message, tone = "success") => {
    if (!(toastRegion instanceof HTMLElement)) {
      return;
    }

    clearToastTimers();

    const safeTone = tone === "error" || tone === "warning" ? tone : "success";
    const iconMarkup = safeTone === "success"
      ? `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.2 8.3L6.6 11.4L12.8 4.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
      : safeTone === "error"
        ? `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 5L11 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><path d="M11 5L5 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg>`
        : `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><circle cx="8" cy="12" r="1" fill="currentColor"></circle></svg>`;

    const toastTitle = safeTone === "success"
      ? "Saved Successfully"
      : safeTone === "error"
        ? "Error Occurred"
        : "Action Required";

    toastRegion.innerHTML = `
      <div class="appointment-toast appointment-toast-${safeTone} is-visible" role="status">
        <span class="appointment-toast-icon">${iconMarkup}</span>
        <div class="appointment-toast-copy">
          <p class="appointment-toast-title">${toastTitle}</p>
          <p class="appointment-toast-message">${String(message ?? "")}</p>
        </div>
        <button class="appointment-toast-close" type="button" aria-label="Dismiss notification">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4.5 4.5L11.5 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
            <path d="M11.5 4.5L4.5 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
        </button>
      </div>
    `;

    toastHideTimerId = window.setTimeout(() => {
      dismissToast();
      toastHideTimerId = 0;
    }, 311000);
  };

  toastRegion.addEventListener("click", (event) => {
    const closeButton = event.target instanceof Element
      ? event.target.closest(".appointment-toast-close")
      : null;

    if (closeButton) {
      clearToastTimers();
      dismissToast();
    }
  });

  const refreshSidebarInbox = async () => {
    try {
      const bookings = await getBookings({ garageIds });
      const summary = summarizeEmailInbox(bookings);
      setUnreadEmailCount(summary.unread);
    } catch {
      setUnreadEmailCount(0);
    }
  };

  const canRenderVehiclePreview =
    vehiclePreviewTitle instanceof HTMLElement &&
    vehiclePreviewBuildYear instanceof HTMLElement &&
    vehiclePreviewApk instanceof HTMLElement &&
    vehiclePreviewColor instanceof HTMLElement &&
    vehiclePreviewFuel instanceof HTMLElement;

  const renderVehiclePreview = (preview) => {
    if (!canRenderVehiclePreview) {
      return;
    }

    vehiclePreviewTitle.textContent = preview.buildYear && preview.buildYear !== "" 
      ? `${preview.title} (${preview.buildYear})`
      : preview.title;
    vehiclePreviewBuildYear.textContent = preview.buildYear;
    vehiclePreviewApk.textContent = preview.apkExpiryDate;
    vehiclePreviewColor.textContent = preview.color;
    vehiclePreviewFuel.textContent = preview.fuel;
  };

  renderVehiclePreview(fallbackVehiclePreview());

  let plateLookupTimeoutId = 0;
  let plateLookupToken = 0;
  let plateLookupAbortController = null;

  if (licensePlateInput instanceof HTMLInputElement) {
    licensePlateInput.addEventListener("input", () => {
      if (plateLookupTimeoutId) {
        window.clearTimeout(plateLookupTimeoutId);
      }

      const normalizedPlate = normalizeLicensePlate(licensePlateInput.value);

      if (normalizedPlate.length < 6) {
        plateLookupAbortController?.abort();
        renderVehiclePreview(fallbackVehiclePreview(normalizedPlate));
        return;
      }

      plateLookupTimeoutId = window.setTimeout(async () => {
        plateLookupToken += 1;
        const currentToken = plateLookupToken;

        plateLookupAbortController?.abort();
        plateLookupAbortController = new AbortController();

        renderVehiclePreview({
          ...fallbackVehiclePreview(normalizedPlate),
          title: `${normalizedPlate} • RDW lookup`,
        });

        try {
          const vehicle = await fetchVehicleByLicensePlate(normalizedPlate, {
            signal: plateLookupAbortController.signal,
          });

          if (currentToken !== plateLookupToken) {
            return;
          }

          if (!vehicle) {
            renderVehiclePreview({
              ...fallbackVehiclePreview(normalizedPlate),
              title: `${normalizedPlate} • Niet gevonden`,
            });
            return;
          }

          renderVehiclePreview(vehicle);
        } catch (error) {
          if (error && typeof error === "object" && "name" in error && error.name === "AbortError") {
            return;
          }

          renderVehiclePreview({
            ...fallbackVehiclePreview(normalizedPlate),
            title: `${normalizedPlate} • RDW tijdelijk niet bereikbaar`,
          });
        }
      }, 320);
    });
  }

  if (!manualGarageId) {
    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
    }
    setStatus("No garage available for manual appointment creation.", "warning");
  }

  manualForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!manualGarageId) {
      setStatus("No garage available for manual appointment creation.", "warning");
      showToast("No garage available for manual appointment creation.", "warning");
      return;
    }

    const checkedCheckboxes = Array.from(contentArea.querySelectorAll("input[name='service']:checked"));
    const checkedServices = checkedCheckboxes
      .map((cb) => cb instanceof HTMLInputElement ? cb.value : "")
      .filter(Boolean);
    const combinedServices = checkedServices.concat(customServices).filter(Boolean);

    if (!combinedServices.length) {
      setStatus("Enter at least one service.", "warning");
      showToast("Enter at least one service.", "warning");
      return;
    }

    const formData = new FormData(manualForm);
    const customerName = String(formData.get("customerName") ?? "").trim();
    const licensePlate = String(formData.get("licensePlate") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const date = datePicker?.querySelector("[data-schedule-edit-date]") instanceof HTMLInputElement
      ? (datePicker.querySelector("[data-schedule-edit-date]")).value.trim()
      : String(formData.get("date") ?? "").trim();
    const time = timePicker?.querySelector("[data-schedule-edit-time]") instanceof HTMLInputElement
      ? (timePicker.querySelector("[data-schedule-edit-time]")).value.trim()
      : String(formData.get("time") ?? "").trim();

    if (!customerName || !licensePlate || !phone || !date || !time) {
      setStatus("Please fill all required fields.", "warning");
      showToast("Please fill all required fields.", "warning");
      return;
    }

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
    }

    setStatus("Adding appointment...");

    try {
      await createManualBooking({
        garageId: manualGarageId,
        licensePlate,
        phone,
        service: combinedServices.join(", "),
        message: `Name: ${customerName}\nMessage: Manual appointment created in dashboard.`,
        appointmentAt: `${date}T${time}`,
      });

      manualForm.reset();
      customServices = [];
      if (serviceInput instanceof HTMLInputElement) {
        serviceInput.value = "";
      }
      updateServiceChipsDisplay();

      const resetHalf = nextHalfHour();
      initDatePicker(toDateInputValue(resetHalf));
      initTimePicker(`${String(resetHalf.getHours()).padStart(2, "0")}:${String(resetHalf.getMinutes()).padStart(2, "0")}`);

      if (licensePlateInput instanceof HTMLInputElement) {
        licensePlateInput.value = "";
      }

      if (plateLookupTimeoutId) {
        window.clearTimeout(plateLookupTimeoutId);
      }
      plateLookupAbortController?.abort();
      renderVehiclePreview(fallbackVehiclePreview());

      setStatus("");
      showToast("Appointment added successfully.", "success");
      await refreshSidebarInbox();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to add appointment.";
      setStatus(message, "error");
      showToast(message, "error");
    } finally {
      if (submitButton instanceof HTMLButtonElement && manualGarageId) {
        submitButton.disabled = false;
      }
    }
  });

  await refreshSidebarInbox();
}

