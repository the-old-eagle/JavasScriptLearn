const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map(
  (mov, i) => `You ${mov > 0 ? 'deposit' : 'withdraw'}${Math.abs(mov)} `
);
console.log(movementsDescriptions);
