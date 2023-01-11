let productosElegidos = JSON.parse(localStorage.getItem('productosElegidos'))
const rowProducts = document.querySelector('.rowProducts');
const tbodyCarrito = document.querySelector('.tbodyCarrito');
const spanCantidad = document.querySelector('.totalCantidades');
const spanPrecio = document.querySelector('.totalPrecio');
let spanCart = document.querySelector('.spanCart');
let contPago = document.querySelector('.pago')
let contModal = document.querySelector('.cont-modal')
let capaNegra = document.querySelector('.capaNegra')

window.addEventListener('load', () => {
    // si hay productos cargados en el local storage, lo cargamos en el carrito //
    if (productosElegidos.length > 0) {

        carritoComprasTabla(productosElegidos)
    }
})

const carritoComprasTabla = productosElegidos => {

    // vaciamos el carrito cada vez que llamamos a la funcion //
    tbodyCarrito.innerHTML = ""
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
        `
        tr.innerHTML = contenido
        tbodyCarrito.appendChild(tr)
    })

    // actualizamos las cantidades y los totales //
    let totalCantidad = productosElegidos.map(producto => {
        return producto.cantidad
    }).reduce((a, b) => a + b);

    let totalPrecio = productosElegidos.map(producto => {
        return producto.cantidad * producto.precio
    }).reduce((a, b) => a + b);

    spanCantidad.innerHTML = totalCantidad
    spanPrecio.innerHTML = `$${totalPrecio}`
}



function eft() {
    let totalPrecio = productosElegidos.map(producto => {
        return producto.cantidad * producto.precio
    }).reduce((a, b) => a + b);


    let contenidoEft = `
    <form class="tarjetas">
    <div class="cont-tarjeta">
        <label for="tarjeta">Numero de CBU:</label>
        <span>1595856325648716</span>
    </div>
    <div class="cont-nameTarjeta">
        <label for="nameTarjeta">Nombre del titular</label>
        <span>Herencia</span>
    </div>
    <div class="cont-vencimiento">
        <label for="vencimiento">Alias</label>
        <span>Herencia..bb</span>
    </div>
    <div class="descuento">
        <span>15% de descuento</span>
        <span class="total">Total a pagar: $${Math.floor(totalPrecio - (totalPrecio*0.15))}</span>
    </div>
    <button type="submit" class="añadirCarrito pagar">Finalizar Compra</button>
    </form>
    `

    contPago.innerHTML = contenidoEft
    let pagar = document.querySelector('.pagar')

    pagar.addEventListener('click', (e)=> {
        e.preventDefault()
        
        contModal.style.display='flex'
        capaNegra.style.display='block'
        localStorage.removeItem('productosElegidos');
        let buttonIincio = document.querySelector('.inicio')

            buttonIincio.addEventListener('click', () => {
                document.location='index.html'
            })
    })
}

function credito() {
    let contenidoCredito = `
    <form class="tarjetas">
        <div class="cont-tarjeta">
        <label for="tarjeta">Numero de Tarjeta</label>
        <input type="text" name="tel" id="numero" maxlength="16" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"> 
    </div>
    <div class="cont-nameTarjeta">
        <label for="nameTarjeta">Nombre en la tajeta</label>
        <input type="text" id="nameTarjeta" onkeydown="return /[a-z, ]/i.test(event.key)">
    </div>
    <div class="cont-vencimiento">
        <label for="vencimiento">Vencimiento (mmaa)</label>
        <input type="text" name="tel" id="vencimiento" maxlength="4" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"> 
    </div>
    <div class="seguridad">
        <label for="seguridad">Cod seguridad</label>
        <input type="password" name="tel" id="seguridad" maxlength="3" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"> 
    </div>
    <div class="cuotas">
        <span for="cuotas">Cuotas sin interes</span>
        <select name="cuotas" id="cuotas">
            <option value="1 Cuota">1 Cuota</option>
            <option value="3 Cuotas">3 Cuotas</option>
        </select>
    </div>
    <button type="submit" class="añadirCarrito pagar">Finalizar Compra</button>
    </form>
`
    contPago.innerHTML = contenidoCredito
    let pagar = document.querySelector('.pagar')

    pagar.addEventListener('click', (e)=> {
        e.preventDefault()

        let numTarjeta = document.getElementById('numero').value;
        let nombreTarjeta = document.getElementById('nameTarjeta').value;
        let vencimiento = document.getElementById('vencimiento').value;
        let cod = document.getElementById('seguridad').value
        
        if(numTarjeta !== "" && nombreTarjeta !== "" && vencimiento !== "" && cod !== ""){

            contModal.style.display='flex'
            capaNegra.style.display='block'
            localStorage.removeItem('productosElegidos');
            let buttonIincio = document.querySelector('.inicio')

            buttonIincio.addEventListener('click', () => {
                document.location='index.html'
            })
            
        } else {
            let errorStock = document.querySelector('.errorStock')
            errorStock.innerText = 'Por favor completa todos los datos'
            errorStock.style.display='inline-block'
            setTimeout(() => {
                errorStock.style.display='none'
            }, 3500);
            return
        }

  
    })
}

function debito() {
    let contenidoDebito = `
    <form class="tarjetas">
    <div class="cont-tarjeta">
    <label for="tarjeta">Numero de Tarjeta</label>
    <input type="text" name="tel" id="numero" maxlength="16" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"> 
    </div>
    <div class="cont-nameTarjeta">
        <label for="nameTarjeta">Nombre en la tajeta</label>
        <input type="text" id="nameTarjeta" onkeydown="return /[a-z, ]/i.test(event.key)">
    </div>
    <div class="cont-vencimiento">
        <label for="vencimiento">Vencimiento (mmaa)</label>
        <input type="text" name="tel" id="vencimiento" maxlength="4" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"> 
    </div>
    <div class="seguridad">
        <label for="seguridad">Cod seguridad</label>
        <input type="password" name="tel" id="seguridad" maxlength="3" onKeypress="if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false;"> 
    </div>
    <button type="submit" class="añadirCarrito pagar">Finalizar Compra</button>
    </form>
`
    contPago.innerHTML = contenidoDebito
    let pagar = document.querySelector('.pagar')

    pagar.addEventListener('click', (e)=> {
        e.preventDefault()

        let numTarjeta = document.getElementById('numero').value;
        let nombreTarjeta = document.getElementById('nameTarjeta').value;
        let vencimiento = document.getElementById('vencimiento').value;
        let cod = document.getElementById('seguridad').value
        
        if(numTarjeta !== "" && nombreTarjeta !== "" && vencimiento !== "" && cod !== ""){

            contModal.style.display='flex'
            capaNegra.style.display='block'
            localStorage.removeItem('productosElegidos');
            let buttonIincio = document.querySelector('.inicio')

            buttonIincio.addEventListener('click', () => {
                document.location='index.html'
            })
            
        } else {
            let errorStock = document.querySelector('.errorStock')
            errorStock.innerText = 'Por favor completa todos los datos'
            errorStock.style.display='inline-block'
            setTimeout(() => {
                errorStock.style.display='none'
            }, 3500);
            return
        }

  
    })
}

let checks = document.querySelectorAll('.checks')

checks.forEach(check => {
    check.addEventListener('change', () => {
        console.log(check.value)
        if (check.value === '1') {
            eft()
        } else if (check.value === '2') {
            credito()
        } else debito()
    })
})