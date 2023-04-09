const numbers = document.querySelectorAll(".number-input");
const operators = document.querySelectorAll(".operator-input");
const equals = document.getElementById("equals");
const decimal = document.getElementById("decimal");
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

function clearCurrentDisplayNumber() {
  if (operatorClickedStatus === true && numberB === "") {
    calculatorDisplay.textContent = "";
  }
}

decimal.addEventListener('click', (e) => {
  if (!numberA.toString().includes(".") && operatorClickedStatus === false) {
    numberA += e.target.textContent
    calculatorDisplay.textContent += e.target.textContent;
  } else if (!numberB.includes(".") && operatorClickedStatus === true) {
    numberB += e.target.textContent
    calculatorDisplay.textContent += e.target.textContent;
  };
})

const numberClicked = numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    clearCurrentDisplayNumber();
    if (operatorClickedStatus === false) {
      numberA += e.target.textContent;
    } else {
      numberB += e.target.textContent;
    }
    calculatorDisplay.textContent += e.target.textContent;
  });
});

const operatorClicked = operators.forEach(operator => {
  operator.addEventListener("click", (e) => {
    operatorClickedStatus = true;
    if (numberB !== "") startOperate();
    operatorToUse = e.target.textContent;
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
