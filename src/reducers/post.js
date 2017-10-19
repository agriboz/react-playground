import * as types from '../actions/actionTypes'

export const post = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case types.REQUEST_POST:
      return state;
    case types.REQUEST_POST_SUCCESS:
      return action.post
    case types.REQUEST_POST_FAILED:
      return action.error
    default:
      return state
  }
}


