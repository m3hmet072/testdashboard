-- ============================================================
-- STEP 3 — Werkbonnen (Invoices / Work Orders)
-- ============================================================
-- Run AFTER step 2 (02_completed_appointments.sql).
-- Safe to re-run (all statements are idempotent).
--
-- Werkbon data lives inside completed_appointments.completion_notes
-- as JSON (written by the werkbon detail page).
-- This file adds:
--   1. invoice_sequence counter on garages (for invoice numbers)
--   2. werkbonnen view  — exposes the JSON as readable columns
--      so you can browse and report on invoices in the
--      Supabase dashboard Table Editor and SQL editor.
-- ============================================================

-- ------------------------------------------------------------
-- 1. Invoice sequence counter
-- Each garage gets its own auto-incrementing invoice number.
-- The dashboard increments this and writes it into
-- completion_notes.invoice_number ("WB-1001", "WB-1002", …).
-- ------------------------------------------------------------
alter table public.garages
  add column if not exists invoice_sequence bigint not null default 1000;

-- ------------------------------------------------------------
-- 2. werkbonnen view
-- Unwraps completion_notes JSON into individual columns.
-- Read-only — write via completed_appointments.
-- ------------------------------------------------------------
create or replace view public.werkbonnen as
select
  ca.id                                                                   as werkbon_id,
  ca.garage_id,
  ca.booking_id,
  ca.license_plate,
  ca.service,
  ca.completed_at,
  ca.created_at,

  -- Invoice header
  (ca.completion_notes::jsonb ->> 'invoice_number')                       as invoice_number,
  (ca.completion_notes::jsonb ->> 'status')                               as invoice_status,
  (ca.completion_notes::jsonb ->> 'paid_at')                              as paid_at,

  -- Customer
  (ca.completion_notes::jsonb ->> 'customer_name')                        as customer_name,
  (ca.completion_notes::jsonb ->> 'customer_phone')                       as customer_phone,
  (ca.completion_notes::jsonb ->> 'customer_email')                       as customer_email,

  -- Vehicle
  (ca.completion_notes::jsonb ->> 'car_model')                            as car_model,
  (ca.completion_notes::jsonb ->> 'km_stand')::numeric                    as km_stand,

  -- Services performed
  (ca.completion_notes::jsonb -> 'service_types')                         as service_types,

  -- Line items
  (ca.completion_notes::jsonb -> 'parts')                                 as parts,
  (ca.completion_notes::jsonb -> 'labour')                                as labour,

  -- Totals
  coalesce(
    ((ca.completion_notes::jsonb -> 'totals') ->> 'subtotal')::numeric, 0
  )                                                                        as subtotal,
  coalesce(
    ((ca.completion_notes::jsonb -> 'totals') ->> 'vat')::numeric, 0
  )                                                                        as vat_amount,
  coalesce(
    ((ca.completion_notes::jsonb -> 'totals') ->> 'total')::numeric, 0
  )                                                                        as total_amount,
  coalesce(
    (ca.completion_notes::jsonb ->> 'vat_enabled')::boolean, true
  )                                                                        as vat_enabled,

  -- Internal note
  (ca.completion_notes::jsonb ->> 'internal_note')                        as internal_note

from public.completed_appointments ca
where ca.completion_notes is not null;

-- ============================================================
-- Grants
-- ============================================================
grant select on public.werkbonnen to authenticated;
