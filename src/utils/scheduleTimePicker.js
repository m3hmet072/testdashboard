const HALF_HOUR_TIME_OPTIONS = buildHalfHourTimeOptions();

function scheduleTimeToMinutes(t) {
  const n = String(t ?? "").trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!n) return null;
  const o = Number.parseInt(n[1], 10), s = Number.parseInt(n[2], 10);
  if (!Number.isFinite(o) || !Number.isFinite(s)) return null;
  return Math.min(23, Math.max(0, o)) * 60 + Math.min(59, Math.max(0, s));
}
const DATE_OPTION_PAST_DAYS = 7;
const DATE_OPTION_FUTURE_DAYS = 90;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function toDateKey(value) {
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, "0");
  const day = String(value.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDateValue(value) {
  const raw = String(value ?? "").trim();
  if (!raw) {
    return null;
  }

  const directMatch = raw.match(/^(\d{4}-\d{2}-\d{2})$/);
  if (directMatch) {
    const directDate = new Date(`${directMatch[1]}T12:00:00`);
    return Number.isNaN(directDate.getTime()) ? null : directDate;
  }

  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate(), 12, 0, 0, 0);
}

function buildHalfHourTimeOptions() {
  const options = [];

  for (let hour = 0; hour < 24; hour += 1) {
    const hourLabel = String(hour).padStart(2, "0");
    options.push(`${hourLabel}:00`);
    options.push(`${hourLabel}:30`);
  }

  return options;
}

function scheduleDateCalendarMarkup(selectedDate, viewYearMonth) {
  const normalized = normalizeDateValue(selectedDate);

  let viewYear, viewMonth;
  const vmMatch = String(viewYearMonth ?? "").match(/^(\d{4})-(\d{2})$/);
  if (vmMatch) {
    viewYear = parseInt(vmMatch[1], 10);
    viewMonth = parseInt(vmMatch[2], 10) - 1;
  } else {
    const d = parseDateValue(normalized) ?? new Date();
    viewYear = d.getFullYear();
    viewMonth = d.getMonth();
  }

  const today = new Date();
  today.setHours(12, 0, 0, 0);
  const todayKey = toDateKey(today);

  const minDate = new Date(today);
  minDate.setDate(today.getDate() - DATE_OPTION_PAST_DAYS);
  const minKey = toDateKey(minDate);

  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + DATE_OPTION_FUTURE_DAYS);
  const maxKey = toDateKey(maxDate);

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const lastOfMonth = new Date(viewYear, viewMonth + 1, 0);
  const canGoPrev = toDateKey(firstOfMonth) > minKey;
  const canGoNext = toDateKey(lastOfMonth) < maxKey;

  const monthName = firstOfMonth.toLocaleDateString(undefined, { month: "long", year: "numeric" });
  const viewKey = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}`;

  const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const weekdayHeader = weekdays.map((d) => `<span class="schedule-cal-weekday">${d}</span>`).join("");

  const firstDow = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = lastOfMonth.getDate();

  let cells = "";
  for (let i = 0; i < firstDow; i++) {
    cells += `<span class="schedule-cal-empty"></span>`;
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const key = toDateKey(new Date(viewYear, viewMonth, d, 12, 0, 0));
    const isSelected = key === normalized;
    const isToday = key === todayKey;
    const isDisabled = key < minKey || key > maxKey;

    let cls = "schedule-cal-day";
    if (isSelected) cls += " is-selected";
    else if (isToday) cls += " is-today";
    if (isDisabled) cls += " is-disabled";

    cells += `<button class="${cls}" type="button"${isDisabled ? " disabled" : ""} aria-selected="${isSelected}" data-schedule-date-option="${key}">${d}</button>`;
  }

  return `
    <div class="schedule-cal-header">
      <button class="schedule-cal-nav" type="button" data-schedule-date-nav="prev" aria-label="Previous month"${!canGoPrev ? " disabled" : ""}>
        <svg viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <span class="schedule-cal-title">${escapeHtml(monthName)}</span>
      <button class="schedule-cal-nav" type="button" data-schedule-date-nav="next" aria-label="Next month"${!canGoNext ? " disabled" : ""}>
        <svg viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
    <div class="schedule-cal-weekdays">${weekdayHeader}</div>
    <div class="schedule-cal-grid" data-schedule-cal-grid data-schedule-cal-view="${escapeHtml(viewKey)}">${cells}</div>
  `;
}

export function normalizeTimeValue(value, fallback = "09:00") {
  const raw = String(value ?? "").trim();
  const match = raw.match(/^(\d{1,2}):(\d{2})/);
  if (!match) {
    return fallback;
  }

  const hour = String(Math.min(23, Math.max(0, Number(match[1])))).padStart(2, "0");
  const minute = String(Math.min(59, Math.max(0, Number(match[2])))).padStart(2, "0");
  return `${hour}:${minute}`;
}

export function normalizeDateValue(value, fallback = "") {
  const parsed = parseDateValue(value);
  if (parsed) {
    return toDateKey(parsed);
  }

  const parsedFallback = parseDateValue(fallback);
  if (parsedFallback) {
    return toDateKey(parsedFallback);
  }

  return toDateKey(new Date());
}

export function formatScheduleDateLabel(value) {
  const normalized = normalizeDateValue(value);
  const date = parseDateValue(normalized);
  if (!date) {
    return normalized;
  }

  const today = new Date();
  today.setHours(12, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const todayKey = toDateKey(today);
  const tomorrowKey = toDateKey(tomorrow);

  const shortDate = date.toLocaleDateString(undefined, {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  if (normalized === todayKey) {
    return `Today • ${shortDate}`;
  }

  if (normalized === tomorrowKey) {
    return `Tomorrow • ${shortDate}`;
  }

  return shortDate;
}

export function scheduleTimeOptionsMarkup(selectedTime, garage) {
  const normalized = normalizeTimeValue(selectedTime);

  let slots = HALF_HOUR_TIME_OPTIONS;
  if (garage) {
    const s = scheduleTimeToMinutes((garage.workingHoursStart ?? garage.working_hours_start) ?? "00:00");
    const e = scheduleTimeToMinutes((garage.workingHoursEnd ?? garage.working_hours_end) ?? "23:00");
    if (s !== null && e !== null && s <= e) {
      slots = [];
      for (let m = s; m <= e; m += 30) {
        slots.push(`${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`);
      }
    }
  }

  return slots.map((time) => {
    const isSelected = time === normalized;

    return `<button
      class="request-time-option ${isSelected ? "is-selected" : ""}"
      type="button"
      role="option"
      aria-selected="${isSelected ? "true" : "false"}"
      data-schedule-time-option="${time}"
    >${time}</button>`;
  }).join("");
}

export function scheduleDateOptionsMarkup(selectedDate) {
  return scheduleDateCalendarMarkup(selectedDate);
}

function closeOpenPickersBySelector(rootElement, pickerSelector, toggleSelector, keepOpenPicker) {
  rootElement.querySelectorAll(`${pickerSelector}.is-open`).forEach((picker) => {
    if (!(picker instanceof HTMLElement) || picker === keepOpenPicker) {
      return;
    }

    picker.classList.remove("is-open");

    const trigger = picker.querySelector(toggleSelector);
    if (trigger instanceof HTMLElement) {
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

export function closeOpenSchedulePickers(rootElement, keepOpenPicker = null) {
  if (!(rootElement instanceof Element)) {
    return;
  }

  closeOpenPickersBySelector(rootElement, "[data-schedule-time-picker]", "[data-schedule-time-toggle]", keepOpenPicker);
  closeOpenPickersBySelector(rootElement, "[data-schedule-date-picker]", "[data-schedule-date-toggle]", keepOpenPicker);
}

export function closeOpenTimePickers(rootElement, keepOpenPicker = null) {
  closeOpenSchedulePickers(rootElement, keepOpenPicker);
}

export function handleScheduleTimePickerInteraction(rootElement, target) {
  if (!(target instanceof Element)) {
    return false;
  }

  const datePicker = target.closest("[data-schedule-date-picker]");
  const timePicker = target.closest("[data-schedule-time-picker]");
  const picker = datePicker instanceof HTMLElement
    ? datePicker
    : timePicker instanceof HTMLElement
      ? timePicker
      : null;

  if (!(picker instanceof HTMLElement)) {
    closeOpenSchedulePickers(rootElement);
    return false;
  }

  const dateNavButton = target.closest("[data-schedule-date-nav]");
  if (dateNavButton instanceof HTMLButtonElement && datePicker instanceof HTMLElement) {
    const direction = dateNavButton.dataset.scheduleDateNav;
    const optionsDiv = datePicker.querySelector("[data-schedule-date-options]");
    const calGrid = datePicker.querySelector("[data-schedule-cal-grid]");

    if (optionsDiv instanceof HTMLElement && calGrid instanceof HTMLElement) {
      const currentView = calGrid.dataset.scheduleCalView ?? "";
      const selectedDate = datePicker.querySelector("[data-schedule-edit-date]")?.value ?? "";
      const vMatch = currentView.match(/^(\d{4})-(\d{2})$/);
      if (vMatch) {
        let year = parseInt(vMatch[1], 10);
        let month = parseInt(vMatch[2], 10) - 1;
        if (direction === "prev") month -= 1;
        else month += 1;
        if (month < 0) { month = 11; year -= 1; }
        if (month > 11) { month = 0; year += 1; }
        const newView = `${year}-${String(month + 1).padStart(2, "0")}`;
        optionsDiv.innerHTML = scheduleDateCalendarMarkup(selectedDate, newView);
      }
    }
    return true;
  }

  const dateOptionButton = target.closest("[data-schedule-date-option]");
  if (dateOptionButton instanceof HTMLButtonElement) {
    const dateInput = picker.querySelector("[data-schedule-edit-date]");
    const fallbackDate = dateInput instanceof HTMLInputElement ? dateInput.value : "";
    const nextDate = normalizeDateValue(dateOptionButton.dataset.scheduleDateOption ?? "", fallbackDate);

    if (dateInput instanceof HTMLInputElement) {
      dateInput.value = nextDate;
    }

    const label = picker.querySelector("[data-schedule-date-label]");
    if (label instanceof HTMLElement) {
      label.textContent = formatScheduleDateLabel(nextDate);
    }

    picker.querySelectorAll("[data-schedule-date-option]").forEach((option) => {
      if (!(option instanceof HTMLElement)) {
        return;
      }

      const isSelected = String(option.dataset.scheduleDateOption ?? "") === nextDate;
      option.classList.toggle("is-selected", isSelected);
      option.setAttribute("aria-selected", isSelected ? "true" : "false");
    });

    closeOpenSchedulePickers(rootElement);
    return true;
  }

  const dateToggleButton = target.closest("[data-schedule-date-toggle]");
  if (dateToggleButton instanceof HTMLButtonElement) {
    const shouldOpen = !picker.classList.contains("is-open");
    closeOpenSchedulePickers(rootElement, picker);
    picker.classList.toggle("is-open", shouldOpen);
    dateToggleButton.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    return true;
  }

  const optionButton = target.closest("[data-schedule-time-option]");
  if (optionButton instanceof HTMLButtonElement) {
    const hiddenInput = picker.querySelector("[data-schedule-edit-time]");
    const fallbackTime = hiddenInput instanceof HTMLInputElement ? hiddenInput.value : "09:00";
    const nextTime = normalizeTimeValue(optionButton.dataset.scheduleTimeOption ?? "", fallbackTime);

    if (hiddenInput instanceof HTMLInputElement) {
      hiddenInput.value = nextTime;
    }

    const label = picker.querySelector("[data-schedule-time-label]");
    if (label instanceof HTMLElement) {
      label.textContent = nextTime;
    }

    picker.querySelectorAll("[data-schedule-time-option]").forEach((option) => {
      if (!(option instanceof HTMLElement)) {
        return;
      }

      const isSelected = String(option.dataset.scheduleTimeOption ?? "") === nextTime;
      option.classList.toggle("is-selected", isSelected);
      option.setAttribute("aria-selected", isSelected ? "true" : "false");
    });

    closeOpenSchedulePickers(rootElement);
    return true;
  }

  const toggleButton = target.closest("[data-schedule-time-toggle]");
  if (toggleButton instanceof HTMLButtonElement) {
    const shouldOpen = !picker.classList.contains("is-open");
    closeOpenSchedulePickers(rootElement, picker);
    picker.classList.toggle("is-open", shouldOpen);
    toggleButton.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    return true;
  }

  return true;
}