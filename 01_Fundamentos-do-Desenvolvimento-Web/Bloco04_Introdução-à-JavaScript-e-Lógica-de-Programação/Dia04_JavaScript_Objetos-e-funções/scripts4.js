//Exercícios 4

/*******1*******/
let resultado = "";
function palindromo(param1) {
  for (let index = param1.length - 1; index >= 0; index -= 1) {
    resultado += param1[index];
  }
  if (resultado == param1) {
    console.log("true");
  } else {
    console.log("false");
  }
}
palindromo("eudgh");

/*******2*******/
function maiorIndice(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  console.log(indiceMaior);
  return indiceMaior;
}
maiorIndice([2, 3, 6, 7, 10, 1]);

/*******3*******/
function menorIndice(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }
  console.log(indiceMenor);
  return indiceMenor;
}
menorIndice([2, 4, 6, 7, 10, 0, -3]);

/*******4*******/
function maiorPalavra(names) {
  let maisCaracteres = names[0];
  for (let indice in names) {
    if (maisCaracteres.length < names[indice].length) {
      maisCaracteres = names[indice];
    }
  }
  console.log(maisCaracteres);
  return maisCaracteres;
}
maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

/*******5*******/
function maisRepete(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  console.log(numeros[indexNumeroRepetido])
  return numeros[indexNumeroRepetido];
}
maisRepete([2, 3, 2, 5, 8, 2, 3]);

/*******6*******/
function numInt(n) {
  let valor = 0;
  if (n === 1) {
    valor = 1;
  } else if (n === 0) {
    valor = 0;
  } else {
    valor = n + numInt(n -1);
  }
  console.log(valor);
  return valor;
}
numInt(5);

/*******7*******/
function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split(/(?:)/u).reverse().join('');
  let inversoFimPalavra = fimPalavra.split(/(?:)/u).reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
    } else {
      result = true;
    }
  }
  console.log(result)
  return result;
}
verificaFimPalavra('trybe', 'be');
verificaFimPalavra('joaofernando', 'fernan');
