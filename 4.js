export default function SRTF(arr = generarArreglo(5)) {
  const sortedArr = [...arr] // Creamos una copia del arreglo original
  const n = sortedArr.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        const temp = sortedArr[j]
        sortedArr[j] = sortedArr[j + 1]
        sortedArr[j + 1] = temp
      }
    }
  }

  return sortedArr
}

function generarArreglo(tamano) {
  let arreglo = []
  for (let i = 0; i < tamano; i++) {
    arreglo.push(Math.floor(Math.random() * 9))
  }
  return arreglo
}
