const productos = JSON.parse(localStorage.getItem('productos'))
const productosElegidos = JSON.parse(localStorage.getItem('productosElegidos')) || [];
const spanCantidad = document.querySelector('.totalCantidades');
const spanPrecio = document.querySelector('.totalPrecio');
let spanCart = document.querySelector('.spanCart');
let spanCartMobile = document.querySelector('.circleCart');
const tbodyCarrito = document.querySelector('.tbodyCarrito');

window.addEventListener('load', () => {
    // si hay productos cargados en el local storage, lo cargamos en el carrito y //
    //tiramos la alerta para que terminen la compra //
    if(productosElegidos.length > 0){

        cart(productosElegidos)

    }
})

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

        //iteramos el array de productos y devolvemos el stock //
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