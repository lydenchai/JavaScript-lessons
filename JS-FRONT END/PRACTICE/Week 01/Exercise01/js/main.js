let text = "hello world [JavaScript] we [are] strong!";
// TODO: 
// YOUR CODE HERE
let newText = "";
found = false;
for (index of text){
    if (index != "[" && !found){
        newText += index;
    } 
    else if ( index == "]"){
        found = false
    } 
    else{
        found = true
    }
};
console.log(newText);

// output: hello world we strong!


