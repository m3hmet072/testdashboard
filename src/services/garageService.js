import { fetchGaragesByUser } from "./supabaseClient.js";

function normalizeGarage(garage) {
  return {
    id: garage.id,
    name: garage.name ?? "Garage",
    domain: garage.domain ?? "",
    analyticsPropertyId: garage.analytics_property_id ?? null,
    logoUrl: garage.logo_url ?? "",
    userId: garage.user_id ?? "",
    paymentLink: garage.payment_link ?? null,
    mollieMethod: String(garage.mollie_method ?? "none"),
    paymentDays: typeof garage.payment_days === "number" ? garage.payment_days : (parseInt(String(garage.payment_days ?? "14"), 10) || 14),
    garageName: String(garage.garage_name || garage.name || "Garage"),
  };
}

export function isAdminUser(user) {
  const allowedAdminEmails = String(import.meta.env.VITE_ADMIN_EMAILS ?? "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  const email = String(user?.email ?? "").toLowerCase();
  const roleFromMetadata =
    user?.app_metadata?.role ?? user?.user_metadata?.role ?? "";

  return roleFromMetadata === "admin" || allowedAdminEmails.includes(email);
}

export async function resolveGarageContextForUser(user) {
  const includeAll = isAdminUser(user);
  const garages = (await fetchGaragesByUser({
    userId: user.id,
    includeAll,
  })).map(normalizeGarage);

  return {
    garages,
    activeGarage: garages[0] ?? null,
    isAdmin: includeAll,
  };
}
