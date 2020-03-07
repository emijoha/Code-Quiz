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

// Grab elements
var startButton = document.getElementById("startButton");
var timeDisplay = document.getElementById("timer");

// On clicking #startButton element, loads quiz.html page in same tab. only works when on index.html page
startButton.addEventListener("click", function() {
    window.location.replace("quiz.html");
});