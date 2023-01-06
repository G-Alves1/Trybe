## Exercícios 1 - my-randomuser-app

**1.** Crie uma aplicação que renderiza os dados de uma pessoa aleatória, que são obtidos por meio do retorno de uma API.

* A API utilizada será a randomuser no endereço https://api.randomuser.me/ que, ao ser acessada, entrega um objeto contendo um usuário aleatório e seus dados pessoais num array de nome results.
* Lembre-se que o seu componente deve fazer a requisição para a API por meio do método componentDidMount.

* Enquanto os dados não são entregues, uma div deve ser renderizada com o conteúdo Carregando…
* Após a entrega dos dados, seu componente deve ser renderizado exibindo foto, nome, email e idade do usuário.
* Caso a idade do usuário seja maior que 50, o componente não deve ser renderizado. Aplique esta lógica no método shouldComponentUpdate.
O retorno da API é semelhante ao seguinte:
```sh
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
      },
      "location": {
        "street": "9278 new road",
        "city": "kilcoole",
        "state": "waterford",
        "postcode": "93027",
        "coordinates": {
          "latitude": "20.9267",
          "longitude": "-7.9310"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "brad.gibson@example.com",
      "login": {
        "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
        "username": "silverswan131",
        "password": "firewall",
        "salt": "TQA1Gz7x",
        "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
        "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
        "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
      },
      "dob": {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
      },
      ...
    }
  ]
}
```

## Exercícios 2 - my-dog-app
* api: https://dog.ceo/dog-api/
Observe a estrutura de dados que a API retorna:
```sh
{
  "message": "https://images.dog.ceo/breeds/bulldog-french/n02108915_5306.jpg",
  "status": "success"
}
```

**1.** Crie uma aplicação que consuma a API de fotos aleatórias de cachorros
* Assim que a página for renderizada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela;
* Enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;
* Deve existir um botão que, para cada clique, busque mais um doguinho.

**2.** Adicione algumas ações após receber o retorno da requisição para API
* A cada tentativa de atualização do componente, verifique se o campo message tem a string terrier. Se sim, não atualize o componente;
* Guarde a url da última imagem gerada no localStorage após cada atualização;
* Após a atualização do componente, exiba um alert com a raça do doguinho.
Dica: utilize o método split para pegar a raça a partir da URL da imagem..

**3.** Adicione outras funcionalidades à página
Com o código do exercício anterior, implemente as seguintes funcionalidades:
* A cada inicialização da aplicação, verifique se existem dados prévios guardados no localStorage. Caso haja, ignore a instrução “assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela” e exiba a última imagem guardada.