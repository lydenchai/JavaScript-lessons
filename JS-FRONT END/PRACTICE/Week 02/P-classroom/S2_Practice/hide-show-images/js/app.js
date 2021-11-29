let showImage = () => {
    // your code here
    const btnShow = document.querySelector('.img-group');
    btnShow.style.display="flex"
}
let hideImage = () => {
   // your code here
   const btnHide= document.querySelector('.img-group');
   btnHide.style.display="none"
}

let btnShow = document.querySelector("#btn-show")// your code here;
let btnHide = document.querySelector("#btn-hide")// your code here;

btnHide.addEventListener('click', hideImage);
btnShow.addEventListener('click', showImage);
