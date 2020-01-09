import React from 'react';
import { connect } from 'react-redux'
import {
    increment,
    decrement
} from '../store/actions/count';

const DoingCount = ({
    increment,
    decrement
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
                onClick={decrement}
            >
                minus
            </div>
        </div>
    )

}

const mapDispatchToProps = {
    increment,
    decrement
};

export default connect(
    null,
    mapDispatchToProps
)
(DoingCount);
