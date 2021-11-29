const BALL_SIZE = 100;
const BALL = document.getElementById("ball");
const BALL_AREA = document.getElementById("ball-area");

let moveLeft = () => {
  BALL.style.left = "0px";
};

let moveRight = () => {
  let areaWidth = BALL_AREA.getBoundingClientRect().width;
  BALL.style.left = areaWidth - BALL_SIZE + "px";
};

let moveUp = () => {
  BALL.style.top = "0";
};

let moveDown = () => {
  let areaHeight = BALL_AREA.getBoundingClientRect().height;
  BALL.style.top = areaHeight - BALL_SIZE + "px";
};

let btnMoveLeft = document.getElementById("btn-move-left");
let btnMoveRight = document.getElementById("btn-move-right");
let btnMoveUp = document.getElementById("btn-move-up");
let btnMoveDown = document.getElementById("btn-move-down");

btnMoveLeft.addEventListener("click", moveLeft);
btnMoveRight.addEventListener("click", moveRight);
btnMoveUp.addEventListener("click", moveUp);
btnMoveDown.addEventListener("click", moveDown);
