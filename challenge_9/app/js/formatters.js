function formatValue(input, options) {
  const charactersRemoved = input.value.replace(/\D/g, '');
  const onlyNumbers = charactersRemoved.replace(/(\d+)(\d{2})$/, '$1,$2');
  const replacedValue = onlyNumbers.replace(options.regex, options.replacement);
  input.value = replacedValue;
}

const currencyOptions = {
  regex: /(\d)(?=(\d{3})+(?!\d))/g,
  replacement: '$1.'
};

const taxOptions = {
  regex: /(\.\d{2})\d+/,
  replacement: '$1'
};

function formatCurrency(input) {
  formatValue(input, currencyOptions);
}

function formatTax(input) {
  formatValue(input, taxOptions);
}
