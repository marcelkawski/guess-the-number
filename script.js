'use strict';

const initialScore = 10;
const defaultMessage = document.querySelector('.message').textContent;
const defaultBackgroundColor =
  document.querySelector('body').style.backgroundColor;
const defaultNumberBoxValue = document.querySelector('.number').textContent;
const defaultNumberBoxWidth = document.querySelector('.number').style.width;

const initializeGame = function () {
  const drawnNumber = drawNumber();
  const score = initialScore;
  return [drawnNumber, score];
};

const resetGame = function () {
  drawnNumber = drawNumber();
  document.querySelector('.number').textContent = defaultNumberBoxValue;
  score = initialScore;

  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = defaultMessage;
  document.querySelector('body').style.backgroundColor = defaultBackgroundColor;
  document.querySelector('.number').style.width = defaultNumberBoxWidth;
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  // no input provided
  if (guess === '')
    document.querySelector('.message').textContent = 'No number ☹️';
  // number input (It is not possible to input anything else in an input element marked as type="number" in HTML code.)
  else {
    const guessNum = Number(guess);
    // guessed
    if (guessNum === drawnNumber) {
      document.querySelector('.message').textContent = 'Correct number! 🥇';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = drawnNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      // lost
      if (score === 0)
        document.querySelector('.message').textContent = 'You lost ☠️';
      // not guessed
      else {
        if (guessNum > drawnNumber)
          document.querySelector('.message').textContent = 'Too high ⏬';
        else if (guessNum < drawnNumber)
          document.querySelector('.message').textContent = 'Too low ⏫';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});

const drawNumber = () => Math.trunc(Math.random() * 20) + 1;

// let drawnNumber = drawNumber();
// // document.querySelector('.number').textContent = drawnNumber;
// let score = initialScore;

let [drawnNumber, score] = initializeGame();
