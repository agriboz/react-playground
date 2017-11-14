import { call, put, takeLatest } from 'redux-saga/effects';

import {
  createPostSucceeded,
  createPostFailed,
} from '../actions/createPostAction';

import {
  CREATE_POST_REQUEST,
} from '../actions/actionTypes';

const API_ENDPOINT = `http://localhost:3001/posts/`;

export function sendPostToServer({ first_name, last_name }) {
  return fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ first_name, last_name }),
  }).then(res => res.json());
}

export function* createPost(action) {
  console.log('SAGA ACTION', action);
  try {
    const createPost = yield call(sendPostToServer, {
      first_name: action.first_name,
      last_name: action.last_name
    });
    console.log(createPost);
    yield put(createPostSucceeded());
  } catch (error) {
    yield put(createPostFailed(error.message));
  }
}

export function* createPostSaga() {
  yield* takeLatest(CREATE_POST_REQUEST, createPost);
}

export default [createPostSaga];
