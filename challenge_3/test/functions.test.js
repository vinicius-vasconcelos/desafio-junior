const assert = require('assert');
const { areaCalculation } = require('../app/functions');

describe('Cálculo de Área', () => {
  describe('Quadrado', () => {
    it('Deve calcular a área de um quadrado com entrada igual a 4', () => {
      assert.strictEqual(areaCalculation.square(4), 16);
    });
  });

  describe('Retângulo', () => {
    it('Deve calcular a área de um retângulo com entradas igual a 4 e 6', () => {
      assert.strictEqual(areaCalculation.rectangle(4, 6), 24);
    });
  });

  describe('Triângulo', () => {
    it('Deve calcular a área de um triângulo com entradas igual a 4 e 6', () => {
      assert.strictEqual(areaCalculation.triangle(4, 6), 12);
    });
  });

  describe('Círculo', () => {
    it('Deve calcular a área de um círculo com entrada igual a 10', () => {
      assert.strictEqual(areaCalculation.circle(10), Math.PI * 100);
    });
  });
});