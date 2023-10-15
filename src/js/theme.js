const themeSwich = document.querySelector('.checkbox-input');
// const themeSwichMob = document.querySelector('.checkbox-input-mob');

document.addEventListener('DOMContentLoaded', () => {
    savedTheme()
})

function savedTheme() {
    if (localStorage.getItem('theme')) {
        document.documentElement.setAttribute('theme', 'dark')
         themeSwich.checked = true;
        // themeSwichMob.checked = true;
    } else {
        document.documentElement.removeAttribute('theme');
         themeSwich.checked = false;
        // themeSwichMob.checked = false;
    }
}

themeSwich.addEventListener('change', onThemeSwichChange);

function onThemeSwichChange() {
        if (document.documentElement.hasAttribute('theme')) {
            document.documentElement.removeAttribute('theme');
            localStorage.removeItem('theme')
            themeSwich.checked = false;
            // themeSwichMob.checked = false;
        } else {
            document.documentElement.setAttribute('theme', "dark");
            localStorage.setItem('theme', "dark");
            themeSwich.checked = true;
            // themeSwichMob.checked = true;
        }
}