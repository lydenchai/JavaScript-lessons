const STATUS_REQUEST = "http://localhost:3000/status";

const RED_STATUS = "RED";
const YELLOW_STATUS = "YELLOW";
const GREEN_STATUS = "RED";

function refreshDom(status) {
  RED_LIGHT.className = "grey";
  YELLOW_LIGHT.className = "grey";
  GREEN_LIGHT.className = "grey";

  if (status === RED_STATUS) {
    RED_LIGHT.className = "red";
  } else if (status === YELLOW_STATUS) {
    YELLOW_LIGHT.className = "yellow";
  } else {
    GREEN_LIGHT.className = "green";
  }
}

function setStatus() {
  // 1- get status from  combo box
  let status = TRAFFIC_STATUS.value;

  // 2- Send POST to change the status
  axios.post(STATUS_REQUEST, { status }).then((response) => {
    // 2.1  refresh DOM
    refreshDom(response.data);
  });
}

function getColor() {
  axios.get(STATUS_REQUEST).then((response) => {
    let status = response.data;

    // 1- update combo box
    TRAFFIC_STATUS.value = status;

    // 2- refresh DOM
    refreshDom(status);
  });
}

const RED_LIGHT = document.querySelector("#redLight");
const YELLOW_LIGHT = document.querySelector("#yellowLight");
const GREEN_LIGHT = document.querySelector("#greenLight");
const TRAFFIC_STATUS = document.querySelector("#trafficStatus");
const SET_BUTTON = document.querySelector("#setAllColor");
SET_BUTTON.addEventListener("click", setStatus);

// INIT CODE       ----------------------------

// we read the status from the server and update the DOM
getColor();
