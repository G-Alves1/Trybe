import { legacy_createStore as createStore } from 'redux';
import mutantReducer from './reducers/mutantReducer';

const store = createStore(mutantReducer);

export default store;
