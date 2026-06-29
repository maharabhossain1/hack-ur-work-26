# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
nvm use                  # Node 24.14.1 (.nvmrc)
pnpm dev                 # dev server with Turbopack on :3000
pnpm build               # production build (strict TS — no ignoreBuildErrors)
pnpm lint                # ESLint
pnpm lint:fix            # ESLint with auto-fix
pnpm format              # Prettier over all files
pnpm type-check          # tsc --noEmit
ANALYZE=true pnpm build  # bundle analyzer
```

Husky + lint-staged run on pre-commit (ESLint + Prettier on staged files). No test runner configured yet.

## Architecture

**Next.js 15 app router** with React 19 and the React Compiler (`reactCompiler: true`). Tailwind v4. shadcn/ui components (Radix primitives) in `components/ui/`.

### Route layout

- `/` — intro/title slide (`app/page.tsx`)
- `/slides/*` — individual presentation slides (`app/slides/<name>/page.tsx`)
- `/dashboard` — placeholder dashboard (`app/(dashboard)/dashboard/`)

### Slide system

`components/features/slides/slide-config.ts` holds the canonical ordered `SLIDES` array. Every slide page wraps its content in `<SlideShell>`, which reads `SLIDES` to wire up:

- keyboard navigation (arrow keys)
- prev/next arrow buttons
- dot indicators at the bottom

To add a slide: add an entry to `SLIDES`, create `app/slides/<name>/page.tsx`, wrap content in `<SlideShell>`.

### Config

- `config/env.ts` — Zod-validated env vars. Add any new env var here before using it.
- `config/site.ts` — site name, description, nav links.

### Path aliases

`@/` maps to the project root. Always use `@/` imports — ESLint enforces no relative imports (`eslint-plugin-no-relative-import-paths`).

### Styling conventions

Tailwind utility classes only. No CSS modules. Global styles in `app/globals.css`. Brand colors: `#1e6b62` (teal), `#c97a4a` (amber), `#f5f0eb` (warm off-white).
