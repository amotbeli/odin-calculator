function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function divide(a, b) {return a / b;}

let operator = '';
let num1 = 0;
let num2 = 0;

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

const numberButtons = document.querySelectorAll('.numbers');
const displayPanel = document.getElementById('display')

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', (e) => {
    if (displayPanel.textContent == 0) displayPanel.textContent = '';
    displayPanel.textContent += e.target.textContent;
  })
}

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  displayPanel.textContent = 0;
})