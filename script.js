'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = '0';
score1El.textContent = '0';
dice.classList.add('hidden');

//Rolling dice functionality/
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById('current--${activePlayer}').textContent =
      currentScore;
    current0EL.textContent = currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
