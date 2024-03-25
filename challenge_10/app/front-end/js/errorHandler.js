const userInfoDiv = document.getElementById('userInformation');

function displayError(message) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.innerText = message;
  userInfoDiv.appendChild(errorMessage);
}

export { displayError };
