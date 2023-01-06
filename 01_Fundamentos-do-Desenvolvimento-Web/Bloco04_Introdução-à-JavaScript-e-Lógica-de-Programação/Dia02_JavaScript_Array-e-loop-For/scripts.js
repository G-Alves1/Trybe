//Exercícios 1

/*******1*******/
let menu = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu[1];

console.log(menuServices);

/*******2*******/
let menu = ["Home", "Serviços", "Portfólio", "Links"];
let indexOfPortfolio = menu[2];

console.log(indexOfPortfolio);

/*******3*******/
let menu = ["Home", "Serviços", "Portfólio", "Links"];
menu.push("Contato");

console.log(menu);

//Exercícios 2
let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}

//Exercícios 3
let names = ["João", "Maria", "Antônio", "Margarida"];

for (let nomes of names) {
  console.log(nomes);
}

//Exercícios 4

/*******1*******/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

/*******2*******/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);

/*******3*******/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let med = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
  med = sum / numbers.length;
}
console.log(med);

/*******4*******/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let med = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
  med = sum / numbers.length;
}
if (med > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

/*******5*******/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}
console.log(maiorNumero);

/*******6*******/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    impar += 1;
  }
}
if (impar > 0) {
  console.log(impar);
} else {
  console.log("nenhum valor ímpar encontrado");
}

/*******7*******/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}
console.log(menorNumero);

/*******8*******/
let numeros = [];
for (let index = 1; index <= 25; index += 1) {
  numeros.push(index);
}
console.log(numeros);

/*******9*******/
let numeros = [];
for (let index = 1; index <= 25; index += 1) {
  numeros.push(index);
}

for (let index = 1; index < numeros.length; index += 1) {
  div = numeros[index] / 2;
  console.log(div);
}
