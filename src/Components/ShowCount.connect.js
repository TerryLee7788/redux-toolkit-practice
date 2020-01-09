import React from 'react';
import {
    connect
} from 'react-redux'

const ShowCount = ({ count }) => (
    <div>count: {count}</div>
)

const mapStatetoProps = ({ count }) => {
    return { count };
}

export default connect(
    mapStatetoProps,
    null
)(ShowCount);
