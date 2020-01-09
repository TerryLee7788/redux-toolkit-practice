import {
    INCREMENT,
    DECREMENT
} from '../action.config'

function counter (state = 0, action) {
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

export default counter;
