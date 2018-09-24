import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'reactstrap';

export default function OneComment(props) {
    const { userImageSrc, userName, commentText, postTitle, fullPageRef } = props;

    return (
        <Media className="my-4">
            <Media left href="#">
                <Media object src={userImageSrc} className="mr-3 rounded-circle" />
            </Media>
            <Media body>
                <Media heading>{userName}</Media>
                {commentText}
            </Media>
            <div className="card mb-4">
                <a href={fullPageRef} className="btn btn-primary"><p>Read Post  to</p> {postTitle} &rarr;</a>
            </div>
        </Media>
    );
}

OneComment.propTypes = {
    userImageSrc: PropTypes.string,
    userName: PropTypes.string,
    commentText: PropTypes.string,
    fullPageRef: PropTypes.string,
    postTitle: PropTypes.string,
};

OneComment.defaultProps = {
    userImageSrc: '',
    userName: '',
    commentText: '',
    fullPageRef: '',
    postTitle: '',
};