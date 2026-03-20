import { createAppShell } from "../components/appShell.js";
import { deleteBooking, getBookings } from "../services/bookingService.js";
import { summarizeEmailInbox } from "../services/emailService.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";

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

const FALLBACK_NAMES = [
  "Thomas Mulder",
  "Sophie Koning",
  "Rupert Clark",
  "Jack Thomesen",
  "Mehmet B",
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
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

function parseDate(value) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
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

function formatDate(value) {
  const date = parseDate(value);
  if (!date) {
    return "Unknown date";
  }

  return date.toLocaleDateString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
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

function normalizeServiceKey(token) {
  return SERVICE_KEY_ALIASES.get(String(token ?? "").trim().toLowerCase()) ?? "other";
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

function extractContactName(message) {
  const raw = String(message ?? "");
  const match = raw.match(/\bname\s*:\s*([^\n]+)/i);
  return (match?.[1] ?? "").trim();
}

function customerName(booking, index) {
  const fromPayload = extractContactName(booking.message);
  if (fromPayload) {
    return fromPayload;
  }

  return FALLBACK_NAMES[index % FALLBACK_NAMES.length];
}

function extractContactField(rawMessage, field) {
  const raw = String(rawMessage ?? "");
  const pattern = new RegExp(`\\b${field}\\s*:\\s*([\\s\\S]*?)(?=\\b(?:name|email|message)\\s*:|$)`, "i");
  return (raw.match(pattern)?.[1] ?? "").trim();
}

function customerMessage(booking) {
  const rawMessage = extractContactField(booking.message, "message") || String(booking.message ?? "").trim();
  return rawMessage || "No customer message.";
}

function customerPhone(booking) {
  return String(booking.phone ?? "").trim() || "No phone number";
}

function isInteractiveClick(target) {
  return target instanceof Element && Boolean(target.closest("button, input, select, textarea, a, label"));
}

function completedRowsMarkup(bookings, expandedBookingId) {
  if (!bookings.length) {
    return '<article class="request-card"><p class="muted">No completed appointments yet.</p></article>';
  }

  return bookings
    .map((booking, index) => {
      const bookingId = String(booking.id ?? "");
      const isExpanded = expandedBookingId === bookingId;
      const time = escapeHtml(formatTime(booking.appointmentAt ?? booking.createdAt));
      const date = escapeHtml(formatDate(booking.appointmentAt ?? booking.createdAt));
      const plate = escapeHtml(String(booking.licensePlate ?? "UNKNOWN").toUpperCase());
      const name = escapeHtml(customerName(booking, index));
      const phone = escapeHtml(customerPhone(booking));
      const message = escapeHtml(customerMessage(booking));

      return `
        <article class="request-card completed-card ${isExpanded ? "is-expanded" : ""}" data-booking-card-id="${escapeHtml(bookingId)}">
          <div class="request-card-head">
            <div class="request-main">
              <span class="plate-chip">${plate}</span>
              <div class="request-info">
                <p class="request-name">${name}</p>
                <p class="request-vehicle">${date}</p>
                <div class="request-services">${serviceChipsMarkup(booking.service)}</div>
              </div>
            </div>

            <div class="request-meta">
              <span class="request-time">${time}</span>
              <span class="status-chip status-chip-completed">Completed</span>
              <button class="request-toggle ${isExpanded ? "is-expanded" : ""}" type="button" data-completed-toggle="${escapeHtml(bookingId)}">${isExpanded ? "⌃" : "⌄"}</button>
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
                <button class="button danger" type="button" data-completed-action="delete" data-booking-id="${escapeHtml(bookingId)}">Delete</button>
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

export async function mountCompletedPage(rootElement) {
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
    activePage: "completed",
    title: "Completed Appointments",
    headerNote: "Review completed jobs from your queue",
    userEmail: authState.user.email,
    onLogout: logoutAndRedirect,
    garage: authState.activeGarage,
    isAdmin: authState.isAdmin,
  });

  rootElement.replaceChildren(shell);

  contentArea.innerHTML = `
    <section class="panel completed-board">
      <div class="panel-heading spread completed-board-head">
        <h3>Completed Appointments</h3>
        <p class="muted" id="completedSource"></p>
      </div>
      <div id="completedList" class="request-list"></div>
    </section>
  `;

  const listElement = contentArea.querySelector("#completedList");
  const sourceElement = contentArea.querySelector("#completedSource");
  let completedBookings = [];
  let expandedBookingId = "";

  const render = () => {
    if (expandedBookingId && !completedBookings.some((booking) => String(booking.id) === expandedBookingId)) {
      expandedBookingId = "";
    }

    listElement.innerHTML = completedRowsMarkup(completedBookings, expandedBookingId);
  };

  contentArea.addEventListener("click", async (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) {
      return;
    }

    const toggleButton = target.closest("[data-completed-toggle]");
    if (toggleButton instanceof HTMLElement) {
      const bookingId = String(toggleButton.dataset.completedToggle ?? "");
      expandedBookingId = expandedBookingId === bookingId ? "" : bookingId;
      render();
      return;
    }

    const actionButton = target.closest("[data-completed-action]");
    if (actionButton instanceof HTMLElement) {
      const action = String(actionButton.dataset.completedAction ?? "");
      const bookingId = String(actionButton.dataset.bookingId ?? "");
      if (!bookingId) {
        return;
      }

      const booking = completedBookings.find((item) => String(item.id) === bookingId);
      if (!booking) {
        return;
      }

      if (action === "delete") {
        try {
          await deleteBooking(booking);
        } catch (error) {
          window.alert(error instanceof Error ? error.message : "Unable to delete the appointment.");
          return;
        }

        completedBookings = completedBookings.filter((item) => String(item.id) !== bookingId);
        if (expandedBookingId === bookingId) {
          expandedBookingId = "";
        }
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
      render();
    }
  });

  try {
    const bookings = await getBookings({ garageIds });
    const emailSummary = summarizeEmailInbox(bookings);
    setUnreadEmailCount(emailSummary.unread);

    completedBookings = bookings
      .filter(isCompletedBooking)
      .sort(
        (left, right) =>
          new Date(right.appointmentAt ?? right.createdAt).getTime() -
          new Date(left.appointmentAt ?? left.createdAt).getTime(),
      );

    expandedBookingId = completedBookings[0] ? String(completedBookings[0].id) : "";
    render();

    sourceElement.textContent = authState.isAdmin
      ? "Completed appointments across all garages"
      : `Completed appointments for ${authState.activeGarage?.name ?? "your garage"}`;
  } catch (error) {
    listElement.innerHTML = '<article class="request-card"><p class="muted">Unable to load completed appointments.</p></article>';
    sourceElement.textContent = "Unable to load completed appointments.";
    setUnreadEmailCount(0);
    console.error(error);
  }
}
