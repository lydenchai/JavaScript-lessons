
const btn = document.querySelector('button');

btn.addEventListener('click', e => {
    e.preventDefault();

    const inputColor = document.querySelector('#colorId').value;
    const inputFile = document.querySelector('#fileId').value;
    const inputDate = document.querySelector('#dateId').value;
    const inputRange = document.querySelector('#rangeId').value;

    // output
    const result = document.querySelector('span');
    if (inputRange !== "" && inputColor !== "" && inputFile !== "" && inputDate !== "") {
        result.textContent = inputColor + " | " + inputFile + " | " + inputDate + " | " + inputRange;
    }else {
        confirm("Cannot empty");
    }
});
