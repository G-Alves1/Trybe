//Exercícios 1
const myName = "Gabriel Alves";
const birthCity = "Mariana";
let birthYear = 2000;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;
console.log(birthYear);
/*
birthCity = "Ouro Preto";
console.log (birthCity);
*/

//Exercícios 2
const base = 5;
const height = 8;

const area = base * height;
console.log(area);

const perimeter = base * 2 + height * 2;
console.log(perimeter);

//Exercícios 3
const nota = 90;

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}

//Exercícios 4
const currentHour = 12;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour > 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else {
  message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

//Exercícios 5
let weekDay = "segunda-feira";

if (
  weekDay == "segunda-feira" ||
  weekDay == "terça-feira" ||
  weekDay == "quarta-feira" ||
  weekDay == "quinta-feira" ||
  weekDay == "sexta-feira"
) {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descando merecido UwU");
}

//Exercícios 6
let estadoCadidata = "lista";

switch (estadoCadidata) {
  case "aprovada":
    console.log("Aprovada(o)");
    break;
  case "lista":
    console.log("Lista de espera");
    break;
  case "reprovada":
    console.log("Reprovada(o)");
    break;
  default:
    console.log("não se aplica");
}

//Exercícios 7

/*******1*******/
const a = 2;
const b = 5;

const adicao = a + b;
console.log(adicao);

const sub = a - b;
console.log(sub);

const multi = a * b;
console.log(multi);

const div = a / b;
console.log(div);

const mod = a % b;
console.log(mod);

/*******2*******/
const num1 = 1;
const num2 = 2;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

/*******3*******/
const num3 = 3;
const num4 = 4;
const num5 = 5;

if (num3 > num4) {
  console.log(num3);
} else if (num3 > num5) {
  console.log(num3);
} else if (num4 > num5) {
  console.log(num4);
} else {
  console.log(num5);
}

/*******4*******/
const valorDefinido = 0;

if (valorDefinido > 0) {
  console.log("positive");
} else if (valorDefinido < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

/*******5*******/
const ang1 = 90;
const ang2 = 89;
const ang3 = -1;

const somaAng = ang1 + ang2 + ang3;

const angPositive = ang1 > 0 && ang2 > 0 && ang3 > 0;

if (angPositive) {
  if (somaAng === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("ângulos inválidos");
}

/*******6*******/
const pecaXadrez = "Bispo";

switch (pecaXadrez.toLowerCase()) {
  case "bispo":
    console.log("Diagonal");
    break;
  case "torre":
    console.log("Horizontal e vertical");
    break;
  default:
    console.log("Peça Inválida");
}

/*******7*******/
const notaa = 100;

if (notaa >= 90 && notaa <= 100) {
  console.log("A");
} else if (notaa >= 80 && notaa < 90) {
  console.log("B");
} else if (notaa >= 70 && notaa < 80) {
  console.log("C");
} else if (notaa >= 60 && notaa < 70) {
  console.log("D");
} else if (notaa >= 50 && notaa < 60) {
  console.log("E");
} else if (notaa > 0 && notaa < 50) {
  console.log("F");
} else {
  console.log("nota inválida");
}

/*******8*******/
const numb1 = 5;
const numb2 = 3;
const numb3 = 4;

if (numb1 % 2 === 0 || numb2 % 2 === 0 || numb3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

/*******9*******/
const number1 = 10;
const number2 = 4;
const number3 = 7;

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

/*******10*******/
const custoInicial = 10;
const venda = 50;

const quantidadeComprada = 1000;

const custoTotal = custoInicial + custoInicial * 0.2;
const lucro = (venda - custoTotal) * quantidadeComprada;

if (quantidadeComprada > 0) {
  console.log(lucro * quantidadeComprada);
} else {
  console.log("Não esta tentando comprar");
}

/*******11*******/
let salarioBruto = 1500.1;

let inss;
let salarioPosInss;
let iR;
let salarioLiquido;

if (salarioBruto > 0) {
  if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11;
  } else if (salarioBruto > 5189.82) {
    inss = 570.88;
  }
} else {
  console.log("Valor inválido");
}

salarioPosInss = salarioBruto - inss;

if (salarioPosInss > 0) {
  if (salarioPosInss <= 1903.98) {
    iR = 0;
  } else if (salarioPosInss >= 1903.99 && salarioPosInss <= 2826.65) {
    iR = salarioPosInss * 0.075 - 142.8;
  } else if (salarioPosInss >= 2826.66 && salarioPosInss <= 3751.05) {
    iR = salarioPosInss * 0.15 - 354.8;
  } else if (salarioPosInss >= 3751.06 && salarioPosInss <= 4664.68) {
    iR = salarioPosInss * 0.225 - 636.13;
  } else if (salarioPosInss > 4664.68) {
    iR = salarioPosInss * 0.272 - 869.36;
  }
} else {
  console.log("Valor inválido");
}

salarioLiquido = salarioPosInss - iR;
console.log(salarioLiquido);
