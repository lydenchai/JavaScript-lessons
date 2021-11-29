function updateDOM() {
  // 1 - UPDATE ITEMS ------------------------------

  // 1.1 remove the container and create it again
  let itemsContainer = document.querySelector("#itemsContainer");
  itemsContainer.remove();
  itemsContainer = document.createElement("div");
  itemsContainer.id = "itemsContainer";

  let parent = document.querySelector(".container");
  parent.appendChild(itemsContainer);

  // 1.2  Add all items
  for (value of items) {
    let div = document.createElement("div");
    div.className = "item";
    let h2 = document.createElement("h2");
    let h1 = document.createElement("h1");
    h1.textContent = value.price + " $";
    h2.textContent = value.item;
    div.appendChild(h2);
    div.appendChild(h1);
    itemsContainer.appendChild(div);
  }
}

function changeAllowance(event) {
  event.preventDefault();
}

function addItem(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;

  if (name != "" && price != "") {
    // Add item to the list
    let item = { item: name, price: price };
    items.push(item);

    // Display again the DOM
    updateDOM();

    // Save the list
    save();
  }
}

function save() {
  // TODO  SAVE THE ITEMS TO THE STORAGE
  localStorage.setItem("items", JSON.stringify(items));
}

function load() {
  // TODO-1  SAVE THE ITEMS TO THE STORAGE
  items = JSON.parse(localStorage.getItem("items"));
  if (items === null) {
    items = [];
  }
  // TODO-2  CALL THE FUNCTION TO UPDATE THE DOM
  updateDOM();
}

// GLOBAL DATA  ---------------------------------------------------------------------
let items = [];

// MAIN -------------------------------------------------------------------------------
const btn_add = document.querySelector("#add");
btn_add.addEventListener("click", addItem);

let btnAllowance = document.getElementById("allowanceDollar");
btnAllowance.addEventListener("change", changeAllowance);

// 1- Load data
load();

// 2- Refresh DOM
updateDOM();
