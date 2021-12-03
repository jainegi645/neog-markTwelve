//Math.sqrt() returns the square root of a number:
const baseValue = document.querySelector("#base-value");
const heightValue = document.querySelector("#height-value");
const checkBtn = document.querySelector("#Check-btn");
const output = document.querySelector("#hypotenuse-output");

function calculateHypotenuse() {
  const SquareofbaseValue = Math.pow(baseValue.value, 2);
  const SquareofheightValue = Math.pow(heightValue.value, 2);
  const combinedValue = SquareofbaseValue + SquareofheightValue;
  const hypotenuse = Math.sqrt(combinedValue).toFixed(2);
  console.log(SquareofbaseValue, SquareofheightValue, hypotenuse);
  output.innerText = `The length of the hypotenuse is ${hypotenuse}`;
}

checkBtn.addEventListener("click", calculateHypotenuse);
