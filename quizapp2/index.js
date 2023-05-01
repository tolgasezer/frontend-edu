const question = document.getElementById("question");
const choiceContainer = document.getElementById("choice-container");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const nextBtn = document.getElementById("nxt-btn");
const restartBtn = document.getElementById("restart-btn");

//butona baslangicta disabled att vermeye calistigimda sorular gelmiyor.
nextBtn.setAttribute("disabled", "");
// duzeldi ama nasil oldugunu anlamadim... ('disabled, '') seklinde yazmak gerekliymis
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choiceText: ["<script>", "<javascript>", "<js>", "<scripting>", "deneme"],
    answer: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choiceText: [
      "a",
      "b",
      "c",
      "d",
      "deneme",
    ],
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choiceText: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');",
      "deneme",
    ],
    answer: 4,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = questions.length;

console.log(questions[0].choiceText);

startGame = () => {
  score = 0;
  questionCounter = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
    nextBtn.classList.add("hidden");
    restartBtn.classList.remove("hidden");

    console.log(
      `Your Score is: ${score * CORRECT_BONUS}/${MAX_QUESTIONS * CORRECT_BONUS}`
    );
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  console.log(currentQuestion.choiceText);

  var str = "<ul>";
  for(let i = 0; i < currentQuestion.choiceText.length; i++){
    str+= '<li id="option">' + currentQuestion.choiceText[i] + '</li>';
  }
  str += '</ul>';
  console.log(document.getElementById("choice-container"));
  choiceContainer.innerHTML = str;
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    //console.log(e);
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedNumber = selectedChoice.dataset["number"];
    //console.log(selectedNumber)
    if (selectedNumber == currentQuestion.answer) {
      score++;
    }
    // if selectedChoice change, change to selected class
    
    selectedChoice.classList.add("selected");

    //secimin ardindan next butonu enable oluyor ve next butonunda selected class i kaldiriliyor.
    nextBtn.removeAttribute("disabled");
    nextBtn.addEventListener("click", () => {
      selectedChoice.classList.remove("selected");
      nextBtn.setAttribute("disabled", "");
    });
  });
});

restartQuiz = () => {
  window.location.assign("./index.html");

  startGame();
};

nextBtn.addEventListener("click", getNewQuestion);
restartBtn.addEventListener("click", restartQuiz);
startGame();

console.log(Array.from(currentQuestion.answer));
