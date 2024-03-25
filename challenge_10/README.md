# Desafio iPag - Desenvolvedor(a) Júnior

## 10. Manipulação de API:

* Utilizando a API REST do GitHub, desenvolva um script que faça uma requisição para obter os repositórios de um usuário e exiba as informações na tela.
* O usuário deve informar o nome do usuário do GitHub.
* O script deve exibir o nome, descrição, linguagem e quantidade de estrelas de cada repositório.

### Como Executar 🐧

> **⚠️ Atenção:** _É necessário ter o Node.js instalado em sua máquina! Caso não o tenha, você pode executá-lo com Docker. As instruções estão disponíveis no arquivo README.md da raiz do projeto._


#### Back-end

> **👀 Observação:** Preencha o arquivo `.env.example` com as variáveis de ambiente e o renomeie para `.env`.

- Entre no diretório `back-end` executando o comando abaixo:

```bash
cd back-end
```

- Com o Node.js devidamente instalado em sua máquina, instale as dependências do projeto executando o comando abaixo:

```bash
npm i
```

- Após finalizar a instalação das dependências, execute o programa com o comando abaixo:

```bash
npm start
```

![Executando os testes da aplicação](/img/challenge10-back.png)

#### Front-end

- Execute o programa abrindo o arquivo `index.html` em seu browser.

![Executando os testes da aplicação](/img/challenge10-front.png)

### Utilização 🧑‍💻👩‍💻

Utilize os _inputs_ para inserir os dados de entrada:

![Executando aplicação](/img/challenge10.png)

#### Inserir dados:

- `Usuário`: Escreva o username no _input_;
- Pressione `Pesquisar` para buscar os dados;

![Executando os testes da aplicação](/img/challenge10-test.png)


> **👀 Observações:** Dois pontos de melhoria: (1) Adicionar pelo menos testes de integração; (2) Adicionar uma paginação no front para melhorar a usabilidade da tabela gerada;