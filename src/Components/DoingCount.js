import React from 'react';
import { useDispatch } from 'react-redux';
import counter from '../store/reducers/count';

const {
    increment,
    decrement
} = counter.actions

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
                    dispatch(increment({
                        name: 'terry'
                    }))
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
