import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const hasSupabaseCredentials = Boolean(supabaseUrl && supabaseAnonKey);

const supabase = hasSupabaseCredentials
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

const BOOKINGS_SELECT_COLUMNS = "id, garage_id, license_plate, phone, service, message, created_at";
const BOOKINGS_WITH_SCHEDULE_SELECT_COLUMNS = `${BOOKINGS_SELECT_COLUMNS}, appointment_date, appointment_time, appointment_at`;
const COMPLETED_APPOINTMENTS_SELECT_COLUMNS = "id, garage_id, booking_id, completed_at, appointment_date, appointment_time, license_plate, service, completion_notes, created_at";

function toLocalDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toScheduleFields(appointmentAt) {
  const safeAppointmentAt = String(appointmentAt ?? "").trim();
  const directMatch = safeAppointmentAt.match(/^(\d{4}-\d{2}-\d{2})[T\s](\d{2}:\d{2})(?::\d{2})?$/);

  if (directMatch) {
    return {
      appointmentDate: directMatch[1],
      appointmentTime: `${directMatch[2]}:00`,
    };
  }

  const parsed = new Date(safeAppointmentAt);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error("Invalid appointment date/time for booking schedule.");
  }

  return {
    appointmentDate: toLocalDateValue(parsed),
    appointmentTime: `${String(parsed.getHours()).padStart(2, "0")}:${String(parsed.getMinutes()).padStart(2, "0")}:00`,
  };
}

function assertSupabaseConfigured() {
  if (!supabase) {
    throw new Error(
      "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.",
    );
  }
}

export function isSupabaseConfigured() {
  return hasSupabaseCredentials;
}

export function getSupabaseClient() {
  return supabase;
}

export async function signInWithPassword(email, password) {
  assertSupabaseConfigured();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
}

export async function signOut() {
  if (!supabase) {
    return;
  }

  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
}

export async function getSession() {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase.auth.getSession();
  if (error) {
    throw error;
  }

  return data.session;
}

export async function fetchBookings() {
  return fetchBookingsByGarageIds({ garageIds: null });
}

export async function fetchGaragesByUser({ userId, includeAll = false }) {
  assertSupabaseConfigured();

  let query = supabase
    .from("garages")
    .select("id, name, domain, analytics_property_id, logo_url, user_id")
    .order("name", { ascending: true });

  if (!includeAll) {
    query = query.eq("user_id", userId);
  }

  const { data, error } = await query;
  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function fetchBookingsByGarageIds({ garageIds = null }) {
  if (Array.isArray(garageIds) && garageIds.length === 0) {
    return [];
  }

  assertSupabaseConfigured();

  const applyGarageFilter = (query) => {
    if (Array.isArray(garageIds) && garageIds.length) {
      return query.in("garage_id", garageIds);
    }

    return query;
  };

  const viewQuery = applyGarageFilter(
    supabase
      .from("bookings_with_schedule")
      .select(BOOKINGS_WITH_SCHEDULE_SELECT_COLUMNS)
      .order("created_at", { ascending: false }),
  );

  const viewResult = await viewQuery;

  if (!viewResult.error) {
    return viewResult.data ?? [];
  }

  const tableQuery = applyGarageFilter(
    supabase
      .from("bookings")
      .select(BOOKINGS_SELECT_COLUMNS)
      .order("created_at", { ascending: false }),
  );

  const tableResult = await tableQuery;
  if (tableResult.error) {
    throw tableResult.error;
  }

  return tableResult.data ?? [];
}

export async function insertBooking({ garageId, licensePlate, phone, service, message, createdAt }) {
  assertSupabaseConfigured();

  const payload = {
    garage_id: garageId,
    license_plate: licensePlate,
    phone,
    service,
    message,
  };

  if (createdAt) {
    payload.created_at = createdAt;
  }

  const { data, error } = await supabase
    .from("bookings")
    .insert(payload)
    .select(BOOKINGS_SELECT_COLUMNS)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteBookingById({ bookingId, garageId }) {
  const safeBookingId = String(bookingId ?? "").trim();
  const safeGarageId = String(garageId ?? "").trim();

  if (!safeBookingId) {
    throw new Error("Booking id is required before deleting a booking.");
  }

  assertSupabaseConfigured();

  let query = supabase.from("bookings").delete().eq("id", safeBookingId);

  if (safeGarageId) {
    query = query.eq("garage_id", safeGarageId);
  }

  const { data, error, count } = await query.select("id", { count: "exact" });
  if (error) {
    throw error;
  }

  if ((typeof count === "number" && count < 1) || !Array.isArray(data) || data.length < 1) {
    return null;
  }

  return data[0] ?? { id: safeBookingId };
}

export async function deleteCompletedAppointmentById({ completedAppointmentId, garageId }) {
  const safeCompletedAppointmentId = String(completedAppointmentId ?? "").trim();
  const safeGarageId = String(garageId ?? "").trim();

  if (!safeCompletedAppointmentId) {
    throw new Error("Completed appointment id is required before deleting.");
  }

  assertSupabaseConfigured();

  let query = supabase
    .from("completed_appointments")
    .delete()
    .eq("id", safeCompletedAppointmentId);

  if (safeGarageId) {
    query = query.eq("garage_id", safeGarageId);
  }

  const { data, error, count } = await query.select("id", { count: "exact" });
  if (error) {
    throw error;
  }

  if ((typeof count === "number" && count < 1) || !Array.isArray(data) || data.length < 1) {
    return null;
  }

  return data[0] ?? { id: safeCompletedAppointmentId };
}

export async function upsertBookingSchedule({ bookingId, garageId, appointmentAt }) {
  assertSupabaseConfigured();

  const { appointmentDate, appointmentTime } = toScheduleFields(appointmentAt);

  const payload = {
    booking_id: bookingId,
    garage_id: garageId,
    appointment_date: appointmentDate,
    appointment_time: appointmentTime,
  };

  const { data, error } = await supabase
    .from("booking_schedule")
    .upsert(payload, { onConflict: "booking_id" })
    .select("booking_id, garage_id, appointment_date, appointment_time")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function fetchCompletedAppointmentsByGarageIds({ garageIds = null }) {
  if (Array.isArray(garageIds) && garageIds.length === 0) {
    return [];
  }

  assertSupabaseConfigured();

  let query = supabase
    .from("completed_appointments")
    .select(COMPLETED_APPOINTMENTS_SELECT_COLUMNS)
    .order("completed_at", { ascending: false });

  if (Array.isArray(garageIds) && garageIds.length) {
    query = query.in("garage_id", garageIds);
  }

  const { data, error } = await query;
  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function upsertCompletedAppointmentFromBooking({
  garageId,
  bookingId,
  appointmentAt,
  completedAt,
  licensePlate,
  service,
  completionNotes,
}) {
  assertSupabaseConfigured();

  const safeGarageId = String(garageId ?? "").trim();
  if (!safeGarageId) {
    throw new Error("garageId is required to persist a completed appointment.");
  }

  const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  const safeBookingId = String(bookingId ?? "").trim();
  const hasValidBookingId = UUID_RE.test(safeBookingId);

  let appointmentDate = null;
  let appointmentTime = null;
  if (appointmentAt) {
    const schedule = toScheduleFields(appointmentAt);
    appointmentDate = schedule.appointmentDate;
    appointmentTime = schedule.appointmentTime;
  }

  // Prefer exact schedule fields from booking_schedule when available.
  // This avoids "00:00" times when a frontend appointmentAt value is incomplete.
  if (hasValidBookingId) {
    const { data: scheduleRow, error: scheduleError } = await supabase
      .from("booking_schedule")
      .select("appointment_date, appointment_time")
      .eq("garage_id", safeGarageId)
      .eq("booking_id", safeBookingId)
      .maybeSingle();

    if (scheduleError) {
      throw scheduleError;
    }

    if (scheduleRow?.appointment_date) {
      appointmentDate = String(scheduleRow.appointment_date);
    }

    if (scheduleRow?.appointment_time) {
      appointmentTime = String(scheduleRow.appointment_time).slice(0, 8);
    }
  }

  const safeCompletedAt = String(completedAt ?? "").trim() || new Date().toISOString();

  // Only look up existing row when we have a valid UUID booking_id to match on
  let existingRow = null;
  if (hasValidBookingId) {
    const { data, error: lookupError } = await supabase
      .from("completed_appointments")
      .select("id")
      .eq("garage_id", safeGarageId)
      .eq("booking_id", safeBookingId)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (lookupError) {
      throw lookupError;
    }

    existingRow = data;
  }

  const payload = {
    garage_id: safeGarageId,
    ...(hasValidBookingId ? { booking_id: safeBookingId } : {}),
    completed_at: safeCompletedAt,
    appointment_date: appointmentDate,
    appointment_time: appointmentTime,
    license_plate: String(licensePlate ?? "").trim() || null,
    service: String(service ?? "").trim() || null,
    completion_notes: completionNotes ? JSON.stringify(completionNotes) : null,
  };

  if (existingRow?.id) {
    const { data, error } = await supabase
      .from("completed_appointments")
      .update(payload)
      .eq("id", existingRow.id)
      .select(COMPLETED_APPOINTMENTS_SELECT_COLUMNS)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  const { data, error } = await supabase
    .from("completed_appointments")
    .insert(payload)
    .select(COMPLETED_APPOINTMENTS_SELECT_COLUMNS)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function setCompletedAppointmentWerkbonCreated({
  completedAppointmentId,
  garageId,
  werkbonCreated,
}) {
  assertSupabaseConfigured();

  const safeCompletedAppointmentId = String(completedAppointmentId ?? "").trim();
  const safeGarageId = String(garageId ?? "").trim();
  if (!safeCompletedAppointmentId) {
    throw new Error("Completed appointment id is required.");
  }

  let lookupQuery = supabase
    .from("completed_appointments")
    .select("id, completion_notes")
    .eq("id", safeCompletedAppointmentId)
    .limit(1)
    .maybeSingle();

  if (safeGarageId) {
    lookupQuery = lookupQuery.eq("garage_id", safeGarageId);
  }

  const { data: existingRow, error: lookupError } = await lookupQuery;
  if (lookupError) {
    throw lookupError;
  }

  if (!existingRow) {
    return null;
  }

  let notes = {};
  try {
    notes = existingRow.completion_notes ? JSON.parse(String(existingRow.completion_notes)) : {};
  } catch {
    notes = {};
  }

  const nextNotes = {
    ...notes,
    werkbon_created: Boolean(werkbonCreated),
    updated_at: new Date().toISOString(),
  };

  let updateQuery = supabase
    .from("completed_appointments")
    .update({ completion_notes: JSON.stringify(nextNotes) })
    .eq("id", safeCompletedAppointmentId)
    .select(COMPLETED_APPOINTMENTS_SELECT_COLUMNS)
    .single();

  if (safeGarageId) {
    updateQuery = updateQuery.eq("garage_id", safeGarageId);
  }

  const { data, error } = await updateQuery;
  if (error) {
    throw error;
  }

  return data;
}
