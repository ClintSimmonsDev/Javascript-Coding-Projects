class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName(){
        return this.firstName + " " +this.lastName;
    }
}

var me = new Person('Keel', 'Simons');

console.log(me.getName());