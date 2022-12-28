const productos = [
    {
        nombre: 'Babero con Toalla',
        tallesYStock:{
            'Unico': 2
        },
        img: '/img/Productos/BaberoconToalla2.jpeg',
        categoria: ['accesorios y otros'],
        busqueda: ['babero', 'accesorios','babitas'],
        precio: 1549
    },
    {
        nombre: 'Body con Vestido',
        tallesYStock:{
            '3 Meses': 1,
            '18 Meses': 1,
        },
        color: 'Blanco',
        img: '/img/Productos/BodyconVestido4.jpeg',
        categoria: ['body', 'vestido'],
        busqueda: ['body','vestido', 'nenas'],
        precio: 5699
    },
    {
        nombre: 'Body lino',
        tallesYStock: {
            '18 Meses': 1,
            '24 Meses': 1,
        },
        color: 'Beige',
        img:'/img/Productos/BodyLinoBeige.jpeg',
        categoria: ['body'],
        busqueda:['body','lino'],
        precio: 4699
    },
    {
        nombre: 'Conjunto Leoncitos',
        tallesYStock: {
            '0-3 Meses': 1,
            '3-6 Meses': 1,
        },
        color: 'Leoncitos',
        img: '/img/Productos/CRN-Leoncitos2.jpeg',
        categoria: ['conjuntos'],
        busqueda: ['conjuntos', 'recien nacidos',],
        precio: 4399
    },
    {
        nombre: 'Remera lino Azul',
        tallesYStock:{
            '9 Meses': 1,
            '12 Meses': 1
        },
        color: 'Azul',
        img: '/img/Productos/RemeraLinoAzulRayado.jpeg',
        categoria:['remeras'],
        busqueda:['remeras','lino'],
        precio: 4699
    },
    {
        nombre: 'Remera lino Beige',
        tallesYStock:{
            '6 Meses': 1,
        },
        color: 'Beige',
        img: '/img/Productos/RemeraLinoBeige2.jpeg',
        categoria:['remeras'],
        busqueda:['remeras','lino'],
        precio: 4699
    },
    {
        nombre: 'Short Waflle Celeste',
        tallesYStock:{
            '9 Meses': 1,
            '12 Meses': 1,
            '24 Meses':1,
            '36 Meses': 1,
        },
        color: 'Celeste',
        img: '/img/Productos/ShortWaffleCeleste.jpeg',
        categoria:['Partecitas de Abajo'],
        busqueda:['short','waffle','pantalon'],
        precio: 3099
    },
    {
        nombre: 'Vestido Hortencias',
        tallesYStock:{
            '12 Meses': 1,
            '24 Meses': 3,
            '36 Meses': 5,
        },
        color: 'Hortencias',
        img: '/img/Productos/VestidoHortensias.jpeg',
        categoria:['Vestidos'],
        busqueda:['vestidos','nena'],
        precio: 5699
    }
];
const productosElegidos = [];
const cartAlert = document.querySelector('.cartAlert')

const rowProducts = document.querySelector('.rowProducts');

productos.forEach((producto) => {

    const divCol = document.createElement('div');
    divCol.classList.add('col-sm-6','col-md-4','col-lg-2','img1','d-flex','justify-content-center','aling-items-center','flex-column')
    const img = document.createElement('img');
    img.src=producto.img
    const divSpanNombre = document.createElement('div');
    divSpanNombre.classList.add('row');
    const spanNombre = document.createElement('span');
    spanNombre.innerHTML = producto.nombre
    const divSpanTalles = document.createElement('div');
    divSpanTalles.classList.add('row')
    const spanTalles = document.createElement('span');
    spanTalles.innerHTML=producto.nombre
    const divTalles = document.createElement('div');
    divTalles.classList.add('row','talles')
    const labelTalles = document.createElement('label');
    labelTalles.innerHTML='Talles'
    const select = document.createElement('select');
    const divSpanPrecio = document.createElement('div');
    divSpanPrecio.classList.add('row','precios')
    const spanPrecio = document.createElement('span');
    spanPrecio.classList.add('precio')
    const spanPrecio2 = document.createElement('span');
    spanPrecio.classList.add('precio')
    spanPrecio.innerHTML = `Precio:`
    spanPrecio2.innerHTML = `$${producto.precio}`
    const divCantidades = document.createElement('div');
    divCantidades.classList.add('row','cantidades')
    const labelCantidades = document.createElement('label');
    labelCantidades.innerHTML = 'Cantidad'
    const inputCantidades = document.createElement('input');
    const divButton = document.createElement('div');
    divButton.classList.add('d-flex','justify-content-center','aling-items-center')
    const buttonCarrito = document.createElement('button');
    buttonCarrito.classList.add('añadirCarrito')
    const spanButton = document.createElement('span');
    spanButton.classList.add('spanButton')
    spanButton.innerText = 'Añadir a Carrito'
    const spanIconCarrito = document.createElement('span');
    spanIconCarrito.classList.add('iconCart');
    const iconCarrito = document.createElement('i');
    iconCarrito.classList.add('bi','bi-cart-plus')



    rowProducts.appendChild(divCol);
    divCol.appendChild(img)
    divCol.appendChild(divSpanNombre)
    divSpanNombre.appendChild(spanNombre)
    divCol.appendChild(divTalles)
    divTalles.appendChild(labelTalles)
    divCol.appendChild(divSpanPrecio)
    divSpanPrecio.appendChild(spanPrecio)
    divSpanPrecio.appendChild(spanPrecio2)
    divCol.appendChild(divCantidades)
    divCantidades.appendChild(labelCantidades)
    divCantidades.appendChild(inputCantidades)
    divCol.appendChild(divButton)
    divButton.appendChild(buttonCarrito)
    buttonCarrito.appendChild(spanButton)
    buttonCarrito.appendChild(spanIconCarrito)
    spanIconCarrito.appendChild(iconCarrito)


    for(talles in producto.tallesYStock){
        const option = document.createElement('option');
        option.innerHTML=talles
        select.appendChild(option)
        divTalles.appendChild(select)
    }
})  

const buttonCarrito = document.querySelectorAll('.añadirCarrito');


buttonCarrito.forEach((button) => {
    button.addEventListener('click', () => {
        const productoElegido = {
            nombre: button.closest('.img1').childNodes[1].innerText,
            talle: button.closest('.img1').childNodes[2].children[1].value,
            precio: +button.closest('.img1').childNodes[3].lastChild.innerText,
            cantidad: +button.closest('.img1').childNodes[4].lastChild.value,
        }
        checkStock(productoElegido)
    })
})

const checkStock = productoElegido => {
    for(let i=0; i<productos.length; i++){
        if(productos[i].nombre === productoElegido.nombre){
            if(productos[i].tallesYStock[productoElegido.talle] >= productoElegido.cantidad){
                productos[i].tallesYStock[productoElegido.talle] -= productoElegido.cantidad
                alertCart(productoElegido)
                createItemCart(productoElegido)
            } else if(productos[i].tallesYStock[productoElegido.talle] < productoElegido.cantidad){
                return alert(`No tenemos disponibles esas cantidades de ${productoElegido.nombre}, el stock es de ${productos[i].tallesYStock[productoElegido.talle]}`)
            }
        }
    }
}


const createItemCart = productoElegido =>{
    for(let i=0; i<productosElegidos.length; i++){
        if(productosElegidos[i].nombre === productoElegido.nombre &&
            productosElegidos[i].talle === productoElegido.talle){
            productosElegidos[i].cantidad += productoElegido.cantidad
            console.log(productosElegidos)
            return
        }
    }
    productosElegidos.push(productoElegido)
    cart(productosElegidos)
}

const alertCart = productoElegido => {
    cartAlert.style.display='inline-block'
    setTimeout(() => {
        cartAlert.style.display='none'
    }, 2000);
}

const cart = productosElegidos => {
    let spanCart = document.querySelector('.spanCart')
    let spanCartMobile = document.querySelector('.circleCart')
    
    let totalCantidad = productosElegidos.map(producto => {
       return producto.cantidad
    }).reduce((a,b) => a+b);

    let totalPrecio = productosElegidos.map(producto => {
        return producto.cantidad * producto.precio
     }).reduce((a,b) => a+b);
    
     spanCart.innerHTML = `CARRITO (${totalCantidad}) $${totalPrecio}`
     spanCartMobile.innerHTML = totalCantidad
}