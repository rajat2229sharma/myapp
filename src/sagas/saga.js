// import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../state/actions/action-types";

function* randomLoadImage() {
    var value = '';
    yield fetch('https://source.unsplash.com/random/300x300').then((res) => {
        value= res.url;
        console.log(res);
    }).catch((err) =>{
        console.log(err, 'err')
    })
    yield put({ type: "LOAD_IMAGE_TWO", value });

}

function* randomLikeImage() {
    yield put({ type: "LIKE_IMAGE_TWO" });
}
function* randomDislikeImage() {
    yield put({ type: "DISLIKE_IMAGE_TWO" });
}

export function* watchLoadImage() {
    yield takeEvery(actionTypes.LOAD_IMAGE, randomLoadImage);
}
export function* watchLikeImage() {
    yield takeEvery(actionTypes.LIKE_IMAGE, randomLikeImage);
}
export function* watchDislikeImage() {
    yield takeEvery(actionTypes.DISLIKE_IMAGE, randomDislikeImage);
}
