import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/Layout/App';
import rootReducer from './reducers';

render(
  <Provider store={createStore(rootReducer, applyMiddleware(...[thunk]))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
