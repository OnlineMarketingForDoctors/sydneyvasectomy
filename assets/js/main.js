// Scroll-triggered reveals, respecting reduced motion.
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll(
    '.pillar, .profile, .why-choose, .steps li, .pricing-copy, .pricing-photo, .big-quote, .review-row blockquote, .closing-inner'
  );
  if (reduced || !('IntersectionObserver' in window)) return;

  targets.forEach(function (el) { el.classList.add('reveal'); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

  targets.forEach(function (el) { io.observe(el); });
})();

// Close other FAQ items when one opens.
(function () {
  var faqs = document.querySelectorAll('.faq-list details');
  faqs.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      faqs.forEach(function (other) {
        if (other !== d) other.open = false;
      });
    });
  });
})();

// Procedure stepper — steps drive the anatomy diagram.
(function () {
  var stepper = document.getElementById('stepper');
  if (!stepper) return;
  var steps = Array.prototype.slice.call(stepper.querySelectorAll('.steps-list li'));
  var marks = Array.prototype.slice.call(stepper.querySelectorAll('.dg-mark'));
  var caption = document.getElementById('dg-caption');

  function show(step) {
    steps.forEach(function (s) { s.classList.toggle('active', s === step); });
    var on = (step.getAttribute('data-marks') || '').split(/\s+/).filter(Boolean);
    marks.forEach(function (m) {
      m.classList.toggle('on', on.indexOf(m.getAttribute('data-mark')) > -1);
    });
    var n = steps.indexOf(step) + 1;
    caption.innerHTML = '<strong>' + (n < 10 ? '0' + n : n) + ' · ' +
      step.getAttribute('data-title') + '</strong>' + step.getAttribute('data-caption');
  }

  steps.forEach(function (step) {
    step.addEventListener('click', function () { show(step); });
    step.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(step); }
    });
  });

  // Follow the reader on the way down, without hijacking the scroll.
  if ('IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) show(entry.target);
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach(function (s) { io.observe(s); });
  }
})();

// Tab panels (Medicare claim methods).
(function () {
  var groups = document.querySelectorAll('[data-tabs]');
  groups.forEach(function (group) {
    var tabs = Array.prototype.slice.call(group.querySelectorAll('.tab'));
    var panels = tabs.map(function (t) {
      return document.getElementById(t.getAttribute('aria-controls'));
    });

    function select(i) {
      tabs.forEach(function (t, n) { t.setAttribute('aria-selected', String(n === i)); });
      panels.forEach(function (p, n) { if (p) p.hidden = n !== i; });
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(i); });
      tab.addEventListener('keydown', function (e) {
        var next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : -1;
        if (next < 0 || next >= tabs.length) return;
        e.preventDefault();
        tabs[next].focus();
        select(next);
      });
    });
  });
})();

// Quote carousel — scroll-snap with dots.
(function () {
  document.querySelectorAll('.carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var dots = carousel.querySelector('.carousel-dots');
    if (!track || !dots) return;
    var slides = Array.prototype.slice.call(track.children);

    slides.forEach(function (slide, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Review ' + (i + 1) + ' of ' + slides.length);
      if (i === 0) b.setAttribute('aria-current', 'true');
      b.addEventListener('click', function () {
        track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' });
      });
      dots.appendChild(b);
    });

    var buttons = Array.prototype.slice.call(dots.children);
    var tick;
    track.addEventListener('scroll', function () {
      clearTimeout(tick);
      tick = setTimeout(function () {
        var i = Math.round(track.scrollLeft / track.clientWidth);
        buttons.forEach(function (b, n) {
          if (n === i) b.setAttribute('aria-current', 'true');
          else b.removeAttribute('aria-current');
        });
      }, 80);
    });
  });
})();
