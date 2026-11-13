# Portfolio 2026

One site, two lenses: **Product & AI** (default) and **Brand & Editorial** (`/?lens=brand`).
Built with [Astro](https://astro.build). Deploys on Vercel.

## Edit the basics
Everything about *you* — name, email, headlines, bios, tags, AI chat prompts, ID-card fun facts,
experience, playground — lives in **`src/data/site.ts`**. Replace anything in `[brackets]`.

- Resume → put it at `public/resume.pdf`
- 3D workspace hero → put images/videos in `public/hero/` and set `hero.product` / `hero.brand` in `site.ts`.
  The scene is interactive: click to zoom toward the screens, click a screen to jump to that lens's work.
  Adjust `desk.zoom` and `desk.screens` (all % of the image) so the hotspots sit on your screens.
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

### Story fields (case studies)
Case studies are told as a story. These optional fields fill the top of the page and the closing sections;
the Markdown body below them is your chapters (each `##` heading becomes "Chapter 01, 02…").

```yaml
skills: [Product design, Prototyping]        # chips on the card + case study
tools: [Figma, Midjourney, ChatGPT]          # tool row on the card + case study
industry: Productivity
hook: The one-line tension of the story, shown under the title.
context: Why this problem mattered to YOU, in first person.
challenge: The brief or "How might we…" question.
stats:                                       # big numbers band (optional)
  - { value: "80×", label: "more harmful than CO₂", note: "source" }
ai:                                          # "AI in two ways"
  inProduct: How AI works inside the product itself.
  inProcess:
    - { tool: Midjourney, role: Asset generation, note: What you did and where you stepped in. }
reflection:
  - { title: Test with real users, text: What you'd validate next. }
```

Suggested chapter flow: **the problem worth solving → what you found → the turning point → building it → how it works → where it landed.**

Tool logos (optional): put a logo in `public/tools/` and map it in `src/data/site.ts → toolIcons`.

- **Images**: drop them in the project folder and reference `./name.webp` (jpg/png are fine — the site optimizes them).
- **Side by side**: put 2, 3 or 4 images on consecutive lines (no blank line between).
- **Videos**: put `.mp4` files in `public/media/<project>/` and reference them like an image:
  `![Walkthrough](/media/growtopia/planting.mp4)` — they autoplay, muted and looping.
  Keep videos short and compressed (under ~5 MB each).
- **No background box**: add `-nobg` to an image filename (e.g. `logo-nobg.webp`) for transparent logos.
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
