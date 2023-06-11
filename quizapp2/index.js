const question = document.getElementById("question");
const choiceContainer = document.getElementById("choice-container");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const nextBtn = document.getElementById("nxt-btn");
const restartBtn = document.getElementById("restart-btn");
const loader = document.getElementById('loader');
const game = document.getElementById('containerC');
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

game.classList.add('hidden');

let questions = [];
fetch(
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
)
  .then((response) => {
    return response.json();
  })
  .then((loadedQuestions) => {
    questions = loadedQuestions.results.map((question) => {
      const choices = [...question.incorrect_answers, question.correct_answer];
      const shuffledChoices = shuffle(choices);
      const answerIndex = shuffledChoices.indexOf(question.correct_answer);
      const formattedQuestion = {
        question: question.question,
        choiceText: shuffledChoices,
        answer: answerIndex,
      };
      

      return formattedQuestion;
    });
    

    startGame();
  });

  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }



  const CORRECT_BONUS = 10;
  const MAX_QUESTIONS = 10;


startGame = () => {
  score = 0;
  questionCounter = 0;
  availableQuestions = [...questions];
  getNewQuestion();
  game.classList.remove('hidden');
  loader.classList.add('hidden');
}

getNewQuestion = () => {
  choiceContainer.innerText = "";
  nextBtn.setAttribute("disabled", "");

  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    nextBtn.classList.add("hidden");
    restartBtn.classList.remove("hidden");
    question.innerText = `Your Score is: ${score * CORRECT_BONUS}/${
      MAX_QUESTIONS * CORRECT_BONUS
    }`;

    console.log(
      `Your Score is: ${score * CORRECT_BONUS}/${MAX_QUESTIONS * CORRECT_BONUS}`
    );
    return;
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  //console.log(currentQuestion.choiceText);

  //var str = "<ul class='choice-container'>";
  for (let i = 0; i < currentQuestion.choiceText.length; i++) {
    const newChoice = document.createElement("div");
    const choiceTextNode = document.createTextNode(
      `${currentQuestion.choiceText[i]}`
    );
    newChoice.appendChild(choiceTextNode);
    choiceContainer.appendChild(newChoice);
    newChoice.classList.add("choice-container"); //prefix i feda ettik ama olsun.

    newChoice.addEventListener("click", () => {
      // Tüm choice-container'ları seçim yapılmamış duruma getir
      const allChoices = document.querySelectorAll(".choice-container");
      allChoices.forEach((choice) => {
        choice.classList.remove("selected");
      });

      // Seçili olan choice-containera selected classı ekle
      newChoice.classList.add("selected");

      //console.log(choicesArray.indexOf('div.choice-container.selected'));
      nextBtn.removeAttribute("disabled");
    });
  }
  availableQuestions.splice(questionIndex, 1);
};

restartQuiz = () => {
  window.location.assign("./index.html");

  startGame();
};

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector(".selected");
  console.log(selected.innerHTML);
  if (
    selected.innerText == currentQuestion.choiceText[currentQuestion.answer]
  ) {
    score++;
  }
  getNewQuestion();
});
restartBtn.addEventListener("click", restartQuiz);

//console.log(currentQuestion.choiceText);

// function getTriviaQuestions (method, url, data){
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(data)
//   }).then(response =>{
//     startGame();
//     return response.json();
//   })
// };

// fetchTriviaQuestion();
