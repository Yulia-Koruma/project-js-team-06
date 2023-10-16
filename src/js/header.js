const currentURL = window.location.href;

const menuLinks = document.querySelectorAll('.header-nav-link');

menuLinks.forEach(link => {
  const linkURL = link.href;
  if (currentURL === linkURL) {
    link.closest('.header-nav-item').classList.add('current-header');
  } else {
    link.closest('.header-nav-item').classList.remove('current-header');
  }
});




