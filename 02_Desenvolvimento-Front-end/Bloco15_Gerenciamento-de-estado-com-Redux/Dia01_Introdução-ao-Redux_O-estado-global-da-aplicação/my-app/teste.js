// importação do redux
const Redux = require('redux');

// cria e retorna a nossa store
/*
const store = Redux.createStore();
*/

// Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer . O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store . Para fins didáticos, iremos montar o reducer no mesmo arquivo, mas a boa prática é fazer em um arquivo separado.[
/*
const reducer = (state) => {
  return state;
};

const store = Redux.createStore(reducer);
*/

// Inicialmente o state vem como undefined , e não queremos isto. Então iremos atribuir a ele um valor padrão.
/*
const reducer = (state = { login: false, email: "" }) => {
  return state;
};
  
const store = Redux.createStore(reducer);
*/

// Agora sim, nosso reducer está pronto! Mas o que acontece se nosso valor inicial (que podemos chamar de estado inicial) ficar muito grande? Nosso código vai ficar "bagunçado" né?! Então podemos reescrevê-lo.
/*
const ESTADO_INICIAL = {
  login: false,
  email: "",
};
  
const reducer = (state = ESTADO_INICIAL) => {
  return state;
};
  
const store = Redux.createStore(reducer);
*/

// Nosso reducer está montado e possui o nosso estado inicial da aplicação. Vamos verificar o output quando acessamos a store com a função getState() .
/*
const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL) => {
  return state;
};

const store = Redux.createStore(reducer);

console.log(store.getState());
// { login: false, email: '' }
*/

// Mas e se precisarmos alterar o dado que está no estado? A peça que tem esta função é a action ! Uma action é um objeto JavaScript que tem pelo menos uma propriedade type e é responsável por comunicar ao reducer uma mudança a ser feita na store . Em Redux nós utilizamos o actionCreator , que nada mais do que uma função que retorna uma action . Para o nosso exemplo, iremos usar uma actionCreator chamada fazerLogin . Esta função irá enviar uma action ao nosso reducer , com a intenção de alterar para verdadeiro a chave login da nossa store .

const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// { login: true, email: 'alguem@email.com' }
