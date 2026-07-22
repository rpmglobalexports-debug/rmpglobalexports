/* RPM Global Exports — Main Script */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Navigation: transparent → white on scroll ── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Hamburger menu toggle ── */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    /* Close menu on link click */
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    /* Close on outside click */
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && navLinks.classList.contains('open')) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = nav ? nav.offsetHeight : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Intersection Observer: scroll-reveal animations ── */
  const fadeEls = document.querySelectorAll('.fade-in-up');
  if (fadeEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ── Trust bar: duplicate content for seamless marquee ── */
  const trustTrack = document.querySelector('.trust-track');
  if (trustTrack) {
    const wrapper = trustTrack.parentElement;
    const clone = trustTrack.cloneNode(true);
    wrapper.appendChild(clone);
  }

  /* ── Hero: continuous jar pour — seeds fall while hero is in view ── */
  (function () {
    var heroSect = document.getElementById('hero-section');
    if (!heroSect) return;
    var MAX_P = 28;
    setInterval(function () {
      var marker = document.getElementById('jar-mouth-marker');
      if (!marker) return;
      if (heroSect.querySelectorAll('.hero-pour-particle').length >= MAX_P) return;
      var mRect = marker.getBoundingClientRect();
      var hRect = heroSect.getBoundingClientRect();
      var p = document.createElement('div');
      p.className = 'hero-pour-particle';
      p.style.left = (mRect.left - hRect.left + (Math.random() - 0.5) * 14) + 'px';
      p.style.top  = (mRect.top  - hRect.top  + (Math.random() - 0.5) * 8) + 'px';
      p.style.setProperty('--dur', (2.0 + Math.random() * 0.8).toFixed(2) + 's');
      p.style.setProperty('--dx',  (-6 - Math.random() * 20).toFixed(1) + 'px');
      heroSect.appendChild(p);
      p.addEventListener('animationend', function () {
        if (p.parentNode) p.parentNode.removeChild(p);
      }, { once: true });
    }, 200);
  })();

  /* ── Section fade-in on scroll — one-time, no per-frame work ── */
  var fadeTargets = document.querySelectorAll('.fade-section-content');
  if (fadeTargets.length && 'IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    fadeTargets.forEach(function(el) { fadeObserver.observe(el); });
  }

  /* ── Subtle scroll-triggered background tone shift (warm white ↔ light sage) ── */
  const toneSections = document.querySelectorAll(
    '.products-section, .sourcing-section, .how-section, .faq-section, ' +
    '.certs-section, .story-section, .founders-section, .blog-section, .product-content, ' +
    '.related-products, .article-shell'
  );
  if (toneSections.length && 'IntersectionObserver' in window) {
    const toneObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const isToneB = Array.from(toneSections).indexOf(entry.target) % 2 === 1;
            document.body.classList.toggle('tone-b', isToneB);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    toneSections.forEach(el => toneObserver.observe(el));
  }

  /* ── Sticky bottom CTA bar: show after scrolling past hero ── */
  const hero = document.querySelector('.hero');
  const stickyCta = document.getElementById('stickyCta');
  if (hero && stickyCta) {
    const heroObserver = new IntersectionObserver(function(entries) {
      const visible = !entries[0].isIntersecting;
      stickyCta.classList.toggle('visible', visible);
      stickyCta.setAttribute('aria-hidden', visible ? 'false' : 'true');
    }, { threshold: 0 });
    heroObserver.observe(hero);
  }

  /* ── Spec sheet capture form: Formspree AJAX ── */
  const specForm = document.querySelector('.spec-capture-form');
  const specSuccess = document.getElementById('spec-capture-success');
  if (specForm && specSuccess) {
    specForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      try {
        const res = await fetch(specForm.action, {
          method: 'POST',
          body: new FormData(specForm),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          specForm.style.display = 'none';
          specSuccess.style.display = 'block';
        } else {
          specForm.submit();
        }
      } catch (_) {
        specForm.submit();
      }
    });
  }

  /* ── Quote form: Formspree AJAX + success message ── */
  const quoteForm = document.getElementById('quote-form');
  const quoteSuccess = document.getElementById('quote-success');
  if (quoteForm && quoteSuccess) {
    quoteForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      try {
        const res = await fetch(quoteForm.action, {
          method: 'POST',
          body: new FormData(quoteForm),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          quoteForm.style.display = 'none';
          quoteSuccess.style.display = 'block';
        } else {
          quoteForm.submit();
        }
      } catch (_) {
        quoteForm.submit();
      }
    });
  }

});

/* ── Hero flow line: circular photo slots ── */
var heroLinePhotos = [
  { position: { bottom: '14%', left: '4%' },   image: null, label: 'Unjha Mandi' },
  { position: { top: '38%',   left: '44%' },   image: null, label: 'Processing Unit' },
  { position: { top: '10%',   right: '10%' },  image: null, label: 'Export Ready' },
];

(function () {
  var container = document.getElementById('heroPhotoSlots');
  if (!container) return;

  heroLinePhotos.forEach(function (slot) {
    var el = document.createElement('div');
    el.className = 'hero-photo-slot';
    Object.keys(slot.position).forEach(function (k) { el.style[k] = slot.position[k]; });

    if (slot.image) {
      var img = document.createElement('img');
      img.src   = slot.image;
      img.alt   = slot.label;
      el.appendChild(img);
    } else {
      var ph = document.createElement('div');
      ph.className = 'hero-photo-placeholder';
      ph.innerHTML =
        '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">' +
          '<circle cx="12" cy="8" r="4"/>' +
          '<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>' +
        '</svg>';
      el.appendChild(ph);
    }

    var label = document.createElement('span');
    label.className = 'hero-photo-label';
    label.textContent = slot.label;
    el.appendChild(label);

    container.appendChild(el);
  });
})();

/* ── Product variant use-case selector ── */
(function() {
  var chips = document.querySelectorAll('.usecase-chip');
  if (!chips.length) return;
  var cards = document.querySelectorAll('.variant-card, .variant-industrial-card');
  chips.forEach(function(chip) {
    chip.addEventListener('click', function() {
      var wasActive = this.classList.contains('active');
      chips.forEach(function(c) { c.classList.remove('active'); c.setAttribute('aria-pressed', 'false'); });
      cards.forEach(function(card) { card.classList.remove('highlighted', 'dimmed'); });
      if (wasActive) return;
      this.classList.add('active');
      this.setAttribute('aria-pressed', 'true');
      var targets = (this.dataset.targets || '').split(',').map(function(s) { return s.trim(); });
      cards.forEach(function(card) {
        if (targets.indexOf(card.dataset.variant) !== -1) {
          card.classList.add('highlighted');
        } else {
          card.classList.add('dimmed');
        }
      });
    });
  });
})();
