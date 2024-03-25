const submit = document.getElementById('submit');

function clearsFields() {
  document.getElementById('description').value = '';
  document.getElementById('priority').selectedIndex = 0;
}

function removeTaskRow(event) {
  const button = event.target;
  const row = button.closest('tr');
  row.parentNode.removeChild(row);
}

function editTaskCells(event) {
  const cell = event.target;

  if (cell.cellIndex && cell.cellIndex < 3) {
    const currentContent = cell.textContent;

    const input = document.createElement('input');
    input.value = currentContent;

    cell.innerHTML = '';
    cell.appendChild(input);

    input.addEventListener('click', function(event) {
      event.stopPropagation();
    });
    
    input.addEventListener('blur', function() {
      cell.textContent = input.value;
    });

    input.focus();
  }
}

function createTaskRow(status, description, priority) {
  const newRow = document.createElement('tr');
  
  const statusCell = document.createElement('td');
  statusCell.innerHTML = parseInt(status) ? 
    '<span class="icon has-text-info"><input type="checkbox" checked></span>' : 
    '<span class="icon has-text-success"><input type="checkbox"></span>'
  
  const descriptionCell = document.createElement('td');
  descriptionCell.textContent = description;
  
  const priorityCell = document.createElement('td');
  priorityCell.textContent = priority;
  
  const delCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete', 'has-background-danger');
  deleteButton.addEventListener('click', removeTaskRow);
  delCell.appendChild(deleteButton);
  
  newRow.appendChild(statusCell);
  newRow.appendChild(descriptionCell);
  newRow.appendChild(priorityCell);
  newRow.appendChild(delCell);
  newRow.addEventListener('click', editTaskCells);
  
  return newRow;
}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const status = document.querySelector('input[name="status"]:checked').value;
  const description = document.getElementById('description').value;
  const priority = document.getElementById('priority').value;

  if (description.trim() !== '') {
    const table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    const newRow = createTaskRow(status, description, priority);
    table.appendChild(newRow);
    clearsFields();
  }
});
