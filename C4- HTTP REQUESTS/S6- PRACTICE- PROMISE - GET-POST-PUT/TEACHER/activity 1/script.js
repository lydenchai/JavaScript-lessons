// TODO
// Type of request:	GET
// GET URL		        	https://reqres.in/api/unknown/2

// To do when received the response
//	- Get the color and the name in the data
//	- display the name in a <p> with the right color as background

// ************** CORRECTION ***********************************
function afterSuccess(response) {
  let text = response.data.data.name;
  let color = response.data.data.color;

  let p = document.getElementById("theText");
  p.textContent = text;
  p.style.background = color;
}

let url = "https://reqres.in/api/unknown/2";

axios
  .get(url)
  .then(afterSuccess)
  .catch((e) => console.log("error"));
