let computer = (array) =>{
    let sum = 0;
    let x = 0;
    fot (let value of array){
        sum += value;
    }
    x = sum / array.length;
    return x;
}
let arr = [10, 5, 3];
let result = computer(arr);
console.log(result);