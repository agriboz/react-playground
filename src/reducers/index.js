import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { posts } from './posts'

export const rootReducer = combineReducers({
  posts,
  routing: routerReducer
})
