let valueInput = document.querySelector("#valueInput");

let saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", (e) => {
  // Get the price value and save it to the local storage
  price = valueInput.value;
  localStorage.setItem("price", price);
});

let restoreButton = document.querySelector("#restoreButton");
restoreButton.addEventListener("click", (e) => {
  // Get the local storage value  for the price and  update the input
  let price = localStorage.getItem("price");
  valueInput.value = price;
});

let findMin = (number1, number2) => {
  if (number1 < number2) {
    return number1;
  } else {
    return number2;
  }
};
