## Exercícios

```sh
use cinema;
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure"
    ],
    imdbRating: 7.7,
    budget: 35,
    ratings: [ 85, 100, 102, 105 ],
    description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi"
    ],
    imdbRating: 6.6,
    budget: 10,
    ratings: [ 78, 52, 95, 102 ],
    description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy"
    ],
    imdbRating: 7.4,
    ratings: [ 200, 99, 65 ],
    description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
  },
  {
    title: "Matrix",
    category: [
      "sci-fi",
      "action"
    ],
    imdbRating: 8.7,
    budget: 15,
    ratings: [ 77, 92, 150, 180 ],
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
  },
  {
    title: "Pulp Fiction",
    category: [
      "crime",
      "drama"
    ],
    imdbRating: 8.9,
    budget: 8,
    ratings: [ 110, 84, 95, 90 ],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  }
]);
```

**1.** Utilizando o operador $all, retorne todos os filmes que contenham action e adventure no array category.
```sh
Resposta:
  db.movies.find(
    {
      category: {
        $all: ["action", "adventure"]
      }
    }
  ).pretty();
```

**2.** Agora retorne os filmes que contenham action e sci-fi no array category e possuem nota do IMDB maior do que 7.
```sh
Resposta:
  db.movies.find(
    {
      category: {
        $all: ["action", "sci-fi"]
      },
      imdbRating: { $gt: 7 }
    }
  ).pretty();
```

**3.** Retorne todos os filmes com ratings maior do que 103, exibindo apenas os campos title e ratings.
```sh
Resposta:
  db.movies.find(
    {
      ratings: {
        $elemMatch: { $gt: 103 }
      }
    },
    {
      _id: 0,
      title: 1,
      ratings: 1
    }
  ).pretty();
```

**4.** Retorne todos os filmes com ratings entre 100 e 105, exibindo apenas os campos title e ratings.
```sh
Resposta:
  db.movies.find(
    {
      ratings: {
        $elemMatch: { $gte: 100, $lte: 105 }
      }
    },
    {
      _id: 0,
      title: 1,
      ratings: 1
    }
  ).pretty();
```

**5.** Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9, exibindo apenas os campos title e ratings.
```sh
Resposta:
  db.movies.find(
    {
      ratings: {
        $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] }
      }
    },
    {
      _id: 0,
      title: 1,
      ratings: 1
    }
  ).pretty();
```

**6.** Retorne os filmes da categoria adventure e com ratings maior do que 103, exibindo apenas os campos title, ratings e category.
```sh
Resposta:
  db.movies.find(
    {
      ratings: {
        $elemMatch: { $gt: 103 }
      },
      category: { $all: ["adventure"] }
    },
    {
      _id: 0,
      title: 1,
      ratings: 1,
      category: 1
    }
  ).pretty();
```

**7.** Retorne somente o título de todos os filmes com dois elementos no array category.
```sh
Resposta:
  db.movies.find(
    { category: { $size: 2 } },
    { _id: 0, title: 1 }
  ).pretty();
```

**8.** Retorne somente o título de todos os filmes com quatro elementos no array ratings.
```sh
Resposta:
  db.movies.find(
    { ratings: { $size: 4 } },
    { _id: 0, title: 1 }
  ).pretty();
```

**9.** Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2.
```sh
Resposta:
  db.movies.find({
    budget: { $mod: [5, 0] },
    category: { $size: 2 }
  }).pretty();
```

**10.** Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199, exibindo apenas os campos title, ratings e category.
```sh
Resposta:
  db.movies.find(
    {
      $or: [
        { category: { $all: ["sci-fi"] } },
        { ratings: { $elemMatch: { $gt: 199 } } }
      ]
    },
    { _id: 0, title: 1, ratings: 1, category: 1 }
  );
```

**11.** Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family", mas que não tenha o imdbRating menor que 7.
```sh
Resposta:
  db.movies.find({ $and: [
    { ratings: { $size: 4 } },
    { category: { $in: ["adventure", "family"] } },
    { imdbRating: { $not: { $lt: 7 } }}
  ]});
```

**12.** Utilizando o operador $regex, retorne todos os filmes em que a descrição comece com a palavra "The".
```sh
Resposta:
  db.movies.find(
    {
      description: {
        $regex: /^The/
      }
    }
  ).pretty();
```

**13.** Utilizando o operador $regex, retorne todos os filmes em que a descrição termine com a palavra "humanity.".
```sh
Resposta:
  db.movies.find(
    {
      description: {
        $regex: /humanity.$/
      }
    }
  ).pretty();
```
