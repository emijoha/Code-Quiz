// Questions as objects, stored in qarray
// ____________________________________________________________________________________________
var quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["1. <js>", "2. <script>", "3. <javascript>", "4. <link>"],
        answer: "2. <script>"
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["1. onclick", "2. onchange", "3. onmouseclick", "4. onmouseover"],
        answer: "1. onclick"
    },

    {
        question: "Which do you use to display a message in an alert box?",
        options: ["1. msgBox()", "2. alertBox()", "3. msg()", "4. alert()"],
        answer: "4. alert()"
    },

    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["1. x", "2. *", "3. =", "4. -"],
        answer: "3. ="
    }
];

//  Global variables
// ____________________________________________________________________________________________
var currentQuestionIndex = 0;
var totalQuestions = quizQuestions.length;
var secondsLeft = 75;
var quizOver = false;
var scoreTime;

// Grab elements from quiz.html
// ____________________________________________________________________________________________
var timeDisplay = document.getElementById("timer");
var quizDisplay = document.getElementById("question-box");
var questionDisplay = document.getElementById("question-display");
var optionButtonsDiv = document.getElementById("button-wrapper");
// Below, querySelectorAll creates Node list array of all buttons in the buttons div
var allOptions = document.querySelectorAll("button");
var resultDisplay = document.getElementById("result-display");
var playerInitialsDiv = document.getElementById("initials-input-div");
var timeScoreDisplay = document.getElementById("score-display");
var playerInitials = document.getElementById("initials-input");
var submitInitialsButton = document.getElementById("submit-button");

// Call renderQuestion function (will render just for index of 0, there rest will render after button click if conditionals met and with eacj increasing index
// ____________________________________________________________________________________________
renderQuestion();

// Event Listener and validation (wrong or correct message display)
// TO DO: renderNextQuestion will be worked into this function
//____________________________________________________________________________________________
// add the event listener to the div containing the option buttons
optionButtonsDiv.addEventListener("click", function (event) {
    // target isButton if its nodeName is BUTTON, so that clicking the surrounding div does not trigger event function
    var isButton = event.target.nodeName === "BUTTON";
    // when target is not button, function does nothing
    if (!isButton) {
        return;
    }
    // Checking Answer: the textContent of the button clicked should equal quizQuestions[currentQuestionIndex].answer
    else if (event.target.textContent === quizQuestions[currentQuestionIndex].answer) {
        displayResult("Correct!");
        // will only render next question if questions list is not exhausted
        if (currentQuestionIndex < totalQuestions) {
            currentQuestionIndex ++;
            renderQuestion();
        }
        else {
            return;
        }
    }
    // When button clicked does not match answer, 10 seconds deducted and time displayed updated. 
    else {
        displayResult("Wrong!");
        secondsLeft = secondsLeft - 10;
        timeDisplay.innerText = secondsLeft;
        //  next questions rendered is questions list is not exhausted
        if (currentQuestionIndex < totalQuestions) {
            currentQuestionIndex ++;
            renderQuestion();
        }
        else {
            return;
        }  
    }
});

// Start Timer 
// ____________________________________________________________________________________________
var startTimer = setInterval(function () {

    if (currentQuestionIndex === totalQuestions) {
        quizOver = true;
        clearInterval(startTimer);
        timeDisplay.innerText = secondsLeft;
        allDone();
    }
    
    else if (secondsLeft > 0) {
        secondsLeft--;
        timeDisplay.innerText = secondsLeft;
    }

    else if (secondsLeft <= 0) {
        quizOver = true;
        clearInterval(startTimer);
        timeDisplay.innerText = secondsLeft;
        allDone();
    }

}, 1000);

// DEFINE Function for displaying result message and removing it 500 milisecs
//____________________________________________________________________________________________
function displayResult(message) {
    resultDisplay.textContent = message;
    resultDisplay.classList.remove("hidden");

    setTimeout(function () {
        resultDisplay.textContent = "";
        resultDisplay.classList.add("hidden");
    }, 500);
};

// DEFINE renderQuestion function
// ____________________________________________________________________________________________
function renderQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        questionDisplay. textContent = quizQuestions[currentQuestionIndex].question;
        for (var i = 0; i < quizQuestions[currentQuestionIndex].options.length; i++) {
            var optionText = quizQuestions[currentQuestionIndex].options[i];
            allOptions[i].textContent = optionText;
        }    
    }
};

// DEFINE quizDone function for removing quiz elements, rendering "All done!" message, defining and displaying var scoreTime, and generating label and input for player initials with submit button.
// ____________________________________________________________________________________________
function allDone() {
    
    setTimeout(function () {
        questionDisplay.textContent = "All done!";
        optionButtonsDiv.setAttribute("class", "hidden");
        playerInitialsDiv.classList.remove("hidden");
        timeScoreDisplay.textContent = "Your final score is " + secondsLeft + ".";
    }, 500);

};

// Click event for player initials submit button
// locally store initals, secondsLeft (timeScore) in var player oject (JSON here or on highscore.js???). Then loads highscores.html.
// ____________________________________________________________________________________________
submitInitialsButton.addEventListener("click", function(event) {
    localStorage.setItem("playerScore", playerInitials.value + " - " + secondsLeft);
    window.location.replace("highscores.html");
});

