let nameInput = document.querySelector("#nameInput");
let colorInput = document.querySelector("#colorInput");

let saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  // TODO Get the animal  name and color  and save it to the local storage
  let animal = { "name":nameInput.value, "color":colorInput.value};
  // Note : you need to create an OBJECT to store :
  localStorage.setItem("animal", JSON.stringify(animal));
  // let animal = { name: theName, color: theColor };
});

let restoreButton = document.querySelector("#restoreButton");
restoreButton.addEventListener("click", (e) => {
  // TODO Restore the objet with the name and color and try to get the properties
  // What 's happen ? what you cannot get it ?
  let data = localStorage.getItem("animal");
  console.log(JSON.parse(data));

});
