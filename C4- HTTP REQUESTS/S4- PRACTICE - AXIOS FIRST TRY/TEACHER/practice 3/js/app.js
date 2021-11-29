function afterRequest(response) {
  let users = response.data;

  for (let user of users) {
    // create feildset
    const fieldset = document.createElement("fieldset");
    fieldset.style.margin = "10px";
    document.body.appendChild(fieldset);

    //2. create li
    const userName = document.createElement("li");
    userName.textContent = user.name;
    fieldset.appendChild(userName);

    const userEmail = document.createElement("li");
    userEmail.textContent = user.email;
    fieldset.appendChild(userEmail);

    const userCompanyName = document.createElement("li");
    userCompanyName.textContent = user.company.name;
    fieldset.appendChild(userCompanyName);
  }
}

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
axios.get(USERS_URL).then(afterRequest);
