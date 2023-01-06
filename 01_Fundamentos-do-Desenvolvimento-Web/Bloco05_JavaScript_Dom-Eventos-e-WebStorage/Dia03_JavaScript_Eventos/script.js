const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*******1*******/
function techElement(evento) {
  const tech = document.querySelector('.tech');
  tech.classList.remove('tech');
  evento.target.classList.add('tech');
}

/*******2*******/
addEventListener('input', inputText);

function inputText(evento1) {
  const tech = document.querySelector('.tech');
  tech.innerText = evento1.target.value;
}

/*******3*******/
addEventListener('dblclick', newPage);

function newPage(evento2) {
  window.location.assign('https://g-alves1.github.io/');
}

/*******4*******/
addEventListener('mouseover', mouseOver);
addEventListener('mouseout', mouseOut);

function mouseOver(evento3) {
  evento3.target.style.color = 'red';
}

function mouseOut(evento4) {
  evento4.target.style.color = 'white';
}
