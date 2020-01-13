import { put, takeEvery, delay } from 'redux-saga/effects';
import counter from '../reducers/count';
import {
    INCREMENT,
} from '../action.config'

const {
    increment,
    incrementAsync,
    decrement
} = counter.actions

export function* incrementAsyncSuccess () {

    console.log('incrementAsync');

    yield delay(1000)
    yield put({ type: INCREMENT })

}

export function* incrementAsyncSuccessToolKit (action) {

    console.log('incrementAsyncSuccessToolKit: ', action);
    yield delay(1000);
    yield put({
        type: increment.type
    });

}

export default function* rootSaga () {
    yield takeEvery('INCREMENT_ASYNC', incrementAsyncSuccess);
    yield takeEvery(incrementAsync.type, incrementAsyncSuccessToolKit);
}
