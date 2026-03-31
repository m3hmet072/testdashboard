const RDW_VEHICLE_ENDPOINT = "https://opendata.rdw.nl/resource/m9d7-ebf2.json";
const RDW_FUEL_ENDPOINT = "https://opendata.rdw.nl/resource/8ys7-d773.json";

function toSafeText(value, fallback = "") {
  const text = String(value || "").trim();
  return text || fallback;
}

function parseRdwDate(rawValue) {
  const value = String(rawValue || "").trim();
  if (!/^\d{8}$/.test(value)) {
    return null;
  }

  const year = Number(value.slice(0, 4));
  const month = Number(value.slice(4, 6));
  const day = Number(value.slice(6, 8));
  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatRdwDate(rawValue) {
  const date = parseRdwDate(rawValue);
  if (!date) {
    return "Onbekend";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}-${month}-${year}`;
}

function buildQuery(params) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      return;
    }

    query.set(key, String(value));
  });

  return query.toString();
}

async function fetchRdwRows(endpoint, params, signal) {
  const query = buildQuery(params);
  const response = await fetch(`${endpoint}?${query}`, {
    signal,
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`RDW request failed with status ${response.status}`);
  }

  const payload = await response.json();
  return Array.isArray(payload) ? payload : [];
}

export function normalizeLicensePlate(value) {
  return String(value ?? "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

export async function fetchVehicleByLicensePlate(licensePlate, { signal } = {}) {
  const normalizedPlate = normalizeLicensePlate(licensePlate);
  if (normalizedPlate.length < 6) {
    return null;
  }

  const [vehicleRow] = await fetchRdwRows(
    RDW_VEHICLE_ENDPOINT,
    {
      kenteken: normalizedPlate,
      $limit: 1,
    },
    signal,
  );

  if (!vehicleRow) {
    return null;
  }

  let fuelRow = null;
  try {
    [fuelRow] = await fetchRdwRows(
      RDW_FUEL_ENDPOINT,
      {
        kenteken: normalizedPlate,
        $limit: 1,
      },
      signal,
    );
  } catch {
    fuelRow = null;
  }

  const make = toSafeText(vehicleRow.merk, "Onbekend merk");
  const model = toSafeText(vehicleRow.handelsbenaming || vehicleRow.inrichting);
  const firstRegistration = parseRdwDate(vehicleRow.datum_eerste_toelating);

  return {
    title: [make, model].filter(Boolean).join(" ") || normalizedPlate,
    buildYear: firstRegistration ? String(firstRegistration.getFullYear()) : "Onbekend",
    apkExpiryDate: formatRdwDate(vehicleRow.vervaldatum_apk),
    color: toSafeText(vehicleRow.eerste_kleur, "Onbekend"),
    fuel: toSafeText(fuelRow && fuelRow.brandstof_omschrijving, "Onbekend"),
  };
}
