// Questions as objects, stored in questions array
var quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["1. <js>", "2. <script>", "3. <javascript>", "4. <link>"],
        correct: 1
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: ["1. onmouseover", "2. onchange", "3. onmouseclick", "4. onclick"],
        correct: 3
    },

    {
        question: "Which do you use to display a message in an alert box?",
        answers: ["1. msgBox()", "2. alertBox()", "3. msg()", "4. alert()"],
        correct: 3
    },

    {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["1. x", "2. *", "3. =", "4. -"],
        correct: 2
    }
];

//  Global variables
var currentQuestion = 0;
var secondsLeft = 75;
// var quizOver = false; not sure when or if needed

// Grab elements from quiz.html
var timeDisplay = document.getElementById("timer");
var quizDisplay = document.getElementById("question-box");
var questionDisplay = document.getElementById("question-prompt");
// Below, querySelectorAll creates array of the buttons in the order they are in html.
var optionButtons = document.querySelectorAll("button");
var optionOne = document.getElementById("option-1");
var optionTwo = document.getElementById("option-2");
var optionThree = document.getElementById("option-3");
var optionFour = document.getElementById("option-4");
// Eventually, when any of the buttons above are clicked, answer validates, result message displayed (for 500? milisecs), and next question rendered
// theres is no "submit", the click event on ANY of these buttons acts like a submit 
var resultDisplay = document.getElementById("result-display");


// function for main quiz.html page
// $(document).ready( function() {

    

// })

