import { createSlice } from '@reduxjs/toolkit'

import {
    INCREMENT,
    DECREMENT
} from '../action.config'

export const counterReducer = (state = 0, action) => {
    console.log('action: ', action);
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

const counter = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment (state, action) {

            state += 1;
            return state

        },
        decrement (state, action) {

            state -= 1
            return state;

        }
    }
})

export default counter;
