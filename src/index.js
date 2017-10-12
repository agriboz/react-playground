import React from 'react';
import { render } from 'react-dom';


import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';

import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import createSagaMiddleware from 'redux-saga';
import { fetchPostsSaga } from './sagas'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



const sagaMiddleWare = createSagaMiddleware();
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const middlewares = [sagaMiddleWare];

const enhancers = [applyMiddleware(...middlewares), devTools];

const store = createStore(rootReducer, compose(...enhancers));

console.log(store.getState());
const history = syncHistoryWithStore(createBrowserHistory(), store)

sagaMiddleWare.run(fetchPostsSaga)

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();
