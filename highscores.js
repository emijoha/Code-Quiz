// Global variable
// ____________________________________________________________________________________________
var playerScore = localStorage.getItem("playerScore");

// Grab HTML elements
// ____________________________________________________________________________________________
var playerScoreDisplay = document.getElementById("player-score-span");

// call renderHighscore
// ____________________________________________________________________________________________
renderHighscore();

// DEFINE renderHighscore function
// ____________________________________________________________________________________________
function renderHighscore() {
    playerScoreDisplay.textContent = playerScore;
};