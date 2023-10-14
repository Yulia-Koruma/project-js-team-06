export const scrollUpBtn = document.querySelector('.btn-scroll-up');

scrollUpBtn.classList.add("visually-hidden");

scrollUpBtn.addEventListener('click', onBtnScrollUp);

export function onBtnScrollUp() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
};

export const loaderEl = document.querySelector('.loader');
loaderEl.classList.add("visually-hidden");