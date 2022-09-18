"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers=numPassengers||1;
  // price=price||199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("sl123");
createBooking("sl123", 3, 455);
createBooking("sl123", undefined, 455);

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string:${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("Now is the other function param!", oneWord);

const high5 = function () {
  console.log("🤦‍♂️");
};
document.body.addEventListener("click", high5);

console.log("[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[");
const greet = (greeting) => (name) => {
  console.log(`${greeting}${name}`);
};

const greetHey = greet("Hey ");
greetHey("you");
greet("hello ")("everyBody");

const normalGreet = function (greeting) {
  return function (name) {
    console.log(`new : ${greeting}${name}`);
  };
};
const normal = normalGreet("nervous");
normal(" me");

console.log("))))))))))))))))))))))))))))))))))))))))))00000");
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  // book函数
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(249, "John Schmedtmann");
lufthansa.book(635, "John Smith");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const flightData = [583, "George Cooper"];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);

console.log("=========================================");

const bookEW = book.bind(eurowings);
bookEW(23, "Steve Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("hello");

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

const addTax2 = function (rate, value) {
  return value + value * rate;
};

console.log(addTax2(0.23, 200));

const addVAT2 = addTax.bind(null, 0.23);
console.log(addVAT(200));
