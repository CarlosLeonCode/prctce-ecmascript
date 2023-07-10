// Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre.

function beforeES6(name, age){
  return{
    name: name,
    age: age
  }
}
console.log(beforeES6('Charlie', 12))
// --
function withES6(name, age){
  return { name, age }
}
console.log(withES6('Juan', 24))
