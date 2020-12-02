// import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../state/actions/action-types";

function* randomLoadImage() {
    var fetchValue = '';
    yield fetch('https://source.unsplash.com/random/300x300').then((res) => {
        fetchValue= res.url;
        console.log(res);
    }).catch((err) =>{
        console.log(err, 'err')
    })
    yield put({ type: "LOAD_IMAGE_TWO", fetchValue });

}


export function* watchLoadImage() {
    yield takeEvery(actionTypes.LOAD_IMAGE, randomLoadImage);
}