function createElement(tag, textContent) {
  const element = document.createElement(tag);
  element.textContent = textContent;
  return element;
}

function createTableHeader() {
  const thName = createElement('th', 'Nome');
  const thDescription = createElement('th', 'Descrição');
  const thLanguage = createElement('th', 'Linguagem');
  const thStart = createElement('th', 'Estrelas');
  
  const tr = document.createElement('tr');
  tr.appendChild(thName);
  tr.appendChild(thDescription);
  tr.appendChild(thLanguage);
  tr.appendChild(thStart);

  const thead = document.createElement('thead');
  thead.appendChild(tr);

  return thead;
}

function createTableRow(repository) {
  const tdName = createElement('td', repository.name);
  const tdDescription = createElement('td', repository.description);
  const tdLanguage = createElement('td', repository.language);
  const tdStars = createElement('td', repository.stars);

  const tr = document.createElement('tr');
  tr.appendChild(tdName);
  tr.appendChild(tdDescription);
  tr.appendChild(tdLanguage);
  tr.appendChild(tdStars);

  return tr;
}

function createTable(repositories) {
  const table = document.createElement('table');
  table.classList.add('table', 'mt-5');

  const thead = createTableHeader();
  const tbody = document.createElement('tbody');

  repositories.forEach((repository) => {
    const tr = createTableRow(repository);
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}

export { createTable };
