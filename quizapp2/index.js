const question= document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
      question: "Inside which HTML element do we put the JavaScript??",
      choice1: "<script>",
      choice2: "<javascript>",
      choice3: "<js>",
      choice4: "<scripting>",
      answer: 1
    },
    {
      question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      choice1: "<script href='xxx.js'>",
      choice2: "<script name='xxx.js'>",
      choice3: "<script src='xxx.js'>",
      choice4: "<script file='xxx.js'>",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      choice1: "msgBox('Hello World');",
      choice2: "alertBox('Hello World');",
      choice3: "msg('Hello World');",
      choice4: "alert('Hello World');",
      answer: 4
    }
  ]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;


startGame = () =>{
    score= 0;
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    questionCounter++;
    const questionIndex= Math.floor(Math.random()* availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })
}

startGame();

console.log(questions)