// ? Arrays destructuring
let fruits = ['apple', 'Banana']
let [a, b] = fruits
console.log(a, b)

// ? Object destructuring
let user = { name: 'Charlie', age: 32 }
let { name, age } = user
console.log(name, age)

// ? Propagación
const person = { name: 'Wilmer', age: 12 }
const country = 'Australia'
const data = {id: 1, ...person, country}
console.log(data)

// ? Rest params
function values(first, ...vals){
  console.log(first)
  console.log(vals) // It is an Array
}
values(1, 24, 3, 5, 32, 64)
