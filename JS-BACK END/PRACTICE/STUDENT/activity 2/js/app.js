let nameInput = document.querySelector("#nameInput");
let colorInput = document.querySelector("#colorInput");

let saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  // TODO Get the animal  name and color  and save it to the local storage
  // Note : you need to create an OBJECT to store :
  let animal = { "name":nameInput.nodeValue, "color":colorInput.nodeValue };
  localStorage.setItem("animal", JSON.stringify(animal));
  
});

let restoreButton = document.querySelector("#restoreButton");
restoreButton.addEventListener("click", (e) => {
  // TODO Restore the objet with the name and color and try to get the properties
  // What 's happen ? what you cannot get it ?
  let date = localStorage.getItem("animal");
  JSON.parse(date);
});
