"use strict";

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1.为所有项目创建一个数组
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.删除索引为64的球队
gameEvents.delete(64);

// 3. "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 控制台输出“平均每9分钟发生一次事件”

console.log(`At event happend,on average,every ${90 / gameEvents.size}minutes`);

// 额外小技巧：利用pop获取最后一项的key
const time = [...gameEvents.keys()].pop();
console.log(time);
// 实际上比赛持续了92分钟，输出更加精确的真实平均值
console.log(`At event happend,on average,every ${time / 9}minutes`);

// 4.按要求循环打印球队信息
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "Second";
  console.log(`[${half} HALF]: ${min} , ${event}`);
}
