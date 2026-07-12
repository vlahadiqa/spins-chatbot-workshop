// Re-triggering scroll reveal: elements fade in every time they enter the
// viewport, and reset when they leave, so the animation feels fresh no
// matter which direction the user scrolls.
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    } else {
      entry.target.classList.remove('in');
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => observer.observe(el));
