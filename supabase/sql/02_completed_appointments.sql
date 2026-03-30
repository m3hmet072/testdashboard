-- ============================================================
-- STEP 2 — Completed Appointments
-- ============================================================
-- Run AFTER step 1 (01_bookings.sql).
-- Safe to re-run (all statements are idempotent).
--
-- This table is the central store for every appointment that
-- was marked as "done". It also carries the full werkbon /
-- invoice data inside the completion_notes JSON column.
-- The werkbon detail page reads from and writes to this table.
-- ============================================================

-- ------------------------------------------------------------
-- completed_appointments
-- ------------------------------------------------------------
create table if not exists public.completed_appointments (
  id               uuid        primary key default gen_random_uuid(),
  garage_id        uuid        not null references public.garages (id) on delete cascade,

  -- The original booking that was completed (nullable: may not exist
  -- for manually-created werkbonnen).
  booking_id       uuid        references public.bookings (id) on delete set null,

  -- When the work was finished
  completed_at     timestamptz not null default now(),

  -- Appointment slot (copied from booking_schedule at completion time)
  appointment_date date,
  appointment_time time,

  -- Quick-access columns (also stored inside completion_notes)
  license_plate    text,
  service          text,

  -- Full werkbon / invoice payload stored as JSON.
  -- Shape written by the dashboard:
  -- {
  --   "status":         "draft" | "sent" | "paid",
  --   "invoice_number": "WB-1001",
  --   "customer_name":  "...",
  --   "customer_phone": "...",
  --   "customer_email": "...",
  --   "car_model":      "...",
  --   "km_stand":       0,
  --   "vat_enabled":    true,
  --   "service_types":  ["APK", "Onderhoud"],
  --   "parts":          [{ "name": "...", "quantity": 1, "price": 0 }],
  --   "labour":         { "hours": 0, "rate": 0 },
  --   "totals":         { "subtotal": 0, "vat": 0, "total": 0 },
  --   "paid_at":        null,
  --   "internal_note":  "",
  --   "completed_at":   "2026-03-29T..."
  -- }
  completion_notes text,

  created_at       timestamptz not null default now()
);

create index if not exists completed_appointments_garage_completed_at_idx
  on public.completed_appointments (garage_id, completed_at desc);

create index if not exists completed_appointments_booking_id_idx
  on public.completed_appointments (booking_id);

-- ------------------------------------------------------------
-- Trigger: automatically mark the linked booking as 'done'
-- in the bookings table the moment a completed_appointments
-- row is inserted from the dashboard.
-- ------------------------------------------------------------
create or replace function public.fn_booking_mark_done()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.booking_id is not null then
    update public.bookings
    set    status = 'done'
    where  id = new.booking_id
      and  status <> 'done';   -- no-op if already done
  end if;
  return new;
end;
$$;

drop trigger if exists trg_booking_mark_done on public.completed_appointments;

create trigger trg_booking_mark_done
  after insert on public.completed_appointments
  for each row
  execute function public.fn_booking_mark_done();

-- ============================================================
-- Row Level Security
-- ============================================================

alter table public.completed_appointments enable row level security;

drop policy if exists completed_owner_select on public.completed_appointments;
drop policy if exists completed_owner_insert on public.completed_appointments;
drop policy if exists completed_owner_update on public.completed_appointments;
drop policy if exists completed_owner_delete on public.completed_appointments;

create policy completed_owner_select
  on public.completed_appointments for select to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = completed_appointments.garage_id
        and g.user_id = auth.uid()
    )
  );

create policy completed_owner_insert
  on public.completed_appointments for insert to authenticated
  with check (
    exists (
      select 1 from public.garages g
      where g.id = completed_appointments.garage_id
        and g.user_id = auth.uid()
    )
  );

create policy completed_owner_update
  on public.completed_appointments for update to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = completed_appointments.garage_id
        and g.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.garages g
      where g.id = completed_appointments.garage_id
        and g.user_id = auth.uid()
    )
  );

create policy completed_owner_delete
  on public.completed_appointments for delete to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = completed_appointments.garage_id
        and g.user_id = auth.uid()
    )
  );

-- ============================================================
-- Grants
-- ============================================================
grant select, insert, update, delete on public.completed_appointments to authenticated;
