//Exercícios 2

/*******1*******/
function op(a, b, operator) {
  if (operator == "+") {
    console.log(a + b);
  } else if (operator == "-") {
    console.log(a - b);
  } else if (operator == "*") {
    console.log(a * b);
  } else if (operator == "/") {
    console.log(a / b);
  } else if (operator == "%") {
    console.log(a % b);
  } else {
    console.log("Operação Inválida");
  }
}

op(10, 5, "+");

/*******2*******/
function biggerOfTwo(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

biggerOfTwo(5000, 500);

/*******3*******/
function biggerOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}

biggerOfThree(50, 100, 305);

/*******4*******/
function positiveNegative(value) {
  if (value > 0) {
    console.log("positive");
  } else if (value < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
}

positiveNegative(0);

/*******5*******/
function triangle(angle1, angle2, angle3) {
  let anglePositive = angle1 > 0 && angle2 > 0 && angle3 > 0;
  let angleValid = angle1 + angle2 + angle3 === 180;

  if (angleValid && anglePositive) {
    console.log(true);
  } else if (angleValid !== 180 && anglePositive) {
    console.log(false);
  } else {
    console.log("Error, angle invalid");
  }
}

triangle(10, 150, 0);

/*******6*******/
function chessPiece(piece) {
  switch (piece.toLowerCase()) {
    case "bispo":
      console.log("Diagonal");
      break;
    case "torre":
      console.log("Horizontal e vertical");
      break;
    case "rainha":
      console.log("Diagonal, horizontal e vertical");
      break;
    default:
      console.log("Peça Inválida");
  }
}

chessPiece("rainha");

/*******7*******/
function convertNote(note) {
  if (note >= 90 && note <= 100) {
    console.log("A");
  } else if (note >= 80 && note < 90) {
    console.log("B");
  } else if (note >= 70 && note < 80) {
    console.log("C");
  } else if (note >= 60 && note < 70) {
    console.log("D");
  } else if (note >= 50 && note < 60) {
    console.log("E");
  } else if (note > 0 && note < 50) {
    console.log("F");
  } else {
    console.log("note inválida");
  }
}

convertNote(99);

/*******8*******/
function constNumber(num1, num2, num3) {
  if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

constNumber(10, 50, 3);

/*******9*******/
function constNumbers(num1, num2, num3) {
  if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

constNumbers(10, 400, 3);

/*******10*******/
function twoVet(vet1, vet2) {
  const quantidadeComprada = 1000;

  const custoTotal = vet1 + vet1 * 0.2;
  const lucro = (vet2 - custoTotal) * quantidadeComprada;

  if (quantidadeComprada > 0) {
    console.log(lucro * quantidadeComprada);
  } else {
    console.log("Não esta tentando comprar");
  }
}

twoVet(10, 50);

/*******11*******/
function liquidValue(salary) {
  let inss;
  let salarioPosInss;
  let iR;
  let salarioLiquido;

  if (salary > 0) {
    if (salary <= 1556.94) {
      inss = salary * 0.08;
    } else if (salary >= 1556.95 && salary <= 2594.92) {
      inss = salary * 0.09;
    } else if (salary >= 2594.93 && salary <= 5189.82) {
      inss = salary * 0.11;
    } else if (salary > 5189.82) {
      inss = 570.88;
    }
  } else {
    console.log("Valor inválido");
  }

  salarioPosInss = salary - inss;

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
}

liquidValue(1500.10);
