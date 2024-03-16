const hasValidLength = (password) => password.length >= 8;
const hasCharacterType = (password, regex) => regex.test(password);

const hasCapitalLetter = (password) => hasCharacterType(password, /[A-Z]/);
const hasLowercaseLetter = (password) => hasCharacterType(password, /[a-z]/);
const hasNumber = (password) => hasCharacterType(password, /\d/);

const isValidPassword = (password) => {
  if (!hasValidLength(password)) return 'A senha deve ter no mínimo 8 caracteres';
  if (!hasCapitalLetter(password) || !hasLowercaseLetter(password)) return 'A senha deve conter pelo menos uma letra maiúscula e uma minúscula';
  if (!hasNumber(password)) return 'A senha deve conter pelo menos um número';
  
  return 'Senha válida';
}

module.exports = { isValidPassword };
