'use strict';

const drawnNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = drawnNumber;
let score = 10;

document.querySelector('.score').textContent = score;

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
