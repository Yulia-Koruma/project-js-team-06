export const scrollUpBtn = document.querySelector('.btn-scroll-up');

scrollUpBtn.addEventListener('click', onBtnScrollUp);

export function onBtnScrollUp() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
};