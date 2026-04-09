-- ============================================================
-- Calendar day-range persistence (Dashboard -> Calendar)
-- Stores "Van/Tot" in public.garages so it syncs across browsers/devices.
-- Run after garages.sql.
-- Safe to run multiple times (idempotent).
-- ============================================================

update public.garages
set
  working_hours_start = coalesce(nullif(trim(working_hours_start), ''), '00:00'),
  working_hours_end = coalesce(nullif(trim(working_hours_end), ''), '23:00');

-- Enforce HH:MM format and valid 24h values.
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
