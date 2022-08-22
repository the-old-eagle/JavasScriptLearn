"use strict";

const ordersSet = new Set(["pasta", "pizza", "pizza", "risotto", "pizza"]);
console.log(ordersSet);

//.has function
console.log(ordersSet.has("bread"));
ordersSet.add("bread");
console.log(ordersSet.has("bread"));
console.log(ordersSet.has("pasta"));

//.delte function
ordersSet.delete("pizza");
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

console.log("-------------------");
const staff = ["Waiter", "chef", "waiter", "Waiter"];
const staffUnique = [...new Set(staff)];
// const staffUnique = new Set(staff);
console.log(staffUnique);

console.log(new Set("jisglajklajfgklajdfklajljkjklkjdksj").size);
