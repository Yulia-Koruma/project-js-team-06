export const scrollUpBtn = document.querySelector('.btn-scroll-up');

scrollUpBtn.addEventListener('click', onBtnScrollUp);

function showScrollUpBtn() {
  scrollUpBtn.classList.remove("visually-hidden");
};

function hideScrollUpBtn() {
  scrollUpBtn.classList.add("visually-hidden");
};

window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? showScrollUpBtn() : hideScrollUpBtn();
    });

export function onBtnScrollUp() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
};

export const loaderEl = document.querySelector('.loader');
