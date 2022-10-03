//reduce method test

// const balance = movements.reduce(function (prev, currValue, currIndex, arr) {
//   console.log(`Iteration ${currIndex}:${prev}`);
//   return prev + currValue;
// }, 0);
const balance = movements.reduce((prev, currValue) => prev + currValue, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
};
