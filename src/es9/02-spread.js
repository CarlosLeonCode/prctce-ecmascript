const user = { name: 'Wilmer', age: 12, country: 'CO' }
const { name, ...values } = user
console.log(name)   // OUT - 'Wilmer'
console.log(values) // OUT - { age: 12, country: 'CO' }
