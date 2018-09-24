import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';

export default function OneUser(props) {
    const { imageSrc, name, pageRef } = props;

    return (
        <Media className="my-4">
            <Media left href="#">
                <Media object src={imageSrc} className="mr-3 rounded-circle" />
            </Media>
            <Media body>
                <Media heading>{name}</Media>
            </Media>
            <div className="card mb-4">
                <a href={pageRef} className="btn btn-primary">Read More &rarr;</a>
            </div>
        </Media>
    );
}

OneUser.propTypes = {
    imageSrc: PropTypes.string,
    name: PropTypes.string,
    pageRef: PropTypes.string,
};

OneUser.defaultProps = {
    imageSrc: '',
    name: '',
    pageRef: '',
};