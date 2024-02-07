const currentOperand = document.querySelector('#current-operand');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnIncrement = document.querySelector('#increment');
const btnReset = document.querySelector('#reset');

btnIncrement.addEventListener('click', () => {
  curValue++;
  currentOperand.textContent = curValue;
});

btnDecrement.addEventListener('click', () => {
  curValue--;
  currentOperand.textContent = curValue;
});

btnReset.addEventListener('click', () => {
  curValue = 0;
  currentOperand.textContent = curValue;
});