const currentOperand = document.querySelector('.current-operand');
let curValue = 0;

const operatorsWrapper = document.getElementById('operatorsWrapper');


const btnDecrement = document.createElement('button');
btnDecrement.textContent = '-';
btnDecrement.classList.add('minus');
operatorsWrapper.appendChild(btnDecrement);

const btnIncrement = document.createElement('button');
btnIncrement.textContent = '+';
btnIncrement.classList.add('plus');
operatorsWrapper.appendChild(btnIncrement);

operatorsWrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('plus')) {
    curValue++;
  } else if (event.target.classList.contains('minus')) {
    curValue--;
  } else {
    return; 
  }
  currentOperand.textContent = curValue;
});

const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', () => {
  curValue = 0;
  currentOperand.textContent = curValue;
});
