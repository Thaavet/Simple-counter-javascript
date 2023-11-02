const total = document.querySelector('#count');
let value = 0;

const btnDecrement = document.querySelector('#minus');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#plus');

btnIncrement.addEventListener('click', () => {
  value++;
  total.textContent = value;
});

btnDecrement.addEventListener('click', () => {
  value--;
  total.textContent = value;
});

btnReset.addEventListener('click', () => {
  value = 0;
  total.textContent = value;
});