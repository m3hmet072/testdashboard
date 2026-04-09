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
  name text,
  license_plate text not null,
  phone text,
  service text not null,
  message text,
  source text not null default 'form',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.bookings add column if not exists name text;
alter table public.bookings add column if not exists source text not null default 'form';
alter table public.bookings add column if not exists status text not null default 'new';

create index if not exists bookings_garage_id_created_at_idx
  on public.bookings (garage_id, created_at desc);

create index if not exists bookings_garage_id_status_idx
  on public.bookings (garage_id, status);

-- Fast/simple appointment color used by request cards
alter table public.bookings add column if not exists color text;

-- booking_schedule — planned date/time per booking
create table if not exists public.booking_schedule (
  booking_id       uuid        primary key references public.bookings (id) on delete cascade,
  garage_id        uuid        not null references public.garages (id) on delete cascade,
  appointment_date date        not null,
  appointment_time time        not null,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index if not exists booking_schedule_garage_date_time_idx
  on public.booking_schedule (garage_id, appointment_date, appointment_time);

drop view if exists public.bookings_with_schedule cascade;

create view public.bookings_with_schedule with (security_invoker = on) as
select
  b.id,
  b.garage_id,
  b.name,
  b.license_plate,
  b.phone,
  b.service,
  b.message,
  b.color,
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

-- Active RLS policies for bookings and schedule
alter table public.bookings         enable row level security;
alter table public.booking_schedule enable row level security;

drop policy if exists bookings_owner_select  on public.bookings;
drop policy if exists bookings_owner_insert  on public.bookings;
drop policy if exists bookings_owner_update  on public.bookings;
drop policy if exists bookings_owner_delete  on public.bookings;
drop policy if exists bookings_anon_insert   on public.bookings;
drop policy if exists schedule_owner_all     on public.booking_schedule;

create policy bookings_owner_select
  on public.bookings for select to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id and g.user_id = auth.uid()
    )
  );

create policy bookings_owner_insert
  on public.bookings for insert to authenticated
  with check (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id and g.user_id = auth.uid()
    )
  );

create policy bookings_owner_update
  on public.bookings for update to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id and g.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id and g.user_id = auth.uid()
    )
  );

create policy bookings_owner_delete
  on public.bookings for delete to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id and g.user_id = auth.uid()
    )
  );

-- Website contact form is anonymous: allow insert when garage exists
create policy bookings_anon_insert
  on public.bookings for insert to anon
  with check (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id
    )
  );

create policy schedule_owner_all
  on public.booking_schedule for all to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = booking_schedule.garage_id and g.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.garages g
      where g.id = booking_schedule.garage_id and g.user_id = auth.uid()
    )
  );

grant select, insert, update, delete on public.bookings              to authenticated;
grant insert                         on public.bookings              to anon;
grant select, insert, update, delete on public.booking_schedule      to authenticated;
grant select                         on public.bookings_with_schedule to authenticated;

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
-- Settings completeness migration (Dashboard/Website/Garage/Factuur/Offerte/Betalingen)
-- alter table public.garages add column if not exists address text;
-- alter table public.garages add column if not exists kvk_nummer text;
-- alter table public.garages add column if not exists btw_nummer text;
-- alter table public.garages add column if not exists iban text;
-- alter table public.garages add column if not exists has_btw boolean not null default true;
-- alter table public.garages add column if not exists invoice_prefix text not null default '2026-';
-- alter table public.garages add column if not exists invoice_counter integer not null default 1;
-- alter table public.garages add column if not exists quote_prefix text not null default 'OFF-';
-- alter table public.garages add column if not exists quote_counter integer not null default 1;
-- alter table public.garages add column if not exists payment_method text not null default 'mollie';
-- alter table public.garages add column if not exists tikkie_api_key text;
-- alter table public.garages add column if not exists mollie_auto_generate boolean not null default true;
-- alter table public.garages add column if not exists test_mode boolean not null default false;
-- alter table public.garages add column if not exists whatsapp_template text;
--
-- create table if not exists public.garage_settings (
--   id uuid primary key default gen_random_uuid(),
--   garage_id uuid not null references public.garages(id) on delete cascade,
--   primary_color text not null default '#2563EB',
--   font text not null default 'Inter',
--   hero_title text,
--   hero_subtitle text,
--   about_text text,
--   created_at timestamptz not null default now(),
--   updated_at timestamptz not null default now()
-- );
-- create unique index if not exists garage_settings_garage_id_uidx on public.garage_settings(garage_id);
--
-- alter table public.garage_pdf_settings add column if not exists show_customer boolean not null default true;
-- alter table public.garage_pdf_settings add column if not exists show_vehicle boolean not null default true;
-- alter table public.garage_pdf_settings add column if not exists quote_primary_color text;
-- alter table public.garage_pdf_settings add column if not exists quote_font text;
-- alter table public.garage_pdf_settings add column if not exists quote_header_style text;
-- alter table public.garage_pdf_settings add column if not exists quote_show_btw boolean;
-- alter table public.garage_pdf_settings add column if not exists quote_show_iban boolean;
-- alter table public.garage_pdf_settings add column if not exists quote_show_kvk boolean;
-- alter table public.garage_pdf_settings add column if not exists quote_show_customer boolean;
-- alter table public.garage_pdf_settings add column if not exists quote_show_vehicle boolean;
-- alter table public.garage_pdf_settings add column if not exists quote_footer_text text;
-- alter table public.garage_pdf_settings add column if not exists quote_layout text;
-- Werkbon payment fields live inside completed_appointments.completion_notes (JSON):
--   payment_link          text
--   payment_link_sent_at  timestamptz
--   payment_method        text   ('mollie' | 'ideal' | 'cash')

-- ============================================================
-- COMPLETED_APPOINTMENTS + TRIGGER
-- ============================================================

create table if not exists public.completed_appointments (
  id               uuid        primary key default gen_random_uuid(),
  garage_id        uuid        not null references public.garages (id) on delete cascade,
  booking_id       uuid,
  completed_at     timestamptz not null default now(),
  appointment_date date,
  appointment_time time,
  customer_name    text,
  license_plate    text,
  service          text,
  completion_notes text,
  created_at       timestamptz not null default now()
);

alter table public.completed_appointments
  add column if not exists customer_name text;

create index if not exists completed_appointments_garage_completed_at_idx
  on public.completed_appointments (garage_id, completed_at desc);

create index if not exists completed_appointments_booking_id_idx
  on public.completed_appointments (booking_id);

create index if not exists completed_appointments_customer_name_idx
  on public.completed_appointments (customer_name);

update public.completed_appointments ca
set customer_name = coalesce(
  nullif(trim((ca.completion_notes::jsonb ->> 'customer_name')), ''),
  nullif(trim((ca.completion_notes::jsonb ->> 'customerName')), ''),
  nullif(trim(b.name), ''),
  nullif(trim(ca.license_plate), ''),
  'UNKNOWN'
)
from public.bookings b
where ca.booking_id is not null
  and ca.booking_id = b.id
  and coalesce(nullif(trim(ca.customer_name), ''), '') = '';

update public.completed_appointments ca
set customer_name = coalesce(
  nullif(trim((ca.completion_notes::jsonb ->> 'customer_name')), ''),
  nullif(trim((ca.completion_notes::jsonb ->> 'customerName')), ''),
  nullif(trim(ca.license_plate), ''),
  'UNKNOWN'
)
where coalesce(nullif(trim(ca.customer_name), ''), '') = '';

do $$
begin
  if to_regclass('public.bookings') is not null then
    if not exists (
      select 1
      from pg_constraint
      where conname = 'completed_appointments_booking_id_fkey'
        and conrelid = 'public.completed_appointments'::regclass
    ) then
      alter table public.completed_appointments
        add constraint completed_appointments_booking_id_fkey
        foreign key (booking_id)
        references public.bookings (id)
        on delete set null;
    end if;
  end if;
end
$$;

create or replace function public.fn_booking_mark_done()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if coalesce(nullif(trim(new.customer_name), ''), '') = '' then
    new.customer_name := coalesce(
      nullif(trim((new.completion_notes::jsonb ->> 'customer_name')), ''),
      nullif(trim((new.completion_notes::jsonb ->> 'customerName')), ''),
      (
        select nullif(trim(b.name), '')
        from public.bookings b
        where b.id = new.booking_id
        limit 1
      ),
      nullif(trim(new.license_plate), ''),
      'UNKNOWN'
    );
  end if;

  if tg_op = 'INSERT' and new.booking_id is not null and to_regclass('public.bookings') is not null then
    execute
      'update public.bookings
       set status = ''done''
       where id = $1
         and status <> ''done''' using new.booking_id;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_booking_mark_done on public.completed_appointments;

create trigger trg_booking_mark_done
  before insert or update on public.completed_appointments
  for each row
  execute function public.fn_booking_mark_done();

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
      where g.id = completed_appointments.garage_id and g.user_id = auth.uid()
    )
  );

create policy completed_owner_insert
  on public.completed_appointments for insert to authenticated
  with check (
    exists (
      select 1 from public.garages g
      where g.id = completed_appointments.garage_id and g.user_id = auth.uid()
    )
  );

create policy completed_owner_update
  on public.completed_appointments for update to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = completed_appointments.garage_id and g.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.garages g
      where g.id = completed_appointments.garage_id and g.user_id = auth.uid()
    )
  );

create policy completed_owner_delete
  on public.completed_appointments for delete to authenticated
  using (
    exists (
      select 1 from public.garages g
      where g.id = completed_appointments.garage_id and g.user_id = auth.uid()
    )
  );

grant select, insert, update, delete on public.completed_appointments to authenticated;

-- ============================================================
-- WERKBONNEN VIEW
-- ============================================================

do $$
begin
  if to_regclass('public.completed_appointments') is not null then
    execute $sql$
      create or replace view public.werkbonnen with (security_invoker = on) as
      select
        ca.id                                                                           as werkbon_id,
        ca.garage_id,
        ca.booking_id,
        ca.license_plate,
        ca.service,
        ca.completed_at,
        ca.created_at,
        (ca.completion_notes::jsonb ->> 'invoice_number')                               as invoice_number,
        (ca.completion_notes::jsonb ->> 'status')                                       as invoice_status,
        (ca.completion_notes::jsonb ->> 'paid_at')                                      as paid_at,
        coalesce(
          nullif(trim(ca.customer_name), ''),
          nullif(trim(ca.completion_notes::jsonb ->> 'customer_name'), ''),
          nullif(trim(ca.completion_notes::jsonb ->> 'customerName'), ''),
          nullif(trim(b.name), ''),
          nullif(trim(ca.license_plate), ''),
          'UNKNOWN'
        )                                                                               as customer_name,
        (ca.completion_notes::jsonb ->> 'customer_phone')                               as customer_phone,
        (ca.completion_notes::jsonb ->> 'customer_email')                               as customer_email,
        (ca.completion_notes::jsonb ->> 'car_model')                                    as car_model,
        (ca.completion_notes::jsonb ->> 'km_stand')::numeric                            as km_stand,
        (ca.completion_notes::jsonb -> 'service_types')                                 as service_types,
        (ca.completion_notes::jsonb -> 'parts')                                         as parts,
        (ca.completion_notes::jsonb -> 'labour')                                        as labour,
        coalesce(((ca.completion_notes::jsonb -> 'totals') ->> 'subtotal')::numeric, 0) as subtotal,
        coalesce(((ca.completion_notes::jsonb -> 'totals') ->> 'vat')::numeric,      0) as vat_amount,
        coalesce(((ca.completion_notes::jsonb -> 'totals') ->> 'total')::numeric,    0) as total_amount,
        coalesce((ca.completion_notes::jsonb ->> 'vat_enabled')::boolean,         true) as vat_enabled,
        (ca.completion_notes::jsonb ->> 'payment_link')                                 as payment_link,
        (ca.completion_notes::jsonb ->> 'payment_link_sent_at')                         as payment_link_sent_at,
        (ca.completion_notes::jsonb ->> 'payment_method')                               as payment_method,
        (ca.completion_notes::jsonb ->> 'internal_note')                                as internal_note,
        coalesce((ca.completion_notes::jsonb ->> 'werkbon_created')::boolean,    false) as werkbon_created
      from public.completed_appointments ca
      left join public.bookings b on b.id = ca.booking_id
      where ca.completion_notes is not null
    $sql$;
  else
    execute $sql$
      create or replace view public.werkbonnen with (security_invoker = on) as
      select
        null::uuid        as werkbon_id,
        null::uuid        as garage_id,
        null::uuid        as booking_id,
        null::text        as license_plate,
        null::text        as service,
        null::timestamptz as completed_at,
        null::timestamptz as created_at,
        null::text        as invoice_number,
        null::text        as invoice_status,
        null::text        as paid_at,
        null::text        as customer_name,
        null::text        as customer_phone,
        null::text        as customer_email,
        null::text        as car_model,
        null::numeric     as km_stand,
        null::jsonb       as service_types,
        null::jsonb       as parts,
        null::jsonb       as labour,
        0::numeric        as subtotal,
        0::numeric        as vat_amount,
        0::numeric        as total_amount,
        true::boolean     as vat_enabled,
        null::text        as payment_link,
        null::text        as payment_link_sent_at,
        null::text        as payment_method,
        null::text        as internal_note,
        false::boolean    as werkbon_created
      where false
    $sql$;
  end if;
end
$$;

grant select on public.werkbonnen to authenticated;
-- ----------------------------------------------------------
-- Settings pages migration  (all 6 folders in Instellingen)
-- Canonical modular scripts now live in:
--   - supabase/sql/garages.sql
--   - supabase/sql/bookings.sql
--   - supabase/sql/garage_settings.sql
--   - supabase/sql/garage_pdf_settings.sql
--   - supabase/sql/calendar_day_range_persistence.sql
-- The active statements remain inlined below for standalone runs.
-- ----------------------------------------------------------

-- GARAGES: columns for all settings folders
alter table public.garages add column if not exists address               text;
alter table public.garages add column if not exists kvk_nummer            text;
alter table public.garages add column if not exists btw_nummer            text;
alter table public.garages add column if not exists iban                  text;
alter table public.garages add column if not exists has_btw               boolean     not null default true;
alter table public.garages add column if not exists invoice_prefix        text        not null default '2026-';
alter table public.garages add column if not exists invoice_counter       integer     not null default 1;
alter table public.garages add column if not exists invoice_sequence      bigint      not null default 1;
alter table public.garages add column if not exists quote_prefix          text        not null default 'OFF-';
alter table public.garages add column if not exists quote_counter         integer     not null default 1;
alter table public.garages add column if not exists payment_method        text        not null default 'mollie';
alter table public.garages add column if not exists tikkie_api_key        text;
alter table public.garages add column if not exists mollie_auto_generate  boolean     not null default true;
alter table public.garages add column if not exists test_mode             boolean     not null default false;
alter table public.garages add column if not exists whatsapp_template     text;
alter table public.garages add column if not exists language              text        not null default 'nl';
alter table public.garages add column if not exists working_hours_start   text        not null default '00:00';
alter table public.garages add column if not exists working_hours_end     text        not null default '23:00';
alter table public.garages add column if not exists working_days          jsonb       not null default '[1,2,3,4,5]';
alter table public.garages add column if not exists service_colors        jsonb;

update public.garages
set
  working_hours_start = coalesce(nullif(trim(working_hours_start), ''), '00:00'),
  working_hours_end = coalesce(nullif(trim(working_hours_end), ''), '23:00');

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'garages_working_hours_start_format_chk'
  ) then
    alter table public.garages
      add constraint garages_working_hours_start_format_chk
      check (working_hours_start ~ '^([01][0-9]|2[0-3]):([0-5][0-9])$');
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'garages_working_hours_end_format_chk'
  ) then
    alter table public.garages
      add constraint garages_working_hours_end_format_chk
      check (working_hours_end ~ '^([01][0-9]|2[0-3]):([0-5][0-9])$');
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'garages_working_hours_range_chk'
  ) then
    alter table public.garages
      add constraint garages_working_hours_range_chk
      check (working_hours_start <= working_hours_end);
  end if;
end
$$;

-- BOOKINGS: color for simple/fast appointments
alter table public.bookings add column if not exists color text;

-- GARAGE_SETTINGS: website folder
create table if not exists public.garage_settings (
  id               uuid        primary key default gen_random_uuid(),
  garage_id        uuid        not null references public.garages(id) on delete cascade,
  primary_color    text        not null default '#2563EB',
  font             text        not null default 'Inter',
  logo_url         text,
  hero_image_url   text,
  hero_title       text,
  hero_subtitle    text,
  about_text       text,
  opening_hours    jsonb,
  services         text[],
  meta_title       text,
  meta_description text,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);
create unique index if not exists garage_settings_garage_id_uidx
  on public.garage_settings (garage_id);
alter table public.garage_settings add column if not exists primary_color    text not null default '#2563EB';
alter table public.garage_settings add column if not exists font             text not null default 'Inter';
alter table public.garage_settings add column if not exists hero_title       text;
alter table public.garage_settings add column if not exists hero_subtitle    text;
alter table public.garage_settings add column if not exists about_text       text;
alter table public.garage_settings add column if not exists updated_at       timestamptz not null default now();

-- GARAGE_PDF_SETTINGS: factuur + offerte folders
create table if not exists public.garage_pdf_settings (
  id                       uuid        primary key default gen_random_uuid(),
  garage_id                uuid        not null unique references public.garages(id) on delete cascade,
  primary_color            text        not null default '#2563EB',
  font                     text        not null default 'helvetica',
  header_style             text        not null default 'professional',
  show_btw                 boolean     not null default true,
  show_iban                boolean     not null default true,
  show_kvk                 boolean     not null default true,
  show_customer            boolean     not null default true,
  show_vehicle             boolean     not null default true,
  footer_text              text,
  payment_instruction_text text,
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
create unique index if not exists garage_pdf_settings_garage_id_uidx
  on public.garage_pdf_settings (garage_id);
alter table public.garage_pdf_settings add column if not exists show_customer            boolean     not null default true;
alter table public.garage_pdf_settings add column if not exists show_vehicle             boolean     not null default true;
alter table public.garage_pdf_settings add column if not exists payment_instruction_text text;
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

-- RLS for garage_settings
alter table public.garage_settings enable row level security;
drop policy if exists garage_settings_owner_select on public.garage_settings;
drop policy if exists garage_settings_owner_all    on public.garage_settings;
create policy garage_settings_owner_select
  on public.garage_settings for select to authenticated
  using (garage_id in (select id from public.garages where user_id = auth.uid()));
create policy garage_settings_owner_all
  on public.garage_settings for all to authenticated
  using (garage_id in (select id from public.garages where user_id = auth.uid()))
  with check (garage_id in (select id from public.garages where user_id = auth.uid()));

-- RLS for garage_pdf_settings
alter table public.garage_pdf_settings enable row level security;
drop policy if exists garage_pdf_settings_owner_select on public.garage_pdf_settings;
drop policy if exists garage_pdf_settings_owner_all    on public.garage_pdf_settings;
create policy garage_pdf_settings_owner_select
  on public.garage_pdf_settings for select to authenticated
  using (garage_id in (select id from public.garages where user_id = auth.uid()));
create policy garage_pdf_settings_owner_all
  on public.garage_pdf_settings for all to authenticated
  using (garage_id in (select id from public.garages where user_id = auth.uid()))
  with check (garage_id in (select id from public.garages where user_id = auth.uid()));

-- Grants
grant select, insert, update, delete on public.garage_settings     to authenticated;
grant select, insert, update, delete on public.garage_pdf_settings to authenticated;

-- Werkbon payment fields live inside completed_appointments.completion_notes (JSON):
--   payment_link          text
--   payment_link_sent_at  timestamptz
--   payment_method        text   ('mollie' | 'ideal' | 'cash')
