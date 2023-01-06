## Exercícios 1 - exercise-react-router

**1.** Torne a aplicação navegável, encapsulando o que é retornado pelo `App` dentro do componente `BrowserRouter`.

**2.** Crie uma rota para o componente `Home`, utilizando um `Route` que mapeia o caminho de _URL_ "/" para `Home`.

**3.** Adicione uma rota que mapeie o caminho de _URL_ "/about" para o componente `About`. Acesse `http://localhost:3000/about` para ver se o componente `About` foi renderizado!

**4.** O componente `About` foi renderizado no exercício anterior, mas o componente `Home` também foi, o que não era desejado para o nosso caso. 😭
Agora, altere a forma como a correspondência de caminho da _URL_ está sendo feita para renderizar `Home`, de modo que `Home` **somente** seja renderizado se o caminho da _URL_ for **exatamente** igual a "/".

**5.** Adicione uma rota que mapeie o caminho de _URL_ "/users" para o componente `Users`. Acesse `http://localhost:3000/users` para ver se **somente** o componente `Users` foi renderizado.

**6.** Adicione dentro de `BrowserRouter` uma lista contendo 3 links:
* um link que aponte para o caminho de _URL_ "/" contendo o texto `Home`;
* um link que aponte para o caminho de _URL_ "/about" contendo o texto `About`;
* um link que aponte para o caminho de _URL_ "/users" contendo o texto `Users`.

**7.** No componente `App` há uma rota que renderiza o componente `Users`. Altere a forma como ela renderiza o componente `Users`, passando para ele a prop `greetingsMessage` com o valor igual a "Good Morning". Lembre-se de usar a prop correta no `Route`!

**8.** Para fixar uso de _URL_ com parâmetros, altere a rota, definindo o parâmetro chamado `id`. 
Depois, altere o componente `Users`, de modo que mostre no parágrafo o valor recebido para o parâmetro `id`. Teste se está funcionando invocando as urls `localhost:3000/users/10`, `localhost:3000/users/11` e `localhost:3000/users/100`, por exemplo.

**9.** No componente `App`, você deve possuir 3 rotas: uma para renderizar o componente `Home`, outra para renderizar `About`, e outra para renderizar `Users`, sendo que a última faz uso de parâmetro de _URL_. Encapsule essas 3 rotas em um componente `Switch` e ordene as rotas do mais específico para o mais genérico, começando de cima.

**10.** Adicione, no diretório `src`, um componente chamado `StrictAccess`. 
* Como o próprio nome diz, esse componente é de acesso restrito, e ele deve receber um objeto `user` como props. 
* Se `username` e `password` de `user` for "joao" e "1234", respectivamente, o componente `StrictAccess` renderiza um parágrafo que diz "Welcome joao!". 
* Caso `username` ou `password` não sejam os valores esperados, o componente precisa gerar um alerta dizendo `Access denied` e redirecionar quem usa sua aplicação para a página principal.

**11.** Adicione no componente `App` um link que aponte para o caminho de _URL_ "/strict-access", contendo o texto `Strict Access`.

**12.** Adicione, no componente `App`, uma rota que mapeie o caminho de _URL_ "/strict-access" para o componente `StrictAccess`. Para poder testar o fluxo de autenticação, passe para a prop `user` de `StrictAccess` diferentes valores para as propriedades `username` e `password`.

## Exercícios 2 - my-pokedex-app

**1.** Criar duas rotas para a aplicação, a rota principal / e a rota /about

**2.** Criar a rota para a página que exibirá mais informações do Pokémon, adicionando o link para essa rota no card que exibe o Pokémon na página inicial

**3.** Criar um link para o Pokémon que está sendo exibido na página inicial, direcionando a pessoa usuária para a página de detalhes desse Pokémon. Na página de detalhes, exiba todas as informações do respectivo Pokémon

**4.** Incrementar a página /about, adicionando uma breve explicação do que é uma Pokédex

**5.** Adicionar um conjunto fixo de links de navegação no topo da aplicação, de forma que ele esteja sempre visível na tela

**6.** Criar um componente NotFound, de forma que somente ele seja renderizado, caso o caminho atual da URL da aplicação não corresponda a rota alguma definida anteriormente.

**7.** Fazer com que o link, o qual leva para a página de detalhes de um Pokémon, seja exibido apenas na página /, ou seja, ele não deve ser exibido na tela detalhes
