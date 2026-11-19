---
title: Allyn
year: 2026
lens: [product]
template: case-study
theme: allyn
opener: "Your ring sees you every night. Your doctor sees you once a year. <span class=\"dim\">They’ve never met.</span>"
order: 1
category: Case study · AI product
summary: An AI health ally that turns wearable data into a personal plan, across Western, functional and Eastern care. Designed solo, from research to a 25-screen high-fidelity prototype.
hook: An AI health ally that turns wearable data into a personal plan, across Western, functional and Eastern care.
coverVideo: /media/allyn/thumbnail.mp4
coverRatio: 1.778
thumbVideo: /media/allyn/thumbnail.mp4
thumbRatio: 1.778
role: "AI Product Designer (solo): research, strategy, branding, UI, prototyping"
timeline: "Sept – Nov 2026 [confirm]"
extraFacts:
  - { label: Context, value: "AI digital product design class, The New School" }
  - { label: Deliverables, value: "Brand identity, UI design system, 25-screen high-fidelity prototype, visit brief PDF concept" }
outcome: "Concept rated 4.9 / 5 by interviewees; 4 of 4 said they'd use it"
industry: Health · Wearables · AI
tools: [Figma, Claude, Zoom, Seedance, Nano Banana]
skills: [AI product design, UX research, Product strategy, Branding, UI design system, Prototyping]
ai:
  inProduct: "An AI agent builds a personal pathway from your care approach and goals, explains your data in plain words, and Ask Allyn answers questions using your connected wearable data."
  inProcess:
    - { tool: "Figma", role: "Design & prototyping", note: "Design, prototyping, variables and Figma Slides for the start-up deck." }
    - { tool: "Claude", role: "Research synthesis & prototyping", note: "AI-assisted research synthesis and prototyping." }
    - { tool: "Zoom", role: "Interviews", note: "Running the four in-depth interviews." }
    - { tool: "Nano Banana", role: "Image generation", note: "[How you used it, e.g. the hero device mockups.]" }
    - { tool: "Seedance", role: "Video generation", note: "[How you used it, e.g. animating the hero mockup.]" }
parts:
  - { label: Problem, anchor: problem }
  - { label: Personas, anchor: personas }
  - { label: Research, anchor: research }
  - { label: Insights, anchor: insights }
  - { label: MVP, anchor: mvp }
  - { label: Flow & IA, anchor: flow }
  - { label: Iteration, anchor: iteration }
  - { label: Brand, anchor: brand }
  - { label: Design system, anchor: design-system }
  - { label: Final designs, anchor: final-designs }
  - { label: Designing for AI, anchor: designing-for-ai }
  - { label: Prototype, anchor: prototype }
  - { label: Outcome, anchor: outcome }
---

<h2 id="problem">Wearables collect everything. <span class="dim">Nobody explains it.</span></h2>

Wearables collect huge amounts of data, but most people don't know what it means, what to do about it, or how to bring it to their doctor. Existing apps report numbers but ignore *how* someone wants to heal, whether that's Western medicine, functional medicine, Chinese medicine or a mix. Health decisions end up scattered across devices, doctors and Google.

<div class="a-stats">
  <div class="a-stat"><b>4 / 4</b><span>interviewees found their doctors through referrals, not search</span><small>Interviews · n=4</small></div>
  <div class="a-stat"><b>2 / 4</b><span>do no preparation before checkups</span><small>Interviews · n=4</small></div>
  <div class="a-stat"><b>[ ]</b><span>[Market or problem stat from the deck]</span><small>[Source]</small></div>
</div>

<div class="asset-slot">03-problem.png · problem slide from the deck</div>

<h2 id="personas">Two people, <span class="dim">two ways of healing.</span></h2>

<div class="card-grid card-grid--2">
  <div class="persona">
    <div class="persona__head"><span class="persona__avatar" aria-hidden="true">M</span><div><h4>Maya Torres, 31</h4><span>Marketing</span></div></div>
    <dl>
      <dt>Health</dt><dd>High cholesterol and high blood pressure.</dd>
      <dt>Care approach</dt><dd>Prefers functional and holistic care, and wants to try lifestyle changes before medication.</dd>
      <dt>Needs</dt><dd>To know which tests to ask about, and how to talk to her doctor.</dd>
    </dl>
  </div>
  <div class="persona">
    <div class="persona__head"><span class="persona__avatar" aria-hidden="true">K</span><div><h4>Kevin Liu, 27</h4><span>Finance</span></div></div>
    <dl>
      <dt>Health</dt><dd>Struggles with sleep.</dd>
      <dt>Care approach</dt><dd>Mixes Western and Chinese medicine.</dd>
      <dt>Needs</dt><dd>To understand what his sleep data means, and find care that fits both approaches.</dd>
    </dl>
  </div>
</div>

<div class="asset-slot">04-persona-maya.png + 04-persona-kevin.png · persona slides from the deck</div>

<h2 id="research">10 surveys, 4 interviews. <span class="dim">One clear signal.</span></h2>

I ran a survey of 10 wearable users (7 to 9 short questions, with one open question) and 4 in-depth interviews of 30 to 45 minutes. I wrote a discussion guide in VOFF format, with a beginner and an advanced version. Each interview ran: background → concept pitch → mid-fi walkthrough → feature ranking → 1–5 rating → willingness to pay.

| Participant | About | Devices | Care approach |
|---|---|---|---|
| Rennie, 60 | Oral surgeon | Oura + Eight Sleep + Dexcom CGM | Functional + Western |
| Vera, 54 | Stay-at-home parent, trains 5×/week | Oura + Apple Watch | Functional + Western + acupuncture |
| Ian, 21 | Biology/CS student | Apple Watch + Fitbit | Western |
| Jillian, 19 | Medical student, half-marathon training | Apple Watch | Western + functional + Chinese medicine |

<div class="a-stats">
  <div class="a-stat"><b>4.9/5</b><span>average concept rating (5, 5, 5, 4.5). 4 of 4 said they'd use it.</span><small>Interviews · n=4</small></div>
  <div class="a-stat"><b>3 / 4</b><span>already mix care approaches</span><small>Interviews · n=4</small></div>
  <div class="a-stat"><b>3 / 4</b><span>use two or more devices</span><small>Interviews · n=4</small></div>
  <div class="a-stat"><b>4 / 4</b><span>find doctors through referrals</span><small>Interviews · n=4</small></div>
</div>

<div class="asset-slot">[Survey results · n=10]</div>

<h2 id="insights">Four things real wearable users <span class="dim">taught me.</span></h2>

<div class="card-grid card-grid--2">
  <div class="info-card"><h4>01 · People mix care, and their doctors don't always agree.</h4><p>Rennie's functional doctor opposed statins, but he chose medication anyway. Jillian noted that "lifestyle before statins" suits a functional doctor but would get pushback from a Western one.</p><blockquote>“I'm open to any kind of practitioner that will improve my health.”<cite>Vera</cite></blockquote></div>
  <div class="info-card"><h4>02 · Data needs context before people trust it.</h4><p>All 4 had moments where their tracker felt wrong. Trackers don't know your medications, conditions or symptoms.</p><blockquote>“There are some markers here that the doctor will not request if you didn't mention it.”<cite>Vera</cite></blockquote></div>
  <div class="info-card"><h4>03 · Accountability keeps people coming back.</h4><p>Rennie relies on daily pushes from his other devices. Vera wanted to ask questions about her own data.</p><blockquote>“The most important thing I can add is the push. A daily push.”<cite>Rennie</cite></blockquote></div>
  <div class="info-card"><h4>04 · Finding a provider needs trust signals.</h4><p>Vera, Jillian and Ian all asked how they'd know a provider is good. Jillian added price, insurance and blood-test labs.</p><blockquote>“How do I know that that doctor or that practitioner is actually good?”<cite>Vera</cite></blockquote></div>
</div>

<h2 id="mvp">Four core features. <span class="dim">Everything else can wait.</span></h2>

I ranked candidate features on an impact vs. effort 2×2 and kept four core features.

<div class="asset-slot">07-mvp-2x2.png · impact vs. effort matrix from the deck</div>

<div class="card-grid card-grid--4">
  <div class="info-card"><h4>01 · Personal pathway</h4><p>Pick your care approach and goals, and an AI agent builds your plan.</p></div>
  <div class="info-card"><h4>02 · Insights + 14-day experiments</h4><p>Your data explained in plain words, with one small action to test.</p></div>
  <div class="info-card"><h4>03 · Checkup prep</h4><p>Which tests to ask about, plus a one-page visit brief.</p></div>
  <div class="info-card"><h4>04 · Provider finder</h4><p>A map of providers that match your goal and care approach, with booking.</p></div>
</div>

In interviews, pathway and insights ranked highest. Checkup prep was split (Vera and Ian ranked it near the top). Two people ranked the provider finder last because they rely on referrals, which is why I added trust signals instead of cutting it.

<h2 id="flow">From onboarding <span class="dim">to two endings.</span></h2>

One flow covers all four features, from onboarding to two endings: "insights & plan" and "book & save". Navigation is four tabs (Today · Pathway · Prep · Care) plus an Ask Allyn AI button.

<div class="asset-slot">08-user-flow.png · Figma page “User Flow”</div>

<h2 id="iteration">Testing reshaped <span class="dim">11 parts of the product.</span></h2>

I put grayscale mid-fidelity wireframes in front of all four interviewees, then updated the design based on what they told me.

<div class="asset-slot">09-midfi-onboarding.png · original mid-fi wireframes</div>

<div class="card-grid card-grid--3">
  <div class="asset-slot">09-before-after-wearables.png · mid-fi → v3 1.4</div>
  <div class="asset-slot">09-before-after-prep.png · mid-fi → v3 3.2</div>
  <div class="asset-slot">09-before-after-provider.png · mid-fi → v3 4.2</div>
</div>

| Learning | Change | Screens (v3) |
|---|---|---|
| Mixed care | Questions adapt to doctor type (Western / Functional / Chinese medicine) | 3.2, 3.2b |
| Mixed care | "Your approach" note on every insight | 2.2 |
| Context | New health profile step: conditions, medications, supplements | 1.3 |
| Context | "Other concerns" box in prep, sources on insights, multi-device onboarding | 3.2, 2.2, 1.4 |
| Accountability | Morning push, daily check-in, goal deadlines | 2.0, 2.0b, 1.2 |
| Accountability | Ask Allyn, an AI chat that uses your data | 2.5 |
| Trust | Ratings, reviews, price, insurance, "suggested for your goal", blood test labs, physio/osteopath filters | 4.0, 4.1, 4.2 |
| Trust | Add to calendar and "rate this visit" prompt | 4.3 |

<div class="info-card"><h4>Parked for later</h4><p>Social streaks and kudos, nutrition plans, a recovery tab, supplement timing and interaction checks, per-device tabs, and pricing models (free tier, loyalty discount).</p></div>

<h2 id="brand">Align → Attune → <span class="dim">Allyn.</span></h2>

The app started as "Align", then became "Attune". During her interview, Jillian suggested spelling it like *ally*: “It's like your health ally.” I renamed it **Allyn**.

<div class="card-grid card-grid--2">
  <div class="info-card"><h4>Vision</h4><p>A world where everyone understands their own health, and no one navigates it alone.</p></div>
  <div class="info-card"><h4>Mission</h4><p>Allyn turns the data from your wearable into a personal pathway you can act on. It respects how you choose to heal, guides you through small, proven steps, and walks you into every appointment prepared.</p></div>
</div>

### Personality

Calm · Clear · Open-minded · Supportive · Quietly smart. *“The friend who happens to know a lot about health: calm when you're worried, clear when you're confused, and always in your corner.”*

### Design principles

<ol class="a-principles">
  <li>One clear next step.</li>
  <li>Plain words, real context.</li>
  <li>Respect every path.</li>
  <li>Show the evidence; the doctor decides.</li>
  <li>Glow, don't shout.</li>
  <li>Designed to hand off.</li>
</ol>

### The clasp

I explored wordmarks (ll treatments), symbols from the word, wearable and "extension of you" ideas, then unity and support symbols. The final mark is **the clasp**: two identical hooks holding each other, for you and your ally, equal and connected.

<div class="asset-slot">10-logo-explorations.png · symbol directions v2 / v3 / v4, clasp refinement</div>

<div class="asset-slot">10-logo-final.png · final logo</div>

### Stylescape

Night-sky base, one confident blue, soft auras per health area, and liquid glass on touchable elements only.

<div class="asset-slot">10-stylescape.png · Allyn stylescape</div>

<h2 id="design-system">A night sky <span class="dim">and one confident blue.</span></h2>

<div class="swatches">
  <div class="swatch" style="--c:#121A3A"><span>Night sky</span><code>#121A3A</code></div>
  <div class="swatch" style="--c:#4F74E0"><span>Allyn blue</span><code>#4F74E0</code></div>
  <div class="swatch swatch--light" style="--c:#9DB4F5"><span>Sky</span><code>#9DB4F5</code></div>
  <div class="swatch swatch--light" style="--c:#C9D6FA"><span>Mist</span><code>#C9D6FA</code></div>
  <div class="swatch swatch--light" style="--c:#C1D1FF"><span>Nav idle</span><code>#C1D1FF</code></div>
  <div class="swatch swatch--light" style="--c:#FFFFFF"><span>White</span><code>#FFFFFF</code></div>
</div>

<div class="swatches">
  <div class="swatch" style="--c:linear-gradient(135deg,#9AAFED,#597CE2);background:linear-gradient(135deg,#9AAFED,#597CE2)"><span>Selected gradient</span><code>#9AAFED → #597CE2</code></div>
  <div class="swatch swatch--light" style="--c:#F29AB4"><span>Rose</span><code>#F29AB4</code></div>
  <div class="swatch swatch--light" style="--c:#B8A3F2"><span>Lilac</span><code>#B8A3F2</code></div>
  <div class="swatch swatch--light" style="--c:#93D9BC"><span>Mint</span><code>#93D9BC</code></div>
  <div class="swatch swatch--light" style="--c:#FFF1C2"><span>Cream</span><code>#FFF1C2</code></div>
</div>

Six aura gradients, one per health area:

<div class="a-auras">
  <div class="a-aura" style="background:radial-gradient(circle at 30% 30%,#9DB4F5,#4F74E0 55%,#121A3A)">Sleep</div>
  <div class="a-aura" style="background:radial-gradient(circle at 30% 30%,#F29AB4,#B05278 55%,#121A3A)">Heart</div>
  <div class="a-aura" style="background:radial-gradient(circle at 30% 30%,#B8A3F2,#6E57C9 55%,#121A3A)">Stress</div>
  <div class="a-aura" style="background:radial-gradient(circle at 30% 30%,#93D9BC,#3E9A7A 55%,#121A3A)">Recovery</div>
  <div class="a-aura" style="background:radial-gradient(circle at 30% 30%,#FFF1C2,#D9A94E 55%,#121A3A)">Energy</div>
  <div class="a-aura" style="background:radial-gradient(circle at 30% 30%,#C9D6FA,#597CE2 55%,#121A3A)">Care</div>
</div>

<div class="a-type">
  <div><span class="mono">Urbanist · text</span><span class="a-type__sample">Morning, Kevin. <span class="dim">Sleep was short.</span></span><p>Display 40 · H1 34 two-tone · H2 24 · H3 18 · Body 15 · Caption 12</p></div>
  <div><span class="mono">JetBrains Mono · labels</span><span class="a-type__sample" style="font-family:'JetBrains Mono';font-size:18px;letter-spacing:.08em;text-transform:uppercase">Today's insight · Day 9 of 14</span><p>11 pt, uppercase, for small labels</p></div>
  <div><span class="mono">Doto · metrics</span><span class="a-type__sample" style="font-family:'Doto';font-weight:900;font-size:64px">62</span><p>84 / 56 / 28 for scores and numbers</p></div>
</div>

<div class="card-grid card-grid--2">
  <div class="info-card"><h4>Spacing & grid</h4><p>4 pt scale (4–64). 4-column grid, 24 px margins, 16 px gutters, 345 px content width. Radii: pill, 28, 24, 20, 14.</p></div>
  <div class="info-card"><h4>Components</h4><p>Primary and secondary pill buttons, glass inputs, choice chips, toggles, checkboxes, Yes/No segmented control, date and time pickers, and a nav bar with a sliding active bubble.</p></div>
</div>

<div class="asset-slot">11-design-system.png · UI Design System v2 board</div>

<h2 id="final-designs">One clear next step, <span class="dim">on every screen.</span></h2>

![Allyn high-fidelity screens](/media/allyn/hero.webp)

### Onboarding · Maya

Welcome, care approach tiles, goals and a deadline, health profile, the multi-device wearables ring and a pathway summary. **Decision:** care approach comes first, because everything else adapts to it.

<div class="even-row even-row--mid">
  <figure style="--ar:.461"><div class="asset-slot" style="aspect-ratio:393/852;margin:0;width:100%;transform:none">1.1 Care approach</div><figcaption><b>1.1 · Care approach</b></figcaption></figure>
  <figure style="--ar:.461"><div class="asset-slot" style="aspect-ratio:393/852;margin:0;width:100%;transform:none">1.3 Health profile</div><figcaption><b>1.3 · Health profile</b></figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-wearables.webp" width="393" height="852" alt="Onboarding: connect your wearables" loading="lazy" data-zoom /><figcaption><b>1.4 · Wearables</b>Multi-device ring</figcaption></figure>
</div>

### Insights & action · Kevin

Morning push, daily check-in, Today with a pixel sleep-score ring, insights (why first, sources last), a 14-day experiment, Ask Allyn chat and the Pathway tab. **Decision:** one clear next step instead of a dashboard.

<div class="even-row even-row--mid">
  <figure style="--ar:.461"><div class="asset-slot" style="aspect-ratio:393/852;margin:0;width:100%;transform:none">2.0 Morning push</div><figcaption><b>2.0 · Morning push</b></figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-today.webp" width="393" height="852" alt="Today: sleep score and today's insight" loading="lazy" data-zoom /><figcaption><b>2.1 · Today</b>Pixel sleep-score ring</figcaption></figure>
  <figure style="--ar:.461"><div class="asset-slot" style="aspect-ratio:393/852;margin:0;width:100%;transform:none">2.5 Ask Allyn</div><figcaption><b>2.5 · Ask Allyn</b></figcaption></figure>
</div>

### Checkup prep · Maya

The Prep tab, what to ask (Western vs. functional), the visit brief, and a PDF preview to share. **Decision:** the brief hands off to the doctor, who decides.

<div class="even-row even-row--mid">
  <figure style="--ar:.461"><div class="asset-slot" style="aspect-ratio:393/852;margin:0;width:100%;transform:none">3.2 What to ask</div><figcaption><b>3.2 · What to ask</b></figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-visit-brief.webp" width="393" height="852" alt="Visit brief for a doctor's appointment" loading="lazy" data-zoom /><figcaption><b>3.3 · Visit brief</b>One page for the doctor</figcaption></figure>
  <figure style="--ar:.461"><div class="asset-slot" style="aspect-ratio:393/852;margin:0;width:100%;transform:none">3.4 Brief preview & share</div><figcaption><b>3.4 · Preview & share</b></figcaption></figure>
</div>

### Provider finder · Kevin

Filters, a care map with a pulsing top match, provider profiles, booking and confirmation. **Decision:** trust signals (ratings, price, insurance), because people rely on referrals.

<div class="even-row even-row--mid">
  <figure style="--ar:.461"><div class="asset-slot" style="aspect-ratio:393/852;margin:0;width:100%;transform:none">4.1 Care map</div><figcaption><b>4.1 · Care map</b></figcaption></figure>
  <figure style="--ar:.461"><div class="asset-slot" style="aspect-ratio:393/852;margin:0;width:100%;transform:none">4.2 Provider profile</div><figcaption><b>4.2 · Provider profile</b></figcaption></figure>
  <figure style="--ar:.461"><div class="asset-slot" style="aspect-ratio:393/852;margin:0;width:100%;transform:none">4.3 Book a visit</div><figcaption><b>4.3 · Book a visit</b></figcaption></figure>
</div>

<h2 id="designing-for-ai">Show the evidence. <span class="dim">The doctor decides.</span></h2>

<div class="card-grid card-grid--2">
  <div class="info-card"><h4>Trust & transparency</h4><p>Every insight shows <em>why</em> and links its sources. The brief and insights say “Illustrative data · your doctor decides.”</p></div>
  <div class="info-card"><h4>Uncertainty & safety</h4><p>Allyn never gives dosing advice, and frames tests as “questions to ask”, not diagnoses.</p></div>
  <div class="info-card"><h4>Control</h4><p>Users can edit their approach, goals and profile at any time, and checklists let them choose which tests go in the brief.</p></div>
  <div class="info-card"><h4>Conversational help</h4><p>Ask Allyn answers using connected data, with a “Based on: Oura Ring + Fitbit · last 14 days” note and hold-to-speak voice input.</p></div>
</div>

<h2 id="prototype">Small motions <span class="dim">that feel calm.</span></h2>

A clickable prototype covers every flow, from onboarding to booking.

<div class="card-grid card-grid--2">
  <div class="asset-slot">14-prototype-onboarding.mp4</div>
  <div class="asset-slot">14-prototype-insights.mp4</div>
  <div class="asset-slot">14-prototype-prep.mp4</div>
  <div class="asset-slot">14-prototype-provider.mp4</div>
</div>

<div class="card-grid card-grid--4">
  <div class="asset-slot">14-micro-nav.gif · sliding nav bubble</div>
  <div class="asset-slot">14-micro-wearables.gif · wearable ring glowing on</div>
  <div class="asset-slot">14-micro-mic.gif · hold-to-speak, “Listening…”</div>
  <div class="asset-slot">14-micro-map-pulse.gif · pulsing top-match pin</div>
</div>

<h2 id="outcome">4.9 out of 5. <span class="dim">And what comes next.</span></h2>

<div class="a-stats">
  <div class="a-stat"><b>4.9/5</b><span>concept rating from interviewees</span><small>Interviews · n=4</small></div>
  <div class="a-stat"><b>4 / 4</b><span>said they'd use it</span><small>Interviews · n=4</small></div>
  <div class="a-stat"><b>11</b><span>parts of the product reshaped by testing</span><small>See iteration</small></div>
</div>

### Next

<div class="card-grid card-grid--2">
  <div class="info-card"><h4>01 · Test the v3 prototype</h4><p>Run the high-fidelity prototype with users.</p></div>
  <div class="info-card"><h4>02 · Real wearable data access</h4><p>Rennie's main doubt: will wearable companies share their data?</p></div>
  <div class="info-card"><h4>03 · A privacy-first data model</h4><p>Jillian's main concern.</p></div>
  <div class="info-card"><h4>04 · A pricing model</h4><p>One interviewee found $9.99/month too much without a free tier.</p></div>
</div>

### What I learned

[My reflection, 2–3 sentences]
