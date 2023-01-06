## Exercícios - game-of-thunks

A aplicação deve possuir:
* Um input que deverá receber o nome de um personagem da série (Jon Snow, Ned Stark, Arya Stark…);
* Um botão que, ao ser clicado, deverá renderizar na tela as informações do personagem (nome, títulos, apelidos e qualquer outra informação recebida pela API que você desejar) cujo nome foi inserido no input.

As informações dos personagens devem ser obtidas por meio de uma chamada à API of Ice And Fire. Você pode utilizar o seguinte endpoint: https://anapioficeandfire.com/api/characters?name=${NOME DO PERSONAGEM}.

Você deve utilizar o Redux como gerenciador do estado global da aplicação. As informações recebidas pela API devem ser armazenadas no estado global (utilize o middleware Thunk da biblioteca redux-thunk para criar a action assíncrona).

O endpoint somente consegue fazer buscas pelo nome completo da personagem - ou seja, realizar a busca por Tyrion não trará nenhum retorno, mas Tyrion Lannister sim.