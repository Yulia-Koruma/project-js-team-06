const currentURL = window.location.href;

const menuLinks = document.querySelectorAll('.header-nav-link');
const mobLinks = document.querySelectorAll('.mob-menu-link');

menuLinks.forEach(link => {
  const linkURL = link.href;
  if (currentURL === linkURL) {
    link.closest('.header-nav-item').classList.add('current-header');
  } else {
    link.closest('.header-nav-item').classList.remove('current-header');
  }
});

mobLinks.forEach(link => {
  const linkMobURL = link.href;
  const mobNavText = link.querySelector('.mob-nav-text');
  const mobSvg = document.querySelector('.mob-nav-svg');


    if (currentURL === linkMobURL) {
      link.closest('.mob-nav-item').classList.add('current-mob');
      mobNavText.style.color = 'var(--black)';
      mobSvg.style.fill = 'var(--black)';
    } else {
      link.closest('.mob-nav-item').classList.remove('current-mob');
      mobNavText.style.color = 'var(--white)';
      mobSvg.style.fill = 'var(--white)';
  }
});