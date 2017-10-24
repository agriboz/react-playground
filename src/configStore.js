import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';

import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import createSagaMiddleware from 'redux-saga';
import watchAll from './sagas'

const sagaMiddleWare = createSagaMiddleware();
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const middlewares = [sagaMiddleWare];

const enhancers = [applyMiddleware(...middlewares), devTools];

export const store = createStore(rootReducer, compose(...enhancers));

console.log(store.getState());
export const history = syncHistoryWithStore(createBrowserHistory(), store, {
  adjustUrlOnReplay: true,
});

sagaMiddleWare.run(watchAll)
