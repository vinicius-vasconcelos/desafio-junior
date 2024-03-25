const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Função assíncrona para fazer uma pergunta ao usuário.
 * @param {string} question - A pergunta a ser exibida ao usuário.
 * @returns {Promise<string>} Uma promessa que resolve com a entrada do usuário.
 */
const asyncQuestion = (question) => new Promise((resolve, _reject) => rl.question(question, (input) => resolve(input)));

/**
 * Fecha a interface de leitura assíncrona.
 */
const closeAsyncQuestion = () => rl.close();

module.exports =  { asyncQuestion, closeAsyncQuestion };