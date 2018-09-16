export class Developer {
    constructor(firstname,lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHi() {
        return `Hi, my name is ${this.firstname} ${this.lastname}`;
    }
}