const people = [
  {
    id: "marco_d", name: "Marco D'Arrigo", role: "Unity & Godot Programmer",
    img: "../imgsProfile/marcod.jpg",
    tags: ["Unity", "Godot", "C# / GDScript"],
    link: "https://github.com/MeraMadness", linkLabel: "GitHub",
    it: {
      summary: "Smanetto a 360° sulla logica di gioco e sull'architettura. Più un bug è complesso, più mi diverto a risolverlo.",
      detail: "Gestisco architettura del codice e logica di gameplay, saltando senza problemi da Unity a Godot. Scrivo sistemi puliti e flessibili.",
      facts: ["Engine: Unity, Godot (C# / GDScript)", "Focus: architettura dei sistemi, gameplay, problem solving"]
    },
    en: {
      summary: "Handling full-stack code architecture and gameplay logic. The more complex the puzzle, the more I enjoy breaking it down.",
      detail: "I handle code architecture and gameplay logic in Unity and Godot, focusing on clean, scalable systems.",
      facts: ["Engines: Unity, Godot (C# / GDScript)", "Focus: systems architecture, gameplay, problem solving"]
    }
  },
  {
    id: "valeria_n", name: "Valeria Napoli", role: "Unity & Godot Programmer",
    img: "../imgsProfile/vale.png",
    tags: ["Unity", "Godot", "AI Behavior"],
    link: "https://github.com/vale130612", linkLabel: "GitHub",
    it: {
      summary: "Sviluppo la logica di gioco e i sistemi core, traducendo le idee del team in meccaniche fluide e giocabili.",
      detail: "Mi occupo di gameplay, intelligenza artificiale e sistemi core su Unity e Godot, con meccaniche ottimizzate e pronte da giocare.",
      facts: ["Engine: Unity, Godot", "Focus: comportamento IA, logica core, stabilità delle meccaniche"]
    },
    en: {
      summary: "Specialized in core gameplay systems and AI mechanics, turning team concepts into working prototypes.",
      detail: "I work on gameplay, AI and core systems in Unity and Godot, turning ideas into optimized, playable mechanics.",
      facts: ["Engines: Unity, Godot", "Focus: AI behavior, core systems, gameplay stability"]
    }
  },
  {
    id: "marco_v", name: "Marco Valastro", role: "Digital Artist",
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
    id: "serena_n", name: "Serena Napoli", role: "3D Generalist",
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

const projects = [
  {
    id: "ggj_2025", name: "Global Game Jam 2025", icon: "fa-solid fa-trophy",
    tags: ["48h", "Game Jam", "Team"],
    link: "https://itch.io", linkLabel: "Itch.io",
    it: {
      summary: "Sviluppato da tutto il team in 48 ore. Una sinergia tra codice e arte lo-fi.",
      detail: "Prototipo \"Chronos Echo\", sviluppato interamente dal team unito durante la maratona di sviluppo.",
      facts: []
    },
    en: {
      summary: "Developed by all four members in 48 hours. A blend of custom code and lo-fi art.",
      detail: "\"Chronos Echo\" prototype, built by the whole team over the intensive game jam.",
      facts: []
    }
  },
  {
    id: "vfx_sandbox", name: "Custom VFX Shader Sandbox", icon: "fa-solid fa-wand-magic-sparkles",
    tags: ["Shaders", "VFX", "R&D"],
    it: {
      summary: "Strumento interno che unisce simulazioni matematiche e art design.",
      detail: "Una suite creata internamente da Harakiri Studios per simulare l'interazione tra fumo e fuoco.",
      facts: []
    },
    en: {
      summary: "In-house sandbox merging mathematical simulations with raw art assets.",
      detail: "A custom shader suite assembled in-house to handle smoke and fire particles.",
      facts: []
    }
  }
];

const $ = (id) => document.getElementById(id);
const all = [...people, ...projects];

let currentLang = 'it';
try { currentLang = localStorage.getItem('selected-lang') || 'it'; } catch (e) { /* storage blocked */ }

function card(item) {
  const el = document.createElement('button');
  el.className = 'card';
  el.dataset.id = item.id;
  const media = item.img
    ? `<img src="${item.img}" alt="" loading="lazy" />`
    : `<i class="${item.icon}" style="font-size:2rem;color:var(--accent-2);width:56px;text-align:center"></i>`;
  el.innerHTML = `
    <span class="card-head">
      ${media}
      <span><h3>${item.name}</h3>${item.role ? `<span class="role">${item.role}</span>` : ''}</span>
    </span>
    <span class="tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</span>
    <p>${item[currentLang].summary}</p>`;
  return el;
}

function render() {
  try { localStorage.setItem('selected-lang', currentLang); } catch (e) { /* storage blocked */ }
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-lang-it]').forEach(el => {
    el.innerHTML = el.getAttribute(`data-lang-${currentLang}`);
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));

  $('peopleGrid').replaceChildren(...people.map(card));
  $('projectsGrid').replaceChildren(...projects.map(card));
  document.querySelectorAll('.card-head img').forEach(img => {
    img.addEventListener('error', () => img.removeAttribute('src'));
  });
}

const modal = $('portfolioModal');
const closeModal = () => modal.setAttribute('aria-hidden', 'true');

function openItem(id) {
  const item = all.find(i => i.id === id);
  if (!item) return;
  const t = item[currentLang];

  const head = item.img
    ? `<img src="${item.img}" alt="" />`
    : `<i class="${item.icon}" style="font-size:3rem;color:var(--accent-2);margin-bottom:10px"></i>`;
  $('pModalTitle').textContent = item.name;
  $('pModalBody').innerHTML = `
    <div class="modal-body-head">${head}<h3>${item.name}</h3>${item.role ? `<div class="role">${item.role}</div>` : ''}</div>
    <p>${t.detail}</p>
    ${t.facts.length ? `<ul class="modal-facts">${t.facts.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
    <div class="tags">${item.tags.map(x => `<span class="tag">${x}</span>`).join('')}</div>`;
  $('pModalBody').querySelector('img')?.addEventListener('error', (e) => e.target.removeAttribute('src'));

  $('pModalLinks').innerHTML = item.link
    ? `<a class="btn" href="${item.link}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${item.linkLabel}</a>`
    : '';
  modal.setAttribute('aria-hidden', 'false');
}

document.addEventListener('click', (e) => {
  const c = e.target.closest('.card');
  if (c) openItem(c.dataset.id);
});
modal.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => { currentLang = btn.dataset.lang; render(); });
});

const navLinks = $('navLinks');
const menuToggle = $('menuToggle');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

render();
