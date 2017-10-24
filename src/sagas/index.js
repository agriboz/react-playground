import { takeEvery, all } from 'redux-saga/effects';
import { fetchPosts } from './posts';
import { fetchPost } from './post';

import { REQUEST_POST, REQUEST_POSTS} from '../actions/actionTypes';

function* watchAll() {
  yield all([
    takeEvery(REQUEST_POST, fetchPost),
    takeEvery(REQUEST_POSTS, fetchPosts),
  ]);
}

export default watchAll;
