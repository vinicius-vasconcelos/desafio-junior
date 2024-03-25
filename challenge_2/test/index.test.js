const assert = require('assert');
const { findMinMax } = require('../app/finder');

describe('Teste de pesquisar o MAIOR e MENOR valor', () => {
  describe('Casos de sucesso', () => {
    it('Em valores digitados como: 1, 2 e 3, deveria retornar 1 e 3', () => {
      const result = findMinMax([1, 2, 3]);
      assert.strictEqual(result, 'O MAIOR digitado valor é: 3 e o MENOR valor digitado é: 1');
    });
  
    it('Em valores digitados como: -1, 2 e 3, deveria retornar -1 e 3', () => {
      const result = findMinMax([-1, 2, 3]);
      assert.strictEqual(result, 'O MAIOR digitado valor é: 3 e o MENOR valor digitado é: -1');
    });
  
    it('Em valores digitados como: -1, 2 e -3, deveria retornar -3 e 2', () => {
      const result = findMinMax([-1, 2, -3]);
      assert.strictEqual(result, 'O MAIOR digitado valor é: 2 e o MENOR valor digitado é: -3');
    });
  });

  describe('Casos de falha', () => {
    it('Para valores não digitados, deveria retornar um erro', () => {
      const result = findMinMax([]);
      assert.strictEqual(result, 'Erro: Valores de entrada não são numéricos');
    });
  
    it('Para apenas um valor digitado, deveria retornar um erro', () => {
      const result = findMinMax([1]);
      assert.strictEqual(result, 'Erro: Valores de entrada não são numéricos');
    });
  
    it('Para apenas dois valores digitados, deveria retornar um erro', () => {
      const result = findMinMax([1, 2]);
      assert.strictEqual(result, 'Erro: Valores de entrada não são numéricos');
    });
  
    it('Em valores digitados como: "1", 2 e "A", deveria retornar um erro', () => {
      const result = findMinMax(['1', 2, 'A']);
      assert.strictEqual(result, 'Erro: Valores de entrada não são numéricos');
    });
  });
});