// Interactive desk. "Step into my desk" plays the intro forward and holds on the
// over-the-shoulder view, where both screens become links. "Step back" plays a
// reversed copy of the same clip from wherever the camera currently is.
// Scrolling and the header switch keep working as usual.
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll<HTMLElement>('[data-desk]').forEach((desk) => {
  const stage = desk.querySelector<HTMLElement>('[data-desk-stage]')!;
  const toggle = desk.querySelector<HTMLButtonElement>('[data-desk-toggle]')!;
  const fwd = desk.querySelector<HTMLVideoElement>('[data-desk-fwd]');
  const rev = desk.querySelector<HTMLVideoElement>('[data-desk-rev]');
  const screens = desk.querySelectorAll<HTMLAnchorElement>('.desk__screen');
  let inside = false; // where we're heading (true = at the desk)

  const label = () => {
    toggle.setAttribute('aria-pressed', String(inside));
    toggle.textContent = inside ? '↖ Step back' : '↘ Step into my desk';
  };
  const arrive = () => {
    desk.classList.remove('is-moving');
    desk.classList.toggle('is-zoomed', inside);
    screens.forEach((s) => (s.tabIndex = inside ? 0 : -1));
  };
  // show one video, hide the other, once the shown one is on the right frame
  const swap = (show: HTMLVideoElement, hide: HTMLVideoElement, t: number) =>
    new Promise<void>((done) => {
      const go = () => { show.classList.add('is-on'); hide.classList.remove('is-on'); hide.pause(); done(); };
      if (Math.abs(show.currentTime - t) < 0.02) return go();
      show.addEventListener('seeked', go, { once: true });
      show.currentTime = t;
    });

  const move = async (toDesk: boolean) => {
    if (toDesk === inside) return;
    inside = toDesk;
    label();
    desk.classList.remove('is-zoomed');
    screens.forEach((s) => (s.tabIndex = -1));
    if (!fwd || !rev || reduced) {
      // no video (or reduced motion): jump straight between the first and last frame
      desk.classList.toggle('is-end', toDesk);
      return arrive();
    }
    desk.classList.add('is-moving');
    const d = fwd.duration || rev.duration || 8;
    // where the camera is right now, in forward time
    const pos = fwd.classList.contains('is-on') ? fwd.currentTime : d - rev.currentTime;
    const [play, other] = toDesk ? [fwd, rev] : [rev, fwd];
    const t = toDesk ? pos : d - pos;
    if (t >= d - 0.04) return arrive();
    await swap(play, other, t);
    if (inside !== toDesk) return; // changed direction mid-seek
    play.onended = () => { if (inside === toDesk) arrive(); };
    play.play().catch(() => { desk.classList.toggle('is-end', toDesk); arrive(); });
  };

  stage.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('[data-desk-go]')) return;
    if (!inside) move(true);
  });
  toggle.addEventListener('click', () => move(!inside));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && inside) move(false); });

  desk.querySelectorAll<HTMLAnchorElement>('[data-desk-go]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const lens = a.dataset.deskGo!;
      document.querySelector<HTMLButtonElement>(`[data-lens-set="${lens}"]`)?.click();
      // wait for the lens swap, then scroll to that lens's work
      setTimeout(() => {
        document.getElementById(lens === 'brand' ? 'work-brand' : 'work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 450);
    });
  });
});
