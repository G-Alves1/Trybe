## Exercícios - script.js

**1.** Use o método forEach chamando a callback **showEmailList** para apresentar os emails
```sh
  const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];

  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };

  // Adicione seu código aqui
```

**2.** Utilize o *find* para retornar o primeiro número do array que é divisível por **3** e **5** , caso ele exista:
```sh
  const numbers = [19, 21, 30, 3, 45, 22, 15];

  const findDivisibleBy3And5 = () => {
    // Adiciona seu código aqui
  }

  console.log(findDivisibleBy3And5())
```

**3.** Utilize o *find* para encontrar o primeiro nome com cinco letras, caso ele exista:
```sh
  const names = ['João', 'Irene', 'Fernando', 'Maria'];

  const findNameWithFiveLetters = () => {
    // Adicione seu código aqui:
  }

  console.log(findNameWithFiveLetters());
```

**4.** Utilize o *find* para encontrar a música com **id** igual a **31031685** , caso ela exista:
```sh
  const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]

  function findMusic(id) {
    // Adicione seu código aqui
  }

  console.log(findMusic('31031685'))
```

**5.** Escreva uma função que dado um array de nomes e um nome retorne *true* se ele estiver contido e caso contrário, retorne *false* , use *some* ;
```sh
  const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

  const hasName = (arr, name) => {
    //Adicione seu código aqui
  }

  console.log(hasName(names, 'Ana'))
```

**6.** Escreva uma função que dado um array de pessoas e uma idade mínima retorne *true* se todas tiverem a idade maior ou igual a mínima e caso contrário *false* , use *every* ;
```sh
  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
  }

  console.log(verifyAges(people, 18));
```

**7.** Utilize a *sort* para ordenar o array pela **idade** das pessoas em ordem **crescente** .
```sh
  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  // Adicione se código aqui

  console.log(people);
```

**8.** Modifique o *sort* do exercício anterior para que ordene o array pela **idade** das pessoas em ordem **decrescente** .

---

## Exercícios 2 - exercises.js

```sh
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

  // Adicione o código do exercício aqui:
```

**1.** Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
```sh
  function authorBornIn1947() {
    // escreva aqui o seu código
  }
```

**2.** Retorne o nome do livro de menor nome.
```sh
  function smallerName() {
    let nameBook;
    // escreva aqui o seu código

    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }
```

**3.** Encontre o primeiro livro cujo nome possui 26 caracteres.
```sh
  const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };

  function getNamedBook() {
    // escreva seu código aqui
  }
```

**4.** Ordene os livros por data de lançamento em ordem decrescente.
```sh
  const expectedResult = [
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
  ];

  function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
  }
```

**5.** Faça uma função que retorne *true* , se todas as pessoas autoras nasceram no século XX, ou *false* , caso contrário.
```sh
  const expectedResult = false;

  function everyoneWasBornOnSecXX() {
    // escreva seu código aqui
  }
```

**6.** Faça uma função que retorne *true* , se algum livro foi lançado na década de 80, e *false* , caso contrário.
```sh
  const expectedResult = true;

  function someBookWasReleaseOnThe80s() {
    // escreva seu código aqui
  }
```

**7.** Faça uma função que retorne *true* , caso nenhum author tenha nascido no mesmo ano, e *false* , caso contrário.
```sh
  const expectedResult = false;

  function authorUnique() {
    // escreva seu código aqui
  }
```