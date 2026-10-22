/* ==========================================================================
   CONTENUTI - modifica qui giochi e devlog
   ========================================================================== */

// Un gioco = una voce. `screenshots` e `stores` possono restare vuoti.
// Per aggiungere immagini: metti i file in media/ e scrivi ["media/shot1.png", ...]
const gamesDatabase = {
  "ikai": {
    status: { it: "Tech demo VR", en: "VR tech demo" },
    it: {
      title: "IKAI: The Other Side",
      short: "La versione in realtà virtuale di IKAI. Tech demo in sviluppo.",
      desc: "Il porting in VR di IKAI: The Other Side. Una tech demo giocabile con visore e controller: movimento, interazione con le mani, menu e puzzle adattati alla realtà virtuale, con opzioni di comfort.",
      extra: "Unity · OpenXR · testato su Meta Quest 3S"
    },
    en: {
      title: "IKAI: The Other Side",
      short: "The virtual reality version of IKAI. Tech demo in development.",
      desc: "The VR port of IKAI: The Other Side. A playable tech demo with headset and controllers: movement, hand interaction, menus and puzzles adapted to virtual reality, with comfort options.",
      extra: "Unity · OpenXR · tested on Meta Quest 3S"
    },
    screenshots: [],
    stores: { steam: "", itch: "" }
  }
};

// Devlog: la voce piu' recente per prima. Formato data: AAAA-MM-GG.
const devlog = [
  {
    date: "2026-10-21",
    it: { title: "Si riparte da zero per la VR", text: "Nuovo progetto Ikai_VR: ricominciamo da una base pulita per costruire la versione VR." },
    en: { title: "Fresh start for VR", text: "New Ikai_VR project: we are starting over from a clean base to build the VR version." }
  },
  {
    date: "2026-10-19",
    it: { title: "Primo test su Quest 3S", text: "IKAI gira in VR su un Meta Quest 3S: movimento, interazione con i controller, menu e puzzle adattati, più le opzioni di comfort." },
    en: { title: "First run on Quest 3S", text: "IKAI runs in VR on a Meta Quest 3S: movement, controller interaction, adapted menus and puzzles, plus comfort options." }
  },
  {
    date: "2026-10-18",
    it: { title: "Le basi della VR", text: "Configurati OpenXR e XR Interaction Toolkit, con un simulatore nell'editor per provare tutto anche senza visore." },
    en: { title: "VR groundwork", text: "Set up OpenXR and the XR Interaction Toolkit, with an in-editor simulator so we can test without a headset." }
  }
];

const socialPlatforms = [
  { key: 'portfolio', icon: 'fa-solid fa-briefcase', label: 'Portfolio' },
  { key: 'github', icon: 'fa-brands fa-github', label: 'GitHub' },
  { key: 'artstation', icon: 'fa-brands fa-artstation', label: 'ArtStation' },
  { key: 'twitter', icon: 'fa-brands fa-x-twitter', label: 'Twitter / X' },
  { key: 'instagram', icon: 'fa-brands fa-instagram', label: 'Instagram' },
  { key: 'linkedin', icon: 'fa-brands fa-linkedin', label: 'LinkedIn' }
];

let currentLang = 'it';
try { currentLang = localStorage.getItem('selected-lang') || 'it'; } catch (e) { /* storage blocked */ }

const $ = (id) => document.getElementById(id);

/* ---------- Language ---------- */
function applyLanguage() {
  try { localStorage.setItem('selected-lang', currentLang); } catch (e) { /* storage blocked */ }
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-lang-it]').forEach(el => {
    el.textContent = el.getAttribute(`data-lang-${currentLang}`);
  });
  document.querySelectorAll('.member').forEach(m => {
    m.querySelector('.member-role').textContent = m.getAttribute(`data-role-${currentLang}`);
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
  renderGames();
  renderDevlog();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    applyLanguage();
  });
});

/* ---------- Top bar / mobile menu ---------- */
const nav = $('nav');
const menuToggle = $('menuToggle');
const topbar = $('topbar');

function setMenu(open) {
  nav.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
}
menuToggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });

const onScroll = () => topbar.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Reveal on scroll ---------- */
const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); revealObserver.unobserve(en.target); } });
    }, { threshold: 0.12 })
  : null;
document.querySelectorAll('.reveal').forEach(el => revealObserver ? revealObserver.observe(el) : el.classList.add('in'));

/* ---------- Modals ---------- */
function openModal(modal) { modal.setAttribute('aria-hidden', 'false'); }
function closeModal(modal) { modal.setAttribute('aria-hidden', 'true'); }

document.querySelectorAll('.modal').forEach(modal => {
  modal.querySelector('.modal-close').addEventListener('click', () => closeModal(modal));
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal); });
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.modal[aria-hidden="false"]').forEach(closeModal);
  $('lightbox')?.classList.remove('active');
});

/* ---------- Team ---------- */
const teamModal = $('teamModal');

// Missing photo: drop the <img> so the initials behind it show
function dropBrokenImg(img) { img.addEventListener('error', () => img.remove()); }
document.querySelectorAll('.tile-media img').forEach(dropBrokenImg);

document.querySelectorAll('.member').forEach(member => {
  member.addEventListener('click', () => {
    $('modalTitle').textContent = member.dataset.name;

    const media = $('modalMedia');
    media.dataset.initials = member.querySelector('.tile-media').dataset.initials;
    media.querySelector('img')?.remove();
    const src = member.querySelector('.tile-media img')?.getAttribute('src');
    if (src) {
      const img = document.createElement('img');
      img.id = 'modalImg';
      img.alt = '';
      dropBrokenImg(img);
      img.src = src;
      media.appendChild(img);
    }

    $('modalRole').textContent = member.getAttribute(`data-role-${currentLang}`);
    $('modalDesc').textContent = member.getAttribute(`data-bio-${currentLang}`);

    const links = $('modalLinks');
    links.innerHTML = '';
    socialPlatforms.forEach(p => {
      const url = member.getAttribute(`data-${p.key}`);
      if (!url) return;
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = 'btn btn-ghost';
      a.innerHTML = `<i class="${p.icon}"></i> ${p.label}`;
      links.appendChild(a);
    });
    openModal(teamModal);
  });
});

/* ---------- Games ---------- */
const gameModal = $('gameModal');

function renderGames() {
  const rail = $('gamesRail');
  const entries = Object.entries(gamesDatabase);
  rail.innerHTML = '';
  rail.classList.toggle('single', entries.length === 1);
  $('railPrev').parentElement.hidden = entries.length < 3;

  entries.forEach(([key, game]) => {
    const t = game[currentLang];
    const cover = game.screenshots[0];
    const card = document.createElement('button');
    card.className = 'game-card' + (cover ? '' : ' noimg');
    card.dataset.game = key;
    card.innerHTML = `
      ${cover ? `<img src="${cover}" alt="" loading="lazy" />` : ''}
      <span class="game-body">
        <span class="pill">${game.status[currentLang]}</span>
        <h3>${t.title}</h3>
        <p>${t.short}</p>
        <span class="game-cta">${currentLang === 'it' ? 'Dettagli' : 'Details'}</span>
      </span>`;
    rail.appendChild(card);
  });
}

function renderDevlog() {
  const locale = currentLang === 'it' ? 'it-IT' : 'en-GB';
  $('devlogList').innerHTML = devlog.map(entry => {
    const t = entry[currentLang];
    const label = new Date(entry.date).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    return `<li><time datetime="${entry.date}">${label}</time><strong>${t.title}</strong><p>${t.text}</p></li>`;
  }).join('');
}

$('railPrev').addEventListener('click', () => $('gamesRail').scrollBy({ left: -340, behavior: 'smooth' }));
$('railNext').addEventListener('click', () => $('gamesRail').scrollBy({ left: 340, behavior: 'smooth' }));

$('gamesRail').addEventListener('click', (e) => {
  const card = e.target.closest('.game-card');
  if (!card) return;
  const game = gamesDatabase[card.dataset.game];
  const t = game[currentLang];

  $('gameModalTitle').textContent = t.title;
  $('gameModalDesc').textContent = t.desc;
  $('gameModalStatus').textContent = game.status[currentLang];
  $('gameModalExtra').textContent = t.extra;

  const gallery = $('gameModalGallery');
  gallery.innerHTML = '';
  game.screenshots.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = t.title;
    img.addEventListener('click', () => openLightbox(src));
    gallery.appendChild(img);
  });

  const stores = $('gameModalStores');
  stores.innerHTML = '';
  if (game.stores.steam) stores.innerHTML += `<a class="btn btn-primary" href="${game.stores.steam}" target="_blank" rel="noopener"><i class="fa-brands fa-steam"></i> Steam</a>`;
  if (game.stores.itch) stores.innerHTML += `<a class="btn btn-ghost" href="${game.stores.itch}" target="_blank" rel="noopener"><i class="fa-solid fa-gamepad"></i> Itch.io</a>`;
  if (!game.stores.steam && !game.stores.itch) {
    stores.innerHTML = `<span class="soon">${currentLang === 'it' ? 'Prossimamente' : 'Coming soon'}</span>`;
  }
  openModal(gameModal);
});

function openLightbox(src) {
  let box = $('lightbox');
  if (!box) {
    box = document.createElement('div');
    box.id = 'lightbox';
    box.innerHTML = '<img alt="" />';
    box.addEventListener('click', () => box.classList.remove('active'));
    document.body.appendChild(box);
  }
  box.querySelector('img').src = src;
  box.classList.add('active');
}

applyLanguage();
