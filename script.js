const correctAnswer = "추천하다";

function checkAnswer(userAnswer) {
  const result = document.getElementById("result");

  if (userAnswer === correctAnswer) {
    result.textContent = "정답입니다!";
    result.style.color = "blue";
  } else {
    result.textContent = "오답입니다. 정답은 추천하다입니다.";
    result.style.color = "red";
  }
}
