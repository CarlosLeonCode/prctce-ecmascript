// Template literals or called interpolation, allows concatenate strings
let hello = 'hello'
let world = 'world'

// Before ES6
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

// With ES6
let template = `${hello} ${world}`
console.log(template)

// Multi-line strings
// Before ES6
let lorem1 = 'Esta es un frase \n ' + ' con 2 lineas'
console.log(lorem1)

// With ES6
let lorem2 = `Esta frase usa
template strings 
`
console.log(lorem2)
