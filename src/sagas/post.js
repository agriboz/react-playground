import { call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import {
  requestPost,
  requestPostSucceeded,
  requestPostFailed
} from '../actions/postActions'

import {REQUEST_POST} from '../actions/actionTypes'

const API_ENDPOINT = `http://jsonplaceholder.typicode.com/posts/`

export function fetchPostFromServer(postid) {
  return fetch(API_ENDPOINT + postid).then(res => res.json())
}

export function* fetchPost(action) {
  console.log(action);
  try {
    const post = yield call(fetchPostFromServer, action.postid)
    yield put(requestPostSucceeded(post))

  } catch (error) {
    yield put(requestPostFailed(error.message))
  }
}

export function* fetchPostSaga() {
  yield takeLatest(REQUEST_POST, fetchPost)
}

export default [fetchPostSaga]
