# project 4

## guess the number

``` javascript


const randomNum = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowhi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let noGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //we first check given guess is valid or not
  // alphabets , negative values , more than 100
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a greter than 1 number');
  } else if (guess > 100) {
    alert('please enter a lesss then 100 number');
  } else {
    prevGuess.push(guess);
    if (noGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //actually check given val is lower higher or equal
  if (guess === randomNum) {
    displayMessage('you guessed it right');
    endGame();
  } else if (guess < randomNum) {
    displayMessage('number is too low');
  } else if (guess > randomNum) {
    displayMessage('number is too high');
  }
}

function displayMessage(msg) {
  // we will update value
  lowhi.innerHTML = `<h2> ${msg} </h2>`;
}

function displayGuess(guess) {
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess} ,`;
  noGuess += 1;
  remaining.innerHTML = `${11 - noGuess}`;
}

function newGame() {
  //
  const startbtn = document.querySelector('#startbtn');
  startbtn.addEventListener('click', (e) => {
    e.preventDefault();
    // reset all fields
    prevGuess = [];
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - noGuess}`;
    noGuess = 1;
    lowhi.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  //
  playGame = false;
  userInput.setAttribute('disabled', '');
  p.innerHTML = `<button id="startbtn" >start game again</button>`;
  startOver.appendChild(p);

  newGame();
}



```