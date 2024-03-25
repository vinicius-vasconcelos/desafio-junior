# Desafio iPag - Desenvolvedor(a) Júnior

## 9. Simulador de Financiamento:

* Crie um programa que simule o calculo de financiamento de um imóvel ou veículo, baseado na tabela PRICE.
* O programa deve solicitar o valor total do financiamento, a quantidade de parcelas e a taxa nominal de juros anual.
* O programa deve exibir o valor da parcela, o valor total a ser pago, o custo efetivo total do financiamento e a taxa efetiva mensal.
* O programa deve permitir a simulação de diferentes cenários de financiamento.

Para este exercício utilize as seguintes fórmulas:

* **Valor da parcela**: `PMT = PV * (i / (1 - (1 + i)^-n))`, onde `PMT` é o valor da parcela, `PV` é o valor total financiado, `i` é a taxa de juros mensal efetiva e `n` é a quantidade de parcelas.
* **Custo efetivo total**: `CET = (PMT * n) - PV`, onde `CET` é o custo efetivo total, `PMT` é o valor da parcela e `PV` é o valor total financiado.
* **Taxa efetiva mensal**: `im = (1 + i)^(1/12) - 1`, onde `im` é a taxa de juros mensal efetiva e `i` é a taxa de juros nominal anual.

### Como Executar 🐧

- Execute o programa abrindo o arquivo `index.html` em seu browser.

### Utilização 🧑‍💻👩‍💻

Utilize os _inputs_ para inserir os dados de entrada:

![Executando aplicação](/img/challenge9.png)

#### Inserir dados:

- `Valor Total do Financiamento`: Escreva o valor no _input_;
- `Taxa de Juros Mensal(Nominal)`: Escreva o valor no _input_;
- `N° de Parcelas`: Escolha a quantidade de parcelas no _select box_;
- Pressione `Calcular` para ver o resultado;

![Executando os testes da aplicação](/img/challenge9-test.png)
