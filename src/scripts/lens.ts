// The lens switch: swaps the theme + content in place, keeps the URL shareable
// (?lens=brand), and carries the lens on internal links.
type Lens = 'product' | 'brand';
const root = document.documentElement;
const buttons = document.querySelectorAll<HTMLButtonElement>('[data-lens-set]');

function sync() {
  const lens = root.dataset.lens as Lens;
  buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lensSet === lens)));
  document.querySelectorAll<HTMLAnchorElement>('a[data-keep-lens]').forEach((a) => {
    const url = new URL(a.getAttribute('href')!, location.origin);
    if (lens === 'brand') url.searchParams.set('lens', 'brand');
    else url.searchParams.delete('lens');
    a.setAttribute('href', url.pathname + url.search + url.hash);
  });
}

function setLens(lens: Lens) {
  if (root.dataset.lens === lens) return;
  const apply = () => {
    root.dataset.lens = lens;
    const url = new URL(location.href);
    if (lens === 'brand') url.searchParams.set('lens', 'brand');
    else url.searchParams.delete('lens');
    history.replaceState(null, '', url);
    sync();
  };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (doc.startViewTransition && !reduce) doc.startViewTransition(apply);
  else apply();
}

buttons.forEach((b) => b.addEventListener('click', () => setLens(b.dataset.lensSet as Lens)));
sync();
