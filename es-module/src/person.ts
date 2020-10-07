export class Person {
    constructor(public name: String){}
}

export class Student extends Person {
    constructor(name: String, readonly club: String){
        super(name);
    }

    greet(): String{
        return `Hello, I am ${this.name}.\nI belong to ${this.club} club.`
    }
}