"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]}and${this.mainMenu[mainIndex]}will be delivered to ${address}at${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole,21",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
console.log("---------------");

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

let a = 111;
let b = 999;
const obj = { a: 23, b: 4, c: 14 };
({ a, b } = obj);
obj.a = b;
console.log(obj.a);
console.log(a, b);

const arr = [7, 8, 9];
const badNewArr = [1, 2, ...arr];
console.log(...badNewArr);

console.log("-----------------------");

const str = "jonas";
const letters = [...str, " ", "s."];
console.log(...letters);
console.log(...str);

// const ingredients = [
//   // prompt("Let's make pasta!Ingredient 1?"),
//   // prompt("Ingredient 2?"),
// ];
// console.log(ingredients);

// restaurant.orderDelivery(...ingredients);

const newRestaurant = { foundedIn: 1987, ...restaurant, founder: "me" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "me";
console.log(restaurant.name);
console.log(restaurantCopy.name);
// const [start, mainCourse] = restaurant.order(2, 0);
// console.log(start, mainCourse);

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

// const [x, , [y, z]] = nested;
// console.log(x, y, z);

// const [p, q, r = 9] = [1, 2];
// console.log(p, q, r);
