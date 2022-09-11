"use strict";
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log("B123"[4]);
console.log(airline.length);
console.log("C1823".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("tugal"));

// 获取子串
console.log(airline.slice(4));
// 不包含最后一个索引，字串长度=7-4=3
console.log(airline.slice(4, 7));

// 在不知道单词长度的情况下分割开单词
console.log(airline.slice(0, airline.indexOf(" ")));
console.log("-------------");
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// 也可以输入负数表示从末尾往前截断
console.log("+++++++++++++++++++++++++++++++++++++++++++++");
console.log(`截断前:${airline}`);
console.log(`截断后：${airline.slice(5, -1)}`);
console.log(airline.slice(2, 15));

// 检查飞机座位是否是中间位置
const checkMiddleSeat = function (seat) {
  // B和E是中间座位
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("你选择的是中间座位！");
  } else {
    console.log("你选择的不是中间座位");
  }
};

checkMiddleSeat("12B");
checkMiddleSeat("12C");

//修复大小写不规范的用户名
const passenger = "jOnAS";

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passenger);
console.log(passengerCorrect);
