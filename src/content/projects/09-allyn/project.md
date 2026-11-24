---
title: Allyn
year: 2026
inProgress: true
lens: [product]
template: case-study
theme: allyn
opener: "Your ring sees you every night. Your doctor sees you once a year. <span class=\"dim\">They’ve never met.</span>"
order: 1
category: Case study · AI product design
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
  - { label: Why, anchor: why }
  - { label: The risk, anchor: situation }
  - { label: Listening, anchor: listening }
  - { label: Insights, anchor: insights }
  - { label: Building with AI, anchor: building-with-ai }
  - { label: Priorities, anchor: mvp }
  - { label: Feedback, anchor: iteration }
  - { label: AI's limits, anchor: where-ai-stops }
  - { label: Brand, anchor: brand }
  - { label: The product, anchor: final-designs }
  - { label: Designing for AI, anchor: designing-for-ai }
  - { label: Next, anchor: outcome }
---

<div class="ai-two">
  <div class="ai-two__col ai-two__col--process"><span class="ai-note__tag">AI in my process</span><h4>How I built it</h4><p>Claude for research synthesis and prototyping. Nano Banana and Seedance for the hero visuals. Figma for design, prototyping and the start-up deck.</p></div>
  <div class="ai-two__col ai-two__col--product"><span class="ai-note__tag">AI in the product</span><h4>What it does for people</h4><p>An AI agent builds your pathway, explains your data in plain words, and Ask Allyn answers questions using your own wearable data.</p></div>
  <p class="ai-two__legend mono">Follow the two markers through the story ↓</p>
</div>

<h2 id="why">Why this matters <span class="dim">to me.</span></h2>

Health is one of the most personal things we have, yet the tools around it feel generic. Wearables give us more data about ourselves than ever, but in my research I kept hearing the same gap: numbers without meaning, and advice that ignores how people actually choose to heal.

I believe AI should make things clearer, not noisier. I wanted to design something that explains your data in plain words, respects every path to care, and walks you into your doctor's office prepared, so no one has to navigate their health alone.

[Optional, only if true: one personal line, e.g. a moment with your own tracker, or growing up between Western and Chinese medicine in Hong Kong.]

<h2 id="situation">Wearables collect everything. <span class="dim">Nobody explains it.</span></h2>

Wearables collect huge amounts of data, but most people don't know what it means, what to do about it, or how to bring it to their doctor. Existing apps report numbers but ignore *how* someone wants to heal, whether that's Western medicine, functional medicine, Chinese medicine or a mix. Health decisions end up scattered across devices, doctors and Google.

<blockquote class="a-hmw"><span class="mono">Problem statement</span>How might we help wearable users understand and act on their health data, so they can reach their health goals with confidence?</blockquote>

<div class="card-grid card-grid--3">
  <div class="info-card"><h4>Who</h4><p>Oura, WHOOP and Fitbit owners who want more from their data.</p></div>
  <div class="info-card"><h4>What</h4><p>Explanations and next steps, not just scores and charts.</p></div>
  <div class="info-card"><h4>Why</h4><p>Personal plans and nearby care that fit how they want to heal.</p></div>
</div>

<div class="a-stats">
  <div class="a-stat"><b>4 / 4</b><span>interviewees found their doctors through referrals, not search</span><small>Interviews · n=4</small></div>
  <div class="a-stat"><b>2 / 4</b><span>do no preparation before checkups</span><small>Interviews · n=4</small></div>
</div>

### The 5 whys

Asking "why" five times took me from "trackers show numbers" to the real cost: people waste money on supplements and tests, drop routines, and miss the right questions at checkups.

<div class="card-grid card-grid--3">
  <div class="info-card"><h4>The risk</h4><p>People act on numbers they don't understand, piece together conflicting advice from social media, AI chats and forums, or ignore their data completely.</p></div>
  <div class="info-card"><h4>The gap</h4><p>Their doctors don't always agree, and checkups happen with no preparation.</p></div>
  <div class="info-card"><h4>What's needed</h4><p>One place that explains the data, respects how each person wants to heal, and hands off to the doctor.</p></div>
</div>

<ol class="a-whys">
  <li><span class="a-whys__n">01</span><b>Why do tracker users struggle to improve their health?</b><span>Their apps show numbers like heart rate and HRV, but rarely explain them or say what to do next.</span></li>
  <li><span class="a-whys__n">02</span><b>Why don't they know what to do next?</b><span>The data lacks context: goals, blood work, diet and symptoms all live somewhere else.</span></li>
  <li><span class="a-whys__n">03</span><b>Why is scattered context a problem?</b><span>People piece together advice from social media, AI chats and forums that often conflicts.</span></li>
  <li><span class="a-whys__n">04</span><b>Why is this hard to fix?</b><span>No tool combines personal data, goals and different health approaches into one trustworthy plan.</span></li>
  <li><span class="a-whys__n">05</span><b>Why does this matter?</b><span>People waste money on supplements and tests, drop routines, and miss the right questions at checkups.</span></li>
</ol>

<h2 id="listening">Before designing, <span class="dim">I listened.</span></h2>

I wanted to hear from real wearable users before deciding anything. These are the two people I designed for, and the research that shaped them.

### Two people, two ways of healing

<div class="card-grid card-grid--2">
  <div class="persona">
    <div class="persona__head"><span class="persona__avatar" aria-hidden="true">M</span><div><h4>Maya Torres, 31</h4><span>Marketing manager · Oura Ring · functional & holistic</span></div></div>
    <blockquote>“I know my numbers. I want to lower them naturally, with a plan that fits 60-hour weeks.”</blockquote>
    <dl>
      <dt>Health</dt><dd>High cholesterol and hypertension. Goal: lower blood pressure and LDL naturally.</dd>
      <dt>Frustrations</dt><dd>Lots of research, never enough time. Oura shows stress, not what to change. Doctors jump straight to statins.</dd>
      <dt>How Allyn helps</dt><dd>A functional pathway for heart health that links BP spikes to stress, sleep and food, and maps functional clinics near work.</dd>
    </dl>
  </div>
  <div class="persona">
    <div class="persona__head"><span class="persona__avatar" aria-hidden="true">K</span><div><h4>Kevin Liu, 27</h4><span>Finance, long hours · WHOOP · Western + Chinese medicine</span></div></div>
    <blockquote>“WHOOP says my recovery is in the red. I just want to sleep better, and I don't know where to start.”</blockquote>
    <dl>
      <dt>Health</dt><dd>A beginner, curious to learn. Goal: improve his sleep quality.</dd>
      <dt>Frustrations</dt><dd>Recovery scores with no plan to fix them. Health advice online feels overwhelming. Unsure what in Chinese medicine is safe.</dd>
      <dt>How Allyn helps</dt><dd>A beginner Western + Chinese pathway, short plain-language sleep lessons, and acupuncturists or sleep clinics nearby.</dd>
    </dl>
  </div>
</div>

### Inside Maya's head, and both of their journeys

The empathy map captured what Maya says, thinks, does and feels. The journey map follows Maya and Kevin from discovering Allyn to finding care, and what to design for at each stage.

<span class="mono a-label">Empathy map · Maya, primary persona</span>

<div class="a-empathy">
  <div class="a-empathy__q a-empathy__q--says"><span class="mono">Says</span><ul><li>Why is my BP still high?</li><li>What do these scores mean?</li><li>Is this supplement safe?</li><li>“Let's start a statin”</li><li>Can my doctors work together?</li><li>I need a plan that fits my week</li><li>Is it stress or my diet?</li><li>Who can I see near me?</li></ul></div>
  <div class="a-empathy__q a-empathy__q--thinks"><span class="mono">Thinks</span><ul><li>Am I doing this right?</li><li>Do I really need statins?</li><li>Who should I trust?</li><li>Is this worth the money?</li><li>Why is my BP up today?</li><li>There must be a root cause</li><li>What am I missing?</li><li>I don't want more pills</li></ul></div>
  <div class="a-empathy__q a-empathy__q--does"><span class="mono">Does</span><ul><li>Checks Oura every morning</li><li>Asks ChatGPT about symptoms</li><li>Meal-preps heart-healthy</li><li>Listens to health podcasts</li><li>Buys supplements online</li><li>Logs her BP readings</li><li>Googles doctors nearby</li><li>Works through lunch</li></ul></div>
  <div class="a-empathy__q a-empathy__q--feels"><span class="mono">Feels</span><ul><li>Overwhelmed</li><li>Dismissed</li><li>Anxious</li><li>Hopeful</li><li>Curious</li><li>Unsure who to trust</li><li>Frustrated</li><li>Motivated</li></ul></div>
  <div class="a-empathy__c"><b>Maya</b><span class="mono">Persona 01</span></div>
</div>

<span class="mono a-label">Multi-user journey map · Maya and Kevin</span>

<div class="a-journey">
  <div class="a-journey__row a-journey__stages"><span class="mono">Stages</span><span>Discover</span><span>Onboard</span><span>Set pathway</span><span>Daily insights</span><span>Checkup prep</span><span>Find care</span></div>
  <div class="a-journey__row a-journey__feel"><span class="mono">Feelings<small><i class="l1"></i>Maya <i class="l2"></i>Kevin</small></span><div class="a-journey__chart"><svg viewBox="0 0 600 110" preserveAspectRatio="none" aria-hidden="true"><polyline points="50,68 150,50 250,32 350,46 450,24 550,14" fill="none" stroke="#9DB4F5" stroke-width="2.5"/><polyline points="50,82 150,64 250,50 350,32 450,28 550,21" fill="none" stroke="#B8A3F2" stroke-width="2.5" stroke-dasharray="6 5"/><circle cx="50" cy="68" r="4.5" fill="#9DB4F5"/><circle cx="150" cy="50" r="4.5" fill="#9DB4F5"/><circle cx="250" cy="32" r="4.5" fill="#9DB4F5"/><circle cx="350" cy="46" r="4.5" fill="#9DB4F5"/><circle cx="450" cy="24" r="4.5" fill="#9DB4F5"/><circle cx="550" cy="14" r="4.5" fill="#9DB4F5"/><circle cx="50" cy="82" r="4.5" fill="#121A3A" stroke="#B8A3F2" stroke-width="2"/><circle cx="150" cy="64" r="4.5" fill="#121A3A" stroke="#B8A3F2" stroke-width="2"/><circle cx="250" cy="50" r="4.5" fill="#121A3A" stroke="#B8A3F2" stroke-width="2"/><circle cx="350" cy="32" r="4.5" fill="#121A3A" stroke="#B8A3F2" stroke-width="2"/><circle cx="450" cy="28" r="4.5" fill="#121A3A" stroke="#B8A3F2" stroke-width="2"/><circle cx="550" cy="21" r="4.5" fill="#121A3A" stroke="#B8A3F2" stroke-width="2"/></svg></div></div>
  <div class="a-journey__row a-journey__maya"><span class="mono">Maya</span><span>Hears about Allyn from a friend</span><span>Connects Oura and uploads labs</span><span>Picks functional; goal: lower BP</span><span>Sees a BP spike after short sleep</span><span>Brings a one-page brief to her doctor</span><span>Books a functional clinic nearby</span></div>
  <div class="a-journey__row a-journey__kevin"><span class="mono">Kevin</span><span>Sees Allyn on a sleep thread</span><span>Connects WHOOP, skips labs</span><span>Picks Western + Chinese; goal: sleep</span><span>Learns late coffee hurts his sleep</span><span>Asks his doctor about acupuncture</span><span>Finds an acupuncturist near work</span></div>
  <div class="a-journey__row a-journey__for"><span class="mono">Design for</span><span>A sample insight before sign-up</span><span>Lab uploads that are optional</span><span>Mixing care approaches</span><span>Beginner lessons in plain language</span><span>A brief shared by PDF or link</span><span>Telehealth when none is nearby</span></div>
</div>

### 10 surveys, 4 interviews. One clear signal.

I ran a survey of 10 wearable users (7 to 9 short questions, with one open question) and 4 in-depth interviews of 30 to 45 minutes. I wrote a discussion guide in VOFF format, with a beginner and an advanced version. Each interview ran: background → concept pitch → mid-fi walkthrough → feature ranking → 1–5 rating → willingness to pay.

| Participant | About | Devices | Care approach |
|---|---|---|---|
| Rennie, 60 | Oral surgeon | Oura + Eight Sleep + Dexcom CGM | Functional + Western |
| Vera, 54 | Stay-at-home parent, trains 5×/week | Oura + Apple Watch | Functional + Western + acupuncture |
| Ian, 21 | Biology/CS student | Apple Watch + Fitbit | Western |
| Jillian, 19 | Medical student, half-marathon training | Apple Watch | Western + functional + Chinese medicine |

<div class="a-stats">
  <div class="a-stat"><b>3 / 4</b><span>already mix care approaches</span><small>Interviews · n=4</small></div>
  <div class="a-stat"><b>3 / 4</b><span>use two or more devices</span><small>Interviews · n=4</small></div>
</div>

<div class="asset-slot">[Survey results · n=10]</div>

### The competition

I mapped direct competitors (January AI, Bevel, Oura, WHOOP, Superpower), secondary ones (Parsley Health, Function Health, ChatGPT Health) and indirect ones (practitioner directories, Zocdoc, Apple Health). None of them let you choose your care approach or find matching providers nearby.

<div class="a-table-wrap">

| | January AI | Oura | Superpower | Parsley Health | ChatGPT Health | **Allyn** |
|---|---|---|---|---|---|---|
| Overview | Free AI coach using records and wearables | Smart ring with AI and lab tests | Blood tests, plans and clinicians | Online functional medicine doctors | ChatGPT linked to Apple Health | **Personal pathways from any tracker** |
| Strengths | Free; links Oura and WHOOP | Sleep and recovery data | Clear plans; syncs wearables | Real doctors; insurance-covered | Free and conversational | **Any tracker; your care type** |
| Weaknesses | Centred on glucose and food | Only Oura's own ring | Sells tests and supplements | Visit-based; not tracker-first | No plans or tracking | **New brand; must earn trust** |
| AI insights | ✓ | ✓ | ✓ | — | ✓ | **✓** |
| Blood test results | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** |
| Any wearable brand | ✓ | — | ✓ | — | ✓ | **✓** |
| Nothing to sell | ✓ | — | — | — | ✓ | **✓** |
| Choose care approach | — | — | — | — | — | **✓** |
| Find providers nearby | — | — | — | — | — | **✓** |

</div>

<span class="mono a-label">✓ offered · — not found · public product info, Oct 2026</span>

<div class="card-grid card-grid--3">
  <div class="info-card"><h4>Any tracker, not one brand</h4><p>Oura and WHOOP's AI reads their own devices. Allyn works across all of them.</p></div>
  <div class="info-card"><h4>Nothing to sell you</h4><p>Lab memberships sell tests and supplements. Allyn's advice stays independent.</p></div>
  <div class="info-card"><h4>Your path, your providers</h4><p>Pick Western, functional or Chinese medicine, then find nearby providers who practice it.</p></div>
</div>

<div class="ai-note ai-note--process"><span class="ai-note__tag">AI in my process · Claude</span><p>I used Claude for AI-assisted research synthesis, turning the survey answers and four interviews into the patterns below. [Add how: what you gave it, and how you checked its output.]</p></div>

<h2 id="insights">Four things real wearable users <span class="dim">taught me.</span></h2>

<div class="card-grid card-grid--2">
  <div class="info-card"><h4>01 · People mix care, and their doctors don't always agree.</h4><p>Rennie's functional doctor opposed statins, but he chose medication anyway. Jillian noted that "lifestyle before statins" suits a functional doctor but would get pushback from a Western one.</p><blockquote>“I'm open to any kind of practitioner that will improve my health.”<cite>Vera</cite></blockquote></div>
  <div class="info-card"><h4>02 · Data needs context before people trust it.</h4><p>All 4 had moments where their tracker felt wrong. Trackers don't know your medications, conditions or symptoms.</p><blockquote>“There are some markers here that the doctor will not request if you didn't mention it.”<cite>Vera</cite></blockquote></div>
  <div class="info-card"><h4>03 · Accountability keeps people coming back.</h4><p>Rennie relies on daily pushes from his other devices. Vera wanted to ask questions about her own data.</p><blockquote>“The most important thing I can add is the push. A daily push.”<cite>Rennie</cite></blockquote></div>
  <div class="info-card"><h4>04 · Finding a provider needs trust signals.</h4><p>Vera, Jillian and Ian all asked how they'd know a provider is good. Jillian added price, insurance and blood-test labs.</p><blockquote>“How do I know that that doctor or that practitioner is actually good?”<cite>Vera</cite></blockquote></div>
</div>

<div class="ai-note ai-note--product"><span class="ai-note__tag">AI in the product · Ask Allyn</span><p>Insight 03 shaped the product directly: Vera wanted to ask questions about her own data, so I added Ask Allyn, an AI chat that answers using your connected wearables.</p></div>

<h2 id="building-with-ai">Building with AI, <span class="dim">tool by tool.</span></h2>

I didn't use one AI for everything. I tried different tools for different jobs, kept what helped, and stayed in charge of the decisions.

<div class="card-grid card-grid--2">
  <div class="info-card"><h4>Claude · research synthesis</h4><p>Helped me turn the survey and interviews into clear patterns. [What worked, and what you had to correct.]</p></div>
  <div class="info-card"><h4>Claude · prototyping</h4><p>AI-assisted prototyping as the flows moved from mid-fidelity to v3. [What it sped up.]</p></div>
  <div class="info-card"><h4>Nano Banana + Seedance · visuals</h4><p>Staged the screens as floating devices and animated them into the hero film. [Confirm.]</p></div>
  <div class="info-card"><h4>[AI for branding]</h4><p>[If you used AI to explore names, logo directions or the stylescape faster, describe it here. Otherwise remove this card.]</p></div>
</div>

<h2 id="mvp">Four core features. <span class="dim">Everything else can wait.</span></h2>

<blockquote class="a-hmw"><span class="mono">Value proposition</span>Allyn is the AI health companion for fitness trackers that allows health-conscious people to understand their data, follow a health pathway built around their goals, and find the right care nearby.</blockquote>

Deciding what matters is a human call. I ranked candidate features on an impact vs. effort 2×2 and kept four core features.

<div class="a-matrix" role="img" aria-label="Impact vs effort matrix: all candidate features sit in the high-value half">
  <span class="a-matrix__ax a-matrix__ax--t">High value</span><span class="a-matrix__ax a-matrix__ax--b">Low value</span><span class="a-matrix__ax a-matrix__ax--l">Low effort</span><span class="a-matrix__ax a-matrix__ax--r">High effort</span>
  <span class="a-matrix__chip" style="left:6%;top:16%">Detailed daily insights</span>
  <span class="a-matrix__chip" style="left:22%;top:6%">Care approach & goal setup</span>
  <span class="a-matrix__chip" style="left:6%;top:36%">Daily check-ins</span>
  <span class="a-matrix__chip" style="left:30%;top:28%">Checkup prep</span>
  <span class="a-matrix__chip" style="left:33%;top:40%">Reading tracker data</span>
  <span class="a-matrix__chip" style="left:48%;top:17%">Red flags</span>
  <span class="a-matrix__chip" style="left:68%;top:12%">Personal pathway</span>
  <span class="a-matrix__chip" style="left:68%;top:28%">Provider finder</span>
</div>

<div class="card-grid card-grid--4">
  <div class="info-card"><h4>01 · Personal pathway</h4><p>Pick your care approach and goals, and an AI agent builds your plan.</p></div>
  <div class="info-card"><h4>02 · Insights + 14-day experiments</h4><p>Your data explained in plain words, with one small action to test.</p></div>
  <div class="info-card"><h4>03 · Checkup prep</h4><p>Which tests to ask about, plus a one-page visit brief.</p></div>
  <div class="info-card"><h4>04 · Provider finder</h4><p>A map of providers that match your goal and care approach, with booking.</p></div>
</div>

<div class="ai-note ai-note--product"><span class="ai-note__tag">AI in the product · Pathway + insights</span><p>Two of the four features are AI at their core: an AI agent builds your personal pathway from your care approach and goals, and insights translate your data into plain words with one small action to test.</p></div>

In interviews, pathway and insights ranked highest. Checkup prep was split (Vera and Ian ranked it near the top). Two people ranked the provider finder last because they rely on referrals, which is why I added trust signals instead of cutting it.

### From onboarding to two endings

One flow covers all four features, from onboarding to two endings: "insights & plan" and "book & save". Navigation is four tabs (Today · Pathway · Prep · Care) plus an Ask Allyn AI button.

<div class="even-row">
  <figure style="--ar:1.667"><img src="/media/allyn/user-flow.webp" width="1600" height="960" alt="User flow: Option B, goal-first" loading="lazy" data-zoom /><figcaption><b>Goal-first flow · works with or without a tracker</b></figcaption></figure>
</div>

<h2 id="iteration">Testing reshaped <span class="dim">11 parts of the product.</span></h2>

Human feedback drove every change. I put grayscale mid-fidelity wireframes in front of all four interviewees, then updated the design based on what they told me.

<div class="even-row even-row--narrow">
  <figure style="--ar:0.416"><img src="/media/allyn/midfi-v2.webp" width="665" height="1600" alt="Mid-fidelity updates from user testing (v2)" loading="lazy" data-zoom /><figcaption><b>Mid-fidelity v2 · updates from user testing</b></figcaption></figure>
</div>

### Before and after testing

<div class="even-row">
  <figure style="--ar:.46"><img src="/media/allyn/midfi-wearables.webp" width="440" height="956" alt="Wearables: mid-fidelity before testing" loading="lazy" data-zoom /><figcaption><b>Before</b>Wearables · mid-fi</figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-wearables.webp" width="393" height="852" alt="Wearables: after testing" loading="lazy" data-zoom /><figcaption><b>After</b>Wearables · v3</figcaption></figure>
  <figure style="--ar:.46"><img src="/media/allyn/midfi-what-to-ask.webp" width="440" height="956" alt="What to ask: mid-fidelity before testing" loading="lazy" data-zoom /><figcaption><b>Before</b>What to ask · mid-fi</figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-what-to-ask.webp" width="393" height="852" alt="What to ask: after testing" loading="lazy" data-zoom /><figcaption><b>After</b>What to ask · v3</figcaption></figure>
  <figure style="--ar:.46"><img src="/media/allyn/midfi-provider.webp" width="440" height="956" alt="Provider: mid-fidelity before testing" loading="lazy" data-zoom /><figcaption><b>Before</b>Provider · mid-fi</figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-provider.webp" width="393" height="852" alt="Provider: after testing" loading="lazy" data-zoom /><figcaption><b>After</b>Provider · v3</figcaption></figure>
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

<div class="ai-note ai-note--process"><span class="ai-note__tag">AI in my process · Claude</span><p>I also used Claude for AI-assisted prototyping as I moved from mid-fidelity to v3. [Add what it helped with, e.g. copy, edge cases or logic for the flows.]</p></div>

<div class="info-card"><h4>Parked for later</h4><p>Social streaks and kudos, nutrition plans, a recovery tab, supplement timing and interaction checks, per-device tabs, and pricing models (free tier, loyalty discount).</p></div>

<h2 id="where-ai-stops">Where AI <span class="dim">can't solve it.</span></h2>

AI can explain data and suggest next steps, but some of Allyn's biggest problems aren't design or AI problems. They need permission, trust and people.

<div class="card-grid card-grid--2">
  <div class="info-card"><h4>Permission</h4><p>Allyn only works if wearable companies share their data. Rennie's main doubt was whether they will. This needs partnerships, not prompts.</p></div>
  <div class="info-card"><h4>Privacy</h4><p>Health data is personal. Jillian's biggest concern was privacy, so the data model has to be privacy-first before anything else.</p></div>
  <div class="info-card"><h4>The doctor decides</h4><p>Allyn never diagnoses or gives dosing advice. It prepares people for the appointment, and the decision stays with the doctor.</p></div>
  <div class="info-card"><h4>Trust is human</h4><p>All four interviewees found doctors through referrals. Ratings, reviews, price and insurance help, but trust in a provider still comes from people.</p></div>
</div>

<div class="info-card"><h4>What it would take</h4><p>Partnerships with wearable companies for data access, a privacy-first data model, and prioritising the features people ranked highest (pathway and insights) before anything else. [Add who would need to sign off, e.g. legal, partnerships or clinical advisors.]</p></div>

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

<div class="even-row">
  <figure style="--ar:2.817"><img src="/media/allyn/logo-v2.webp" width="1600" height="568" alt="Symbol directions v2" loading="lazy" data-zoom /><figcaption><b>Symbols from the meaning of the word</b></figcaption></figure>
</div>

<div class="even-row">
  <figure style="--ar:2.817"><img src="/media/allyn/logo-v4.webp" width="1600" height="568" alt="Symbol directions v4" loading="lazy" data-zoom /><figcaption><b>Unity, support and alignment</b></figcaption></figure>
</div>

<div class="even-row">
  <figure style="--ar:2.428"><img src="/media/allyn/logo-clasp.webp" width="1600" height="659" alt="Clasp refinement" loading="lazy" data-zoom /><figcaption><b>Refining the clasp</b></figcaption></figure>
</div>

<div class="even-row">
  <figure style="--ar:2.092"><img src="/media/allyn/logo-final.webp" width="1600" height="765" alt="Final Allyn logo" loading="lazy" data-zoom /><figcaption><b>The clasp: two hooks, one hold</b></figcaption></figure>
</div>

### Stylescape

Night-sky base, one confident blue, soft auras per health area, and liquid glass on touchable elements only.

<div class="even-row">
  <figure style="--ar:1.406"><img src="/media/allyn/stylescape.webp" width="1600" height="1138" alt="Allyn stylescape" loading="lazy" data-zoom /></figure>
</div>

### A night sky and one confident blue

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

<div class="even-row">
  <figure style="--ar:1.587"><img src="/media/allyn/design-system.webp" width="1600" height="1008" alt="Allyn UI design system" loading="lazy" data-zoom /></figure>
</div>

<h2 id="final-designs">One clear next step, <span class="dim">on every screen.</span></h2>

![Allyn high-fidelity screens](/media/allyn/hero.webp)

<div class="ai-note ai-note--process"><span class="ai-note__tag">AI in my process · Nano Banana + Seedance</span><p>I used Nano Banana to stage my screens as floating devices, and Seedance to animate them into the hero film at the top of this page. [Confirm or adjust.]</p></div>

### Onboarding · Maya

Welcome, care approach tiles, goals and a deadline, health profile, the multi-device wearables ring and a pathway summary. **Decision:** care approach comes first, because everything else adapts to it.

<div class="even-row even-row--mid">
  <figure style="--ar:.461"><img src="/media/allyn/screen-care-approach.webp" width="393" height="852" alt="Onboarding: choose your care approach" loading="lazy" data-zoom /><figcaption><b>1.1 · Care approach</b></figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-health-profile.webp" width="393" height="852" alt="Health profile: conditions and medications" loading="lazy" data-zoom /><figcaption><b>1.3 · Health profile</b></figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-wearables.webp" width="393" height="852" alt="Onboarding: connect your wearables" loading="lazy" data-zoom /><figcaption><b>1.4 · Wearables</b>Multi-device ring</figcaption></figure>
</div>

### Insights & action · Kevin

Morning push, daily check-in, Today with a pixel sleep-score ring, insights (why first, sources last), a 14-day experiment, Ask Allyn chat and the Pathway tab. **Decision:** one clear next step instead of a dashboard.

<div class="even-row even-row--mid">
  <figure style="--ar:.461"><img src="/media/allyn/screen-morning-push.webp" width="393" height="852" alt="Morning push notification" loading="lazy" data-zoom /><figcaption><b>2.0 · Morning push</b></figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-today.webp" width="393" height="852" alt="Today: sleep score and today's insight" loading="lazy" data-zoom /><figcaption><b>2.1 · Today</b>Pixel sleep-score ring</figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-ask-allyn.webp" width="393" height="852" alt="Ask Allyn AI chat" loading="lazy" data-zoom /><figcaption><b>2.5 · Ask Allyn</b></figcaption></figure>
</div>

<div class="ai-note ai-note--product"><span class="ai-note__tag">AI in the product · Insights & Ask Allyn</span><p>Every insight leads with <em>why</em> and ends with its sources. Ask Allyn shows what it is based on, for example “Oura Ring + Fitbit · last 14 days”, so people can see where an answer comes from.</p></div>

### Checkup prep · Maya

The Prep tab, what to ask (Western vs. functional), the visit brief, and a PDF preview to share. **Decision:** the brief hands off to the doctor, who decides.

<div class="even-row even-row--mid">
  <figure style="--ar:.461"><img src="/media/allyn/screen-what-to-ask.webp" width="393" height="852" alt="What to ask your doctor" loading="lazy" data-zoom /><figcaption><b>3.2 · What to ask</b></figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-visit-brief.webp" width="393" height="852" alt="Visit brief for a doctor's appointment" loading="lazy" data-zoom /><figcaption><b>3.3 · Visit brief</b>One page for the doctor</figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-brief-share.webp" width="393" height="852" alt="Visit brief preview and share" loading="lazy" data-zoom /><figcaption><b>3.4 · Preview & share</b></figcaption></figure>
</div>

<div class="ai-note ai-note--product"><span class="ai-note__tag">AI in the product · Checkup prep</span><p>The AI suggests questions to ask, adapted to your doctor type (Western, functional or Chinese medicine), and frames tests as questions, never diagnoses. The doctor decides.</p></div>

### Provider finder · Kevin

Filters, a care map with a pulsing top match, provider profiles, booking and confirmation. **Decision:** trust signals (ratings, price, insurance), because people rely on referrals.

<div class="even-row even-row--mid">
  <figure style="--ar:.461"><img src="/media/allyn/screen-care-map.webp" width="393" height="852" alt="Care map with matches" loading="lazy" data-zoom /><figcaption><b>4.1 · Care map</b></figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-provider.webp" width="393" height="852" alt="Provider profile" loading="lazy" data-zoom /><figcaption><b>4.2 · Provider profile</b></figcaption></figure>
  <figure style="--ar:.461"><img src="/media/allyn/screen-book.webp" width="393" height="852" alt="Book a visit" loading="lazy" data-zoom /><figcaption><b>4.3 · Book a visit</b></figcaption></figure>
</div>

### Prototype & micro-interactions

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

<h2 id="designing-for-ai">Show the evidence. <span class="dim">The doctor decides.</span></h2>

<span class="ai-note__tag ai-note__tag--solo">AI in the product · principles</span>

Designing an AI that talks about your health meant designing for trust first. Here is how one reading becomes something you can act on:

<div class="card-grid card-grid--4">
  <div class="info-card"><h4>Your tracker says</h4><p><b style="font-family:'Doto';font-size:32px;color:#fff">71 bpm</b><br>Resting heart rate, up from 64 last week.</p></div>
  <div class="info-card"><h4>Why</h4><p>It rose after three late nights and two evenings with alcohol, which both tend to raise resting heart rate.</p></div>
  <div class="info-card"><h4>Try</h4><p>A 14-day experiment: alcohol-free weeknights, lights out by 11 pm, and a 20-minute morning walk.</p></div>
  <div class="info-card"><h4>If it stays high</h4><p>Ask your doctor whether a thyroid panel and iron levels make sense. <em>Evidence label: emerging research.</em></p></div>
</div>

<div class="card-grid card-grid--2">
  <div class="info-card"><h4>Trust & transparency</h4><p>Every insight shows <em>why</em> and links its sources. The brief and insights say “Illustrative data · your doctor decides.”</p></div>
  <div class="info-card"><h4>Uncertainty & safety</h4><p>Allyn never gives dosing advice, and frames tests as “questions to ask”, not diagnoses.</p></div>
  <div class="info-card"><h4>Control</h4><p>Users can edit their approach, goals and profile at any time, and checklists let them choose which tests go in the brief.</p></div>
  <div class="info-card"><h4>Conversational help</h4><p>Ask Allyn answers using connected data, with a “Based on: Oura Ring + Fitbit · last 14 days” note and hold-to-speak voice input.</p></div>
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
