## Exercícios

**exercise1**
**1.** Seu objetivo nesse exercício será implementar o componente `TrafficSignal.jsx`, manipulando o estado global com o _Redux_. Você deverá:

* Implementar a função `mapStateToProps()` para criar a _prop_ `signalColor`, a qual deve receber o valor da chave `color` que está armazenada no estado global.
* Implementar a função `onClick` dos três botões:
  * Você deverá realizar o `dispatch()` da _action_ `changeSignalAction()`;
  * A _action_ deverá receber como parâmetro a respectiva cor do botão, em inglês: `changeSignalAction('red')` para o vermelho, `changeSignalAction('yellow')` para amarelo e `changeSignalAction('green')` para verde.

O estado global inicial da aplicação é o seguinte:

```sh
state = {
  color: 'red',
}
```

**exercise2**
**2.**
* Implemente a função `mapStateToProps` de modo que o componente tenha acesso às _props_ `redCar`, `blueCar` e `yellowCard`, as quais devem possuir o valor do estado global da sua respectiva cor (como exemplo, `redCar` deve possuir o valor da chave `cars.red`, armazenado no estado global).
* Implemente a função `onClick()` dos botões de modo que, quando clicados, a aplicação realize o `dispatch` da _action_ `moveCarAction`. Quando clicar no botão correspondente ao carro **vermelho**, caso o estado global `cars.red` possuir o valor `true`, ele deverá ser alterado para `false`, e vice-versa.

**exercise3**
**3.** Iremos combinar o primeiro e segundo exercícios em um só, utilizando o combineReducers.
* Você precisará utilizar os arquivos de cada reducer dos exercícios anteriores e utilizar o arquivo `redux/reducers/index.js` para combinar os dois reducers.
* Alterar os componentes `Cars.jsx` e `TrafficSignal.jsx` para receberem corretamente a informação de seus respectivos reducers.
* Utilize **Redux** para armazenar todo o estado da aplicação.