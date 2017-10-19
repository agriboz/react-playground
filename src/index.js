import React from 'react';
import { render } from 'react-dom';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';

import { browserHistory } from 'react-router';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import createSagaMiddleware from 'redux-saga';
import watchAll from './sagas'

import App from './App';
import Posts from './components/Posts';
import Post from './components/Post';

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleWare = createSagaMiddleware();
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const middlewares = [sagaMiddleWare];

const enhancers = [applyMiddleware(...middlewares), devTools];

const store = createStore(rootReducer, compose(...enhancers));

console.log(store.getState());
const history = syncHistoryWithStore(createBrowserHistory(), store, {
  adjustUrlOnReplay: true,
});

sagaMiddleWare.run(watchAll)

const router = (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:postid" component={Post} />
      </div>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();
