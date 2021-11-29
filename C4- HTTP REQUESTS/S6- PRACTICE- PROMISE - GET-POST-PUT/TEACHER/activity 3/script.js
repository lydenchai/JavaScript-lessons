// TODO
// Type of request:	GET
// GET URL		        https://reqres.in/api/unknown/23

// You should receive an ERROR 404 (not found)
//	- you need to catch it and display a <p> with a message : "SORRY WE ARE SLEEPING !!"

// ************** CORRECTION ***********************************
let errorAfterRequest = (error) => {
     const message = document.querySelector('#theText');
     message.textContent = "SORRY WE ARE SLEEPING !!";
   
}
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
    const URL = "https://reqres.in/api/unknown/23";
    axios
        .get(URL)
        .then(afterRequest)
        .catch(errorAfterRequest);
}


const btn = document.querySelector('button');
btn.addEventListener('click', showData);