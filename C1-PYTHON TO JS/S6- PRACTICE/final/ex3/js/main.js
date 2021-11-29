let numbers = [2.2, 23.4, 3, 33, 10, 50, 90, 2, 7]
let newArr = [];
numbers.forEach(element => {
    if (Number.isInteger(element)) {
        newArr.push(element);
    }
});
console.log(newArr);