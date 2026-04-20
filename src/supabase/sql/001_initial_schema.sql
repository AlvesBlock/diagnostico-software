create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  whatsapp text not null,
  company text,
  created_at timestamptz not null default now()
);

create table if not exists public.diagnosis_sessions (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  pain_category text not null,
  pain_category_other text,
  current_scenario text not null,
  current_scenario_other text,
  impacts text[] not null default '{}',
  impacts_other text,
  urgency text not null,
  budget_range text not null,
  status text not null default 'completed',
  created_at timestamptz not null default now()
);

create table if not exists public.diagnosis_features (
  id uuid primary key default gen_random_uuid(),
  diagnosis_session_id uuid not null unique references public.diagnosis_sessions(id) on delete cascade,
  login boolean not null default false,
  admin_panel boolean not null default false,
  reports boolean not null default false,
  notifications boolean not null default false,
  integrations boolean not null default false,
  api boolean not null default false,
  mobile_app boolean not null default false,
  multi_user boolean not null default false,
  subscription boolean not null default false,
  executive_dashboard boolean not null default false
);

create table if not exists public.diagnosis_results (
  id uuid primary key default gen_random_uuid(),
  diagnosis_session_id uuid not null unique references public.diagnosis_sessions(id) on delete cascade,
  base_score numeric(10,2) not null,
  category_weight numeric(10,2) not null,
  urgency_multiplier numeric(10,2) not null,
  final_score numeric(10,2) not null,
  complexity_level text not null,
  estimated_hours_min integer not null,
  estimated_hours_max integer not null,
  estimated_price_min numeric(12,2) not null,
  estimated_price_max numeric(12,2) not null,
  estimated_time_min_days integer not null,
  estimated_time_max_days integer not null,
  summary_text text not null,
  recommended_approach text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.tracking_metadata (
  id uuid primary key default gen_random_uuid(),
  diagnosis_session_id uuid not null references public.diagnosis_sessions(id) on delete cascade,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  referrer text,
  landing_page text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists leads_email_idx on public.leads(email);
create index if not exists leads_whatsapp_idx on public.leads(whatsapp);
create index if not exists diagnosis_sessions_lead_id_idx on public.diagnosis_sessions(lead_id);
create index if not exists diagnosis_sessions_pain_category_idx on public.diagnosis_sessions(pain_category);
create index if not exists diagnosis_sessions_created_at_idx on public.diagnosis_sessions(created_at desc);
create index if not exists diagnosis_results_complexity_idx on public.diagnosis_results(complexity_level);
create index if not exists diagnosis_results_final_score_idx on public.diagnosis_results(final_score);
create index if not exists tracking_metadata_session_idx on public.tracking_metadata(diagnosis_session_id);
create index if not exists tracking_metadata_utm_source_idx on public.tracking_metadata(utm_source);
create index if not exists tracking_metadata_utm_campaign_idx on public.tracking_metadata(utm_campaign);
