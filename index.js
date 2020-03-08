// Grab index.html button element
var startButton = document.getElementById("startButton");

// On clicking #startButton element, loads quiz.html page in same tab. only works when on index.html page
startButton.addEventListener("click", function() {
    window.location.replace("quiz.html");
});