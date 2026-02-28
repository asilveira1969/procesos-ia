# Silveira Consultora Website

## Run locally

```bash
pnpm install
pnpm dev
```

Build production output:

```bash
pnpm build
pnpm start
```

## Environment variables

Copy `.env.example` and fill:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `NEXT_PUBLIC_DEFAULT_LOCALE`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_LINKEDIN_INSIGHT_ID`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Tracking providers remain inactive if their IDs are empty.

## Supabase

SQL migrations are stored in `supabase/migrations/`.

Apply them manually in your Supabase project SQL editor. The app uses server-side API routes for inserts, so the service role key must stay server-only.

## Content workflow

- Add insights in `content/insights/{locale}/`.
- Add case studies in `content/cases/{locale}/`.
- Each markdown file needs `title`, `description`, `date`, `author`, and `tags` in frontmatter.
- Use `draft: true` to exclude a post from production.

## Templates

- Add downloadable files in `public/files/templates/`.
- Register each file in `lib/content/templates.ts`.

## Assets

- Replace the founder placeholder in `public/images/founder/`.
- Replace OG placeholders in `public/images/og/`.

## OpenClaw boundary

- `../strategy/` is the planning workspace and safe to edit.
- This `website/` folder is deterministic application code and should be reviewed before deployment.
