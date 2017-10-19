import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { posts } from './posts'
import { post } from './post'

export const rootReducer = combineReducers({
  posts,
  post,
  routing: routerReducer
})
