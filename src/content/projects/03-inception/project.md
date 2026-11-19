---
title: "Inception: An Immersive Screenplay"
year: 2025
lens: [product]
template: case-study
order: 5
category: Interaction · Coded website
summary: An interactive, immersive screenplay that reimagines storytelling through expressive typography and creative front-end design, where each page is a different dream layer from the film.
coverRatio: 1.778
coverVideo: /media/inception/cover.mp4
link: { label: "Explore the screenplay", url: "https://lamo273.interactive.rodeo/studio/projects/project-1/" }
role: "Front-end Engineer & Designer (designed and coded end-to-end)"
timeline: 1 month
tools: [HTML, CSS, JavaScript, VS Code, Figma]
skills: [HTML, CSS, JavaScript, Responsive web design, Prototyping, Creative coding, Typography]
hook: What if reading a screenplay felt like falling through the layers of a dream?
challenge: How might type become a storytelling device on the web, not just content?
parts:
  - { label: Overview, anchor: the-idea }
  - { label: Notable elements, anchor: notable-elements }
  - { label: Code, anchor: under-the-hood }
---

Inception is an interactive, immersive screenplay experience that reimagines storytelling through expressive typography and creative front-end design. Built with HTML, CSS and JavaScript, each page represents a different “dream layer” from the film, using custom type treatments and motion to mirror the tone and storyline of each scene.

## The idea

This project focuses on the relationship between text and interaction on the web, using type not just as content, but as a storytelling device. By blending narrative depth with experimental layout and motion, the piece transforms a screenplay into a multi-sensory digital journey.

![Scroll-through of the screenplay](/media/inception/scroll-through.mp4)

## Notable elements

<div class="feature-vid feature-vid--wide">
  <figure><video src="/media/inception/click-here.mp4" autoplay muted loop playsinline data-expand aria-label="Home page"></video></figure>
  <div class="feature-vid__text"><span class="mono">01 · Home page</span><h3>Scroll to sleep</h3><p>Scrolling on the home page closes your eyes: the screen blinks to black and you wake up inside the first dream layer.</p></div>
</div>

<div class="feature-vid feature-vid--wide feature-vid--flip">
  <figure><video src="/media/inception/reflective-text.mp4" autoplay muted loop playsinline data-expand aria-label="Mirrored text"></video></figure>
  <div class="feature-vid__text"><span class="mono">02 · Paris</span><h3>Mirrored text</h3><p>Text reflects back on itself, mimicking the scene where Paris folds over in the dream.</p></div>
</div>

<div class="feature-vid feature-vid--wide">
  <figure><video src="/media/inception/spinning-type.mp4" autoplay muted loop playsinline data-expand aria-label="Spinning type"></video></figure>
  <div class="feature-vid__text"><span class="mono">03 · Hotel</span><h3>Spinning, fading type</h3><p>Dynamic spinning and fading typography mimics the gravity-shifting hotel scene.</p></div>
</div>

<div class="feature-vid feature-vid--wide feature-vid--flip">
  <figure><video src="/media/inception/snow-text.mp4" autoplay muted loop playsinline data-expand aria-label="Snow and wind"></video></figure>
  <div class="feature-vid__text"><span class="mono">04 · Snow fortress</span><h3>Snow and wind</h3><p>Falling snow and letters that blow in the wind bring the snow fortress scene to the page.</p></div>
</div>

<div class="feature-vid feature-vid--wide">
  <figure><video src="/media/inception/disappearing-text.mp4" autoplay muted loop playsinline data-expand aria-label="Disappearing text"></video></figure>
  <div class="feature-vid__text"><span class="mono">05 · Limbo</span><h3>Disappearing text</h3><p>Words scatter and vanish as you hover, mimicking the feeling of forgetting reality in limbo.</p></div>
</div>

<div class="feature-vid feature-vid--wide feature-vid--flip">
  <figure><video src="/media/inception/about-page.mp4" autoplay muted loop playsinline data-expand aria-label="About page"></video></figure>
  <div class="feature-vid__text"><span class="mono">06 · About</span><h3>About page</h3><p>The project and its references, in the same dream-like visual language.</p></div>
</div>

## Under the hood

Every effect is hand-written in vanilla JavaScript. Here is the code behind the key moments.

<div class="code-grid">
  <figure><img src="/media/inception/code-scroll-to-sleep.webp" width="1440" height="1200" alt="Code: scroll to sleep blink transition" loading="lazy" data-zoom /><figcaption><b>Scroll to sleep</b>A blink overlay on scroll, then a redirect while the screen is black</figcaption></figure>
  <figure><img src="/media/inception/code-quote-fade.webp" width="1440" height="1200" alt="Code: quote fade and eyes opening" loading="lazy" data-zoom /><figcaption><b>Waking up</b>The quote fades on scroll, and the eyes open on each new layer</figcaption></figure>
  <figure><img src="/media/inception/code-shadows.webp" width="1440" height="1200" alt="Code: drifting shadows" loading="lazy" data-zoom /><figcaption><b>Drifting shadows</b>Randomly placed shadows that drift and disappear</figcaption></figure>
  <figure><img src="/media/inception/code-snow-wind.webp" width="1440" height="1200" alt="Code: snow and wind text" loading="lazy" data-zoom /><figcaption><b>Snow and wind</b>Randomised snowflakes, and text split into letters for the wind</figcaption></figure>
  <figure><img src="/media/inception/code-scatter.webp" width="1440" height="1200" alt="Code: scattering text" loading="lazy" data-zoom /><figcaption><b>Disappearing text</b>Every letter scatters and fades on hover</figcaption></figure>
</div>
