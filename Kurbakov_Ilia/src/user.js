import './user.css';

export class Human{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    sayHi(){
        return `Hi, ${this.firstname} ${this.lastname}`;
    }
}