/**
 * Calcula o resultado de uma operação matemática entre dois números.
 * @param {string} operator - O operador da operação a ser realizada. Pode ser '1' para adição, '2' para subtração, '3' para multiplicação ou '4' para divisão.
 * @param {number} number1 - O primeiro número na operação.
 * @param {number} number2 - O segundo número na operação.
 * @returns {(number|string)} Retorna o resultado da operação ou uma mensagem de erro, se houver.
 */
const calculate = (operator, number1, number2) => {
  if (isNaN(number1) || isNaN(number2)) return 'Erro: Valores de entrada não são numéricos';
  
  switch (operator) {
    case '1':
      return number1 + number2;
    case '2':
      return number1 - number2;
    case '3':
      return number1 * number2;
    case '4':
      if(number2 === 0)
        return 'Erro: Divisão por zero';
      const div = number1/number2;
      return parseFloat(div.toFixed(2)); 
    default:
      return 'Erro: Operador inexistente';
  }
}

module.exports = { calculate };