
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import selector from './categories.js';
import list from './products.js';
import cart from './cart.js';



let reducers = combineReducers({selector , list, cart});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();

