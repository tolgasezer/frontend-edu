let score = 0;
let currentQuestion = 0;

//Buttons 

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const userScore = document.getElementById('user-score');
const totalScore = document.getElementById('total=score');
const questionText = document.getElementById('question-text');

//onClick events 

nextBtn.addEventListener('onclick', next);
prevBtn.addEventListener('onclick', prev);
submitBtn.addEventListener('onclick', submit);
restartBtn.addEventListener('onclick', restart);
//=========================//

// start quiz function

function startQuiz(){
    currentQuestion= 0;
    totalScore.innerHTML=questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[0].option;
    option2.innerHTML = questions[currentQuestion].answers[1].option;
    option3.innerHTML = questions[currentQuestion].answers[2].option;
    option4.innerHTML = questions[currentQuestion].answers[3].option;
}

startQuiz();
//   question & answer array 
let questions = [
    {
        question: "Aşağıgdakilerden hangisi frontend frameworklerinden biri değildir?",
        answers:[
            {option: "React", answer:"false"},
            {option: "Vue", answer:"false"},
            {option: "Angular", answer:"false"},
            {option: "Ruby on Rails", answer:"true"}
        ] 
    },
    {
        question: "Aşağıgdakilerden hangisi ECMASCRIPT 6 ile birlikte gelmemistir?",
        answers:[
            {option: "var", answer:"true"},
            {option: "let, const", answer:"false"},
            {option: "arrow functions", answer:"false"},
            {option: "classes", answer:"false"},

        ]
    },
    {
        question: "Aşağıdakilerden hangisi, bir döngü içinde kullanıldığında, döngüyü sonlandırmak için kullanılan bir komuttur?",
        answers:[
            {option: "continue", answer:"false"},
            {option: "return", answer:"false"},
            {option: "break", answer:"true"},
            {option: "exit", answer:"false"},

        ]
    },
    {
        question: "Aşağıdakilerden hangisi, bir JavaScript nesnesindeki belirli bir özelliğin var olup olmadığını kontrol etmek için kullanılan bir yöntemdir?",
        answers:[
            {option: "exist()", answer:"false"},
            {option: "includes()", answer:"false"},
            {option: "hasOwnProperty()", answer:"true"},
            {option: "isArray()", answer:"false"},

        ]
    },
    {
        question:"Aşağıdakilerden hangisi, JavaScript'te bir değişkenin değerini ve türünü kontrol etmek için kullanılan bir yöntemdir?",
        answers:[
            {option: "inspect()", answer:"false"},
            {option: "typeof()", answer:"true"},
            {option: "toString()", answer:"false"},
            {option: "valueOf()", answer:"false"},

        ]
        
    }
]