// Mobile drawer toggle, FAQ accordions, and scroll-reveal IntersectionObserver.
(function () {
  'use strict';

  // ---------- Mobile drawer ----------
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-drawer-toggle]');
    if (trigger) {
      e.preventDefault();
      var id = trigger.getAttribute('data-drawer-toggle');
      var drawer = document.getElementById(id);
      if (!drawer) return;
      var open = drawer.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        var firstLink = drawer.querySelector('a, button');
        if (firstLink) firstLink.focus();
      }
      return;
    }
    var closer = e.target.closest('[data-drawer-close]');
    if (closer) {
      var d = closer.closest('.mobile-drawer');
      if (d) {
        d.classList.remove('is-open');
        document.body.style.overflow = '';
        var t = document.querySelector('[data-drawer-toggle="' + d.id + '"]');
        if (t) { t.setAttribute('aria-expanded', 'false'); t.focus(); }
      }
    }
  });

  // Close drawer on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector('.mobile-drawer.is-open');
    if (open) {
      open.classList.remove('is-open');
      document.body.style.overflow = '';
      var t = document.querySelector('[data-drawer-toggle="' + open.id + '"]');
      if (t) { t.setAttribute('aria-expanded', 'false'); t.focus(); }
    }
  });

  // ---------- FAQ accordion ----------
  document.addEventListener('click', function (e) {
    var trig = e.target.closest('.accordion-trigger');
    if (!trig) return;
    var open = trig.getAttribute('aria-expanded') === 'true';
    trig.setAttribute('aria-expanded', open ? 'false' : 'true');
  });

  document.addEventListener('keydown', function (e) {
    var trig = e.target.closest('.accordion-trigger');
    if (!trig) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      var open = trig.getAttribute('aria-expanded') === 'true';
      trig.setAttribute('aria-expanded', open ? 'false' : 'true');
    }
  });

  // ---------- Scroll-triggered reveals ----------
  var prefersReduce = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el, i) {
      el.style.transitionDelay = (i % 6) * 80 + 'ms';
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
