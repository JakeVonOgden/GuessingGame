let randomInteger = Math.floor(Math.random() * 10) + 1;

const tries = document.querySelector('.tries');
const lastGuess = document.querySelector('.lastguess');
const lowHigh = document.querySelector('.lowhigh');

const submit = document.querySelector('.submit');
const tryEl = document.querySelector('.tryEl');

let tryCount = 1;
let resetButton;

function checkTry() {
  let userTry = Number(tryEl.value);
  if(tryCount === 1) {
    tries.textContent = "Previous tries: ";
  }
  tries.textContent += userTry + ' ';

  if(userTry === randomInteger) {
    lastGuess.textContent = "Alright Nostradamus you got it!"
    lastGuess.style.color = 'deepskyblue';
    lowHigh.textContent = '';
    endGame();
  } else if (tryCount === 3) {
    lastGuess.textContent = "You lose, try again?";
    endGame();
  } else {
    lastGuess.textContent = 'NOPE!';
    lastGuess.style.color = 'crimson';
    if(userTry < randomInteger) {
      lowHigh.textContent = "Too Low!";
    } else if (userTry > randomInteger) {
      lowHigh.textContent = "Too High!";

    }
  }

  tryCount++;
  tryEl.value = '';
  tryEl.focus();
}

submit.addEventListener('click', checkTry);

function endGame() {
  tryEl.disabled = true;
  submit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Try again';
  document.body.append(resetButton);
  resetButton.addEventListener('click', newGame);

}
function newGame() {
  tryCount = 1;
  const wrapper = document.querySelectorAll('.wrapper p');
  for (let i=0; i < wrapper.length; i++) {
    wrapper[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  tryEl.disabled = false;
  submit.disabled = false;
  tryEl.value = '';
  tryEl.focus();

  lastGuess.style.color = 'green';
  randomInteger = Math.floor(Math.random() * 10) + 1;
}