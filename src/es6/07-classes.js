// This is just sugar syntax
class User{
  constructor(name, age){
    this.name = name
    this.age = age
  }
  
  speak(){
    return 'Hey'
  }
  
  greeting(){
    return `${this.speak()} ${this.name}`
  }
  
  get uAge(){
    return this.age
  }
  
  set uAge(val){
    this.age = val
  }
}

const bebeloper = new User('Julio', 43)
bebeloper.greeting()
bebeloper.uAge = 32
