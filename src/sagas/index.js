import { takeEvery, all } from 'redux-saga/effects';
import { fetchPosts } from './posts';
import { fetchPost } from './post';
import { createPost } from './createPost'

import { REQUEST_POST, REQUEST_POSTS, CREATE_POST_SUCCEEDED} from '../actions/actionTypes';

function* watchAll() {
  yield all([
    takeEvery(REQUEST_POST, fetchPost),
    takeEvery(REQUEST_POSTS, fetchPosts),
    takeEvery(CREATE_POST_SUCCEEDED, createPost),
  ]);
}

export default watchAll;
