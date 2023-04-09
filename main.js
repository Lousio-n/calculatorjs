const numbers = document.querySelectorAll(".number-input");
const operators = document.querySelectorAll(".operator-input");
const equals = document.getElementById("equals");
const calculatorDisplay = document.getElementById("calculator-display");
const resetButton = document.getElementById("reset-button");

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

function startOperate() {
  calculatedNumber = operate(+numberA, +numberB);
  calculatorDisplay.textContent = calculatedNumber;
  numberA = calculatedNumber;
  numberB = "";
}

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
    if (calculatorDisplay.textContent.includes(".") 
    && e.target.textContent === ".") {
      e.preventDefault();
    } else {
      calculatorDisplay.textContent += e.target.textContent;
    };
  });
});

const operatorClicked = operators.forEach(operator => {
  operator.addEventListener("click", (e) => {
    operatorClickedStatus = true;
    if (numberB !== "") startOperate();
    operatorToUse = e.target.textContent;
    calculatorDisplay.textContent += ` ${e.target.textContent} `;
  });
});

equals.addEventListener("click", (e) => {
  if (operatorClickedStatus === false || numberB === "") {
    e.preventDefault();
  } else startOperate();
});

resetButton.addEventListener("click", () => {
  clearCalculatorDisplay();
});
