const gamesDatabase = {
  "neon-abyss": {
    it: {
      title: "Neon Abyss of Mind",
      desc: "Un viaggio psichedelico destrutturato all'interno della memoria RAM corrotta di un vecchio supercomputer degli anni '90. Affronta glitch fisici, logiche bizzarre e algoritmi ostili in questo surreale platform narrativo.",
      extra: "STATUS: STAGE 0.4 ALPHA // CORE COMPILER: C++ // REQUISITI REALI: Almeno 16MB di RAM virtuale."
    },
    en: {
      title: "Neon Abyss of Mind",
      desc: "A deconstructed psychedelic journey inside the corrupted RAM memory of an old 90s supercomputer. Battle physics glitches, bizarre logic, and hostile algorithms in this surreal narrative platformer.",
      extra: "STATUS: STAGE 0.4 ALPHA // CORE COMPILER: C++ // SYSTEM REQUIREMENTS: At least 16MB of virtual RAM."
    },
    screenshots: [
      "https://picsum.photos/id/1005/600/400",
      "https://picsum.photos/id/1015/600/400",
      "https://picsum.photos/id/1025/600/400"
    ],
    stores: {
      steam: "https://store.steampowered.com",
      itch: "https://itch.io/team/harakirigamestudios"
    }
  },
  "cosmic-rituals": {
    it: {
      title: "Cosmic Rituals",
      desc: "Simulatore di culti spaziali a 8-bit. Gestisci rituali complessi generati proceduralmente nello spazio siderale profondo, cercando di attirare l'attenzione di divinità cosmiche pigre.",
      extra: "STATUS: COMPILATO CON SUCCESSO // STILE: Pixel-Art Retro-Fatalista // GRAFICA: 4 colori."
    },
    en: {
      title: "Cosmic Rituals",
      desc: "8-bit cosmic cult simulator. Manage complex, procedurally generated rituals in deep outer space, trying to attract the fleeting attention of lazy cosmic entities.",
      extra: "STATUS: COMPILED SUCCESSFULLY // STYLE: Retro-Fatalistic Pixel-Art // GRAPHICS: 4 colors."
    },
    screenshots: [
      "https://picsum.photos/id/1035/600/400",
      "https://picsum.photos/id/1045/600/400",
      "https://picsum.photos/id/1055/600/400"
    ],
    stores: {
      steam: "", 
      itch: "https://itch.io/team/harakirigamestudios"
    }
  },
  "lucid-deathloop": {
    it: {
      title: "Lucid Deathloop",
      desc: "Muori, destabilizza l'ambiente circostante, rompi le variabili globali e ripeti il ciclo. Un puzzle-azione frenetico in cui ogni tua morte modifica strutturalmente la mappa.",
      extra: "STATUS: BUG DETECTED (Programmatori in lacrime) // AUDIO: Colonna sonora synthwave distorta."
    },
    en: {
      title: "Lucid Deathloop",
      desc: "Die, destabilize your surroundings, break global engine variables and repeat. A frantic action-puzzle game where every single death structurally alters the environment.",
      extra: "STATUS: BUG DETECTED (Devs are crying) // AUDIO: Distorted synthwave soundtrack."
    },
    screenshots: [
      "https://picsum.photos/id/1065/600/400",
      "https://picsum.photos/id/1075/600/400",
      "https://picsum.photos/id/1085/600/400"
    ],
    stores: {
      steam: "https://store.steampowered.com",
      itch: "" 
    }
  }
};

let currentLang = localStorage.getItem('selected-lang') || 'it';
let currentTheme = localStorage.getItem('selected-theme') || 'elegant-dark';

// Web Audio API Synth per click retrò nativo (senza caricare file audio esterni)
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
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) { /* AudioContext bloccato dalle policy del browser finché non interagiscono */ }
}

function applyLanguageAndHeaders() {
  localStorage.setItem('selected-lang', currentLang);
  
  document.querySelectorAll('[data-lang-it]').forEach(el => {
    el.textContent = currentLang === 'it' ? el.getAttribute('data-lang-it') : el.getAttribute('data-lang-en');
  });

  const marquee = document.getElementById('tickerMarquee');
  if (marquee) {
    marquee.textContent = currentLang === 'it' ? marquee.getAttribute('data-lang-it') : marquee.getAttribute('data-lang-en');
  }

  document.querySelectorAll('.member').forEach(member => {
    const roleEl = member.querySelector('.member-role');
    if (roleEl) {
      roleEl.textContent = currentLang === 'it' ? member.getAttribute('data-role-it') : member.getAttribute('data-role-en');
    }
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

  const langSelector = document.getElementById('languageSelector');
  if (langSelector) langSelector.value = currentLang;
}

window.addEventListener("load", () => {
  const progress = document.querySelector(".loading-progress");
  const continueBtn = document.getElementById("splashContinueBtn");
  const splash = document.getElementById("splash");

  setTimeout(() => {
    if (progress) progress.parentElement.style.display = "none";
    if (continueBtn) continueBtn.style.display = "inline-block";
  }, 2000);

  continueBtn?.addEventListener("click", () => {
    if (splash) {
      splash.style.opacity = 0;
      setTimeout(() => { splash.style.display = "none"; }, 600);
    }
  });

  // Easter Egg nella console
  console.log("%c[HARAKIRI OS v3.4]: Access Granted. Welcome to the core database.", "color: #ff007f; font-family: monospace; font-size: 13px; font-weight: bold;");
});

const navLinks = document.getElementById('navLinks');
const menuToggleBtn = document.querySelector('.menu-toggle');

function toggleMenu() {
    navLinks?.classList.toggle('active');
    if (menuToggleBtn) {
        menuToggleBtn.textContent = navLinks?.classList.contains('active') ? '✖' : '☰';
    }
}
window.toggleMenu = toggleMenu;

document.querySelectorAll('.modal').forEach(modalElement => {
  const closeActions = () => {
    modalElement.setAttribute('aria-hidden', 'true');
    if (modalElement.id === 'trailerModal') {
      document.getElementById('trailerIframe').src = "";
    }
  };

  modalElement.querySelectorAll('.modal-close, .closeModalBtn').forEach(closeBtn => {
    closeBtn.addEventListener('click', closeActions);
  });
  modalElement.addEventListener('click', (e) => {
    if (e.target === modalElement) closeActions();
  });
});

const trailerModal = document.getElementById('trailerModal');
document.getElementById('openTrailerBtn')?.addEventListener('click', () => {
  if (trailerModal) {
    document.getElementById('trailerIframe').src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
    trailerModal.setAttribute('aria-hidden', 'false');
  }
});

const teamModal = document.getElementById('teamModal');
if (teamModal) {
  const modalTitle = document.getElementById('modalTitle');
  const modalImg = document.getElementById('modalImg'); // Nuovo elemento per l'immagine
  const modalRole = document.getElementById('modalRole');
  const modalDesc = document.getElementById('modalDesc');
  const modalPortfolioWrapper = document.getElementById('modalPortfolioWrapper'); // Nuovo wrapper portfolio

  document.querySelectorAll('.member').forEach(memberBtn => {
    memberBtn.addEventListener('click', () => {
      // Imposta nome e immagine prendendola direttamente dal markup del bottone
      modalTitle.textContent = memberBtn.dataset.name;
      
      const memberImgSrc = memberBtn.querySelector('img')?.src;
      if (modalImg && memberImgSrc) {
        modalImg.src = memberImgSrc;
        modalImg.alt = memberBtn.dataset.name;
      }

      // Imposta Ruolo e Bio in base alla lingua
      if (currentLang === 'it') {
        modalRole.textContent = memberBtn.getAttribute('data-role-it');
        modalDesc.textContent = memberBtn.getAttribute('data-bio-it');
      } else {
        modalRole.textContent = memberBtn.getAttribute('data-role-en');
        modalDesc.textContent = memberBtn.getAttribute('data-bio-en');
      }

      // Gestione dinamica del link Portfolio
      if (modalPortfolioWrapper) {
        modalPortfolioWrapper.innerHTML = ''; // Svuota vecchi link
        const portfolioUrl = memberBtn.getAttribute('data-portfolio');
        
        if (portfolioUrl) {
          const btnText = currentLang === 'it' ? 'VEDI PORTFOLIO' : 'VIEW PORTFOLIO';
          modalPortfolioWrapper.innerHTML = `
            <a href="${portfolioUrl}" target="_blank" rel="noopener" class="win-action-btn audio-click" style="text-decoration: none; display: inline-block;">
              <i class="fa-solid fa-briefcase" style="margin-right: 6px;"></i> ${btnText}
            </a>
          `;
        }
      }

      teamModal.setAttribute('aria-hidden', 'false');
    });
  });
}

const gameModal = document.getElementById('gameModal');
if (gameModal) {
  const gameModalTitle = document.getElementById('gameModalTitle');
  const gameModalDesc = document.getElementById('gameModalDesc');
  const gameModalExtra = document.getElementById('gameModalExtra');
  const gameModalGallery = document.getElementById('gameModalGallery');
  const gameModalStores = document.getElementById('gameModalStores');

  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      const gameKey = card.dataset.game;
      const gameData = gamesDatabase[gameKey];

      if (gameData) {
        const localizedData = gameData[currentLang];
        gameModalTitle.textContent = localizedData.title;
        gameModalDesc.textContent = localizedData.desc;
        gameModalExtra.innerHTML = `<strong>SYS_LOG:</strong> ${localizedData.extra}`;
        
        gameModalGallery.innerHTML = '';
        gameData.screenshots.forEach(src => {
          const img = document.createElement('img');
          img.src = src; img.className = 'popup-gallery-img';
          gameModalGallery.appendChild(img);
        });

        gameModalStores.innerHTML = '';
        let hasLinks = false;
        if (gameData.stores.steam) {
          gameModalStores.innerHTML += `<a href="${gameData.stores.steam}" target="_blank" rel="noopener" class="store-btn audio-click"><i class="fa-brands fa-steam"></i> Steam</a>`;
          hasLinks = true;
        }
        if (gameData.stores.itch) {
          gameModalStores.innerHTML += `<a href="${gameData.stores.itch}" target="_blank" rel="noopener" class="store-btn audio-click"><i class="fa-solid fa-gamepad"></i> Itch.io</a>`;
          hasLinks = true;
        }
        if (!hasLinks) {
          gameModalStores.innerHTML = `<span style="font-size:0.9rem; color:var(--text-muted);">${currentLang === 'it' ? '[PROSSIMAMENTE]' : '[COMING SOON]'}</span>`;
        }
        gameModal.setAttribute('aria-hidden', 'false');
      }
    });
  });
}

const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) scrollToTopBtn.classList.add('show');
  else scrollToTopBtn.classList.remove('show');
});
scrollToTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const themeSelector = document.getElementById('themeSelector');
const body = document.body;

function applyTheme(themeName) {
  currentTheme = themeName;
  body.classList.remove('cyber-dark', 'cyber-white', 'elegant-dark', 'elegant-light');
  body.classList.add(themeName);
  localStorage.setItem('selected-theme', themeName);
  if (themeSelector) themeSelector.value = themeName;
  
  applyLanguageAndHeaders();
  initAdaptiveParticles();
}

window.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLanguageAndHeaders();

  // Aggancia il listener audio nativo su tutti gli elementi con classe .audio-click
  document.addEventListener('click', (e) => {
    if (e.target.closest('.audio-click')) {
      playRetroClickSound();
    }
  });
});

themeSelector?.addEventListener('change', (e) => {
  applyTheme(e.target.value);
  navLinks?.classList.remove('active');
});

document.getElementById('languageSelector')?.addEventListener('change', (e) => {
  currentLang = e.target.value;
  applyLanguageAndHeaders();
});

function initAdaptiveParticles() {
  let particleColors, lineColor, opacityValue, speedValue;
  if (body.classList.contains('elegant-light')) {
    particleColors = ["#888888", "#785838"]; lineColor = "#dddddd"; opacityValue = 0.2; speedValue = 0.6;
  } else if (body.classList.contains('elegant-dark')) {
    particleColors = ["#444444", "#c5a880"]; lineColor = "#222222"; opacityValue = 0.3; speedValue = 0.7;
  } else if (body.classList.contains('cyber-white')) {
    particleColors = ["#ff007f", "#00b3ff", "#888888"]; lineColor = "#cccccc"; opacityValue = 0.4; speedValue = 1.4;
  } else {
    particleColors = ["#ff007f", "#00ffcc", "#ffcc00"]; lineColor = "#ffffff"; opacityValue = 0.5; speedValue = 1.8;
  }

  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      particles: {
        number: { value: 55, density: { enable: true, value_area: 800 } },
        color: { value: particleColors },
        shape: { type: "circle" },
        opacity: { value: opacityValue, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true, distance: 130, color: lineColor,
          opacity: (body.classList.contains('cyber-dark') || body.classList.contains('cyber-white')) ? 0.22 : 0.07, width: 1
        },
        move: { enable: true, speed: speedValue, direction: "none", out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
        modes: { grab: { distance: 150, line_linked: { opacity: 0.3 } }, push: { particles_nb: 2 } }
      },
      retina_detect: true
    });
  }
}