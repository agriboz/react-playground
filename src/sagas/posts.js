import { call, put, takeLatest } from 'redux-saga/effects';
import {
  requestPostsSucceeded,
  requestPostsFailed,
} from '../actions/postsActions';
import { REQUEST_POSTS } from '../actions/actionTypes';

const API_ENDPOINT = 'http://jsonplaceholder.typicode.com/posts/';

export function fetchPostsFromServer() {
  return fetch(API_ENDPOINT).then(res => res.json());
}

export function* fetchPosts() {
  try {
    const posts = yield call(fetchPostsFromServer);
    yield put(requestPostsSucceeded(posts));
  } catch (error) {
    yield put(requestPostsFailed(error.message));
  }
}

export function* fetchPostsSaga() {
  yield takeLatest(REQUEST_POSTS, fetchPosts);
}

export default [fetchPostsSaga]
