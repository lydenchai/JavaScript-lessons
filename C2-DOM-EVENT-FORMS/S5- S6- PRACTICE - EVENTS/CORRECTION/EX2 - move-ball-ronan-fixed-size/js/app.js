let getBox = () => document.querySelector("#boxId");

let moveLeft = () => {
  let box = getBox();
  box.style.left = "0px";
};

let moveRight = () => {
  let box = getBox();
  box.style.left = "300px";
};

let moveUp = () => {
  let box = getBox();
  box.style.top = "0";
};

let moveDown = () => {
  let box = getBox();
  box.style.top = "300px";
};

let btnMoveLeft = document.querySelector("#btn-move-left");
let btnMoveRight = document.querySelector("#btn-move-right");
let btnMoveUp = document.querySelector("#btn-move-up");
let btnMoveDown = document.querySelector("#btn-move-down");

btnMoveLeft.addEventListener("click", moveLeft);
btnMoveRight.addEventListener("click", moveRight);
btnMoveUp.addEventListener("click", moveUp);
btnMoveDown.addEventListener("click", moveDown);
