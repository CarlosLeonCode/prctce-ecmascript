// Pasar de array de arrays a objeto 
const entries = [["name", "Carlos"], ["age", 24], ["city", "Racoon"]]
console.log(Object.fromEntries(entries))
// OUT -> { name: 'Carlos', age: 24, city: 'Racoon' }
