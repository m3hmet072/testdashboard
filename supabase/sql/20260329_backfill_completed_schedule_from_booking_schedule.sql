-- Backfill completed_appointments appointment_date/time from booking_schedule
-- Use this once if old completed rows show 00:00 or missing schedule data.

update public.completed_appointments ca
set
  appointment_date = bs.appointment_date,
  appointment_time = bs.appointment_time
from public.booking_schedule bs
where ca.booking_id = bs.booking_id
  and ca.garage_id = bs.garage_id
  and (
    ca.appointment_date is null
    or ca.appointment_time is null
    or ca.appointment_time = time '00:00:00'
  );
