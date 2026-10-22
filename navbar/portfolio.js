const people = [
  {
    id: "marco_d", name: "Marco D'Arrigo", role: "Unity Programmer", initials: "MD",
    img: "../imgsProfile/marcod.jpg",
    tags: ["Unity", "C#"],
    link: "https://github.com/MeraMadness", linkLabel: "GitHub",
    it: {
      summary: "Smanetto a 360° sulla logica di gioco e sull'architettura. Più un bug è complesso, più mi diverto a risolverlo.",
      detail: "Gestisco architettura del codice e logica di gameplay, con Unity come motore principale. Scrivo sistemi puliti e flessibili.",
      facts: ["Engine: Unity (C#)", "Focus: architettura dei sistemi, gameplay, problem solving"]
    },
    en: {
      summary: "Handling full-stack code architecture and gameplay logic. The more complex the puzzle, the more I enjoy breaking it down.",
      detail: "I handle code architecture and gameplay logic in Unity, focusing on clean, scalable systems.",
      facts: ["Engine: Unity (C#)", "Focus: systems architecture, gameplay, problem solving"]
    }
  },
  {
    id: "valeria_n", name: "Valeria Napoli", role: "Unity Programmer", initials: "VN",
    img: "../imgsProfile/vale.png",
    tags: ["Unity", "AI Behavior"],
    link: "https://github.com/vale130612", linkLabel: "GitHub",
    it: {
      summary: "Sviluppo la logica di gioco e i sistemi core, traducendo le idee del team in meccaniche fluide e giocabili.",
      detail: "Mi occupo di gameplay, intelligenza artificiale e sistemi core su Unity, con meccaniche ottimizzate e pronte da giocare.",
      facts: ["Engine: Unity", "Focus: comportamento IA, logica core, stabilità delle meccaniche"]
    },
    en: {
      summary: "Specialized in core gameplay systems and AI mechanics, turning team concepts into working prototypes.",
      detail: "I work on gameplay, AI and core systems in Unity, turning ideas into optimized, playable mechanics.",
      facts: ["Engine: Unity", "Focus: AI behavior, core systems, gameplay stability"]
    }
  },
  {
    id: "marco_v", name: "Marco Valastro", role: "Digital Artist", initials: "MV",
    img: "../imgsProfile/marco.jpg",
    tags: ["Photoshop", "Concept Art", "UI Design"],
    link: "https://www.instagram.com/valstrax_draw/", linkLabel: "Instagram",
    it: {
      summary: "Curo l'identità visiva e l'atmosfera dei nostri progetti, dai primi schizzi di concept art all'interfaccia utente.",
      detail: "Do forma, colore e identità visiva a tutto lo studio, dalla concept art bidimensionale fino alla UI di gioco.",
      facts: ["Strumenti: Photoshop", "Focus: concept art, UI, direzione estetica"]
    },
    en: {
      summary: "Shaping the aesthetic and atmosphere of our games, from early 2D concepts to final UI assets.",
      detail: "I define the color palettes and visual identity of our games, from concept art and sketches to UI design.",
      facts: ["Tools: Photoshop", "Focus: concept art, UI, art direction"]
    }
  },
  {
    id: "serena_n", name: "Serena Napoli", role: "3D Generalist", initials: "SN",
    img: "../imgsProfile/sere.jpg",
    tags: ["Blender", "3D Modeling", "Texturing"],
    link: "https://www.artstation.com/serenanapoli_3d", linkLabel: "ArtStation",
    it: {
      summary: "Trasformo i concept in modelli 3D poligonali, creando da zero personaggi e asset d'ambientazione.",
      detail: "Trasformo le idee bidimensionali in realtà tridimensionale, con modellazione poligonale di personaggi, oggetti di scena ed elementi d'ambiente.",
      facts: ["Strumenti: Blender", "Competenze: modellazione 3D (prop e personaggi), texturing"]
    },
    en: {
      summary: "Turning 2D designs into tangible 3D game worlds, sculpting characters and props from scratch.",
      detail: "I turn flat 2D designs into 3D, modeling everything from characters to environmental assets and props.",
      facts: ["Tools: Blender", "Skills: 3D modeling (props & characters), texturing"]
    }
  }
];

// Progetti SOLO: uno per voce. Se la lista e' vuota la sezione mostra un messaggio "presto".
// `by` = id del membro: marco_d, valeria_n, marco_v oppure serena_n.
// Esempio:
// {
//   id: "il-mio-gioco", by: "marco_d",
//   cover: "../media/il-mio-gioco.png",              // opzionale (se manca, sfondo colorato)
//   tags: ["Unity", "Game Jam"],
//   link: "https://...", linkLabel: "Itch.io",        // opzionale
//   it: { title: "Titolo", summary: "Una riga.", detail: "Descrizione piu' lunga." },
//   en: { title: "Title",  summary: "One line.",  detail: "Longer description." }
// }
const soloProjects = [];

const $ = (id) => document.getElementById(id);
const tagsHtml = (item) => item.tags.map(t => `<span class="tag">${t}</span>`).join('');

let currentLang = 'it';
try { currentLang = localStorage.getItem('selected-lang') || 'it'; } catch (e) { /* storage blocked */ }

function dropBrokenImg(img) { img.addEventListener('error', () => img.remove()); }

function personTile(p) {
  const el = document.createElement('button');
  el.className = 'tile';
  el.dataset.id = p.id;
  el.innerHTML = `
    <span class="tile-media" data-initials="${p.initials}"><img src="${p.img}" alt="" loading="lazy" /></span>
    <span class="tile-info">
      <strong>${p.name}</strong>
      <span class="member-role">${p.role}</span>
      <span class="tags">${tagsHtml(p)}</span>
    </span>`;
  dropBrokenImg(el.querySelector('img'));
  return el;
}

function soloCard(p) {
  const author = people.find(a => a.id === p.by);
  const t = p[currentLang];
  const el = document.createElement('button');
  el.className = 'solo';
  el.dataset.id = p.id;
  el.innerHTML = `
    <span class="solo-cover" data-initials="${author ? author.initials : ''}">${p.cover ? `<img src="${p.cover}" alt="" loading="lazy" />` : ''}</span>
    <span class="solo-body">
      <span class="solo-by">${author ? (currentLang === 'it' ? 'di ' : 'by ') + author.name : ''}</span>
      <h3>${t.title}</h3>
      <p>${t.summary}</p>
      <span class="tags">${tagsHtml(p)}</span>
    </span>`;
  const img = el.querySelector('img');
  if (img) dropBrokenImg(img);
  return el;
}

function render() {
  try { localStorage.setItem('selected-lang', currentLang); } catch (e) { /* storage blocked */ }
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-lang-it]').forEach(el => {
    el.innerHTML = el.getAttribute(`data-lang-${currentLang}`);
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));

  $('peopleGrid').replaceChildren(...people.map(personTile));
  $('soloGrid').replaceChildren(...soloProjects.map(soloCard));
  $('soloEmpty').hidden = soloProjects.length > 0;
}

const modal = $('portfolioModal');
const closeModal = () => modal.setAttribute('aria-hidden', 'true');

function openItem(id) {
  const person = people.find(i => i.id === id);
  const solo = soloProjects.find(i => i.id === id);
  const item = person || solo;
  if (!item) return;
  const t = item[currentLang];
  const author = solo ? people.find(p => p.id === solo.by) : null;
  const picture = person ? person.img : solo.cover;

  const media = $('pModalMedia');
  media.replaceChildren();
  media.dataset.initials = (person || author || {}).initials || '';
  if (picture) {
    const img = document.createElement('img');
    img.alt = '';
    dropBrokenImg(img);
    img.src = picture;
    media.appendChild(img);
  }

  const role = person ? person.role : (author ? (currentLang === 'it' ? 'di ' : 'by ') + author.name : '');
  $('pModalTitle').textContent = person ? person.name : t.title;
  $('pModalRole').textContent = role;
  $('pModalRole').hidden = !role;
  $('pModalDesc').textContent = t.detail;
  $('pModalFacts').innerHTML = (t.facts || []).map(f => `<li>${f}</li>`).join('');
  $('pModalTags').innerHTML = tagsHtml(item);
  $('pModalLinks').innerHTML = item.link
    ? `<a class="btn btn-primary" href="${item.link}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${item.linkLabel || 'Link'}</a>`
    : '';
  modal.setAttribute('aria-hidden', 'false');
}

document.addEventListener('click', (e) => {
  const c = e.target.closest('.tile, .solo');
  if (c) openItem(c.dataset.id);
});
modal.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => { currentLang = btn.dataset.lang; render(); });
});

const nav = $('nav');
const menuToggle = $('menuToggle');
const setMenu = (open) => {
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
};
$('navBackdrop').addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
menuToggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });

document.querySelectorAll('[data-discord]').forEach(a => {
  a.hidden = !SITE.discordUrl;
  if (SITE.discordUrl) a.href = SITE.discordUrl;
});

render();
