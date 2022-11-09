'use strict';

console.log('sqrt: ' + Math.sqrt(25));
console.log('the way of ** : ' + 25 ** (1 / 2));

console.log('Max: ' + Math.max(5, 38, 42, 3, 56, 2));
console.log('Max also convert the string: ' + Math.max(5, 34, '99', 23));

console.log('the round area: ' + Math.PI * Number.parseFloat('10px') ** 2);

console.log('radom: ' + Math.random() * 6 + 1);

const radomInt = (min, max) =>
  Math.floor(Math.random(10, 20) * (max - min) + 1) + min;

console.log('round: ' + Math.round(23.3));
console.log(Math.round(23.9));

console.log('ceil: ' + Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log('floor(floor is a better choice than trunc): ' + Math.floor(25.6));

console.log((2.7).toFixed(0));
console.log((4.3234511).toFixed(3));
console.log(+(2.348).toFixed(2));
