const question = document.getElementById('question');
const quizArea = document.getElementById('game');
const choiceContainer = document.getElementById('choice-container');
let questions = [
    {
      question: "Inside which HTML element do we put the JavaScript??",
      choiceText: ["<script>", "<javascript>", "<js>", "<scripting>"],
      answer: 1
    },
    {
      question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
      choiceText: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      choiceText: "msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');",
      answer: 4
    }
  ]

  console.log(questions[0].choiceText); //current questıons choice options seçmek için

let a