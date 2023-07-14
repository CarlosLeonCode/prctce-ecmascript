// El método finally para promesas consiste en ejecutar código 
// después que una promesa haya sido ejecutada como resuelta o rechazada.

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
.finally(() => console.log('Process finished!'))
