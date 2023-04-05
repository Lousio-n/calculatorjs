const numbers = document.querySelectorAll(".number-input");
const operators = document.querySelectorAll(".operator-input");
const equals = document.getElementById("equals");
const input = document.getElementById("calculation-input");
const output = document.getElementById("calculation-output");
const resetButton = document.getElementById("reset-button");
const undoButton = document.getElementById("undo-button");

let operatorToUse;
let operatorClickedStatus = false;
let numberA = "";
let numberB = "";
let calculatedNumber;

function clearInputOutput() {
  output.textContent = "";
  input.textContent = "";
  operatorClickedStatus = false;
  numberA = "";
  numberB = "";
};

function clearInput() {
  input.textContent = "";
  operatorClickedStatus = false;
  numberA = "";
  numberB = "";
}

function operate(a, b) {
  if (operatorToUse === '+') return a + b;
  if (operatorToUse === '-') return a - b;
  if (operatorToUse === '*') return a * b;
  if (operatorToUse === '/') return a / b;
}

const numberClicked = numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    if (operatorClickedStatus === false) {
      numberA += e.target.textContent;
    } else {
      numberB += e.target.textContent;
    }
    input.textContent += e.target.textContent;
  });
});

const operatorClicked = operators.forEach(operator => {
  operator.addEventListener("click", (e) => {
    operatorClickedStatus = true;
    operatorToUse = e.target.textContent;
    input.textContent += ` ${e.target.textContent} `;
  });
});

equals.addEventListener("click", () => {
  calculatedNumber = operate(+numberA, +numberB);
  output.textContent = calculatedNumber;
});

resetButton.addEventListener("click", () => {
  clearInputOutput();
})

undoButton.addEventListener("click", () => {
  clearInput();
})

