import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        dashboard: resolve(__dirname, "dashboard.html"),
        calendar: resolve(__dirname, "calendar.html"),
        bookings: resolve(__dirname, "bookings.html"),
        completed: resolve(__dirname, "completed.html"),
        werkbon: resolve(__dirname, "werkbon.html"),
          werkbonDetail: resolve(__dirname, "werkbon-detail.html"),
        addAppointment: resolve(__dirname, "add-appointment.html"),
        emails: resolve(__dirname, "emails.html"),
        analytics: resolve(__dirname, "analytics.html"),
      },
    },
  },
});
