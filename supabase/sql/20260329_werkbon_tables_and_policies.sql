-- Werkbon real-data tables + RLS policies
-- Run this in Supabase SQL editor.

create extension if not exists pgcrypto;

-- Keep invoice counter on garages for stable invoice numbers.
alter table if exists public.garages
  add column if not exists invoice_sequence bigint not null default 1000;

-- Core completion/work-order storage used by werkbon detail page.
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

-- Optional helper view for easier BI/reporting.
create or replace view public.werkbon_overview as
select
  ca.id,
  ca.garage_id,
  ca.booking_id,
  ca.completed_at,
  ca.appointment_date,
  ca.appointment_time,
  ca.license_plate,
  ca.service,
  ca.completion_notes,
  ca.created_at
from public.completed_appointments ca;

-- ------------------------------------------------------------
-- RLS: required to avoid 42501 when writing from dashboard app
-- ------------------------------------------------------------

alter table public.garages enable row level security;
alter table public.completed_appointments enable row level security;

-- Clear old policies safely.
drop policy if exists garages_owner_select on public.garages;
drop policy if exists garages_owner_update on public.garages;
drop policy if exists completed_owner_select on public.completed_appointments;
drop policy if exists completed_owner_insert on public.completed_appointments;
drop policy if exists completed_owner_update on public.completed_appointments;
drop policy if exists completed_owner_delete on public.completed_appointments;

-- Garage owner can read and update only their own garage row.
create policy garages_owner_select
  on public.garages
  for select
  to authenticated
  using (user_id = auth.uid());

create policy garages_owner_update
  on public.garages
  for update
  to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- Garage owner can read/write completed appointments for their own garage only.
create policy completed_owner_select
  on public.completed_appointments
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.garages g
      where g.id = completed_appointments.garage_id
        and g.user_id = auth.uid()
    )
  );

create policy completed_owner_insert
  on public.completed_appointments
  for insert
  to authenticated
  with check (
    exists (
      select 1
      from public.garages g
      where g.id = completed_appointments.garage_id
        and g.user_id = auth.uid()
    )
  );

create policy completed_owner_update
  on public.completed_appointments
  for update
  to authenticated
  using (
    exists (
      select 1
      from public.garages g
      where g.id = completed_appointments.garage_id
        and g.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.garages g
      where g.id = completed_appointments.garage_id
        and g.user_id = auth.uid()
    )
  );

create policy completed_owner_delete
  on public.completed_appointments
  for delete
  to authenticated
  using (
    exists (
      select 1
      from public.garages g
      where g.id = completed_appointments.garage_id
        and g.user_id = auth.uid()
    )
  );

-- Useful grants for PostgREST / Supabase API roles.
grant usage on schema public to anon, authenticated;
grant select on public.garages to authenticated;
grant select, insert, update, delete on public.completed_appointments to authenticated;
grant select on public.werkbon_overview to authenticated;
