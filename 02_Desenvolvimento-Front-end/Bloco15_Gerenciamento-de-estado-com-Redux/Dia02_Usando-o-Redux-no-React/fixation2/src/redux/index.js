import { createStore } from 'redux';
import selectedPill from './reducers/pillChoice';

const store = createStore(selectedPill);

export default store;
