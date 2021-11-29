// TODO
// Type of request:	GET
// GET URL		        	https://reqres.in/api/users?page=2

// To do when received the response
// 	- display the list of last name and mails

// ************** CORRECTION ***********************************

let errorAfterRequest = (error) => console.error("Request Fail", error);

let afterRequest = (response) => {
    let users = response.data.data;
    for (let user of users) {
        const box = document.createElement('fieldset');
        box.style.margin = "10px";
        const email = document.createElement('li');
        email.textContent = user.last_name;
        const lastName = document.createElement('li');
        lastName.textContent = user.email

        box.appendChild(email);
        box.appendChild(lastName);

        document.body.appendChild(box);
    }
}


let showData = () => {
    const URL = "https://reqres.in/api/users?page=2";
    axios
    .get(URL)
    .then(afterRequest)
    .catch(errorAfterRequest);
}


const btn = document.querySelector('button');
btn.addEventListener('click', showData);