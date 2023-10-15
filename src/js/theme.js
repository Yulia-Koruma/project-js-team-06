document.addEventListener('DOMContentLoaded', () => {
    savedTheme()
})

function savedTheme() {
    if (localStorage.getItem('theme')) {
        document.documentElement.setAttribute('theme', 'dark')
    } else {
        document.documentElement.removeAttribute('theme')
    }
}

const themeSwich = document.querySelector('.checkbox-input');
themeSwich.addEventListener('change', onThemeSwichChange);

function onThemeSwichChange(event) {
    if (document.documentElement.hasAttribute('theme')) {
        document.documentElement.removeAttribute('theme');
        localStorage.removeItem('theme')
    } else {
        document.documentElement.setAttribute('theme', "dark");
        localStorage.setItem('theme', "dark");
    }
}