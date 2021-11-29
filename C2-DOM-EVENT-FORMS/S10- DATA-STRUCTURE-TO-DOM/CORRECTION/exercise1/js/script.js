// This is our data structure of TASKS
let tasks = [
  { description: "Do homework", priority: 1 },
  { description: "Wash clothes", priority: 0 },
  { description: "Dream about Javascript", priority: 1 },
];

function displayArray(array) {
  // 1 - From the parent body : create a new div  (class : container)
  let container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);

  // 2 - For all tasks,  create a new div (class : item), and append it the container
  for (let task of array) {
    let item = document.createElement("div");
    item.className = "item";
    item.textContent = task.description;

    // the priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
    let color = "red";
    if (task.priority === 0) {
      color = "grey";
    }
    item.style["background-color"] = color;

    container.appendChild(item);
  }
}

displayArray(tasks);
