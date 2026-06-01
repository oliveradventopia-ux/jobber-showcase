# Jobber — showcase site

Story-first public showcase of **Jobber**, a personal AI job-application pipeline I built solo, vibe-coded with [Claude Code](https://claude.com/claude-code).

> Six AI agents, three human gates, three feedback loops — wired into one personal pipeline that handles the grind without taking the wheel.

**Live:** [jobber-showcase.vercel.app](https://jobber-showcase.vercel.app)

## What this repo is

This is the **public marketing site** only — no agents, no database, no application data. It exists so I can link to a polished overview from my resume without exposing the private working repo.

It renders two pages:
- `/` — the story (the pain of modern job-hunting, then the pipeline that fixes it)
- `/how` — the deep-dive (six agents, two human gates, three feedback loops, an anti-hallucination firewall)

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS 4
- framer-motion for scroll reveals
- Hand-crafted inline SVG illustrations (no asset files)

Everything renders server-side; no API routes, no databases, no third-party tracking.

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

## Deployment

Auto-deploys to Vercel on push to `main`.

## The Jobber project itself

The working dashboard, agents, and database schema live in a separate private repo. This showcase intentionally omits the implementation details — file paths, agent prompts, SQL, API routes — to stay readable for a non-engineer audience and to keep the personal data behind it private.

Stack on the private side: Next.js + PostgreSQL + Claude Agent SDK + Playwright (CDP-attach to real Chrome for form fill, never for scrape) + WeasyPrint for PDF render.

---

Built with [Claude Code](https://claude.com/claude-code) by [Oliver Lau](mailto:oliver.adventopia@gmail.com).
