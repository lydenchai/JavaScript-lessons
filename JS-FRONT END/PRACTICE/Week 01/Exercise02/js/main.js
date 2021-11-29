let numbers = [1, 3, 5, 0, 2, 0, 1, 1, 2, 3];
// TODO: 
// YOUR CODE HERE
let sum = 0;
let found = false;
for(n of numbers){
    if (!found && n == 1){
        found = true
    }
    else if(found && n != 0){
        sum += n
    }
    else{
        found = false
    } 
};
// output: 14 becuase 3 + 5 + 1 + 2 + 3
console.log(sum);