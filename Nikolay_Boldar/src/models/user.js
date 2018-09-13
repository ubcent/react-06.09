export class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    displayUserName(){
        alert(`Hello, I'm ${this.firstName} ${this.lastName}`);
    }
}