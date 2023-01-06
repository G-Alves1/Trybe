import { legacy_createStore as createStore } from 'redux';
import cosmoReducer from './reducers/cosmoReducer';

// Ops! A aplicação está quebrada!!
// Implemente a Store nesse arquivo e o Provider no arquivo ./src/index.js
// para a aplicação voltar a funcionar!

const store = createStore(cosmoReducer);

export default store;
