// Una variable declarada con var puede ser re-declarada y re-asignada.
var name = 'juanito'
var name = 'lucia'
console.log(name)
name = 'Karen'
console.log(name)

// Una variable declarada con let puede ser re-asignada, pero no re-declarada.
let age = 12 // ✅
age = 20
// let age = 5 -- ❌ • Error, it cannot be re declarated
console.log(age)

// Una variable declarada con const no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.
const city = 'Cartagena' // ✅
// const city = 'Barranquilla' -- ❌
// city = 'Bogotá' -- ❌
console.log(city)

// ========================================

{
  var nameVar = "soy var"
  let nameLet = "soy let"
}
console.log(nameVar)
// console.log(nameLet) -- ❌ ReferenceError: nameLet is not defined

var nameVar = "soy var"
let nameLet = "soy let"
const nameConst = "soy const"

// En variables globales, let y constno guardan sus variables en el objeto global (window, global o globalThis), mientras que var sí los guarda.
globalThis.nameVar    // ✅
globalThis.nameLet    // ❎ undefined
globalThis.nameConst  // ❎ undefined
// ❕ Esto es importante para que no exista re-declaración de variables.
