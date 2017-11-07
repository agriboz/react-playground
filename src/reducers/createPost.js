import * as types from '../actions/actionTypes'

export const createPost = (state = {}, action) => {
  console.log('sdf', action);
  switch (action.type) {
    case types.CREATE_POST_SUCCEEDED:
      console.log('heloo');
      return state
    case types.CREATE_POST_FAILED:
      return action.error
    default:
      return state
  }
}
