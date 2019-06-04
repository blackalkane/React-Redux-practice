import 'bootswatch/dist/flatly/bootstrap.min.css';
import './stylesheets/index.css';
import './stylesheets/animations.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

const store = createStore(
  AppReducer,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

registerServiceWorker();
