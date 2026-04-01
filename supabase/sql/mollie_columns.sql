-- ============================================================
-- Fresh schema columns for Mollie settings
-- ============================================================
alter table public.garages add column if not exists mollie_method text not null default 'none';
alter table public.garages add column if not exists mollie_api_key text;
alter table public.garages add column if not exists payment_days int not null default 14;
alter table public.garages add column if not exists payment_link text;
alter table public.garages add column if not exists invoice_sequence bigint not null default 1000;
