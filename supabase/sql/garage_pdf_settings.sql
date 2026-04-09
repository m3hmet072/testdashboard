-- ============================================================
-- garage_pdf_settings: PDF appearance / layout per garage
-- Covers: Factuur folder + Offerte folder in Instellingen.
-- Safe to run multiple times (idempotent).
-- ============================================================

create extension if not exists pgcrypto;

-- ------------------------------------------------------------
-- 1) Create table (skipped if already exists)
-- ------------------------------------------------------------

create table if not exists public.garage_pdf_settings (
  id                       uuid        primary key default gen_random_uuid(),
  garage_id                uuid        not null unique references public.garages(id) on delete cascade,

  -- Factuur (invoice) PDF styling
  primary_color            text        not null default '#2563EB',
  font                     text        not null default 'helvetica',
  header_style             text        not null default 'professional',
  logo_position            text        not null default 'left',
  show_logo                boolean     not null default true,
  show_btw                 boolean     not null default true,
  show_iban                boolean     not null default true,
  show_kvk                 boolean     not null default true,
  show_customer            boolean     not null default true,
  show_vehicle             boolean     not null default true,
  footer_text              text,
  payment_instruction_text text,
  signature_url            text,

  -- Offerte (quote) PDF styling
  quote_primary_color      text                 default '#16A34A',
  quote_font               text                 default 'helvetica',
  quote_header_style       text                 default 'professional',
  quote_show_btw           boolean              default true,
  quote_show_iban          boolean              default false,
  quote_show_kvk           boolean              default true,
  quote_show_customer      boolean              default true,
  quote_show_vehicle       boolean              default true,
  quote_footer_text        text                 default '',
  quote_layout             text                 default 'proposal',

  created_at               timestamptz not null default now(),
  updated_at               timestamptz not null default now()
);

-- Belt-and-suspenders unique index on garage_id
create unique index if not exists garage_pdf_settings_garage_id_uidx
  on public.garage_pdf_settings (garage_id);

-- ------------------------------------------------------------
-- 2) Idempotent column additions
--    (for databases created before this file existed)
-- ------------------------------------------------------------

-- Factuur columns
alter table public.garage_pdf_settings add column if not exists primary_color            text        not null default '#2563EB';
alter table public.garage_pdf_settings add column if not exists font                     text        not null default 'helvetica';
alter table public.garage_pdf_settings add column if not exists header_style             text        not null default 'professional';
alter table public.garage_pdf_settings add column if not exists logo_position            text        not null default 'left';
alter table public.garage_pdf_settings add column if not exists show_logo                boolean     not null default true;
alter table public.garage_pdf_settings add column if not exists show_btw                 boolean     not null default true;
alter table public.garage_pdf_settings add column if not exists show_iban                boolean     not null default true;
alter table public.garage_pdf_settings add column if not exists show_kvk                 boolean     not null default true;
alter table public.garage_pdf_settings add column if not exists show_customer            boolean     not null default true;
alter table public.garage_pdf_settings add column if not exists show_vehicle             boolean     not null default true;
alter table public.garage_pdf_settings add column if not exists footer_text              text;
alter table public.garage_pdf_settings add column if not exists payment_instruction_text text;
alter table public.garage_pdf_settings add column if not exists signature_url            text;

-- Offerte columns
alter table public.garage_pdf_settings add column if not exists quote_primary_color      text        default '#16A34A';
alter table public.garage_pdf_settings add column if not exists quote_font               text        default 'helvetica';
alter table public.garage_pdf_settings add column if not exists quote_header_style       text        default 'professional';
alter table public.garage_pdf_settings add column if not exists quote_show_btw           boolean     default true;
alter table public.garage_pdf_settings add column if not exists quote_show_iban          boolean     default false;
alter table public.garage_pdf_settings add column if not exists quote_show_kvk           boolean     default true;
alter table public.garage_pdf_settings add column if not exists quote_show_customer      boolean     default true;
alter table public.garage_pdf_settings add column if not exists quote_show_vehicle       boolean     default true;
alter table public.garage_pdf_settings add column if not exists quote_footer_text        text        default '';
alter table public.garage_pdf_settings add column if not exists quote_layout             text        default 'proposal';

alter table public.garage_pdf_settings add column if not exists updated_at               timestamptz not null default now();

-- ------------------------------------------------------------
-- 3) Row-Level Security
-- ------------------------------------------------------------

alter table public.garage_pdf_settings enable row level security;

drop policy if exists garage_pdf_settings_owner_select on public.garage_pdf_settings;
drop policy if exists garage_pdf_settings_owner_all    on public.garage_pdf_settings;

create policy garage_pdf_settings_owner_select
  on public.garage_pdf_settings for select to authenticated
  using (
    garage_id in (
      select id from public.garages where user_id = auth.uid()
    )
  );

create policy garage_pdf_settings_owner_all
  on public.garage_pdf_settings for all to authenticated
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

grant usage  on schema public                             to anon, authenticated;
grant select, insert, update, delete
  on public.garage_pdf_settings                           to authenticated;
