
var container = document.createElement('div');
container.className = 'container';

var counterBody = document.createElement('div');
counterBody.className = 'counter-body';

var count = document.createElement('h1');
count.id = 'count';
count.textContent = '0';

var counterButton = document.createElement('div');
counterButton.className = 'counter-button';

var minusButton = document.createElement('button');
minusButton.id = 'minus';
minusButton.textContent = '-';

var resetButton = document.createElement('button');
resetButton.id = 'reset';
resetButton.textContent = 'Reset';

var plusButton = document.createElement('button');
plusButton.id = 'plus';
plusButton.textContent = '+';

counterButton.appendChild(minusButton);
counterButton.appendChild(resetButton);
counterButton.appendChild(plusButton);

counterBody.appendChild(count);
counterBody.appendChild(counterButton);

container.appendChild(counterBody);

document.body.appendChild(container);


const total = document.getElementById('count');
let value = 0;

const btnIncrement = document.getElementById('plus');
const btnDecrement = document.getElementById('minus');
const btnReset = document.getElementById('reset');

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