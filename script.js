const inputs = document.querySelectorAll(".angle-inputs");
const btn = document.querySelector("#is-traingle-btn");
const output = document.querySelector("#ouput-div");

function calaultateSumofAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  console.log("reached is triangle");
  const sumOfAngles = calaultateSumofAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  console.log(inputs);

  if (sumOfAngles === 180) {
    console.log("Yay, its a traingle ");
    output.innerText = "Yay, Its a Traingle ";
  } else {
    console.log("not a traingle ");
    output.innerText = "Oh Its Not a Traingle";
  }
}
btn.addEventListener("click", isTriangle);

