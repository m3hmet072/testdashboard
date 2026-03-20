-- Schedule + completion tracking tables for garage dashboard
-- Run in Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists public.booking_schedule (
  booking_id uuid primary key references public.bookings (id) on delete cascade,
  garage_id uuid not null references public.garages (id) on delete cascade,
  appointment_date date not null,
  appointment_time time not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists booking_schedule_garage_date_time_idx
  on public.booking_schedule (garage_id, appointment_date, appointment_time);

create table if not exists public.completed_appointments (
  id uuid primary key default gen_random_uuid(),
  garage_id uuid not null references public.garages (id) on delete cascade,
  booking_id uuid references public.bookings (id) on delete set null,
  completed_at timestamptz not null default now(),
  appointment_date date,
  appointment_time time,
  license_plate text,
  service text,
  completion_notes text,
  created_at timestamptz not null default now()
);

create index if not exists completed_appointments_garage_completed_at_idx
  on public.completed_appointments (garage_id, completed_at desc);

create index if not exists completed_appointments_booking_id_idx
  on public.completed_appointments (booking_id);

create or replace view public.bookings_with_schedule as
select
  b.id,
  b.garage_id,
  b.license_plate,
  b.phone,
  b.service,
  b.message,
  b.created_at,
  bs.appointment_date,
  bs.appointment_time,
  case
    when bs.appointment_date is null or bs.appointment_time is null then null
    else ((bs.appointment_date::text || 'T' || to_char(bs.appointment_time, 'HH24:MI:SS'))::timestamp)
  end as appointment_at
from public.bookings b
left join public.booking_schedule bs
  on bs.booking_id = b.id;

-- Optional RLS starter (uncomment when enabling RLS)
-- alter table public.booking_schedule enable row level security;
-- alter table public.completed_appointments enable row level security;
--
-- create policy "garage_owner_select_schedule"
--   on public.booking_schedule
--   for select
--   using (
--     exists (
--       select 1
--       from public.garages g
--       where g.id = booking_schedule.garage_id
--         and g.user_id = auth.uid()
--     )
--   );
--
-- create policy "garage_owner_manage_schedule"
--   on public.booking_schedule
--   for all
--   using (
--     exists (
--       select 1
--       from public.garages g
--       where g.id = booking_schedule.garage_id
--         and g.user_id = auth.uid()
--     )
--   )
--   with check (
--     exists (
--       select 1
--       from public.garages g
--       where g.id = booking_schedule.garage_id
--         and g.user_id = auth.uid()
--     )
--   );
--
-- create policy "garage_owner_select_completed"
--   on public.completed_appointments
--   for select
--   using (
--     exists (
--       select 1
--       from public.garages g
--       where g.id = completed_appointments.garage_id
--         and g.user_id = auth.uid()
--     )
--   );
