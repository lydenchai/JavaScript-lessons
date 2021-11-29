const btn = document.querySelector('span.delete');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function bgChange() {
   
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);