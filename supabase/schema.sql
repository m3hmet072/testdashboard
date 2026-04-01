-- Garage Dashboard multi-tenant starter schema
-- Run this in Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists public.garages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  domain text,
  analytics_property_id text,
  logo_url text,
  -- Mollie, iDEAL or any payment link sent to customers via WhatsApp / e-mail
  payment_link text,
  -- Link each garage to one Supabase auth user (tenant owner)
    -- Mollie payment configuration
    mollie_method text not null default 'none',   -- 'none' | 'manual' | 'api'
    mollie_api_key text,
    payment_days int not null default 14,
    garage_name text,
    -- Link each garage to one Supabase auth user (tenant owner)
    user_id uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  garage_id uuid not null references public.garages (id) on delete cascade,
  license_plate text not null,
  phone text,
  service text not null,
  message text,
  created_at timestamptz not null default now()
);

create index if not exists bookings_garage_id_created_at_idx
  on public.bookings (garage_id, created_at desc);

-- Optional future admin flag source.
-- You can manage admin users in auth metadata or with an app-side env allow list.

-- ----------------------------------------------------------
-- RLS starter notes (recommended for production hardening)
-- ----------------------------------------------------------

-- Enable RLS
-- alter table public.garages enable row level security;
-- alter table public.bookings enable row level security;

-- Garage owners can read only their own garage row
-- create policy "garage_owner_select_own"
--   on public.garages
--   for select
--   using (user_id = auth.uid());

-- Garage owners can update only their own garage row
-- create policy "garage_owner_update_own"
--   on public.garages
--   for update
--   using (user_id = auth.uid())
--   with check (user_id = auth.uid());

-- Garage owners can read only bookings belonging to their garage
-- create policy "garage_owner_select_bookings"
--   on public.bookings
--   for select
--   using (
--     exists (
--       select 1
--       from public.garages g
--       where g.id = bookings.garage_id
--         and g.user_id = auth.uid()
--     )
--   );

-- Client websites can insert bookings only for existing garages
-- (if exposing anon insert endpoint, lock down columns and validation)
-- create policy "booking_insert_for_existing_garage"
--   on public.bookings
--   for insert
--   with check (
--     exists (
--       select 1
--       from public.garages g
--       where g.id = bookings.garage_id
--     )
--   );

-- Optional admin policy example (if you store role in JWT claim)
-- create policy "admin_read_all_garages"
--   on public.garages
--   for select
--   using ((auth.jwt() ->> 'role') = 'admin');

-- create policy "admin_read_all_bookings"
--   on public.bookings
--   for select
--   using ((auth.jwt() ->> 'role') = 'admin');

-- ----------------------------------------------------------
-- New tenant onboarding checklist
-- ----------------------------------------------------------
-- 1) Create Supabase auth user for client garage owner.
-- 2) Insert garage row with user_id = auth.users.id and analytics_property_id.
-- 3) Set logo_url for brand customization.
-- 4) Share dashboard login credentials with client.

-- ----------------------------------------------------------
-- Mollie payment migration (run in Supabase SQL editor)
-- ----------------------------------------------------------
-- alter table public.garages add column if not exists mollie_method text not null default 'none';
-- alter table public.garages add column if not exists mollie_api_key text;
-- alter table public.garages add column if not exists payment_days int not null default 14;
-- alter table public.garages add column if not exists garage_name text;
-- alter table public.garages add column if not exists payment_link text;
-- Werkbon payment fields live inside completed_appointments.completion_notes (JSON):
--   payment_link          text
--   payment_link_sent_at  timestamptz
--   payment_method        text   ('mollie' | 'ideal' | 'cash')
