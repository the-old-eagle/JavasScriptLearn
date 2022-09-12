"use strict";

const name = "jons jim";
console.log(name.split(" ").join("-"));

const [firstname, lastname] = "jhon smith".split(" ");

const newName = ["Mr.", firstname, lastname.toUpperCase()].join(" ");
console.log(newName);

// 把所有单词第一个字母大写
const capitalizeName = function (name) {
  const splitName = name.split(" ");
  const splitNames = [];

  for (let i = 0; i < splitName.length; i++) {
    splitNames.push(splitName[i][0].toUpperCase() + splitName[i].slice(1));
  }
  console.log(splitNames.join(" "));
};
capitalizeName("jaee snn dsjgi kjf");

//教程答案
const capitalizeNameRight = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};
capitalizeNameRight("jakdj iiek kslg");

// 补全指定字符串使得长度一致
const message = "go to gate 23";
console.log(message.padStart(30, "+").padEnd(45, "+"));

//加密账号，只显示后四位数字
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);

  console.log(last.padStart(str.length, "*"));
};

maskCreditCard("28394858");
