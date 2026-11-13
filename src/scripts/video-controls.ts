// Adds a small pause/play button to every looping content video (case studies + covers).
// Also respects "reduce motion": those videos start paused.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const PAUSE = '<svg viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="1" width="3.5" height="12" rx="1"/><rect x="8.5" y="1" width="3.5" height="12" rx="1"/></svg>';
const PLAY = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9.5-5.5z"/></svg>';
document.querySelectorAll<HTMLVideoElement>('.prose video, .story-cover video, .ed-cover video, .cover video').forEach((v) => {
  const wrap = document.createElement('span');
  wrap.className = 'vid';
  v.parentNode!.insertBefore(wrap, v);
  wrap.appendChild(v);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'vid__btn';
  wrap.appendChild(btn);
  const sync = () => {
    const paused = v.paused;
    wrap.classList.toggle('is-paused', paused);
    btn.innerHTML = paused ? PLAY : PAUSE;
    btn.setAttribute('aria-label', paused ? 'Play video' : 'Pause video');
  };
  btn.addEventListener('click', () => (v.paused ? v.play() : v.pause()));
  v.addEventListener('play', sync);
  v.addEventListener('pause', sync);
  if (reduce) { v.removeAttribute('autoplay'); v.pause(); }
  sync();
});
