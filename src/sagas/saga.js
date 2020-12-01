// import { delay } from "redux-saga";
import { delay, put, takeEvery } from "redux-saga/effects";

function* ageUpAsync() {
    yield delay(4000);
    yield put({ type: "LOAD_IMAGE"});
}


export function* watchAgeUp() {
    yield takeEvery("LOAD_IMAGE", ageUpAsync);
}