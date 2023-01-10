let registredButton = document.querySelector('.registredButton');
let loginButton = document.querySelector('.loginButton');
let contFull = document.querySelector('.full')

const usuarios = JSON.parse(localStorage.getItem('users')) || [];


registredButton.addEventListener('click', () => registrar());
loginButton.addEventListener('click', () => logear())

const registrar = () => {
    let contenido = `
    <form class="registro registrarse">
    <span class="spanError">Los campos estan incompletos</span>
    <div class="contName">
      <label for="name">Nombre</label>
      <input class="search" type="text" id="name" >
    </div>
    <div class="contLastName">
      <label for="lastName">Apellido</label>
      <input class="search" type="text" id="lastName" >
    </div>
    <div class="contMail">
      <label for="user">Usuario</label>
      <input class="search" type="text" id="user" >
    </div>
    <div class="contTelefono">
      <label for="password">contraseña</label>
      <input class="search" type="password" id="password" >
    </div>
    <button class="añadirCarrito" type="submit">Registrar</button>
  </form>
    `

    contFull.innerHTML = contenido

    let registrarse = document.querySelector('.registrarse')
    registrarse.addEventListener('submit', (evento) => regis(evento))
}

const logear = () => {
    let contenido = `
    <form class="registro logearse">
    <span class="spanError">Los datos estan incorrectos</span>
    <div class="contUser">
      <label for="user">Usuario</label>
      <input class="search" type="text" id="user" >
    </div>
    <div class="contPass">
      <label for="password">Contraseña</label>
      <input class="search" type="password" id="password" >
    </div>
    <button class="añadirCarrito" type="submit">Ingresar</button>
  </form>
    `

    contFull.innerHTML = contenido

    let logearse = document.querySelector('.logearse')
    logearse.addEventListener('submit', (evento) => log(evento))
}

let logearse = document.querySelector('.logearse')
logearse.addEventListener('submit', (evento) => log(evento))

function regis(evento) {
    evento.preventDefault()

    let spanError = document.querySelector('.spanError');

    let name = document.getElementById('name').value
    let lastName = document.getElementById('lastName').value
    let user = document.getElementById('user').value
    let password = document.getElementById('password').value

    if (name !== "" && lastName !== "" && user !== "" && password !== "") {
        spanError.style.display = 'none'
        let newUser = { name, lastName, user, password }
        usuarios.push(newUser);
        localStorage.setItem('users', JSON.stringify(usuarios))

        logear()
    } else {
        spanError.style.display = 'flex'
    }
}

function log(evento) {
    evento.preventDefault()
    let spanError = document.querySelector('.spanError');

    let user = document.getElementById('user').value
    let password = document.getElementById('password').value

    let userActive = []
    if( user !== "" && password !== ""){
        spanError.style.display = 'none'

        if(usuarios.length > 0){
            usuarios.forEach(usuario => {
                if(usuario.user === user && usuario.password === password){
                    userActive.push(usuario)
                    localStorage.setItem('userActive', JSON.stringify(userActive))
                    document.location='index.html'
                } else{
                    spanError.innerHTML='El Usuario o Contraseña es incorrecto'
                    spanError.style.display = 'flex'
                }
            });
        } else{
            spanError.innerHTML='Si no tienes una cuenta, registrate'
            spanError.style.display = 'flex'
        }

    } else {
        spanError.innerHTML='Los campos estan incompletos'
        spanError.style.display = 'flex'
    }
}
