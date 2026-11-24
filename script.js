/**
 * Ezequiel Reyes Portfolio - Client Scripts
 * Clean, lightweight, fully accessible interactions:
 * - Theme switcher (Dark / Light with system preference fallback)
 * - Accessible mobile navigation drawer
 * - Navbar scroll state
 * - Section ScrollSpy
 * - Accessible clipboard helper with toast feedback
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

  // Retrieve saved preference or check system preference (default dark)
  const savedTheme = localStorage.getItem('er_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = html.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('er_theme', newTheme);
    });
  }

  // Listen to OS theme changes if user has not explicitly set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('er_theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Cross-tab theme synchronization
  window.addEventListener('storage', (e) => {
    if (e.key === 'er_theme' && (e.newValue === 'dark' || e.newValue === 'light')) {
      setTheme(e.newValue);
    }
  });
}

function setTheme(theme) {
  const html = document.documentElement;
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

  if (theme === 'light') {
    html.classList.remove('dark');
    html.classList.add('light');
    if (metaColorScheme) metaColorScheme.content = 'light';
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    if (metaColorScheme) metaColorScheme.content = 'dark';
  }
}

/* --------------------------------------------------------------------------
   MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!btn || !menu) return;

  function closeMenu() {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    menu.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
  }

  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking any nav link
  links.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
      closeMenu();
      btn.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   SCROLL EFFECTS (Navbar padding / elevation change on scroll)
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 30) {
          nav.classList.add('py-2');
          nav.classList.remove('py-3');
        } else {
          nav.classList.add('py-3');
          nav.classList.remove('py-2');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   SCROLLSPY (Modern CSS scroll-target-group & IntersectionObserver Fallback)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!sections.length || !navLinks.length) return;

  const supportsScrollTargetGroup = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('scroll-target-group: auto');

  if (supportsScrollTargetGroup) {
    const syncAriaCurrent = () => {
      const currentLink = document.querySelector('.nav-link:target-current');
      navLinks.forEach(link => {
        link.setAttribute('aria-current', link === currentLink ? 'true' : 'false');
      });
      const currentMobileLink = document.querySelector('.mobile-nav-link:target-current');
      mobileLinks.forEach(link => {
        link.setAttribute('aria-current', link === currentMobileLink ? 'true' : 'false');
      });
    };
    syncAriaCurrent();
    document.addEventListener('scrollend', syncAriaCurrent, { passive: true });
  } else {
    // Robust IntersectionObserver fallback for broad browser support
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isActive);
            link.setAttribute('aria-current', isActive ? 'true' : 'false');
          });
          mobileLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isActive);
            link.setAttribute('aria-current', isActive ? 'true' : 'false');
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }
}

/* --------------------------------------------------------------------------
   CLIPBOARD HELPER & ACCESSIBLE TOAST NOTIFICATION
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
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  textArea.style.top = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showToast(successMessage);
    } else {
      showToast('Selecciona y copia manualmente');
    }
  } catch (err) {
    showToast('Selecciona y copia manualmente');
  } finally {
    textArea.remove();
  }
}

let toastTimeout;
let lastToastMessage = '';

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  // Modern Web Guidance (copy-button): Append \u00A0 on repeated messages
  // so screen readers (VoiceOver) reliably announce consecutive identical actions
  let announcedMessage = message;
  if (announcedMessage === lastToastMessage) {
    announcedMessage += '\u00A0';
  }
  lastToastMessage = announcedMessage;

  toastText.textContent = announcedMessage;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2800);
}
