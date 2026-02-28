create extension if not exists pgcrypto;

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text null,
  locale text not null,
  source text not null,
  created_at timestamptz not null default now()
);

create index if not exists leads_email_idx on leads (email);
create index if not exists leads_created_at_idx on leads (created_at desc);

create table if not exists template_downloads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  template_id text not null,
  locale text not null,
  created_at timestamptz not null default now()
);

create index if not exists template_downloads_email_idx on template_downloads (email);
create index if not exists template_downloads_created_at_idx on template_downloads (created_at desc);
create index if not exists template_downloads_template_id_idx on template_downloads (template_id);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_lead_id_idx on contact_messages (lead_id);
create index if not exists contact_messages_created_at_idx on contact_messages (created_at desc);
