const promise1 = new Promise((resolve, reject) => reject('Fail...'))
const promise2 = new Promise((resolve, reject) => resolve('yay 1!'))
const promise3 = new Promise((resolve, reject) => resolve('yay 2!'))

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response))

/*
OUT
[
  { status: 'rejected', reason: 'Fail...' },
  { status: 'fulfilled', value: 'yay 1!' },
  { status: 'fulfilled', value: 'yay 2!' }
]
*/
