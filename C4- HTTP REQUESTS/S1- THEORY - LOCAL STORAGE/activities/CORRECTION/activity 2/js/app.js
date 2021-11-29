let nameInput = document.querySelector("#nameInput");
let colorInput = document.querySelector("#colorInput");

let saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", (e) => {
  // Get the animal  name and color  and save it to the local storage
  // Note : you need to create an OBJECT to store :
  // let animal = { name: theName, color: theColor };

  let name = nameInput.value;
  let color = colorInput.value;
  let animal = { name: name, color: color };

  localStorage.setItem("animal", animal);
});

let restoreButton = document.querySelector("#restoreButton");
restoreButton.addEventListener("click", (e) => {
  // Restore the objet with the name and color and try to get the properties
  // What 's happen ? what you cannot get it ?
  let animal = localStorage.getItem("animal");
});
