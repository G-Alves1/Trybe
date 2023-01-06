## Exercícios - jokes.html jokes.js

**1.** Vamos usar a função fetch , para criar um site simples com um gerador de piadas ruins! .
- Primeiro, veja o [manual da API do site icanhazdadjoke.com](icanhazdadjoke.com) . Ele esclarece como fazer as requisições ao serviço de piadas.
  - Para começar, vamos fazer uma requisição via browser. Visite o [site](icanhazdadjoke.com), e perceba que ele devolve uma página HTML com uma piada aleatória.
  - Em seguida, no terminal, vamos fazer a requisição: `curl -H "Accept: text/html" "https://icanhazdadjoke.com/"` . Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.
  - Para a próxima requisição, vamos usar o comando: `curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"` . Veja que agora recebemos apenas a piada aleatória em formato texto.
  - Por fim, faça a requisição: `curl -H "Accept: application/json" "https://icanhazdadjoke.com/"` . Agora a API retorna um objeto no formato JSON.

Perceba que, dependendo do que passamos na chave *Accept*: no header, definido por *-H* no comando, o serviço nos retorna uma resposta diferente.

- Utilize o HTML e o *js* a seguir como base:

```sh
  <!-- jokes.html -->
  <!DOCTYPE html>
  <html>
    <head>
      <title>Best jokes ever</title>
      <script src="apiScript.js" ></script>
    </head>
    <body>
      <h1>Get ready for a great joke!</h1>
      <h2 id="jokeContainer"></h2>
    </body>
  </html>
  ```

  ```sh
  // apiScript.js
  const API_URL = 'https://icanhazdadjoke.com/';

  const fetchJoke = () => {
    // Adicionar lógica aqui!
  };

  window.onload = () => fetchJoke();
```

- Agora vamos tentar fazer as requisições a API usando *fetch* . Essa função recebe dois parâmetros:
  - O endereço para o qual a requisição será feita, ou seja, a url do serviço.
  - Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves *method* e *headers*

```sh
  // apiScript.js     
  const API_URL = 'https://icanhazdadjoke.com/';

  const fetchJoke = () => {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject);
  };

  window.onload = () => fetchJoke();
```

O segundo parâmetro *myObject* define o tipo de request: *method: 'GET'* e o formato da resposta *headers: { 'Accept': 'application/json' }* , como visto nas requisições via *curl* .
  - A função *fetch* é uma Promise (você não precisa entender o que é uma Promise agora, considere apenas como sendo algo assíncrono) e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas .*then* (em caso de sucesso) e *.catch* (em caso de falha). A requisição fetch retorna um objeto Response . Utilizando *.then* , verifique a estrutura da resposta usando um *console.log* na *response* retornada pelo *fetch*.

```sh
  // apiScript.js     
  const API_URL = 'https://icanhazdadjoke.com/';

  const fetchJoke = () => {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject)
      .then(response => console.log(response));
  };

  window.onload = () => fetchJoke();
```
  - Como retirar o texto da piada?

Usamos o método *.json()* na resposta da API . Esse método converte o conteúdo do *body* da Response e retorna uma outra Promise , que, quando bem-sucedida, retorna um JSON contendo as informações da piada.
A partir do *fetch* , troque o *console.log()* anterior pelo método *.json()* e imprima os dados da requisição.

```sh
  // apiScript.js     
  const API_URL = 'https://icanhazdadjoke.com/';

  const fetchJoke = () => {
    const myObject = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };

    fetch(API_URL, myObject)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  window.onload = () => fetchJoke();
```

Faça a piada aparecer no DOM da sua página

*crypto.html crypto.js*
**2.** Vamos consultar uma API que fornece os valores de crypto moedas e mostar as 10 primeiras.
[Documentação para a API](https://docs.coincap.io/).

```sh
  url: `https://api.coincap.io/v2/assets`
```

Por se tratar de uma API pública a quantidade de requisições a ela é limitada, caso você se depare com o seguinte erro: FetchError: invalid json response body at (url da API) reason: Unexpected token T in JSON at position 0 , significa que você foi bloqueado temporariamente, basta esperar 1 ou 2 minutos para poder voltar a usar normalmente.
- Agora que temos a url vamos criar um arquivo ( *api.js* , por exemplo) e dentro dele uma função para pegar o *array* com as moedas.
- Crie também um arquivo HTML ( *index.html* , por exemplo) que deve conter uma tag para listar as crypto moedas.
- Pronto, temos um *array* com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas aparecam na tela. Utilize o seguinte formato: *Nome da moeda (símbolo da moeda): valor em dólares*. Exemplo: *Bitcoin (BTC): 46785.06* .
- Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o *array* das moedas para mostrar apenas as 10 primeiras?

---

## Bonus - bonus.html bonus.js
Converta o preço das crypto moedas do exercício anterior para a moeda local
[Curreny API](https://github.com/fawazahmed0/currency-api#readme)

```sh
  baseUrl: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`  
  endpoint: `/currencies/usd.min.json`
```