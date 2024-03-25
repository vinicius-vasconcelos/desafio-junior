const { asyncQuestion, closeAsyncQuestion } = require('./asyncReadline');
const { areaCalculation } = require('./functions');

async function main() {
  console.log(`Escolha a opção: 
  [1] - Área do quadrado; 
  [2] - Área do retângulo; 
  [3] - Área do triângulo; 
  [4] - Área do círculo;`);

  let message = 'Erro: Entrada de dados inválida';
  const op = await asyncQuestion('Opção: ');

  switch(op) {
    case '1':
      const side = parseFloat(await asyncQuestion('Lado: '));
      message = isNaN(side) ? message : `Área do quadrado: ${areaCalculation.square(side)}`;
      break;
    case '2':
      const base = parseFloat(await asyncQuestion('Base: '));
      const height = parseFloat(await asyncQuestion('Altura: '));
      message = isNaN(base) || isNaN(height) ? message : `Área do retângulo: ${areaCalculation.rectangle(base, height)}`;
      break;
    case '3':
      const baseT = parseFloat(await asyncQuestion('Base: '));
      const heightT = parseFloat(await asyncQuestion('Altura: '));
      message = isNaN(base) || isNaN(height) ? message : `Área do retângulo: ${areaCalculation.triangle(baseT, heightT)}`;
      break;
    case '4':
      const radius = parseFloat(await asyncQuestion('Raio: '));
      message = isNaN(side) ? message : `Área do círculo: ${areaCalculation. circle(radius)}`;
      break;
    default:
      message = 'Erro: Valores de entrada não são numéricos'
  }

  console.log(message);
  closeAsyncQuestion();
}

main();