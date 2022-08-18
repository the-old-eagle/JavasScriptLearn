"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// 可选链式操作符练习

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// 检测属性是否存在
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day}, we open at ${open}`);
}

// 检测方法是否存在
console.log(restaurant.order?.(0, 2) ?? "方法不存在");
console.log(restaurant.orderMenu?.(0, 2) ?? "方法不存在");

const users = [{ name: "Jonas", email: "hello@jonas.io" }];

// 检测对象成员是否存在
// 方式一
console.log(users[0]?.name ?? "User array empty");

// 方式二
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log("user attay empty");
}
