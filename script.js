function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this.greet());
}

Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
}

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
  console.log(this.jobGreet());
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`;
}

var alice = new Person('Alice', 25);
var bob = new Employee('Bob', 30, 'Manager');

window.Person = Person;
window.Employee = Employee;