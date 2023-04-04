//Use constructor to create a bunch of built-in methods to alter an object's(Person) properties
const Person = function(firstAndLast) {
  let fullName = firstAndLast;
  //Get properties
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  }
  this.getLastName = function() {
    return fullName.split(" ")[1];
  }
  this.getFullName = function() {
    return fullName;
  }
  //Set properties
  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  }
  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  }
  this.setFullName = function(name) {
    fullName = name;
  }
};

const bob = new Person('Bob Ross');
