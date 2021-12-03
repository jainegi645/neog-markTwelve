//for traingle quiz
const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const ouput = document.querySelector("#output-div");

const correctAnswer = [
  "3 angles",
  "180°",
  "acute angle",
  "one right angle",
  "90°",
];

function calculateScore() {
  console.log("reached in calculate score");
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswer[index]) {
      score += 1;
    }
    index = index + 1;
  }
  console.log(score);
  ouput.innerText = `your score is ${score} out of 5`;
}
function test() {
  console.log("test function called");
}
submitAnswerBtn.addEventListener("click", calculateScore);
