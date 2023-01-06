## Exercícios - test-joke

**1.** Crie um botão chamado “New Joke” que, ao ser clicado, faça uma nova requisição para API e renderize na tela uma nova piada.
* Com essa nova funcionalidade criada, escreva um teste para verificar os seguintes comportamentos:
  * ao renderizar a página, a primeira piada é exibida na tela;
  * a função fetch foi chamada uma vez;
  * ao clicar no botão “New joke”, uma nova piada é exibida na tela;
  * a primeira piada não é mais exibida na tela;
  * a função fetch foi chamada 2 vezes.

## Exercícios - exercise-trybe-rpg-battle

**1.** Crie os testes para a função rollDice do arquivo service/dice.js.
* Considere um dado de tamanho 20 para este teste.
* Crie um mock para a função Math.random, de forma que a função rollDice sempre retorne o número 16.
* Teste que o valor retornado pela função é igual a 16.
* Teste que a função Math.random foi chamada uma única vez.

**2.** Crie os testes para a função rollMultipleDice que é exportada no arquivo service/rollMultipleDice.js
* use o jest.mock para mockar o módulo service/rollDice. Lembre-se de passar como argumento o caminho do arquivo.
* a função rollDice deverá ser mockada de forma que a primeira vez que ela é chamada deverá retornar 6, e da segunda vez em que ela for chamada, deverá retornar 4;
* considere um dado de tamanho 20 para este teste;
* verifique que o valor retornado pela função rollMultipleDice seja a somatória de 6 + 4, ou seja 10;
* verifique que a função rollDice foi chamada duas vezes.

**3.** Crie os testes para a função attackEnemy que é exportada no arquivo service/attackEnemy.js
* use o jest.mock para mockar o módulo service/rollMultipleDice.js. Lembre-se de passar como argumento o caminho do arquivo.
* em todos os testes você deverá testar o resultado da função attackEnemy.
* crie um teste para o caso de vitória:
  * a função rollMultipleDice deverá ser mockada de forma que a primeira vez que ela é chamada deverá retornar um valor maior do que a defesa do inimigo.
  * O resultado da batalha deverá ser a vitória
* crie um teste para o caso de derrota:
  * a função rowMultipleDice deverá ser mockada de forma que a primeira vez que ela é chamada deverá retornar um valor menor do que a defesa do inimigo.
  * O resultado da batalha deverá ser a derrota
* Crie um teste para o caso de empate nos dados
  * a função rowMultipleDice deverá ser mockada de forma que a primeira vez que ela é chamada deverá retornar um valor igual ao da defesa do inimigo.
  * O resultado da batalha deverá ser a derrota

**4.** Crie um teste renderizando a aplicação e mockando o retorno da API
* Faça um mock na função fetch para que a requisição para a API de personagens retorne apenas um personagem.
* Renderize a aplicação e verifique que o nome do seu personagem está sendo exibido na tela. O nome do personagem é renderizado em um elemento h3. Dica: use o getByRole para pegar esse elemento.