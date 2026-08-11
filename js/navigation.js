/* ============================================================
   XPLORE KAPIL — Navigation & Mobile Menu
   ============================================================ */

(function() {
  'use strict';

  function initNav() {
    const nav = document.getElementById('siteNav');
    if (nav) {
      const onScroll = function() {
        nav.classList.toggle('nav--solid', window.scrollY > 60);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    const menu = document.getElementById('mobileMenu');
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');

    if (menuOpen) {
      menuOpen.addEventListener('click', function() {
        menu.classList.add('open');
      });
    }

    if (menuClose) {
      menuClose.addEventListener('click', function() {
        menu.classList.remove('open');
      });
    }

    // Close menu when clicking a link
    if (menu) {
      menu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          menu.classList.remove('open');
        });
      });
    }
  }

  // Expose closeMenu for inline onclick handlers
  window.closeMenu = function() {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.remove('open');
  };

  // ===== SMOOTH SCROLL for nav links =====
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ===== SCROLL REVEAL =====
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      els.forEach(function(el) { io.observe(el); });
    } else {
      els.forEach(function(el) { el.classList.add('is-visible'); });
    }
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    initNav();
    initSmoothScroll();
    initReveal();
  });

})();