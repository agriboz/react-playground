import * as types from './actionTypes';

export function requestPosts() {
  return {
    type: types.REQUEST_POSTS,
  };
}

export function requestPostsSucceeded(posts) {
  return {
    type: types.REQUEST_POSTS_SUCCESS,
    posts,
  };
}

export function requestPostsFailed(error) {
  return {
    type: types.REQUEST_POSTS_FAILED,
    error,
  };
}
