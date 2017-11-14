import * as types from './actionTypes';

export function createPostRequest({ first_name, last_name }) {
  return {
    type: types.CREATE_POST_REQUEST,
    first_name,
    last_name
  };
}

export function createPostSucceeded() {
  return {
    type: types.CREATE_POST_SUCCEEDED
  };
}

export function createPostFailed(error) {
  return {
    type: types.CREATE_POST_FAILED,
    error,
  };
}
