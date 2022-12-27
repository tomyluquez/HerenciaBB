const hamburger = document.querySelector('.hamburger')
const spanHamburger = document.querySelector('.hamburger-box')
const menues = document.querySelector('.cont-menues')
const search = document.querySelector('.cont-search')

window.addEventListener('load', () => {
    setTimeout(() => {
        const whatsAlert = document.querySelector('.whatsAlert')
        whatsAlert.style.display='none'
    }, 4000);
})

document.addEventListener('click', (evento) => {
    if(evento.target.matches('.hamburger-inner') || evento.target.matches('.hamburger') || evento.target.matches('.hamburger-box')){
        hamburger.classList.toggle('is-active')
        menues.classList.toggle('navBarToggle')
        search.classList.toggle('searchToggle')
    }
})

const navBar = document.querySelector('.cont-nav')

document.addEventListener('scroll', () => {
    navBar.classList.toggle('scroll', window.scrollY)
})