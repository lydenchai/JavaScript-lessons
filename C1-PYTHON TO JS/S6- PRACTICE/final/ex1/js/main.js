let arr = [22,33,44,55,44];
let isCorrectFormat = true;
let index = 0;
let result = "";
if (arr.length == 0) {
    result = "this array is empty";
    isCorrectFormat = false;
} else {
    while (isCorrectFormat && (index < arr.length)) {
        if (arr[index] < 0 || arr[index].length < 2) {
            isCorrectFormat = false;
            result ="This array is contains incorrect format.";
        } else {
            result += arr[index].toString();
        }
        index++;
    }
}
console.log(result);