import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/testdashboard/",
  build: {
    outDir: "docs", // <-- add this line
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        dashboard: resolve(__dirname, "dashboard.html"),
        calendar: resolve(__dirname, "calendar.html"),
        bookings: resolve(__dirname, "bookings.html"),
        completed: resolve(__dirname, "completed.html"),
        werkbon: resolve(__dirname, "werkbon.html"),
        werkbonArtikelen: resolve(__dirname, "werkbon-artikelen.html"),
        werkbonArtikelenMenu: resolve(__dirname, "werkbon-artikelen-menu.html"),
        werkbonArtikelenNieuw: resolve(__dirname, "werkbon-artikelen-nieuw.html"),
        werkbonArtikelenZoek: resolve(__dirname, "werkbon-artikelen-zoek.html"),
        werkbonArtikelenVind: resolve(__dirname, "werkbon-artikelen-vind.html"),
        werkbonArtikelenVindAlles: resolve(__dirname, "werkbon-artikelen-vind-alles.html"),
        werkbonArtikelenLijst: resolve(__dirname, "werkbon-artikelen-lijst.html"),
        werkbonArtikelenPrint: resolve(__dirname, "werkbon-artikelen-print.html"),
        werkbonArtikelenImport: resolve(__dirname, "werkbon-artikelen-import.html"),
        werkbonArtikelenInboeken: resolve(__dirname, "werkbon-artikelen-inboeken.html"),
        werkbonArtikelenWaarde: resolve(__dirname, "werkbon-artikelen-waarde.html"),
        werkbonArtikelenVerwijder: resolve(__dirname, "werkbon-artikelen-verwijder.html"),
        werkbonArtikelenEerste: resolve(__dirname, "werkbon-artikelen-eerste.html"),
        werkbonArtikelenVorige: resolve(__dirname, "werkbon-artikelen-vorige.html"),
        werkbonArtikelenVolgende: resolve(__dirname, "werkbon-artikelen-volgende.html"),
        werkbonArtikelenLaatste: resolve(__dirname, "werkbon-artikelen-laatste.html"),
        werkbonFacturen: resolve(__dirname, "werkbon-facturen.html"),
        werkbonOmzetBTW: resolve(__dirname, "werkbon-omzet-btw.html"),
        werkbonInstellingen: resolve(__dirname, "werkbon-instellingen.html"),
        werkbonDetail: resolve(__dirname, "werkbon-detail.html"),
        addAppointment: resolve(__dirname, "add-appointment.html"),
        emails: resolve(__dirname, "emails.html"),
        analytics: resolve(__dirname, "analytics.html"),
        settings: resolve(__dirname, "settings.html"),
        successPaid: resolve(__dirname, "success-paid.html"),
      },
    },
  },
});