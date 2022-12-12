//Coding Challenge #2

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  break() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedUS) {
    return (this.speed = speedUS * 1.6);
  }
}

const ford = new Car('ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.break();
ford.speedUS = 50;
console.log(ford);
