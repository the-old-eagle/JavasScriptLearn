'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉Correct number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//变量定义区
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// 函数定义区
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const lost = function () {
  document.querySelector('.message').textContent = 'you lost!💥';
  document.querySelector('.score').textContent = 0;
};

// 点击Check按钮触发事件
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //输入不符合要求
  if (guess > 20 || guess <= 0) {
    document.querySelector('.message').textContent =
      'The number you put is incorrect!❌';
  } else if (!guess) {
    document.querySelector('.message').textContent =
      'You must input a  number!😅';
  }

  // 猜对
  else if (guess === secretNumber) {
    //提示信息变化
    document.querySelector('.message').textContent = '🎉Correct number!';
    document.querySelector('.number').textContent = secretNumber;

    //外观变化
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // 保留高分
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // 猜得不对
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? (document.querySelector('.message').textContent = 'too high!♐')
        : (document.querySelector('.message').textContent = 'too low!〽↘');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      lost();
    }
  }

  // 不正确的数字
  else {
    document.querySelector('.message').textContent = 'incorrect number!😣';
  }
});

// 点击Again按钮触发事件
document.querySelector('.again').addEventListener('click', function () {
  //重置分数和要猜的数字
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //重置页面提示信息
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //恢复页面外观颜色
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
