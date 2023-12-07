const tableroUsuario = document.getElementById('tablero-usuario')
const tableroRobot = document.getElementById('tablero-robot')
const inicio = document.getElementById('inicio')

function generarBotones(tablero, cantidad) {
  Array.from({ length: cantidad }).forEach(() => {
    tablero.appendChild(document.createElement('button'))
  })
}
generarBotones(tableroUsuario, 9)
generarBotones(tableroRobot, 9)

const countDownContainer = document.createElement('div')
countDownContainer.classList.add('countdown-container')
const countdown = document.createElement('h1')
countDownContainer.append(countdown)

function showCoutdown() {
  countDownContainer.classList.add('show')
}
