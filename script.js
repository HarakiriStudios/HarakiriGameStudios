const gamesDatabase = {
  "neon-abyss": {
    it: {
      title: "Neon Abyss of Mind",
      short: "Un viaggio psichedelico nella memoria RAM di un vecchio supercomputer.",
      desc: "Un viaggio psichedelico destrutturato all'interno della memoria RAM corrotta di un vecchio supercomputer degli anni '90. Affronta glitch fisici, logiche bizzarre e algoritmi ostili in questo surreale platform narrativo.",
      extra: "Stato: alpha 0.4 · Requisiti: almeno 16MB di RAM virtuale."
    },
    en: {
      title: "Neon Abyss of Mind",
      short: "A psychedelic trip inside an old supercomputer's RAM.",
      desc: "A deconstructed psychedelic journey inside the corrupted RAM memory of an old 90s supercomputer. Battle physics glitches, bizarre logic, and hostile algorithms in this surreal narrative platformer.",
      extra: "Status: alpha 0.4 · Requirements: at least 16MB of virtual RAM."
    },
    screenshots: [
      "https://picsum.photos/id/1005/600/400",
      "https://picsum.photos/id/1015/600/400",
      "https://picsum.photos/id/1025/600/400"
    ],
    stores: { steam: "https://store.steampowered.com", itch: "https://itch.io/team/harakirigamestudios" }
  },
  "cosmic-rituals": {
    it: {
      title: "Cosmic Rituals",
      short: "Simulatore di culti spaziali a 8-bit.",
      desc: "Simulatore di culti spaziali a 8-bit. Gestisci rituali complessi generati proceduralmente nello spazio siderale profondo, cercando di attirare l'attenzione di divinità cosmiche pigre.",
      extra: "Stato: completo · Stile: pixel-art retro-fatalista · Grafica: 4 colori."
    },
    en: {
      title: "Cosmic Rituals",
      short: "An 8-bit space cult simulator.",
      desc: "8-bit cosmic cult simulator. Manage complex, procedurally generated rituals in deep outer space, trying to attract the fleeting attention of lazy cosmic entities.",
      extra: "Status: complete · Style: retro-fatalistic pixel art · Graphics: 4 colors."
    },
    screenshots: [
      "https://picsum.photos/id/1035/600/400",
      "https://picsum.photos/id/1045/600/400",
      "https://picsum.photos/id/1055/600/400"
    ],
    stores: { steam: "", itch: "https://itch.io/team/harakirigamestudios" }
  },
  "lucid-deathloop": {
    it: {
      title: "Lucid Deathloop",
      short: "Muori, rompi le variabili globali, ripeti.",
      desc: "Muori, destabilizza l'ambiente circostante, rompi le variabili globali e ripeti il ciclo. Un puzzle-azione frenetico in cui ogni tua morte modifica strutturalmente la mappa.",
      extra: "Stato: in sviluppo · Audio: colonna sonora synthwave distorta."
    },
    en: {
      title: "Lucid Deathloop",
      short: "Die, break global variables, repeat.",
      desc: "Die, destabilize your surroundings, break global engine variables and repeat. A frantic action-puzzle game where every single death structurally alters the environment.",
      extra: "Status: in development · Audio: distorted synthwave soundtrack."
    },
    screenshots: [
      "https://picsum.photos/id/1065/600/400",
      "https://picsum.photos/id/1075/600/400",
      "https://picsum.photos/id/1085/600/400"
    ],
    stores: { steam: "https://store.steampowered.com", itch: "" }
  }
};

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
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    applyLanguage();
  });
});

/* ---------- Mobile menu ---------- */
const navLinks = $('navLinks');
const menuToggle = $('menuToggle');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navLinks.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

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

// Broken/missing photo: fall back to an empty box instead of the broken-image icon
document.querySelectorAll('.member img').forEach(img => {
  img.addEventListener('error', () => { img.removeAttribute('src'); });
});

document.querySelectorAll('.member').forEach(member => {
  member.addEventListener('click', () => {
    $('modalTitle').textContent = member.dataset.name;
    const img = $('modalImg');
    const src = member.querySelector('img').getAttribute('src');
    if (src) img.src = src; else img.removeAttribute('src');
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
      a.className = 'btn';
      a.innerHTML = `<i class="${p.icon}"></i> ${p.label}`;
      links.appendChild(a);
    });
    openModal(teamModal);
  });
});

/* ---------- Games ---------- */
const gameModal = $('gameModal');

function renderGames() {
  const grid = $('gamesGrid');
  grid.innerHTML = '';
  Object.entries(gamesDatabase).forEach(([key, game]) => {
    const t = game[currentLang];
    const card = document.createElement('button');
    card.className = 'game-card';
    card.dataset.game = key;
    card.innerHTML = `
      <img src="${game.screenshots[0]}" alt="" loading="lazy" />
      <span class="game-card-body">
        <h3>${t.title}</h3>
        <p>${t.short}</p>
      </span>`;
    grid.appendChild(card);
  });
}

$('gamesGrid').addEventListener('click', (e) => {
  const card = e.target.closest('.game-card');
  if (!card) return;
  const game = gamesDatabase[card.dataset.game];
  const t = game[currentLang];

  $('gameModalTitle').textContent = t.title;
  $('gameModalDesc').textContent = t.desc;
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
  if (game.stores.steam) stores.innerHTML += `<a class="btn" href="${game.stores.steam}" target="_blank" rel="noopener"><i class="fa-brands fa-steam"></i> Steam</a>`;
  if (game.stores.itch) stores.innerHTML += `<a class="btn" href="${game.stores.itch}" target="_blank" rel="noopener"><i class="fa-solid fa-gamepad"></i> Itch.io</a>`;
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
