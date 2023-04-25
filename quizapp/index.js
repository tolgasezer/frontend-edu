//Buttons 

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const submitBtn = document.getElementById("submit");
const restartBtn = document.getElementById("restart");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");


let score = 0;
let currentQuestion = 0;

//   question & answer array
let questions = [
    {
        question: "Aşağıgdakilerden hangisi frontend frameworklerinden biri değildir?",
        answers:[
            {option: "React", answer:false},
            {option: "Vue", answer:false},
            {option: "Angular", answer:false},
            {option: "Ruby on Rails", answer:true}
        ] 
    },
    {
        question: "Aşağıgdakilerden hangisi ECMASCRIPT 6 ile birlikte gelmemistir?",
        answers:[
            {option: "var", answer:true},
            {option: "let, const", answer:false},
            {option: "arrow functions", answer:false},
            {option: "classes", answer:false},

        ]
    },
    {
        question: "Aşağıdakilerden hangisi, bir döngü içinde kullanıldığında, döngüyü sonlandırmak için kullanılan bir komuttur?",
        answers:[
            {option: "continue", answer:false},
            {option: "return", answer:false},
            {option: "break", answer:true},
            {option: "exit", answer:false},

        ]
    },
    {
        question: "Aşağıdakilerden hangisi, bir JavaScript nesnesindeki belirli bir özelliğin var olup olmadığını kontrol etmek için kullanılan bir yöntemdir?",
        answers:[
            {option: "exist()", answer:false},
            {option: "includes()", answer:false},
            {option: "hasOwnProperty()", answer:true},
            {option: "isArray()", answer:false},

        ]
    },
    {
        question:"Aşağıdakilerden hangisi, JavaScript'te bir değişkenin değerini ve türünü kontrol etmek için kullanılan bir yöntemdir?",
        answers:[
            {option: "inspect()", answer:false},
            {option: "typeof()", answer:true},
            {option: "toString()", answer:false},
            {option: "valueOf()", answer:false},

        ]
        
    }
]

//Click events 

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);


//=========================//
//true or false 

// function isThatTrue(){
//     if (questions[currentQuestion].answers[0].answer && currentQuestion<questions.length ){
//         score ++;
//         next();
//     }
// } need to know selected option.

// start quiz function


function startQuiz(){
    currentQuestion= 0;
    totalScore.innerHTML= questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[0].option;
    option2.innerHTML = questions[currentQuestion].answers[1].option;
    option3.innerHTML = questions[currentQuestion].answers[2].option;
    option4.innerHTML = questions[currentQuestion].answers[3].option;
    //check answer and ++ score
    option1.onclick = () => {
        if(questions[currentQuestion].answers[0].answer && score < questions.length ){
            score++    // i cant stop score at 5
        }
        userScore.innerHTML = score;
        if(currentQuestion<questions.length){
            next();
        }
    };
    option2.onclick = () => {
        if(questions[currentQuestion].answers[1].answer && score < questions.length){
            score++
        }
        userScore.innerHTML = score;
        if(currentQuestion<questions.length){
            next();
        }
    };
    option3.onclick = () => {
        if(questions[currentQuestion].answers[2].answer && score <= questions.length){
            score++
        }
        userScore.innerHTML = score;
        if(currentQuestion<questions.length){
            next();
        }
    };
    option4.onclick = () => {
        if(questions[currentQuestion].answers[3].answer && score <= questions.length){
            score++
        }
        userScore.innerHTML = score;
        
        if(currentQuestion<questions.length){
            next();
        }
    };
    prevBtn.classList.add("hide");
}

//call quiz when the page reloaded
startQuiz();
 
//restart and reset score and button 
function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    option1.classList.remove("hide");
    option2.classList.remove("hide");
    option3.classList.remove("hide");
    option4.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    startQuiz();
 };

 function next() {
    currentQuestion++;
    if(currentQuestion >= questions.length) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[0].option;
    option2.innerHTML = questions[currentQuestion].answers[1].option;
    option3.innerHTML = questions[currentQuestion].answers[2].option;
    option4.innerHTML = questions[currentQuestion].answers[3].option;
 };
 
 function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }else{
        prevBtn.classList.remove("hide")
    }
    questionText.innerHTML = questions[currentQuestion].question;
    option1.innerHTML = questions[currentQuestion].answers[0].option;
    option2.innerHTML = questions[currentQuestion].answers[1].option;
    option3.innerHTML = questions[currentQuestion].answers[2].option;
    option4.innerHTML = questions[currentQuestion].answers[3].option;

    nextBtn.classList.remove("hide");
 };

 function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    option1.classList.add("hide");
    option2.classList.add("hide");
    option3.classList.add("hide");
    option4.classList.add("hide");   
    questionText.innerHTML ="Congratulations on submitting the Quiz!"
 }