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

//检查email内容是否一致
const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.Io \n";

const checkEmail = function () {
  const normalizedEmail = loginEmail.toLowerCase().trim();

  if (email == normalizedEmail) {
    console.log("邮箱内容正确！");
  } else {
    console.log("邮箱内容不正确");
  }
  console.log(`邮箱标准内容为：${normalizedEmail}`);
};
checkEmail(loginEmail);

//替换功能
const priceGB = "288,97&";
const priceUS = priceGB.replace("&", "$").replaceAll(8, 1);

console.log(priceUS);

const announcement = "Every sen look at me";
announcement.replace("sen", "body");
console.log(announcement);
console.log(announcement.replace("sen", "body"));

// 使用正则表达式进行全部字段替换
const replaceSpeak = announcement.replace(/e/g, "xxx");
console.log(replaceSpeak);

//检查子串是否属于字符串
const newPlane = "Airbus A320neo";
console.log(newPlane.includes("A32"));
console.log(newPlane.startsWith("A32"));
console.log(newPlane.startsWith("Air"));
