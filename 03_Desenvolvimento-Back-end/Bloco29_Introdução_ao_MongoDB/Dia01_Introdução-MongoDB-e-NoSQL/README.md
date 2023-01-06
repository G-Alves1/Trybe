## Exercícios

Utilizando a coleção [bios](https://www.mongodb.com/docs/manual/reference/bios-example-collection/)

**1.** Retorne o documento com o *_id* igual a 8.
```sh
Resposta:
  db.bios.find({ _id: 8 })
```

**2.** Retorne o documento com o *_id* igual a 8, mas só exiba os atributos: *_id* e *name*.
```sh
Resposta:
  db.bios.find({ _id: 8 }, { name: 1 })
```

**3.** Retorne apenas os atributos *name* e *birth* do documento com o *_id* igual a 8.
```sh
Resposta:
  db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 })
```

**4.** Retorne todos os documentos em que o atributo *name.first* seja igual a John, utilizando o método *pretty()*.
```sh
Resposta:
  db.bios.find({ "name.first": "John" }).pretty()
```

**5.** Retorne os 3 primeiros documentos da coleção *bios* utilizando o método *pretty()*.
```sh
Resposta:
  db.bios.find().limit(3).pretty()
```

**6.** Retorne 2 documentos da coleção *bios* pulando os 5 primeiros documentos.
```sh
Resposta:
  db.bios.find().skip(5).limit(2)
```

*Utilizando o mongoimport, importe o arquivo books.json*

**7.** Retorne a quantidade de documentos da coleção *books*.
```sh
Resposta:
  db.books.countDocuments({})
```

**8.** Conte quantos livros existem com o *status* = *"PUBLISH"*.
```sh
Resposta:
  db.books.countDocuments(
    { status: "PUBLISH" }
  )
```

**9.** Exiba os atributos *title*, *isbn* e *pageCount* dos 3 primeiros livros. NÃO retorne o atributo *_id*.
```sh
Resposta:
  db.books.find(
    {},
    {
      _id: 0,
      title: 1,
      isbn: 1,
      pageCount: 1
    }
  ).limit(3).pretty()
```

**10.** Pule 5 documentos e exiba os atributos *_id*, *title*, *authors* e *status* dos livros com o *status* = *"MEAP"*, limitando-se a 10 documentos.
```sh
Resposta:
  db.books.find(
    {
      status: "MEAP"
    },
    {
      title: 1,
      authors: 1,
      status: 1
    }
  ).skip(5).limit(10).pretty()
```
