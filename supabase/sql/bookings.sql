-- ============================================================
-- BOOKINGS + BOOKING_SCHEDULE + VIEW
-- Uitvoeren NA garages.sql.
-- Veilig opnieuw uitvoerbaar (idempotent).
-- ============================================================

-- ------------------------------------------------------------
-- bookings — binnenkomende afspraken
-- ------------------------------------------------------------
create table if not exists public.bookings (
  id            uuid        primary key default gen_random_uuid(),
  garage_id     uuid        not null references public.garages (id) on delete cascade,
  name          text,
  license_plate text        not null,
  phone         text,
  service       text        not null,
  message       text,
  -- source: 'form' | 'manual' | 'email'
  source        text        not null default 'form',
  -- status: 'new' | 'confirmed' | 'done'
  status        text        not null default 'new',
  created_at    timestamptz not null default now()
);

create index if not exists bookings_garage_id_created_at_idx
  on public.bookings (garage_id, created_at desc);

create index if not exists bookings_garage_id_status_idx
  on public.bookings (garage_id, status);

-- Ensure compatibility with legacy rows/scripts expecting bookings.name
alter table public.bookings add column if not exists name text;

-- Fast/simple appointment color used by request cards
alter table public.bookings add column if not exists color text;

-- ------------------------------------------------------------
-- booking_schedule — geplande datum + tijd per afspraak
-- ------------------------------------------------------------
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

-- ------------------------------------------------------------
-- bookings_with_schedule view
-- ------------------------------------------------------------
create or replace view public.bookings_with_schedule with (security_invoker = on) as
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
alter table public.bookings         enable row level security;
alter table public.booking_schedule enable row level security;

drop policy if exists bookings_owner_select  on public.bookings;
drop policy if exists bookings_owner_insert  on public.bookings;
drop policy if exists bookings_owner_update  on public.bookings;
drop policy if exists bookings_owner_delete  on public.bookings;
drop policy if exists bookings_anon_insert   on public.bookings;
drop policy if exists schedule_owner_all     on public.booking_schedule;

-- Eigenaar: volledig CRUD op eigen afspraken
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

-- Anonieme website-widget mag een boeking aanmaken
create policy bookings_anon_insert
  on public.bookings for insert to anon
  with check (
    exists (
      select 1 from public.garages g
      where g.id = bookings.garage_id
    )
  );

-- Eigenaar: volledig toegang tot planning
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

-- ============================================================
-- Grants
-- ============================================================
grant select, insert, update, delete on public.bookings         to authenticated;
grant insert                         on public.bookings         to anon;
grant select, insert, update, delete on public.booking_schedule to authenticated;
grant select                         on public.bookings_with_schedule to authenticated;
