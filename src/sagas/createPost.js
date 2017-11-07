import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';

import {
  createPostSucceeded,
  createPostFailed
} from '../actions/createPostAction';

import { CREATE_POST_SUCCEEDED } from '../actions/actionTypes';

const API_ENDPOINT = `http://localhost:3001/posts/`;

export function sendPostToServer(post) {
  console.log(post);
  return fetch(API_ENDPOINT, {method: 'POST' , body: JSON.stringify(post)}).then(res => res.json());
}

export function* createPost(action) {
  try {
    const post = yield call(sendPostToServer, action.post);
    console.log(post);
    put(createPostSucceeded(post))

  } catch (error) {
    yield put(createPostFailed(error.message));
  }
}

export function* createPostSaga() {
  yield takeLatest(CREATE_POST_SUCCEEDED, createPost);
}

export default [createPostSaga];
