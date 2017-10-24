import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { posts } from './posts'
import { post } from './post'
import { uiReducer as ui } from './uiReducer'

export const rootReducer = combineReducers({
  posts,
  post,
  ui,
  routing: routerReducer
})
