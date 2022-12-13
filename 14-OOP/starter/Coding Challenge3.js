//Coding challenge #3
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
