-- ============================================================
-- GARAGES
-- Eén rij per garagebedrijf, gekoppeld aan één auth-gebruiker.
-- Veilig opnieuw uitvoerbaar (idempotent).
-- ============================================================

create extension if not exists pgcrypto;

create table if not exists public.garages (
  id                    uuid        primary key default gen_random_uuid(),
  user_id               uuid        not null references auth.users (id) on delete cascade,

  -- Dashboard folder
  name                  text        not null,
  garage_name           text,                          -- weergavenaam op PDF-facturen
  domain                text,
  logo_url              text,

  -- Garage folder: profiel
  address               text,
  city                  text,
  postal_code           text,
  phone                 text,
  email                 text,
  website               text,

  -- Garage folder: juridische gegevens
  kvk_nummer            text,
  btw_nummer            text,
  iban                  text,
  has_btw               boolean     not null default true,

  -- Garage folder: factuurnummering
  invoice_prefix        text        not null default '2026-',
  invoice_counter       integer     not null default 1,
  invoice_sequence      bigint      not null default 1000,
  quote_prefix          text        not null default 'OFF-',
  quote_counter         integer     not null default 1,

  -- Language & calendar preferences
  language              text        not null default 'nl',
  calendar_style        text        not null default '1',
  calendar_default_view text        not null default 'week',
  working_days          jsonb       not null default '[1,2,3,4,5]',
  working_hours_start   text        not null default '00:00',
  working_hours_end     text        not null default '23:00',
  service_colors        jsonb,

  -- Analytics
  analytics_property_id text,

  -- Betalingen folder
  payment_method        text        not null default 'mollie',
  mollie_method         text        not null default 'none',  -- legacy, kept for compatibility
  mollie_api_key        text,
  tikkie_api_key        text,
  payment_link          text,
  payment_days          int         not null default 14,
  mollie_auto_generate  boolean     not null default true,
  test_mode             boolean     not null default false,
  whatsapp_template     text,

  created_at            timestamptz not null default now()
);

create index if not exists garages_user_id_idx
  on public.garages (user_id);

-- ============================================================
-- Row Level Security
-- ============================================================
alter table public.garages enable row level security;

drop policy if exists garages_owner_select    on public.garages;
drop policy if exists garages_owner_update    on public.garages;
drop policy if exists garage_owner_select_own on public.garages;
drop policy if exists garage_owner_update_own on public.garages;

-- Eigenaar kan alleen zijn eigen rij lezen
create policy garages_owner_select
  on public.garages for select to authenticated
  using (user_id = auth.uid());

-- Eigenaar kan alleen zijn eigen rij updaten
create policy garages_owner_update
  on public.garages for update to authenticated
  using  (user_id = auth.uid())
  with check (user_id = auth.uid());

-- ============================================================
-- Grants
-- ============================================================
grant usage  on schema public          to anon, authenticated;
grant select on public.garages         to authenticated;
grant update on public.garages         to authenticated;
