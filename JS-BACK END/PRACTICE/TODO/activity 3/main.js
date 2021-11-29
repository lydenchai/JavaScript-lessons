// 1- Import the module ‘fs’   (file system) to read and write files
let fs = require("fs");
// 2 - Write  a file rady.text  with the content : Rady is the best front programmer
let myText = "Rady is the best front programmer,";
fs.writeFileSync("rady.txt", myText)
// 3 - Read the content of the file  rady.text
let read= fs.readFileSync("rady.txt").toString();
// 4 - Add to this content ‘But Ronan is the funniest’ and write again our file
read += "But Ronan is the funnies.";
console.log(read);