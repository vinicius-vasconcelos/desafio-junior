const assert = require('assert');
const { calculate } = require('../app/calculator');

describe('Teste da calculadora', () => {
  describe('Teste de SOMA', () => {
    it('Deveria somar corretamente 3+2', () => {
      const result = calculate('1', 3, 2);
      assert.strictEqual(result, 5);
    });
  });

  describe('Teste de SUBTRAÇÃO', () => {
    it('Deveria subtrair corretamente 2-3', () => {
      const result = calculate('2', 2, 3);
      assert.strictEqual(result, -1);
    });
  });

  describe('Teste de MULTIPLICAÇÃO', () => {
    it('Deveria multiplicar corretamente 2*3', () => {
      const result = calculate('3', 2, 3);
      assert.strictEqual(result, 6);
    });
  });

  describe('Teste de DIVISÃO', () => {
    it('Deveria dividir corretamente 4/2', () => {
      const result = calculate('4', 4, 2);
      assert.strictEqual(result, 2);
    });

    it('Deveria dividir corretamente 5/3', () => {
      const result = calculate('4', 5, 3);
      assert.strictEqual(result, 1.67);
    });

    it('Deveria dividir corretamente se o numerador for zero', () => {
      const result = calculate('4', 0, 2);
      assert.strictEqual(result, 0.00);
    });

    it('Não deveria dividir se o denominador for zero', () => {
      const result = calculate('4', 5, 0);
      assert.strictEqual(result, 'Erro: Divisão por zero');
    });
  });

  describe('Teste de mensagens de ERRO', () => {
    it('Não deveria realizar nenhuma operação se o primeiro valor não for numérico', () => {
      const result = calculate('1', 'A', 2);
      assert.strictEqual(result, 'Erro: Valores de entrada não são numéricos');
    });
  
    it('Não deveria realizar nenhuma operação se o segundo valor não for numérico', () => {
      const result = calculate('1', 3, 'B');
      assert.strictEqual(result, 'Erro: Valores de entrada não são numéricos');
    });

    it('Não deveria realizar nenhuma operação se o operador não existir', () => {
      const result = calculate('9', 1, 1);
      assert.strictEqual(result, 'Erro: Operador inexistente');
    });
  });
});
