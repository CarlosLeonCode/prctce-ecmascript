const promise1 = new Promise((resolve, reject) => reject('Fail...'))
const promise2 = new Promise((resolve, reject) => resolve('yay 1!'))
const promise3 = new Promise((resolve, reject) => resolve('yay 2!'))

// Catch the first success promise
Promise.any([promise1, promise2, promise3])
.then(response => console.log(response))
// OUT -> yay 1!
