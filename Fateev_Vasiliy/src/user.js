import './user.css'

export default class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hello ${this.firstName} ${this.lastName}`
  }
}

/*export class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hi ${this.firstName} ${this.lastName}`
  }
}

export class Alien {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Gamarjoba ${this.firstName} ${this.lastName}`
  }
}*/
