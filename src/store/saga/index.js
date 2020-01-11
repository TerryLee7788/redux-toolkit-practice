import { put, takeEvery, delay } from 'redux-saga/effects';
import {
    INCREMENT,
} from '../action.config'

export function* incrementAsync () {

    console.log('incrementAsync');

    yield delay(1000)
    yield put({ type: INCREMENT })

}

export default function* rootSaga () {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}
