const hamburger = document.querySelector('.hamburger')
const spanHamburger = document.querySelector('.hamburger-box')
const menues = document.querySelector('.cont-menues')
const search = document.querySelector('.cont-search')

window.addEventListener('load', () => {
    const loader = document.querySelector('.cont-loader')
    loader.style.display='none'
    
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

document.addEventListener('click', (event) => {
    const carritoCompras = document.querySelector('.carritoCompras')
    const navbar = document.querySelector('.cont-nav')

    // si hacemos click en los carritos, se abre el carrito de compras y se agrega la sombra de atras //
    if(event.target.classList.value === 'cont-cart' ||
       event.target.classList.value === 'spanCart' ||
       event.target.classList.value === 'cart' ||
       event.target.classList.value === 'circleCart' ||
       event.target.classList.value === 'bi bi-cart' ){

        // agregamos alerta si el carrito esta vacio //
        if(productosElegidos.length === 0){
            const emptyCart = document.getElementById('emptyCart');

            emptyCart.style.display='inline-block'
            setTimeout(() => {
                emptyCart.style.display='none'
            }, 3000);

            return
        }
        
        carritoCompras.style.display='block'
        navbar.classList.add('sombra')
    }    

    // si hacemos click en la X se cierra el carrito de compras y se quita la sombra de atras //
    if(event.target.classList.value === 'bi bi-x'){
        carritoCompras.style.display='none'
        navbar.classList.remove('sombra')
    }
})

