
import {
    INCREMENT,
    DECREMENT
} from '../action.config'

export const increment =  () => {
    return { type: INCREMENT, payload: { name: 'terry' } }
}

export const decrement = () => {
    return { type: DECREMENT }
}
