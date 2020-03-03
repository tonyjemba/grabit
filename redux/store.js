import {createStore} from 'redux';
import rootReducer from './rootReducer';

//Contains the big state source of all pages
const store = createStore(rootReducer);

export default store;