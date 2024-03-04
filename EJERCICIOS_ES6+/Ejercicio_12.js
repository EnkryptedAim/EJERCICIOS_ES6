// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.
// Haz varios ejemplos y compruebalos.
// Sugerencia de función: function findArrayIndex(array, text) {} Ej array:
const mainCharacters1 = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1 // Devuelve -1 si no se encuentra el texto en el array
}

// Ejemplos
const mainCharacters2 = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

console.log(findArrayIndex(mainCharacters, 'Chewbacca')) // Devuelve 3
console.log(findArrayIndex(mainCharacters, 'Yoda')) // Devuelve -1
console.log(findArrayIndex(mainCharacters, 'Leia')) // Devuelve 1
