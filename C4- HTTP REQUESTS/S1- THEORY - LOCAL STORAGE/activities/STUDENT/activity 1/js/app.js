let valueInput = document.querySelector("#valueInput");

let saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", (e) => {
  let price = valueInput.value;
  localStorage.setItem("myPrice", price);

  // Get the price value and save it to the local storage
});

let restoreButton = document.querySelector("#restoreButton");
restoreButton.addEventListener("click", (e) => {
  let myPrice = localStorage.getItem("myPrice");

  valueInput.value = myPrice;
  // Get the local storage value  for the price and  update the input
});
