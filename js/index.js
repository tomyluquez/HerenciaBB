
const productosElegidos = JSON.parse(localStorage.getItem('productosElegidos')) || [];
const productos = JSON.parse(localStorage.getItem('productos')) || 
[
    {
        nombre: 'Babero con Toalla',
        tallesYStock:{
            'Unico': 2
        },
        img:  '/img/Productos/BaberoconToalla.jpeg',
        img2: '/img/Productos/BaberoconToalla2.jpeg',
        color: 'motivos',
        categoria: ['accesorios y otros'],
        busqueda: ['babero', 'accesorios','babitas'],
        precio: 1549,
        descripcion: 'se venden por separado'
    },
    {
        nombre: 'Body con Vestido',
        tallesYStock:{
            '3 Meses': 1,
            '18 Meses': 1,
        },
        color: 'Blanco',
        img: '/img/Productos/BodyconVestido4.jpeg',
        img2: '/img/Productos/BodyconVestido2.jpeg',
        categoria: ['bodys', 'vestidos'],
        busqueda: ['body','vestido', 'nenas'],
        precio: 5699,
        descripcion: 'se venden por separado'
    },
    {
        nombre: 'Body lino',
        tallesYStock: {
            '18 Meses': 1,
            '24 Meses': 1,
        },
        color: 'Beige',
        img:'/img/Productos/BodyLinoBeige.jpeg',
        img2:'/img/Productos/BodyLinoBeige3.jpeg',
        categoria: ['bodys'],
        busqueda:['body','lino'],
        precio: 4699,
        descripcion: 'se venden por separado'
    },
    {
        nombre: 'Conjunto Leoncitos',
        tallesYStock: {
            '0-3 Meses': 1,
            '3-6 Meses': 1,
        },
        color: 'Leoncitos',
        img: '/img/Productos/CRN-Leoncitos2.jpeg',
        img2: '/img/Productos/CRN-Leoncitos.jpeg',
        categoria: ['conjuntos'],
        busqueda: ['conjuntos', 'recien nacidos',],
        precio: 4399,
        descripcion: 'se venden por separado'
    },
    {
        nombre: 'Remera lino Azul',
        tallesYStock:{
            '9 Meses': 1,
            '12 Meses': 1
        },
        color: 'Azul',
        img: '/img/Productos/RemeraLinoAzulRayado.jpeg',
        img2: '/img/Productos/RemeraLinoAzulRayado2.jpeg',
        categoria:['remeras'],
        busqueda:['remeras','lino'],
        precio: 4699,
        descripcion: 'se venden por separado'
    },
    {
        nombre: 'Remera lino Beige',
        tallesYStock:{
            '6 Meses': 1,
        },
        color: 'Beige',
        img: '/img/Productos/RemeraLinoBeige2.jpeg',
        img2: '/img/Productos/RemeraLinoBeige3.jpeg',
        categoria:['remeras'],
        busqueda:['remeras','lino'],
        precio: 4699,
        descripcion: 'se venden por separado'
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
        img2: '/img/Productos/ShortWaffleCeleste2.jpeg',
        categoria:['partecitas de abajo'],
        busqueda:['short','waffle','pantalon'],
        precio: 3099,
        descripcion: 'se venden por separado'
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
        img2: '/img/Productos/VestidoHortensias2.jpeg',
        categoria:['vestidos'],
        busqueda:['vestidos','nena'],
        precio: 5699,
        descripcion: 'se venden por separado'
    }
];
console.log(productos)
window.addEventListener('load', () => {

    let userActive = JSON.parse(localStorage.getItem('userActive')) || [];
    console.log(userActive)

    if(userActive.length > 0){
        let spanUser = document.querySelector('.bienvenido')

        spanUser.innerHTML= `Bienvenid@ ${userActive[0].name}`
        spanUser.style.display='flex'
    }

    // si hay productos cargados en el local storage, lo cargamos en el carrito y //
    //tiramos la alerta para que terminen la compra //
    if(productosElegidos.length > 0){

        const finishAlert = document.getElementById('finishAlert');

        finishAlert.style.display='inline-block'
        setTimeout(() => {
            finishAlert.style.display='none'
        }, 3000);

        cart(productosElegidos)

    }
})

const cartAlert = document.querySelector('.cartAlert');
const buttonProducts = document.querySelector('.products');
const rowProducts = document.querySelector('.rowProducts');
const tbodyCarrito = document.querySelector('.tbodyCarrito');
const spanCantidad = document.querySelector('.totalCantidades');
const spanPrecio = document.querySelector('.totalPrecio');
let spanCart = document.querySelector('.spanCart');
let spanCartMobile = document.querySelector('.circleCart');
const form = document.querySelector('.formulario');
const buttoSearch= document.querySelector('.buttonSearch')

// funcion para cambiar de pagina a la de productos //
buttonProducts.addEventListener('click', () => {
    document.location='productos.html'
})

// para cada producto que tenemos en el listado, se crea un div en la parte de compra rapida //
productos.forEach((producto) => {
    
    const divCol = document.createElement('div');
    divCol.classList.add('col-sm-6','col-md-4','col-lg-2','img1','d-flex','justify-content-center','aling-items-center','flex-column')
    const img = document.createElement('img');
    img.src=producto.img
    img.classList.add('imgProducts')
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
    spanPrecio.classList.add('precio')
    spanPrecio.innerHTML = `Precio: $${+producto.precio}`
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


    divCol.appendChild(img)
    divCol.appendChild(divSpanNombre)
    divSpanNombre.appendChild(spanNombre)
    divCol.appendChild(divTalles)
    divTalles.appendChild(labelTalles)
    divCol.appendChild(divSpanPrecio)
    divSpanPrecio.appendChild(spanPrecio)
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
            option.innerHTML= talles
            divTalles.appendChild(select)
            select.appendChild(option)
        }
        
        rowProducts.appendChild(divCol)

})      

const buttonCarrito = document.querySelectorAll('.añadirCarrito');

// funcion para eliminar producto del carrito //
document.addEventListener('click', (event) => {

    // si hacemos click en el tacho de basura, eliminamos el producto //
    if(event.target.classList.value === 'bi bi-trash3'){
        const trEliminar = event.target.closest('.trCarrito')

        // primero lo sacamos del array de productos elegidos//
        for(let i=0; i<productosElegidos.length; i++){
            if(productosElegidos[i].nombre === trEliminar.children[1].innerText &&
               productosElegidos[i].talle === trEliminar.children[2].innerText){
                productosElegidos.splice(i,1)
            }
        }

        //iteramos el array de productos, devolvemos el stock y actualizamos el localstorage //
        for(let i=0; i<productos.length; i++){
            if(productos[i].nombre === trEliminar.children[1].innerText){
                productos[i].tallesYStock[trEliminar.children[2].innerText] += 
                +trEliminar.children[4].innerText

                localStorage.setItem('productos', JSON.stringify(productos))
            }
        }

        // eliminamos la fila y llamamos a la funcion para renderizar el carrito de compras //
        trEliminar.remove()
        cart(productosElegidos)

        if(productosElegidos.length === 0){
            localStorage.removeItem('productosElegidos')
        }
    }
})

// funcion para cada uno de los botones de añadir a carrito //
buttonCarrito.forEach((button) => {
    button.addEventListener('click', () => {

        // para cada boton, comprobamos de que se haya ingresado algun monto en las cantidades, si es un false, larga un error //
        if(!+button.closest('.img1').childNodes[4].lastChild.value){
            let errorStock = document.querySelector('.errorStock')
            errorStock.innerText = 'no ingresaste ninguna cantidad'
            errorStock.style.display='inline-block'
            setTimeout(() => {
                errorStock.style.display='none'
            }, 3500);
            return
        }

        // armamos un array de objetos con cada producto que vamos eligiendo //
        const productoElegido = {
            img: button.closest('.img1').childNodes[0].src,
            nombre: button.closest('.img1').childNodes[1].innerText,
            talle: button.closest('.img1').childNodes[2].children[1].value,
            precio: +button.closest('.img1').childNodes[3].lastChild.innerText.
            slice(9),
            cantidad: +button.closest('.img1').childNodes[4].lastChild.value,
        }

        // llamamos a la funcion que controla de que haya stock suficiente de ese producto y dejamos en blanco el value de las cantidades//
        checkStock(productoElegido)
        button.closest('.img1').childNodes[4].lastChild.value = ""
        
    })
})

// funcion para chequear el stock disponible //
const checkStock = productoElegido => {

    // recorremos el array de los productos elegidos y comprobamos de que haya stock
    for(let i=0; i<productos.length; i++){
        if(productos[i].nombre === productoElegido.nombre){
            // si hay stock, le restamos la cantidad deseada de compra, lanzamos alerta de exito y llamamos a la funcion que prepara el producto //
            if(productos[i].tallesYStock[productoElegido.talle] >= productoElegido.cantidad){
                productos[i].tallesYStock[productoElegido.talle] -= productoElegido.cantidad
                alertExito()
                createItemCart(productoElegido)

                //enviamos al locl storage, el stock acutalizado //
                localStorage.setItem('productos', JSON.stringify(productos))
                
            } else if(productos[i].tallesYStock[productoElegido.talle] < productoElegido.cantidad){
                // si no hay stock, lanzamos alerta de que no hay esa cantidad disponible y detallamos cuantos queda//
                let errorStock = document.querySelector('.errorStock')
                errorStock.innerText = `No tenemos disponibles esas cantidades de ${productoElegido.nombre} en talle ${productoElegido.talle}, el stock es de ${productos[i].tallesYStock[productoElegido.talle]}`
                errorStock.style.display='inline-block'
                setTimeout(() => {
                    errorStock.style.display='none'
                }, 4500);
            }
        }
    }
}

// funcion para crear el objeto de cada producto seleccionado //
const createItemCart = productoElegido =>{
    //comprobamos de que si el producto se repite que nos sume una cantidad mas para evitar duplicados //
    for(let i=0; i<productosElegidos.length; i++){
        if(productosElegidos[i].nombre === productoElegido.nombre &&
            productosElegidos[i].talle === productoElegido.talle){
            productosElegidos[i].cantidad += productoElegido.cantidad
            carritoComprasTabla(productosElegidos)
            return
        }
    }

    // en caso de que no se repita, lo agregamos como un producto nuevo //
    productosElegidos.push(productoElegido)
    cart(productosElegidos)
    carritoComprasTabla(productosElegidos)
    
}

// funcion para mostrar la alerta de exito al seleccionar el producto //
const alertExito = () => {
    cartAlert.style.display='inline-block'
    setTimeout(() => {
        cartAlert.style.display='none'
    }, 2000);
}

// funcion para renderizar los span del carrito de compras //
const cart = productosElegidos => {
    
    spanCantidad.innerHTML = ""
    spanPrecio.innerHTML = ""

    // si el array de productos elegidos esta vacio, vamos a dejar todos los campos en 0 //
    if(productosElegidos.length === 0){
        spanCart.innerHTML = "CARRITO (0) $0.00"
        spanCartMobile.innerHTML = "0"
        spanCantidad.innerHTML = 0
        spanPrecio.innerHTML = 0
        return null;
    }
    
    // en caso de que tenga productos el array, vamos a sumar las cantidades y los preios para calcular los totales //
    let totalCantidad = productosElegidos.map(producto => {
       return producto.cantidad
    }).reduce((a,b) => a+b);

    let totalPrecio = productosElegidos.map(producto => {
        return producto.cantidad * producto.precio
     }).reduce((a,b) => a+b);
    
     spanCart.innerHTML = `CARRITO (${totalCantidad}) $${totalPrecio}`
     spanCartMobile.innerHTML = totalCantidad
     spanCantidad.innerHTML = totalCantidad
     spanPrecio.innerHTML = `$${totalPrecio}`

     carritoComprasTabla(productosElegidos)
}

// funcion para renderizar el carrito de compras //
const carritoComprasTabla = productosElegidos => {
    // enviamos al localstorage, los productos seleccionados //
    localStorage.setItem('productosElegidos', JSON.stringify(productosElegidos))

    // vaciamos el carrito cada vez que llamamos a la funcion //
    tbodyCarrito.innerHTML=""
    productosElegidos.forEach((producto) => {
        // para luego con cada uno de los productos crear un elemento de tabla y pegarselo al carrito
        const tr = document.createElement('tr');
        tr.classList.add('trCarrito')
        let contenido = `
        <th align="center" valign="middle"><img class="imgCarrito" src="${producto.img}" alt=""></th>
        <td align="center" valign="middle">${producto.nombre}</td>
        <td align="center" valign="middle">${producto.talle}</td>
        <td align="center" valign="middle">$${producto.precio}</td>
        <td align="center" valign="middle">${producto.cantidad}</td>
        <td align="center" valign="middle">$${producto.precio * producto.cantidad}</td>
        <td align="center" valign="middle"><button class="eliminar"><i class="bi bi-trash3"></i></button></td>
        `
        tr.innerHTML = contenido
        tbodyCarrito.appendChild(tr)
    })

    // actualizamos las cantidades y los totales //
    let totalCantidad = productosElegidos.map(producto => {
        return producto.cantidad
     }).reduce((a,b) => a+b);
 
     let totalPrecio = productosElegidos.map(producto => {
         return producto.cantidad * producto.precio
      }).reduce((a,b) => a+b);

      spanCantidad.innerHTML = totalCantidad
      spanPrecio.innerHTML = `$${totalPrecio}`
}

// evento para enviar la informacion del formulario //
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const alertForm = document.getElementById('datosForm')
    alertForm.style.display='inline-block'
    setTimeout(() => {
        alertForm.style.display='none'
    }, 2000);
})

//evento para cambiar de imagen al pasar el mouse //
const imgProducts = document.querySelectorAll('.imgProducts')
imgProducts.forEach(img => {

    img.addEventListener('mousemove', () => {
        for( item of productos ){
            let srcImage = img.src.slice(21)
            if(srcImage === item.img){
                img.src = item.img2
            }
        }
    })

    img.addEventListener('mouseout', () => {
        for( item of productos ){
            let srcImage = img.src.slice(21)
            if(srcImage === item.img2){
                img.src = item.img
            }
        }
    })
})

// evento para el input de busqueda //
buttoSearch.addEventListener('click', ()=>{
    const inputBusqueda = document.querySelector('.search').value

    if(!inputBusqueda){
        alert('no ingresaste ninguna busuqeda')
        return
    }

    const busqueda = [inputBusqueda]
    localStorage.setItem('busqueda',JSON.stringify(busqueda))
    document.location='productos.html'
})