let arrOne = [1, 3, 6, 7, 9];
let arrTwo = [4, 3, 5, 9, 1];
// TODO: 
// YOUR CODE HERE
let newArray = [];
for (index in arrOne){
    if (arrOne > arrTwo){
        newArray.push(arrOne);
    }
    else {
        newArray= arrTwo;
    }
}
console.log(newArray)
// output: [4, 3, 6, 9, 9]


