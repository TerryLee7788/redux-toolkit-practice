import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware(rootSaga)

const middleware = [
    ...getDefaultMiddleware(),
    sagaMiddleware
];

// const preloadedState = {
//     name: 'terry'
// };

const store = configureStore({
    reducer: rootReducer,
    middleware,
    // preloadedState
});

// configureStore or createStore 執行完，再 sagaMiddleware.run(rootSaga);
sagaMiddleware.run(rootSaga);

export default store;