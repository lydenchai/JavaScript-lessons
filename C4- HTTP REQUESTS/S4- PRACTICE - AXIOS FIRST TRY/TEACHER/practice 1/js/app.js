const studentsContainer = document.getElementById("studentsContainer");

function afterStudentRequest(response) {
  console.log(response.data);
  let students = response.data;
  for (student of students) {
    // Create a LI for the student
    const li = document.createElement("li");
    studentsContainer.appendChild(li);

    const h1 = document.createElement("h1");
    h1.textContent = "name : " + student.name;
    li.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "nickname : " + student.nickname;
    li.appendChild(p);

    const classP = document.createElement("p");
    classP.textContent = "class : " + student.class;
    li.appendChild(classP);
  }
}

// Request a GET on STUDENT_URL to get the data from the JSON
// Once done the function  afterStudentRequest will be called
const STUDENT_URL = "data/students.json";

axios.get(STUDENT_URL).then(afterStudentRequest);
