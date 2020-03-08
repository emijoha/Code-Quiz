// Questions as objects, stored in qarray
// ____________________________________________________________________________________________
var quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["1. <js>", "2. <script>", "3. <javascript>", "4. <link>"],
        answer: 1
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["1. onmouseover", "2. onchange", "3. onmouseclick", "4. onclick"],
        answer: 3
    },

    {
        question: "Which do you use to display a message in an alert box?",
        options: ["1. msgBox()", "2. alertBox()", "3. msg()", "4. alert()"],
        answer: 3
    },

    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["1. x", "2. *", "3. =", "4. -"],
        answer: 2
    }
];

//  Global variables
// ____________________________________________________________________________________________
var currentQuestion = 0;
var secondsLeft = 75;
// var quizOver = false; not sure when or if needed

// Grab elements from quiz.html
// ____________________________________________________________________________________________
var timeDisplay = document.getElementById("timer");
var quizDisplay = document.getElementById("question-box");
var questionDisplay = document.getElementById("question-display");
var optionButtonsDiv = document.getElementById("button-wrapper");
// Below, querySelectorAll creates Node list array of the buttons in the order they are in html.
var allOptions = document.querySelectorAll("button");
var optionOne = document.getElementById("option-1");
var optionTwo = document.getElementById("option-2");
var optionThree = document.getElementById("option-3");
var optionFour = document.getElementById("option-4");
// Eventually, when any of the buttons above are clicked, answer validates, result message displayed (for 500? milisecs), and next question rendered
// theres is no "submit", the click event on ANY of these buttons acts like a submit 
var resultDisplay = document.getElementById("result-display");

// start timer ***WORKS BUT TAKES A WHILE AT BEGINNING TO COUNT DOWN THE FIRST SECOND***
// ____________________________________________________________________________________________
var startTimer = setInterval(function() {
    if (secondsLeft <= 0) {
        clearInterval(startTimer);
        // quizOver = true; 
    } 
    else {
    secondsLeft --;
    timeDisplay.innerText = secondsLeft;
    }
    
}, 1000);

// Event Listener and validation (wrong or correct message display)
// Eventually, rendering next questions will be worked into this function
//____________________________________________________________________________________________
// add the event listener to the div containing the option buttons
optionButtonsDiv.addEventListener("click", function(event) {

    // target isButton if its nodeName is BUTTON, so that clicking the surrounding div does not trigger event function
    var isButton = event.target.nodeName === "BUTTON";
    
    // when target is not button, function does nothing
    if (!isButton) {
        return;
    }

    // Testing Validation: the textContent of the button clicked should equal quizQuestions[i].options[answer] to display "correct", all else display "wrong"
    else if (event.target.textContent == "1. This") {
        displayResult("Correct!");
    }

    // SOLVED: When button clicked does not match answer, 10 seconds successfully deducted from timerscore (secondsLeft)
    else if (event.target.textContent != "1. This") {
        displayResult("Wrong!");
        // BUG: When secondsLeft <=0 , time stops counting down, but time display can keep changing by -10 with adddition button clicks, will probably be solved by ending quiz after secondsLeft < 0 or quizOver = true
        secondsLeft = secondsLeft - 10;
        timeDisplay.innerText = secondsLeft;
    }
    
});

// Function for displaying result message and timing it to resert to blank after 500 milisecs
//____________________________________________________________________________________________
function displayResult(message) {
    resultDisplay.textContent = message;

    setTimeout(function() {
        resultDisplay.textContent = "";
    }, 250);
};


// Following step: include in click event the function/code for rendering the next question


// PAST PSEUDOCODE / PAST TESTING
//____________________________________________________________________________________________
//____________________________________________________________________________________________


//// RESOLVED: Was able to achieve this using a for loop and the allOptions node list array instead of targeting individual buttons
// Testing that textContent will successfully change, and is targeted where desired
//____________________________________________________________________________________________
questionDisplay.textContent = "Will this display a question?";
optionOne.textContent = "1. This";
optionTwo.textContent = "2. That";
optionThree.textContent = "3. Here";
optionFour.textContent = "4. There";
resultDisplay.textContent = "";
