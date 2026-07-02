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

  /* ── Hero slideshow: opacity crossfade + Ken Burns ── */
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length) {
    let current = 0;
    slides[0].classList.add('active');

    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5500);
  }

  /* ── Subtle scroll-triggered background tone shift (warm white ↔ light sage) ── */
  const toneSections = document.querySelectorAll(
    '.products-section, .sourcing-section, .how-section, .markets-section, .faq-section, ' +
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

/* ── Get Today's Rate Widget ── */
const RATE_GRADES = {
  psyllium: ['Food Grade (85%)', 'Food Grade (95%)', 'Pharma Grade (98–99%)'],
  cumin:    ['FAQ Grade', 'Europe Quality (99%)', 'Singapore Quality (99.5%)'],
  sesame:   ['Natural White', 'Hulled (Double Sortex)', 'Black Sesame']
};

(function () {
  const estProduct = document.getElementById('est-product');
  const estGrade   = document.getElementById('est-grade');
  const estQty     = document.getElementById('est-qty');
  const estResult  = document.getElementById('estimator-result');
  if (!estProduct || !estGrade || !estQty || !estResult) return;

  const PRODUCT_NAMES = { psyllium: 'Psyllium Husk', cumin: 'Cumin Seeds', sesame: 'Sesame Seeds' };

  function updateGrades() {
    const p = estProduct.value;
    estGrade.innerHTML = '';
    if (!p || !RATE_GRADES[p]) {
      estGrade.innerHTML = '<option value="">Select product first</option>';
      estGrade.disabled = true;
    } else {
      estGrade.disabled = false;
      estGrade.innerHTML = '<option value="">Choose grade</option>';
      RATE_GRADES[p].forEach(function(g) {
        const o = document.createElement('option');
        o.value = g; o.textContent = g;
        estGrade.appendChild(o);
      });
    }
    renderResult();
  }

  function renderResult() {
    const p   = estProduct.value;
    const g   = estGrade.value;
    const qty = parseFloat(estQty.value);

    if (!p || !g) {
      estResult.innerHTML = '<div class="estimator-placeholder">Select product and grade above to get today\'s rate</div>';
      return;
    }

    const productName = PRODUCT_NAMES[p] || p;
    const qtyText     = (qty > 0) ? qty + ' MT ' : '';
    const summary     = qtyText + productName + ', ' + g + ', FOB Mundra';
    const waMsg       = 'Hi, requesting today\'s rate for ' + qtyText + productName + ', ' + g + ', FOB Mundra.';
    const waUrl       = 'https://wa.me/917265097308?text=' + encodeURIComponent(waMsg);

    estResult.innerHTML =
      '<div class="rate-confirmation">' +
        '<p class="rate-confirmation-text">Get today\'s FOB Mundra rate for <strong>' + summary + '</strong> — response within 24 hours.</p>' +
        '<div class="rate-confirmation-actions">' +
          '<a href="' + waUrl + '" target="_blank" rel="noopener" class="btn-wa-rate">WhatsApp →</a>' +
          '<button type="button" class="btn btn-primary btn-rate-form" style="font-size:0.9rem;padding:0.6rem 1.4rem;">Email / Quote Form →</button>' +
        '</div>' +
      '</div>';

    estResult.querySelector('.btn-rate-form').addEventListener('click', function(e) {
      e.preventDefault();
      const quoteProduct = document.getElementById('product');
      const quoteMessage = document.getElementById('message');
      if (quoteProduct) {
        Array.from(quoteProduct.options).forEach(function(opt) { opt.selected = (opt.value === productName); });
      }
      if (quoteMessage) {
        quoteMessage.value = 'Requesting today\'s FOB Mundra rate for ' + qtyText + productName + ', ' + g + '.';
      }
      document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
    });
  }

  estProduct.addEventListener('change', updateGrades);
  estGrade.addEventListener('change', renderResult);
  estQty.addEventListener('input', renderResult);
})();
