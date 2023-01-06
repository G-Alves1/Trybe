## Exercícios - exercise-pokemon-card

**1.** Neste exercício você deverá testar se, ao renderizar a página, o botão responsável por trazer as informações do próximo Pokémon está presente na tela.

* Testes que deverão ser feitos:
  * Teste se o fetch é chamado uma vez ao carregar a página;
  * Teste se, após a primeira chamada do fetch, o botão de "Próximo Pokémon" está presente na tela.

**2.** Neste exercício você deverá testar se a aplicação faz uma requisição para exibir o primeiro Pokémon quando a página é carregada.

* Testes que deverão ser feitos:
  * Teste se o fetch é chamado apenas uma vez ao carregar a página;
  * Teste se o fetch foi chamado utilizando o endpoint de um Pokémon.
    * Você pode utilizar o endpoint do Froakie para construir este teste: https://pokeapi.co/api/v2/pokemon/656/
    OBS: A chamada do fetch depende do retorno da função randomNumber. Portanto, para testar se o fetch é chamado com um endpoint específico, você deve ser capaz de controlar o valor que é retornado pela randomNumber.

**3.** Neste exercício você fará os testes básicos para verificar se a renderização é feita corretamente, além de testar que, toda vez que o botão da aplicação é clicado, ele faça uma requisição com dados diferentes para o endpoint.

* Testes que deverão ser feitos:
  * Teste se, após clicar no botão que traz o próximo Pokémon, o fetch foi chamado novamente, mas agora utilizando o endpoint com o número identificador de outro Pokémon.
    * Você pode utilizar o endpoint do Drowzee para construir este teste: https://pokeapi.co/api/v2/pokemon/96/
    * Lembre-se de controlar o valor que é retornado pela função randomNumber

**4.** Neste exercício você deverá testar se os elementos contendo as informações do Pokémon são renderizados.

* Testes que deverão ser feitos:
A tela inicia com um Pokémon renderizado. Com base nisso:
  * Teste se o elemento que exibe o nome do Pokémon está presente na tela. Você pode verificar se o data-testid=pokemon-name está na tela.
  * Teste se o elemento que exibe a imagem do Pokémon está presente na tela.
  