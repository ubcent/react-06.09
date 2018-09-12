import './user.css';

export class Human {
  constructor(lastName, firstName, patronymic) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
  }

  sayHi() {
    return `Hello, ${this.lastName} ${this.firstName} ${this.patronymic}`;
  }
}

export class GetDate {

  getDate() {
    let currentDate = new Date();
    return currentDate;
  }

}