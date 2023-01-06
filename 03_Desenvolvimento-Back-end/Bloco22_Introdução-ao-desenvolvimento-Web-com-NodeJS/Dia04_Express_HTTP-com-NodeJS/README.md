## Exercícios - exercicios

Inicie os exercícios criando uma aplicação Node.js com os comandos já aprendidos.

**1.** Crie uma rota GET /ping
* Sua rota deve retornar o seguinte JSON: { message: 'pong' }

**2.** Crie uma rota POST /hello
* Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
* Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .

**3.** Crie uma rota POST /greetings
* Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
* Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
* Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .

**4.** Crie uma rota PUT /users/:name/:age .
* Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .

**5.** Crie uma API de dados das personagens de Simpsons
* Crie um arquivo chamado simpsons.json e popule com os seguintes dados:
```sh
    [
        {
            "id": "1",
            "name": "Homer Simpson"
        },
        {
            "id": "2",
            "name": "Marge Simpson"
        },
        {
            "id": "3",
            "name": "Bart Simpson"
        },
        {
            "id": "4",
            "name": "Lisa Simpson"
        },
        {
            "id": "5",
            "name": "Maggie Simpson"
        },
        {
            "id": "6",
            "name": "Ned Flanders"
        },
        {
            "id": "7",
            "name": "Montgomery Burns"
        },
        {
            "id": "8",
            "name": "Nelson Muntz"
        },
        {
            "id": "9",
            "name": "Krusty"
        },
        {
            "id": "10",
            "name": "Milhouse Van Houten"
        }
    ]
```
* Utilize o modulo fs do Node para ler/escrever arquivos.
* Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
* Caso dê tudo certo, a resposta deve voltar com status 200 OK .
* Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .

**6.** Crie um endpoint GET /simpsons
* O endpoint deve retornar um array com todos os simpsons.

**7.** Crie um endpoint GET /simpsons/:id
* O endpoint deve retornar o personagem com o id informado na URL da requisição.
* Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .

**8.** Crie um endpoint POST /simpsons .
* Este endpoint deve cadastrar novos personagens.
* O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
* Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
* Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .

**9.** Adicione autenticação a todos os endpoints.
* O token deve ser enviado através do header Authorization .
* O token deve ter exatamente 16 caracteres.
* Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' } .

**10.** Crie uma rota POST /signup
* A rota deve receber, no body da requisição, os campos email , password , firstName e phone .
* Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' } .
* Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK , e o JSON { token: '<token-aleatorio>' } .

* Para gerar o token você pode utilizar a função randomBytes , do módulo crypto do Node, dessa forma:
```sh
    const crypto = require('crypto');

    function generateToken() {
        return crypto.randomBytes(8).toString('hex');
    }

    module.exports = generateToken;
```

---

## Exercícios 2 - exercicios2

**1.** Crie uma array drinks com os seguintes objetos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.
```sh
    const drinks = [
        { id: 1, name: 'Refrigerante Lata', price: 5.0 },
        { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
        { id: 3, name: 'Suco 300ml', price: 4.0 },
        { id: 4, name: 'Suco 1l', price: 10.0 },
        { id: 5, name: 'Cerveja Lata', price: 4.5 },
        { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
    ];
```

**2.** Crie uma rota GET /drink/:id para retornar uma bebida pelo id .

**3.** Implemente uma rota /drinks/search que permita pesquisar pelo atributo name usando query string.

**4.** Crie uma rota POST /drinks que permita adicionar novas bebidas através da nossa API.

**5.** Crie uma rota PUT /drinks/:id que permita editar os atributos de uma bebida.

**6.** Crie uma rota DELETE /drinks/:id que permita remover uma bebida.

**7.** Mostre uma mensagem quando a rota nao existe.
