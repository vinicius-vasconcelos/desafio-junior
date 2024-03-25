import { createTable } from './createTable.js';

const userInfoDiv = document.getElementById('userInformation');

function createElement(tag, textContent, className) {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  element.textContent = textContent;
  return element;
}

function createHeader(data) {
  const h1 = createElement('h1', data.name, 'title');
  const h2 = createElement('h2', `@${data.login}`, 'subtitle');
  const paragraph = createElement('p', data.bio);
  return [h1, h2, paragraph];
}

function displayUserInfo(data) {
  clearUserInfo();
  const headerElements = createHeader(data);
  headerElements.forEach((element) => userInfoDiv.appendChild(element));
  userInfoDiv.appendChild(createTable(data.repositories));
}

function clearUserInfo() {
  userInfoDiv.innerHTML = '';
}

export { displayUserInfo, clearUserInfo };
