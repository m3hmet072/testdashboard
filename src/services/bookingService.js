import {
  fetchCompletedAppointmentsByGarageIds,
  deleteBookingById,
  deleteCompletedAppointmentById,
  fetchBookingsByGarageIds,
  isSupabaseConfigured,
  insertBooking,
  setCompletedAppointmentWerkbonCreated,
  upsertCompletedAppointmentFromBooking,
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

function extractContactField(rawMessage, field) {
  const raw = String(rawMessage ?? "");
  const pattern = new RegExp(`\\b${field}\\s*:\\s*([^\\n]+)`, "i");
  return (raw.match(pattern)?.[1] ?? "").trim();
}

function buildCompletionNotesFromBooking(booking, completedAtIso) {
  return {
    status: "draft",
    werkbon_created: false,
    customer_name: extractContactField(booking.message, "name") || "Onbekende klant",
    customer_email: extractContactField(booking.message, "email") || "",
    customer_phone: String(booking.phone ?? "").trim(),
    car_model: "Voertuig",
    service_types: [String(booking.service ?? "Service")],
    km_stand: 0,
    vat_enabled: true,
    description: extractContactField(booking.message, "message") || "",
    internal_note: "",
    invoice_number: "",
    paid_at: null,
    completed_at: completedAtIso,
    parts: [{ name: "Service", quantity: 1, price: 0 }],
    labour: { hours: 0, rate: 0 },
    totals: { subtotal: 0, vat: 0, total: 0 },
    updated_at: new Date().toISOString(),
  };
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

function toDeleteCompletedPersistenceError(error) {
  const code = String(error?.code ?? "").trim();

  if (code === "42P01") {
    return new Error("Supabase completed_appointments table is missing. Run the completed SQL migration first.");
  }

  if (code === "42501") {
    return new Error("Supabase blocked deleting this completed appointment. Check RLS policies for completed_appointments.");
  }

  if (error instanceof Error) {
    return error;
  }

  return new Error("Unable to delete the completed appointment.");
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
    // Mark as deleted in workflow state so it won't reappear
    upsertWorkflowEntry(bookingId, {
      deleted: true,
      inAppointments: false,
      status: "deleted",
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

  // Mark as deleted in workflow state to prevent it from reappearing
  upsertWorkflowEntry(bookingId, {
    deleted: true,
    inAppointments: false,
    status: "deleted",
  });
  return true;
}

export async function deleteCompletedAppointment(completedAppointmentOrBooking) {
  const completedAppointmentId = String(
    completedAppointmentOrBooking?.completedAppointmentId
      ?? completedAppointmentOrBooking?.id
      ?? completedAppointmentOrBooking,
  ).trim();
  const garageId = String(completedAppointmentOrBooking?.garageId ?? completedAppointmentOrBooking?.garage_id ?? "").trim();
  const bookingId = String(completedAppointmentOrBooking?.bookingId ?? "").trim();

  if (!completedAppointmentId) {
    throw new Error("Completed appointment id is required before deleting.");
  }

  if (!isSupabaseConfigured()) {
    if (bookingId) {
      upsertWorkflowEntry(bookingId, {
        deleted: true,
        inAppointments: false,
      });
    }
    return true;
  }

  let deletedRow;
  try {
    deletedRow = await deleteCompletedAppointmentById({
      completedAppointmentId,
      garageId,
    });
  } catch (error) {
    throw toDeleteCompletedPersistenceError(error);
  }

  if (!deletedRow) {
    throw new Error("Supabase did not delete this completed appointment (row not found or blocked by RLS policy).");
  }

  if (bookingId) {
    try {
      // Also remove the linked booking so it cannot reappear in Appointments.
      await deleteBookingById({
        bookingId,
        garageId,
      });
    } catch (error) {
      throw toDeletePersistenceError(error);
    }
  }

  if (bookingId) {
    // Mark as deleted in workflow state to prevent it from reappearing in other pages
    upsertWorkflowEntry(bookingId, {
      deleted: true,
      inAppointments: false,
      status: "deleted",
    });
  }

  return true;
}

export async function markBookingDone(bookingOrId, { convertedFromEmail = false } = {}) {
  const booking = bookingOrId && typeof bookingOrId === "object" ? bookingOrId : null;
  const bookingId = normalizeBookingId(booking?.id ?? bookingOrId);
  const completedAtIso = new Date().toISOString();

  const patch = {
    inAppointments: false,
    status: "done",
    completedAt: completedAtIso,
  };

  if (convertedFromEmail) {
    patch.convertedFromEmail = true;
  }

  upsertWorkflowEntry(bookingId, patch);

  if (!booking || !isSupabaseConfigured()) {
    return { persistedToSupabase: false };
  }

  const garageId = String(booking.garageId ?? booking.garage_id ?? "").trim();
  if (!garageId) {
    return { persistedToSupabase: false };
  }

  try {
    const completionNotes = buildCompletionNotesFromBooking(booking, completedAtIso);
    await upsertCompletedAppointmentFromBooking({
      garageId,
      bookingId,
      appointmentAt: booking.appointmentAt,
      completedAt: completedAtIso,
      licensePlate: booking.licensePlate,
      service: booking.service,
      completionNotes,
    });

    return { persistedToSupabase: true };
  } catch (error) {
    if (String(error?.code ?? "") === "42501" || Number(error?.status ?? 0) === 403) {
      return { persistedToSupabase: false, warning: "RLS_BLOCKED" };
    }
    throw error;
  }
}

export async function createWerkbonForBooking(booking) {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const garageId = String(booking.garageId ?? booking.garage_id ?? "").trim();
  if (!garageId) {
    return null;
  }

  const completedAtIso = booking.completedAt || new Date().toISOString();
  const completionNotes = {
    ...buildCompletionNotesFromBooking(booking, completedAtIso),
    werkbon_created: true,
  };

  try {
    const row = await upsertCompletedAppointmentFromBooking({
      garageId,
      bookingId: String(booking.id ?? ""),
      appointmentAt: booking.appointmentAt,
      completedAt: completedAtIso,
      licensePlate: booking.licensePlate,
      service: booking.service,
      completionNotes,
    });

    return String(row?.id ?? "");
  } catch (error) {
    if (String(error?.code ?? "") === "42501" || Number(error?.status ?? 0) === 403) {
      return null;
    }
    throw error;
  }
}

export async function setWerkbonCreatedForCompletedAppointment(
  completedAppointmentOrBooking,
  { created = true } = {},
) {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const completedAppointmentId = String(
    completedAppointmentOrBooking?.completedAppointmentId
      ?? completedAppointmentOrBooking?.id
      ?? completedAppointmentOrBooking,
  ).trim();
  const garageId = String(completedAppointmentOrBooking?.garageId ?? completedAppointmentOrBooking?.garage_id ?? "").trim();

  if (!completedAppointmentId) {
    return null;
  }

  try {
    const row = await setCompletedAppointmentWerkbonCreated({
      completedAppointmentId,
      garageId,
      werkbonCreated: created,
    });
    return row ? String(row.id ?? "") : null;
  } catch (error) {
    if (String(error?.code ?? "") === "42501" || Number(error?.status ?? 0) === 403) {
      return null;
    }
    throw error;
  }
}

export async function getCompletedAppointments({ garageIds = null } = {}) {
  if (!isSupabaseConfigured()) {
    return [];
  }

  const rows = await fetchCompletedAppointmentsByGarageIds({ garageIds });
  return rows.map((row) => {
    let notes = {};
    try {
      notes = JSON.parse(String(row.completion_notes ?? "{}"));
    } catch {
      notes = {};
    }

    return {
      id: String(row.booking_id ?? row.id),
      completedAppointmentId: String(row.id ?? ""),
      bookingId: row.booking_id ? String(row.booking_id) : "",
      garageId: String(row.garage_id ?? ""),
      licensePlate: String(row.license_plate ?? ""),
      phone: String(notes.customer_phone ?? notes.customerPhone ?? ""),
      service: String(row.service ?? "Service"),
      message: String(notes.description ?? ""),
      werkbonCreated: notes.werkbon_created === true,
      appointmentAt: row.appointment_date && row.appointment_time
        ? `${row.appointment_date}T${String(row.appointment_time).slice(0, 8)}`
        : String(row.completed_at ?? row.created_at ?? ""),
      completedAt: String(row.completed_at ?? row.created_at ?? ""),
      status: "done",
      inAppointments: false,
      source: "completed",
      createdAt: String(row.created_at ?? row.completed_at ?? ""),
    };
  });
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
