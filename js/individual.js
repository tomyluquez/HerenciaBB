



// funcion para renderizar los productos individuales //
const renderProductos = productos => {
    rowProducts.innerHTML=""
    productos.forEach(producto => {
        
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

    imgHover(productos)
    })
}