// Dark/light toggle. The initial theme is set by the inline script in <head>
// (saved choice, else the system preference) so the page doesn't flash.
(() => {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  if (!btn) return;

  const sync = () => {
    const light = root.dataset.theme === 'light';
    btn.querySelector('i').className = light ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    btn.setAttribute('aria-pressed', String(light));
  };

  btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked */ }
    sync();
  });
  sync();
})();
