const assert = require('assert');
const { isValidPassword } = require('../app/passwordValidator');

describe('Teste de validação de senha', () => {
  describe('Senhas com sucesso', () => {
    it('Deve aceitar a senha: "A123456a"', () => {
      const password = 'A123456a'
      assert.strictEqual(isValidPassword(password), 'Senha válida');
    });

    it('Deve aceitar a senha: "1BCDEFGh"', () => {
      const password = '1BCDEFGh'
      assert.strictEqual(isValidPassword(password), 'Senha válida');
    });
  });

  describe('Senhas com falha', () => {
    it('Não deve aceitar a senha vazia', () => {
      const password = ''
      assert.strictEqual(isValidPassword(password), 'A senha deve ter no mínimo 8 caracteres');
    });

    it('Não deve aceitar a senha: "A123456" com sete caracteres', () => {
      const password = 'A123456'
      assert.strictEqual(isValidPassword(password), 'A senha deve ter no mínimo 8 caracteres');
    });

    it('Não deve aceitar a senha: "12345678" com apenas números', () => {
      const password = '12345678'
      assert.strictEqual(isValidPassword(password), 'A senha deve conter pelo menos uma letra maiúscula e uma minúscula');
    });

    it('Não deve aceitar a senha: "abcdefgh" com apenas letras minúsculas', () => {
      const password = 'abcdefgh'
      assert.strictEqual(isValidPassword(password), 'A senha deve conter pelo menos uma letra maiúscula e uma minúscula');
    });

    it('Não deve aceitar a senha: "ABCDEFGH" com apenas letras maiúsculas', () => {
      const password = 'ABCDEFGH'
      assert.strictEqual(isValidPassword(password), 'A senha deve conter pelo menos uma letra maiúscula e uma minúscula');
    });

    it('Não deve aceitar a senha: "AbCdEfGh" com a falta de números', () => {
      const password = 'AbCdEfGh'
      assert.strictEqual(isValidPassword(password), 'A senha deve conter pelo menos um número');
    });
  });
});