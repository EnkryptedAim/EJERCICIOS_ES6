// Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random()

function rollDice(numCaras) {
  if (numCaras <= 1) {
    console.log('El dado debe tener al menos 2 caras.')
    return null
  }

  const resultado = Math.floor(Math.random() * numCaras) + 1
  return resultado
}

// Ejemplo
const numCarasDado = 6
const resultadoTirada = rollDice(numCarasDado)

if (resultadoTirada !== null) {
  console.log(
    `Tiraste un dado de ${numCarasDado} caras y obtuviste: ${resultadoTirada}`
  )
}
