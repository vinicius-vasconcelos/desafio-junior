const { asyncQuestion, closeAsyncQuestion } = require('./asyncReadline');
const { isValidPassword } = require('./passwordValidator');

async function main() {
  console.log(`Crie uma senha com as seguintes especificações:
    * A senha deve ter no mínimo 8 caracteres;
    * A senha deve conter pelo menos uma letra maiúscula;
    * A senha deve conter pelo menos uma letra minúscula;
    * A senha deve conter pelo menos um número;
  `);

  const password = await asyncQuestion('senha: ');
  const message = isValidPassword(password);
  console.log(message);
  
  closeAsyncQuestion();
}

main();