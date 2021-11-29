//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
  if (event.target.className == "delete") {
    let li = event.target.parentElement;
    bookList.removeChild(li);
  }
}

function addBook(event) {
  event.preventDefault();

  // 1- Get the book name from the input field
  let bookValue = document.getElementById("add-book-textfield").value;

  // 2- Create a new spam bookName for the book name, class name = name
  let bookName = document.createElement("span");
  bookName.textContent = bookValue;
  bookName.className = "name";

  // 3- Create a new spam deleteBtn for the button delete, class name = delete
  let deleteBtn = document.createElement("span");
  deleteBtn.textContent = "delete";
  deleteBtn.className = "delete";

  // 4- Create a new li
  let li = document.createElement("li");

  // 5- Add bookName and deleteBtn to li and li to the  bookList UL
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  bookList.appendChild(li);
}

function searchBook(event) {
  // 1- Get the search text
  let inputText = searchBookInput.value;
  let inputTextLower = inputText.toLowerCase();
  // 2- Loop on all LI
  let bookList = document.querySelectorAll("#book-list li");
  for (let liItem of bookList) {
    console.log(liItem);
    let bookTitle = liItem.firstElementChild.textContent.toLowerCase();
    //console.log(bookTitle);

    // Update the style of the LI (visible or hidden)
    let displayStyle = "";
    console.log(bookTitle.indexOf(inputTextLower));
    if (bookTitle.indexOf(inputTextLower) == -1) {
      displayStyle = "none";
    } else {
      displayStyle = "block";
    }
    liItem.style.display = displayStyle;
  }
}

//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("click", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);
