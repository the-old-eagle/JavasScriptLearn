"use strict";

const bubbleSort = function () {
  console.log("bubbleSort函数");
};

const selectionSort = function () {
  console.log("selectionSort函数");
};

const quickSort = function () {
  console.log("quickSort函数");
};

const functionsArray = new Map([
  ["bubbleSort", bubbleSort],
  ["selectionSort", selectionSort],
  ["quickSort", quickSort],
]);

const input = prompt("请输入你想要调用的函数：");

if (functionsArray.has(input)) {
  functionsArray.get(input)();
} else {
  console.log("输入的函数不存在！");
}
