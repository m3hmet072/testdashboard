import { createAppShell } from "../components/appShell.js";
import { getBookings, markBookingDone, persistBookingSchedule } from "../services/bookingService.js";
import { summarizeEmailInbox } from "../services/emailService.js";
import { fetchVehicleByLicensePlate, normalizeLicensePlate } from "../services/rdwService.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";
import { showConfirmDialog } from "../utils/confirmDialog.js";
import {
  formatScheduleDateLabel,
  handleScheduleTimePickerInteraction,
  normalizeDateValue,
  normalizeTimeValue,
  scheduleDateOptionsMarkup,
  scheduleTimeOptionsMarkup,
} from "../utils/scheduleTimePicker.js";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const FALLBACK_NAMES = [
  "Thomas Mulder",
  "Sophie Koning",
  "Rupert Clark",
  "Jack Thomesen",
  "Alex Vermeer",
];

const SERVICE_LABEL_BY_KEY = {
  apk: "APK",
  banden: "Banden",
  airco: "Airco",
  occasions: "Occasions",
  onderhoud: "Onderhoud",
  brakes: "Brakes",
  other: "Other",
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

function toDateKey(value) {
  const date = value instanceof Date ? value : parseDate(value);
  if (!date) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
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

function formatMonthLabel(value) {
  return value.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });
}

function formatDayTitle(value) {
  return value.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatDayShort(value) {
  return value.toLocaleDateString(undefined, {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
}

function formatCalendarDayTitle(value) {
  const dayLabel = value.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
  });

  if (toDateKey(value) === toDateKey(new Date())) {
    return `Today, ${dayLabel}`;
  }

  return formatDayShort(value);
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

function isCompletedBooking(booking) {
  return normalizeStatus(booking.status) === "done" || booking.inAppointments === false;
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

function normalizeServiceKey(value) {
  return SERVICE_KEY_ALIASES.get(String(value ?? "").trim().toLowerCase()) ?? "other";
}

function serviceChipsMarkup(service) {
  return splitServiceValues(service)
    .map((token) => {
      const key = normalizeServiceKey(token);
      const label = SERVICE_LABEL_BY_KEY[key] ?? SERVICE_LABEL_BY_KEY.other;
      return `<span class="service-chip service-chip-${key}">${escapeHtml(label)}</span>`;
    })
    .join("");
}

function extractContactName(rawMessage) {
  const raw = String(rawMessage ?? "");
  const match = raw.match(/\bname\s*:\s*([^\n]+)/i);
  return (match?.[1] ?? "").trim();
}

function extractContactMessage(rawMessage) {
  const raw = String(rawMessage ?? "");
  const messageMatch = raw.match(/\bmessage\s*:\s*([\s\S]+)/i);
  if (messageMatch?.[1]) {
    return messageMatch[1].trim();
  }

  return raw.trim();
}

function customerName(booking, index) {
  const fromPayload = extractContactName(booking.message);
  if (fromPayload) {
    return fromPayload;
  }

  return FALLBACK_NAMES[index % FALLBACK_NAMES.length];
}

function bookingDateKey(booking) {
  return toDateKey(booking.appointmentAt ?? booking.createdAt);
}

function buildMonthCells(monthCursor, activeBookings, selectedKey) {
  const firstDay = new Date(monthCursor.getFullYear(), monthCursor.getMonth(), 1);
  const lastDay = new Date(monthCursor.getFullYear(), monthCursor.getMonth() + 1, 0);
  const totalDays = lastDay.getDate();
  const leadDays = (firstDay.getDay() + 6) % 7;

  const bookingCountByDay = activeBookings.reduce((map, booking) => {
    const key = bookingDateKey(booking);
    if (!key) {
      return map;
    }

    map.set(key, (map.get(key) ?? 0) + 1);
    return map;
  }, new Map());

  const cells = [];

  for (let index = leadDays; index > 0; index -= 1) {
    const date = new Date(firstDay);
    date.setDate(1 - index);
    const key = toDateKey(date);

    cells.push({
      key,
      date,
      day: date.getDate(),
      isCurrentMonth: false,
      isSelected: key === selectedKey,
      count: bookingCountByDay.get(key) ?? 0,
    });
  }

  for (let day = 1; day <= totalDays; day += 1) {
    const date = new Date(firstDay.getFullYear(), firstDay.getMonth(), day);
    const key = toDateKey(date);

    cells.push({
      key,
      date,
      day,
      isCurrentMonth: true,
      isSelected: key === selectedKey,
      count: bookingCountByDay.get(key) ?? 0,
    });
  }

  while (cells.length % 7 !== 0) {
    const date = new Date(lastDay);
    const dayOffset = cells.length - (leadDays + totalDays) + 1;
    date.setDate(lastDay.getDate() + dayOffset);
    const key = toDateKey(date);

    cells.push({
      key,
      date,
      day: date.getDate(),
      isCurrentMonth: false,
      isSelected: key === selectedKey,
      count: bookingCountByDay.get(key) ?? 0,
    });
  }

  return cells;
}

function monthGridMarkup(monthCursor, activeBookings, selectedKey) {
  const cells = buildMonthCells(monthCursor, activeBookings, selectedKey);
  const todayKey = toDateKey(new Date());

  const weekHeadMarkup = WEEK_DAYS.map((day) => `<span class="month-weekday">${day}</span>`).join("");

  const cellMarkup = cells
    .map((cell) => {
      const classes = ["month-cell"];
      if (!cell.isCurrentMonth) {
        classes.push("is-outside");
      }
      if (cell.isSelected) {
        classes.push("is-selected");
      }
      if (cell.isCurrentMonth && cell.key === todayKey) {
        classes.push("is-today");
      }
      if (cell.count > 0) {
        classes.push("has-bookings");
      }

      return `
        <button class="${classes.join(" ")}" type="button" data-calendar-cell="${cell.key}">
          <span class="month-cell-day">${cell.day}</span>
          ${cell.count > 0 ? '<span class="month-cell-dot" aria-hidden="true"></span>' : ""}
        </button>
      `;
    })
    .join("");

  return `
    <div class="month-grid-board">
      <div class="month-week-row">${weekHeadMarkup}</div>
      <div class="month-grid-cells">${cellMarkup}</div>
    </div>
  `;
}

function dayBoardMarkup(selectedDate, bookingsForDay) {
  const slots = [];
  for (let hour = 0; hour <= 23; hour += 1) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }

  const bookingBySlot = bookingsForDay.reduce((map, booking, index) => {
    const slot = formatTime(booking.appointmentAt ?? booking.createdAt);
    const items = map.get(slot) ?? [];
    items.push({ booking, index });
    map.set(slot, items);
    return map;
  }, new Map());

  return `
    <div class="day-board-list">
      ${slots
      .map((slot) => {
        const slotBookings = bookingBySlot.get(slot) ?? [];

        if (!slotBookings.length) {
          return `
              <div class="day-slot-row">
                <span class="day-slot-time">${slot}</span>
                <div class="day-slot-line"></div>
                <span class="day-slot-empty">Available</span>
              </div>
            `;
        }

        const slotBookingsMarkup = slotBookings
          .map(({ booking, index }, itemIndex) => {
            const bookingId = escapeHtml(String(booking.id ?? ""));
            const plate = escapeHtml(booking.licensePlate && booking.licensePlate !== "UNKNOWN" ? formatLicensePlate(booking.licensePlate) : "UNKNOWN");
            const name = escapeHtml(customerName(booking, index));
            const showLineDivider = slotBookings.length > 1 && itemIndex < slotBookings.length - 1;

            return `
              <div class="day-slot-booking-item" data-day-slot-booking-id="${bookingId}">
                <div class="day-slot-plate-wrapper">
                  <span class="plate-chip">${plate}</span>
                </div>
                <div class="day-slot-booking-info">
                  <div class="day-slot-booking-row">
                    <span class="day-slot-name">${name}</span>
                  </div>
                  <div class="day-slot-status-services">
                    <span class="status-chip status-chip-progress">In Progress</span>
                    ${serviceChipsMarkup(booking.service)}
                  </div>
                </div>
              </div>
              ${showLineDivider ? '<div class="line-days" aria-hidden="true"></div>' : ""}
            `;
          })
          .join("");

        const slotCountMarkup = slotBookings.length > 1
          ? `<span class="day-slot-count">${slotBookings.length} appointments</span>`
          : "";

        return `
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${slot}</span>
              <div class="day-slot-line"></div>
              <div class="day-slot-booking">
                ${slotCountMarkup}
                <div class="day-slot-bookings">
                  ${slotBookingsMarkup}
                </div>
              </div>
            </div>
          `;
      })
      .join("")}
    </div>
  `;
}

function selectedDayCardsMarkup(bookingsForDay, expandedBookingId, editingBookingId, vehicleCache) {
  if (!bookingsForDay.length) {
    return '<article class="request-card"><p class="muted">No appointments for this date.</p></article>';
  }

  return bookingsForDay
    .map((booking, index) => {
      const bookingId = String(booking.id ?? "");
      const isExpanded = expandedBookingId === bookingId;
      const isEditing = editingBookingId === bookingId;
      const appointmentAt = booking.appointmentAt ?? booking.createdAt;
      const plate = escapeHtml(booking.licensePlate && booking.licensePlate !== "UNKNOWN" ? formatLicensePlate(booking.licensePlate) : "UNKNOWN");
      const time = escapeHtml(formatTime(appointmentAt));
      const scheduleDate = normalizeDateValue(toDateInputValue(appointmentAt));
      const safeScheduleDate = escapeHtml(scheduleDate);
      const scheduleDateLabel = escapeHtml(formatScheduleDateLabel(scheduleDate));
      const scheduleTime = normalizeTimeValue(toTimeInputValue(appointmentAt));
      const safeScheduleTime = escapeHtml(scheduleTime);
      const name = escapeHtml(customerName(booking, index));
      const licensePlateKey = booking.licensePlate ? normalizeLicensePlate(booking.licensePlate) : "";
      const vehicleData = vehicleCache.get(licensePlateKey) || fallbackVehiclePreview(booking.licensePlate);
      const vehicle = vehicleData.buildYear
        ? `${vehicleData.title} (${vehicleData.buildYear})`
        : vehicleData.title;
      const phone = escapeHtml(String(booking.phone ?? "No phone number"));
      const message = escapeHtml(extractContactMessage(booking.message) || "No customer message.");

      return `
        <article class="request-card ${isExpanded ? "is-expanded" : ""}" data-calendar-booking-id="${escapeHtml(bookingId)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${plate}</span>
              <div class="request-info">
                <p class="request-name"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1668 7.08463C14.1668 4.78345 12.3013 2.91797 10.0002 2.91797C7.69898 2.91797 5.8335 4.78345 5.8335 7.08463C5.8335 9.3858 7.69898 11.2513 10.0002 11.2513C12.3013 11.2513 14.1668 9.3858 14.1668 7.08463Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.8332 17.0833C15.8332 13.8617 13.2215 11.25 9.99984 11.25C6.77818 11.25 4.1665 13.8617 4.1665 17.0833" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${name}</p>
                <p class="request-vehicle"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50667 14.1667C7.50667 15.0872 6.76048 15.8333 5.84001 15.8333C4.91953 15.8333 4.17334 15.0872 4.17334 14.1667C4.17334 13.2462 4.91953 12.5 5.84001 12.5C6.76048 12.5 7.50667 13.2462 7.50667 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M15.8397 14.1667C15.8397 15.0872 15.0935 15.8333 14.173 15.8333C13.2525 15.8333 12.5063 15.0872 12.5063 14.1667C12.5063 13.2462 13.2525 12.5 14.173 12.5C15.0935 12.5 15.8397 13.2462 15.8397 14.1667Z" stroke="#666666" stroke-width="1.5"/>
<path d="M1.67301 8.33464H15.0063M1.67301 8.33464C1.67301 8.98464 1.65635 10.868 1.67634 12.718C1.70632 13.318 1.80624 13.818 4.17444 14.168M1.67301 8.33464C1.85288 6.88464 2.63561 5.16797 3.0353 4.51797M7.50634 8.33464V4.16797M12.4981 14.168H7.5019M1.68634 4.16797H10.1998C10.1998 4.16797 10.6495 4.16797 11.0492 4.20797C11.7987 4.27797 12.4282 4.61797 13.0577 5.46797C13.7242 6.36797 14.2367 7.50797 14.9162 8.11797C16.0454 9.13164 18.1937 8.81797 18.3137 10.968C18.3437 12.068 18.3437 13.268 18.2937 13.468C18.2134 14.0569 17.7593 14.1531 17.1945 14.168C16.7043 14.181 16.1134 14.1447 15.8256 14.168" stroke="#666666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
${vehicle}</p>
                <div class="request-services">${serviceChipsMarkup(booking.service)}</div>
              </div>
            </div>
            <div class="request-meta">
              <span class="request-time"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 14.6654C11.6821 14.6654 14.6668 11.6806 14.6668 7.9987C14.6668 4.3168 11.6821 1.33203 8.00016 1.33203C4.31826 1.33203 1.3335 4.3168 1.3335 7.9987C1.3335 11.6806 4.31826 14.6654 8.00016 14.6654Z" stroke="#333333" stroke-width="1.25"/>
<path d="M8 5.33203V7.9987L9.33333 9.33203" stroke="#333333" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
${time}</span>
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

          ${isExpanded
          ? `
            <div class="request-divider"></div>
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">
                  <div class="request-box-label">
                    <img src="/sidebar-icons/user.png" alt="" aria-hidden="true" />
                    <span>Phone</span>
                  </div>
                  <div class="request-box-divider"></div>
                  <span>${phone}</span>
                </div>
                <div class="request-message-box">
                  <div class="request-box-label">
                    <img src="/sidebar-icons/text.png" alt="" aria-hidden="true" />
                    <span>Message</span>
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
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${escapeHtml(bookingId)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${escapeHtml(bookingId)}">Cancel</button>
                  </div>
                `
            : ""
          }

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${escapeHtml(bookingId)}" aria-label="Edit booking">✎</button>
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

export async function mountCalendarPage(rootElement) {
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
    activePage: "calendar",
    title: "Calendar",
    headerNote: "Plan and track the day schedule",
    userEmail: authState.user.email,
    onLogout: logoutAndRedirect,
    garage: authState.activeGarage,
    isAdmin: authState.isAdmin,
  });

  rootElement.replaceChildren(shell);

  contentArea.innerHTML = `
    <section class="calendar-page-grid">
      <div class="calendar-primary-col">
        <section class="panel calendar-board-panel">
          <div class="calendar-board-head">
            <div class="calendar-board-nav">
              <button class="calendar-nav-button" type="button" data-calendar-nav="prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 4C10 4 6.00001 6.94593 6 8C5.99999 9.05413 10 12 10 12" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
              <p id="calendarPeriodLabel" class="calendar-period-label"></p>
              <button class="calendar-nav-button" type="button" data-calendar-nav="next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            </div>

            <div class="calendar-mode-tabs" role="tablist" aria-label="Calendar mode">
              <button id="calendarModeMonth" class="calendar-mode-tab" type="button" data-calendar-mode="month">Month</button>
              <button id="calendarModeDay" class="calendar-mode-tab" type="button" data-calendar-mode="day">Day</button>
            </div>
          </div>

          <div id="calendarBoardBody" class="calendar-board-body"></div>
        </section>
      </div>

      <section class="panel calendar-day-panel">
        <div class="calendar-day-panel-head">
          <p id="calendarDayTitle" class="calendar-day-title"></p>
          <span id="calendarDayCount" class="calendar-day-count">0 appointment</span>
        </div>

        <div id="calendarDayList" class="request-list"></div>
      </section>
    </section>
  `;

  const boardBodyElement = contentArea.querySelector("#calendarBoardBody");
  const periodLabelElement = contentArea.querySelector("#calendarPeriodLabel");
  const modeMonthElement = contentArea.querySelector("#calendarModeMonth");
  const modeDayElement = contentArea.querySelector("#calendarModeDay");
  const dayTitleElement = contentArea.querySelector("#calendarDayTitle");
  const dayCountElement = contentArea.querySelector("#calendarDayCount");
  const dayListElement = contentArea.querySelector("#calendarDayList");

  let allBookings = [];
  let activeBookings = [];
  let selectedDate = new Date();
  let currentMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
  let activeMode = "month";
  let expandedBookingId = "";
  let editingBookingId = "";
  let lastRenderedMode = "";
  let lastRenderedDayKey = "";
  const vehicleCache = new Map();

  const bookingsForSelectedDate = () => {
    const selectedKey = toDateKey(selectedDate);

    return activeBookings
      .filter((booking) => bookingDateKey(booking) === selectedKey)
      .sort(
        (left, right) =>
          new Date(left.appointmentAt ?? left.createdAt).getTime() -
          new Date(right.appointmentAt ?? right.createdAt).getTime(),
      );
  };

  const render = () => {
    const selectedKey = toDateKey(selectedDate);
    const dayBookings = bookingsForSelectedDate();
    const shouldAutoScrollDayBoard =
      activeMode === "day" &&
      (lastRenderedMode !== "day" || lastRenderedDayKey !== selectedKey);

    modeMonthElement.classList.toggle("is-active", activeMode === "month");
    modeDayElement.classList.toggle("is-active", activeMode === "day");

    if (expandedBookingId && !dayBookings.some((booking) => String(booking.id) === expandedBookingId)) {
      expandedBookingId = "";
      editingBookingId = "";
    }

    if (editingBookingId && !dayBookings.some((booking) => String(booking.id) === editingBookingId)) {
      editingBookingId = "";
    }

    if (activeMode === "month") {
      periodLabelElement.textContent = formatMonthLabel(currentMonth);
      boardBodyElement.innerHTML = monthGridMarkup(currentMonth, activeBookings, selectedKey);
    } else {
      periodLabelElement.textContent = formatDayTitle(selectedDate);
      boardBodyElement.innerHTML = dayBoardMarkup(selectedDate, dayBookings);

      if (shouldAutoScrollDayBoard) {
        window.requestAnimationFrame(() => {
          const dayBoardList = boardBodyElement.querySelector(".day-board-list");
          if (!(dayBoardList instanceof HTMLElement)) {
            return;
          }

          const firstBookingRow = dayBoardList.querySelector(".day-slot-row.has-booking");
          if (firstBookingRow instanceof HTMLElement) {
            const boardRect = boardBodyElement.getBoundingClientRect();
            const rowRect = firstBookingRow.getBoundingClientRect();
            const nextTop = boardBodyElement.scrollTop + (rowRect.top - boardRect.top) - 8;
            boardBodyElement.scrollTo({ top: Math.max(0, nextTop), behavior: "auto" });
          } else {
            boardBodyElement.scrollTo({ top: 0, behavior: "auto" });
          }
        });
      }
    }

    dayTitleElement.textContent = formatCalendarDayTitle(selectedDate);
    dayCountElement.textContent = `${dayBookings.length} appointment${dayBookings.length === 1 ? "" : "s"}`;
    dayListElement.innerHTML = selectedDayCardsMarkup(dayBookings, expandedBookingId, editingBookingId, vehicleCache);

    lastRenderedMode = activeMode;
    lastRenderedDayKey = selectedKey;
  };

  contentArea.addEventListener("click", async (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) {
      return;
    }

    if (handleScheduleTimePickerInteraction(contentArea, target)) {
      return;
    }

    const navButton = target.closest("[data-calendar-nav]");
    if (navButton instanceof HTMLElement) {
      const direction = navButton.dataset.calendarNav;

      if (activeMode === "month") {
        const next = new Date(currentMonth);
        next.setMonth(currentMonth.getMonth() + (direction === "next" ? 1 : -1));
        currentMonth = new Date(next.getFullYear(), next.getMonth(), 1);
      } else {
        const nextDay = new Date(selectedDate);
        nextDay.setDate(selectedDate.getDate() + (direction === "next" ? 1 : -1));
        selectedDate = nextDay;
        currentMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
      }

      render();
      return;
    }

    const modeButton = target.closest("[data-calendar-mode]");
    if (modeButton instanceof HTMLElement) {
      activeMode = modeButton.dataset.calendarMode === "day" ? "day" : "month";
      render();
      return;
    }

    const dayCell = target.closest("[data-calendar-cell]");
    if (dayCell instanceof HTMLElement) {
      const rawKey = dayCell.dataset.calendarCell;
      if (rawKey) {
        const nextDate = parseDate(`${rawKey}T12:00:00`);
        if (nextDate) {
          selectedDate = nextDate;
          currentMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
          render();
        }
      }
      return;
    }

    const daySlotBookingItem = target.closest("[data-day-slot-booking-id]");
    if (daySlotBookingItem instanceof HTMLElement) {
      const bookingId = String(daySlotBookingItem.dataset.daySlotBookingId ?? "");
      if (bookingId) {
        expandedBookingId = bookingId;
        editingBookingId = "";
        render();

        window.requestAnimationFrame(() => {
          const matchingCard = [...dayListElement.querySelectorAll("[data-calendar-booking-id]")]
            .find((card) => card instanceof HTMLElement && String(card.dataset.calendarBookingId ?? "") === bookingId);

          if (matchingCard instanceof HTMLElement) {
            matchingCard.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }
      return;
    }

    const toggleButton = target.closest("[data-calendar-toggle]");
    if (toggleButton instanceof HTMLElement) {
      const bookingId = String(toggleButton.dataset.calendarToggle ?? "");
      expandedBookingId = expandedBookingId === bookingId ? "" : bookingId;
      if (expandedBookingId !== bookingId) {
        editingBookingId = "";
      }
      render();
      return;
    }

    const actionButton = target.closest("[data-calendar-action]");
    if (actionButton instanceof HTMLElement) {
      const action = String(actionButton.dataset.calendarAction ?? "");
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
        const card = actionButton.closest("[data-calendar-booking-id]");
        if (!(card instanceof HTMLElement)) {
          return;
        }

        const booking = activeBookings.find((item) => String(item.id) === bookingId);
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

        activeBookings = sortBookingsByAppointment(
          activeBookings.map((item) =>
            String(item.id) === bookingId
              ? {
                ...item,
                appointmentAt: nextAppointmentAt,
              }
              : item,
          ),
        );

        const nextSelectedDate = parseDate(nextAppointmentAt);
        if (nextSelectedDate) {
          selectedDate = nextSelectedDate;
          currentMonth = new Date(nextSelectedDate.getFullYear(), nextSelectedDate.getMonth(), 1);
        }

        editingBookingId = "";
        expandedBookingId = bookingId;
        render();
        return;
      }

      const booking = activeBookings.find((item) => String(item.id) === bookingId);
      if (!booking) {
        return;
      }

      render();
      return;
    }

    const requestActionButton = target.closest("[data-request-action]");
    if (requestActionButton instanceof HTMLElement) {
      const action = String(requestActionButton.dataset.requestAction ?? "");
      const bookingId = String(requestActionButton.dataset.bookingId ?? "");
      if (!bookingId) {
        return;
      }

      const booking = activeBookings.find((item) => String(item.id) === bookingId);
      if (!booking) {
        return;
      }

      if (action === "complete") {
        (async () => {
          const confirmed = await showConfirmDialog(
            "Are you sure you want to mark this appointment as completed?",
            "Mark as Completed"
          );
          if (!confirmed) return;

          try {
            await markBookingDone(booking, {
              convertedFromEmail: booking.source !== "manual",
            });
          } catch (error) {
            window.alert(error instanceof Error ? error.message : "Unable to mark appointment as completed.");
            return;
          }

          window.location.href = "/completed.html";
        })();
        return;
      }

      if (action === "delete") {
        (async () => {
          const confirmed = await showConfirmDialog(
            "Are you sure you want to delete this appointment? This action cannot be undone.",
            "Delete Appointment"
          );
          if (!confirmed) return;

          allBookings = allBookings.filter((item) => String(item.id) !== bookingId);
          activeBookings = activeBookings.filter((item) => String(item.id) !== bookingId);

          editingBookingId = "";

          const inboxSummary = summarizeEmailInbox(allBookings);
          setUnreadEmailCount(inboxSummary.unread);

          render();
        })();
        return;
      }
    }

    const cardElement = target.closest("[data-calendar-booking-id]");
    if (cardElement instanceof HTMLElement && !isInteractiveClick(target)) {
      const bookingId = String(cardElement.dataset.calendarBookingId ?? "");
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

  try {
    allBookings = await getBookings({ garageIds });

    // Pre-fetch all vehicle data before rendering
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
          if (vehicle) vehicleCache.set(licensePlate, vehicle);
        } catch (error) {
          console.error(`Failed to fetch vehicle for ${licensePlate}:`, error);
        }
      }
    }

    activeBookings = sortBookingsByAppointment(
      allBookings.filter((booking) => booking.inAppointments === true && !isCompletedBooking(booking)),
    );

    const inboxSummary = summarizeEmailInbox(allBookings);
    setUnreadEmailCount(inboxSummary.unread);

    render();
  } catch (error) {
    boardBodyElement.innerHTML = '<p class="muted">Unable to load calendar right now.</p>';
    dayListElement.innerHTML = '<article class="request-card"><p class="muted">Unable to load appointments.</p></article>';
    setUnreadEmailCount(0);
    console.error(error);
  }
}
