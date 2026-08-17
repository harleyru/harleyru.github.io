const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const year = document.querySelector('[data-year]');

year.textContent = new Date().getFullYear();

const themeToggle = document.querySelector('[data-theme-toggle]');
if (themeToggle) {
  themeToggle.textContent = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  themeToggle.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    themeToggle.textContent = dark ? 'light' : 'dark';
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) {}
  });
}

const spyLinks = document.querySelectorAll('[data-spy]');
if (spyLinks.length) {
  const spySections = [...spyLinks]
    .map((link) => document.getElementById(link.getAttribute('data-spy')))
    .filter(Boolean);
  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          spyLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('data-spy') === entry.target.id);
          });
        }
      });
    },
    { rootMargin: '-35% 0px -55% 0px' }
  );
  spySections.forEach((section) => spyObserver.observe(section));
}

const researchList = document.querySelector('#research .focus-list');
if (researchList) {
  const researchItems = researchList.querySelectorAll('li');
  const researchObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          researchItems.forEach((item, index) => {
            item.style.transitionDelay = index * 90 + 'ms';
            item.classList.add('visible');
          });
          researchObserver.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );
  researchObserver.observe(researchList);
}

const mailUser = 'shihao.ru.2018';
const mailDomain = 'gmail.com';
document.querySelectorAll('[data-mail]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    link.setAttribute('href', 'mailto:' + mailUser + '@' + mailDomain);
    link.removeAttribute('data-mail');
    window.location.href = link.getAttribute('href');
  });
});

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0 }
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
