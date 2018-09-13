import './user.css';

export default class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

  }

  showInfo() {
    return `Developer: ${this.firstName} ${this.lastName} .`;
  }
}
