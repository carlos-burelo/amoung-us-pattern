export default function RoundRobin() {
  function generarArreglo(tamano) {
    let arreglo = []
    for (let i = 0; i < tamano; i++) {
      arreglo.push(Math.floor(Math.random() * 9)) // Números aleatorios entre 0 y 8
    }
    return arreglo
  }
  function rotarArreglo(arr, rotaciones) {
    for (let i = 0; i < rotaciones; i++) {
      let elemento = arr.shift() // Eliminar el primer elemento del arreglo
      arr.push(elemento) // Agregar el elemento al final del arreglo
    }
    return arr
  }

  const arregloAleatorio = generarArreglo(5)
  const rotaciones = 2
  const arregloOrdenadoRoundRobin = rotarArreglo(arregloAleatorio, rotaciones)
  return arregloOrdenadoRoundRobin
}
