// Controls for looping content videos (case studies + covers):
// - every video: pause/play
// - longer videos (> 12s): restart button + a scrubbable timeline
// "Reduce motion" users get videos that start paused.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ICON = {
  pause: '<svg viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="1" width="3.5" height="12" rx="1"/><rect x="8.5" y="1" width="3.5" height="12" rx="1"/></svg>',
  play: '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9.5-5.5z"/></svg>',
  restart: '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M7 2a5 5 0 1 1-4.6 3H1l2.4-3L6 5H4.5A3.5 3.5 0 1 0 7 3.5V2z"/></svg>',
};
const LONG = 12;

document.querySelectorAll<HTMLVideoElement>('.prose video, .story-cover video, .ed-cover video, .cover video').forEach((v) => {
  const wrap = document.createElement('span');
  wrap.className = 'vid';
  v.parentNode!.insertBefore(wrap, v);
  wrap.appendChild(v);

  const bar = document.createElement('span');
  bar.className = 'vid__controls';
  wrap.appendChild(bar);

  const play = document.createElement('button');
  play.type = 'button';
  play.className = 'vid__btn';
  bar.appendChild(play);

  const sync = () => {
    wrap.classList.toggle('is-paused', v.paused);
    play.innerHTML = v.paused ? ICON.play : ICON.pause;
    play.setAttribute('aria-label', v.paused ? 'Play video' : 'Pause video');
  };
  play.addEventListener('click', () => (v.paused ? v.play() : v.pause()));
  v.addEventListener('play', sync);
  v.addEventListener('pause', sync);

  const addTimeline = () => {
    if (!(v.duration > LONG) || bar.querySelector('.vid__range')) return;
    wrap.classList.add('vid--long');
    const restart = document.createElement('button');
    restart.type = 'button';
    restart.className = 'vid__btn';
    restart.innerHTML = ICON.restart;
    restart.setAttribute('aria-label', 'Restart video');
    restart.addEventListener('click', () => { v.currentTime = 0; v.play(); });
    bar.appendChild(restart);

    const range = document.createElement('input');
    range.type = 'range';
    range.className = 'vid__range';
    range.min = '0';
    range.max = '1000';
    range.value = '0';
    range.setAttribute('aria-label', 'Video timeline');
    bar.appendChild(range);
    let seeking = false;
    const paint = () => {
      const pct = (v.currentTime / v.duration) * 100 || 0;
      if (!seeking) range.value = String(Math.round(pct * 10));
      range.style.setProperty('--p', `${pct}%`);
    };
    v.addEventListener('timeupdate', paint);
    range.addEventListener('input', () => {
      seeking = true;
      v.currentTime = (Number(range.value) / 1000) * v.duration;
      range.style.setProperty('--p', `${Number(range.value) / 10}%`);
    });
    range.addEventListener('change', () => { seeking = false; });
  };
  if (v.readyState >= 1) addTimeline();
  else v.addEventListener('loadedmetadata', addTimeline, { once: true });

  if (reduce) { v.removeAttribute('autoplay'); v.pause(); }
  sync();
});
