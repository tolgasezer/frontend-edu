const question = document.getElementById("question");
const choiceContainer = document.getElementById("choice-container");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const nextBtn = document.getElementById("nxt-btn");
const restartBtn = document.getElementById("restart-btn");

//butona baslangicta disabled att vermeye calistigimda sorular gelmiyor.

// duzeldi ama nasil oldugunu anlamadim... ('disabled, '') seklinde yazmak gerekliymis
let currentQuestion = {};
//let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choiceText: ["<script>", "<javascript>", "<js>", "<scripting>"],
    answer: 0
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choiceText: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
    answer: 2
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choiceText: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
    answer: 3
  }
]

fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple').then(console.log(Response));


//logJSONData(); // 10 soruluk bir array donuyor. gelen arrayden question ve answerlari gerekli yere iletecek bicimde guncellemem lazim 
//const takeQuestion = jsonData

//console.log(takeQuestion);

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = questions.length;

//console.log(questions[0].choiceText);

startGame = () => {
  score = 0;
  questionCounter = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};


getNewQuestion = () => {
  choiceContainer.innerHTML = "";
  nextBtn.setAttribute("disabled", "");
  
  if (availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
    nextBtn.classList.add("hidden");
    restartBtn.classList.remove("hidden");
    question.innerText = `Your Score is: ${score * CORRECT_BONUS}/${MAX_QUESTIONS * CORRECT_BONUS}`;

    console.log(
      `Your Score is: ${score * CORRECT_BONUS}/${MAX_QUESTIONS * CORRECT_BONUS}`
    );
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  //console.log(currentQuestion.choiceText);


  //var str = "<ul class='choice-container'>";
  for(let i = 0; i < currentQuestion.choiceText.length; i++){
    const newChoice = document.createElement('div');
    const choiceTextNode = document.createTextNode(`${currentQuestion.choiceText[i]}`);
    newChoice.appendChild(choiceTextNode);
    choiceContainer.appendChild(newChoice);
    newChoice.classList.add('choice-container'); //prefix i feda ettik ama olsun.
    
    newChoice.addEventListener('click', () => {
      // Tüm choice-container'ları seçim yapılmamış duruma getir
      const allChoices = document.querySelectorAll('.choice-container');
      allChoices.forEach(choice => {
        choice.classList.remove('selected');
      });
      
      // Seçili olan choice-containera selected classı ekle
      newChoice.classList.add('selected');
      
      
      //console.log(choicesArray.indexOf('div.choice-container.selected'));
      nextBtn.removeAttribute("disabled");
    });
    
    
    //str+= '<li class="choice-text" id="option">' + currentQuestion.choiceText[i] + '</li>'; bu cok karmasik oldu duzenledim
  }
  
  
  
  //str += '</ul>';
  //console.log(document.getElementById("choice-container"));
  //choiceContainer.innerHTML = str;
  availableQuestions.splice(questionIndex, 1);
  //acceptingAnswers = true;
};

// clickHandler = () =>{
//   newChoice.addEventListener('click', (e)=>{
//     const selectedChoice = e.target;
//     const selectedIndex = currentQuestion.choiceText[selectedChoice];
//   })
//   if (selectedIndex==currentQuestion.answer){
//     score++;
//   }
//   selectedChoice.classList.add('selected');
//   nextBtn.removeAttribute("disabled");
//   nextBtn.addEventListener("click", () => {
//       selectedChoice.classList.remove("selected");
//       nextBtn.setAttribute("disabled", "");
//   });

// }

// choices.forEach((choice) => {
//   choice.addEventListener("click", (e) => {
//     //console.log(e);
//     if (!acceptingAnswers) return;

//     acceptingAnswers = false;
//     const selectedChoice = e.target;
//     const selectedNumber = selectedChoice.dataset["number"];
//     //console.log(selectedNumber)
//     if (selectedNumber == currentQuestion.answer) {
//       score++;
//     }
//     // if selectedChoice change, change to selected class
    
//     selectedChoice.classList.add("selected");

//     //secimin ardindan next butonu enable oluyor ve next butonunda selected class i kaldiriliyor.
//     nextBtn.removeAttribute("disabled");
//     nextBtn.addEventListener("click", () => {
//       selectedChoice.classList.remove("selected");
//       nextBtn.setAttribute("disabled", "");
//     });
//   });
// });

restartQuiz = () => {
  window.location.assign("./index.html");

  startGame();
};

nextBtn.addEventListener("click", ()=>{
  const selected = document.querySelector('.selected');
  console.log(selected.innerHTML);
  if (selected.innerText == currentQuestion.choiceText[currentQuestion.answer]){
    score++;
  };
  getNewQuestion()});
restartBtn.addEventListener("click", restartQuiz);
startGame();


//console.log(currentQuestion.choiceText);