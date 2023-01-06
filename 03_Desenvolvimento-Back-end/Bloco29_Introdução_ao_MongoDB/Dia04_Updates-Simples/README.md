## Exercícios

```sh
use class;
db.movies.insertMany([
  {
    "title": "Batman",
    "category": [ "action", "adventure" ],
    "imdbRating": 7.6,
    "budget": 35,
  },
  {
    "title": "Godzilla",
    "category": [ "action", "adventure", "sci-fi" ],
    "imdbRating": 6.6,
  },
  {
    "title": "Home Alone",
    "category": [ "family", "comedy" ],
    "imdbRating": 7.4,
  },
]);
```

**1.** Altere o imdbRating para 7.7 no filme Batman.
```sh
Resposta:
  db.movies.updateOne(
    { title: "Batman" },
    { $set: { imdbRating: 7.7 } },
  );
```

**2.** Altere budget para 1 no filme Godzilla.
```sh
Resposta:
  db.movies.updateOne(
    { title: "Godzilla" },
    { $set: { budget: 1 } },
  );
```

**3.** Altere budget para 15 e imdbRating para 5.5 no filme Home Alone.
```sh
Resposta:
  db.movies.updateOne(
    { title: "Home Alone" },
    {
      $set: {
        budget: 15,
        imdbRating: 5.5,
      },
    },
  );
```

**4.** Aumente em 2 o imdbRating do filme Batman.
```sh
Resposta:
  db.movies.updateOne(
    { title: "Batman" },
    { $inc: { imdbRating: 2 } },
  );
```

**5.** Aumente em 5 o budget do filme Home Alone.
```sh
Resposta:
  db.movies.updateOne(
    { title: "Home Alone" },
    { $inc: { budget: 5 } },
  );
```

**6.** Multiplique por 4 o imdbRating do filme Batman.
```sh
Resposta:
  db.movies.updateOne(
    { title: "Batman" },
    { $mul: { imdbRating: 4 } },
  );
```

**7.** Renomeie o campo budget para estimatedBudget do filme Batman.
```sh
Resposta:
  db.movies.updateOne(
    { title: "Batman" },
    { $rename: { budget: "estimatedBudget" } },
  );
```

**8.** Utilize o operador $min para alterar o budget para 5 do filme Home Alone.
```sh
Resposta:
  db.movies.updateOne(
    { title: "Home Alone" },
    { $min: { budget: 5 } },
  );
```

**9.** Utilize o operador $max para alterar o imdbRating para 8.6 do filme Godzilla. Além disso, altere a categoria "adventure" para "thriller" do filme Godzilla.
```sh
Resposta:
  db.movies.updateOne(
    { title: "Godzilla" },
    {
      $max: { imdbRating: 8.6 },
      $set: { "category.1": "thriller" },
    },
  );
```

**10.** Utilizando o operador $currentDate, crie um campo chamado lastUpdated com o tipo timestamp no filme Home Alone.
```sh
Resposta:
  db.movies.updateOne(
    { title: "Home Alone" },
    {
      $currentDate: {
        lastUpdated: { $type: "timestamp" },
      },
    },
  );
```

**11.** Utilizando uma única operação, crie um campo chamado sequels e atribua a ele o valor 0 em todos os documentos.
```sh
Resposta:
  db.movies.updateMany(
    {},
    { $set: { sequels: 0 } },
  );
```

**12.** Utilizando uma única operação, remova os campos budget e estimatedBudget em todos os documentos.
```sh
Resposta:
  db.movies.updateMany(
    {},
    {
      $unset: {
        budget: "",
        estimatedBudget: "",
      },
    },
  );
```

**13.** Para os filmes Batman ou Home Alone, atribua a imdbRating o valor 17, caso o valor de imdbRating seja menor que 17.
```sh
Resposta:
  db.movies.updateMany(
    {
      $or: [
        { title: "Batman" },
        { title: "Home Alone" },
      ],
    },
    {
      $max: {
        imdbRating: 17,
      },
    },
  );
```

```sh
use class;
db.xmen.insertMany([
  {
    "name": "Vampira",
    "true_name": "Anna Marie LeBeau",
    "origin": "Mississippi",
    "occupation": "Senior Staff",
    "powers": [
      "sugar energia vital , memórias e poderes de outros mutantes através da pele"
    ],
    "class": "omega"
  },
  {
    "name": "Homem de Gelo ",
    "true_name": "Robert Louis Drake",
    "origin": "Nova York",
    "occupation": "Senior Staff",
    "powers": [
      "Manipular a umidade do ar para transformar o vapor em gelo",
      "Transformar seu corpo em gelo"
    ],
    "class": "alfa"
  },
  {
    "name": "Firestar",
    "true_name": "Angelica Jones",
    "origin": "Norte Americana",
    "occupation": "Senior Staff",
    "powers": [
      "Capacidade de explorar o campo eletromagnético da Terra"
    ],
    "class": "unknown"
  },
  {
    "name": "Câmara",
    "true_name": "Jonothon 'Jono' Evan Starsmore",
    "origin": "Britânica",
    "occupation": "Junior Staff",
    "powers": [
      "Poderosa energia psicocinética expelida por seu tórax",
      "Comunicação telepática"
    ],
    "class": "gama"
  },
  {
    "name": "Rapina",
    "true_name": "Ava'Dara Naganandin",
    "origin": "Império Shi'ar",
    "occupation": "Junior Staff",
    "powers": [
      "Força Sobre-Humana",
      "Vigor Sobre-Humano"
    ],
    "class": "unknown"
  },
  {
    "name": ["Anjo", "Archangel"],
    "true_name": "Warren Kenneth Worthington III",
    "origin":"Nova York",
    "occupation": ["Assistente", "Recrutador"],
    "powers": [
      "Campo de força"
    ],
    "class": "Beta"
  }
]);
```
Para todas as alterações realizadas, você deve sempre atualizar ou adicionar o campo lastUpdate, que armazena a data da última alteração com o tipo timestamp.

**14.** Remova o campo class dos documentos que possuem esse campo com o valor unknown.
```sh
Resposta:
  db.xmen.updateMany(
    { class: "unknown" },
    {
      $currentDate: { lastUpdate: { $type: "timestamp" } },
      $unset: { class: "" },
    },
  );
```

**15.** Produza uma query que renomeie os campos de name para hero_name, e de true_name para full_name; adicione o campo power com valor 100, em todos os documentos.
```sh
Resposta:
  db.xmen.updateMany(
    {},
    {
      $currentDate: { lastUpdate: { $type: "timestamp" } },
      $rename: {
        name: "hero_name",
        true_name: "full_name",
      },
      $set: { power: 100 },
    },
  );
```

**16.** Produza uma query onde os mutantes class omega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500.
```sh
Resposta:
  db.xmen.updateMany(
    { class: { $in: ["omega", "gama"] } },
    {
      $currentDate: { lastUpdate: { $type: "timestamp" } },
      $max: { power: 500 },
    },
  );
```

**17.** Produza uma query onde os mutantes class gama passam a ter seu poder de 300 somente se seu poder for maior que 300.
```sh
Resposta:
  db.xmen.updateMany(
    { class: "gama" },
    {
      $currentDate: { lastUpdate: { $type: "timestamp" } },
      $min: { power: 300 },
    },
  );
```

**18.** Decremente em 100 o poder dos mutantes que não possuem a propriedade class.
```sh
Resposta:
  db.xmen.updateMany(
    { class: { $exists: false } },
    {
      $currentDate: { lastUpdate: { $type: "timestamp" } },
      $inc: { power: -100 },
    },
  );
```

**19.** Em apenas uma query adicione o campo areas com o seguinte array como valor: ["Students Room"] a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.
```sh
Resposta:
  db.xmen.updateMany(
    {
    $or: [
        { occupation: "Senior Staff", power: { $gt: 100 } },
        { occupation: "Junior Staff", power: { $gt: 200 } },
      ],
    },
    {
      $currentDate: { lastUpdate: { $type: "timestamp" } },
      $set: { areas: ["Students Room"] },
    },
  );
```

**20.** Em apenas uma query, adicione o campo areas com ["Outside"] a todos os Junior Staff que não tenham o campo areas definido.
```sh
Resposta:
  db.xmen.updateMany(
    { areas: { $exists: false }, occupation: "Junior Staff" },
    {
      $currentDate: { lastUpdate: { $type: "timestamp" } },
      $set: { areas: ["Outside"] },
    },
  );
```
