
function setColor(event) {
    const color1 = document.querySelector('#set1').value;
    const color2 = document.querySelector('#set2').value;
    const color3 = document.querySelector('#set3').value;

    const trafficColor1 = document.querySelector('#color1');
    const trafficColor2 = document.querySelector('#color2');
    const trafficColor3 = document.querySelector('#color3');

    trafficColor1.style.background = color1;
    trafficColor2.style.background = color2;
    trafficColor3.style.background = color3;
}




const btnSetColor = document.querySelector('#setAllColor')
btnSetColor.addEventListener('click', setColor)