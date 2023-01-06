/*******1*******/
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
console.log(elementoOndeVoceEsta);

/*******2*******/
const pai = elementoOndeVoceEsta.parentNode;
console.log(pai);
pai.style.color = "blue";

/*******3*******/
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
console.log(primeiroFilhoDoFilho);
primeiroFilhoDoFilho.innerHTML = "É isso";

/*******4*******/
pai;
console.log(pai);
const primeiroFilhoAtravesDoPai = pai.firstElementChild;
console.log(primeiroFilhoAtravesDoPai);

/*******5*******/
elementoOndeVoceEsta;
console.log(elementoOndeVoceEsta);
const primeiroFilhoAtravesDoElementoOndeVoceEsta =
  elementoOndeVoceEsta.previousElementSibling;
console.log(primeiroFilhoAtravesDoElementoOndeVoceEsta);

/*******6*******/
elementoOndeVoceEsta.nextSibling;
console.log(elementoOndeVoceEsta.nextSibling);

/*******7*******/
elementoOndeVoceEsta;
console.log(elementoOndeVoceEsta);
const terceiroFilhoAtravesDoElementoOndeVoceEsta =
  elementoOndeVoceEsta.nextElementSibling;
console.log(terceiroFilhoAtravesDoElementoOndeVoceEsta);

/*******8*******/
pai;
console.log(pai);
const terceiroFilhoAtravesDoPai = pai.lastElementChild.previousElementSibling;
console.log(terceiroFilhoAtravesDoPai);

/*******9*******/
pai;
console.log(pai);
const irmaoElementoOndeVoceEsta = document.createElement("section");
irmaoElementoOndeVoceEsta.id = "irmaoElementoOndeVoceEsta";
pai.appendChild(irmaoElementoOndeVoceEsta);
console.log(irmaoElementoOndeVoceEsta);

/*******10*******/
elementoOndeVoceEsta;
console.log(elementoOndeVoceEsta);
const filhoElementoOndeVoceEsta = document.createElement("section");
filhoElementoOndeVoceEsta.id = "filhoElementoOndeVoceEsta";
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);
console.log(filhoElementoOndeVoceEsta);

/*******11*******/
primeiroFilhoDoFilho;
console.log(primeiroFilhoDoFilho);
const filhoDoPrimeiroFilhoDoFilho = document.createElement("section");
filhoDoPrimeiroFilhoDoFilho.id = "filhoDoPrimeiroFilhoDoFilho";
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);
console.log(filhoDoPrimeiroFilhoDoFilho);

/*******12*******/
filhoDoPrimeiroFilhoDoFilho;
console.log(filhoDoPrimeiroFilhoDoFilho);
const terceiroFilhoAtravesDoFilho = filhoDoPrimeiroFilhoDoFilho.parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling;
console.log(terceiroFilhoAtravesDoFilho);

/*******13*******/
pai;

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== "elementoOndeVoceEsta") {
    currentChildren.remove();
  }
}

segundoEUltimoFilhoDoFilho;
segundoEUltimoFilhoDoFilho.remove();

filhoElementoOndeVoceEsta;
filhoElementoOndeVoceEsta.remove();

filhoDoPrimeiroFilhoDoFilho;
filhoDoPrimeiroFilhoDoFilho.remove();

pai;
console.log(pai);
