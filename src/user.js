import './user.css';

export default class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  }
}
