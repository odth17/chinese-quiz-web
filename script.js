const quizData = [
  { chinese: "沙发", pinyin: "shāfā", meaning: "소파" },
  { chinese: "抽", pinyin: "chōu", meaning: "(담배를) 피우다" },
  { chinese: "活儿", pinyin: "huór", meaning: "일" },
  { chinese: "气", pinyin: "qì", meaning: "성내다, 화내다" },
  { chinese: "批评", pinyin: "pīpíng", meaning: "비평하다, 꾸짖다" },
  { chinese: "社会", pinyin: "shèhuì", meaning: "사회" },
  { chinese: "平等", pinyin: "píngděng", meaning: "평등, 평등하다" },
  { chinese: "模范", pinyin: "mófàn", meaning: "모범, 모범적이다" },
  { chinese: "改变", pinyin: "gǎibiàn", meaning: "변하다, 바꾸다" },
  { chinese: "认错", pinyin: "rèncuò", meaning: "잘못을 인정하다" },
  { chinese: "今后", pinyin: "jīnhòu", meaning: "이제부터, 앞으로" },
  { chinese: "家务", pinyin: "jiāwù", meaning: "집안일, 가사" },
  { chinese: "劝", pinyin: "quàn", meaning: "권하다, 중재하다" },
  { chinese: "表现", pinyin: "biǎoxiàn", meaning: "표현하다, 태도, 모습" },
  { chinese: "演讲", pinyin: "yǎnjiǎng", meaning: "강연, 연설" },
  { chinese: "题目", pinyin: "tímù", meaning: "제목, 문제" },
  { chinese: "复杂", pinyin: "fùzá", meaning: "복잡하다" },
  { chinese: "到处", pinyin: "dàochù", meaning: "도처, 곳곳" },
  { chinese: "连", pinyin: "lián", meaning: "~조차도 / 连～也" },
  { chinese: "男人", pinyin: "nánrén", meaning: "남자" },
  { chinese: "认为", pinyin: "rènwéi", meaning: "여기다, 생각하다" },
  { chinese: "特点", pinyin: "tèdiǎn", meaning: "특징" },
  { chinese: "纸", pinyin: "zhǐ", meaning: "종이" },
  { chinese: "笔", pinyin: "bǐ", meaning: "필기구, 펜" },
  { chinese: "经理", pinyin: "jīnglǐ", meaning: "사장, 매니저" },
  { chinese: "秘书", pinyin: "mìshū", meaning: "비서" },
  { chinese: "报纸", pinyin: "bàozhǐ", meaning: "신문" },
  { chinese: "贵", pinyin: "guì", meaning: "귀한, 귀사의/귀하의" },
  { chinese: "客人", pinyin: "kèrén", meaning: "손님" },
  { chinese: "参观", pinyin: "cānguān", meaning: "참관하다, 견학하다" },
  { chinese: "简历", pinyin: "jiǎnlì", meaning: "이력서" },
  { chinese: "证明", pinyin: "zhèngmíng", meaning: "증명하다, 증명" },
  { chinese: "毕业证", pinyin: "bìyèzhèng", meaning: "졸업증서" },
  { chinese: "件", pinyin: "jiàn", meaning: "건, 개" },
  { chinese: "发展", pinyin: "fāzhǎn", meaning: "발전하다" },
  { chinese: "前途", pinyin: "qiántú", meaning: "전망, 앞날" },
  { chinese: "能力", pinyin: "nénglì", meaning: "능력" },
  { chinese: "技术", pinyin: "jìshù", meaning: "기술" },
  { chinese: "增加", pinyin: "zēngjiā", meaning: "증가하다" },
  { chinese: "收入", pinyin: "shōurù", meaning: "수입" },
  { chinese: "面试", pinyin: "miànshì", meaning: "면접을 치르다" },
  { chinese: "通知", pinyin: "tōngzhī", meaning: "통지하다, 알리다" },
  { chinese: "招", pinyin: "zhāo", meaning: "모집하다" },
  { chinese: "其中", pinyin: "qízhōng", meaning: "그중" },
  { chinese: "印象", pinyin: "yìnxiàng", meaning: "인상" },
  { chinese: "年龄", pinyin: "niánlíng", meaning: "나이, 연령" },
  { chinese: "比较", pinyin: "bǐjiào", meaning: "비교적" },
  { chinese: "熟悉", pinyin: "shúxī", meaning: "익숙하다, 잘 알다" },
  { chinese: "负责", pinyin: "fùzé", meaning: "책임지다, 책임감이 있다" },
  { chinese: "提高", pinyin: "tígāo", meaning: "향상시키다, 높이다" },
  { chinese: "喜糖", pinyin: "xǐtáng", meaning: "결혼 사탕" },
  { chinese: "喜事", pinyin: "xǐshì", meaning: "경사, 기쁜 일" },
  { chinese: "喜酒", pinyin: "xǐjiǔ", meaning: "결혼 축하주" },
  { chinese: "新娘", pinyin: "xīnniáng", meaning: "신부" },
  { chinese: "怪不得", pinyin: "guàibude", meaning: "과연, 그러기에, 어쩐지" },
  { chinese: "新郎", pinyin: "xīnláng", meaning: "신랑" },
  { chinese: "浪漫", pinyin: "làngmàn", meaning: "낭만적이다" },
  { chinese: "婚礼", pinyin: "hūnlǐ", meaning: "결혼식, 혼례" },
  { chinese: "日子", pinyin: "rìzi", meaning: "날짜" },
  { chinese: "顺", pinyin: "shùn", meaning: "순조롭다" },
  { chinese: "举", pinyin: "jǔ", meaning: "들다" },
  { chinese: "干杯", pinyin: "gānbēi", meaning: "건배하다" },
  { chinese: "拜", pinyin: "bài", meaning: "절하다" },
  { chinese: "恋爱", pinyin: "liàn’ài", meaning: "연애하다, 연애" },
  { chinese: "经过", pinyin: "jīngguò", meaning: "경험하다, 과정, 경과" },
  { chinese: "补充", pinyin: "bǔchōng", meaning: "보충하다" },
  { chinese: "同班同学", pinyin: "tóngbān tóngxué", meaning: "동급생, 같은 반 학우" },
  { chinese: "突然", pinyin: "tūrán", meaning: "갑자기" },
  { chinese: "故事", pinyin: "gùshi", meaning: "이야기" },
  { chinese: "精彩", pinyin: "jīngcǎi", meaning: "훌륭하다, 뛰어나다" },
  { chinese: "和美", pinyin: "héměi", meaning: "사이가 좋다, 화목하다" },
  { chinese: "白头到老", pinyin: "bái tóu dào lǎo", meaning: "백년해로하다" },
  { chinese: "白头偕老", pinyin: "bái tóu xié lǎo", meaning: "백년해로하다" },
  { chinese: "拿……来说", pinyin: "ná……lái shuō", meaning: "~으로 말하자면, ~의 경우에는" },
  { chinese: "主要", pinyin: "zhǔyào", meaning: "주로, 주요하다" },
  { chinese: "电视剧", pinyin: "diànshìjù", meaning: "드라마" },
  { chinese: "集", pinyin: "jí", meaning: "회, 편" },
  { chinese: "退休", pinyin: "tuìxiū", meaning: "은퇴하다" },
  { chinese: "打", pinyin: "dǎ", meaning: "마작, 트럼프 따위를 하다" },
  { chinese: "牌", pinyin: "pái", meaning: "카드" },
  { chinese: "麻将", pinyin: "májiàng", meaning: "마작" },
  { chinese: "教师", pinyin: "jiàoshī", meaning: "교사" },
  { chinese: "备课", pinyin: "bèi kè", meaning: "수업을 준비하다" },
  { chinese: "其他", pinyin: "qítā", meaning: "기타, 다른" },
  { chinese: "下载", pinyin: "xiàzài", meaning: "다운로드하다" },
  { chinese: "难道", pinyin: "nándào", meaning: "설마 ~하겠는가?" },
  { chinese: "歌曲", pinyin: "gēqǔ", meaning: "노래" },
  { chinese: "奇怪", pinyin: "qíguài", meaning: "이상하다, 의아하다" },
  { chinese: "相同", pinyin: "xiāngtóng", meaning: "똑같다, 서로 같다" },
  { chinese: "厨房", pinyin: "chúfáng", meaning: "주방" },
  { chinese: "书房", pinyin: "shūfáng", meaning: "서재" },
  { chinese: "静", pinyin: "jìng", meaning: "조용하다, 고요하다" },
  { chinese: "科学", pinyin: "kēxué", meaning: "과학적이다, 과학" },
  { chinese: "晒", pinyin: "shài", meaning: "햇볕을 쬐다" },
  { chinese: "阳台", pinyin: "yángtái", meaning: "베란다, 발코니" },
  { chinese: "建议", pinyin: "jiànyì", meaning: "제안하다, 건의하다" },
  { chinese: "自助餐", pinyin: "zìzhùcān", meaning: "뷔페" },
  { chinese: "葡萄酒", pinyin: "pútáojiǔ", meaning: "와인, 포도주" },
  { chinese: "白酒", pinyin: "báijiǔ", meaning: "바이주, 중국식 증류주" },
  { chinese: "醉", pinyin: "zuì", meaning: "취하다" },
  { chinese: "减肥", pinyin: "jiǎnféi", meaning: "다이어트하다, 살을 빼다" },
  { chinese: "笑话", pinyin: "xiàohua", meaning: "비웃다, 웃음거리" },
  { chinese: "身材", pinyin: "shēncái", meaning: "체격, 몸매" },
  { chinese: "口福", pinyin: "kǒufú", meaning: "먹을 복" },
  { chinese: "强", pinyin: "qiáng", meaning: "강하다, 낫다, 더 좋다" },
  { chinese: "坚持", pinyin: "jiānchí", meaning: "견지하다, 꾸준히 계속하다" },
  { chinese: "饮食", pinyin: "yǐnshí", meaning: "음식, 식생활" },
  { chinese: "中餐", pinyin: "Zhōngcān", meaning: "중국 음식" },
  { chinese: "非……不可", pinyin: "fēi……bùkě", meaning: "반드시 ~해야 한다" },
  { chinese: "刀", pinyin: "dāo", meaning: "칼, 나이프" },
  { chinese: "叉", pinyin: "chā", meaning: "포크" },
  { chinese: "左手", pinyin: "zuǒshǒu", meaning: "왼손" },
  { chinese: "右手", pinyin: "yòushǒu", meaning: "오른손" },
  { chinese: "切", pinyin: "qiē", meaning: "썰다, 자르다" },
  { chinese: "鸡", pinyin: "jī", meaning: "닭" },
  { chinese: "面条儿", pinyin: "miàntiáor", meaning: "면, 국수" },
  { chinese: "筷子", pinyin: "kuàizi", meaning: "젓가락" },
  { chinese: "冰箱", pinyin: "bīngxiāng", meaning: "냉장고" },
  { chinese: "牛奶", pinyin: "niúnǎi", meaning: "우유" },
  { chinese: "果汁", pinyin: "guǒzhī", meaning: "과일 주스" },
  { chinese: "豆浆", pinyin: "dòujiāng", meaning: "더우장, 콩 음료" },
  { chinese: "油条", pinyin: "yóutiáo", meaning: "여우탸오, 기름에 튀긴 음식" }
  ];

  const sentenceData = [
  {
    chinese: "我喜欢吃清淡的菜。",
    pinyin: "Wǒ xǐhuan chī qīngdàn de cài.",
    meaning: "나는 담백한 음식을 좋아한다."
  },
  {
    chinese: "老师推荐了一本书。",
    pinyin: "Lǎoshī tuījiàn le yì běn shū.",
    meaning: "선생님이 책 한 권을 추천했다."
  },
  {
    chinese: "服务员把菜单拿来了。",
    pinyin: "Fúwùyuán bǎ càidān ná lái le.",
    meaning: "종업원이 메뉴를 가져왔다."
  },
  {
    chinese: "我们明天去市场采购食材。",
    pinyin: "Wǒmen míngtiān qù shìchǎng cǎigòu shícái.",
    meaning: "우리는 내일 시장에 가서 식재료를 구매한다."
  },
  {
    chinese: "这道菜很好吃，特别可口。",
    pinyin: "Zhè dào cài hěn hǎochī, tèbié kěkǒu.",
    meaning: "이 요리는 맛있고 특히 입에 잘 맞는다."
  }
];

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuizData = [];
let currentMode = "meaning";
let wrongAnswers = [];
const questionCount = 10;

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz(mode) {
  currentMode = mode;
currentQuestionIndex = 0;
score = 0;
wrongAnswers = [];

  shuffledQuizData = shuffleArray([...quizData]).slice(0, questionCount);

  document.getElementById("mode-box").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";

  document.getElementById("score").textContent = "점수: 0";
  document.getElementById("next-button").textContent = "다음 문제";
  document.getElementById("next-button").onclick = nextQuestion;
  document.getElementById("next-button").style.display = "none";
  document.getElementById("home-button").style.display = "block";

  showQuestion();
}

function getQuestionText(question) {
  if (currentMode === "meaning") {
    document.getElementById("mode-title").textContent = "중국어 단어의 뜻은?";
    return question.chinese;
  }

  if (currentMode === "pinyin") {
    document.getElementById("mode-title").textContent = "중국어 단어의 병음은?";
    return question.chinese;
  }

  if (currentMode === "chinese") {
    document.getElementById("mode-title").textContent = "이 뜻에 해당하는 중국어는?";
    return question.meaning;
  }

  if (currentMode === "sentenceMeaning") {
    document.getElementById("mode-title").textContent = "중국어 문장의 해석은?";
    return question.chinese;
  }

  if (currentMode === "sentenceChinese") {
    document.getElementById("mode-title").textContent = "이 해석에 해당하는 중국어 문장은?";
    return question.meaning;
  }
}
function getAnswerKey() {
  if (currentMode === "meaning") {
    return "meaning";
  }

  if (currentMode === "pinyin") {
    return "pinyin";
  }

  if (currentMode === "chinese") {
    return "chinese";
  }

  if (currentMode === "sentenceMeaning") {
    return "meaning";
  }

  if (currentMode === "sentenceChinese") {
    return "chinese";
  }
}
function showQuestion() {
  const currentQuestion = shuffledQuizData[currentQuestionIndex];
  const answerKey = getAnswerKey();

  document.getElementById("progress").textContent =
    `문제 ${currentQuestionIndex + 1} / ${shuffledQuizData.length}`;

  document.getElementById("question").textContent = getQuestionText(currentQuestion);
  document.getElementById("result").textContent = "";
  document.getElementById("next-button").style.display = "none";

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  const choices = makeChoices(currentQuestion, answerKey);

  choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;

    button.onclick = function () {
      checkAnswer(choice);
    };

    choicesDiv.appendChild(button);
  });
}

function makeChoices(correctQuestion, answerKey) {
  let choices = [correctQuestion[answerKey]];

  const wrongChoices = quizData
    .filter(item => item[answerKey] !== correctQuestion[answerKey])
    .map(item => item[answerKey]);

  const randomWrongChoices = shuffleArray(wrongChoices).slice(0, 3);

  choices = choices.concat(randomWrongChoices);

  return shuffleArray(choices);
}

function checkAnswer(answer) {
  const currentQuestion = shuffledQuizData[currentQuestionIndex];
  const answerKey = getAnswerKey();
  const correctAnswer = currentQuestion[answerKey];
  const result = document.getElementById("result");

  if (answer === correctAnswer) {
  result.textContent = "정답입니다!";
  result.style.color = "blue";
  score++;
} else {
  result.textContent = `오답입니다. 정답은 ${correctAnswer}입니다.`;
  result.style.color = "red";

  wrongAnswers.push({
    question: getQuestionText(currentQuestion),
    selected: answer,
    correct: correctAnswer,
    chinese: currentQuestion.chinese,
    pinyin: currentQuestion.pinyin,
    meaning: currentQuestion.meaning
  });
}

  document.getElementById("score").textContent = `점수: ${score}`;

  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach(button => {
    button.disabled = true;
  });

  document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < shuffledQuizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("progress").textContent = "퀴즈 완료!";
  document.getElementById("mode-title").textContent = "결과";
  document.getElementById("question").textContent = "수고했어요!";
  document.getElementById("choices").innerHTML = "";

  let resultText = `총 ${shuffledQuizData.length}문제 중 ${score}문제를 맞혔습니다.`;

  if (wrongAnswers.length === 0) {
    resultText += "\n\n완벽해요! 틀린 문제가 없습니다.";
  } else {
    resultText += "\n\n[오답노트]\n";

    wrongAnswers.forEach((item, index) => {
      resultText += `\n${index + 1}. 문제: ${item.question}`;
      resultText += `\n내가 고른 답: ${item.selected}`;
      resultText += `\n정답: ${item.correct}`;
      resultText += `\n중국어: ${item.chinese}`;
      resultText += `\n병음: ${item.pinyin}`;
      resultText += `\n뜻: ${item.meaning}\n`;
    });
  }

  document.getElementById("result").textContent = resultText;
  document.getElementById("result").style.color = "black";

  document.getElementById("score").textContent =
    `최종 점수: ${score} / ${shuffledQuizData.length}`;

  const nextButton = document.getElementById("next-button");
  nextButton.textContent = "처음으로";
  nextButton.style.display = "block";

  nextButton.onclick = function () {
    goHome();
  };
}

function goHome() {
  document.getElementById("quiz-area").style.display = "none";
  document.getElementById("mode-box").style.display = "block";

  document.getElementById("result").textContent = "";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("score").textContent = "점수: 0";

  document.getElementById("next-button").textContent = "다음 문제";
  document.getElementById("next-button").onclick = nextQuestion;
  document.getElementById("next-button").style.display = "none";

  currentQuestionIndex = 0;
  score = 0;
  shuffledQuizData = [];
}
function startSentenceQuiz(mode) {
  currentMode = mode;
  currentQuestionIndex = 0;
  score = 0;
  wrongAnswers = [];

  shuffledQuizData = shuffleArray([...sentenceData]).slice(0, Math.min(questionCount, sentenceData.length));

  document.getElementById("mode-box").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";

  document.getElementById("score").textContent = "점수: 0";
  document.getElementById("next-button").textContent = "다음 문제";
  document.getElementById("next-button").onclick = nextQuestion;
  document.getElementById("next-button").style.display = "none";
  document.getElementById("home-button").style.display = "block";

  showQuestion();
}
