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
