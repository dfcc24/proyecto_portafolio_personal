import { createStore } from 'redux';
import rootReducer from './reducers'; // Debes crear este archivo

const store = createStore(rootReducer);

export default store;
