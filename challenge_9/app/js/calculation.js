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

    const formattedPMT = PMT.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const formattedCET = CET.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const formattedTotal = (CET + amountWithoutMask).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('userInformation').innerHTML = `
    <ul>
      <li>Valor da parcela: ${formattedPMT}</li>
      <li>Custo efetivo total: ${formattedCET}</li>
      <li>Taxa efetiva mensal: ${(im * 100).toFixed(4)} %</li>
      <li>Valor total a ser pago: ${formattedTotal}</li>
    </ul>
    `
  }
});
