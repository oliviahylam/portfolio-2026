// Interactive desk: click the scene to zoom toward the screens; click a screen to
// switch lens and jump to the work. Scrolling and the header switch still work as usual.
document.querySelectorAll<HTMLElement>('[data-desk]').forEach((desk) => {
  const stage = desk.querySelector<HTMLElement>('[data-desk-stage]')!;
  const toggle = desk.querySelector<HTMLButtonElement>('[data-desk-toggle]')!;
  const video = desk.querySelector<HTMLVideoElement>('[data-desk-transition]');
  const setZoom = (on: boolean) => {
    if (desk.classList.contains('desk--pov')) {
      desk.classList.remove('is-playing');
      if (on && video) {
        // play the camera move, then reveal the straight-on view
        desk.classList.add('is-playing');
        video.currentTime = 0;
        video.play().catch(() => {});
        video.onended = () => { desk.classList.remove('is-playing'); desk.classList.add('is-zoomed'); };
        toggle.setAttribute('aria-pressed', 'true');
        toggle.textContent = '↖ Step back';
        return;
      }
    }
    desk.classList.toggle('is-zoomed', on);
    toggle.setAttribute('aria-pressed', String(on));
    toggle.textContent = on ? '↖ Step back' : '↘ Step into my desk';
  };
  stage.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('[data-desk-go]')) return;
    setZoom(!desk.classList.contains('is-zoomed'));
  });
  toggle.addEventListener('click', () => setZoom(!desk.classList.contains('is-zoomed')));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setZoom(false); });

  desk.querySelectorAll<HTMLAnchorElement>('[data-desk-go]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const lens = a.dataset.deskGo!;
      document.querySelector<HTMLButtonElement>(`[data-lens-set="${lens}"]`)?.click();
      setZoom(false);
      // wait for the lens swap, then scroll to that lens's work
      setTimeout(() => {
        document.getElementById(lens === 'brand' ? 'work-brand' : 'work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 450);
    });
  });
});
