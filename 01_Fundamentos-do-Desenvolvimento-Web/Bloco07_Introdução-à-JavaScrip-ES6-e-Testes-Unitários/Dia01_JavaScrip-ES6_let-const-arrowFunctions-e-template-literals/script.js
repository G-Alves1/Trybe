// Exercícios 1

/*******1*******/
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

/*******2*******/
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);


// Exercícios 2

/*******1*******/
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

console.log(factorial(4));

/*******2*******/
const longestWord = text => text.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));