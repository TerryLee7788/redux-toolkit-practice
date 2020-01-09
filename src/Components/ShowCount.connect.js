import React from 'react';
import {
    connect
} from 'react-redux'

const ShowCount = ({ counter }) => (
    <div>count: {counter}</div>
)

const mapStatetoProps = ({ counter }) => {
    return { counter };
}

export default connect(
    mapStatetoProps,
    null
)(ShowCount);
