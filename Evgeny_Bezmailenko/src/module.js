
export default class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    develop() {
        return `Developed: ${this.firstName} ${this.lastName}`;
    }
}

