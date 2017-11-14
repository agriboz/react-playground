import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';

import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import createSagaMiddleware from 'redux-saga';
import watchAll from './sagas';

const sagaMiddleWare = createSagaMiddleware();
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

export const history = createBrowserHistory();
const middlewares = [sagaMiddleWare, routerMiddleware(history)];

const enhancers = [applyMiddleware(...middlewares), devTools];

export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleWare.run(watchAll);
