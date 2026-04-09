-- ============================================================
-- garage_settings: website appearance settings per garage
-- Covers: Website folder in Instellingen.
-- Safe to run multiple times (idempotent).
-- ============================================================

create extension if not exists pgcrypto;

-- ------------------------------------------------------------
-- 1) Create table (skipped if already exists)
-- ------------------------------------------------------------

create table if not exists public.garage_settings (
  id               uuid        primary key default gen_random_uuid(),
  garage_id        uuid        not null references public.garages(id) on delete cascade,

  -- Visual identity
  primary_color    text        not null default '#2563EB',
  font             text        not null default 'Inter',
  logo_url         text,
  hero_image_url   text,

  -- Hero section
  hero_title       text,
  hero_subtitle    text,

  -- About section
  about_text       text,

  -- Structured data
  opening_hours    jsonb,
  services         text[],

  -- SEO
  meta_title       text,
  meta_description text,

  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

-- One row per garage
create unique index if not exists garage_settings_garage_id_uidx
  on public.garage_settings (garage_id);

-- ------------------------------------------------------------
-- 2) Idempotent column additions
--    (for databases created before this file existed)
-- ------------------------------------------------------------

alter table public.garage_settings add column if not exists primary_color    text        not null default '#2563EB';
alter table public.garage_settings add column if not exists font             text        not null default 'Inter';
alter table public.garage_settings add column if not exists logo_url         text;
alter table public.garage_settings add column if not exists hero_image_url   text;
alter table public.garage_settings add column if not exists hero_title       text;
alter table public.garage_settings add column if not exists hero_subtitle    text;
alter table public.garage_settings add column if not exists about_text       text;
alter table public.garage_settings add column if not exists opening_hours    jsonb;
alter table public.garage_settings add column if not exists services         text[];
alter table public.garage_settings add column if not exists meta_title       text;
alter table public.garage_settings add column if not exists meta_description text;
alter table public.garage_settings add column if not exists updated_at       timestamptz not null default now();

-- ------------------------------------------------------------
-- 3) Row-Level Security
-- ------------------------------------------------------------

alter table public.garage_settings enable row level security;

drop policy if exists garage_settings_owner_select on public.garage_settings;
drop policy if exists garage_settings_owner_all    on public.garage_settings;

create policy garage_settings_owner_select
  on public.garage_settings for select to authenticated
  using (
    garage_id in (
      select id from public.garages where user_id = auth.uid()
    )
  );

create policy garage_settings_owner_all
  on public.garage_settings for all to authenticated
  using (
    garage_id in (
      select id from public.garages where user_id = auth.uid()
    )
  )
  with check (
    garage_id in (
      select id from public.garages where user_id = auth.uid()
    )
  );

-- ------------------------------------------------------------
-- 4) Grants
-- ------------------------------------------------------------

grant usage  on schema public             to anon, authenticated;
grant select, insert, update, delete
  on public.garage_settings               to authenticated;
