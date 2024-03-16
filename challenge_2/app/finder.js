const findMinMax = (arrayOfNumbers) => {
  const isNumeric = arrayOfNumbers.every((item) => !isNaN(item));

  if (!isNumeric || arrayOfNumbers.length !== 3) return 'Erro: Valores de entrada não são numéricos';

  const result = arrayOfNumbers.sort((a, b) => a - b);
  return `O MAIOR digitado valor é: ${result[result.length-1]} e o MENOR valor digitado é: ${result[0]}`;
}

module.exports = { findMinMax };