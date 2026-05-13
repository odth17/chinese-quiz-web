const quizData = [
  {
    chinese: "推荐",
    meaning: "추천하다"
  },
  {
    chinese: "菜单",
    meaning: "메뉴"
  },
  {
    chinese: "清淡",
    meaning: "담백하다"
  },
  {
    chinese: "可口",
    meaning: "입에 맞다"
  },
  {
    chinese: "采购",
    meaning: "구매하다"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = "";
let shuffledQuizData = [];

// 배열을 랜덤으로 섞는 함수
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// 퀴즈 시작
function startQuiz() {
  shuffledQuizData = shuffleArray([...quizData]);
  currentQuestionIndex = 0;
  score = 0;

  document.getElementById("score").textContent = "점수: 0";
  document.getElementById("next-button").style.display = "none";

  showQuestion();
}

// 문제 보여주기
function showQuestion() {
  const currentQuestion = shuffledQuizData[currentQuestionIndex];

  document.getElementById("progress").textContent =
    `문제 ${currentQuestionIndex + 1} / ${shuffledQuizData.length}`;

  document.getElementById("question").textContent = currentQuestion.chinese;
  document.getElementById("result").textContent = "";
  document.getElementById("next-button").style.display = "none";

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  const choices = makeChoices(currentQuestion);

  choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = function () {
      checkAnswer(choice);
    };
    choicesDiv.appendChild(button);
  });
}

// 보기 만들기
function makeChoices(correctQuestion) {
  let choices = [correctQuestion.meaning];

  const wrongChoices = quizData
    .filter(item => item.meaning !== correctQuestion.meaning)
    .map(item => item.meaning);

  const randomWrongChoices = shuffleArray(wrongChoices).slice(0, 3);

  choices = choices.concat(randomWrongChoices);

  return shuffleArray(choices);
}

// 정답 확인
function checkAnswer(answer) {
  const currentQuestion = shuffledQuizData[currentQuestionIndex];
  const result = document.getElementById("result");

  selectedAnswer = answer;

  if (answer === currentQuestion.meaning) {
    result.textContent = "정답입니다!";
    result.style.color = "blue";
    score++;
  } else {
    result.textContent = `오답입니다. 정답은 ${currentQuestion.meaning}입니다.`;
    result.style.color = "red";
  }

  document.getElementById("score").textContent = `점수: ${score}`;

  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach(button => {
    button.disabled = true;
  });

  document.getElementById("next-button").style.display = "block";
}

// 다음 문제로 이동
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < shuffledQuizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// 결과 보여주기
function showResult() {
  document.getElementById("progress").textContent = "퀴즈 완료!";
  document.getElementById("question").textContent = "수고했어요!";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("result").textContent =
    `총 ${shuffledQuizData.length}문제 중 ${score}문제를 맞혔습니다.`;

  document.getElementById("result").style.color = "black";
  document.getElementById("score").textContent =
    `최종 점수: ${score} / ${shuffledQuizData.length}`;

  const nextButton = document.getElementById("next-button");
  nextButton.textContent = "다시 풀기";
  nextButton.style.display = "block";
  nextButton.onclick = function () {
    nextButton.textContent = "다음 문제";
    nextButton.onclick = nextQuestion;
    startQuiz();
  };
}

startQuiz();
