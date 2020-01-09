import React from 'react';
import {
    useSelector
} from 'react-redux'

const ShowCount = () => {

    const count = useSelector(state => state.count);
    return <div>count: {count}</div>;

}

export default ShowCount
