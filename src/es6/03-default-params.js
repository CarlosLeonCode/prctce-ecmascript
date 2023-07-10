// Before ES6
function newUser(name, age, country){
  var name = name || 'Charlie'
  var age = age || 28
  var country = country || 'UK'
  console.log(name, age, country)
}
newUser()
newUser('Carolina', 25, 'MX')

// With ES6
function newAdmin(name = 'root', password = '123456'){
  console.log(name, password)
}
newAdmin()
newAdmin('Pedrito', 'raton123')
