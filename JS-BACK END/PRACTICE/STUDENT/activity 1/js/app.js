let valueInput = document.querySelector("#valueInput");

let saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", (e) => {
  // Get the price value and save it to the local storage
  localStorage.setItem("price", valueInput.value);
});

let restoreButton = document.querySelector("#restoreButton");
restoreButton.addEventListener("click", (e) => {
  // Get the local storage value  for the price and  update the input
  valueInput.value = localStorage.getItem("price");
});