/**
 * Encontra o maior e o menor valor em um array de números.
 * @param {number[]} arrayOfNumbers - O array de números no qual encontrar o maior e o menor valor. Deve conter exatamente 3 elementos.
 * @returns {string} Retorna uma mensagem contendo o maior e o menor valor encontrados no array, ou uma mensagem de erro se os valores de entrada não forem numéricos ou se o array não tiver 3 elementos.
 */
const findMinMax = (arrayOfNumbers) => {
  const isNumeric = arrayOfNumbers.every((item) => !isNaN(item));

  if (!isNumeric || arrayOfNumbers.length !== 3) return 'Erro: Valores de entrada não são numéricos';

  const result = arrayOfNumbers.sort((a, b) => a - b);
  return `O MAIOR digitado valor é: ${result[result.length-1]} e o MENOR valor digitado é: ${result[0]}`;
}

module.exports = { findMinMax };