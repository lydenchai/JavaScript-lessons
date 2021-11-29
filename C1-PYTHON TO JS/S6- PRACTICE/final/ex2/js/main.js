let text = "hello! welcome to web at pnc";
let tem_word = "";
let newArr = [];
if (text.length == 0) {
    console.log("it is empty");
} else {
    for (let i = 0; i < text.length; i++){
        if (text[i] != " ") {
            tem_word += text[i];
        } else {
            if (tem_word[0] != 'w') {
                newArr.push(tem_word);
            }
            tem_word = "";
        }
    }
     newArr.push(tem_word);
    console.log(newArr);
}