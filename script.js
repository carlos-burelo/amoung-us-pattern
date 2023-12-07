document.addEventListener("DOMContentLoaded", function () {
  const robotBoard = document.getElementById("robot")
  const userBoard = document.getElementById("user")
  const startButton = document.getElementById("startButton")
  const winnerModal = document.getElementById("winnerModal")
  const loserModal = document.getElementById("loserModal")
  const countdownBanner = document.getElementById("countdownBanner")
  const countdown = document.getElementById("countdown")
  const boardSize = 4
  const patterns = boardSize + 2
  const totalButtons = boardSize * boardSize
  const robotPattern = []
  let userPattern = []
  let userTurn = false
  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * totalButtons)
  }
  function mostrarPatron() {
    if (!userTurn) {
      userBoard.querySelectorAll("button").forEach((button) => {
        button.classList.remove("on")
      })
      robotPattern.length = 0
      for (let i = 0; i < patterns; i++) {
        let num
        do {
          num = generarNumeroAleatorio()
        } while (robotPattern.includes(num))
        robotPattern.push(num)
        setTimeout(() => {
          robotBoard.children[num].classList.add("on")
          setTimeout(() => {
            robotBoard.children[num].classList.remove("on")
          }, 500)
        }, i * 1000)
      }
      userTurn = true
    }
  }

  function manejarClickUsuario(index) {
    if (userTurn) {
      userBoard.children[index].classList.add("on")
      setTimeout(() => {
        userBoard.children[index].classList.remove("on")
      }, 500)
      userPattern.push(index)
      if (userPattern.length === robotPattern.length) {
        verificarPatron()
      }
    }
  }

  function verificarPatron() {
    const aciertos = robotPattern.every((val, idx) => val === userPattern[idx])
    if (aciertos) {
      winnerModal.style.display = "block"
    } else {
      loserModal.style.display = "block"
    }
    userPattern = []
    userTurn = false
  }

  for (let i = 0; i < totalButtons; i++) {
    const button = document.createElement("button")
    robotBoard.appendChild(button.cloneNode())
    userBoard.appendChild(button.cloneNode())
  }

  robotBoard.addEventListener("click", () => {
    mostrarPatron()
  })

  userBoard.addEventListener("click", (event) => {
    const index = Array.from(userBoard.children).indexOf(event.target)
    if (index !== -1) {
      manejarClickUsuario(index)
    }
  })

  startButton.addEventListener("click", () => {
    countdownBanner.classList.add("show")
    countdownBanner.style.display = "flex"
    let counter = 3
    countdown.textContent = counter
    const countdownInterval = setInterval(() => {
      counter--
      countdown.textContent = counter
      if (counter === 0) {
        countdownBanner.classList.remove("show")
        clearInterval(countdownInterval)
        robotPattern.length = 0
        userPattern.length = 0
        userTurn = false
        countdownBanner.classList.remove("show")
        countdownBanner.style.display = "none"
        mostrarPatron()
      }
    }, 1000)
  })

  const closeModalButtons = document.querySelectorAll(".close")
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      winnerModal.style.display = "none"
      loserModal.style.display = "none"
    })
  })
})
