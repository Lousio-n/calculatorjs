const numbers = document.querySelectorAll(".number-input");
const operators = document.querySelectorAll(".operator-input");
const equals = document.getElementById("equals");
const input = document.getElementById("calculation-input");
const output = document.getElementById("calculation-output");
const resetButton = document.getElementById("reset-button");
const undoButton = document.getElementById("undo-button");

let operatorToUse;

const numberClicked = numbers.forEach(number => {
  number.addEventListener("click", (e) => {
    input.textContent += e.target.textContent;
  });
});

const operatorClicked = operators.forEach(operator => {
  operator.addEventListener("click", (e) => {
    operatorToUse = e.target.textContent;
  });
});

equals.addEventListener("click", () => {
});