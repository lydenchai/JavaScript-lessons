// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
function submitData() {
  // 1- get values from forms
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let fruit = document.getElementById("fruit").value;
  let message = document.getElementById("sms").value;

  let gender = "Male";
  if (document.getElementById("femaleRadio").checked) {
    gender = "Female";
  }

  let subjects = document.getElementsByClassName("subject");
  let subjectsText = "";
  for (subject of subjects) {
    if (subject.checked) {
      subjectsText += subject.value + " ,";
    }
  }

  // 2- change labels
  document.getElementById("getUsername").textContent = username;
  document.getElementById("getGender").textContent = gender;
  document.getElementById("getEmail").textContent = email;
  document.getElementById("getSubject").textContent = subjectsText;
  document.getElementById("getFruit").textContent = fruit;
  document.getElementById("getMessage").textContent = message;
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
let applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", submitData);
