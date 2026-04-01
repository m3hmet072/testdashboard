-- ============================================================
-- COMPLETED_APPOINTMENTS + TRIGGER
-- Uitvoeren NA bookings.sql.
-- Veilig opnieuw uitvoerbaar (idempotent).
-- ============================================================

-- ------------------------------------------------------------
-- completed_appointments
-- Centrale opslag voor iedere afgeronde werkbon.
-- De volledige werkbon-payload zit als JSON in completion_notes.
-- ------------------------------------------------------------
create table if not exists public.completed_appointments (
  id               uuid        primary key default gen_random_uuid(),
  garage_id        uuid        not null references public.garages (id) on delete cascade,

  -- Originele boeking (null bij handmatig aangemaakte werkbon)
  booking_id       uuid,

  -- Wanneer het werk is afgerond
  completed_at     timestamptz not null default now(),

  -- Datum + tijd van de afspraak (gekopieerd uit booking_schedule)
  appointment_date date,
  appointment_time time,

  -- Snelzoek-kolommen (ook aanwezig in completion_notes JSON)
  license_plate    text,
  service          text,

  -- Volledig werkbon-/factuurpayload als JSON.
  -- Structuur (geschreven door de werkbon-detailpagina):
  -- {
  --   "status":               "draft" | "sent" | "paid",
  --   "invoice_number":       "F-001001",
  --   "customer_name":        "...",
  --   "customer_phone":       "...",
  --   "customer_email":       "...",
  --   "car_model":            "...",
  --   "km_stand":             0,
  --   "vat_enabled":          true,
  --   "service_types":        ["APK", "Onderhoud"],
  --   "parts":                [{ "name": "...", "quantity": 1, "price": 0 }],
  --   "labour":               { "hours": 0, "rate": 0 },
  --   "totals":               { "subtotal": 0, "vat": 0, "total": 0 },
  --   "paid_at":              null,
  --   "internal_note":        "",
  --   "werkbon_created":      true,
  --   "payment_link":         "https://...",
  --   "payment_link_sent_at": "2026-...",
  --   "payment_method":       "mollie" | "cash",
  --   "completed_at":         "2026-..."
  -- }
  completion_notes text,

  created_at       timestamptz not null default now()
);

create index if not exists completed_appointments_garage_completed_at_idx
  on public.completed_appointments (garage_id, completed_at desc);

create index if not exists completed_appointments_booking_id_idx
  on public.completed_appointments (booking_id);

-- Voeg de FK pas toe als public.bookings bestaat.
-- Zo crasht dit script niet als iemand de files in een andere volgorde uitvoert.
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

-- ------------------------------------------------------------
-- Trigger: markeer de gekoppelde booking als 'done'
-- zodra een completed_appointments rij is ingevoegd.
-- ------------------------------------------------------------
create or replace function public.fn_booking_mark_done()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.booking_id is not null and to_regclass('public.bookings') is not null then
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
  after insert on public.completed_appointments
  for each row
  execute function public.fn_booking_mark_done();

-- ============================================================
-- Row Level Security
-- ============================================================
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

-- ============================================================
-- Grants
-- ============================================================
grant select, insert, update, delete on public.completed_appointments to authenticated;
