let initial = 0;
document.getElementById('submit-btn').addEventListener('click', function () {
  const userInput = document.getElementById('user-input');
  const tableBody = document.getElementById('table-body');
  initial++;
  const newElement = document.createElement('tr');
  newElement.innerHTML = `<td class="border-r-2 border-gray-600 px-4 py-2"> ${initial}</td>
  <td class="px-4 py-2">${userInput.value}</td>
  <td class="border-l-2 border-gray-600 px-4 py-2">Users Name</td>`
  tableBody.appendChild(newElement);
})