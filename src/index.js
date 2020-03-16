
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.js';

import store from './store/index.js';
console.log('eeeeeeeeeeeeeeeee');

function Main() {

  return (
        <>
            <Provider store={store}>
              <App />
            </Provider>
        </>
  );
}
//https://github.com/Saja-401-advanced-javascript/class-36

ReactDOM.render(<Main />, document.getElementById('root'));