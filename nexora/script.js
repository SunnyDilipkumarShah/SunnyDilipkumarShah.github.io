(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var nav = document.querySelector('.main-nav');
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelectorAll('.main-nav a');

  // Mobile menu toggle
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('is-open');
    });

    // Close menu when a link is clicked (for anchor links)
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  // Optional: prevent form submit for demo (no backend)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('This is a demo. In production, connect this form to your backend or a service like Formspree for SOC and sales inquiries.');
    });
  }
})();
