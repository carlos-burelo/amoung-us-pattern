import NIVELES from './niveles.js'

const tableroUsuario = document.getElementById('tablero-usuario')
const tableroRobot = document.getElementById('tablero-robot')

const inicio = document.getElementById('inicio')
const ayuda = document.getElementById('ayuda')

function generarBotones(tablero, cantidad) {
  Array.from({ length: cantidad }).forEach(() => {
    tablero.appendChild(document.createElement('button'))
  })
}
generarBotones(tableroUsuario, 9)
generarBotones(tableroRobot, 9)

let tiempoInicio = 0
let tiempoFin = 0

const estado = {
  tableroUsuario: [],
  nivelActual: 0,
}

function mostrarPatron() {
  tiempoInicio = Date.now()
  const { patron } = NIVELES[estado.nivelActual]
  patron.forEach((numero, index) => {
    setTimeout(() => {
      resaltarElemento(tableroRobot.children[numero])
    }, index * 1000)
  })
}

function resaltarElemento(elemento) {
  elemento.classList.add('on')
  setTimeout(() => {
    elemento.classList.remove('on')
  }, 500)
}

function avanzarNivel() {
  if (estado.nivelActual < NIVELES.length - 1) {
    estado.nivelActual++
    estado.tableroUsuario = []
  } else {
    mostrarMensaje('Completaste todos los niveles')
  }
}

function reiniciarJuego() {
  estado.tableroUsuario = []
  document.querySelector('#puntaje').innerHTML = 0
  document.querySelector('#nivel').innerHTML = 1
  Array.from(tableroUsuario.children).forEach(button =>
    button.classList.remove('on')
  )
}

function presionarBoton(index) {
  const { patron } = NIVELES[estado.nivelActual]
  estado.tableroUsuario.push(index)
  console.log(estado.tableroUsuario)
  if (estado.tableroUsuario.length === patron.length) {
    verificarPatron()
  }
}

function verificarPatron() {
  tiempoFin = Date.now()
  const tiempoResolucion = tiempoFin - tiempoInicio
  const limiteTiempo = 10000
  let puntaje = 0
  if (tiempoResolucion <= limiteTiempo) {
    puntaje = Math.round(
      (1000 * (limiteTiempo - tiempoResolucion)) / limiteTiempo
    )
  }
  document.querySelector('#puntaje').innerHTML = puntaje

  const { tableroUsuario, nivelActual } = estado
  const { patron } = NIVELES[nivelActual]

  const aciertos = tableroUsuario.every((val, idx) => val === patron[idx])

  if (aciertos) {
    mostrarGanador()
  } else {
    mostrarPerdedor()
  }
}

function mostrarGanador() {
  document.querySelector('#nivel').innerHTML = estado.nivelActual + 2
  const modalGanador = document.getElementById('modalGanador')
  modalGanador.style.display = 'block'

  const avanzarNivelBtn = document.getElementById('avanzarNivel')
  avanzarNivelBtn.addEventListener('click', () => {
    avanzarNivel()
    modalGanador.style.display = 'none'
    mostrarInformcionNivel(mostrarPatron)
  })
}

function mostrarInformcionNivel(callback) {
  const modalInformacionNivel = document.getElementById('modalInformacionNivel')
  modalInformacionNivel.style.display = 'block'

  const { screen } = NIVELES[estado.nivelActual]
  const screenContainer = document.querySelector('#screen')
  screenContainer.innerText = screen

  const iniciarNivelBtn = document.getElementById('iniciarNivel')
  iniciarNivelBtn.addEventListener('click', () => {
    modalInformacionNivel.style.display = 'none'
    callback()
  })
}

function mostrarPerdedor() {
  const modalPerdedor = document.getElementById('modalPerdedor')
  modalPerdedor.style.display = 'block'

  const reiniciarJuegoBtn = document.getElementById('reiniciarJuego')
  reiniciarJuegoBtn.addEventListener('click', () => {
    reiniciarJuego()
    modalPerdedor.style.display = 'none'
    mostrarInformcionNivel(mostrarPatron)
  })
}

function mostrarMensaje(mensaje) {
  if (mensaje.includes('Perdiste')) {
    alert(mensaje)
    reiniciarJuego()
  } else {
    const confirmacion = confirm(
      mensaje + '. ¿Quieres avanzar al siguiente nivel?'
    )
    if (confirmacion) {
      avanzarNivel()
    } else {
      reiniciarJuego()
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  inicio.addEventListener('click', () => {
    mostrarInformcionNivel(mostrarPatron)
  })

  ayuda.addEventListener('click', () => {
    const modalAyuda = document.getElementById('modalAyuda')
    modalAyuda.style.display = 'block'
  })

  const cerrarModalAyuda = document.getElementById('cerrarAyuda')
  cerrarModalAyuda.addEventListener('click', () => {
    const modalAyuda = document.getElementById('modalAyuda')
    modalAyuda.style.display = 'none'
  })

  tableroUsuario.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
      const index = Array.from(tableroUsuario.children).indexOf(event.target)
      presionarBoton(index)
    }
  })
})
