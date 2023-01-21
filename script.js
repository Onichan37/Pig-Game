'use strict';

// Selecting elements
const player0ScoreEl = document.getElementById('score--0');
const player1ScoreEl = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//setting value
/*
player0ScoreEl.textContent = 0;
player1ScoreEl.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
*/

// creating empty variables to run function
let scores, currentScore, activePlayer, playing;

// init function
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  // set values to 0
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  player0ScoreEl.textContent = 0;
  player1ScoreEl.textContent = 0;
  // hide dice image
  diceEl.classList.add('hidden');
  //removing winner
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // setting active player class to player 1
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

//function for switching player's
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// dice roll functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    currentScore += dice;
    diceEl.classList.remove('hidden');
    if (dice !== 1) {
      diceEl.src = `dice-${dice}.png`;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      diceEl.src = `dice-${dice}.png`;
      switchPlayer();
    }
  }
});

// hold button functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if active player's score is >= 100, player wins
    if (scores[activePlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // switch player
      switchPlayer();
    }
  }
});

// new game functionality / resetting all values to it's initial stage
/*
btnNew.addEventListener('click', function () {
  playing = true;
  // hide dice image
  diceEl.classList.add('hidden');

  //removing winner
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  // set values to 0
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById('score--1').textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  // setting active player class to player 1
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});
*/

// new game functionality / resetting all values to it's initial stage
btnNew.addEventListener('click', init);
