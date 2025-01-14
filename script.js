function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // call the Person constructor
  this.jobTitle = jobTitle; // set the jobTitle property on the Employee object
}

// Inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
}

var alice = new Person('Alice', 25);
alice.greet(); // This should log: 'Hello, my name is Alice and I am 25 years old.'

var bob = new Employee('Bob', 30, 'Manager');
bob.jobGreet(); // This should log: 'Hello, my name is Bob, I am 30 years old, and my job title is Manager.'

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;