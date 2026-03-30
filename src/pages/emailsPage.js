import { createAppShell } from "../components/appShell.js";
import {
  deleteBooking,
  getBookings,
  moveBookingToAppointments,
  persistBookingSchedule,
} from "../services/bookingService.js";
import {
  getInboxEmails,
  markEmailAsRead,
  summarizeEmailInbox,
} from "../services/emailService.js";
import { fetchVehicleByLicensePlate, normalizeLicensePlate } from "../services/rdwService.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";
import { showConfirmDialog } from "../utils/confirmDialog.js";
import { assetUrl } from "../utils/paths.js";
import {
  formatScheduleDateLabel,
  handleScheduleTimePickerInteraction,
  normalizeDateValue,
  normalizeTimeValue,
  scheduleDateOptionsMarkup,
  scheduleTimeOptionsMarkup,
} from "../utils/scheduleTimePicker.js";

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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function fallbackVehiclePreview(licensePlate = "") {
  const normalized = normalizeLicensePlate(licensePlate);
  return {
    title: normalized || "Unknown vehicle",
    buildYear: "",
  };
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

function emailScheduleSeed(email) {
  const appointmentAt = String(email?.appointmentAt ?? "").trim();
  const receivedAt = String(email?.receivedAt ?? "").trim();

  if (appointmentAt && receivedAt && appointmentAt !== receivedAt) {
    return appointmentAt;
  }

  return nextHalfHour().toISOString();
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

function serviceChipsMarkup(service) {
  return splitServiceValues(service)
    .map((item) => {
      const key = normalizeServiceKey(item);
      const label = SERVICE_LABEL_BY_KEY[key] ?? SERVICE_LABEL_BY_KEY.other;
      return `<span class="service-chip service-chip-${key}">${escapeHtml(label)}</span>`;
    })
    .join("");
}

function emailCardsMarkup(inboxEmails, expandedEmailId, editingEmailId, vehicleCache) {
  if (!inboxEmails.length) {
    return '<article class="request-card"><p class="muted">No e-mails in inbox.</p></article>';
  }

  return inboxEmails
    .map((email, index) => {
      const emailId = String(email.id ?? "");
      const isExpanded = expandedEmailId === emailId;
      const isEditing = editingEmailId === emailId;
      const scheduleSeed = emailScheduleSeed(email);
      const plate = escapeHtml(email.licensePlate && email.licensePlate !== "UNKNOWN" ? formatLicensePlate(email.licensePlate) : "UNKNOWN");
      const name = escapeHtml(String(email.senderName ?? "Website visitor"));
      const licensePlateKey = email.licensePlate ? normalizeLicensePlate(email.licensePlate) : "";
      const vehicleData = vehicleCache.get(licensePlateKey) || fallbackVehiclePreview(email.licensePlate);
      const vehicle = vehicleData.buildYear
        ? `${vehicleData.title} (${vehicleData.buildYear})`
        : vehicleData.title;
      const time = escapeHtml(formatTime(email.appointmentAt ?? email.receivedAt));
      const scheduleDate = normalizeDateValue(toDateInputValue(scheduleSeed));
      const safeScheduleDate = escapeHtml(scheduleDate);
      const scheduleDateLabel = escapeHtml(formatScheduleDateLabel(scheduleDate));
      const scheduleTime = normalizeTimeValue(toTimeInputValue(scheduleSeed));
      const safeScheduleTime = escapeHtml(scheduleTime);
      const phone = escapeHtml(String(email.phone ?? "No phone number"));
      const message = escapeHtml(String(email.message ?? "No message content."));

      return `
        <article class="request-card ${isExpanded ? "is-expanded" : ""}" data-email-card-id="${escapeHtml(emailId)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${plate}</span>
              <div class="request-info">
                <p class="request-name">${name}</p>
                <p class="request-vehicle">${vehicle}</p>
                <div class="request-services">
                  <span class="service-chip service-chip-new">New</span>
                  ${serviceChipsMarkup(email.service)}
                </div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${time}</span>
              <button
                class="request-toggle ${isExpanded ? "is-expanded" : ""}"
                type="button"
                data-email-toggle="${escapeHtml(emailId)}"
                aria-expanded="${isExpanded ? "true" : "false"}"
                aria-label="${isExpanded ? "Collapse email details" : "Expand email details"}"
              >
                <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                  <path d="M5.5 8.2L10 12.8L14.5 8.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          ${
            isExpanded
              ? `
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="${assetUrl("sidebar-icons/user.png")}" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${phone}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="${assetUrl("sidebar-icons/text.png")}" alt="" aria-hidden="true" />
                    <span>Message</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${message}</span>
                </div>
              </div>

              <div class="request-actions">
                ${
                  isEditing
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
                    <button class="button subtle" type="button" data-email-action="save-schedule" data-email-id="${escapeHtml(emailId)}">Save & Schedule</button>
                    <button class="button subtle" type="button" data-email-action="cancel-edit" data-email-id="${escapeHtml(emailId)}">Cancel</button>
                  </div>
                `
                    : ""
                }

                <button class="icon-button" type="button" data-email-action="edit" data-email-id="${escapeHtml(emailId)}" aria-label="Edit email schedule">✎</button>
                ${!isEditing
                  ? `<button class="button danger" type="button" data-email-action="delete" data-email-id="${escapeHtml(emailId)}">Delete</button>`
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

export async function mountEmailsPage(rootElement) {
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
    activePage: "emails",
    title: "E-mails",
    headerNote: "Incoming contact form requests",
    userEmail: authState.user.email,
    onLogout: logoutAndRedirect,
    garage: authState.activeGarage,
    isAdmin: authState.isAdmin,
  });

  rootElement.replaceChildren(shell);

  contentArea.innerHTML = `
    <section class="panel request-board">
      <div id="emailList" class="request-list"></div>
    </section>
  `;

  const listElement = contentArea.querySelector("#emailList");

  let inboxEmails = [];
  let expandedEmailId = "";
  let editingEmailId = "";
  const vehicleCache = new Map();

  const render = () => {
    if (!inboxEmails.some((email) => String(email.id) === expandedEmailId)) {
      expandedEmailId = inboxEmails[0] ? String(inboxEmails[0].id) : "";
      editingEmailId = "";
    }

    if (editingEmailId && !inboxEmails.some((email) => String(email.id) === editingEmailId)) {
      editingEmailId = "";
    }

    listElement.innerHTML = emailCardsMarkup(inboxEmails, expandedEmailId, editingEmailId, vehicleCache);
    setUnreadEmailCount(inboxEmails.length);
  };

  contentArea.addEventListener("click", async (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) {
      return;
    }

    if (handleScheduleTimePickerInteraction(contentArea, target)) {
      return;
    }

    const card = target.closest("[data-email-card-id]");
    const actionButton = target.closest("[data-email-action]");
    const toggleButton = target.closest("[data-email-toggle]");
    const clickedEmailList = target.closest("#emailList");

    if (
      clickedEmailList instanceof HTMLElement
      && !(card instanceof HTMLElement)
      && !(actionButton instanceof HTMLElement)
      && !(toggleButton instanceof HTMLElement)
    ) {
      expandedEmailId = "";
      editingEmailId = "";
      render();
      return;
    }

    if (toggleButton instanceof HTMLElement) {
      const emailId = String(toggleButton.dataset.emailToggle ?? "");
      expandedEmailId = expandedEmailId === emailId ? "" : emailId;
      if (expandedEmailId !== emailId) {
        editingEmailId = "";
      }
      render();
      return;
    }

    if (actionButton instanceof HTMLElement) {
      const action = String(actionButton.dataset.emailAction ?? "");
      const emailId = String(actionButton.dataset.emailId ?? "");

      const exists = inboxEmails.some((email) => String(email.id) === emailId);
      if (!exists) {
        return;
      }

      if (action === "edit") {
        expandedEmailId = emailId;
        editingEmailId = editingEmailId === emailId ? "" : emailId;
        render();
        return;
      }

      if (action === "cancel-edit") {
        editingEmailId = "";
        render();
        return;
      }

      if (action === "save-schedule") {
        const email = inboxEmails.find((item) => String(item.id) === emailId);
        if (!email) {
          return;
        }

        const emailCard = actionButton.closest("[data-email-card-id]");
        if (!(emailCard instanceof HTMLElement)) {
          return;
        }

        const dateInput = emailCard.querySelector("[data-schedule-edit-date]");
        const timeInput = emailCard.querySelector("[data-schedule-edit-time]");
        if (!(dateInput instanceof HTMLInputElement) || !(timeInput instanceof HTMLInputElement)) {
          return;
        }

        const nextAppointmentAt = buildAppointmentAtValue(dateInput.value, timeInput.value);
        if (!nextAppointmentAt) {
          window.alert("Choose both a date and time before saving.");
          return;
        }

        try {
          await persistBookingSchedule(email, nextAppointmentAt);
        } catch (error) {
          window.alert(error instanceof Error ? error.message : "Unable to save the appointment schedule.");
          return;
        }

        moveBookingToAppointments(emailId);
        markEmailAsRead(emailId);
        inboxEmails = inboxEmails.filter((item) => String(item.id) !== emailId);
        editingEmailId = "";
        expandedEmailId = "";
        render();
        return;
      }

      if (action === "delete") {
        const email = inboxEmails.find((item) => String(item.id) === emailId);
        if (!email) {
          return;
        }

        const confirmed = await showConfirmDialog(
          "Are you sure you want to delete this email? This action cannot be undone.",
          "Delete Email",
        );
        if (!confirmed) {
          return;
        }

        try {
          await deleteBooking(email);
        } catch (error) {
          window.alert(error instanceof Error ? error.message : "Unable to delete the email.");
          return;
        }
        markEmailAsRead(emailId);
        inboxEmails = inboxEmails.filter((item) => String(item.id) !== emailId);
        editingEmailId = "";
        expandedEmailId = expandedEmailId === emailId ? "" : expandedEmailId;
        render();
      }

      return;
    }

    if (card instanceof HTMLElement && !isInteractiveClick(target)) {
      const emailId = String(card.dataset.emailCardId ?? "");
      expandedEmailId = expandedEmailId === emailId ? "" : emailId;
      if (expandedEmailId !== emailId) {
        editingEmailId = "";
      }
      render();
    }
  });

  try {
    const bookings = await getBookings({ garageIds });
    const summary = summarizeEmailInbox(bookings);
    setUnreadEmailCount(summary.unread);

    inboxEmails = getInboxEmails(bookings)
      .map((email) => ({ ...email, read: false }))
      .sort(
        (left, right) =>
          new Date(right.receivedAt ?? right.appointmentAt).getTime() -
          new Date(left.receivedAt ?? left.appointmentAt).getTime(),
      );

    // Fetch vehicle data for all unique license plates
    const uniqueLicensePlates = new Set(
      inboxEmails
        .map((e) => e.licensePlate)
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

    expandedEmailId = inboxEmails[0] ? String(inboxEmails[0].id) : "";
    render();
  } catch (error) {
    listElement.innerHTML = '<article class="request-card"><p class="muted">Unable to load e-mails.</p></article>';
    setUnreadEmailCount(0);
    console.error(error);
  }
}
