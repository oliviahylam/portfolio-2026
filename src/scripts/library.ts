// Asset library filter tabs (case studies)
document.querySelectorAll<HTMLElement>('[data-lib]').forEach((lib) => {
  const buttons = lib.querySelectorAll<HTMLButtonElement>('[data-filter]');
  const tiles = lib.querySelectorAll<HTMLElement>('.lib__tile');
  const scroller = lib.querySelector<HTMLElement>('.lib__scroll')!;
  buttons.forEach((b) => b.addEventListener('click', () => {
    const f = b.dataset.filter;
    buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    tiles.forEach((t) => { t.hidden = f !== 'all' && t.dataset.cat !== f; });
    scroller.scrollTop = 0;
  }));
});
