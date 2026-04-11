const STORAGE_KEY = "garage-dashboard.werkbon-module.v1";

const DEFAULT_STATE = {
  settings: {
    invoicePrefix: "F-",
    invoiceStartNumber: 1001,
    defaultBTW: 21,
    companyName: "Garage Dashboard",
    address: "",
    kvkNumber: "",
    btwNumber: "",
    logoDataUrl: "",
    language: "NL",
    hourlyRate: 75,
    paymentTermDays: 14,
  },
  artikelen: [
    {
      id: "art-1",
      artikelnummer: "A-1001",
      naam: "Motorolie 5W30",
      prijsInclBTW: 49.95,
      btwPercentage: 21,
      updatedAt: new Date().toISOString(),
    },
    {
      id: "art-2",
      artikelnummer: "A-1002",
      naam: "Remblokken voor",
      prijsInclBTW: 139.0,
      btwPercentage: 21,
      updatedAt: new Date().toISOString(),
    },
    {
      id: "art-3",
      artikelnummer: "S-2001",
      naam: "APK keuring",
      prijsInclBTW: 45.0,
      btwPercentage: 9,
      updatedAt: new Date().toISOString(),
    },
  ],
  werkbonnen: [
    {
      id: "wb-1",
      werkbonNummer: "WB-2026-001",
      klantnaam: "Autoservice House",
      datum: new Date().toISOString().slice(0, 10),
      totaalInclBTW: 420.0,
      btwPercentage: 21,
      convertedToInvoiceId: "",
    },
    {
      id: "wb-2",
      werkbonNummer: "WB-2026-002",
      klantnaam: "M. Babacanoglu",
      datum: new Date().toISOString().slice(0, 10),
      totaalInclBTW: 185.0,
      btwPercentage: 21,
      convertedToInvoiceId: "",
    },
  ],
  facturen: [
    {
      id: "inv-1",
      factuurnummer: "F-2026-011",
      klantnaam: "Yildiz Trading",
      datum: new Date().toISOString().slice(0, 10),
      status: "betaald",
      totaalInclBTW: 610.0,
      btwPercentage: 21,
      bronWerkbonId: "",
      createdAt: new Date().toISOString(),
      paidAt: new Date().toISOString(),
    },
  ],
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function readState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return clone(DEFAULT_STATE);
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return clone(DEFAULT_STATE);
    }

    return {
      ...clone(DEFAULT_STATE),
      ...parsed,
      settings: {
        ...clone(DEFAULT_STATE.settings),
        ...(parsed.settings ?? {}),
      },
      artikelen: Array.isArray(parsed.artikelen)
        ? parsed.artikelen.map((artikel) => normalizeArtikel(artikel, parsed?.settings?.defaultBTW ?? 21))
        : clone(DEFAULT_STATE.artikelen).map((artikel) => normalizeArtikel(artikel, 21)),
      werkbonnen: Array.isArray(parsed.werkbonnen) ? parsed.werkbonnen : clone(DEFAULT_STATE.werkbonnen),
      facturen: Array.isArray(parsed.facturen) ? parsed.facturen : clone(DEFAULT_STATE.facturen),
    };
  } catch {
    return clone(DEFAULT_STATE);
  }
}

function formatNumber(value, fallback = 0) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}

function makeId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getMonthKey(dateValue) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function getWeekKey(dateValue) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  const oneJan = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((date - oneJan) / 86400000) + 1;
  const week = Math.ceil(dayOfYear / 7);
  return `${date.getFullYear()}-W${String(week).padStart(2, "0")}`;
}

function normalizeDate(dateValue) {
  if (!dateValue) {
    return "";
  }

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toISOString().slice(0, 10);
}

function normalizeArtikel(rawArtikel = {}, defaultBTW = 21) {
  const beginBalans = formatNumber(rawArtikel.beginBalans, 0);
  const aantalUitgegaan = formatNumber(rawArtikel.aantalUitgegaan, 0);
  const aantalIngekomen = formatNumber(rawArtikel.aantalIngekomen, 0);
  const eindBalans = beginBalans + aantalIngekomen - aantalUitgegaan;
  const inkoopprijs = formatNumber(rawArtikel.inkoopprijs, 0);
  const verkoopprijs = formatNumber(rawArtikel.verkoopprijs ?? rawArtikel.prijsInclBTW, 0);
  const margeAuto = inkoopprijs > 0 ? ((verkoopprijs - inkoopprijs) / inkoopprijs) * 100 : 0;

  return {
    id: String(rawArtikel.id ?? "").trim() || makeId("art"),
    artikelnummer: String(rawArtikel.artikelnummer ?? "").trim(),
    naam: String(rawArtikel.naam ?? "").trim(),
    omschrijving: String(rawArtikel.omschrijving ?? "").trim(),
    leverancier: String(rawArtikel.leverancier ?? "").trim(),
    locatie: String(rawArtikel.locatie ?? "").trim(),
    eenheid: String(rawArtikel.eenheid ?? "").trim(),
    inkoopprijs,
    verkoopprijs,
    beginBalans,
    aantalUitgegaan,
    aantalIngekomen,
    eindBalans: formatNumber(rawArtikel.eindBalans, eindBalans),
    verpakkingseenheid: String(rawArtikel.verpakkingseenheid ?? "").trim(),
    marge: formatNumber(rawArtikel.marge, margeAuto),
    btwPercentage: formatNumber(rawArtikel.btwPercentage, defaultBTW),
    minimaleVoorraad: formatNumber(rawArtikel.minimaleVoorraad, 0),
    opmerking: String(rawArtikel.opmerking ?? "").trim(),
    prijsInclBTW: verkoopprijs,
    updatedAt: rawArtikel.updatedAt ?? new Date().toISOString(),
  };
}

export function createWerkbonStore() {
  let state = readState();
  const subscribers = new Set();

  const notify = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage write failures.
    }

    subscribers.forEach((subscriber) => subscriber(clone(state)));
  };

  const getState = () => clone(state);

  const subscribe = (subscriber) => {
    if (typeof subscriber !== "function") {
      return () => {};
    }

    subscribers.add(subscriber);
    return () => subscribers.delete(subscriber);
  };

  const upsertArtikel = (artikelInput) => {
    const id = String(artikelInput.id ?? "").trim() || makeId("art");
    const nextArtikel = normalizeArtikel(
      {
        ...artikelInput,
        id,
        updatedAt: new Date().toISOString(),
      },
      state.settings.defaultBTW,
    );

    const existingIndex = state.artikelen.findIndex((item) => item.id === id);
    if (existingIndex >= 0) {
      state.artikelen[existingIndex] = nextArtikel;
    } else {
      state.artikelen.unshift(nextArtikel);
    }

    notify();
    return nextArtikel;
  };

  const deleteArtikel = (artikelId) => {
    const id = String(artikelId ?? "").trim();
    if (!id) {
      return;
    }

    state.artikelen = state.artikelen.filter((item) => item.id !== id);
    notify();
  };

  const getNextFactuurnummer = () => {
    const prefix = String(state.settings.invoicePrefix ?? "F-").trim() || "F-";
    let maxSeen = formatNumber(state.settings.invoiceStartNumber, 1001) - 1;

    state.facturen.forEach((factuur) => {
      const numberPart = String(factuur.factuurnummer ?? "").replace(prefix, "");
      const numeric = parseInt(numberPart.replace(/[^0-9]/g, ""), 10);
      if (Number.isFinite(numeric)) {
        maxSeen = Math.max(maxSeen, numeric);
      }
    });

    return `${prefix}${maxSeen + 1}`;
  };

  const createManualFactuur = ({ klantnaam, datum, totaalInclBTW, btwPercentage }) => {
    const invoice = {
      id: makeId("inv"),
      factuurnummer: getNextFactuurnummer(),
      klantnaam: String(klantnaam ?? "").trim() || "Onbekende klant",
      datum: normalizeDate(datum) || new Date().toISOString().slice(0, 10),
      status: "concept",
      totaalInclBTW: formatNumber(totaalInclBTW, 0),
      btwPercentage: formatNumber(btwPercentage, state.settings.defaultBTW),
      bronWerkbonId: "",
      createdAt: new Date().toISOString(),
      paidAt: "",
    };

    state.facturen.unshift(invoice);
    notify();
    return invoice;
  };

  const convertWerkbonToFactuur = (werkbonId) => {
    const id = String(werkbonId ?? "").trim();
    if (!id) {
      return null;
    }

    const werkbon = state.werkbonnen.find((item) => item.id === id);
    if (!werkbon || werkbon.convertedToInvoiceId) {
      return null;
    }

    const invoice = {
      id: makeId("inv"),
      factuurnummer: getNextFactuurnummer(),
      klantnaam: werkbon.klantnaam,
      datum: werkbon.datum,
      status: "concept",
      totaalInclBTW: formatNumber(werkbon.totaalInclBTW, 0),
      btwPercentage: formatNumber(werkbon.btwPercentage, state.settings.defaultBTW),
      bronWerkbonId: werkbon.id,
      createdAt: new Date().toISOString(),
      paidAt: "",
    };

    state.facturen.unshift(invoice);
    werkbon.convertedToInvoiceId = invoice.id;

    notify();
    return invoice;
  };

  const updateFactuurStatus = (factuurId, status) => {
    const id = String(factuurId ?? "").trim();
    if (!id) {
      return;
    }

    state.facturen = state.facturen.map((factuur) => {
      if (factuur.id !== id) {
        return factuur;
      }

      const nextStatus = String(status ?? factuur.status).trim().toLowerCase();
      return {
        ...factuur,
        status: nextStatus,
        paidAt: nextStatus === "betaald" ? new Date().toISOString() : factuur.paidAt,
      };
    });

    notify();
  };

  const saveSettings = (partialSettings) => {
    state.settings = {
      ...state.settings,
      ...partialSettings,
      defaultBTW: formatNumber(partialSettings.defaultBTW ?? state.settings.defaultBTW, 21),
      hourlyRate: formatNumber(partialSettings.hourlyRate ?? state.settings.hourlyRate, 75),
      paymentTermDays: formatNumber(partialSettings.paymentTermDays ?? state.settings.paymentTermDays, 14),
      invoiceStartNumber: formatNumber(
        partialSettings.invoiceStartNumber ?? state.settings.invoiceStartNumber,
        1001,
      ),
    };

    notify();
  };

  const getOmzetBTWOverview = ({ range = "this-month", startDate = "", endDate = "" } = {}) => {
    const now = new Date();

    const from =
      range === "last-month"
        ? new Date(now.getFullYear(), now.getMonth() - 1, 1)
        : range === "custom" && startDate
          ? new Date(startDate)
          : new Date(now.getFullYear(), now.getMonth(), 1);

    const to =
      range === "last-month"
        ? new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999)
        : range === "custom" && endDate
          ? new Date(`${endDate}T23:59:59.999`)
          : new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

    const filteredPaid = state.facturen.filter((factuur) => {
      if (factuur.status !== "betaald") {
        return false;
      }

      const date = new Date(factuur.datum);
      if (Number.isNaN(date.getTime())) {
        return false;
      }

      return date >= from && date <= to;
    });

    const omzet = filteredPaid.reduce((sum, invoice) => sum + formatNumber(invoice.totaalInclBTW, 0), 0);

    const btwBreakdown = {
      21: 0,
      9: 0,
      0: 0,
    };

    filteredPaid.forEach((invoice) => {
      const rate = String(formatNumber(invoice.btwPercentage, 21));
      const total = formatNumber(invoice.totaalInclBTW, 0);
      const vatPart = total - total / (1 + formatNumber(invoice.btwPercentage, 0) / 100);

      if (rate === "21") {
        btwBreakdown[21] += vatPart;
      } else if (rate === "9") {
        btwBreakdown[9] += vatPart;
      } else {
        btwBreakdown[0] += 0;
      }
    });

    const totalBtw = btwBreakdown[21] + btwBreakdown[9] + btwBreakdown[0];

    const monthly = {};
    const weekly = {};

    filteredPaid.forEach((invoice) => {
      const monthKey = getMonthKey(invoice.datum);
      const weekKey = getWeekKey(invoice.datum);
      monthly[monthKey] = (monthly[monthKey] ?? 0) + formatNumber(invoice.totaalInclBTW, 0);
      weekly[weekKey] = (weekly[weekKey] ?? 0) + formatNumber(invoice.totaalInclBTW, 0);
    });

    return {
      omzet,
      btw: totalBtw,
      aantalFacturen: filteredPaid.length,
      btwBreakdown,
      monthly,
      weekly,
      from: normalizeDate(from),
      to: normalizeDate(to),
    };
  };

  const getOpenWerkbonnen = () => state.werkbonnen.filter((item) => !item.convertedToInvoiceId);

  return {
    getState,
    subscribe,
    upsertArtikel,
    deleteArtikel,
    createManualFactuur,
    convertWerkbonToFactuur,
    updateFactuurStatus,
    saveSettings,
    getOmzetBTWOverview,
    getOpenWerkbonnen,
  };
}
