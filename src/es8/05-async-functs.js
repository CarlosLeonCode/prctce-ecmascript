const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Petition done!', 2000))
      : reject(new Error('Ooops!'))
  })
}

const anotherFn = async () => {
  const something = await fnAsync()
  console.log(something)
  console.log('async fn resolved!')
}

console.log('before')
anotherFn()
console.log('after')
