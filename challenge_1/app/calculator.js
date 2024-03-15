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