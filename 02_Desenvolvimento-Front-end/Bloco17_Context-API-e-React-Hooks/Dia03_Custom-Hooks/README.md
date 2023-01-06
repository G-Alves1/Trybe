## Exercícios - applicant-manager

A lógica que você vai usar já está implementada no arquivo src/App.js, você deverá se basear nesse código para criar os hooks customizados

**1.** Para consumir nossa API vamos utilizar o hook customizado useFetch

* Crie dentro da pasta hooks um arquivo useFetch.js. Vamos precisar dos hooks useEffect e useState para fazer a chamada a API e salvar o seu retorno.
* O Hook deverá receber como parâmetro a url para onde iremos fazer a requisição.
* Crie três estados:
  * um estado de carregando, para aguardar enquanto a requisição está sendo feita
  * um estado para salvar o retorno da API
  * e outro estado para caso haja algum error na requisição
* Crie uma função para fazer o fetch da url recebida como parâmetro, utilize o useEffect para chamar essa função e faça o tratamento de erro.
* Retorne um objeto contento os três estados criados e a função que chama o fetch().

Pronto o seu Hook Customizado está feito, agora utilize ele no App.js recebendo como parâmetro a url que gera pessoas aleatórias da api Random User.

**2.** Para salvar a lista de pessoas aprovadas e reprovadas vamos utilizar o hook customizado useLocalStorage

* Crie um hook useLocalStorage para salvar cada uma das listas

Nossa aplicação renderiza pessoas aleatórias, onde é possível adiciona-las a lista de aprovadas ou reprovadas. Porém, os códigos estão duplicados e você deverá criar um hook customizado para eliminar essas duplicidades.

* Crie o hook customizado useLocalStorage dentro da pasta hooks.
* Esse hook deverá receber como parâmetro a chave do item que será salvo no localStorage e o valor inicial desse item.
* O hook deverá possuir:
  * um estado para salvar o valor do item (inicialmente deve ser ou o valor salvo no localStorage ou o valor inicial passado como parâmetro)
  * uma função para atualizar o valor do estado e salvar no localStorage
  * uma função para remover a chave do localStorage e resetar o estado para o valor inicial
* Retorne um array com o valor do estado e as duas funções criadas.s