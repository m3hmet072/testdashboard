import { createAppShell } from "../components/appShell.js";
import {
  createWerkbonForBooking,
  deleteBooking,
  deleteCompletedAppointment,
  getBookings,
  getCompletedAppointments,
  setWerkbonCreatedForCompletedAppointment,
} from "../services/bookingService.js";
import { summarizeEmailInbox } from "../services/emailService.js";
import { fetchVehicleByLicensePlate, normalizeLicensePlate } from "../services/rdwService.js";
import { ensureAuthenticated, logoutAndRedirect } from "../utils/auth.js";
import { applyGarageBranding } from "../utils/branding.js";
import { showConfirmDialog } from "../utils/confirmDialog.js";
import { assetUrl, pageUrl } from "../utils/paths.js";

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

function formatLicensePlate(plate) {
  const cleaned = String(plate ?? "").toUpperCase().replace(/[^A-Z0-9]/g, '');
  // Format as: XX-XX-XX (groups of 2 separated by dashes)
  return cleaned.replace(/(.{2})(?=.)/g, '$1-');
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
    .filter(Boolean);

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

function fallbackVehiclePreview(licensePlate = "") {
  const normalized = normalizeLicensePlate(licensePlate);
  return {
    title: normalized || "Unknown vehicle",
    buildYear: "",
  };
}

function completedRowsMarkup(bookings, expandedBookingId, vehicleCache) {
  if (!bookings.length) {
    return '<article class="request-card"><p class="muted">No completed appointments yet.</p></article>';
  }

  return bookings
    .map((booking, index) => {
      const bookingId = String(booking.id ?? "");
      const completedAppointmentId = escapeHtml(String(booking.completedAppointmentId ?? ""));
      const isExpanded = expandedBookingId === bookingId;
      const time = escapeHtml(formatTime(booking.appointmentAt ?? booking.createdAt));
      const date = escapeHtml(formatDate(booking.appointmentAt ?? booking.createdAt));
      const plate = escapeHtml(booking.licensePlate && booking.licensePlate !== "UNKNOWN" ? formatLicensePlate(booking.licensePlate) : "UNKNOWN");
      const name = escapeHtml(customerName(booking, index));
      const licensePlateKey = booking.licensePlate ? normalizeLicensePlate(booking.licensePlate) : "";
      const vehicleData = vehicleCache.get(licensePlateKey) || fallbackVehiclePreview(booking.licensePlate);
      const vehicle = vehicleData.buildYear && vehicleData.buildYear !== "—"
        ? `${vehicleData.title} (${vehicleData.buildYear})`
        : vehicleData.title;
      const phone = escapeHtml(customerPhone(booking));
      const message = escapeHtml(customerMessage(booking));
      const werkbonButtonText = booking.werkbonCreated ? "View Werkbon" : "Create Werkbon";
      const werkbonButtonClass = booking.werkbonCreated ? "button secondary" : "button";

      return `
        <article class="request-card completed-card ${isExpanded ? "is-expanded" : ""}" data-booking-card-id="${escapeHtml(bookingId)}">
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
              <div class="time-done-box">
              <span class="status-chip status-chip-completed">Done</span>
              <span class="request-time">${time}</span>
              </div>
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
                <button class="${werkbonButtonClass}" type="button" data-completed-action="create-werkbon" data-booking-id="${escapeHtml(bookingId)}" data-completed-appointment-id="${completedAppointmentId}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.33203V14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M1.33203 8H14.668" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
${werkbonButtonText}</button>
                <button class="button danger" type="button" data-completed-action="delete" data-booking-id="${escapeHtml(bookingId)}" data-completed-appointment-id="${completedAppointmentId}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3.66797L12.5869 10.3514C12.4813 12.0589 12.4285 12.9127 12.0005 13.5266C11.7889 13.83 11.5165 14.0862 11.2005 14.2786C10.5614 14.668 9.706 14.668 7.99513 14.668C6.28208 14.668 5.42553 14.668 4.78603 14.2779C4.46987 14.0851 4.19733 13.8285 3.98579 13.5245C3.55792 12.9097 3.5063 12.0547 3.40307 10.3448L3 3.66797" stroke="white" stroke-linecap="round"/>
<path d="M2 3.66536H14M10.7038 3.66536L10.2487 2.72652C9.9464 2.10287 9.7952 1.79104 9.53447 1.59657C9.47667 1.55343 9.4154 1.51506 9.35133 1.48183C9.0626 1.33203 8.71607 1.33203 8.023 1.33203C7.31253 1.33203 6.95733 1.33203 6.66379 1.48811C6.59873 1.5227 6.53665 1.56263 6.47819 1.60748C6.21443 1.80983 6.06709 2.13306 5.77241 2.77954L5.36861 3.66536" stroke="white" stroke-linecap="round"/>
<path d="M6.3335 11V7" stroke="white" stroke-linecap="round"/>
<path d="M9.6665 11V7" stroke="white" stroke-linecap="round"/>
</svg>
Delete</button>
                
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
      <div id="completedList" class="request-list"></div>
    </section>
  `;

  const listElement = contentArea.querySelector("#completedList");
  let completedBookings = [];
  let expandedBookingId = "";
  const vehicleCache = new Map();

  const render = () => {
    if (expandedBookingId && !completedBookings.some((booking) => String(booking.id) === expandedBookingId)) {
      expandedBookingId = "";
    }

    listElement.innerHTML = completedRowsMarkup(completedBookings, expandedBookingId, vehicleCache);
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

      if (action === "create-werkbon") {
        const completedAppointmentId = String(actionButton.dataset.completedAppointmentId ?? "");

        // Existing completed row: mark as werkbon-created first
        if (completedAppointmentId) {
          let updatedId = "";
          try {
            updatedId = String(await setWerkbonCreatedForCompletedAppointment({
              completedAppointmentId,
              garageId: booking.garageId,
            }, { created: true }) ?? "");
          } catch (error) {
            window.alert(error instanceof Error ? error.message : "Unable to create a werkbon for this appointment.");
            return;
          }
          if (!updatedId) {
            window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");
            return;
          }
          // Update booking state and re-render before navigating
          booking.werkbonCreated = true;
          render();
          // Small delay to ensure Supabase update fully propagates before page load
          setTimeout(() => {
            window.location.href = pageUrl("werkbon.html");
          }, 300);
          return;
        }

        // Workflow-only booking: create the completed_appointments row first.
        // Only navigate after a successful creation so Werkbon shows it.
        let createdWerkbonId = "";
        try {
          createdWerkbonId = String(await createWerkbonForBooking(booking) ?? "");
        } catch (error) {
          window.alert(error instanceof Error ? error.message : "Unable to create a werkbon for this appointment.");
          return;
        }

        if (!createdWerkbonId) {
          window.alert("Unable to create a werkbon for this appointment. Check Supabase/RLS and try again.");
          return;
        }

        // Update booking state and re-render before navigating
        booking.werkbonCreated = true;
        render();
        // Small delay to ensure Supabase update fully propagates before page load
        setTimeout(() => {
          window.location.href = pageUrl("werkbon.html");
        }, 300);
        return;
      }

      if (action === "delete") {
        event.stopPropagation();
        const completedAppointmentId = String(actionButton.dataset.completedAppointmentId ?? "");
        const confirmed = await showConfirmDialog(
          "Are you sure you want to delete this appointment? This action cannot be undone.",
          "Delete Appointment",
        );
        if (!confirmed) {
          return;
        }

        try {
          if (completedAppointmentId) {
            // Supabase item - delete from database
            await deleteCompletedAppointment({
              completedAppointmentId,
              garageId: booking.garageId,
              bookingId: booking.bookingId || booking.id,
            });
          } else {
            // Workflow-only item - delete from local storage
            await deleteBooking(booking);
          }
        } catch (error) {
          window.alert(error instanceof Error ? error.message : "Unable to delete the appointment.");
          return;
        }

        // Remove from UI immediately
        completedBookings = completedBookings.filter((item) => String(item.id) !== bookingId);
        if (expandedBookingId === bookingId) {
          expandedBookingId = "";
        }
        render();
        return;
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

    const completedFromSupabase = await getCompletedAppointments({ garageIds });
    // Build a set of all IDs already represented in Supabase to avoid duplicates
    const supabaseIdSet = new Set(
      completedFromSupabase.flatMap((b) =>
        [b.id, b.bookingId, b.completedAppointmentId].filter(Boolean)
      )
    );
    const workflowOnly = bookings
      .filter(isCompletedBooking)
      .filter((b) => !supabaseIdSet.has(String(b.id ?? "")));
    completedBookings = [...completedFromSupabase, ...workflowOnly]
      .sort(
        (left, right) =>
          new Date(right.appointmentAt ?? right.createdAt).getTime() -
          new Date(left.appointmentAt ?? left.createdAt).getTime(),
      );

    // Fetch vehicle data for all unique license plates
    const uniqueLicensePlates = new Set(
      completedBookings
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

    expandedBookingId = completedBookings[0] ? String(completedBookings[0].id) : "";
    render();
  } catch (error) {
    listElement.innerHTML = '<article class="request-card"><p class="muted">Unable to load completed appointments.</p></article>';
    setUnreadEmailCount(0);
    console.error(error);
  }
}
