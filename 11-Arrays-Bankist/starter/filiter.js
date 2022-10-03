const deposit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposit);

// 不用fliter的常规方式
const depositFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositFor.push(mov);
  }
}
console.log(depositFor);

// 使用fliter，但是箭头函数
const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);
