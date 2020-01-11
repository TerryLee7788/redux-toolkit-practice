import {
    INCREMENT,
    DECREMENT,
    INCREMENT_ASYNC
} from '../action.config'

export const increment =  () => {
    return { type: INCREMENT, payload: { name: 'terry' } }
}

export const decrement = () => {
    return { type: DECREMENT }
}

export const incrementAsync = () => {
    return { type: INCREMENT_ASYNC }
}
