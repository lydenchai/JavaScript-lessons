//
// WHAT TO DO ?
//
// Complete this code to SAVE and RESTORE the list of cities
//  - SAVE : after we press on ADD CITY, store the list on the local storage
//  - RESTORE : when the page is refreshed, the list must be restored form storage
//

// FUNCTIONS--------------------------------------------------------
function displayCities() {
  // Remove the  container and create a new one
  cityContainer.remove();
  cityContainer = document.createElement("ul");
  cityContainer.id = "cardContainer";
  mainContainer.appendChild(cityContainer);

  // 2 - For all tasks,  create a new div (class : item), and append it the container
  for (let city of cities) {
    let item = document.createElement("li");
    item.textContent = city.name + " - " + city.country;
    cityContainer.appendChild(item);
  }
}

function saveCities() {
  localStorage.setItem("cities", JSON.stringify(cities));
}

function loadCities() {
  let storateCities = localStorage.getItem("cities")
  if (storateCities === null) {
		cities = [];
  }
  else {
	  cities = JSON.parse(localStorage.getItem("cities"));
  }	  
}

function addCity(event) {
  event.preventDefault();

  // Create a new city
  let newCity = {};
  newCity.name = cityForm.name.value;
  newCity.country = cityForm.country.value;

  // Add the book to the list of books
  cities.push(newCity);

  // Update HTML
  displayCities();

  // save cities
  saveCities();
}

// GLOBAL VARIABLES
let cities = [];

// MAIN --------------------------------------------------------
const btnCreate = document.querySelector("#btn-create");
let mainContainer = document.querySelector("#mainContainer");
let cityContainer = document.querySelector("#cardContainer");
btnCreate.addEventListener("click", addCity);

// Load  cities
loadCities();

// Display cities
displayCities();
