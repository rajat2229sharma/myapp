import { takeLatest, put } from "redux-saga/effects";
import * as actionTypes from "../actions/action-types";



//workers

function* workerGetImage() {
  var value = '';
  var error = false;
  yield fetch('https://source.unsplash.com/random/350x350')
    .then(data => {
      value = data.url;
    })
    .catch(err => error = true)
  yield put({ type: actionTypes.ASYNC_GET_IMAGE, value: value, error: error });
}

function* workerLikeImage() {
  yield put({ type: actionTypes.ASYNC_LIKE_IMAGE })
}

function* workerDislikeImage() {
  yield put({ type: actionTypes.ASYNC_DISLIKE_IMAGE })
}

function* workerFinishImage() {
  yield put({ type: actionTypes.ASYNC_FINISH_UNSPLASH_IMAGE })
}

function* workerResetAllState() {
  yield put({ type: actionTypes.ASYNC_RESET_ALL_STATE })
}

function* workerSetCurrentUser(data) {
  yield put({ type: actionTypes.ASYNC_SET_CURRENT_USER, data: data })
}



//watchers
export function* watcherGetImage() {
  yield takeLatest(actionTypes.GET_IMAGE, workerGetImage);
}

export function* watcherLikeImage() {
  yield takeLatest(actionTypes.LIKE_IMAGE, workerLikeImage);
}

export function* watcherDislikeImage() {
  yield takeLatest(actionTypes.DISLIKE_IMAGE, workerDislikeImage);
}

export function* watcherFinishImage() {
  yield takeLatest(actionTypes.FINISH_UNSPLASH_IMAGE, workerFinishImage);
}

export function* watcherResetAllState() {
  yield takeLatest(actionTypes.RESET_ALL_STATE, workerResetAllState);
}

export function* watcherSetCurrentUser() {
  yield takeLatest(actionTypes.SET_CURRENT_USER, workerSetCurrentUser);
}
