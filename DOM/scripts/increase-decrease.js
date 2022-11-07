document.getElementById('increase-btn').addEventListener('click', function () {
  const value = document.getElementById('value');
  const previousValueText = value.innerText;
  const previousValue = parseInt(previousValueText);
  value.innerText = previousValue + 1;
})
document.getElementById('decrease-btn').addEventListener('click', function () {
  const value = document.getElementById('value');
  const previousValueText = value.innerText;
  const previousValue = parseInt(previousValueText);
  value.innerText = previousValue - 1;
})