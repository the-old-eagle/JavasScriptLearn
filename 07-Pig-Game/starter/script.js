'use strict';

//选择元素
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currtrn0E1 = document.querySelector('#current--0');
const currtrn1E1 = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let ifWin = false;

//初始条件
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currtrnScore = 0;
let activePlayer = 0;

//相关函数定义

// ------掷骰子函数-------
const rollDice = function () {
  if (!ifWin) {
    // 1.生成一个随机数（1-6）
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2.根据生成的随机数展示相应图片
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);
    // 3.如果掷骰子点数为1，则切换到另一个玩家
    if (dice !== 1) {
      currtrnScore += dice;

      document.querySelector(`#current--${activePlayer}`).textContent =
        currtrnScore;
    } else if (dice === 1) {
      currtrnScore = 0;

      document.querySelector(`#current--${activePlayer}`).textContent =
        currtrnScore;

      //切换玩家
      switchPlayer();
    }
  }
};

// ------接受当前分数函数-------
const holdScore = function () {
  if (!ifWin) {
    // 当前分数记录到总分
    scores[`${activePlayer}`] += currtrnScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[`${activePlayer}`];
    // 接受后分数清零
    currtrnScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currtrnScore;

    // 判断总分是否达到胜利条件

    // 胜利：更换背景，隐藏骰子
    if (scores[`${activePlayer}`] >= 5) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--winner');

      diceEl.classList.add('hidden');

      ifWin = true;
    }
    // 还未胜利：切换到下一玩家
    else {
      // 切换玩家
      switchPlayer();
    }
  }
};

// ------切换玩家函数-------
const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// ---------开始新游戏函数----------
const newGame = function () {
  // 分数清零
  currtrnScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currtrn0E1.textContent = 0;
  currtrn1E1.textContent = 0;

  // 恢复界面背景颜色
  if (ifWin) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--winner');
  }

  // 重置开始的玩家为玩家一
  activePlayer = 0;

  //重置输赢状态 ，隐藏骰子
  ifWin = false;
  diceEl.classList.add('hidden');
};

// ----------------------------------------------------------------

//掷骰子功能
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', newGame);
