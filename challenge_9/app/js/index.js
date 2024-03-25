
function clearsFields() {
  document.getElementById('amount').value = '';
  document.getElementById('tax').value = '';
  document.getElementById('installment').selectedIndex = 0;
}

function createOptionsInSelect(selectBox, totalOptions) {
  for (let i = 1; i <= totalOptions; i++) {
    const option = document.createElement('option');
    option.innerText = `${i}x`;
    option.value = i;
    selectBox.appendChild(option);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const selectBox = document.getElementById('installment');
  const totalOptions = 500;

  createOptionsInSelect(selectBox, totalOptions);
  clearsFields();
});
