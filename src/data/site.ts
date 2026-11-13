// ─────────────────────────────────────────────────────────────
//  Everything you'll want to edit about the site lives here.
//  Text in [brackets] is a placeholder — replace it with yours.
//  Headlines accept a little HTML:
//    <span class="dim">grey words</span>   <em>italic serif words</em>
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Olivia Lam',
  role: 'Product designer · AI · Creative technology',
  description: 'Portfolio of Olivia Lam — AI-driven product design, creative technology, identity and editorial work.',
  email: 'hello@example.com', // ← your public contact email
  resume: '/resume.pdf', // ← put your resume at public/resume.pdf
  location: 'New York City',
  status: 'Available for 2026 roles',
  version: 'v1.0 · last designed + vibe-coded by Olivia Lam · 11.2026',
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

  // The interactive desk on the landing page.
  // "Step into my desk" (or clicking the scene) plays the intro forward and stops on the
  // over-the-shoulder view; "Step back" plays the same move in reverse.
  // On the final view the monitor → Brand & Editorial, the laptop → Product & AI.
  // Screen hotspots are % of the square final frame. Nudge them if the screens move.
  desk: {
    intro: '/hero/intro.mp4' as string | null, // forward camera move (square)
    introReverse: '/hero/intro-reverse.mp4' as string | null, // same clip reversed, for "Step back"
    start: '/hero/intro-start.webp', // first frame (isometric desk)
    end: '/hero/intro-end.webp', // last frame (both screens)
    screens: {
      brand: { left: 19.5, top: 12.3, width: 61, height: 35, label: 'Brand & Editorial' }, // monitor
      product: { left: 32.7, top: 49.6, width: 34.8, height: 21.8, label: 'Product & AI' }, // laptop
    },
  },

  // Small round avatar for the AI chat (e.g. '/hero/avatar.webp').
  avatar: null as string | null,

  lenses: {
    product: {
      label: 'Product & AI',
      eyebrow: '/* product designer · ai · creative technology */',
      headline: 'Designer who loves pretty things, <span class="dim">but loves efficiency and pushing boundaries even more.</span>',
      intro: 'Product designer who uses AI and technology to move fast, without ever compromising on visual craft.',
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
      headline: 'Designer who loves pretty things, <span class="dim">but loves efficiency and pushing boundaries even more.</span>',
      intro: 'Brand and editorial designer who gives a voice to those looking for one, creating memorable ideas and things people want to keep.',
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
    nameEn: 'LAM, Olivia',
    number: 'DSGN-0001(✦)',
    validFor: 'Product · AI · Creative direction',
    facts: [
      { label: 'Based in', value: 'New York City' },
      { label: 'Currently on repeat', value: 'KAYTRANADA' },
      { label: 'Coffee order', value: 'Almond matcha latte' },
      { label: 'Favourite read', value: 'Educated' },
      { label: 'I always have', value: 'Peppermint oil' },
      { label: 'Favourite accessory atm', value: 'I LOVE cadet caps' },
    ],
    photo: '/hero/me-id.webp' as string | null,
    backBio: "Off the clock, I'm planning my next trip to try new cuisines and learn about different cultures. Brunch is my favourite meal, fall is my favourite season (a recent discovery), and I love all things fashion and makeup.",
    signature: 'Olivia Lam',
  },

  about: {
    headline: "Hi, I'm Olivia.",
    paragraphs: [
      "Olivia is a Hong Kong-born designer and AI creative technologist. She has worked with emerging tech and AI since it first came out, through her design internships at Animoca Brands and Silverside AI.",
      "She emphasises the importance of visual craft in her work and is constantly exploring ways to push boundaries: enhancing what we're already capable of, finding ways to go beyond it, and always seeking out work that is innovative and new.",
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
