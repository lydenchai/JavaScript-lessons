// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  let newTask = {};

  //  2- Set the description from the text field
  descriptionValue = document.getElementById("description").value;
  newTask["description"] = descriptionValue;

  // 3- Set the priority fro from select field
  priorityValue = document.getElementById("priority").value;
  if (priorityValue === "Hight") {
    newTask["priority"] = 1;
  } else {
    newTask["priority"] = 0;
  }

  // 4- Add the new object to the array
  tasks.push(newTask);

  console.log(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
