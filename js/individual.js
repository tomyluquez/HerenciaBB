const productosElegidos = JSON.parse(localStorage.getItem('productosElegidos')) || [];
const productosTotales = JSON.parse(localStorage.getItem('productosTotales'))
const productos = JSON.parse(localStorage.getItem('productos'))
const imgPrincipal = document.querySelector('.imgPrin');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const nombreProd = document.querySelector('.nombreProd')
const precioProd = document.querySelector('.precioProd')
const tarjeta = document.querySelector('.tarjeta')
const selectTalles = document.querySelector('.selectTalles');
const spanButton = document.querySelector('.spanButton');
const buttonCart = document.querySelector('.buttonCart');
const iconCart = document.querySelector('.iconCart');
const color = document.querySelector('.color');
const descripcion = document.querySelector('.descripcion');
const tbodyCarrito = document.querySelector('.tbodyCarrito');
const spanCantidad = document.querySelector('.totalCantidades');
const spanPrecio = document.querySelector('.totalPrecio');
let spanCart = document.querySelector('.spanCart');
let spanCartMobile = document.querySelector('.circleCart');
const cartAlert = document.getElementById('cartAlert');

window.addEventListener('load', () => {
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
const stockActual = (selecTalles, producto) => {
  
  selecTalles.addEventListener('change', function() {
      for(option of selecTalles.children){
        if(option.selected === true){
          const stock = document.querySelector('.stock');
          for(let i in producto.tallesYStock){
            if(option.innerHTML === i && producto.tallesYStock[i] > 0){
              stock.style.display='flex'
              stock.innerHTML = `Stock disponible: ${producto.tallesYStock[i]}`
              spanButton.innerHTML= 'Aregar al Carrito'
              buttonCart.disabled = false
              iconCart.classList.remove('bi','bi-x','filtro')

            } else if(option.innerHTML === i && producto.tallesYStock[i] === 0) {
              stock.style.display='flex'
              stock.innerHTML= 'SIN STOCK'
              spanButton.innerHTML= 'SIN STOCK'
              iconCart.classList.remove('bi','bi-cart-plus')
              iconCart.classList.add('bi','bi-x','filtro')
              buttonCart.disabled = true

            } else if (option.innerHTML === 'Seleccione un Talle'){
              stock.style.display='none'
              spanButton.innerHTML= 'Aregar al Carrito'
              buttonCart.disabled = false
              iconCart.classList.remove('bi','bi-x','filtro')
            }
            }
          }
        }
      })
}
// funcion para renderizar los productos individuales //
const renderProductos = producto => {
  console.log(producto)

  imgPrincipal.src = producto.img
  img2.src = producto.img
  img3.src = producto.img2
  nombreProd.innerHTML = producto.nombre
  precioProd.innerHTML = `$${producto.precio}`
  tarjeta.innerHTML = `3 Cuotas sin interes de $${Math.floor(producto.precio/3)}`
  color.innerHTML= `Color: ${producto.color}`
  descripcion.innerHTML = producto.descripcion

  for(talles in producto.tallesYStock){
    const option = document.createElement('option');
    option.innerHTML= talles
    selectTalles.appendChild(option)
  }

  console.log(selectTalles.def)

  stockActual(selectTalles, producto)

}
const producto = JSON.parse(localStorage.getItem('productoElegido'))
renderProductos(producto)

const renderImg = src => {
  const imgPrincipal = document.querySelector('.imgPrin');
  imgPrincipal.src = src
}

const clickButton = (producto) => {
  const srcImage = producto.children[0].childNodes[1].children[0].src
  let talleselect = producto.children[1].children[2].children[3].children[1]
  let talleselected;
  for(option of selectTalles){
    if(option.selected === true){
      talleselected = option.innerHTML
    }
  }
  console.log(producto.children)
  const productoElegido = {
    img: srcImage.slice(21),
    nombre: producto.children[1].children[0].innerHTML,
    talle: talleselected,
    precio: +producto.children[1].children[1].innerHTML.
    slice(1),
    cantidad: +producto.children[1].children[2].children[5].children[1].value,
    color: producto.children[1].children[2].children[2].innerHTML.slice(7)
}

// llamamos a la funcion que controla de que haya stock suficiente de ese producto y dejamos en blanco el value de las cantidades//
checkStock(productoElegido)
}

// funcion para chequear el stock disponible //
const checkStock = productoElegido => {
  console.log(productoElegido)
  // recorremos el array de los productos elegidos y comprobamos de que haya stock
  for(let i=0; i<productosTotales.length; i++){
      if(productosTotales[i].nombre === productoElegido.nombre && 
        productosTotales[i].color === productoElegido.color){
        console.log(productoElegido)
          // si hay stock, le restamos la cantidad deseada de compra, lanzamos alerta de exito y llamamos a la funcion que prepara el producto //
          if(productosTotales[i].tallesYStock[productoElegido.talle] >= productoElegido.cantidad){
              productosTotales[i].tallesYStock[productoElegido.talle] -= productoElegido.cantidad
              
              for(item of productos){
                if(item.nombre === productoElegido.nombre && item.color === productoElegido.color){
                  if(item.tallesYStock[productoElegido.talle] >= productoElegido.cantidad){
                    item.tallesYStock[productoElegido.talle] -= productoElegido.cantidad
                  }
                }
              }
              alertExito()
              createItemCart(productoElegido)
              console.log(productos)
              //enviamos al locl storage, el stock acutalizado //
              localStorage.setItem('productos', JSON.stringify(productos))
              localStorage.setItem('productosTotales', JSON.stringify(productosTotales))
              
          } else if(productosTotales[i].tallesYStock[productoElegido.talle] < productoElegido.cantidad){
              // si no hay stock, lanzamos alerta de que no hay esa cantidad disponible y detallamos cuantos queda//
              let errorStock = document.querySelector('.errorStock')
              errorStock.innerText = `No tenemos disponibles esas cantidades de ${productoElegido.nombre} en talle ${productoElegido.talle}, el stock es de ${productosTotales[i].tallesYStock[productoElegido.talle]}`
              errorStock.style.display='inline-block'
              setTimeout(() => {
                  errorStock.style.display='none'
              }, 4500);
          }
      }
  }
}

// funcion para mostrar la alerta de exito al seleccionar el producto //
const alertExito = () => {
  cartAlert.style.display='inline-block'
  setTimeout(() => {
      cartAlert.style.display='none'
  }, 2000);
}

// funcion para crear el objeto de cada producto seleccionado //
const createItemCart = productoElegido =>{
  console.log(productoElegido)
  //comprobamos de que si el producto se repite que nos sume una cantidad mas para evitar duplicados //
  for(let i=0; i<productosElegidos.length; i++){
      if(productosElegidos[i].nombre === productoElegido.nombre &&
          productosElegidos[i].talle === productoElegido.talle){
          productosElegidos[i].cantidad += productoElegido.cantidad
          cart(productosElegidos)
          carritoComprasTabla(productosElegidos)
          return
      }
  }

  // en caso de que no se repita, lo agregamos como un producto nuevo //
  productosElegidos.push(productoElegido)
  cart(productosElegidos)
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

      //iteramos el array de productos, devolvemos el stock y actualizamos el localstorage //
      for(let i=0; i<productos.length; i++){
          if(productos[i].nombre === trEliminar.children[1].innerText){
              productos[i].tallesYStock[trEliminar.children[2].innerText] += 
              +trEliminar.children[4].innerText

              localStorage.setItem('productos', JSON.stringify(productos))
          }
      }

      for(let i=0; i<productosTotales.length; i++){
        if(productosTotales[i].nombre === trEliminar.children[1].innerText){
            productosTotales[i].tallesYStock[trEliminar.children[2].innerText] += 
            +trEliminar.children[4].innerText

            localStorage.setItem('productosTotales', JSON.stringify(productosTotales))
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

