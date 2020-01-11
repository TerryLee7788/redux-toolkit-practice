import React from 'react';
import { connect } from 'react-redux'
import {
    increment,
    decrement,
    incrementAsync
} from '../store/actions/count';

const DoingCount = ({
    increment,
    decrement,
    incrementAsync
}) => {

    return (
        <div
            style={{
                marginTop: '10px'
            }}
        >
            <div
                onClick={increment}
            >
                add
            </div>

            <div
                onClick={incrementAsync}
            >
                非同步 add
            </div>
            <div
                onClick={decrement}
            >
                minus
            </div>
        </div>
    )

}

const mapDispatchToProps = {
    increment,
    decrement,
    incrementAsync
};

export default connect(
    null,
    mapDispatchToProps
)
(DoingCount);
