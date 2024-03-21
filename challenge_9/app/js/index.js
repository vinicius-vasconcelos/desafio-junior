
function clearsFields() {
  document.getElementById('amount').value = '';
  document.getElementById('tax').value = '';
  document.getElementById('installment').selectedIndex = 0;
}

function createOptionsInSelect(selectBox, totalOptions) {
  for (let increment = 1; increment <= totalOptions; increment++) {
    const option = document.createElement('option');
    option.innerText = `${increment}x`;
    option.value = increment;
    selectBox.appendChild(option);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const selectBox = document.getElementById('installment');
  const totalOptions = 500;

  createOptionsInSelect(selectBox, totalOptions);
  clearsFields();
});
