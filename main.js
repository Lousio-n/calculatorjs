const numbers = document.querySelectorAll(".number-input");
const operators = document.querySelectorAll(".operator-input");
const equals = document.getElementById("equals");
const calculatorDisplay = document.getElementById("calculator-display");
const resetButton = document.getElementById("reset-button");
const undoButton = document.getElementById("undo-button");

let operatorToUse;
let operatorClickedStatus = false;
let numberA = "";
let numberB = "";
let calculatedNumber;

function clearCalculatorDisplay() {
  calculatorDisplay.textContent = "";
  operatorClickedStatus = false;
  numberA = "";
  numberB = "";
  calculatedNumber = undefined;
};

function clearInput() {
  calculatorDisplay.textContent = "";
  operatorClickedStatus = false;
  numberA = "";
  numberB = "";
};

function operate(a, b) {
  if (operatorToUse === '+') return a + b;
  if (operatorToUse === '-') return a - b;
  if (operatorToUse === '*') return a * b;
  if (operatorToUse === '/') return a / b;
};

const numberClicked = numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    if (operatorClickedStatus === false) {
      numberA += e.target.textContent;
    } else {
      numberB += e.target.textContent;
    }

    console.log(numberA, numberB);
/* 
    if (calculatedNumber !== undefined) {
      calculatorDisplay.textContent = "";
      calculatedNumber = undefined;
    }  */
    calculatorDisplay.textContent += e.target.textContent;
  });
});

const operatorClicked = operators.forEach(operator => {
  operator.addEventListener("click", (e) => {
    operatorClickedStatus = true;
    if (calculatedNumber !== undefined) {
      numberA = calculatedNumber;
      calculatorDisplay.textContent = numberA;
    }
    operatorToUse = e.target.textContent;
    calculatorDisplay.textContent += ` ${e.target.textContent} `;
  });
});

equals.addEventListener("click", () => {
  calculatedNumber = operate(+numberA, +numberB);
  calculatorDisplay.textContent = calculatedNumber;
  numberA = "";
  numberB = "";
});

resetButton.addEventListener("click", () => {
  clearCalculatorDisplay();
});

undoButton.addEventListener("click", () => {
  clearInput();
});