// Global variable
// ____________________________________________________________________________________________
var playerScore = localStorage.getItem("playerScore");

// Grab HTML elements
// ____________________________________________________________________________________________
var playerScoreDiv = document.getElementById("player-score-div");
var playerScoreDisplay = document.getElementById("player-score-span");
var goBackButton = document.getElementById("go-back");
var clearButton = document.getElementById("clear-score");

// call renderHighscore
// ____________________________________________________________________________________________
renderHighscore();

// DEFINE renderHighscore function
// ____________________________________________________________________________________________
function renderHighscore() {
    playerScoreDisplay.textContent = playerScore;
};

// Go Back button click event: goes back to index.html page
goBackButton.addEventListener("click", function() {
    window.location.replace("index.html");
});

// Clear Highscore button click event: removes local storage and clears display div
clearButton.addEventListener("click", function() {
    playerScoreDiv.classList.add("hidden");
    localStorage.removeItem("playerScore");
});