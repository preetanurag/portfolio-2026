const year = document.querySelector('#year');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const revealItems = document.querySelectorAll('.reveal');

year.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
  observer.observe(item);
});
