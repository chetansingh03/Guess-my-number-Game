'use strict';
console.log(document.querySelector('.message').textContent);
document.querySelector('.guess').value = 10;
document.querySelector('.score').textContent = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const display = function(a) {
    document.querySelector('.message').textContent = a;
};
let score = 20;

document.querySelector('.score').textContent = score;
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        display(' 🙁 Not a valid number');
        //document.querySelector('.message').textContent = '🙁 Not valid number!';
        document.querySelector('body').style.backgroundColor = 'red';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent =
            ' 🎉Contracts You win the game';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.highscore').textContent = guess;
    } else if (guess !== secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent =
                guess > secretNumber ? '📈 Too High!' : '📉Too low!';
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = 'black';
        } else {
            document.querySelector('.message').textContent = 'You loose the game 😂';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    const gues = Number(document.querySelector('.guess').value);
    console.log(gues, typeof gues);
    if (gues === secretNumber) {
        document.querySelector('.message').textContent = 'Start guessing number...';
        document.querySelector('.score').textContent = 20;
        document.querySelector('.guess').value = 10;
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.highscore').textContent = 0;
    } else if (!gues) {
        document.querySelector('.message').textContent = 'Start guessing number...';
        document.querySelector('.score').textContent = 20;
        document.querySelector('.guess').value = 10;
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.highscore').textContent = 0;
    }
});