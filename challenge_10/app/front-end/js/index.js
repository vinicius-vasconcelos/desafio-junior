import { fetchData } from './fetchData.js';
import { displayUserInfo, clearUserInfo } from './displayData.js';
import { displayError } from './errorHandler.js';

const submit = document.getElementById('submit');

const handleSubmit = async () => {
  event.preventDefault();
  const usernameInput = document.getElementById('username');
  const username = usernameInput.value.trim();
  
  if (!username) {
    clearUserInfo();
    displayError('Por favor, insira um nome de usuário.');
    return;
  }

  clearUserInfo();
  try {
    const userData = await fetchData(username);
    displayUserInfo(userData);
  } catch (error) {
    displayError(error);
  } finally {
    usernameInput.value = '';
  }

};

submit.addEventListener('click', handleSubmit);
