import React from 'react';

import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { history } from '../configStore';
import { Provider } from 'react-redux';

import App from './App';
import Posts from './Posts';
import Post from './Post';
import PostCreate from './PostCreate';


const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/posts" component={Posts} />
          <Route path="/posts/new" component={PostCreate} />
          <Route path="/posts/:postid" component={Post} />
        </Switch>
    </ConnectedRouter>
  </Provider>
);

export default Root;
