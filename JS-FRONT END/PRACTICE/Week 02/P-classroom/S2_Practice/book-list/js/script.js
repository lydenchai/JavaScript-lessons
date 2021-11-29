// 1- Get the list of books ( tips : use the querySelectorAll )
// TODO
num = document.getElementsByClassName("book-name").length;
console.log(num);
// 2- Display the number of books on paragrah "books-number"
// TODO
document.getElementById("books-number").textContent = num;

// 3- Display the title of the books  on paragrah "books-titles"
// TODO
let word = "";
for (i = 0; i < num; i++){
    word += document.getElementsByClassName("book-name")[i].textContent;
    if ( i < num - 1){
        word += " , ";
    }
}
document.getElementById("books-titles").textContent = word;