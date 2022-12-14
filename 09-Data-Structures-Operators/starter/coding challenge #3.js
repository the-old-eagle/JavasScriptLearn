"use strict";

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: â½ï¸ GOAL

GOOD LUCK ð
*/

const gameEvents = new Map([
  [17, "â½ï¸ GOAL"],
  [36, "ð Substitution"],
  [47, "â½ï¸ GOAL"],
  [61, "ð Substitution"],
  [64, "ð¶ Yellow card"],
  [69, "ð´ Red card"],
  [70, "ð Substitution"],
  [72, "ð Substitution"],
  [76, "â½ï¸ GOAL"],
  [80, "â½ï¸ GOAL"],
  [92, "ð¶ Yellow card"],
]);

// 1.ä¸ºææé¡¹ç®åå»ºä¸ä¸ªæ°ç»
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.å é¤ç´¢å¼ä¸º64ççé
gameEvents.delete(64);

// 3. "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// æ§å¶å°è¾åºâå¹³åæ¯9åéåçä¸æ¬¡äºä»¶â

console.log(`At event happend,on average,every ${90 / gameEvents.size}minutes`);

// é¢å¤å°æå·§ï¼å©ç¨popè·åæåä¸é¡¹çkey
const time = [...gameEvents.keys()].pop();
console.log(time);
// å®éä¸æ¯èµæç»­äº92åéï¼è¾åºæ´å ç²¾ç¡®ççå®å¹³åå¼
console.log(`At event happend,on average,every ${time / 9}minutes`);

// 4.æè¦æ±å¾ªç¯æå°çéä¿¡æ¯
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "Second";
  console.log(`[${half} HALF]: ${min} , ${event}`);
}
