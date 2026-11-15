// Shared responsive navigation for every page.
document.querySelectorAll('.menu-toggle').forEach((toggle) => {
  const nav = document.getElementById(toggle.getAttribute('aria-controls'));
  if (!nav) return;
  const close = () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Open navigation'); };
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });
  window.addEventListener('resize', () => { if(window.innerWidth > 900) close(); });
});
