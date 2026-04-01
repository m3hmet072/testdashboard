-- ============================================================
-- GARAGES
-- Eén rij per garagebedrijf, gekoppeld aan één auth-gebruiker.
-- Veilig opnieuw uitvoerbaar (idempotent).
-- ============================================================

create extension if not exists pgcrypto;

create table if not exists public.garages (
  id                    uuid        primary key default gen_random_uuid(),
  user_id               uuid        not null references auth.users (id) on delete cascade,

  -- Garage identiteit
  name                  text        not null,
  garage_name           text,                          -- weergavenaam op PDF-facturen
  domain                text,
  logo_url              text,

  -- Contact + factuurgegevens (zichtbaar op PDF)
  address               text,
  city                  text,
  postal_code           text,
  phone                 text,
  email                 text,
  website               text,
  kvk_nummer            text,
  btw_nummer            text,

  -- Analytics
  analytics_property_id text,

  -- Betaalinstellingen (Mollie)
  payment_link          text,                          -- handmatige Mollie betaal-URL
  mollie_method         text        not null default 'none',  -- 'none' | 'manual' | 'api'
  mollie_api_key        text,                          -- privé Mollie API-sleutel (write-only)
  payment_days          int         not null default 14,

  -- Factuurnummer-teller (ophogen per nieuwe werkbon)
  invoice_sequence      bigint      not null default 1000,

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
