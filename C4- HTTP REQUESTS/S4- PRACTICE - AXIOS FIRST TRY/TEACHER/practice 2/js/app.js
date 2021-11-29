function afterRequest(response) {
  let gender = response.data.gender;

  let message = nameToTest + " is a " + gender;
  document.getElementById("answerId").textContent = message;
}

const GENDER_URL_BASE = "https://api.genderize.io?name=";
let nameToTest = "chanthy";

axios.get(GENDER_URL_BASE + nameToTest).then(afterRequest);








