// DATABASE LOCALE AGGIORNATO CON LINK ESTERNI
const portfolioDatabase = {
  "marco_d": {
    title_it: "Iniezione Dati: Marco D'Arrigo",
    title_en: "Data Stream: Marco D'Arrigo",
    // Inserisci qui il link esterno (es. GitHub)
    link: "https://github.com/marcodarrigo", 
    link_text_it: "Vedi GitHub Portfolio",
    link_text_en: "View GitHub Portfolio",
    html_it: `
      <div style="text-align:center; margin-bottom:15px;">
        <img src="https://i.pravatar.cc/100?img=11" style="width:80px; border-radius:50%; border:var(--border-style);" />
        <h3>Marco D'Arrigo</h3>
        <p style="color:var(--accent-neon)">Systems Architect & Engine Expert</p>
      </div>
      <p><b>Dettagli Tecnici Avanzati:</b> Integra sistemi complessi in Unreal Engine 5 ottimizzando i cicli della CPU. Ha riscritto parti del motore di rendering per la gestione delle ombre asincrone.</p>
      <div class="modal-detailed-grid">
        <div><b>Progetti Principali:</b> Core Engine Framework, Custom Physics Thread.</div>
        <div><b>Focus Consoles:</b> Devkit PS5 / Xbox Series X optimization.</div>
      </div>
    `,
    html_en: `
      <div style="text-align:center; margin-bottom:15px;">
        <img src="https://i.pravatar.cc/100?img=11" style="width:80px; border-radius:50%; border:var(--border-style);" />
        <h3>Marco D'Arrigo</h3>
        <p style="color:var(--accent-neon)">Systems Architect & Engine Expert</p>
      </div>
      <p><b>Advanced Technical Specifications:</b> Implements optimized data architectures in Unreal Engine 5. Rewrote low-level engine modules to accommodate customized async rendering paths.</p>
      <div class="modal-detailed-grid">
        <div><b>Main Contributions:</b> Core Engine Framework, Custom Physics Thread.</div>
        <div><b>Target Hardwares:</b> PS5 & Xbox Series X devkit pipelines.</div>
      </div>
    `
  },
  "valeria_n": {
    title_it: "Iniezione Dati: Valeria Napoli",
    title_en: "Data Stream: Valeria Napoli",
    link: "https://github.com/valerianapoli",
    link_text_it: "Vedi Repository Personale",
    link_text_en: "View Personal Repository",
    html_it: `
      <div style="text-align:center; margin-bottom:15px;">
        <img src="https://i.pravatar.cc/100?img=12" style="width:80px; border-radius:50%; border:var(--border-style);" />
        <h3>Valeria Napoli</h3>
        <p style="color:var(--accent-neon)">AI Specialist & Lead Gameplay Engineer</p>
      </div>
      <p><b>Dettagli Tecnici Avanzati:</b> Sviluppatrice degli algoritmi decisionali del team. Ha creato un framework proprietario di Behavior Trees in grado di gestire centinaia di agenti contemporaneamente.</p>
    `,
    html_en: `
      <div style="text-align:center; margin-bottom:15px;">
        <img src="https://i.pravatar.cc/100?img=12" style="width:80px; border-radius:50%; border:var(--border-style);" />
        <h3>Valeria Napoli</h3>
        <p style="color:var(--accent-neon)">AI Specialist & Lead Gameplay Engineer</p>
      </div>
      <p><b>Advanced Technical Specifications:</b> Architect behind the studio's algorithmic decision systems. Built a proprietary utility-AI behavior matrix.</p>
    `
  },
  "marco_v": {
    title_it: "Iniezione Dati: Marco Valastro",
    title_en: "Data Stream: Marco Valastro",
    link: "https://www.artstation.com", // Esempio ArtStation
    link_text_it: "Vedi Portfolio ArtStation",
    link_text_en: "View ArtStation Showcase",
    html_it: `
      <div style="text-align:center; margin-bottom:15px;">
        <img src="https://i.pravatar.cc/100?img=13" style="width:80px; border-radius:50%; border:var(--border-style);" />
        <h3>Marco Valastro</h3>
        <p style="color:var(--accent-neon)">Art Director & Concept Pioneer</p>
      </div>
      <p><b>Dettagli Artistici Avanzati:</b> Dirige la coerenza cromatica ed estetica dello studio. Ha ideato lo stile unico che unisce l'eleganza classica a dettagli cyberpunk industriali.</p>
    `,
    html_en: `
      <div style="text-align:center; margin-bottom:15px;">
        <img src="https://i.pravatar.cc/100?img=13" style="width:80px; border-radius:50%; border:var(--border-style);" />
        <h3>Marco Valastro</h3>
        <p style="color:var(--accent-neon)">Art Director & Concept Pioneer</p>
      </div>
      <p><b>Advanced Artistic Specifications:</b> Sets color palettes and aesthetic direction. Pioneered the structural design of Harakiri Studios.</p>
    `
  },
  "serena_n": {
    title_it: "Iniezione Dati: Serena Napoli",
    title_en: "Data Stream: Serena Napoli",
    link: "https://www.artstation.com", 
    link_text_it: "Vedi Showreel 3D",
    link_text_en: "View 3D Showreel",
    html_it: `
      <div style="text-align:center; margin-bottom:15px;">
        <img src="https://i.pravatar.cc/100?img=14" style="width:80px; border-radius:50%; border:var(--border-style);" />
        <h3>Serena Napoli</h3>
        <p style="color:var(--accent-neon)">Lead 3D & Technical Animator</p>
      </div>
      <p><b>Dettagli Artistici Avanzati:</b> Esperta nella modellazione poligonale complessa e nella fisica delle giunzioni (rigging). Sviluppa gli shader di movimento.</p>
    `,
    html_en: `
      <div style="text-align:center; margin-bottom:15px;">
        <img src="https://i.pravatar.cc/100?img=14" style="width:80px; border-radius:50%; border:var(--border-style);" />
        <h3>Serena Napoli</h3>
        <p style="color:var(--accent-neon)">Lead 3D & Technical Animator</p>
      </div>
      <p><b>Advanced Technical Specifications:</b> Master of asset optimization and organic constraints.</p>
    `
  },
  "ggj_2025": {
    title_it: "File Progetto: Global Game Jam 2025",
    title_en: "Project File: Global Game Jam 2025",
    link: "https://itch.io", // Esempio link per giocare al prototipo
    link_text_it: "Gioca su Itch.io",
    link_text_en: "Play on Itch.io",
    html_it: `
      <h3 style="color:var(--accent-neon); text-align:center;">Prototipo "Chronos Echo"</h3>
      <p style="margin-top:15px;">Sviluppato interamente dal team unito durante la maratona di sviluppo.</p>
    `,
    html_en: `
      <h3 style="color:var(--accent-neon); text-align:center;">"Chronos Echo" Prototype</h3>
      <p style="margin-top:15px;">Built natively by the unified team over the intensive hackathon.</p>
    `
  },
  "vfx_sandbox": {
    title_it: "File Progetto: VFX Shader Sandbox",
    title_en: "Project File: VFX Shader Sandbox",
    // Se non metti il campo 'link', il pulsante semplicemente non apparirà per questa card
    html_it: `
      <h3 style="color:var(--accent-neon); text-align:center;">Tool Proprietario R&D</h3>
      <p style="margin-top:15px;">Una suite creata internamente ad Harakiri Studios per simulare l'interazione tra fumo e fuoco.</p>
    `,
    html_en: `
      <h3 style="color:var(--accent-neon); text-align:center;">Proprietary R&D Tool Suite</h3>
      <p style="margin-top:15px;">A custom shader suite assembled in-house to solve smoke and fire particles.</p>
    `
  }
};

// LOGICA CORE (LINGUA E TEMI)
let currentLang = localStorage.getItem('selected-lang') || 'it';
let currentTheme = localStorage.getItem('selected-theme') || 'elegant-dark';

function playRetroClickSound() {
  if (currentTheme !== 'cyber-dark' && currentTheme !== 'cyber-white') return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + 0.08);
  } catch (e) {}
}

function applyLanguageAndHeaders() {
  localStorage.setItem('selected-lang', currentLang);
  document.querySelectorAll('[data-lang-it]').forEach(el => {
    el.textContent = currentLang === 'it' ? el.getAttribute('data-lang-it') : el.getAttribute('data-lang-en');
  });
  document.querySelectorAll('.window-title').forEach(titleBlock => {
    const textSpan = titleBlock.querySelector('span');
    if (!textSpan) return;
    if (currentTheme === 'cyber-dark' || currentTheme === 'cyber-white') {
      textSpan.textContent = titleBlock.getAttribute('data-cyber');
    } else {
      textSpan.textContent = currentLang === 'it' ? titleBlock.getAttribute('data-elegant-it') : titleBlock.getAttribute('data-elegant-en');
    }
  });
  if (document.getElementById('languageSelector')) document.getElementById('languageSelector').value = currentLang;
}

function applyTheme(themeName) {
  currentTheme = themeName;
  document.body.classList.remove('cyber-dark', 'cyber-white', 'elegant-dark', 'elegant-light');
  document.body.classList.add(themeName);
  localStorage.setItem('selected-theme', themeName);
  if (document.getElementById('themeSelector')) document.getElementById('themeSelector').value = themeName;
  applyLanguageAndHeaders();
  initAdaptiveParticles();
}

// LOGICA E GESTIONE MODALE DINAMICO CON INTEGRAZIONE LINK ESTERNO
const portfolioModal = document.getElementById('portfolioModal');
const pModalHeaderTitle = document.getElementById('pModalHeaderTitle');
const pModalDynamicContent = document.getElementById('pModalDynamicContent');

function openPortfolioModal(id) {
  const data = portfolioDatabase[id];
  if (!data || !portfolioModal || !pModalDynamicContent) return;

  // 1. Inserisce il contenuto base (Testo e immagini)
  let baseHtml = currentLang === 'it' ? data.html_it : data.html_en;

  // 2. Controllo e iniezione del link esterno (se configurato nel database)
  if (data.link) {
    const labelLink = currentLang === 'it' ? data.link_text_it : data.link_text_en;
    baseHtml += `
      <div class="modal-link-container">
        <a href="${data.link}" target="_blank" rel="noopener noreferrer" class="win-action-btn external-portfolio-link audio-click">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> ${labelLink}
        </a>
      </div>
    `;
  }

  pModalDynamicContent.innerHTML = baseHtml;

  // Imposta il titolo corretto
  if (currentLang === 'it') {
    if (pModalHeaderTitle) pModalHeaderTitle.querySelector('span').textContent = data.title_it;
  } else {
    if (pModalHeaderTitle) pModalHeaderTitle.querySelector('span').textContent = data.title_en;
  }

  if (currentTheme.includes('cyber') && pModalHeaderTitle) {
    pModalHeaderTitle.querySelector('span').textContent = pModalHeaderTitle.getAttribute('data-cyber');
  }

  portfolioModal.setAttribute('aria-hidden', 'false');
}

// ASSEGNAZIONI EVENTI
window.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLanguageAndHeaders();

  document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      if (id) openPortfolioModal(id);
    });
  });

  document.getElementById('openExpansionBtn')?.addEventListener('click', () => {
    if (portfolioModal && pModalDynamicContent) {
      if (pModalHeaderTitle) pModalHeaderTitle.querySelector('span').textContent = "FUTURE_CORE.SYS";
      pModalDynamicContent.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 15px;">Area Sviluppi Futuri</h2>
        <p style="text-align: center; color: var(--text-muted); font-size: 0.9rem;">Spazio predisposto per l'integrazione di nuove sezioni o devlog.</p>
      `;
      portfolioModal.setAttribute('aria-hidden', 'false');
    }
  });

  portfolioModal?.querySelectorAll('.modal-close, .closeModalBtn').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => portfolioModal.setAttribute('aria-hidden', 'true'));
  });
  portfolioModal?.addEventListener('click', (e) => {
    if (e.target === portfolioModal) portfolioModal.setAttribute('aria-hidden', 'true');
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('.audio-click')) playRetroClickSound();
  });
});

document.getElementById('themeSelector')?.addEventListener('change', (e) => applyTheme(e.target.value));
document.getElementById('languageSelector')?.addEventListener('change', (e) => {
  currentLang = e.target.value;
  applyLanguageAndHeaders();
});

const navLinks = document.getElementById('navLinks');
function toggleMenu() {
  navLinks?.classList.toggle('active');
  const toggleBtn = document.querySelector('.menu-toggle');
  if (toggleBtn) toggleBtn.textContent = navLinks?.classList.contains('active') ? '✖' : '☰';
}

function initAdaptiveParticles() {
  let colors, lineColor, opacityValue, speedValue;
  if (document.body.classList.contains('elegant-light')) {
    colors = ["#888888", "#785838"]; lineColor = "#dddddd"; opacityValue = 0.2; speedValue = 0.6;
  } else if (document.body.classList.contains('elegant-dark')) {
    colors = ["#444444", "#c5a880"]; lineColor = "#222222"; opacityValue = 0.3; speedValue = 0.7;
  } else if (document.body.classList.contains('cyber-white')) {
    colors = ["#ff007f", "#00b3ff", "#888888"]; lineColor = "#cccccc"; opacityValue = 0.4; speedValue = 1.4;
  } else {
    colors = ["#ff007f", "#00ffcc", "#ffcc00"]; lineColor = "#ffffff"; opacityValue = 0.5; speedValue = 1.8;
  }
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: colors },
        shape: { type: "circle" },
        opacity: { value: opacityValue, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 130, color: lineColor, opacity: (currentTheme.includes('cyber')) ? 0.22 : 0.07, width: 1 },
        move: { enable: true, speed: speedValue, direction: "none", out_mode: "out" }
      },
      interactivity: { events: { onhover: { enable: true, mode: "grab" } }, modes: { grab: { distance: 150, line_linked: { opacity: 0.3 } } } },
      retina_detect: true
    });
  }
}