document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var hamburger = document.getElementById('hamburger');
  var navMenu   = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      var open = navMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    });
    navMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth active nav highlight on scroll
  var sections   = document.querySelectorAll('section[id], div[id]');
  var navAnchors = document.querySelectorAll('.nav-menu a[href^="#"]');
  window.addEventListener('scroll', function () {
    var current = '';
    sections.forEach(function (sec) {
      if (sec.getBoundingClientRect().top <= 90) current = sec.id;
    });
    navAnchors.forEach(function (a) {
      a.style.color = (a.getAttribute('href') === '#' + current) ? 'var(--forest)' : '';
    });
  }, { passive: true });

});
