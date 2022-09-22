"use strict";
const boardPassengers = function(n, wait) {
  const perGroup = n / 3;

  setTimeout(function() {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups,each with ${perGroup} passengers`);
  }, wait * 3);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
