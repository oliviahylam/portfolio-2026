// ─────────────────────────────────────────────────────────────
//  Everything you'll want to edit about the site lives here.
//  Text in [brackets] is a placeholder — replace it with yours.
//  Headlines accept a little HTML:
//    <span class="dim">grey words</span>   <em>italic serif words</em>
// ─────────────────────────────────────────────────────────────

export const site = {
  name: '[Your Name]',
  role: 'Product designer · AI · Creative technology',
  description: 'Portfolio of [Your Name] — AI-driven product design, creative technology, identity and editorial work.',
  email: 'hello@example.com', // ← your public contact email
  resume: '/resume.pdf', // ← put your resume at public/resume.pdf
  location: '[City]',
  status: 'Available for 2026 roles',
  version: 'v1.0 · last designed + vibe-coded by [you] · 11.2026',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],

  // The 3D workspace scene on the landing page (one per lens).
  // Drop files in public/hero/ and set the paths, e.g. '/hero/workspace-day.webp'
  // or a looping video '/hero/workspace-day.mp4'. Leave null to show a placeholder.
  hero: {
    product: null as string | null,
    brand: null as string | null,
  },
  // Optional logos for tools shown on cards/case studies. Drop SVG/PNG files in
  // public/tools/ and map the tool name to the file, e.g. Figma: '/tools/figma.svg'.
  // Tools without a logo show as a text chip.
  toolIcons: {} as Record<string, string>,

  // The interactive desk on the landing page. Click the scene → it zooms toward the screens;
  // click a screen → switches to that lens and scrolls to the work.
  // Screen hotspots are % of the final view (pov) if you add one, otherwise of the scene image, so they keep working at any size.
  // Once your real image is in, nudge these numbers so the hotspots sit on the screens.
  desk: {
    // Optional camera move: a transition video from the idle loop to your eyeline,
    // ending on a still of both screens straight-on. e.g. '/hero/desk-transition.mp4'
    transition: null as string | null,
    pov: null as string | null, // the final straight-on view, e.g. '/hero/desk-pov.webp'
    // Without transition/pov the scene simply zooms toward this point:
    zoom: { x: 50, y: 38, scale: 2.1 }, // point to zoom toward + how far
    screens: {
      brand: { left: 34, top: 14, width: 32, height: 26, label: 'Brand & Editorial' }, // top monitor
      product: { left: 40, top: 44, width: 20, height: 14, label: 'Product & AI' }, // laptop
    },
  },

  // Small round avatar for the AI chat (e.g. '/hero/avatar.webp').
  avatar: null as string | null,

  lenses: {
    product: {
      label: 'Product & AI',
      eyebrow: '/* product designer · ai · creative technology */',
      headline: 'I design AI-driven products — with a creative technologist\'s hands.',
      intro: '[One line about you, in a friendly first-person voice.]',
      bio: [
        '[2–3 sentences in your product voice: what you study or do, how you work with people, and what you design.]',
        "[I've designed for: Client, Client, Client.]",
      ],
      tags: ['AI / UX', 'Interaction', 'Prototyping', 'Creative tech'],
      workTitle: '/* selected work */',
      playgroundTitle: '/* playground */',
      askPlaceholder: 'Ask about my product work, skills or resume…',
      suggestions: ['What AI products have you designed?', 'How do you prototype?', 'What do you code with?'],
    },
    brand: {
      label: 'Brand & Editorial',
      eyebrow: '[ identity · editorial · motion · creative direction ]',
      headline: 'Identities <span class="dim">that move —</span> <em>on paper, on screen, in space.</em>',
      intro: '[One line about your identity, editorial and motion work.]',
      bio: [
        '[2–3 sentences in your brand voice: the identities, books and campaigns you make, and the idea that ties them together.]',
        "[I've designed for: Museum, Festival, Artist.]",
      ],
      tags: ['Visual identity', 'Editorial', 'Motion', 'Art direction'],
      workTitle: 'Selected <em>work</em>',
      playgroundTitle: '[ playground ]',
      askPlaceholder: 'Ask about my identities, editorial or motion work…',
      suggestions: ['Which identities have you built?', 'How do you art-direct a series?', 'Show me your motion work'],
    },
  },

  // About page — the ID card
  idCard: {
    nameZh: '[中文名]',
    nameEn: '[SURNAME, Given Name]',
    number: 'DSGN-0001(✦)',
    validFor: 'Product · AI · Creative direction',
    facts: [
      { zh: '最愛工具', en: 'Favourite tool', value: '[Your answer]' },
      { zh: '咖啡', en: 'Coffee order', value: '[Your answer]' },
      { zh: '現正沉迷', en: 'Currently obsessed with', value: '[Your answer]' },
      { zh: '隱藏技能', en: 'Hidden talent', value: '[Your answer]' },
      { zh: '最愛字體', en: 'Favourite typeface', value: '[Your answer]' },
      { zh: '設計年資', en: 'Designing since', value: '[Year]' },
    ],
    photo: null as string | null, // e.g. '/hero/id-photo.webp'
    backBio: '[A short bio in your own voice: the product and AI work, the print and branding roots, and the creative technology that ties them together.]',
    signature: '[Signature]',
  },

  about: {
    headline: "[Hi, I'm Your Name.]",
    paragraphs: [
      '[Paragraph 1 — what you do now.]',
      '[Paragraph 2 — your path, and why the print / branding background makes you a better product designer.]',
      "[Paragraph 3 — what you're looking for next.]",
    ],
    services: [
      { title: 'Product & AI design', text: 'Research, flows, interaction design, prototyping, designing for AI behavior.' },
      { title: 'Creative technology', text: 'TouchDesigner, extended reality, coded web experiences.' },
      { title: 'Brand, editorial & motion', text: 'Visual identities, books and editorial series, motion graphics.' },
    ],
    experience: [
      { what: '[Role] · [Company]', when: '[Years]' },
      { what: '[Role] · [Company]', when: '[Years]' },
      { what: '[Education]', when: '[Years]' },
    ],
    tools: ['Figma', 'TouchDesigner', '[XR tool]', '[Motion tool]', 'HTML / CSS / JS', '[AI tools]'],
  },

  // Playground — small experiments. media: '/media/playground/clip.mp4' or an image path, or null.
  playground: [
    { title: '[Experiment title]', tool: 'TouchDesigner', note: '[One line: the question, or what you learned]', media: null as string | null },
    { title: '[Experiment title]', tool: 'XR', note: '[One line]', media: null as string | null },
    { title: '[Experiment title]', tool: 'Motion', note: '[One line]', media: null as string | null },
    { title: '[Experiment title]', tool: 'Code', note: '[One line]', media: null as string | null },
    { title: '[Experiment title]', tool: 'AI tools', note: '[One line]', media: null as string | null },
    { title: '[Experiment title]', tool: 'TouchDesigner', note: '[One line]', media: null as string | null },
  ],
};

export type Lens = 'product' | 'brand';
