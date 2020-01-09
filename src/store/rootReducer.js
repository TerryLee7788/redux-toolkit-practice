import { combineReducers } from '@reduxjs/toolkit'
import count from './reducers/count';
import { counterReducer as counter } from './reducers/count';

const rootReducer = combineReducers({
    count: count.reducer,
    counter
})

export default rootReducer;
