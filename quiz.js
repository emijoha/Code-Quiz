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
        options: ["1. onmouseover", "2. onchange", "3. onmouseclick", "4. onclick"],
        answer: "4. onclick"
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
// Below, querySelectorAll creates Node list array of the buttons in their html order
var allOptions = document.querySelectorAll("button");
var optionOne = document.getElementById("option-1");
var optionTwo = document.getElementById("option-2");
var optionThree = document.getElementById("option-3");
var optionFour = document.getElementById("option-4");
var resultDisplay = document.getElementById("result-display");

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
// ***BUG: WORKS BUT TAKES A WHILE AT BEGINNING TO COUNT DOWN THE FIRST SECOND***
// ____________________________________________________________________________________________
var startTimer = setInterval(function () {

    if (currentQuestionIndex === totalQuestions) {
        quizOver = true;
        clearInterval(startTimer);
        timeDisplay.innerText = secondsLeft;
    }
    
    else if (secondsLeft > 0) {
        secondsLeft--;
        timeDisplay.innerText = secondsLeft;
    }

    else if (secondsLeft <= 0) {
        quizOver = true;
        clearInterval(startTimer);
        timeDisplay.innerText = secondsLeft;
    }

}, 1000);

// DEFINE Function for displaying result message and removing it after 250 milisecs
//____________________________________________________________________________________________
function displayResult(message) {
    resultDisplay.textContent = message;
    resultDisplay.classList.remove("hidden");

    setTimeout(function () {
        resultDisplay.textContent = "";
        resultDisplay.classList.add("hidden");
    }, 500);
};

// TO DO: DEFINE renderQuestion function
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

// TO DO: DEFINE quizDone function for removing quiz elements, rendering "All done!" message, defining and displaying var scoreTime, and generating label and input for player initials with submit button.
// Include event listener on initials submit button that locally stores initals, secondsLeft (timeScore) in var player oject (JSON here or on highscore.js???). Then loads highscores.html.
// ____________________________________________________________________________________________


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//  PAST PSEUDOCODE / PAST TESTING
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//// RESOLVED: Was able to achieve this using a for loop and the allOptions node list array instead of targeting individual buttons
// Testing that textContent will successfully change, and is targeted where desired
//____________________________________________________________________________________________
// questionDisplay.textContent = "Inside which HTML element do we put the JavaScript?";
// optionOne.textContent = quizQuestions[0].options[0];
// optionTwo.textContent = quizQuestions[0].options[1];
// optionThree.textContent = quizQuestions[0].options[2];
// optionFour.textContent = quizQuestions[0].options[3];

