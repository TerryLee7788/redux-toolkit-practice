import { combineReducers } from '@reduxjs/toolkit'
import count from './reducers/count';

const rootReducer = combineReducers({
    count
})

export default rootReducer;
