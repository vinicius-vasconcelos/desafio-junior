const submit = document.getElementById('submit');
const usernameInput = document.getElementById('username');
const userInfoDiv = document.getElementById('userInformation');
const API_BASE_URL = 'http://localhost:3003/user/';

function clearField() {
  usernameInput.value = '';
}

function clearUserInfo() {
  while (userInfoDiv.firstChild)
    userInfoDiv.removeChild(userInfoDiv.firstChild);
}

function displayError(message) {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.innerText = message;
  userInfoDiv.appendChild(errorMessage);
}

function displayUserInfo(data) {
  const h1 = document.createElement('h1');
  h1.classList.add('title');
  h1.innerText = data.name;
  
  const h2 = document.createElement('h2');
  h2.classList.add('subtitle');
  h2.innerText = `@${data.login}`;
  
  const paragraph = document.createElement('p');
  paragraph.innerText = data.bio;
  
  userInfoDiv.appendChild(h1);
  userInfoDiv.appendChild(h2);
  userInfoDiv.appendChild(paragraph);
}

async function fetchData(username) {
  try {
    const response = await fetch(API_BASE_URL + username);
    const userData = await response.json();
    if (userData.error) throw userData.error;
    displayUserInfo(userData);
  } catch (error) {
    displayError(error);
  }
}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  if (username !== '') fetchData(username);

  clearUserInfo();
  clearField();
});
