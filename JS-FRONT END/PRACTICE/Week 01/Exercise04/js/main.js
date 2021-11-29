// case 1:
let arr = [1, 3, 6, 7, 9];
// TODO: 
// YOUR CODE HERE
for ( index in arr ){
    if ( index < 5){
        console.log(Math.max(...arr));
    }
}
console.log(arr)
// output: [9, 9, 6, 7, 9]