## Testando a rota POST /employees

- Para um caso de sucesso:
  - Farei uma requisição `POST` com os dados corretos para meu
    end-point `/employee`;
  - Aguardo uma resposta com status `201 - Created`;
  - Essa resposta deve conter também um atributo `id`, no corpo;
  - Essa resposta deve conter também um atributo `message`,
    no corpo, com a mensagem `Cadastrado com sucesso`;
  - Farei uma requisição `GET` utilizando esse `id` para meu
    end-point `/employee/:id`;
  - Aguardo uma resposta com status `200 - OK`;
  - Essa resposta deve conter também um atributo `addresses`,
    no corpo, com pelo menos um item.
- Para um caso de falha:
  - Farei uma requisição `POST` com os dados incorretos para meu
    end-point `/employee`;
  - Aguardo uma resposta com status `500 - Internal Server Error`;
  - Essa resposta deve conter também um atributo `message`,
    no corpo, com a mensagem `Algo deu errado`;