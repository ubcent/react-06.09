import React from 'react';
import PropTypes from 'prop-types';

export default function IndexInfo(props) {
    const { indexTitle, indexInfo } = props;
    return (
        <div>
            <h2 className="my-4">{indexTitle}</h2>
            <p className="my-4">{indexInfo}</p>
        </div>
    );
}

IndexInfo.propTypes = {
    indexTitle: PropTypes.string,
    indexInfo: PropTypes.string,
};

IndexInfo.defaultProps = {
    indexTitle: '',
    indexInfo: '',
}
