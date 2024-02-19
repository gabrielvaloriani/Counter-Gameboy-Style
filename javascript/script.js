  function createElement(tagName, className, innerHTML) {
  const element = document.createElement(tagName);
  element.className = className;
  element.innerHTML = innerHTML;
  return element;
}

const currentOperand = document.querySelector('.current-operand');
let curValue = 0;

const operatorsWrapper = document.getElementById('operatorsWrapper');

const btnReset = createElement('button', 'reset-button', 'AC');
const resetDiv = document.querySelector('.reset');
resetDiv.appendChild(btnReset);

operatorsWrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('reset-button')) {
    curValue = 0;
    currentOperand.textContent = curValue;
  } else if (event.target.classList.contains('plus')) {
    curValue++;
  } else if (event.target.classList.contains('minus')) {
    curValue--;
  } else {
    return;
  }
  currentOperand.textContent = curValue;
});

const btnDecrement = createElement('button', 'minus', '-');
const btnIncrement = createElement('button', 'plus', '+');
operatorsWrapper.appendChild(btnDecrement);
operatorsWrapper.appendChild(btnIncrement);

