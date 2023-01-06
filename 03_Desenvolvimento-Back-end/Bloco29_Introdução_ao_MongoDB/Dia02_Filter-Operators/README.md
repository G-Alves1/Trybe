## Exercícios

*Utilizando o mongoimport, importe o arquivo superheroes.json*
Os documentos têm a seguinte estrutura:
```sh
{
  "_id" : ObjectId("5e4ed2b2866be74b5b26ebf1"),
  "name" : "Abin Sur",
  "alignment" : "good",
  "gender" : "Male",
  "race" : "Ungaran",
  "aspects" : {
    "eyeColor" : "blue",
    "hairColor" : "No Hair",
    "skinColor" : "red",
    "height" : 185,
    "weight" : 40.82
  },
  "publisher" : "DC Comics"
}
```

**1.** Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.
```sh
Resposta:
  use class;
  db.superheroes.findOne();
```

**2.** Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.
```sh
Resposta:
  db.superheroes.find(
    { "aspects.height": { $lt: 180 } }
  ).pretty();
```

**3.** Retorne o total de super-heróis menores que 1.80m.
```sh
Resposta:
  db.superheroes.countDocuments(
    { "aspects.height": { $lt: 180 } }
  );
```

**4.** Retorne o total de super-heróis com até 1.80m.
```sh
Resposta:
  db.superheroes.countDocuments(
    { "aspects.height": { $lte: 180 } }
  );
```

**5.** Selecione um super-herói com 2.00m ou mais de altura.
```sh
Resposta:
  db.superheroes.findOne(
    { "aspects.height": { $gte: 200 } }
  );
```

**6.** Retorne o total de super-heróis com 2.00m ou mais.
```sh
Resposta:
  db.superheroes.countDocuments(
    { "aspects.height": { $gte: 200 } }
  );
```

**7.** Selecione todos os super-heróis que têm olhos verdes.
```sh
Resposta:
  db.superheroes.find(
    { "aspects.eyeColor": "green"}
  );
```

**8.** Retorne o total de super-heróis com olhos azuis.
```sh
Resposta:
  db.superheroes.countDocuments(
    { "aspects.eyeColor": "blue"}
  );
```

**9.** Utilizando o operador $in, selecione todos os super-heróis com cabelos pretos ou carecas ("No Hair").
```sh
Resposta:
  db.superheroes.find(
    { "aspects.hairColor": { $in: ["black", "No Hair"] } }
  ).pretty();
```

**10.** Retorne o total de super-heróis com cabelos pretos ou carecas ("No Hair").
```sh
Resposta:
  db.superheroes.countDocuments(
    { "aspects.hairColor": { $in: ["black", "No Hair"] } }
  );
```

**11.** Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
```sh
Resposta:
  db.superheroes.countDocuments(
    { "aspects.hairColor": { $nin: ["black", "No Hair"] } }
  );
```

**12.** Utilizando o operador $not, retorne o total de super-heróis que não tenham mais de 1.80m de altura.
```sh
Resposta:
  db.superheroes.countDocuments(
    { "aspects.height": { $not: { $gt: 180 } } }
  );
```

**13.** Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m.
```sh
Resposta:
  db.superheroes.find(
    {
      $nor: [
        { race: "Human" },
        { "aspects.height": { $gt: 180 } }
      ]
    }
  ).pretty();
```

**14.** Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.
```sh
Resposta:
  db.superheroes.find(
    {
      $and:[
        {
          $or: [{ "aspects.height": 180 }, { "aspects.height": 200 }]
        },
        {
          publisher: "Marvel Comics"
        }
      ]
    }
  ).pretty();
```

**15.** Selecione todos os super-heróis que pesem entre 80kg e 100kg, sejam Humanos ou Mutantes e não sejam publicados pela DC Comics.
```sh
Resposta:
  db.superheroes.find(
    {
      $and: [
        {
          "aspects.weight": { $gte: 80, $lte: 100 }
        },
        {
          $or: [{ race: "Human" }, { race: "Mutant" }]
        },
        {
          publisher: { $ne: "DC Comics" }
        }
      ]
    }
  ).pretty();
```

**16.** Retorne o total de documentos que não contêm o campo race.
```sh
Resposta:
  db.superheroes.countDocuments(
    { race: { $exists: false } }
  );
```

**17.** Retorne o total de documentos que contêm o campo hairColor.
```sh
Resposta:
  db.superheroes.countDocuments(
    { "aspects.hairColor": { $exists: true } }
  );
```

**18.** Remova apenas um documento publicado pela Sony Pictures.
```sh
Resposta:
  db.superheroes.deleteOne(
    { publisher: "Sony Pictures" }
  );
```

**19.** Remova todos os documentos publicados pelo George Lucas.
```sh
Resposta:
  db.superheroes.deleteMany(
    { publisher: "George Lucas" }
  );
```
