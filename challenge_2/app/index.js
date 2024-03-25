const readline = require('readline');
const { findMinMax } = require('./finder');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Primeiro valor:', (value1) => {
  rl.question('Segundo valor: ', (value2) => {
    rl.question('Terceiro valor: ', (value3) => {
      const arrayOfNumbers = [parseFloat(value1), parseFloat(value2), parseFloat(value3)];
      const result = findMinMax(arrayOfNumbers);
      console.log(result);
      rl.close();
    });
  });
});
