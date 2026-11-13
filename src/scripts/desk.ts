// Interactive desk: click the scene to zoom toward the screens; click a screen to
// switch lens and jump to the work. Scrolling and the header switch still work as usual.
document.querySelectorAll<HTMLElement>('[data-desk]').forEach((desk) => {
  const stage = desk.querySelector<HTMLElement>('[data-desk-stage]')!;
  const toggle = desk.querySelector<HTMLButtonElement>('[data-desk-toggle]')!;
  const setZoom = (on: boolean) => {
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
