'use strict';

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

//////////////////////////////////////////////////////
// Object.create
/* 

const PersonProto = {
  calcAge() {
    console.log(`PersonProto:the calc age is: ${2022 - this.birthYear}`);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 1987;
steven.calcAge();

console.log(steven.__proto__ == PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2077);
sarah.calcAge();

 */

//Inheritance Between Two Classes
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
/* 
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.calcAge();
mike.introduce();

 */

//Coding challenge #3
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

//Link to the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeTo = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 10;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h,with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeTo(90);
tesla.accelerate();
console.log(tesla);
 */

// Inheritance ES6
/* 
class StudentCl extends PersonCl {}

const highSchoolStudent = new StudentCl('HighSchoolStudent', 2010);
console.log(highSchoolStudent);

 */

//Another class example
class Account {
  //private fields

  // protected property
  #pin;
  #movements;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property

    this.#pin = pin;
    this.#movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account,${this.owner}`);
  }

  // Public interface
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}

const acc1 = new Account('Jonas', 'Eur', 1111);
console.log(acc1);
