import { createAppShell } from "../components/appShell.js";
import {
  deleteBooking,
  getBookings,
  markBookingDone,
  persistBookingSchedule,
  persistBookingStatus,
} from "../services/bookingService.js";
import { summarizeEmailInbox } from "../services/emailService.js";
import { fetchVehicleByLicensePlate, normalizeLicensePlate } from "../services/rdwService.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";
import { showConfirmDialog } from "../utils/confirmDialog.js";
import { assetUrl, pageUrl } from "../utils/paths.js";
import {
  formatScheduleDateLabel,
  handleScheduleTimePickerInteraction,
  normalizeDateValue,
  normalizeTimeValue,
  scheduleDateOptionsMarkup,
  scheduleTimeOptionsMarkup,
} from "../utils/scheduleTimePicker.js";

const FALLBACK_NAMES = [
  "Thomas Mulder",
  "Sophie Koning",
  "Rupert Clark",
  "Jack Thomesen",
  "Mila Verbeek",
];

function fallbackVehiclePreview(licensePlate = "") {
  const normalized = normalizeLicensePlate(licensePlate);
  return {
    title: normalized || "Unknown vehicle",
    buildYear: "",
  };
}

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

function formatLicensePlate(plate) {
  const cleaned = String(plate ?? "").toUpperCase().replace(/[^A-Z0-9]/g, '');
  // Format as: XX-XX-XX (groups of 2 separated by dashes)
  return cleaned.replace(/(.{2})(?=.)/g, '$1-');
}

function parseDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatTime(value) {
  const date = parseDate(value);
  if (!date) {
    return "--:--";
  }

  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function toDateInputValue(value) {
  const date = parseDate(value);
  if (!date) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toTimeInputValue(value) {
  const date = parseDate(value);
  if (!date) {
    return "09:00";
  }

  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${hour}:${minute}`;
}

function buildAppointmentAtValue(dateValue, timeValue) {
  const safeDate = String(dateValue ?? "").trim();
  const safeTime = String(timeValue ?? "").trim();

  if (!safeDate || !safeTime) {
    return "";
  }

  const combined = `${safeDate}T${safeTime}:00`;
  return parseDate(combined) ? combined : "";
}

function isInteractiveClick(target) {
  return target instanceof Element && Boolean(target.closest("button, input, select, textarea, a, label"));
}

function normalizeStatus(value) {
  const normalized = String(value ?? "").trim().toLowerCase();

  if (
    normalized === "done" ||
    normalized === "completed" ||
    normalized === "complete" ||
    normalized === "closed"
  ) {
    return "done";
  }

  if (normalized === "confirmed" || normalized === "confirm") {
    return "confirmed";
  }

  return "new";
}

function extractContactField(rawMessage, field) {
  const raw = String(rawMessage ?? "");
  const pattern = new RegExp(`\\b${field}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`, "i");
  return (raw.match(pattern)?.[1] ?? "").trim();
}

function customerName(booking, index) {
  const name = extractContactField(booking.message, "name");
  if (name) {
    return name;
  }

  return FALLBACK_NAMES[index % FALLBACK_NAMES.length];
}

function customerMessage(booking) {
  const rawMessage = extractContactField(booking.message, "message") || String(booking.message ?? "").trim();
  return rawMessage || "No customer message.";
}

function customerVehicle(index) {
  return FALLBACK_VEHICLES[index % FALLBACK_VEHICLES.length];
}

function splitServiceValues(service) {
  const raw = String(service ?? "").trim();
  if (!raw) {
    return ["other"];
  }

  const parts = raw
    .split(raw.includes(",") ? /,/g : /\+|\/|&| and /gi)
    .map((item) => item.trim())
    .filter(Boolean);

  return parts.length ? parts : [raw];
}

function normalizeServiceKey(token) {
  return SERVICE_KEY_ALIASES.get(String(token ?? "").trim().toLowerCase()) ?? "other";
}

function primaryServiceKey(service) {
  return normalizeServiceKey(splitServiceValues(service)[0] ?? "other");
}

function serviceChipsMarkup(service) {
  return splitServiceValues(service)
    .map((item) => {
      const key = normalizeServiceKey(item);
      const label = SERVICE_LABEL_BY_KEY[key] ?? SERVICE_LABEL_BY_KEY.other;
      return `<span class="service-chip service-chip-${key}">${escapeHtml(label)}</span>`;
    })
    .join("");
}

function requestCardsMarkup(bookings, expandedBookingId, editingBookingId, vehicleCache) {
  if (!bookings.length) {
    return '<article class="request-card"><p class="muted">No appointments found for this filter.</p></article>';
  }

  return bookings
    .map((booking, index) => {
      const bookingId = String(booking.id ?? "");
      const isExpanded = expandedBookingId === bookingId;
      const isEditing = editingBookingId === bookingId;
      const appointmentAt = booking.appointmentAt ?? booking.createdAt;
      const plate = escapeHtml(booking.licensePlate && booking.licensePlate !== "UNKNOWN" ? formatLicensePlate(booking.licensePlate) : "UNKNOWN");
      const name = escapeHtml(customerName(booking, index));
      const licensePlateKey = booking.licensePlate ? normalizeLicensePlate(booking.licensePlate) : "";
      const vehicleData = vehicleCache.get(licensePlateKey) || fallbackVehiclePreview(booking.licensePlate);
      const vehicle = vehicleData.buildYear && vehicleData.buildYear !== "—"
        ? `${vehicleData.title} (${vehicleData.buildYear})`
        : vehicleData.title;
      const time = escapeHtml(formatTime(appointmentAt));
      const scheduleDate = normalizeDateValue(toDateInputValue(appointmentAt));
      const safeScheduleDate = escapeHtml(scheduleDate);
      const scheduleDateLabel = escapeHtml(formatScheduleDateLabel(scheduleDate));
      const scheduleTime = normalizeTimeValue(toTimeInputValue(appointmentAt));
      const safeScheduleTime = escapeHtml(scheduleTime);
      const phone = escapeHtml(String(booking.phone ?? "No phone number"));
      const message = escapeHtml(customerMessage(booking));

      return `
        <article class="request-card ${isExpanded ? "is-expanded" : ""}" data-booking-card-id="${escapeHtml(bookingId)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${plate}</span>
              <div class="request-info">
                <p class="request-name">${name}</p>
                <p class="request-vehicle">${vehicle}</p>
                <div class="request-services">${serviceChipsMarkup(booking.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${time}</span>
       <button
                class="request-toggle ${isExpanded ? "is-expanded" : ""}"
                type="button"
                data-calendar-toggle="${escapeHtml(bookingId)}"
                aria-expanded="${isExpanded ? "true" : "false"}"
                aria-label="${isExpanded ? "Collapse appointment details" : "Expand appointment details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
            </div>
          </div>

          ${isExpanded
          ? `
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${assetUrl("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone Number</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${phone}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${assetUrl("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message from client</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${message}</span>
                </div>
              </div>

              <div class="request-actions">
                ${isEditing
            ? `
                  <div class="request-edit-schedule">
                    <label class="request-edit-field">
                      <span>Date</span>
                      <div class="request-date-picker" data-schedule-date-picker>
                        <input type="hidden" data-schedule-edit-date value="${safeScheduleDate}" />
                        <button
                          class="request-date-trigger"
                          type="button"
                          data-schedule-date-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-date-label>${scheduleDateLabel}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-date-options" role="listbox" data-schedule-date-options>
                          ${scheduleDateOptionsMarkup(scheduleDate)}
                        </div>
                      </div>
                    </label>
                    <label class="request-edit-field">
                      <span>Time</span>
                      <div class="request-time-picker" data-schedule-time-picker>
                        <input type="hidden" data-schedule-edit-time value="${safeScheduleTime}" />
                        <button
                          class="request-time-trigger"
                          type="button"
                          data-schedule-time-toggle
                          aria-haspopup="listbox"
                          aria-expanded="false"
                        >
                          <span data-schedule-time-label>${safeScheduleTime}</span>
                          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                            <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                        <div class="request-time-options" role="listbox" data-schedule-time-options>
                          ${scheduleTimeOptionsMarkup(scheduleTime)}
                        </div>
                      </div>
                    </label>
                    <button class="button subtle" type="button" data-request-action="save-schedule" data-booking-id="${escapeHtml(bookingId)}">Save</button>
                    <button class="button subtle" type="button" data-request-action="cancel-edit" data-booking-id="${escapeHtml(bookingId)}">Cancel</button>
                  </div>
                `
            : ""
          }

                <button class="icon-button" type="button" data-request-action="edit" data-booking-id="${escapeHtml(bookingId)}" aria-label="Edit booking">✎</button>
                ${!isEditing
            ? `<button class="button" type="button" data-request-action="complete" data-booking-id="${escapeHtml(bookingId)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.25L5.75 13L14 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Mark Completed</button>
                <button class="button danger" type="button" data-request-action="delete" data-booking-id="${escapeHtml(bookingId)}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3.66797L12.5869 10.3514C12.4813 12.0589 12.4285 12.9127 12.0005 13.5266C11.7889 13.83 11.5165 14.0862 11.2005 14.2786C10.5614 14.668 9.706 14.668 7.99513 14.668C6.28208 14.668 5.42553 14.668 4.78603 14.2779C4.46987 14.0851 4.19733 13.8285 3.98579 13.5245C3.55792 12.9097 3.5063 12.0547 3.40307 10.3448L3 3.66797" stroke="white" stroke-linecap="round"/>
<path d="M2 3.66536H14M10.7038 3.66536L10.2487 2.72652C9.9464 2.10287 9.7952 1.79104 9.53447 1.59657C9.47667 1.55343 9.4154 1.51506 9.35133 1.48183C9.0626 1.33203 8.71607 1.33203 8.023 1.33203C7.31253 1.33203 6.95733 1.33203 6.66379 1.48811C6.59873 1.5227 6.53665 1.56263 6.47819 1.60748C6.21443 1.80983 6.06709 2.13306 5.77241 2.77954L5.36861 3.66536" stroke="white" stroke-linecap="round"/>
<path d="M6.3335 11V7" stroke="white" stroke-linecap="round"/>
<path d="M9.6665 11V7" stroke="white" stroke-linecap="round"/>
</svg>
Delete</button>`
            : ""
          }
              </div>
            </div>
          `
          : ""
        }
        </article>
      `;
    })
    .join("");
}

function sortBookingsByAppointment(bookings) {
  return [...bookings].sort(
    (left, right) =>
      new Date(left.appointmentAt ?? left.createdAt).getTime() -
      new Date(right.appointmentAt ?? right.createdAt).getTime(),
  );
}

function buildTechnicianOptions(bookings) {
  const options = new Map();

  bookings.forEach((booking, index) => {
    const name = customerName(booking, index);
    options.set(name, name);
  });

  return [...options.values()];
}

function setupCustomRequestSelects(rootElement) {
  const selectEntries = [];

  const closeAll = () => {
    selectEntries.forEach((entry) => {
      entry.wrap.classList.remove("is-open");
      entry.trigger.setAttribute("aria-expanded", "false");
    });
  };

  const buildIconMarkup = () => `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6C4 6 6.94593 9.99999 8 10C9.05413 10 12 6 12 6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;

  rootElement.querySelectorAll(".request-select-wrap").forEach((wrap) => {
    const nativeSelect = wrap.querySelector(".request-select");
    if (!(nativeSelect instanceof HTMLSelectElement)) {
      return;
    }

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "request-select-trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");

    const label = document.createElement("span");
    label.className = "request-select-trigger-label";

    const icon = document.createElement("span");
    icon.className = "request-select-trigger-icon";
    icon.innerHTML = buildIconMarkup();

    trigger.append(label, icon);

    const menu = document.createElement("div");
    menu.className = "request-select-menu";
    menu.setAttribute("role", "listbox");

    wrap.append(trigger, menu);

    const updateLabel = () => {
      const selectedOption = nativeSelect.options[nativeSelect.selectedIndex];
      label.textContent = selectedOption?.textContent ?? "";
    };

    const buildOptions = () => {
      menu.innerHTML = "";

      [...nativeSelect.options].forEach((option) => {
        const optionButton = document.createElement("button");
        optionButton.type = "button";
        optionButton.className = "request-select-option";
        optionButton.dataset.requestSelectValue = option.value;
        optionButton.textContent = option.textContent ?? "";
        optionButton.classList.toggle("is-selected", option.value === nativeSelect.value);
        menu.append(optionButton);
      });
    };

    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = wrap.classList.contains("is-open");
      closeAll();

      if (!isOpen) {
        wrap.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    menu.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) {
        return;
      }

      const optionButton = target.closest("[data-request-select-value]");
      if (!(optionButton instanceof HTMLElement)) {
        return;
      }

      const nextValue = String(optionButton.dataset.requestSelectValue ?? "");
      nativeSelect.value = nextValue;
      nativeSelect.dispatchEvent(new Event("change", { bubbles: true }));

      updateLabel();
      buildOptions();
      closeAll();
    });

    nativeSelect.addEventListener("change", () => {
      updateLabel();
      buildOptions();
    });

    selectEntries.push({
      wrap,
      trigger,
      nativeSelect,
      refresh() {
        updateLabel();
        buildOptions();
      },
    });

    updateLabel();
    buildOptions();
  });

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target || !target.closest(".request-select-wrap")) {
      closeAll();
    }
  });

  rootElement.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAll();
    }
  });

  return {
    refresh() {
      selectEntries.forEach((entry) => entry.refresh());
    },
  };
}

export async function mountBookingsPage(rootElement) {
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

  const { shell, contentArea, setUnreadEmailCount } = createAppShell({
    activePage: "bookings",
    title: "Appointment",
    headerNote: "Manage active appointments",
    userEmail: authState.user.email,
    onLogout: logoutAndRedirect,
    garage: authState.activeGarage,
    isAdmin: authState.isAdmin,
  });

  rootElement.replaceChildren(shell);

  contentArea.innerHTML = `
    <div class="request-toolbar">
        <label class="request-search-wrap" aria-label="Search appointments">
          <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
            <circle cx="9" cy="9" r="5.7" fill="none" stroke="currentColor" stroke-width="1.6"></circle>
            <path d="M13.4 13.4l3.1 3.1" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path>
          </svg>
          <input id="requestSearch" class="request-search" type="search" placeholder="Search..." />
        </label>

        <label class="request-select-wrap">
          <select id="requestServiceFilter" class="request-select">
            <option value="all">All Services</option>
            <option value="apk">APK</option>
            <option value="banden">Banden</option>
            <option value="onderhoud">Onderhoud</option>
            <option value="airco">Airco</option>
            <option value="occasions">Occasions</option>
            <option value="brakes">Brakes</option>
            <option value="other">Overige</option>
          </select>
        </label>

        <label class="request-select-wrap">
          <select id="requestTechnicianFilter" class="request-select">
            <option value="all">All Technicians</option>
          </select>
        </label>
    </div>

    <section class="panel request-board">
      <div id="requestList" class="request-list"></div>
    </section>
  `;

  const searchInput = contentArea.querySelector("#requestSearch");
  const serviceFilter = contentArea.querySelector("#requestServiceFilter");
  const technicianFilter = contentArea.querySelector("#requestTechnicianFilter");
  const listElement = contentArea.querySelector("#requestList");
  const customSelects = setupCustomRequestSelects(contentArea);

  let allBookings = [];
  let visibleBookings = [];
  let expandedBookingId = "";
  let editingBookingId = "";
  const vehicleCache = new Map();

  const render = () => {
    const searchTerm = String(searchInput.value ?? "").trim().toLowerCase();
    const selectedService = String(serviceFilter.value ?? "all");
    const selectedTechnician = String(technicianFilter.value ?? "all");

    visibleBookings = allBookings.filter((booking, index) => {
      const bookingServiceKeys = splitServiceValues(booking.service).map((item) => normalizeServiceKey(item));
      const bookingTechnician = customerName(booking, index);

      const haystack = [
        booking.licensePlate,
        booking.phone,
        booking.service,
        bookingTechnician,
        customerMessage(booking),
      ]
        .join(" ")
        .toLowerCase();

      const passesSearch = !searchTerm || haystack.includes(searchTerm);
      const passesService = selectedService === "all" || bookingServiceKeys.includes(selectedService);
      const passesTechnician = selectedTechnician === "all" || bookingTechnician === selectedTechnician;

      return passesSearch && passesService && passesTechnician;
    });

    if (expandedBookingId && !visibleBookings.some((booking) => String(booking.id) === expandedBookingId)) {
      expandedBookingId = "";
      editingBookingId = "";
    }

    if (editingBookingId && !visibleBookings.some((booking) => String(booking.id) === editingBookingId)) {
      editingBookingId = "";
    }

    listElement.innerHTML = requestCardsMarkup(visibleBookings, expandedBookingId, editingBookingId, vehicleCache);
  };

  contentArea.addEventListener("click", async (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) {
      return;
    }

    if (handleScheduleTimePickerInteraction(contentArea, target)) {
      return;
    }

    const toggleButton = target.closest("[data-request-toggle]");
    if (toggleButton instanceof HTMLElement) {
      const bookingId = String(toggleButton.dataset.requestToggle ?? "");
      expandedBookingId = expandedBookingId === bookingId ? "" : bookingId;
      if (expandedBookingId !== bookingId) {
        editingBookingId = "";
      }
      render();
      return;
    }

    const actionButton = target.closest("[data-request-action]");
    if (actionButton instanceof HTMLElement) {
      const action = String(actionButton.dataset.requestAction ?? "");
      const bookingId = String(actionButton.dataset.bookingId ?? "");
      if (!bookingId) {
        return;
      }

      if (action === "edit") {
        expandedBookingId = bookingId;
        editingBookingId = editingBookingId === bookingId ? "" : bookingId;
        render();
        return;
      }

      if (action === "cancel-edit") {
        editingBookingId = "";
        render();
        return;
      }

      if (action === "save-schedule") {
        const card = actionButton.closest("[data-booking-card-id]");
        if (!(card instanceof HTMLElement)) {
          return;
        }

        const booking = allBookings.find((item) => String(item.id) === bookingId);
        if (!booking) {
          return;
        }

        const dateInput = card.querySelector("[data-schedule-edit-date]");
        const timeInput = card.querySelector("[data-schedule-edit-time]");
        if (!(dateInput instanceof HTMLInputElement) || !(timeInput instanceof HTMLInputElement)) {
          return;
        }

        const nextAppointmentAt = buildAppointmentAtValue(dateInput.value, timeInput.value);
        if (!nextAppointmentAt) {
          return;
        }

        try {
          await persistBookingSchedule(booking, nextAppointmentAt);
        } catch (error) {
          window.alert(error instanceof Error ? error.message : "Unable to save the appointment schedule.");
          return;
        }

        allBookings = sortBookingsByAppointment(
          allBookings.map((item) =>
            String(item.id) === bookingId
              ? {
                ...item,
                appointmentAt: nextAppointmentAt,
              }
              : item,
          ),
        );

        expandedBookingId = bookingId;
        editingBookingId = "";
        render();
        return;
      }

      const booking = allBookings.find((item) => String(item.id) === bookingId);
      if (!booking) {
        return;
      }

      if (action === "complete") {
        const confirmed = await showConfirmDialog(
          "Are you sure you want to mark this appointment as completed?",
          "Mark as Completed",
        );
        if (!confirmed) {
          return;
        }

        persistBookingStatus(bookingId, "done");
        try {
          await markBookingDone(booking, {
            convertedFromEmail: booking.source !== "manual",
          });
        } catch (error) {
          window.alert(error instanceof Error ? error.message : "Unable to mark appointment as completed.");
          return;
        }

        window.location.href = pageUrl("completed.html");
        return;
      }

      if (action === "delete") {
        const confirmed = await showConfirmDialog(
          "Are you sure you want to delete this appointment? This action cannot be undone.",
          "Delete Appointment",
        );
        if (!confirmed) {
          return;
        }

        try {
          await deleteBooking(booking);
        } catch (error) {
          window.alert(error instanceof Error ? error.message : "Unable to delete the appointment.");
          return;
        }

        allBookings = allBookings.filter((item) => String(item.id) !== bookingId);
        if (expandedBookingId === bookingId) {
          expandedBookingId = "";
        }
        editingBookingId = "";
        render();
      }
      return;
    }

    const card = target.closest("[data-booking-card-id]");
    if (card instanceof HTMLElement && !isInteractiveClick(target)) {
      const bookingId = String(card.dataset.bookingCardId ?? "");
      if (!bookingId) {
        return;
      }

      expandedBookingId = expandedBookingId === bookingId ? "" : bookingId;
      if (expandedBookingId !== bookingId) {
        editingBookingId = "";
      }
      render();
    }
  });

  searchInput.addEventListener("input", render);
  serviceFilter.addEventListener("change", render);
  technicianFilter.addEventListener("change", render);

  try {
    const bookings = await getBookings({ garageIds });
    const emailSummary = summarizeEmailInbox(bookings);
    setUnreadEmailCount(emailSummary.unread);

    allBookings = sortBookingsByAppointment(bookings.filter((booking) => booking.inAppointments === true));

    // Fetch vehicle data for all unique license plates
    const uniqueLicensePlates = new Set(
      allBookings
        .map((b) => b.licensePlate)
        .filter((plate) => plate && plate !== "UNKNOWN")
        .map((plate) => normalizeLicensePlate(plate))
    );

    for (const licensePlate of uniqueLicensePlates) {
      if (licensePlate && !vehicleCache.has(licensePlate)) {
        try {
          const vehicle = await fetchVehicleByLicensePlate(licensePlate);
          if (vehicle) {
            vehicleCache.set(licensePlate, vehicle);
          }
        } catch (error) {
          // Silently fail - will use fallback
          console.error(`Failed to fetch vehicle for ${licensePlate}:`, error);
        }
      }
    }

    const technicianOptions = buildTechnicianOptions(allBookings);
    technicianFilter.innerHTML = `
      <option value="all">All Technicians</option>
      ${technicianOptions.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("")}
    `;
    customSelects.refresh();

    expandedBookingId = allBookings[0] ? String(allBookings[0].id) : "";
    render();
  } catch (error) {
    listElement.innerHTML = '<article class="request-card"><p class="muted">Unable to load appointments.</p></article>';
    setUnreadEmailCount(0);
    console.error(error);
  }
}
