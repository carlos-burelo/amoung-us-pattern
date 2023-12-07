function generarArreglo(tamano) {
  let arreglo = []
  for (let i = 0; i < tamano; i++) {
    arreglo.push(Math.floor(Math.random() * 9)) // Números aleatorios entre 0 y 8
  }
  return arreglo
}

export default function SCFS(arr = generarArreglo(5)) {
  return arr
}
