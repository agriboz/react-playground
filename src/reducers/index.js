import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { posts } from './posts';
import { post } from './post';
import { createPost } from './createPost'
import { uiReducer as ui } from './uiReducer';

export const rootReducer = combineReducers({
  posts,
  post,
  createPost,
  ui,
  form: reduxFormReducer,
  routing: routerReducer,
});
