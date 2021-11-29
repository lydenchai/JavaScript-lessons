const NUMBER_BOX = 10;
let container = document.querySelector(".container");

let div = document.createElement("div");
div.className = "box";
let span = document.createElement("span");
span.textContent = 42;
div.appendChild(span);
span.style.opacity = 1;
div.addEventListener("click", onBoxClick);
container.appendChild(div);

let div2 = document.createElement("div");
div2.className = "box";
let span2 = document.createElement("span");
span2.textContent = 34;
div2.appendChild(span2);
span2.style.opacity = 1;
div2.addEventListener("click", onBoxClick);
container.appendChild(div2);

// This function is called when any box is clicke
function onBoxClick(event) {
  let div = event.target;
  let span = div.children[0];

  let numberString = span.textContent;
  let number = parseInt(numberString);

  span.style.color = "red";
  span.textContent = "ronan" + number;

  let spanText = span.textContent;
  console.log("number ", spanText);
}
