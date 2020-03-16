
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import selector from './categories.js';
import list from './products.js';



let reducers = combineReducers({selector , list});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();

