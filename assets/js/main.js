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
