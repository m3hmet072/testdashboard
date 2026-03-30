-- ============================================================
-- STEP 1 — Bookings (incoming appointments)
-- ============================================================
-- Run this FIRST in the Supabase SQL editor.
-- Requires: garages table already exists.
-- Safe to re-run (all statements are idempotent).
-- ============================================================

create extension if not exists pgcrypto;

-- ------------------------------------------------------------
-- bookings
-- Every appointment / service request that comes in.
-- ------------------------------------------------------------
create table if not exists public.bookings (
  id            uuid        primary key default gen_random_uuid(),
  garage_id     uuid        not null references public.garages (id) on delete cascade,
  license_plate text        not null,
  phone         text,
  service       text        not null,
  message       text,
  -- 'form' = submitted via website contact form
  -- 'manual' = added by garage owner from dashboard
  -- 'email' = converted from inbox
  source        text        not null default 'form',
  -- 'new' = just received, not yet in appointments board
  -- 'confirmed' = scheduled in calendar
  -- 'done' = completed, moved to completed_appointments
  status        text        not null default 'new',
  created_at    timestamptz not null default now()
);

create index if not exists bookings_garage_id_created_at_idx
  on public.bookings (garage_id, created_at desc);

create index if not exists bookings_garage_id_status_idx
  on public.bookings (garage_id, status);

-- ------------------------------------------------------------
-- booking_schedule
-- Optional scheduled date + time linked to a booking.
-- One row per booking (upserted when a date is picked).
-- ------------------------------------------------------------
create table if not exists public.booking_schedule (
  booking_id       uuid  primary key references public.bookings (id) on delete cascade,
  garage_id        uuid  not null references public.garages (id) on delete cascade,
  appointment_date date  not null,
  appointment_time time  not null,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index if not exists booking_schedule_garage_date_time_idx
  on public.booking_schedule (garage_id, appointment_date, appointment_time);

-- ------------------------------------------------------------
-- bookings_with_schedule view
-- Used by the dashboard to show date + time alongside bookings.
-- ------------------------------------------------------------
create or replace view public.bookings_with_schedule as
select
  b.id,
  b.garage_id,
  b.license_plate,
  b.phone,
  b.service,
  b.message,
  b.source,
  b.status,
  b.created_at,
  bs.appointment_date,
  bs.appointment_time,
  case
    when bs.appointment_date is null or bs.appointment_time is null then null
    else (
      (bs.appointment_date::text || 'T' || to_char(bs.appointment_time, 'HH24:MI:SS'))::timestamp
    )
  end as appointment_at
from public.bookings b
left join public.booking_schedule bs on bs.booking_id = b.id;

-- ============================================================
-- Row Level Security
-- ============================================================

alter table public.garages          enable row level security;
alter table public.bookings         enable row level security;
alter table public.booking_schedule enable row level security;

-- Drop old policies so re-running is safe
drop policy if exists garages_owner_select          on public.garages;
drop policy if exists garages_owner_update          on public.garages;
drop policy if exists bookings_owner_select         on public.bookings;
drop policy if exists bookings_owner_insert         on public.bookings;
drop policy if exists bookings_owner_update         on public.bookings;
drop policy if exists bookings_owner_delete         on public.bookings;
drop policy if exists bookings_anon_insert          on public.bookings;
drop policy if exists schedule_owner_all            on public.booking_schedule;

-- Garage owners: read & update only their own garage row
create policy garages_owner_select
  on public.garages for select to authenticated
  using (user_id = auth.uid());

create policy garages_owner_update
  on public.garages for update to authenticated
  using  (user_id = auth.uid())
  with check (user_id = auth.uid());

-- Garage owners: full access to bookings that belong to their garage
create policy bookings_owner_select
  on public.bookings for select to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id
        and g.user_id = auth.uid()
    )
  );

create policy bookings_owner_insert
  on public.bookings for insert to authenticated
  with check (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id
        and g.user_id = auth.uid()
    )
  );

create policy bookings_owner_update
  on public.bookings for update to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id
        and g.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id
        and g.user_id = auth.uid()
    )
  );

create policy bookings_owner_delete
  on public.bookings for delete to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id
        and g.user_id = auth.uid()
    )
  );

-- Anonymous users (website contact form): allowed to INSERT new bookings
create policy bookings_anon_insert
  on public.bookings for insert to anon
  with check (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id
    )
  );

-- Garage owners: full access to their booking schedule rows
create policy schedule_owner_all
  on public.booking_schedule for all to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = booking_schedule.garage_id
        and g.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.garages g
      where g.id = booking_schedule.garage_id
        and g.user_id = auth.uid()
    )
  );

-- ============================================================
-- Grants
-- ============================================================
grant usage on schema public to anon, authenticated;

grant select                        on public.garages                 to authenticated;
grant select, insert, update, delete on public.bookings               to authenticated;
grant insert                        on public.bookings                to anon;
grant select, insert, update, delete on public.booking_schedule       to authenticated;
grant select                        on public.bookings_with_schedule  to authenticated;
