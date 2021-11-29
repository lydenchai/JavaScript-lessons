
function displyEmoji (){
    let result = "";
    const output = document.querySelector("#result");
    for (let emoji of arr){
        result += emoji + " ";
    }
    output.textContent = result;
}

function changeNumber(){
    let emojis = [];
    for(let number of arr){
        if(number === 1){
            emojis.push("😴");
        }else if (number === 2) {
            emojis.push("😊");
        }else if (number === 3 ) {
            emojis.push("🤬");
        }
    }
    displyEmoji(emojis)
}
function getValue (){
    let valuesOfEmoji = [];
    for(let checkBox of checkBoxs){
        if (checkBox.checked){
            valuesOfEmoji.pust(parseInt(checkBox.value));
        }
    }
    changeNumber(valuesOfEmoji);
}

const checkBoxs = document.querySelectorAll("input");
document.addEventListener("change", getValue)