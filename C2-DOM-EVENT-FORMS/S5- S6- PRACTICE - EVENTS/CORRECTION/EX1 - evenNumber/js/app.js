const NUMBER_BOX = 10;

// 1- Create the 10 boxes
let container = document.querySelector(".container");

for (let i = 0; i < NUMBER_BOX; i++) {
  // 1- Create a span and set it with a random number
  // between 1 and 100
  // Example :   <span>49</span>
  let spanText = document.createElement("span");
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  spanText.textContent = randomNumber;

  // 2- Create a box div to wrap the span
  // The div must have:
  //    - class = "box"
  //    - id = box<index>   (index of thebox, 0 to 9)
  // Example :   <div class="box" id="box5"><span>49</span></div>
  let box = document.createElement("div");
  box.classList.add("box");
  box.setAttribute("id", "box" + i);
  box.appendChild(spanText);

  // 3 - Add a listener when clicking on the box
  box.addEventListener("click", onBoxClick);

  // 3- Add the box to the container
  container.appendChild(box);
}

// This function is called when any box is clicked
function onBoxClick(event) {
  // 1- Get the box related to the click event
  let box = event.target;

  // 2- Get the span (the childen of the box) and get the number
  let span = box.children[0];
  let isNumberEven = parseInt(span.textContent) % 2 === 0;

  //  3- If even is EVEN, set the box to green and spam text to WON and the number
  //  4- If even is ODD, set the box to red and spam text to LOST and the number
  //  5- Also change the opacity of the span to make it visible
  if (isNumberEven) {
    box.style.background = "green";
    span.textContent = "WON " + "\n" + span.textContent;
    span.style.opacity = "1";
  } else {
    box.style.background = "red";
    span.textContent = "LOST" + span.textContent;
    span.style.opacity = "1";
  }
}
