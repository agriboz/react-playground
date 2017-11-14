import * as types from '../actions/actionTypes'

export const createPost = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_POST_REQUEST:
      return {
        ...state,
        first_name: action.first_name,
        last_name: action.last_name,
      }
    case types.CREATE_POST_SUCCEEDED:
      return state
    case types.CREATE_POST_FAILED:
      return action.error
    default:
      return state
  }
};
