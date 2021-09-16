"use strict";
function $(x) {
  return document.getElementById(x);
}

// CSS Selectors
// const btnC = document.getElementById("btn-C");
// const btnBksp = document.getElementById("btn-Bksp");
// const btnPlusMinus = document.getElementById("btn-+/-");
// const btnDivide = document.getElementById("btn-/");
// const btn7 = document.getElementById("btn-7");
// const btn8 = document.getElementById("btn-8");
// const btn9 = document.getElementById("btn-9");
// const btnMultiply = document.getElementById("btn-*");
// const btn4 = document.getElementById("btn-4");
// const btn5 = document.getElementById("btn-5");
// const btn6 = document.getElementById("btn-6");
// const btnMinus = document.getElementById("btn--");
// const btn1 = document.getElementById("btn-1");
// const btn2 = document.getElementById("btn-2");
// const btn3 = document.getElementById("btn-3");
// const btnPlus = document.getElementById("btn-+");
// const btn0 = document.getElementById("btn-0");
// const btnDecimal = document.getElementById("btn-.");
// const btnEquals = document.getElementById("btn-=");
const buttons = document.querySelectorAll("button");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (operand, a, b) => {
  return operand(a, b);
};

console.log(operate(subtract, 2, 3));
let displayValue = "";
let previousValue = "";
let currentOp = "";

//-----------------------------------------------------------------------
$("btn-C").addEventListener("click", () => {
  displayValue = "";
  previousValue = "";
  $("display-input").textContent = displayValue;
  $("display-output").textContent = previousValue;
});

$("btn-Bksp").addEventListener("click", () => {
  displayValue = displayValue.toString().slice(0, -1);
  if (displayValue == false) {
    displayValue = "";
    $("display-input").textContent = displayValue;
    return;
  }
  displayValue = Number(displayValue);
  console.log(displayValue);
  $("display-input").textContent = displayValue;
});

$("btn-.").addEventListener("click", () => {
  if (displayValue.includes(".")) return;
  else displayValue += ".";
  $("display-input").textContent = displayValue;
});

//-----------------------------------------------------------------------
// Operator btns
$("btn-=").addEventListener("click", () => {});
$("btn-*").addEventListener("click", () => {});
$("btn-/").addEventListener("click", () => {});
$("btn--").addEventListener("click", () => {});
$("btn-+").addEventListener("click", () => {}});

//-----------------------------------------------------------------------
// Number btns
$("btn-0").addEventListener("click", () => {
  displayValue += 0;
  $("display-input").textContent = displayValue;
});

$("btn-1").addEventListener("click", () => {
  displayValue += 1;
  $("display-input").textContent = displayValue;
});

$("btn-2").addEventListener("click", () => {
  displayValue += 2;
  $("display-input").textContent = displayValue;
});

$("btn-3").addEventListener("click", () => {
  displayValue += 3;
  $("display-input").textContent = displayValue;
});

$("btn-4").addEventListener("click", () => {
  displayValue += 4;
  $("display-input").textContent = displayValue;
});

$("btn-5").addEventListener("click", () => {
  displayValue += 5;
  $("display-input").textContent = displayValue;
});

$("btn-6").addEventListener("click", () => {
  displayValue += 6;
  $("display-input").textContent = displayValue;
});

$("btn-7").addEventListener("click", () => {
  displayValue += 7;
  $("display-input").textContent = displayValue;
});

$("btn-8").addEventListener("click", () => {
  displayValue += 8;
  $("display-input").textContent = displayValue;
});

$("btn-9").addEventListener("click", () => {
  displayValue += 9;
  $("display-input").textContent = displayValue;
});
