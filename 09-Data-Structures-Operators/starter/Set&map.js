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

console.log("-------------------------------------------");
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze,Italy");
// console.log(rest.set(2, "Lisbon,Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get("true"));
