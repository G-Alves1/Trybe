const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

/*******1*******/
function authorBornIn1947() {
  const birthYear = books.find((book) => book.author.birthYear === 1947).author.name;
  return birthYear;
}
console.log(`Exercicio 1: ${authorBornIn1947()}`);

/*******2*******/
function smallerName() {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}
console.log(`Exercicio 2: ${smallerName()}`);

/*******3*******/
/*const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};*/

function getNamedBook() {
  const bookName = books.find((book) => book.name.length === 26)
  return bookName;
}
console.log(`Exercicio 3: ${getNamedBook()}`);

/*******4*******/
/*const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];*/

function booksOrderedByReleaseYearDesc() {
  const bookSort = books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear)
  return bookSort;
}
console.log(`Exercicio 4: ${booksOrderedByReleaseYearDesc()}`);

/*******5*******/
/*const expectedResult = false;*/

function everyoneWasBornOnSecXX() {
  const verifyAllBirthYear = books.every((book) => (book.author.birthYear > 1980 && book.author.birthYear <= 1989));
  return verifyAllBirthYear;
}
console.log(`Exercicio 5: ${everyoneWasBornOnSecXX()}`);

/*******6*******/
/*const expectedResult = true;*/

function someBookWasReleaseOnThe80s() {
  const verifyAllReleaseYear = books.some((book) => (book.releaseYear > 1900 && book.releaseYear <= 2000));
  return verifyAllReleaseYear;
}
console.log(`Exercicio 6: ${someBookWasReleaseOnThe80s()}`);

/*******7*******/
/*const expectedResult = false;*/

function authorUnique() {
  const verifyAllBirthYear = books.every((book) => books.some((bookSome) => (bookSome.author.birthYear === book.author.birthYear) && (bookSome.author.name !== book.author.name)));
  return verifyAllBirthYear;
}
console.log(`Exercicio 7: ${authorUnique()}`);