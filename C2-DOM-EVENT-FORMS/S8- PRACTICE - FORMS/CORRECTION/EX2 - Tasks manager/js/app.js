function addTask(event) {
  // 1- Prevent default to avoid to refresh the page
  // event.preventDefault();

  // 2- Get the form information
  let task = document.querySelector("#taskId");
  let labelColor = document.querySelector("#color");
  let taskDate = document.querySelector("#date");
  let dashboard = document.querySelector(".dashboard");

  // 3- Check if task text, color, date are defined => if not display a warnning :
  //        "You must fill all inputs"

  if (task.value !== "" && labelColor.value !== "" && taskDate.value !== "") {
    // 1- Create a span for the taks name
    //    - class = "task-name"
    let spanTask = document.createElement("span");
    spanTask.classList.add("task-name");
    spanTask.textContent = task.value;

    // 2- Create a span for the taks date
    //    - class = "task-date"
    let spanDate = document.createElement("span");
    spanDate.classList.add("task-date");
    spanDate.textContent = taskDate.value;

    // 3- Create a p containing the 2 spans
    let newTask = document.createElement("p");
    newTask.appendChild(spanTask);
    newTask.appendChild(spanDate);

    // 4- the P background color is the selected color - the text is back
    newTask.style.background = labelColor.value;
    newTask.style.color = "black";
    dashboard.appendChild(newTask);
  } else {
    window.confirm("You must fill all inputs");
  }
}

// MAIN ----------------------------------------------------
const btnAddTask = document.getElementById("addTaskButton");
btnAddTask.addEventListener("click", addTask);
