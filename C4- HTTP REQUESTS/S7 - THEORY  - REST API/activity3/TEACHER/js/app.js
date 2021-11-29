function requestMovie(event) {
  event.preventDefault();

  // TODO 1 : define the full URL to request the movie information entered in the input
  let movieName = searchInput.value;
  let url =
    "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=dog";

  // We call teh request the URL
  axios.get(url).then((response) => {
    console.log("f");
  });
}

const poster = document.querySelector("#poster");
const titleH2 = document.querySelector("#movieTitle");
const yearP = document.querySelector("#year");
const genreP = document.querySelector("#genre");
const actorsP = document.querySelector("#actors");

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", requestMovie);
