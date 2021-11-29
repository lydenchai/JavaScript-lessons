const GET_ITEMS_REQ = "http://192.168.0.101:3000/items";

// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
function displayArray(array) {
  // 0 - Remove the container of tasks
  let container = document.getElementById("container");
  container.remove();

  // 1 - Create a new container of tasks
  container = document.createElement("ul");
  container.id = "container";
  document.body.appendChild(container);

  // 2 -  For all items,  create a new li with the text item and append it the container
  for (let item of array) {
    let li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  }
}

function refreshAction() {
  axios.get(GET_ITEMS_REQ).then((res) => {
    let items = res.data;
    displayArray(items);
  });
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
let refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", refreshAction);
