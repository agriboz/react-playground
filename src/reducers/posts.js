import * as types from '../actions/actionTypes'

export const posts = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case types.REQUEST_POSTS:
      return state;
    case types.REQUEST_POSTS_SUCCESS:
      return action.posts
    case types.REQUEST_POSTS_FAILED:
      return action.error
    default:
      return state
  }
}


