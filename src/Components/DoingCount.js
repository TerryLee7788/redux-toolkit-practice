import React from 'react';
import { useDispatch } from 'react-redux'
import {
    increment,
    decrement
} from '../store/actions/count';

const DoingCount = () => {

    const dispatch = useDispatch()

    return (
        <div
            style={{
                marginTop: '10px'
            }}
        >
            <div
                onClick={() => {
                    dispatch(increment())
                }}
            >
                add
            </div>
            <div
                onClick={() => {
                    dispatch(decrement())
                }}
            >
                minus
            </div>
        </div>
    )

}

export default DoingCount;
