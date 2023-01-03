const productos = JSON.parse(localStorage.getItem('productos')) || [
    {
        nombre: 'Babero con Toalla',
        tallesYStock:{
            'Unico': 2
        },
        img:  '/img/Productos/BaberoconToalla.jpeg',
        img2: '/img/Productos/BaberoconToalla2.jpeg',
        categoria: ['Accesorios y Otros'],
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
        img2: '/img/Productos/BodyconVestido2.jpeg',
        categoria: ['Bodys', 'Vestidos'],
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
        img2:'/img/Productos/BodyLinoBeige3.jpeg',
        categoria: ['Bodys'],
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
        img2: '/img/Productos/CRN-Leoncitos.jpeg',
        categoria: ['Conjuntos'],
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
        img2: '/img/Productos/RemeraLinoAzulRayado2.jpeg',
        categoria:['Remeras'],
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
        img2: '/img/Productos/RemeraLinoBeige3.jpeg',
        categoria:['Remeras'],
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
        img2: '/img/Productos/ShortWaffleCeleste2.jpeg',
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
        img2: '/img/Productos/VestidoHortensias2.jpeg',
        categoria:['Vestidos'],
        busqueda:['vestidos','nena'],
        precio: 5699
    }
];
const productosElegidos = JSON.parse(localStorage.getItem('productosElegidos')) || [];
const productosGenerales = [
    {
        nombre: 'Ajuar Bajo el Mar',
        tallesYStock:{
            '0-3 Meses': 0
        },
        img:  '/img/Productos/AjuarBajoelmarKale1.jpeg',
        img2: '/img/Productos/AjuarBajoelmarKale2.jpeg',
        color: 'Verde Kale',
        categoria: ['Ajuares', 'Conjuntos'],
        busqueda: ['ajuar', 'conjunto','pantalon'],
        precio: 3749
    },
    {
        nombre: 'Body Alemndra',
        tallesYStock:{
            '3-6 Meses': 1,
            '6-9 Meses': 1
        },
        img:  '/img/Productos/BodyAlmendra.jpeg',
        img2: '/img/Productos/BodyAlmendra2.jpeg',
        Color: 'Almendra',
        categoria: ['Bodys'],
        busqueda: ['body', 'remera'],
        precio: 3699
    },
    {
        nombre: 'Body Oceano',
        tallesYStock:{
            '3-6 Meses': 1,
            '6-9 Meses': 1, 
        },
        img:  '/img/Productos/Bodyoceanoblanco.jpeg',
        img2: '/img/Productos/Bodyoceanoblanco2.jpeg',
        Color: 'Celeste Oceano',
        categoria: ['Bodys'],
        busqueda: ['body'],
        precio: 3999 
    },
    {
        nombre: 'Conjunto Aventura',
        tallesYStock:{
            '12-18 Meses': 1,
            '18-24 Meses': 1,
        },
        img:  '/img/Productos/ConjunoAventuraKale.jpeg',
        img2: '/img/Productos/ConjunoAventuraKale2.jpeg',
        Color: 'Verde Kale',
        categoria: ['Conjuntos'],
        busqueda: ['conjunto', 'remeras', 'short'],
        precio: 5699
    },
    {
        nombre: 'Baberos',
        tallesYStock:{
            'Oceano': 2,
            'Mariposa': 2,
        },
        img:  '/img/Productos/Baberos.jpeg',
        img2: '/img/Productos/Baberos2.jpeg',
        categoria: ['Accesorios y Otros'],
        busqueda: ['babero', 'accesorio'],
        precio: 1199
    },
    {
        nombre: 'Buzo Pecas',
        tallesYStock:{
            '18 Meses': 1,
            '24 Meses': 1, 
        },
        img:  '/img/Productos/BuzoPecasNatural.jpeg',
        img2: '/img/Productos/BuzoPecasNatural2.jpeg',
        Color: 'Natural',
        categoria: ['Buzos'],
        busqueda: ['buzos', 'abrigos'],
        precio: 6099
    },
    {
        nombre: 'Buzo Pecas',
        tallesYStock:{
            '18 Meses': 1,
            '24 Meses' :1, 
        },
        img:  '/img/Productos/Buzopecasceleste.jpeg',
        img2: '/img/Productos/Buzopecasceleste2.jpeg',
        Color: 'Celeste',
        categoria: ['Buzos'],
        busqueda: ['buzo', 'abrigo'],
        precio: 6099
    },
    {
        nombre: 'Ajuar Bajo el Mar',
        tallesYStock:{
            '0-3 Meses': 0,
            '3-6 Meses': 0,
        },
        img:  '/img/Productos/AjuarBajoelmargris.jpeg',
        img2: '/img/Productos/AjuarBajoelmargris2.jpeg',
        Color: 'Gris',
        categoria: ['Ajuares'],
        busqueda: ['ajuar', 'pantalon', 'conjunto'],
        precio: 3749
    },
    {
        nombre: 'Conjunto Arcoiris',
        tallesYStock:{
            '18 Meses': 0,
            '24 Meses': 1, 
        },
        img:  '/img/Productos/ConjuntoArcoiris.jpeg',
        img2: '/img/Productos/ConjuntoArcoiris2.jpeg',
        Color: 'Limon',
        categoria: ['Conjuntos'],
        busqueda: ['conjunto', 'remera', 'short'],
        precio: 4699
    },
    {
        nombre: 'Conjunto Aventura',
        tallesYStock:{
            '9-12 meses': 1,
            '12-18 Meses': 1,
            '18-24 Meses': 2, 
        },
        img:  '/img/Productos/ConjuntoAventuraSky.jpeg',
        img2: '/img/Productos/ConjuntoAventuraSky2.jpeg',
        Color: 'Celeste Sky',
        categoria: ['Conjuntos'],
        busqueda: ['Conjunto', 'remera', 'short'],
        precio: 5699
    },
    {
        nombre: 'Conjunto Bajo el Mar',
        tallesYStock:{
            '9-12 meses': 1, 
        },
        img:  '/img/Productos/Conjuntobajoelmarbeige.jpeg',
        img2: '/img/Productos/Conjuntobajoelmarbeige2.jpeg',
        Color: 'Beige',
        categoria: ['Conjuntos'],
        busqueda: ['Conjunto', 'remera', 'short'],
        precio: 4699
    },
    {
        nombre: 'Conjunto Oceano',
        tallesYStock:{
            '0-3 Meses': 1,
            '3-6 Meses': 1, 
        },
        img:  '/img/Productos/ConjuntoOceanoLimonada.jpeg',
        img2: '/img/Productos/ConjuntoOceanoLimonada2.jpeg',
        Color: 'Limonada',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],
        precio: 5199
    },
    {
        nombre: 'Conjunto Exploring',
        tallesYStock:{
            '12-18 Meses':1,
            '18-24 Meses':1, 
        },
        img:  '/img/Productos/ConjuntoExploringKale.jpeg',
        img2: '/img/Productos/ConjuntoExploringKale2.jpeg',
        Color: 'Verde Kale',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],
        precio: 5499
    },
    {
        nombre: 'Conjunto Exploring',
        tallesYStock:{
            '12-18 Meses':1,
            '18-24 Meses':1, 
        },
        img:  '/img/Productos/ConjuntoExploringMaiz.jpeg',
        img2: '/img/Productos/ConjuntoExploringMaiz2.jpeg',
        Color: 'Verde Maiz',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],
        precio: 5499
    },
    {
        nombre: 'Conjunto Florecer',
        tallesYStock:{
            '6-9 Meses':0 
        },
        img:  '/img/Productos/ConjuntoFlorecerGris.jpeg',
        img2: '/img/Productos/ConjuntoFlorecerGris2.jpeg',
        Color: 'Gris',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],
        precio: 3999
    },
    {
        nombre: 'Conjunto Helena',
        tallesYStock:{
            '6-9 Meses':1,
            '9-12 Meses':1,
            '18-24 Meses':1 
        },
        img:  '/img/Productos/ConjuntoHelenaCamel.jpeg',
        img2: '/img/Productos/ConjuntoHelenaCamel2.jpeg',
        Color: 'Camel',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],
        precio: 5699
    },
    {
        nombre: 'Conjunto Hippo',
        tallesYStock:{
            '6-9 Meses':1,
            '9-12 Meses':1,
            '12-18 Meses': 1, 
        },
        img:  '/img/Productos/ConjuntoHippoKale.jpeg',
        img2: '/img/Productos/ConjuntoHippoKale2.jpeg',
        Color: 'Verde Kale',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],   
        precio: 5699
    },
    {
        nombre: 'Conjunto Hippo',
        tallesYStock:{
            '24 Meses': 1,
        },
        img:  '/img/Productos/ConjuntoHippoSky.jpeg',
        img2: '/img/Productos/ConjuntoHippoSky2.jpeg',
        Color: 'Verde Sky',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],   
        precio: 5699
    },
    {
        nombre: 'Conjunto Leonela',
        tallesYStock:{
            '3-6 Meses':1, 
        },
        img:  '/img/Productos/ConjuntoLeonelaBeige.jpeg',
        img2: '/img/Productos/ConjuntoLeonelaBeige2.jpeg',
        Color: 'Beige',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],   
        precio: 6499
    },
    {
        nombre: 'Conjunto Leonela',
        tallesYStock:{
            '6-9 Meses':1, 
        },
        img:  '/img/Productos/ConjuntoLeonelaGris.jpeg',
        img2: '/img/Productos/ConjuntoLeonelaGris2.jpeg',
        Color: 'Gris',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],   
        precio: 6499
    },
    {
        nombre: 'Conjunto Martin',
        tallesYStock:{
            '3-6 Meses': 2, 
        },
        img:  '/img/Productos/ConjuntoMartinCeleste.jpeg',
        img2: '/img/Productos/ConjuntoMartinCeleste2.jpeg',
        Color: 'Celeste',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],   
        precio: 5699
    },
    {
        nombre: 'Conjunto Martin',
        tallesYStock:{
            '3-6 Meses': 1, 
        },
        img:  '/img/Productos/ConjuntoMartinNatural.jpeg',
        img2: '/img/Productos/ConjuntoMartinNatural2.jpeg',
        Color: 'Natural',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],   
        precio: 5699
    },
    {
        nombre: 'Conjunto Moms',
        tallesYStock:{
            '3-6 Meses':1,
            '9-12 Meses': 1,
            '12-18 Meses': 1,
            '18-24 Meses': 1, 
        },
        img:  '/img/Productos/ConjuntoMomsCentolla.jpeg',
        img2: '/img/Productos/ConjuntoMomsCentolla2.jpeg',
        Color: 'Centolla',
        categoria: ['Conjuntos'],
        busqueda: ['Conjuto', 'remera', 'short'],   
        precio: 5499 
    },
]
const productosTotales = [...productos,...productosGenerales]
const talles = [];
const categorias = [];
const spanCantidad = document.querySelector('.totalCantidades');
const spanPrecio = document.querySelector('.totalPrecio');
let spanCart = document.querySelector('.spanCart');
let spanCartMobile = document.querySelector('.circleCart');
const tbodyCarrito = document.querySelector('.tbodyCarrito');
const rowProducts = document.querySelector('.rowProducts');

// si hay productos cargados en el local storage, lo cargamos en el carrito//
window.addEventListener('load', () => {
    //tiramos la alerta para que terminen la compra //
    if(productosElegidos.length > 0){

        cart(productosElegidos)

    }
    renderProductos(productosTotales)
    renderTalles(productosTotales)
    renderCategorias(productosTotales)
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

//funcion para renderizar los productos //
const renderProductos = productosTotales => {
    productosTotales.forEach(producto => {
        
    const divCol = document.createElement('div');
    divCol.classList.add('col-sm-6','col-md-4','col-lg-2','img1','d-flex','justify-content-center','aling-items-center','flex-column')

    const contenido = `
      <img class="imgProducts" src="${producto.img}" alt="">
      <div class="row">
        <span>${producto.nombre}</span>
      </div>
          <div class="row precios">
            <span class="precio">Precio $${producto.precio}</span>
          </div>
          <div class="d-flex justify-content-center aling-items-center">
            <button class="añadirCarrito">
              <span class="spanButton">Ver Producto</span>
              <span class="iconCart">
                <i class="bi bi-arrow-right"></i>
              </span>
            </button>
          </div>
      </div>
    `
    divCol.innerHTML=contenido;
    rowProducts.appendChild(divCol)

    imgHover(productosTotales)
    })
}

// funcion para cambiar de imagen al pasar el mouse //
function imgHover(productosTotales){
const imgProducts = document.querySelectorAll('.imgProducts')

imgProducts.forEach(img => {
    img.addEventListener('mousemove', () => {
        for( item of productosTotales ){
            let srcImage = img.src.slice(21)
            if(srcImage === item.img){
                img.src = item.img2
            }
        }
    })

    img.addEventListener('mouseout', () => {
        for( item of productosTotales ){
            let srcImage = img.src.slice(21)
            if(srcImage === item.img2){
                img.src = item.img
            }
        }
    })
})
}

// funcion para renderizar talles //
const renderTalles = productosTotales => {
    productosTotales.map(producto => {
      let tallesKeys = Object.keys(producto.tallesYStock)
      for(let i=0; i<tallesKeys.length; i++){
        if(!talles.includes(tallesKeys[i])){
            talles.push(tallesKeys[i])
        }
      }
    })
 
    const contFiltrosTalles = document.querySelector('.cont-filtros-talles');
    talles.sort((a,b) => a-b)
    talles.forEach(talle => {
        const divTalles = document.createElement('div')
        divTalles.classList.add('divFiltros')
        const checkFiltro = document.createElement('input')
        checkFiltro.type='checkbox'

        const labelFiltro = document.createElement('label')
        labelFiltro.innerHTML=`${talle}`
        
        divTalles.appendChild(checkFiltro)
        divTalles.appendChild(labelFiltro)
        contFiltrosTalles.appendChild(divTalles)
    })
}

// funcion para renderizar categorias //
const renderCategorias = productosTotales => {
    productosTotales.map(producto => {
      let categoriasProductos = producto.categoria
      for(let i=0; i<categoriasProductos.length; i++){
        if(!categorias.includes(categoriasProductos[i])){
            categorias.push(categoriasProductos[i])
        }
      }
    })

 
    const contFiltrosCategorias = document.querySelector('.cont-filtros-talles.categorias');
    categorias.sort()
    categorias.forEach(categoria => {
        const divCategorias = document.createElement('div')
        divCategorias.classList.add('divFiltros')
        const checkCategorias = document.createElement('input')
        checkCategorias.type='checkbox'

        const labelCategorias = document.createElement('label')
        labelCategorias.innerHTML=`${categoria}`
        
        divCategorias.appendChild(checkCategorias)
        divCategorias.appendChild(labelCategorias)
        contFiltrosCategorias.appendChild(divCategorias)
    })
}