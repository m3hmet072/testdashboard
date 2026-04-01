-- ============================================================
-- WERKBONNEN VIEW
-- Veilig opnieuw uitvoerbaar en volgorde-onafhankelijk.
--
-- Als completed_appointments nog niet bestaat, maken we een
-- lege placeholder-view met exact dezelfde kolommen.
-- Zodra completed_appointments bestaat en je dit script opnieuw
-- draait, wordt de echte view automatisch aangemaakt.
-- ============================================================

do $$
begin
  if to_regclass('public.completed_appointments') is not null then
    execute $sql$
      create or replace view public.werkbonnen as
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

        (ca.completion_notes::jsonb ->> 'customer_name')                                as customer_name,
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
      where ca.completion_notes is not null
    $sql$;
  else
    execute $sql$
      create or replace view public.werkbonnen as
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

-- ============================================================
-- Grants
-- ============================================================
grant select on public.werkbonnen to authenticated;
