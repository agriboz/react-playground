import * as types from './actionTypes'

export function createPostSucceeded(post) {
  return {
    type: types.CREATE_POST_SUCCEEDED,
    post,
  }
}

export function createPostFailed(error) {
  return {
    type: types.CREATE_POST_FAILED,
    error,
  }
}
