"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.循环遍历game.scored数组
const entries = game.scored.entries();

for (const [key, name] of entries) {
  console.log(`Goal ${key}: ${name}`);
}

// 2.使用循环计算平均胜率
let average = 0;
const aveValues = Object.values(game.odds);
for (const odd of aveValues) {
  average += odd;
}
console.log(`三组胜率为${average / aveValues.length}`);

// 3.格式化输出三种胜率
for(const [team,odd] of Object.entries(game.odds)){
  console.log();
  console.log();
}

// // 为每个队伍创建一个数组

// const [players1, players2] = game.players;
// console.log(players1);

// // 创建守门员变量‘gk’和剩下的成员变量数组fieldPlayers
// const [gk, ...fieldPlayers] = players1;

// // 创建包含所有成员的数组allPlayers
// const allPlayers = [...players1, ...players2];

// // 创建额外三个替补的队伍1数组
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// // 嵌套解构，创建赔率等三个变量
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// // 传入任意数量的球员姓名，并将总人数作为得分数连同姓名一同打印到控制台
// const printGoals = function (...players) {
//   console.log(...players);
//   console.log(`${players.lngth} goals were scored`);
// };

// // 不用if-else，判断谁的赔率更低
// team1 < team2 && console.log("team 1 is more likely to win!");
// team1 > team2 && console.log("team 2 is more likely to win!");

// const menu = [...game.scored];
// for (const item of menu.entries()) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
