// navbar

const navElevation = document.querySelector('.navbar')
const navToggleColor = document.querySelector('.navbar-toggler')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 600) {
        navElevation.classList.add('navbar-scrolled')
        navToggleColor.classList.add('menuColor2')
        navToggleColor.classList.remove('menuColor')
    }
    if (window.scrollY < 600) {
        navElevation.classList.remove('navbar-scrolled')
        navToggleColor.classList.add('menuColor')
        navToggleColor.classList.remove('menuColor2')
    }
})