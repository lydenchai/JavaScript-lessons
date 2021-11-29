const SERVER_PORT = 3000;
const SERVER_IP = "192.168.0.100";
const BASE_URL = "http://" + SERVER_IP + ":" + SERVER_PORT;

function clearScore() {
  let url = BASE_URL + "/score";
  axios.delete(url).then((response) => {
    displayScore(response.data);
  });
}

function loadSCore() {
  let gettUrl = BASE_URL + "/score";
  axios.get(gettUrl).then((response) => {
    displayScore(response.data);
  });
}

function addScore(event) {
  event.preventDefault();

  const body = {
    student: studentInput.value,
    topic: topicInput.value,
    score: scoreInput.value,
  };

  let postUrl = BASE_URL + "/score";
  axios.post(postUrl, body).then((response) => {
    displayScore(response.data);
  });
}

function displayScore(score) {
  let text =
    "Student " + score.student + " has " + score.score + " on " + score.topic;
  currentScore.textContent = text;
}

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
