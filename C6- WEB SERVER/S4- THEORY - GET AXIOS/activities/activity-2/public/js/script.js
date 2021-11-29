// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
const GET_ITEMS_REQ = "http://192.168.0.101:3000/value";

function refreshAction() {
	
	// Request a GET on  /value path and write the result on  the <P> message
	// TODO
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let message = document.getElementById("message");
let refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", refreshAction);
