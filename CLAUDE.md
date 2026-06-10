# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-file static portfolio. No build system, no package manager, no tests. Everything lives in `index.html` — CSS, JS, and HTML together.

## Development

Open `index.html` directly in a browser. No server needed for most changes.

For accurate CSP testing (fonts, Three.js CDN, Cloudflare Analytics), serve locally:
```bash
npx serve .
# or
python -m http.server 8080
```

Deploy: push to GitHub → Vercel auto-deploys. Or drag the folder to vercel.com.

## Design tokens (CSS custom properties in `:root`)

| Token | Value | Role |
|-------|-------|------|
| `--ink` | `#09090E` | Primary text / dark bg |
| `--paper` | `#F2EDE3` | Page background |
| `--warm` | `#EAE3D5` | Alternate section bg |
| `--accent` | `#C03A18` | Brand red, CTAs |
| `--blue` | `#1450CC` | Secondary accent |
| `--gold` | `#B8921F` | Tertiary accent |
| `--green` | `#1A6B3C` | Status dot, cert checks |
| `--f-h` | Syne | Headings |
| `--f-s` | Instrument Serif | Body italic |
| `--f-m` | DM Mono | Labels, tags, meta |
| `--f-d` | Orbitron | Display numbers |

## Architecture (all in `index.html`)

Sections in order: `#launch` (F1-themed boot screen) → `nav` → `#hero` → `#about` → `#education` → `#strengths` → `#skills` → `#projects` → `#experience` → `#contact` → `footer`.

Key interactive systems:
- **Three.js canvas** in `#hero` (right panel) — animated particle/geometry scene
- **F1 launch sequence** — countdown boot screen with `#launch-canvas`, dismisses on click or auto after ~5s
- **Custom cursor** — `#c-dot` + `#c-ring` with `mix-blend-mode:difference`; `body.hov` class enlarges on hover
- **Intersection Observer** — `.reveal` elements animate in with `.vis` class
- **Project modal** — `#modal-overlay` + `.modal` populated by JS from a `projects` data array
- **Contact form** — POSTs to Formspree (`YOUR_FORMSPREE_ID` placeholder)
- **Rate-limit screen** — `#ratelimit` overlay with countdown timer

## Go-live checklist (from README)

1. Replace `YOUR_DOMAIN.com` (4 occurrences) with real domain
2. Remove `<meta name="robots" content="noindex, nofollow">` (line 10)
3. Replace `YOUR_CF_TOKEN` and uncomment Cloudflare Analytics script
4. Replace `YOUR_FORMSPREE_ID` with real Formspree form ID
5. Replace `og-preview.svg` with a real `og-preview.png` (1200×630px) and update 3 og:image meta tags

## Security headers

Managed by `vercel.json` (Vercel) and `.htaccess` (Apache). CSP is also inline in the HTML `<meta http-equiv="Content-Security-Policy">` — if adding new external resources, update all three.
