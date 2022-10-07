"use strict";
const testAge1 = [5, 2, 4, 1, 15, 8, 3];
const testAge2 = [16, 6, 10, 5, 6, 1, 4];

const calcDogAgeAsHuman = function (arr) {
  const humanAges = arr.map((mov) => (mov <= 2 ? 2 * mov : 16 + mov * 4));
  console.log(humanAges);
};
calcDogAgeAsHuman(testAge1);
