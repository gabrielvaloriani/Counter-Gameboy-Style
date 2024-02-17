const currentOperand = document.querySelector('.current-operand');
let curValue = 0;

const operatorsWrapper = document.getElementById('operatorsWrapper');

// Creazione dei pulsanti +/- tramite JavaScript
const btnDecrement = document.createElement('button');
btnDecrement.textContent = '-';
btnDecrement.classList.add('minus');
operatorsWrapper.appendChild(btnDecrement);

const btnIncrement = document.createElement('button');
btnIncrement.textContent = '+';
btnIncrement.classList.add('plus');
operatorsWrapper.appendChild(btnIncrement);

// Aggiunta dell'Event Delegation per gestire i click sui pulsanti tramite il wrapper
operatorsWrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('plus')) {
    curValue++;
  } else if (event.target.classList.contains('minus')) {
    curValue--;
  } else {
    return; // Se il click non è su un pulsante +/-, usciamo dalla funzione
  }
  currentOperand.textContent = curValue;
});

const btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', () => {
  curValue = 0;
  currentOperand.textContent = curValue;
});
