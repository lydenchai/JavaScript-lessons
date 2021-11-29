// TODO

// Type of request:	  POST
// POST URL	:	        https://reqres.in/api/users
// POST VALUE	:	      { "name": "rady","job": "wep senior trainer" }

// WARNING !!
//  Now are are NOT using the axios.get  but axios.post !!

// => What is the difference ?
// 	- with axios.post you can also give an etra value as parameter (example  : an number, an object)
//
// 	- to be clear
// 		axios.get( <url> )
// 		axios.post( <url>,  value )

// => When do we use POST ?
// 	- We use GET only to get data
// 	- We use POST when we want to submit some data  (example : updload a file or ask the server to create a new book )

// ************** CORRECTION ***********************************
function afterSuccess(response) {
  console.log("data created at: " + response.data.createdAt);
  console.log("data id is : " + response.data.id);
}

let url = "https://reqres.in/api/users";
let value = { name: "rady", job: "wep senior trainer" };

axios
  .post(url, value)
  .then(afterSuccess)
  .catch((e) => console.log("error"));
