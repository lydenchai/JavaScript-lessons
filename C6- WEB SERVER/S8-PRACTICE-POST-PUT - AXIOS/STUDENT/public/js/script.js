const SERVER_PORT = 3000;
const SERVER_IP = "192.168.43.239";	// TODO change this

const BASE_URL = "http://" + SERVER_IP + ":" + SERVER_PORT;


function clearScore() {
	// TODO : Request the server to clear the current score
	//		  then refresh the DOM
}

function loadSCore() {
  	// TODO : Request the server to get the current score
	//		  then refresh the DOM
}

function addScore(event) {
  event.preventDefault();
    // TODO : Request the server to CHANGE the current score from the current input values
	//		  then refresh the DOM

}


// Display the score data in the <p>
// @param score : student name, student score, and topic
function displayScore(score) {
  let text =
    "Student " + score.student + " has " + score.score + " on " + score.topic;
  currentScore.textContent = text;
}



// MAIN===========================================================================
const currentScore = document.getElementById("currentScore");
const studentInput = document.getElementById("studentInput");
const topicInput = document.getElementById("topicInput");
const scoreInput = document.getElementById("scoreInput");

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addScore);

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearScore);

// At INIT, just load the score
loadSCore();
