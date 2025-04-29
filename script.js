// basic calculator functions

function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function divide(a, b) {return a / b;}

// basic calculator variables

let operator = '';
let num1 = '';
let num2 = '';

// basic operate function that calls operator functions

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

// setting up event listeners to number buttons and displaying numbers

const numberButtons = document.querySelectorAll('.numbers');
const displayPanel = document.getElementById('display')

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', (e) => {
    if (displayPanel.textContent == 0) displayPanel.textContent = '';
    displayPanel.textContent += e.target.textContent;
  })
}

// clear button clearing display

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
  displayPanel.textContent = 0;
})

// setting up event listeners to operator buttons and assigning variables

const operatorButtons = document.querySelectorAll('.operators');

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', (e) => {
    operator = e.target.textContent;
    num1 = Number(displayPanel.textContent);
    displayPanel.textContent = 0;
  })
}

let result = '';

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
  num2 = Number(displayPanel.textContent);
  result = operate(operator, num1, num2);
  displayPanel.textContent = result;
})