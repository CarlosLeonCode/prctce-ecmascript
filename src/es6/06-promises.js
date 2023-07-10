// Una promesa es una forma de manejar el asincronismo en JavaScript y se representa
// como un objeto que puede generar un valor único a futuro, que tiene dos estados, resuelta o rechazada

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey, it is okay!')
    } else {
      reject('whoops, something went wrong...')
    }
  })
}

anotherFunction()
.then(response => console.log(response))
.catch(err => console.error(err))
