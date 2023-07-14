// ? Flat
const matriz = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]]
console.log(matriz.flat(0))
// OUT - [ 1, 1, 2, 3, 4, [ 1, 3, 5, 6, [ 1, 2, 4 ] ] ]
console.log(matriz.flat(1))
// OUT - [ 1, 1, 2, 3, 4, 1, 3, 5, 6, [ 1, 2, 4 ] ]
console.log(matriz.flat(Infinity))
// OUT - [ 1, 1, 2, 3, 4, 1, 3, 5, 6, 1, 2, 4 ]


// ? Flatmap
const numbers = [1,2, 3, 4]
numbers.map(number => [number * 2]) 
// [[2], [4], [6], [8]]
numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]
