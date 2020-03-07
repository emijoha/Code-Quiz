// Question objects array
var questions = [
    {
        // question: "What is the answer to this question?",
        // answers: ["1. Answer", "2. Answer", "3. Answer", "4.Answer"],
        // correct: 
    }
]

// Grab elements
var startButton = document.getElementById("startButton");
var timeDisplay = document.getElementById("timer");

// On clicking #startButton element, loads quiz.html page in same tab
startButton.addEventListener("click", function() {
    window.location.replace("quiz.html");
});

// Create time variable, counting down from 75 seconds
var time = 75;

// Quiz countdown timer function
function quizTimer() {
    
}
