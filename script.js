// Splash screen fadeout
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  if (splash) {
    setTimeout(() => {
      splash.style.opacity = 0;
      setTimeout(() => {
        splash.style.display = "none";
      }, 1000);
    }, 2000);
  }
});

// Mobile menu toggle
const navLinks = document.getElementById('navLinks');
const menuToggleBtn = document.querySelector('.menu-toggle');

function toggleMenu() {
    navLinks?.classList.toggle('active');
    // Aggiorna l'icona
    if (menuToggleBtn) {
        menuToggleBtn.textContent = navLinks?.classList.contains('active') ? '✖' : '☰';
    }
}

// Assicura che la funzione sia disponibile globalmente per l'onclick nell'HTML
window.toggleMenu = toggleMenu;

// Chiudi il menu quando si fa clic su un link (scroll per la pagina)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks?.classList.contains('active')) {
            toggleMenu(); // Chiude il menu dopo il click
        }
    });
});

// Theme toggle (dark/light)
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

function setTheme(theme) {
  body.classList.toggle('light', theme === 'light');
  localStorage.setItem('theme', theme);
}

// Apply theme on load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
});

// Toggle theme on button click
themeToggleBtn?.addEventListener('click', () => {
  const newTheme = body.classList.contains('light') ? 'dark' : 'light';
  setTheme(newTheme);
  navLinks?.classList.remove('active'); // Close menu if open (mobile)
});

// Initialize particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: ["#ff00cc", "#ffff00", "#33ccff", "#ff3300"] },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 5, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
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
      grab: { distance: 200, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Modal functionality (if exists)
const modal = document.getElementById('teamModal');
if (modal) {
  const modalTitle = document.getElementById('modalTitle');
  const modalRole = document.getElementById('modalRole');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = modal.querySelector('.modal-close');

  document.querySelectorAll('.member').forEach(memberBtn => {
    memberBtn.addEventListener('click', () => {
      modalTitle.textContent = memberBtn.dataset.name;
      modalRole.textContent = memberBtn.dataset.role;
      modalDesc.textContent = memberBtn.dataset.bio;
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  modalClose?.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'true');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.setAttribute('aria-hidden', 'true');
    }
  });
}

// Scroll to Top Button
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

