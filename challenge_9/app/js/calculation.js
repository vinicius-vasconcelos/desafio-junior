const submit = document.getElementById('submit');

function calculatePMT(PV, n, i) {
  const PMT = PV * i / (1 - Math.pow(1 + i, -n));
  return PMT;
}

function calculateCET(PMT, n, PV) {
  const CET = PMT * n - PV;
  return CET;
}

function calculateEffectiveMonthlyRate(i) {
  const im = Math.pow((1 + i), (1/12)) - 1;
  return im;
}

function removeMaskAndConvertToFloat(value) {
  const valueWithoutMask = value.replace(/[^\d,]+(?=\d*\.)/g, '').replace(/\./g, '');
  const floatValue = Number.parseFloat(valueWithoutMask.replace(',', '.'));
  return floatValue;
}

function createList(dataObject) {
  const userInformation = document.getElementById('userInformation');
  const ul = document.createElement('ul');
  const messages = {
    formattedPMT: '- Valor da parcela: ',
    formattedCET: '- Custo efetivo total: ',
    formattedIm: '- Taxa efetiva mensal: %',
    formattedTotal: '- Valor total a ser pago: ',
  }
  let li;

  Object.keys(dataObject).forEach((item) => {
    li = document.createElement('li');
    li.innerText = `${messages[item]} ${dataObject[item]}`;
    ul.appendChild(li);
  });

  userInformation.appendChild(ul);
}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const amount = document.getElementById('amount').value;
  const tax = document.getElementById('tax').value;
  const numberOfInstallments = document.getElementById('installment').value;

  if (amount.trim() !== '' && tax.trim() !== '') {
    const amountWithoutMask = removeMaskAndConvertToFloat(amount)
    const taxWithoutMask = removeMaskAndConvertToFloat(tax);
    const numberOfInstallmentsParsed = parseInt(numberOfInstallments);

    const decimalTax = taxWithoutMask / 100;
    const PMT = calculatePMT(amountWithoutMask, numberOfInstallmentsParsed, decimalTax);
    const CET = calculateCET(PMT, numberOfInstallmentsParsed, amountWithoutMask);
    const im = calculateEffectiveMonthlyRate(decimalTax);

    const language = 'pt-BR';
    const option = { style: 'currency', currency: 'BRL' }

    const formattedPMT = PMT.toLocaleString(language, option);
    const formattedCET = CET.toLocaleString(language, option);
    const formattedTotal = (CET + amountWithoutMask).toLocaleString(language, option);
    const formattedIm = (im * 100).toFixed(2);

    createList({formattedPMT, formattedCET, formattedIm, formattedTotal});
  }
});
