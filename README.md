# Portfolio 2026

One site, two lenses: **Product & AI** (default) and **Brand & Editorial** (`/?lens=brand`).
Built with [Astro](https://astro.build). Deploys on Vercel.

## Edit the basics
Everything about *you* — name, email, headlines, bios, tags, AI chat prompts, ID-card fun facts,
experience, playground — lives in **`src/data/site.ts`**. Replace anything in `[brackets]`.

- Resume → put it at `public/resume.pdf`
- 3D workspace hero → put images/videos in `public/hero/` and set `hero.product` / `hero.brand` in `site.ts`
- AI chat avatar / ID photo → `public/hero/…` and set `avatar` / `idCard.photo`

## Add or edit a project
Each project is a folder in **`src/content/projects/`**:

```
src/content/projects/
  01-growtopia/
    project.md      ← text + settings
    garden.webp     ← images live next to it
```

`project.md` starts with settings, then the write-up:

```md
---
title: Growtopia
year: 2025
lens: [product]          # [product], [brand] or [brand, product] — first one sets the page style
template: case-study     # case-study (text-led) or editorial (image-led)
order: 1                 # position in the Product & AI list
brandOrder: 3            # optional: position in the Brand & Editorial list
category: Product design · Game
summary: One sentence shown on the card and at the top of the page.
cover: ./garden.webp     # or coverVideo: /media/growtopia/cover.mp4
role: Product designer
tools: [Figma, Midjourney]
---

## The problem
Write normally. Headings become numbered sections on case studies.

![Alt text](./garden.webp)
![Two images on consecutive lines sit side by side](./night.webp)
```

- **Images**: drop them in the project folder and reference `./name.webp` (jpg/png are fine — the site optimizes them).
- **Side by side**: put 2 or 3 images on consecutive lines (no blank line between).
- **Videos**: put `.mp4` files in `public/media/<project>/` and reference them like an image:
  `![Walkthrough](/media/growtopia/planting.mp4)` — they autoplay, muted and looping.
  Keep videos short and compressed (under ~5 MB each).
- **Hide a project**: add `draft: true`.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
```

## Deploy
Import this repo on [vercel.com](https://vercel.com/new) → it detects Astro → Deploy.
Every push to `main` updates the live site.

## Coming next
- `/api/ask`: the AI version of me, answering only from this site's content + resume.
