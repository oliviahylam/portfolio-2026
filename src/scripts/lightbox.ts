// Click any image marked data-zoom to view it fullscreen. Click, Esc or × closes it.
const imgs = document.querySelectorAll<HTMLImageElement>('img[data-zoom]');
if (imgs.length) {
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.hidden = true;
  box.innerHTML = '<img alt="" /><button type="button" class="lightbox__close" aria-label="Close">×</button>';
  document.body.appendChild(box);
  const big = box.querySelector('img')!;
  const closeBtn = box.querySelector<HTMLButtonElement>('.lightbox__close')!;
  let last: HTMLElement | null = null;
  const close = () => { box.hidden = true; document.documentElement.style.overflow = ''; last?.focus(); };
  const open = (img: HTMLImageElement) => {
    last = img;
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    box.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    closeBtn.focus();
  };
  imgs.forEach((img) => {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `View ${img.alt || 'image'} fullscreen`);
    img.addEventListener('click', () => open(img));
    img.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); } });
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !box.hidden) close(); });
}
