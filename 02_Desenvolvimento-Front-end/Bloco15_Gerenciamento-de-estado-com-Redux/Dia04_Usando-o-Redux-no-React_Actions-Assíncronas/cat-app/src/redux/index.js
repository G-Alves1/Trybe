import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import gallery from './reducers/gallery';

const store = createStore(gallery, applyMiddleware(thunk));

export default store;
