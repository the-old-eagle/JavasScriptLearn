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
console.log(rest.set(2, "Lisbon,Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
console.log("size before delete: " + rest.size);

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

console.log("----------------------------");
const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log("--------------------------------------");
console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);
console.log("size after delete: " + rest.size);

// console.log("=======================================================");
// rest.clear();
// console.log(rest);

console.log("=======================================================");

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

console.log("--------------------------------------------------------------");
const question = new Map([
  ["question", "What is the best programming language in the world?"],
]);
