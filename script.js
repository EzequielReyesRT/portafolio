/**
 * Ezequiel Reyes Portfolio - Interactive Script
 * Theme toggle, mobile menu, scrollspy, clipboard copying, and toasts.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initScrollEffects();
  initScrollSpy();
});

/* --------------------------------------------------------------------------
   THEME TOGGLE (Dark / Light)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('er_theme') || 'dark';
  setTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = html.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('er_theme', newTheme);
    });
  }
}

function setTheme(theme) {
  const html = document.documentElement;
  if (theme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
  }
}

/* --------------------------------------------------------------------------
   MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Close menu when clicking any link
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   SCROLL EFFECTS (Navbar padding / glass enhancement)
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('py-2');
      nav.classList.remove('py-3');
    } else {
      nav.classList.add('py-3');
      nav.classList.remove('py-2');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   SCROLLSPY (Highlight active section in navbar)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   CLIPBOARD HELPER & TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function copyToClipboard(text, successMessage = 'Copiado al portapapeles') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => {
      fallbackCopy(text, successMessage);
    });
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showToast(successMessage);
  } catch (err) {
    showToast('Selecciona y copia manualmente');
  } finally {
    textArea.remove();
  }
}

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}
