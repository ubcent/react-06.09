class Human {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

export class Delevoper extends Human {
    constructor(firstName, lastName){
        super(firstName, lastName);
    }

    getInfo(){
        return `Developer is ${super.fullName}`;
    }
}