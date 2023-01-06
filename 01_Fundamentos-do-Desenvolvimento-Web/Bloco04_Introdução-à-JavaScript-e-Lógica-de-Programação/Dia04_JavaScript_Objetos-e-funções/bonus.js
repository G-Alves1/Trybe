// Bonus

/*******1*******/
const n = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

const convertRoman = (romanNumber) => {
  romanNumber = romanNumber.toLowerCase();

  const length = romanNumber.length;

  let sum = n[romanNumber[length - 1]];

  let curr = n[romanNumber[length - 1]];

  for (let i = 2; i <= length; i += 1) {
    const prox = n[romanNumber[length - i]];
    if (curr <= prox) {
      sum += prox;
    } else {
      sum -= prox;
    }
    curr = prox;
  }
  return sum;
}

console.log(convertRoman('I'));
console.log(convertRoman('II'));
console.log(convertRoman('IX'));
console.log(convertRoman('MMMDDDCCCI'));

/*******2*******/
const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

const arrayOfNumbers = (vector) => {
  const result = [];

  for (let i = 0; i < vector.length; i += 1) {
    const numbers = vector[i];

    for (let index = 0; index < numbers.length; index += 1) {
      const curr = numbers[index];

      if ((curr % 2) === 0) {
        result.push(curr);
      } 
    }
  }
  return result;
}

console.log(arrayOfNumbers(vector));

/*******3*******/
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const result = {};

for (let i = 0; i < basket.length; i += 1) {
  const fruit = basket[i];
  if (!result[fruit]) result[fruit] = 0;
  result[fruit] += 1;
}

const summaries = [];

for (fruit in result) {
  let message = `${result[fruit]} ${fruit}`;
  if (result[fruit] > 1) message += 's';
  summaries.push(message);
}

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

/***************/
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

/*******4*******/
let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

console.log(`O morador do bloco 2 de nome ${ultimoMoradorBlocoDois.nome} ${ultimoMoradorBlocoDois.sobrenome} mora no ${ultimoMoradorBlocoDois.andar}° andar, apartamento ${ultimoMoradorBlocoDois.apartamento}`);

/*******5*******/
for (let i = 0; i < moradores.blocoUm.length; i += 1) {
  console.log(`${moradores.blocoUm[i].nome} ${moradores.blocoUm[i].sobrenome}`);
}

for (let i = 0; i < moradores.blocoDois.length; i++) {
  console.log(`${moradores.blocoDois[i].nome} ${moradores.blocoDois[i].sobrenome}`);
}
