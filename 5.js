export default function HRRN(arr = generarArreglo(5)) {
  const n = arr.length
  const responseRatio = [] // Almacenar las razones de respuesta
  for (let i = 0; i < n; i++) {
    responseRatio.push({
      index: i,
      ratio: (arr[i] + 1) / (i + 1), // Simulando la razón de respuesta
    })
  }
  responseRatio.sort((a, b) => b.ratio - a.ratio)
  const sortedArr = []
  for (let i = 0; i < n; i++) {
    sortedArr.push(arr[responseRatio[i].index])
  }
  return sortedArr
}

function generarArreglo(tamano) {
  let arreglo = []
  for (let i = 0; i < tamano; i++) {
    arreglo.push(Math.floor(Math.random() * 9)) // Números aleatorios entre 0 y 8
  }
  return arreglo
}
