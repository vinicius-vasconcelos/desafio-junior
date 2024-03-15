const readline = require('readline');
const { calculate } = require('./calculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const parse = (value) => parseFloat(value) || undefined;
const print = (message) => console.log(`Resposta: ${message}`);

rl.question('Primeiro valor:', (value1) => {
  rl.question('Segundo valor: ', (value2) => {
    rl.question(`Escolha a operação: \n [1] - SOMA; \n [2] - SUBTRAÇÃO; \n [3] - MULTIPLICAÇÃO; \n [4] - DIVISÃO; \n:`, (operator) => {
      const number1 = parse(value1);
      const number2 = parse(value2);

      const result = calculate(operator, number1, number2);
      print(result);
      rl.close();
    });
  });
});
