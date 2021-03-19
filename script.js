let blindNumber = Math.ceil(Math.random() * 20);
let score = 20;
console.log(blindNumber);
document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.textbox').value);
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'No number👀';
  } else if (guessNumber === blindNumber) {
    document.querySelector('.message').textContent = 'correct number🥳';
  } else {
    document.querySelector('.message').textContent =
      guessNumber > blindNumber ? 'Too High :(' : 'Too Low :(';
    if (score > 1) {
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost😢';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  blindNumber = Math.ceil(Math.random() * 20);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.textbox').value = '';
});
