const EMAIL_READ_STATE_STORAGE_KEY = "garage_dashboard_email_read_state_v1";

function hasLocalStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function readEmailReadState() {
  if (!hasLocalStorage()) {
    return {};
  }

  try {
    const raw = window.localStorage.getItem(EMAIL_READ_STATE_STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeEmailReadState(state) {
  if (!hasLocalStorage()) {
    return;
  }

  window.localStorage.setItem(EMAIL_READ_STATE_STORAGE_KEY, JSON.stringify(state));
}

function normalizeId(value) {
  return String(value ?? "").trim();
}

function extractContactField(rawText, field) {
  const pattern = new RegExp(
    `\\b${field}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`,
    "i",
  );
  return (rawText.match(pattern)?.[1] ?? "").trim();
}

function parseContactPayload(rawValue) {
  const raw = String(rawValue ?? "").trim();
  if (!raw) {
    return {
      name: "",
      email: "",
      message: "",
    };
  }

  const hasLabeledFields = /\b(?:name|email|message)\s*:/i.test(raw);
  if (!hasLabeledFields) {
    return {
      name: "",
      email: "",
      message: raw,
    };
  }

  return {
    name: extractContactField(raw, "name"),
    email: extractContactField(raw, "email"),
    message: extractContactField(raw, "message"),
  };
}

function asTimestamp(value) {
  const date = new Date(value);
  const timestamp = date.getTime();
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function normalizeStatus(value) {
  const normalized = String(value ?? "new").trim().toLowerCase();

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

export function isEmailBooking(booking) {
  if (String(booking?.source ?? "form") === "manual") {
    return false;
  }

  if (booking?.hasScheduledAppointment === true) {
    return false;
  }

  if (booking?.convertedFromEmail === true) {
    return false;
  }

  return normalizeStatus(booking?.status) !== "done";
}

export function isEmailRead(bookingId) {
  const id = normalizeId(bookingId);
  if (!id) {
    return false;
  }

  const state = readEmailReadState();
  return state[id] === true;
}

export function markEmailAsRead(bookingId, read = true) {
  const id = normalizeId(bookingId);
  if (!id) {
    return;
  }

  const state = readEmailReadState();
  if (read) {
    state[id] = true;
  } else {
    delete state[id];
  }

  writeEmailReadState(state);
}

export function markEmailAsUnread(bookingId) {
  markEmailAsRead(bookingId, false);
}

export function summarizeEmailInbox(bookings) {
  const emailBookings = bookings.filter(isEmailBooking);
  let unread = 0;

  for (const booking of emailBookings) {
    if (!isEmailRead(booking.id)) {
      unread += 1;
    }
  }

  return {
    total: emailBookings.length,
    unread,
  };
}

export function getInboxEmails(bookings, { garageNameById = new Map() } = {}) {
  return bookings
    .filter(isEmailBooking)
    .map((booking) => {
      const contact = parseContactPayload(booking.message);
      const id = normalizeId(booking.id);
      const subject = `${booking.licensePlate ?? "Unknown"} • ${booking.service ?? "Service request"}`;
      const message = contact.message || String(booking.message ?? "").trim() || "No message provided.";
      const senderName = contact.name || "Website form";
      const senderEmail = contact.email || "";

      return {
        id,
        subject,
        preview: message,
        message,
        senderName,
        senderEmail,
        phone: booking.phone ?? "",
        service: booking.service ?? "",
        licensePlate: booking.licensePlate ?? "",
        garageId: booking.garageId,
        garageName: garageNameById.get(booking.garageId) ?? "",
        receivedAt: booking.createdAt,
        appointmentAt: booking.appointmentAt ?? booking.createdAt,
        read: isEmailRead(id),
      };
    })
    .sort((left, right) => asTimestamp(right.receivedAt) - asTimestamp(left.receivedAt));
}
