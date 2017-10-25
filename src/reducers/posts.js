import * as types from '../actions/actionTypes'

export const posts = (state = {
  isFetching: true,
  posts: []
}, action) => {
  console.log(action);
  switch (action.type) {
    case types.REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        posts: []
      }
    case types.REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.posts
      }
    case types.REQUEST_POSTS_FAILED:
      return action.error
    default:
      return state
  }
}


