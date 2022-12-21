const hamburger = document.querySelector('.hamburger')
const spanHamburger = document.querySelector('.hamburger-box')
const menues = document.querySelector('.cont-menues')
const search = document.querySelector('.cont-search')

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

const  mediaQueries = matchMedia('(max-width: 800px)')


mediaQueries.addListener(mql => {
   const image1 = document.querySelector('.image1')
   const image2 = document.querySelector('.image2')
   if(mql.matches){
    image1.src="/img/Productos/1cel.png";
    image2.src="/img/Productos/2cel.png";
    }
})