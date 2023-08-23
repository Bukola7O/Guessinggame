const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  const randomNumber = generateRandomNumber(1, 10);

  rl.question('Guess a number between 1 and 10: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Bye!');
      rl.close();
      return;
    }

    const guessedNumber = parseInt(input, 10);

    if (guessedNumber === randomNumber) {
      console.log('You have won!');
    } else {
      console.log(`You have lost! The random number generated is ${randomNumber}.`);
    }

    startGame();
  });
}

startGame();







