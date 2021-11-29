
const btn = document.querySelector('button');

btn.addEventListener('click', e=> {
    e.preventDefault();

    // input
    const inputText = document.querySelector('#textId').value;
    const inputPass = document.querySelector('#passId').value;
    const inputEmail = document.querySelector('#emailId').value;
    const inputNumber = document.querySelector('#numId').value;

    // textarea
    const textarea = document.querySelector('#textareaId').value;

    // select
    const select  = document.querySelector('#selectId').value;

    // output
    const spanInputs = document.querySelector('.inputs');
    const spanTextarea = document.querySelector('.textarea');
    const spanSelect = document.querySelector('.select');


    spanInputs.textContent = inputText + " | " + inputPass + " | " + inputEmail + " | " + inputNumber;
    spanTextarea.textContent = textarea;
    spanSelect.textContent = select;
});