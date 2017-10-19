import * as types from './actionTypes';

export function requestPost(postid) {
  return {
    type: types.REQUEST_POST,
    postid
  };
}

export function requestPostSucceeded(post) {
  return {
    type: types.REQUEST_POST_SUCCESS,
    post,
  };
}

export function requestPostFailed(error) {
  return {
    type: types.REQUEST_POST_FAILED,
    error,
  };
}
