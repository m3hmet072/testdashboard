-- ============================================================
-- Rename legacy tikkie columns to mollie columns (safe migration)
-- ============================================================
-- This migration preserves existing data and is safe to run once.

-- 1) Ensure target columns exist
alter table public.garages add column if not exists mollie_method text;
alter table public.garages add column if not exists mollie_api_key text;

-- 2) Copy values from old columns when both old+new exist
--    (covers cases where new columns were already created manually)
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'garages' and column_name = 'tikkie_method'
  ) then
    execute 'update public.garages set mollie_method = coalesce(mollie_method, tikkie_method)';
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'garages' and column_name = 'tikkie_api_token'
  ) then
    execute 'update public.garages set mollie_api_key = coalesce(mollie_api_key, tikkie_api_token)';
  end if;
end
$$;

-- 3) Apply desired constraints/defaults on new columns
alter table public.garages alter column mollie_method set default 'none';
update public.garages set mollie_method = 'none' where mollie_method is null;
alter table public.garages alter column mollie_method set not null;

-- 4) Drop old columns if they still exist
alter table public.garages drop column if exists tikkie_method;
alter table public.garages drop column if exists tikkie_api_token;
