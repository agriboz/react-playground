import React from 'react';
import Grid from 'material-ui/Grid';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import { history } from '../configStore';
import { Provider } from 'react-redux';

import App from './App';
import Posts from './Posts';
import Post from './Post';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Grid container spacing={16}>
        <Route exact path="/" component={App} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:postid" component={Post} />
      </Grid>
    </Router>
  </Provider>
);

export default Root;
