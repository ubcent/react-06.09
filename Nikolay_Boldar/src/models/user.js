export class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    displayDeveloper(){
        alert(`Hello, I'm ${this.firstName} ${this.lastName}`);
    }
}