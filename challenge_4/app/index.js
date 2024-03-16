const { asyncQuestion, closeAsyncQuestion } = require('./asyncReadline');

async function main() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let guess;
  let message = '';

  console.log('De 1 a 100, qual valor sorteado?', randomNumber);
  guess = parseInt(await asyncQuestion('Palpite:'));

  while (guess !== randomNumber) {
    message = guess > randomNumber ? 'Chute um valor MENOR' : 'Chute um valor MAIOR';
    console.log(`${message}\n------------------------------------------|\n`);
    guess = parseInt(await asyncQuestion('Palpite:'));
  }

  console.log('Parabéns você acertou!!!');
  closeAsyncQuestion();
}

main();