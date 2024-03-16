const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const asyncQuestion = (question) => new Promise((resolve, _reject) => rl.question(question, (input) => resolve(input)));
const closeAsyncQuestion = () => rl.close();

module.exports =  { asyncQuestion, closeAsyncQuestion };