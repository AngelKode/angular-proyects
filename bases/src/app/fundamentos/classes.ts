export class Person{
  constructor(
    public name : string,
    private address ?: string
  ){

  }
}

export class Hero{

  constructor(
    public alterEgo : string,
    public age : number,
    public realName : string,
    private person : Person
  ){
  }
}

const person = new Person('Tony Stark')
const ironMan = new Hero('Iron Man',45,'Tony Stark',person)
console.log(ironMan)
