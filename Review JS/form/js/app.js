let formValue = (event) =>{
    event.preventDefault();
    const checkBox = document.querySelectorAll('[type=checkbox]');
    const result = document.querySelector('p');
    let letter = "";

    for (let checkbox of checkBox){
        if(checkbox.checked){
            letter += checkbox.value;
        }
       
    }result.textContent = letter;



    const radios = document.querySelectorAll('[name=letter]');
    const result2 = document.querySelector('#')
}   

let btn = document.querySelector("#get-value");
btn.addEventListener("click", formValue);