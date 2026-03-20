function toLocalDateKey(value) {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function buildMonthCalendar(monthDate, bookings) {
  const firstDay = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const lastDay = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
  const daysInMonth = lastDay.getDate();

  const bookingsByDay = bookings.reduce((map, booking) => {
    const key = toLocalDateKey(booking.createdAt);
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(booking);
    return map;
  }, {});

  const cells = [];

  for (let index = 0; index < firstDay.getDay(); index += 1) {
    cells.push({ date: null, bookings: [] });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(firstDay.getFullYear(), firstDay.getMonth(), day);
    const key = toLocalDateKey(date);

    cells.push({
      date,
      bookings: bookingsByDay[key] ?? [],
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push({ date: null, bookings: [] });
  }

  return {
    monthLabel: firstDay.toLocaleString(undefined, {
      month: "long",
      year: "numeric",
    }),
    weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    cells,
  };
}
