## Exercícios - exercise-digimon-finders

**1.** Realize os testes das rotas da aplicação
Implemente os testes no arquivo ./src/tests/Routes.js. O objetivo é garantir que as rotas estão funcionando da forma esperada.

Dica: Lembre-se de criar o helper renderWithRouter.

* Testes que deverão ser feitos:
  * Teste que a aplicação renderiza corretamente em seu estado inicial:
    * A página deverá possuir o título "Search Digimon"
    * A página deverá possuir os links "About" e "Search Digimon"
  * Teste se, ao clicar no link About, a pessoa usuária é direcionada para a rota /about, e que o título "About" renderiza na tela
  * Teste se, ao tentar acessar uma rota inexistente, a pessoa usuária é direcionada para a página Not Found. Teste também se os elementos da página Not Found estão presentes.

**2.** Realize os testes da busca por Digimon
Implemente os testes no arquivo ./src/tests/Search.js. O objetivo é garantir que a lógica da busca por um Digimon, que está na rota /, funciona corretamente.

Dica: Lembre-se de criar mocks para testar o retorno da API.

* Sugestão de testes:
  * É possível inserir um valor na caixa de busca;
  * A tela inicia sem nenhum Digimon renderizado. Para esse teste, você pode testar que o data-testid=digimonName não está na tela.
  * É possível buscar um Digimon com sucesso;
  * A mensagem de erro é renderizada caso o Digimon buscado não exista;
  * A aplicação não realiza fetch caso a busca seja realizada com o input vazio.

**3.** Bônus - Consiga 100% de Cobertura e Stryker Passando
comandos para "testar os testes":
* npm run test-coverage para verificar se a cobertura dos testes está em 100%;
* npx stryker run para usar a biblioteca Stryker para "testar os seus testes".
Se você fez todos os testes dos exercícios anteriores, ainda assim não conseguirá 100% de cobertura. Isso porque não foi testado o caso de "erro de servidor" na requisição da API. Você deverá fazer esse teste:
* Teste um erro de servidor:
  * Para isso, você deverá mockar o fetch com uma Promise Rejeitada;
  * Faça o mock do console.log para verificar se a mensagem aparece no console quando há erro de servidor;
  * Teste que o console.log recebe exatamente a frase de erro como argumento.
  * Dica: como o comportamento do mock é assíncrono, você pode utilizar o waitFor para envolver os expects do console.log