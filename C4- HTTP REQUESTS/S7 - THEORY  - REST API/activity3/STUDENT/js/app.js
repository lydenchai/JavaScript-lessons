function requestMovie(event) {
  event.preventDefault();

  // TODO 1 : define the full URL to request the movie information entered in the input
  let url = "TODO";

  // We call teh request the URL
  axios.get(url).then((response) => {
    // If sucess, we update the  fields

    if (response.data.Poster !== null) {
      poster.src = response.data.Poster;
    }

    titleH2.textContent = response.data.Title;
    yearP.textContent = response.data.Year;
	
	// TODO 2 : complete this code to also display the genre and actors of this movie
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
