import { createAppShell } from "../components/appShell.js";
import { getBookings, markBookingDone, persistBookingSchedule } from "../services/bookingService.js";
import { summarizeEmailInbox } from "../services/emailService.js";
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
]);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
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
    .filter(Boolean)
    .slice(0, 3);

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
  for (let hour = 8; hour <= 17; hour += 1) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }

  const bookingBySlot = new Map(
    bookingsForDay.map((booking, index) => [formatTime(booking.appointmentAt ?? booking.createdAt), { booking, index }]),
  );

  return `
    <div class="day-board-list">
      ${slots
        .map((slot) => {
          const slotBooking = bookingBySlot.get(slot);

          if (!slotBooking) {
            return `
              <div class="day-slot-row">
                <span class="day-slot-time">${slot}</span>
                <span class="day-slot-empty">Available</span>
              </div>
            `;
          }

          const { booking, index } = slotBooking;
          const plate = escapeHtml(String(booking.licensePlate ?? "UNKNOWN").toUpperCase());
          const name = escapeHtml(customerName(booking, index));

          return `
            <div class="day-slot-row has-booking">
              <span class="day-slot-time">${slot}</span>
              <div class="day-slot-booking">
                <span class="plate-chip">${plate}</span>
                <span class="day-slot-name">${name}</span>
                <span class="status-chip status-chip-progress">In Progress</span>
                ${serviceChipsMarkup(booking.service)}
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function selectedDayCardsMarkup(bookingsForDay, expandedBookingId, editingBookingId) {
  if (!bookingsForDay.length) {
    return '<article class="request-card"><p class="muted">No appointments for this date.</p></article>';
  }

  return bookingsForDay
    .map((booking, index) => {
      const bookingId = String(booking.id ?? "");
      const isExpanded = expandedBookingId === bookingId;
      const isEditing = editingBookingId === bookingId;
      const appointmentAt = booking.appointmentAt ?? booking.createdAt;
      const plate = escapeHtml(String(booking.licensePlate ?? "UNKNOWN").toUpperCase());
      const time = escapeHtml(formatTime(appointmentAt));
      const scheduleDate = normalizeDateValue(toDateInputValue(appointmentAt));
      const safeScheduleDate = escapeHtml(scheduleDate);
      const scheduleDateLabel = escapeHtml(formatScheduleDateLabel(scheduleDate));
      const scheduleTime = normalizeTimeValue(toTimeInputValue(appointmentAt));
      const safeScheduleTime = escapeHtml(scheduleTime);
      const name = escapeHtml(customerName(booking, index));
      const phone = escapeHtml(String(booking.phone ?? "No phone number"));
      const message = escapeHtml(extractContactMessage(booking.message) || "No customer message.");

      return `
        <article class="request-card ${isExpanded ? "is-expanded" : ""}" data-calendar-booking-id="${escapeHtml(bookingId)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${plate}</span>
              <div class="request-info">
                <p class="request-name">${name}</p>
                <p class="request-vehicle">Toyota Corolla (2021)</p>
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

          ${
            isExpanded
              ? `
            <div class="request-expanded">
              <div class="request-expanded-grid">
                <div class="request-contact-box">${phone}</div>
                <div class="request-message-box">${message}</div>
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
                    <button class="button subtle" type="button" data-calendar-action="save-schedule" data-booking-id="${escapeHtml(bookingId)}">Save</button>
                    <button class="button subtle" type="button" data-calendar-action="cancel-edit" data-booking-id="${escapeHtml(bookingId)}">Cancel</button>
                  </div>
                `
                    : ""
                }

                <button class="icon-button" type="button" data-calendar-action="edit" data-booking-id="${escapeHtml(bookingId)}" aria-label="Edit booking">✎</button>
                <button class="button" type="button" data-calendar-action="complete" data-booking-id="${escapeHtml(bookingId)}">Completed</button>
                <button class="button danger" type="button" data-calendar-action="delete" data-booking-id="${escapeHtml(bookingId)}">Delete</button>
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
              <button class="calendar-nav-button" type="button" data-calendar-nav="prev">‹</button>
              <p id="calendarPeriodLabel" class="calendar-period-label"></p>
              <button class="calendar-nav-button" type="button" data-calendar-nav="next">›</button>
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
    }

    dayTitleElement.textContent = formatDayShort(selectedDate);
    dayCountElement.textContent = `${dayBookings.length} appointment${dayBookings.length === 1 ? "" : "s"}`;
    dayListElement.innerHTML = selectedDayCardsMarkup(dayBookings, expandedBookingId, editingBookingId);
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

      if (action === "complete") {
        markBookingDone(bookingId, {
          convertedFromEmail: booking.source !== "manual",
        });

        allBookings = allBookings.map((item) =>
          String(item.id) === bookingId
            ? {
                ...item,
                status: "done",
                inAppointments: false,
              }
            : item,
        );

        activeBookings = activeBookings.filter((item) => String(item.id) !== bookingId);
      }

      if (action === "delete") {
        allBookings = allBookings.filter((item) => String(item.id) !== bookingId);
        activeBookings = activeBookings.filter((item) => String(item.id) !== bookingId);
      }

      editingBookingId = "";

      const inboxSummary = summarizeEmailInbox(allBookings);
      setUnreadEmailCount(inboxSummary.unread);

      render();
      return;
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

    if (allBookings.length) {
      const firstDate = parseDate(allBookings[0].appointmentAt ?? allBookings[0].createdAt);
      if (firstDate) {
        selectedDate = firstDate;
        currentMonth = new Date(firstDate.getFullYear(), firstDate.getMonth(), 1);
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
