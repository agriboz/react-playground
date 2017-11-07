import { call, put, takeLatest } from 'redux-saga/effects'

import {
  requestPostSucceeded,
  requestPostFailed
} from '../actions/postActions'

import {REQUEST_POST} from '../actions/actionTypes'

const API_ENDPOINT = `http://localhost:3001/posts/`

export function fetchPostFromServer(postid) {
  return fetch(API_ENDPOINT + postid).then(res => res.json())
}

export function* fetchPost(action) {
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
