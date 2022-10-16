"use strict";
const testAge1 = [5, 2, 4, 1, 15, 8, 3];
const testAge2 = [16, 6, 10, 5, 6, 1, 4];

const calcDogAgeAsHuman = function (arr) {
  const humanAges = arr.map((mov) => (mov <= 2 ? 2 * mov : 16 + mov * 4));
  console.log(humanAges);

  const adult = humanAges.filter((mov) => mov >= 18);
  console.log(adult);

  const average = adult.reduce(
    (accu, age, i, arr) => accu + age / arr.length,
    0
  );
  console.log(average);
};
calcDogAgeAsHuman(testAge1);
calcDogAgeAsHuman(testAge2);
