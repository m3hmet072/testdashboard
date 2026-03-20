-- Migration: remove color_theme column from garages table
-- Run this in the Supabase SQL editor.

alter table public.garages
  drop column if exists color_theme;
