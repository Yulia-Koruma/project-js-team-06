export const scrollUpBtn = document.querySelector('.btn-scroll-up');

export function onBtnScrollUp() {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
};