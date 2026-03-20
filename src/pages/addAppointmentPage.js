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

const SERVICE_OPTIONS = ["APK", "Banden", "Onderhoud", "Airco", "Overige", "Occasions", "Brakes"];

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
    buildYear: "—",
    apkExpiryDate: "—",
    color: "—",
    fuel: "—",
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
    activePage: "add-appointment",
    title: "Add Appointment",
    headerNote: "Create a booking manually",
    userEmail: authState.user.email,
    onLogout: logoutAndRedirect,
    garage: authState.activeGarage,
    isAdmin: authState.isAdmin,
  });

  rootElement.replaceChildren(shell);

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
          <input id="manualLicensePlate" name="licensePlate" type="text" autocomplete="off" placeholder="eg. 12-ABC-D1" required />
        </label>

        <div class="vehicle-preview-card" id="vehiclePreviewCard">
          <p id="vehiclePreviewTitle">Vehicle preview</p>
          <div class="vehicle-preview-meta">
            <span>Bouwjaar: <strong id="vehiclePreviewBuildYear">—</strong></span>
            <span>APK verloopt op: <strong id="vehiclePreviewApk">—</strong></span>
          </div>
          <div class="vehicle-preview-meta">
            <span>Kleur: <strong id="vehiclePreviewColor">—</strong></span>
            <span>Brandstof: <strong id="vehiclePreviewFuel">—</strong></span>
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

        <fieldset class="service-selector-group">
          <legend>Service</legend>
          <div class="service-selector-options">
            ${SERVICE_OPTIONS.map((service, index) => {
              const checked = index === 0 ? "checked" : "";
              return `<label><input type="checkbox" name="services" value="${service}" ${checked} /> ${service}</label>`;
            }).join("")}
          </div>
        </fieldset>

        <div class="manual-appointment-actions">
          <button type="submit" class="button">Add Appointment</button>
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
    if (optionsDiv instanceof HTMLElement) optionsDiv.innerHTML = scheduleTimeOptionsMarkup(normalized);
  };

  const defaultDate = toDateInputValue(defaultDateTime);
  const defaultTime = `${String(defaultDateTime.getHours()).padStart(2, "0")}:${String(defaultDateTime.getMinutes()).padStart(2, "0")}`;
  initDatePicker(defaultDate);
  initTimePicker(defaultTime);

  contentArea.addEventListener("click", (event) => {
    handleScheduleTimePickerInteraction(contentArea, event.target);
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

    vehiclePreviewTitle.textContent = preview.title;
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
      return;
    }

    const formData = new FormData(manualForm);
    const selectedServices = formData
      .getAll("services")
      .map((item) => String(item).trim())
      .filter(Boolean);

    if (!selectedServices.length) {
      setStatus("Select at least one service.", "warning");
      return;
    }

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
        service: selectedServices.join(", "),
        message: `Name: ${customerName}\nMessage: Manual appointment created in dashboard.`,
        appointmentAt: `${date}T${time}`,
      });

      manualForm.reset();

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

      setStatus("Appointment added successfully.");
      await refreshSidebarInbox();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to add appointment.", "error");
    } finally {
      if (submitButton instanceof HTMLButtonElement && manualGarageId) {
        submitButton.disabled = false;
      }
    }
  });

  await refreshSidebarInbox();
}
