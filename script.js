// Database locale con sottosezioni, screenshot dedicati e link agli store
const gamesDatabase = {
  "neon-abyss": {
    title: "Neon Abyss of Mind",
    desc: "Un viaggio psichedelico destrutturato all'interno della memoria RAM corrotta di un vecchio supercomputer degli anni '90. Affronta glitch fisici, logiche bizzarre e algoritmi ostili in questo surreale platform narrativo.",
    extra: "STATUS: STAGE 0.4 ALPHA // CORE COMPILER: C++ // REQUISITI REALI: Almeno 16MB di RAM virtuale.",
    screenshots: [
      "https://picsum.photos/id/1005/600/400",
      "https://picsum.photos/id/1015/600/400",
      "https://picsum.photos/id/1025/600/400"
    ],
    stores: {
      steam: "https://store.steampowered.com", // Inserisci il link reale
      itch: "https://itch.io/team/harakirigamestudios"
    }
  },
  "cosmic-rituals": {
    title: "Cosmic Rituals",
    desc: "Simulatore di culti spaziali a 8-bit. Gestisci rituali complessi generati proceduralmente nello spazio siderale profondo, cercando di attirare l'attenzione di divinità cosmiche pigre che preferiscono dormire piuttosto che distruggere galassie.",
    extra: "STATUS: COMPILATO CON SUCCESSO // STILE: Pixel-Art Retro-Fatalista // GRAFICA: 4 colori.",
    screenshots: [
      "https://picsum.photos/id/1035/600/400",
      "https://picsum.photos/id/1045/600/400",
      "https://picsum.photos/id/1055/600/400"
    ],
    stores: {
      steam: "", // Se non c'è la pagina Steam, lascialo vuoto "" e il tasto sparirà da solo
      itch: "https://itch.io/team/harakirigamestudios"
    }
  },
  "lucid-deathloop": {
    title: "Lucid Deathloop",
    desc: "Muori, destabilizza l'ambiente circostante, rompi le variabili globali e ripeti il ciclo. Un puzzle-azione frenetico in cui ogni tua morte modifica strutturalmente il codice sorgente della mappa di gioco successiva.",
    extra: "STATUS: BUG DETECTED (Programmatori in lacrime) // AUDIO: Colonna sonora synthwave distorta.",
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

// 1. Gestione del Boot iniziale, dello Splash e del Video Modale
window.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById('startBtn');
  const splash = document.getElementById('splash');
  const videoModal = document.getElementById('videoModal');
  const iframe = document.getElementById('trailerIframe');

  if(startBtn) startBtn.style.display = 'none';

  setTimeout(() => {
    if (startBtn) startBtn.style.display = 'inline-block';
    const progress = document.querySelector('.loading-progress');
    if (progress) progress.style.animationPlayState = 'paused';
  }, 2000);

  startBtn?.addEventListener('click', () => {
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => { splash.style.display = 'none'; }, 600);
    }
    if (videoModal) {
      videoModal.setAttribute('aria-hidden', 'false');
      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = currentSrc + "&autoplay=1&mute=0";
      }
    }
  });

  function closeVideo() {
    videoModal?.setAttribute('aria-hidden', 'true');
    if (iframe) {
      iframe.src = iframe.src.split('?')[0] + "?enablejsapi=1";
    }
  }

  videoModal?.querySelectorAll('.modal-close, .closeModalBtn').forEach(btn => {
    btn.addEventListener('click', closeVideo);
  });
  videoModal?.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });
});

// 2. Modali Generici: Chiusura Standard per Team e Giochi
document.querySelectorAll('.modal').forEach(modalElement => {
  if (modalElement.id === 'videoModal') return; 

  modalElement.querySelectorAll('.modal-close, .closeModalBtn').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      modalElement.setAttribute('aria-hidden', 'true');
    });
  });

  modalElement.addEventListener('click', (e) => {
    if (e.target === modalElement) {
      modalElement.setAttribute('aria-hidden', 'true');
    }
  });
});

// 3. Modale Dinamico Info Team Staff
const teamModal = document.getElementById('teamModal');
if (teamModal) {
  const modalTitle = document.getElementById('modalTitle');
  const modalRole = document.getElementById('modalRole');
  const modalDesc = document.getElementById('modalDesc');

  document.querySelectorAll('.member').forEach(memberBtn => {
    memberBtn.addEventListener('click', () => {
      modalTitle.textContent = memberBtn.dataset.name;
      modalRole.textContent = memberBtn.dataset.role;
      modalDesc.textContent = memberBtn.dataset.bio;
      teamModal.setAttribute('aria-hidden', 'false');
    });
  });
}

// 4. Modale Dinamico Dettaglio Giochi (Sottosezioni + Screenshot + Store)
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
        gameModalTitle.textContent = gameData.title;
        gameModalDesc.textContent = gameData.desc;
        gameModalExtra.innerHTML = `<strong>SYS_LOG:</strong> ${gameData.extra}`;
        
        // Sotto-sezione Galleria Screenshot Dinamica
        gameModalGallery.innerHTML = '';
        gameData.screenshots.forEach(src => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = `Screenshot di ${gameData.title}`;
          img.className = 'popup-gallery-img';
          gameModalGallery.appendChild(img);
        });

        // Sotto-sezione Store esterni (Steam / Itch)
        gameModalStores.innerHTML = '';
        let hasLinks = false;

        if (gameData.stores.steam) {
          gameModalStores.innerHTML += `<a href="${gameData.stores.steam}" target="_blank" rel="noopener" class="store-btn steam-btn"><i class="fa-brands fa-steam"></i> Pagina Steam</a>`;
          hasLinks = true;
        }
        if (gameData.stores.itch) {
          gameModalStores.innerHTML += `<a href="${gameData.stores.itch}" target="_blank" rel="noopener" class="store-btn itch-btn"><i class="fa-brands fa-italic"></i> Scarica su Itch.io</a>`;
          hasLinks = true;
        }

        if (!hasLinks) {
          gameModalStores.innerHTML = `<span style="font-size:0.9rem; color:var(--text-muted);">[STORE LINKS: COMING_SOON.SYS]</span>`;
        }

        gameModal.setAttribute('aria-hidden', 'false');
      }
    });
  });
}

// 5. Mobile Menu Toggle Navigazione
const navLinks = document.getElementById('navLinks');
const menuToggleBtn = document.querySelector('.menu-toggle');

function toggleMenu() {
    navLinks?.classList.toggle('active');
    if (menuToggleBtn) {
        menuToggleBtn.textContent = navLinks?.classList.contains('active') ? '✖' : '☰';
    }
}
window.toggleMenu = toggleMenu;

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks?.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// 6. Configurazione Theme Switcher
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

function setTheme(theme) {
  body.classList.toggle('light', theme === 'light');
  localStorage.setItem('theme', theme);
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
});

themeToggleBtn?.addEventListener('click', () => {
  const newTheme = body.classList.contains('light') ? 'dark' : 'light';
  setTheme(newTheme);
  navLinks?.classList.remove('active');
});

// 7. Pulsante di Scroll-To-Top
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 8. Inizializzazione Particles.js
if (typeof particlesJS !== 'undefined') {
  particlesJS("particles-js", {
    particles: {
      number: { value: 65, density: { enable: true, value_area: 900 } },
      color: { value: ["#ff007f", "#00ffcc", "#ffcc00", "#ff0033"] },
      shape: { type: "circle" },
      opacity: { value: 0.35, random: true },
      size: { value: 4, random: true },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#ffffff",
        opacity: 0.15,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.8,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 160, line_linked: { opacity: 0.6 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
}