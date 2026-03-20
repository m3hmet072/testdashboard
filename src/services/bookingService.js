import {
  deleteBookingById,
  fetchBookingsByGarageIds,
  isSupabaseConfigured,
  insertBooking,
  upsertBookingSchedule,
} from "./supabaseClient.js";

const MANUAL_BOOKINGS_STORAGE_KEY = "garage_dashboard_manual_bookings_v1";
const BOOKING_WORKFLOW_STORAGE_KEY = "garage_dashboard_booking_workflow_v1";
const MANUAL_BOOKING_DASHBOARD_MARKER = "Manual appointment created in dashboard.";

function hasLocalStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function normalizeBookingId(value) {
  return String(value ?? "").trim();
}

function normalizeStatusValue(value) {
  const normalized = String(value ?? "new").trim().toLowerCase();

  if (normalized === "confirmed" || normalized === "confirm") {
    return "confirmed";
  }

  if (
    normalized === "done" ||
    normalized === "completed" ||
    normalized === "complete" ||
    normalized === "closed"
  ) {
    return "done";
  }

  return "new";
}

function readBookingWorkflowState() {
  if (!hasLocalStorage()) {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(BOOKING_WORKFLOW_STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeBookingWorkflowState(state) {
  if (!hasLocalStorage()) {
    return;
  }

  window.localStorage.setItem(BOOKING_WORKFLOW_STORAGE_KEY, JSON.stringify(state));
}

function getWorkflowEntry(workflowState, bookingId) {
  const id = normalizeBookingId(bookingId);
  if (!id) {
    return {};
  }

  const entry = workflowState[id];
  return entry && typeof entry === "object" ? entry : {};
}

function upsertWorkflowEntry(bookingId, patch) {
  const id = normalizeBookingId(bookingId);
  if (!id) {
    return;
  }

  const workflowState = readBookingWorkflowState();
  const current = getWorkflowEntry(workflowState, id);

  workflowState[id] = {
    ...current,
    ...patch,
  };

  writeBookingWorkflowState(workflowState);
}

function removeWorkflowEntry(bookingId) {
  const id = normalizeBookingId(bookingId);
  if (!id) {
    return;
  }

  const workflowState = readBookingWorkflowState();
  if (!(id in workflowState)) {
    return;
  }

  delete workflowState[id];
  writeBookingWorkflowState(workflowState);
}

function applyWorkflowToBooking(booking, workflowState) {
  const workflow = getWorkflowEntry(workflowState, booking.id);
  const convertedFromEmail = workflow.convertedFromEmail === true;
  const isDeleted = workflow.deleted === true;
  const source = String(booking.source ?? "").trim().toLowerCase();
  const message = String(booking.message ?? "");
  const isManualBooking = source === "manual" || message.includes(MANUAL_BOOKING_DASHBOARD_MARKER);
  const hasScheduledAppointment = booking.hasScheduledAppointment === true;

  const defaultInAppointments = isManualBooking || hasScheduledAppointment ? true : convertedFromEmail;
  const inAppointments = typeof workflow.inAppointments === "boolean"
    ? workflow.inAppointments
    : defaultInAppointments;

  const status = normalizeStatusValue(workflow.status ?? booking.status);
  const appointmentAt = String(workflow.appointmentAt ?? booking.appointmentAt ?? "").trim() || booking.createdAt;
  const completedAt = String(workflow.completedAt ?? booking.completedAt ?? "").trim() || null;

  return {
    ...booking,
    status,
    inAppointments,
    convertedFromEmail,
    isDeleted,
    appointmentAt,
    completedAt,
  };
}

function readManualBookings() {
  if (!hasLocalStorage()) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(MANUAL_BOOKINGS_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeManualBookings(rows) {
  if (!hasLocalStorage()) {
    return;
  }

  window.localStorage.setItem(MANUAL_BOOKINGS_STORAGE_KEY, JSON.stringify(rows));
}

function removeManualBookingById(bookingId) {
  const id = normalizeBookingId(bookingId);
  if (!id) {
    return false;
  }

  const manualRows = readManualBookings();
  if (!manualRows.length) {
    return false;
  }

  const filteredRows = manualRows.filter((row) => normalizeBookingId(row.id) !== id);
  if (filteredRows.length === manualRows.length) {
    return false;
  }

  writeManualBookings(filteredRows);
  return true;
}

function toIsoString(value, fallbackIso) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? fallbackIso : date.toISOString();
}

function uniqueBookingId() {
  return `MAN-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function combineAppointmentDateTime(booking) {
  const appointmentDate = String(booking.appointment_date ?? booking.appointmentDate ?? "").trim();
  const appointmentTime = String(booking.appointment_time ?? booking.appointmentTime ?? "").trim();

  if (!appointmentDate || !appointmentTime) {
    return "";
  }

  return `${appointmentDate}T${appointmentTime}`;
}

function getBookingScheduleContext(bookingOrId) {
  if (bookingOrId && typeof bookingOrId === "object") {
    const bookingId = normalizeBookingId(bookingOrId.id);
    const garageId = String(bookingOrId.garageId ?? bookingOrId.garage_id ?? "").trim();

    return {
      bookingId,
      garageId,
      isLocalOnly: bookingId.startsWith("MAN-"),
    };
  }

  const bookingId = normalizeBookingId(bookingOrId);

  return {
    bookingId,
    garageId: "",
    isLocalOnly: bookingId.startsWith("MAN-"),
  };
}

function toSchedulePersistenceError(error) {
  const code = String(error?.code ?? "").trim();

  if (code === "42P01") {
    return new Error("Supabase booking_schedule table or bookings_with_schedule view is missing. Run the schedule SQL migration first.");
  }

  if (code === "42501") {
    return new Error("Supabase blocked the schedule update. Check RLS policies for booking_schedule.");
  }

  if (error instanceof Error) {
    return error;
  }

  return new Error("Unable to save the appointment schedule.");
}

function toDeletePersistenceError(error) {
  const code = String(error?.code ?? "").trim();

  if (code === "42P01") {
    return new Error("Supabase bookings table is missing. Run the schema SQL first.");
  }

  if (code === "42501") {
    return new Error("Supabase blocked deleting this booking. Check RLS policies for bookings.");
  }

  if (error instanceof Error) {
    return error;
  }

  return new Error("Unable to delete the appointment.");
}

function normalizeBooking(booking) {
  const createdAt = booking.created_at ?? booking.createdAt ?? new Date().toISOString();
  const scheduleAppointmentAt = combineAppointmentDateTime(booking);
  const rawAppointmentAt = String(booking.appointment_at ?? booking.appointmentAt ?? "").trim();
  const appointmentAt = rawAppointmentAt
    || scheduleAppointmentAt
    || createdAt;
  const hasScheduledAppointment = Boolean(rawAppointmentAt || scheduleAppointmentAt);

  return {
    id: booking.id,
    garageId: booking.garage_id ?? booking.garageId,
    licensePlate: booking.license_plate ?? "Unknown plate",
    phone: booking.phone ?? "",
    service: booking.service ?? "Service request",
    message: booking.message ?? "",
    appointmentAt,
    completedAt: booking.completed_at ?? booking.completedAt ?? null,
    status: booking.status ?? booking.state ?? "new",
    source: booking.source ?? "form",
    hasScheduledAppointment,
    createdAt,
  };
}

function getManualBookings({ garageIds = null } = {}) {
  const manualRows = readManualBookings();
  if (!manualRows.length) {
    return [];
  }

  const filteredRows = Array.isArray(garageIds) && garageIds.length
    ? manualRows.filter((row) => garageIds.includes(row.garage_id ?? row.garageId))
    : manualRows;

  return filteredRows.map(normalizeBooking);
}

function bookingSortDescending(left, right) {
  return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
}

export function moveBookingToAppointments(bookingId) {
  upsertWorkflowEntry(bookingId, {
    convertedFromEmail: true,
    inAppointments: true,
    status: "new",
  });
}

export function persistBookingStatus(bookingId, statusValue) {
  upsertWorkflowEntry(bookingId, {
    status: normalizeStatusValue(statusValue),
  });
}

export async function persistBookingSchedule(bookingOrId, appointmentAt) {
  const safeAppointmentAt = String(appointmentAt ?? "").trim();
  if (!safeAppointmentAt) {
    throw new Error("Please choose both a date and time for the appointment.");
  }

  const { bookingId, garageId, isLocalOnly } = getBookingScheduleContext(bookingOrId);
  if (!bookingId) {
    throw new Error("Booking id is required before saving a schedule.");
  }

  if (!isLocalOnly && garageId) {
    try {
      await upsertBookingSchedule({
        bookingId,
        garageId,
        appointmentAt: safeAppointmentAt,
      });
    } catch (error) {
      throw toSchedulePersistenceError(error);
    }
  }

  upsertWorkflowEntry(bookingId, {
    appointmentAt: safeAppointmentAt,
  });

  return safeAppointmentAt;
}

export async function deleteBooking(bookingOrId) {
  const { bookingId, garageId, isLocalOnly } = getBookingScheduleContext(bookingOrId);
  if (!bookingId) {
    throw new Error("Booking id is required before deleting a booking.");
  }

  if (isLocalOnly) {
    removeManualBookingById(bookingId);
    removeWorkflowEntry(bookingId);
    return true;
  }

  if (!isSupabaseConfigured()) {
    upsertWorkflowEntry(bookingId, {
      deleted: true,
      inAppointments: false,
      status: "done",
    });
    return true;
  }

  let deletedRow;

  try {
    deletedRow = await deleteBookingById({
      bookingId,
      garageId,
    });
  } catch (error) {
    throw toDeletePersistenceError(error);
  }

  if (!deletedRow) {
    throw new Error("Supabase did not delete this booking (row not found or blocked by RLS policy).");
  }

  removeWorkflowEntry(bookingId);
  return true;
}

export function markBookingDone(bookingId, { convertedFromEmail = false } = {}) {
  const patch = {
    inAppointments: false,
    status: "done",
    completedAt: new Date().toISOString(),
  };

  if (convertedFromEmail) {
    patch.convertedFromEmail = true;
  }

  upsertWorkflowEntry(bookingId, patch);
}

export async function createManualBooking({
  garageId,
  licensePlate,
  phone,
  service,
  message,
  appointmentAt,
}) {
  const safeGarageId = String(garageId ?? "").trim();
  const safeLicensePlate = String(licensePlate ?? "").trim().toUpperCase();
  const safePhone = String(phone ?? "").trim();
  const safeService = String(service ?? "").trim();
  const safeMessage = String(message ?? "").trim();
  const messageWithManualMarker = safeMessage.includes(MANUAL_BOOKING_DASHBOARD_MARKER)
    ? safeMessage
    : `${safeMessage}\n${MANUAL_BOOKING_DASHBOARD_MARKER}`;

  if (!safeGarageId) {
    throw new Error("A garage is required before creating a manual appointment.");
  }

  if (!safeLicensePlate || !safePhone || !safeService || !safeMessage || !appointmentAt) {
    throw new Error("Please fill in kenteken, phone number, service, bericht, and appointment date.");
  }

  const nowIso = new Date().toISOString();
  const safeAppointmentAt = toIsoString(appointmentAt, nowIso);

  const insertedBooking = await insertBooking({
    garageId: safeGarageId,
    licensePlate: safeLicensePlate,
    phone: safePhone,
    service: safeService,
    message: messageWithManualMarker,
    createdAt: nowIso,
  });

  if (insertedBooking) {
    try {
      await upsertBookingSchedule({
        bookingId: insertedBooking.id,
        garageId: safeGarageId,
        appointmentAt: safeAppointmentAt,
      });
    } catch (error) {
      console.warn("Unable to persist booking schedule in Supabase booking_schedule.", error);
    }

    upsertWorkflowEntry(insertedBooking.id, {
      convertedFromEmail: false,
      inAppointments: true,
      status: "new",
      appointmentAt: safeAppointmentAt,
    });

    return normalizeBooking({
      ...insertedBooking,
      appointment_at: safeAppointmentAt,
      source: "manual",
      status: "new",
    });
  }

  const rawBooking = {
    id: uniqueBookingId(),
    garage_id: safeGarageId,
    license_plate: safeLicensePlate,
    phone: safePhone,
    service: safeService,
    message: messageWithManualMarker,
    appointment_at: safeAppointmentAt,
    status: "new",
    source: "manual",
    created_at: nowIso,
  };

  const manualRows = readManualBookings();
  manualRows.unshift(rawBooking);
  writeManualBookings(manualRows.slice(0, 500));

  upsertWorkflowEntry(rawBooking.id, {
    convertedFromEmail: false,
    inAppointments: true,
    status: "new",
    appointmentAt: safeAppointmentAt,
  });

  return normalizeBooking(rawBooking);
}

export async function getBookings({ garageIds = null } = {}) {
  const rawBookings = await fetchBookingsByGarageIds({ garageIds });
  const manualBookings = getManualBookings({ garageIds });
  const workflowState = readBookingWorkflowState();

  const combined = [...rawBookings.map(normalizeBooking), ...manualBookings];
  const dedupedById = new Map();

  for (const booking of combined) {
    const id = String(booking.id ?? "").trim();
    if (!id) {
      continue;
    }

    if (!dedupedById.has(id)) {
      dedupedById.set(id, booking);
    }
  }

  return Array.from(dedupedById.values())
    .map((booking) => applyWorkflowToBooking(booking, workflowState))
    .filter((booking) => booking.isDeleted !== true)
    .sort(bookingSortDescending);
}

export function summarizeBookings(bookings) {
  const today = new Date();
  const todayKey = toLocalDateKey(today);

  const summary = {
    total: bookings.length,
    today: 0,
    thisWeek: 0,
  };

  const weekAgo = new Date(today);
  weekAgo.setDate(today.getDate() - 7);

  for (const booking of bookings) {
    if (toLocalDateKey(booking.createdAt) === todayKey) {
      summary.today += 1;
    }

    if (new Date(booking.createdAt).getTime() >= weekAgo.getTime()) {
      summary.thisWeek += 1;
    }
  }

  return summary;
}

export function filterBookingsByDateRange(bookings, startDate, endDate) {
  const hasStart = Boolean(startDate);
  const hasEnd = Boolean(endDate);

  if (!hasStart && !hasEnd) {
    return bookings;
  }

  const startTimestamp = hasStart ? new Date(`${startDate}T00:00:00`).getTime() : null;
  const endTimestamp = hasEnd ? new Date(`${endDate}T23:59:59`).getTime() : null;

  return bookings.filter((booking) => {
    const bookingTimestamp = new Date(booking.createdAt).getTime();
    if (Number.isNaN(bookingTimestamp)) {
      return false;
    }

    if (startTimestamp && bookingTimestamp < startTimestamp) {
      return false;
    }

    if (endTimestamp && bookingTimestamp > endTimestamp) {
      return false;
    }

    return true;
  });
}

function toLocalDateKey(value) {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
